import type { CostBlock } from "../general/common";
import type { FaqBlock, PageHeroContent, PageMeta } from "../shared";
import type { ServedArea } from "@/lib/schema";
import { areaCrumbs, hoursLine, townCta, type Block, type RouteFacts } from "./common";

/**
 * Pennsylvania town pages: Morrisville, Washington Crossing, Lower Makefield, New Hope.
 * Verbatim from 06 Locations/01 Pennsylvania - Practice Listed/* and 02 Pennsylvania - New/*.
 * No ZIP on Morrisville or Lower Makefield (handoffs); no conditional service+location links.
 */

/* ───────────────────────── Morrisville ───────────────────────── */

export const moMeta: PageMeta = {
  path: "/dentist-morrisville-pa/",
  title: "Dentist near Morrisville, PA | Radiant Smiles",
  description:
    "Morrisville, PA dentist 5-10 minutes away: same-day emergency slots every business day, Saturday hours and family care. Call (215) 860-4600.",
};

export const moCrumbs = areaCrumbs("Morrisville, PA", moMeta.path);
export const moAreas: ServedArea[] = [{ type: "City", name: "Morrisville, PA", state: "PA" }];

export const moHero: PageHeroContent = {
  h1: "Your Dentist near Morrisville, PA",
  intro:
    "Radiant Smiles @ Floral Vale is about 5 to 10 minutes from Morrisville, PA, depending on traffic, at 117 Floral Vale Boulevard in neighbouring Lower Makefield Township. When a tooth breaks or a filling falls out, that short drive matters. We keep same-day emergency appointments open every business day, see patients on Saturday mornings, and provide family, cosmetic and restorative dentistry for the whole household.",
  buttons: ["call", "appointment"],
};

export const moRoute: RouteFacts = {
  place: "Morrisville",
  drive: "5–10 min",
  roads: "US-1 or Pennsylvania Avenue",
  chips: ["No bridge", "No toll"],
};

export const moHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Morrisville",
  blocks: [
    {
      p: "The drive is about 5 to 10 minutes via US-1 or Pennsylvania Avenue, depending on traffic and where in the borough you start. You stay on the Pennsylvania side the whole way: no bridge and no toll.",
    },
    { h3: "Around the borough" },
    {
      p: "Morrisville sits on the Delaware River directly across from Trenton, with Lower Makefield Township as its neighbour to the north. If you know Summerseat, the National Historic Landmark that was Robert Morris's home, or walk the Delaware Canal State Park towpath, you're already close to us. If you work across the river, our [Trenton, NJ page](/dentist-trenton-nj/) covers the bridge routes back to the office.",
    },
    { directions: true },
  ],
};

export const moSameDay = {
  title: "A Morrisville, PA Dentist for Same-Day Problems",
  intro:
    "If you're in pain, call first: we reserve same-day emergency appointments every business day, and Saturday hours run 8 am to 2 pm. Your visit starts with a focused 30-minute exam, with X-rays where needed, so the dentist can find the cause and begin treatment.",
  listIntro: "What counts as a dental emergency:",
  items: [
    { icon: "alarm", text: "A toothache that keeps you up or won't settle" },
    { icon: "bolt", text: "A cracked, chipped or broken tooth" },
    { icon: "drop", text: "A knocked-out tooth (keep it moist, ideally in milk or saliva, and call right away)" },
    { icon: "tooth", text: "A lost filling or crown, or swelling around a tooth" },
  ],
  after:
    "For more on what to do before you arrive, see our [emergency dentist care for Morrisville patients](/emergency-dentistry/). Membership plan members pay $65 for an emergency exam with X-ray.",
};

