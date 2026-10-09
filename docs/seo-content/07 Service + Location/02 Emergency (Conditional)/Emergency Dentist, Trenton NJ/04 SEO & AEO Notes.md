# Emergency Dentist, Trenton NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). This page exists only if the rerun shows demand. Town terms use honest phrasing ("near", "for … patients"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in New Jersey.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| emergency dentist trenton nj (primary) | pending | pending | Title, H1 and meta as "Emergency Dentist Near Trenton, NJ"; first sentence ("an emergency dentist for Trenton, NJ patients"); FAQ H2 | "Near" added so the page doesn't imply an office in Trenton. |
| emergency dental care trenton nj | pending | pending | H2 "Emergency Dental Care Costs for Trenton, NJ Patients" | Exact phrase inside the H2. |
| same day dentist trenton nj | pending | pending | Body: "When you need a same-day dentist, Trenton, NJ patients should call…" | Exact, once; every same-day mention is hedged ("often", "every attempt"). |
| toothache trenton nj | pending | pending | Body: "A toothache in Trenton, NJ that starts after our office has closed…" | Exact, once. |
| emergency dentist yardley / near me | see parent page | - | Not targeted | Owned by `/emergency-dentistry/` (linked). |

**Kept off this page on purpose:**
- "emergency dentist near me" and "emergency dentist yardley": owned by `/emergency-dentistry/`.
- "24 hour emergency dentist" terms: never targeted (the practice isn't open 24/7 or on Sunday).
- Root canal terms: owned by `/restorative-dentistry/root-canal/` (linked).
- Paid emergency LP: `/lp/emergency-dentist/` (noindex, never linked).

## 2. Role of the page and local visibility

1. Trenton-specific emergency page: route over the river, what to do before setting off, and what an emergency visit costs for NJ patients. The parent `/emergency-dentistry/` page keeps the Yardley and near-me terms.
2. Strong call intent, so the layout is call-first (one hero button) with the safety line and full hours on the page.
3. Links back to the Trenton town page and the hub; the Trenton page links here only if this page is built.

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is an emergency dentist for Trenton, NJ patients, at 117 Floral Vale Boulevard in Yardley, PA, about 15 minutes away over the river, depending on traffic."
- "A dental emergency is any problem that causes significant pain, damages a tooth or shows signs of infection."
- "We're open Saturday from 8 am to 2 pm and closed on Sunday."

**Checkable facts on the page:** Emergency slots reserved every business day; Saturday 8 am to 2 pm; closed Sunday; 30-minute limited exam; knocked-out tooth in milk or saliva; $65 member emergency exam with X-ray; digital X-rays at about one-sixth of film radiation; full weekly hours; about 15 minutes from Trenton; PA-bound-only tolls.

**FAQ approach:** 4 questions specific to this page (Can I be seen the same day if I'm coming from Trenton?; Are you open on weekends for dental emergencies?; What should I do with a knocked-out tooth on the way from Trenton?; Do you accept New Jersey dental insurance for emergency visits?). Each answer opens with the direct answer and runs 46 to 51 words; the FAQPage JSON-LD repeats them word for word.

**NAP placement:** hero (address in the opening paragraph), Getting Here section, final CTA and footer.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title / meta length | 51 / 143 characters (limits 60 / 120-155) |
| H1 | One: "Emergency Dentist Near Trenton, NJ" |
| Word count (02 body, incl. lists and FAQs) | 1228 |
| Readability | Flesch reading ease about 70 (script estimate) |
| FAQ answer lengths | 51, 48, 46, 47 words (target 40-60) |
| Banned words and em dashes | None found |
| Fact check | Emergency facts from the emergency page extracts and the fact sheet. Not used: "walk-in accommodations attempted" (call-first instead), any 24/7 or Sunday claim. Fixed in this pass: "Most patients cross on US-1…" (unsupported) and "Trenton, NJ patients do best by calling…" ("best" is a banned word) were reworded. |
| On-hold towns, "Bucks County", `/lp/` links | None found |
| Internal links | 7 unique; all in `url_map.md` |
| Schema validity | Every JSON-LD block parses (json.loads). Types and properties are standard schema.org: MedicalWebPage, BreadcrumbList, Service, Dentist, PostalAddress, City/AdministrativeArea/State, FAQPage, Question, Answer. |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |

## 5. Information still needed from the practice

1. **Semrush rerun:** volumes for the keywords above decide whether this page is built.
2. **Tuesday hours** [CONFIRM: site prints "5:00 AM"]: shown in the hours table with a bracket that must be removed before launch.
3. **Same-day wording:** "every attempt is made to see you that day" comes from the current site; confirm it still reflects how emergency slots are handled.
4. **Technology** [CONFIRM all are current and in-house]: digital X-rays and dental microscopes.
5. **Insurance wording:** named plans are from the accepted-plans list; don't say "in-network" until confirmed.
6. **Drive time:** fact-sheet estimate; Google Maps check row in the handoff.
7. **Google Business Profile URL and place ID** for the map embed.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Delaware River Joint Toll Bridge Commission: tolls and bridges](https://www.drjtbc.org/) (PA-bound toll collection; Calhoun Street Bridge limits), checked 7 Oct 2026.
- [Calhoun Street Bridge](https://en.wikipedia.org/wiki/Calhoun_Street_Bridge) · [Trenton-Morrisville Toll Bridge](https://en.wikipedia.org/wiki/Trenton%E2%80%93Morrisville_Toll_Bridge)
