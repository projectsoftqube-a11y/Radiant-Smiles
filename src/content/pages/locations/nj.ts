import type { CostBlock } from "../general/common";
import type { FaqBlock, PageHeroContent, PageMeta } from "../shared";
import type { ServedArea } from "@/lib/schema";
import { areaCrumbs, hoursLine, townCta, type Block, type RouteFacts } from "./common";

/**
 * New Jersey town pages: Trenton, Ewing, Hopewell, Hamilton, Lawrenceville, Pennington and
 * the Mercer County overview. Verbatim from 06 Locations/03 New Jersey - Practice Listed/*
 * and 04 New Jersey - New/*. Bridge facts as written (no toll amounts). Conditional
 * service+location links appear only where the content file has them (hub, Trenton, Mercer).
 */

/* ───────────────────────── Trenton ───────────────────────── */

export const trMeta: PageMeta = {
  path: "/dentist-trenton-nj/",
  title: "Dentist near Trenton, NJ | Radiant Smiles",
  description:
    "Trenton, NJ dentist about 15 minutes over the bridge: Saturday hours, many NJ PPO plans and an $89 new patient visit if uninsured. (215) 860-4600.",
};

export const trCrumbs = areaCrumbs("Trenton, NJ", trMeta.path);
export const trAreas: ServedArea[] = [{ type: "City", name: "Trenton, NJ", state: "NJ" }];

export const trHero: PageHeroContent = {
  h1: "Your Dentist near Trenton, NJ",
  intro:
    "Radiant Smiles @ Floral Vale is about 15 minutes from Trenton, NJ, depending on traffic, just across the Delaware in Lower Makefield Township, PA. Looking for a dentist in Trenton, NJ who's open Saturdays? We're open 8 am to 2 pm, accept many PPO plans including Horizon Blue Cross and Delta Dental, and publish our prices: $89 for a first visit if you don't have insurance.",
  buttons: ["call", "appointment"],
};

export const trRoute: RouteFacts = {
  place: "Trenton",
  drive: "~15 min",
  roads: "Three bridges to Morrisville",
  chips: ["Two toll-free bridges", "US-1 toll PA-bound only"],
  bridge: "US-1",
};

export const trHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Trenton",
  blocks: [
    {
      p: "Three bridges connect Trenton to Morrisville, PA, and from there the office at 117 Floral Vale Boulevard is a short drive. The whole trip is about 15 minutes, depending on traffic and which bridge you use.",
    },
    {
      ul: [
        {
          lead: "US-1 (Trenton-Morrisville Toll Bridge):",
          text: "the main highway route. The toll is charged only in the Pennsylvania-bound direction, so the drive home to New Jersey is free.",
        },
        { lead: "Calhoun Street Bridge:", text: "toll-free, linking Calhoun Street to East Trenton Avenue in Morrisville." },
        { lead: "Lower Trenton Bridge:", text: 'toll-free, the one with the "Trenton Makes" sign.' },
      ],
    },
    { directions: true },
  ],
};

export const trCost = {
  title: "A Trenton, NJ Dentist That's Clear About Cost",
  intro: "We publish our prices for patients who pay for themselves, so you know what a visit costs before you cross the river.",
  head: ["Option", "What you pay", "What's included"],
  rows: [
    ["New Patient Visit Special (no insurance)", "$89", "Cleaning, X-rays and exam"],
    ["In-office membership plan", "$150 a year, $75 for each additional family member", "2 cleanings, exams and X-rays a year, plus 15% off all treatment"],
    ["Emergency exam for members", "$65", "Emergency exam with X-ray"],
  ],
  quote: { text: "Everyone was professional, welcoming, and attentive throughout my visit.", author: "Avni D., May 2026" },
  after:
    "We take cash, checks, Visa, MasterCard, Discover and American Express, and payment is due at the time of service. CareCredit offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. [Special offers](/special-offers/) · [CareCredit financing](/patient-information/carecredit/)",
};

export const trPlans: CostBlock = {
  title: "New Jersey Insurance Plans",
  paragraphs: [
    "We accept many PPO plans, including Horizon Blue Cross and Delta Dental, along with Aetna, Cigna PPO, MetLife and others. Benefits depend on your plan, so call us with your member details before your first visit and we'll check what's covered. If your benefits reset at the end of the plan year, use your remaining cleanings and treatment before your coverage expires. [Insurance and payment options](/patient-information/insurance-payment-options/)",
  ],
};

export const trCare = {
  title: "Family, Emergency & Implant Care for Trenton, NJ",
  intro:
    "As a family dentist for Trenton, NJ households, we see children from just after their first birthday and adults of every age. [Family dentistry](/family-dentistry/)",
  items: [
    {
      icon: "firstAid",
      lead: "Emergencies:",
      text: "same-day appointments are held every business day, starting with a focused 30-minute exam. [Emergency care](/emergency-dentistry/) · [Emergency dentist for Trenton, NJ](/emergency-dentist-trenton-nj/)",
    },
    {
      icon: "implant",
      lead: "Missing teeth:",
      text: "$500 off a dental implant (regular $3,500 for implant, abutment and crown), with a free consultation and second opinion. [Implant options](/restorative-dentistry/dental-implants/) · [Dental implants for Mercer County, NJ](/dental-implants-mercer-county-nj/)",
    },
    {
      icon: "aligner",
      lead: "Straightening:",
      text: "$1,000 off Invisalign (regular $5,800). [Invisalign](/cosmetic-dentistry/invisalign/) · [Invisalign for Trenton, NJ](/invisalign-trenton-nj/)",
    },
    {
      icon: "tooth",
      lead: "Repairs:",
      text: "[crowns](/restorative-dentistry/dental-crowns/) and [fillings](/restorative-dentistry/dental-fillings/) fitted under dental microscopes, and [root canal therapy](/restorative-dentistry/root-canal/).",
    },
  ],
};

export const trWeek = {
  title: "Saturday Mornings & Later Weekdays",
  text: "We're open Saturday from 8 am to 2 pm, and until 6 pm on Wednesdays and Thursdays, so a check-up doesn't have to cost you a workday. Two dentists share the practice: [Dr. Urvishkumar Bhalala, DMD](/about-us/dr-urvishkumar-bhalala/) and [Dr. Jaspreet Gadria, DMD](/about-us/dr-jaspreet-gadria-dmd/), both graduates of Temple University's Kornberg School of Dentistry.",
};

