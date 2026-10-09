import type { CostBlock, Point } from "../general/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { ctaNap, RD_PATH } from "./common";

/** Restorative Dentistry hub. Verbatim from 04 Restorative Dentistry/00 Hub/Restorative Dentistry Hub/02 Content.md */

export const rdMeta: PageMeta = {
  path: RD_PATH,
  title: "Restorative Dentist in Yardley, PA | Radiant Smiles",
  description:
    "Restorative dentist in Yardley, PA for implants, crowns, root canals, bridges and dentures. Open Saturdays, 40+ PPO plans. Call (215) 860-4600.",
};

export const rdHubCrumbs = [
  { name: "Home", path: "/" },
  { name: "Restorative Dentistry", path: RD_PATH },
];

export const rdHero: PageHeroContent = {
  h1: "Restorative Dentist in Yardley, PA",
  intro:
    "Restorative dentistry repairs damaged teeth and replaces missing ones, so you can chew, speak and smile comfortably again. As your restorative dentist in Yardley, Radiant Smiles @ Floral Vale provides fillings, crowns, root canal therapy, dental implants, bridges, dentures, extractions and gum disease treatment at 117 Floral Vale Boulevard, with Saturday hours from 8 am to 2 pm.",
  more: [
    "Two Temple-trained dentists, Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria, plan and place your restorations here, using high-power dental microscopes for a precise fit.",
  ],
  buttons: ["appointment", "call"],
};

/** Schema: the 13 child pages (handoff ItemList names) */
export const rdItemList = [
  { name: "Dental Crowns", path: "/restorative-dentistry/dental-crowns/" },
  { name: "Dental Fillings", path: "/restorative-dentistry/dental-fillings/" },
  { name: "Root Canal Therapy", path: "/restorative-dentistry/root-canal/" },
  { name: "Dental Implants", path: "/restorative-dentistry/dental-implants/" },
  { name: "Dental Bridges", path: "/restorative-dentistry/dental-bridges/" },
  { name: "Dentures", path: "/restorative-dentistry/dentures/" },
  { name: "Partial Dentures", path: "/restorative-dentistry/dentures/partial-dentures/" },
  { name: "Immediate Dentures", path: "/restorative-dentistry/dentures/immediate-dentures/" },
  { name: "Implant-Retained Dentures", path: "/restorative-dentistry/dentures/implant-retained-dentures/" },
  { name: "Denture Relines & Repairs", path: "/restorative-dentistry/dentures/denture-relines/" },
  { name: "Tooth Extractions", path: "/restorative-dentistry/tooth-extractions/" },
  { name: "Wisdom Teeth Removal", path: "/restorative-dentistry/wisdom-teeth-removal/" },
  { name: "Periodontal Services", path: "/restorative-dentistry/periodontal-services/" },
];

export const rdRepair = {
  title: "Repairing Damaged Teeth: Fillings, Inlays & Crowns",
  intro:
    "The right repair for a damaged tooth depends on how much healthy tooth is left. A small cavity needs far less than a tooth that has cracked through a large old filling. After an exam and digital X-rays, your dentist will show you what they found and explain the options.",
  items: [
    {
      lead: "[Tooth-colored fillings](/restorative-dentistry/dental-fillings/):",
      text: "composite resin fillings for cavities, chips and small cracks. They're mercury-free and shaded to match your tooth.",
      damage: 1,
    },
    {
      lead: "[Inlays and onlays](/cosmetic-dentistry/inlays-onlays/):",
      text: "custom restorations in porcelain, gold or composite for teeth with too much damage for a filling, but not enough to need a full crown.",
      damage: 2,
    },
    {
      lead: "[Dental crowns](/restorative-dentistry/dental-crowns/):",
      text: "a custom cap that covers and protects a cracked, worn or heavily filled tooth, or a tooth that has had a root canal. Crowns here usually take two visits.",
      damage: 3,
    },
  ],
  after:
    "Fixing a tooth early usually keeps the treatment smaller. A cavity caught at a checkup can often be filled in one visit; the same cavity left for a few years may need a crown or a root canal.",
};

export const rdSave = {
  title: "Saving Infected Teeth With Root Canal Therapy",
  paragraphs: [
    "A root canal saves a tooth whose inner pulp has become infected or inflamed, so you can keep your natural tooth instead of having it pulled. The pulp holds the tooth's nerve, blood vessels and connective tissue. Deep decay, a crack or an injury can let bacteria reach it.",
    "Common warning signs include a toothache that wakes you at night, lingering pain with hot or cold, a bump on the gum near the tooth, and a tooth that turns darker. [Root canal therapy](/restorative-dentistry/root-canal/) usually takes two appointments, and most treated teeth then need a crown to protect what's left.",
    "If you're in pain right now, see our [emergency dentistry](/emergency-dentistry/) page. Same-day emergency slots are kept open every business day.",
  ],
};

