# Partial Dentures: Developer Handoff

**URL:** `/restorative-dentistry/dentures/partial-dentures/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Partial Dentures in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Removable partial dentures in Yardley, PA that fill gaps, support your bite and help keep natural teeth from shifting. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Partial Dentures in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Removable partial dentures in Yardley, PA that fill gaps, support your bite and help keep natural teeth from shifting. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Partial Dentures in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dentures › Partial Dentures.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/carecredit/`, `/patient-information/scheduling/`, `/restorative-dentistry/dental-bridges/`, `/restorative-dentistry/dentures/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Suggested images:** suggested alt "Metal-and-acrylic partial denture, Radiant Smiles @ Floral Vale, Yardley, PA".
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/",
      "name": "Partial Dentures in Yardley, PA | Radiant Smiles",
      "description": "Removable partial dentures in Yardley, PA that fill gaps, support your bite and help keep natural teeth from shifting. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/#breadcrumb",
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
          "name": "Partial Dentures",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/#procedure",
      "name": "Partial dentures",
      "description": "A removable partial denture replaces one or more missing teeth while keeping the healthy natural teeth you still have.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a partial denture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A partial denture is a removable appliance that replaces one or more missing teeth when you still have some natural teeth. Replacement teeth sit on a gum-colored base, usually with a metal framework, and the partial is designed to spread chewing forces evenly across your remaining teeth and gums."
          }
        },
        {
          "@type": "Question",
          "name": "Is a metal or acrylic partial better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For long-term use, Dr. Bhalala and Dr. Gadria generally prefer a metal-and-acrylic partial. Metal is structurally stronger, so the partial can be thinner and more hygienic. An all-acrylic partial is usually a transitional or temporary option, such as while your gums heal after an extraction."
          }
        },
        {
          "@type": "Question",
          "name": "Partial denture or bridge: which should I choose?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bridge is fixed in place and supported by the teeth beside a single gap. A partial denture is removable and can fill several gaps at once, and it doesn't need strong teeth on both sides of each space. Your dentist will recommend one after examining your teeth and gums."
          }
        },
        {
          "@type": "Question",
          "name": "How do I clean a partial denture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Take your partial out every day and brush it with a soft denture brush and denture cream, not toothpaste, which is too abrasive. Rinse it in cold water, because hot water can warp it. Brush your natural teeth well too, especially where the partial rests against them."
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
