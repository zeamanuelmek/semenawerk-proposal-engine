# Past Proposals Reference

Patterns, decisions, and lessons learned from completed proposals. Reference this before starting a new proposal to avoid reinventing patterns that already work well.

---

## Completed Proposals

| Company | Sector | Pages | Investment | Key Feature |
|---|---|---|---|---|
| WAKA General Trading PLC | Industrial chemicals + spare parts import | 41 | ETB 100M | 50/50 equity/loan; Geda SEZ Dukem |
| K M T Trading PLC | Agro-processing (3 divisions) | 61 | ETB 200M | Animal feed + nutritious food + coffee; Adama IP |
| PowerAxis Metal Engineering PLC | Steel manufacturing (4 divisions) | 82 | ETB 500M | PEB + trailers + industrial equipment + wind towers; Kilinto |
| Tazachin Textile Recycling S.C | Textile recycling | 62 | ETB 205M (DBE lease) | Chemical-free; gin waste + garment waste; IPDC Bahir Dar |
| MMI (Mengsteab Mobility Industries) | Vehicle assembly | ~65 | ETB 300M | CKD assembly; Kilinto; heavy + light-duty |

---

## Decision Patterns

### When the brief is ambiguous on a third product
**Situation:** Brief says "also part of our projects" or mentions a product casually.
**Decision:** Treat as co-equal division. Ethiopian coffee is always elevated to strategic pillar — it's the country's most valuable agro-export. Never relegate it to a footnote.
**Example:** KMT brief mentioned coffee as a side note. It became a full co-equal division generating ETB 100M Y5 revenue.

### When the investment total has a typo
**Situation:** Brief shows ETB "200,000,0000.00" (extra zero) or similar.
**Decision:** Reconcile via sum check: equity amount + loan amount = correct total. State the reconciliation in Section 8 under a `_reconciliation_note`.
**Example:** KMT brief showed ETB 200,000,0000 — reconciled to 200,000,000 because 60M equity + 140M loan = 200M.

### When the brief says "Import & Export" but only lists imports
**Decision:** Add a logical export portfolio for the sector. For agro-processing, typical exports are to UAE, Saudi Arabia, Sudan, Kenya, Somalia, Djibouti. For industrial products, East African and COMESA markets. Note the addition in `decisions_made` in the JSON.

### When DSCR is inconsistent in a source document
**Decision:** Always calculate from scratch: EBITDA ÷ Annual Debt Service (PMT). Use the calculated figure. Note the correction.
**Example:** Tazachin source quoted both 12.8× and 14.3× in different places. Calculated: 742,800 ÷ 58,040 = 12.8×.

### When the lease term is inconsistent
**Situation:** Document says "5 years" in most places but "6 years" in one place.
**Decision:** Use the term that is consistent with the Debt-Free Year claim and PMT calculation. Always verify by running the PMT formula.

### When a brief has no promoter background detail
**Decision:** Write generically around their sector. Focus on: years in the relevant trading/commercial space, supplier relationships developed, regulatory navigation experience, financial management experience. Note in Section 17 that specific details should be inserted by the promoter.

---

## Financial Modeling Patterns

### Standard Ethiopian Industrial Loan Parameters (when not specified)
```
Interest rate: 17% (standard DBE commercial rate)
Tenor: 8 years
Grace period: 24 months
Tax rate: 30%
Inflation: 18%
Exchange rate: use most recent available
```

### DBE Lease Parameters (for machinery lease structure)
```
Interest rate: 18%
Tenor: 5 years (no grace period is standard for DBE lease)
PMT formula: PV × r / (1 − (1+r)^−n)
Ownership transfer: upon full repayment
```

### DSCR calculation
```
DSCR = EBITDA ÷ Annual Debt Service
Annual Debt Service = Interest + Principal repayment (not just interest)
DBE minimum: 1.5×
Good: >1.8×
Outstanding: >3×
```

### Revenue ramp-up defaults (when brief doesn't specify)
```
Year 1: 40-50% capacity utilization
Year 2: 55-65%
Year 3: 70-78%
Year 4: 80-85%
Year 5: 85-90%
```

### EBITDA margin benchmarks by sector
```
Agro-processing: 15-25% (high raw material costs)
Industrial manufacturing: 20-28%
Textile recycling: 85-90% (near-zero raw material cost)
Coffee roasting: 30-45%
Vehicle assembly (CKD): 18-25%
```

---

## Content Patterns That Work Well

### Section 3 — Multi-division synergy paragraph
Always include a "circular value chain" or "shared infrastructure" paragraph that explains how the divisions benefit from each other. For agro-processing: byproducts from food processing become inputs to feed production. For industrial: shared engineering, fabrication, logistics across divisions. This paragraph consistently strengthens the business case.

### Section 4 — Location advantages structure
The strongest location sections cover: (1) corridor access for logistics, (2) industrial park infrastructure quality, (3) proximity to customers AND raw materials, (4) workforce availability, (5) regulatory/fiscal incentives table. All five sub-sections should be present.

### Section 9 — Sensitivity analysis
Always test at least these five scenarios:
1. Base case
2. Revenue −10%
3. Revenue −15% or −20%
4. Cost +10%
5. Combined adverse (revenue down + cost up simultaneously)

