import type { CostBlock } from "../general/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { ctaNap, rdCrumbs } from "./common";

/**
 * Replacing missing teeth: Dental Bridges and Dental Implants.
 * Verbatim from 04 Restorative Dentistry/03 Replace Missing Teeth/*
 * Implant offer wording must match /special-offers/; never a net price (handoff).
 */

/* ───────────────────────── Dental Bridges ───────────────────────── */

export const brMeta: PageMeta = {
  path: "/restorative-dentistry/dental-bridges/",
  title: "Dental Bridges in Yardley, PA | Radiant Smiles",
  description:
    "Dental bridges in Yardley, PA fill the gap from a missing tooth with a fixed replacement in two or three visits. Compare bridges and implants.",
};

export const brCrumbs = rdCrumbs("Dental Bridges", brMeta.path);

export const brHero: PageHeroContent = {
  h1: "Dental Bridges in Yardley, PA",
  intro:
    "A dental bridge replaces one or more missing teeth with an artificial tooth held in place by the natural teeth on either side of the gap, called abutment teeth. At Radiant Smiles @ Floral Vale in Yardley, PA, a bridge usually takes two or three appointments and, with good care, should last seven to ten years or longer.",
  more: ["Metal-free, tooth-colored bridges are available, and Radiant Smiles uses high-power dental microscopes for precise fit and finish."],
  buttons: ["appointment", "call"],
};

export const brProcedureDescription =
  "A dental bridge replaces one or more missing teeth with an artificial tooth held in place by the natural teeth on either side of the gap, called abutment teeth.";

export const brHow = {
  title: "How a Dental Bridge Works",
  intro:
    'A bridge "bridges" the gap left by a missing tooth by attaching a replacement tooth to the healthy teeth next to it. The supporting teeth carry the bite, so the new tooth feels solid when you chew.',
  fixed: {
    title: "Fixed bridges",
    intro: "A fixed bridge stays in your mouth and can't be taken out. It's held in place in one of two ways:",
    items: [
      {
        lead: "Crowns on the abutment teeth:",
        text: "the teeth beside the gap are shaped and covered with crowns, which are joined to the replacement tooth.",
      },
      {
        lead: "Bonded to the abutment teeth:",
        text: "the replacement tooth is bonded directly to the backs of the neighboring teeth, which needs less shaping.",
      },
    ],
  },
  removable: {
    title: "Removable bridges",
    text: "A removable bridge clips to the neighboring teeth with metal clasps or precision attachments, and you take it out to clean it.",
  },
  materials: {
    title: "Bridge materials",
    text: "Bridges can be made from porcelain, gold alloys, non-precious alloys or a combination. Porcelain is often bonded to a precious or non-precious metal for strength, and metal-free options are available when appearance matters most.",
  },
};

export const brCandidate = {
  title: "Are You a Good Candidate for a Bridge?",
  intro: "You may be a good candidate for a dental bridge if you:",
  items: [
    { icon: "tooth", text: "Are missing one or more adult teeth" },
    { icon: "shield", text: "Have strong, healthy teeth on either side of the gap to support the bridge" },
    { icon: "heart", text: "Are in good oral and general health" },
    { icon: "brush", text: "Will keep up daily brushing, flossing and regular checkups" },
  ],
  after:
    "If the teeth next to the gap are weak or the gums need treatment, the dentist will talk you through other options, such as an implant or a partial denture.",
};

export const brVersus = {
  title: "Dental Bridge vs. Implant",
  intro:
    "A bridge relies on the teeth beside the gap for support, while an implant replaces the root with a post in the jawbone and stands on its own. Both give you a fixed replacement tooth; the right choice depends on your teeth, gums, bone and budget.",
  head: ["", "Dental bridge", "Dental implant"],
  rows: [
    ["Supported by", "The teeth on either side of the gap", "A titanium post in the jawbone"],
    ["Changes neighboring teeth?", "Usually, they're shaped for crowns", "No"],
    ["Helps preserve jawbone?", "No", "Yes"],
    ["Typical timeline", "Two or three appointments", "Usually 6 to 8 months"],
    ["Published price", "Given at your exam", "$3,500 regular for implant, abutment and crown; currently $500 off"],
  ],
  after:
    "A bridge can make sense when the neighboring teeth already need crowns, or when you'd like the replacement finished in a few appointments rather than several months. An implant may suit you better if the teeth beside the gap are healthy and you'd rather not have them shaped. Read more about [dental implants](/restorative-dentistry/dental-implants/).",
};

