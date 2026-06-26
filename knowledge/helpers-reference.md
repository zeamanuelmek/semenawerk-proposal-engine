# Helpers Reference — engine/helpers.js

The single source of truth for all styling functions. Always import from here. Never recreate these functions in part files.

```js
const { p, h1, h2, h3, bullet, pageBreak, kvTable, dataTable,
        NAVY, GOLD, GREY, LIGHT_BLUE, LIGHT_GOLD, LIGHT_GREY } = require('./engine/helpers');
```

---

## Color Constants

| Constant | Hex | Usage |
|---|---|---|
| `NAVY` | `#1F3864` | H1, H2 text; table headers; cover company name |
| `GOLD` | `#BF9000` | H1 border; H3 text; footer/header borders; cover slogan |
| `LIGHT_BLUE` | `#D9E2F3` | kvTable left column fill |
| `LIGHT_GOLD` | `#F4E8C8` | Occasional highlight (rare) |
| `GREY` | `#595959` | Body text color when colored; footer page numbers |
| `LIGHT_GREY` | `#F2F2F2` | Alternating table row fill (even-indexed rows) |

---

## p() — Body Paragraph

```js
p(text, opts = {})
```

**Options:**
| Key | Type | Default | Effect |
|---|---|---|---|
| `bold` | boolean | false | Bold text |
| `italics` | boolean | false | Italic text |
| `color` | hex string | default | Text color (e.g. `NAVY`) |
| `align` | AlignmentType | JUSTIFIED | Text alignment |
| `after` | number | 160 | Space after paragraph (twips) |
| `size` | number | 22 | Font size in half-points (22 = 11pt) |

**Examples:**
```js
p("Standard body paragraph — justified by default.")

p("Table caption text.", { bold: true, after: 120 })

p("Italic note about assumptions.", { italics: true })

p("End of document.", { italics: true, align: AlignmentType.CENTER, after: 0 })

p("SECTION HEADER STYLE", { bold: true, color: NAVY, size: 24 })
```

**CRITICAL:** When using `align`, always use `AlignmentType.CENTER` — never the number `1`. Using a numeric alignment value causes docx validation failure.

---

## h1() — Section Heading

```js
h1("1. Company Name and Project Owner")
```

Renders as: Navy 16pt bold, gold underline border below. Used for the 17 numbered sections.

---

## h2() — Sub-Heading

```js
h2("1.1 Company Identification")
```

Renders as: Navy 13pt bold. Used for numbered sub-sections.

---

## h3() — Sub-Sub-Heading

```js
h3("14.6.1 Direct Tax Revenue")
```

Renders as: Gold 11.5pt bold. Used for triple-decimal sub-sections.

---

## bullet() — Bullet Point

```js
bullet("Gin waste supply: signed MoUs with 11 ginneries across ANRS")
bullet("Garment waste supply: agreements with Kombolcha Textiles and IPDC factories")
```

Renders as: bullet character (•) with 720 left indent, 360 hanging indent.

---

## pageBreak() — Page Break

```js
pageBreak()
```

Always call this at the end of every section (before the next h1). Never omit page breaks — they control the document flow and prevent sections running together.

---

## kvTable() — Key-Value Table

```js
kvTable(rows, widths = [3600, 5760])
```

Two-column table. Left column: navy bold text, light blue fill. Right column: normal text.

**Parameters:**
- `rows`: array of `[key, value]` pairs
- `widths`: optional array of two numbers in twips. Default [3600, 5760] = total 9360

**Example:**
```js
kvTable([
  ["Company Name", "K M T Trading PLC"],
  ["Legal Form", "Private Limited Company (PLC)"],
  ["Total Investment", "ETB 200,000,000"],
  ["Funding Structure", "30% Equity / 70% Bank Loan"]
])

// Custom widths (narrower key column):
kvTable([
  ["Total CAPEX", "ETB 205,425,000"],
  ["DBE Lease (80%)", "USD 1,100,000 = ETB 181,500,000"]
], [3000, 6360])
```

---

## dataTable() — Multi-Column Data Table

```js
dataTable(headers, rows, widths)
```

Multi-column table with navy header row and alternating light grey rows.

**Parameters:**
- `headers`: array of strings for the header row
- `rows`: array of arrays — each inner array is one data row
- `widths`: REQUIRED array of column widths in twips. Must be provided. Sum should not exceed 9360 (the page text width at 1440 margins on A4).

**Width guidance:**
- Total page text width: 9360 twips
- Typical 2-column: [4500, 4860]
- Typical 3-column: [2400, 3500, 3460]
- Typical 4-column: [2000, 2500, 2500, 2360]
- Typical 5-column: [1200, 1800, 2000, 2000, 2360]

**Examples:**

