/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export — deployable to any static host (the embedded Rove app
  // in public/app/ is already a static bundle).
  output: 'export',
  // Directory-style URLs (…/app/ → app/index.html). Without this, static hosts
  // (Vercel) clean-URL-redirect the iframe's /app/index.html request and it 404s.
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
