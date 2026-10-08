# New Patients: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **dentist yardley accepting new patients** (primary) | pending | pending | Written as "Yardley dentist accepting new patients": title, meta, H1, first sentence, final CTA H2 | The brief's word order isn't natural English. Google treats the two orders as the same query, so the readable version is used (5 uses including title and meta). |
| dentist accepting new patients near me | 2,400 | 6 | Not written as a phrase | "Near me" is matched by proximity, the Google Business Profile and NAP, not by the words. The page supports it with "accepting new patients", the address and the Yardley H1. |
| new patient dentist near me | 170 | 59 | Not written as a phrase | Same reasoning. "New patient" appears 10+ times naturally. |
| new patient dental exam | pending | pending | Step 3: "Your new patient dental exam." | Exact phrase once. |
| what to expect at first dentist appointment | pending | pending | H2 "What to Expect at Your First Dental Visit" | Close variant in an H2. |
| what happens at a new patient dental visit | pending | pending | FAQ "What happens at a new patient dental visit?" | Exact question; answer is the quotable definition of the visit. |

**Kept off this page on purpose:** the $89 offer is mentioned but the offer keywords belong to `/special-offers/`; insurance plan names are limited to five examples (the full list and "PPO" terms belong to `/patient-information/insurance-payment-options/`); the full forms process belongs to `/patient-information/patient-registration/`.

## 2. Role of the page

The main landing page for people choosing a new dentist, and the target of the hero text link on most pages. It absorbs `/patient-information/first-visit/` by 301, so all of that page's specific facts are carried over: the under-18 guardian rule, what to bring (previous X-rays, medication list, insurance forms), how to have X-rays forwarded, the medical conditions and medications to tell us about, and "treatment can usually be done or started the same day". The page answers the three big objections in order: what happens (steps), what it costs (the $89 visit, membership plan, PPO), and how to prepare (what to bring, forms).

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Radiant Smiles @ Floral Vale is a Yardley dentist accepting new patients for family, cosmetic and restorative care."
- "Your first appointment usually consists of a comprehensive exam and a review of your treatment options."
- "All patients under the age of 18 must be accompanied by a parent or guardian."
- "Uninsured new patients can book the $89 New Patient Visit Special, which includes a cleaning, X-rays and an exam."

Extractable structures: a numbered 4-step first visit, a "what to bring" checklist, a health checklist.

Checkable facts: $89 and its inclusions, $150 membership and 15% discount, the guardian rule, the X-ray forwarding process, named conditions and medications, five named PPO carriers. NAP in the quick facts strip and final CTA.

FAQs: five, 42–49 words each, all practice-specific and naming the practice where the answer depends on its policy.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check against the fact sheet and the first-visit and new-patients extracts | All facts traced. "Usually"/"often" hedges kept from the old first-visit page. Oral cancer screening at every exam is in the fact sheet. No visit length given (not published). Removed a draft "Meet your dentists" section to keep the page within length; the doctors are covered on Why Choose Us and the bios. |
| Banned words / em dashes | None found (script check). |
| Internal links | 4 unique internal URLs, all in the live URL map. `/patient-information/first-visit/` is not linked (it 301s here). |
| Schema validity | Both JSON-LD blocks parse; MedicalWebPage, BreadcrumbList and FAQPage types and properties exist in schema.org. |
| Schema ↔ visible content | Name/description equal title/meta; 5 FAQ questions and answers match the page word for word (script check). |
| Stats | words about 835 after the QA pass (was 827; brief 600–800; the quick facts and button labels account for the overage) · Flesch 65 · title 53 · meta 152 · H1 "Yardley Dentist Accepting New Patients" |
| Independent fact-check (7 Oct 2026) | 1 finding (1 error, 0 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. "Complete … online through our secure patient form" and the hero link "Fill in your patient forms before you arrive" replaced with call-for-forms wording ("Registration forms: call (215) 860-4600 and we'll get them to you before your visit"; link "Get your patient forms before you arrive"). Online wording kept in the handoff for when a HIPAA provider with a BAA is live. |

## 5. Information still needed from the practice

1. **$89 New Patient Visit Special:** expiry date or fine print, and whether it applies to children.
2. **First visit length:** how long should a new patient plan for? (Not published, so not stated.)
3. **Insurance forms:** does the office still want patients to bring "completed dental insurance forms" (old page), or just the insurance card once online registration is live?
4. **Secure patient forms provider [CONFIRM]:** which HIPAA provider, is a BAA signed, and the go-live date. Until then this page says to call for the forms; the online wording is in the handoff.
5. **Children:** confirm the age the practice sees children from (fact sheet: first visit just after the first birthday) before adding it here.
6. **Tuesday hours** (affects the scheduling link and Saturday messaging only indirectly).

## Sources

- Fact sheet `/home/claude/rs/fact_sheet.md` (offers, membership, insurers, services, oral cancer screening)
- radiant-smiles.com extracts, 7 Oct 2026: `/patient-information/new-patients/`, `/patient-information/first-visit/` (301 source), `/special-offers/`, `/patient-information/insurance-payment-options/`
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
