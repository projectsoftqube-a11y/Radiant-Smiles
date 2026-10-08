import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type CostBlock } from "./common";

/** Dental Sealants. Verbatim from 03 General Dentistry/02 Preventive Care/Dental Sealants/02 Content.md (no prices: handoff) */

export const dsMeta: PageMeta = {
  path: "/preventative-care/dental-sealants/",
  title: "Dental Sealants in Yardley, PA | Radiant Smiles",
  description:
    "Dental sealants in Yardley, PA: a thin, tooth-colored coating that seals the grooves of back teeth against cavities, for kids and adults. (215) 860-4600.",
};

export const dsCrumbs = pcCrumbs("Dental Sealants", dsMeta.path);

export const dsHero: PageHeroContent = {
  h1: "Dental Sealants in Yardley, PA",
  intro:
    "A dental sealant is a thin, tooth-colored coating painted onto the chewing surfaces of the back teeth to seal the deep grooves where cavities often start. At Radiant Smiles @ Floral Vale, dental sealants in Yardley take a few minutes per tooth and are available for children and adults.",
  buttons: ["appointment", "call"],
};

/** Schema: MedicalProcedure description (handoff 3a) */
export const dsProcedureDescription =
  "A dental sealant is a thin, tooth-colored coating painted onto the chewing surfaces of the back teeth to seal the deep grooves where cavities often start.";

export const dsWhat = {
  title: "What Sealants Are",
  paragraphs: [
    "Sealants are a protective layer of tooth-colored acrylic that bonds to the chewing surfaces of your molars and premolars. Those back teeth have deep pits and grooves. Food and bacteria settle into them, and the bristles of a toothbrush are often too wide to clean them out.",
    "A sealant fills and smooths those grooves, so there's less for plaque to cling to. Because it's tooth-colored, it's hard to see when you smile.",
  ],
};

export const dsWho = {
  title: "Who Needs Dental Sealants",
  intro: "Sealants are most often placed on children's back teeth, but adults can benefit too. The dentist may recommend them if:",
  items: [
    "Your child's permanent molars have recently come in",
    "The back teeth have deep grooves that are hard to keep clean",
    "You or your child get cavities in the chewing surfaces often",
    "The grooves don't have a cavity yet",
  ],
  after:
    "Sealants are meant for teeth without cavities. Very early weak spots can sometimes be sealed, but a cavity needs treating first. [Children's dentistry](/preventative-care/child-dentistry/)",
};

export const dsProcess = {
  title: "The Sealant Process",
  intro: "Placing a sealant is quick and usually needs no drilling or numbing.",
  steps: [
    { icon: "toothClean", lead: "Clean:", text: "the tooth is cleaned and dried." },
    { icon: "layers", lead: "Prepare:", text: "the chewing surface is prepared so the sealant bonds well." },
    { icon: "drop", lead: "Paint on:", text: "the sealant is painted into the grooves." },
    { icon: "shield", lead: "Set:", text: "it hardens into a thin protective shield." },
    { icon: "check", lead: "Check:", text: "the dentist checks your bite so it feels normal." },
  ],
  after: "Each tooth takes a few minutes. You can eat and drink normally afterwards.",
};

export const dsLast = {
  title: "How Long Sealants Last",
  text: "A sealant usually lasts several years before it needs to be reapplied. Your sealants can be checked at your regular checkups. If one is worn or chipped, it can be touched up or reapplied, which keeps the protection going.",
  listIntro: "To get the most from sealants:",
  tips: [
    { icon: "calendarCheck", text: "Keep up your checkups twice a year, so the dentist can check them." },
    { icon: "ban", text: "Avoid chewing ice and hard candy." },
    {
      icon: "brush",
      text: "Keep brushing twice a day and flossing once a day. Sealants protect the grooves, not the sides of your teeth.",
    },
  ],
};

export const dsTogether = {
  title: "Sealants & Fluoride Work Together",
  text: "Sealants and fluoride protect different parts of the tooth. Sealants block the grooves on the chewing surface. [Fluoride treatment](/preventative-care/fluoride/) strengthens the smooth surfaces and the enamel as a whole. The dentist may suggest both for a child who is prone to cavities.",
};

export const dsCost: CostBlock = {
  title: "Sealant Cost & Insurance",
  paragraphs: [
    "Many dental plans cover sealants for children, and coverage for adults varies. Your cost depends on your plan and how many teeth are sealed, so call (215) 860-4600 to check. We accept many PPO plans. Members of our in-office membership plan, which is $150 a year, get 15% off dental treatment. [Insurance and payment](/patient-information/insurance-payment-options/)",
  ],
};

export const dsFaqs: FaqBlock = {
  title: "Dental Sealant FAQs",
  items: [
    {
      question: "Are dental sealants worth it?",
      answer:
        "For many children and adults with deep grooves in their back teeth, yes. A sealant takes a few minutes per tooth, needs no drilling, and protects the chewing surfaces where cavities often start. Sealing a healthy tooth is simpler than filling one later. Your dentist will tell you whether your teeth would benefit.",
    },
    {
      question: "How long do dental sealants last?",
      answer:
        "Dental sealants usually last several years before they need to be reapplied. They can be checked at your regular checkups at Radiant Smiles @ Floral Vale, and a worn or chipped sealant can be touched up or reapplied so the tooth stays protected.",
    },
    {
      question: "Can adults get dental sealants?",
      answer:
        "Yes. Sealants are most common on children's back teeth, but adults with deep grooves and no cavities in those teeth can benefit too. The dentist will check your molars at your next visit and tell you if sealants would help.",
    },
    {
      question: "Does getting a sealant hurt?",
      answer:
        "Getting a sealant is usually comfortable and needs no numbing or drilling. The tooth is cleaned and dried, the sealant is painted on, and it hardens in place. Each tooth takes a few minutes, and you can eat and drink normally afterwards.",
    },
  ],
};

export const dsCta: ClosingCta = {
  title: "Ask About Dental Sealants in Yardley",
  text: withNap("Request an appointment online, or call and ask whether sealants would help you or your child."),
  buttons: ["appointment", "call"],
};
