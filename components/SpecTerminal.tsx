'use client'

import { useEffect, useRef, useState } from 'react'

const COMMAND = 'rove --about'

const SPEC: readonly { key: string; value: string; tone?: 'accent' | 'positive' }[] = [
  { key: 'core', value: '100% Rust, memory-safe', tone: 'accent' },
  { key: 'ui', value: "your system's webview, no bundled browser" },
  { key: 'bridge', value: 'typed commands + events' },
  { key: 'installer', value: '~5 MB, not gigabytes' },
  { key: 'sampling', value: '1 Hz, straight from kernel counters' },
  { key: 'reacts in', value: '< 1 s to cable pulls & network hops' },
  { key: 'telemetry', value: 'none; everything stays on your machine', tone: 'positive' },
]

const CHAR_MS = 55
/** Beat between the command landing and its first line of output. */
const RUN_MS = 260
const ROW_MS = 80

/**
 * The spec sheet, played as a session: the command types itself a character at
 * a time, then the rows print like output. It waits until the card is actually
 * on screen, so a visitor who scrolls down doesn't arrive after the show.
 *
 * Every row is always in the DOM and merely transparent until its turn — if
 * they mounted as they printed, the card would grow and shove the section's
 * centred layout around mid-animation.
 */
export default function SpecTerminal() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [typed, setTyped] = useState(0)
  const [rows, setRows] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reduced motion: no session, just the finished sheet.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(COMMAND.length)
      setRows(SPEC.length)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (typed < COMMAND.length) {
      const t = setTimeout(() => setTyped((n) => n + 1), CHAR_MS)
      return () => clearTimeout(t)
    }
    if (rows < SPEC.length) {
      const t = setTimeout(() => setRows((n) => n + 1), rows === 0 ? RUN_MS : ROW_MS)
      return () => clearTimeout(t)
    }
  }, [started, typed, rows])

  const commandDone = typed >= COMMAND.length
  const done = commandDone && rows >= SPEC.length

  return (
    <div className="terminal" ref={ref} role="img" aria-label="Rove technical spec sheet">
      <div className="terminal-bar">
        <span className="terminal-dot dot-r" />
        <span className="terminal-dot dot-y" />
        <span className="terminal-dot dot-g" />
        <span className="terminal-title">rove · spec</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-prompt">
          <span className="prompt-mark">$</span>
          {/* text and cursor share one flex item, or the row's 8px gap would
              strand the cursor away from the character just typed */}
          <span className="terminal-command">
            {COMMAND.slice(0, typed)}
            {!done && <span className="terminal-cursor is-typing" aria-hidden="true" />}
          </span>
        </div>
        {SPEC.map((row, i) => (
          <div className={`terminal-row${i < rows ? ' is-shown' : ''}`} key={row.key}>
            <span className="terminal-key">{row.key}</span>
            <span className={`terminal-value${row.tone ? ` is-${row.tone}` : ''}`}>
              {row.value}
            </span>
          </div>
        ))}
        <div className={`terminal-prompt${done ? ' is-shown' : ''}`}>
          <span className="prompt-mark">$</span>
          {done && <span className="terminal-cursor" aria-hidden="true" />}
        </div>
      </div>
    </div>
  )
}
