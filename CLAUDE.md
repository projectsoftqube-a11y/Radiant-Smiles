# Radiant Smiles @ Floral Vale

New premium, SEO-first Next.js website for **Radiant Smiles @ Floral Vale**, a dental practice in Yardley, PA (current site: https://www.radiant-smiles.com).

This is the **second site built with the same process as Amazing Smiles By Design**. The finished reference project is `E:\Wordpress Project Backup\Amazing Smiles`; read its code before building anything here. Live reference: https://amazing-smiles-by-design.vercel.app/.

> **What stays the same:** the engineering, content workflow, SEO rules, responsive breakpoints and quality checks.
> **What changes:** the theme and design. That means the colour palette and fonts (taken from the Radiant Smiles logo), layouts and section designs. Radiant Smiles must **not** look like a reskin of Amazing Smiles.

## Status

- **Homepage approved by the user (8 Oct 2026).** Fresh Next.js 16.4 project in the repo root, pushed to GitHub (see below). Dev server: `npm run dev` on port 3300.
- **All 9 Core pages built (8 Oct 2026):** home, About Us, Meet the Staff, both dentist bios, Before & After Gallery (noindex until a case is cleared), Patient Reviews, Special Offers and Contact Us. Repo pushed.
- **02 Patient Info built (8 Oct 2026):** all 12 pages (hub, New Patients, Scheduling, Insurance & Payment, CareCredit, Why Choose Us, Patient Registration, Care & Comfort, Advanced Technology, Infection Control, Home Care Instructions, Patient Education). Committed (`674079f`).
- **03 General Dentistry built (8 Oct 2026):** all 14 pages (Preventive Care hub, Family Dentistry, Teeth Cleaning & Check-ups, Sealants, Fluoride, Oral Cancer Screening, Oral Hygiene, Arestin, Deep Cleaning, Laser Gum Therapy, Periodontal Maintenance, Children's Dentistry, Emergency Dentistry, Night Guards). Waiting for the user's review; folders 04 onward haven't arrived.
- Received:
  - `docs/brand/logo.svg`: the **master logo**, a true vector copied from Downloads/`Logo 1.svg`. Use this, not `logo.webp`.
  - **SEO master files (2026-10-07):**
    - `docs/seo-sheets/`: Keyword Map & Sitemap .xlsx (sitemap, 301s, rankings) and Keyword Clusters & Content Plan .xlsx (blueprints, FAQ bank, build order).
    - `docs/seo-content/00 Reference/`: the Fact Sheet (the only source of practice facts) and the previous agency's ranking report.
    - The old CSVs were deleted.
- Waiting for the SEO content folders (`01 Core` … `10 Utility`, same structure as Amazing Smiles). They arrive one at a time, starting with the homepage.
- Do not start coding until the user says the content has arrived. Build only the folder the user hands over.

## Where things go

| Path | What |
|---|---|
| `docs/brand/` | Logo files and anything brand-related the user sends |
| `docs/seo-sheets/` | Keyword sheet and sitemap workbooks (keep the originals untouched) |
| `docs/seo-content/` | `00 Reference` (fact sheet + ranking report), then content folders `01 Core` … `10 Utility`, copied in as they arrive |
| `tools/from-amazing-smiles/` | Converters (doc → typed content files) and QA scripts carried over from Amazing Smiles; adapt paths before use |
| `E:\Wordpress Project Backup\Radiant Smiles Old Site Backup` | **Read-only reference**: the current WordPress site (mirror, 88 media files, 23 blog posts, 50 reviews, `seo-inventory.csv` with every URL/title/meta). Never edit it. Use it for practice facts, existing URLs and redirects, and real photos. |

## Decisions made (2026-10-06)

- **Starting point: fresh build.** Do not copy the Amazing Smiles codebase. Write a new Next.js project. Rebuild the same *patterns* (routes.ts, site.ts, images.ts, schema builders, buildMetadata, content models, form, thank-you/404, QA) from scratch, reading Amazing Smiles only as a reference.
- **Palette: keep the logo colours.** Exact values from logo.svg: navy `#1B3D6E` and sky blue `#6DBDE8`. Make it look different from Amazing Smiles through fonts, layouts, section designs and neutrals, not through new brand colours.
- **Overlap with Amazing Smiles (2026-10-07):** not a concern. Build the Yardley homepage targeting and `/dentist-morrisville-pa/` as planned. The on-hold towns stay on hold, as the sheet says.
- **Client-confirmation items** (Invisalign, unconfirmed claims, office hours, drive times): follow whatever the SEO content files say when they arrive. Don't ask the practice separately.

- **Dev port 3300** (confirmed).
- **Fonts (final, 2026-10-06): Raleway for titles/headings, Google Sans for body content.** Both are Google Fonts. Self-host them through `next/font` (check which families this Next.js version's font list includes, and whether Google Sans is available there). Raleway uses old-style numerals by default, so set `font-variant-numeric: lining-nums` on headings so numbers like phone numbers and years line up. Neometric was dropped.

## Decisions still open (ask the user before coding)

- **Repo:** https://github.com/projectsoftqube-a11y/Radiant-Smiles (branch `main`; first commit 8 Oct 2026, after the Core pages were done). Commit and push only when the user asks.
- **Staging:** the Vercel link is still to come from the user.

## Radiant design system (set on the homepage, 7 Oct 2026)

These choices keep Radiant clearly different from Amazing Smiles. Reuse them on every page:
- **Signature graphic:** "radiant" light rays. These are fine sky-blue lines fanning out from one point (`components/ui/Rays.tsx`), drawn on load or on scroll. Also use the logo's tooth mark (`ToothMark`, sprite in `components/ui/Brand.tsx`) as line art. **Don't** use a swoosh or underline motif: Amazing Smiles uses one.
- **Shapes:** arched-top photos (`MediaFrame arch`, echoing the tooth crown) and squared 8px buttons, never pills. Cards have 14–22px corners.
- **Neutrals:** warm pearl (`--pearl-*`) alternating with sky tints. Use one deep-navy band per page at most (the technology band on the homepage). Never use a navy gradient with diagonal line patterns: Amazing Smiles uses that. The footer is light.
- **Homepage updates (user feedback, 7 Oct 2026):**
  - The hero photo aligns to the container's right edge.
  - The quick facts are **upper teeth hanging from a gum line** (`HeroSmile.tsx`). At ≥1200px (one row), the tiles sit side by side (the centre one widest), and a **natural pink gum** band (#f6cfd0 → #e5959c, deeper pink margin line #d98089, soft shadow onto the teeth; the user asked for real gum colour) is drawn over their tops from the measured tile positions: it arches over each tooth, dips to a point between teeth, and sweeps up to the screen edges. The tiles are a clean white (no yellow; the user rejected ivory), and their rounded domes hang into the white below. It is shaped as a real smile (lens shape): the tops follow a gentle gum arc, and the biting edges follow a steeper curve (the main tiles have per-position min-heights at ≥1200px). Decorative SVG side teeth (2.5 per side when they can stay ≥42% of a main tooth's width, the last half off-screen; otherwise 1.5; each 86% of the one before; the gum continues at full thickness past both edges with no tapering corner) sit on the same exact parabolas as the main teeth (tops on a gentle arc, tips on a steeper one), and the gum and teeth run **off both screen edges** (the user wants the smile to touch the edges; no inset corner). The side teeth's biting edges continue the main teeth's bottom curve, so they shrink smoothly. Side teeth are clipped under the gum line. The main row is narrowed at ≥1200px to leave room for them. When the tiles wrap (tablet, phone), they get normal tops and a plain smile line passes under them.
  - **The page reads as a smiling mouth:** `Jaw.tsx` (one component, `jaw="upper" | "lower"`) draws the teeth in a pink gum from the section's `[data-tooth]` tiles. The upper jaw closes the hero (quick facts); the **lower jaw closes the Family section**: its four first-visit steps are lower teeth (crowns up, on a U curve like the upper row: middle teeth lowest. The user tried a ∩ mirror and rejected it), side teeth run to the edges, and the lower gum flows into the next section's pearl. The Family section is the inside of the mouth. The lower jaw is the same geometry drawn flipped. **Opening-mouth scroll effect (desktop ≥1200px, user-approved option 1; no pinning):** the lower jaw sits in `.floor[data-mouth-floor]`. MotionController starts it lifted under the upper teeth (mouth closed, content covered by a white fade and a pearl body) and scrubs it back to its place as the section scrolls (start "top 75%": opens once the bite is three-quarters down the screen; end "bottom bottom"; scrub 0.3). Upper teeth (hero rail z6, upper gum z7) paint above the Family section (z4), so in the closed bite the upper teeth overlap the lower ones. The Family section has z-index 4 and `clip-path: inset(-14rem 0 0 0)` for the bite overlap. The hero rail padding-bottom is 1rem at ≥1200px. Smaller screens and reduced motion get a static open mouth.
  - **Inside-of-the-mouth colour (trial, 7 Oct 2026; the user may revert):** the Family section uses a rose-to-blush radial background (`--mouth-edge` #f6e0e0 near the teeth, `--mouth-mid` #fdf8f6 in the middle). The same `--mouth-edge` fills the hero's area under the upper gum (`<Jaw jaw="upper" inside="var(--mouth-edge)">`) and the fade above the lower teeth (`.floor::before`). The Nervous note is white glass. **To revert to white:** set both tokens to #ffffff in tokens.css; optionally restore the Nervous note's sky→pearl gradient.
  - **Tongue (trial, 7 Oct 2026; the user may ask to remove it):** an SVG (`.tongue` in Family.tsx/.module.css) inside the mouth floor, behind the lower teeth, with its base hidden by the lower gum. It moves with the lower jaw and is hidden on phones. The floor's margin-top was raised (to clamp(6rem, 9vw, 8.5rem)) to make room. **To remove:** delete the `<svg className={styles.tongue}>` element and the `.tongue` rules, and restore the floor margin-top to clamp(3.5rem, 6vw, 5rem).
  - Family Dentistry: a large centred H2 with **two photo pills inline between its words** (built from the content-file title), the statement, a four-step "first visit" journey with large icons, the paragraph, and the Nervous note as a soft pill banner. The user rejected both a left/right split and glass cards over a photo as looking AI-made.
  - **Office Hours & Location (redesign, 8 Oct 2026):** the week as a column chart (`WeekHours.tsx`, client): seven columns on one 8 am – 6 pm scale, bars grow down on scroll (`data-rise`), Saturday is the navy column with an "Open Saturdays" flag, Sunday is hatched. Today's column and a **live "Open now / Closed now · opens …" status** are computed in America/New_York time (useSyncExternalStore; nothing on the server). A visually hidden table carries the hours. Below: a full-width map with a glass address card on the right (Google's place card sits top left). Phones: rows with sideways bars.
  - **Membership (redesign, 8 Oct 2026):** "pay one fee, get the receipt". A glossy navy member card (light sheen) tucks into a navy card reader, and the plan table **prints out of the reader** as a paper receipt with a perforated (scalloped) bottom edge, scrubbed to scroll (`data-print`, finished by mid-screen). No zigzag here: that's the Specials tickets. The receipt shadow lives on `.paperWell` because the paper's mask would cut it.
  - **Insurance & Payment (redesign, 8 Oct 2026):** a live **plan checker** (`PlanChecker.tsx`) filters the 42 PPO plans in site.ts as you type, with a green tick per match (no match: "call to check your coverage"). Wording: "accept", never "in-network". Beside it: "Pay at your visit" method tiles (decorative) and a CareCredit block with a six-month timeline that fills on scroll (`data-grow`). All three paragraphs are verbatim. The search input needs `width: 0; min-width: 0` or it overflows at 320px.
  - **Technology (redesign, 8 Oct 2026):** a **microscope viewfinder** (`TechViewfinder.tsx`, replaces TechPanels): corner brackets, crosshair and a focus scale. Each photo does a focus pull (blur and zoom to sharp). The list beside it auto-advances every 5s with a progress line while on screen, pausing on hover or focus; no auto-advance for reduced motion. Below 992px every description stays open (no layout jumps). The rays are masked to the heading area.
  - **Services (redesign, 8 Oct 2026):** the user disliked Specials and Services sharing a background and the uneven bento ("up and down"). Services is now **white** with even **tabs** (`ServiceTabs.tsx`): five group buttons (round thumb, name, count) on the left, the chosen group's photo, H3 and links in two columns on the right. All panels stay in the HTML; below 992px the tabs hide and all five panels stack. Membership's background moved to a sky-50 tint so neighbours differ. **Scroll-driven tabs (user request, 8 Oct 2026; the one allowed pin):** at ≥992px with motion allowed, the tabs block pins under the header (centred in the free space) for 0.6 viewport heights per group; each group becomes active in turn, the active tab's bottom line fills with the scroll (`--tab-progress`), and after the last group the page moves on. A tab click scrolls to the middle of that group's share. Test with `qa/pinshots.mjs`.
  - **Your dentists (redesign 3, 8 Oct 2026):** copy and both bios on the left; on the right the two portraits side by side, level, in **smooth symmetric molar frames** (`ToothFrame.tsx`: two-lobed crown, two rounded roots; white enamel rim with a fine sky line outside it; crown sheen), light rays rising behind, and a white name plate (name + DMD) under each. The user rejected the logo-outline frame (uneven brush strokes) and the heavy navy tooth. Dr. Bhalala has no real photo, so his tooth is soft sky enamel with the full-colour logo mark; **no initials**, no "To confirm" label; his headshot is still needed.
  - **Emergency (redesign 2):** navy call card with a ringing handset; **four dental-emergency tiles** (the intro's toothache, cracked tooth, swelling and knocked-out tooth) with small line-art teeth: pain marks that throb, a crack that draws (`data-draw`), a pink gum swelling, a tooth knocked out of its dashed socket; then three visit steps (logo tooth mark in a rounded square, a rail that fills on scroll; vertical on phones; aria-hidden summaries of the intro); then the two tips and the 911 note. **No heartbeat/ECG**: the user rejected it as cardiac, not dental. The 911 safety note is a **red** card (user: emergency should read red) with the alert icon on a white chip (it beats now and then) and a faint big "911" bleeding off the corner (`data-decor-bleed`, skipped by innerclip).
  - **Reviews (redesign 2, 8 Oct 2026):** the user rejected the chat thread. Now editorial: H2 left with the two links on the right; the long review as large Raleway type in a white card with a big sky quote mark, its words filling from pale to navy with the scroll (`data-scrub-words` / `data-word` in MotionController); the short review ("Quality care") as a bold statement card on sky with rays rising behind and the logo tooth as faint line art. Initial avatars, no stars.
  - **Areas (redesign):** an **approximate map** of both banks: a winding Delaware River, the office pin with light rays (the pin is Yardley; its name sits under it), route lines that draw on scroll, and each town as one unit (an HTML dot centred on the town + its name pill on the side away from the office, so no route runs under a name). New Hope's route runs up River Road from Washington Crossing. Pills compact via a container query when the map is under 760px wide. Phones hide the pills (dots stay) and show PA/NJ lists. **After moving any town, run `qa/mapcheck.mjs`** (routes under names, overlaps, river, edges at 768–1920px).
  - **FAQ (redesign):** nine `<details>` cards in two independent columns, each with an icon chip; open cards get a navy edge and a plus that turns into a minus; there's a call button beside the H2.
  - Specials: four **tear-off tickets** with a tinted stub, a dashed tear line and a **zigzag bottom edge** (CSS mask; the shadow uses drop-shadow on the group).
  - Tuesday hours confirmed as 8 am – 5 pm, so the "to confirm" note is gone.
  - **≤1199px (user, 8 Oct 2026): no mouth.**
    - Header: the logo is on the left; the CTA, call and menu buttons are on the right. The `.nav + .actions` margin rule had kept them next to the logo.
    - Both jaws (gums, side teeth, smile line) are hidden.
    - Hero quick facts: plain white boxes (radius-l, equal heights per row, 3 + 2 centred; full-width rows on phones). The hero ends on a straight sky-200 line.
    - Family: no tongue or lower-jaw fill. The four first-visit steps are cards in a row (2 × 2 on phones), with a dashed line through the icons and four dots per card marking the step. The section ends on a straight line with normal bottom padding.
    - The mouth design, scroll effect included, is unchanged at ≥1200px.
- **Inner pages (Core, 8 Oct 2026):** shared pieces in `components/sections/shared/`:
  - `PageHero`: breadcrumb, eyebrow, H1 RiseWords, intro, buttons, a page-specific aside (centred when there's none), rays and a straight bottom line.
  - `ClosingCta`: the home final CTA, now shared.
  - `FaqAccordion`: a sticky H2 with a call button, and a `<details>` list with the first item open.
  - `components/ui/Breadcrumb` and `Portrait`: an arch frame; with no photo, sky enamel and the logo mark.
  - Content lives in `src/content/pages/*.ts` (verbatim), and schema builders in `lib/schema.ts` (`innerPage`, `breadcrumbList`, `dentistContact`, `specialOffers`, `offerList`).
  - **No line rays in any page hero** (user, 8 Oct 2026). Rays stay in the closing CTA and in-page sections only.
  - **Hero visuals (redesign 2, 8 Oct 2026):**
    - About: a fact bento (patient photo arch, a navy "Since 2009" tile, a dentists tile with avatars, Saturdays, address).
    - Staff: a "Your care team" panel (dentist avatars, three role rows).
    - Bios: an arched portrait over an offset navy arch, with a name plate (name, role, facts) overlapping its base; Bhalala shows a sky arch with the logo mark.
    - Gallery: the shade guide.
    - Reviews: a fanned deck of three review cards.
    - Offers: an offer board (the summary strip as tiles; the $89 tile is navy and wide).
    - Contact: a panel with a navy band (live status and today's hours), the NAP, and Call and Directions tiles.
  - **Other updates (user, 8 Oct 2026):**
    - Staff "Our team" shows the two dentists as cards (staffDentists), with no "to confirm".
    - The gallery shows the whitening case from the current site in a before/after slider (`ui/BeforeAfter`: range input, sweep hint on view, before left / after right); the page stays noindex until the practice confirms consent.
    - Reviews: no widget or Google button "to confirm" notes (the button appears once `googleReviewUrl` is set).
    - Offers: the $89 section is copy plus a navy visit card (the real includes list and the call button); discounts are savings rows (a counting "You save" figure and a bar of the discount against the regular price).
    - Contact: no form-processor note; the Office Hours copy is sticky at the top of its column.
  - Earlier versions of each page's visuals (some since replaced):
    - About: the "since 2009" plaque, a fact sheet, arched pillars, doctor cards, role tiles, the navy technology band, a NAP card and map.
    - Staff: fanned role cards, the team grid (empty until the practice supplies people), and role chapters with a sticky scrollspy menu.
    - Bios: an arched portrait with fact badges, a located card, a degree journey or story, link cards and an "outside the office" note.
    - Gallery: a shade guide, makeover building blocks, the whitening schedule and treatment panels. No empty case frames.
    - Reviews: a review wall with a sticky navy "why" card, review steps and the $89 banner.
    - Offers: a swinging price tag, the offer strip (plain text), the $89 card, discount cards whose figures count up (`data-count`), no-insurance options and a terms slip.
    - Contact: an address card with a live status pill, call + form, the hours table with today marked, a route table with the map, and two notes.
  - The appointment form (`components/forms/AppointmentForm`, `lib/appointment.ts`) posts to `FORM_ENDPOINT` once the HIPAA processor is confirmed. Until then it shows a call message. The thank-you is inline, with a `form_submit` event.
  - `TrackClicks` takes comma-separated events plus `data-track-*` details (`offer_click` with offer=…).
  - Motion: `html.motion`, set by an inline head script before paint, keeps `[data-reveal]` hidden until MotionController plays it. Items already on screen at load now animate in instead of being skipped; there's a 4s fallback, and reduced motion removes the class.
  - Long CTA labels use `longCta` sizing (14px on phones, 13px without the icon under 390px) so they stay on one line.
  - QA: `seocheck.mjs`; `minfont` and `revealseen` now take PAGE.
- **General Dentistry pages (8 Oct 2026):** content in `src/content/pages/general/*.ts` (`common.ts`: `pcCrumbs`, `withNap`, `CostBlock`); sections in `components/sections/general/`.
  - Shared: `ui/DataTable` (real `<table>`, `<th>`, scrolls in its own box on phones, `highlight` column); `general/Cost` (cost & insurance ledger, or a slim note when it's one paragraph; `flush` drops the top padding); `PageHero points` (bold-led bullets between intro and buttons); `ClosingCta` takes `link` (text link under the buttons) and `quote` (plain text, no Review markup).
  - Schema builders: `treatmentPage`, `medicalProcedure`, `practiceService` (areaServed Yardley), `medicalTherapy` (Arestin + Drug); `pageItemList` takes `{key, name}`.
  - Motion: `data-inview` (MotionController sets it to "in" on scroll) drives CSS-only animations; start states live under `.motion [data-inview]:not([data-inview="in"])` so no-JS/reduced motion show the end state.
  - Tracking: TrackClicks also pushes `click_book` (scheduling links), `click_offer` (special-offers links) and a page's `data-call-event` (Emergency wraps its page: `click_call_emergency`).
  - Rich: external links get `rel="noopener"` (NIDCR, MSKCC).
  - Each page's own visual: Hub: layered tooth with four protections, service directory table (cards on phones), hour track, growth-chart kids cards, navy gum-depth band, signpost table, pay tiles. Family: house of teeth, age ribbon, definition card, twin panels, restorative tiles, membership calculator (`FamilyPlan`, client). Cleaning: checkup chart, chair-side steps + quote, plaque vs tartar, X-ray film navy band, depth cards, six-month timeline, price table. Sealants: molar fissures filling, groove cross-section, painted track, split tooth. Fluoride: enamel lattice, mineral magnet, stopwatch strip, measured drop. Oral Cancer: areas-checked scan, verb cards, 14-day strip, risk tiles. Hygiene: 45° diagram + C-shape floss diagram (alt text per handoff), stroke cards, product shelf, acid-attack day chart. Arestin: pocket close-up, pill vs pocket, 7-day aftercare, caution card. Deep Cleaning: probe gauge, comparison table, steps below a gumline, aftercare road. Laser: laser beam, beam-lit steps, navy benefits. Perio: pocket chart, ruled table, visit loop, interval rows, $75 member panel. Children's: 20 baby teeth erupting, eruption ribbon, fridge chart, storybook. Emergency: live same-day board, hours table (today marked), field guide with sticky menu, red ER card, $65 member exam, red call bar on phones (replaces the site's Call/Book bar there). Night Guards: night arch with guard, morning signs, three-guard table, lab journey.
- **Patient Info pages (8 Oct 2026):** content in `src/content/pages/patient/*.ts`; sections in `components/sections/patient/`.
  - Hero buttons and closing CTAs take `CtaButton[]` (the standard call/appointment pair or a page's own label/link, the first one primary). `napCtaLine` is the NAP line closing every Patient Info page.
  - `Rich` turns the practice phone into a tel: link (no wrapping). FAQ answers use `Rich`.
  - TrackClicks adds `click_call` / `click_request_appointment` for any tel:/scheduling link on every page.
  - The appointment form has two variants: `contact`, and `scheduling` (name and phone required, reason select, generate_lead). The same `id="appointment-form"`; the scheduling final CTA jumps to `#appointment-form`.
  - Care & Comfort and its 3 children share a sticky `CareNav`. Home Care has the handoff anchors, an "On this page" jump list and a print handout (`data-print-handout`; print CSS in base.css).
  - Patient Education's "Latest Guides" is hidden until `latestPosts` has posts.
  - Registration embeds no form and no pixels.
  - Each page's own visual:
    - Hub: visit pass + bento.
    - New Patients: welcome arch + fact chips, the first-visit path, the bring checklist, the $89 navy band.
    - Scheduling: week planner (live), request desk + flow, hours tiles, red emergency card.
    - Insurance: coverage card, 3-column plan list, plan-year bars, membership table.
    - CareCredit: 6-month plan card, terms panel (amber), finance arches, apply timeline.
    - Why: reason arches, both dentists under one big arch, comfort band, week strip.
    - Registration: clipboard ticking + signature.
    - Care: now-playing card with a sound wave, the navy gentle-tech band.
    - Technology: 3D scan card (sweep), jump chips, alternating chapters.
    - Infection: cycle card, OSHA/EPA/CDC tiles, joined steps.
    - Home Care: recovery clock, timed extraction steps, aftercare cards, call-us alert.
    - Education: fanned booklets, guide shelf.
- **Type:** Raleway headings. **No 300 weight** (the user found it too thin): 400 is the lightest. The hero H1 is 500 with the key phrase in 700 via `RiseWords strong`. Section labels use the `.label` class with the full two-colour tooth mark (`/images/tooth-mark.svg`; `label-inverse` uses `tooth-mark-light.svg` on navy).
- **No marquees or tickers** (Amazing Smiles has one).
- **Text motion (user request, 8 Oct 2026: every text must animate):**
  - Header: a CSS entrance on load. The top-bar facts drop in, the logo slides in, the menu items and actions drop in one after another. It uses `backwards` fill only, so no transform stays on the menu `li`s (the mega menu positions from the bar).
  - Scroll reveals come in three kinds (MotionController `kind()`): `.label` eyebrows wipe in from the left (clip + x), `h2` headings rise out of a slot (opaque at once; y 64 → 0 while the clip opens downward), and everything else fades up.
  - Give every eyebrow, H2 and text block its own `data-reveal`; don't rely on a wrapper. The final CTA's H2, lead and buttons each have one, and so does the footer's bottom row.
  - Family section (≥1200px): its reveals are timed to when the opening jaw uncovers each element (the fade top passes the element's middle), not the 80% line.
  - Checks: `qa/textanim.mjs` (text with no animation) and `qa/revealseen.mjs` (reveals already finished when first visible), run at 1920×1080, 1440×900, 1366×768 and 390×844.
- **Links to unbuilt pages:** they render as placeholder `<a href="#" data-pending-link="/real/path/">` with a pointer cursor (user request, 7 Oct 2026), and a click does nothing. `SiteLink` checks `routes.ts`. Flip `published: true` when a page is built and every link to it goes live. `crawl.py` counts these placeholders separately and doesn't treat them as broken. This is the one exception to the "no `#` links" rule, and it applies on staging only.
- **Header (user feedback, 7 Oct 2026):**
  - The top bar's text and icons are vertically centred, and the emergency icon is the first-aid cross.
  - The sticky header keeps its full height; the logo never shrinks and always has padding.
  - The mega menu spans the full container: five columns with title rows aligned via subgrid, equal-height link rows, and the $89 offer as a strip along the bottom.
  - Submenu links have an 18px arrow that nudges right on hover, over a sky background.
- **Footer (final per the user, 7 Oct 2026):** one light pearl background. **Left:** logo, tagline, NAP, phone, Get Directions and the hours card. **Right:** three columns, each with two menus stacked: (1) Preventive & Family Dentistry, then Dentures; (2) Gum Care, then Restorative Dentistry; (3) Cosmetic Dentistry, then Patient Info. No "All …" hub links in the footer. The data is `footerColumns` in navigation.ts. No About or Areas columns and no separate band; the user rejected a 4 × 2 grid and a white services band.
- **QA scripts:** they live in `tools/from-amazing-smiles/qa/` and point at port 3300. Run them with `MSYS_NO_PATHCONV=1` in Git Bash, and use `PAGES=","` for the homepage.
  - Existing: `clipcheck`, `revealtest`.
  - Added: `textcheck` (wording against 02 Content.md), `innerclip` (text clipped inside a box), `minfont`, `console`, `fullshot`, `motionshots`, `sectionshot` (element shots by selector: `SEL`, `W`, `OUT`, `WAIT`, `OFFSET`), `mapcheck` (Areas map geometry), `pinshots` (Services scroll-driven tabs), `textanim` and `revealseen` (text animation coverage).
  - `crawl.py` is adapted to this site.

## Rules carried over from Amazing Smiles (the user's standing rules)

### Workflow
- **Never** run `next build`, `git commit` or `git push` unless the user explicitly asks in that message. Verify with `tsc`, `eslint` and the dev server instead.
- Vercel is **staging**: publish every built page (no hidden URLs). Show unconfirmed items as visible "to confirm" boxes and list what's still open.
- Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code (this Next.js version has breaking changes).
- When the user asks for a list of client items, give a clear list of what the practice must confirm.

### Content and SEO
- Page copy, titles, metas and FAQs come **verbatim** from the SEO team's content files and are stored as typed content files in `src/content/`.
- **Heading levels match the content files exactly.** Cards, footers and labels use non-heading elements.
- Business facts (NAP, hours, phone, plans) live **only** in `src/content/site.ts`; the footer, schema and pages read from there.
- Internal links go through `src/content/routes.ts`. `routes.ts` also drives `sitemap.xml` and the HTML sitemap.
- JSON-LD is built from the same content objects the page renders. FAQPage only for visible FAQs. No unverifiable ratings or AggregateRating.
- US spelling.

### Typography and UI
- **"&" instead of "and"** in every title, heading, nav/footer label, card title, link label and chip. Paragraphs, FAQ answers and metas keep "and".
- **Minimum font size 13px** (0.8125rem), everywhere.
- **CTAs:** labels stay on one line at every width, and buttons **never move** on hover or press (colour change only). Card hover lifts are fine.
- **No decorative rings or circles.** Round avatars, icon chips and round tick icons are fine.
- **No "01 / 02" section numbering.**
- **Each bespoke section design is used on one page only.** Give important sections a design that fits their content. Avoid treatment pages that all look alike.
- Motion: CSS hero entrance (H1 rising word by word, then fade-up). Every block below the hero reveals on scroll (GSAP `data-reveal`, batched). Image curtain reveals. Tasteful, with no pinning or giant statement type unless asked.
- The design is premium and fully responsive, checked at 320, 374, 390, 768, 1024, 1440 and 1920px with no horizontal overflow and no clipped content.

### Responsive system (same as Amazing Smiles)
- Breakpoints: **≤1199px, ≤991px, ≤767px, ≤575px**, plus small tweaks under 390px so CTAs still fit at 320px.
- Container: `min(var(--container-max), max(90%, 100% - 96px))`. Use the site container for pages; don't shrink it to a narrow width.
- Section padding: 100px desktop, 80px at ≤1199px, 60px at ≤767px.

### Images
- **No AI image generation, upscaling or retouching from our side.** No spending credits or touching billing without explicit approval for that batch.
- Free stock (Unsplash/Pexels) for generic images; Magnific/Freepik stock only for key images after the user approves the batch and its cost.
- Images supplied by the client or the SEO team (including banners embedded in their docs) may be used when the user asks; record where they came from.
- Never present stock or generated images as real patient results. Before/after photos only with patient consent.
- Record every image (source, licence, ID) in `src/content/images.ts`.

### Quality checks before reporting work as done
- `tsc --noEmit` and `eslint`.
- Wording check: every content-file line is present on the page. SEO check: title, meta, one H1, canonical, robots, schema types.
- Overflow check at 320/374/390/768/1024px (`tools/from-amazing-smiles/qa/clipcheck.mjs`).
- Link crawl: no broken, `#` or `javascript:` links (`crawl.py`).
- Animation coverage (`revealtest.mjs`).
- Screenshots of new sections at desktop and 374px.
- Report results plainly. If something fails, say so.
