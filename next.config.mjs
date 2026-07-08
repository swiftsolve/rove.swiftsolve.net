/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export — deployable to any static host (the embedded Rove app
  // in public/app/ is already a static bundle).
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