export const moRepairs = {
  title: "Quick Repairs, Done Carefully",
  intro: "When a tooth needs repairing, our dentists work under high-power dental microscopes for a precise fit and finish.",
  items: [
    {
      key: "filling",
      lead: "Lost or broken fillings:",
      text: "replaced with [tooth-colored fillings](/restorative-dentistry/dental-fillings/) made of composite resin.",
    },
    {
      key: "crown",
      lead: "Cracked or weak teeth:",
      text: "protected with a [dental crown](/restorative-dentistry/dental-crowns/), usually over two visits, with tooth-colored, metal-free options.",
    },
    {
      key: "root",
      lead: "Infected teeth:",
      text: "treated with [root canal therapy](/restorative-dentistry/root-canal/), which usually takes two appointments.",
    },
    {
      key: "implant",
      lead: "A missing tooth:",
      text: "replaced with a [dental implant](/restorative-dentistry/dental-implants/) (with a free consultation and second opinion), a bridge or a denture.",
    },
  ],
};

export const moFamily = {
  title: "Family Dentistry for Morrisville Households",
  text: "Being about 5 to 10 minutes away also makes routine care easier to keep up with. As a family dentist for Morrisville, PA, we see children from just after their first birthday through to adults who need crowns or dentures. Check-ups include an exam, a cleaning and an oral cancer screening at every visit, with digital X-rays when they're due. Saturday appointments mean a check-up doesn't have to cost anyone a school or work day. [Family dentistry](/family-dentistry/)",
  who: {
    title: "Who you'll see",
    text: "Two dentists share the practice: [Dr. Urvishkumar Bhalala, DMD](/about-us/dr-urvishkumar-bhalala/) and [Dr. Jaspreet Gadria, DMD](/about-us/dr-jaspreet-gadria-dmd/). Both graduated from Temple University's Kornberg School of Dentistry, where Dr. Gadria earned the DMD with high honors.",
  },
};

export const moCost: CostBlock = {
  title: "New Patient Special & Insurance",
  paragraphs: [
    "No insurance? Our $89 New Patient Visit Special covers a cleaning, X-rays and an exam. After that, the in-office membership plan is $150 a year and includes two cleanings, exams, X-rays and 15% off treatment. We also accept many PPO plans, including Blue Cross Blue Shield, Capital Blue Cross and United Concordia Elite Plus, and coverage depends on your plan. For larger repairs, CareCredit offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. [Current offers](/special-offers/) · [Insurance and payment](/patient-information/insurance-payment-options/)",
  ],
};

export const moFaqs: FaqBlock = {
  title: "Morrisville Patient FAQs",
  items: [
    {
      question: "Is your office in Morrisville?",
      answer:
        "No, but it's close. Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard in Lower Makefield Township, which borders Morrisville to the north, and our mailing address reads Yardley, PA. From most of the borough, the drive is about 5 to 10 minutes via US-1 or Pennsylvania Avenue, depending on traffic.",
    },
    {
      question: "Can I be seen the same day for a broken tooth?",
      answer:
        "Usually, yes. We hold same-day emergency appointments every business day and see patients on Saturday mornings from 8 am to 2 pm. A focused 30-minute exam lets the dentist find the problem and start treatment. Call (215) 860-4600 as early in the day as you can for the soonest slot.",
    },
    {
      question: "What should I do if a tooth is knocked out?",
      answer:
        "Act quickly. Keep the tooth moist, preferably in milk or your own saliva, and call us right away at (215) 860-4600 so we can get you in. From Morrisville the drive is about 5 to 10 minutes, depending on traffic, so you can usually reach us soon after you call.",
    },
    {
      question: "Can you replace a lost filling quickly?",
      answer:
        "Often, yes. Call and tell us what happened, and we'll look for the earliest appointment, including same-day emergency slots. A lost filling is usually replaced with a tooth-colored composite filling. If the tooth is too weak for a filling, the dentist may recommend a crown, which usually takes two visits.",
    },
  ],
};

export const moCta = townCta("Book Your Visit, About 5 to 10 Minutes From Morrisville", hoursLine.saturday);

/* ───────────────────────── Washington Crossing ───────────────────────── */

export const wcMeta: PageMeta = {
  path: "/dentist-washington-crossing-pa/",
  title: "Dentist near Washington Crossing, PA | Radiant Smiles",
  description:
    "Washington Crossing, PA dentist 15-20 minutes down River Road: crowns and onlays fitted under dental microscopes, plus root canals. Call (215) 860-4600.",
};

