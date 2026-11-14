'use client'

import { useEffect, useRef } from 'react'

import BrandIcon from '@/components/BrandIcon'

/**
 * The hero's app icon: the About-page tile, soft and mostly flat, with the
 * arc pressed into its face and the glint lying in that groove. It leans away
 * from the pointer like a plate on a gimbal, the corner under the pointer
 * pressing in, the tile swelling a touch, and a soft sheen catching the far
 * corner as it tips up into the light. It does not move on its own.
 *
 * The lean is written to the element every frame, outside React, so the
 * pointer moving never re-renders it. Flat and still, it has no transform at
 * all, so the mark is drawn sharp.
 *
 * Asked for less motion, or touched with a finger (a lean would stick where
 * the finger lifted), it stays flat.
 *
 * Styled by .hero-icon-* and .hero-logo in globals.css, which also point the
 * mark's arc and glint at the two filters drawn here. There is one hero on a
 * page, so their ids are fixed.
 */

/** Degrees of lean with the pointer at an edge. */
const TILT_MAX = 12
/** Viewing distance for the lean, in px. */
const TILT_PERSPECTIVE = 700
/** How much the tile swells while it leans. */
const TILT_LIFT = 0.02
/** Seconds to close most of the gap: chasing the pointer, then falling back flat. */
const TILT_FOLLOW = 0.09
const TILT_RETURN = 0.18
/** The sheen's strongest opacity: a hint of gloss, not a light. */
const SHEEN_OPACITY = 0.12

const clampToUnit = (value: number) => Math.max(-1, Math.min(1, value))

