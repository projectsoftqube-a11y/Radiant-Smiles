import type { CostBlock } from "../general/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { CD_PATH, ctaNap } from "./common";

/** Cosmetic Dentistry hub. Verbatim from 05 Cosmetic Dentistry/00 Hub/Cosmetic Dentistry Hub/02 Content.md */

export const cdMeta: PageMeta = {
  path: CD_PATH,
  title: "Cosmetic Dentist in Yardley, PA | Radiant Smiles",
  description:
    "Cosmetic dentist in Yardley, PA for porcelain veneers, teeth whitening, bonding and Invisalign. Plan your smile makeover. Call (215) 860-4600.",
};

export const cdHubCrumbs = [
  { name: "Home", path: "/" },
  { name: "Cosmetic Dentistry", path: CD_PATH },
];

export const cdHero: PageHeroContent = {
  h1: "Cosmetic Dentist in Yardley, PA",
  intro:
    "Radiant Smiles @ Floral Vale is a cosmetic dentist in Yardley, PA, at 117 Floral Vale Boulevard. Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria offer porcelain veneers, teeth whitening, dental bonding, inlays and onlays, and Invisalign clear aligners, and plan smile makeovers that combine them. Call (215) 860-4600 to book.",
  more: [
    "Whether you want to brighten a few shades, fix one chipped front tooth or rethink your whole smile, the first step is the same: a conversation about what bothers you and what you'd like to see in the mirror. We check your teeth and gums under magnification, explain the options that fit, and tell you what each one costs before anything starts.",
  ],
  buttons: ["appointment", "call"],
};

/** Schema: the child pages (handoff ItemList names and order) */
export const cdItemList = [
  { name: "Porcelain Veneers", path: "/cosmetic-dentistry/dental-veneers-dentistry/" },
  { name: "Teeth Whitening", path: "/cosmetic-dentistry/teeth-whitening/" },
  { name: "Dental Bonding", path: "/cosmetic-dentistry/dental-bonding/" },
  { name: "Inlays & Onlays", path: "/cosmetic-dentistry/inlays-onlays/" },
  { name: "Invisalign", path: "/cosmetic-dentistry/invisalign/" },
  { name: "Invisalign Teen", path: "/cosmetic-dentistry/invisalign/invisalign-teen/" },
  { name: "Invisalign Cost", path: "/cosmetic-dentistry/invisalign/invisalign-cost/" },
];

export const cdWhat = {
  title: "What Is Cosmetic Dentistry?",
  paragraphs: [
    "Cosmetic dentistry is dental treatment that improves how your teeth look: their color, shape, size, alignment and the spaces between them. Many cosmetic treatments also repair damage, so a chipped tooth looks better and is protected at the same time.",
    "A cosmetic dentist is a general dentist who provides these treatments. At our Yardley office, the same two dentists who look after your checkups and fillings also plan your cosmetic work, so they already know your teeth, your gums and your history.",
  ],
};

/** Order: simplest to most involved (handoff: whitening, bonding, veneers, inlays/onlays, Invisalign) */
export const cdProcedures = {
  title: "Cosmetic Dentistry Procedures at Radiant Smiles",
  intro: "These are the cosmetic dentistry procedures we offer, from the simplest to the most involved:",
  items: [
    {
      icon: "whiten",
      label: "Teeth whitening",
      href: "/cosmetic-dentistry/teeth-whitening/",
      text: "custom take-home trays that lift brown, yellow and spotted stains.",
    },
    {
      icon: "tooth",
      label: "Dental bonding",
      href: "/cosmetic-dentistry/dental-bonding/",
      text: "tooth-colored resin sculpted onto a chipped, cracked or discolored tooth, often in one visit.",
    },
    {
      icon: "veneer",
      label: "Porcelain veneers",
      href: "/cosmetic-dentistry/dental-veneers-dentistry/",
      text: "thin ceramic shells bonded to the front of your teeth to change their color, shape or size.",
    },
    {
      icon: "layers",
      label: "Inlays & onlays",
      href: "/cosmetic-dentistry/inlays-onlays/",
      text: "porcelain, gold or composite restorations for back teeth with too much damage for a filling.",
    },
    {
      icon: "aligner",
      label: "Invisalign clear aligners",
      href: "/cosmetic-dentistry/invisalign/",
      text: "removable, nearly invisible aligners that straighten teeth without brackets or wires.",
    },
  ],
};

