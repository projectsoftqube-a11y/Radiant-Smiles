# Dental Implants: Developer Handoff

**URL:** `/restorative-dentistry/dental-implants/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Implants in Yardley, PA | $500 Off | Radiant Smiles</title>
<meta name="description" content="Dental implants in Yardley, PA: $500 off implant, abutment and crown (reg. $3,500), free consult and second opinion, CareCredit. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/dental-implants/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Implants in Yardley, PA | $500 Off | Radiant Smiles">
<meta property="og:description" content="Dental implants in Yardley, PA: $500 off implant, abutment and crown (reg. $3,500), free consult and second opinion, CareCredit. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/dental-implants/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Implants in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Dental Implants.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/about-us/dr-jaspreet-gadria-dmd/`, `/about-us/dr-urvishkumar-bhalala/`, `/patient-information/care-and-comfort/advanced-technology/`, `/patient-information/care-and-comfort/home-instructions/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/restorative-dentistry/dental-bridges/`, `/restorative-dentistry/dentures/`, `/restorative-dentistry/dentures/implant-retained-dentures/`, `/restorative-dentistry/periodontal-services/`, `/special-offers/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Highest-value page in the section** (currently #12 for 'dental implants yardley pa'). On mobile, keep the offer line, the 'Book Your Free Implant Consultation' button and the call button above the fold.
- **Offer box:** render the hero offer line as a visually distinct callout. Terms must match `/special-offers/` ("$500 Off Implant, Abutment, and Crown (Reg. $3500)", "Includes free consultation and 2nd opinion"). Page wording: "$500 off an implant, abutment and crown (regular price $3,500), including a free consultation and second opinion." If the offer changes or expires, update the hero, the cost section, the 'What You Get With an Implant at Our Yardley Office' list, FAQ 1 and the FAQPage schema together. Do not show a net price (regular price minus the discount) anywhere, including schema, until the practice approves it; the approved wording is "$500 off the regular $3,500".
- **Comparison table** ('Implants vs. Bridges vs. Dentures') as a real HTML `<table>` with a `<caption>`.
- **Process steps** as an ordered list (`<ol>`).
- **Do not link** to the paid landing page `/lp/dental-implants/` or to the conditional `/dental-implants-mercer-county-nj/` page from here.
- **Sedation:** keep only "ask about sedation options". Don't list sedation types.
- **Suggested images:** real cone beam CT or case photos only, with patient consent; no stock photos presented as this office's patients. Suggested alt: "Cone beam CT scan of the jaw at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Patient quote:** the Candice C. quote in the 3D imaging and microscopes section is plain text (a `<blockquote>` or `<q>` with the name and month). No Review or AggregateRating markup.
- **Trenton drive time:** "About 15 minutes from Trenton by bridge, depending on traffic" is a Google Maps estimate. Verify the Trenton drive time in Google Maps before launch and record the check date here: [check date: ____].
- **Page-specific tracking:** fire `implant_consult_click` on the hero and final-CTA appointment buttons, plus the standard `call_click`.
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/",
      "name": "Dental Implants in Yardley, PA | $500 Off | Radiant Smiles",
      "description": "Dental implants in Yardley, PA: $500 off implant, abutment and crown (reg. $3,500), free consult and second opinion, CareCredit. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/#breadcrumb",
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
          "name": "Dental Implants",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/#procedure",
      "name": "Dental implants",
      "description": "A dental implant is a small titanium post placed in the jawbone to replace the root of a missing tooth, then topped with an abutment and a custom crown.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/"
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do dental implants cost in Yardley, PA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A single implant, abutment and crown is regularly $3,500 at Radiant Smiles @ Floral Vale, and the current offer takes $500 off, with a free consultation and second opinion. Your total depends on how many teeth you're replacing and whether you need an extraction first. CareCredit financing is available."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dental implants last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants are designed as a long-term replacement for missing teeth. How long yours lasts depends on healthy gums, good daily cleaning, regular checkups and habits such as smoking or grinding. The crown on top can wear over time and may eventually need replacing, even when the implant itself stays firm."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental implants painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implant placement is done under local anesthesia, so the area is numb during the procedure and you should feel pressure rather than pain. Some soreness afterward is normal while the area heals. If you're nervous, ask about sedation options when you book, and you can bring headphones and music."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the dental implant process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The entire implant process usually takes six to eight months, mostly because the bone needs time to bond with the implant. You can usually keep to your normal routine while it heals. Your dentist will give you an expected timeline for your own case at your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can an implant be placed the same day a tooth is pulled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes. In some cases the implant can be placed at the same appointment as the extraction, which saves a separate surgery. Whether that's possible depends on the bone, any infection and the tooth's position. Your dentist will check this with X-rays, and 3D imaging where needed, first."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a second opinion on dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale offers a free consultation and second opinion for dental implants. If another office has recommended implant treatment, you can bring your questions and have your options reviewed before you commit. Call (215) 860-4600 to book."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

- `MedicalWebPage.name` and `description` equal the title tag and meta description exactly.
- `MedicalProcedure.description` is the first sentence of the 'Why Replace a Missing Tooth With an Implant?' section (the definition), word for word. If that sentence changes, update the schema.
- Every FAQ question and answer in 3b must match the visible FAQ text exactly. Edit both together.
- Validate after deploy with Google's Rich Results Test and validator.schema.org.
