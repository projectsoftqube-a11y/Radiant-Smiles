# Invisalign, Trenton NJ: Developer Handoff

**URL:** `/invisalign-trenton-nj/` | **Status:** Final v1, 7 Oct 2026. **CONDITIONAL: build only if the Semrush rerun shows demand and the practice confirms certified Invisalign provider status.** Ready to build once that is confirmed and the drive times below are checked.

## 1. Head tags

```html
<title>Invisalign Near Trenton, NJ | Radiant Smiles</title>
<meta name="description" content="Invisalign near Trenton, NJ: $1,000 off (regular $5,800), a free consultation and Saturday check-ups in Yardley, PA, 15 minutes away. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/invisalign-trenton-nj/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Invisalign Near Trenton, NJ | Radiant Smiles">
<meta property="og:description" content="Invisalign near Trenton, NJ: $1,000 off (regular $5,800), a free consultation and Saturday check-ups in Yardley, PA, 15 minutes away. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/invisalign-trenton-nj/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Invisalign Near Trenton, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Areas We Serve › Trenton, NJ › Invisalign.
- **Server-render all text** (Next.js SSG). Lists, tables, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** every call button and phone mention links to `tel:+12158604600`. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Links on this page: `/areas-we-serve/`, `/cosmetic-dentistry/invisalign/`, `/cosmetic-dentistry/invisalign/invisalign-cost/`, `/cosmetic-dentistry/invisalign/invisalign-teen/`, `/dentist-trenton-nj/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/special-offers/`.
- **CONDITIONAL PAGE: build only if the Semrush rerun shows demand and the practice confirms certified Invisalign provider status.** Until both conditions are met, do not create the route, do not add it to sitemap.xml or the HTML sitemap, and remove every link to `/invisalign-trenton-nj/` (they appear only on `/dentist-trenton-nj/`, `/areas-we-serve/` and `/dentist-mercer-county-nj/`).
- **If it is built:** add `/invisalign-trenton-nj/` to sitemap.xml, add a link under 'Areas We Serve › New Jersey' on the HTML sitemap (`/sitemap/`), and switch on the conditional links on the three pages above. No other page links here, and it must never link to a paid `/lp/` page.
- **Trademark:** show "Invisalign®" with the ® on first use (as in the hero). Don't use Align Technology logos or "Invisalign Provider" badges until certified status is confirmed.
- **Offer box:** the quick-facts strip and cost section must match `/special-offers/` ("$1000 Off Invisalign (Reg. $5800)", "Includes free consultation and 2nd opinion"). If the offer changes, update the meta, hero strip, 'Why NJ Patients' list, cost section, FAQ 4 and the FAQPage schema together.
- **Process steps** as an ordered list (`<ol>`).
- **Do not link** to `/lp/invisalign/` (paid, noindex).
- **Page-specific tracking:** fire `invisalign_consult_click` on the hero and final-CTA appointment buttons.
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`.
- **Images:** real office or treatment photos with descriptive alt text tied to the Yardley office. No stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click` and `appointment_click` with `page_area = "Trenton, NJ"`, plus `offer_click` / `financing_click` on the offers, insurance and CareCredit links. Never send form-field values to analytics or ad platforms.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Bridge facts** (PA-bound tolls only; Calhoun Street Bridge toll-free, 3-ton limit, 15 mph) from the DRJTBC, checked 7 Oct 2026. Don't add toll amounts.
- **Insurance wording:** keep "accept many PPO plans, including…". Don't add "in-network".

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Trenton | US-1 (Trenton-Morrisville Toll Bridge) or Calhoun Street Bridge | about 15 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: MedicalWebPage + BreadcrumbList + MedicalProcedure + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, people, offers) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in New Jersey. The MedicalProcedure description is copied word for word from the page. No Review, AggregateRating or Offer markup.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/invisalign-trenton-nj/#webpage",
      "url": "https://www.radiant-smiles.com/invisalign-trenton-nj/",
      "name": "Invisalign Near Trenton, NJ | Radiant Smiles",
      "description": "Invisalign near Trenton, NJ: $1,000 off (regular $5,800), a free consultation and Saturday check-ups in Yardley, PA, 15 minutes away. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/invisalign-trenton-nj/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/invisalign-trenton-nj/#service"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/invisalign-trenton-nj/#service"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/invisalign-trenton-nj/#breadcrumb",
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
          "name": "Areas We Serve",
          "item": "https://www.radiant-smiles.com/areas-we-serve/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Trenton, NJ",
          "item": "https://www.radiant-smiles.com/dentist-trenton-nj/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Invisalign",
          "item": "https://www.radiant-smiles.com/invisalign-trenton-nj/"
        }
      ]
    },
    {
      "name": "Invisalign clear aligner treatment",
      "description": "Invisalign straightens teeth with a series of custom clear aligners, and the whole process starts with one consultation visit.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/invisalign-trenton-nj/#service",
      "url": "https://www.radiant-smiles.com/invisalign-trenton-nj/"
    },
    {
      "@type": "Dentist",
      "@id": "https://www.radiant-smiles.com/#dentist",
      "name": "Radiant Smiles @ Floral Vale",
      "url": "https://www.radiant-smiles.com/",
      "telephone": "+1-215-860-4600",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "117 Floral Vale Boulevard",
        "addressLocality": "Yardley",
        "addressRegion": "PA",
        "postalCode": "19067",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Trenton, NJ",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Mercer County, New Jersey",
            "containedInPlace": {
              "@type": "State",
              "name": "New Jersey"
            }
          }
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable for AI assistants. Text matches the visible FAQ word for word.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/invisalign-trenton-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/invisalign-trenton-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does Invisalign take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For adults, Invisalign takes about one year on average. Teens usually take about as long as they would with traditional braces. Your exact timeline depends on how far your teeth need to move, and we'll give you an estimate at your free consultation in Yardley, about 15 minutes from Trenton."
          }
        },
        {
          "@type": "Question",
          "name": "How often will I need to drive to Yardley from Trenton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll come in for a check-up about every six weeks and switch to a new set of aligners about every two weeks. We're open Saturday from 8 am to 2 pm and until 6 pm on Wednesday and Thursday, so it's easier to fit visits around work or school."
          }
        },
        {
          "@type": "Question",
          "name": "Does New Jersey dental insurance cover Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some plans do. Dental plans with orthodontic benefits can cover part of Invisalign, in some cases up to $3,500. We accept many PPO plans, including Horizon Blue Cross and Delta Dental. Call (215) 860-4600 with your plan details and we'll check your benefits before you start."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Invisalign consultation free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Invisalign offer includes a free consultation and second opinion, along with $1,000 off the regular $5,800 fee. At the consultation, we check whether Invisalign suits your teeth, explain how long treatment should take and tell you what it will cost before you decide."
          }
        },
        {
          "@type": "Question",
          "name": "Can teenagers from Trenton get Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Invisalign Teen works like Invisalign for adults, with two additions: blue compliance indicators that show whether the aligners are being worn, and replacement aligners in case one is lost. Teens usually finish in about the same time as traditional braces."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or entity descriptions change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
