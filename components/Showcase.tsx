'use client'

import type { PointerEvent, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

import Reveal from '@/components/Reveal'

/** The Rove desktop window's exact size (tauri.conf.json: 545×650, not resizable). */
const APP_W = 545
const APP_H = 650

interface TourStop {
  /** The app's nav-rail aria-label to click. */
  readonly label: string
  readonly title: string
  readonly blurb: string
  /** The glyph the app's own nav rail uses for this tab, so the two agree. */
  readonly icon: ReactNode
}

const TOUR: readonly TourStop[] = [
  {
    label: 'Home',
    title: 'The whole picture',
    blurb: 'Connection, live traffic, usage and devices at a glance, plus a Wi\u2011Fi QR\u00a0code.',
    icon: (
      <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </>
    ),
  },
  {
    label: 'Speed',
    title: 'Honest speed tests',
    blurb: 'Download, upload and latency, what your link can handle, and past\u00a0results.',
    icon: (
      <>
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </>
    ),
  },
  {
    label: 'Connection',
    title: 'When something feels off',
    blurb: 'Your path to the internet, link by link, down to your ISP and\u00a0DNS.',
    // The app's own hub-and-spoke glyph — custom, with no Lucide equivalent.
    icon: (
      <>
        <line x1="12" y1="6" x2="12" y2="10" />
        <line x1="12" y1="14" x2="12" y2="18" />
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="14" y1="12" x2="18" y2="12" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="4" r="2" />
        <circle cx="12" cy="20" r="2" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="20" cy="12" r="2" />
      </>
    ),
  },
  {
    label: 'Devices',
    title: "Who's on your Wi-Fi",
    blurb: 'Every phone, TV and gadget on your network,\u00a0named.',
    icon: (
      <>
        <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
        <path d="M10 19v-3.96 3.15" />
        <path d="M7 19h5" />
        <rect width="6" height="10" x="16" y="12" rx="2" />
      </>
    ),
  },
  {
    label: 'Services',
    title: 'The services you rely on',
    blurb: 'Up or down and latency for each service, with an outage\u00a0timeline.',
    icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  },
  {
    label: 'Apps',
    title: 'What your apps are up to',
    blurb: 'Data used by each app, and the hosts it talks\u00a0to.',
    icon: (
      <>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </>
    ),
  },
  {
    label: 'Usage',
    title: 'Where your data goes',
    blurb: 'Download and upload for today and the past\u00a0week.',
    icon: (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </>
    ),
  },
  {
    label: 'Timeline',
    title: 'A history of your network',
    blurb: 'What changed on your network, day by\u00a0day.',
    icon: (
      <>
        <path d="M21 5H3" />
        <path d="M10 12H3" />
        <path d="M10 19H3" />
        <circle cx="17" cy="15" r="3" />
        <path d="m21 19-1.9-1.9" />
      </>
    ),
  },
]

/** The stops flanking the window: four down its left side, four down its right. */
const LEFT_STOPS = TOUR.slice(0, 4)
const RIGHT_STOPS = TOUR.slice(4)

/** Feed the cursor's position within a stop into CSS vars so the hover glow
 *  (.tour-stop::before) can centre its gradient there. Written straight to the
 *  element's style — no React state — so a move never triggers a re-render. */
function trackPointer(event: PointerEvent<HTMLButtonElement>) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
  el.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
}

/** On the narrow layout the stops are one horizontally scrolling row of chips,
 *  and a chip focused (by Tab, or a tap that hands focus back) can sit half off
 *  either end. Scroll the row — only the row, never the page — until the chip
 *  and its focus ring (1px at a 2px offset) clear the row's edges. On the wide
 *  layout the wrapper is display:contents and doesn't overflow, so it's a no-op. */
function revealStop(stop: HTMLElement) {
  const row = stop.closest<HTMLElement>('.tour-rails')
  if (!row || row.scrollWidth <= row.clientWidth) return

  const edge = 4
  const box = row.getBoundingClientRect()
  const chip = stop.getBoundingClientRect()
  const delta =
    chip.left < box.left + edge
      ? chip.left - box.left - edge
      : chip.right > box.right - edge
        ? chip.right - box.right + edge
        : 0
  if (!delta) return

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  row.scrollBy({ left: delta, behavior: still ? 'auto' : 'smooth' })
}

function Rail({
  stops,
  side,
  active,
  onPick,
}: {
  readonly stops: readonly TourStop[]
  readonly side: 'left' | 'right'
  readonly active: string
  /** `byPointer`: a click or tap, rather than Enter/Space (which fire a click
   *  with detail 0). Decides whether the focus handed back shows a ring. */
  readonly onPick: (label: string, stop: HTMLElement, byPointer: boolean) => void
}) {
  return (
    <div
      className={`tour-rail is-${side}`}
      role="tablist"
      aria-label={side === 'left' ? 'App tour' : 'App tour, continued'}
    >
      {stops.map((stop) => (
        <button
          key={stop.label}
          type="button"
          role="tab"
          aria-selected={active === stop.label}
          className={`tour-stop${active === stop.label ? ' is-active' : ''}`}
          onClick={(event) => {
            revealStop(event.currentTarget)
            onPick(stop.label, event.currentTarget, event.detail > 0)
          }}
          onFocus={(event) => revealStop(event.currentTarget)}
          onPointerMove={trackPointer}
        >
          {/* The border-light layer: a masked gradient ring that brightens where
              the cursor is. Its own element because ::before carries the interior
              glow and ::after the active bar. */}
          <span className="tour-stop-edge" aria-hidden="true" />
          <span className="tour-stop-title">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {stop.icon}
            </svg>
            {stop.title}
          </span>
          <span className="tour-stop-blurb">{stop.blurb}</span>
        </button>
      ))}
    </div>
  )
}

