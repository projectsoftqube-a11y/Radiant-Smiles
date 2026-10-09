# Restorative Dentistry: Developer Handoff

**URL:** `/restorative-dentistry/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Restorative Dentist in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Restorative dentist in Yardley, PA for implants, crowns, root canals, bridges and dentures. Open Saturdays, 40+ PPO plans. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Restorative Dentist in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Restorative dentist in Yardley, PA for implants, crowns, root canals, bridges and dentures. Open Saturdays, 40+ PPO plans. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Restorative Dentist in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/about-us/dr-jaspreet-gadria-dmd/`, `/about-us/dr-urvishkumar-bhalala/`, `/cosmetic-dentistry/inlays-onlays/`, `/emergency-dentistry/`, `/patient-information/care-and-comfort/advanced-technology/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/preventative-care/deep-teeth-cleaning/`, `/preventative-care/gum-disease-laser-therapy/`, `/preventative-care/periodontal-maintenance/`, `/restorative-dentistry/dental-bridges/`, `/restorative-dentistry/dental-crowns/`, `/restorative-dentistry/dental-fillings/`, `/restorative-dentistry/dental-implants/`, `/restorative-dentistry/dentures/`, `/restorative-dentistry/dentures/denture-relines/`, `/restorative-dentistry/dentures/immediate-dentures/`, `/restorative-dentistry/dentures/implant-retained-dentures/`, `/restorative-dentistry/dentures/partial-dentures/`, `/restorative-dentistry/periodontal-services/`, `/restorative-dentistry/root-canal/`, `/restorative-dentistry/tooth-extractions/`, `/restorative-dentistry/wisdom-teeth-removal/`, `/special-offers/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **Hub layout:** each service paragraph or bullet links to its child page with the anchor text shown. Render the 'Which Restorative Treatment Do You Need?' table as a real HTML `<table>`.
- **Child links:** all 13 child pages in the ItemList must be linked in the body (they are). Inlays & onlays live in the cosmetic section (`/cosmetic-dentistry/inlays-onlays/`) and are linked but not in the ItemList.
- **Offer mention:** the implant offer ($500 off, regular $3,500, free consultation and second opinion) must match `/special-offers/` exactly. If the offer changes, update this page, Dental Implants, Tooth Extractions, Dental Bridges and Implant-Retained Dentures together.
- **Doctor links:** link the two doctor names to their bio pages. Doctor photos need alt text such as "Dr. Jaspreet Gadria at Radiant Smiles @ Floral Vale in Yardley, PA".
- **No sms: link** (texting isn't confirmed).
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/",
      "name": "Restorative Dentist in Yardley, PA | Radiant Smiles",
      "description": "Restorative dentist in Yardley, PA for implants, crowns, root canals, bridges and dentures. Open Saturdays, 40+ PPO plans. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/#services"
      },
      "specialty": "https://schema.org/Dentistry"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/#services",
      "name": "Restorative dentistry services at Radiant Smiles @ Floral Vale",
      "numberOfItems": 13,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dental Crowns",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-crowns/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dental Fillings",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-fillings/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Root Canal Therapy",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/root-canal/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dental Implants",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Dental Bridges",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-bridges/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Dentures",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Partial Dentures",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/partial-dentures/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Immediate Dentures",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/immediate-dentures/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Implant-Retained Dentures",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Denture Relines & Repairs",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-relines/"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Tooth Extractions",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/tooth-extractions/"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "Wisdom Teeth Removal",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/"
        },
        {
          "@type": "ListItem",
          "position": 13,
          "name": "Periodontal Services",
          "url": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/"
        }
      ]
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
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is restorative dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Restorative dentistry is the part of dentistry that repairs damaged teeth and replaces missing ones. It includes fillings, crowns, root canal therapy, bridges, dental implants, dentures, extractions and gum disease treatment. The goal is a mouth that works well, feels comfortable and looks natural, using your own teeth wherever they can be saved."
          }
        },
        {
          "@type": "Question",
          "name": "Who provides restorative care at Radiant Smiles @ Floral Vale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria provide restorative dentistry at Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. Both trained at Temple University's Kornberg School of Dentistry. They use high-power dental microscopes to check the fit and finish of crowns, fillings and bridges."
          }
        },
        {
          "@type": "Question",
          "name": "What are my options for replacing a missing tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main options are a dental implant, a dental bridge or a partial denture. An implant replaces the root and doesn't rely on neighboring teeth. A bridge is anchored to the teeth beside the gap. A partial denture is removable. Your dentist will recommend one after examining your teeth, gums and jawbone."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover restorative dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often in part, depending on your plan. Radiant Smiles accepts many PPO plans, including Delta Dental, Cigna PPO and MetLife, and the team can help you check your benefits before treatment. Without insurance, the $150-a-year membership plan takes 15% off all dental treatment, and CareCredit financing is available."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get restorative work done on a Saturday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale is open Saturdays from 8 am to 2 pm, as well as weekdays. Saturday appointments suit patients who work during the week. Call (215) 860-4600 to ask which treatments can be scheduled on a Saturday and what times are open."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

- `MedicalWebPage.name` and `description` equal the title tag and meta description exactly.
- The `ItemList` must list the same child URLs that are linked on the page. Add or remove items when child pages are added or retired.
- Every FAQ question and answer in 3b must match the visible FAQ text exactly. Edit both together.
- Validate after deploy with Google's Rich Results Test and validator.schema.org.
