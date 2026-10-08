import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type CostBlock } from "./common";

/**
 * Fluoride Treatment. Verbatim from 03 General Dentistry/02 Preventive Care/Fluoride Treatment/02 Content.md
 * (no prices; never "varnish", "gel" or "foam" until the practice confirms: handoff)
 */

export const flMeta: PageMeta = {
  path: "/preventative-care/fluoride/",
  title: "Fluoride Treatment in Yardley, PA | Radiant Smiles",
  description:
    "Professional fluoride treatment in Yardley, PA to strengthen enamel for kids and adults prone to cavities or dry mouth. Takes minutes. (215) 860-4600.",
};

export const flCrumbs = pcCrumbs("Fluoride Treatment", flMeta.path);

export const flHero: PageHeroContent = {
  h1: "Fluoride Treatment in Yardley, PA",
  intro:
    "A professional fluoride treatment is a high-concentration fluoride applied directly to your teeth to strengthen the enamel and help it resist decay. At Radiant Smiles @ Floral Vale, fluoride treatment in Yardley takes just a few minutes and can be added to a regular checkup for children and adults.",
  buttons: ["appointment", "call"],
};

/** Schema: MedicalProcedure description (handoff 3a) */
export const flProcedureDescription =
  "A professional fluoride treatment is a high-concentration fluoride applied directly to your teeth to strengthen the enamel and help it resist decay.";

export const flHow = {
  title: "How Fluoride Protects Teeth",
  paragraphs: [
    "Fluoride helps repair the early damage that acid does to enamel. Every time you eat, bacteria in plaque produce acid that pulls minerals such as calcium and phosphate out of the tooth surface.",
    "Fluoride works like a magnet. It draws those minerals back into the enamel, a process called remineralization. The rebuilt surface forms a harder crystal that stands up better to future acid attacks.",
    "Professional fluoride is much more concentrated than any toothpaste or rinse you can buy over the counter, and it adds to the protection you get from brushing with fluoride toothpaste.",
  ],
};

export const flWho = {
  title: "Who Benefits From Fluoride Treatment in Yardley",
  intro: "Fluoride treatment helps anyone at higher risk of cavities. The dentist may recommend it for:",
  items: [
    { icon: "smile", lead: "Children and teens", text: "with newly erupted permanent teeth" },
    { icon: "tooth", lead: "Adults who get cavities often", text: "" },
    { icon: "ruler", lead: "People with gum recession,", text: "where the exposed root surface decays more easily than enamel" },
    { icon: "drop", lead: "People with dry mouth (xerostomia),", text: "since saliva normally helps protect teeth" },
    { icon: "pill", lead: "People with health conditions or medications", text: "that reduce saliva" },
  ],
  after: "The dentist will explain whether fluoride would help your teeth.",
};

export const flExpect = {
  title: "What to Expect",
  intro: "A fluoride treatment is quick and simple.",
  steps: [
    { icon: "toothClean", text: "Your teeth are cleaned first, usually as part of your checkup." },
    { icon: "drop", text: "The fluoride is applied directly to the surfaces of your teeth." },
    { icon: "timer", text: "It takes just a few minutes, and there's no drilling or numbing." },
    { icon: "cup", text: "The dentist or hygienist tells you how long to wait before eating or drinking." },
  ],
  after: "For young children, it's often part of their regular visit. [Children's dentistry](/preventative-care/child-dentistry/)",
};

export const flNecessary = {
  title: "Is Fluoride Treatment Necessary?",
  paragraphs: [
    "Fluoride treatment isn't necessary for everyone, but it's a quick, simple way to protect teeth that are at higher risk. Children with new permanent teeth, adults with frequent cavities, and anyone with dry mouth or receding gums usually benefit the most.",
    "For deep grooves in back teeth, fluoride works well alongside [dental sealants](/preventative-care/dental-sealants/). Fluoride strengthens the smooth surfaces, while sealants block the grooves where a toothbrush can't reach.",
  ],
};

export const flSafety = {
  title: "Fluoride Safety",
  paragraphs: [
    "Professional fluoride is applied by the dental team in a small, measured amount and is not meant to be swallowed. With children, the team applies it carefully and watches that they don't swallow it.",
    "Tell the dentist if your child takes fluoride tablets or drops, so the total amount can be considered. If you have questions about fluoride for your family, ask at your visit. The dentist will explain why they're recommending it and what it involves.",
  ],
};

export const flHome = {
  title: "Fluoride at Home",
  intro: "Daily habits keep the benefit going between visits:",
  items: [
    { icon: "brush", text: "Brush twice a day with a fluoride toothpaste." },
    { icon: "floss", text: "Floss once a day." },
    { icon: "cup", text: "Cut back on sugary and acidic foods and drinks." },
    { icon: "chat", text: "Ask the dentist whether fluoride tablets or an extra rinse make sense for you." },
  ],
  link: { label: "More oral hygiene tips", href: "/preventative-care/oral-hygiene/" },
};

export const flCost: CostBlock = {
  title: "Fluoride Treatment Cost & Insurance",
  paragraphs: [
    "Many dental plans cover fluoride for children, and some cover it for adults. Coverage depends on your plan, so call (215) 860-4600 to check. We accept many PPO plans, and members of our in-office membership plan ($150 a year) get 15% off dental treatment. [Insurance and payment](/patient-information/insurance-payment-options/)",
  ],
};

export const flFaqs: FaqBlock = {
  title: "Fluoride Treatment FAQs",
  items: [
    {
      question: "Is fluoride treatment necessary?",
      answer:
        "Not for everyone. Fluoride treatment is most useful for people at higher risk of cavities: children with newly erupted permanent teeth, adults who get cavities often, and anyone with dry mouth or gum recession. Your dentist at Radiant Smiles @ Floral Vale will explain whether fluoride would help your teeth.",
    },
    {
      question: "How long does a fluoride treatment take?",
      answer:
        "A professional fluoride treatment takes just a few minutes. It's usually done right after your cleaning, as part of a regular checkup. The fluoride is applied directly to your teeth, with no drilling or numbing, and you'll be told how long to wait before eating or drinking.",
    },
    {
      question: "Is professional fluoride safe for children?",
      answer:
        "Yes, when it's applied by the dental team. Professional fluoride is used in a small, measured amount, applied directly to the teeth and not swallowed. Let the dentist know if your child takes fluoride tablets or drops, so the total amount your child gets can be taken into account.",
    },
    {
      question: "Can adults get fluoride treatment?",
      answer:
        "Yes. Adults who get cavities often, have receding gums or have dry mouth from a health condition or medication can all benefit from professional fluoride. It strengthens the enamel and exposed root surfaces, which helps them resist decay between your regular cleanings.",
    },
  ],
};

export const flCta: ClosingCta = {
  title: "Add Fluoride to Your Next Checkup",
  text: withNap("Request an appointment online, or call and ask whether fluoride makes sense for you or your child."),
  buttons: ["appointment", "call"],
};
