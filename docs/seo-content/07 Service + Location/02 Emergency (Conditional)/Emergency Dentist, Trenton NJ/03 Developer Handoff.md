# Emergency Dentist, Trenton NJ: Developer Handoff

**URL:** `/emergency-dentist-trenton-nj/` | **Status:** Final v1, 7 Oct 2026. **CONDITIONAL: build only if the Semrush rerun shows demand.** Ready to build once that is confirmed and the drive times below are checked.

## 1. Head tags

```html
<title>Emergency Dentist Near Trenton, NJ | Radiant Smiles</title>
<meta name="description" content="Emergency dentist near Trenton, NJ: emergency slots held every business day, Saturday 8 am to 2 pm, about 15 minutes away. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/emergency-dentist-trenton-nj/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Emergency Dentist Near Trenton, NJ | Radiant Smiles">
<meta property="og:description" content="Emergency dentist near Trenton, NJ: emergency slots held every business day, Saturday 8 am to 2 pm, about 15 minutes away. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/emergency-dentist-trenton-nj/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Emergency Dentist Near Trenton, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Areas We Serve › Trenton, NJ › Emergency Dentist.
- **Server-render all text** (Next.js SSG). Lists, tables, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** every call button and phone mention links to `tel:+12158604600`. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Links on this page: `/areas-we-serve/`, `/dentist-trenton-nj/`, `/emergency-dentistry/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/restorative-dentistry/root-canal/`, `/special-offers/`.
- **CONDITIONAL PAGE: build only if the Semrush rerun shows demand.** Until then, do not create the route, do not add it to sitemap.xml or the HTML sitemap, and remove every link to `/emergency-dentist-trenton-nj/` (they appear only on `/dentist-trenton-nj/`, `/areas-we-serve/` and `/dentist-mercer-county-nj/`).
- **If it is built:** add `/emergency-dentist-trenton-nj/` to sitemap.xml, add a link under 'Areas We Serve › New Jersey' on the HTML sitemap (`/sitemap/`), and switch on the conditional links on the three pages above. No other page links here, and it must never link to a paid `/lp/` page.
- **Call-first page:** the only hero button is the call button. Keep it, the quick-facts strip and the safety note above the fold on mobile. Consider a sticky call bar on mobile.
- **Safety note** (911 / hospital emergency department) must stay visible and unchanged. Never add 24/7, Sunday or walk-in wording.
- **Hours table** as a real HTML `<table>`. Tuesday shows "8:00 am – 5:00 pm" only after the practice confirms it [CONFIRM: site prints 5:00 AM]; remove the bracket before launch. Hours must match the homepage schema and the Google Business Profile.
- **Member pricing:** the $65 emergency exam is for membership members only; keep that qualifier.
- **Do not link** to `/lp/emergency-dentist/` (paid, noindex).
- **Page-specific tracking:** `call_click` is the main conversion here; add `emergency_call_click` on the hero and final-CTA buttons.
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

### 3a. Core: MedicalWebPage + BreadcrumbList + Service + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, people, offers) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in New Jersey. The Service description is copied word for word from the page. No Review, AggregateRating or Offer markup.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/#webpage",
      "url": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/",
      "name": "Emergency Dentist Near Trenton, NJ | Radiant Smiles",
      "description": "Emergency dentist near Trenton, NJ: emergency slots held every business day, Saturday 8 am to 2 pm, about 15 minutes away. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/#service"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/#service"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/#breadcrumb",
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
          "name": "Emergency Dentist",
          "item": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/"
        }
      ]
    },
    {
      "name": "Emergency dental care",
      "serviceType": "Emergency dental care",
      "description": "We keep emergency slots open every business day and on Saturday mornings, so you can often be seen the same day for a focused 30-minute exam and a plan to stop the pain.",
      "@type": "Service",
      "@id": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/#service",
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
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
      ],
      "url": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/"
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
      "@id": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/emergency-dentist-trenton-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I be seen the same day if I'm coming from Trenton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. We reserve emergency openings every business day, and every attempt is made to see patients in pain that day. Call (215) 860-4600 as early as you can, tell us what happened, and we'll give you the earliest time. The drive from Trenton is about 15 minutes, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Are you open on weekends for dental emergencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're open Saturday from 8 am to 2 pm and closed on Sunday. If you have a dental emergency on a Sunday and the pain is severe, or you have swelling, go to a hospital emergency department. Otherwise, call us when we open on Monday at 8 am."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do with a knocked-out tooth on the way from Trenton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keep the tooth moist, preferably in milk or saliva, and call us right away at (215) 860-4600. Then head over: the office is about 15 minutes from Trenton, depending on traffic. If you've also hurt your head or jaw, go to a hospital emergency department first."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept New Jersey dental insurance for emergency visits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept many PPO plans that New Jersey patients use, including Horizon Blue Cross, Aetna, Delta Dental, Cigna PPO, MetLife and UnitedHealthcare. Coverage for an emergency visit depends on your plan. Have your insurance card with you when you call, and we'll check it before you arrive."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or entity descriptions change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
