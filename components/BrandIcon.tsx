import { useId } from 'react'

const ARC = 'M 11.98 36.02 A 17 17 0 1 1 36.02 36.02'

export default function BrandIcon({
  size = 24,
  gradient = false,
  animated = false,
}: {
  size?: number
  gradient?: boolean
  /** Breathes the dot and runs a glint along the arc (.brand-dot, .brand-glint). */
  animated?: boolean
}) {
  const gid = useId()
  const paint = gradient ? `url(#${gid})` : 'currentColor'
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {gradient && (
        <defs>
          <linearGradient id={gid} x1="24" y1="7" x2="24" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#7aa4ff" />
            <stop offset="1" stopColor="#5484f5" />
          </linearGradient>
        </defs>
      )}
      <circle className={animated ? 'brand-dot' : undefined} cx="24" cy="24" r="7.5" fill={paint} />
      <path d={ARC} fill="none" stroke={paint} strokeWidth="5" strokeLinecap="round" />
      {animated && (
        <path
          className="brand-glint"
          d={ARC}
          pathLength={100}
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}
