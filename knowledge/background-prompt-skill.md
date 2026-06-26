# Page Background Prompt Skill — SemEnaWerk Proposals

Produces a **copy-paste-ready ChatGPT image prompt** for the faded letterhead background that sits
behind the body pages of a proposal.

Deliverable is **prompt text only**. Zea generates in ChatGPT and places the image as a page
background / behind-text watermark manually.

**The point of this skill is variety.** The original map+globe+factory+wave motif (Mengsteab, Kaleab,
Senay) is one valid option, not the only one. The motif itself should be chosen per client, the same
way the color theme is chosen per client — never defaulted to automatically.

---

## The two rules that never change, regardless of motif

1. **Top 60% stays nearly empty white space.** This is where body text sits. Whatever motif is chosen,
   keep it confined to the lower portion and corners — never let line-art or color creep into the
   upper two-thirds of the page.
2. **Only one element is full-color/photoreal; everything else is faint line-art (~8–12% opacity) in
   the PRIMARY tint.** This keeps the page readable and keeps the eye anchored on one focal point —
   usually the company's actual products.

---

## Six motif archetypes — pick one per client, never the same one twice in a row

### Motif 1 — "Trade Network" (the original house style: map + globe + factory)
Ghosted dotted world map upper-left with arc trade-route lines, a translucent wireframe globe
center-right, a blueprint-style factory sketch lower-left, full-color product cluster bottom-right,
two-tone wave footer with sparkle accents. This is the existing Mengsteab/Kaleab/Senay look. Best for:
export-oriented manufacturers where global trade is the story.

### Motif 2 — "Blueprint Grid"
The faint backdrop is an architectural/engineering blueprint grid (fine graph-paper lines in PRIMARY
tint) with one or two technical line-drawings overlaid — a cutaway of the company's core machine,
a cross-section of a product, or a simplified process schematic with flow arrows. No globe, no map.
Full-color product cluster still anchors one corner. Footer can be a simple straight PRIMARY band
rather than a wave. Best for: engineering, fabrication, machinery, technical/precision manufacturing —
reads as technical rather than global-trade.

### Motif 3 — "Botanical / Agro Field"
Faint line-art of crop rows, leaves, or grain stalks forming a soft border along one or two edges
(think a delicate line-illustration border, not a photo), with a subtle topographic/contour-line
texture suggesting farmland in the far background. Full-color product cluster (the processed end
product — bagged grain, roasted coffee, bottled oil) sits in a corner. Footer wave can take an organic
leaf-shaped curve instead of a simple sweep. Best for: agro-processing, coffee, food, horticulture.

### Motif 4 — "Cityscape Skyline"
A faint skyline silhouette of Addis Ababa or a generic modern Ethiopian industrial skyline runs along
the bottom third in PRIMARY tint, with a few thin upward light-beam or growth-arrow lines rising from
buildings (suggesting development/progress). No globe or map. Full-color product cluster sits centered
or to one side, partially in front of the skyline. Best for: construction, real estate, urban
infrastructure, general trading.

### Motif 5 — "Circuit / Network Nodes"
Faint interconnected dot-and-line network pattern (like a circuit board or data network) spread
loosely across the lower half, suggesting connectivity and modern technology, with one or two
geometric polygon shapes (hexagons, triangles) as accent outlines. Full-color product cluster anchors
a corner. Footer is a sharp angular geometric cut rather than a curved wave. Best for: tech, energy,
electronics, telecom-adjacent industrial.

### Motif 6 — "Single Macro Object"
Instead of a cluster of small products, one single product or component is rendered large, faint, and
oversized as a ghosted line-art silhouette spanning much of the lower half (e.g. a single giant
outlined gear, a single outlined bottle, a single outlined solar panel) — minimalist and graphic rather
than busy. A small full-color detail shot (a close-up swatch, not a cluster) sits in one corner for the
single saturated touch. Footer is a thin single-color rule, no wave. Best for: clients wanting a sleek,
minimal, modern feel rather than a dense industrial-collage feel — pairs well with cover Archetypes 5
("Magazine Cover") or 2 ("Hero Split").

