# Cover Image Prompt Skill — SemEnaWerk Proposals

Produces a **copy-paste-ready ChatGPT image prompt** for the front-cover poster of a proposal.
Output is a single vertical poster (portrait, ~2:3, e.g. 1024×1536) in the established house style.

The deliverable from this skill is **the prompt text only** — Zea pastes it into ChatGPT, generates,
and inserts the image manually as the cover. Claude does not generate the image itself.

---

## House cover anatomy (locked layout — keep every time)

From top to bottom, the cover always has these 8 bands:

1. **Header band (white):** company logo concept at top-left, company name in PRIMARY (bold caps),
   a one-line facility descriptor under it where the descriptor's first words are in ACCENT.
2. **Hero band:** large headline "COMPREHENSIVE FEASIBILITY STUDY" *or* "INVESTMENT PROPOSAL" in
   PRIMARY caps, with a short ACCENT underline rule, and a one-line subtitle. A photographic hero
   image of the facility/products fills the right ~55% of this band.
3. **Fact column (left of hero):** three circular ACCENT/PRIMARY icons — Project Location, Land
   Requirement, Project Activities — each with bold label + value.
4. **Photo strip:** a horizontal row of 4–5 small photographic tiles showing product/process shots,
   separated by thin gaps.
5. **Three-metric band (light grey):** PLANNED INVESTMENT · FUNDING STRUCTURE · MARKET DESTINATION,
   each with a circular PRIMARY icon and bold figures.
6. **Icon-strip band (PRIMARY fill):** 5 outlined circular icons in white/ACCENT with short caps
   captions — jobs, modern facility, import substitution, sustainability, a tagline.
7. **Submission band (white):** SUBMITTED TO · DOCUMENT REF. · STATUS · DATE in four columns with a
   small calendar icon.
8. **Footer band:** confidentiality statement (small print, left) + EIC / IPDC / DBE logo lockups (right).

Keep this structure identical across clients. **Differentiate** through: the two theme colors, the
logo concept, the hero/product imagery, the facility descriptor, and the metric values.

---

## Prompt template (fill the {braces}, then output verbatim to Zea)

