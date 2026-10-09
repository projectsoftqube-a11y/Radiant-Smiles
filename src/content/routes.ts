/**
 * Every URL from the SEO sitemap (docs/seo-sheets/Radiant Smiles - Keyword Map & Sitemap.xlsx).
 * Flip `published` to true when a page is built: it is then listed in sitemap.xml, and
 * links to it render as real links (until then they render as plain text, so staging
 * never links to a 404).
 */

export type RouteGroup =
  | "core"
  | "patient-info"
  | "general"
  | "preventive"
  | "restorative"
  | "cosmetic"
  | "location"
  | "service-location"
  | "content"
  | "legal"
  | "utility"
  | "paid";

export type RouteEntry = {
  path: string;
  /** Short label for navigation and link lists */
  label: string;
  group: RouteGroup;
  published: boolean;
  /** Paid landing pages are noindex and stay out of sitemap.xml */
  noindex?: boolean;
};

const r = (path: string, label: string, group: RouteGroup, published = false, noindex = false): RouteEntry => ({
  path,
  label,
  group,
  published,
  ...(noindex ? { noindex } : {}),
});

export const routes: RouteEntry[] = [
  // Core
  r("/", "Home", "core", true),
  r("/about-us/", "About Us", "core", true),
  r("/about-us/dr-urvishkumar-bhalala/", "Dr. Urvishkumar Bhalala", "core", true),
  r("/about-us/dr-jaspreet-gadria-dmd/", "Dr. Jaspreet Gadria", "core", true),
  r("/about-us/meet-the-staff/", "Meet the Staff", "core", true),
  r("/patient-reviews/", "Patient Reviews", "core", true),
  // noindex until the first case is cleared (gallery handoff publishing rule)
  r("/about-us/before-and-after-gallery/", "Before & After Gallery", "core", true, true),
  r("/special-offers/", "Special Offers", "core", true),
  r("/contact-us/", "Contact Us", "core", true),

  // Patient information
  r("/patient-information/", "Patient Information", "patient-info", true),
  r("/patient-information/new-patients/", "New Patients", "patient-info", true),
  r("/patient-information/scheduling/", "Scheduling", "patient-info", true),
  r("/patient-information/why-choose-us/", "Why Choose Us", "patient-info", true),
  r("/patient-information/insurance-payment-options/", "Insurance & Payment", "patient-info", true),
  r("/patient-information/carecredit/", "CareCredit", "patient-info", true),
  r("/patient-information/patient-registration/", "Patient Registration", "patient-info", true),
  r("/patient-information/patient-education/", "Patient Education", "patient-info", true),
  r("/patient-information/care-and-comfort/", "Care & Comfort", "patient-info", true),
  r("/patient-information/care-and-comfort/advanced-technology/", "Advanced Technology", "patient-info", true),
  r("/patient-information/care-and-comfort/infection-control/", "Infection Control", "patient-info", true),
  r("/patient-information/care-and-comfort/home-instructions/", "Home Care Instructions", "patient-info", true),

  // General dentistry
  r("/family-dentistry/", "Family Dentistry", "general", true),
  r("/emergency-dentistry/", "Emergency Dentistry", "general", true),

  // Preventative care
  r("/preventative-care/", "Preventative Care", "preventive", true),
  r("/preventative-care/teeth-cleaning-and-check-ups/", "Teeth Cleaning & Check-ups", "preventive", true),
  r("/preventative-care/child-dentistry/", "Child Dentistry", "preventive", true),
  r("/preventative-care/dental-sealants/", "Dental Sealants", "preventive", true),
  r("/preventative-care/fluoride/", "Fluoride Treatment", "preventive", true),
  r("/preventative-care/oral-hygiene/", "Oral Hygiene", "preventive", true),
  r("/preventative-care/oral-cancer-screening/", "Oral Cancer Screening", "preventive", true),
  r("/preventative-care/professional-night-guards/", "Night Guards", "preventive", true),
  r("/preventative-care/deep-teeth-cleaning/", "Deep Teeth Cleaning", "preventive", true),
  r("/preventative-care/periodontal-maintenance/", "Periodontal Maintenance", "preventive", true),
  r("/preventative-care/gum-disease-laser-therapy/", "Gum Disease Laser Therapy", "preventive", true),
  r("/preventative-care/arestin/", "Arestin", "preventive", true),

  // Restorative
  r("/restorative-dentistry/", "Restorative Dentistry", "restorative", true),
  r("/restorative-dentistry/dental-implants/", "Dental Implants", "restorative", true),
  r("/restorative-dentistry/dental-crowns/", "Dental Crowns", "restorative", true),
  r("/restorative-dentistry/dental-bridges/", "Dental Bridges", "restorative", true),
  r("/restorative-dentistry/dental-fillings/", "Dental Fillings", "restorative", true),
  r("/restorative-dentistry/root-canal/", "Root Canal Therapy", "restorative", true),
  r("/restorative-dentistry/tooth-extractions/", "Tooth Extractions", "restorative", true),
  r("/restorative-dentistry/wisdom-teeth-removal/", "Wisdom Teeth Removal", "restorative", true),
  r("/restorative-dentistry/dentures/", "Dentures", "restorative", true),
  r("/restorative-dentistry/dentures/partial-dentures/", "Partial Dentures", "restorative", true),
  r("/restorative-dentistry/dentures/immediate-dentures/", "Immediate Dentures", "restorative", true),
  r("/restorative-dentistry/dentures/implant-retained-dentures/", "Implant-Retained Dentures", "restorative", true),
  r("/restorative-dentistry/dentures/denture-relines/", "Denture Relines & Repairs", "restorative", true),
  r("/restorative-dentistry/periodontal-services/", "Periodontal Services", "restorative", true),

  // Cosmetic
  r("/cosmetic-dentistry/", "Cosmetic Dentistry", "cosmetic", true),
  r("/cosmetic-dentistry/dental-veneers-dentistry/", "Porcelain Veneers", "cosmetic", true),
  r("/cosmetic-dentistry/teeth-whitening/", "Teeth Whitening", "cosmetic", true),
  r("/cosmetic-dentistry/dental-bonding/", "Dental Bonding", "cosmetic", true),
  r("/cosmetic-dentistry/inlays-onlays/", "Inlays & Onlays", "cosmetic", true),
  r("/cosmetic-dentistry/invisalign/", "Invisalign", "cosmetic", true),
  r("/cosmetic-dentistry/invisalign/invisalign-teen/", "Invisalign Teen", "cosmetic", true),
  r("/cosmetic-dentistry/invisalign/invisalign-cost/", "Invisalign Cost", "cosmetic", true),

  // Locations
  r("/areas-we-serve/", "Areas We Serve", "location", true),
  r("/dentist-morrisville-pa/", "Morrisville, PA", "location", true),
  r("/dentist-lower-makefield-pa/", "Lower Makefield, PA", "location", true),
  r("/dentist-washington-crossing-pa/", "Washington Crossing, PA", "location", true),
  r("/dentist-new-hope-pa/", "New Hope, PA", "location", true),
  r("/dentist-trenton-nj/", "Trenton, NJ", "location", true),
  r("/dentist-ewing-nj/", "Ewing, NJ", "location", true),
  r("/dentist-hamilton-nj/", "Hamilton, NJ", "location", true),
  r("/dentist-lawrenceville-nj/", "Lawrenceville, NJ", "location", true),
  r("/dentist-hopewell-nj/", "Hopewell, NJ", "location", true),
  r("/dentist-pennington-nj/", "Pennington, NJ", "location", true),
  r("/dentist-mercer-county-nj/", "Mercer County, NJ", "location", true),

  // Service + location (conditional: build only if the Semrush rerun shows demand)
  r("/dental-implants-mercer-county-nj/", "Dental Implants, Mercer County NJ", "service-location", true),
  r("/emergency-dentist-trenton-nj/", "Emergency Dentist, Trenton NJ", "service-location", true),
  r("/invisalign-trenton-nj/", "Invisalign, Trenton NJ", "service-location", true),

  // Content
  r("/blog/", "Blog", "content", true),
  r("/blog/welcome-to-your-dentist-in-yardley/", "Welcome to Your Dentist in Yardley", "content", true),
  r("/blog/what-to-expect-with-teeth-whitening-in-yardley/", "What to Expect with Teeth Whitening in Yardley", "content", true),
  r("/blog/affordable-dentist-in-my-area-yardley/", "Affordable Dentist In My Area, Yardley", "content", true),
  r("/blog/affordable-toothache-relief-treatment-near-me-yardley/", "Affordable Toothache Relief & Treatment Near Me, Yardley", "content", true),
  r("/blog/general-dental-care-near-me-in-yardley/", "General Dental Care Near Me in Yardley", "content", true),
  r("/blog/general-dental-exam-in-yardley/", "General Dental Exam in Yardley", "content", true),
  r("/blog/preventive-dental-treatments-near-me-in-yardley/", "Preventive Dental Treatments Near Me in Yardley", "content", true),
  r("/blog/natural-looking-dental-crowns-in-yardley/", "Natural Looking Dental Crowns in Yardley", "content", true),
  r("/blog/dental-implants-associated-costs-in-yardley/", "Dental Implant Costs in Yardley", "content", true),
  r("/blog/best-candidate-for-dental-implants-in-yardley/", "Candidates for Dental Implants in Yardley", "content", true),

  // Legal
  r("/disclaimer/", "Disclaimer", "legal", false),
  r("/patient-information/terms/", "Terms", "legal", false),
  r("/patient-information/terms/privacy/", "Privacy Policy", "legal", false),
  r("/patient-information/terms/web-accessibility/", "Web Accessibility", "legal", false),
  r("/hipaa-notice-of-privacy-practices/", "HIPAA Notice of Privacy Practices", "legal", false),

  // Utility
  r("/sitemap/", "Sitemap", "utility", false),

  // Paid traffic (noindex)
  r("/lp/dental-implants/", "Dental Implants (paid)", "paid", false, true),
  r("/lp/emergency-dentist/", "Emergency Dentist (paid)", "paid", false, true),
  r("/lp/invisalign/", "Invisalign (paid)", "paid", false, true),
  r("/lp/new-patient-special/", "New Patient Special (paid)", "paid", false, true),
];

const byPath = new Map(routes.map((route) => [route.path, route]));

export function getRoute(path: string): RouteEntry | undefined {
  return byPath.get(path);
}

/** True when an internal path should render as a link (the page exists). */
export function isLive(path: string): boolean {
  const clean = path.split("#")[0];
  const route = byPath.get(clean);
  return route ? route.published : false;
}

export const routesByGroup = (group: RouteGroup) => routes.filter((route) => route.group === group);
