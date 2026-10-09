# Cosmetic Dentistry: Developer Handoff

**URL:** `/cosmetic-dentistry/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Cosmetic Dentist in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Cosmetic dentist in Yardley, PA for porcelain veneers, teeth whitening, bonding and Invisalign. Plan your smile makeover. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/cosmetic-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Cosmetic Dentist in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Cosmetic dentist in Yardley, PA for porcelain veneers, teeth whitening, bonding and Invisalign. Plan your smile makeover. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/cosmetic-dentistry/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
```

## 2. Page build rules

- **One H1:** "Cosmetic Dentist in Yardley, PA". Breadcrumb: Home › Cosmetic Dentistry.
- **Answer block first.** The 50-word paragraph directly under the H1 ("Radiant Smiles @ Floral Vale is a cosmetic dentist in Yardley, PA…") must be the first text in the main content, in a plain `<p>`, above any slider, image or button. It is written to be quoted by Google's AI Overview for 'cosmetic dentist yardley pa'. Don't put it in an image, carousel or tab.
- **Smile makeover is a section on this page (H2), not a separate page.** Don't create `/smile-makeover/`; if one exists on the old site, 301 it here.
- **Service cards:** the five procedure links in "Cosmetic Dentistry Procedures at Radiant Smiles" and the "Learn about…" links under each H2 are plain crawlable `<a href>` links to the child pages. Order: whitening, bonding, veneers, inlays/onlays, Invisalign.
- **Comparison table** ("Which Cosmetic Treatment Fits Your Goal?") as a real HTML `<table>` with a header row.
- **Offers:** show whitening and Invisalign offers exactly as worded; pull them from the same source as `/special-offers/` so the prices can't drift.
- **Doctor names** link to the two bio pages. No pronouns for Dr. Gadria in any added copy (not confirmed).
- **No prices** except the published offers exactly as worded on `/special-offers/` (whitening $100 off, regular $550; Invisalign $1,000 off, regular $5,800). No 'best', 'painless', 'guaranteed' or specialist wording.
- **Images:** real photos of this office or this practice's patients only, with written consent; no stock smiles presented as patient results. Descriptive alt text (e.g. "Porcelain veneers on upper front teeth, Radiant Smiles @ Floral Vale").
- **Gallery link:** `/about-us/before-and-after-gallery/` only goes live if the gallery holds the practice's own consented photos. If not, remove the "See Our Results" section before launch.
- **Always:** server-render all text (no client-only rendering of copy or FAQs); FAQ questions and answers in the DOM on load (an accordion is fine if the text is in the HTML); crawlable `<a href>` links; phone as `tel:+12158604600`; NAP text identical to the homepage and footer: Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600. No `sms:` link until texting is confirmed.
- **Tracking:** fire `click_call` on every `tel:` link and `click_book` on every button that links to `/patient-information/scheduling/` (GTM, per the tracking plan).

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage (the full Dentist node lives only on the homepage). The ItemList mirrors the child pages linked on this page.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/#webpage",
      "url": "https://www.radiant-smiles.com/cosmetic-dentistry/",
      "name": "Cosmetic Dentist in Yardley, PA | Radiant Smiles",
      "description": "Cosmetic dentist in Yardley, PA for porcelain veneers, teeth whitening, bonding and Invisalign. Plan your smile makeover. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/#services"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/#breadcrumb",
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
          "name": "Cosmetic Dentistry",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/#services",
      "name": "Cosmetic dentistry services at Radiant Smiles @ Floral Vale",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Porcelain Veneers",
          "url": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Teeth Whitening",
          "url": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Bonding",
          "url": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Inlays & Onlays",
          "url": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Invisalign",
          "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Invisalign Teen",
          "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Invisalign Cost",
          "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable for AI tools. The text below is copied word for word from the visible FAQs.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is cosmetic dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cosmetic dentistry is dental treatment that improves the appearance of your teeth, including their color, shape, size, alignment and gaps. Common examples are teeth whitening, dental bonding, porcelain veneers and clear aligners such as Invisalign. Many cosmetic treatments also repair damage, so they can improve how your teeth work as well as how they look."
          }
        },
        {
          "@type": "Question",
          "name": "How much does cosmetic dentistry cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of cosmetic dentistry depends on the treatment and how many teeth are involved. At Radiant Smiles @ Floral Vale, teeth whitening is $100 off the regular $550 price, and Invisalign is $1,000 off the regular $5,800. Veneers and bonding are priced after an exam, and CareCredit financing is available."
          }
        },
        {
          "@type": "Question",
          "name": "What is a smile makeover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A smile makeover is a treatment plan that combines two or more cosmetic procedures, such as Invisalign, whitening, bonding and porcelain veneers, to improve your whole smile. Treatments are usually done in a set order, for example whitening before veneers, so that new restorations can be matched to your brighter natural shade."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover cosmetic dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not when the treatment is purely to change appearance. Plans may cover part of treatment that also repairs damage, such as bonding a broken tooth, and some plans include an orthodontic benefit that can apply to Invisalign. Coverage depends on your plan, so call (215) 860-4600 and we'll help you check."
          }
        },
        {
          "@type": "Question",
          "name": "Can I whiten my veneers, crowns or fillings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Whitening gel lightens natural tooth enamel only; it does not change the color of veneers, crowns, fillings or bonding. If you're planning new restorations on front teeth, it usually makes sense to whiten first, then have the new work matched to your whiter shade. Your dentist will advise on the order."
          }
        },
        {
          "@type": "Question",
          "name": "Who are the cosmetic dentists at Radiant Smiles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Jaspreet Gadria, DMD, and Dr. Urvishkumar Bhalala, DMD, provide cosmetic dentistry at Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. Both trained at Temple University's Kornberg School of Dentistry, and Dr. Gadria's focus includes general, cosmetic and restorative dentistry."
          }
        },
        {
          "@type": "Question",
          "name": "Are you open on Saturdays for cosmetic appointments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The office is open Saturday from 8:00 am to 2:00 pm, as well as Monday to Friday. That makes it easier to fit consultations, whitening tray fittings and Invisalign check-ups around work or school. Call (215) 860-4600 to find a time that suits you."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

- `"significantLink"` on the WebPage listing the child URLs (optional; the ItemList already covers them).
- **Add `Offer` nodes** only after the practice confirms the offer terms (start/end dates, eligibility). Until then the offers stay as visible text only.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, offers or procedure description change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
