# Root Canal Therapy: Developer Handoff

**URL:** `/restorative-dentistry/root-canal/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Root Canal Treatment in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Root canal treatment in Yardley, PA to stop tooth pain and save your natural tooth. Usually two visits, PPO plans accepted. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/root-canal/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Root Canal Treatment in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Root canal treatment in Yardley, PA to stop tooth pain and save your natural tooth. Usually two visits, PPO plans accepted. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/root-canal/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Root Canal Treatment in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Root Canal Therapy.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/emergency-dentistry/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/restorative-dentistry/dental-crowns/`, `/restorative-dentistry/dental-implants/`, `/restorative-dentistry/tooth-extractions/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Keeper URL for root canal.** `/restorative-dentistry/non-surgical-root-canal/` must 301 to this URL (one hop, no chain). Remove the old page from the sitemap and from all internal links. This consolidation is the main fix for the drop out of the top 100 (was #18).
- **Pain-first CTA order:** the call button comes first in the hero and final CTA, because many visitors arrive in pain.
- **Safety line** under 'When Tooth Pain Is an Emergency' (911 / emergency room) must stay visible, not inside a collapsed element.
- **Steps** as ordered lists (`<ol>`).
- **Page-specific tracking:** fire `emergency_call_click` on the hero call button and `call_click` elsewhere.
- **301 redirects into this page:** `/restorative-dentistry/non-surgical-root-canal/` → `/restorative-dentistry/root-canal/`. One hop, no chains; update internal links and drop the old URLs from sitemap.xml.
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/",
      "name": "Root Canal Treatment in Yardley, PA | Radiant Smiles",
      "description": "Root canal treatment in Yardley, PA to stop tooth pain and save your natural tooth. Usually two visits, PPO plans accepted. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/#breadcrumb",
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
          "name": "Root Canal Therapy",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/#procedure",
      "name": "Root canal therapy",
      "description": "A root canal saves a tooth whose pulp, the soft tissue inside it, has become infected or inflamed.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does a root canal hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not during treatment. The tooth is fully numbed with local anesthesia before the dentist starts, so most patients feel pressure rather than pain. The treatment is meant to relieve the pain of an infected tooth. Nitrous oxide is available when appropriate, and you can ask about other sedation options."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a root canal take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Root canal treatment is usually a two-appointment procedure. The first appointment, which removes the infected pulp and seals the tooth, takes up to an hour. At the second, usually within a few weeks, the tooth is prepared for a crown, which is fitted at a later visit. Most patients drive home and return to normal activity straight away."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a root canal cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on which tooth needs treatment and how severe the infection is, and most treated teeth also need a crown. Radiant Smiles @ Floral Vale gives you the full cost before treatment, accepts many PPO plans, and offers CareCredit financing and a membership plan with 15% off treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a crown after a root canal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, yes. A tooth that has had a root canal has lost much of its structure, so it's more likely to crack without protection. A crown covers and strengthens the tooth. At Radiant Smiles, the tooth is usually prepared for its crown at the second appointment, and the lab-made crown is fitted at a later visit."
          }
        },
        {
          "@type": "Question",
          "name": "Can I be seen today for a bad toothache?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Radiant Smiles @ Floral Vale keeps same-day emergency slots open every business day and on Saturday mornings. A 30-minute limited exam finds the cause of the pain and starts treatment. Call (215) 860-4600 as early in the day as you can to get a slot."
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
