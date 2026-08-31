import BrandIcon from '@/components/BrandIcon'
import DownloadButton from '@/components/DownloadButton'
import Reveal from '@/components/Reveal'
import ScrollEffects from '@/components/ScrollEffects'
import Showcase from '@/components/Showcase'
import SpecTerminal from '@/components/SpecTerminal'
import Testimonials from '@/components/Testimonials'

const GITHUB_URL = 'https://github.com/swiftsolve/rove'
const RELEASES_URL = `${GITHUB_URL}/releases/latest`
// TODO: point at the real checkout once it exists.
const PURCHASE_URL = RELEASES_URL

const PRICING_POINTS: readonly string[] = [
  'Every update in this major version, included.',
  'Every feature unlocked. No tiers, no add-ons.',
  'No subscription, no telemetry. Your data never leaves your device.',
]

type Testimonial = {
  quote: string
  name: string
  role: string
}

/**
 * The testimonials section is parked, not deleted: the markup, the component and
 * the .testimonial-* styles all stay put, and flipping SHOW_TESTIMONIALS to true
 * brings the whole thing back — handy for demoing the layout locally.
 *
 * Keep it false on anything public. The quotes below are PLACEHOLDERS — invented
 * people, not real customers. They were written to exercise the layout, and each
 * one is at least pinned to something Rove genuinely does. Shipping them as-is is
 * presenting fabricated endorsements as real customer feedback, which the FTC's
 * 2024 rule on fake testimonials treats as a civil-penalty matter. Replace all six
 * with real, attributed quotes you have permission to publish, then switch this on.
 */
const SHOW_TESTIMONIALS: boolean = false

/**
 * Pricing is parked the same way: the section, the nav link and the .price-*
 * styles all stay put, and flipping this back to true restores them. Note that
 * PURCHASE_URL still points at the releases page — wire up the real checkout
 * before switching this on.
 */
const SHOW_PRICING: boolean = false

