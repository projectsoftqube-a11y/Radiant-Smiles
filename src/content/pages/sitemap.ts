import type { IconName } from "@/components/ui/Icon";
import type { Crumb } from "@/lib/schema";
import { routes, isLive, type RouteGroup } from "../routes";
import { napCtaLine, type ClosingCta, type PageMeta } from "./shared";

/**
 * HTML sitemap. From 10 Utility/01 HTML Sitemap/02 Content.md: group order, intros and link
 * text as written ("&" for "and" in headings and link labels, CLAUDE.md).
 *
 * Handoff: the lists come from the same route config as sitemap.xml. A listed link shows
 * once its page is published, and any new published, indexable page that the content file
 * doesn't list yet is added to its group automatically (route label as the link text).
 * Never listed: /lp/ pages, on-hold towns, individual blog posts, redirected URLs.
 */

export const sitemapMeta: PageMeta = {
  path: "/sitemap/",
  title: "Sitemap | Radiant Smiles @ Floral Vale, Yardley PA",
  description:
    "Every page on the Radiant Smiles @ Floral Vale website in one list: dental services, patient information, areas we serve, the blog and our policies.",
};

export const sitemapCrumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Sitemap", path: "/sitemap/" },
];

export const sitemapHero = {
  h1: "Sitemap",
  intro:
    "This page lists every page on the Radiant Smiles @ Floral Vale website, grouped by topic. If you can't find what you need, call us at (215) 860-4600.",
};

export type SitemapLink = { label: string; href: string };
export type SitemapGroup = {
  id: string;
  title: string;
  intro: string;
  icon: IconName;
  /** Route groups whose new pages are added here automatically */
  routeGroups: RouteGroup[];
  links: SitemapLink[];
  /** H3 sub-groups (Areas We Serve) */
  subgroups?: { title: string; links: SitemapLink[] }[];
};

const l = (label: string, href: string): SitemapLink => ({ label, href });

