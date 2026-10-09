# Invisalign: Developer Handoff

**URL:** `/cosmetic-dentistry/invisalign/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Invisalign in Yardley, PA | $1,000 Off | Radiant Smiles</title>
<meta name="description" content="Invisalign clear aligners in Yardley, PA: $1,000 off the regular $5,800, with a free consultation and second opinion. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/">
<meta property="og:type" content="website">
<meta property="og:title" content="Invisalign in Yardley, PA | $1,000 Off | Radiant Smiles">
<meta property="og:description" content="Invisalign clear aligners in Yardley, PA: $1,000 off the regular $5,800, with a free consultation and second opinion. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
```

## 2. Page build rules

- **One H1:** "Invisalign Clear Aligners in Yardley, PA". Breadcrumb: Home › Cosmetic Dentistry › Invisalign.
- **301 redirects (single hop, permanent) into this page:** `/cosmetic-dentistry/invisalign/invisalign-information/`, `/cosmetic-dentistry/invisalign/advantages-of-invisalign/` and `/cosmetic-dentistry/invisalign/invisalign-videos/` (the videos URL was not in the crawl; add the rule anyway in case it is indexed or linked). Remove all three from the XML sitemap and internal links.
- **Trademark:** write "Invisalign" exactly; add "Invisalign and Invisalign Teen are trademarks of Align Technology, Inc." in small print in the footer of this page. Don't add Align provider badges or tier names until the practice confirms provider status.
- **Offer:** "$1,000 off the regular $5,800" and "free consultation and second opinion" exactly as on `/special-offers/`; no expiry or 'limited time' wording until terms are confirmed. The hero button reads "Book a Free Invisalign Consultation".
- **Comparison table** (Invisalign vs braces) as a real HTML `<table>`.
- **Videos:** if the old videos page held Align-supplied videos, embed at most one below "How Invisalign Works" with a text summary; don't rely on video for any fact on the page.
- **Images:** real photos of this office or this practice's patients only, with written consent; no stock smiles presented as patient results. Descriptive alt text (e.g. "Porcelain veneers on upper front teeth, Radiant Smiles @ Floral Vale").
- **Always:** server-render all text (no client-only rendering of copy or FAQs); FAQ questions and answers in the DOM on load (an accordion is fine if the text is in the HTML); crawlable `<a href>` links; phone as `tel:+12158604600`; NAP text identical to the homepage and footer: Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600. No `sms:` link until texting is confirmed.
- **Tracking:** fire `click_call` on every `tel:` link and `click_book` on every button that links to `/patient-information/scheduling/` (GTM, per the tracking plan).

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage. The MedicalProcedure description is copied word for word from the page's first sentence.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/#webpage",
      "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/",
      "name": "Invisalign in Yardley, PA | $1,000 Off | Radiant Smiles",
      "description": "Invisalign clear aligners in Yardley, PA: $1,000 off the regular $5,800, with a free consultation and second opinion. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/#procedure"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Invisalign",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/#procedure",
      "name": "Invisalign clear aligner treatment",
      "description": "Invisalign straightens teeth with a series of clear, removable aligners made from BPA-free plastic instead of metal brackets and wires.",
      "procedureType": "https://schema.org/NoninvasiveProcedure"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does Invisalign take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For adults, Invisalign usually takes about one year. The exact time depends on how far your teeth need to move and on wearing your aligners 20 to 22 hours a day. You switch to a new set about every two weeks, and at your consultation we give you an estimate for your own case."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Invisalign cost in Yardley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign at Radiant Smiles @ Floral Vale in Yardley, PA is currently $1,000 off the regular price of $5,800, and the consultation and second opinion are free. Some dental plans cover part of orthodontic treatment, and you can use FSA funds or CareCredit financing to spread the cost."
          }
        },
        {
          "@type": "Question",
          "name": "Is Invisalign better than braces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is better for everyone. Invisalign aligners are clear, removable and smooth, so you can eat normally and brush as usual, but they only work if you wear them 20 to 22 hours a day. Braces are fixed in place. At your consultation, we'll tell you whether Invisalign suits your teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Can adults get Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Invisalign suits adults well because the aligners are clear plastic, with no brackets or wires, and come out for meals and meetings. Adult treatment usually takes about one year. Your teeth and gums need to be healthy before you start, so we check them at your free consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How many hours a day do you wear Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You wear Invisalign aligners 20 to 22 hours a day. They come out only to eat, drink anything other than water, and brush and floss your teeth. Wearing them less than that can slow your progress, because the aligners only move your teeth while they're in your mouth."
          }
        },
        {
          "@type": "Question",
          "name": "What records are taken for Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign is planned from photos, X-rays and a scan or impressions of your teeth. At Radiant Smiles @ Floral Vale, we take these records after your free consultation confirms aligners suit you. Invisalign's software uses them to map how each tooth moves, stage by stage, and your custom aligners are made from that plan."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

- **Add `Offer` nodes** only after the practice confirms the offer terms (start/end dates, eligibility). Until then the offers stay as visible text only.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, offers or procedure description change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
