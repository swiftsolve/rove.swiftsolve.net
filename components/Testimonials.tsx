'use client'

import Reveal from '@/components/Reveal'

export type Testimonial = {
  readonly quote: string
  readonly name: string
  readonly role: string
}

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/**
 * A slider that keeps bringing new testimonials into view: one flat track scrolls
 * left forever, pausing when you hover to read. The list is laid down twice so the
 * loop is seamless — at the halfway point the second copy sits exactly where the
 * first began. The duplicate is aria-hidden so it isn't announced twice.
 */
export default function Testimonials({ items }: { readonly items: readonly Testimonial[] }) {
  return (
    <Reveal className="testimonial-marquee">
      <div className="testimonial-track">
        {[...items, ...items].map((t, i) => (
          <div className="testimonial-card" key={i} aria-hidden={i >= items.length}>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <span className="testimonial-avatar" aria-hidden="true">
                {initials(t.name)}
              </span>
              <span className="testimonial-meta">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
