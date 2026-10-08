# Dr. Urvishkumar Bhalala: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **dr urvishkumar bhalala** (primary) | pending | pending | Title, meta, H1, first sentence, H2 "About Dr. Urvishkumar Bhalala", FAQ 1 | Name searches come from patients checking a dentist before a visit, and from insurance directories. |
| dr bhalala dentist yardley | pending | pending | H3 "Dr. Bhalala's Dental Care in Yardley" and its paragraph | Close variant; the exact phrase reads unnaturally. |

**Kept off this page on purpose:** service and town terms. The page links to the technology page, About and Contact only.

## 2. Role of the page

The bio is an E-E-A-T page: it shows Google and AI tools a real, named dentist with a verifiable school, attached to the practice entity. It also answers the patient's question "who will treat me?" before they book. The facts are thin (school, prior practices, training in the US and India, ongoing learning, family), so the page stays short and honest rather than padded.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**
- "Dr. Urvishkumar Bhalala, DMD, is a dentist at Radiant Smiles @ Floral Vale in Yardley, PA, and a graduate of Temple University Kornberg School of Dentistry."
- "Dr. Bhalala sees patients at Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067."

**Entities:** Person (same `@id` as on the homepage, `worksFor` and `workLocation` → `#dentist`, `alumniOf` Temple University Kornberg School of Dentistry), the practice, NAP.

**FAQ approach:** 3 questions (dental school, where he practices, booking as a new patient), 41–45 words each, answer first.

**Practice-level facts kept practice-level:** the dental microscopes are described as how restorations are made "at Radiant Smiles @ Floral Vale", not as Dr. Bhalala's personal skill.

## 4. Quality checks

| Check | Result |
|---|---|
| Title / meta length | 50 / 144 characters |
| Primary keyword | Title, meta, H1, first 100 words, one H2: pass |
| Length | About 510 words (brief: 400–600) |
| Readability | Flesch about 59 |
| Banned words / claims | None. "Distinguished practices" (old site) softened to "several established dental offices". No years of experience, specialties or memberships claimed. |
| Links | All in the live URL map |
| Schema | ProfilePage + Person + BreadcrumbList + FAQPage; parses and validates; FAQ text verbatim; name/description equal title/meta |
| Independent fact-check (7 Oct 2026) | 0 page findings, plus 1 shared Core-handoff warning (FAQ rich-results note); resolved: handoff now says "Google stopped showing FAQ rich results on 7 May 2026." DMD/DDS stays in section 5. |

## 5. Information still needed from the practice

1. **Headshot [CONFIRM: required].** No photo on the current site.
2. **Degree [CONFIRM].** Site says DMD; WebMD lists DDS.
3. **Years practicing / graduation year [CONFIRM].** Not published, so not stated.
4. **"Dr. Kumar" [CONFIRM].** The current bio calls him Dr. Kumar. Does he go by that name with patients?
5. Professional memberships, licence, continuing education, areas of clinical focus (implants? cosmetic?), languages spoken. Any of these would strengthen the page and the Person schema.
6. Was he the founder of the practice in 2009? The old bio says he "started his own" practice; confirm before saying "founder".

## Sources

- Fact sheet (`00 Reference/00 Fact Sheet.md`), Dentists section; current bio page /about-us/dr-urvishkumar-bhalala/ (crawled 7 Oct 2026); WebMD listing (conflict flag only).
- [Google: ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