The combined adverse scenario is what lenders look at most. Make sure DSCR stays above 1.3× even in the combined scenario.

### Section 14 — Socio-Economic Benefit depth
This section is consistently under-written in first drafts. The template requires ALL of these sub-sections:
- Economic Contribution (GDP, value addition, GVC)
- Export + hard currency
- Import substitution (specific categories)
- Skills transfer + spillover
- Direct tax revenue (calculate the ETB figure)
- Indirect tax revenue
- Permanent employment table (with female %)
- Temporary employment (construction phase)
- Indirect employment (supply chain)
- Quality of life
- Income redistribution
- CSR
- Education and training
- Health and safety
- Summary table

Failing to include all sub-sections is the most common reason a proposal falls short of 50 pages.

### Section 15 — Environmental impact
The Ethiopian EPA categories matter to lenders. Always establish the category early:
- Category A: Full EIA required (chemical processes, large scale)
- Category B: Simplified EIA (most manufacturing)
- Chemical-free operations are almost always Category B

For clean/green projects (recycling, agro-processing without chemical inputs), emphasize the POSITIVE environmental contributions alongside the standard impact/mitigation matrix.

---

## Styling Decisions That Were Made

### Tables with many columns (5+)
When a table has 5+ columns, reduce column widths to fit. Common patterns:
- 5-col income statement: [2200, 1700, 1700, 1700, 1700] = 9000 total
- 6-col with year columns: [2000, 1200, 1200, 1200, 1200, 1360] = total 8160

Never exceed 9360 total width — this is the text area at 1440 margins on A4.

### Section numbers in headings
Use this format exactly:
- `h1("1. Company Name and Project Owner")`
- `h2("1.1 Company Identification")`
- `h3("14.6.1 Direct Tax Revenue")`

No variations. No Roman numerals. No parentheses.

### Table caption format
Always place a bold paragraph ABOVE the table:
```js
p("Table 5.1 — Major Machinery & Equipment List", { bold: true, after: 120 }),
dataTable(...)
```

The `after: 120` (instead of 160) creates tighter spacing between the caption and the table.

### pageBreak placement
Always at the END of each section, BEFORE the next h1:
```js
// ... last content of section 4
pageBreak()
);

children.push(
  h1("5. Product and Process Technology"),
```

---

## Common Issues and Fixes

| Issue | Cause | Fix |
|---|---|---|
| Validation fails with "jc value '1'" | Used numeric alignment (`align: 1`) | Use `AlignmentType.CENTER` |
| Node can't find docx module | NODE_PATH not set | `export NODE_PATH=/home/claude/.npm-global/lib/node_modules` |
| Document is under 40 pages | Sections too thin | Expand Section 2, Section 12, Section 14 |
| Tables misaligned | Widths don't add up | Recalculate — sum must equal the declared total |
| Part file error "children is not defined" | Wrong require path | Check the chain: part2 requires part1, part3 requires part2 |
| `require('./engine/helpers')` fails | Wrong working directory | Always `cd /home/claude/proposal-engine` before running node |

---

## Reusable Phrases by Section

### Section 2 (Promoter Experience) — useful phrases
- "This sectoral experience translates directly into capability for the proposed project, where success depends on each of these competency areas."
- "The promoter team's experience translates into specific de-risking factors for the proposed project."
- "Together, these capabilities position [Company] as a credible and capable sponsor of the proposed investment."

### Section 3 (Project Description) — national alignment paragraph
- "This multi-dimensional alignment with national priorities provides strategic relevance that extends beyond the project's commercial returns."
- "The project aligns with multiple strands of Ethiopian national development policy: industrialization agenda, import substitution priority, employment generation imperative, export development strategy."

### Section 9 (Financial) — sensitivity analysis conclusion
- "Sensitivity testing confirms resilience under adverse scenarios. Even under combined adverse conditions, [DSCR metric] remains above the [lender] minimum threshold, demonstrating the project's fundamental financial robustness."

### Section 16 (Conclusion) — final verdict structure
Always end with a clear, unambiguous recommendation followed by the specific action items. Lenders read this section first — it should be the strongest writing in the document.

---

## Sector-Specific Notes

### Agro-processing (food, feed, coffee)
- Always mention food safety certifications: ISO 22000, HACCP, GMP, halal for Middle East exports
- Coffee division: emphasize Ethiopia's specialty coffee origin story — it's a major differentiator
- Animal feed: mention the poultry and dairy sector growth driving demand
- Nutritious food: children and elderly are underserved segments — frame as social impact + commercial opportunity

### Industrial manufacturing (steel, PEB, trailers)
- Wind tower division is strategically very strong given Ethiopia's renewable energy push
- Kilinto Industrial Park is the preferred location for heavy industry (Addis proximity + logistics)
- Import substitution story: most steel structures and vehicles are currently imported

### Textile recycling (Tazachin model)
- Chemical-free = Category B EIA = faster approval
- Gin waste as near-zero cost raw material is the key financial driver
- Gate fee income from garment waste is INCOME not cost — make this very clear
- GRS certification unlocks the EU export market — this is the premium growth story

### Vehicle assembly (CKD model)
- Ethiopia's electric vehicle policy (2024 gasoline import ban) creates urgency
- CKD assembly captures 25-40% of vehicle value domestically vs full import
- After-sales service is as important as the vehicle sale — always build this division in
