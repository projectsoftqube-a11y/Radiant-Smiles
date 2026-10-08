# Deep Teeth Cleaning: Developer Handoff

**URL:** `/preventative-care/deep-teeth-cleaning/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Deep Cleaning in Yardley, PA | Scaling & Root Planing</title>
<meta name="description" content="Deep cleaning (scaling and root planing) in Yardley, PA removes tartar below the gumline to treat gum disease and protect your teeth. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/">
<meta property="og:type" content="website">
<meta property="og:title" content="Deep Cleaning in Yardley, PA | Scaling & Root Planing">
<meta property="og:description" content="Deep cleaning (scaling and root planing) in Yardley, PA removes tartar below the gumline to treat gum disease and protect your teeth. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Deep Cleaning in Yardley, PA: Scaling and Root Planing". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Deep Teeth Cleaning.
- **Comparison table** (regular vs deep cleaning) as a real HTML table.
- **Never describe the practice or dentists as periodontists or gum specialists** in headings, alt text or image captions.
- **No prices** for deep cleaning: none are published. Keep "You'll know the cost before any treatment begins."
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Tables:** build each table as a real HTML `<table>` with `<th>` header cells, and let it scroll horizontally inside its own container on phones.
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Dentist measuring gum pockets before a deep cleaning at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + MedicalProcedure (deep cleaning, alternateName scaling and root planing), plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/",
      "name": "Deep Cleaning in Yardley, PA | Scaling & Root Planing",
      "description": "Deep cleaning (scaling and root planing) in Yardley, PA removes tartar below the gumline to treat gum disease and protect your teeth. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/#breadcrumb",
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
          "name": "Deep Teeth Cleaning",
          "item": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/#procedure",
      "name": "Deep cleaning",
      "alternateName": "Scaling and root planing",
      "description": "A deep cleaning, also called scaling and root planing, removes plaque and tartar from below the gumline and smooths the root surfaces so your gums can heal.",
      "url": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is deep cleaning necessary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have gum disease, yes. A deep cleaning removes the plaque and tartar below the gumline that are causing the infection, which helps stop gum disease from getting worse and protects against tooth loss. If your gums are healthy, the dentist at Radiant Smiles @ Floral Vale won't recommend one."
          }
        },
        {
          "@type": "Question",
          "name": "Does a deep cleaning hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With the area numbed by local anesthetic, you'll usually feel pressure and vibration rather than sharp discomfort. Your gums may feel tender for a short time afterwards. If you're anxious, tell us before we start and ask about sedation options."
          }
        },
        {
          "@type": "Question",
          "name": "How is a deep cleaning different from a regular cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A regular cleaning removes plaque and tartar from your teeth above and at the gumline, for healthy gums. A deep cleaning, or scaling and root planing, cleans below the gumline down to the roots and smooths the root surfaces so gums affected by gum disease can heal."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a deep cleaning cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on how many areas of your mouth need treatment and whether an antibiotic is placed in any pockets. You'll know the cost before treatment begins. Many dental plans cover deep cleanings, members of our in-office plan get 15% off, and CareCredit financing is available, subject to credit approval."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after a deep cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The dentist rechecks your gum pockets at a follow-up visit to see how they've healed. You'll usually then switch to periodontal maintenance visits, which are more thorough than regular cleanings and help keep gum disease under control over the long term."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the procedure description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
