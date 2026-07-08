import { useId } from 'react'

export default function BrandIcon({
  size = 24,
  gradient = false,
}: {
  size?: number
  gradient?: boolean
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
      <circle cx="24" cy="24" r="7.5" fill={paint} />
      <path
        d="M 11.98 36.02 A 17 17 0 1 1 36.02 36.02"
        fill="none"
        stroke={paint}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}
