import type { CostBlock } from "../general/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { practice } from "@/content/site";
import { ctaNap, DENTURES_PATH, rdCrumbs } from "./common";

/**
 * Dentures and its four children: Partial, Immediate, Implant-Retained, Relines & Repairs.
 * Verbatim from 04 Restorative Dentistry/04 Dentures/*
 */

/** Sibling navigation across the dentures sub-hub (handoff: Dentures is the parent) */
export const dentureNav = [
  { label: "Dentures", href: DENTURES_PATH },
  { label: "Partial Dentures", href: "/restorative-dentistry/dentures/partial-dentures/" },
  { label: "Immediate Dentures", href: "/restorative-dentistry/dentures/immediate-dentures/" },
  { label: "Implant-Retained Dentures", href: "/restorative-dentistry/dentures/implant-retained-dentures/" },
  { label: "Denture Relines & Repairs", href: "/restorative-dentistry/dentures/denture-relines/" },
];

/* ───────────────────────── Dentures ───────────────────────── */

export const deMeta: PageMeta = {
  path: DENTURES_PATH,
  title: "Dentures in Yardley, PA | Full & Partial | Radiant Smiles",
  description:
    "Full, partial, immediate and implant-retained dentures in Yardley, PA, plus annual denture exams, relines and same-day repairs. Call (215) 860-4600.",
};

export const deCrumbs = rdCrumbs("Dentures", deMeta.path);

export const deHero: PageHeroContent = {
  h1: "Dentures in Yardley, PA",
  intro:
    "Dentures are replacement teeth, most of them removable, that fill in for missing teeth and support your cheeks and lips, so you can eat, speak and smile with confidence. At Radiant Smiles @ Floral Vale, dentures in Yardley, PA include full, partial, immediate and implant-retained options, with annual denture exams, relines and same-day repairs in the same office.",
  buttons: ["appointment", "call"],
};

export const deProcedureDescription =
  "Dentures are replacement teeth, most of them removable, that fill in for missing teeth and support your cheeks and lips, so you can eat, speak and smile with confidence.";

export const deTypes = {
  title: "Types of Dentures",
  intro:
    "The right denture depends on how many teeth you're missing, the health of any remaining teeth and how secure you want the denture to feel. Most dentures have a gum-colored acrylic base, with teeth made of plastic, porcelain or both.",
  types: [
    {
      kind: "full",
      title: "Full (conventional) dentures",
      text: "A full denture replaces all the teeth in one jaw. A conventional denture is made after any remaining teeth are removed and the gums have healed. The upper denture covers the roof of your mouth with flesh-colored acrylic, while the lower one is horseshoe-shaped to leave room for your tongue.",
    },
    {
      kind: "partial",
      title: "Partial dentures",
      text: "A [partial denture](/restorative-dentistry/dentures/partial-dentures/) replaces one or more missing teeth when you still have healthy natural teeth. It fills the gaps and helps keep your remaining teeth from shifting.",
    },
    {
      kind: "immediate",
      title: "Immediate dentures",
      text: "[Immediate dentures](/restorative-dentistry/dentures/immediate-dentures/) are made in advance and placed at the same appointment your remaining teeth are removed, so you don't go without teeth while you heal.",
    },
    {
      kind: "implant",
      title: "Implant-retained dentures",
      text: "[Implant-retained dentures](/restorative-dentistry/dentures/implant-retained-dentures/) attach to dental implants placed in the jaw. They move less than a conventional denture, and some types are fixed in place.",
    },
    {
      kind: "over",
      title: "Overdentures",
      text: "A denture can also be made to fit over a few natural teeth that have had root canal treatment. Keeping those roots can help support the denture.",
    },
  ],
};

export const deGetting = {
  title: "Getting Dentures in Yardley, PA",
  intro: "Getting dentures starts with an exam, and your dentist will explain each step before you commit. The process usually looks like this:",
  steps: [
    {
      lead: "Exam and planning.",
      text: "Your dentist checks your mouth, takes X-rays and reviews your health history, then explains which type of denture suits you and what it costs.",
    },
    { lead: "Any extractions.", text: "If teeth need to come out, they're removed first. With immediate dentures, your new teeth go in the same day." },
    { lead: "Impressions.", text: "Impressions of your gums and any remaining teeth are used to make a denture shaped for your mouth." },
    { lead: "Fitting.", text: "Your dentures are placed, and the fit and bite are checked and adjusted." },
    { lead: "Follow-up.", text: "Sore spots are common while you get used to new dentures, and small adjustments usually fix them." },
  ],
  after: "New dentures take some getting used to. Eating and speaking usually feel more natural with practice and a few adjustment visits.",
};