export const trFaqs: FaqBlock = {
  title: "Trenton Patient FAQs",
  items: [
    {
      question: "Do I pay a toll to get to your office from Trenton?",
      answer:
        "Only if you use the US-1 toll bridge, and only on the way to us. The Trenton-Morrisville Toll Bridge charges in the Pennsylvania-bound direction, so the drive home is free. The Calhoun Street and Lower Trenton bridges are toll-free both ways and also lead to Morrisville, a short drive from our office.",
    },
    {
      question: "Do you accept NJ Medicaid or NJ FamilyCare?",
      answer:
        "NJ Medicaid and NJ FamilyCare are not on our list of accepted plans. If you don't have private dental insurance, our $89 New Patient Visit Special covers a cleaning, X-rays and an exam, and our membership plan is $150 a year with 15% off treatment. Call (215) 860-4600 and we'll talk through your options.",
    },
    {
      question: "What does a first visit cost without insurance?",
      answer:
        "$89. The New Patient Visit Special is for patients without insurance and includes a cleaning, X-rays and an exam. Before any further treatment, the dentist explains what they found and what it would cost, so you can decide without pressure. Payment is due at the time of service.",
    },
    {
      question: "Which languages do your dentists speak?",
      answer:
        "Dr. Jaspreet Gadria speaks English and Punjabi fluently, and some Hindi. Dr. Urvishkumar Bhalala trained at Temple University, with experience gained both in the US and abroad, in India. If you'd prefer a particular dentist, mention it when you call (215) 860-4600 to book.",
    },
  ],
};

export const trCta = townCta(
  "Book Your Visit, About 15 Minutes From Trenton",
  "Open Monday to Saturday, including Saturday mornings from 8 am to 2 pm, with Wednesday and Thursday until 6 pm.",
  ["appointment", "call"],
);

/* ───────────────────────── Ewing ───────────────────────── */

export const ewMeta: PageMeta = {
  path: "/dentist-ewing-nj/",
  title: "Dentist near Ewing, NJ | Radiant Smiles",
  description:
    "Ewing, NJ dentist 15-20 minutes over the Scudder Falls Bridge: gum care, cleanings and visits until 6 pm Wed and Thu. Call (215) 860-4600.",
};

export const ewCrumbs = areaCrumbs("Ewing, NJ", ewMeta.path);
export const ewAreas: ServedArea[] = [
  { type: "AdministrativeArea", name: "Ewing Township, NJ", state: "NJ" },
  { type: "Place", name: "West Trenton, NJ", state: "NJ" },
];

export const ewHero: PageHeroContent = {
  h1: "Your Dentist near Ewing, NJ",
  intro:
    "Radiant Smiles @ Floral Vale is about 15 to 20 minutes from Ewing, NJ, depending on traffic, straight across the Scudder Falls Bridge on I-295. For Ewing Township and West Trenton patients, that makes regular cleanings and gum care easy to keep up with, and we're open until 6 pm on Wednesdays and Thursdays and from 8 am to 2 pm on Saturdays.",
  buttons: ["appointment", "call"],
};

export const ewRoute: RouteFacts = {
  place: "Ewing",
  drive: "15–20 min",
  roads: "I-295 over the Scudder Falls Bridge",
  chips: ["E-ZPass or Toll-by-Plate", "Home is toll-free"],
  bridge: "Scudder Falls",
};

export const ewHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Ewing",
  blocks: [
    {
      p: "Take I-295 west over the Scudder Falls Bridge. The bridge lands in Lower Makefield Township, the same township as our office at 117 Floral Vale Boulevard, and the whole drive takes about 15 to 20 minutes, depending on traffic.",
    },
    {
      p: "The Scudder Falls Bridge has all-electronic tolls (E-ZPass or Toll-by-Plate, no cash booths), charged only in the Pennsylvania-bound direction. Your drive home to Ewing is toll-free. The rebuilt bridge opened in stages in 2019 and 2021.",
    },
    { directions: true },
  ],
};

export const ewWest = {
  title: "West Trenton & the Rest of Ewing Township",
  paragraphs: [
    "West Trenton, ZIP 08628, is part of Ewing Township and is covered by this page. It's home to the West Trenton SEPTA station and Trenton-Mercer Airport, and Bear Tavern Road connects it to I-295 for the run to the bridge. If you're searching for a dentist in West Trenton, NJ, our office is about the same 15 to 20 minute drive.",
    "The page also covers the township's other neighbourhoods, including Scudders Falls, Glendale and the area around The College of New Jersey. Ewing borders Trenton; if you live closer to the US-1 or Calhoun Street bridges, see our [Trenton, NJ page](/dentist-trenton-nj/) for those routes.",
  ],
  places: ["West Trenton", "Scudders Falls", "Glendale", "The College of New Jersey"],
};

export const ewGums = {
  title: "An Ewing, NJ Dentist for Healthy Gums",
  intro:
    "Gum disease often starts quietly, so this is the care we'd most like Ewing patients to keep up with. It begins at a check-up, where the dentist measures the pockets around your teeth and looks for tartar below the gum line. Plaque is the main cause, and the risk rises with smoking, diabetes, stress, clenching or grinding, some medications and poor nutrition.",
  items: [
    {
      key: "deep",
      icon: "toothClean",
      title: "Deep cleaning (scaling & root planing)",
      text: "If gum disease has started, a deep cleaning removes tartar below the gum line with an ultrasonic scaler, then smooths the root surfaces so the gums can heal. It's typically considered when pockets measure more than 3 mm. Local anesthesia may be used for comfort. [Deep teeth cleaning](/preventative-care/deep-teeth-cleaning/)",
    },
    {
      key: "arestin",
      icon: "pill",
      title: "Arestin",
      text: "In deeper pockets, the dentist may place Arestin, a minocycline antibiotic, directly where it's needed. [Arestin](/preventative-care/arestin/)",
    },
    {
      key: "laser",
      icon: "bolt",
      title: "Laser gum therapy",
      text: "Laser treatment for gum disease can mean less bleeding and swelling, often with only a light anesthetic spray. [Gum disease laser therapy](/preventative-care/gum-disease-laser-therapy/)",
    },
    {
      key: "maintenance",
      icon: "refresh",
      title: "Periodontal maintenance",
      text: "After treatment, more frequent cleanings help keep gum disease under control. Membership plan members pay $75 for each additional cleaning or periodontal maintenance visit. [Periodontal maintenance](/preventative-care/periodontal-maintenance/)",
    },
  ],
};

