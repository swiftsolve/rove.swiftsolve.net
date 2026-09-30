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
        <svg
          className="interest-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
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
        <button className="cta-primary interest-submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'I’m interested'}
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
