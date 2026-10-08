# Patient Registration: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **radiant smiles patient forms** (primary) | pending | pending | Title, H1 ("Radiant Smiles Patient Forms and Registration"), meta, first sentence, H2 "Getting Your Radiant Smiles Patient Forms" | 5 exact uses. A branded navigational query: existing and booked patients looking for the form. |

**Kept off this page on purpose:** everything about the first visit itself → New Patients (linked).

## 2. Role of the page

A utility page for booked patients. Its job is to get forms completed before the visit and to keep health information out of insecure channels. **Flag:** the current page says "We are still working to integrate our registration system" and warns that the contact form must not be used for private health information. Since the QA pass (7 Oct 2026) the launch copy matches reality: no online form, patients call and the office gets the forms to them before the visit. The developer handoff holds the switch-over copy for the online form, to be used only once a HIPAA-compliant provider with a signed Business Associate Agreement is live, and bans advertising pixels on this page.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Registration forms: call us and we'll get them to you before your visit."
- "All patients under 18 must be accompanied by a parent or guardian at their visit."
- "Please don't send health information through our website contact or appointment forms."

Checkable facts: what the form collects, the guardian rule, the medical conditions and medications to list (from the old first-visit page).

No FAQ block: the page is short (brief: 200–400 words) and transactional.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Independent fact-check (7 Oct 2026) | 1 finding (1 error, 0 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Removed the "secure, HIPAA-compliant forms provider" claim, the form embed and "secure form" from the meta and schema `description`; launch copy now says to call for forms (project decision). Online wording moved to the handoff as switch-over copy. |
| Fact-check (writer) | Guardian rule, conditions and medications from the first-visit extract; contact-form warning and "still working to integrate our registration system" from the registration extract. |
| Banned words / em dashes | None found (script check). |
| Internal links | 3 unique internal URLs, all in the live URL map. |
| Schema validity | JSON-LD parses; WebPage and BreadcrumbList exist in schema.org. |
| Schema ↔ visible content | Name/description equal title/meta. |
| Stats | words about 345 (brief 200–400) · title 53 · meta 154 · H1 "Radiant Smiles Patient Forms and Registration" |

## 5. Information still needed from the practice

1. **[CONFIRM] Forms provider** (HIPAA-compliant, with a signed BAA) and how submissions reach the practice management software.
2. **Form contents:** the practice's own registration, medical history, consent and HIPAA acknowledgement documents, so the provider form matches them.
3. **Forms delivery [CONFIRM].** The launch copy says "call us and we'll get them to you before your visit". How does the office send them (email PDF, mail, or hand them over on arrival), and is there a go-live date for online registration?
4. **Minors:** may a guardian sign electronically, and does the practice need the guardian present for every visit or only the first? (Copy uses the old site's rule: all patients under 18 accompanied.)
5. **Insurance details requested:** confirm the fields (subscriber name and date of birth, insurer, member ID) match what the front desk needs.

## Sources

- radiant-smiles.com extracts, 7 Oct 2026: `/patient-information/patient-registration/`, `/patient-information/first-visit/`
- [HHS: Use of online tracking technologies by HIPAA covered entities and business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html) (part of this guidance was vacated by a federal court in 2024 for unauthenticated pages; a page that collects health information remains the cautious case, so no ad pixels here)
