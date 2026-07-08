#!/usr/bin/env bash
#
# sync-demo.sh — rebuild the embedded Rove app demo in public/app/
#
# The landing page's live demo is a *static snapshot* of the Rove desktop app,
# built from the app's React source with its in-browser mock bridge bundled in.
# It does not update on its own — run this whenever the app's UI changes and you
# want the site to reflect it.
#
# The app repo defaults to ../rove (sibling of this site repo);
# override with:  ROVE_REPO=/path/to/rove npm run sync-demo
#
# The three build flags are load-bearing:
#   --mode development + NODE_ENV=development  keep import.meta.env.DEV true, so
#     src/dev/mockNetworkApi.ts is bundled — without it the demo has no data.
#   --target es2022                            top-level await in main.tsx needs it.

set -euo pipefail

# Resolve paths relative to this script, so it works from any CWD.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ROVE_REPO="${ROVE_REPO:-$SITE_DIR/../rove}"

# Vite needs Node 18+. If nvm is installed, switch to the version in .nvmrc so a
# stale default (e.g. Node 12) doesn't fail the build with a cryptic syntax
# error. Falls back to a clear message if the running Node is still too old.
if [ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]; then
  # shellcheck disable=SC1091
  \. "${NVM_DIR:-$HOME/.nvm}/nvm.sh"
  nvm use "$SITE_DIR" >/dev/null 2>&1 || nvm use 22 >/dev/null 2>&1 || true
fi

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0)"
if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "error: Node 18+ required, but found $(node -v 2>/dev/null || echo 'no node')." >&2
  echo "       run 'nvm use' in this directory (see .nvmrc), then re-run." >&2
  exit 1
fi

if [ ! -d "$ROVE_REPO" ]; then
  echo "error: Rove app repo not found at: $ROVE_REPO" >&2
  echo "       set ROVE_REPO=/path/to/rove and re-run." >&2
  exit 1
fi

ROVE_REPO="$(cd "$ROVE_REPO" && pwd)"
VITE_BIN="$ROVE_REPO/node_modules/vite/bin/vite.js"

if [ ! -f "$VITE_BIN" ]; then
  echo "error: vite not installed in the Rove repo ($ROVE_REPO)." >&2
  echo "       run 'npm install' there first." >&2
  exit 1
fi

OUT_DIR="$SITE_DIR/public/app"

echo "→ building Rove demo"
echo "  app repo : $ROVE_REPO"
echo "  output   : $OUT_DIR"

# Build from the app repo (so its vite config / aliases resolve), emitting into
# the site's public/app. --emptyOutDir clears the previous snapshot first.
cd "$ROVE_REPO"
NODE_ENV=development node "$VITE_BIN" build \
  --mode development \
  --target es2022 \
  --outDir "$OUT_DIR" \
  --emptyOutDir

echo "✓ demo synced — commit public/app/ and redeploy the site."
