# Dentures: Developer Handoff

**URL:** `/restorative-dentistry/dentures/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dentures in Yardley, PA | Full & Partial | Radiant Smiles</title>
<meta name="description" content="Full, partial, immediate and implant-retained dentures in Yardley, PA, plus annual denture exams, relines and same-day repairs. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dentures/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentures in Yardley, PA | Full & Partial | Radiant Smiles">
<meta property="og:description" content="Full, partial, immediate and implant-retained dentures in Yardley, PA, plus annual denture exams, relines and same-day repairs. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dentures/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dentures in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dentures.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/preventative-care/oral-cancer-screening/`, `/restorative-dentistry/dentures/denture-relines/`, `/restorative-dentistry/dentures/immediate-dentures/`, `/restorative-dentistry/dentures/implant-retained-dentures/`, `/restorative-dentistry/dentures/partial-dentures/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Sub-hub:** Dentures is the parent of Partial, Immediate, Implant-Retained and Relines & Repairs; those pages use the breadcrumb Home › Restorative Dentistry › Dentures › [page].
- **301s:** `/restorative-dentistry/dentures/denture-care/` and `/restorative-dentistry/dentures/exams-maintenance/` must 301 to this URL. Their content is merged into 'Denture Care' and 'Annual Denture Exams and Maintenance'.
- **Suggested images:** suggested alt "Full upper and lower dentures at Radiant Smiles @ Floral Vale, Yardley, PA".
- **301 redirects into this page:** `/restorative-dentistry/dentures/denture-care/`, `/restorative-dentistry/dentures/exams-maintenance/` → `/restorative-dentistry/dentures/`. One hop, no chains; update internal links and drop the old URLs from sitemap.xml.
- **Tracking (all pages):** fire separate events for call clicks (`call_click`), appointment button clicks (`appointment_click`) and internal offer/financing link clicks (`offer_click`, `financing_click`).
- **Last reviewed date:** show "Last reviewed 7 Oct 2026" near the end of the page (matches `lastReviewed` in the schema); update both when the content is reviewed.

## 3. Structured data (JSON-LD)

Two `<script type="application/ld+json">` blocks, server-rendered. The business is referenced by `@id` only (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the Home page. Do not add Review or AggregateRating markup.

### 3a. Core (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/",
      "name": "Dentures in Yardley, PA | Full & Partial | Radiant Smiles",
      "description": "Full, partial, immediate and implant-retained dentures in Yardley, PA, plus annual denture exams, relines and same-day repairs. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/#breadcrumb",
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
          "name": "Restorative Dentistry",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dentures",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dentures/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/#procedure",
      "name": "Dentures",
      "description": "Dentures are replacement teeth, most of them removable, that fill in for missing teeth and support your cheeks and lips, so you can eat, speak and smile with confidence.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/"
    }
  ]
}
```

### 3b. FAQPage (optional)

FAQ rich results are limited to a few sites, but the markup keeps the Q&A machine-readable for AI assistants. Text matches the visible FAQs word for word.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long do dentures last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dentures don't last forever, because the gums and bone under them slowly change shape. A hard reline is usually recommended about every two years to keep the fit snug, and worn or loose dentures eventually need replacing. Annual denture exams at Radiant Smiles @ Floral Vale help you know when it's time."
          }
        },
        {
          "@type": "Question",
          "name": "How should I clean my dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brush your dentures inside and out every day with a soft, large nylon denture brush and denture cream rather than toothpaste, which is too abrasive. Rinse them in cold water, never hot, because heat can warp them. When they're out of your mouth, keep them covered in water or a denture-cleaning solution."
          }
        },
        {
          "@type": "Question",
          "name": "Do I still need dental checkups if I wear dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. An annual exam checks the fit and bite of your denture, the health of your gums and the bone underneath, and includes an oral cancer screening. Your denture is also cleaned and polished, and checked for cracks, chips and loose teeth, so small problems are fixed early."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get dentures on the same day my teeth are removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with immediate dentures. Impressions are taken before your extractions, and the dentures are placed at the extraction appointment, so you leave with teeth. As your gums heal and shrink, the dentures need adjustments and later a permanent reline to fit well."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my denture breaks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call Radiant Smiles @ Floral Vale at (215) 860-4600. Cracked or broken dentures can often be repaired on the same day. Don't try to glue the denture yourself, because household glues can damage the material and change the fit. Bring all the broken pieces with you to the appointment."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

- `MedicalWebPage.name` and `description` equal the title tag and meta description exactly.
- `MedicalProcedure.description` is the first sentence of the page copy, word for word. If that sentence changes, update the schema.
- Every FAQ question and answer in 3b must match the visible FAQ text exactly. Edit both together.
- Validate after deploy with Google's Rich Results Test and validator.schema.org.