export const cdMakeover = {
  title: "Smile Makeovers: Several Treatments, One Plan",
  paragraphs: [
    "A smile makeover is a plan that combines two or more cosmetic treatments to change your whole smile, rather than fixing one tooth at a time. It might be as simple as whitening followed by bonding on one chipped edge, or as involved as Invisalign followed by a set of porcelain veneers.",
    "The order matters. Whitening only changes the color of natural teeth; it does not change veneers, crowns or fillings. So if you want whiter teeth and new veneers or bonding, it usually makes sense to whiten first and then match the new work to your brighter shade. If your teeth are crowded, straightening them first can mean less work later.",
  ],
  plan: {
    title: "How we plan your smile makeover",
    steps: [
      { icon: "chat", lead: "Talk about your goals.", text: "Tell us what you'd change: color, a gap, a chip, crowding, worn or uneven edges." },
      {
        icon: "microscope",
        lead: "Examine your teeth and gums.",
        text: "We look at your teeth under a high-power dental microscope and take digital X-rays. Healthy gums and sound teeth come first, because cosmetic work lasts longer on a healthy base.",
      },
      {
        icon: "clipboard",
        lead: "Review the options.",
        text: "We explain which treatments could reach your goal, how many visits each takes and what each costs. You choose the plan; there is no pressure to decide that day.",
      },
      {
        icon: "layers",
        lead: "Treat in a sensible order.",
        text: "Typically straightening first, then whitening, then bonding, veneers or other restorations matched to your final shade.",
      },
    ],
  },
};

/** The five treatment sections (each its own H2), in content-file order */
export const cdTreatments = [
  {
    key: "veneers",
    title: "Porcelain Veneers",
    paragraphs: [
      "Porcelain veneers are thin shells of ceramic bonded to the front of your teeth to cover chips, stains that whitening can't shift, small or pointed teeth, gaps and mildly crooked teeth. They are usually placed on the top front six to eight teeth, though a single veneer can fix one tooth that stands out.",
      "Porcelain resists staining from coffee, tea and cigarettes, and with proper care porcelain veneers can brighten your smile for well over a decade. Placing them usually means removing a thin layer of enamel, so it is a permanent decision. We check the thickness and health of your enamel first. [Learn about porcelain veneers](/cosmetic-dentistry/dental-veneers-dentistry/)",
    ],
    facts: ["Top front six to eight teeth", "Well over a decade with care", "A permanent decision"],
  },
  {
    key: "whitening",
    title: "Teeth Whitening",
    paragraphs: [
      "Our teeth whitening uses custom trays made from an impression of your teeth, filled with a whitening gel you wear at home. The trays are ready in a day or two, and you wear them about 3 to 4 hours each night for one to two weeks.",
      "You can whiten your upper teeth only, or upper and lower. Whitening is currently **$100 off** (regular price $550). Very deep stains may respond better to veneers or crowns, and we'll tell you honestly if that's the case. [See teeth whitening details](/cosmetic-dentistry/teeth-whitening/)",
    ],
    facts: ["Trays ready in a day or two", "3 to 4 hours a night", "One to two weeks"],
    offer: "$100 off",
  },
  {
    key: "bonding",
    title: "Dental Bonding",
    paragraphs: [
      "Bonding uses tooth-colored resin, shaped by hand and polished, to fix a chipped, cracked, discolored or slightly uneven tooth. It is often done in a single visit and is a lower-cost alternative to veneers for small fixes.",
      "Bonding resin is not as strong as enamel and can stain or chip over time. It typically lasts three to five years before it needs repair. [Read about dental bonding](/cosmetic-dentistry/dental-bonding/)",
    ],
    facts: ["Often one visit", "Shaped by hand", "Three to five years"],
  },
  {
    key: "inlays",
    title: "Inlays & Onlays",
    paragraphs: [
      "Inlays and onlays are custom restorations that repair a back tooth when a large part of the biting surface is damaged, too much for a regular filling but not enough to need a full crown. An inlay sits within the tooth's cusps; an onlay also covers one or more of them.",
      "They are made from porcelain, gold or composite resin, take two appointments and typically last 10 to 30 years. Porcelain matches the color of your teeth, which is why inlays and onlays sit in our cosmetic menu. [Compare inlays and onlays](/cosmetic-dentistry/inlays-onlays/)",
    ],
    facts: ["Porcelain, gold or composite", "Two appointments", "10 to 30 years"],
  },
  {
    key: "invisalign",
    title: "Invisalign Clear Aligners",
    paragraphs: [
      "Invisalign straightens teeth with a series of clear, removable plastic aligners instead of metal brackets and wires. You wear them 20 to 22 hours a day, switch to a new set about every two weeks, and see us for a check-up about every six weeks. For adults, treatment takes about a year on average.",
      "Your plan starts with X-rays, photos and a scan or impressions of your teeth. Invisalign is currently **$1,000 off** (regular price $5,800), and the consultation and second opinion are free. Teenagers can use [Invisalign Teen](/cosmetic-dentistry/invisalign/invisalign-teen/), and our [Invisalign cost guide](/cosmetic-dentistry/invisalign/invisalign-cost/) covers insurance and payment plans. [Explore Invisalign](/cosmetic-dentistry/invisalign/)",
    ],
    facts: ["20 to 22 hours a day", "New set every two weeks", "About a year for adults"],
    offer: "$1,000 off",
  },
] as const;

