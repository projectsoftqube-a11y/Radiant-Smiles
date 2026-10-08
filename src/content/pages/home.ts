/**
 * Home page copy, verbatim from docs/seo-content/01 Core/01 Home/Home/02 Content.md
 * (Final v1, 7 Oct 2026). Heading levels match the content file.
 * House style (CLAUDE.md): "&" replaces "and" in headings, link labels and buttons;
 * paragraphs, FAQ answers and the meta description keep "and".
 * Inline markup: **bold** and [label](/path), rendered by <Rich>.
 */

export const homeMeta = {
  path: "/",
  title: "Dentist in Yardley, PA | Radiant Smiles @ Floral Vale",
  description:
    "Dentist in Yardley, PA, open Saturdays, with same-day emergency slots and an $89 new-patient visit for uninsured patients. Call (215) 860-4600.",
  ogDescription:
    "Family, cosmetic and restorative dentistry in Yardley, PA, open Saturdays, with same-day emergency slots. Call (215) 860-4600.",
};

export type LinkItem = { label: string; href: string };

export const homeHero = {
  h1: "Dentist in Yardley, PA for Family, Cosmetic & Restorative Care",
  intro:
    "Radiant Smiles @ Floral Vale is a family dentist in Yardley, PA, where two Temple-trained dentists use dental microscopes and 3D imaging so repairs fit right, and explain what they found, and what it costs, before anything starts. Open Saturdays 8 am to 2 pm. Same-day emergency slots every business day. No insurance? Your first visit is $89.",
  callLabel: "Call (215) 860-4600",
  appointment: { label: "Request an Appointment", href: "/patient-information/scheduling/" },
  newPatient: { label: "New patient? Here's what to expect", href: "/patient-information/new-patients/" },
  facts: [
    { icon: "pin", text: "117 Floral Vale Boulevard, Yardley, PA 19067" },
    { icon: "calendarCheck", text: "Open Saturdays, 8 am – 2 pm" },
    { icon: "firstAid", text: "Same-day emergency slots held every business day" },
    { icon: "badgeDollar", text: "$89 new-patient visit for uninsured patients" },
    { icon: "shield", text: "Many PPO plans accepted, plus CareCredit" },
  ],
} as const;

export const homeFamily = {
  title: "Family Dentistry in Yardley, Explained Before It Starts",
  paragraphs: [
    "You get two dentists, one office and a clear plan before any treatment begins. As a Yardley dentist for the whole family, we see children from around their first birthday through to adults who need a tooth repaired or replaced.",
    "Your first visit is about getting to know your mouth and your goals. We take digital X-rays, check your teeth and gums, and clean your teeth. Then we explain what we found and what it costs, so there are no surprises and no pressure to decide that day.",
    "Nervous about the dentist? Tell us. You're welcome to bring headphones and music, and you can ask us about sedation options.",
  ],
  link: { label: "Why patients choose us", href: "/patient-information/why-choose-us/" },
};

export const homeHours = {
  title: "Office Hours & Location",
  intro:
    "We're open six days a week, including Saturday from 8 am to 2 pm, so you don't have to take time off work for a checkup.",
  directionsLabel: "Get Directions",
};

export const homeOffers = {
  title: "New Patient Special & Current Offers",
  intro:
    "New patients without insurance can start with an $89 visit that includes a cleaning, X-rays and an exam. These are the offers on our specials page right now:",
  columns: ["Offer", "What's included"],
  rows: [
    { offer: "$89 New Patient Visit", figure: "$89", unit: "visit", detail: "Cleaning, X-rays and exam, for uninsured patients" },
    {
      offer: "$500 off dental implants",
      figure: "$500",
      unit: "off",
      detail: "Implant, abutment and crown (regular price $3,500), with a free consultation and second opinion",
    },
    { offer: "$1,000 off Invisalign", figure: "$1,000", unit: "off", detail: "Regular price $5,800, with a free consultation and second opinion" },
    { offer: "$100 off teeth whitening", figure: "$100", unit: "off", detail: "Regular price $550" },
  ],
  note:
    "Ask us to confirm the details of any offer when you book. Thinking about clear aligners? See [what affects Invisalign cost](/cosmetic-dentistry/invisalign/invisalign-cost/).",
  button: { label: "See all special offers", href: "/special-offers/" },
};

