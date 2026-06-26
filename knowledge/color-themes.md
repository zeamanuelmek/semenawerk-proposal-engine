# Color Theme Library — SemEnaWerk Proposal Engine

Expanded palette set for proposal theming. Every theme has **two engine colors** (PRIMARY + ACCENT),
a **KV light-tint** for the key-value table left column, and a one-line **sector fit** note.

Use this together with the cover-image and page-background prompt skills so the *document theme*,
the *cover poster*, and the *page background* all share the same two colors.

---

## How the two colors map onto the engine

| Engine slot | Gets which theme color | Where it shows |
|---|---|---|
| PRIMARY (replaces `NAVY`) | dark/deep color | H1, H2 text; table headers; cover company name; header text |
| ACCENT (replaces `GOLD`) | warm/bright color | H1 bottom border; H3 text; header/footer borders; cover slogan; "INVESTMENT PROPOSAL" |
| KV light-tint (replaces `LIGHT_BLUE`) | very light PRIMARY | key-value table left column fill |
| Alternating rows | **always** `#F2F2F2` | never themed |
| Body text | **always** `#595959` | never themed |

To apply a theme, override exactly three constants in the client's copied `helpers.js`:
```bash
sed -i 's/1F3864/PRIMARY_HEX/g; s/BF9000/ACCENT_HEX/g; s/D9E2F3/TINT_HEX/g' engine_{client}/helpers.js
```
(Strip the `#` — the engine stores hex without it.)

---

## The Library (28 themes)

Themes are grouped so you can scan by feel. The **first 10 are the originals** (unchanged so existing
projects stay identical). The rest are new. Pick by sector fit, then confirm it doesn't clash with a
recent project in the same sector — variety across the portfolio is the point.

### Core / Industrial

| # | Theme name | PRIMARY | ACCENT | KV tint | Sector fit |
|---|---|---|---|---|---|
| 1 | Navy + Gold | `#1F3864` | `#BF9000` | `#D9E2F3` | Industrial, steel, heavy manufacturing (the classic default) |
| 2 | Forest Green + Amber | `#1B4332` | `#D97706` | `#DCFCE7` | Agro-processing, food, coffee |
| 3 | Deep Teal + Copper | `#134E4A` | `#B45309` | `#CCFBF1` | Textile, recycling, circular economy |
| 4 | Slate Blue + Orange | `#1E3A5F` | `#EA580C` | `#DBEAFE` | Packaging, paper, print, plastics |
| 5 | Charcoal + Red | `#1C1C2E` | `#DC2626` | `#E5E7EB` | Vehicle, mobility, assembly |
| 6 | Deep Blue + Emerald | `#1E3A5F` | `#059669` | `#DBEAFE` | Pharma, health, nutrition, FMCG |
| 7 | Dark Green + Yellow | `#14532D` | `#CA8A04` | `#DCFCE7` | Energy, solar, wind, renewables |
| 8 | Stone + Terracotta | `#292524` | `#C2410C` | `#EFEBE9` | Construction, real estate, cement |
| 9 | Dark Slate + Violet | `#1E1B4B` | `#7C3AED` | `#EDE9FE` | Tech, digital, services |
| 10 | Navy + Teal | `#1F3864` | `#0F766E` | `#D9E2F3` | General trading, import/export |

### Greens & Earth (agro / sustainability / natural)

| # | Theme name | PRIMARY | ACCENT | KV tint | Sector fit |
|---|---|---|---|---|---|
| 11 | Olive + Burnt Gold | `#3F4A1F` | `#A16207` | `#F0F3E2` | Edible oils, grains, milling, oilseed |
| 12 | Pine + Rust | `#1A3A32` | `#9A3412` | `#D7EDE6` | Leather, tannery, hides & skins |
| 13 | Moss + Clay | `#2D3B1F` | `#B45309` | `#E8EDDC` | Horticulture, floriculture, greenhouse |
| 14 | Deep Emerald + Lime | `#064E3B` | `#65A30D` | `#D1FAE5` | Organic farming, fertilizer, biofuel |

