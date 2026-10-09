# Dental Implants, Mercer County NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). This page exists only if the rerun shows demand. Town terms use honest phrasing ("near", "for … patients"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in New Jersey.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dental implants mercer county nj (primary) | pending | pending | Title, H1 and meta as "Dental Implants Near Mercer County, NJ"; first sentence; H2 "Dental Implant FAQs for Mercer County Patients" (close variant) | "Near" added to the brief's H1/title so the page doesn't imply an office in NJ. |
| implant dentist mercer county nj | pending | pending | Getting Here: "If you've been looking for an implant dentist in Mercer County, NJ…" | Exact, once. |
| dental implants trenton nj | pending | pending | Getting Here: "Patients coming for dental implants from Trenton, NJ…" | Exact, once. Trenton has no separate implant page; this page owns the term. |
| affordable dental implants nj | pending | pending | Cost section: "When you compare affordable dental implants, NJ and PA quotes…" | Natural split phrase; backed by the published $3,500 fee and $500 offer. |
| dental implants yardley pa | see parent page | - | Not targeted | Owned by `/restorative-dentistry/dental-implants/` (linked). |

**Kept off this page on purpose:**
- "dental implants yardley" and "dental implants near me": owned by `/restorative-dentistry/dental-implants/`.
- Implant-retained denture terms: owned by `/restorative-dentistry/dentures/implant-retained-dentures/` (linked).
- "All-on-4" and full-arch terms: not offered per the fact sheet; never used.
- Paid term variants: `/lp/dental-implants/` (noindex, never linked).

## 2. Role of the page and local visibility

1. Regional NJ landing page for implant searches across Mercer County. Its angle is different from the parent implant page: why New Jersey patients cross the river (published fee, free second opinion, Saturday visits), visit-by-visit planning around a NJ work week, and the drive from each Mercer town.
2. Links down to every NJ town page in the drive-time table and back to the parent implant page, so it adds a regional hub without competing with the Yardley service page.
3. Depends on the Semrush rerun: if NJ implant demand is negligible, the parent page plus the Mercer County and Trenton town pages cover these searches instead.

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale places dental implants for patients from Mercer County, NJ at 117 Floral Vale Boulevard in Yardley, PA, just across the Delaware River."
- "A single-tooth implant usually takes six to eight months from start to finish, spread over a few visits."
- "A single implant, abutment and crown is regularly $3,500 at our office, and our current offer takes $500 off."

**Checkable facts on the page:** $3,500 regular fee and $500 offer (implant, abutment and crown); free consultation and second opinion; Saturday 8 am to 2 pm; six to eight months; at least six weeks of healing for single-stage implants; cone beam CT and dental microscopes; drive-time ranges per town; PA-bound-only tolls.

**FAQ approach:** 5 questions specific to this page (How far is your office from Mercer County, NJ?; Do you accept New Jersey dental insurance for implants?; What does the $3,500 implant fee include?; How many visits will I need, and can some be on a Saturday?; Can I get a second opinion on an implant plan from another dentist?). Each answer opens with the direct answer and runs 43 to 48 words; the FAQPage JSON-LD repeats them word for word.

**NAP placement:** hero (address in the opening paragraph), Getting Here section, final CTA and footer.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title / meta length | 55 / 148 characters (limits 60 / 120-155) |
| H1 | One: "Dental Implants Near Mercer County, NJ" |
| Word count (02 body, incl. lists and FAQs) | 1229 |
| Readability | Flesch reading ease about 66 (script estimate) |
| FAQ answer lengths | 46, 45, 48, 44, 43 words (target 40-60) |
| Banned words and em dashes | None found |
| Fact check | Every fee, timeline and technology claim traced to the fact sheet or the implant page extract ("six to eight months", "minimum of six weeks of healing"). Fixed in this pass: "Most Mercer County patients choose us for…" and "Most patients cross on I-295…" (unsupported claims about patient behaviour) were reworded. |
| On-hold towns, "Bucks County", `/lp/` links | None found |
| Internal links | 13 unique; all in `url_map.md` |
| Schema validity | Every JSON-LD block parses (json.loads). Types and properties are standard schema.org: MedicalWebPage, BreadcrumbList, MedicalProcedure, Dentist, PostalAddress, City/AdministrativeArea/State, FAQPage, Question, Answer. |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 5 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. "Hopewell" in the 15–25 minute range (hero and FAQ, schema updated) → "Titusville", which is the fact sheet's 15–20 min row; Hopewell Borough time moved to section 5. "Hold a bridge or a full denture" → "replace several teeth or hold a full denture" (site implant page: "multiple teeth"); implant bridges moved to section 5. Links to the three conditional service+location pages kept (project decision). |

## 5. Information still needed from the practice

1. **Semrush rerun:** volumes for the four keywords above decide whether this page is built.
2. **Implant placement in-house:** the fact sheet lists single implants as a service; confirm implants are placed at the Yardley office (README open question) before launch.
3. **Offer terms** [CONFIRM terms]: no expiry date or fine print is published for the $500 implant offer.
4. **Technology** [CONFIRM all are current and in-house]: dental microscopes and cone beam CT are named on this page.
5. **Insurance wording:** Horizon Blue Cross, Delta Dental, Aetna, Cigna PPO, MetLife and UnitedHealthcare are named from the accepted-plans list; don't say "in-network" until confirmed.
6. **Drive times:** fact-sheet estimates; the handoff has a Google Maps check row for each town.
7. **Google Business Profile URL and place ID** for the map embed.
8. **Implant-supported bridges:** offered in-house? If yes, "replace several teeth" can name implant bridges.
9. **Hopewell Borough drive time:** the fact sheet's 15–20 min covers Hopewell / Titusville (Washington Crossing Bridge side); Hopewell Borough is farther and has no confirmed time, so the copy names Titusville.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Delaware River Joint Toll Bridge Commission: tolls and bridges](https://www.drjtbc.org/) (PA-bound toll collection; Calhoun Street Bridge limits), checked 7 Oct 2026.
- [Calhoun Street Bridge](https://en.wikipedia.org/wiki/Calhoun_Street_Bridge) · [Trenton-Morrisville Toll Bridge](https://en.wikipedia.org/wiki/Trenton%E2%80%93Morrisville_Toll_Bridge)
