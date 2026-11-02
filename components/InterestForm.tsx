'use client'

import { useState, type FormEvent } from 'react'

// Trailing slash included: the site sets `trailingSlash`, so the bare path
// answers with a redirect, and a cross-origin preflight will not follow one.
const INTEREST_URL = '/api/interest/'

type Status = 'idle' | 'sending' | 'done' | 'error'

/** Primary CTA: gauges interest in Rove, one email at a time. */
export default function InterestForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setStatus('sending')
    try {
      const res = await fetch(INTEREST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.get('email'), website: data.get('website') }),
      })
      if (res.ok) {
        setStatus('done')
        return
      }
      const body = await res.json().catch(() => null)
      setMessage(body?.error ?? 'Something went wrong. Try again?')
    } catch {
      setMessage('Couldn’t reach us. Check your connection and try again.')
    }
    setStatus('error')
  }

  if (status === 'done') {
    return (
      <div className="interest-done" role="status">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
        Thanks, we&apos;ll be in touch.
      </div>
    )
  }

  return (
    <form className="interest" onSubmit={onSubmit}>
      <div className="interest-row">
        <input
          className="interest-input"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-label="Email address"
          disabled={status === 'sending'}
        />
        {/* Honeypot: off-screen and out of the tab order, so only bots fill it. */}
        <input
          className="interest-trap"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <button
          className="cta-primary interest-submit"
          type="submit"
          disabled={status === 'sending'}
          aria-busy={status === 'sending' || undefined}
        >
          {status === 'sending' ? (
            <span className="interest-spinner" aria-hidden="true" />
          ) : (
            // Lucide's bell, at the label's size and the app's 1.75 stroke.
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
          )}
          {status === 'sending' ? 'Sending' : 'Notify me'}
        </button>
      </div>
      {status === 'error' && (
        <div className="interest-error" role="alert">
          {message}
        </div>
      )}
    </form>
  )
}
