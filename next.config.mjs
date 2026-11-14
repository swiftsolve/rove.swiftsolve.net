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
  // The landing page lives at nabilr.com/rove now, which is the only copy of
  // its code. Everything here redirects there for good (308s), path for path
  // where nabilr.com has the same thing: the Storybooks moved to
  // /rove/storybook/, and the demo is the live app on /rove itself.
  //
  // /api/interest stays served here for now: the deployed nabilr.com/rove
  // still posts its signups here until its own /api/interest (a Netlify
  // Function) ships. Once it has, the exclusion below can go.
  async redirects() {
    const NABILR = 'https://nabilr.com'
    return [
      { source: '/storybook/:path*', destination: `${NABILR}/rove/storybook/:path*`, permanent: true },
      { source: '/app/:path*', destination: `${NABILR}/rove#app`, permanent: true },
      { source: '/((?!api/).*)', destination: `${NABILR}/rove`, permanent: true },
    ]
  },
  // Next doesn't directory-index public/ subfolders, so the demo iframe's
  // /app/ request would 404. Rewrite it to the real file. This used to be
  // dev-only, back when production was a static host that indexed the folder
  // itself; now Next serves production too, so it applies everywhere. The
  // hosted Storybooks (public/storybook/) need the same.
  async rewrites() {
    return ['/app', '/storybook', '/storybook/tokens'].map((dir) => ({
      source: dir,
      destination: `${dir}/index.html`,
    }))
  },
}

export default nextConfig
