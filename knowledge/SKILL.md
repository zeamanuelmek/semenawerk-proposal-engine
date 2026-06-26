# SemEnaWerk Proposal Generator — SKILL.md

Read this completely before starting any proposal. This is the operational manual.

---

## WORKFLOW — EVERY TIME

```
1. cd /home/claude/proposal-engine
2. export NODE_PATH=/home/claude/.npm-global/lib/node_modules
3. Read the brief → fill briefs/{slug}.json
4. Write {slug}_part1.js  (cover, TOC, sections 1-4)
5. Write {slug}_part2.js  (sections 5-9)
6. Write {slug}_part3.js  (sections 10-13)
7. Write {slug}_part4.js  (sections 14-17)
8. node build.js {slug}
9. python3 /mnt/skills/public/docx/scripts/office/validate.py outputs/{slug}_Proposal.docx
10. python3 /mnt/skills/public/docx/scripts/office/soffice.py --headless --convert-to pdf outputs/{slug}_Proposal.docx
11. pdfinfo outputs/{slug}_Proposal.pdf | grep Pages
12. Spot check: render pages 1, mid, near-end as JPEGs
13. cp outputs/{slug}_Proposal.docx /mnt/user-data/outputs/
14. present_files
```

**Never skip steps 9-12. Never present without validation passing.**

---

## 17-SECTION CHECKLIST

### S1 — Company Name and Project Owner
- [ ] kvTable: name, legal form, country, location, sector, project type
- [ ] Corporate profile (2-3 paragraphs)
- [ ] Owner and strategic direction

### S2 — Experience of the Project Promoter
- [ ] Sectoral experience overview
- [ ] Years of operational experience
- [ ] Capabilities bullet list (min 5 bullets)
- [ ] Industry standing and pre-investment commitments
- [ ] How experience de-risks the project

### S3 — Project Description
- [ ] Full project overview
- [ ] Per-division breakdown (one h2 per product/service)
- [ ] Integrated model and synergies
- [ ] Vision, mission, strategic objectives
- [ ] National alignment

### S4 — Proposed Project Location
- [ ] Location kvTable: park, city, zone, region, distances
- [ ] 5+ strategic advantage sub-sections (h3 each)
- [ ] Incentives/regulatory dataTable
- [ ] Site configuration

