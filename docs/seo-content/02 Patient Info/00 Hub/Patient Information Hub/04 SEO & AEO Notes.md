# Patient Information: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **yardley dental office** (primary) | pending | pending | Title tag, meta description, H1 "Patient Information for Our Yardley Dental Office", first sentence of the hero, New Patients H2 opener, closing H2 "Plan Your Visit to Our Yardley Dental Office", first FAQ | 7 exact uses including title and meta. Pending Semrush; chosen because it is the one generic, non-service term a "patient information" page can own. |
| radiant smiles / radiant smiles @ floral vale (brand) | n/a | n/a | Hero, FAQs, NAP | Brand + "Yardley" in the same sentence ties the entity to the place. |

**Kept off this page on purpose (one keyword, one page):**
- "dentist accepting new patients" → `/patient-information/new-patients/`
- PPO / insurance terms → `/patient-information/insurance-payment-options/`
- financing / CareCredit terms → `/patient-information/carecredit/`
- "dentist appointment yardley" → `/patient-information/scheduling/`
- CBCT / technology terms → `/patient-information/care-and-comfort/advanced-technology/`

The hub only summarises and links to those pages, with descriptive anchors.

## 2. Role of the page

Section landing page for 11 child pages. It absorbs two thin old URLs by 301 (`/patient-information/introduction/` and `/patient-information/services/`), so their links and any rankings consolidate here. Every child page is linked from a card with a descriptive anchor, and the CollectionPage + ItemList schema lists the same 11 URLs, which gives search engines a clean map of the section. The page also carries the main local facts (address, Saturday hours, the $89 visit, PPO plans) so it can answer "what do I need to know before I go" queries on its own.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Your first visit at our Yardley dental office is a comprehensive evaluation."
- "Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, Yardley, PA 19067, in Lower Makefield Township, Bucks County."
- "The office is open on Saturdays from 8:00 am to 2:00 pm."

Checkable facts: address and township, Saturday hours, the $89 offer and what it includes, the $150 membership plan and 15% discount, six named PPO carriers, payment methods, the under-18 guardian rule, Trenton about 15 minutes away (fact sheet drive table, "depending on traffic").

Entities: Radiant Smiles @ Floral Vale, Yardley, Lower Makefield Township, Bucks County, Trenton and Ewing (NJ), CareCredit, named insurers. NAP sits in the hero, location FAQ and final CTA, matching the homepage schema.

FAQ approach: three questions people ask before booking (accepting new patients, where, Saturday), each 42–47 words and starting with a direct answer. Hours FAQ left out on purpose: Tuesday's closing time is unconfirmed, and the full table lives on the Scheduling page.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check against the fact sheet and site extracts | Every fact traced to the fact sheet (NAP, hours, offers, membership, insurers, payment) or the first-visit extract (guardian rule). No ratings, no "in-network", no 24/7 or Sunday claims. |
| Banned words / em dashes | None found (script check). |
| Internal links | 11 unique internal URLs (every child page), all in the live URL map; no on-hold towns or merged URLs. |
| Duplicate copy across Patient Info pages | Script check of every 8+ word sentence: two repeated sentences found and rephrased. |
| Schema validity | Both JSON-LD blocks parse; types and properties (CollectionPage, ItemList, BreadcrumbList, FAQPage) exist in schema.org. |
| Schema ↔ visible content | WebPage name/description equal the title and meta; all 3 FAQ questions and answers match the page word for word (script check); ItemList URLs match the hub links. |
| Stats | words about 630 after the QA pass (was 619; brief 400–600; quick facts and link labels account for the overage) · Flesch 51 · title 58 · meta 153 · H1 "Patient Information for Our Yardley Dental Office" |
| Independent fact-check (7 Oct 2026) | 1 finding (1 error, 0 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Online-registration claim ("complete … online", "The registration form is secure") replaced with "Registration forms: call (215) 860-4600 and we'll get them to you before your visit" (no online form exists yet; site says "We are still working to integrate our registration system"). Online wording kept in the handoff for when a HIPAA provider with a BAA is live. |

## 5. Information still needed from the practice

1. **Tuesday hours** (site prints "8:00 AM - 5:00 AM"). Not shown on this page, but "open six days a week" depends on it.
2. **$89 New Patient Visit Special:** any expiry date or fine print.
3. **Insurance list:** is the 42-plan list current? Can any carrier be described as in-network?
4. **Secure patient forms provider [CONFIRM]** (see the Patient Registration handoff): which HIPAA provider, is a BAA signed, and the go-live date. Until then the hub says to call for the forms; the online wording is in the handoff.
5. **Sedation options** actually offered (copy says only "ask about sedation options").

## Sources

- Fact sheet `/home/claude/rs/fact_sheet.md` (NAP, hours, offers, membership plan, insurers, payment, drive times)
- radiant-smiles.com extracts, 7 Oct 2026: `/patient-information/`, `/patient-information/introduction/`, `/patient-information/services/`, `/patient-information/first-visit/`, `/patient-information/insurance-payment-options/`, `/patient-information/why-choose-us/`
- Redirect plan: `00 Reference/Radiant Smiles - Keyword Map & Sitemap.xlsx`, Redirects (301) tab
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
