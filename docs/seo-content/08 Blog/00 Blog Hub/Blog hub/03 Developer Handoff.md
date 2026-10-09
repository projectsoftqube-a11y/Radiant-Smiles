# Blog hub: Developer Handoff

**URL:** `/blog/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Health Blog | Radiant Smiles @ Floral Vale</title>
<meta name="description" content="Dental health articles from Radiant Smiles @ Floral Vale in Yardley, PA: implants, crowns, whitening, checkups, toothaches and what to expect.">
<link rel="canonical" href="https://www.radiant-smiles.com/blog/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Health Blog | Radiant Smiles @ Floral Vale">
<meta property="og:description" content="Dental health articles from Radiant Smiles @ Floral Vale in Yardley, PA: implants, crowns, whitening, checkups, toothaches and what to expect.">
<meta property="og:url" content="https://www.radiant-smiles.com/blog/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Health Blog". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Blog.
- **Server-render all text** (Next.js SSG). Lists, tables, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only inside images.
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** every call button and phone mention links to `tel:+12158604600`. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Links on this page: `/blog/affordable-dentist-in-my-area-yardley/`, `/blog/affordable-toothache-relief-treatment-near-me-yardley/`, `/blog/best-candidate-for-dental-implants-in-yardley/`, `/blog/dental-implants-associated-costs-in-yardley/`, `/blog/general-dental-care-near-me-in-yardley/`, `/blog/general-dental-exam-in-yardley/`, `/blog/natural-looking-dental-crowns-in-yardley/`, `/blog/preventive-dental-treatments-near-me-in-yardley/`, `/blog/welcome-to-your-dentist-in-yardley/`, `/blog/what-to-expect-with-teeth-whitening-in-yardley/`, `/cosmetic-dentistry/`, `/cosmetic-dentistry/teeth-whitening/`, `/emergency-dentistry/`, `/patient-information/care-and-comfort/home-instructions/`, `/patient-information/insurance-payment-options/`, `/patient-information/patient-education/`, `/preventative-care/`, `/preventative-care/teeth-cleaning-and-check-ups/`, `/restorative-dentistry/dental-crowns/`, `/restorative-dentistry/dental-implants/`, `/special-offers/`.
- **Indexable** (`index, follow`): 10 posts stay live after the cleanup, above the 3-post minimum.
- **Redirect:** 301 `/about-us/blog/` → `/blog/` (the old blog index). The posts already live at `/blog/<slug>/` and keep their URLs.
- **13 posts recommended for a 301 after review** (11 duplicate implant posts, 1 crowns, 1 cleaning; list and targets in the 'Redirects (301)' tab of `00 Reference/Radiant Smiles - Keyword Map & Sitemap.xlsx`). Never show them in the feed, the topic lists or sitemap.xml, even before the redirects go live.
- **Blog post links:** the 10 post URLs in the launch list are live posts outside `url_map.md` (posts are not in the page map). Check each returns 200 at launch: `/blog/affordable-dentist-in-my-area-yardley/`, `/blog/affordable-toothache-relief-treatment-near-me-yardley/`, `/blog/best-candidate-for-dental-implants-in-yardley/`, `/blog/dental-implants-associated-costs-in-yardley/`, `/blog/general-dental-care-near-me-in-yardley/`, `/blog/general-dental-exam-in-yardley/`, `/blog/natural-looking-dental-crowns-in-yardley/`, `/blog/preventive-dental-treatments-near-me-in-yardley/`, `/blog/welcome-to-your-dentist-in-yardley/`, `/blog/what-to-expect-with-teeth-whitening-in-yardley/`.
- **Post feed:** server-render the cards (title link, date, one-line excerpt, topic label), newest first. If you paginate, use crawlable `<a href>` links (`/blog/page/2/`), not a 'load more' button only. The grouped launch list in `02 Content.md` can be the initial render.
- **Topic labels:** Dental implants and crowns, Checkups and prevention, Cosmetic dentistry, Dental emergencies, Getting started. Keep them as labels or filters on this page; don't create indexable tag/category archives.
- **Post titles:** shown exactly as listed. Several old titles contain "near me"; they are kept as published until each post is reviewed.
- **Before launch, post links (content task):** check each of the 10 kept posts and add one descriptive link to the matching treatment page (e.g. implant posts → `/restorative-dentistry/dental-implants/`, whitening post → `/cosmetic-dentistry/teeth-whitening/`) where it's missing. Use only URLs in `url_map.md`.
- **Tracking:** `call_click` on the final CTA; `blog_card_click` with the post slug on feed cards.

## 3. Structured data (JSON-LD)

### 3a. Core: CollectionPage + BreadcrumbList + Blog (required)

The Blog node references the business by `@id` (`https://www.radiant-smiles.com/#dentist`) as publisher; the full Dentist entity lives on the homepage. Individual posts carry their own BlogPosting schema on the post pages; don't list them here.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.radiant-smiles.com/blog/#webpage",
      "url": "https://www.radiant-smiles.com/blog/",
      "name": "Dental Health Blog | Radiant Smiles @ Floral Vale",
      "description": "Dental health articles from Radiant Smiles @ Floral Vale in Yardley, PA: implants, crowns, whitening, checkups, toothaches and what to expect.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/blog/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/blog/#blog"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/blog/#breadcrumb",
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
          "name": "Blog",
          "item": "https://www.radiant-smiles.com/blog/"
        }
      ]
    },
    {
      "@type": "Blog",
      "@id": "https://www.radiant-smiles.com/blog/#blog",
      "name": "Dental Health Blog",
      "url": "https://www.radiant-smiles.com/blog/",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or entity descriptions change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