### S5 — Product and Process Technology
- [ ] Stage-by-stage process (h3 per stage, min 4 stages)
- [ ] Machinery list dataTable (#, machine, origin, qty, cost)
- [ ] Equipment selection criteria bullets
- [ ] Product specs/grades dataTable
- [ ] Quality control + certification roadmap dataTable

### S6 — Raw Materials
- [ ] Overview with LOCAL % by weight AND by value (MANDATORY)
- [ ] Per-division/stream sourcing dataTable
- [ ] What is imported and why
- [ ] Sourcing strategy (seasonality, contracts, quality)

### S7 — Land and Shed Specifications
- [ ] Total area kvTable (m², dimensions, tenure, lease cost)
- [ ] Built-up area dataTable (zone, m², %)
- [ ] Outdoor area dataTable
- [ ] Construction and civil works
- [ ] Material flow logic

### S8 — Investment Capital and Capital Structure
- [ ] Total CAPEX kvTable (ETB, USD, split)
- [ ] Capital structure dataTable (source, ETB, %)
- [ ] Detailed CAPEX breakdown dataTable
- [ ] Allocation analysis
- [ ] Phased draw-down

### S9 — Financial Feasibility
- [ ] Assumptions kvTable (rate, tenor, grace, tax, inflation, depreciation)
- [ ] 5-year revenue forecast dataTable (by division)
- [ ] Operating cost dataTable (with ratio)
- [ ] Income statement 5-10 yr (EBITDA → net profit)
- [ ] Cash flow projections
- [ ] Key indicators dataTable (IRR, NPV, payback, DSCR vs benchmarks)
- [ ] Break-even (fixed costs, variable cost/T, contribution margin, break-even %)
- [ ] Sensitivity (min 5 scenarios including combined adverse)

### S10 — Production and Service Capacity
- [ ] Operating schedule kvTable WITH EXPLICIT CALCULATION:
     shifts × hours/shift × days/year = annual hours
- [ ] Annual capacity dataTable (per division)
- [ ] Utilization trajectory Y1→Y5 dataTable
- [ ] Output in actual tonnes per year
- [ ] Expansion potential

### S11 — Market Destination
- [ ] Domestic/export % split stated explicitly
- [ ] Export destinations dataTable (country, products, rationale)
- [ ] Export QUANTITY (tonnes) dataTable
- [ ] Export SALES VALUE (ETB) dataTable
- [ ] Domestic quantity table
- [ ] Domestic value table
- [ ] Customer segments bullet list
- [ ] Pricing strategy dataTable
- [ ] Competitive landscape dataTable

### S12 — Utility and Infrastructure
- [ ] Electrical power kvTable (base kW, peak kW, source, backup, annual cost)
- [ ] Water supply kvTable (industrial m³/day, domestic, total, storage)
- [ ] Telecommunications kvTable
- [ ] HVAC kvTable (production, specialized, admin)
- [ ] Road infrastructure kvTable (access, internal, bays, turning radius)
- [ ] Supporting services paragraph

### S13 — Implementation Schedule
- [ ] Overview kvTable (start, end, launch, total months)
- [ ] Phased dataTable (phase, activities, timeline, milestone) min 6 phases
- [ ] Critical path paragraph
- [ ] Gantt visualization dataTable

### S14 — Socio-Economic Benefit
- [ ] Economic contribution (GDP, value addition, GVC)
- [ ] Export + hard currency (USD figure mandatory)
- [ ] Import substitution (specific categories)
- [ ] Skills transfer + spillover
- [ ] DIRECT tax revenue sub-section (calculate ETB)
- [ ] INDIRECT tax revenue sub-section
- [ ] PERMANENT employment dataTable (roles, Y1, Y3, female %, salary)
- [ ] TEMPORARY employment (construction)
- [ ] INDIRECT employment (supply chain)
- [ ] Quality of life
- [ ] Income redistribution
- [ ] CSR
- [ ] Education and training
- [ ] Health and safety
- [ ] Summary dataTable

### S15 — Environmental Impact
- [ ] Framework overview (EPA category)
- [ ] Impact on Air Quality (h3)
- [ ] Impact on Water Quality (h3)
- [ ] Impact on Soil (h3)
- [ ] Impact on Fauna and Flora (h3)
- [ ] Impact on Human Health (h3)
- [ ] Other considerations (h3)
- [ ] Mitigation matrix dataTable
- [ ] Environmental management system
- [ ] Sustainable operations
- [ ] Compliance framework

### S16 — Conclusion
- [ ] Strategic merits
- [ ] Financial viability (cite IRR, DSCR, payback, NPV)
- [ ] Environmental justification
- [ ] Socio-economic justification
- [ ] Overall recommendation
- [ ] To financing bank: bullet list
- [ ] To promoter: bullet list

### S17 — Promoter's Contact Address
- [ ] Contact kvTable with [placeholder] fields
- [ ] Document control kvTable
- [ ] Engagement welcome paragraph
- [ ] Final line: italic centered "End of [Company] Project Proposal."

---

## HELPERS — QUICK REFERENCE

```js
const { p, h1, h2, h3, bullet, pageBreak, kvTable, dataTable,
        NAVY, GOLD, GREY } = require('./engine/helpers');
```

| Function | Usage |
|---|---|
| `p(text, opts)` | Body paragraph. opts: bold, italics, color, align, after, size |
| `h1(text)` | Section heading — navy bold, gold underline |
| `h2(text)` | Sub-heading — navy bold |
| `h3(text)` | Sub-sub-heading — gold bold |
| `bullet(text)` | Bullet point |
| `pageBreak()` | Page break — use at end of every section |
| `kvTable(rows, widths?)` | Key-value table. Default widths [3600, 5760] |
| `dataTable(headers, rows, widths)` | Data table. Widths required, sum ≤ 9360 |

**CRITICAL:** Always `AlignmentType.CENTER` — never numeric `1`. Causes validation failure.

---

## PART FILE PATTERN

**Part 1:**
```js
const { p, h1, h2, h3, bullet, pageBreak, kvTable, dataTable, NAVY, GOLD, GREY } = require('./engine/helpers');
const { Paragraph, TextRun, AlignmentType, BorderStyle, PageBreak } = require('docx');
const children = [];
// ... cover, TOC, sections 1-4 ...
module.exports = { children };
```

**Parts 2-4:**
```js
const { p, h1, h2, h3, bullet, pageBreak, kvTable, dataTable, NAVY, GOLD, GREY } = require('./engine/helpers');
const { children } = require('./{slug}_part{n-1}.js');
// ... sections ...
module.exports = { children };
```

---

## DECISION RULES

| Situation | Decision |
|---|---|
| Brief has typo in investment total | Reconcile via equity+loan sum. Note in decisions_made. |
| Brief mentions product casually ("also does X") | Treat as co-equal division. Never relegate. |
| Brief says "Import & Export" but lists only imports | Add logical export portfolio. Note the addition. |
| DSCR inconsistent in source | Recalculate: EBITDA ÷ Annual Debt Service. Use calculated value. |
| Lease term inconsistent (5yr vs 6yr) | Use term consistent with Debt-Free Year and PMT formula. |
| No promoter background given | Write generically around sector. Note for client to update. |
| Financial figures missing for later years | Extrapolate 10-15% growth. State assumption. |
| Revenue split across divisions not given | Split evenly. Note the assumption. |

---

## QUALITY CHECKLIST BEFORE PRESENTING

- [ ] All 17 sections present and numbered correctly
- [ ] Cover has: company name, title, location, investment, funding split, land area, date
- [ ] All tables have navy headers
- [ ] Income statement totals are internally consistent
- [ ] S10 includes the explicit hours × days × shifts calculation
- [ ] S11 has BOTH quantity AND value for exports
- [ ] S14 has separate direct and indirect tax sub-sections
- [ ] S14 employment table has female % column
- [ ] S17 has [placeholder] contact details
- [ ] validate.py returns "All validations PASSED!"
- [ ] PDF page count ≥ 40
- [ ] Spot check shows no rendering problems
- [ ] File in /mnt/user-data/outputs/
- [ ] present_files called

---

## WIDTH REFERENCE

| Columns | Width Array | Total |
|---|---|---|
| 2-col wide | [4500, 4860] | 9360 |
| 2-col narrow key | [3000, 6360] | 9360 |
| 3-col even | [3120, 3120, 3120] | 9360 |
| 4-col | [2340, 2340, 2340, 2340] | 9360 |
| 5-col income stmt | [2200, 1780, 1780, 1780, 1820] | 9360 |
| 6-col years | [2000, 1260, 1260, 1260, 1260, 1320] | 8360 |

---

## IMAGE PROMPTS & COLOR THEMES (companion deliverables)

After a proposal is built and validated, produce the companion image prompts. Claude writes
copy-paste ChatGPT prompts only — Zea generates the images and inserts them manually.

| Resource | File | Use |
|---|---|---|
| Color theme library | `knowledge/color-themes.md` | 28 sector-matched PRIMARY/ACCENT/tint themes. Pick per sector + portfolio variety. |
| Cover prompt skill | `knowledge/image-prompts/cover-prompt-skill.md` | Vertical poster cover prompt, chosen from 6 layout archetypes. Always. |
| Background prompt skill | `knowledge/image-prompts/background-prompt-skill.md` | Faded letterhead background prompt, chosen from 6 motif archetypes. Always. |
| Infographic prompt skill | `knowledge/image-prompts/infographic-prompt-skill.md` | 1–2 in-document images + placement. Only when warranted. |

**Three independent dials per client — never just defaulted:** color theme, cover layout archetype,
background motif archetype. Two proposals in the same sector should not look like the same template
re-skinned in different colors. State all three up front in one line (e.g. "Theme: Petrol + Mint.
Cover: Archetype 4. Background: Motif 3.") for Zea to confirm before generating prompts.

Order: state theme + cover archetype + background motif up front → build proposal → cover prompt →
background prompt → infographic prompt(s) if warranted. Generate cover first, lock hex codes +
product look, reuse them in background and infographics so the whole set matches.
