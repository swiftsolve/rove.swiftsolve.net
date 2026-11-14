'use client'

import { useEffect, useRef } from 'react'

/**
 * Rove's icon drawn in text, in a terminal window, alive the way the icon is
 * everywhere else: its dot breathes and a glint runs the arc from one end to
 * the other, on the same 3.6s period and curves as .brand-dot and
 * .brand-glint. The first time it comes on screen it unwinds out of a swirl:
 * the drawing starts small and twisted round its centre, more the further
 * out, and grows as it turns back straight.
 *
 * It is drawn in binary. The art is worked out from the icon's own geometry
 * each frame: the 48-unit box is laid over a grid of character cells, and
 * each cell is sampled for how much of the arc or the dot covers it. A cell
 * well inside the shape is a full-strength digit, one on its edge a faint
 * one, so the outline stays soft. Each cell keeps its own 0 or 1, and a few
 * flip every frame, so the icon reads as data running through it. The glint
 * draws the cells it is passing in a lighter blue that glows.
 *
 * It draws only while on screen. Asked for less motion, it is drawn once,
 * at rest, with no glint.
 */

/* --- the icon, in its 48-unit box (BrandIcon.tsx) --- */
const CENTRE = 24
const ARC_RADIUS = 17
const ARC_HALF_WIDTH = 2.5
/** The arc runs from its bottom-left end over the top to its bottom-right one. */
const ARC_START_DEGREES = 135
const ARC_SWEEP_DEGREES = 270
const ARC_ENDS = [
  [11.98, 36.02],
  [36.02, 36.02],
] as const
/** The dot's drawn radius, and the breath it takes (r in .brand-dot). */
const DOT_RADIUS = 7.5
const DOT_BREATH = { rest: 6.75, full: 7.8 }

/* --- the grid --- */
/**
 * The part of the 48-unit box the grid covers: the icon's ink, from the arc's
 * outer edge round to the foot of its end caps, with a unit to spare. The
 * arc is open at the foot, so the ink sits high in the box; laid over the ink
 * rather than the box, the drawing sits centred in the window.
 */
const INK = { left: 3.5, top: 3.5, width: 41, height: 36 }
const COLUMNS = 30
/**
 * Rows to keep the drawing round, from a cell's measured shape: a monospace
 * cell's height to width varies with the font the browser ends up drawing,
 * so it's measured on the page rather than assumed.
 */
const FALLBACK_CELL_RATIO = 1.9
const CELL_WIDTH = INK.width / COLUMNS
const SAMPLES = 3
/** The share of a cell the shape must cover to be inked, and to be inked fully. */
const INKED_SHARE = 0.2
const SOLID_SHARE = 0.6
/** The share of the glint's strength over a cell that draws it in the glint's blue. */
const GLINT_SHARE = 0.25
/** The share of cells whose digit flips each frame. */
const FLIP_SHARE = 0.03

/* --- the motion (.brand-dot, .brand-glint) --- */
const PERIOD = 3600
/** The glint's length and travel, on the arc measured as 100. */
const GLINT_LENGTH = 12
/** Frames a second: plenty for text, and light on the page. */
const FPS = 24
/** How long the first unwinding out of the swirl takes. */
const RESOLVE_MS = 2200
/** How far the swirl twists the drawing's edge at its start, in turns. */
const SWIRL_TURNS = 1.5
/**
 * How small the drawing starts as it swirls in, growing to full size as it
 * straightens: turned, the arc's gap swings away from the foot, and at full
 * size the arc would run past the grid's bottom edge, which fits its ink.
 */
const SWIRL_START_SCALE = 0.8

/** cubic-bezier(x1, y1, x2, y2) at progress x. */
function bezier(x1: number, y1: number, x2: number, y2: number, x: number) {
  let low = 0
  let high = 1
  let t = x
  for (let i = 0; i < 24; i++) {
    t = (low + high) / 2
    const atT = 3 * (1 - t) ** 2 * t * x1 + 3 * (1 - t) * t ** 2 * x2 + t ** 3
    if (atT < x) low = t
    else high = t
  }
  return 3 * (1 - t) ** 2 * t * y1 + 3 * (1 - t) * t ** 2 * y2 + t ** 3
}