export const wcCrumbs = areaCrumbs("Washington Crossing, PA", wcMeta.path);
export const wcAreas: ServedArea[] = [
  { type: "Place", name: "Washington Crossing, PA", state: "PA" },
  { type: "AdministrativeArea", name: "Upper Makefield Township, PA", state: "PA" },
];

export const wcHero: PageHeroContent = {
  h1: "Your Dentist near Washington Crossing, PA",
  intro:
    "Radiant Smiles @ Floral Vale is about 15 to 20 minutes from Washington Crossing, PA, depending on traffic, via River Road (PA-32) and I-295. For the village and the rest of Upper Makefield Township, it's a short drive for careful restorative work: crowns, inlays and onlays fitted under high-power dental microscopes, plus root canal therapy, with 3D imaging when a case needs it.",
  buttons: ["appointment", "call"],
};

export const wcRoute: RouteFacts = {
  place: "Washington Crossing",
  drive: "15–20 min",
  roads: "River Road (PA-32) & I-295",
  chips: ["Stays in Pennsylvania", "No bridge to cross"],
};

export const wcHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Washington Crossing",
  blocks: [
    {
      p: "Head south along River Road (PA-32), then pick up I-295 toward the office at 117 Floral Vale Boulevard. The trip takes about 15 to 20 minutes, depending on traffic, and stays in Pennsylvania the whole way.",
    },
    {
      p: "Washington Crossing (ZIP 18977) is already on the Pennsylvania side of the river, so there's no bridge to cross on the way to us. Google Maps will tell you on the day which part of the route is busiest.",
    },
    { directions: true },
  ],
};

export const wcVillages = {
  title: "A Dentist for Upper Makefield, PA Households",
  paragraphs: [
    "Washington Crossing is one of several villages in Upper Makefield Township, and this page covers all of them. The village, once called Taylorsville, is where George Washington's army set out across the Delaware on the night of December 25, 1776, and the Washington Crossing Historic Park headquarters is here today. We welcome patients from Buckmanville, Dolington, Jericho, Lizette, Lurgan and Woodhill, as well as Washington Crossing itself.",
    "Live on the New Jersey side of the Washington Crossing Bridge? Titusville and Washington Crossing, NJ have their own page: [dentist near Hopewell, NJ](/dentist-hopewell-nj/).",
  ],
  villages: ["Washington Crossing", "Buckmanville", "Dolington", "Jericho", "Lizette", "Lurgan", "Woodhill"],
};

export const wcRestorative = {
  title: "Restorative Care Worth the Drive Down River Road",
  intro:
    "Crowns, onlays and root canals are work you'll rely on for years. Restorations are fitted under a high-power dental microscope, similar to the one an ophthalmologist uses, so margins and bite can be checked at magnification rather than by eye.",
  items: [
    {
      key: "crown",
      title: "Crowns: two visits",
      text: "At the first visit, the dentist removes decay, shapes the tooth and fits a temporary crown. At the second, the final crown is fitted, adjusted and cemented. Tooth-colored, metal-free options are available. [Dental crowns](/restorative-dentistry/dental-crowns/)",
      tag: "Two visits",
    },
    {
      key: "onlay",
      title: "Inlays & onlays: a stronger alternative to a large filling",
      text: "When more than half of a tooth's biting surface is damaged, an inlay or onlay made of porcelain, gold or composite can rebuild it. They also take two appointments and typically last 10 to 30 years. [Inlays and onlays](/cosmetic-dentistry/inlays-onlays/)",
      tag: "10 to 30 years",
    },
    {
      key: "root",
      title: "Root canals: usually two appointments",
      text: "A root canal is designed to save a tooth whose nerve is inflamed or infected. The first appointment can take up to an hour, and a crown usually follows. [Root canal therapy](/restorative-dentistry/root-canal/)",
      tag: "Up to an hour",
    },
    {
      key: "3d",
      title: "Planning with 3D images",
      text: "Cone beam CT gives the dentist a 3D view of the jaw and roots, and iTero scans replace putty impressions with a digital model. [Advanced technology](/patient-information/care-and-comfort/advanced-technology/)",
      tag: "Cone beam CT & iTero",
    },
  ],
  quote: {
    text: "They did my crowns for my front to teeth. Look amazing. The dentist was unhappy with the labs first ones so sent them back. Made sure they were perfect",
    author: "Candice Coverdale, 11 Sep 2026",
  },
};

