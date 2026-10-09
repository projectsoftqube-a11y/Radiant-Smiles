# Invisalign, Trenton NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). This page exists only if the rerun shows demand. Town terms use honest phrasing ("near", "for … patients"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in New Jersey.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| invisalign trenton nj (primary) | pending | pending | Title, H1 and meta as "Invisalign Near Trenton, NJ"; first sentence; FAQ H2 "Invisalign FAQs for Trenton Patients" (close variant) | "Near" added so the page doesn't imply an office in Trenton. |
| clear aligners trenton nj | pending | pending | Body: "Choosing clear aligners as a Trenton, NJ patient…" | Exact, once. |
| invisible braces trenton nj | pending | pending | Body: "parents looking for invisible braces for Trenton, NJ teenagers…" | Exact, once; the page also explains there are no brackets or wires. |
| invisalign yardley / invisalign cost | see parent pages | - | Not targeted | Owned by `/cosmetic-dentistry/invisalign/` and `/cosmetic-dentistry/invisalign/invisalign-cost/` (both linked). |

**Kept off this page on purpose:**
- "invisalign near me" and "invisalign yardley": owned by `/cosmetic-dentistry/invisalign/`.
- "invisalign teen": owned by `/cosmetic-dentistry/invisalign/invisalign-teen/` (linked).
- "orthodontist trenton": never used (no orthodontist title).
- Paid Invisalign LP: `/lp/invisalign/` (noindex, never linked).

## 2. Role of the page and local visibility

1. Trenton-specific Invisalign page built around the reality of aligner treatment: about a year of check-ups every six weeks, so the drive, Saturday hours and a published fee matter more than for a one-off visit.
2. Links up to the Invisalign, Invisalign Teen and Invisalign Cost pages and back to the Trenton town page and hub.
3. Two gates: Semrush demand and confirmed certified Invisalign provider status.

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale offers Invisalign® clear aligners to Trenton, NJ patients at 117 Floral Vale Boulevard in Yardley, PA, about 15 minutes away, depending on traffic."
- "Invisalign straightens teeth with a series of custom clear aligners, and the whole process starts with one consultation visit."
- "For adults, Invisalign takes about one year on average."

**Checkable facts on the page:** $5,800 regular fee and $1,000 offer; free consultation and second opinion; wear 20 to 22 hours a day; new aligners about every two weeks; check-ups about every six weeks; adults about one year; Invisalign Teen blue compliance indicators and replacement aligners; orthodontic benefits up to $3,500 on some plans; FSA; Saturday 8 am to 2 pm; about 15 minutes from Trenton.

**FAQ approach:** 5 questions specific to this page (How long does Invisalign take?; How often will I need to drive to Yardley from Trenton?; Does New Jersey dental insurance cover Invisalign?; Is the Invisalign consultation free?; Can teenagers from Trenton get Invisalign?). Each answer opens with the direct answer and runs 41 to 50 words; the FAQPage JSON-LD repeats them word for word.

**NAP placement:** hero (address in the opening paragraph), Getting Here section, final CTA and footer.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title / meta length | 44 / 149 characters (limits 60 / 120-155) |
| H1 | One: "Invisalign Near Trenton, NJ" |
| Word count (02 body, incl. lists and FAQs) | 1048 |
| Readability | Flesch reading ease about 64 (script estimate) |
| FAQ answer lengths | 50, 49, 46, 45, 41 words (target 40-60) |
| Banned words and em dashes | None found |
| Fact check | Treatment facts from the Invisalign, Invisalign Teen and Invisalign Cost page extracts ("approximately one year", "20 to 22 hours a day", "every six weeks or so", "BPA-free clear plastic", blue compliance dots, replacement aligners). No orthodontist title, no "guaranteed" results. |
| On-hold towns, "Bucks County", `/lp/` links | None found |
| Internal links | 9 unique; all in `url_map.md` |
| Schema validity | Every JSON-LD block parses (json.loads). Types and properties are standard schema.org: MedicalWebPage, BreadcrumbList, MedicalProcedure, Dentist, PostalAddress, City/AdministrativeArea/State, FAQPage, Question, Answer. |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 5 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 3 findings (0 errors, 3 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Records wording → "photos, X-rays and a scan or impressions", the same on every Invisalign page (iTero use moved to section 5). "Many patients find it easiest to book…" → "you can book your next check-up before you leave". FAQ "so most patients can fit visits…" → "so it's easier to fit visits…" (schema updated). |

## 5. Information still needed from the practice

1. **Certified Invisalign provider** [CONFIRM certified provider]: required before this page is built (and before the parent Invisalign pages show any provider badge).
2. **Semrush rerun:** volumes for the keywords above decide whether this page is built.
3. **Offer terms** [CONFIRM terms]: no expiry date or fine print is published for the $1,000 Invisalign offer.
4. **Insurance figure:** "up to $3,500" orthodontic coverage comes from the current Invisalign cost page; confirm the practice wants it published.
5. **Monthly payments:** the site mentions monthly payment options without naming a provider; confirm what is offered (in-house plan or CareCredit only).
6. **Drive time:** fact-sheet estimate; Google Maps check row in the handoff.
7. **[CONFIRM iTero for Invisalign]** Are Invisalign records taken with the iTero scanner instead of impressions? Until confirmed, every Invisalign page uses "photos, X-rays and a scan or impressions"; switch all six pages together once confirmed.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Delaware River Joint Toll Bridge Commission: tolls and bridges](https://www.drjtbc.org/) (PA-bound toll collection; Calhoun Street Bridge limits), checked 7 Oct 2026.
- [Calhoun Street Bridge](https://en.wikipedia.org/wiki/Calhoun_Street_Bridge) · [Trenton-Morrisville Toll Bridge](https://en.wikipedia.org/wiki/Trenton%E2%80%93Morrisville_Toll_Bridge)
