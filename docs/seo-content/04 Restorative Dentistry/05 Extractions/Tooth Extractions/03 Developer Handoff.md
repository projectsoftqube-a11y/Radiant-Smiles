# Tooth Extractions: Developer Handoff

**URL:** `/restorative-dentistry/tooth-extractions/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Tooth Extraction in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Tooth extraction in Yardley, PA under local anesthetic, with options to replace the tooth and same-day emergency slots. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Tooth Extraction in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Tooth extraction in Yardley, PA under local anesthetic, with options to replace the tooth and same-day emergency slots. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Tooth Extractions in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Tooth Extractions.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/care-and-comfort/home-instructions/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/restorative-dentistry/dental-bridges/`, `/restorative-dentistry/dental-implants/`, `/restorative-dentistry/dentures/immediate-dentures/`, `/restorative-dentistry/dentures/partial-dentures/`, `/restorative-dentistry/root-canal/`, `/restorative-dentistry/wisdom-teeth-removal/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **CTA order:** call first (pain-driven visits).
- **Aftercare** sub-sections as plain HTML text, not an image or PDF, so they can be quoted.
- **Offer mention:** implant offer must match `/special-offers/`.
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/",
      "name": "Tooth Extraction in Yardley, PA | Radiant Smiles",
      "description": "Tooth extraction in Yardley, PA under local anesthetic, with options to replace the tooth and same-day emergency slots. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/#breadcrumb",
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
          "name": "Tooth Extractions",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/#procedure",
      "name": "Tooth extraction",
      "description": "A tooth extraction removes a tooth that is too damaged, diseased or badly positioned to keep.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does a tooth extraction hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A local anesthetic numbs the tooth, jawbone and gums first, so you should feel pressure as the tooth is loosened but not sharp pain. If you feel pain at any point, tell the team and more anesthetic can be given. Some soreness afterward is normal, and an ice pack helps with swelling."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to recover from a tooth extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most people return to normal activities within a few days. The first 72 hours matter most: avoid straws, smoking, alcohol, vigorous rinsing and brushing next to the site. You can resume normal brushing elsewhere after 24 hours, and limit vigorous exercise for the first day."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have a tooth pulled the same day I call?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes. Radiant Smiles @ Floral Vale keeps same-day emergency slots open every business day for a 30-minute limited exam that diagnoses the problem and begins treatment. Whether the tooth comes out that day depends on what the exam finds. Call (215) 860-4600 early in the day."
          }
        },
        {
          "@type": "Question",
          "name": "Should I replace a tooth after it's pulled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, yes. A gap lets neighboring teeth drift and makes chewing harder on that side. Options include a dental implant, a bridge, a partial denture or, if all teeth are coming out, an immediate denture. Planning before the extraction gives you the most choice."
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