export const wcFamily = {
  title: "A Washington Crossing, PA Dentist for the Whole Family",
  text: "Restorative work is only part of it. As a family dentist for Washington Crossing, PA households, we also provide check-ups, cleanings, children's visits from just after the first birthday, and same-day [emergency appointments](/emergency-dentistry/) on business days. [Family dentistry](/family-dentistry/)",
};

export const wcCost: CostBlock = {
  title: "Paying for Restorative Work",
  paragraphs: [
    "We accept many PPO plans, including Lincoln Financial and Mutual of Omaha, and coverage for crowns and onlays depends on your plan, so call and we'll check before treatment. Without insurance, our membership plan ($150 a year) gives 15% off all dental treatment, and CareCredit lets you spread the cost: no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. [Insurance and payment](/patient-information/insurance-payment-options/) · [Special offers](/special-offers/)",
  ],
};

export const wcFaqs: FaqBlock = {
  title: "Washington Crossing Patient FAQs",
  items: [
    {
      question: "Do you serve all of Upper Makefield Township?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale welcomes patients from every part of Upper Makefield Township, including Washington Crossing, Buckmanville, Dolington, Jericho, Lizette, Lurgan and Woodhill. Our office at 117 Floral Vale Boulevard is about 15 to 20 minutes from Washington Crossing via River Road and I-295, depending on traffic.",
    },
    {
      question: "How many trips does a crown take?",
      answer:
        "Two. At the first visit, the dentist prepares the tooth and fits a temporary crown; at the second, the final crown is fitted, adjusted and cemented. From Washington Crossing that means two drives of about 15 to 20 minutes each, depending on traffic, and Saturday morning appointments are available.",
    },
    {
      question: "I live on the New Jersey side of Washington Crossing. Which page is mine?",
      answer:
        "Our Hopewell, NJ page. Washington Crossing, NJ and Titusville are part of Hopewell Township in Mercer County, on the other side of the toll-free Washington Crossing Bridge. That page covers the route from the New Jersey side, the drive time and the services patients there ask about.",
    },
    {
      question: "Why do you use a dental microscope?",
      answer:
        "For precision. A high-power dental microscope, similar to the one an ophthalmologist uses, lets the dentist see the edges of a filling, crown or onlay at magnification. That helps us check the fit and finish of each restoration before it's cemented, rather than relying on the naked eye.",
    },
  ],
};

export const wcCta = townCta("Book Your Visit From Washington Crossing", hoursLine.saturday);

/* ───────────────────────── Lower Makefield ───────────────────────── */

export const lmMeta: PageMeta = {
  path: "/dentist-lower-makefield-pa/",
  title: "Dentist near Lower Makefield, PA | Radiant Smiles",
  description:
    "Lower Makefield, PA dentist inside the township: check-ups, kids' visits and a $150/yr membership plan for families without insurance. Call today.",
};

export const lmCrumbs = areaCrumbs("Lower Makefield, PA", lmMeta.path);
export const lmAreas: ServedArea[] = [{ type: "AdministrativeArea", name: "Lower Makefield Township, PA", state: "PA" }];

export const lmHero: PageHeroContent = {
  h1: "Your Dentist near Lower Makefield, PA",
  intro:
    "Radiant Smiles @ Floral Vale is a Lower Makefield dentist on Floral Vale Boulevard, inside the township itself, so most homes are within about 10 minutes, depending on traffic. Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria look after whole households here, from a toddler's first check-up to a parent's crown, with Saturday hours and a membership plan for families without insurance.",
  buttons: ["appointment", "call"],
};

export const lmRoute: RouteFacts = {
  place: "Lower Makefield",
  drive: "~10 min",
  roads: "Local roads inside the township",
  chips: ["No highway", "No bridge"],
};

