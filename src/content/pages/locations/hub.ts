import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { napCtaLine } from "../shared";
import { AREAS_PATH, hoursLine } from "./common";

/** Areas We Serve hub. Verbatim from 06 Locations/00 Areas We Serve Hub/Areas We Serve Hub/02 Content.md */

export const asMeta: PageMeta = {
  path: AREAS_PATH,
  title: "Areas We Serve | PA & NJ Dentist | Radiant Smiles",
  description:
    "Radiant Smiles @ Floral Vale welcomes patients from Morrisville, Washington Crossing, Trenton, Ewing, Hamilton and other PA and NJ towns nearby.",
};

export const asCrumbs = [
  { name: "Home", path: "/" },
  { name: "Areas We Serve", path: AREAS_PATH },
];

export const asHero: PageHeroContent = {
  h1: "Areas We Serve on Both Sides of the Delaware",
  intro:
    "Radiant Smiles @ Floral Vale is a family, cosmetic and restorative dental practice at 117 Floral Vale Boulevard in Lower Makefield Township, a short drive from the river crossings into New Jersey. We welcome patients from Pennsylvania river towns and from Mercer County, NJ, and every town on this page is within about 30 minutes, depending on traffic. Find your town below for directions, the services people from your area ask about most, and answers to local questions.",
  buttons: ["appointment", "call"],
};

export type TownCard = { title: string; text: string; href: string; drive: string };

/** Pennsylvania: four town cards (H3 each), in content-file order */
export const asPennsylvania = {
  title: "Pennsylvania",
  intro: "Four Pennsylvania pages cover the towns closest to the office and the villages along River Road.",
  towns: [
    {
      title: "Lower Makefield Township",
      text: "The office sits inside the township, so most homes are within about 10 minutes. [Dentist near Lower Makefield, PA](/dentist-lower-makefield-pa/)",
      href: "/dentist-lower-makefield-pa/",
      drive: "~10 min",
    },
    {
      title: "Morrisville",
      text: "A borough on the river across from Trenton, about 5 to 10 minutes away via US-1 or Pennsylvania Avenue. [Dentist near Morrisville, PA](/dentist-morrisville-pa/)",
      href: "/dentist-morrisville-pa/",
      drive: "5–10 min",
    },
    {
      title: "Washington Crossing & Upper Makefield",
      text: "About 15 to 20 minutes down PA-32 (River Road) and I-295. [Dentist near Washington Crossing, PA](/dentist-washington-crossing-pa/)",
      href: "/dentist-washington-crossing-pa/",
      drive: "15–20 min",
    },
    {
      title: "New Hope",
      text: "The farthest Pennsylvania town we cover, about 25 to 30 minutes via River Road and I-295. [Dentist near New Hope, PA](/dentist-new-hope-pa/)",
      href: "/dentist-new-hope-pa/",
      drive: "25–30 min",
    },
  ] as TownCard[],
};

