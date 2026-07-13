import BrandIcon from '@/components/BrandIcon'
import DownloadButton from '@/components/DownloadButton'
import ScrollReveal from '@/components/ScrollReveal'
import Showcase from '@/components/Showcase'

const GITHUB_URL = 'https://github.com/swiftsolve/rove'
const RELEASES_URL = `${GITHUB_URL}/releases/latest`

const FEATURES = [
  {
    title: 'Live traffic, every second',
    body: "Real numbers straight from the kernel's own counters, charted the moment they change. VPN and virtual interfaces filtered out, so the line means what it says.",
    icon: (
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    ),
  },
  {
    title: 'Speed tests that tell the truth',
    body: 'Parallel streams saturate your link in both directions, then measure latency, jitter and loss, all rated against real life: 4K streaming, video calls, cloud gaming.',
    icon: (
      <>
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </>
    ),
  },
  {
    title: 'Every device, named',
    body: 'A ping sweep, mDNS listening and the ARP table catch gadgets that hide from ordinary scanners. Each one comes with vendor, hostname and what kind of thing it is.',
    icon: (
      <>
        <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
        <path d="M10 19v-3.96 3.15" />
        <path d="M7 19h5" />
        <rect width="6" height="10" x="16" y="12" rx="2" />
      </>
    ),
  },
  {
    title: 'A timeline of every change',
    body: 'A running log of network changes, from devices joining and leaving to new access points and connection switches, kept for a week.',
    icon: (
      <>
        <path d="M21 5H3" />
        <path d="M10 12H3" />
        <path d="M10 19H3" />
        <circle cx="17" cy="15" r="3" />
        <path d="m21 19-1.9-1.9" />
      </>
    ),
  },
  {
    title: 'Data usage with a memory',
    body: 'Per-day download and upload totals, accumulated from kernel counters and stored locally, so a reboot never wipes your history.',
    icon: (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </>
    ),
  },
  {
    title: 'Diagnostics in one click',
    body: "Router ping, jitter, packet loss and the DNS servers you're actually using. Know in seconds whether it's your Wi-Fi, your router, or your ISP.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="4" r="2" />
        <circle cx="12" cy="20" r="2" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="20" cy="12" r="2" />
        <path d="M12 9V6" />
        <path d="M12 15v3" />
        <path d="M9 12H6" />
        <path d="M15 12h3" />
      </>
    ),
  },
  {
    title: 'The cloud services you rely on',
    body: 'Add the cloud services you rely on, and Rove monitors each one to tell service outages from problems on your own network.',
    icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  },
  {
    title: 'Share your Wi-Fi',
    body: 'Turn your network into a QR code a phone camera reads to join. No password read aloud, and never shown in plaintext.',
    icon: (
      <>
        <rect width="5" height="5" x="3" y="3" rx="1" />
        <rect width="5" height="5" x="16" y="3" rx="1" />
        <rect width="5" height="5" x="3" y="16" rx="1" />
        <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
        <path d="M21 21v.01" />
        <path d="M12 7v3a2 2 0 0 1-2 2H7" />
        <path d="M3 12h.01" />
        <path d="M12 3h.01" />
        <path d="M12 16v.01" />
        <path d="M16 12h1" />
        <path d="M21 12v.01" />
        <path d="M12 21v-1" />
      </>
    ),
  },
  {
    title: 'Tiny, fast, private',
    body: '~5 MB installer, memory-safe Rust, deny-by-default sandbox. No account, no telemetry. Your network data never leaves your machine.',
    icon: (
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    ),
  },
]

const SPEC: readonly { key: string; value: string; tone?: 'accent' | 'positive' }[] = [
  { key: 'core', value: '100% Rust, memory-safe', tone: 'accent' },
  { key: 'ui', value: "your system's webview, no bundled browser" },
  { key: 'bridge', value: 'typed commands + events' },
  { key: 'installer', value: '~5 MB, not gigabytes' },
  { key: 'sampling', value: '1 Hz, straight from kernel counters' },
  { key: 'reacts in', value: '< 1 s to cable pulls & network hops' },
  { key: 'telemetry', value: 'none; everything stays on your machine', tone: 'positive' },
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

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <nav className="site-nav">
        <div className="wrap site-nav-inner">
          <a className="site-brand" href="#">
            <BrandIcon size={28} />
            Rove
            <span className="brand-version">v0.0.2</span>
          </a>
          <div className="site-nav-links">
            <a href="#app">Live demo</a>
            <a href="#features">Features</a>
            <a className="nav-cta" href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <span className="hero-logo" aria-hidden="true">
            <BrandIcon size={78} gradient />
          </span>
          <h1>
            Your network,<br /><span className="accent">finally visible</span>
          </h1>
          <p className="hero-sub">
            Rove is a tiny desktop app that shows you what your connection is really doing: live
            traffic, honest speed tests, every device on your Wi-Fi, and where the slowdowns
            actually come from.
          </p>
          <div className="hero-ctas">
            <DownloadButton />
          </div>
          <div className="hero-meta">
            <span>
              <CheckIcon />
              ~5&nbsp;MB download
            </span>
            <span>
              <CheckIcon />
              No account, no telemetry
            </span>
          </div>
        </div>
      </header>

      <Showcase />

      <section className="features" id="features">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker">Features</span>
            <h2>Small app, complete picture</h2>
            <p>
              No dashboards to configure, no agents, no account. Install Rove and it starts telling
              you the truth about your connection.
            </p>
          </div>

          <div className="feature-grid" data-reveal>
            {FEATURES.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <span className="feature-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hood">
        <div className="wrap hood-grid" data-reveal>
          <div className="hood-copy">
            <span className="kicker">Under the hood</span>
            <h2>
              Native to the metal,
              <br />
              not a browser in a box
            </h2>
            <p>
              A pure-Rust core reads kernel counters, routing tables and mDNS directly from the
              OS, then hands them to your system&apos;s own webview to draw. Nothing is bundled:
              no Chromium, no Node runtime, no half-gigabyte of RAM sitting idle in the
              background.
            </p>
            <p>
              On each platform Rove reaches for whatever the OS trusts most, from CoreWLAN on
              macOS to <code>ip route</code> and <code>sysfs</code> on Linux to the Windows networking APIs.
              Pull a cable or hop between networks and it catches the change before you&apos;ve
              set the laptop down.
            </p>
          </div>

          <div className="terminal" role="img" aria-label="Rove technical spec sheet">
            <div className="terminal-bar">
              <span className="terminal-dot dot-r" />
              <span className="terminal-dot dot-y" />
              <span className="terminal-dot dot-g" />
              <span className="terminal-title">rove · spec</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-prompt">
                <span className="prompt-mark">$</span> rove --about
              </div>
              {SPEC.map((row) => (
                <div className="terminal-row" key={row.key}>
                  <span className="terminal-key">{row.key}</span>
                  <span className={`terminal-value${row.tone ? ` is-${row.tone}` : ''}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="terminal-prompt">
                <span className="prompt-mark">$</span>
                <span className="terminal-cursor" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-cta">
        <div className="wrap" data-reveal>
          <h2>Stop guessing. Start seeing.</h2>
          <p>Free, open source, and installed in about ten seconds.</p>
          <div className="hero-ctas">
            <DownloadButton />
            <a
              className="cta-secondary"
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              All platforms &amp; releases
            </a>
          </div>
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
    </>
  )
}