export const lmHere: { title: string; blocks: Block[] } = {
  title: "Getting Here Within Lower Makefield",
  blocks: [
    {
      p: "The office is at 117 Floral Vale Boulevard, a drive of about 10 minutes or less from most of the township on local roads, depending on traffic. There's no highway or bridge to deal with, which makes it easy to fit a cleaning around school pick-up or a workday.",
    },
    { h3: "Close to the places you already go" },
    {
      p: "Lower Makefield is a large township, crossed by I-295, PA-332 and River Road (PA-32), with the Scudder Falls Bridge at its edge. Whether your week takes you to Macclesfield Park, Shady Brook Farm or past the Garden of Reflection, Pennsylvania's official 9/11 memorial, the office is a short local drive away.",
    },
    { directions: true },
  ],
};

export const lmEveryAge = {
  title: "A Dentist in Lower Makefield Township for Every Age",
  intro:
    "Routine care is the heart of what we do for township families. A typical check-up includes digital X-rays, an exam under magnification, a professional cleaning and an oral cancer screening, which we include at every visit. Before anything else happens, the dentist explains what they found and what any treatment would cost.",
  items: [
    { icon: "toothClean", text: "[Teeth cleaning & check-ups](/preventative-care/teeth-cleaning-and-check-ups/)" },
    { icon: "search", text: "[Oral cancer screening](/preventative-care/oral-cancer-screening/)" },
    { icon: "moon", text: "[Custom night guards](/preventative-care/professional-night-guards/), made by a dental lab, for grinding or clenching" },
    { icon: "drop", text: "[Deep teeth cleaning](/preventative-care/deep-teeth-cleaning/) if gum disease has started" },
  ],
  after:
    "As a family dentist in Lower Makefield, we'd rather keep a small problem small, so regular visits come first. [Family dentistry](/family-dentistry/)",
};

export const lmKids = {
  title: "Children's Visits Close to Home",
  paragraphs: [
    "A child's first dental visit should happen just after their first birthday. Starting early lets your child get used to the chair, and lets us spot problems while they're small. A simple way to prepare: read a book about visiting the dentist together and talk about it positively.",
  ],
  listIntro: "As children grow, we add the preventive steps that protect new teeth:",
  items: [
    { icon: "shield", text: "[Fluoride treatment](/preventative-care/fluoride/) to strengthen enamel" },
    { icon: "layers", text: "[Dental sealants](/preventative-care/dental-sealants/) on back teeth" },
    { icon: "brush", text: "[Oral hygiene](/preventative-care/oral-hygiene/) coaching for brushing and flossing at home" },
  ],
  home: {
    title: "Cavity prevention at home",
    paragraphs: [
      "Each time a child eats, the acid attack on their teeth lasts about 20 minutes. So how often they snack matters as much as what they eat. Keep treats to mealtimes, choose nutritious snacks, go easy on sticky foods and sugary drinks, and make brushing and flossing part of the bedtime routine.",
      "Saturday appointments, 8 am to 2 pm, help when weekdays are full. [Children's dentistry](/preventative-care/child-dentistry/)",
    ],
  },
};

export const lmMembership = {
  title: "A Membership Plan for Households Without Insurance",
  intro:
    "If your family doesn't have dental insurance, our in-office membership plan keeps routine care predictable. It costs $150 a year for the first member and $75 for each additional family member.",
  head: ["Included each year", "Member price"],
  rows: [
    ["2 cleanings, exams and X-rays", "Included"],
    ["Additional cleanings or periodontal maintenance", "$75 each"],
    ["Emergency exam with X-ray", "$65 per visit"],
    ["All other dental treatment", "15% off"],
  ],
  after:
    "New patients without insurance can also start with the $89 New Patient Visit Special: a cleaning, X-rays and an exam. [Current offers](/special-offers/)",
};

export const lmCost: CostBlock = {
  title: "Insurance & Payment",
  paragraphs: [
    "We accept many PPO plans, including GEHA, Sun Life Financial and Lincoln Financial, and benefits vary by plan, so call us to check yours before your visit. Payment is due at the time of service by cash, check or major card, and CareCredit is available for larger treatment. [Insurance and payment options](/patient-information/insurance-payment-options/)",
  ],
};

