# Immediate Dentures: Developer Handoff

**URL:** `/restorative-dentistry/dentures/immediate-dentures/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Immediate Dentures in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Immediate dentures in Yardley, PA are placed at the visit your teeth are removed, so you don't go without teeth while you heal. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Immediate Dentures in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Immediate dentures in Yardley, PA are placed at the visit your teeth are removed, so you don't go without teeth while you heal. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Immediate Dentures in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dentures › Immediate Dentures.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/care-and-comfort/home-instructions/`, `/patient-information/carecredit/`, `/patient-information/scheduling/`, `/restorative-dentistry/dentures/`, `/restorative-dentistry/dentures/denture-relines/`, `/restorative-dentistry/tooth-extractions/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Wording:** don't add 'same day dentures' to headings, alt text or meta until the practice confirms (brief).
- **Steps** as an ordered list.
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/",
      "name": "Immediate Dentures in Yardley, PA | Radiant Smiles",
      "description": "Immediate dentures in Yardley, PA are placed at the visit your teeth are removed, so you don't go without teeth while you heal. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Immediate Dentures",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/#procedure",
      "name": "Immediate dentures",
      "description": "Immediate dentures are made before your remaining teeth are removed and placed at the same appointment as the extractions, so you leave with teeth.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Will I leave the office with teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. With immediate dentures, your new denture is placed at the same appointment your remaining teeth are removed, so you don't go without teeth while you heal. The denture is made in advance from impressions of your teeth and gums taken before the extractions."
          }
        },
        {
          "@type": "Question",
          "name": "Why do immediate dentures need adjustments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your gums and bone shrink as they heal after extractions, so the denture gradually loosens. Your dentist may add a temporary lining or tissue conditioner during healing to keep it comfortable. After your gums have healed, the denture gets a permanent reline to fit the new shape of your mouth."
          }
        },
        {
          "@type": "Question",
          "name": "Can I see how my immediate denture looks before the extractions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, no. Because your teeth are still in place, the denture can't be tried in before they're removed, and some compromises in fit or appearance may be needed at first. Your dentist will explain what to expect and adjust the denture after placement."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after my gums heal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once healing is complete, your immediate denture is given a permanent reline so it fits your healed gums and feels more stable. Your dentist will review the fit and talk through your long-term options. Annual denture exams then keep track of the fit and the health of your mouth."
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