const glintEase = (x: number) => bezier(0.45, 0, 0.2, 1, x)
const breathEase = (x: number) => bezier(0.42, 0, 0.58, 1, x)
const between = (value: number, start: number, end: number) =>
  Math.min(1, Math.max(0, (value - start) / (end - start)))

/** The glint at `phase` (0 to 1 of the period): where it lies on the arc, and how strong. */
function glintAt(phase: number) {
  /* Travels over the first 52%; fades in to 14%, holds to 28%, out by 42%. */
  const travel = glintEase(between(phase, 0, 0.52))
  const offset = 12 - 112 * travel
  const strength =
    phase < 0.14
      ? glintEase(between(phase, 0, 0.14))
      : phase < 0.28
        ? 1
        : 1 - glintEase(between(phase, 0.28, 0.42))
  return { from: -offset, to: -offset + GLINT_LENGTH, strength }
}

/** The dot's radius at `phase`: fullest 30% in. */
function dotRadiusAt(phase: number) {
  const breath = phase < 0.3 ? breathEase(phase / 0.3) : 1 - breathEase((phase - 0.3) / 0.7)
  return DOT_BREATH.rest + (DOT_BREATH.full - DOT_BREATH.rest) * breath
}

/** Where (x, y) lies on the arc (0 to 100), or null if it's off the arc's stroke. */
function arcPlace(x: number, y: number): number | null {
  const dx = x - CENTRE
  const dy = y - CENTRE
  let degrees = (Math.atan2(dy, dx) * 180) / Math.PI
  if (degrees < ARC_START_DEGREES) degrees += 360
  const along = (degrees - ARC_START_DEGREES) / ARC_SWEEP_DEGREES
  if (along <= 1 && Math.abs(Math.hypot(dx, dy) - ARC_RADIUS) <= ARC_HALF_WIDTH) return along * 100
  /* The round caps. */
  for (const [index, [endX, endY]] of ARC_ENDS.entries()) {
    if (Math.hypot(x - endX, y - endY) <= ARC_HALF_WIDTH) return index * 100
  }
  return null
}

type Tone = 'empty' | 'faint' | 'solid' | 'glint'

/**
 * The tone of every cell, row by row. `swirl` (0 to 1) is how wound up the
 * drawing is: each point is looked up turned back round the centre, by more
 * the further out it is, so the icon shows as a spiral that straightens.
 */
function drawFrame(rows: number, phase: number, isStill: boolean, swirl = 0): Tone[] {
  const glint = isStill || swirl > 0 ? null : glintAt(phase)
  const dotRadius = isStill ? DOT_RADIUS : dotRadiusAt(phase)
  const cellHeight = INK.height / rows
  const tones: Tone[] = []
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      let covered = 0
      let glinted = 0
      for (let sy = 0; sy < SAMPLES; sy++) {
        for (let sx = 0; sx < SAMPLES; sx++) {
          let x = INK.left + (column + (sx + 0.5) / SAMPLES) * CELL_WIDTH
          let y = INK.top + (row + (sy + 0.5) / SAMPLES) * cellHeight
          if (swirl > 0) {
            const scale = 1 - (1 - SWIRL_START_SCALE) * swirl
            const dx = (x - CENTRE) / scale
            const dy = (y - CENTRE) / scale
            const twist = swirl * SWIRL_TURNS * 2 * Math.PI * (Math.hypot(dx, dy) / CENTRE)
            x = CENTRE + dx * Math.cos(twist) - dy * Math.sin(twist)
            y = CENTRE + dx * Math.sin(twist) + dy * Math.cos(twist)
          }
          if (Math.hypot(x - CENTRE, y - CENTRE) <= dotRadius) {
            covered++
            continue
          }
          const place = arcPlace(x, y)
          if (place === null) continue
          covered++
          if (glint && place >= glint.from && place <= glint.to) glinted++
        }
      }
      const share = covered / (SAMPLES * SAMPLES)
      const glintShare = glint ? (glinted / (SAMPLES * SAMPLES)) * glint.strength : 0
      tones.push(
        share < INKED_SHARE
          ? 'empty'
          : glintShare >= GLINT_SHARE
            ? 'glint'
            : share < SOLID_SHARE
              ? 'faint'
              : 'solid',
      )
    }
  }
  return tones
}

const CLASS_FOR: Record<Tone, string> = {
  empty: '',
  faint: 'icon-terminal-faint',
  solid: '',
  glint: 'icon-terminal-glint',
}

