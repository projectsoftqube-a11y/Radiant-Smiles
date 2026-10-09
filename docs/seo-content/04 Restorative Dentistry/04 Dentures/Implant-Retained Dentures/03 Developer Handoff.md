# Implant-Retained Dentures: Developer Handoff

**URL:** `/restorative-dentistry/dentures/implant-retained-dentures/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Implant-Retained Dentures in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Implant dentures in Yardley, PA that snap onto implants or stay fixed in place: ball, bar and screw-retained options. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Implant-Retained Dentures in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Implant dentures in Yardley, PA that snap onto implants or stay fixed in place: ball, bar and screw-retained options. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Implant-Retained Dentures in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dentures › Implant-Retained Dentures.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/restorative-dentistry/dental-implants/`, `/special-offers/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Offer accuracy:** the page states that the $500 implant offer covers a single implant, abutment and crown and does not price an implant denture. Keep that line if the offer wording changes.
- **Steps** as an ordered list.
- **Suggested images:** suggested alt "Implant-retained lower denture on ball attachments, Radiant Smiles @ Floral Vale".
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/",
      "name": "Implant-Retained Dentures in Yardley, PA | Radiant Smiles",
      "description": "Implant dentures in Yardley, PA that snap onto implants or stay fixed in place: ball, bar and screw-retained options. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/#breadcrumb",
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
          "name": "Implant-Retained Dentures",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/#procedure",
      "name": "Implant-retained dentures",
      "description": "An implant-retained denture is a denture that attaches to dental implants in your jawbone, so it stays put when you eat and talk instead of resting loosely on your gums.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are snap-in dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Snap-in dentures are implant-retained dentures that click onto attachments on two implants in the lower jaw. They're more stable than a conventional denture, though they can move a little, and the attachments need periodic adjustment. You remove them to clean them, then snap them back into place."
          }
        },
        {
          "@type": "Question",
          "name": "How many implants do I need for an implant denture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the style. A ball-attachment (snap-in) lower denture uses two implants, a bar-attachment denture uses four to six, and a fixed screw-retained denture uses five or more. The upper jaw usually needs more implants because the bone is less dense. Your dentist will recommend a number after checking your bone with X-rays and, where needed, 3D imaging."
          }
        },
        {
          "@type": "Question",
          "name": "Are implant-retained dentures removable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some are and some aren't. Ball-attachment and bar-attachment dentures are removable, so you take them out to clean them. A screw-retained denture is fixed in place, doesn't rest on your gums and is cleaned without removing it. Your dentist will explain which type suits your bone and goals."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get an implant denture if I already wear dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Many people choose implant-retained dentures because a conventional denture keeps slipping. An evaluation with X-rays and, where needed, cone beam CT imaging shows whether you have enough bone for implants, and which attachment style would work. Your dentist will explain the options and the cost."
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
