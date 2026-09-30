/** @type {import('next').NextConfig} */
const nextConfig = {
  // Not a static export any more: /api/interest is a function, which an export
  // cannot carry. The page itself has no dynamic data, so Next still
  // prerenders it and Vercel serves it as a static file.
  //
  // Directory-style URLs (…/app/ → app/index.html) for the demo iframe. This
  // also puts the signup endpoint at /api/interest/ — the bare path redirects,
  // and a cross-origin preflight will not follow a redirect.
  trailingSlash: true,
  images: { unoptimized: true },
  // Next doesn't directory-index public/ subfolders, so the demo iframe's
  // /app/ request would 404. Rewrite it to the real file. This used to be
  // dev-only, back when production was a static host that indexed the folder
  // itself; now Next serves production too, so it applies everywhere.
  async rewrites() {
    return [{ source: '/app', destination: '/app/index.html' }]
  },
}

export default nextConfig
