import type { CostBlock } from "../general/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { practice } from "@/content/site";
import { ctaNap, rdCrumbs } from "./common";

/**
 * Repairing and saving teeth: Dental Crowns, Dental Fillings and Root Canal Therapy.
 * Verbatim from 04 Restorative Dentistry/01 Repair Damaged Teeth/* and 02 Save Infected Teeth/*
 */

/* ───────────────────────── Dental Crowns ───────────────────────── */

export const crMeta: PageMeta = {
  path: "/restorative-dentistry/dental-crowns/",
  title: "Dental Crowns in Yardley, PA | Radiant Smiles",
  description:
    "Dental crowns in Yardley, PA for cracked, worn or root-canal-treated teeth. Tooth-colored options, usually two visits, made for a precise fit.",
};

export const crCrumbs = rdCrumbs("Dental Crowns", crMeta.path);

export const crHero: PageHeroContent = {
  h1: "Dental Crowns in Yardley, PA",
  intro:
    "A dental crown is a custom cap that covers a cracked, worn, decayed or root-canal-treated tooth to restore its shape, strength and appearance. At Radiant Smiles @ Floral Vale in Yardley, PA, a crown usually takes two visits: the tooth is shaped and fitted with a temporary, then the finished crown is adjusted and cemented.",
  more: [
    "Radiant Smiles uses high-power dental microscopes for precise fit and finish of restorations, including crowns, and tooth-colored, metal-free options are available.",
  ],
  buttons: ["appointment", "call"],
};

export const crProcedureDescription =
  "A dental crown is a custom cap that covers a cracked, worn, decayed or root-canal-treated tooth to restore its shape, strength and appearance.";

export const crWhen = {
  title: "When You Need a Dental Crown",
  intro:
    "You need a crown when a tooth is too damaged for a filling to hold it together. A crown covers the whole visible part of the tooth, so it protects what's left and gives you a strong surface to bite on.",
  listIntro: "Your dentist may recommend a crown for:",
  items: [
    { icon: "alert", lead: "A broken or fractured tooth,", text: "including hairline cracks in back teeth" },
    { icon: "tooth", lead: "A large or failing filling", text: "that leaves too little natural tooth to support it" },
    { icon: "search", lead: "Decay", text: "that has weakened a large part of the tooth" },
    { icon: "firstAid", lead: "A tooth that has had a root canal,", text: "which has lost much of its structure" },
    { icon: "moon", lead: "Heavy wear", text: "from grinding or years of chewing" },
    { icon: "smile", lead: "A stained or chipped front tooth", text: "that bonding or a veneer can't fix well" },
    {
      icon: "implant",
      lead: "Replacing a missing tooth,",
      text: "as the top of a [dental implant](/restorative-dentistry/dental-implants/) or as part of a [dental bridge](/restorative-dentistry/dental-bridges/)",
    },
  ],
  after:
    "If the damage is moderate, an [inlay or onlay](/cosmetic-dentistry/inlays-onlays/) may save more of your natural tooth. Your dentist will explain which option fits after an exam and digital X-rays.",
};

export const crMaterials = {
  title: "Crown Materials: Tooth-Colored & Metal-Free Options",
  paragraphs: [
    "Radiant Smiles offers tooth-colored, metal-free porcelain crowns, shaded to blend with your neighboring teeth. Porcelain suits front teeth especially well, where appearance matters most.",
    "For a tooth with more severe problems, the dentist may suggest porcelain bonded to gold. The gold underneath adds strength, and the porcelain outer layer keeps the crown looking natural. Your dentist will talk through the trade-offs for your tooth and bite.",
  ],
};

export const crPlace = {
  title: "How Dental Crowns Are Placed in Yardley, PA",
  intro:
    "Fitting a dental crown takes a minimum of two visits. It starts with a consultation and exam, where your dentist makes a plan and treats any decay or infection first.",
  visits: [
    {
      title: "Visit 1: preparing the tooth",
      steps: [
        "The tooth is numbed and any decay is removed.",
        "The tooth is shaped so the crown can fit over it.",
        "An impression or digital scan of the tooth is taken for the dental lab.",
        "A temporary crown is fitted to protect the tooth while your crown is made.",
      ],
    },
    {
      title: "Visit 2: fitting your crown",
      steps: [
        "The temporary crown is removed.",
        "The new crown is tried in, and its fit, shape and bite are checked and adjusted.",
        "Once it's right, the crown is cemented in place.",
      ],
    },
  ],
  after: "Radiant Smiles does not make same-day crowns. Each crown is made by a dental lab and fitted at your second visit.",
};

