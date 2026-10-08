# Patient Education: Developer Handoff

**URL:** `/patient-information/patient-education/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Patient Education | Radiant Smiles @ Floral Vale</title>
<meta name="description" content="Dental health guides from Radiant Smiles @ Floral Vale in Yardley, PA: home care after treatment, everyday oral hygiene and answers to common questions.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/patient-education/">
<meta property="og:type" content="website">
<meta property="og:title" content="Patient Education | Radiant Smiles @ Floral Vale">
<meta property="og:description" content="Dental health guides from Radiant Smiles @ Floral Vale in Yardley, PA: home care after treatment, everyday oral hygiene and answers to common questions.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/patient-education/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Patient Education". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Patient Education.
- **Latest Guides feed:** pull the latest 6 posts from the blog at build time (SSG/ISR), so post titles and links are in the initial HTML. Not a client-side widget. Hide the whole Latest Guides block (heading included) if there are no posts.
- **Old library not carried over:** the current page embeds the RevenueWell Patient Education Library (third-party articles and videos). Don't re-embed it: the content isn't the practice's own and duplicates the blog topics. If the practice wants to keep it, add it as a plain outbound link [CONFIRM].
- **Alternative per the brief:** if the team prefers, merge this page into `/blog/` with a 301 (`/patient-information/patient-education/` → `/blog/`) and remove it from the hub and HTML sitemap. Decide before launch; don't ship both as near-duplicate indexes.
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); also track feed post clicks (`click_blog_post`).

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: CollectionPage + BreadcrumbList + ItemList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.radiant-smiles.com/patient-information/patient-education/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/patient-education/",
      "name": "Patient Education | Radiant Smiles @ Floral Vale",
      "description": "Dental health guides from Radiant Smiles @ Floral Vale in Yardley, PA: home care after treatment, everyday oral hygiene and answers to common questions.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/patient-education/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/patient-information/patient-education/#itemlist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/patient-education/#breadcrumb",
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
          "name": "Patient Education",
          "item": "https://www.radiant-smiles.com/patient-information/patient-education/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.radiant-smiles.com/patient-information/patient-education/#itemlist",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dental Health Blog",
          "url": "https://www.radiant-smiles.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Home Care Instructions",
          "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Oral Hygiene",
          "url": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Children's Dentistry",
          "url": "https://www.radiant-smiles.com/preventative-care/child-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Emergency Dentistry",
          "url": "https://www.radiant-smiles.com/emergency-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "New Patients",
          "url": "https://www.radiant-smiles.com/patient-information/new-patients/"
        }
      ]
    }
  ]
}
```

### 3c. Not included on purpose

- No Blog or BlogPosting markup here: the post feed's markup belongs on `/blog/` and each post.
- The ItemList lists only the static links; don't add feed posts to it (they change).

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, guide links change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