const groups: SitemapGroup[] = [
  {
    id: "about",
    title: "About Our Practice",
    intro: "Start here to meet the dentists, read patient reviews and see current offers.",
    icon: "smile",
    routeGroups: ["core"],
    links: [
      l("Home: Radiant Smiles @ Floral Vale, Yardley, PA", "/"),
      l("About Radiant Smiles @ Floral Vale", "/about-us/"),
      l("Meet our dental team", "/about-us/meet-the-staff/"),
      l("Dr. Urvishkumar Bhalala, DMD", "/about-us/dr-urvishkumar-bhalala/"),
      l("Dr. Jaspreet Gadria, DMD", "/about-us/dr-jaspreet-gadria-dmd/"),
      l("Patient reviews", "/patient-reviews/"),
      l("Before & after smile gallery", "/about-us/before-and-after-gallery/"),
      l("Special offers & dental savings", "/special-offers/"),
      l("Contact us, hours & directions", "/contact-us/"),
    ],
  },
  {
    id: "patient-information",
    title: "Patient Information",
    intro: "These pages cover your first visit, insurance, payment and how we care for you.",
    icon: "clipboard",
    routeGroups: ["patient-info"],
    links: [
      l("Patient information overview", "/patient-information/"),
      l("New patients: what to expect", "/patient-information/new-patients/"),
      l("Why choose our practice", "/patient-information/why-choose-us/"),
      l("Dental insurance & payment options", "/patient-information/insurance-payment-options/"),
      l("CareCredit financing", "/patient-information/carecredit/"),
      l("Request an appointment", "/patient-information/scheduling/"),
      l("New patient registration forms", "/patient-information/patient-registration/"),
      l("Care & comfort at our office", "/patient-information/care-and-comfort/"),
      l("Advanced dental technology", "/patient-information/care-and-comfort/advanced-technology/"),
      l("Infection control & sterilization", "/patient-information/care-and-comfort/infection-control/"),
      l("Patient education library", "/patient-information/patient-education/"),
      l("Home care instructions after treatment", "/patient-information/care-and-comfort/home-instructions/"),
    ],
  },
  {
    id: "general-preventive",
    title: "General & Preventive Dentistry",
    intro: "These pages cover checkups, gum care, children's visits and urgent care.",
    icon: "toothClean",
    routeGroups: ["general", "preventive"],
    links: [
      l("Preventive dental care", "/preventative-care/"),
      l("Family dentistry", "/family-dentistry/"),
      l("Teeth cleaning & check-ups", "/preventative-care/teeth-cleaning-and-check-ups/"),
      l("Fluoride treatment", "/preventative-care/fluoride/"),
      l("Dental sealants", "/preventative-care/dental-sealants/"),
      l("Oral hygiene tips", "/preventative-care/oral-hygiene/"),
      l("Oral cancer screening", "/preventative-care/oral-cancer-screening/"),
      l("Deep teeth cleaning (scaling & root planing)", "/preventative-care/deep-teeth-cleaning/"),
      l("Periodontal maintenance", "/preventative-care/periodontal-maintenance/"),
      l("Laser therapy for gum disease", "/preventative-care/gum-disease-laser-therapy/"),
      l("Arestin antibiotic gum treatment", "/preventative-care/arestin/"),
      l("Children's dentistry", "/preventative-care/child-dentistry/"),
      l("Emergency dentistry", "/emergency-dentistry/"),
      l("Custom night guards", "/preventative-care/professional-night-guards/"),
    ],
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    intro: "These pages explain how we repair damaged teeth and replace missing ones.",
    icon: "implant",
    routeGroups: ["restorative"],
    links: [
      l("Restorative dentistry overview", "/restorative-dentistry/"),
      l("Dental crowns", "/restorative-dentistry/dental-crowns/"),
      l("Tooth-colored fillings", "/restorative-dentistry/dental-fillings/"),
      l("Root canal therapy", "/restorative-dentistry/root-canal/"),
      l("Dental implants", "/restorative-dentistry/dental-implants/"),
      l("Dental bridges", "/restorative-dentistry/dental-bridges/"),
      l("Dentures", "/restorative-dentistry/dentures/"),
      l("Partial dentures", "/restorative-dentistry/dentures/partial-dentures/"),
      l("Immediate dentures", "/restorative-dentistry/dentures/immediate-dentures/"),
      l("Implant-retained dentures", "/restorative-dentistry/dentures/implant-retained-dentures/"),
      l("Denture relines & repairs", "/restorative-dentistry/dentures/denture-relines/"),
      l("Tooth extractions", "/restorative-dentistry/tooth-extractions/"),
      l("Wisdom teeth removal", "/restorative-dentistry/wisdom-teeth-removal/"),
      l("Periodontal (gum disease) services", "/restorative-dentistry/periodontal-services/"),
    ],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    intro: "These pages cover whitening, veneers and other ways to improve how your smile looks.",
    icon: "whiten",
    routeGroups: ["cosmetic"],
    links: [
      l("Cosmetic dentistry overview", "/cosmetic-dentistry/"),
      l("Porcelain veneers", "/cosmetic-dentistry/dental-veneers-dentistry/"),
      l("Teeth whitening", "/cosmetic-dentistry/teeth-whitening/"),
      l("Dental bonding", "/cosmetic-dentistry/dental-bonding/"),
      l("Inlays & onlays", "/cosmetic-dentistry/inlays-onlays/"),
      l("Invisalign clear aligners", "/cosmetic-dentistry/invisalign/"),
      l("Invisalign Teen", "/cosmetic-dentistry/invisalign/invisalign-teen/"),
      l("Invisalign cost & payment", "/cosmetic-dentistry/invisalign/invisalign-cost/"),
    ],
  },
  {
    id: "areas",
    title: "Areas We Serve",
    intro:
      "Our one office is in Yardley, PA, and these pages explain the trip from nearby towns in Pennsylvania and New Jersey.",
    icon: "pin",
    routeGroups: ["location", "service-location"],
    links: [l("All areas we serve", "/areas-we-serve/")],
    subgroups: [
      {
        title: "Pennsylvania",
        links: [
          l("Dentist near Morrisville, PA", "/dentist-morrisville-pa/"),
          l("Dentist near Lower Makefield, PA", "/dentist-lower-makefield-pa/"),
          l("Dentist near Washington Crossing, PA", "/dentist-washington-crossing-pa/"),
          l("Dentist near New Hope, PA", "/dentist-new-hope-pa/"),
        ],
      },
      {
        title: "New Jersey",
        links: [
          l("Dentist near Trenton, NJ", "/dentist-trenton-nj/"),
          l("Dentist near Ewing, NJ", "/dentist-ewing-nj/"),
          l("Dentist near Hopewell, NJ", "/dentist-hopewell-nj/"),
          l("Dentist near Hamilton, NJ", "/dentist-hamilton-nj/"),
          l("Dentist near Lawrenceville, NJ", "/dentist-lawrenceville-nj/"),
          l("Dentist near Pennington, NJ", "/dentist-pennington-nj/"),
          l("Dentist for Mercer County, NJ patients", "/dentist-mercer-county-nj/"),
          // Conditional pages: listed once built, with the handoff's link text
          l("Dental implants for Mercer County, NJ patients", "/dental-implants-mercer-county-nj/"),
          l("Emergency dentist near Trenton, NJ", "/emergency-dentist-trenton-nj/"),
          l("Invisalign near Trenton, NJ", "/invisalign-trenton-nj/"),
        ],
      },
    ],
  },
  {
    id: "blog",
    title: "Blog",
    intro: "Our blog answers common dental questions in plain language.",
    icon: "book",
    // Individual posts are never listed (handoff); the hub only
    routeGroups: [],
    links: [l("Dental health blog", "/blog/")],
  },
  {
    id: "policies",
    title: "Policies",
    intro: "These pages explain how the website works and how we protect your information.",
    icon: "shield",
    routeGroups: ["legal"],
    links: [
      l("Website disclaimer", "/disclaimer/"),
      l("Terms of use", "/patient-information/terms/"),
      l("Website privacy policy", "/patient-information/terms/privacy/"),
      l("Web accessibility statement", "/patient-information/terms/web-accessibility/"),
      l("HIPAA Notice of Privacy Practices", "/hipaa-notice-of-privacy-practices/"),
    ],
  },
];