export default function HeroIcon() {
  /* The stage takes the pointer and stays put, so it can be measured; the
     plate is the only thing that moves. */
  const stageRef = useRef<HTMLDivElement>(null)
  const plateRef = useRef<HTMLDivElement>(null)
  const sheenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const plate = plateRef.current
    const sheen = sheenRef.current
    if (!stage || !plate || !sheen) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let lastFrameTime = 0
    let pointerX = 0
    let pointerY = 0
    let isPointerInside = false
    const eased = { x: 0, y: 0, presence: 0 }

    const park = () => {
      eased.x = 0
      eased.y = 0
      eased.presence = 0
      lastFrameTime = 0
      /* No transform at all, not a near-zero one, so it's drawn sharp. */
      plate.style.transform = ''
      plate.style.willChange = ''
      sheen.style.opacity = '0'
    }

    /* Runs only while the pointer is over it or it is settling back. */
    const drawFrame = (now: number) => {
      /* Capped, so a tab coming back from the background doesn't jump. */
      const secondsSinceLast = lastFrameTime ? Math.min((now - lastFrameTime) / 1000, 0.05) : 0
      lastFrameTime = now

      let targetX = 0
      let targetY = 0
      if (isPointerInside) {
        /* The stage, not the leaning plate, or its lean would feed back in. */
        const box = stage.getBoundingClientRect()
        targetX = clampToUnit(((pointerX - box.left) / box.width) * 2 - 1)
        targetY = clampToUnit(((pointerY - box.top) / box.height) * 2 - 1)
      }
      const targetPresence = isPointerInside ? 1 : 0

      /* An exponential ease over elapsed time, the same at any frame rate. */
      const easeTime = isPointerInside ? TILT_FOLLOW : TILT_RETURN
      const easeShare = secondsSinceLast ? 1 - Math.exp(-secondsSinceLast / easeTime) : 0
      eased.x += (targetX - eased.x) * easeShare
      eased.y += (targetY - eased.y) * easeShare
      eased.presence += (targetPresence - eased.presence) * easeShare

      if (!isPointerInside && eased.presence < 1e-3) {
        frame = 0
        park()
        return
      }

      plate.style.willChange = 'transform'
      /* The pointer presses its own corner in, so the near edge recedes. */
      plate.style.transform =
        `rotateX(${(-eased.y * TILT_MAX).toFixed(3)}deg) ` +
        `rotateY(${(eased.x * TILT_MAX).toFixed(3)}deg) ` +
        `scale(${(1 + TILT_LIFT * eased.presence).toFixed(4)})`
      /* The sheen sits on the far corner, the one tipping up into the light. */
      sheen.style.setProperty('--sheen-x', `${(50 - eased.x * 50).toFixed(2)}%`)
      sheen.style.setProperty('--sheen-y', `${(50 - eased.y * 50).toFixed(2)}%`)
      sheen.style.opacity = (eased.presence * SHEEN_OPACITY).toFixed(4)
      frame = requestAnimationFrame(drawFrame)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      pointerX = event.clientX
      pointerY = event.clientY
      isPointerInside = true
      if (!frame) frame = requestAnimationFrame(drawFrame)
    }
    const onPointerLeave = () => {
      isPointerInside = false
    }

    stage.addEventListener('pointermove', onPointerMove)
    stage.addEventListener('pointerleave', onPointerLeave)
    stage.addEventListener('pointercancel', onPointerLeave)
    return () => {
      stage.removeEventListener('pointermove', onPointerMove)
      stage.removeEventListener('pointerleave', onPointerLeave)
      stage.removeEventListener('pointercancel', onPointerLeave)
      cancelAnimationFrame(frame)
      park()
    }
  }, [])

  return (
    <div ref={stageRef} className="hero-icon-stage" style={{ perspective: TILT_PERSPECTIVE }}>
      <div ref={plateRef} className="hero-logo">
        <span className="hero-icon-glyph">
          <BrandIcon size={90} gradient animated />
        </span>
        <div ref={sheenRef} className="hero-icon-sheen" />
        <svg className="hero-icon-filters" width="0" height="0">
          {/*
           * The arc is pressed softly into the tile's face. Lit from above, a
           * dip's top wall is in shade and its bottom wall, facing up, catches
           * the light: a soft shadow falls inside the arc from its top edges
           * and a soft light rises inside from its bottom ones. Both stay
           * inside the shape, with nothing drawn round it, so it has no
           * outline. In the mark's own units (48 across), so it scales with it.
           */}
          <filter id="hero-icon-press" x="-20%" y="-20%" width="140%" height="140%">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.9 0 0 0 0  0 0.9 0 0 0  0 0 0.9 0 0  0 0 0 1 0"
              result="recessed"
            />
            <feComponentTransfer in="SourceAlpha" result="outside">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feOffset in="outside" dy="1.2" result="outsideDown" />
            <feGaussianBlur in="outsideDown" stdDeviation="1.4" result="shadeBlur" />
            <feFlood floodColor="#0a1430" floodOpacity="0.6" />
            <feComposite in2="shadeBlur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" result="shade" />
            <feOffset in="outside" dy="-1.2" result="outsideUp" />
            <feGaussianBlur in="outsideUp" stdDeviation="1.4" result="lightBlur" />
            <feFlood floodColor="#cfdcff" floodOpacity="0.35" />
            <feComposite in2="lightBlur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" result="light" />
            <feMerge>
              <feMergeNode in="recessed" />
              <feMergeNode in="shade" />
              <feMergeNode in="light" />
            </feMerge>
          </filter>
          {/*
           * The glint runs the groove like a slip of water: no edge of its
           * own, a soft translucent body with its ends melting into the arc,
           * a faint gleam along its top where it catches the light, and a
           * wide, faint glow round it.
           */}
          <filter id="hero-icon-glint" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="glowBlur" />
            <feColorMatrix
              in="glowBlur"
              type="matrix"
              values="0 0 0 0 0.42  0 0 0 0 0.6  0 0 0 0 1  0 0 0 0.35 0"
              result="glow"
            />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" result="bodyBlur" />
            <feColorMatrix
              in="bodyBlur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0"
              result="body"
            />
            <feOffset in="SourceAlpha" dy="-0.7" result="alphaUp" />
            <feGaussianBlur in="alphaUp" stdDeviation="0.9" result="gleamBlur" />
            <feFlood floodColor="#ffffff" floodOpacity="0.3" />
            <feComposite in2="gleamBlur" operator="in" result="gleam" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="body" />
              <feMergeNode in="gleam" />
            </feMerge>
          </filter>
        </svg>
      </div>
    </div>
  )
}
