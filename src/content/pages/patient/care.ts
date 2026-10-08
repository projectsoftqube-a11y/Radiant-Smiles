import { napCtaLine, type ClosingCta, type FaqBlock, type PageHeroContent, type PageMeta } from "../shared";
import { CC_PATH, piCrumbs } from "./common";

/**
 * Care & Comfort and its three child pages (Advanced Technology, Infection Control, Home
 * Care Instructions). Verbatim from 02 Patient Info/03 Care & Comfort/* and
 * 04 Resource/Home Care Instructions/02 Content.md
 */

/** Section navigation under the Care & Comfort parent (handoff: show the three children) */
export const careSectionNav = [
  { label: "Care & Comfort", href: CC_PATH },
  { label: "Advanced Technology", href: "/patient-information/care-and-comfort/advanced-technology/" },
  { label: "Infection Control", href: "/patient-information/care-and-comfort/infection-control/" },
  { label: "Home Care Instructions", href: "/patient-information/care-and-comfort/home-instructions/" },
];

/* ───────────────────────── Care & Comfort ───────────────────────── */

export const careMeta: PageMeta = {
  path: CC_PATH,
  title: "Comfortable Dentist in Yardley, PA | Care & Comfort",
  description:
    "A comfortable dentist in Yardley, PA: bring headphones, ask about sedation options and hear every step explained before it starts. Call (215) 860-4600.",
};

export const careCrumbs = piCrumbs("Care & Comfort", CC_PATH);

export const careHero: PageHeroContent = {
  h1: "A Comfortable Dentist in Yardley, PA",
  intro:
    "At Radiant Smiles @ Floral Vale, being a comfortable dentist in Yardley starts with no surprises. We explain what will happen and what it costs before treatment begins, you're welcome to bring headphones and music, and you can ask about sedation options if you feel anxious.",
  buttons: ["appointment", "call"],
};

export const careVisit = {
  title: "Comfort at Every Visit",
  intro:
    "Comfort starts before you sit in the chair. You're treated in comfortable, soothing surroundings by a team focused on personalized, gentle care.",
  items: [
    { icon: "chat", lead: "Clear explanations.", text: "We tell you what we found and what each option involves, in plain words." },
    { icon: "badgeDollar", lead: "Prices up front.", text: "You see the cost before any treatment starts." },
    { icon: "clock", lead: "Less waiting.", text: "We try to stay on schedule, and you'll get a reminder before each visit." },
    { icon: "headphones", lead: "Your own music.", text: "Bring headphones and listen to whatever helps you relax during treatment." },
  ],
};

export const careAnxious = {
  title: "Nervous About the Dentist? Help for Anxious Dental Patients",
  paragraphs: [
    "Dental anxiety is common, and you can tell us about it before we start. Anxious dental patients often feel better once they know exactly what will happen, so we walk you through each step first.",
    "During treatment, local anesthesia numbs the area being treated. If you feel pain at any point, tell the team right away. If anxiety makes it hard to get through a visit, ask us about sedation options at your consultation.",
  ],
};

export const careTech = {
  title: "Gentler Technology at Our Comfortable Yardley Dental Office",
  intro: "Some of the tools we use are chosen as much for your comfort as for accuracy:",
  items: [
    {
      icon: "camera",
      lead: "iTero digital impressions:",
      text: "a scan of your teeth instead of the messy impression material that can cause gagging.",
    },
    { icon: "toothClean", lead: "Electric hand-pieces:", text: "less vibration and noise than traditional air-driven drills." },
    { icon: "bolt", lead: "Dental lasers:", text: "for some gum and soft-tissue procedures, often with only a light anesthetic spray." },
    { icon: "xray", lead: "Digital X-rays:", text: "less radiation than conventional film, with images on screen right away." },
    { icon: "microscope", lead: "Dental microscopes:", text: "a magnified view for a precise fit and finish on restorations." },
  ],
  link: { label: "Learn about our advanced dental technology", href: "/patient-information/care-and-comfort/advanced-technology/" },
};

export const careInfection = {
  title: "Infection Control You Can Count On",
  text: "Every visit follows infection control guidelines from OSHA, the EPA and the CDC. Reusable instruments, including dental hand-pieces, are sterilized in an autoclave before every use, surfaces are chemically disinfected, and the team wears gloves and face masks.",
  link: { label: "How we sterilize & disinfect", href: "/patient-information/care-and-comfort/infection-control/" },
};

