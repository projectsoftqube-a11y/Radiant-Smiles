# Dental Bridges: Developer Handoff

**URL:** `/restorative-dentistry/dental-bridges/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Bridges in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Dental bridges in Yardley, PA fill the gap from a missing tooth with a fixed replacement in two or three visits. Compare bridges and implants.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Bridges in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Dental bridges in Yardley, PA fill the gap from a missing tooth with a fixed replacement in two or three visits. Compare bridges and implants.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Bridges in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dental Bridges.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/restorative-dentistry/dental-crowns/`, `/restorative-dentistry/dental-implants/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Answer block:** the first paragraph under the H1 (58 words, starts 'A dental bridge replaces...') is the AI Overview target. Render it as plain text immediately after the H1.
- **Comparison table** ('Dental Bridge vs. Implant') as a real HTML `<table>`. The implant price cell must match the terms on `/special-offers/`.
- **Steps** as an ordered list.
- **Suggested images:** suggested alt "Dental bridge replacing a missing tooth, Radiant Smiles @ Floral Vale, Yardley, PA".
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/",
      "name": "Dental Bridges in Yardley, PA | Radiant Smiles",
      "description": "Dental bridges in Yardley, PA fill the gap from a missing tooth with a fixed replacement in two or three visits. Compare bridges and implants.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/#breadcrumb",
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
          "name": "Dental Bridges",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/#procedure",
      "name": "Dental bridges",
      "description": "A dental bridge replaces one or more missing teeth with an artificial tooth held in place by the natural teeth on either side of the gap, called abutment teeth.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a dental bridge last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental bridge should last seven to ten years or even longer with proper care. The biggest factor is the health of the supporting teeth, so daily brushing, cleaning under the bridge and regular checkups matter. Decay or gum disease around an abutment tooth is a common reason a bridge needs replacing."
          }
        },
        {
          "@type": "Question",
          "name": "Is a bridge or an implant better for a missing tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is right for everyone. A bridge is anchored to the teeth beside the gap and usually takes two or three appointments. An implant stands on its own in the jawbone and takes longer, usually six to eight months. Your dentist will compare both after checking your teeth, gums and bone."
          }
        },
        {
          "@type": "Question",
          "name": "How many appointments does a dental bridge take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental bridge usually takes two or three appointments at Radiant Smiles @ Floral Vale. The supporting teeth are prepared and scanned first, and a temporary bridge protects them while the lab makes your bridge. At the final visit it's tried in, adjusted and cemented."
          }
        },
        {
          "@type": "Question",
          "name": "Can a dental bridge be removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A fixed bridge can't be removed at home; it's cemented to crowns or bonded to the neighboring teeth and only a dentist can take it off. A removable bridge clips to the neighboring teeth with clasps or precision attachments, and you take it out to clean it. Your dentist will explain which type suits you."
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
