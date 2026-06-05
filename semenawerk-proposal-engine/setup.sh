#!/bin/bash
# ============================================================
# SemEnaWerk Proposal Engine — setup.sh
# Run this at the start of every new Claude session.
# Clones the repo and installs everything in ~30 seconds.
#
# Usage (paste into Claude computer tool):
#   bash /home/claude/setup.sh
#
# Or from scratch:
#   curl -sL https://raw.githubusercontent.com/YOUR_USERNAME/semenawerk-proposal-engine/main/setup.sh | bash
# ============================================================

set -e

REPO="https://github.com/YOUR_USERNAME/semenawerk-proposal-engine.git"
TARGET="/home/claude/proposal-engine"
NODE_MODULES="/home/claude/.npm-global/lib/node_modules"

echo "SemEnaWerk Proposal Engine — Setup"
echo "═══════════════════════════════════"

# ─── CLONE OR PULL ───────────────────────────────────────────
if [ -d "$TARGET/.git" ]; then
  echo "→ Updating existing repo..."
  cd "$TARGET" && git pull --quiet
else
  echo "→ Cloning repo..."
  git clone --quiet "$REPO" "$TARGET"
fi

cd "$TARGET"
echo "✓ Repo ready at $TARGET"

# ─── CHECK NODE MODULES ──────────────────────────────────────
if [ ! -d "$NODE_MODULES/docx" ]; then
  echo "→ Installing docx library..."
  npm install -g docx@9.6.1 --quiet
  echo "✓ docx installed"
else
  echo "✓ docx already installed"
fi

# ─── SET NODE PATH ───────────────────────────────────────────
export NODE_PATH="$NODE_MODULES"
echo "✓ NODE_PATH set"

# ─── COPY SKILL FILE ─────────────────────────────────────────
SKILL_DIR="/mnt/skills/user/proposal-generator"
if [ -d "$SKILL_DIR" ]; then
  cp knowledge/SKILL.md "$SKILL_DIR/SKILL.md" 2>/dev/null && echo "✓ Skill file updated" || echo "⚠ Could not update skill file (read-only mount)"
fi

# ─── CREATE OUTPUTS DIR ──────────────────────────────────────
mkdir -p "$TARGET/outputs"
echo "✓ Outputs directory ready"

# ─── SMOKE TEST ──────────────────────────────────────────────
echo ""
echo "→ Smoke testing engine..."
NODE_PATH="$NODE_MODULES" node -e "
  const h = require('./engine/helpers');
  const fns = Object.keys(h).filter(k => typeof h[k] === 'function');
  console.log('  helpers.js: ' + fns.join(', '));
  console.log('  ✓ Engine OK');
"

# ─── DONE ────────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════"
echo "  Setup complete. Ready to build."
echo "═══════════════════════════════════════"
echo ""
echo "Build a proposal:"
echo "  cd $TARGET"
echo "  export NODE_PATH=$NODE_MODULES"
echo "  node build.js {client_slug}"
echo ""
echo "Batch build:"
echo "  bash scripts/batch.sh slug1 slug2 slug3"
echo ""
echo "Available briefs:"
ls briefs/*.json 2>/dev/null | sed 's|briefs/||;s|.json||' | sed 's/^/  /' || echo "  (none yet — add briefs/{slug}.json)"
