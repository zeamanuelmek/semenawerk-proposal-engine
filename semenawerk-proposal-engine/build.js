// ============================================================
// SemEnaWerk Proposal Engine — build.js
// Reads briefs/{slug}.json + {slug}_part1-4.js → outputs docx
//
// Usage:
//   node build.js {client_slug}
//
// Example:
//   node build.js kmt_trading
// ============================================================

const path = require('path');
const fs   = require('fs');

const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
        BorderStyle, PageNumber, Footer, Header } = require('docx');

const { NAVY, GOLD, GREY } = require('./engine/helpers');

// ─── ARGS ────────────────────────────────────────────────────
const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node build.js {client_slug}');
  console.error('Example: node build.js kmt_trading');
  process.exit(1);
}

// ─── LOAD BRIEF ──────────────────────────────────────────────
const briefPath = path.join(__dirname, 'briefs', `${slug}.json`);
if (!fs.existsSync(briefPath)) {
  console.error(`Brief not found: ${briefPath}`);
  console.error('Create it first: cp briefs/example.json briefs/{slug}.json');
  process.exit(1);
}
const brief = JSON.parse(fs.readFileSync(briefPath, 'utf8'));
console.log(`\nBuilding: ${brief.meta.company_name}`);
console.log(`Project:  ${brief.project.title}`);
console.log(`Location: ${brief.project.location_park}, ${brief.project.location_region}`);

// ─── LOAD CONTENT PARTS ──────────────────────────────────────
let children;
try {
  require(path.join(__dirname, `${slug}_part1.js`));
  require(path.join(__dirname, `${slug}_part2.js`));
  require(path.join(__dirname, `${slug}_part3.js`));
  ({ children } = require(path.join(__dirname, `${slug}_part4.js`)));
} catch (err) {
  console.error('\nFailed to load content parts:', err.message);
  console.error('Make sure all 4 part files exist in:', __dirname);
  process.exit(1);
}

console.log(`Elements: ${children.length}`);

// ─── ASSEMBLE DOCUMENT ───────────────────────────────────────
const headerText = `${brief.meta.company_name} — Project Proposal`;

const doc = new Document({
  creator:     brief.meta.company_name,
  title:       headerText,
  description: `${brief.project.title} | ${brief.project.location_park}`,

  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: NAVY, font: "Calibri" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: NAVY, font: "Calibri" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 23, bold: true, color: GOLD, font: "Calibri" },
        paragraph: { spacing: { before: 220, after: 140 }, outlineLevel: 2 } }
    ]
  },

  numbering: {
    config: [{
      reference: "bullets",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "•",
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
    }]
  },

  sections: [{
    properties: {
      page: {
        size:   { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT, spacing: { after: 0 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 4 } },
        children: [new TextRun({ text: headerText, color: NAVY, size: 18, italics: true })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 },
        border: { top: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 4 } },
        children: [
          new TextRun({ text: "Page ",                    color: GREY, size: 16 }),
          new TextRun({ children: [PageNumber.CURRENT],   color: GREY, size: 16 }),
          new TextRun({ text: " of ",                     color: GREY, size: 16 }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], color: GREY, size: 16 })
        ]
      })] })
    },
    children
  }]
});

// ─── WRITE OUTPUT ────────────────────────────────────────────
const outDir  = path.join(__dirname, 'outputs');
const outFile = path.join(outDir, `${slug}_Proposal.docx`);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outFile, buffer);
  const kb = Math.round(buffer.length / 1024);
  console.log(`\n✓ Output: ${outFile}`);
  console.log(`  Size:   ${kb} KB`);
  console.log('\nNext:');
  console.log(`  python3 /mnt/skills/public/docx/scripts/office/validate.py outputs/${slug}_Proposal.docx`);
  console.log(`  python3 /mnt/skills/public/docx/scripts/office/soffice.py --headless --convert-to pdf outputs/${slug}_Proposal.docx`);
  console.log(`  pdfinfo outputs/${slug}_Proposal.pdf | grep Pages`);
}).catch(err => {
  console.error('Build failed:', err.message);
  process.exit(1);
});