export const crFit = {
  title: "Precise Fit, Aided by Dental Microscopes",
  paragraphs: [
    "A crown protects a tooth when its edges seal tightly against it. Gaps at the edge can trap bacteria and lead to new decay underneath. Radiant Smiles uses high-power dental microscopes, similar to the ones eye surgeons use, for precise fit and finish of restorations, including crowns.",
    "That standard shows up in patient experiences. Candice Coverdale had crowns placed on her two front teeth and wrote in a 5-star review in September 2026:",
  ],
  quote: "Look amazing. The dentist was unhappy with the labs first ones so sent them back. Made sure they were perfect",
  quoteBy: "Candice Coverdale · 5-star review · September 2026",
};

export const crCost: CostBlock = {
  title: "Dental Crown Cost & Insurance",
  paragraphs: [
    "The cost of a dental crown depends on the material, the tooth being treated and whether you need other treatment first, such as a root canal. Your dentist will give you the cost before any work begins, so you can decide with the full picture.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "your PPO plan may pay part of the cost of a crown when it's needed to restore a damaged tooth. We accept many PPO plans, including Anthem Blue Cross, Capital Blue Cross, Delta Dental and Guardian; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "No insurance:", text: "the in-office membership plan is $150 a year and takes 15% off all dental treatment, crowns included." },
    {
      lead: "Financing:",
      text: "[CareCredit](/patient-information/carecredit/) is accepted. Qualifying purchases of $200 or more carry no interest when paid in full within 6 months, subject to credit approval.",
    },
  ],
};

export const crCare = {
  title: "Caring for Your Crown",
  intro:
    "A crown can't decay, but the tooth underneath it still can, especially at the edge where crown and tooth meet. Daily care keeps that edge healthy.",
  items: [
    { icon: "brush", text: "Brush twice a day and floss around the crown every day" },
    { icon: "ban", text: "Avoid chewing ice, pens or other hard objects" },
    { icon: "moon", text: "Wear a [custom night guard](/preventative-care/professional-night-guards/) if you grind or clench at night" },
    {
      icon: "calendarCheck",
      text: "Keep up regular [cleanings and checkups](/preventative-care/teeth-cleaning-and-check-ups/) so the crown and gum can be checked",
    },
  ],
  after: "If your crown feels loose, cracks or your bite feels off, call the office so it can be checked before the tooth underneath is damaged.",
};

export const crFaqs: FaqBlock = {
  title: "Dental Crown FAQs",
  items: [
    {
      question: "How long does a dental crown last?",
      answer:
        "Crowns typically last 5 to 15 years, and with good care many last much longer, some 20 to 30 years. How long yours lasts depends on daily brushing and flossing, regular checkups, the material and habits such as grinding or chewing ice. Decay at the edge of the crown is a common reason a crown needs replacing, so cleanings matter.",
    },
    {
      question: "How many visits does a dental crown take?",
      answer:
        "A dental crown takes at least two visits at Radiant Smiles @ Floral Vale. At the first visit the tooth is shaped, scanned or impressed, and fitted with a temporary crown. At the second visit the finished crown from the lab is tried in, adjusted and cemented in place.",
    },
    {
      question: "Do you offer same-day crowns?",
      answer:
        "No. Radiant Smiles @ Floral Vale does not offer same-day crowns. Each crown is made by a dental lab for a precise fit and finish, then fitted and cemented at a second visit. A temporary crown protects your tooth in between.",
    },
    {
      question: "How much does a dental crown cost?",
      answer:
        "The cost of a dental crown depends on the material, which tooth is treated and whether other treatment is needed first. You'll get the cost before work begins. Your PPO plan may pay part of the cost, and the membership plan and CareCredit financing can help if you don't have insurance.",
    },
    {
      question: "Will my crown look natural?",
      answer:
        "Tooth-colored porcelain crowns are shaded to match your neighboring teeth, so they blend in when you smile. The dentist checks the shape and color at the fitting visit. If a lab-made crown isn't right, it can be sent back and remade before it's cemented, as one patient's front-tooth crowns were.",
    },
  ],
};

