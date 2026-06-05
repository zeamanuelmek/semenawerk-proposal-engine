#!/bin/bash
# ============================================================
# SemEnaWerk Proposal Engine — batch.sh
# Run multiple proposals sequentially with validation.
#
# Usage:
#   bash scripts/batch.sh slug1 slug2 slug3
#
# Example:
#   bash scripts/batch.sh kmt_trading tazachin poweraxis
# ============================================================

export NODE_PATH=/home/claude/.npm-global/lib/node_modules
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VALIDATE="python3 /mnt/skills/public/docx/scripts/office/validate.py"
CONVERT="python3 /mnt/skills/public/docx/scripts/office/soffice.py --headless --convert-to pdf"

cd "$DIR" || exit 1

if [ $# -eq 0 ]; then
  echo "Usage: bash scripts/batch.sh slug1 slug2 ..."
  echo ""
  echo "Available briefs:"
  ls briefs/*.json 2>/dev/null | sed 's|briefs/||;s|.json||' | sed 's/^/  /'
  exit 1
fi

PASSED=(); FAILED=()
START=$(date +%s)

for SLUG in "$@"; do
  echo ""
  echo "══════════════════════════════════════════════════"
  echo "  Building: $SLUG"
  echo "══════════════════════════════════════════════════"

  node build.js "$SLUG" || { FAILED+=("$SLUG (build error)"); continue; }

  DOCX="outputs/${SLUG}_Proposal.docx"

  echo "Validating..."
  OUT=$($VALIDATE "$DOCX" 2>&1)
  if echo "$OUT" | grep -q "PASSED"; then
    echo "✓ Validation passed"
  else
    echo "✗ Validation failed"
    echo "$OUT" | tail -5
    FAILED+=("$SLUG (validation failed)"); continue
  fi

  echo "Converting to PDF..."
  $CONVERT "$DOCX" >/dev/null 2>&1

  PDF="outputs/${SLUG}_Proposal.pdf"
  PAGES=$(pdfinfo "$PDF" 2>/dev/null | grep Pages | awk '{print $2}')

  if [ -z "$PAGES" ] || [ "$PAGES" -lt 40 ]; then
    echo "⚠ Low page count: $PAGES (expected ≥ 40)"
    FAILED+=("$SLUG (low pages: $PAGES)"); continue
  fi

  echo "✓ Done — $PAGES pages"
  PASSED+=("$SLUG ($PAGES pages)")
done

END=$(date +%s)
ELAPSED=$((END - START))

echo ""
echo "══════════════════════════════════════════════════"
echo "  BATCH COMPLETE in ${ELAPSED}s"
echo "══════════════════════════════════════════════════"
[ ${#PASSED[@]} -gt 0 ] && echo "✓ PASSED:" && for p in "${PASSED[@]}"; do echo "    $p"; done
[ ${#FAILED[@]} -gt 0 ] && echo "✗ FAILED:" && for f in "${FAILED[@]}"; do echo "    $f"; done
echo ""
echo "Files in outputs/:"
ls -lh "$DIR/outputs/"*.docx 2>/dev/null | awk '{print "  "$NF, $5}'
