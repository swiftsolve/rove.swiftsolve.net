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
      <body>{children}</body>
    </html>
  )
}
