import BrandIcon from '@/components/BrandIcon'
import DownloadButton from '@/components/DownloadButton'
import Reveal from '@/components/Reveal'
import Showcase from '@/components/Showcase'
import SpecTerminal from '@/components/SpecTerminal'

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
    title: 'Usage, app by app',
    body: 'Download and upload for every app on your machine, measured without packet capture, plus the hosts each one has been talking to.',
    icon: (
      <>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
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
              ~5&nbsp;MB download
            </span>
            <span>
              <CheckIcon />
              No account, no telemetry
            </span>
          </Reveal>
        </div>
      </header>

      <Showcase />

      <section className="features" id="features">
        <div className="wrap">
          <div className="section-head">
            <Reveal as="span" className="kicker">
              Features
            </Reveal>
            <Reveal as="h2" delay={0.07}>
              Small app, complete picture
            </Reveal>
            <Reveal as="p" delay={0.14}>
              No dashboards to configure, no agents, no account. Install Rove and it starts telling
              you the truth about your connection.
            </Reveal>
          </div>

          {/* Each card waits for its own turn on screen, so the delay only has
              to wave in a row — hence the column index, not the card's place in
              the whole grid. The grid drops to two columns and then one on
              narrow screens, where `% 3` stops lining up with the rows; the
              worst it costs there is a 90ms hesitation nobody will clock. */}
          <div className="feature-grid">
            {FEATURES.map((feature, i) => (
              <Reveal className="feature-card" key={feature.title} scale delay={(i % 3) * 0.045}>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
              runtime, no half-gigabyte of RAM sitting idle: about 5 MB in total, quick enough to
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
    </>
  )
}
