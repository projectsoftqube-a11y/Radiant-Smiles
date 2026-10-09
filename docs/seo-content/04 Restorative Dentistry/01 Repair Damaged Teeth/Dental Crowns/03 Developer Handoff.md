# Dental Crowns: Developer Handoff

**URL:** `/restorative-dentistry/dental-crowns/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Crowns in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Dental crowns in Yardley, PA for cracked, worn or root-canal-treated teeth. Tooth-colored options, usually two visits, made for a precise fit.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Crowns in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Dental crowns in Yardley, PA for cracked, worn or root-canal-treated teeth. Tooth-colored options, usually two visits, made for a precise fit.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Crowns in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dental Crowns.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/cosmetic-dentistry/inlays-onlays/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/preventative-care/professional-night-guards/`, `/preventative-care/teeth-cleaning-and-check-ups/`, `/restorative-dentistry/dental-bridges/`, `/restorative-dentistry/dental-implants/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Answer block:** the first paragraph under the H1 (54 words, starts 'A dental crown is a custom cap...') is the AI Overview target. Render it as plain paragraph text immediately after the H1, before any image or button.
- **301:** root-level `/dental-crowns/` must 301 to this URL. Remove it from the sitemap and internal links.
- **Review quote:** render Candice Coverdale's excerpt as a `<blockquote>` with her name, rating and month in visible text. **Do not** add Review or AggregateRating markup (self-serving reviews aren't eligible). Only publish once consent is confirmed.
- **No same-day crowns:** keep the honest 'Radiant Smiles does not make same-day crowns' line and FAQ.
- **Suggested images:** suggested alt "Porcelain dental crown at Radiant Smiles @ Floral Vale, Yardley, PA".
- **301 redirects into this page:** `/dental-crowns/` → `/restorative-dentistry/dental-crowns/`. One hop, no chains; update internal links and drop the old URLs from sitemap.xml.
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/",
      "name": "Dental Crowns in Yardley, PA | Radiant Smiles",
      "description": "Dental crowns in Yardley, PA for cracked, worn or root-canal-treated teeth. Tooth-colored options, usually two visits, made for a precise fit.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/#breadcrumb",
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
          "name": "Dental Crowns",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/#procedure",
      "name": "Dental crowns",
      "description": "A dental crown is a custom cap that covers a cracked, worn, decayed or root-canal-treated tooth to restore its shape, strength and appearance.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a dental crown last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crowns typically last 5 to 15 years, and with good care many last much longer, some 20 to 30 years. How long yours lasts depends on daily brushing and flossing, regular checkups, the material and habits such as grinding or chewing ice. Decay at the edge of the crown is a common reason a crown needs replacing, so cleanings matter."
          }
        },
        {
          "@type": "Question",
          "name": "How many visits does a dental crown take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental crown takes at least two visits at Radiant Smiles @ Floral Vale. At the first visit the tooth is shaped, scanned or impressed, and fitted with a temporary crown. At the second visit the finished crown from the lab is tried in, adjusted and cemented in place."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer same-day crowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Radiant Smiles @ Floral Vale does not offer same-day crowns. Each crown is made by a dental lab for a precise fit and finish, then fitted and cemented at a second visit. A temporary crown protects your tooth in between."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a dental crown cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of a dental crown depends on the material, which tooth is treated and whether other treatment is needed first. You'll get the cost before work begins. Your PPO plan may pay part of the cost, and the membership plan and CareCredit financing can help if you don't have insurance."
          }
        },
        {
          "@type": "Question",
          "name": "Will my crown look natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tooth-colored porcelain crowns are shaded to match your neighboring teeth, so they blend in when you smile. The dentist checks the shape and color at the fitting visit. If a lab-made crown isn't right, it can be sent back and remade before it's cemented, as one patient's front-tooth crowns were."
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