export const ewWork = {
  title: "Appointments That Fit Around Work",
  paragraphs: [
    "The office opens at 9 am and stays open until 6 pm on Wednesdays and Thursdays, so you can drive over the bridge after work for a cleaning. Saturday hours run 8 am to 2 pm. For the rest of the household, we're also a family dentist for Ewing, NJ: check-ups, children's visits from just after the first birthday, crowns and fillings. [Family dentistry](/family-dentistry/)",
    "If a tooth breaks or starts to ache, we keep same-day emergency slots every business day. [Emergency dentistry](/emergency-dentistry/)",
  ],
};

export const ewCost: CostBlock = {
  title: "New Jersey Insurance & Payment",
  paragraphs: [
    "We accept many PPO plans, including Aetna and Cigna PPO, and Horizon Blue Cross and Delta Dental are on our list too. Coverage depends on your plan, so call us before your visit to check. Without insurance, the $89 New Patient Visit Special covers a cleaning, X-rays and an exam. [Insurance and payment](/patient-information/insurance-payment-options/) · [Special offers](/special-offers/)",
  ],
};

export const ewFaqs: FaqBlock = {
  title: "Ewing Patient FAQs",
  items: [
    {
      question: "Is there a toll on the Scudder Falls Bridge?",
      answer:
        "Yes, but only one way. The Scudder Falls Bridge on I-295 charges an electronic toll in the Pennsylvania-bound direction, paid by E-ZPass or Toll-by-Plate, with no cash booths. Driving home from our office to Ewing is toll-free. The full trip takes about 15 to 20 minutes, depending on traffic.",
    },
    {
      question: "Do you see patients from West Trenton?",
      answer:
        "Yes. West Trenton is part of Ewing Township, and Radiant Smiles @ Floral Vale welcomes new patients from the area. From West Trenton, Bear Tavern Road leads to I-295 and the Scudder Falls Bridge, and our office is about 15 to 20 minutes away, depending on traffic.",
    },
    {
      question: "Can I book an appointment after work?",
      answer:
        "Yes, on Wednesdays and Thursdays. The office is open from 9 am to 6 pm on those days, which leaves time to drive from Ewing after a standard workday. We're also open Saturdays from 8 am to 2 pm. Call (215) 860-4600 to find a late slot.",
    },
    {
      question: "What happens at a deep cleaning?",
      answer:
        "A deep cleaning treats gum disease below the gum line. After an exam and any X-rays, the dentist may numb the area, removes tartar with an ultrasonic scaler, then smooths the root surfaces so the gums can heal. In deeper pockets, an antibiotic such as Arestin may be placed.",
    },
  ],
};

export const ewCta = townCta("Book Your Visit From Ewing", hoursLine.late);

/* ───────────────────────── Hopewell ───────────────────────── */

export const hoMeta: PageMeta = {
  path: "/dentist-hopewell-nj/",
  title: "Dentist near Hopewell, NJ | Radiant Smiles",
  description:
    "Hopewell, NJ patients: implants and dentures across the toll-free Washington Crossing Bridge, with a free implant consult. Call (215) 860-4600.",
};

export const hoCrumbs = areaCrumbs("Hopewell, NJ", hoMeta.path);
export const hoAreas: ServedArea[] = [
  { type: "AdministrativeArea", name: "Hopewell Township, NJ", state: "NJ" },
  { type: "City", name: "Hopewell, NJ", state: "NJ" },
  { type: "Place", name: "Titusville, NJ", state: "NJ" },
  { type: "Place", name: "Washington Crossing, NJ", state: "NJ" },
];

export const hoHero: PageHeroContent = {
  h1: "Your Dentist near Hopewell, NJ",
  intro:
    "Radiant Smiles @ Floral Vale is about 15 to 20 minutes from the river side of Hopewell Township, NJ, depending on traffic, over the toll-free Washington Crossing Bridge or down NJ-29. For Hopewell, Titusville and Washington Crossing, NJ patients thinking about replacing missing teeth, the first step costs nothing: a free dental implant consultation and second opinion, plus $500 off an implant, abutment and crown.",
  buttons: [
    { label: "Book a Free Implant Consultation", href: "/patient-information/scheduling/", track: "implant_consult_click,appointment_click_ho_hero" },
    "call",
  ],
};

export const hoRoute: RouteFacts = {
  place: "Hopewell",
  drive: "15–20 min",
  roads: "Washington Crossing Bridge or NJ-29",
  chips: ["Toll-free bridge", "From the Titusville side"],
  bridge: "Washington Crossing",
};

export const hoHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Hopewell",
  blocks: [
    { p: "From the Titusville side of the township, you have two ways across the Delaware:" },
    {
      ul: [
        {
          lead: "Washington Crossing Bridge:",
          text: "toll-free, linking Washington Crossing, NJ to Washington Crossing, PA. It carries cars and light vehicles up to 3 tons. Once across, head south on the Pennsylvania side toward the office.",
        },
        {
          lead: "NJ-29 south:",
          text: "follow River Road along the New Jersey bank and cross on I-295 at the Scudder Falls Bridge, which charges an electronic toll only in the Pennsylvania-bound direction.",
        },
      ],
    },
    {
      p: "Either way, the drive to 117 Floral Vale Boulevard is about 15 to 20 minutes from Titusville, depending on traffic. Hopewell Borough is farther from the river, so allow longer from there and check Google Maps before you leave.",
    },
    { directions: true },
  ],
};

export const hoTitusville = {
  title: "Titusville & Washington Crossing, NJ",
  text: "Titusville (ZIP 08560) and Washington Crossing, NJ are both part of Hopewell Township, and this page covers them. Titusville sits on NJ-29 beside Washington Crossing State Park. If you're looking for a dentist in Titusville, NJ or a dentist in Washington Crossing, NJ, the toll-free Washington Crossing Bridge is close by, and it's the most direct way over the river to us.",
  township: {
    title: "A large township",
    text: "Hopewell Township is the largest municipality in Mercer County by area, with the Sourlands across its north and west, and it surrounds both Hopewell Borough (ZIP 08525) and Pennington. Pennington patients have their own page: [dentist near Pennington, NJ](/dentist-pennington-nj/).",
  },
};