export const rdReplace = {
  title: "Replacing Missing Teeth: Implants, Bridges & Dentures",
  intro:
    "You have three main ways to replace a missing tooth: a dental implant, a dental bridge or a denture. Each one suits a different situation, and the choice depends on how many teeth are missing, the health of the teeth around the gap and the bone underneath.",
  items: [
    {
      art: "implant",
      lead: "[Dental implants](/restorative-dentistry/dental-implants/):",
      text: "a small titanium post placed in the jawbone that replaces the tooth's root and holds a crown. The office has cone beam CT (3D) imaging, which can be used to assess bone before implant treatment. Our current offer is $500 off the regular $3,500 fee for an implant, abutment and crown, with a free consultation and second opinion.",
    },
    {
      art: "bridge",
      lead: "[Dental bridges](/restorative-dentistry/dental-bridges/):",
      text: "a fixed replacement tooth held in place by the natural teeth on either side of the gap. A bridge usually takes two or three appointments.",
    },
    {
      art: "denture",
      lead: "[Dentures](/restorative-dentistry/dentures/):",
      text: "removable replacement teeth for patients missing several or all of their teeth. Options include full, [partial](/restorative-dentistry/dentures/partial-dentures/) and [immediate dentures](/restorative-dentistry/dentures/immediate-dentures/).",
    },
    {
      art: "overdenture",
      lead: "[Implant-retained dentures](/restorative-dentistry/dentures/implant-retained-dentures/):",
      text: "dentures that attach to two or more implants, so they move less when you eat and talk.",
    },
  ],
  after: "Replacing a tooth matters for more than looks. A gap can let neighboring teeth drift and makes chewing harder on that side.",
};

export const rdDentureCare = {
  title: "Denture Care, Relines & Repairs",
  paragraphs: [
    "Dentures need regular attention because your gums and jawbone slowly change shape over time. A denture that fit well at first can start to feel loose or rub.",
    "An annual denture exam with Dr. Bhalala or Dr. Gadria checks the fit, your bite and the health of your gums, and includes an oral cancer screening.",
    "When a denture loosens, a reline reshapes the inside to fit your gums again. A rebase replaces the whole pink base while keeping the teeth. A cracked or broken denture can often be repaired the same day.",
    "See [denture relines and repairs](/restorative-dentistry/dentures/denture-relines/) for the details.",
  ],
};

export const rdExtract = {
  title: "Tooth Extractions & Wisdom Teeth",
  intro:
    "Sometimes the healthiest choice is to remove a tooth. Severe decay, advanced gum disease, a tooth broken beyond repair or a tooth that is badly positioned can all make an extraction the safer option.",
  cards: [
    {
      icon: "tooth",
      text: "[Tooth extractions](/restorative-dentistry/tooth-extractions/) are done under local anesthetic, so you feel pressure but not sharp pain. Your dentist will talk you through replacement options before the tooth comes out, because an implant or immediate denture may need to be planned in advance.",
    },
    {
      icon: "xray",
      text: "[Wisdom teeth removal](/restorative-dentistry/wisdom-teeth-removal/) starts with an exam and X-rays to see how the teeth are positioned. Wisdom teeth that are trapped, partly erupted or crowding other teeth can cause infection and damage, and they're often easier to remove in the mid-teens to early twenties.",
    },
  ],
};

export const rdGum = {
  title: "Treating Gum Disease",
  paragraphs: [
    "Gum disease is an infection of the tissue and bone that hold your teeth in place, and left untreated it can loosen teeth until they're lost. Bleeding when you brush, red or puffy gums, bad breath that won't go away and gums pulling back from your teeth are all signs to get checked.",
    "[Periodontal services](/restorative-dentistry/periodontal-services/) here are conservative. Treatment usually starts with a [deep cleaning](/preventative-care/deep-teeth-cleaning/) (scaling and root planing), and can include Arestin antibiotic placed in deep pockets and [laser gum therapy](/preventative-care/gum-disease-laser-therapy/).",
    "Surgery is limited to the areas where it's truly needed. Regular [periodontal maintenance](/preventative-care/periodontal-maintenance/) visits then help keep the infection under control.",
  ],
  path: ["Deep cleaning", "Arestin", "Laser gum therapy", "Maintenance"],
};

export const rdWhich = {
  title: "Which Restorative Treatment Do You Need?",
  intro:
    "The table below is a starting point. Your dentist will recommend treatment only after examining your teeth and gums and reviewing your X-rays.",
  head: ["Your situation", "Options to discuss"],
  rows: [
    ["A small cavity, chip or crack", "Tooth-colored filling"],
    ["Moderate damage to the chewing surface", "Inlay or onlay"],
    ["A cracked, worn or heavily filled tooth", "Crown"],
    ["Severe tooth pain, swelling or a gum bump", "Root canal, then usually a crown"],
    ["A tooth that can't be saved", "Extraction, then a plan to replace it"],
    ["One missing tooth", "Implant or bridge"],
    ["Several missing teeth", "Partial denture, bridge or implants"],
    ["All teeth missing in one jaw", "Full denture or implant-retained denture"],
    ["Bleeding or receding gums", "Deep cleaning and gum treatment"],
  ],
};

