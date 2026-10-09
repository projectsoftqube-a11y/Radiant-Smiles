# Wisdom Teeth Removal: Developer Handoff

**URL:** `/restorative-dentistry/wisdom-teeth-removal/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Wisdom Teeth Removal in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Wisdom teeth removal in Yardley, PA: exam and X-rays to check position, removal in our office and clear recovery steps. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Wisdom Teeth Removal in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Wisdom teeth removal in Yardley, PA: exam and X-rays to check position, removal in our office and clear recovery steps. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Wisdom Teeth Removal in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Wisdom Teeth Removal.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/care-and-comfort/home-instructions/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/restorative-dentistry/tooth-extractions/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Sedation wording:** never name IV sedation (unconfirmed) in copy, alt text, schema or meta. Keep 'ask about sedation options'.
- **Age guidance** (mid-teens to early twenties; slower healing after 30) stays as written.
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/",
      "name": "Wisdom Teeth Removal in Yardley, PA | Radiant Smiles",
      "description": "Wisdom teeth removal in Yardley, PA: exam and X-rays to check position, removal in our office and clear recovery steps. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/#breadcrumb",
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
          "name": "Wisdom Teeth Removal",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/#procedure",
      "name": "Wisdom teeth removal",
      "description": "Wisdom teeth removal takes out the third molars at the back of the mouth when they're trapped, crowded or causing infection.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What age should wisdom teeth be removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wisdom teeth are usually easiest to remove between the mid-teens and the early twenties, while the roots are still developing. After 30, healing tends to be slower and complications are more likely. An exam with X-rays in the teenage years shows whether removal is needed and when."
          }
        },
        {
          "@type": "Question",
          "name": "How long does wisdom teeth removal take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most wisdom tooth removals take under an hour, though it depends on how many teeth come out and how they sit, so plan extra time at the office. Dissolving stitches usually disappear on their own within a week or two. Your dentist will give you a time estimate after your exam."
          }
        },
        {
          "@type": "Question",
          "name": "Can I be sedated for wisdom teeth removal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask about sedation options when you book. The area is fully numbed for the procedure, and Radiant Smiles @ Floral Vale offers dental sedation options for nervous patients. Your dentist will explain which option suits you, and you'll get any preparation instructions in advance."
          }
        },
        {
          "@type": "Question",
          "name": "What should I eat after wisdom teeth removal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with clear liquids on the first day, then move to soft foods as you feel ready. Avoid using straws, smoking and alcohol for the first few days, because they can disturb the blood clot that protects the socket while it heals. Follow any extra instructions your dentist gives you."
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
