'use client'

import { useEffect, useRef } from 'react'

/**
 * Rove's icon drawn in text, in a terminal window, alive the way the icon is
 * everywhere else: its dot breathes and a glint runs the arc from one end to
 * the other, on the same 3.6s period and curves as .brand-dot and
 * .brand-glint. The first time it comes on screen it resolves out of noise.
 *
 * The art is worked out from the icon's own geometry each frame: the 48-unit
 * box is laid over a grid of character cells, each cell is sampled for how
 * much of the arc or the dot covers it, and that share picks a character
 * from a ramp of denser and denser glyphs. The glint lifts the cells it is
 * passing a few steps up the ramp and draws them in a lighter blue.
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
const COLUMNS = 40
const ROWS = 21
/** A monospace cell is about 1.9 times as tall as it is wide at this line height. */
const CELL_WIDTH = 48 / COLUMNS
const CELL_HEIGHT = 48 / ROWS
const SAMPLES = 3
/** Emptiest to fullest. */
const RAMP = ' .:-=+*#%@'
const NOISE = '.:-=+*#%@/\\|<>{}[]~^'

/* --- the motion (.brand-dot, .brand-glint) --- */
const PERIOD = 3600
/** The glint's length and travel, on the arc measured as 100. */
const GLINT_LENGTH = 12
/** How many steps up the ramp the glint lifts a cell it fully covers. */
const GLINT_LIFT = 5
/** Frames a second: plenty for text, and light on the page. */
const FPS = 24
/** How long the first resolve out of noise takes. */
const RESOLVE_MS = 1100

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

type Cell = { char: string; isGlint: boolean }

function drawFrame(phase: number, isStill: boolean): Cell[][] {
  const glint = isStill ? null : glintAt(phase)
  const dotRadius = isStill ? DOT_RADIUS : dotRadiusAt(phase)
  const grid: Cell[][] = []
  for (let row = 0; row < ROWS; row++) {
    const line: Cell[] = []
    for (let column = 0; column < COLUMNS; column++) {
      let covered = 0
      let glinted = 0
      for (let sy = 0; sy < SAMPLES; sy++) {
        for (let sx = 0; sx < SAMPLES; sx++) {
          const x = (column + (sx + 0.5) / SAMPLES) * CELL_WIDTH
          const y = (row + (sy + 0.5) / SAMPLES) * CELL_HEIGHT
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
      const lift = glint ? (glinted / (SAMPLES * SAMPLES)) * glint.strength * GLINT_LIFT : 0
      const step = share === 0 ? 0 : Math.min(RAMP.length - 1, Math.max(1, Math.round(share * (RAMP.length - 1) + lift)))
      line.push({ char: RAMP[step], isGlint: lift >= 1 })
    }
    grid.push(line)
  }
  return grid
}

const escape = (char: string) => (char === '<' ? '&lt;' : char === '>' ? '&gt;' : char === '&' ? '&amp;' : char)

/**
 * The frame as markup: the glint's runs of cells wrapped in a span, the rest
 * plain text. `resolved` (0 to 1) is how far out of the noise it has come:
 * each inked cell settles at its own moment, showing noise until then.
 */
function toMarkup(grid: Cell[][], resolved: number) {
  return grid
    .map((line, row) => {
      let markup = ''
      let isInGlint = false
      line.forEach((cell, column) => {
        let char = cell.char
        let isGlint = cell.isGlint
        if (resolved < 1 && char !== ' ') {
          /* A fixed moment per cell, from a hash of where it is. */
          const settlesAt = ((row * 73 + column * 151) % 97) / 97
          if (resolved < settlesAt) {
            char = NOISE[Math.floor(Math.random() * NOISE.length)]
            isGlint = false
          }
        }
        if (isGlint !== isInGlint) {
          markup += isGlint ? '<span class="icon-terminal-glint">' : '</span>'
          isInGlint = isGlint
        }
        markup += escape(char)
      })
      return isInGlint ? `${markup}</span>` : markup
    })
    .join('\n')
}

export default function IconTerminal() {
  const ref = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    const card = ref.current
    const art = artRef.current
    if (!card || !art) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      art.innerHTML = toMarkup(drawFrame(0, true), 1)
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
      /* The loop starts as the resolve ends, so the glint's first run is seen whole. */
      const phase = (((now - resolveStart - RESOLVE_MS) % PERIOD) + PERIOD) % PERIOD / PERIOD
      art.innerHTML = toMarkup(drawFrame(resolved < 1 ? 0.6 : phase, false), resolved)
    }

    /* Until it's first seen, the noise it will resolve out of. */
    art.innerHTML = toMarkup(drawFrame(0.6, false), 0)
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
    <div className="terminal" ref={ref} role="img" aria-label="Rove's icon, drawn in text">
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
