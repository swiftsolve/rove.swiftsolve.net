'use client'

import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

/**
 * The page's scroll-linked motion, in one place.
 *
 * Everything here is *scrubbed*: each tween's playhead is tied to the scroll
 * position rather than to a clock, so nothing plays at you — it only moves
 * while you do, and it runs backwards on the way up. That's the whole budget:
 * a few pixels of parallax between layers that should read as different
 * distances, and light that follows you down the page. Entrances belong to
 * <Reveal>, which fires once and gets out of the way.
 *
 * It renders nothing and finds its targets by selector, because the sections it
 * animates are static markup in a server component. A client island that reads
 * the DOM keeps page.tsx server-rendered rather than turning the whole page
 * into a client tree for the sake of a handful of refs.
 */

/** Parallax travel, in px, measured end to end across a section's pass. */
const RAIL_DRIFT = 20
const WINDOW_DRIFT = 12
const TERMINAL_DRIFT = 26

/**
 * A section's full pass through the viewport, from its top edge entering at the
 * bottom to its bottom edge leaving at the top — the span a layer has to do its
 * whole drift in. The short scrub lets it settle a frame or two behind the
 * scrollbar, which takes the edge off a trackpad's jitter.
 */
const pass = (trigger: string) =>
  ({ trigger, start: 'top bottom', end: 'bottom top', scrub: 0.4 }) as const

export default function ScrollEffects() {
  useGSAP(() => {
    // --- always on ---------------------------------------------------------
    // These two report where you are rather than decorate the trip, so they
    // stand outside the reduced-motion gate below. Neither eases: they track
    // the scrollbar exactly.

    // The nav sits over the hero's glow at the top and over flat panels further
    // down; past the fold it firms up so text keeps its contrast against them.
    ScrollTrigger.create({
      start: 'top -72',
      end: 99999,
      toggleClass: { targets: '.site-nav', className: 'is-scrolled' },
    })

    // A hairline along the nav's bottom edge, drawn left to right as the page
    // goes by: how much is left, without a number on screen.
    gsap.to('.nav-progress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    // --- parallax ----------------------------------------------------------
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // The hero hands the page over rather than being scrolled off it: the
      // copy lags a little and dims, and the glow and dot lattice behind it
      // lag further still and fade out — the depth cue that says the light was
      // never on the same plane as the words.
      //
      // One timeline, everything starting at 0, because the two halves want
      // different curves: the drift is linear, since a parallax that changes
      // speed stops reading as distance and starts reading as an effect, while
      // the fades are eased into so the hero holds its contrast for as long as
      // it's the thing you're actually reading and only goes as it leaves.
      // The atmosphere is two pseudo-elements, so it moves through custom
      // properties they read (--atmos-y / --atmos-o in globals.css).
      gsap
        .timeline({
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
        })
        .to('.hero .wrap', { y: 72, ease: 'none' }, 0)
        .to('.hero .wrap', { opacity: 0.1, ease: 'power2.in' }, 0)
        .to('.hero', { '--atmos-y': '130px', ease: 'none' }, 0)
        .to('.hero', { '--atmos-o': 0.15, ease: 'power2.in' }, 0)

      // The demo window drifts a touch slower than the page and the spec card
      // a touch faster than its column: just enough separation for each to sit
      // at its own distance, well under the threshold where you'd call it
      // movement.
      gsap.fromTo(
        '.app-frame',
        { y: -WINDOW_DRIFT },
        { y: WINDOW_DRIFT, ease: 'none', scrollTrigger: pass('.showcase') },
      )

      gsap.fromTo(
        '.terminal',
        { y: TERMINAL_DRIFT },
        { y: -TERMINAL_DRIFT, ease: 'none', scrollTrigger: pass('.hood') },
      )

      // The closing glow comes up as you arrive instead of sitting at full
      // strength the whole way down.
      gsap.fromTo(
        '.bottom-cta',
        { '--cta-glow': 0.2 },
        {
          '--cta-glow': 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.bottom-cta',
            start: 'top bottom',
            end: 'center 70%',
            scrub: true,
          },
        },
      )
    })

    // Only in the three-column layout: below 1080px the rails collapse into a
    // row of chips above the window, where drifting them vertically against it
    // would be motion with nothing left to be parallax *to*.
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 1081px)', () => {
      gsap.fromTo(
        '.tour-rail',
        { y: RAIL_DRIFT },
        { y: -RAIL_DRIFT, ease: 'none', scrollTrigger: pass('.showcase') },
      )
    })

    // Every trigger caches the page offsets it fires at, so anything that moves
    // them has to be announced: the demo window sizes itself to its column, its
    // iframe loads lazily, and the webfonts swap in — all after these are set
    // up. Watch the page's own height and re-measure when it actually changes
    // (ScrollTrigger already handles viewport resizes itself).
    let height = document.body.offsetHeight
    const observer = new ResizeObserver(() => {
      if (document.body.offsetHeight === height) return
      height = document.body.offsetHeight
      ScrollTrigger.refresh()
    })
    observer.observe(document.body)

    return () => {
      observer.disconnect()
      mm.revert()
    }
  })

  return null
}