> Create a professional, high-resolution vertical investment-proposal cover poster (portrait, 2:3
> aspect ratio) for an Ethiopian industrial company. Clean corporate infographic style, flat vector
> UI elements combined with realistic photographic panels, crisp sans-serif typography, generous
> white space, print-quality. **Strict two-color brand palette: PRIMARY deep {primary_name} {PRIMARY_HEX}
> and ACCENT {accent_name} {ACCENT_HEX}, on white, with light-grey {#F2F2F2} panel fills and dark-grey
> {#595959} body text. Do not introduce other brand colors.**
>
> LAYOUT, top to bottom:
>
> 1. White header band: at top-left, a circular emblem logo for "{COMPANY NAME}" — {logo_concept,
>    e.g. "a shield with a stylized letter M, framed by a laurel wreath, in {PRIMARY_HEX}"}. To its
>    right, the company name "{COMPANY NAME}" in bold uppercase {PRIMARY_HEX}, and beneath it
>    "{FACILITY DESCRIPTOR}" where the first two words "{accent_words}" are in {ACCENT_HEX} and the
>    rest in {PRIMARY_HEX}.
> 2. Hero band: large bold uppercase headline "{HEADLINE — e.g. COMPREHENSIVE FEASIBILITY STUDY}" in
>    {PRIMARY_HEX}, with a short horizontal {ACCENT_HEX} underline rule, then the subtitle
>    "FOR {PROJECT SUBTITLE}" in {PRIMARY_HEX}. On the right ~55%, a bright realistic photograph of
>    {hero_image — e.g. "a modern detergent and chemical manufacturing plant with stainless tanks and
>    piping under a blue sky, pallets of finished bottled products in the foreground"}.
> 3. Below the headline on the left, three fact rows, each a filled {PRIMARY_HEX} circle icon plus text:
>    (a) location pin — "PROJECT LOCATION" / "{LOCATION PARK}" / "{CITY, Ethiopia}";
>    (b) grid icon — "LAND REQUIREMENT" / "{LAND_M2} m² ({HECTARES} Hectares)";
>    (c) gear icon — "PROJECT ACTIVITIES" with three bullet lines: {activity_1}; {activity_2}; {activity_3}.
> 4. A horizontal strip of {4 or 5} small realistic photo tiles separated by thin white gaps, showing:
>    {tile_1}, {tile_2}, {tile_3}, {tile_4}{, tile_5}.
> 5. Light-grey band with three columns, each a {PRIMARY_HEX} circular icon with bold text:
>    "PLANNED INVESTMENT" / "ETB {INVESTMENT}.00" / "{investment in words} Birr";
>    "FUNDING STRUCTURE" / "{EQUITY%} Equity (ETB {EQUITY_ETB})" / "{LOAN%} Loan (ETB {LOAN_ETB})";
>    "MARKET DESTINATION" / "{DOMESTIC%} {Local/Domestic} Market" / "{EXPORT%} Export Market" /
>    "{export country list}".
> 6. A full-width {PRIMARY_HEX} band with five evenly spaced outlined circular icons in white with
>    {ACCENT_HEX} rings, each with a short uppercase caption: "{JOBS} DIRECT JOBS CREATION";
>    "{caption_2}"; "{caption_3}"; "{caption_4}"; "{TAGLINE — short, e.g. CLEAN HOMES. STRONGER INDUSTRY.}".
> 7. White band, four columns with thin dividers: "SUBMITTED TO / Development Bank of Ethiopia (DBE)
>    & Ethiopian Investment Commission (EIC)"; "DOCUMENT REF. / {DOC_REF}"; "STATUS / Submitted to
>    DBE/EIC"; a small calendar icon + "DATE / {MONTH YEAR}".
> 8. Footer: small-print confidentiality statement on the left ("This document contains confidential
>    and proprietary information of {COMPANY NAME}…"), and on the right three official logo lockups in
>    a rounded panel: EIC (Ethiopian Investment Commission), IPDC (Industrial Parks Development
>    Corporation), DBE (Development Bank of Ethiopia).
>
> All text must be spelled exactly as written, sharp and legible. No watermarks, no stock-photo
> logos other than the three named agencies, no extra colors beyond the stated palette.

---

## Filling guidance

- **{logo_concept}** — invent a simple, on-brand emblem that suits the company name and sector. Vary
  it each time (shield, hexagon cluster, monogram-in-circle, gear-and-leaf, etc.). Pull the letter
  from the company's initial.
- **{HEADLINE}** — use "COMPREHENSIVE FEASIBILITY STUDY" for feasibility-study deliverables (Mengsteab,
  Senay) or "INVESTMENT PROPOSAL" for proposal deliverables (Kaleab). Match what the brief calls it.
- **{hero_image} and {tile_*}** — describe real product/process scenes from the brief's sector. Be
  specific and photographic. These are where the cover gets its sector identity.
- **{accent_words}** — pick the 1–2 most identifying words of the descriptor to color in ACCENT
  (e.g. "FMCG MANUFACTURING", "SOLAR PV MODULE", "PLASTIC PRODUCTS").
- Numbers come straight from the verified brief — never invent them.
- Always include the EIC / IPDC / DBE footer lockups unless the brief says otherwise.

## A worked example (Senay Energy, theme #7 Dark Green + Yellow)

> …Strict two-color brand palette: PRIMARY deep forest green #14532D and ACCENT golden yellow #CA8A04…
> logo: a circular emblem with a shield and stylized letter S framed by a laurel wreath in #14532D…
> company name "SENAY ENERGY PLC"… descriptor "SOLAR PV MODULE MANUFACTURING PLANT" with "SOLAR PV
> MODULE" in #CA8A04… headline "COMPREHENSIVE FEASIBILITY STUDY"… hero: a bright modern solar-module
> assembly hall with rows of finished PV panels on pallets… fact rows: KILINTO INDUSTRIAL PARK /
> 30,000 m² (3 Hectares) / "Mono PERC, TOPCon & Bifacial Solar Modules; Solar Cell Assembly &
> Stringing; Junction Boxes, Cables, Mounting Structures"… metrics: ETB 600,000,000.00 / 30% Equity
> (ETB 180,000,000.00), 70% Loan (ETB 420,000,000.00) / 70% Domestic, 30% Export — Kenya, Uganda,
> Tanzania, Rwanda, South Sudan, Djibouti, Somalia… icon strip: "300–400 DIRECT JOBS CREATION",
> "500 MW ANNUAL SOLAR MODULE CAPACITY", "STRONG IMPORT SUBSTITUTION & FOREIGN EXCHANGE", "RENEWABLE
> ENERGY & TECHNOLOGY TRANSFER", "FROM ETHIOPIAN SUN. TO REGIONAL POWER."… DOC REF
> "SENAY-IP-DBE-SOLAR2026-001"… DATE June 2026… EIC / IPDC / DBE footer.

That example reproduces the established Senay cover. New clients follow the same skeleton with their
own theme color, logo concept, imagery, and figures.