export type ServiceGroup = {
  id: string;
  title: string;
  image: "servicePreventive" | "serviceGum" | "serviceRestorative" | "serviceDentures" | "serviceCosmetic";
  links: LinkItem[];
  hub?: LinkItem;
};

export const homeServices: { title: string; intro: string; groups: ServiceGroup[] } = {
  title: "Dental Services at Our Yardley Office",
  intro: "Most checkups, gum care, repairs, replacements and cosmetic work happen in one office. Choose a service to learn more.",
  groups: [
    {
      id: "preventive",
      title: "Preventive & Family Dentistry",
      image: "servicePreventive",
      links: [
        { label: "Family dentistry", href: "/family-dentistry/" },
        { label: "Teeth cleaning & check-ups", href: "/preventative-care/teeth-cleaning-and-check-ups/" },
        { label: "Children's dentistry", href: "/preventative-care/child-dentistry/" },
        { label: "Fluoride treatment", href: "/preventative-care/fluoride/" },
        { label: "Dental sealants", href: "/preventative-care/dental-sealants/" },
        { label: "Oral hygiene instruction", href: "/preventative-care/oral-hygiene/" },
        { label: "Oral cancer screening", href: "/preventative-care/oral-cancer-screening/" },
        { label: "Custom night guards", href: "/preventative-care/professional-night-guards/" },
        { label: "Emergency dentistry", href: "/emergency-dentistry/" },
      ],
      hub: { label: "All preventative care", href: "/preventative-care/" },
    },
    {
      id: "gum",
      title: "Gum Care",
      image: "serviceGum",
      links: [
        { label: "Deep teeth cleaning (scaling & root planing)", href: "/preventative-care/deep-teeth-cleaning/" },
        { label: "Periodontal maintenance", href: "/preventative-care/periodontal-maintenance/" },
        { label: "Gum disease laser therapy", href: "/preventative-care/gum-disease-laser-therapy/" },
        { label: "Arestin antibiotic treatment", href: "/preventative-care/arestin/" },
        { label: "Periodontal services", href: "/restorative-dentistry/periodontal-services/" },
      ],
    },
    {
      id: "restorative",
      title: "Restorative Dentistry",
      image: "serviceRestorative",
      links: [
        { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" },
        { label: "Dental crowns", href: "/restorative-dentistry/dental-crowns/" },
        { label: "Tooth-colored fillings", href: "/restorative-dentistry/dental-fillings/" },
        { label: "Dental bridges", href: "/restorative-dentistry/dental-bridges/" },
        { label: "Root canal therapy", href: "/restorative-dentistry/root-canal/" },
        { label: "Tooth extractions", href: "/restorative-dentistry/tooth-extractions/" },
        { label: "Wisdom teeth removal", href: "/restorative-dentistry/wisdom-teeth-removal/" },
      ],
      hub: { label: "All restorative dentistry", href: "/restorative-dentistry/" },
    },
    {
      id: "dentures",
      title: "Dentures",
      image: "serviceDentures",
      links: [
        { label: "Full dentures", href: "/restorative-dentistry/dentures/" },
        { label: "Partial dentures", href: "/restorative-dentistry/dentures/partial-dentures/" },
        { label: "Immediate dentures", href: "/restorative-dentistry/dentures/immediate-dentures/" },
        { label: "Implant-retained dentures", href: "/restorative-dentistry/dentures/implant-retained-dentures/" },
        { label: "Denture relines & repairs", href: "/restorative-dentistry/dentures/denture-relines/" },
      ],
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      image: "serviceCosmetic",
      links: [
        { label: "Porcelain veneers", href: "/cosmetic-dentistry/dental-veneers-dentistry/" },
        { label: "Teeth whitening", href: "/cosmetic-dentistry/teeth-whitening/" },
        { label: "Dental bonding", href: "/cosmetic-dentistry/dental-bonding/" },
        { label: "Inlays & onlays", href: "/cosmetic-dentistry/inlays-onlays/" },
        { label: "Invisalign clear aligners", href: "/cosmetic-dentistry/invisalign/" },
        { label: "Invisalign Teen", href: "/cosmetic-dentistry/invisalign/invisalign-teen/" },
      ],
      hub: { label: "All cosmetic dentistry", href: "/cosmetic-dentistry/" },
    },
  ],
};

export const homeMembership = {
  title: "No Insurance? Our In-Office Membership Plan",
  intro:
    "Our membership plan covers your routine care for one yearly fee and takes 15% off your treatment. There's no insurance company involved.",
  columns: ["Membership plan", "Price"],
  rows: [
    { item: "Yearly membership, first person", price: "$150 a year" },
    { item: "Each additional family member", price: "$75 a year" },
    { item: "Included each year", price: "2 cleanings, exams and X-rays" },
    { item: "Extra cleanings or periodontal maintenance", price: "$75 each" },
    { item: "Emergency exam with X-ray", price: "$65 per visit" },
    { item: "All other dental treatment", price: "15% off" },
  ],
  link: { label: "Insurance & membership details", href: "/patient-information/insurance-payment-options/" },
};

export const homeInsurance = {
  title: "Insurance & Payment Options",
  paragraphs: [
    "We accept more than 40 dental plans, including many PPO plans such as Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife and UnitedHealthcare. Coverage depends on your plan, so call (215) 860-4600 to verify yours before your visit.",
    "You can pay by cash, check, Visa, MasterCard, Discover or American Express. Payment is due at the time of service.",
    "To spread the cost of larger treatment, you can apply for CareCredit: no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval.",
  ],
  /** Names from the first paragraph, shown again as a visual list (aria-hidden) */
  featuredPlans: ["Aetna", "Cigna PPO", "Delta Dental", "Guardian", "Horizon Blue Cross", "MetLife", "UnitedHealthcare"],
  link: { label: "CareCredit financing", href: "/patient-information/carecredit/" },
};

export const homeDoctors = {
  title: "Meet Dr. Bhalala & Dr. Gadria",
  intro:
    "Two dentists share the care at Radiant Smiles @ Floral Vale, and both trained at Temple University's Kornberg School of Dentistry.",
  doctors: [
    {
      key: "bhalala" as const,
      name: "Dr. Urvishkumar Bhalala, DMD",
      image: "drBhalala" as const,
      bio: "Dr. Bhalala graduated from Temple University Kornberg School of Dentistry and worked at several dental practices before opening his own, bringing skills gained in the United States and in India.",
      link: { label: "Read Dr. Bhalala's bio", href: "/about-us/dr-urvishkumar-bhalala/" },
    },
    {
      key: "gadria" as const,
      name: "Dr. Jaspreet Gadria, DMD",
      image: "drGadria" as const,
      bio: "Dr. Gadria earned her DMD with high honors from Temple University's Kornberg School of Dentistry, after a BDS degree in Amritsar, India. She focuses on general, cosmetic and restorative dentistry, and speaks English and Punjabi fluently, plus some Hindi.",
      link: { label: "Read Dr. Gadria's bio", href: "/about-us/dr-jaspreet-gadria-dmd/" },
    },
  ],
};

export const homeTechnology = {
  title: "Microscopes & 3D Imaging, So Repairs Fit Right",
  intro:
    "Better images and magnification help your dentist find problems early and make repairs that fit well. Our office uses:",
  /** `text` continues the bold name's sentence, with its own leading ", " or " " (verbatim) */
  items: [
    {
      name: "Dental microscopes",
      text: ", similar to the one an eye doctor uses, for a precise fit and finish on crowns and fillings.",
      image: "techMicroscope" as const,
    },
    { name: "Cone beam CT", text: " for 3D images of your teeth and jaw bone.", image: "techCbct" as const },
    {
      name: "iTero intraoral scanner",
      text: " for digital impressions, with no impression material to bite into.",
      image: "techScan" as const,
    },
    { name: "Digital X-rays", text: ", with less radiation than traditional film.", image: "techXray" as const },
    { name: "Dental lasers", text: " for gum care and other soft-tissue procedures.", image: "techLaser" as const },
    { name: "Intraoral camera", text: ", for clear, enlarged images of your teeth.", image: "techCamera" as const },
  ],
  materials: "Tooth-colored, metal-free options are available for crowns, bridges and fillings.",
  quoteLead: "What that looks like in practice:",
  quote: {
    text: "They did my crowns for my front to teeth. Look amazing. The dentist was unhappy with the labs first ones so sent them back. Made sure they were perfect",
    author: "Candice C.",
    date: "September 2026",
  },
  link: { label: "Learn about our technology", href: "/patient-information/care-and-comfort/advanced-technology/" },
};

export const homeEmergency = {
  title: "Dental Emergency? Call Us First",
  intro:
    "If you have a toothache, a cracked or broken tooth, swelling or a knocked-out tooth, call (215) 860-4600 right away. We reserve same-day emergency openings every business day, and we're open Saturday mornings. Your visit starts with a focused 30-minute exam to find the problem and begin treatment.",
  tips: [
    { lead: "Knocked-out tooth:", text: "keep it moist, ideally in milk or saliva, and call us immediately." },
    { lead: "Membership plan members:", text: "an emergency exam with X-ray is $65." },
  ],
  safety:
    "If swelling affects your breathing or swallowing, or you have heavy bleeding after an injury, call 911 or go to the nearest emergency room.",
  callLabel: "Call (215) 860-4600",
  link: { label: "About emergency dentistry", href: "/emergency-dentistry/" },
};

export const homeReviews = {
  title: "What Patients Say About Radiant Smiles in Yardley",
  quotes: [
    {
      text: "I got Excellent service and proper treatment from Radiant smiles staff. Everyone was professional, welcoming, and attentive throughout my visit.",
      author: "Avni D.",
      date: "May 2026",
    },
    { text: "Quality care", author: "Bob M.", date: "June 2026" },
  ],
  links: [
    { label: "Read more patient reviews", href: "/patient-reviews/" },
    { label: "See a teeth whitening result in our before & after gallery", href: "/about-us/before-and-after-gallery/" },
  ],
};

export const homeAreas = {
  title: "Serving Yardley, Morrisville & Nearby New Jersey Towns",
  intro:
    "If you live or work in the 19067 ZIP code, our office on Floral Vale Boulevard in Lower Makefield Township is only a few minutes away. Patients also come to us from both sides of the Delaware River. Trenton is about 15 minutes away over the bridge, depending on traffic.",
  pennsylvania: {
    title: "Pennsylvania",
    towns: [
      { name: "Yardley" },
      { name: "Lower Makefield", href: "/dentist-lower-makefield-pa/" },
      { name: "Morrisville", href: "/dentist-morrisville-pa/" },
      { name: "Washington Crossing", href: "/dentist-washington-crossing-pa/" },
      { name: "New Hope", href: "/dentist-new-hope-pa/" },
    ],
  },
  newJersey: {
    title: "New Jersey",
    towns: [
      { name: "Trenton", href: "/dentist-trenton-nj/" },
      { name: "Ewing", href: "/dentist-ewing-nj/" },
      { name: "Hopewell", href: "/dentist-hopewell-nj/" },
      { name: "Pennington", href: "/dentist-pennington-nj/" },
      { name: "Lawrenceville", href: "/dentist-lawrenceville-nj/" },
      { name: "Hamilton", href: "/dentist-hamilton-nj/" },
      { name: "Mercer County", href: "/dentist-mercer-county-nj/" },
    ],
  },
  link: { label: "All areas we serve", href: "/areas-we-serve/" },
  /** Schema areaServed: Yardley plus the live location pages (handoff 3a) */
  schemaAreas: [
    { name: "Yardley, PA" },
    { name: "Lower Makefield, PA" },
    { name: "Morrisville, PA" },
    { name: "Washington Crossing, PA" },
    { name: "New Hope, PA" },
    { name: "Trenton, NJ" },
    { name: "Ewing, NJ" },
    { name: "Hopewell, NJ" },
    { name: "Pennington, NJ" },
    { name: "Lawrenceville, NJ" },
    { name: "Hamilton, NJ" },
    { name: "Mercer County, NJ", type: "AdministrativeArea" as const },
  ],
};

export type FaqItem = { question: string; answer: string };

export const homeFaqs: { title: string; items: FaqItem[] } = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Where is Radiant Smiles @ Floral Vale located?",
      answer:
        "Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, Yardley, PA 19067, in Lower Makefield Township, Bucks County. The office is a few minutes from Yardley Borough and Morrisville, and about 15 minutes from Trenton, NJ, depending on traffic. Call (215) 860-4600 if you need directions.",
    },
    {
      question: "Is the office open on Saturdays?",
      answer:
        "Yes. We're open Saturday from 8 am to 2 pm, which helps if you work during the week. Weekday hours are Monday and Tuesday 8 am to 5 pm, Wednesday and Thursday 9 am to 6 pm, and Friday 8 am to 2 pm. We're closed on Sunday.",
    },
    {
      question: "Who are the dentists at Radiant Smiles @ Floral Vale?",
      answer:
        "Dr. Urvishkumar Bhalala, DMD, and Dr. Jaspreet Gadria, DMD, treat patients at Radiant Smiles @ Floral Vale. Both graduated from Temple University's Kornberg School of Dentistry. Dr. Gadria earned her DMD with high honors and speaks English and Punjabi fluently, plus some Hindi.",
    },
    {
      question: "Do you accept my dental insurance?",
      answer:
        "We accept more than 40 dental plans, including many PPO plans such as Aetna, Cigna PPO, Delta Dental, Horizon Blue Cross, MetLife and UnitedHealthcare. Coverage depends on your specific plan, so call (215) 860-4600 with your insurance details to verify your plan before your visit.",
    },
    {
      question: "What if I don't have dental insurance?",
      answer:
        "You have two options. New patients without insurance can book an $89 visit that includes a cleaning, X-rays and an exam. Our in-office membership plan costs $150 a year, plus $75 for each additional family member, and covers 2 cleanings, exams and X-rays, with 15% off treatment.",
    },
    {
      question: "Can I get a same-day emergency appointment?",
      answer:
        "Usually, yes. We reserve emergency openings every business day and are open Saturday mornings. Call (215) 860-4600 as early as you can. Your visit starts with a focused 30-minute exam to find the problem and begin treatment. The office is closed on Sundays.",
    },
    {
      question: "Do you see children?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale is a family practice, and we see children as well as adults. We recommend your child's first dental visit around their first birthday. Children's care includes cleanings, exams, fluoride and sealants to help protect their teeth.",
    },
    {
      question: "Do you offer dental implants?",
      answer:
        "Yes. We offer single dental implants and implant-retained dentures for missing teeth. Right now there's $500 off an implant, abutment and crown (regular price $3,500), and the offer includes a free consultation and second opinion. CareCredit financing can help spread the cost.",
    },
    {
      question: "Do you see patients from New Jersey?",
      answer:
        "Yes. The office is about 15 minutes from Trenton by the Trenton-Morrisville Toll Bridge or the Calhoun Street Bridge, depending on traffic. We accept many PPO plans used in New Jersey, such as Horizon Blue Cross. Call (215) 860-4600 to verify your specific plan.",
    },
  ],
};

export const homeFinalCta = {
  title: "Book a Visit With Your Dentist in Yardley, PA",
  text: "Call (215) 860-4600 or request an appointment online, and we'll find a time that works for you, including Saturday mornings.",
  callLabel: "Call (215) 860-4600",
  appointment: { label: "Request an Appointment", href: "/patient-information/scheduling/" },
};
