'use client'

import type { PointerEvent, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

import Reveal from '@/components/Reveal'

/** The Rove desktop window's exact size (tauri.conf.json: 500×660, not resizable). */
const APP_W = 500
const APP_H = 660

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
    blurb: 'Connection, live traffic and devices on one calm screen, plus a QR code to share your Wi-Fi.',
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
    blurb: 'Download, upload, latency, jitter, and what your link can actually handle.',
    icon: (
      <>
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </>
    ),
  },
  {
    label: 'Devices',
    title: "Who's on your Wi-Fi",
    blurb: 'Every phone, TV and gadget on your network, named and classified.',
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
    label: 'Apps',
    title: 'What your apps are up to',
    blurb: 'Data usage for every app on your machine, and the hosts each one talks to.',
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
    label: 'Services',
    title: 'The services you rely on',
    blurb: 'Up or down, latency and a sparkline for every cloud service you track.',
    icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  },
  {
    label: 'Timeline',
    title: 'A history of your network',
    blurb: 'A day-by-day feed of what changed, from devices coming and going to connection switches.',
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
  {
    label: 'Connection',
    title: 'When something feels off',
    blurb: 'Router latency, packet loss, DNS servers and who your ISP really is.',
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
    label: 'Usage',
    title: 'Where your data goes',
    blurb: 'Daily download and upload totals that survive reboots.',
    icon: (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
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

function Rail({
  stops,
  side,
  active,
  onPick,
}: {
  readonly stops: readonly TourStop[]
  readonly side: 'left' | 'right'
  readonly active: string
  readonly onPick: (label: string) => void
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
          onClick={() => onPick(stop.label)}
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
    return () => observer.disconnect()
  }, [])

  // Keep the tour rail in sync when visitors click the app's nav directly.
  // Attached via effect (not onLoad): the iframe usually finishes loading
  // before React hydrates, so a load handler alone would never fire.
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const syncFromApp = (event: Event) => {
      // Only the app's tab buttons carry a `nav-item-<id>` class; the theme
      // toggle beside them is a plain `nav-item` and doesn't navigate, so it
      // must leave the rail's highlight alone.
      const btn = (event.target as Element | null)?.closest?.('nav button[class*="nav-item-"]')
      if (!btn) return
      const label = btn.getAttribute('aria-label') ?? ''
      // The app has tabs the tour doesn't cover (Interfaces, Settings). Landing
      // on one means no stop applies, so clear rather than strand the old one.
      setActive(TOUR.some((stop) => stop.label === label) ? label : '')
    }

    const attach = () => iframe.contentDocument?.addEventListener('click', syncFromApp)
    if (iframe.contentDocument && iframe.contentDocument.readyState !== 'loading') attach()
    iframe.addEventListener('load', attach)
    return () => {
      iframe.removeEventListener('load', attach)
      iframe.contentDocument?.removeEventListener('click', syncFromApp)
    }
  }, [])

  const goTo = (label: string) => {
    setActive(label)
    const doc = iframeRef.current?.contentDocument
    const btn = doc?.querySelector<HTMLButtonElement>(`nav button[aria-label="${label}"]`)
    btn?.click()
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
            This is the real Rove, running in your browser on sample data. Click through the tabs,
            run a speed test, poke around. It all works.
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