export const hoImplants = {
  title: "A Hopewell, NJ Dentist for Replacing Missing Teeth",
  intro:
    "A missing tooth affects how you chew and, over time, the bone that held it. For Hopewell patients, a free consultation and second opinion makes it simple to understand your options before committing to anything.",
  items: [
    {
      key: "single",
      title: "Single dental implants",
      text: "An implant is a small titanium post placed in the jawbone, where the bone bonds to it and holds a crown. The process starts with an exam, X-rays and a health history, and from placement to final crown usually takes six to eight months. Our offer: $500 off an implant, abutment and crown (regular $3,500). [Dental implants](/restorative-dentistry/dental-implants/)",
    },
    {
      key: "healing",
      title: "What healing looks like",
      text: "Implants are usually placed in two phases: the post goes in first, and the bone is given time to bond with it before the crown is attached. With a single-stage implant, healing takes at least six weeks before the new tooth is placed. In some cases the implant can go in at the same time as the tooth is removed.",
    },
    {
      key: "retained",
      title: "Implant-retained dentures",
      text: "If several or all teeth are missing, implants can hold a denture steady. Options range from a denture that snaps onto two implants with ball attachments, to a bar across four to six implants, to a fixed, screw-retained denture on five or more implants. On the upper jaw, enough implants may mean the denture no longer has to cover the roof of your mouth. [Implant-retained dentures](/restorative-dentistry/dentures/implant-retained-dentures/)",
    },
    {
      key: "dentures",
      title: "Dentures & partials",
      text: "[Full dentures](/restorative-dentistry/dentures/), [partial dentures](/restorative-dentistry/dentures/partial-dentures/) and [immediate dentures](/restorative-dentistry/dentures/immediate-dentures/), placed right after extractions, are also available.",
    },
  ],
};

export const hoCost: CostBlock = {
  title: "Paying for Implants & Dentures",
  paragraphs: [
    "We accept many PPO plans, including Guardian and MetLife. Coverage for implants varies widely, so call us and we'll check your benefits. CareCredit can spread the cost, with no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. [Insurance and payment](/patient-information/insurance-payment-options/) · [Special offers](/special-offers/)",
    "We're open Saturday mornings, 8 am to 2 pm, for consultations and follow-ups, and we keep same-day [emergency appointments](/emergency-dentistry/) on business days.",
  ],
};

export const hoFaqs: FaqBlock = {
  title: "Hopewell Patient FAQs",
  items: [
    {
      question: "Is there a toll on the Washington Crossing Bridge?",
      answer:
        "No. The Washington Crossing Bridge between Washington Crossing, NJ and Washington Crossing, PA is toll-free in both directions. It carries cars and light vehicles up to 3 tons. From Titusville, the drive to our office is about 15 to 20 minutes, depending on traffic.",
    },
    {
      question: "How long is the drive from Hopewell Borough?",
      answer:
        "Longer than from Titusville. Hopewell Borough is farther from the river than Titusville, so allow extra time beyond the 15 to 20 minutes it takes from the Titusville side, depending on traffic. Check Google Maps on the day; we're happy to suggest a Saturday or later weekday slot.",
    },
    {
      question: "What does a dental implant cost here?",
      answer:
        "A single implant, abutment and crown is regularly $3,500, and our current offer takes $500 off. The consultation and second opinion are free, so you can find out whether an implant suits you, and what your insurance may cover, before you decide. Call (215) 860-4600 to book.",
    },
    {
      question: "Can I get a second opinion on an implant plan?",
      answer:
        "Yes, and it's free. Bring any X-rays or treatment plan you've been given, and the dentist will examine you, review your health history and explain the options, including implants, implant-retained dentures and conventional dentures. There's no pressure to decide at that visit.",
    },
  ],
};

export const hoCta = townCta("Book Your Visit From Hopewell", hoursLine.saturday);

/* ───────────────────────── Hamilton ───────────────────────── */

export const haMeta: PageMeta = {
  path: "/dentist-hamilton-nj/",
  title: "Dentist near Hamilton, NJ | Radiant Smiles",
  description:
    "Hamilton, NJ dentist open Saturdays 8 am-2 pm, 20-25 minutes away: family check-ups, dentures and same-day denture repairs. Call (215) 860-4600.",
};

export const haCrumbs = areaCrumbs("Hamilton, NJ", haMeta.path);
export const haAreas: ServedArea[] = [
  { type: "AdministrativeArea", name: "Hamilton Township, NJ", state: "NJ" },
  { type: "Place", name: "Hamilton Square, NJ", state: "NJ" },
  { type: "Place", name: "Mercerville, NJ", state: "NJ" },
  { type: "Place", name: "Yardville, NJ", state: "NJ" },
];

export const haHero: PageHeroContent = {
  h1: "Your Dentist near Hamilton, NJ",
  intro:
    "Radiant Smiles @ Floral Vale is about 20 to 25 minutes from Hamilton, NJ, depending on traffic, via US-1 or I-295 and one Delaware River crossing. For Hamilton Township households with full weekdays, the draw is Saturday: we're open 8 am to 2 pm for family check-ups, denture appointments and same-day denture repairs.",
  buttons: ["appointment", "call"],
};

export const haRoute: RouteFacts = {
  place: "Hamilton",
  drive: "20–25 min",
  roads: "US-1 or I-295, one crossing",
  chips: ["Open Saturdays 8 am–2 pm", "Home is toll-free"],
  bridge: "US-1",
};

export const haHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Hamilton",
  blocks: [
    { p: "The drive is about 20 to 25 minutes, depending on traffic and where in the township you start. Two routes are common:" },
    {
      ul: [
        { lead: "US-1", text: "to the Trenton-Morrisville Toll Bridge, then a short drive through Morrisville to the office." },
        { lead: "I-295", text: "to the Scudder Falls Bridge, which lands in Lower Makefield Township, where our office is." },
      ],
    },
    {
      p: "Both bridges charge a toll only in the Pennsylvania-bound direction, so the drive home to Hamilton is toll-free. If you'd rather avoid tolls, the Calhoun Street Bridge from Trenton is free for cars and light vehicles.",
    },
    { directions: true },
  ],
};

export const haPlaces = {
  title: "Hamilton Square, Mercerville & Yardville",
  intro: "Hamilton Township is the most populous municipality in Mercer County, and its communities each have their own name. This page covers all of them:",
  items: [
    {
      lead: "Hamilton Square",
      zip: "08690",
      text: "(ZIP 08690): if you're looking for a dentist in Hamilton Square, NJ, the drive is in the same 20 to 25 minute range.",
    },
    { lead: "Mercerville", zip: "08619", text: "(ZIP 08619): centred on the Five Points intersection, close to the I-295 interchanges." },
    { lead: "Yardville", zip: "08620", text: "(ZIP 08620): along US-130." },
    { lead: "White Horse, Groveville", zip: "", text: "and the neighbourhoods around Veterans Park and Grounds For Sculpture." },
  ],
  after:
    "There are several places called Hamilton. This page is for Hamilton Township in Mercer County, NJ, and whether you need a dentist for Hamilton Township, NJ as a whole or for one neighbourhood, the route and the welcome are the same.",
};