export const deCare = {
  title: "Denture Care: Keeping Your Dentures Clean & in Shape",
  intro: "Good denture care keeps your dentures clean, comfortable and free of damage. A few daily habits make the biggest difference.",
  items: [
    { icon: "brush", lead: "Brush daily, inside and out.", text: "Use a soft, large nylon denture brush with round-ended bristles." },
    { icon: "ban", lead: "Use denture cream, not toothpaste.", text: "Toothpaste is too abrasive and can scratch the surface." },
    { icon: "thermo", lead: "Rinse in cold water.", text: "Dentures can warp if they're placed in hot water." },
    {
      icon: "cup",
      lead: "Keep them covered.",
      text: "When you're not wearing your dentures, store them in water or a denture-cleaning solution so they don't dry out.",
    },
    { icon: "search", lead: "Look them over.", text: "Check regularly for worn or chipped teeth." },
  ],
  after: "If your dentures feel loose, have them checked right away. A loose denture can rub the gums and cause sore spots.",
};

export const deExam = {
  title: "Annual Denture Exams & Maintenance",
  intro:
    "Even with no natural teeth left, you should see the dentist once a year. An annual examination with Dr. Bhalala or Dr. Gadria helps make sure your denture is working properly and your mouth is healthy.",
  listIntro: "Your annual denture exam includes:",
  items: [
    "An update of your medical and dental history",
    "An exam of your mouth, gums and the bone that supports your denture",
    "A check of your denture's stability and your bite",
    "An [oral cancer screening](/preventative-care/oral-cancer-screening/) to look for abnormal or pre-cancerous tissue",
    "A check for cracks, chips and broken or loose teeth on the denture",
    "Cleaning and polishing of your denture",
    "A review of your daily care routine",
  ],
};

export const deRelines = {
  title: "Denture Relines & Repairs",
  intro: "Dentures need relining or replacing over time because the bone and gum ridges in your mouth slowly shrink. A denture that fit well at first can start to slip or rub.",
  items: [
    {
      lead: "Relines",
      text: "reshape the inside of your denture to fit your gums again. A hard reline is usually recommended about every two years, and soft relines help tender gums.",
    },
    { lead: "Rebases", text: "replace the whole pink acrylic base while keeping your existing denture teeth." },
    { lead: "Repairs", text: "fix a cracked or broken denture, often on the same day." },
  ],
  after: "See [denture relines and repairs](/restorative-dentistry/dentures/denture-relines/) for the details on each.",
};

