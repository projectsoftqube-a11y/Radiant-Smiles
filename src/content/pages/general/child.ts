import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type Point } from "./common";

/**
 * Children's Dentistry. Verbatim from 03 General Dentistry/04 Childrens Dentistry/Child Dentistry/02 Content.md
 * ("pediatric dentist" only in the one FAQ; no child photos without consent; the $75 rate never
 * shown on its own: handoff)
 */

export const cdMeta: PageMeta = {
  path: "/preventative-care/child-dentistry/",
  title: "Children's Dentist in Yardley, PA | Kids Dental Care",
  description:
    "Children's dentist in Yardley, PA: gentle first visits from age one, cleanings, fluoride and sealants for kids and teens. Call (215) 860-4600.",
};

export const cdCrumbs = pcCrumbs("Children's Dentistry", cdMeta.path);

export const cdHero: PageHeroContent = {
  h1: "Children's Dentist in Yardley, PA",
  intro:
    "A children's dentist checks and cleans your child's teeth, teaches healthy habits, and catches small problems before they hurt. At Radiant Smiles @ Floral Vale, your children's dentist in Yardley sees kids from their first visit, just after their first birthday, through their teens, in the same office where parents see Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria.",
  buttons: ["appointment", "call"],
};

export const cdHeroPoints: Point[] = [
  { lead: "First visit:", text: "just after your child's first birthday" },
  { lead: "Saturday appointments:", text: "8 am to 2 pm, outside school hours" },
  { lead: "Family membership:", text: "$150 a year for the first member, $75 for each additional family member" },
];

/** Schema: Service description (handoff 3a) */
export const cdServiceDescription =
  "A children's dentist checks and cleans your child's teeth, teaches healthy habits, and catches small problems before they hurt.";

export const cdFirst = {
  title: "Your Child's First Visit",
  intro:
    "Your child's first dental visit should be just after their first birthday. By then, the first teeth are in, and an early visit lets your child get used to the dental chair before there's ever a problem.",
  listIntro: "At the first visit, the dentist will:",
  items: [
    { icon: "search", text: "Gently examine your child's teeth and gums" },
    { icon: "xray", text: "Take X-rays if they're needed" },
    { icon: "toothClean", text: "Clean your child's teeth" },
    { icon: "drop", text: "Apply topical fluoride to help protect the enamel" },
    { icon: "brush", text: "Show you how to care for your child's teeth at home" },
  ],
  after: "The dentist takes it at your child's pace and explains each step in words they understand.",
  teeth: {
    title: "When baby teeth and adult teeth come in",
    text: "Baby teeth usually start to appear between 6 and 8 months, with the bottom front teeth first. All 20 baby teeth are usually in by about age two and a half. Permanent teeth begin coming in around ages 5 to 6.",
  },
};

export const cdCheckups = {
  title: "Cleanings & Checkups With Our Children's Dentist in Yardley",
  text: "Kids need checkups and cleanings twice a year, just like adults. Each visit includes an exam, a gentle cleaning and simple tips your child can follow, such as how long to brush and where to aim the brush. Regular visits make each one easier, because your child knows what to expect. [What happens at a cleaning and checkup](/preventative-care/teeth-cleaning-and-check-ups/)",
};

export const cdProtect = {
  title: "Fluoride & Sealants",
  intro: "Fluoride and sealants are the two simplest ways to help keep cavities out of a child's teeth.",
  items: [
    {
      icon: "drop",
      lead: "[Fluoride treatment](/preventative-care/fluoride/):",
      text: "professional-strength fluoride is applied to the teeth in a few minutes. It's especially useful for children with newly erupted permanent teeth.",
    },
    {
      icon: "shield",
      lead: "[Dental sealants](/preventative-care/dental-sealants/):",
      text: "a thin, tooth-colored coating is bonded to the chewing surfaces of the back teeth, sealing the deep grooves where food and bacteria get trapped.",
    },
  ],
  after: "The dentist will tell you whether your child would benefit from either.",
};