/** New Jersey: seven town cards (H3 each), in content-file order */
export const asNewJersey = {
  title: "New Jersey",
  intro:
    "Seven New Jersey pages cover Mercer County, where the drive from most towns is about 15 to 25 minutes over one bridge, depending on traffic.",
  towns: [
    {
      title: "Trenton",
      text: "About 15 minutes via the US-1 toll bridge or the Calhoun Street Bridge. If you're looking for a [dentist near Trenton, NJ](/dentist-trenton-nj/), start here.",
      href: "/dentist-trenton-nj/",
      drive: "~15 min",
    },
    {
      title: "Ewing & West Trenton",
      text: "About 15 to 20 minutes on I-295 over the Scudder Falls Bridge. [Dentist near Ewing, NJ](/dentist-ewing-nj/)",
      href: "/dentist-ewing-nj/",
      drive: "15–20 min",
    },
    {
      title: "Hopewell, Titusville & Washington Crossing, NJ",
      text: "About 15 to 20 minutes from the Titusville side via the Washington Crossing Bridge or NJ-29. [Dentist near Hopewell, NJ](/dentist-hopewell-nj/)",
      href: "/dentist-hopewell-nj/",
      drive: "15–20 min",
    },
    {
      title: "Hamilton",
      text: "Hamilton Square, Mercerville and Yardville, about 20 to 25 minutes via US-1 and I-295. [Dentist near Hamilton, NJ](/dentist-hamilton-nj/)",
      href: "/dentist-hamilton-nj/",
      drive: "20–25 min",
    },
    {
      title: "Lawrenceville",
      text: "About 20 to 25 minutes via US-1 and I-295. [Dentist near Lawrenceville, NJ](/dentist-lawrenceville-nj/)",
      href: "/dentist-lawrenceville-nj/",
      drive: "20–25 min",
    },
    {
      title: "Pennington",
      text: "About 20 to 25 minutes via NJ-31 and I-295. [Dentist near Pennington, NJ](/dentist-pennington-nj/)",
      href: "/dentist-pennington-nj/",
      drive: "20–25 min",
    },
    {
      title: "Mercer County overview",
      text: "A county-wide guide for New Jersey patients, with links to every town page. [Dentist near Mercer County, NJ](/dentist-mercer-county-nj/)",
      href: "/dentist-mercer-county-nj/",
      drive: "15–25 min",
    },
  ] as TownCard[],
};

/** Schema ItemList: the 11 town pages (handoff order) */
export const asItemList = [
  { name: "Dentist near Lower Makefield, PA", path: "/dentist-lower-makefield-pa/" },
  { name: "Dentist near Morrisville, PA", path: "/dentist-morrisville-pa/" },
  { name: "Dentist near Washington Crossing, PA", path: "/dentist-washington-crossing-pa/" },
  { name: "Dentist near New Hope, PA", path: "/dentist-new-hope-pa/" },
  { name: "Dentist near Trenton, NJ", path: "/dentist-trenton-nj/" },
  { name: "Dentist near Ewing, NJ", path: "/dentist-ewing-nj/" },
  { name: "Dentist near Hopewell, NJ", path: "/dentist-hopewell-nj/" },
  { name: "Dentist near Hamilton, NJ", path: "/dentist-hamilton-nj/" },
  { name: "Dentist near Lawrenceville, NJ", path: "/dentist-lawrenceville-nj/" },
  { name: "Dentist near Pennington, NJ", path: "/dentist-pennington-nj/" },
  { name: "Dentist near Mercer County, NJ", path: "/dentist-mercer-county-nj/" },
];

export const asBridges = {
  title: "Getting Here Across the River",
  intro:
    "A dentist on the PA and NJ border is only as convenient as the bridge you use, and five road bridges cross the Delaware between Mercer County and our office. All are run by the Delaware River Joint Toll Bridge Commission.",
  items: [
    {
      key: "scudder",
      lead: "Scudder Falls Bridge (I-295):",
      text: "usually the most direct route from Ewing, Pennington and Lawrenceville. Tolls are electronic (E-ZPass or Toll-by-Plate) and charged only in the Pennsylvania-bound direction.",
      toll: "Toll, PA-bound only",
    },
    {
      key: "us1",
      lead: "Trenton-Morrisville Toll Bridge (US-1):",
      text: "the main route from Trenton. Tolls are charged only when entering Pennsylvania.",
      toll: "Toll, PA-bound only",
    },
    {
      key: "calhoun",
      lead: "Calhoun Street Bridge:",
      text: "toll-free, for cars and light vehicles only (3-ton weight limit, 8-foot height limit).",
      toll: "Toll-free",
    },
    {
      key: "lower",
      lead: "Lower Trenton Bridge:",
      text: 'toll-free, the bridge with the "Trenton Makes" sign.',
      toll: "Toll-free",
    },
    {
      key: "washington",
      lead: "Washington Crossing Bridge:",
      text: "toll-free, linking Washington Crossing, NJ to Washington Crossing, PA, for vehicles up to 3 tons.",
      toll: "Toll-free",
    },
  ],
  after: "Drive times on this page are estimates and change with traffic. Check Google Maps before you leave. [Directions and contact details](/contact-us/)",
};