export const cdWhich = {
  title: "Which Cosmetic Treatment Fits Your Goal?",
  head: ["What you'd like to change", "Treatments to discuss"],
  rows: [
    ["Yellow or brown staining on natural teeth", "Teeth whitening"],
    ["One small chip, crack or discolored spot", "Dental bonding"],
    ["Several teeth that are chipped, stained, small or uneven", "Porcelain veneers"],
    ["Stains that whitening doesn't shift", "Porcelain veneers, or crowns for heavily restored teeth"],
    ["A damaged back tooth with a large old filling", "Inlay or onlay"],
    ["Crowded, gapped or crooked teeth", "Invisalign clear aligners"],
    ["Several of the above", "A smile makeover that combines treatments"],
  ],
  after:
    "The right choice depends on the health of your teeth and gums, how much change you want and your budget. Your dentist will explain the trade-offs at your visit.",
};

export const cdPrecision = {
  title: "Precision You Can See",
  paragraphs: [
    "Cosmetic work is judged up close, so we work up close too. Our dentists use high-power dental microscopes, similar to the one an ophthalmologist uses, to check the fit and finish of veneers, bonding and other restorations. Edges that fit closely look more natural and are easier to keep clean.",
    "We also use digital X-rays, an intraoral camera that lets you see what we see, and an iTero scanner for digital impressions. [See our technology](/patient-information/care-and-comfort/advanced-technology/)",
  ],
};

export const cdCost: CostBlock = {
  title: "Cosmetic Dentistry Cost & Financing",
  paragraphs: [
    "The cost of cosmetic dentistry depends on the treatment, how many teeth are involved and the materials used. Whitening and bonding sit at the lower end; veneers and Invisalign are larger investments. You'll get the cost of your plan before treatment begins.",
  ],
  items: [
    {
      lead: "Current offers:",
      text: "teeth whitening $100 off (regular $550); Invisalign $1,000 off (regular $5,800) with a free consultation and second opinion. [See all special offers](/special-offers/)",
    },
    {
      lead: "Insurance:",
      text: "dental plans often don't cover treatment done only to change appearance, but they may cover part of treatment that also repairs damage, such as bonding a broken tooth or an onlay. We accept many PPO plans; call to check yours. [Insurance and payment options](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "Financing:",
      text: "CareCredit offers no interest if paid in full within six months on qualifying purchases of $200 or more, subject to credit approval. [CareCredit financing](/patient-information/carecredit/)",
    },
    {
      lead: "No insurance:",
      text: "our in-office membership plan is $150 a year and includes 15% off dental treatment.",
    },
  ],
  after: ["We accept cash, check, Visa, MasterCard, Discover and American Express. Payment is due at the time of service."],
};

export const cdResults = {
  title: "See Our Results",
  text: "The clearest way to judge cosmetic work is to look at it. Our before-and-after gallery shows the kind of changes whitening, bonding, veneers and other treatments can make. Every smile is different, so your dentist will talk you through what's realistic for your teeth. [View the before-and-after gallery](/about-us/before-and-after-gallery/)",
};