export const cdHome = {
  title: "Preventing Cavities at Home",
  intro:
    "What your child eats, and how often, matters too. Every time they eat, the bacteria in their mouth produce acid that attacks the teeth for a while afterwards. These habits help:",
  items: [
    { icon: "clock", text: "Keep meals and snacks to set times instead of grazing all day." },
    { icon: "calendar", text: "Make sweets part of a meal, not a snack on their own." },
    { icon: "cup", text: "Choose nutritious snacks, and watch sugary drinks, including juice." },
    { icon: "ban", text: "Avoid sticky foods that cling to teeth." },
    { icon: "brush", text: "Help with brushing and flossing until your child can do it well alone." },
  ],
  after: "Our [oral hygiene tips](/preventative-care/oral-hygiene/) show the brushing and flossing technique step by step.",
};

export const cdFun = {
  title: "Making Visits Fun",
  intro: "A relaxed child has an easier visit. A little preparation at home helps:",
  items: [
    { icon: "book", text: "Read a children's book about going to the dentist together." },
    { icon: "chat", text: "Talk through what the dentist will do: count teeth, take pictures and clean them." },
    { icon: "smile", text: "Speak positively about the dentist, and avoid words like \"hurt\" or \"shot\"." },
    { icon: "home", text: "Ask us about a short preview of the office before the first appointment." },
  ],
  after: "The dentists have experience working with children and keep the mood calm and friendly.",
};

export const cdFamily = {
  title: "Family Appointments",
  text: "The whole family can see the same dentists in one Yardley office. If you'd like your children seen close together, or alongside your own checkup, mention it when you call and we'll look for times that work together. [Family dentistry](/family-dentistry/)",
  payTitle: "Paying for your child's visits:",
  pay: [
    "We accept many PPO plans, including Delta Dental, Cigna PPO, Guardian and MetLife. Coverage depends on your plan.",
    "Our in-office membership plan is $150 a year for the first person and $75 for each additional family member. It covers 2 cleanings, exams and X-rays a year, plus 15% off treatment.",
  ],
};

export const cdFaqs: FaqBlock = {
  title: "Children's Dentistry FAQs",
  items: [
    {
      question: "When should a child first see a dentist?",
      answer:
        "A child should first see a dentist just after their first birthday. At this visit, the dentist at Radiant Smiles @ Floral Vale gently checks the teeth and gums, may clean them and apply fluoride, and shows parents how to care for the new teeth at home. Starting early makes later visits easier.",
    },
    {
      question: "Is a children's dentist the same as a pediatric dentist?",
      answer:
        "Not exactly. A pediatric dentist has completed extra specialty training in treating children. Dr. Bhalala and Dr. Gadria are general dentists who see children as part of family care, from the first visit through the teen years. If your child ever needs specialty care, we'll explain why and talk through your options.",
    },
    {
      question: "How can I prepare my child for a dental visit?",
      answer:
        "Keep it positive and simple. Read a book about the dentist together, explain that the dentist will count and clean their teeth, and avoid scary words like \"hurt\" or \"shot\". Ask us about a short look around the office before the first appointment, so the room feels familiar.",
    },
    {
      question: "Do kids need fluoride and sealants?",
      answer:
        "Many do. Professional fluoride helps strengthen enamel, especially on newly erupted permanent teeth, and sealants protect the deep grooves of back teeth where cavities often start. The dentist will check your child's teeth and recommend either one only if it would help.",
    },
    {
      question: "What if my child has a toothache or chipped tooth?",
      answer:
        "Call (215) 860-4600. We reserve same-day emergency appointments every business day and see patients on Saturdays from 8 am to 2 pm. Keep any broken pieces, rinse your child's mouth with warm water, and use a cold compress on the cheek if there's swelling.",
    },
  ],
};

export const cdCta: ClosingCta = {
  title: "Book Your Child's Visit in Yardley",
  text: withNap("Request an appointment online, or call and we'll find a time that works around school."),
  buttons: ["appointment", "call"],
};
