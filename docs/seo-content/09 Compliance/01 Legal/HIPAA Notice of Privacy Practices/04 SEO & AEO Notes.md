# HIPAA Notice of Privacy Practices: SEO, Local and AEO/GEO Notes

Draft v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. This is a compliance page first: its job is to meet the HIPAA notice requirements in plain English. SEO is secondary.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **hipaa notice of privacy practices** (primary) | n/a | n/a | Title tag, H1, first sentence of the hero, footer link anchor ("Notice of Privacy Practices") | The brief gives no volume. Searches are almost all navigational (patients looking for this practice's notice), so exact naming matters more than volume. |
| radiant smiles privacy / radiant smiles hipaa (brand) | n/a | n/a | Title tag, meta, hero, NAP | Brand plus document name lets patients find the notice from a search engine. |
| notice of privacy practices dentist yardley | n/a | n/a | Meta description ("Yardley, PA") and NAP | Long-tail; not forced into the copy. |

**Kept off this page on purpose:**
- All service, town and offer keywords. The notice must read as a legal document, not marketing.
- Website cookie and form terms → `/patient-information/terms/privacy/` (Website Privacy Policy). The two pages link to each other so neither competes for the other's purpose.

## 2. The page's role

1. **Legal requirement.** HIPAA requires a covered dental practice that has a website about its services to post its Notice of Privacy Practices prominently on that site (45 CFR 164.520(c)(3)(i)). A footer link on every page meets "prominently".
2. **Trust signal.** A clear, readable notice and named privacy officer show patients and search engines that the practice is a legitimate healthcare provider. Health pages (YMYL) are judged partly on these transparency signals.
3. **Patient journey.** New patients are directed here from New Patients and Patient Registration, so the notice can be read before the first visit. The front desk still provides the paper notice and asks for written acknowledgment at the first visit [CONFIRM: acknowledgment process].
4. **Indexing:** index, follow. There's no reason to hide it, and patients do search for it.

## 3. How this page supports AEO and GEO

1. **Answer-first sections.** Each H2 opens with a sentence that answers its heading: what your rights are, how we use information, what choices you have, what we must do, and how to complain.
2. **Checkable facts.** Timeframes and limits are stated as the rule sets them: records usually within 30 days, a written reply to correction requests within 60 days, a six-year accounting with one free list a year, and a 180-day OCR complaint window. The OCR address, phone number and complaint portal come straight from hhs.gov.
3. **Named entity and contact.** The practice name, full address, phone and privacy officer appear as text and match the rest of the site, so an AI answer to "how do I get my records from Radiant Smiles" can give correct contact details.
4. **No unsupported claims.** No "secure", "encrypted" or "fully compliant" statements are made beyond what the law requires the practice to say.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Required HHS elements | All present, in the HHS layout: header statement, your rights, our uses and disclosures, your choices, our responsibilities, changes to the terms, effective date, privacy officer contact, complaint to the practice and to OCR, with a no-retaliation statement. |
| Wording | Paraphrased; the HHS model notice is not copied verbatim. No marketing language, no banned phrases, no em dashes. |
| OCR details | Checked against hhs.gov (filing a complaint and complaint process pages), 7 Oct 2026. |
| Title / meta length | 50 / 140 characters (limits 60 / 155) |
| Length | About 1,280 words of visible notice text, excluding [CONFIRM] notes and buttons (target 900-1,300). |
| Schema validity | JSON parses. WebPage + BreadcrumbList only; WebPage `name` and `description` equal the title and meta exactly. |

## 5. Information still needed from the practice

1. **Compliance adviser approval.** The practice's compliance adviser (or healthcare attorney) must review and approve the final text before launch. Ask them in particular to confirm:
   - any Pennsylvania-specific wording needed where state law is stricter than HIPAA;
   - whether the practice receives or keeps any substance use disorder treatment records covered by 42 CFR Part 2 (if so, the notice needs added wording under the 2024 Part 2 rule; most dental practices do not);
   - the current status of the 2024 reproductive health care privacy amendments, which a federal court vacated in 2025, so that no outdated wording is added.
2. **Privacy officer:** name, title, and a direct email or extension (the practice publishes no email today).
3. **Effective date** of the notice (must match the PDF).
4. **Fundraising:** does the practice use patient information for fundraising? Default wording: "We do not use your information for fundraising."
5. **Marketing:** does the practice use patient information for any marketing communications (for example newsletters or offers sent to patients)? If yes, the written-permission process.
6. **Records requests:** how patients ask for copies (written form, in person, by mail or through a patient portal) and any copy fee charged.
7. **Appointment reminders:** whether they are sent by call, text or email.
8. **Complaints to the practice:** whether they must be in writing.
9. **Printable PDF:** the approved PDF file for download and the paper version used at the front desk, plus the written acknowledgment form used at the first visit.

## Sources

- [HHS: Notice of Privacy Practices for Protected Health Information](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/privacy-practices-for-protected-health-information/index.html) (required content and website posting, 45 CFR 164.520)
- [HHS: Model Notices of Privacy Practices](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/model-notices-privacy-practices/index.html) (structure only; text paraphrased)
- [HHS: Filing a HIPAA Complaint](https://www.hhs.gov/hipaa/filing-a-complaint/index.html) and [Complaint Process](https://www.hhs.gov/hipaa/filing-a-complaint/complaint-process/index.html) (180-day window, mailing address, 1-877-696-6775)
- Practice facts: fact sheet and radiant-smiles.com (checked 7 Oct 2026). The current site has no Notice of Privacy Practices.
