# Denture Relines & Repairs: Developer Handoff

**URL:** `/restorative-dentistry/dentures/denture-relines/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Denture Relines & Repairs in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Loose or broken dentures? Hard and soft relines, soft liners, rebases and same-day denture repairs in Yardley, PA. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Denture Relines & Repairs in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Loose or broken dentures? Hard and soft relines, soft liners, rebases and same-day denture repairs in Yardley, PA. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Denture Relines & Repairs in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dentures › Denture Relines & Repairs.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/carecredit/`, `/patient-information/scheduling/`, `/restorative-dentistry/dentures/`, `/restorative-dentistry/dentures/implant-retained-dentures/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **301s:** `/restorative-dentistry/soft-liners/` and `/restorative-dentistry/rebase-repairs/` must 301 to this URL. Their content is merged into 'Soft Relines and Soft Denture Liners' and 'Denture Rebasing' / 'Same-Day Denture Repair'.
- **CTA order:** call first (broken dentures are urgent for the patient).
- **Page-specific tracking:** fire `denture_repair_call_click` on the hero call button.
- **301 redirects into this page:** `/restorative-dentistry/soft-liners/`, `/restorative-dentistry/rebase-repairs/` → `/restorative-dentistry/dentures/denture-relines/`. One hop, no chains; update internal links and drop the old URLs from sitemap.xml.
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/",
      "name": "Denture Relines & Repairs in Yardley, PA | Radiant Smiles",
      "description": "Loose or broken dentures? Hard and soft relines, soft liners, rebases and same-day denture repairs in Yardley, PA. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/#breadcrumb",
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
          "name": "Denture Relines & Repairs",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/#procedure",
      "name": "Denture relines and repairs",
      "description": "A denture reline reshapes the inside of your denture so it fits your gums snugly again, and a repair fixes a cracked or broken denture close to its original condition.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should a denture be relined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A hard reline is usually recommended about every two years, because the gums and bone under your denture slowly change shape. A soft reline stays pliable for one to two years. If your denture loosens or starts to rub sooner, have it checked rather than waiting for the next scheduled reline."
          }
        },
        {
          "@type": "Question",
          "name": "Can you repair my denture the same day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Radiant Smiles @ Floral Vale offers same-day denture repair to restore a cracked or broken denture close to its original condition. Call (215) 860-4600 as soon as it breaks, and bring every piece. Avoid household glues, which can damage the denture and change its fit."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a reline and a rebase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A reline replaces only the inside lining of the denture so it fits your gums again. A rebase replaces the entire pink acrylic base while keeping your existing denture teeth. A rebase suits a denture whose base is broken, weak or old, or an immediate denture after healing."
          }
        },
        {
          "@type": "Question",
          "name": "Who should get a soft denture liner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A soft denture liner may help if your gums are often sore, your gum ridges have receded or flattened, you have sharp bony areas, or you find a hard denture hard to tolerate. The liner cushions your gums from the hard base, and it can be added to a new or existing denture."
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
