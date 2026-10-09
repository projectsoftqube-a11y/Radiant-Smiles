import { dentists, hours, membershipPlan, offers, paymentMethods, practice, SITE_URL } from "@/content/site";
import type { FaqItem, ServiceGroup } from "@/content/pages/home";
import { absoluteUrl } from "@/lib/seo";

/**
 * JSON-LD builders. Every value comes from the same content objects the pages render,
 * so the structured data always matches the visible text (SEO handoff 3d).
 * The home page carries the full Dentist entity; other pages reference it by @id.
 * No Review or AggregateRating markup (CLAUDE.md).
 */

type Json = Record<string, unknown>;

export const ids = {
  dentist: `${SITE_URL}/#dentist`,
  website: `${SITE_URL}/#website`,
  webpage: (path: string) => `${absoluteUrl(path)}#webpage`,
  faq: (path: string) => `${absoluteUrl(path)}#faq`,
  person: (path: string) => `${absoluteUrl(path)}#person`,
  breadcrumb: (path: string) => `${absoluteUrl(path)}#breadcrumb`,
  offer: (path: string, key: string) => `${absoluteUrl(path)}#offer-${key}`,
};

const LOGO_URL = absoluteUrl("/images/radiant-smiles-floral-vale-logo.png");

/** Groups consecutive days that share the same hours; closed days are left out. */
function openingHours() {
  const specs: { dayOfWeek: string[]; opens: string; closes: string }[] = [];
  for (const day of hours) {
    if (!day.opens || !day.closes) continue;
    const last = specs.at(-1);
    if (last && last.opens === day.opens && last.closes === day.closes) last.dayOfWeek.push(day.day);
    else specs.push({ dayOfWeek: [day.day], opens: day.opens, closes: day.closes });
  }
  return specs.map((spec) => ({ "@type": "OpeningHoursSpecification", ...spec }));
}

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export function dentistEntity({
  areaServed,
  serviceGroups,
}: {
  areaServed: { name: string; type?: "Place" | "AdministrativeArea" }[];
  serviceGroups: ServiceGroup[];
}): Json {
  return {
    "@type": "Dentist",
    "@id": ids.dentist,
    name: practice.name,
    url: `${SITE_URL}/`,
    telephone: practice.phone.schema,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.address.street,
      addressLocality: practice.address.city,
      addressRegion: practice.address.region,
      postalCode: practice.address.postalCode,
      addressCountry: practice.address.country,
    },
    openingHoursSpecification: openingHours(),
    logo: LOGO_URL,
    image: LOGO_URL,
    slogan: practice.tagline,
    medicalSpecialty: "https://schema.org/Dentistry",
    isAcceptingNewPatients: true,
    currenciesAccepted: "USD",
    paymentAccepted: paymentMethods.join(", "),
    areaServed: areaServed.map((area) => ({ "@type": area.type ?? "Place", name: area.name })),
    employee: [{ "@id": ids.person(dentists.bhalala.path) }, { "@id": ids.person(dentists.gadria.path) }],
    makesOffer: [
      {
        "@type": "Offer",
        name: offers.newPatient.name,
        price: String(offers.newPatient.price),
        priceCurrency: "USD",
        url: absoluteUrl("/special-offers/"),
        description: "Cleaning, X-rays and exam for new patients without dental insurance.",
      },
      {
        "@type": "Offer",
        name: offers.implants.name,
        url: absoluteUrl("/special-offers/"),
        description: `${money(offers.implants.discount)} off an implant, abutment and crown (regular price ${money(offers.implants.regular)}). Includes a free consultation and second opinion.`,
        itemOffered: { "@type": "Service", name: "Dental implants", url: absoluteUrl("/restorative-dentistry/dental-implants/") },
      },
      {
        "@type": "Offer",
        name: offers.invisalign.name,
        url: absoluteUrl("/special-offers/"),
        description: `${money(offers.invisalign.discount)} off Invisalign (regular price ${money(offers.invisalign.regular)}). Includes a free consultation and second opinion.`,
        itemOffered: { "@type": "Service", name: "Invisalign clear aligners", url: absoluteUrl("/cosmetic-dentistry/invisalign/") },
      },
      {
        "@type": "Offer",
        name: offers.whitening.name,
        url: absoluteUrl("/special-offers/"),
        description: `${money(offers.whitening.discount)} off teeth whitening (regular price ${money(offers.whitening.regular)}).`,
        itemOffered: { "@type": "Service", name: "Teeth whitening", url: absoluteUrl("/cosmetic-dentistry/teeth-whitening/") },
      },
      {
        "@type": "Offer",
        name: "In-office membership plan",
        price: String(membershipPlan.yearly),
        priceCurrency: "USD",
        url: absoluteUrl("/patient-information/insurance-payment-options/"),
        description: `${money(membershipPlan.yearly)} a year, plus ${money(membershipPlan.additionalMember)} for each additional family member. Includes 2 cleanings a year, exams and X-rays. Extra cleanings or periodontal maintenance ${money(membershipPlan.extraCleaning)} each, emergency exam with X-ray ${money(membershipPlan.emergencyExam)} per visit, and ${membershipPlan.treatmentDiscountPercent}% off all other dental treatment.`,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental services",
      itemListElement: serviceGroups.map((group) => ({
        "@type": "OfferCatalog",
        name: group.title,
        ...(group.hub ? { url: absoluteUrl(group.hub.href) } : {}),
        itemListElement: group.links.map((link) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: link.label, url: absoluteUrl(link.href) },
        })),
      })),
    },
  };
}