export const haSaturday = {
  title: "A Hamilton, NJ Dentist Open on Saturdays",
  text: "If you're comparing Hamilton, NJ dentist options, check the weekend hours first. Ours run 8 am to 2 pm on Saturday, which lets a whole household come in without anyone missing school or work. A check-up includes an exam under magnification, a cleaning and an oral cancer screening, with digital X-rays when they're due. Children can start just after their first birthday. As a family dentist for Hamilton, NJ, we also handle the bigger jobs, from crowns to root canals, and keep same-day [emergency appointments](/emergency-dentistry/) open every business day. [Family dentistry](/family-dentistry/)",
};

export const haDentures = {
  title: "Dentures, Relines & Same-Day Repairs",
  intro:
    "Dentures need care over the years as the gums and bone beneath them change shape. We make new dentures and keep existing ones fitting well. Upper dentures cover the palate with flesh-colored acrylic, lower dentures are horseshoe-shaped to leave room for the tongue, and the teeth can be plastic, porcelain or both. Regular exams catch fit problems early.",
  items: [
    {
      key: "new",
      lead: "New dentures:",
      text: "[full dentures](/restorative-dentistry/dentures/), [partial dentures](/restorative-dentistry/dentures/partial-dentures/) and [immediate dentures](/restorative-dentistry/dentures/immediate-dentures/), fitted right after extractions.",
    },
    { key: "hard", lead: "Hard relines:", text: "a fresh fitting surface for a closer fit, generally recommended every two years." },
    { key: "soft", lead: "Soft relines:", text: "a pliable lining for tender gums or sore spots, lasting one to two years." },
    { key: "palliative", lead: "Palliative relines:", text: "a temporary soft lining that lets red or swollen gums settle, usually over a few weeks." },
    {
      key: "repair",
      lead: "Rebases and same-day repairs:",
      text: "a cracked or broken denture can often be repaired the same day. [Denture relines and repairs](/restorative-dentistry/dentures/denture-relines/)",
    },
  ],
  after:
    "If a loose denture is a constant problem, ask about [implant-retained dentures](/restorative-dentistry/dentures/implant-retained-dentures/), which use dental implants to hold the denture in place.",
};

export const haCost: CostBlock = {
  title: "Insurance & Payment for Hamilton Patients",
  paragraphs: [
    "We accept many PPO plans, including Delta Dental and UnitedHealthcare. Coverage for dentures and relines depends on your plan, so call us to check before your appointment. Without insurance, the $89 New Patient Visit Special covers a cleaning, X-rays and an exam, and our membership plan ($150 a year, $75 for each additional family member) includes two cleanings a year and 15% off treatment. [Insurance and payment](/patient-information/insurance-payment-options/) · [Special offers](/special-offers/)",
  ],
};

export const haFaqs: FaqBlock = {
  title: "Hamilton Patient FAQs",
  items: [
    {
      question: "Which parts of Hamilton do you serve?",
      answer:
        "All of Hamilton Township, NJ. Radiant Smiles @ Floral Vale welcomes patients from Hamilton Square, Mercerville, Yardville, White Horse, Groveville and every other part of the township. Our office in Lower Makefield Township, PA is about 20 to 25 minutes away via US-1 or I-295, depending on traffic.",
    },
    {
      question: "Are you open on Saturdays?",
      answer:
        "Yes. We're open Saturdays from 8 am to 2 pm, as well as Monday to Friday, with Wednesday and Thursday hours running until 6 pm. Saturday appointments can cover check-ups and cleanings for the whole family, denture visits and urgent problems. Call (215) 860-4600 to book.",
    },
    {
      question: "Can you repair a broken denture the same day?",
      answer:
        "Often, yes. We offer same-day denture repairs, so a cracked or broken denture can usually be fixed without a long wait. Call us as soon as it happens and describe the damage. If the denture no longer fits well, the dentist may recommend a reline or rebase instead.",
    },
    {
      question: "Do you accept Delta Dental?",
      answer:
        "Yes, Delta Dental is one of the many PPO plans we accept, along with Horizon Blue Cross, UnitedHealthcare and others. Your benefits depend on your specific plan, so call (215) 860-4600 with your member details before your visit and we'll check what's covered.",
    },
  ],
};

export const haCta = townCta("Book a Saturday Visit From Hamilton", hoursLine.saturday);

/* ───────────────────────── Lawrenceville ───────────────────────── */

export const lwMeta: PageMeta = {
  path: "/dentist-lawrenceville-nj/",
  title: "Dentist near Lawrenceville, NJ | Radiant Smiles",
  description:
    "Lawrenceville, NJ patients: Invisalign for adults and teens 20-25 minutes away, with $1,000 off and check-ups about every 6 weeks. (215) 860-4600.",
};

export const lwCrumbs = areaCrumbs("Lawrenceville, NJ", lwMeta.path);
export const lwAreas: ServedArea[] = [
  { type: "Place", name: "Lawrenceville, NJ", state: "NJ" },
  { type: "AdministrativeArea", name: "Lawrence Township, NJ", state: "NJ" },
];

export const lwHero: PageHeroContent = {
  h1: "Your Dentist near Lawrenceville, NJ",
  intro:
    "Radiant Smiles @ Floral Vale is about 20 to 25 minutes from Lawrenceville, NJ, depending on traffic, via US-1 or I-295. For Lawrence Township adults and teens who want straighter teeth, Invisalign clear aligners suit that distance well: you change aligners at home about every two weeks and visit us for a check-up only about every six weeks. Right now, Invisalign is $1,000 off.",
  buttons: ["appointment", "call"],
};

export const lwRoute: RouteFacts = {
  place: "Lawrenceville",
  drive: "20–25 min",
  roads: "I-295 or US-1",
  chips: ["Check-ups about every six weeks", "Home is toll-free"],
  bridge: "Scudder Falls",
};

