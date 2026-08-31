/**
 * The site's one GSAP instance, with its plugins registered exactly once.
 *
 * Registration has to happen before the first ScrollTrigger is created, and
 * doing it per component is how one of them ends up forgetting. Everything that
 * animates imports gsap from here instead of from the package.
 *
 * `useGSAP` is registered too: it hands every tween a component-scoped
 * gsap.context, so unmounting a component kills its tweens and its
 * ScrollTriggers with it — and StrictMode's double effect in dev doesn't leave
 * a second copy of each one running.
 */
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export { gsap, ScrollTrigger, useGSAP }
