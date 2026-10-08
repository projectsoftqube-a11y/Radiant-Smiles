# Oral Hygiene: Developer Handoff

**URL:** `/preventative-care/oral-hygiene/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Oral Hygiene in Yardley, PA: Brushing & Flossing Tips</title>
<meta name="description" content="Oral hygiene tips from our Yardley, PA dentists: how to brush, floss and choose products, plus the eating habits that protect your teeth and gums.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/oral-hygiene/">
<meta property="og:type" content="website">
<meta property="og:title" content="Oral Hygiene in Yardley, PA: Brushing & Flossing Tips">
<meta property="og:description" content="Oral hygiene tips from our Yardley, PA dentists: how to brush, floss and choose products, plus the eating habits that protect your teeth and gums.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/oral-hygiene/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Oral Hygiene in Yardley: Tips From Your Dentist". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Oral Hygiene.
- **Informational page:** no offer banner. Keep the two CTAs (hero and final) only.
- **Brushing and flossing steps** are ordered lists (`<ol>`). Simple diagrams of the 45-degree brush angle and the C-shaped floss are welcome; give them alt text describing the technique.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Diagram of a toothbrush held at a 45-degree angle to the gumline".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage (informational, no procedure node) plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/",
      "name": "Oral Hygiene in Yardley, PA: Brushing & Flossing Tips",
      "description": "Oral hygiene tips from our Yardley, PA dentists: how to brush, floss and choose products, plus the eating habits that protect your teeth and gums.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/#breadcrumb",
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
          "name": "Preventive Care",
          "item": "https://www.radiant-smiles.com/preventative-care/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Oral Hygiene",
          "item": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. Include it only while the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should I brush and floss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brush twice a day and floss once a day. Use a soft toothbrush and a fluoride toothpaste, and brush gently at a 45-degree angle to the gumline. Pair that routine with a professional cleaning and checkup twice a year to remove the tartar that brushing can't."
          }
        },
        {
          "@type": "Question",
          "name": "Is it normal for my gums to bleed when I floss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be normal for the first week after you start flossing, while your gums get used to it. If your gums still bleed after that, or bleed when you brush, it can be an early sign of gum disease. Mention it to the dentist at Radiant Smiles @ Floral Vale so your gums can be checked."
          }
        },
        {
          "@type": "Question",
          "name": "Is an electric toothbrush better than a manual one?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Either can clean well if you use the right technique. Many people find an electric toothbrush makes it easier to reach every surface, especially if they have limited hand movement. Ask the dentist or hygienist at your next checkup which option suits your mouth."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