---

## Prompt template (fill the {braces} for whichever motif is chosen)

> Create a clean corporate **A4 portrait page-background / letterhead** (aspect ratio 1:1.414) for a
> business proposal. The page is **mostly white with a very pale {primary_name}-tinted wash**, designed
> so dark body text remains fully readable on top — keep the **top 60% nearly empty white space**.
> Strict palette: PRIMARY {primary_name} {PRIMARY_HEX} and ACCENT {accent_name} {ACCENT_HEX} only.
>
> FAINT GHOSTED ELEMENTS (very light, roughly 8–12% opacity, in {PRIMARY_HEX} tint, never competing
> with text), per the chosen motif:
> {motif_description — see the six archetypes above for the shape/composition; describe the specific
> objects for this client's sector, e.g. for Motif 2 on a plastics extrusion company: "a faint
> architectural blueprint grid with a technical cutaway line-drawing of a plastic extrusion die and
> cooling line, lower-left"}
>
> FOREGROUND FOCAL ELEMENT (the only full-color, photorealistic part), {corner — e.g. bottom-right}:
> a realistic {product_cluster or single object per motif — e.g. "cluster of white and blue HDPE
> detergent jugs, stacked kraft shipping boxes, and dark blue stackable crates"} resting on a soft
> reflective white surface, professional product-photography lighting.
>
> FOOTER per motif (wave / straight band / angular cut / organic curve / thin rule — pick per archetype
> above): rendered in a two-tone {ACCENT_HEX}-over-{PRIMARY_HEX} treatment. Add a small {ACCENT_HEX}
> accent mark (sparkle, dot, or simple geometric mark consistent with the motif) near the top-right
> corner and one in the footer.
>
> No text anywhere, no logos, no watermark words. Clean, premium, lots of breathing room. Print-quality.

---

## Worked reference (Motif 1, Kaleab Plastic, theme #4 Slate Blue + Orange)

This is the existing reference example, valid for Motif 1 specifically — not the default for every
client going forward.

> …mostly white with a very pale slate-blue wash, top 60% empty… PRIMARY slate blue #1E3A5F and
> ACCENT orange #EA580C only… faint dotted world map upper-left with three arc lines… translucent
> wireframe globe center-right (Africa/Europe)… pale blueprint of a plastic-pipe extrusion factory
> lower-left… foreground bottom-right: realistic cluster of grey and blue PVC/HDPE pipes, stacked
> kraft boxes, and blue + white + navy stackable crates on a reflective surface… bottom: thin orange
> #EA580C wave sweep over a solid slate-blue #1E3A5F band, with an orange four-point sparkle top-right
> and one in the footer… no text, no logos.

---

## Filling guidance

- **Pick the motif before writing the prompt**, state which of the six (and why) to Zea in one line,
  the same way the archetype is named for the cover.
- **{product_cluster} or single object** — match the cover's product imagery so cover and background
  read as one set, regardless of which motif/archetype pairing is used.
- **Footer treatment should match the motif's character** — a wave for organic/trade motifs, a
  straight or angular band for technical/geometric motifs, a thin rule for minimal ones.
- Keep the **top 60% empty** — this is the one rule that never bends, whichever motif is picked.
- **Track motif + archetype combinations per client** so consecutive proposals — especially in the
  same sector — don't repeat the same pairing.

## Pairing note (cover ↔ background)

For a coherent set, generate the cover first, lock the theme + product look + chosen cover archetype,
then pick a background motif that complements it (see "Best for" notes above pairing motifs to cover
archetypes), and feed the **same two hex codes and the same product description** into the background
prompt. The result should read as a matched stationery system: same palette, same products, same
overall creative direction — even though the specific motif and layout differ from other clients.