/** Pages the content file lists, plus new published, indexable pages in each group's route groups */
export function sitemapGroups(): SitemapGroup[] {
  const listed = new Set(groups.flatMap((g) => [...g.links, ...(g.subgroups ?? []).flatMap((s) => s.links)].map((x) => x.href)));
  const live = (links: SitemapLink[]) => links.filter((x) => isLive(x.href));
  return groups.map((group) => {
    const extra = routes
      .filter((r) => group.routeGroups.includes(r.group) && r.published && !r.noindex && !listed.has(r.path))
      .map((r) => l(r.label, r.path));
    if (!group.subgroups) return { ...group, links: [...live(group.links), ...extra] };
    // New area pages go under the state their URL ends with
    const forState = (state: string) => extra.filter((x) => x.href.endsWith(`-${state}/`));
    const other = extra.filter((x) => !/-(pa|nj)\/$/.test(x.href));
    return {
      ...group,
      links: [...live(group.links), ...other],
      subgroups: group.subgroups.map((sub) => ({
        ...sub,
        links: [...live(sub.links), ...forState(sub.title === "Pennsylvania" ? "pa" : "nj")],
      })),
    };
  });
}

export const sitemapCta: ClosingCta = {
  title: "Still Looking for Something?",
  text: `Call us and we'll point you in the right direction. ${napCtaLine}`,
  buttons: ["call"],
};
