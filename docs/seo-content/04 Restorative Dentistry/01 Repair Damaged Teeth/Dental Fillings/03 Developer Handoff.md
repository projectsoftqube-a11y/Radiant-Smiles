# Dental Fillings: Developer Handoff

**URL:** `/restorative-dentistry/dental-fillings/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Fillings in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Tooth-colored dental fillings in Yardley, PA. Mercury-free composite that repairs cavities, chips and cracks and blends in. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Fillings in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Tooth-colored dental fillings in Yardley, PA. Mercury-free composite that repairs cavities, chips and cracks and blends in. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Tooth-Colored Dental Fillings in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dental Fillings.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/cosmetic-dentistry/inlays-onlays/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/preventative-care/oral-hygiene/`, `/preventative-care/teeth-cleaning-and-check-ups/`, `/restorative-dentistry/dental-crowns/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Steps** as an ordered list (`<ol>`).
- **Mercury-free claim:** keep the wording only once the practice confirms no amalgam is placed (see 04 notes).
- **Suggested images:** suggested alt "Tooth-colored composite filling at Radiant Smiles @ Floral Vale, Yardley, PA".
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/",
      "name": "Dental Fillings in Yardley, PA | Radiant Smiles",
      "description": "Tooth-colored dental fillings in Yardley, PA. Mercury-free composite that repairs cavities, chips and cracks and blends in. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/#breadcrumb",
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
          "name": "Dental Fillings",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/#procedure",
      "name": "Tooth-colored dental fillings",
      "description": "A dental filling repairs a tooth damaged by decay, a chip or a crack by replacing the lost part with a durable material.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are your fillings mercury-free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale uses tooth-colored composite resin for fillings, which contains no mercury. Composite is an acrylic resin reinforced with powdered glass, matched to your tooth's shade. It's bonded to the tooth in layers and hardened with a curing light, so it's set before you leave."
          }
        },
        {
          "@type": "Question",
          "name": "Does getting a filling hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most fillings are done with the tooth numbed by local anesthetic, so you feel pressure and vibration rather than pain. Afterward the tooth may feel a little sensitive for a short time. If you're nervous, tell the team when you book; you can bring headphones and music and ask about sedation options."
          }
        },
        {
          "@type": "Question",
          "name": "Can a filling fix a chipped or cracked tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Tooth-colored composite can rebuild a small chip or seal a minor crack, and it's shaded to match the tooth. Larger cracks, or chips that take away a big part of the tooth, usually need an inlay, onlay or crown instead. Your dentist will check the tooth and X-rays first."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I need a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You may need a filling if you notice sensitivity to sweets, hot or cold, pain when biting, a dark spot or a rough edge. Many cavities cause no symptoms early on, so the most reliable way to know is a dental exam with X-rays, which can find decay before you feel it."
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
