# rove.swiftsolve.net

Landing page for [Rove](https://github.com/swiftsolve/rove) — a fast, minimal desktop
network monitor. Built with Next.js (static export).

## The embedded app demo

The showcase section runs the **actual Rove app** in an iframe at the desktop window's
native size (545×660, from `tauri.conf.json`). `public/app/` holds a static Vite build
of the app compiled in dev mode so its in-browser mock bridge
(`src/dev/mockNetworkApi.ts`) is bundled — live traffic, speed tests, device scans and
all other interactions work with sample data, no backend needed.

This snapshot is **not live** — changes to the Rove app source do not appear here until
you rebuild it. To refresh it after app changes:

```bash
npm run sync-demo
```

That rebuilds `public/app/` from the Rove app repo (defaults to `../swiftsolve/rove`;
override with `ROVE_REPO=/path/to/rove npm run sync-demo`), then commit `public/app/`
and redeploy.

Under the hood (`scripts/sync-demo.sh`) it runs the app's Vite build with three
load-bearing flags: `--mode development` + `NODE_ENV=development` keep
`import.meta.env.DEV` true so the mock bridge is bundled (without it the demo has no
data), and `--target es2022` is needed for the top-level `await` in `main.tsx`.

## The hosted Storybooks

`public/storybook/` serves two static Storybooks:

- <https://rove.swiftsolve.net/storybook/>: Rove Components, the app's UI library, built from the Rove repo's `origin/master`.
- <https://rove.swiftsolve.net/storybook/tokens/>: Rove Tokens, built from rove-design's `origin/main`.

Like the demo, they don't update on their own. After a UI change lands on master or a token change lands on rove-design's main:

```bash
npm run sync-storybook
```

then commit `public/storybook/` and redeploy. `scripts/sync-storybook.sh` builds each one in a temporary worktree of that ref, so neither repo's checked-out branch or uncommitted work reaches the site. Override with `ROVE_REPO`, `ROVE_REF`, `ROVE_DESIGN_REPO` and `ROVE_DESIGN_REF`. Next serves both folders' `index.html` through the rewrites in `next.config.mjs`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

Deploy `out/` to any static host.