export const rdMagnify = {
  title: "Choosing a Restorative Dentist in Yardley Who Works Under Magnification",
  intro:
    "Restorations last longer when their edges fit the tooth closely, and fit depends on what the dentist can see. Radiant Smiles uses high-power dental microscopes, similar to the ones eye surgeons use, to check the fit and finish of crowns, fillings and bridges in fine detail.",
  listIntro: "The office also uses:",
  items: [
    { icon: "layers", lead: "Cone beam CT:", text: "3D images of the jawbone and nerves, which can be used to assess bone before implant treatment." },
    { icon: "camera", lead: "iTero intraoral scanner:", text: "digital impressions without a mouthful of impression material." },
    { icon: "xray", lead: "Digital X-rays:", text: "about one-sixth the radiation of conventional film X-rays." },
    { icon: "bolt", lead: "Dental lasers:", text: "for gum care and other soft-tissue procedures." },
  ],
  more: "You can read more about each tool on our [advanced technology](/patient-information/care-and-comfort/advanced-technology/) page.",
  story:
    "Precision also means sending work back when it isn't right. When one patient's front crowns came back from the lab, the dentist wasn't happy with the first set and had them remade until they were right.",
};

export const rdDentists = {
  title: "Meet Your Restorative Dentists",
  people: [
    {
      key: "drBhalala",
      text: "[Dr. Urvishkumar Bhalala](/about-us/dr-urvishkumar-bhalala/) graduated from Temple University Kornberg School of Dentistry and worked at several practices before opening his own. He keeps learning new procedures so patients benefit from current techniques.",
    },
    {
      key: "drGadria",
      text: "[Dr. Jaspreet Gadria](/about-us/dr-jaspreet-gadria-dmd/) earned her DMD with high honors from Temple University's Kornberg School of Dentistry, after a BDS from Amritsar, India. Dr. Gadria focuses on general, cosmetic and restorative dentistry, and speaks English, Punjabi and some Hindi.",
    },
  ],
} as const;

export const rdCost: CostBlock = {
  title: "Paying for Restorative Care",
  paragraphs: [
    "You'll know the cost before treatment starts. After your exam, the office explains what was found, what each option costs and what your insurance is likely to cover.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "we accept many PPO plans, including Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife and UnitedHealthcare. Coverage depends on your plan, so call to verify. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "No insurance:",
      text: "the in-office membership plan costs $150 a year ($75 for each additional family member), covers two cleanings, exams and X-rays, and takes 15% off all dental treatment.",
    },
    {
      lead: "Financing:",
      text: "[CareCredit](/patient-information/carecredit/) offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval.",
    },
    { lead: "Offers:", text: "current savings on implants and other care are listed on our [special offers](/special-offers/) page." },
  ] satisfies Point[],
  after: [
    "Payment is due at the time of service. The office accepts cash, check, Visa, MasterCard, Discover, American Express and CareCredit.",
  ],
};

export const rdFaqs: FaqBlock = {
  title: "Restorative Dentistry FAQs",
  items: [
    {
      question: "What is restorative dentistry?",
      answer:
        "Restorative dentistry is the part of dentistry that repairs damaged teeth and replaces missing ones. It includes fillings, crowns, root canal therapy, bridges, dental implants, dentures, extractions and gum disease treatment. The goal is a mouth that works well, feels comfortable and looks natural, using your own teeth wherever they can be saved.",
    },
    {
      question: "Who provides restorative care at Radiant Smiles @ Floral Vale?",
      answer:
        "Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria provide restorative dentistry at Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. Both trained at Temple University's Kornberg School of Dentistry. They use high-power dental microscopes to check the fit and finish of crowns, fillings and bridges.",
    },
    {
      question: "What are my options for replacing a missing tooth?",
      answer:
        "The main options are a dental implant, a dental bridge or a partial denture. An implant replaces the root and doesn't rely on neighboring teeth. A bridge is anchored to the teeth beside the gap. A partial denture is removable. Your dentist will recommend one after examining your teeth, gums and jawbone.",
    },
    {
      question: "Does insurance cover restorative dentistry?",
      answer:
        "Often in part, depending on your plan. Radiant Smiles accepts many PPO plans, including Delta Dental, Cigna PPO and MetLife, and the team can help you check your benefits before treatment. Without insurance, the $150-a-year membership plan takes 15% off all dental treatment, and CareCredit financing is available.",
    },
    {
      question: "Can I get restorative work done on a Saturday?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale is open Saturdays from 8 am to 2 pm, as well as weekdays. Saturday appointments suit patients who work during the week. Call (215) 860-4600 to ask which treatments can be scheduled on a Saturday and what times are open.",
    },
  ],
};

export const rdCta: ClosingCta = {
  title: "Book a Restorative Consultation in Yardley",
  text: "Tell us what's bothering you, whether that's a broken tooth, a gap or a denture that no longer fits. We'll examine your teeth, explain your options and give you the cost before anything starts.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};
