import type { Metadata, Viewport } from 'next'
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
      'Live traffic, speed tests, LAN device discovery, diagnostics and data-usage tracking in a small, fast desktop app.',
    url: 'https://rove.swiftsolve.net/',
    type: 'website',
  },
}

/* The browser's own chrome, told to match the page.
   - themeColor tints the address bar / status bar on mobile Chrome and Safari.
     It's --bg-app, the colour sitting directly under the sticky nav, so the
     bar and the page top read as one surface with no seam.
   - colorScheme is what desktop does something with: Chrome paints the tab's
     canvas, the scrollbars and the pre-paint flash from it, so a dark page
     stops opening on a white frame. Declared 'dark' only — the page has no
     light palette to switch to. */
export const viewport: Viewport = {
  themeColor: '#0a0b0e',
  colorScheme: 'dark',
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
