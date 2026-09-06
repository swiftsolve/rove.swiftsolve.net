'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * Scroll reveal: the element fades and rises into place the first time it comes
 * into view, then stays put.
 *
 * Each element watches for itself. A group's wave comes from handing its
 * members increasing `delay`s, never from a trigger on the container — a grid
 * several screens tall would otherwise deal its whole deck the moment its top
 * edge cleared the fold, and everything past the first row would be sitting
 * there finished by the time you scrolled down to it.
 *
 * So `delay` is only ever right for members that arrive together, i.e. a group
 * that fits on a screen. Rows of a tall grid each get delay 0 and wave in on
 * their own.
 *
 * Renders as `as` with `className` straight through, so it drops in where the
 * plain element was and the CSS keeps matching — no wrapper to break `>` or
 * `:nth-child()` rules.
 */

const TAGS = {
  div: motion.div,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  a: motion.a,
} as const

/** Matches --ease-out in globals.css. */
const EASE_OUT = [0.16, 1, 0.3, 1] as const
const RISE = 20
const DURATION = 0.72

type Props = {
  children: ReactNode
  className?: string
  /** Seconds to hold back, for dealing in a group that arrives together. */
  delay?: number
  /** Panels carry a touch of scale: an object arriving, not words settling. */
  scale?: boolean
  /**
   * Play on mount instead of waiting to be scrolled to. For the hero, which is
   * already on screen when the page loads — there is no scroll coming to
   * trigger it, so on-view would just mean "visible from the first frame".
   */
  onMount?: boolean
  as?: keyof typeof TAGS
  href?: string
  target?: string
  rel?: string
  'aria-hidden'?: boolean
}

export default function Reveal({
  children,
  className,
  delay = 0,
  scale = false,
  onMount = false,
  as = 'div',
  ...rest
}: Props) {
  const Tag = TAGS[as]

  /**
   * Asked for less motion: the tween collapses to an instant snap, and
   * globals.css pins [data-reveal] visible outright so the element is already
   * there on the first paint — before this, or any, JS runs.
   *
   * Deliberately *not* a render-time branch handing back a different element.
   * This hook reads a media query through useState during render, so it is
   * false on the server and true on such a visitor's very first client render;
   * branching on it changed which attributes the element carried between the
   * two, which is a hydration mismatch. React does not patch mismatched
   * attributes up, so the server's opacity:0 stayed on content that no longer
   * had an animation to clear it — reduced motion meant an invisible page.
   *
   * Only `initial` is serialised into the SSR markup, so anything keyed to this
   * hook has to stay out of it. `transition` is read by motion at animation
   * time and never reaches the DOM, which makes it safe to vary here.
   */
  const reduced = useReducedMotion()

  const shown = { opacity: 1, y: 0, ...(scale && { scale: 1 }) }

  return (
    <Tag
      className={className}
      // Hook for the no-JS fallback in layout.tsx. Nothing else styles off it.
      data-reveal=""
      initial={{ opacity: 0, y: RISE, ...(scale && { scale: 0.985 }) }}
      {...(onMount
        ? { animate: shown }
        : {
            whileInView: shown,
            // `once` so it never replays on the way back up; `amount` trips as
            // soon as a sliver clears the fold rather than waiting on a share
            // of a tall card.
            viewport: { once: true, amount: 0.15 },
          })}
      transition={reduced ? { duration: 0, delay: 0 } : { duration: DURATION, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