```js
// 2-column (competitive analysis)
dataTable(
  ["Factor", "Tazachin Advantage"],
  [
    ["Raw Material Cost", "ETB 0-1,800/T net (gate fee income from garment)"],
    ["Labor Cost", "USD 0.85-1.20/hr — 15-25× lower than EU"],
    ["Customer Proximity", "Kanoria 230 km; 1-3 day delivery"]
  ],
  [3000, 6360]
)

// 3-column (machinery list)
dataTable(
  ["Machine", "Origin", "USD Cost"],
  [
    ["4-Beater Inclined Cotton Cleaner", "LMW LCC4, India", "44,000"],
    ["Multi-Cylinder Fiber Opener", "Trumac TR-FO3, India", "62,000"]
  ],
  [4500, 3000, 1860]
)

// 5-column (income statement)
dataTable(
  ["Description", "Year 1", "Year 2", "Year 3", "Year 5"],
  [
    ["Revenue", "180", "242", "295", "360"],
    ["Operating Cost", "(152)", "(201)", "(242)", "(291)"],
    ["EBITDA", "28", "41", "53", "69"]
  ],
  [2400, 1740, 1740, 1740, 1740]
)
```

**Alignment:** All cells default to LEFT alignment. This is intentional — do not change.

---

## tc() — Individual Table Cell

```js
tc(text, opts = {})
```

Used internally by kvTable and dataTable. Rarely needed directly. Use if you need a cell with special formatting.

**Options:** `bold`, `color`, `size`, `fill` (hex), `width` (twips), `align`

---

## Part File Pattern

Every content part follows this exact pattern:

**Part 1 (the first part):**
```js
const { p, h1, h2, h3, bullet, pageBreak, kvTable, dataTable,
        NAVY, GOLD, GREY } = require('./engine/helpers');
const { Paragraph, TextRun, AlignmentType, BorderStyle, PageBreak } = require('docx');

const children = [];

// --- COVER PAGE ---
children.push(
  new Paragraph({ spacing: { before: 1400 }, children: [] }),
  new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { before: 400, after: 200 },
    children: [new TextRun({ text: "COMPANY NAME", bold: true, color: NAVY, size: 52 })]
  }),
  // ... more cover elements
  pageBreak()
);

// --- TABLE OF CONTENTS ---
children.push(
  h1("Table of Contents"),
  ...["1. Company Name...", "2. Experience..."].map(t => p(t, { after: 100 })),
  pageBreak()
);

// --- SECTIONS 1-4 ---
children.push(
  h1("1. Company Name and Project Owner"),
  // ... content
  pageBreak()
);

module.exports = { children };
```

**Parts 2, 3, 4 (subsequent parts):**
```js
const { p, h1, h2, h3, bullet, pageBreak, kvTable, dataTable,
        NAVY, GOLD, GREY } = require('./engine/helpers');

const { children } = require('./{client}_part{n-1}.js');  // chains from previous part

// --- SECTIONS ---
children.push(
  h1("5. Product and Process Technology"),
  // ... content
  pageBreak()
);

module.exports = { children };
```

---

## Cover Page Structure

The cover follows this pattern every time:

```js
// Vertical spacer
new Paragraph({ spacing: { before: 1400 }, children: [] }),

// Company name (large, navy, centered)
new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { before: 400, after: 200 },
  children: [new TextRun({ text: "COMPANY NAME", bold: true, color: NAVY, size: 52 })]
}),

// "INVESTMENT PROPOSAL" (gold, with underline border)
new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 600 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 6 } },
  children: [new TextRun({ text: "INVESTMENT PROPOSAL", bold: true, color: GOLD, size: 28 })]
}),

// Project title lines (navy, centered)
new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 600 },
  children: [new TextRun({ text: "Project Title Here", bold: true, color: NAVY, size: 30 })]
}),

// Tagline (grey italic)
new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 1000 },
  children: [new TextRun({ text: "A Strategic Investment in...", italics: true, color: GREY, size: 22 })]
}),

// Key facts (navy, centered, normal weight)
new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 200 },
  children: [new TextRun({ text: "Project Location: ...", color: NAVY, size: 22 })]
}),
new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 200 },
  children: [new TextRun({ text: "Total Investment: ETB X | Equity X% | Loan X%", color: NAVY, size: 22 })]
}),
new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 1200 },
  children: [new TextRun({ text: "Submission: Month Year", color: NAVY, size: 22 })]
}),

// Slogan (gold, with top border)
new Paragraph({
  alignment: AlignmentType.CENTER,
  border: { top: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 6 } },
  children: [new TextRun({ text: "FROM WASTE. TO VALUE.", bold: true, color: GOLD, size: 18 })]
}),

pageBreak()
```