export const deCost: CostBlock = {
  title: "Denture Cost & Financing",
  paragraphs: ["The cost of dentures depends on the type, the materials and whether you need extractions or implants first. Your dentist will give you the cost of each option before you decide."],
  items: [
    {
      lead: "Insurance:",
      text: "your PPO plan may cover part of the cost of dentures, though many plans limit how often they pay for a new set. We accept many PPO plans, including Delta Dental, Dentegra, GEHA and Physicians Mutual; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "No insurance:", text: "join the in-office membership plan for $150 a year and save 15% on dentures and all other treatment." },
    {
      lead: "Financing:",
      text: "[CareCredit](/patient-information/carecredit/) can split the cost into monthly payments, with no interest on qualifying purchases of $200 or more paid in full within 6 months (subject to credit approval).",
    },
  ],
};

export const deFaqs: FaqBlock = {
  title: "Denture FAQs",
  items: [
    {
      question: "How long do dentures last?",
      answer:
        "Dentures don't last forever, because the gums and bone under them slowly change shape. A hard reline is usually recommended about every two years to keep the fit snug, and worn or loose dentures eventually need replacing. Annual denture exams at Radiant Smiles @ Floral Vale help you know when it's time.",
    },
    {
      question: "How should I clean my dentures?",
      answer:
        "Brush your dentures inside and out every day with a soft, large nylon denture brush and denture cream rather than toothpaste, which is too abrasive. Rinse them in cold water, never hot, because heat can warp them. When they're out of your mouth, keep them covered in water or a denture-cleaning solution.",
    },
    {
      question: "Do I still need dental checkups if I wear dentures?",
      answer:
        "Yes. An annual exam checks the fit and bite of your denture, the health of your gums and the bone underneath, and includes an oral cancer screening. Your denture is also cleaned and polished, and checked for cracks, chips and loose teeth, so small problems are fixed early.",
    },
    {
      question: "Can I get dentures on the same day my teeth are removed?",
      answer:
        "Yes, with immediate dentures. Impressions are taken before your extractions, and the dentures are placed at the extraction appointment, so you leave with teeth. As your gums heal and shrink, the dentures need adjustments and later a permanent reline to fit well.",
    },
    {
      question: "What should I do if my denture breaks?",
      answer:
        "Call Radiant Smiles @ Floral Vale at (215) 860-4600. Cracked or broken dentures can often be repaired on the same day. Don't try to glue the denture yourself, because household glues can damage the material and change the fit. Bring all the broken pieces with you to the appointment.",
    },
  ],
};

export const deCta: ClosingCta = {
  title: "Find the Right Dentures for You",
  text: "Whether you need your first denture or a better fit for the one you have, book a visit and we'll walk you through the options and the cost.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Partial Dentures ───────────────────────── */

export const paMeta: PageMeta = {
  path: "/restorative-dentistry/dentures/partial-dentures/",
  title: "Partial Dentures in Yardley, PA | Radiant Smiles",
  description:
    "Removable partial dentures in Yardley, PA that fill gaps, support your bite and help keep natural teeth from shifting. Call (215) 860-4600.",
};

export const paCrumbs = rdCrumbs("Partial Dentures", paMeta.path, true);

export const paHero: PageHeroContent = {
  h1: "Partial Dentures in Yardley, PA",
  intro:
    "A removable partial denture replaces one or more missing teeth while keeping the healthy natural teeth you still have. At Radiant Smiles @ Floral Vale, partial dentures in Yardley are designed by Dr. Bhalala and Dr. Gadria to spread your chewing forces evenly across your remaining teeth and gums.",
  buttons: ["appointment", "call"],
};

export const paProcedureDescription =
  "A removable partial denture replaces one or more missing teeth while keeping the healthy natural teeth you still have.";

export const paWho = {
  title: "Who Partial Dentures Suit",
  intro:
    "A partial denture suits you if you're missing some teeth, but not all, in the upper or lower jaw. It can fill several gaps at once, including gaps on both sides of the mouth, with one appliance you take out to clean.",
  listIntro: "A partial is often a good fit when:",
  items: [
    { icon: "search", text: "You're missing several teeth in different places" },
    {
      icon: "alert",
      text: "The teeth beside a gap aren't strong enough to support a [dental bridge](/restorative-dentistry/dental-bridges/)",
    },
    { icon: "case", text: "You'd prefer a removable option you can take out to clean" },
    { icon: "calendar", text: "You want a replacement while you plan longer-term treatment" },
  ],
};

export const paDoes = {
  title: "What a Partial Denture Does for You",
  intro: "Filling the gaps does more than improve your smile. A well-made partial denture helps with:",
  items: [
    { icon: "smile", lead: "Appearance and speech:", text: "a natural-looking smile and clearer speech where teeth were missing" },
    { icon: "apple", lead: "Eating:", text: "more efficient chewing, which also helps digestion" },
    { icon: "shield", lead: "Your remaining teeth:", text: "filling the gap may limit how much your natural teeth drift or tip into the space" },
  ],
};

export const paTypes = {
  title: "Types of Partial Dentures",
  intro: "Partial dentures are made from metal and acrylic, or from acrylic alone, and the dentists generally prefer metal for long-term use.",
  types: [
    {
      title: "Metal-and-acrylic partials",
      text: "A metal framework carries the replacement teeth on a gum-colored acrylic base. Metal is structurally stronger than acrylic, so the partial can be thinner and more comfortable, and it's easier to keep clean.",
      metal: true,
    },
    {
      title: "All-acrylic partials",
      text: "An all-acrylic partial is usually a transitional or temporary option, for example while your gums heal after an extraction or while you wait for a longer-term treatment.",
      metal: false,
    },
  ],
};

export const paDesign = {
  title: "How Your Partial Is Designed",
  paragraphs: [
    "Your partial is planned around the teeth you still have. Dr. Bhalala or Dr. Gadria designs it to distribute chewing forces evenly across your remaining teeth and the soft tissues of your mouth, so no single tooth takes too much strain.",
    "Sometimes small changes to your remaining teeth are recommended first so the partial sits securely. Your dentist will explain any changes, and the cost, before treatment starts.",
  ],
};

export const paFit = {
  title: "Fit & Care for Your Partial Denture",
  intro: "A partial denture should feel secure and comfortable. Expect a short adjustment period, and come back for small adjustments if anything rubs.",
  items: [
    "Take the partial out to clean it every day, and brush your natural teeth well, especially where the partial touches them",
    "Brush the partial with a soft denture brush and denture cream rather than toothpaste",
    "Rinse it in cold water, never hot, to avoid warping",
    "Store it in water or a denture-cleaning solution when it's out of your mouth",
    "Keep up regular cleanings and exams so your natural teeth stay healthy",
  ],
  after:
    "Your gums and bone change over time, so a partial may need a reline to keep fitting well. See [dentures](/restorative-dentistry/dentures/) for more on denture care, checkups and repairs.",
};

export const paCost: CostBlock = {
  title: "Partial Denture Cost in Yardley",
  paragraphs: [
    "The cost of a partial depends on how many teeth it replaces and whether it's metal-and-acrylic or all-acrylic. Your dentist will give you the cost before treatment. Many PPO plans are accepted, the $150-a-year membership plan takes 15% off treatment, and [CareCredit](/patient-information/carecredit/) financing is available.",
  ],
};

export const paFaqs: FaqBlock = {
  title: "Partial Denture FAQs",
  items: [
    {
      question: "What is a partial denture?",
      answer:
        "A partial denture is a removable appliance that replaces one or more missing teeth when you still have some natural teeth. Replacement teeth sit on a gum-colored base, usually with a metal framework, and the partial is designed to spread chewing forces evenly across your remaining teeth and gums.",
    },
    {
      question: "Is a metal or acrylic partial better?",
      answer:
        "For long-term use, Dr. Bhalala and Dr. Gadria generally prefer a metal-and-acrylic partial. Metal is structurally stronger, so the partial can be thinner and more hygienic. An all-acrylic partial is usually a transitional or temporary option, such as while your gums heal after an extraction.",
    },
    {
      question: "Partial denture or bridge: which should I choose?",
      answer:
        "A bridge is fixed in place and supported by the teeth beside a single gap. A partial denture is removable and can fill several gaps at once, and it doesn't need strong teeth on both sides of each space. Your dentist will recommend one after examining your teeth and gums.",
    },
    {
      question: "How do I clean a partial denture?",
      answer:
        "Take your partial out every day and brush it with a soft denture brush and denture cream, not toothpaste, which is too abrasive. Rinse it in cold water, because hot water can warp it. Brush your natural teeth well too, especially where the partial rests against them.",
    },
  ],
};

export const paCta: ClosingCta = {
  title: "Fill the Gaps With a Partial Denture",
  text: "Book an exam to find out whether a partial, a bridge or implants suit your mouth, and what each would cost.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Immediate Dentures ───────────────────────── */

export const idMeta: PageMeta = {
  path: "/restorative-dentistry/dentures/immediate-dentures/",
  title: "Immediate Dentures in Yardley, PA | Radiant Smiles",
  description:
    "Immediate dentures in Yardley, PA are placed at the visit your teeth are removed, so you don't go without teeth while you heal. Call (215) 860-4600.",
};

export const idCrumbs = rdCrumbs("Immediate Dentures", idMeta.path, true);

export const idHero: PageHeroContent = {
  h1: "Immediate Dentures in Yardley, PA",
  intro:
    "Immediate dentures are made before your remaining teeth are removed and placed at the same appointment as the extractions, so you leave with teeth. At Radiant Smiles @ Floral Vale, immediate dentures in Yardley are adjusted and relined as your gums heal, until they're ready for a long-term fit.",
  buttons: ["appointment", "call"],
};

export const idProcedureDescription =
  "Immediate dentures are made before your remaining teeth are removed and placed at the same appointment as the extractions, so you leave with teeth.";

export const idWho = {
  title: "Who Immediate Dentures Are For",
  paragraphs: [
    "Immediate dentures are for patients whose remaining teeth can't be saved and need to come out. If complete extraction of your remaining teeth is unavoidable, an immediate denture means you don't have to spend weeks without teeth while your mouth heals.",
    "Your dentist will first check whether any teeth can be kept, for example to support a partial denture or an implant-retained denture. If removal is the right choice, the immediate denture is planned before the [tooth extractions](/restorative-dentistry/tooth-extractions/).",
  ],
};

export const idHow = {
  title: "How Immediate Dentures Work at Our Yardley Office",
  intro: "Immediate dentures are made from impressions taken while your teeth are still in place. The process has three main steps:",
  steps: [
    { icon: "clipboard", lead: "Impressions and planning.", text: "Impressions of your teeth and gums are taken before any extractions." },
    { icon: "flask", lead: "Making the denture.", text: "An accurate duplicate of your mouth is made from those impressions, and your denture is built on it." },
    {
      icon: "smile",
      lead: "Extraction and placement.",
      text: "At the extraction appointment, your remaining teeth are removed and the immediate denture is placed right away.",
    },
  ],
  after: "The denture can also help protect the healing area in the first days after your extractions.",
};

export const idKnow = {
  title: "What to Know Before You Choose",
  paragraphs: [
    "Immediate dentures have one honest trade-off: in most cases there's no way to try the denture in your mouth before the teeth come out. Because of that, some compromises in fit or appearance may be needed at first.",
    "Your dentist will explain what to expect for your case, and the denture is adjusted after placement to make it as comfortable as possible.",
  ],
};

export const idHealing = {
  title: "Healing & Adjustments",
  paragraphs: [
    "Your gums and jawbone shrink as they heal after extractions, so an immediate denture loosens over the first months and needs adjusting. That's normal and expected.",
    "During healing, your dentist may add a temporary lining or tissue conditioner inside the denture. These soft materials fill the space as the gums change, help the tissue heal and keep the denture more comfortable. Expect a few follow-up visits during this time.",
    "Follow your extraction aftercare instructions closely in the first few days. You can review our [home care instructions](/patient-information/care-and-comfort/home-instructions/) any time.",
  ],
};

export const idLong = {
  title: "Moving to Your Long-Term Fit",
  paragraphs: [
    "Once your gums have healed, your immediate denture is given a permanent reline so it fits the new shape of your mouth. A reline reshapes the inside of the denture to match your healed gums, which makes it more stable and comfortable for everyday wear.",
    "Your dentist will talk with you about the right long-term option at that stage, including a reline, a [denture rebase](/restorative-dentistry/dentures/denture-relines/) or other choices on our [dentures](/restorative-dentistry/dentures/) page.",
  ],
};

export const idCost: CostBlock = {
  title: "Immediate Denture Cost",
  paragraphs: [
    "The cost depends on how many teeth are removed, the type of denture and the follow-up relines you'll need. You'll get the full cost, including extractions and relines, before treatment starts. Your PPO plan may cover part of the cost. Without insurance, the $150-a-year membership plan saves 15% on treatment, and [CareCredit](/patient-information/carecredit/) financing can spread the payments.",
  ],
};

export const idFaqs: FaqBlock = {
  title: "Immediate Denture FAQs",
  items: [
    {
      question: "Will I leave the office with teeth?",
      answer:
        "Yes. With immediate dentures, your new denture is placed at the same appointment your remaining teeth are removed, so you don't go without teeth while you heal. The denture is made in advance from impressions of your teeth and gums taken before the extractions.",
    },
    {
      question: "Why do immediate dentures need adjustments?",
      answer:
        "Your gums and bone shrink as they heal after extractions, so the denture gradually loosens. Your dentist may add a temporary lining or tissue conditioner during healing to keep it comfortable. After your gums have healed, the denture gets a permanent reline to fit the new shape of your mouth.",
    },
    {
      question: "Can I see how my immediate denture looks before the extractions?",
      answer:
        "In most cases, no. Because your teeth are still in place, the denture can't be tried in before they're removed, and some compromises in fit or appearance may be needed at first. Your dentist will explain what to expect and adjust the denture after placement.",
    },
    {
      question: "What happens after my gums heal?",
      answer:
        "Once healing is complete, your immediate denture is given a permanent reline so it fits your healed gums and feels more stable. Your dentist will review the fit and talk through your long-term options. Annual denture exams then keep track of the fit and the health of your mouth.",
    },
  ],
};

export const idCta: ClosingCta = {
  title: "Plan Your Immediate Dentures",
  text: "If your remaining teeth need to come out, plan your denture first so you leave with teeth. Book a consultation to talk through the process and the cost.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Implant-Retained Dentures ───────────────────────── */

export const irMeta: PageMeta = {
  path: "/restorative-dentistry/dentures/implant-retained-dentures/",
  title: "Implant-Retained Dentures in Yardley, PA | Radiant Smiles",
  description:
    "Implant dentures in Yardley, PA that snap onto implants or stay fixed in place: ball, bar and screw-retained options. Call (215) 860-4600.",
};

export const irCrumbs = rdCrumbs("Implant-Retained Dentures", irMeta.path, true);

export const irHero: PageHeroContent = {
  h1: "Implant-Retained Dentures in Yardley, PA",
  intro:
    "An implant-retained denture is a denture that attaches to dental implants in your jawbone, so it stays put when you eat and talk instead of resting loosely on your gums. Radiant Smiles @ Floral Vale offers implant dentures in Yardley in three styles, from a snap-in denture on two implants to a fixed denture secured by five or more.",
  buttons: ["appointment", "call"],
};

export const irProcedureDescription =
  "An implant-retained denture is a denture that attaches to dental implants in your jawbone, so it stays put when you eat and talk instead of resting loosely on your gums.";

export const irWhy = {
  title: "Why Implant Dentures Stay Put",
  intro:
    "A conventional denture is held in place by suction and the shape of your gums, so it can slip, especially on the lower jaw. An implant-retained denture locks onto [dental implants](/restorative-dentistry/dental-implants/), small titanium posts that the bone bonds to over time.",
  listIntro: "That connection gives you:",
  items: [
    { icon: "apple", lead: "Stability while eating,", text: "so you can chew with more confidence" },
    { icon: "layers", lead: "Bone and gum preservation,", text: "because implants keep stimulating the jawbone" },
    { icon: "smile", lead: "Confidence when you talk and smile,", text: "without worrying about the denture moving" },
    { icon: "leaf", lead: "Better nutrition,", text: "since a secure denture makes a wider range of foods easier to eat" },
    { icon: "brush", lead: "Easier hygiene and a natural look,", text: "depending on the style you choose" },
  ],
};

export const irTypes = {
  title: "Types of Implant-Retained Dentures",
  intro: "There are three main types of implant-retained denture for the lower jaw. They differ in how many implants they use and how firmly the denture is held.",
  types: [
    {
      title: "Ball attachment (snap-in dentures)",
      posts: 2,
      tag: "2 implants · removable",
      text: "Two implants are placed in the jaw, and the denture snaps onto them. A snap-in denture is more stable than a conventional denture, though it can still move a little, and the attachments need periodic adjustment. You take it out to clean it.",
    },
    {
      title: "Bar attachment",
      posts: 4,
      tag: "4–6 implants · removable",
      text: "Four to six implants are joined by a custom-made bar. The denture, sometimes called an overdenture, clips onto the bar with retention clips inside it. It's much more stable than a conventional denture and is still removable.",
    },
    {
      title: "Screw-retained (fixed) dentures",
      posts: 5,
      tag: "5+ implants · fixed",
      text: "Five or more implants hold a permanent denture secured with screws or clasps. It doesn't rest on the gum tissue, and it isn't taken out at home; you clean it in place.",
    },
  ],
  upper: {
    title: "Upper implant dentures",
    text: "The upper jaw usually needs more implants than the lower, because the bone there is less dense. Depending on the number of implants, an upper implant denture may not need to cover the roof of your mouth, which can improve your sense of taste and temperature.",
  },
};

export const irCandidate = {
  title: "Who Is a Candidate for Implant Dentures?",
  paragraphs: [
    "You may be a candidate if you're missing all or most of your teeth in one jaw, or if your current denture is loose and hard to live with. The deciding factors are the amount of bone in your jaw, the health of your gums and your general health.",
    "An evaluation combines a dental exam and X-rays with a review of your health history. Where needed, cone beam CT (3D) imaging helps show how much bone is available and where implants could go.",
  ],
};

export const irProcess = {
  title: "The Implant Denture Process",
  intro: "Implant dentures are completed in stages, with time for the implants to bond with your bone. The steps are:",
  steps: [
    {
      lead: "Consultation and planning.",
      text: "Your dentist examines your mouth, reviews your health history and takes X-rays and, where needed, a cone beam CT scan to help plan the number and position of implants.",
    },
    { lead: "Implant placement.", text: "The implants are placed in the jawbone under local anesthesia. Ask about sedation options if you're nervous." },
    {
      lead: "Healing.",
      text: "The bone bonds with the implants over several months. Implant treatment usually takes six to eight months overall, and your dentist will explain how you'll manage with a denture while you heal.",
    },
    { lead: "Attaching your denture.", text: "Once the implants are ready, the attachments are fitted and your denture is connected, checked and adjusted." },
  ],
  after: "Regular checkups follow, so the implants, attachments and gums stay healthy.",
};

export const irCost: CostBlock = {
  title: "Implant Dentures in Yardley: Cost & Financing",
  paragraphs: [
    "What implant dentures cost depends on how many implants you need, which attachment style you choose and whether any teeth must be removed first. You'll get a full cost before treatment begins.",
    "The $500 implant offer on our [special offers](/special-offers/) page covers a single implant, abutment and crown, so it doesn't set the price of an implant denture. Ask about it if you need single implants too.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "your PPO plan may pay toward part of the treatment. We accept many PPO plans, including Lincoln Financial, MetLife, Principal Life and Sun Life Financial; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "Financing:",
      text: "[CareCredit](/patient-information/carecredit/) financing means no interest on qualifying purchases of $200 or more if you pay in full within 6 months. Subject to credit approval.",
    },
  ],
};

export const irFaqs: FaqBlock = {
  title: "Implant-Retained Denture FAQs",
  items: [
    {
      question: "What are snap-in dentures?",
      answer:
        "Snap-in dentures are implant-retained dentures that click onto attachments on two implants in the lower jaw. They're more stable than a conventional denture, though they can move a little, and the attachments need periodic adjustment. You remove them to clean them, then snap them back into place.",
    },
    {
      question: "How many implants do I need for an implant denture?",
      answer:
        "It depends on the style. A ball-attachment (snap-in) lower denture uses two implants, a bar-attachment denture uses four to six, and a fixed screw-retained denture uses five or more. The upper jaw usually needs more implants because the bone is less dense. Your dentist will recommend a number after checking your bone with X-rays and, where needed, 3D imaging.",
    },
    {
      question: "Are implant-retained dentures removable?",
      answer:
        "Some are and some aren't. Ball-attachment and bar-attachment dentures are removable, so you take them out to clean them. A screw-retained denture is fixed in place, doesn't rest on your gums and is cleaned without removing it. Your dentist will explain which type suits your bone and goals.",
    },
    {
      question: "Can I get an implant denture if I already wear dentures?",
      answer:
        "Often, yes. Many people choose implant-retained dentures because a conventional denture keeps slipping. An evaluation with X-rays and, where needed, cone beam CT imaging shows whether you have enough bone for implants, and which attachment style would work. Your dentist will explain the options and the cost.",
    },
  ],
};

export const irCta: ClosingCta = {
  title: "Book an Implant Denture Consultation",
  text: "Find out which style of implant denture suits your jaw, how many implants you'd need and what it would cost.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Denture Relines & Repairs ───────────────────────── */

export const rlMeta: PageMeta = {
  path: "/restorative-dentistry/dentures/denture-relines/",
  title: "Denture Relines & Repairs in Yardley, PA | Radiant Smiles",
  description:
    "Loose or broken dentures? Hard and soft relines, soft liners, rebases and same-day denture repairs in Yardley, PA. Call (215) 860-4600.",
};

export const rlCrumbs = rdCrumbs("Denture Relines & Repairs", rlMeta.path, true);

/** Call first (broken dentures are urgent); the hero call fires denture_repair_call_click */
export const rlHero: PageHeroContent = {
  h1: "Denture Relines & Repairs in Yardley, PA",
  intro:
    "A denture reline reshapes the inside of your denture so it fits your gums snugly again, and a repair fixes a cracked or broken denture close to its original condition. Radiant Smiles @ Floral Vale offers hard, soft and temporary relines, full rebases and same-day denture repair in Yardley.",
  buttons: [{ label: `Call ${practice.phone.display}`, href: practice.phone.href, track: "denture_repair_call_click" }, "appointment"],
};

export const rlProcedureDescription =
  "A denture reline reshapes the inside of your denture so it fits your gums snugly again, and a repair fixes a cracked or broken denture close to its original condition.";

export const rlSigns = {
  title: "Signs Your Denture Needs a Reline or Repair",
  intro:
    "Your denture needs attention when it stops fitting or starts to break down. The bone and gum ridges under a denture slowly shrink over time, so even a well-made denture loosens.",
  listIntro: "Call the office if you notice:",
  items: [
    { icon: "wave", text: "A denture that feels loose, slips or rocks when you chew" },
    { icon: "alert", text: "Sore spots or tender gums where the denture rubs" },
    { icon: "drop", text: "Gums that look red, swollen or misshapen" },
    { icon: "tooth", text: "A crack, chip or broken or loose tooth on the denture" },
    { icon: "layers", text: "A pink base that looks worn, weakened or discolored" },
  ],
  after: "Have a loose denture checked right away. Wearing a poor fit can make sore spots worse.",
};

export const rlHard = {
  title: "Hard Relines",
  paragraphs: [
    "A hard reline gives your denture the closest possible contact with your mouth. A layer of plastic is removed from the inside of the denture, then it's filled with a putty-like material that takes the exact shape of your gums and sets firm.",
    "A hard reline is usually recommended about every two years to keep up with the gradual changes in your mouth.",
  ],
};

export const rlSoft = {
  title: "Soft Relines & Soft Denture Liners",
  intro:
    "A soft reline uses a pliable lining for patients who can't comfortably wear an ordinary denture because of tender gums or sore spots. The soft material stays flexible for one to two years and is less likely to cause sore spots than a hard base.",
  liner: {
    title: "Soft denture liner",
    text: "A soft denture liner is a layer of soft, pliable material fitted between the hard denture base and your gums. It absorbs shock when you bite, which can make chewing easier and wearing the denture more comfortable. A soft liner can be added to a new or an existing denture.",
    listIntro: "A soft liner may help if you have:",
    items: [
      "Gum ridges that have receded or flattened",
      "Trouble tolerating the pressure of a hard denture",
      "Gums that are often sore",
      "Sharp, bony areas under the denture",
    ],
    after:
      "You'll come back for regular follow-up visits so the liner can be checked. If soft liners aren't enough, [implant-retained dentures](/restorative-dentistry/dentures/implant-retained-dentures/) are another way to take pressure off sore gums.",
  },
};

export const rlTemp = {
  title: "Temporary (Palliative) Relines",
  text: "A temporary reline gives irritated gums a chance to recover. When gums are red, swollen or misshapen, a soft lining material is placed in the denture to let the inflammation settle. After a few weeks, the gums usually return to a more normal state, and your dentist can then plan a lasting fit.",
};

export const rlRebase = {
  title: "Denture Rebasing",
  intro: "A rebase replaces the entire pink acrylic base of your denture while keeping your existing denture teeth. A reline replaces only the lining; a rebase replaces all of the base material.",
  listIntro: "Your dentist may suggest a rebase when:",
  items: ["The denture base is broken or damaged", "The pink base has become weak or old", "You're replacing an immediate denture after healing"],
  after: "A rebase gives you a stable denture without replacing your denture teeth.",
};

export const rlRepair = {
  title: "Same-Day Denture Repair in Yardley",
  paragraphs: [
    "Denture repairs restore a fractured or damaged denture close to its original condition, and same-day repair is offered. Call (215) 860-4600 as soon as your denture cracks or breaks so the office can arrange a time.",
    "Bring every broken piece with you, and don't try to glue the denture yourself. Household glues can damage the material and change the fit. If the damage is too extensive for a repair, your dentist will talk you through a rebase or a new [denture](/restorative-dentistry/dentures/).",
  ],
};

export const rlCost: CostBlock = {
  title: "Reline & Repair Costs",
  paragraphs: [
    "The cost depends on whether you need a hard, soft or temporary reline, a rebase or a repair, and how much work the denture needs. You'll get the cost before the work starts. Relines and repairs may be partly covered by your PPO plan; members of the $150-a-year plan get 15% off, and [CareCredit](/patient-information/carecredit/) is accepted.",
  ],
};

export const rlFaqs: FaqBlock = {
  title: "Denture Reline & Repair FAQs",
  items: [
    {
      question: "How often should a denture be relined?",
      answer:
        "A hard reline is usually recommended about every two years, because the gums and bone under your denture slowly change shape. A soft reline stays pliable for one to two years. If your denture loosens or starts to rub sooner, have it checked rather than waiting for the next scheduled reline.",
    },
    {
      question: "Can you repair my denture the same day?",
      answer:
        "Often, yes. Radiant Smiles @ Floral Vale offers same-day denture repair to restore a cracked or broken denture close to its original condition. Call (215) 860-4600 as soon as it breaks, and bring every piece. Avoid household glues, which can damage the denture and change its fit.",
    },
    {
      question: "What is the difference between a reline and a rebase?",
      answer:
        "A reline replaces only the inside lining of the denture so it fits your gums again. A rebase replaces the entire pink acrylic base while keeping your existing denture teeth. A rebase suits a denture whose base is broken, weak or old, or an immediate denture after healing.",
    },
    {
      question: "Who should get a soft denture liner?",
      answer:
        "A soft denture liner may help if your gums are often sore, your gum ridges have receded or flattened, you have sharp bony areas, or you find a hard denture hard to tolerate. The liner cushions your gums from the hard base, and it can be added to a new or existing denture.",
    },
  ],
};

export const rlCta: ClosingCta = {
  title: "Get Your Denture Fitting Comfortably Again",
  text: "A loose or broken denture doesn't have to wait. Call to arrange a same-day repair or book a reline appointment.",
  sub: ctaNap,
  buttons: ["call", "appointment"],
};
