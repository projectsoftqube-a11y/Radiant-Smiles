import { homeServices, type LinkItem } from "@/content/pages/home";

/**
 * Header and footer navigation. Labels follow the house style ("&" for "and").
 * Links to pages that aren't built yet render as "#" placeholders until published (SiteLink).
 */

export type NavItem = {
  label: string;
  href: string;
  /** Simple dropdown */
  children?: LinkItem[];
  /** Services mega menu: the five service groups from the home page */
  mega?: boolean;
};

export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about-us/",
    children: [
      { label: "About Us", href: "/about-us/" },
      { label: "Dr. Urvishkumar Bhalala", href: "/about-us/dr-urvishkumar-bhalala/" },
      { label: "Dr. Jaspreet Gadria", href: "/about-us/dr-jaspreet-gadria-dmd/" },
      { label: "Meet the Staff", href: "/about-us/meet-the-staff/" },
      { label: "Patient Reviews", href: "/patient-reviews/" },
      { label: "Before & After Gallery", href: "/about-us/before-and-after-gallery/" },
    ],
  },
  { label: "Services", href: "/preventative-care/", mega: true },
  {
    label: "Patient Info",
    href: "/patient-information/",
    children: [
      { label: "New Patients", href: "/patient-information/new-patients/" },
      { label: "Scheduling", href: "/patient-information/scheduling/" },
      { label: "Insurance & Payment", href: "/patient-information/insurance-payment-options/" },
      { label: "CareCredit", href: "/patient-information/carecredit/" },
      { label: "Patient Registration", href: "/patient-information/patient-registration/" },
      { label: "Why Choose Us", href: "/patient-information/why-choose-us/" },
      { label: "Care & Comfort", href: "/patient-information/care-and-comfort/" },
      { label: "Advanced Technology", href: "/patient-information/care-and-comfort/advanced-technology/" },
    ],
  },
  { label: "Special Offers", href: "/special-offers/" },
  { label: "Areas We Serve", href: "/areas-we-serve/" },
  { label: "Contact", href: "/contact-us/" },
];

export const serviceMenu = homeServices.groups;

/**
 * Footer (user feedback, 7 Oct 2026): practice details on the left, then three columns of
 * two stacked menus each:
 *   1. Preventive & Family Dentistry, then Dentures
 *   2. Gum Care, then Restorative Dentistry
 *   3. Cosmetic Dentistry, then Patient Info
 * No "All … " hub links in the footer (user request).
 */
export type FooterMenu = { title: string; links: LinkItem[] };

const group = (id: string): FooterMenu => {
  const g = homeServices.groups.find((item) => item.id === id)!;
  return { title: g.title, links: g.links };
};

const patientInfo: FooterMenu = {
  title: "Patient Info",
  links: mainNav.find((item) => item.label === "Patient Info")?.children ?? [],
};

export const footerColumns: FooterMenu[][] = [
  [group("preventive"), group("dentures")],
  [group("gum"), group("restorative")],
  [group("cosmetic"), patientInfo],
];

export const legalNav: LinkItem[] = [
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Terms", href: "/patient-information/terms/" },
  { label: "Privacy Policy", href: "/patient-information/terms/privacy/" },
  { label: "Web Accessibility", href: "/patient-information/terms/web-accessibility/" },
  { label: "HIPAA Notice", href: "/hipaa-notice-of-privacy-practices/" },
  { label: "Sitemap", href: "/sitemap/" },
];
