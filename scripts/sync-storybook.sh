#!/usr/bin/env bash
#
# sync-storybook.sh — rebuild the hosted Storybooks in public/storybook/
#
#   /storybook/         the Rove UI library, built from the app repo's master
#   /storybook/tokens/  Rove Tokens, built from rove-design's main
#
# Like the demo, these are static snapshots: run this after a UI change lands
# on master or a token change lands on rove-design's main, then commit
# public/storybook/.
#
# Each Storybook builds in a temporary worktree of the remote ref, so neither
# repo's current branch or uncommitted work ends up on the site. Override with:
#   ROVE_REPO=/path/to/rove               ROVE_REF=origin/master
#   ROVE_DESIGN_REPO=/path/to/rove-design ROVE_DESIGN_REF=origin/main

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ROVE_REPO="${ROVE_REPO:-$SITE_DIR/../rove}"
ROVE_DESIGN_REPO="${ROVE_DESIGN_REPO:-$SITE_DIR/../rove-design}"
OUT_DIR="$SITE_DIR/public/storybook"

for repo in "$ROVE_REPO" "$ROVE_DESIGN_REPO"; do
  if [ ! -d "$repo/.git" ] && [ ! -f "$repo/.git" ]; then
    echo "error: repo not found at: $repo" >&2
    echo "       set ROVE_REPO / ROVE_DESIGN_REPO and re-run." >&2
    exit 1
  fi
done

git -C "$ROVE_REPO" fetch -q origin
git -C "$ROVE_DESIGN_REPO" fetch -q origin
ROVE_REF="${ROVE_REF:-origin/master}"
ROVE_DESIGN_REF="${ROVE_DESIGN_REF:-origin/main}"

WORK="$(mktemp -d)"
cleanup() {
  git -C "$ROVE_REPO" worktree remove --force "$WORK/rove" 2>/dev/null || true
  git -C "$ROVE_DESIGN_REPO" worktree remove --force "$WORK/rove-design" 2>/dev/null || true
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
build "$ROVE_DESIGN_REPO" "$ROVE_DESIGN_REF" rove-design

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"
cp -R "$WORK/rove-static/." "$OUT_DIR/"
cp -R "$WORK/rove-design-static" "$OUT_DIR/tokens"

echo "✓ Storybooks synced (rove $(git -C "$ROVE_REPO" rev-parse --short "$ROVE_REF"), rove-design $(git -C "$ROVE_DESIGN_REPO" rev-parse --short "$ROVE_DESIGN_REF"))"
echo "  commit public/storybook/ and redeploy the site."