export const asCare = {
  title: "Care People Travel For",
  intro:
    "Whatever brings you across the river, the same two dentists look after you, from check-ups to crowns. Dr. Urvishkumar Bhalala, DMD and Dr. Jaspreet Gadria, DMD both trained at Temple University's Kornberg School of Dentistry, and the office uses dental microscopes, cone beam CT and iTero digital scans.",
  items: [
    {
      icon: "firstAid",
      lead: "Same-day emergencies:",
      text: "slots are held every business day. [What to do in a dental emergency](/emergency-dentistry/) · [Emergency dentist for Trenton, NJ](/emergency-dentist-trenton-nj/)",
    },
    {
      icon: "implant",
      lead: "Replacing missing teeth:",
      text: "$500 off a dental implant (regular $3,500 for implant, abutment and crown), with a free consultation and second opinion. [How dental implants work](/restorative-dentistry/dental-implants/) · [Dental implants for Mercer County, NJ](/dental-implants-mercer-county-nj/)",
    },
    {
      icon: "aligner",
      lead: "Straightening teeth:",
      text: "$1,000 off Invisalign (regular $5,800). [Invisalign clear aligners](/cosmetic-dentistry/invisalign/) · [Invisalign for Trenton, NJ](/invisalign-trenton-nj/)",
    },
    {
      icon: "users",
      lead: "Family care:",
      text: "check-ups, cleanings and children's visits. [Family dentistry](/family-dentistry/)",
    },
  ],
};

export const asInsurance = {
  title: "Insurance & Cost for Patients From Either State",
  paragraphs: [
    "We accept many PPO plans, including Horizon Blue Cross, Delta Dental, Aetna and Cigna PPO, whichever side of the river you live on. Coverage depends on your plan, so call us to check yours. Without insurance, the $89 New Patient Visit Special covers a cleaning, X-rays and an exam, and our membership plan is $150 a year. [Insurance and payment options](/patient-information/insurance-payment-options/) · [Current offers](/special-offers/)",
  ],
};

export const asFaqs: FaqBlock = {
  title: "Areas We Serve: Frequently Asked Questions",
  items: [
    {
      question: "Which bridge should I use from New Jersey?",
      answer:
        "It depends on where you start. From Ewing, Pennington or Lawrenceville, I-295 over the Scudder Falls Bridge is usually most direct. From Trenton, use the US-1 toll bridge or the toll-free Calhoun Street Bridge. From Titusville and Washington Crossing, NJ, the Washington Crossing Bridge is toll-free. Google Maps will show the quickest option on the day.",
    },
    {
      question: "Will I pay a toll coming from New Jersey?",
      answer:
        "Only on some bridges. The Scudder Falls (I-295) and Trenton-Morrisville (US-1) toll bridges charge in the Pennsylvania-bound direction, so you pay on the way to us and not on the way home. The Calhoun Street, Lower Trenton and Washington Crossing bridges are toll-free.",
    },
    {
      question: "My town isn't listed. Can I still come to you?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale welcomes new patients wherever they live; these pages simply cover the towns closest to our Lower Makefield Township office. Call (215) 860-4600 and our team will help you plan the trip and find an appointment time that suits you.",
    },
    {
      question: "Can I use New Jersey dental insurance at a Pennsylvania dentist?",
      answer:
        "Often, yes. We accept many PPO plans, including Horizon Blue Cross and Delta Dental, whether you live in Pennsylvania or New Jersey. Benefits depend on your plan, so call before your visit and we'll check your coverage. Our accepted-plan list doesn't include NJ Medicaid or NJ FamilyCare.",
    },
  ],
};

export const asCta: ClosingCta = {
  title: "Book Your Visit From Pennsylvania or New Jersey",
  text: napCtaLine,
  sub: `${hoursLine.late} Closed Sunday.`,
  buttons: ["appointment", "call"],
};