export const brSteps = {
  title: "Getting a Dental Bridge in Yardley, PA",
  intro: "A dental bridge usually takes two or three appointments. The exact plan depends on the type of bridge.",
  steps: [
    {
      icon: "search",
      lead: "Exam and planning.",
      text: "Your dentist examines the gap and the teeth beside it, takes digital X-rays and explains your options and the cost.",
    },
    {
      icon: "layers",
      lead: "Preparing the abutment teeth.",
      text: "For a crown-supported bridge, the neighboring teeth are numbed and shaped, and an impression or digital scan is taken. A temporary bridge protects them while the lab makes yours.",
    },
    { icon: "check", lead: "Fitting the bridge.", text: "The finished bridge is tried in, adjusted for your bite and cemented in place." },
  ],
  after:
    "If one of the supporting teeth needs other treatment first, such as a filling or [dental crown](/restorative-dentistry/dental-crowns/) work, that's done before the bridge is made.",
};

export const brCare = {
  title: "Caring for Your Bridge & How Long It Lasts",
  intro: "A dental bridge should last seven to ten years or even longer with proper care. The supporting teeth are the key: if they stay healthy, the bridge stays secure.",
  items: [
    { icon: "brush", text: "Brush twice a day, including around the abutment teeth" },
    { icon: "floss", text: "Clean under the replacement tooth every day with floss or a floss threader" },
    { icon: "calendarCheck", text: "Keep up regular cleanings and exams so the bridge and gums can be checked" },
    { icon: "ban", text: "Avoid chewing ice or other very hard objects" },
  ],
};

