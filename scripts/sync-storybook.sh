#!/usr/bin/env bash
#
# sync-storybook.sh — rebuild the hosted Storybooks in public/storybook/
#
#   /storybook/         the Rove UI library, built from the app repo's master
#   /storybook/tokens/  Rove Tokens, built from rove-tokens' main
#
# Like the demo, these are static snapshots: run this after a UI change lands
# on master or a token change lands on rove-tokens' main, then commit
# public/storybook/.
#
# Each Storybook builds in a temporary worktree of the remote ref, so neither
# repo's current branch or uncommitted work ends up on the site. Override with:
#   ROVE_REPO=/path/to/rove               ROVE_REF=origin/master
#   ROVE_TOKENS_REPO=/path/to/rove-tokens ROVE_TOKENS_REF=origin/main

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ROVE_REPO="${ROVE_REPO:-$SITE_DIR/../rove}"
ROVE_TOKENS_REPO="${ROVE_TOKENS_REPO:-$SITE_DIR/../rove-tokens}"
OUT_DIR="$SITE_DIR/public/storybook"

for repo in "$ROVE_REPO" "$ROVE_TOKENS_REPO"; do
  if [ ! -d "$repo/.git" ] && [ ! -f "$repo/.git" ]; then
    echo "error: repo not found at: $repo" >&2
    echo "       set ROVE_REPO / ROVE_TOKENS_REPO and re-run." >&2
    exit 1
  fi
done

git -C "$ROVE_REPO" fetch -q origin
git -C "$ROVE_TOKENS_REPO" fetch -q origin
ROVE_REF="${ROVE_REF:-origin/master}"
ROVE_TOKENS_REF="${ROVE_TOKENS_REF:-origin/main}"

WORK="$(mktemp -d)"
cleanup() {
  git -C "$ROVE_REPO" worktree remove --force "$WORK/rove" 2>/dev/null || true
  git -C "$ROVE_TOKENS_REPO" worktree remove --force "$WORK/rove-tokens" 2>/dev/null || true
  rm -rf "$WORK"
}
trap cleanup EXIT

# build <repo> <ref> <name>: check out the ref, install, and build its Storybook
# into $WORK/<name>-static.
build() {
  local repo="$1" ref="$2" name="$3"
  echo "→ building $name Storybook at $ref"
  git -C "$repo" worktree add -q --detach "$WORK/$name" "$ref"
  (
    cd "$WORK/$name"
    npm ci --silent --no-audit --no-fund
    npm run build:storybook -- --quiet --output-dir "$WORK/$name-static"
  )
}

build "$ROVE_REPO" "$ROVE_REF" rove
build "$ROVE_TOKENS_REPO" "$ROVE_TOKENS_REF" rove-tokens

# check_subpath <name>: the Storybooks are served under /storybook/, so a
# stylesheet that loads from the site root (url('/fonts/…')) 404s there and the
# pages fall back to the system font. Stop before anything is copied.
check_subpath() {
  local name="$1" found
  found="$(grep -rEo "url\(['\"]?/[^/][^)]*\)" --include='*.css' "$WORK/$name-static" || true)"
  if [ -n "$found" ]; then
    echo "error: the $name Storybook loads from the site root, which isn't there under /storybook/:" >&2
    echo "$found" >&2
    echo "       reference the file by a relative path so Vite bundles it." >&2
    exit 1
  fi
}

check_subpath rove
check_subpath rove-tokens

# version_fixed_names <name> <rev>: most of a build is named by content hash,
# but the sidebar's runtime and addons (sb-manager/, sb-addons/) and the
# preview's mocker entry keep the same name every build, and Cloudflare tells
# browsers to keep JS for 4 hours, so a resync would show a stale sidebar.
# Each is loaded only from index.html or iframe.html, so the build's commit
# goes on those references as ?v=, and a new build is a new URL.
version_fixed_names() {
  local dir="$WORK/$1-static" rev="$2" page
  for page in "$dir/index.html" "$dir/iframe.html"; do
    perl -pi -e "s#(\./(?:sb-manager|sb-addons)/[^'\"?]+\.js|\./vite-inject-mocker-entry\.js)(?=['\"])#\$1?v=$rev#g" "$page"
  done
  if grep -qE "\./(sb-manager|sb-addons)/[^'\"?]+\.js['\"]|\./vite-inject-mocker-entry\.js['\"]" "$dir/index.html" "$dir/iframe.html"; then
    echo "error: the $1 Storybook still loads a fixed-name file without a version." >&2
    exit 1
  fi
}

ROVE_REV="$(git -C "$ROVE_REPO" rev-parse --short "$ROVE_REF")"
ROVE_TOKENS_REV="$(git -C "$ROVE_TOKENS_REPO" rev-parse --short "$ROVE_TOKENS_REF")"
version_fixed_names rove "$ROVE_REV"
version_fixed_names rove-tokens "$ROVE_TOKENS_REV"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"
cp -R "$WORK/rove-static/." "$OUT_DIR/"
cp -R "$WORK/rove-tokens-static" "$OUT_DIR/tokens"

echo "✓ Storybooks synced (rove $ROVE_REV, rove-tokens $ROVE_TOKENS_REV)"
echo "  commit public/storybook/ and redeploy the site."