/**
 * Embeds the real Rove web app (public/app/ — the Vite bundle running against
 * its in-browser mock bridge) at the desktop window's native size, with a tour
 * rail that drives the app's own navigation. The iframe is same-origin, so the
 * tour buttons simply click the app's nav rail for you — and clicks made inside
 * the app keep the rail's highlight in sync.
 */
export default function Showcase() {
  const frameRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [active, setActive] = useState('Home')

  // Scale the fixed-size window down only when the column is narrower than it.
  useEffect(() => {
    const frame = frameRef.current
    const stage = stageRef.current
    if (!frame || !stage) return

    const fit = () => {
      const scale = Math.min(1, frame.clientWidth / APP_W)
      stage.style.transform = scale < 1 ? `scale(${scale})` : ''
      frame.style.height = `${Math.round(APP_H * scale)}px`
    }

    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(frame)

    // Backstop for browsers without overflow: clip, where the narrow frame is
    // still a (hidden) scroll container: if the app's focus moves scroll it,
    // put it straight back, so the window never slides out of its frame.
    const pin = () => {
      if (frame.scrollTop || frame.scrollLeft) frame.scrollTo(0, 0)
    }
    frame.addEventListener('scroll', pin)
    return () => {
      observer.disconnect()
      frame.removeEventListener('scroll', pin)
    }
  }, [])

  // Keep the tour rail in sync with the app however it navigates: its nav rail,
  // or a card that opens a tab (Usage, Devices…). The app marks the current
  // tab's rail button aria-current="page", so watch for that rather than for
  // clicks. Attached via effect (not onLoad): the iframe usually finishes
  // loading before React hydrates, so a load handler alone would never fire.
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let observer: MutationObserver | undefined

    const syncFromApp = () => {
      const current = iframe.contentDocument?.querySelector('nav button[aria-current="page"]')
      if (!current) return
      const label = current.getAttribute('aria-label') ?? ''
      // The app has tabs the tour doesn't cover (Interfaces, Settings). Landing
      // on one means no stop applies, so clear rather than strand the old one.
      setActive(TOUR.some((stop) => stop.label === label) ? label : '')
    }

    const attach = () => {
      const body = iframe.contentDocument?.body
      if (!body) return
      observer?.disconnect()
      // childList too, since the app may not have rendered its nav yet.
      observer = new MutationObserver(syncFromApp)
      observer.observe(body, { subtree: true, childList: true, attributeFilter: ['aria-current'] })
      syncFromApp()
    }

    if (iframe.contentDocument && iframe.contentDocument.readyState !== 'loading') attach()
    iframe.addEventListener('load', attach)
    return () => {
      iframe.removeEventListener('load', attach)
      observer?.disconnect()
    }
  }, [])

  const goTo = (label: string, stop: HTMLElement, byPointer: boolean) => {
    setActive(label)
    const doc = iframeRef.current?.contentDocument
    const btn = doc?.querySelector<HTMLButtonElement>(`nav button[aria-label="${label}"]`)
    if (!doc || !btn) return

    // On navigation the app moves focus to the new page's heading (its
    // route-change pattern for screen readers). Right for a visitor using the
    // app, but here the tour drove the click, and losing focus into the iframe
    // would strand a keyboard visitor mid-tour. Hand it back to the stop they
    // picked. The app focuses within a microtask of the click; the listener
    // lapses shortly after, so a re-pick of the current stop (no navigation,
    // no focus move) can't leave it waiting to yank a later click out of the app.
    //
    // That hand-back is a script focus coming out of a script focus, so browsers
    // (Safari on a tap especially) show it as :focus-visible — a ring on a chip
    // the visitor only tapped. A pointer pick marks the stop quiet until it
    // blurs or a key is pressed on it, and the CSS skips the ring meanwhile.
    const keepFocus = () => {
      if (byPointer) {
        stop.dataset.quietFocus = ''
        const wake = () => {
          delete stop.dataset.quietFocus
          stop.removeEventListener('blur', wake)
          stop.removeEventListener('keydown', wake)
        }
        stop.addEventListener('blur', wake)
        stop.addEventListener('keydown', wake)
      }
      stop.focus({ preventScroll: true })
    }
    doc.addEventListener('focusin', keepFocus, { once: true })
    setTimeout(() => doc.removeEventListener('focusin', keepFocus), 100)
    btn.click()
  }

  return (
    <section className="showcase" id="app">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="kicker">
            Live demo
          </Reveal>
          <Reveal as="h2" delay={0.07}>
            Don&apos;t take our word for it
          </Reveal>
          <Reveal as="p" delay={0.14}>
            This is the real Rove app, running in your browser on sample data. Click through the
            tabs, run a speed test, poke around.
          </Reveal>
        </div>

        <Reveal className="showcase-grid">
          {/* Both rails come before the window in the DOM so the eight stops are
              one uninterrupted tab sequence, and so the narrow layout stacks
              them above the app without any grid reordering. The wrapper is
              display:contents on wide screens (the rails flank the window as
              grid items) and the scroll container on narrow ones, where both
              rails' chips run together as a single row. */}
          <div className="tour-rails">
            <Rail stops={LEFT_STOPS} side="left" active={active} onPick={goTo} />
            <Rail stops={RIGHT_STOPS} side="right" active={active} onPick={goTo} />
          </div>

          <div className="app-frame" ref={frameRef}>
            <div className="app-stage" ref={stageRef}>
              <iframe ref={iframeRef} src="/app/" title="Rove app demo" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