export const careFaqs: FaqBlock = {
  title: "Care & Comfort FAQs",
  items: [
    {
      question: "Can I listen to music during my dental treatment?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale welcomes patients to bring headphones and listen to their own music during treatment. Music can help you relax and block out office sounds, especially during longer appointments such as crowns or root canals.",
    },
    {
      question: "Do you offer sedation for nervous patients?",
      answer:
        "Ask us. Radiant Smiles @ Floral Vale offers dental sedation options for anxious patients, and the dentist will talk through what's suitable for you and your treatment at your consultation. Telling us early that you feel nervous gives us time to plan your visit around it.",
    },
    {
      question: "Will a digital impression make me gag?",
      answer:
        "It's much less likely. The iTero scanner takes a digital impression of your teeth with a small handheld scanner, so there's no tray of impression material, which is the part that can cause nausea or gagging. The scan also helps the dentist assess misaligned teeth and plan smile designs.",
    },
  ],
};

export const careCta: ClosingCta = {
  title: "Book With a Comfortable Dentist in Yardley",
  text: napCtaLine,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Advanced Technology ───────────────────────── */

export const techMeta: PageMeta = {
  path: "/patient-information/care-and-comfort/advanced-technology/",
  title: "CBCT Scan in Yardley, PA | Advanced Dental Technology",
  description:
    "Need a CBCT scan in Yardley? Radiant Smiles @ Floral Vale uses 3D cone beam CT, iTero digital scans, digital X-rays and dental microscopes. (215) 860-4600.",
};

export const techCrumbs = piCrumbs("Advanced Technology", techMeta.path, true);

export const techHero: PageHeroContent = {
  h1: "Advanced Dental Technology & CBCT Scans in Yardley",
  intro:
    "Radiant Smiles @ Floral Vale offers 3D imaging with a CBCT scan in Yardley, alongside iTero digital impressions, digital X-rays and dental microscopes. Each tool has a practical job: to see problems clearly, plan treatment accurately and make your visit more comfortable.",
  buttons: ["appointment", "call"],
};

/** Quick facts strip (plain text); each item jumps to its section */
export const techFacts = [
  { icon: "tooth", text: "3D cone beam CT (CBCT)", target: "cbct" },
  { icon: "camera", text: "iTero intraoral scanner", target: "itero" },
  { icon: "xray", text: "Digital X-rays and intraoral camera", target: "xrays" },
  { icon: "microscope", text: "High-power dental microscopes", target: "microscopes" },
  { icon: "bolt", text: "Dental lasers", target: "lasers" },
] as const;

export type TechSection = {
  id: string;
  image: "techCbct" | "techScan" | "techXray" | "techMicroscope" | "techLaser";
  title: string;
  paragraphs: string[];
  listIntro?: string;
  list?: string[];
  sub?: { title: string; text: string };
  link?: { label: string; href: string };
};

export const techSections: TechSection[] = [
  {
    id: "cbct",
    image: "techCbct",
    title: "3D Cone Beam CT: Your CBCT Scan in Yardley",
    paragraphs: [
      "A CBCT scan is a 3D dental X-ray that shows your teeth, jaw bone and surrounding structures from every angle. A standard dental X-ray is a flat, two-dimensional picture. Cone beam CT captures high-quality digital images in a fast scan while limiting the radiation dose.",
    ],
    listIntro: "At our Yardley office, 3D imaging can help the dentist:",
    list: [
      "plan [dental implants](/restorative-dentistry/dental-implants/) around the available bone",
      "see the position of teeth, roots and nerves before an extraction or other treatment",
      "find problems that a flat X-ray may not show",
    ],
  },
  {
    id: "itero",
    image: "techScan",
    title: "iTero Digital Impressions: An Intraoral Scanner Instead of Putty",
    paragraphs: [
      "An intraoral scanner takes a 3D digital impression of your teeth with a small handheld wand. The iTero scanner we use replaces the messy impression material that can cause nausea or gagging.",
      "The digital model helps the dentist assess misaligned teeth and plan smile designs, including treatment with [Invisalign clear aligners](/cosmetic-dentistry/invisalign/).",
    ],
  },
  {
    id: "xrays",
    image: "techXray",
    title: "Digital X-Rays",
    paragraphs: [
      "Digital X-rays use a sensor in place of traditional film and send the image straight to a computer screen. They need less radiation than conventional film X-rays, and the dentist can adjust the contrast and zoom in on detail while you watch.",
      "Images are stored on the office computer, so they're easy to share with your insurance company or another provider if you need a referral.",
    ],
    sub: {
      title: "Intraoral camera",
      text: "An intraoral camera is a very small camera that shows clear, enlarged pictures of your teeth on screen. It helps with faster diagnosis and keeps images on your permanent record.",
    },
  },
  {
    id: "microscopes",
    image: "techMicroscope",
    title: "Dental Microscopes for Precise Restorations",
    paragraphs: [
      "Our dentists work under high-power dental microscopes, similar to the one an ophthalmologist uses. The microscope shines light directly on the tooth, minimizing glare, and magnifies the area being treated. That detail supports dental restorations, such as fillings and crowns, with a precise fit and finish.",
    ],
    sub: {
      title: "Electric hand-pieces",
      text: "Traditional air-driven drills can wobble slightly as they spin. Electric hand-pieces run more steadily, with less vibration and noise, which allows very precise edges on restorations.",
    },
  },
  {
    id: "lasers",
    image: "techLaser",
    title: "Laser Dentistry",
    paragraphs: [
      "Dental lasers use focused light to treat soft tissue. At Radiant Smiles @ Floral Vale, lasers are used for gum care, a frenectomy (tongue-tie release) and other soft-tissue procedures.",
      "Compared with traditional methods, laser treatment can mean less bleeding and swelling, no drill noise or vibration, and quicker healing. Often only a light anesthetic spray is needed.",
    ],
    link: { label: "Gum disease laser therapy", href: "/preventative-care/gum-disease-laser-therapy/" },
  },
];

export const techFaqs: FaqBlock = {
  title: "Dental Technology FAQs",
  items: [
    {
      question: "What is a CBCT scan at the dentist?",
      answer:
        "A CBCT (cone beam computed tomography) scan is a 3D X-ray of your teeth, jaw bone and nearby structures. At Radiant Smiles @ Floral Vale in Yardley, the dentist uses CBCT images to plan treatment such as dental implants and some extractions, when a flat X-ray doesn't show enough detail.",
    },
    {
      question: "Do I need a CBCT scan for a dental implant?",
      answer:
        "The dentist will recommend a scan if your treatment needs one. A 3D image shows the height and width of the jaw bone and the position of nearby nerves, which helps when planning where an implant goes. Implant consultations at our Yardley office are free under our current offer.",
    },
    {
      question: "What is an iTero scanner?",
      answer:
        "An iTero scanner is an intraoral scanner that takes a 3D digital impression of your teeth with a small handheld wand. It replaces trays of impression material, which can cause gagging, and the digital model helps the dentist assess misaligned teeth and plan smile designs and clear aligner treatment.",
    },
    {
      question: "Are digital X-rays safer than film X-rays?",
      answer:
        "Digital X-rays need less radiation than conventional film X-rays. The image also appears on screen right away, so the dentist can zoom in on detail and talk you through what it shows at the same visit, instead of waiting for film to develop.",
    },
  ],
};

export const techCta: ClosingCta = {
  title: "See Your Teeth the Way Your Dentist Does",
  text: napCtaLine,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Infection Control ───────────────────────── */

export const infMeta: PageMeta = {
  path: "/patient-information/care-and-comfort/infection-control/",
  title: "Dental Infection Control | Radiant Smiles @ Floral Vale",
  description:
    "Dental infection control at Radiant Smiles @ Floral Vale in Yardley, PA: autoclave sterilization, surface disinfection and single-use disposable materials.",
};

export const infCrumbs = piCrumbs("Infection Control", infMeta.path, true);

export const infHero: PageHeroContent = {
  h1: "Dental Infection Control & Sterilization",
  intro:
    "Dental infection control at Radiant Smiles @ Floral Vale follows guidelines from OSHA, the EPA and the CDC. Every reusable instrument is sterilized before every use, countertops and surfaces are chemically disinfected, and disposable materials are thrown away after use.",
  buttons: ["appointment", "call"],
};

export const infHow = {
  title: "How Dental Infection Control Works at Our Yardley Office",
  intro: "Our infection control routine follows the guidelines of three federal bodies:",
  bodies: [
    { short: "OSHA", text: "(the Occupational Safety and Health Administration)" },
    { short: "EPA", text: "(the Environmental Protection Agency)" },
    { short: "CDC", text: "(the Centers for Disease Control and Prevention)" },
  ],
  after: "Here is what that looks like in practice.",
};

export const infSteps = [
  {
    id: "sterilization",
    icon: "toothClean",
    title: "Sterilization",
    text: "All reusable equipment, including dental hand-pieces, is sterilized before every use. We use an autoclave, a sterilizer that kills bacteria and viruses with steam, heat and pressure.",
  },
  {
    id: "disinfection",
    icon: "drop",
    title: "Disinfection",
    text: "Countertops and surfaces in the office are cleaned with chemical disinfectant, and the team washes with disinfectant hand soap.",
  },
  {
    id: "single-use",
    icon: "shield",
    title: "Single-Use Items & Protective Equipment",
    text: "Disposable materials are used once and thrown away. Our dentists and assistants wear gloves and face masks during treatment.",
  },
] as const;

export const infLink = { label: "More on comfort & safety at your visit", href: CC_PATH };

export const infFaqs: FaqBlock = {
  title: "Infection Control FAQs",
  items: [
    {
      question: "Are dental instruments sterilized between patients?",
      answer:
        "Yes. At Radiant Smiles @ Floral Vale, all reusable equipment, including dental hand-pieces, is sterilized before every use in an autoclave, which kills bacteria and viruses with steam, heat and pressure. Disposable materials are used once and thrown away, so they never pass from one patient to the next.",
    },
    {
      question: "Which infection control guidelines does the office follow?",
      answer:
        "Radiant Smiles @ Floral Vale in Yardley follows infection control guidelines from OSHA, the EPA and the CDC. These cover how instruments are sterilized, how surfaces are disinfected and how the team uses gloves, face masks and disposable materials. You're welcome to ask about any of these steps at your visit.",
    },
  ],
};

export const infCta: ClosingCta = {
  title: "Book a Visit at Our Yardley Office",
  text: napCtaLine,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Home Care Instructions ───────────────────────── */

export const homeCareMeta: PageMeta = {
  path: "/patient-information/care-and-comfort/home-instructions/",
  title: "After Tooth Extraction Care & Home Instructions | Yardley",
  description:
    "After tooth extraction care, plus home instructions after fillings, crowns, root canals and cosmetic work, from Radiant Smiles @ Floral Vale, Yardley, PA.",
};

export const homeCareCrumbs = piCrumbs("Home Care Instructions", homeCareMeta.path, true);

export const homeCareHero: PageHeroContent = {
  h1: "Home Care Instructions: After Tooth Extraction Care & More",
  intro:
    "These are the home care instructions we give patients at Radiant Smiles @ Floral Vale in Yardley, starting with after tooth extraction care. If your dentist gives you different or extra instructions, follow those first.",
  buttons: ["call"],
};

/** "On this page" jump list (handoff anchors) */
export const homeCareJump = [
  { id: "extraction", label: "Tooth extraction", icon: "tooth" },
  { id: "filling", label: "Dental filling", icon: "toothClean" },
  { id: "crown-bridge", label: "Crown or bridge", icon: "implant" },
  { id: "root-canal", label: "Root canal", icon: "xray" },
  { id: "cosmetic", label: "Cosmetic work", icon: "veneer" },
  { id: "when-to-call", label: "When to call us", icon: "phone" },
] as const;

export const homeCareExtraction = {
  title: "After Tooth Extraction Care",
  intro:
    "After a tooth is removed, your first job is to protect the blood clot that forms in the socket. The clot is what lets the area heal.",
  steps: [
    {
      when: "30–45 min",
      lead: "Bite on the gauze.",
      text: "Keep firm pressure on the gauze pad for 30 to 45 minutes so a clot can form. If the area is still bleeding after that, place a fresh pad and bite down for another 30 to 45 minutes.",
    },
    {
      when: "72 hours",
      lead: "Protect the clot for 72 hours.",
      text: "For the first 72 hours, don't rinse vigorously, drink through a straw, smoke, drink alcohol or brush the teeth next to the extraction site.",
    },
    { when: "24 hours", lead: "Rest for a day.", text: "Limit vigorous exercise for the next 24 hours." },
    {
      when: "48 hours",
      lead: "Use ice for swelling.",
      text: "An ice pack on the outside of your face helps keep swelling down. Swelling usually goes down after 48 hours.",
    },
    {
      when: "A few days",
      lead: "Get back to your routine.",
      text: "Resume brushing and flossing the rest of your mouth after 24 hours, keeping away from the extraction site until the 72 hours have passed. Most people return to normal activities after a few days.",
    },
  ],
  link: { label: "About tooth extractions", href: "/restorative-dentistry/tooth-extractions/" },
};

export type CareCard = { id: string; title: string; intro: string; items: { lead: string; text: string }[]; link?: { label: string; href: string } };

export const homeCareCards: CareCard[] = [
  {
    id: "filling",
    title: "Care After a Dental Filling",
    intro: "Tooth-colored composite fillings are fully set when you leave the office, so you can chew on them as soon as the numbness wears off.",
    items: [
      {
        lead: "While you're numb:",
        text: "the anesthetic usually lasts several hours. Avoid chewing and hot drinks until it wears off, so you don't bite your cheek or burn yourself.",
      },
      { lead: "Sensitivity:", text: "some sensitivity to hot, cold and pressure is normal at first." },
      {
        lead: "Discomfort:",
        text: "a mild over-the-counter pain reliever, such as ibuprofen or acetaminophen (Tylenol), can help. Follow the directions on the label.",
      },
    ],
  },
  {
    id: "crown-bridge",
    title: "After a Crown or Bridge",
    intro: "Crowns and bridges usually take at least two appointments. Between visits, a temporary crown protects your tooth while the final one is made.",
    items: [
      {
        lead: "Treat the temporary gently.",
        text: "Temporary crowns can come loose. Avoid sticky foods and gum, and chew on the other side of your mouth.",
      },
      {
        lead: "Keep cleaning.",
        text: "Brush normally. When you floss, slide the floss out from the side rather than pulling it up, so the temporary stays in place.",
      },
      {
        lead: "Expect some sensitivity.",
        text: "Sensitivity to temperature and pressure is normal. It should ease a few weeks after the final crown or bridge is placed.",
      },
    ],
  },
  {
    id: "root-canal",
    title: "Care After a Root Canal",
    intro: "Most patients can drive themselves home and get back to normal activities straight after a root canal. Root canals are often completed over two appointments.",
    items: [
      { lead: "Keep your follow-up visit.", text: "The treated tooth needs a final restoration, usually a crown, within a few weeks." },
      {
        lead: "Follow the temporary crown advice above",
        text: "if you have a temporary in place: avoid sticky foods and gum, and chew on the other side.",
      },
    ],
    link: { label: "About root canal therapy", href: "/restorative-dentistry/root-canal/" },
  },
  {
    id: "cosmetic",
    title: "After Cosmetic Dental Reconstruction",
    intro: "New veneers, crowns or other cosmetic work can take a little getting used to.",
    items: [
      { lead: "Your bite:", text: "it takes time to adjust to the feel of your new bite." },
      { lead: "Sensitivity:", text: "some hot and cold sensitivity is normal." },
      {
        lead: "Sore gums:",
        text: "rinse with warm salt water (a teaspoon of salt in a cup of warm water) three times a day. A mild pain reliever, such as acetaminophen (Tylenol) or ibuprofen, can also help.",
      },
      {
        lead: "Speech and saliva:",
        text: "your speech may feel different at first, and you may have more saliva than usual. Both usually settle in about a week.",
      },
      {
        lead: "Protect the results:",
        text: "brush and floss daily. Avoid hard foods such as ice, nuts and peanut brittle, and sticky candy. Smoking stains new teeth, and coffee, tea, red wine and berries can too, so keep them to a minimum.",
      },
      {
        lead: "Guards:",
        text: "if you play sports, wear a custom mouthguard. If you grind your teeth, wear the night guard we provide.",
      },
    ],
  },
];

export const homeCareCall = {
  title: "When to Call Us",
  intro: "Call (215) 860-4600 if, after an extraction, you have:",
  items: ["heavy bleeding", "severe pain", "swelling that lasts 2 to 3 days", "a reaction to medication"],
  after: "You can also call with any question about how your mouth is healing.",
  link: { label: "Dental emergency? What to do", href: "/emergency-dentistry/" },
};

export const homeCareFaqs: FaqBlock = {
  title: "Home Care FAQs",
  items: [
    {
      question: "How long should I bite on gauze after a tooth extraction?",
      answer:
        "Bite firmly on the gauze pad for 30 to 45 minutes after a tooth extraction so a blood clot can form in the socket. If the area is still bleeding after that, replace it with a fresh pad and bite down again. Call (215) 860-4600 if heavy bleeding continues.",
    },
    {
      question: "When can I brush my teeth after an extraction?",
      answer:
        "You can brush and floss the rest of your mouth after 24 hours. Keep the toothbrush away from the extraction site for 72 hours, and for the same 72 hours avoid vigorous rinsing, straws, smoking and alcohol, which can disturb the blood clot.",
    },
    {
      question: "Is it normal for a new filling to feel sensitive?",
      answer:
        "Yes. Some sensitivity to hot, cold and pressure is normal after a composite filling. The filling is fully set when you leave the office, so you can chew normally once the numbness wears off. Avoid chewing and hot drinks while you're still numb, usually for several hours.",
    },
  ],
};

export const homeCareCta: ClosingCta = {
  title: "Questions About Your Recovery?",
  text: napCtaLine,
  buttons: ["call", "appointment"],
};
