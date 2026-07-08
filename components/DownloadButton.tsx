'use client'

import { useEffect, useState } from 'react'

const RELEASES_URL = 'https://github.com/swiftsolve/rove/releases/latest'

/** Primary download CTA whose label follows the visitor's OS. */
export default function DownloadButton() {
  const [os, setOs] = useState<string | null>(null)

  useEffect(() => {
    const ua = `${navigator.userAgent} ${navigator.platform ?? ''}`
    if (/Mac/i.test(ua)) setOs('macOS')
    else if (/Win/i.test(ua)) setOs('Windows')
    else if (/Linux/i.test(ua)) setOs('Linux')
  }, [])

  return (
    <a className="cta-primary" href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {os ? `Download for ${os}` : 'Download Rove'}
    </a>
  )
}
