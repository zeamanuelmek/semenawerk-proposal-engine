# In-Document Infographic Prompt Skill — SemEnaWerk Proposals

Produces **copy-paste-ready ChatGPT prompts for 1–2 full-width infographic/illustration images** that
get inserted *between pages* of a proposal to break up text and present one idea visually.

Deliverable is **prompt text + an exact placement instruction**. Zea generates in ChatGPT and inserts
the image manually at the named spot. Claude does not generate or embed the image.

**Discipline: at most ONE or TWO of these per proposal, and only when the content genuinely benefits.**
A proposal is a bankable document, not a brochure — images earn their place, they don't pad.

---

## When an infographic image IS worth generating

Generate one only if a section has a spatial, comparative, or process idea that a photo-style or
diagram-style image conveys better than the existing tables. Best candidates, in priority order:

1. **Site / land layout (Section 7)** — a stylized bird's-eye or isometric of the plot showing the
   built-up zones (production hall, warehouse, admin, utilities, parking, green buffer) with the
   land area called out. This is the single most valuable image — it makes "{LAND} m²" tangible.
2. **Process / production flow (Section 5)** — a clean left-to-right illustrated flow of raw material →
   key stages → finished product, with simple labeled icons. Good when the process has 4–6 clear stages.
3. **Market destination map (Section 11)** — a stylized Horn-of-Africa / East-Africa map with arrows
   from the plant to export countries, plus a domestic/export split callout.
4. **Value-chain / synergy diagram (Section 3)** — for multi-division projects, a circular or
   interlocking-blocks graphic showing how divisions feed each other.

If none of these fit cleanly, **generate nothing** — that's a valid outcome.

## When NOT to

- Don't illustrate something a table already states well (financials, capacity tables, employment).
- Don't add decorative images with no informational job.
- Don't exceed two. One is often right.

---

## Shared style rules for all in-document images

- **Full content width, landscape or square** (it sits between text blocks, not full-bleed).
- **Same two theme colors** as the cover/background (PRIMARY + ACCENT), white background, dark-grey
  labels — so it matches the document.
- **Flat, clean infographic / vector style** (not the photoreal hero look). Labels must be legible.
- **Self-contained:** a short title at top in PRIMARY, an ACCENT underline, clean labels.
- Spelled exactly; no watermarks; no extra colors.

---

## Prompt templates

### A) Site / land layout (Section 7) — highest value

> Create a clean **isometric site-layout infographic** of an industrial plot, flat vector style, white
> background. Strict palette: PRIMARY {primary_name} {PRIMARY_HEX}, ACCENT {accent_name} {ACCENT_HEX},
> dark-grey {#595959} labels. Title at top in {PRIMARY_HEX}: "{COMPANY} — SITE LAYOUT
> ({LAND_M2} m² / {HECTARES} HA)" with a short {ACCENT_HEX} underline. Show a rectangular fenced plot
> divided into clearly labeled zones drawn as simple isometric blocks: {zone_list — e.g. "Production
> Hall, Raw Material Warehouse, Finished Goods Store, Administration Block, Utility/Power House, Water
> & Effluent area, Truck Loading Bays, Parking, Green Buffer"}. Use {PRIMARY_HEX} for buildings,
> {ACCENT_HEX} to highlight the main production hall and the entrance/loading flow, light-grey for
> ground and roads, with thin labeled callout lines. A small north arrow and a simple scale bar. No
> photographic textures, no extra colors, all labels sharp and legible.

Placement: **end of Section 7 (Required Land and Shed Specifications), after the built-up area table,
before the page break.**

### B) Process / production flow (Section 5)

> Create a clean **horizontal process-flow infographic**, flat vector style, white background. Strict
> palette: PRIMARY {primary_name} {PRIMARY_HEX}, ACCENT {accent_name} {ACCENT_HEX}, dark-grey labels.
> Title in {PRIMARY_HEX}: "{COMPANY} — PRODUCTION PROCESS" with an {ACCENT_HEX} underline. Show a
> left-to-right flow of {N} stages connected by {ACCENT_HEX} arrows: {stage_1} → {stage_2} → {stage_3}
> → {stage_4} → {stage_5}. Each stage is a simple {PRIMARY_HEX} line-icon in a circle with a one- or
> two-word label beneath. Start with a raw-material icon on the left and a finished-product icon on the
> right. Even spacing, generous white space, no photographic elements, legible labels, no extra colors.

Placement: **start of Section 5 (Product and Process Technology), after the intro paragraph, before the
stage-by-stage h3 subsections.**

### C) Market destination map (Section 11)

> Create a clean **stylized export-market map infographic**, flat vector style, white background. Strict
> palette: PRIMARY {primary_name} {PRIMARY_HEX}, ACCENT {accent_name} {ACCENT_HEX}, light-grey land,
> dark-grey labels. Title in {PRIMARY_HEX}: "{COMPANY} — MARKET DESTINATION" with an {ACCENT_HEX}
> underline. Show a simplified map of Ethiopia and the Horn/East Africa region; mark the plant location
> at {CITY} with a {ACCENT_HEX} pin, and draw {ACCENT_HEX} arrow lines from the plant to each export
> country: {export_countries}. Label each destination country. Include a small callout box reading
> "{DOMESTIC%} Domestic · {EXPORT%} Export". Countries in {PRIMARY_HEX} fill at low saturation, arrows
> and pin in {ACCENT_HEX}, no photographic elements, no extra colors, legible labels.

Placement: **within Section 11 (Market Destination), after the export-destination table, before the
domestic tables.**

### D) Value-chain / synergy diagram (Section 3, multi-division only)

> Create a clean **circular value-chain infographic**, flat vector style, white background. Strict
> palette: PRIMARY {primary_name} {PRIMARY_HEX}, ACCENT {accent_name} {ACCENT_HEX}, dark-grey labels.
> Title in {PRIMARY_HEX}: "{COMPANY} — INTEGRATED VALUE CHAIN" with an {ACCENT_HEX} underline. Show
> {N} division blocks arranged in a ring connected by {ACCENT_HEX} curved arrows showing how outputs
> of one feed the next: {division_list}. Each block is a {PRIMARY_HEX} rounded rectangle with a white
> line-icon and a short label. Center the ring on a small {ACCENT_HEX} hub labeled "{shared resource —
> e.g. Shared Infrastructure}". No photographic elements, no extra colors, legible labels.

Placement: **within Section 3 (Project Description), in the integrated-model / synergies subsection.**

---

## Output format Claude gives Zea

For each image chosen, Claude outputs a small block like:

```
IMAGE 1 — Site Layout
Insert at: end of Section 7, after the built-up area table (before the page break).
Prompt:
<the filled prompt text, ready to paste into ChatGPT>
```

Keep it to one or two such blocks. If only one image is warranted, deliver only one and say so.
If none is warranted for a given proposal, say that explicitly rather than forcing one.
