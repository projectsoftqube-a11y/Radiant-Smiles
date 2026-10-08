# Oral Cancer Screening: Developer Handoff

**URL:** `/preventative-care/oral-cancer-screening/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Oral Cancer Screening in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="An oral cancer screening is part of every checkup at Radiant Smiles @ Floral Vale in Yardley, PA. See what we check and the warning signs to watch.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/">
<meta property="og:type" content="website">
<meta property="og:title" content="Oral Cancer Screening in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="An oral cancer screening is part of every checkup at Radiant Smiles @ Floral Vale in Yardley, PA. See what we check and the warning signs to watch.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Oral Cancer Screening in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Oral Cancer Screening.
- **Health information:** link "National Institute of Dental and Craniofacial Research (NIDCR)" in the warning-signs section to https://www.nidcr.nih.gov/health-info/oral-cancer (external link, `rel="noopener"`).
- **No images of lesions or cancer.** A photo of a routine exam is fine.
- **No stats:** don't add incidence figures (the old page's "53,000 Americans" had no source).
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Dentist checking a patient's mouth during an oral cancer screening at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + MedicalProcedure (oral cancer screening), plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/",
      "name": "Oral Cancer Screening in Yardley, PA | Radiant Smiles",
      "description": "An oral cancer screening is part of every checkup at Radiant Smiles @ Floral Vale in Yardley, PA. See what we check and the warning signs to watch.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.radiant-smiles.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Preventive Care",
          "item": "https://www.radiant-smiles.com/preventative-care/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Oral Cancer Screening",
          "item": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/#procedure",
      "name": "Oral cancer screening",
      "description": "An oral cancer screening is a quick check of your mouth, neck and throat for sores, patches or lumps that could be an early sign of cancer.",
      "url": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/"
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. Include it only while the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does an oral cancer screening take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An oral cancer screening takes just a few minutes. At Radiant Smiles @ Floral Vale, it's part of every regular checkup in Yardley, so it happens during your exam without a separate appointment. The dentist looks at and feels the tissues of your mouth, neck and throat."
          }
        },
        {
          "@type": "Question",
          "name": "Does an oral cancer screening hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The screening is a visual check plus gentle pressure with the dentist's fingers on your mouth, neck and throat to feel for lumps. There are no needles, and nothing is cut or removed during the screening itself, and it's done as part of your normal exam."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if the dentist finds something?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The dentist will explain what they see and may ask you to come back in a short time to check it again. If the area is still a concern, the next step may be a biopsy, where a small sample of cells is sent to a lab for testing so you get a clear answer."
          }
        },
        {
          "@type": "Question",
          "name": "Is an oral cancer screening covered by insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Radiant Smiles @ Floral Vale, the screening is part of your regular checkup, so it doesn't need its own appointment. Many dental plans cover two checkups a year, and coverage depends on your plan. Call (215) 860-4600 and we'll check your coverage before your visit."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the procedure description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