export const lmFaqs: FaqBlock = {
  title: "Lower Makefield Patient FAQs",
  items: [
    {
      question: "Is your office in Lower Makefield Township?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, inside Lower Makefield Township. Like many township addresses, our mailing address reads Yardley, PA. Most homes in the township are within about 10 minutes of the office by car on local roads, depending on traffic.",
    },
    {
      question: "When should my child have a first dental visit?",
      answer:
        "Just after their first birthday. At that first visit, the dentist gently examines your child's teeth and gums, may take X-rays, cleans the teeth, applies topical fluoride and reviews home care with you. From there, we see children for regular check-ups, and sealants as their back teeth come in.",
    },
    {
      question: "Is there a dental plan for a family without insurance?",
      answer:
        "Yes. Our in-office membership plan is $150 a year for the first person and $75 for each additional family member. It includes two cleanings, exams and X-rays each year, plus 15% off all dental treatment. Additional cleanings are $75, and an emergency exam with X-ray is $65.",
    },
    {
      question: "Can my children be seen on a Saturday?",
      answer:
        "Yes. We're open Saturdays from 8 am to 2 pm, which helps township families fit check-ups around school and weekday activities. A child's visit includes a gentle exam, a cleaning and, when appropriate, fluoride. Call (215) 860-4600 or request an appointment online and we'll find a time that works.",
    },
  ],
};

export const lmCta = townCta("Book Your Family's Visit in Lower Makefield", hoursLine.saturday);

/* ───────────────────────── New Hope ───────────────────────── */

export const nhMeta: PageMeta = {
  path: "/dentist-new-hope-pa/",
  title: "Dentist near New Hope, PA | Radiant Smiles",
  description:
    "New Hope, PA patients: whitening, veneers and bonding about 25-30 minutes away, planned to keep trips few. Saturday hours. Call (215) 860-4600.",
};

export const nhCrumbs = areaCrumbs("New Hope, PA", nhMeta.path);
export const nhAreas: ServedArea[] = [{ type: "City", name: "New Hope, PA", state: "PA" }];

export const nhHero: PageHeroContent = {
  h1: "Your Dentist near New Hope, PA",
  intro:
    "Radiant Smiles @ Floral Vale is about 25 to 30 minutes from New Hope, PA, depending on traffic, via River Road (PA-32) and I-295. Because New Hope is one of the longer drives on our map, we plan cosmetic care to keep your trips few: take-home whitening, bonding that's often done in one visit, and porcelain veneers, with Saturday morning appointments when weekdays are busy.",
  buttons: ["appointment", "call"],
};

export const nhRoute: RouteFacts = {
  place: "New Hope",
  drive: "25–30 min",
  roads: "River Road (PA-32) & I-295",
  chips: ["Stays in Pennsylvania", "No bridge or toll"],
};

export const nhHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From New Hope",
  blocks: [
    {
      p: "Follow PA-32 south out of the borough, where it runs as Main Street, and continue along River Road toward I-295. The office at 117 Floral Vale Boulevard is about 25 to 30 minutes away, depending on traffic, and the whole route stays on the Pennsylvania side of the Delaware.",
    },
    { h3: "Around New Hope" },
    {
      p: "New Hope is a borough on the west bank of the river, bordered by Solebury Township and facing Lambertville, NJ across the water. Whether you start near Bridge Street (PA-179), the Delaware Canal towpath or US-202 on the edge of town, River Road is the simplest way south to us.",
    },
    { directions: true },
  ],
};