export const lwHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Lawrenceville",
  blocks: [
    { p: "The drive to 117 Floral Vale Boulevard takes about 20 to 25 minutes, depending on traffic. Most routes use one of two roads:" },
    {
      ul: [
        { lead: "I-295", text: "through Ewing to the Scudder Falls Bridge, which lands in Lower Makefield Township, where the office is." },
        { lead: "US-1", text: "south to the Trenton-Morrisville Toll Bridge, then a short drive on the Pennsylvania side." },
      ],
    },
    { p: "Both bridges charge tolls only in the Pennsylvania-bound direction, so your trip home is toll-free." },
    { directions: true },
    { h3: "Lawrenceville & Lawrence Township" },
    {
      p: "Lawrenceville is an unincorporated community within Lawrence Township, and many township addresses use the Lawrenceville name and ZIP 08648. This page covers the whole township, from the area around Rider University and The Lawrenceville School to the neighbourhoods near Quaker Bridge Mall and along Lawrence Road (US-206). If you've been searching for a dentist in Lawrence Township, NJ, the route and drive time are the same.",
    },
  ],
};

export const lwInvisalign = {
  title: "Invisalign for Lawrenceville Adults & Teens",
  intro:
    "Invisalign straightens teeth with a series of clear, custom-made aligners instead of metal brackets and wires. Here's how treatment works with us:",
  steps: [
    {
      icon: "search",
      lead: "Consultation:",
      text: "the dentist checks whether Invisalign suits your teeth, using X-rays and impressions or a digital scan to build a 3D model of your teeth.",
    },
    {
      icon: "aligner",
      lead: "Your aligners:",
      text: "each set is made from BPA-free clear plastic and worn 20 to 22 hours a day. You switch to a new set at home about every two weeks.",
    },
    {
      icon: "car",
      lead: "Check-ups:",
      text: "you visit about every six weeks, so the drive from Lawrenceville is occasional rather than weekly.",
    },
    { icon: "calendar", lead: "Timeline:", text: "treatment for adults usually takes about a year." },
  ],
  link: { label: "Invisalign", href: "/cosmetic-dentistry/invisalign/" },
  braces: {
    title: "Invisalign compared with braces",
    head: ["", "Invisalign", "Metal braces"],
    rows: [
      ["Appearance", "Smooth, clear plastic, virtually invisible", "Metal brackets and wires"],
      ["Eating and drinking", "Take aligners out and eat normally", "Brackets stay on while you eat"],
      ["Brushing and flossing", "As usual, with aligners out", "Around brackets and wires"],
    ],
  },
  teen: {
    title: "Invisalign Teen",
    text: "Teen aligners have blue indicator dots that fade with wear, so parents can see whether they're being worn enough, and replacement aligners are available if some are lost. Teens can take them out for sports or a musical instrument. [Invisalign Teen](/cosmetic-dentistry/invisalign/invisalign-teen/)",
  },
};

export const lwCost = {
  title: "What Invisalign Costs Here",
  paragraphs: [
    "Our current offer is $1,000 off Invisalign (regular $5,800), with a free consultation and second opinion. Your final fee depends on how much your teeth need to move and how long treatment takes. Dental insurance may cover part of orthodontic treatment, and some plans cover up to $3,500. You can also use FSA funds or a monthly payment option, and CareCredit offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. [Invisalign cost](/cosmetic-dentistry/invisalign/invisalign-cost/) · [Special offers](/special-offers/)",
    "We accept many PPO plans, including Anthem Blue Cross and Humana. Call us with your plan details and we'll check your orthodontic benefits before you start. [Insurance and payment](/patient-information/insurance-payment-options/)",
  ],
};

export const lwRest = {
  title: "A Lawrenceville, NJ Dentist for the Rest of Your Care",
  text: "Invisalign may be what brings you over the river, and we can look after your everyday care too. We provide check-ups and cleanings, children's visits from just after the first birthday, crowns, fillings and [same-day emergency appointments](/emergency-dentistry/) on business days. We're also open Saturdays, 8 am to 2 pm. [Family dentistry](/family-dentistry/)",
};

export const lwFaqs: FaqBlock = {
  title: "Lawrenceville Patient FAQs",
  items: [
    {
      question: "Is Lawrenceville part of Lawrence Township?",
      answer:
        "Yes. Lawrenceville is an unincorporated community within Lawrence Township in Mercer County, and many township residents use a Lawrenceville mailing address with ZIP 08648. Radiant Smiles @ Floral Vale welcomes patients from anywhere in the township; our office is about 20 to 25 minutes away, depending on traffic.",
    },
    {
      question: "How often are Invisalign check-ups?",
      answer:
        "About every six weeks. Between visits, you switch to a new set of aligners at home about every two weeks and wear them 20 to 22 hours a day. That schedule means the drive from Lawrenceville is occasional, and Saturday morning check-ups are available.",
    },
    {
      question: "How much is Invisalign here?",
      answer:
        "Invisalign is regularly $5,800, and our current offer takes $1,000 off, with a free consultation and second opinion. Dental insurance may cover part of the cost, up to $3,500 on some plans, and FSA funds, monthly payments and CareCredit can help with the rest. Call (215) 860-4600 to check your benefits.",
    },
    {
      question: "Can teens use Invisalign?",
      answer:
        "Yes. Invisalign Teen uses the same clear aligners, with blue indicator dots that fade as they're worn so parents can check, and replacement aligners are available if some are lost. Teens wear them 20 to 22 hours a day and take them out to eat, play sports or play an instrument.",
    },
  ],
};

export const lwCta = townCta("Book Your Invisalign Consultation From Lawrenceville", hoursLine.saturday);

/* ───────────────────────── Pennington ───────────────────────── */

export const peMeta: PageMeta = {
  path: "/dentist-pennington-nj/",
  title: "Dentist near Pennington, NJ | Radiant Smiles",
  description:
    "Pennington, NJ patients: calm, careful dentistry 20-25 minutes away, with headphones, digital scans and low-dose digital X-rays. (215) 860-4600.",
};

export const peCrumbs = areaCrumbs("Pennington, NJ", peMeta.path);
export const peAreas: ServedArea[] = [{ type: "City", name: "Pennington, NJ", state: "NJ" }];

export const peHero: PageHeroContent = {
  h1: "Your Dentist near Pennington, NJ",
  intro:
    "Radiant Smiles @ Floral Vale is about 20 to 25 minutes from Pennington, NJ, depending on traffic, via NJ-31 and I-295. If you're new to us, or a little nervous about the dentist, we make visits calmer in practical ways: music and headphones, digital scans instead of impression putty, low-dose digital X-rays, and a clear explanation before anything starts.",
  buttons: ["appointment", "call"],
};