/** The frame as markup, each run of cells of one tone in its own span. */
function toMarkup(rows: number, tones: Tone[], digits: Uint8Array) {
  const lines: string[] = []
  for (let row = 0; row < rows; row++) {
    let markup = ''
    let openClass = ''
    for (let column = 0; column < COLUMNS; column++) {
      const index = row * COLUMNS + column
      const tone = tones[index]
      const char = tone === 'empty' ? ' ' : String(digits[index])
      const className = CLASS_FOR[tone]
      if (className !== openClass) {
        if (openClass) markup += '</span>'
        if (className) markup += `<span class="${className}">`
        openClass = className
      }
      markup += char
    }
    if (openClass) markup += '</span>'
    lines.push(`<span style="color: ${rowColour(row, rows)}">${markup}</span>`)
  }
  return lines.join('\n')
}

/** The icon's gradient, top to bottom (BrandIcon.tsx), as the colour of each row. */
const TOP_COLOUR = [0x7a, 0xa4, 0xff]
const BOTTOM_COLOUR = [0x54, 0x84, 0xf5]

function rowColour(row: number, rows: number) {
  const share = between(row / (rows - 1), 0.15, 0.85)
  const [r, g, b] = TOP_COLOUR.map((top, channel) => Math.round(top + (BOTTOM_COLOUR[channel] - top) * share))
  return `rgb(${r} ${g} ${b})`
}

/** Flips a share of the digits, so the icon reads as data running through it. */
function flipSome(digits: Uint8Array) {
  const flips = Math.round(digits.length * FLIP_SHARE)
  for (let i = 0; i < flips; i++) {
    const index = Math.floor(Math.random() * digits.length)
    digits[index] = 1 - digits[index]
  }
}

export default function IconTerminal() {
  const ref = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    const card = ref.current
    const art = artRef.current
    if (!card || !art) return

    /* One cell's shape, from a line of digits drawn the way the art is. */
    art.textContent = '0'.repeat(COLUMNS)
    const probe = art.getBoundingClientRect()
    const lineHeight = parseFloat(getComputedStyle(art).lineHeight)
    const cellRatio = probe.width > 0 && lineHeight > 0 ? lineHeight / (probe.width / COLUMNS) : FALLBACK_CELL_RATIO
    const rows = Math.max(8, Math.round((COLUMNS * INK.height) / INK.width / cellRatio))

    const digits = Uint8Array.from({ length: rows * COLUMNS }, () => Math.round(Math.random()))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      art.innerHTML = toMarkup(rows, drawFrame(rows, 0, true), digits)
      return
    }

    let frame = 0
    let lastDrawn = 0
    let resolveStart = 0
    const draw = (now: number) => {
      frame = requestAnimationFrame(draw)
      if (now - lastDrawn < 1000 / FPS) return
      lastDrawn = now
      if (!resolveStart) resolveStart = now
      const resolved = Math.min(1, (now - resolveStart) / RESOLVE_MS)
      /* Eased in and out, so the swirl is seen turning before it settles. */
      const swirl = 1 - breathEase(resolved)
      /* The loop starts as the swirl ends, so the glint's first run is seen whole. */
      const phase = (((now - resolveStart - RESOLVE_MS) % PERIOD) + PERIOD) % PERIOD / PERIOD
      flipSome(digits)
      art.innerHTML = toMarkup(rows, drawFrame(rows, resolved < 1 ? 0.6 : phase, false, swirl), digits)
    }

    /* Until it's first seen, the swirl it will unwind out of. */
    art.innerHTML = toMarkup(rows, drawFrame(rows, 0.6, false, 1), digits)
    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame)
        if (entry.isIntersecting) frame = requestAnimationFrame(draw)
      },
      { threshold: 0.35 },
    )
    observer.observe(card)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="terminal" ref={ref} role="img" aria-label="Rove's icon, drawn in binary">
      <div className="terminal-bar">
        <span className="terminal-dot dot-r" />
        <span className="terminal-dot dot-y" />
        <span className="terminal-dot dot-g" />
        <span className="terminal-title">rove</span>
      </div>
      <div className="terminal-body icon-terminal-body">
        <pre className="icon-terminal-art" ref={artRef} aria-hidden="true" />
      </div>
    </div>
  )
}