export const nhCosmetic = {
  title: "Cosmetic Dentistry With Fewer Trips",
  intro: "Most cosmetic treatments here are built around a small number of visits, which matters when each round trip is close to an hour.",
  items: [
    {
      key: "whitening",
      icon: "whiten",
      title: "Take-home teeth whitening",
      text: "We take an impression and make custom whitening trays, ready in a day or two. You wear them at home for about 3 to 4 hours each night for one to two weeks, so after the first visit most of the work happens in your own time. You can whiten upper teeth only or both arches. If staining is severe, the dentist may suggest veneers or crowns instead. Whitening is $100 off (regular $550). [Teeth whitening](/cosmetic-dentistry/teeth-whitening/)",
      trips: "Most of the work at home",
    },
    {
      key: "bonding",
      icon: "tooth",
      title: "Dental bonding, often in one visit",
      text: "For a chipped, cracked or discolored tooth, the dentist sculpts tooth-colored resin onto the surface, then trims and polishes it. Bonding is often finished in a single visit and typically lasts three to five years before it needs repair. [Dental bonding](/cosmetic-dentistry/dental-bonding/)",
      trips: "Often one visit",
    },
    {
      key: "veneers",
      icon: "veneer",
      title: "Porcelain veneers for a longer-lasting change",
      text: "Veneers are thin porcelain shells bonded to the front of the teeth, usually the top six to eight. They can treat chipped teeth, discoloration that whitening won't shift, small teeth and gaps, and the dentist checks your enamel first. Porcelain resists staining from coffee and tea and, with proper care, can brighten a smile for well over a decade. [Porcelain veneers](/cosmetic-dentistry/dental-veneers-dentistry/)",
      trips: "Well over a decade",
    },
  ],
};

export const nhPlanned = {
  title: "A New Hope Dentist Visit Planned Around the Drive",
  paragraphs: [
    "The first appointment does several jobs at once, so you aren't making extra trips. At a new patient visit we take digital X-rays, check your teeth and gums under magnification and clean your teeth. If you're thinking about cosmetic work, tell us when you book, and the dentist can talk through whitening, bonding or veneers at the same appointment. Without insurance, that first visit is $89 under our New Patient Visit Special.",
    "Saturday hours run 8 am to 2 pm, and we're open until 6 pm on Wednesdays and Thursdays. [New patients](/patient-information/new-patients/) · [Special offers](/special-offers/)",
  ],
};

export const nhBetween = {
  title: "If Something Goes Wrong Between Visits",
  text: "For a broken tooth or sudden toothache, call us first. We keep same-day emergency appointments open every business day, and we'll help you decide whether to make the 25 to 30 minute drive today or book the next routine slot. [Emergency dentistry](/emergency-dentistry/)",
};

export const nhCost: CostBlock = {
  title: "Insurance & Payment",
  paragraphs: [
    "We accept many PPO plans, including Dominion National and Physicians Mutual. Dental plans may not cover cosmetic treatment, so call us to check what yours includes. CareCredit lets you spread larger costs, with no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. [Insurance and payment](/patient-information/insurance-payment-options/)",
  ],
};

export const nhFaqs: FaqBlock = {
  title: "New Hope Patient FAQs",
  items: [
    {
      question: "Is a 25 to 30 minute drive practical for cosmetic work?",
      answer:
        "For most cosmetic treatments, yes. Take-home whitening usually takes a couple of short visits, an impression and then collecting your trays; bonding is often done in one visit; and a veneer consultation sets out each step and how many visits to expect. Saturday and Wednesday or Thursday afternoon times help you fit the drive in.",
    },
    {
      question: "How many visits does take-home whitening need?",
      answer:
        "Usually just a couple. We take an impression at your first visit, and the custom trays are ready in a day or two. You then wear them at home for about 3 to 4 hours a night for one to two weeks. We check the result at your next appointment.",
    },
    {
      question: "Which route should I take from New Hope?",
      answer:
        "PA-32 south along River Road, then I-295, which takes about 25 to 30 minutes depending on traffic. The route stays in Pennsylvania, so there's no bridge or toll. For an early Saturday appointment, check Google Maps before you leave in case River Road is busy.",
    },
    {
      question: "Can I get a cosmetic consultation on a Saturday?",
      answer:
        "Yes. We're open Saturdays from 8 am to 2 pm, and a consultation about whitening, bonding or veneers can be booked then. Call (215) 860-4600 and mention which treatment you're interested in, so we can plan enough time for the conversation and any X-rays a new patient needs.",
    },
  ],
};

export const nhCta = townCta("Book Your Visit From New Hope", hoursLine.saturday);
