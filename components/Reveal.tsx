'use client'

import type { ElementType, ReactNode } from 'react'
import { useRef } from 'react'

import { gsap, useGSAP } from '@/lib/gsap'

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
 *
 * The hidden opening frame is CSS, not an inline style: `[data-reveal]` in
 * globals.css. That keeps the static HTML free of style attributes, lets the
 * noscript block in layout.tsx put everything back, and lets a reduced-motion
 * request switch the whole effect off in the stylesheet — before any JS runs,
 * so there is no window in which content could be stranded invisible.
 */

/** Matches --ease-out in globals.css. */
const EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)'
const DURATION = 0.72
/**
 * Trip as soon as a sliver of the element clears the fold, rather than waiting
 * on a share of a tall card — the equivalent of watching for its top edge to
 * reach 88% of the way down the viewport.
 */
const START = 'top 88%'

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
  as?: 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'a'
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
  const ref = useRef<HTMLElement>(null)
  const Tag = as as ElementType

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const mm = gsap.matchMedia()

      // Asked for less motion: nothing runs. The stylesheet has already left
      // this element at its finished state, so there is nothing to undo either.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          ...(scale && { scale: 1 }),
          duration: DURATION,
          delay,
          ease: EASE_OUT,
          // Drop the hook first, then the transform GSAP was driving: with the
          // attribute gone the CSS opening frame no longer matches, so the
          // element needs no inline styles to hold it open and leaves no
          // stray compositing layer behind.
          onComplete: () => {
            el.removeAttribute('data-reveal')
            gsap.set(el, { clearProps: 'all' })
          },
          ...(onMount ? {} : { scrollTrigger: { trigger: el, start: START, once: true } }),
        })
      })

      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className} data-reveal={scale ? 'scale' : ''} {...rest}>
      {children}
    </Tag>
  )
}
