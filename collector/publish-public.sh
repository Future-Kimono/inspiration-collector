#!/usr/bin/env bash
# Push the latest board to the public repo. Run after every collector run.
# Only ever copies index.html, finds.js and reviews.json — nothing confidential.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="${FK_BOARD_REPO:-$ROOT/../inspiration-collector}"
[ -d "$WORK/.git" ] || { echo "No clone at $WORK — run SETUP-BOARD.sh first." >&2; exit 1; }

cp "$ROOT/inspiration/board/index.html" "$WORK/index.html"
cp "$ROOT/inspiration/board/finds.js"   "$WORK/finds.js"

# Guard: refuse to publish if anything unexpected appears in the public repo.
for f in "$WORK"/*; do
  case "$(basename "$f")" in
    index.html|finds.js|reviews.json|README.md) ;;
    *) echo "ABORT: unexpected file in public repo: $(basename "$f")" >&2; exit 1 ;;
  esac
done

cd "$WORK"
if git diff --quiet && git diff --cached --quiet; then echo "no board changes"; exit 0; fi
git add index.html finds.js reviews.json
git commit -q -m "Board update $(date +%F)"
git push -q
echo "published — https://future-kimono.github.io/inspiration-collector/"
