/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  // Fully static export — deployable to any static host (the embedded Rove app
  // in public/app/ is already a static bundle).
  output: 'export',
  // Directory-style URLs (…/app/ → app/index.html). Without this, static hosts
  // (Vercel) clean-URL-redirect the iframe's /app/index.html request and it 404s.
  trailingSlash: true,
  images: { unoptimized: true },
  // Dev-only: `next dev` doesn't directory-index public/ subfolders, so the
  // demo iframe's /app/ request 404s locally (static hosts serve it fine).
  // Rewrite it to the real file so the embedded demo works in `next dev`.
  // Not included in the production export build, where rewrites don't apply.
  ...(isDev && {
    async rewrites() {
      return [{ source: '/app', destination: '/app/index.html' }]
    },
  }),
}

export default nextConfig
