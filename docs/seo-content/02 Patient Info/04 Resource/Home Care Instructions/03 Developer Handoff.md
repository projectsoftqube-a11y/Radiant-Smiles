# Home Care Instructions: Developer Handoff

**URL:** `/patient-information/care-and-comfort/home-instructions/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>After Tooth Extraction Care & Home Instructions | Yardley</title>
<meta name="description" content="After tooth extraction care, plus home instructions after fillings, crowns, root canals and cosmetic work, from Radiant Smiles @ Floral Vale, Yardley, PA.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/">
<meta property="og:type" content="website">
<meta property="og:title" content="After Tooth Extraction Care & Home Instructions | Yardley">
<meta property="og:description" content="After tooth extraction care, plus home instructions after fillings, crowns, root canals and cosmetic work, from Radiant Smiles @ Floral Vale, Yardley, PA.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Home Care Instructions: After Tooth Extraction Care and More". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Care & Comfort › Home Care Instructions.
- **Anchors:** give each H2 an id (`#extraction`, `#filling`, `#crown-bridge`, `#root-canal`, `#cosmetic`, `#when-to-call`) so staff can text or email a direct link after treatment. Add a small "On this page" jump list under the hero.
- **Steps** for extraction care as an ordered list (`<ol>`); the call-us list as an unordered list. Keep the numbers (30 to 45 minutes, 24 hours, 48 hours, 72 hours, 2 to 3 days) exactly as written.
- **Print:** add a print stylesheet (hide header, nav and footer except the NAP line) so the page prints cleanly as a handout.
- **Clinical sign-off [CONFIRM]:** a dentist must approve the medication wording ("ibuprofen or acetaminophen (Tylenol) ... follow the directions on the label") before launch. Then show "Last reviewed: [date] by Dr. [name]" under the H1.
- **Primary button** here is the call button: post-treatment questions need a conversation.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); also track jump-list clicks (`click_jump_link`).

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: WebPage + BreadcrumbList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/",
      "name": "After Tooth Extraction Care & Home Instructions | Yardley",
      "description": "After tooth extraction care, plus home instructions after fillings, crowns, root canals and cosmetic work, from Radiant Smiles @ Floral Vale, Yardley, PA.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/#breadcrumb",
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
          "name": "Patient Information",
          "item": "https://www.radiant-smiles.com/patient-information/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Care & Comfort",
          "item": "https://www.radiant-smiles.com/patient-information/care-and-comfort/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Home Care Instructions",
          "item": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. The question and answer text below is copied word for word from the visible FAQs; include it only while they stay identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long should I bite on gauze after a tooth extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bite firmly on the gauze pad for 30 to 45 minutes after a tooth extraction so a blood clot can form in the socket. If the area is still bleeding after that, replace it with a fresh pad and bite down again. Call (215) 860-4600 if heavy bleeding continues."
          }
        },
        {
          "@type": "Question",
          "name": "When can I brush my teeth after an extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can brush and floss the rest of your mouth after 24 hours. Keep the toothbrush away from the extraction site for 72 hours, and for the same 72 hours avoid vigorous rinsing, straws, smoking and alcohol, which can disturb the blood clot."
          }
        },
        {
          "@type": "Question",
          "name": "Is it normal for a new filling to feel sensitive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Some sensitivity to hot, cold and pressure is normal after a composite filling. The filling is fully set when you leave the office, so you can chew normally once the numbness wears off. Avoid chewing and hot drinks while you're still numb, usually for several hours."
          }
        }
      ]
    }
  ]
}
```

### 3c. Not included on purpose

- No Review or AggregateRating markup for the practice's own reviews (self-serving reviews aren't eligible and risk a manual action).
- No `priceRange`, `award` or `hasCredential` values: the current site doesn't publish them.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs or aftercare numbers change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