export const peRoute: RouteFacts = {
  place: "Pennington",
  drive: "20–25 min",
  roads: "NJ-31 & I-295",
  chips: ["Exit 72 or 73", "Home is toll-free"],
  bridge: "Scudder Falls",
};

export const peHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Pennington",
  blocks: [
    {
      p: "Take NJ-31 south out of the borough to I-295 at exit 72, then follow I-295 across the Scudder Falls Bridge into Lower Makefield Township, where our office is. The drive is about 20 to 25 minutes, depending on traffic. Scotch Road is another way onto I-295, at exit 73.",
    },
    {
      p: "The Scudder Falls Bridge charges an electronic toll (E-ZPass or Toll-by-Plate) only in the Pennsylvania-bound direction, so the drive home to Pennington is free.",
    },
    { directions: true },
    { h3: "A small borough inside Hopewell Township" },
    {
      p: "Pennington is a borough of just under one square mile, ZIP 08534, with 2,802 residents at the 2020 census. It's entirely surrounded by Hopewell Township; if you live in the township outside the borough, the [Hopewell, NJ page](/dentist-hopewell-nj/) covers the river routes from Titusville.",
    },
  ],
};

export const peNervous = {
  title: "A Pennington, NJ Dentist for Nervous Patients",
  intro:
    "For many people, the hardest part of a dental visit is not knowing what's about to happen. So before any treatment, the dentist explains what they found, what they recommend and what it costs, and you decide in your own time.",
  comfort: {
    title: "Comfort you can ask for",
    items: [
      { icon: "headphones", lead: "Headphones and music:", text: "both are welcome, so bring your own and listen through your visit." },
      { icon: "heart", lead: "Sedation options:", text: "if anxiety makes treatment hard, ask us about the sedation options we can offer." },
      { icon: "bolt", lead: "Gentler gum treatment:", text: "laser gum therapy often needs only a light anesthetic spray." },
      { icon: "wave", lead: "Quieter, smoother drilling:", text: "electric hand-pieces run with less noise and vibration than air-driven ones." },
    ],
  },
  link: { label: "Care and comfort", href: "/patient-information/care-and-comfort/" },
};

export const peTech = {
  title: "Technology You'll Notice in the Chair",
  items: [
    {
      icon: "search",
      lead: "iTero digital scans:",
      text: "a small wand records your teeth for crowns and aligners, so there's no tray of impression material.",
    },
    { icon: "xray", lead: "Digital X-rays:", text: "about one-sixth the radiation of conventional film, viewed on a computer screen." },
    { icon: "camera", lead: "Intraoral camera:", text: "close-up pictures of your teeth on a screen, so you see what the dentist sees." },
    { icon: "microscope", lead: "Dental microscopes:", text: "a focused beam of light and high magnification for precise fillings and crowns." },
  ],
  link: { label: "Advanced technology", href: "/patient-information/care-and-comfort/advanced-technology/" },
};

export const peFirst: CostBlock = {
  title: "Your First Visit & What It Costs",
  paragraphs: [
    "Your first visit is about getting to know your mouth and your goals: digital X-rays, an exam under magnification and a cleaning. Without insurance, it's $89 under our New Patient Visit Special. We accept many PPO plans, including Ameritas and Principal Life, and coverage depends on your plan, so call and we'll check yours. [New patients](/patient-information/new-patients/) · [Special offers](/special-offers/)",
    "We're open Saturdays from 8 am to 2 pm, and same-day [emergency appointments](/emergency-dentistry/) are kept open on business days.",
  ],
};

export const peFaqs: FaqBlock = {
  title: "Pennington Patient FAQs",
  items: [
    {
      question: "Which way do I drive from Pennington?",
      answer:
        "NJ-31 south to I-295 at exit 72, then I-295 over the Scudder Falls Bridge into Pennsylvania. Scotch Road is another way onto I-295, at exit 73. The trip to our office takes about 20 to 25 minutes, depending on traffic, with a toll only in the Pennsylvania-bound direction.",
    },
    {
      question: "I'm nervous about the dentist. What helps?",
      answer:
        "Knowing what's coming helps most people. We explain each step before we start, you can listen to music on headphones throughout, and you can ask about the sedation options we offer. Tell us when you book that you're anxious, so the team knows before you arrive and can talk you through each step.",
    },
    {
      question: "Do you take impressions with putty?",
      answer:
        "In many cases, no. For crowns and clear aligners we use an iTero intraoral scanner, a small wand that records a digital 3D model of your teeth, so there's no tray of impression material in your mouth. If a putty impression is ever needed for a particular case, the dentist will tell you beforehand.",
    },
    {
      question: "How much radiation do your X-rays use?",
      answer:
        "Very little. Our digital X-rays use about one-sixth the radiation of conventional film X-rays, and the exposure time is roughly half as long. The images go straight to a computer screen, so the dentist can show you what they see and explain it before any treatment is planned.",
    },
  ],
};

export const peCta = townCta("Book Your Visit From Pennington", hoursLine.saturday);

/* ───────────────────────── Mercer County ───────────────────────── */

export const meMeta: PageMeta = {
  path: "/dentist-mercer-county-nj/",
  title: "Dentist near Mercer County, NJ | Radiant Smiles",
  description:
    "Mercer County, NJ families: family, implant and emergency care, most towns about 15-25 minutes across the river. Saturday hours. Call (215) 860-4600.",
};

export const meCrumbs = areaCrumbs("Mercer County, NJ", meMeta.path);
export const meAreas: ServedArea[] = [{ type: "AdministrativeArea", name: "Mercer County, New Jersey", state: "NJ-county" }];

export const meHero: PageHeroContent = {
  h1: "A Dentist for Mercer County, NJ Families",
  intro:
    "Radiant Smiles @ Floral Vale is a family, cosmetic and restorative dentist just across the Delaware River from Mercer County, NJ. From most of the county towns we cover, the drive is about 15 to 25 minutes over one bridge, depending on traffic. We accept many PPO plans, including Horizon Blue Cross, keep same-day emergency slots every business day, and are open Saturdays from 8 am to 2 pm.",
  buttons: ["appointment", "call"],
};

export const meRoute: RouteFacts = {
  place: "Mercer County",
  drive: "15–25 min",
  roads: "One bridge from most county towns",
  chips: ["Every trip home toll-free", "Open Saturdays"],
  bridge: "Scudder Falls",
};