export const crCta: ClosingCta = {
  title: "Protect Your Tooth With a Crown",
  text: "A cracked or heavily filled tooth is easier to save before it breaks. Book an exam, and you'll learn whether you need a crown, what it will cost and how soon it can be done.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Dental Fillings ───────────────────────── */

export const fiMeta: PageMeta = {
  path: "/restorative-dentistry/dental-fillings/",
  title: "Dental Fillings in Yardley, PA | Radiant Smiles",
  description:
    "Tooth-colored dental fillings in Yardley, PA. Mercury-free composite that repairs cavities, chips and cracks and blends in. Call (215) 860-4600.",
};

export const fiCrumbs = rdCrumbs("Dental Fillings", fiMeta.path);

export const fiHero: PageHeroContent = {
  h1: "Tooth-Colored Dental Fillings in Yardley, PA",
  intro:
    "A dental filling repairs a tooth damaged by decay, a chip or a crack by replacing the lost part with a durable material. At Radiant Smiles @ Floral Vale, dental fillings in Yardley are made from tooth-colored, mercury-free composite resin, shaped and polished so the repair blends in with the rest of your tooth.",
  buttons: ["appointment", "call"],
};

export const fiProcedureDescription =
  "A dental filling repairs a tooth damaged by decay, a chip or a crack by replacing the lost part with a durable material.";

export const fiSigns = {
  title: "Signs You May Need a Filling",
  intro:
    "Many cavities cause no symptoms at first, which is why they're often found at a routine checkup before you feel anything. As decay grows, you may notice:",
  items: [
    { icon: "thermo", text: "Sensitivity to sweet, hot or cold food and drinks" },
    { icon: "alert", text: "A twinge or pain when you bite down" },
    { icon: "search", text: "A rough edge, hole or dark spot on a tooth" },
    { icon: "apple", text: "Food catching in the same place between teeth" },
    { icon: "tooth", text: "A chipped or cracked tooth" },
  ],
  after:
    "A filling is the usual repair for tooth decay, chipped teeth and cracked teeth when the damage is small to moderate. Catching a cavity early keeps the filling small and saves more of your natural tooth. Regular [cleanings and checkups](/preventative-care/teeth-cleaning-and-check-ups/) with digital X-rays help find decay before it hurts.",
};

export const fiComposite = {
  title: "Tooth-Colored, Mercury-Free Fillings",
  paragraphs: [
    "Radiant Smiles places tooth-colored fillings made of composite resin, a material with no mercury. Composite is an acrylic resin reinforced with a powdered glass filler, and it's matched to the shade of your tooth so the filling is hard to spot.",
  ],
  whyTitle: "Why composite resin",
  why: [
    { lead: "It blends in.", text: "The color is matched to your tooth, so fillings on front and back teeth look natural." },
    { lead: "It bonds to the tooth.", text: "Composite is bonded in place in layers, which helps it seal against the tooth." },
    {
      lead: "Some types release fluoride.",
      text: "Certain composite materials release a small amount of fluoride; ask which material is used for your filling.",
    },
    { lead: "It's mercury-free.", text: "No metal amalgam is used." },
  ],
  after: "Composite can also repair a small chip or crack, rebuilding the edge of a tooth without a crown.",
};

export const fiPlace = {
  title: "How Dental Fillings Are Placed in Yardley",
  intro: "Placing a composite filling usually takes one visit, and the tooth is built up in thin, hardened layers. The steps are:",
  steps: [
    { lead: "Isolate the tooth.", text: "The tooth is kept dry and separated from saliva so the material bonds well." },
    { lead: "Remove the decay.", text: "The damaged part of the tooth is cleaned away." },
    { lead: "Prepare the surface.", text: "An etching gel and bonding agent are applied, then the composite resin is placed." },
    { lead: "Harden each layer.", text: "Each layer is set with a special curing light." },
    { lead: "Shape the filling.", text: "The resin is sculpted to match the natural shape of the tooth." },
    { lead: "Smooth and polish.", text: "The filling is polished and adjusted so your bite feels right." },
  ],
  after:
    "Radiant Smiles uses high-power dental microscopes to check the fit and finish of restorations, so the edges of your filling meet the tooth closely.",
};

export const fiWhich = {
  title: "Filling, Inlay or Crown?",
  intro: "The right repair depends on how much of the tooth is damaged. A filling suits small to moderate cavities, chips and cracks.",
  options: [
    { lead: "Filling:", text: "for decay or damage that leaves plenty of healthy tooth around it.", cover: 1 },
    {
      lead: "[Inlay or onlay](/cosmetic-dentistry/inlays-onlays/):",
      text: "a custom restoration in porcelain, gold or composite for damage too large for a regular filling, made outside the mouth and bonded in place.",
      cover: 2,
    },
    {
      lead: "[Dental crown](/restorative-dentistry/dental-crowns/):",
      text: "a cap over the whole tooth when it's cracked, heavily filled or weakened by decay.",
      cover: 3,
    },
  ],
  after: "Your dentist will show you the X-rays and explain which option fits your tooth.",
};

export const fiAfter = {
  title: "After Your Filling: Aftercare & Preventing New Cavities",
  intro:
    "A composite filling is set hard before you leave, and you can usually go about your day straight after. If your tooth was numbed, wait until the feeling returns before eating so you don't bite your cheek or tongue.",
  listIntro: "To protect your fillings and the rest of your teeth:",
  items: [
    { icon: "brush", text: "Brush after meals and use an antimicrobial mouthwash" },
    { icon: "floss", text: "Floss every night" },
    { icon: "cup", text: "Drink more water and fewer sugary or acidic drinks" },
    { icon: "ban", text: "Avoid smoking" },
    { icon: "calendarCheck", text: "Keep up regular exams and cleanings" },
  ],
  after:
    "If your bite feels high or the tooth stays sensitive for more than a few days, call the office so the filling can be adjusted. See our [oral hygiene](/preventative-care/oral-hygiene/) tips for more ways to prevent decay.",
};

export const fiCost: CostBlock = {
  title: "Filling Cost & Insurance",
  paragraphs: ["The cost of a filling depends on the size of the cavity and which surfaces of the tooth it covers. You'll get the cost before treatment."],
  items: [
    {
      lead: "Insurance:",
      text: "your PPO plan may cover part of the cost of a filling. We accept many PPO plans, including Aetna, Delta Dental and MetLife; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "No insurance:",
      text: "new patients without insurance can start with the $89 New Patient Visit (cleaning, X-ray and exam). The $150-a-year membership plan then takes 15% off all treatment, fillings included.",
    },
    { lead: "Financing:", text: "you can pay with [CareCredit](/patient-information/carecredit/), subject to credit approval." },
  ],
};

export const fiFaqs: FaqBlock = {
  title: "Dental Filling FAQs",
  items: [
    {
      question: "Are your fillings mercury-free?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale uses tooth-colored composite resin for fillings, which contains no mercury. Composite is an acrylic resin reinforced with powdered glass, matched to your tooth's shade. It's bonded to the tooth in layers and hardened with a curing light, so it's set before you leave.",
    },
    {
      question: "Does getting a filling hurt?",
      answer:
        "Most fillings are done with the tooth numbed by local anesthetic, so you feel pressure and vibration rather than pain. Afterward the tooth may feel a little sensitive for a short time. If you're nervous, tell the team when you book; you can bring headphones and music and ask about sedation options.",
    },
    {
      question: "Can a filling fix a chipped or cracked tooth?",
      answer:
        "Often, yes. Tooth-colored composite can rebuild a small chip or seal a minor crack, and it's shaded to match the tooth. Larger cracks, or chips that take away a big part of the tooth, usually need an inlay, onlay or crown instead. Your dentist will check the tooth and X-rays first.",
    },
    {
      question: "How do I know if I need a filling?",
      answer:
        "You may need a filling if you notice sensitivity to sweets, hot or cold, pain when biting, a dark spot or a rough edge. Many cavities cause no symptoms early on, so the most reliable way to know is a dental exam with X-rays, which can find decay before you feel it.",
    },
  ],
};

export const fiCta: ClosingCta = {
  title: "Get a Cavity Fixed Before It Grows",
  text: "Small cavities need small fillings. Book an exam, and if you need a filling, you'll know the cost before anything starts.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Root Canal Therapy ───────────────────────── */

export const rcMeta: PageMeta = {
  path: "/restorative-dentistry/root-canal/",
  title: "Root Canal Treatment in Yardley, PA | Radiant Smiles",
  description:
    "Root canal treatment in Yardley, PA to stop tooth pain and save your natural tooth. Usually two visits, PPO plans accepted. Call (215) 860-4600.",
};

export const rcCrumbs = rdCrumbs("Root Canal Therapy", rcMeta.path);

/** Pain first: the call button leads (handoff), and the hero call fires emergency_call_click */
export const rcHero: PageHeroContent = {
  h1: "Root Canal Treatment in Yardley, PA",
  intro:
    "A root canal saves a tooth whose pulp, the soft tissue inside it, has become infected or inflamed. The dentist removes the damaged pulp, cleans and seals the inside of the tooth, then protects it with a crown. At Radiant Smiles @ Floral Vale, a root canal in Yardley, PA is usually completed in two appointments.",
  more: [
    "In pain right now? Call and ask for a same-day emergency appointment. Slots are kept open every business day and on Saturday mornings.",
  ],
  buttons: [{ label: `Call ${practice.phone.display}`, href: practice.phone.href, track: "emergency_call_click" }, "appointment"],
};

export const rcProcedureDescription = "A root canal saves a tooth whose pulp, the soft tissue inside it, has become infected or inflamed.";

export const rcWhy = {
  title: "Why a Root Canal Saves Your Tooth",
  paragraphs: [
    "A root canal is designed to save you from losing a tooth. The pulp at the center of each tooth holds the nerve, blood vessels and connective tissue. Once the pulp is badly inflamed or infected, it usually can't heal on its own, and the infection can spread to the bone around the root.",
    "Removing the damaged pulp stops the infection while keeping the outer tooth in place. You keep chewing with your own tooth and root, and you avoid the gap an extraction would leave.",
  ],
};

export const rcSigns = {
  title: "Signs You Need a Root Canal",
  intro: "Severe or lingering tooth pain is the most common sign that the pulp is in trouble, but it isn't the only one. Call for an exam if you notice:",
  items: [
    { icon: "moon", lead: "A toothache that won't settle:", text: "sharp pain, sometimes in the middle of the night, that can spread into a general headache" },
    { icon: "alert", lead: "A bump on the gum:", text: "a small swelling near the tooth, or pus in the mouth, can point to an abscess" },
    { icon: "thermo", lead: "Strong pain with hot or cold:", text: "sensitivity that is extreme or lingers after the drink is gone" },
    { icon: "tooth", lead: "A darkening tooth:", text: "a tooth that turns gray or dark can mean the pulp has deteriorated" },
    { icon: "wave", lead: "Swelling or a visible injury:", text: "swelling in the gum or face, or a tooth that was knocked or cracked" },
  ],
  after:
    "These problems usually start with deep decay, a crack or chip, an injury, or a tooth that has had several dental procedures over the years. Only an exam and X-rays can confirm what's going on. Sometimes a tooth needs a root canal before it hurts at all.",
};

export const rcSteps = {
  title: "What Happens During Root Canal Treatment",
  intro: "Root canal treatment is usually a two-appointment procedure, and the first appointment takes up to an hour. Here's what to expect.",
  firstTitle: "First appointment: treating the infection",
  first: [
    {
      lead: "Numbing.",
      text: "The dentist numbs the tooth and the area around it with local anesthesia. Nitrous oxide is available when it's appropriate.",
    },
    { lead: "Opening the tooth.", text: "A small opening is made in the top of the tooth to reach the pulp." },
    { lead: "Removing the pulp.", text: "The infected or inflamed tissue is removed from the pulp chamber and root canals." },
    { lead: "Cleaning and sealing.", text: "The canals are cleaned, shaped and sealed so bacteria can't get back in." },
    { lead: "Temporary protection.", text: "A temporary filling closes the tooth until your next visit." },
  ],
  secondTitle: "Second appointment: preparing for a crown",
  second:
    "At the second appointment, usually within a few weeks of the root canal, the tooth is prepared for a [dental crown](/restorative-dentistry/dental-crowns/) (or restored). The lab-made crown is then fitted at a later visit.",
  after: "Radiant Smiles uses high-power dental microscopes, similar to those eye surgeons use, so the dentist can work in fine detail.",
};

export const rcHurt = {
  title: "Does a Root Canal Hurt?",
  paragraphs: [
    "A root canal is done with the tooth fully numbed by local anesthesia, so most patients feel pressure during treatment rather than pain. The procedure is meant to relieve the pain an infected tooth causes, not add to it.",
    "Most patients can drive themselves home and get back to normal activity right after the appointment. If you're anxious about treatment, tell us when you book. You can bring headphones and music, and ask about sedation options, including nitrous oxide.",
  ],
};

export const rcCrown = {
  title: "Why You Usually Need a Crown After a Root Canal",
  paragraphs: [
    "A tooth that has had a root canal usually needs a crown, because a large part of the tooth is lost to decay, damage and the treatment itself. Without a crown, the remaining tooth can crack when you bite down.",
    "A crown covers the whole visible tooth and holds it together. At Radiant Smiles, crowns usually take two visits and are made in tooth-colored, metal-free materials, with other options available. Crowns are made for a precise fit and finish, with the help of high-power dental microscopes.",
  ],
};

export const rcOr = {
  title: "Root Canal or Extraction?",
  paragraphs: [
    "Whenever a tooth can be saved, keeping it is usually the simpler long-term choice. Removing a tooth leaves a gap that should be filled with an implant, bridge or partial denture, which means more appointments and more cost.",
    "Saving the tooth with a root canal and a crown is often less expensive than removing it and replacing it. Some teeth, though, are too broken or too weakened by gum disease to save. In that case your dentist will explain [tooth extraction](/restorative-dentistry/tooth-extractions/) and your options for [dental implants](/restorative-dentistry/dental-implants/) or other replacements.",
  ],
};

export const rcCost: CostBlock = {
  title: "Root Canal Cost in Yardley, PA",
  paragraphs: [
    "The cost of a root canal depends on which tooth is treated and how severe the infection is. A back molar with several canals takes more work than a front tooth with one. Your dentist will give you the cost, including the crown, before treatment begins.",
  ],
  itemsTitle: "Insurance, membership & financing",
  items: [
    {
      lead: "Insurance:",
      text: "your PPO plan may pay toward root canal treatment. We accept many plans, including Cigna PPO, Delta Dental, Horizon Blue Cross and UnitedHealthcare; call to verify your coverage. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "No insurance:", text: "the $150-a-year membership plan takes 15% off all dental treatment, and an emergency exam with X-ray is $65 for members." },
    {
      lead: "Financing:",
      text: "[CareCredit](/patient-information/carecredit/) gives you 6 months with no interest when a qualifying purchase of $200 or more is paid in full in that time, subject to credit approval.",
    },
  ],
};

export const rcEmergency = {
  title: "When Tooth Pain Is an Emergency",
  paragraphs: [
    "Sudden, severe tooth pain or swelling should be seen quickly. Radiant Smiles keeps same-day emergency slots open every business day, with a 30-minute limited exam to diagnose the problem and start treatment.",
    "Saturday hours run from 8 am to 2 pm. See our [emergency dentistry](/emergency-dentistry/) page for what to do while you wait.",
  ],
  safety: "If swelling spreads to your eye or neck, or you have trouble breathing or swallowing, call 911 or go to the nearest emergency room.",
};

export const rcFaqs: FaqBlock = {
  title: "Root Canal FAQs",
  items: [
    {
      question: "Does a root canal hurt?",
      answer:
        "Usually not during treatment. The tooth is fully numbed with local anesthesia before the dentist starts, so most patients feel pressure rather than pain. The treatment is meant to relieve the pain of an infected tooth. Nitrous oxide is available when appropriate, and you can ask about other sedation options.",
    },
    {
      question: "How long does a root canal take?",
      answer:
        "Root canal treatment is usually a two-appointment procedure. The first appointment, which removes the infected pulp and seals the tooth, takes up to an hour. At the second, usually within a few weeks, the tooth is prepared for a crown, which is fitted at a later visit. Most patients drive home and return to normal activity straight away.",
    },
    {
      question: "How much does a root canal cost?",
      answer:
        "The cost depends on which tooth needs treatment and how severe the infection is, and most treated teeth also need a crown. Radiant Smiles @ Floral Vale gives you the full cost before treatment, accepts many PPO plans, and offers CareCredit financing and a membership plan with 15% off treatment.",
    },
    {
      question: "Do I need a crown after a root canal?",
      answer:
        "Usually, yes. A tooth that has had a root canal has lost much of its structure, so it's more likely to crack without protection. A crown covers and strengthens the tooth. At Radiant Smiles, the tooth is usually prepared for its crown at the second appointment, and the lab-made crown is fitted at a later visit.",
    },
    {
      question: "Can I be seen today for a bad toothache?",
      answer:
        "Often, yes. Radiant Smiles @ Floral Vale keeps same-day emergency slots open every business day and on Saturday mornings. A 30-minute limited exam finds the cause of the pain and starts treatment. Call (215) 860-4600 as early in the day as you can to get a slot.",
    },
  ],
};

export const rcCta: ClosingCta = {
  title: "Stop the Pain & Save Your Tooth",
  text: "The sooner an infected tooth is treated, the better the chance of saving it. Call us for a same-day emergency slot, or request an appointment for an exam.",
  sub: ctaNap,
  buttons: ["call", "appointment"],
};