export const cdDentists = {
  title: "Meet Your Cosmetic Dentists",
  intro: "Both of our dentists trained at Temple University's Kornberg School of Dentistry.",
  people: [
    {
      key: "drGadria",
      name: "Dr. Jaspreet Gadria, DMD",
      href: "/about-us/dr-jaspreet-gadria-dmd/",
      text: "focuses on general, cosmetic and restorative dentistry. Dr. Gadria earned a DMD with high honors from Temple, is a member of the American Dental Association and the Pennsylvania Dental Association, and speaks English, Punjabi and some Hindi.",
      tags: ["DMD, high honors", "ADA & PDA member", "English, Punjabi & some Hindi"],
    },
    {
      key: "drBhalala",
      name: "Dr. Urvishkumar Bhalala, DMD",
      href: "/about-us/dr-urvishkumar-bhalala/",
      text: "graduated from Temple and worked at several practices before opening his own, with skills gained here and abroad. He stays up to date on the latest procedures.",
      tags: ["Temple graduate", "Skills gained here & abroad", "Up to date on procedures"],
    },
  ],
} as const;

export const cdFaqs: FaqBlock = {
  title: "Cosmetic Dentistry FAQs",
  items: [
    {
      question: "What is cosmetic dentistry?",
      answer:
        "Cosmetic dentistry is dental treatment that improves the appearance of your teeth, including their color, shape, size, alignment and gaps. Common examples are teeth whitening, dental bonding, porcelain veneers and clear aligners such as Invisalign. Many cosmetic treatments also repair damage, so they can improve how your teeth work as well as how they look.",
    },
    {
      question: "How much does cosmetic dentistry cost?",
      answer:
        "The cost of cosmetic dentistry depends on the treatment and how many teeth are involved. At Radiant Smiles @ Floral Vale, teeth whitening is $100 off the regular $550 price, and Invisalign is $1,000 off the regular $5,800. Veneers and bonding are priced after an exam, and CareCredit financing is available.",
    },
    {
      question: "What is a smile makeover?",
      answer:
        "A smile makeover is a treatment plan that combines two or more cosmetic procedures, such as Invisalign, whitening, bonding and porcelain veneers, to improve your whole smile. Treatments are usually done in a set order, for example whitening before veneers, so that new restorations can be matched to your brighter natural shade.",
    },
    {
      question: "Does insurance cover cosmetic dentistry?",
      answer:
        "Usually not when the treatment is purely to change appearance. Plans may cover part of treatment that also repairs damage, such as bonding a broken tooth, and some plans include an orthodontic benefit that can apply to Invisalign. Coverage depends on your plan, so call (215) 860-4600 and we'll help you check.",
    },
    {
      question: "Can I whiten my veneers, crowns or fillings?",
      answer:
        "No. Whitening gel lightens natural tooth enamel only; it does not change the color of veneers, crowns, fillings or bonding. If you're planning new restorations on front teeth, it usually makes sense to whiten first, then have the new work matched to your whiter shade. Your dentist will advise on the order.",
    },
    {
      question: "Who are the cosmetic dentists at Radiant Smiles?",
      answer:
        "Dr. Jaspreet Gadria, DMD, and Dr. Urvishkumar Bhalala, DMD, provide cosmetic dentistry at Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. Both trained at Temple University's Kornberg School of Dentistry, and Dr. Gadria's focus includes general, cosmetic and restorative dentistry.",
    },
    {
      question: "Are you open on Saturdays for cosmetic appointments?",
      answer:
        "Yes. The office is open Saturday from 8:00 am to 2:00 pm, as well as Monday to Friday. That makes it easier to fit consultations, whitening tray fittings and Invisalign check-ups around work or school. Call (215) 860-4600 to find a time that suits you.",
    },
  ],
};

export const cdCta: ClosingCta = {
  title: "Book a Visit With a Cosmetic Dentist in Yardley, PA",
  text: "Tell us what you'd like to change and we'll show you the options, the timeline and the cost. We serve Yardley, Lower Makefield, Morrisville and Washington Crossing, and patients from Trenton and Ewing, just across the river.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};