/**
 * Both dentists, as described in the handoffs (degree and memberships only where
 * published). `detail` adds the bio pages' extra fields (work location, description).
 */
export function dentistPeople(detail: { bhalala?: boolean; gadria?: boolean } = {}): Json[] {
  const extra = (on: boolean | undefined, description: string) =>
    on ? { workLocation: { "@id": ids.dentist }, description } : {};
  return [
    {
      "@type": "Person",
      "@id": ids.person(dentists.bhalala.path),
      name: dentists.bhalala.givenName,
      honorificPrefix: "Dr.",
      honorificSuffix: "DMD",
      jobTitle: "Dentist",
      url: absoluteUrl(dentists.bhalala.path),
      worksFor: { "@id": ids.dentist },
      alumniOf: { "@type": "CollegeOrUniversity", name: dentists.bhalala.school },
      ...extra(
        detail.bhalala,
        "Dentist at Radiant Smiles @ Floral Vale in Yardley, PA, and a graduate of Temple University Kornberg School of Dentistry.",
      ),
    },
    {
      "@type": "Person",
      "@id": ids.person(dentists.gadria.path),
      name: dentists.gadria.givenName,
      honorificPrefix: "Dr.",
      honorificSuffix: "DMD",
      jobTitle: "Dentist",
      url: absoluteUrl(dentists.gadria.path),
      worksFor: { "@id": ids.dentist },
      alumniOf: { "@type": "CollegeOrUniversity", name: dentists.gadria.school },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Doctor of Dental Medicine (DMD), with high honors",
          recognizedBy: { "@type": "CollegeOrUniversity", name: dentists.gadria.school },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Dental Surgery (BDS), Amritsar, India",
        },
      ],
      memberOf: [
        { "@type": "Organization", name: "American Dental Association" },
        { "@type": "Organization", name: "Pennsylvania Dental Association" },
      ],
      knowsLanguage: ["English", "Punjabi"],
      knowsAbout: ["General dentistry", "Cosmetic dentistry", "Restorative dentistry"],
      ...extra(
        detail.gadria,
        "Dentist at Radiant Smiles @ Floral Vale in Yardley, PA, focused on general, cosmetic and restorative dentistry.",
      ),
    },
  ];
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList, identical to the visible breadcrumb (Home first, this page last). */
export function breadcrumbList(path: string, crumbs: Crumb[]): Json {
  return {
    "@type": "BreadcrumbList",
    "@id": ids.breadcrumb(path),
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/**
 * The page node for an inner page (AboutPage, ProfilePage, ContactPage, ImageGallery or
 * WebPage), about the practice defined on the home page and linked to its breadcrumb.
 */
export function innerPage({
  type,
  path,
  name,
  description,
  about = { "@id": ids.dentist },
  provider,
  mainEntity,
  mentions,
}: {
  type: "AboutPage" | "ProfilePage" | "ContactPage" | "ImageGallery" | "WebPage" | "CollectionPage" | "MedicalWebPage";
  path: string;
  name: string;
  description: string;
  about?: Json | Json[];
  /** The practice, by @id (treatment pages: handoff 3a) */
  provider?: Json;
  mainEntity?: Json;
  mentions?: Json[];
}): Json {
  return {
    "@type": type,
    "@id": ids.webpage(path),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": ids.website },
    breadcrumb: { "@id": ids.breadcrumb(path) },
    about,
    ...(provider ? { provider } : {}),
    ...(mainEntity ? { mainEntity } : {}),
    ...(mentions ? { mentions } : {}),
  };
}

/**
 * Legal pages (09 Compliance handoffs 3a): WebPage + BreadcrumbList only, the practice
 * referenced by @id as publisher; no Dentist node, FAQPage, Review or Offer markup.
 */
export function legalPage({ path, name, description }: { path: string; name: string; description: string }): Json {
  return {
    "@type": "WebPage",
    "@id": ids.webpage(path),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": ids.website },
    breadcrumb: { "@id": ids.breadcrumb(path) },
    publisher: { "@id": ids.dentist },
  };
}

/**
 * Contact page: a short Dentist node with the same @id as the home page (so the two
 * merge) carrying the visible NAP, hours and an appointments ContactPoint (English only
 * until the practice confirms phone support in other languages).
 */
export function dentistContact(): Json {
  return {
    "@type": "Dentist",
    "@id": ids.dentist,
    name: practice.name,
    url: `${SITE_URL}/`,
    telephone: practice.phone.schema,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.address.street,
      addressLocality: practice.address.city,
      addressRegion: practice.address.region,
      postalCode: practice.address.postalCode,
      addressCountry: practice.address.country,
    },
    openingHoursSpecification: openingHours(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "appointments",
      telephone: practice.phone.schema,
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

/** Special offers page: the five Offer nodes, in page order (prices from site.ts). */
export function specialOffers(path: string): Json[] {
  const offer = (key: string, node: Json): Json => ({
    "@type": "Offer",
    "@id": ids.offer(path, key),
    url: absoluteUrl(path),
    offeredBy: { "@id": ids.dentist },
    ...node,
  });
  return [
    offer("new-patient", {
      name: offers.newPatient.name,
      price: String(offers.newPatient.price),
      priceCurrency: "USD",
      description: "Professional cleaning, X-rays and exam for new patients without dental insurance.",
    }),
    offer("implants", {
      name: `Dental Implant Savings: ${money(offers.implants.discount)} Off`,
      description: `${money(offers.implants.discount)} off a dental implant, abutment and crown (regular price ${money(offers.implants.regular)}). Includes a free consultation and second opinion.`,
      itemOffered: { "@type": "Service", name: "Dental implants", url: absoluteUrl("/restorative-dentistry/dental-implants/") },
    }),
    offer("invisalign", {
      name: `Invisalign Savings: ${money(offers.invisalign.discount)} Off`,
      description: `${money(offers.invisalign.discount)} off Invisalign clear aligner treatment (regular price ${money(offers.invisalign.regular)}). Includes a free consultation and second opinion.`,
      itemOffered: { "@type": "Service", name: "Invisalign", url: absoluteUrl("/cosmetic-dentistry/invisalign/") },
    }),
    offer("whitening", {
      name: `Teeth Whitening Savings: ${money(offers.whitening.discount)} Off`,
      description: `${money(offers.whitening.discount)} off professional teeth whitening (regular price ${money(offers.whitening.regular)}).`,
      itemOffered: { "@type": "Service", name: "Teeth whitening", url: absoluteUrl("/cosmetic-dentistry/teeth-whitening/") },
    }),
    offer("membership", {
      name: "In-office membership plan",
      price: String(membershipPlan.yearly),
      priceCurrency: "USD",
      description: `${money(membershipPlan.yearly)} a year, plus ${money(membershipPlan.additionalMember)} for each additional family member. Includes 2 cleanings, exams and X-rays each year and ${membershipPlan.treatmentDiscountPercent}% off all other dental treatment. Extra cleanings or periodontal maintenance ${money(membershipPlan.extraCleaning)} each; emergency exam with X-ray ${money(membershipPlan.emergencyExam)}.`,
    }),
  ];
}

/** ItemList pointing at the offers above (the special offers page's mainEntity). */
export function offerList(path: string, keys: string[]): Json {
  return {
    "@type": "ItemList",
    itemListElement: keys.map((key, index) => ({ "@type": "ListItem", position: index + 1, item: { "@id": ids.offer(path, key) } })),
  };
}

export function websiteEntity(): Json {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: `${SITE_URL}/`,
    name: practice.name,
    publisher: { "@id": ids.dentist },
    inLanguage: "en-US",
  };
}

export function webPageEntity({ path, name, description }: { path: string; name: string; description: string }): Json {
  return {
    "@type": "WebPage",
    "@id": ids.webpage(path),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.dentist },
    ...(path === "/" ? { mainEntity: { "@id": ids.dentist } } : {}),
  };
}

/** FAQPage, only for FAQs that are visible on the page, with identical text. */
export function faqPage({ path, items }: { path: string; items: FaqItem[] }): Json {
  return {
    "@type": "FAQPage",
    "@id": ids.faq(path),
    isPartOf: { "@id": ids.webpage(path) },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export const graph = (...nodes: (Json | Json[])[]): Json => ({
  "@context": "https://schema.org",
  "@graph": nodes.flat(),
});

/** Escapes "<" so the JSON can never close its <script> element. */
export const serializeJsonLd = (data: Json) => JSON.stringify(data).replace(/</g, "\\u003c");

/** ItemList of pages (hub and patient education CollectionPages), in page order */
export function pageItemList(
  path: string,
  items: { name: string; path: string }[],
  { key = "itemlist", name }: { key?: string; name?: string } = {},
): Json {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}#${key}`,
    ...(name ? { name } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

/** Insurance page: the in-office membership plan as its one Offer (prices from site.ts) */
export function membershipOffer(path: string): Json {
  return {
    "@type": "Offer",
    "@id": `${absoluteUrl(path)}#membership-plan`,
    name: "In-office membership plan",
    description: `Yearly membership: 2 cleanings, exams and X-rays. Each additional family member ${money(membershipPlan.additionalMember)} a year; additional cleanings or periodontal maintenance ${money(membershipPlan.extraCleaning)} each; emergency exam with X-ray ${money(membershipPlan.emergencyExam)} per visit; ${membershipPlan.treatmentDiscountPercent}% off all other dental treatment.`,
    price: membershipPlan.yearly.toFixed(2),
    priceCurrency: "USD",
    offeredBy: { "@id": ids.dentist },
  };
}

/* ───────── Treatment pages (03 General Dentistry handoffs, 3a) ───────── */

const yardley = {
  "@type": "City",
  name: "Yardley",
  containedInPlace: { "@type": "AdministrativeArea", name: "Bucks County, Pennsylvania" },
};

/** The page node of a treatment page: MedicalWebPage about its main node and the practice */
export function treatmentPage({
  path,
  name,
  description,
  main,
  mainPath,
  lastReviewed,
  mainEntity,
  specialty,
}: {
  path: string;
  name: string;
  description: string;
  main?: string;
  /** The page whose `#main` node this page is about (default: this page; Invisalign Cost) */
  mainPath?: string;
  /** ISO date for schema lastReviewed (optional) */
  lastReviewed?: string;
  /** Make the main node (or a given @id key) the page's mainEntity */
  mainEntity?: string;
  specialty?: boolean;
}): Json {
  return {
    ...innerPage({
      type: "MedicalWebPage",
      path,
      name,
      description,
      about: main ? [{ "@id": `${absoluteUrl(mainPath ?? path)}#${main}` }, { "@id": ids.dentist }] : { "@id": ids.dentist },
      provider: { "@id": ids.dentist },
      ...(mainEntity ? { mainEntity: { "@id": `${absoluteUrl(path)}#${mainEntity}` } } : {}),
    }),
    ...(lastReviewed ? { lastReviewed } : {}),
    ...(specialty ? { specialty: "https://schema.org/Dentistry" } : {}),
  };
}

/** MedicalProcedure (cleanings, sealants, fluoride, screening, deep cleaning, laser, perio) */
export function medicalProcedure({
  path,
  name,
  alternateName,
  description,
  specialty,
  noninvasive,
  bodyLocation,
  key = "procedure",
}: {
  path: string;
  name: string;
  /** The node's @id fragment (service + location handoffs use #service) */
  key?: string;
  alternateName?: string;
  description: string;
  /** relevantSpecialty: Dentistry (restorative handoffs) */
  specialty?: boolean;
  /** procedureType: NoninvasiveProcedure (cosmetic handoffs: whitening, bonding, Invisalign) */
  noninvasive?: boolean;
  bodyLocation?: string;
}): Json {
  return {
    "@type": "MedicalProcedure",
    "@id": `${absoluteUrl(path)}#${key}`,
    name,
    ...(alternateName ? { alternateName } : {}),
    description,
    ...(noninvasive ? { procedureType: "https://schema.org/NoninvasiveProcedure" } : {}),
    ...(bodyLocation ? { bodyLocation } : {}),
    ...(specialty ? { relevantSpecialty: "https://schema.org/Dentistry" } : {}),
    url: absoluteUrl(path),
  };
}

/** Service provided by the practice in Yardley (family, children's, emergency, night guards) */
export function practiceService({ path, name, serviceType, description }: { path: string; name: string; serviceType: string; description: string }): Json {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType,
    provider: { "@id": ids.dentist },
    areaServed: yardley,
    url: absoluteUrl(path),
  };
}

/** MedicalTherapy with its Drug node (Arestin; no doses anywhere) */
export function medicalTherapy({ path, name, description, drug }: { path: string; name: string; description: string; drug: { name: string; nonProprietaryName: string } }): Json {
  return {
    "@type": "MedicalTherapy",
    "@id": `${absoluteUrl(path)}#therapy`,
    name,
    description,
    url: absoluteUrl(path),
    drug: { "@type": "Drug", ...drug },
  };
}

/* ───────── Location pages (06 Locations handoffs, 3a) ───────── */

/** A served area: a Pennsylvania place, a Mercer County, NJ place, or Mercer County itself */
export type ServedArea = {
  type: "City" | "Place" | "AdministrativeArea";
  name: string;
  state: "PA" | "NJ" | "NJ-county";
};

const pennsylvania = { "@type": "State", name: "Pennsylvania" };
const newJersey = { "@type": "State", name: "New Jersey" };

function areaNode(area: ServedArea): Json {
  const containedInPlace =
    area.state === "PA"
      ? pennsylvania
      : area.state === "NJ-county"
        ? newJersey
        : { "@type": "AdministrativeArea", name: "Mercer County, New Jersey", containedInPlace: newJersey };
  return { "@type": area.type, name: area.name, containedInPlace };
}

/**
 * The short Dentist node every location page carries: the same @id as the home page, the
 * real Yardley address (never an address in the town) and the areas this page serves.
 */
export function locationDentist(areas: ServedArea[]): Json {
  return {
    "@type": "Dentist",
    "@id": ids.dentist,
    name: practice.name,
    url: absoluteUrl("/"),
    telephone: practice.phone.schema,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.address.street,
      addressLocality: practice.address.city,
      addressRegion: practice.address.region,
      postalCode: practice.address.postalCode,
      addressCountry: practice.address.country,
    },
    areaServed: areas.map(areaNode),
  };
}
