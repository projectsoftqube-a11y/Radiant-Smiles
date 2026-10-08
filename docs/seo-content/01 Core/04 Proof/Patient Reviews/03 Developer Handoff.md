# Patient Reviews: Developer Handoff

**URL:** `/patient-reviews/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Radiant Smiles @ Floral Vale Reviews | Yardley, PA</title>
<meta name="description" content="Read Radiant Smiles @ Floral Vale reviews from patients of our Yardley, PA dental office, then share your own experience or book a visit.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-reviews/">
<meta property="og:type" content="website">
<meta property="og:title" content="Radiant Smiles @ Floral Vale Reviews | Yardley, PA">
<meta property="og:description" content="Read Radiant Smiles @ Floral Vale reviews from patients of our Yardley, PA dental office, then share your own experience or book a visit.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-reviews/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Radiant Smiles @ Floral Vale Reviews". Keep the heading levels as in `02 Content.md`. Breadcrumb: Home › Patient Reviews.
- **Server-render all text** (Next.js SSG). Set title, description, canonical and openGraph in `generateMetadata` for this route, and render the JSON-LD on the server in a `<script type="application/ld+json">`.
- **URL stays at the site root** (`/patient-reviews/`) to protect current rankings. No redirect.
- **No Review or AggregateRating markup.** Self-serving reviews of the business on its own site aren't eligible for review stars and risk a manual action. Show the reviews as plain HTML text (`<blockquote>` with name and date).
- **Don't show the "4.14 out of 5 stars based on 50 reviews" figure** from the current widget until the practice confirms its source. Show only the 3 reviews in `02 Content.md`.
- **Reviews verbatim:** keep the quotes exactly as written, typos included, with first name, last initial, star rating and month. Don't edit or "correct" them.
- **Review widget slot:** optional. A live Google reviews widget is fine once the Google Business Profile is connected, but the 3 quotes must stay in the server-rendered HTML.
- **"Review us on Google" button:** link to the Google Business Profile write-a-review URL (`https://search.google.com/local/writereview?placeid=<PLACE_ID>`). The place ID must come from the practice. Open in a new tab. Until it's supplied, hide the button and keep the steps as text.
- **Never incentivise reviews** (no discounts or gifts for reviews) and don't filter who is asked; both break Google's review policies.
- **Tracking:** add a "review_click" event on the Google review button.
- **NAP:** where the address appears, it must read exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, matching the footer and the Google Business Profile.
- **Phone links:** every "Call (215) 860-4600" button and visible phone number links to `tel:+12158604600`. No `sms:` link until the practice confirms texting.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text shown. All targets are in the live URL map.
- **Tracking:** fire separate events for call clicks and "Request an Appointment" clicks on this page.

## 3. Structured data (JSON-LD)

The business entity is defined in full on the homepage only. This page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: WebPage + BreadcrumbList (required)

Plain WebPage about the `#dentist` entity. No Review, AggregateRating or `review` property anywhere on the page.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-reviews/#webpage",
      "url": "https://www.radiant-smiles.com/patient-reviews/",
      "name": "Radiant Smiles @ Floral Vale Reviews | Yardley, PA",
      "description": "Read Radiant Smiles @ Floral Vale reviews from patients of our Yardley, PA dental office, then share your own experience or book a visit.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-reviews/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-reviews/#breadcrumb",
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
          "name": "Patient Reviews",
          "item": "https://www.radiant-smiles.com/patient-reviews/"
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs, prices or facts change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
