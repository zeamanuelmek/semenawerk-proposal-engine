# Page Background Prompt Skill — SemEnaWerk Proposals

Produces a **copy-paste-ready ChatGPT image prompt** for the faded letterhead background that sits
behind the body pages of a proposal (the ghosted-factory + globe + product-cluster + wave-footer style).

Deliverable is **prompt text only**. Zea generates in ChatGPT and places the image as a page
background / behind-text watermark manually.

---

## House background anatomy (keep every time)

- **Format:** portrait A4 proportion (≈1:1.41), full-bleed, mostly **white/very pale** so body text
  stays readable on top. The top ~60% is almost empty white space (this is where text goes).
- **Ghosted line-art (very faint, PRIMARY tint at ~8–12% opacity):**
  - a dotted **world map** upper-left with a few thin **arc flight-path lines** (export/trade motif)
  - a translucent **wireframe globe** centered-right, Africa/Europe facing front
  - a **blueprint-style factory / production line** sketch lower-left
- **Product cluster (the one full-color, photoreal element), lower-right corner:** a realistic group
  of the company's actual products + shipping boxes/crates, sitting on a subtle reflective surface.
  This is the only saturated area and it anchors the sector identity.
- **Wave footer:** a smooth two-tone curved wave across the bottom — an ACCENT-colored thin sweep
  over a solid PRIMARY band — plus one or two small ACCENT four-point sparkle/diamond accents
  (one near top-right, one in the footer).

Everything except the product cluster is faint enough to read text over.

---

## Prompt template (fill the {braces}, then output verbatim to Zea)

> Create a clean corporate **A4 portrait page-background / letterhead** (aspect ratio 1:1.414) for a
> business proposal. The page is **mostly white with a very pale {primary_name}-tinted wash**, designed
> so dark body text remains fully readable on top — keep the **top 60% nearly empty white space**.
> Strict palette: PRIMARY {primary_name} {PRIMARY_HEX} and ACCENT {accent_name} {ACCENT_HEX} only.
>
> FAINT GHOSTED ELEMENTS (all very light, roughly 8–12% opacity, in {PRIMARY_HEX} tint, never
> competing with text):
> - upper-left: a **dotted-pixel world map** with three thin curved arc lines suggesting global trade routes;
> - center-right: a translucent **wireframe globe** showing Africa and Europe, light grid lines;
> - lower-left: a pale **blueprint line-drawing of a {facility_sketch — e.g. "detergent factory with
>   mixing tanks, silos and a packaging line"}**, architectural sketch style.
>
> FOREGROUND FOCAL ELEMENT (the only full-color, photorealistic part), bottom-right corner:
> a realistic cluster of **{product_cluster — e.g. "white and blue HDPE detergent jugs and bottles,
> stacked kraft shipping boxes, and dark blue stackable crates"}** resting on a soft reflective white
> surface, professional product-photography lighting.
>
> BOTTOM: a smooth **two-tone curved wave** spanning the full width — a thin {ACCENT_HEX} sweep above
> a solid {PRIMARY_HEX} band. Add a small {ACCENT_HEX} four-point sparkle near the top-right corner
> and another inside the footer wave.
>
> No text anywhere, no logos, no watermark words. Clean, premium, lots of breathing room. Print-quality.

---

## Filling guidance

- **{facility_sketch}** — sketch the actual production line for the sector (solar module line, plastic
  extruders, oil press, etc.). Keep it a faint blueprint, not a photo.
- **{product_cluster}** — the single most recognizable group of the company's finished goods. Match
  the cover's product imagery so cover and background feel like one set. Always include shipping
  boxes/crates to signal "ready to market/export."
- **Match the wave + sparkle colors to the theme** so the background pairs with the cover. Senay used
  green-over-gold; Kaleab used navy-over-orange; Mengsteab used green-over-navy.
- Keep the **top 60% empty** — this is the single most important rule, or text won't sit cleanly.

## Worked example (Kaleab Plastic, theme #4 Slate Blue + Orange)

> …mostly white with a very pale slate-blue wash, top 60% empty… PRIMARY slate blue #1E3A5F and
> ACCENT orange #EA580C only… faint dotted world map upper-left with three arc lines… translucent
> wireframe globe center-right (Africa/Europe)… pale blueprint of a plastic-pipe extrusion factory
> lower-left… foreground bottom-right: realistic cluster of grey and blue PVC/HDPE pipes, stacked
> kraft boxes, and blue + white + navy stackable crates on a reflective surface… bottom: thin orange
> #EA580C wave sweep over a solid slate-blue #1E3A5F band, with an orange four-point sparkle top-right
> and one in the footer… no text, no logos.

---

## Pairing note (cover ↔ background)

For a coherent set, generate the cover first, lock the theme + product look, then feed the **same two
hex codes and the same product description** into the background prompt. The two images should read as
a matched stationery system: same palette, same products, same trade-route motif.