### Blues & Teals (water / chemical / clean process / logistics)

| # | Theme name | PRIMARY | ACCENT | KV tint | Sector fit |
|---|---|---|---|---|---|
| 15 | Ocean Blue + Cyan | `#0C4A6E` | `#0891B2` | `#E0F2FE` | Bottled water, beverages, dairy, cold chain |
| 16 | Indigo + Sky | `#312E81` | `#0EA5E9` | `#E0E7FF` | Logistics, warehousing, distribution, dry ports |
| 17 | Petrol + Mint | `#0F3D3E` | `#10B981` | `#D5F2EC` | Chemicals, detergents, hygiene (clean-process feel) |
| 18 | Steel Blue + Slate | `#274060` | `#64748B` | `#DDE3EC` | Engineering, fabrication, machinery, tooling |

### Warm / Bold (mobility / food retail / consumer energy)

| # | Theme name | PRIMARY | ACCENT | KV tint | Sector fit |
|---|---|---|---|---|---|
| 19 | Maroon + Gold | `#4C0D1C` | `#B8860B` | `#F3DDE2` | Meat, poultry, abattoir, premium export food |
| 20 | Burgundy + Amber | `#5B1A2B` | `#D97706` | `#F2DCE3` | Spices, beverages, brewing, distillery |
| 21 | Espresso + Caramel | `#3B2417` | `#B07A2D` | `#EFE6DC` | Coffee roasting, cocoa, confectionery |
| 22 | Brick + Sand | `#7C2D12` | `#CA8A04` | `#F5E6D8` | Bricks, ceramics, tiles, sanitaryware |

### Cool / Premium / Tech (services / pharma / precision)

| # | Theme name | PRIMARY | ACCENT | KV tint | Sector fit |
|---|---|---|---|---|---|
| 23 | Midnight + Teal | `#0F172A` | `#14B8A6` | `#DCE3EC` | Electronics, assembly, ICT hardware |
| 24 | Royal Purple + Gold | `#3B0764` | `#CA8A04` | `#EDE0F5` | Cosmetics, personal care, premium consumer |
| 25 | Deep Plum + Rose | `#4A044E` | `#BE185D` | `#F3E0F2` | Garments, fashion textile, apparel export |
| 26 | Graphite + Sky | `#1F2937` | `#0EA5E9` | `#E2E6EB` | Aluminium, glass, profiles, precision metal |

### Distinctive accents (use when a project needs to stand apart)

| # | Theme name | PRIMARY | ACCENT | KV tint | Sector fit |
|---|---|---|---|---|---|
| 27 | Deep Teal + Gold | `#0B3B3C` | `#C29D2A` | `#D4ECEC` | Premium agro-export, specialty crops |
| 28 | Navy + Coral | `#172554` | `#F97316` | `#DBE3F4` | FMCG, household goods, fast-moving consumer |

---

## Selection rules

1. **Match sector first.** Use the "Sector fit" column as the starting point.
2. **Then check portfolio variety.** If the last detergent/FMCG job used Deep Blue + Emerald (#6),
   give the next one Petrol + Mint (#17) or Navy + Coral (#28) instead. Never run the same theme
   twice in the same sector back-to-back.
3. **Theme isolation stays non-negotiable.** Each client gets a copied engine + helpers with only the
   three constants changed. The shared engine is never mutated.
4. **State the chosen theme up front.** At the start of a session, announce the theme name + the three
   hex values so Zea can confirm or redirect before any building begins.

## Quick contrast safety note

All PRIMARY colors here are dark enough for white table-header text. All ACCENT colors are saturated
enough to read against white but are **never** used for body text — only borders, H3, and slogan.
If you ever swap an accent for something lighter (e.g. a pale yellow), keep it on borders only and
never put accent-colored text on a white background below ~4.5:1 contrast.