export const meHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Mercer County",
  blocks: [
    {
      p: "Mercer County borders Pennsylvania along the Delaware River, so every route to us is a single crossing. From most of the towns on this page, the drive is about 15 to 25 minutes, depending on traffic and where you start. Three crossings do most of the work:",
    },
    {
      table: {
        label: "River crossings from Mercer County",
        head: ["Crossing", "Road", "Toll"],
        rows: [
          ["Scudder Falls Bridge", "I-295", "Electronic toll (E-ZPass or Toll-by-Plate), Pennsylvania-bound only"],
          ["US-1 toll bridge", "US-1", "Pennsylvania-bound only"],
          ["Calhoun Street Bridge", "Local streets", "Toll-free; cars and light vehicles only (3-ton limit)"],
        ],
      },
    },
    {
      p: "Because the toll bridges charge only in the Pennsylvania-bound direction, every trip home to New Jersey is toll-free. The county's main highways, I-295 and US-1, lead straight to the two toll bridges.",
    },
    { directions: true },
  ],
};

export const meTowns = {
  title: "Mercer County Town Pages",
  intro:
    "Mercer County has 12 municipalities and about 387,000 residents (2020 census). Six of its towns have their own page, each with the route from that town, local landmarks and answers to local questions:",
  links: [
    { label: "Dentist near Trenton, NJ", href: "/dentist-trenton-nj/", place: "Trenton" },
    { label: "Dentist near Ewing, NJ", href: "/dentist-ewing-nj/", place: "Ewing" },
    { label: "Dentist near Hopewell, NJ", href: "/dentist-hopewell-nj/", place: "Hopewell" },
    { label: "Dentist near Hamilton, NJ", href: "/dentist-hamilton-nj/", place: "Hamilton" },
    { label: "Dentist near Lawrenceville, NJ", href: "/dentist-lawrenceville-nj/", place: "Lawrenceville" },
    { label: "Dentist near Pennington, NJ", href: "/dentist-pennington-nj/", place: "Pennington" },
  ],
  after: "Live elsewhere in the county? You're just as welcome. Call (215) 860-4600 and we'll help with directions.",
};

export const meFamily = {
  title: "A Mercer County, NJ Dentist for the Whole Family",
  intro:
    "Most families need the same things from a dentist: regular check-ups, a plan for the kids, and someone they can call when something goes wrong. As a family dentist for Mercer County, NJ households, we see children from just after their first birthday and adults of every age, with two dentists, Dr. Urvishkumar Bhalala, DMD and Dr. Jaspreet Gadria, DMD, who both trained at Temple University's Kornberg School of Dentistry.",
  items: [
    { icon: "toothClean", text: "[Teeth cleaning and check-ups](/preventative-care/teeth-cleaning-and-check-ups/), with an oral cancer screening at every visit" },
    { icon: "smile", text: "[Children's dentistry](/preventative-care/child-dentistry/), fluoride and sealants" },
    {
      icon: "microscope",
      text: "[Crowns](/restorative-dentistry/dental-crowns/) fitted and checked under dental microscopes, and [root canal therapy](/restorative-dentistry/root-canal/)",
    },
    { icon: "users", text: "[Family dentistry](/family-dentistry/) overview" },
  ],
};

export const meEmergency = {
  title: "Emergency Care From Across the River",
  text: "If you need an emergency dentist from Mercer County, NJ, call us first. We reserve same-day appointments every business day, and Saturday hours run 8 am to 2 pm. A focused 30-minute exam finds the problem and starts treatment. For a knocked-out tooth, keep it moist, ideally in milk or saliva, and call right away. [Same-day emergency dentistry](/emergency-dentistry/) · [Emergency dentist for Trenton, NJ](/emergency-dentist-trenton-nj/)",
};

export const meOffers = {
  title: "Dental Implants & Invisalign for New Jersey Patients",
  items: [
    {
      key: "implants",
      icon: "implant",
      lead: "Dental implants:",
      figure: "$500 off",
      text: "$500 off an implant, abutment and crown (regular $3,500), with a free consultation and second opinion. [Dental implant treatment](/restorative-dentistry/dental-implants/) · [Dental implants for Mercer County, NJ](/dental-implants-mercer-county-nj/)",
    },
    {
      key: "invisalign",
      icon: "aligner",
      lead: "Invisalign:",
      figure: "$1,000 off",
      text: "$1,000 off (regular $5,800); check-ups about every six weeks keep trips over the bridge occasional. [Invisalign](/cosmetic-dentistry/invisalign/) · [Invisalign for Trenton, NJ](/invisalign-trenton-nj/)",
    },
  ],
};

export const meCost: CostBlock = {
  title: "Insurance for New Jersey Residents",
  paragraphs: [
    "We accept many PPO plans, including Horizon Blue Cross and Blue Cross Blue Shield, and the full list on our insurance page runs to more than 40 plans. Coverage depends on your plan, so call before your visit and we'll check. NJ Medicaid and NJ FamilyCare aren't among the plans we accept; without insurance, the $89 New Patient Visit Special and our $150-a-year membership plan are the simplest options. [Insurance and payment](/patient-information/insurance-payment-options/) · [Special offers](/special-offers/)",
  ],
};

export const meFaqs: FaqBlock = {
  title: "Mercer County Patient FAQs",
  items: [
    {
      question: "How far is your office from Mercer County?",
      answer:
        "About 15 to 25 minutes from most Mercer County towns with their own page, depending on traffic. Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, just across the Delaware River in Pennsylvania, and every route is a single crossing, most often the Scudder Falls Bridge on I-295, the US-1 toll bridge or the toll-free Calhoun Street Bridge.",
    },
    {
      question: "Does every part of Mercer County have its own page?",
      answer:
        "Not every part. Six Mercer County towns have their own page on our site, linked above, with the route, local landmarks and answers to local questions. If your town isn't one of them, this page applies to you, and our team can help with directions when you call (215) 860-4600.",
    },
    {
      question: "Do you see dental emergencies from Mercer County?",
      answer:
        "Yes. We keep same-day emergency appointments open every business day and see patients on Saturdays from 8 am to 2 pm. Call (215) 860-4600 as soon as you can. A focused 30-minute exam lets the dentist find the cause of the problem and begin treatment, and you'll know the plan and cost before anything further is done.",
    },
    {
      question: "Do you offer dental implants for Mercer County patients?",
      answer:
        "Yes. A single implant, abutment and crown is regularly $3,500, and our current offer takes $500 off, with a free consultation and second opinion. Treatment usually takes six to eight months from placement to final crown, and Saturday appointments can make the trips across the river easier to fit in.",
    },
  ],
};

export const meCta = townCta("Book Your Visit From Mercer County", hoursLine.late);