export const brCost: CostBlock = {
  title: "Dental Bridge Cost & Insurance",
  paragraphs: ["The cost of a bridge depends on how many teeth it replaces, the material and the type of bridge. Your dentist will give you the full cost before treatment starts."],
  items: [
    {
      lead: "Insurance:",
      text: "your PPO plan may cover part of a bridge. We accept many PPO plans, including Ameritas, Cigna PPO, Delta Dental and Humana; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "No insurance:", text: "the $150-a-year membership plan takes 15% off all dental treatment." },
    {
      lead: "Financing:",
      text: "[CareCredit](/patient-information/carecredit/) lets you spread the cost: no interest if a qualifying purchase of $200 or more is paid in full within 6 months, subject to credit approval.",
    },
  ],
};

export const brFaqs: FaqBlock = {
  title: "Dental Bridge FAQs",
  items: [
    {
      question: "How long does a dental bridge last?",
      answer:
        "A dental bridge should last seven to ten years or even longer with proper care. The biggest factor is the health of the supporting teeth, so daily brushing, cleaning under the bridge and regular checkups matter. Decay or gum disease around an abutment tooth is a common reason a bridge needs replacing.",
    },
    {
      question: "Is a bridge or an implant better for a missing tooth?",
      answer:
        "Neither is right for everyone. A bridge is anchored to the teeth beside the gap and usually takes two or three appointments. An implant stands on its own in the jawbone and takes longer, usually six to eight months. Your dentist will compare both after checking your teeth, gums and bone.",
    },
    {
      question: "How many appointments does a dental bridge take?",
      answer:
        "A dental bridge usually takes two or three appointments at Radiant Smiles @ Floral Vale. The supporting teeth are prepared and scanned first, and a temporary bridge protects them while the lab makes your bridge. At the final visit it's tried in, adjusted and cemented.",
    },
    {
      question: "Can a dental bridge be removed?",
      answer:
        "A fixed bridge can't be removed at home; it's cemented to crowns or bonded to the neighboring teeth and only a dentist can take it off. A removable bridge clips to the neighboring teeth with clasps or precision attachments, and you take it out to clean it. Your dentist will explain which type suits you.",
    },
  ],
};

export const brCta: ClosingCta = {
  title: "Close the Gap With a Dental Bridge",
  text: "Find out whether a bridge or an implant suits your smile. Book an exam, and you'll get your options and the cost before anything starts.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Dental Implants ───────────────────────── */

export const imMeta: PageMeta = {
  path: "/restorative-dentistry/dental-implants/",
  title: "Dental Implants in Yardley, PA | $500 Off | Radiant Smiles",
  description:
    "Dental implants in Yardley, PA: $500 off implant, abutment and crown (reg. $3,500), free consult and second opinion, CareCredit. Call (215) 860-4600.",
};

export const imCrumbs = rdCrumbs("Dental Implants", imMeta.path);

export const imHero: PageHeroContent = {
  h1: "Dental Implants in Yardley, PA",
  intro:
    "Dental implants in Yardley, PA at Radiant Smiles @ Floral Vale come with $500 off the regular $3,500 for an implant, abutment and crown, plus a free consultation and second opinion. Your evaluation includes an exam, X-rays and, where needed, cone beam CT (3D) imaging, and the office uses high-power dental microscopes for precise fit and finish of crowns and other restorations.",
  buttons: [
    { label: "Book Your Free Implant Consultation", href: "/patient-information/scheduling/", track: "implant_consult_click,appointment_click_im_hero" },
    "call",
  ],
};

export const imOffer = {
  lead: "Current offer:",
  text: "$500 off an implant, abutment and crown (regular price $3,500), including a free consultation and second opinion.",
};

export const imProcedureDescription =
  "A dental implant is a small titanium post placed in the jawbone to replace the root of a missing tooth, then topped with an abutment and a custom crown.";

export const imWhy = {
  title: "Why Replace a Missing Tooth With an Implant?",
  paragraphs: [
    "A dental implant is a small titanium post placed in the jawbone to replace the root of a missing tooth, then topped with an abutment and a custom crown. An implant replaces the whole tooth, root and crown, so it stands on its own without leaning on the teeth beside it. The titanium post sits in the jawbone, and the bone bonds to it over time. That bond gives the new tooth a firm foundation for chewing.",
    "Because the implant works like a root, it also helps preserve the bone and the shape of your face. When a tooth is lost and nothing replaces the root, the bone in that spot can slowly shrink. The finished tooth is designed to look, feel and function like a natural one.",
  ],
};

export const imRight = {
  title: "Are Dental Implants Right for You?",
  intro:
    "Most adults with one or more missing teeth can be considered for implants, and the only way to know for sure is an evaluation. That evaluation combines a dental exam, X-rays and, where needed, cone beam CT (3D) imaging with a review of your health history.",
  listIntro: "You may be a good candidate if you:",
  items: [
    "Are missing one tooth, several teeth or all the teeth in one jaw",
    "Have healthy gums, or are willing to treat gum disease first",
    "Have enough jawbone to hold an implant",
    "Are in good general health and can commit to daily brushing, flossing and regular checkups",
  ],
  after:
    "If your gums need attention, [gum disease treatment](/restorative-dentistry/periodontal-services/) usually comes first so the implant has a healthy base. If there isn't enough bone, the dentist will explain what that means for your options.",
  second: {
    lead: "Already been told you need an implant?",
    text: "The free second opinion lets you have your X-rays and plan reviewed before you decide. There's no pressure to book treatment that day.",
  },
};

export const imProcess = {
  title: "How Dental Implant Treatment Works",
  intro:
    "Implant treatment happens in stages, and the entire process usually takes six to eight months from placement to final crown. Most of that time is healing, while the bone bonds to the implant.",
  steps: [
    {
      lead: "Consultation and planning.",
      text: "Your dentist examines your mouth, reviews your health history and takes X-rays and, where needed, a cone beam CT scan to see the bone and the position of the nerves.",
    },
    {
      lead: "Implant placement.",
      text: "The titanium post is placed in the jawbone under local anesthesia. In some cases the implant can be placed at the same appointment as the tooth extraction.",
    },
    {
      lead: "Healing and bonding.",
      text: "Over the following months the bone grows around the implant and locks it in place. You can usually go about your normal routine during this time.",
    },
    {
      lead: "Abutment and crown.",
      text: "Once the implant is secure, a connector called an abutment is attached, and your custom crown is fitted, checked and secured.",
    },
  ],
  after: "Your dentist will tell you roughly how long each stage should take in your case.",
};

export const imImaging = {
  title: "3D Imaging & Microscopes for Implant Care",
  paragraphs: [
    "The office has cone beam CT (3D) imaging, which can be used to assess the bone before implant treatment. A cone beam scan shows the height and width of the bone, along with the position of nerves and sinuses, where regular X-rays show teeth in only two dimensions.",
    "Seeing the bone in 3D helps the dentist judge the implant's size, angle and depth before treatment starts, and plan around structures that need protecting.",
  ],
  quoteIntro: "Implant crowns are made with the same attention to fit and finish as all restorations here, aided by high-power dental microscopes. What that looks like in practice, from one patient on crowns for her front teeth:",
  quote: "The dentist was unhappy with the labs first ones so sent them back. Made sure they were perfect",
  quoteBy: "(Candice C., September 2026)",
  more: "Read more about the [technology we use](/patient-information/care-and-comfort/advanced-technology/).",
};

export const imOptions = {
  title: "Single, Multiple & Full-Arch Implant Options",
  intro: "Dental implants can replace one tooth, several teeth or a full arch, depending on how many teeth you're missing.",
  options: [
    {
      title: "Single tooth implant",
      count: 1,
      text: "A single tooth implant replaces one missing tooth with one implant, one abutment and one crown. The teeth on either side aren't touched, which is the main difference from a [dental bridge](/restorative-dentistry/dental-bridges/). This is the treatment covered by the $500 implant offer.",
    },
    {
      title: "Multiple teeth",
      count: 2,
      text: "Where several teeth are missing, implants can be placed in more than one spot to support individual crowns. Your dentist will recommend how many implants you need based on the gaps and the bone in each area.",
    },
    {
      title: "Implant-retained dentures",
      count: 4,
      text: "If you're missing all your teeth, or your denture keeps slipping, a denture can snap onto two or more implants. Options range from a removable denture on two implants to a fixed denture held by five or more. See [implant-retained dentures](/restorative-dentistry/dentures/implant-retained-dentures/) for how each type works.",
    },
  ],
};

export const imCost = {
  title: "Dental Implant Cost in Yardley, PA",
  intro:
    "A single implant, abutment and crown is regularly $3,500 at Radiant Smiles. Right now you get $500 off that regular price, plus a free consultation and second opinion. See all current savings on our [special offers](/special-offers/) page.",
  affectsTitle: "What affects your dental implant cost",
  affectsIntro: "Your final cost depends on your plan. These things can change it:",
  affects: [
    "How many teeth are being replaced",
    "Whether a tooth needs to come out first",
    "The amount and quality of bone in the area",
    "Whether you're restoring with crowns or a denture",
  ],
  affectsAfter: "You'll get your full treatment cost before treatment begins.",
  payTitle: "Insurance & financing",
  pay: [
    {
      lead: "Insurance:",
      text: "some PPO plans pay toward part of implant treatment, and coverage depends on your plan. We accept many PPO plans, including Aetna, Delta Dental, Guardian and MetLife; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "CareCredit:",
      text: "no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. You can prequalify with no impact to your credit score. [CareCredit financing](/patient-information/carecredit/)",
    },
  ],
};

export const imCompare = {
  title: "Implants vs. Bridges vs. Dentures",
  intro:
    "Implants, bridges and dentures all replace missing teeth, but they're held in place differently, and that changes how they feel and what they ask of the teeth around them.",
  head: ["", "Dental implant", "Dental bridge", "Removable denture"],
  rows: [
    ["Held in place by", "A titanium post in the jawbone", "The teeth on either side of the gap", "Your gums, with clasps on partials"],
    ["Affects neighboring teeth?", "No", "Yes, they support the bridge", "Partials clip onto nearby teeth"],
    ["Helps preserve jawbone?", "Yes", "No", "No"],
    ["Removable?", "No", "Usually no", "Yes"],
    ["Typical timeline", "Usually 6 to 8 months", "Two or three appointments", "Varies by type"],
  ],
  after:
    "If you're comparing options, read about [dental bridges](/restorative-dentistry/dental-bridges/) and [dentures](/restorative-dentistry/dentures/). Your dentist can show you how each would work in your mouth.",
};

export const imRecovery = {
  title: "Recovery & Caring for Your Implant",
  intro:
    "Most patients return to their normal routine soon after implant placement, and healing rarely disrupts daily life. Your dentist will give you aftercare instructions, and you can review our [home care instructions](/patient-information/care-and-comfort/home-instructions/) any time.",
  listIntro: "To look after your implant:",
  items: [
    { icon: "brush", text: "Brush twice a day and clean between your teeth, including around the implant" },
    { icon: "apple", text: "Follow the eating instructions your dentist gives you while the area heals" },
    { icon: "calendarCheck", text: "Keep your follow-up visits so the dentist can check healing" },
    { icon: "toothClean", text: "Come in for regular cleanings and exams once the crown is in place" },
  ],
  after:
    "An implant can't decay, but the gum and bone around it still need care. Gum disease around an implant can weaken its support, so checkups matter.",
};

export const imYouGet = {
  title: "What You Get With an Implant at Our Yardley Office",
  intro:
    "Your implant dentist in Yardley explains your options and costs before treatment begins, using 3D imaging where needed and dental microscopes for precise fit and finish. Both dentists, [Dr. Urvishkumar Bhalala](/about-us/dr-urvishkumar-bhalala/) and [Dr. Jaspreet Gadria](/about-us/dr-jaspreet-gadria-dmd/), trained at Temple University's Kornberg School of Dentistry.",
  items: [
    { icon: "tag", text: "Published pricing: $3,500 regular for implant, abutment and crown, with $500 off right now" },
    { icon: "chat", text: "A free consultation and second opinion" },
    { icon: "calendar", text: "Saturday appointments from 8 am to 2 pm" },
    { icon: "car", text: "About 15 minutes from Trenton by bridge, depending on traffic" },
  ],
};

export const imFaqs: FaqBlock = {
  title: "Dental Implant FAQs",
  items: [
    {
      question: "How much do dental implants cost in Yardley, PA?",
      answer:
        "A single implant, abutment and crown is regularly $3,500 at Radiant Smiles @ Floral Vale, and the current offer takes $500 off, with a free consultation and second opinion. Your total depends on how many teeth you're replacing and whether you need an extraction first. CareCredit financing is available.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "Dental implants are designed as a long-term replacement for missing teeth. How long yours lasts depends on healthy gums, good daily cleaning, regular checkups and habits such as smoking or grinding. The crown on top can wear over time and may eventually need replacing, even when the implant itself stays firm.",
    },
    {
      question: "Are dental implants painful?",
      answer:
        "Implant placement is done under local anesthesia, so the area is numb during the procedure and you should feel pressure rather than pain. Some soreness afterward is normal while the area heals. If you're nervous, ask about sedation options when you book, and you can bring headphones and music.",
    },
    {
      question: "How long does the dental implant process take?",
      answer:
        "The entire implant process usually takes six to eight months, mostly because the bone needs time to bond with the implant. You can usually keep to your normal routine while it heals. Your dentist will give you an expected timeline for your own case at your consultation.",
    },
    {
      question: "Can an implant be placed the same day a tooth is pulled?",
      answer:
        "Sometimes. In some cases the implant can be placed at the same appointment as the extraction, which saves a separate surgery. Whether that's possible depends on the bone, any infection and the tooth's position. Your dentist will check this with X-rays, and 3D imaging where needed, first.",
    },
    {
      question: "Do you offer a second opinion on dental implants?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale offers a free consultation and second opinion for dental implants. If another office has recommended implant treatment, you can bring your questions and have your options reviewed before you commit. Call (215) 860-4600 to book.",
    },
  ],
};

export const imCta: ClosingCta = {
  title: "Book Your Free Implant Consultation",
  text: "Find out whether an implant is right for you, what it will cost and how long it will take, with no obligation to go ahead. Ask about the $500-off offer when you call.",
  sub: ctaNap,
  buttons: [
    { label: "Request an Appointment", href: "/patient-information/scheduling/", track: "implant_consult_click,appointment_click_im_final" },
    "call",
  ],
};
