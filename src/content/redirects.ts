/**
 * Permanent (301) redirects for URLs that leave the site.
 * Source: "Redirects (301)" tab of the Keyword Map & Sitemap workbook, plus the legacy
 * URLs the old WordPress site already redirected (seo-inventory.csv; agreed 7 Oct 2026).
 * Chains are collapsed: every old URL points straight at its final page.
 * The blog-post redirects in the workbook are marked "review, then 301" and are added
 * with the blog folder.
 */
export const redirects: { source: string; destination: string }[] = [
  // Duplicates and thin pages merged by the SEO team
  { source: "/dental-crowns/", destination: "/restorative-dentistry/dental-crowns/" },
  { source: "/restorative-dentistry/non-surgical-root-canal/", destination: "/restorative-dentistry/root-canal/" },
  { source: "/emergency-dentistry/emergency-dentist/", destination: "/emergency-dentistry/" },
  { source: "/general-dentistry/", destination: "/family-dentistry/" },
  { source: "/preventative-care/dental-exam/", destination: "/preventative-care/teeth-cleaning-and-check-ups/" },
  { source: "/patient-information/technology/", destination: "/patient-information/care-and-comfort/advanced-technology/" },
  { source: "/patient-information/introduction/", destination: "/patient-information/" },
  { source: "/patient-information/services/", destination: "/patient-information/" },
  { source: "/patient-information/first-visit/", destination: "/patient-information/new-patients/" },
  { source: "/cosmetic-dentistry/dental-veneers-dentistry/porcelain-veneers/", destination: "/cosmetic-dentistry/dental-veneers-dentistry/" },
  { source: "/cosmetic-dentistry/invisalign/invisalign-information/", destination: "/cosmetic-dentistry/invisalign/" },
  { source: "/cosmetic-dentistry/invisalign/advantages-of-invisalign/", destination: "/cosmetic-dentistry/invisalign/" },
  { source: "/cosmetic-dentistry/invisalign/invisalign-videos/", destination: "/cosmetic-dentistry/invisalign/" },
  { source: "/restorative-dentistry/periodontal-services/treatment-methods/", destination: "/restorative-dentistry/periodontal-services/" },
  { source: "/restorative-dentistry/dentures/denture-care/", destination: "/restorative-dentistry/dentures/" },
  { source: "/restorative-dentistry/dentures/exams-maintenance/", destination: "/restorative-dentistry/dentures/" },
  { source: "/restorative-dentistry/soft-liners/", destination: "/restorative-dentistry/dentures/denture-relines/" },
  { source: "/restorative-dentistry/rebase-repairs/", destination: "/restorative-dentistry/dentures/denture-relines/" },
  { source: "/about-us/blog/", destination: "/blog/" },

  // Legacy URLs the old site already redirected (kept so old links and bookmarks still land)
  { source: "/services/dental-implants/", destination: "/restorative-dentistry/dental-implants/" },
  { source: "/services/dental-crowns/", destination: "/restorative-dentistry/dental-crowns/" },
  { source: "/services/teeth-whitening/", destination: "/cosmetic-dentistry/teeth-whitening/" },
  { source: "/services/dental-exam/", destination: "/preventative-care/teeth-cleaning-and-check-ups/" },
  { source: "/services/general-dentistry/", destination: "/family-dentistry/" },
  { source: "/services/", destination: "/patient-information/" },
  { source: "/appointment/", destination: "/patient-information/scheduling/" },
  { source: "/contact/", destination: "/contact-us/" },
  { source: "/about-us/blog/page/:page/", destination: "/blog/" },
  { source: "/new-patients-promotions/", destination: "/special-offers/" },
];
