'use client'

import { useEffect, useRef, useState } from 'react'

const WORD = 'Rove'

/**
 * The closing wordmark, its letters rising one after another from behind the
 * footer's edge when it comes into view, and again each time it returns after
 * leaving the screen.
 *
 * The letters only start out of sight once this has run (`is-armed`), so with
 * no JS, or asked for less motion, the word is simply there.
 */
export default function CtaWordmark() {
  const ref = useRef<HTMLDivElement>(null)
  const [isArmed, setIsArmed] = useState(false)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setIsArmed(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        // In once half of it is on screen, out only once it has left entirely,
        // so a visitor hovering at the edge doesn't set it flickering.
        if (entry.intersectionRatio >= 0.5) setIsShown(true)
        else if (!entry.isIntersecting) setIsShown(false)
      },
      { threshold: [0, 0.5] },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const className = ['cta-wordmark', isArmed && 'is-armed', isShown && 'is-shown']
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {[...WORD].map((letter, i) => (
        <span key={i} className="cta-letter" style={{ '--i': i } as React.CSSProperties}>
          {letter}
        </span>
      ))}
    </div>
  )
}
