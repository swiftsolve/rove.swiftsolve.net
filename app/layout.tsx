import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: './fonts/InterVariable.woff2',
  variable: '--font-inter',
  display: 'swap',
})

const questrial = localFont({
  src: './fonts/Questrial-Regular.woff2',
  variable: '--font-questrial',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rove: a fast, minimal desktop network monitor',
  description:
    'Rove shows you live traffic, speed tests, every device on your LAN, connection diagnostics and data usage, all in a tiny desktop app for Linux, macOS and Windows.',
  icons: { icon: '/favicon.png', apple: '/icon.png' },
  openGraph: {
    title: 'Rove: a fast, minimal desktop network monitor',
    description:
      'Live traffic, speed tests, LAN device discovery, diagnostics and data-usage tracking in a ~5 MB desktop app.',
    url: 'https://rove.swiftsolve.net/',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${questrial.variable}`}>
      <head>
        {/* Reveal's opening frame (opacity:0) is inlined into the static HTML,
            so without JS there is nothing to animate it back — the page would
            just be blank. Put it back, !important to beat the inline style. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
