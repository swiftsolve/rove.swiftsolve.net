'use client'

import { useEffect, useRef, useState } from 'react'

/** The Rove desktop window's exact size (tauri.conf.json: 500×660, not resizable). */
const APP_W = 500
const APP_H = 660

interface TourStop {
  /** The app's nav-rail aria-label to click. */
  readonly label: string
  readonly title: string
  readonly blurb: string
}

const TOUR: readonly TourStop[] = [
  {
    label: 'Home',
    title: 'The whole picture',
    blurb: 'Connection, live traffic, capabilities and devices on one calm screen.',
  },
  {
    label: 'Speed',
    title: 'Honest speed tests',
    blurb: 'Download, upload, latency, jitter, and what your link can actually handle.',
  },
  {
    label: 'Devices',
    title: "Who's on your Wi-Fi",
    blurb: 'Every phone, TV and gadget on your network, named and classified.',
  },
  {
    label: 'Connection',
    title: 'When something feels off',
    blurb: 'Router latency, packet loss and DNS servers at a glance.',
  },
  {
    label: 'Usage',
    title: 'Where your data goes',
    blurb: 'Daily download and upload totals that survive reboots.',
  },
]

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
      const btn = (event.target as Element | null)?.closest?.('nav button[aria-label]')
      const label = btn?.getAttribute('aria-label')
      if (label && TOUR.some((stop) => stop.label === label)) setActive(label)
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
        <div className="section-head" data-reveal>
          <span className="kicker">Live demo</span>
          <h2>Don&apos;t take our word for it</h2>
          <p>
            This is the real Rove, running in your browser on sample data. Click through the tabs,
            run a speed test, poke around. It all works.
          </p>
        </div>

        <div className="showcase-grid" data-reveal>
          <div className="tour-rail" role="tablist" aria-label="App tour">
            {TOUR.map((stop) => (
              <button
                key={stop.label}
                type="button"
                role="tab"
                aria-selected={active === stop.label}
                className={`tour-stop${active === stop.label ? ' is-active' : ''}`}
                onClick={() => goTo(stop.label)}
              >
                <span className="tour-stop-title">{stop.title}</span>
                <span className="tour-stop-blurb">{stop.blurb}</span>
              </button>
            ))}
          </div>

          <div className="app-frame" ref={frameRef}>
            <div className="app-stage" ref={stageRef}>
              <iframe ref={iframeRef} src="/app/" title="Rove app demo" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
