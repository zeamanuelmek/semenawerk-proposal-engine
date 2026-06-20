# SemEnaWerk Proposal Engine

Professional investment proposal generator for Ethiopian industrial companies.
Produces bankable **50–75 page .docx proposals** following the 17-section DBE/EIC template.

Built for **SemEnaWerk Design Agency** by Zeamanuel (Zea), Addis Ababa.

---

## Quick Start (in a new Claude session)

```bash
# 1. Clone and set up (run once per session)
git clone https://github.com/zeamanuelmek/semenawerk-proposal-engine.git /home/claude/proposal-engine
cd /home/claude/proposal-engine
bash setup.sh

# 2. Build a proposal
node build.js {client_slug}
```

That's it. The setup script handles everything else.

---

## Repository Structure

```
semenawerk-proposal-engine/
│
├── build.js              ← Master assembler — run this
├── setup.sh              ← One-command session setup
│
├── engine/
│   └── helpers.js        ← ALL styling functions (never recreate)
│
├── briefs/
│   └── example.json      ← Schema reference + working example
│
├── knowledge/
│   ├── SKILL.md                        ← Operational guide for Claude
│   ├── proposal-template-structure.md  ← Full 17-section checklist
│   ├── helpers-reference.md            ← Every function documented
│   └── past-proposals-reference.md     ← Patterns and lessons learned
│
├── scripts/
│   └── batch.sh          ← Run multiple proposals at once
│
└── outputs/              ← Generated .docx files land here
```

---

## For a New Proposal

### Step 1 — Create the brief JSON
```bash
cp briefs/example.json briefs/{client_slug}.json
# Fill in your client's data
```

### Step 2 — Build content part files
Create 4 files in the repo root:
```
{client_slug}_part1.js   → Cover, TOC, Sections 1-4
{client_slug}_part2.js   → Sections 5-9
{client_slug}_part3.js   → Sections 10-13
{client_slug}_part4.js   → Sections 14-17
```

### Step 3 — Build and validate
```bash
export NODE_PATH=/home/claude/.npm-global/lib/node_modules
node build.js {client_slug}
python3 /mnt/skills/public/docx/scripts/office/validate.py outputs/{client_slug}_Proposal.docx
```

### Step 4 — Batch mode (multiple proposals)
```bash
bash scripts/batch.sh client_a client_b client_c
```

---

## Styling System

| Element | Style |
|---|---|
| Primary color | Navy `#1F3864` |
| Accent color | Gold `#BF9000` |
| Body font | Calibri 11pt, justified |
| Page size | A4 (12240 × 15840 twips) |
| Margins | 1440 twips (1 inch) all sides |

---

## Completed Proposals

| Company | Sector | Pages | Investment |
|---|---|---|---|
| WAKA General Trading PLC | Industrial import | 41 | ETB 100M |
| K M T Trading PLC | Agro-processing | 61 | ETB 200M |
| PowerAxis Metal Engineering | Steel manufacturing | 82 | ETB 500M |
| Tazachin Textile Recycling | Textile recycling | 62 | ETB 205M |
| MMI (Mengsteab Mobility) | Vehicle assembly | ~65 | ETB 300M |

---

## In Claude.ai

This engine lives inside the **SemEnaWerk Proposal Factory** Project.
Say **"Build this"** with a brief attached to start a new proposal.
Say **"Continue"** to resume an incomplete proposal.
