# Special Offers: Developer Handoff

**URL:** `/special-offers/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Affordable Dentist in Yardley, PA | Specials & Offers</title>
<meta name="description" content="Affordable dentist in Yardley, PA: $89 new-patient visit for uninsured patients, plus savings on implants, Invisalign and whitening. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/special-offers/">
<meta property="og:type" content="website">
<meta property="og:title" content="Affordable Dentist in Yardley, PA | Specials & Offers">
<meta property="og:description" content="Affordable dentist in Yardley, PA: $89 new-patient visit for uninsured patients, plus savings on implants, Invisalign and whitening. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/special-offers/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Affordable Dentist in Yardley, PA: Current Dental Specials". Keep the heading levels as in `02 Content.md`. Breadcrumb: Home › Special Offers.
- **Server-render all text** (Next.js SSG). Set title, description, canonical and openGraph in `generateMetadata` for this route, and render the JSON-LD on the server in a `<script type="application/ld+json">`.
- **Prices exactly as written:** $89; $500 off (regular $3,500); $1,000 off (regular $5,800); $100 off (regular $550); membership $150 a year, $75 per additional family member, $75 extra cleanings, $65 emergency exam, 15% off. If a price changes, change it here, on the homepage, in the schema below and in the homepage schema in the same commit (ideally from one shared data file).
- **No expiry dates or fine print are published.** Don't add any, and no countdowns, "limited time" or "while supplies last" labels. When the practice supplies its terms, add them to the "Offer Terms" section and to each Offer's `description` (and `validThrough` if there is an end date).
- **Offer cards:** one card per offer with the price in large type, what's included and one CTA (call). Keep the offer summary strip as plain text, not an image.
- **Don't show APRs** for CareCredit (the figures on the current site are dated 5/30/2024). Link to the CareCredit page instead.
- **Paid ads:** the $89 offer also has a noindex landing page (`/lp/new-patient-special/`). Never link to it from this page or the site navigation.
- **FAQs** visible on the page; if in an accordion, answers stay in the DOM on load.
- **Tracking:** fire an "offer_click" event with the offer name on each offer CTA: "Call and ask for the $89 new patient visit" (a `tel:+12158604600` link, so also count it as a call click), "Book Your Free Implant Consultation" and "Book a Free Invisalign Consultation" (both link to `/patient-information/scheduling/`).
- **Review in the $89 section:** the Avni D. quote is plain text with first name, last initial and month, verbatim (typos included). No Review or AggregateRating markup.
- **Redirects:** no old URLs 301 into this page.
- **NAP:** where the address appears, it must read exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, matching the footer and the Google Business Profile.
- **Phone links:** every "Call (215) 860-4600" button and visible phone number links to `tel:+12158604600`. No `sms:` link until the practice confirms texting.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text shown. All targets are in the live URL map.
- **Tracking:** fire separate events for call clicks and "Request an Appointment" clicks on this page.

## 3. Structured data (JSON-LD)

The business entity is defined in full on the homepage only. This page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: WebPage + BreadcrumbList + Offer (required)

WebPage with an `ItemList` of five `Offer` nodes, each `offeredBy` the `#dentist` entity. Discount offers carry no `price` because only the discount and regular price are published (no computed sale price). The same offers appear in the homepage `makesOffer`; keep both in sync.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/special-offers/#webpage",
      "url": "https://www.radiant-smiles.com/special-offers/",
      "name": "Affordable Dentist in Yardley, PA | Specials & Offers",
      "description": "Affordable dentist in Yardley, PA: $89 new-patient visit for uninsured patients, plus savings on implants, Invisalign and whitening. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/special-offers/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://www.radiant-smiles.com/special-offers/#offer-new-patient"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://www.radiant-smiles.com/special-offers/#offer-implants"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://www.radiant-smiles.com/special-offers/#offer-invisalign"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@id": "https://www.radiant-smiles.com/special-offers/#offer-whitening"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@id": "https://www.radiant-smiles.com/special-offers/#offer-membership"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/special-offers/#breadcrumb",
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
          "name": "Special Offers",
          "item": "https://www.radiant-smiles.com/special-offers/"
        }
      ]
    },
    {
      "@type": "Offer",
      "@id": "https://www.radiant-smiles.com/special-offers/#offer-new-patient",
      "name": "$89 New Patient Visit",
      "price": "89",
      "priceCurrency": "USD",
      "url": "https://www.radiant-smiles.com/special-offers/",
      "offeredBy": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "description": "Professional cleaning, X-rays and exam for new patients without dental insurance."
    },
    {
      "@type": "Offer",
      "@id": "https://www.radiant-smiles.com/special-offers/#offer-implants",
      "name": "Dental Implant Savings: $500 Off",
      "url": "https://www.radiant-smiles.com/special-offers/",
      "offeredBy": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "description": "$500 off a dental implant, abutment and crown (regular price $3,500). Includes a free consultation and second opinion.",
      "itemOffered": {
        "@type": "Service",
        "name": "Dental implants",
        "url": "https://www.radiant-smiles.com/restorative-dentistry/dental-implants/"
      }
    },
    {
      "@type": "Offer",
      "@id": "https://www.radiant-smiles.com/special-offers/#offer-invisalign",
      "name": "Invisalign Savings: $1,000 Off",
      "url": "https://www.radiant-smiles.com/special-offers/",
      "offeredBy": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "description": "$1,000 off Invisalign clear aligner treatment (regular price $5,800). Includes a free consultation and second opinion.",
      "itemOffered": {
        "@type": "Service",
        "name": "Invisalign",
        "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/"
      }
    },
    {
      "@type": "Offer",
      "@id": "https://www.radiant-smiles.com/special-offers/#offer-whitening",
      "name": "Teeth Whitening Savings: $100 Off",
      "url": "https://www.radiant-smiles.com/special-offers/",
      "offeredBy": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "description": "$100 off professional teeth whitening (regular price $550).",
      "itemOffered": {
        "@type": "Service",
        "name": "Teeth whitening",
        "url": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/"
      }
    },
    {
      "@type": "Offer",
      "@id": "https://www.radiant-smiles.com/special-offers/#offer-membership",
      "name": "In-office membership plan",
      "price": "150",
      "priceCurrency": "USD",
      "url": "https://www.radiant-smiles.com/special-offers/",
      "offeredBy": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "description": "$150 a year, plus $75 for each additional family member. Includes 2 cleanings, exams and X-rays each year and 15% off all other dental treatment. Extra cleanings or periodontal maintenance $75 each; emergency exam with X-ray $65."
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. Include it only if the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/special-offers/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/special-offers/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who qualifies for the $89 new patient visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The $89 new patient visit is for new patients who don't have dental insurance. It includes a professional cleaning, X-rays and an exam at Radiant Smiles @ Floral Vale in Yardley, PA. Call (215) 860-4600 and ask for the $89 visit when you book."
          }
        },
        {
          "@type": "Question",
          "name": "What does the $500 dental implant offer include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The offer takes $500 off a dental implant, abutment and crown, which together replace one missing tooth. The regular price is $3,500. It also includes a free consultation and second opinion, so you can find out whether an implant is right for you first."
          }
        },
        {
          "@type": "Question",
          "name": "Do the implant and Invisalign offers include a consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Both the $500 dental implant offer and the $1,000 Invisalign offer include a free consultation and second opinion at our Yardley office. You'll learn whether the treatment suits you and what it would cost, and you can take your time to decide."
          }
        },
        {
          "@type": "Question",
          "name": "Can I see a dentist without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New patients without insurance can start with an $89 visit for a cleaning, X-rays and an exam. After that, our in-office membership plan costs $150 a year, plus $75 per additional family member, and covers 2 cleanings, exams and X-rays, with 15% off treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer payment plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through CareCredit. It offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. We also accept cash, check, Visa, MasterCard, Discover and American Express, with payment due at the time of service."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs, prices or facts change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