const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'My uploads crawled every evening and I’d assumed it was my plan. The per-app breakdown showed a backup client pushing to the cloud the whole time. Ten minutes to find something I’d lived with for months.',
    name: 'Priya Nadkarni',
    role: 'Freelance video editor',
  },
  {
    quote:
      'I opened it to poke around and it hasn’t left my second monitor since. Connection, live traffic and every device on one screen — I don’t keep four router tabs open any more.',
    name: 'Marcus Boone',
    role: 'Home lab tinkerer',
  },
  {
    quote:
      'It puts jitter and packet loss next to the throughput numbers, which is the part most speed tests skip. Matches what I measure on the wire, and that’s half my job.',
    name: 'Lena Fischer',
    role: 'Remote SRE',
  },
  {
    quote:
      'Calls kept breaking up and nothing obvious was wrong. The diagnostics page put the packet loss at my own router rather than the ISP — it was a dying powerline adapter.',
    name: 'Diego Ramos',
    role: 'Product designer',
  },
  {
    quote:
      'It reads the counters locally and nothing leaves the machine. No account, no telemetry, and I can see exactly what it touches. I don’t say that about much software.',
    name: 'Aisha Coleman',
    role: 'Security engineer',
  },
  {
    quote:
      'Paid for it once and got on with my day. No account, no renewal email six months later. A small download that does one job properly.',
    name: 'Tom Whitfield',
    role: 'Small studio owner',
  },
]

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function CircleCheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <nav className="site-nav">
        <div className="wrap site-nav-inner">
          <a className="site-brand" href="#">
            <BrandIcon size={28} />
            Rove
            <span className="brand-version">v0.0.2</span>
          </a>
          <div className="site-nav-links">
            <a href="#app">Live demo</a>
            {SHOW_PRICING && <a href="#pricing">Pricing</a>}
            <a className="nav-cta" href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </div>
        </div>
        {/* Filled left to right as the page goes by; ScrollEffects drives it. */}
        <span className="nav-progress" aria-hidden="true" />
      </nav>

      {/* The hero is already on screen when the page loads, so it deals itself
          in on mount rather than waiting for a scroll that never comes. */}
      <header className="hero">
        <div className="wrap">
          <Reveal as="span" className="hero-logo" onMount aria-hidden={true}>
            <BrandIcon size={78} gradient />
          </Reveal>
          <Reveal as="h1" onMount delay={0.07}>
            Your network,<br /><span className="accent">finally visible</span>
          </Reveal>
          <Reveal as="p" className="hero-sub" onMount delay={0.14}>
            Rove is a tiny desktop app that shows you what your connection is really doing: live
            traffic, honest speed tests, every device on your Wi-Fi, and where the slowdowns
            actually come from.
          </Reveal>
          <Reveal className="hero-ctas" onMount delay={0.21}>
            <DownloadButton />
          </Reveal>
          <Reveal className="hero-meta" onMount delay={0.28}>
            <span>
              <CheckIcon />
              Small download
            </span>
            <span>
              <CheckIcon />
              No account, no telemetry
            </span>
          </Reveal>
        </div>
      </header>

      <Showcase />

      {SHOW_TESTIMONIALS && (
        <section className="testimonials" id="testimonials">
          <div className="wrap">
            <div className="section-head">
              <Reveal as="span" className="kicker">
                Testimonials
              </Reveal>
              <Reveal as="h2" delay={0.07}>
                Quietly running on
                <br />
                a lot of desks
              </Reveal>
              <Reveal as="p" delay={0.14}>
                People who were tired of guessing about their own connection, and
                tired of paying a subscription to keep guessing.
              </Reveal>
            </div>

            <Testimonials items={TESTIMONIALS} />
          </div>
        </section>
      )}

      {SHOW_PRICING && (
        <section className="pricing" id="pricing">
          <div className="wrap">
            <div className="section-head">
              <Reveal as="span" className="kicker">
                Pricing
              </Reveal>
              <Reveal as="h2" delay={0.07}>
                Pay once. It&apos;s yours.
              </Reveal>
              <Reveal as="p" delay={0.14}>
                One flat price, paid once. No subscription, no account, no upsell. Rove is yours to
                keep, with free updates through the current major version.
              </Reveal>
            </div>

            <Reveal className="price-card" scale delay={0.07}>
              <span className="price-badge">Perpetual license</span>
              <div className="price-amount">
                <span className="price-currency">$</span>
                <span className="price-value">20</span>
              </div>
              <span className="price-note">One-time payment</span>

              <ul className="price-list">
                {PRICING_POINTS.map((point) => (
                  <li key={point}>
                    <CircleCheckIcon />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                className="cta-primary price-buy"
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy now
              </a>
              <a
                className="price-trial"
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                or start a free 30-day trial
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <section className="hood">
        {/* SpecTerminal sits this one out: it already waits for the card to be
            on screen and then types itself in. */}
        <div className="wrap hood-grid">
          <Reveal className="hood-copy">
            <span className="kicker">Under the hood</span>
            <h2>
              Tiny and fast,
              <br />
              private by default
            </h2>
            <p>
              A pure-Rust core reads kernel counters and routing tables straight from the OS,
              then hands them to your system&apos;s own webview to draw. No Chromium, no Node
              runtime, no half-gigabyte of RAM sitting idle: a small download, quick enough to
              catch a cable pull before you&apos;ve set the laptop down.
            </p>
            <p>
              Private by construction, not by setting. No account, no telemetry, a deny-by-default
              sandbox, and every number measured on your machine and kept there.
            </p>
          </Reveal>

          <SpecTerminal />
        </div>
      </section>

      <section className="bottom-cta">
        <div className="wrap">
          <Reveal as="h2">Stop guessing. Start seeing.</Reveal>
          <Reveal as="p" delay={0.07}>
            The download takes ten seconds. The answers start immediately.
          </Reveal>
          <Reveal className="hero-ctas" delay={0.14}>
            <DownloadButton />
          </Reveal>
          <Reveal
            as="a"
            className="cta-link"
            delay={0.21}
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            All platforms &amp; releases <span aria-hidden="true">&rarr;</span>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a className="footer-brand" href="#">
            <BrandIcon size={26} gradient />
            Rove
          </a>
          <span className="footer-note">© 2026 SwiftSolve. All rights reserved.</span>
          <span className="footer-links">
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
              Releases
            </a>
            <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noopener noreferrer">
              Report an issue
            </a>
          </span>
        </div>
      </footer>

      {/* Renders nothing: the page's scroll-linked motion, set up once the
          sections above are in the DOM. */}
      <ScrollEffects />
    </>
  )
}
