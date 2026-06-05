// ============================================================
// SemEnaWerk Proposal Engine — helpers.js
// Single source of truth for all styling and table functions.
// Import this in every part file. Never recreate these functions.
// ============================================================

const {
  Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle,
  WidthType, ShadingType, VerticalAlign, PageBreak
} = require('docx');

// ─── COLOR PALETTE ───────────────────────────────────────────
const NAVY       = "1F3864";
const GOLD       = "BF9000";
const LIGHT_BLUE = "D9E2F3";
const LIGHT_GOLD = "F4E8C8";
const GREY       = "595959";
const LIGHT_GREY = "F2F2F2";

const cellBorder = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
const CELL_BORDERS = {
  top: cellBorder, bottom: cellBorder,
  left: cellBorder, right: cellBorder
};

// ─── PARAGRAPH ───────────────────────────────────────────────
function p(text, opts = {}) {
  const run = { text: String(text) };
  if (opts.bold)    run.bold    = true;
  if (opts.italics) run.italics = true;
  if (opts.color)   run.color   = opts.color;
  if (opts.size)    run.size    = opts.size;
  return new Paragraph({
    alignment: opts.align !== undefined ? opts.align : AlignmentType.JUSTIFIED,
    spacing: { after: opts.after !== undefined ? opts.after : 160, line: 300 },
    children: [new TextRun(run)]
  });
}

// ─── HEADINGS ────────────────────────────────────────────────
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 4 } },
    children: [new TextRun({ text, bold: true, color: NAVY, size: 32 })]
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 160 },
    children: [new TextRun({ text, bold: true, color: NAVY, size: 26 })]
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 220, after: 140 },
    children: [new TextRun({ text, bold: true, color: GOLD, size: 23 })]
  });
}

// ─── BULLET ──────────────────────────────────────────────────
function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 80, line: 280 },
    children: [new TextRun({ text: String(text) })]
  });
}

// ─── PAGE BREAK ──────────────────────────────────────────────
function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ─── TABLE CELL ──────────────────────────────────────────────
function tc(text, opts = {}) {
  const run = { text: String(text) };
  if (opts.bold)  run.bold  = true;
  if (opts.color) run.color = opts.color;
  if (opts.size)  run.size  = opts.size;
  return new TableCell({
    borders: CELL_BORDERS,
    width: { size: opts.width || 4680, type: WidthType.DXA },
    shading: opts.fill ? { fill: opts.fill, type: ShadingType.CLEAR } : undefined,
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      spacing: { after: 0, line: 260 },
      children: [new TextRun(run)]
    })]
  });
}

// ─── KEY-VALUE TABLE ─────────────────────────────────────────
function kvTable(rows, widths = [3600, 5760]) {
  const total = widths.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    rows: rows.map(([key, val]) => new TableRow({
      children: [
        tc(key, { width: widths[0], bold: true, fill: LIGHT_BLUE }),
        tc(val, { width: widths[1] })
      ]
    }))
  });
}

// ─── DATA TABLE ──────────────────────────────────────────────
function dataTable(headers, rows, widths) {
  const total = widths.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    rows: [
      new TableRow({
        tableHeader: true,
        children: headers.map((h, j) => tc(h, {
          width: widths[j], bold: true, color: "FFFFFF", fill: NAVY
        }))
      }),
      ...rows.map((row, i) => new TableRow({
        children: row.map((cell, j) => tc(cell, {
          width: widths[j],
          fill: i % 2 === 1 ? LIGHT_GREY : undefined
        }))
      }))
    ]
  });
}

module.exports = {
  NAVY, GOLD, LIGHT_BLUE, LIGHT_GOLD, GREY, LIGHT_GREY,
  p, h1, h2, h3, bullet, pageBreak, tc, kvTable, dataTable
};
