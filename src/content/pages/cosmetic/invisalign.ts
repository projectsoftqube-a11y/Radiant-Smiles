import type { CostBlock } from "../general/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { cdCrumbs, ctaNap, INVISALIGN_PATH } from "./common";

/**
 * Teeth straightening: Invisalign, Invisalign Teen, Invisalign Cost.
 * Verbatim from 05 Cosmetic Dentistry/02 Teeth Straightening/*. Offer wording matches
 * /special-offers/ ("$1,000 off the regular $5,800"); never a net price, no APRs, no
 * replacement-aligner count, no Align badges or tiers (handoffs).
 */

const invisalignConsult = { label: "Book a Free Invisalign Consultation", href: "/patient-information/scheduling/" };

/* ───────────────────────── Invisalign ───────────────────────── */

export const inMeta: PageMeta = {
  path: INVISALIGN_PATH,
  title: "Invisalign in Yardley, PA | $1,000 Off | Radiant Smiles",
  description:
    "Invisalign clear aligners in Yardley, PA: $1,000 off the regular $5,800, with a free consultation and second opinion. Call (215) 860-4600.",
};

export const inCrumbs = cdCrumbs("Invisalign", inMeta.path);

export const inHero: PageHeroContent = {
  h1: "Invisalign Clear Aligners in Yardley, PA",
  intro:
    "Invisalign straightens teeth with a series of clear, removable aligners made from BPA-free plastic instead of metal brackets and wires. At Radiant Smiles @ Floral Vale, Invisalign in Yardley, PA starts with a free consultation and second opinion, and treatment is currently $1,000 off the regular $5,800 price.",
  more: [
    "The aligners are clear plastic, with no brackets or wires, so they're hard for others to notice. You take them out to eat, drink and brush, and you come in for a quick check-up about every six weeks.",
  ],
  buttons: [invisalignConsult, "call"],
};

export const inProcedureDescription =
  "Invisalign straightens teeth with a series of clear, removable aligners made from BPA-free plastic instead of metal brackets and wires.";

export const inHow = {
  title: "How Invisalign Works",
  intro:
    "Invisalign moves your teeth gradually with a series of custom-made clear aligners, each one slightly different from the last. Here's how treatment runs:",
  items: [
    {
      key: "hours",
      lead: "Wear your aligners 20 to 22 hours a day.",
      text: "They come out only to eat, drink anything other than water, and brush and floss.",
    },
    {
      key: "sets",
      lead: "Switch to a new set about every two weeks.",
      text: "Each set moves your teeth a little closer to the planned position.",
    },
    {
      key: "visits",
      lead: "Visit us about every six weeks.",
      text: "Check-ups are quick because there are no wires or brackets to adjust.",
    },
  ],
  after:
    "The aligners are smooth plastic made for your teeth, so there are no metal parts to poke or irritate your gums. You can take them out for a special occasion, then put them back in.",
};

export const inWho = {
  title: "Who Invisalign Is For",
  paragraphs: [
    "Invisalign for adults lets you straighten your teeth without metal braces, at work, at home and in photos. Clear aligners can straighten crooked or crowded teeth and close gaps for many people, whether you never had braces or your teeth have shifted since.",
    "Teenagers can use [Invisalign Teen](/cosmetic-dentistry/invisalign/invisalign-teen/), which adds blue compliance indicators so parents can see the aligners are being worn.",
    "Not every case suits aligners. Your consultation is where we find out. We look at your teeth, gums and bite, and tell you honestly whether Invisalign can reach the result you want. Healthy teeth and gums come first, so any decay or gum problems are treated before you start.",
  ],
};

export const inRecords = {
  title: "Your Records & Treatment Plan",
  paragraphs: [
    "Your Invisalign treatment is planned from detailed records of your teeth: photos, X-rays and a scan or impressions. Together they give an accurate picture of your teeth and bite.",
    "From these records, Invisalign's 3D planning software maps how each tooth will move, stage by stage, and shows a preview of the planned result before you commit. Your custom aligners are made from that plan. [See our dental technology](/patient-information/care-and-comfort/advanced-technology/)",
  ],
};

export const inVersus = {
  title: "Invisalign vs Braces",
  intro:
    "Invisalign and traditional braces both straighten teeth. The main differences are how they look, whether you can take them out and how they fit into daily life.",
  head: ["", "Invisalign clear aligners", "Traditional braces"],
  rows: [
    ["Appearance", "Clear plastic, no brackets or wires", "Metal brackets and wires"],
    ["Removable", "Yes, to eat, drink and clean", "No"],
    ["Eating", "No food restrictions; aligners come out", "Crunchy and sticky foods can break brackets"],
    ["Brushing and flossing", "As normal, with aligners out", "Around brackets and wires"],
    ["Comfort", "Smooth plastic", "Wires and brackets can poke and irritate gums"],
    ["Check-ups", "About every six weeks, no adjustments", "Regular wire adjustments"],
  ],
  after:
    "The trade-off is discipline. Aligners only work while you're wearing them, so you need to keep them in 20 to 22 hours a day.",
};

export const inTime = {
  title: "How Long Does Invisalign Take?",
  paragraphs: [
    "For adults, Invisalign usually takes about one year. Your own timeline depends on how much your teeth need to move and on wearing your aligners as directed. You'll get an estimate for your case at your consultation, once your treatment plan is mapped out.",
    "Over that time, you'll move to a new set of aligners about every two weeks and visit us roughly every six weeks so we can check that your teeth are tracking to plan. Skipping wear time slows your progress, so keeping your aligners in 20 to 22 hours a day is the part that matters most.",
  ],
};

export const inOffer = {
  title: "Invisalign Cost & Current Offer",
  intro:
    "Invisalign at our Yardley office is currently **$1,000 off the regular price of $5,800**, and the consultation and second opinion are free. If you've been quoted for treatment elsewhere, a second opinion costs you nothing.",
  items: [
    {
      icon: "shield",
      lead: "Insurance:",
      text: "some dental plans include an orthodontic benefit that can cover part of Invisalign treatment. Coverage depends on your plan, and we'll help you check it.",
    },
    { icon: "card", lead: "FSA:", text: "you can use flexible spending account funds toward treatment." },
    {
      icon: "banknote",
      lead: "CareCredit:",
      text: "no interest if paid in full within six months on qualifying purchases of $200 or more, subject to credit approval.",
    },
  ],
  after:
    "For a full breakdown of what affects the price and how to pay over time, see [Invisalign cost and payment options](/cosmetic-dentistry/invisalign/invisalign-cost/) or our [special offers](/special-offers/).",
  button: invisalignConsult,
  quote: { text: "Everyone was professional, welcoming, and attentive throughout my visit.", author: "Avni D., May 2026" },
};

export const inLiving = {
  title: "Living With Clear Aligners",
  intro: "Clear aligners fit around daily life more easily than braces, as long as you build a routine:",
  items: [
    { icon: "apple", lead: "Meals:", text: "take your aligners out, eat what you like, then brush before putting them back in." },
    { icon: "shield", lead: "Sports:", text: "take them out for contact sports and wear a mouthguard instead." },
    { icon: "camera", lead: "Special occasions:", text: "they can come out for an important event or photo, then go back in." },
    { icon: "drop", lead: "Cleaning:", text: "rinse and clean your aligners when you brush, so they stay clear." },
  ],
};

export const inFaqs: FaqBlock = {
  title: "Invisalign FAQs",
  items: [
    {
      question: "How long does Invisalign take?",
      answer:
        "For adults, Invisalign usually takes about one year. The exact time depends on how far your teeth need to move and on wearing your aligners 20 to 22 hours a day. You switch to a new set about every two weeks, and at your consultation we give you an estimate for your own case.",
    },
    {
      question: "How much does Invisalign cost in Yardley?",
      answer:
        "Invisalign at Radiant Smiles @ Floral Vale in Yardley, PA is currently $1,000 off the regular price of $5,800, and the consultation and second opinion are free. Some dental plans cover part of orthodontic treatment, and you can use FSA funds or CareCredit financing to spread the cost.",
    },
    {
      question: "Is Invisalign better than braces?",
      answer:
        "Neither is better for everyone. Invisalign aligners are clear, removable and smooth, so you can eat normally and brush as usual, but they only work if you wear them 20 to 22 hours a day. Braces are fixed in place. At your consultation, we'll tell you whether Invisalign suits your teeth.",
    },
    {
      question: "Can adults get Invisalign?",
      answer:
        "Yes. Invisalign suits adults well because the aligners are clear plastic, with no brackets or wires, and come out for meals and meetings. Adult treatment usually takes about one year. Your teeth and gums need to be healthy before you start, so we check them at your free consultation.",
    },
    {
      question: "How many hours a day do you wear Invisalign?",
      answer:
        "You wear Invisalign aligners 20 to 22 hours a day. They come out only to eat, drink anything other than water, and brush and floss your teeth. Wearing them less than that can slow your progress, because the aligners only move your teeth while they're in your mouth.",
    },
    {
      question: "What records are taken for Invisalign?",
      answer:
        "Invisalign is planned from photos, X-rays and a scan or impressions of your teeth. At Radiant Smiles @ Floral Vale, we take these records after your free consultation confirms aligners suit you. Invisalign's software uses them to map how each tooth moves, stage by stage, and your custom aligners are made from that plan.",
    },
  ],
};

export const inCta: ClosingCta = {
  title: "Start Invisalign in Yardley, PA",
  text: "Book your free consultation and second opinion. We'll check your teeth, explain the plan and confirm your price, with $1,000 off the regular $5,800.",
  sub: ctaNap,
  buttons: [invisalignConsult, "call"],
};

/* ───────────────────────── Invisalign Teen ───────────────────────── */

export const itMeta: PageMeta = {
  path: "/cosmetic-dentistry/invisalign/invisalign-teen/",
  title: "Invisalign Teen in Yardley, PA | Radiant Smiles",
  description:
    "Invisalign Teen in Yardley, PA: clear, removable aligners with blue wear indicators so parents can see they're being worn. Call (215) 860-4600.",
};

export const itCrumbs = cdCrumbs("Invisalign Teen", itMeta.path, true);

const teenConsult = { label: "Book an Invisalign Teen Consultation", href: "/patient-information/scheduling/" };

export const itHero: PageHeroContent = {
  h1: "Invisalign Teen in Yardley, PA",
  intro:
    "Invisalign Teen straightens teenagers' teeth with clear, removable aligners instead of metal brackets and wires, and adds blue compliance indicators that show parents the aligners are being worn. Radiant Smiles @ Floral Vale offers Invisalign Teen in Yardley, PA, planned from photos, X-rays and a scan or impressions of your teen's teeth.",
  more: [
    "Your teen gets straighter teeth without a mouth full of metal in every school photo. You get a simple way to check the aligners are doing their job.",
  ],
  buttons: [teenConsult, "call"],
};

export const itProcedureDescription =
  "Invisalign Teen straightens teenagers' teeth with clear, removable aligners instead of metal brackets and wires, and adds blue compliance indicators that show parents the aligners are being worn.";

export const itWhy = {
  title: "Why Teens Like Invisalign",
  intro:
    "Invisalign for teens works the same way as adult Invisalign: a series of clear plastic aligners, custom-fitted to your teen's teeth, each one moving the teeth a little further. What teens notice most is what's missing:",
  items: [
    { icon: "camera", lead: "No metal.", text: "The aligners are clear, so they're hard to spot in photos, in class or on video calls." },
    { icon: "apple", lead: "No food rules.", text: "Aligners come out to eat, so pizza, popcorn and apples stay on the menu." },
    {
      icon: "brush",
      lead: "Normal brushing and flossing.",
      text: "With the aligners out, teens clean their teeth as usual, with no brackets to work around.",
    },
    { icon: "smile", lead: "Smooth plastic.", text: "There are no wires or brackets to poke or rub the inside of the cheeks." },
  ],
};

export const itIndicators = {
  title: "Blue Compliance Indicators for Parents",
  paragraphs: [
    "Invisalign Teen aligners have small blue indicators that fade as the aligners are worn. A quick look shows whether your teen has been wearing them for the 20 to 22 hours a day that treatment needs.",
    "That matters, because aligners only move teeth while they're in the mouth. The indicators take the guesswork out of it, for you and for us at each check-up.",
  ],
  lost: "Lost an aligner? Invisalign Teen includes replacement aligners, so a misplaced set at school or practice doesn't have to stall treatment. Call us and we'll explain the next step.",
};

export const itSchedule = {
  title: "Invisalign Teen for Sports, Music & School",
  intro: "Invisalign Teen fits around a busy teenage schedule:",
  items: [
    {
      icon: "shield",
      lead: "Sports:",
      text: "for contact sports, aligners come out and a mouthguard goes in. They go back in after the game.",
    },
    { icon: "headphones", lead: "Music:", text: "aligners can be taken out to play an instrument, then put back." },
    {
      icon: "book",
      lead: "School:",
      text: "there are no brackets to break, and check-ups are usually six to eight weeks apart and quick, because there are no wires to adjust.",
    },
  ],
  after:
    "Teens switch to a new set of aligners about every two weeks. Treatment time for teens is comparable to traditional braces, and we give you an estimate for your teen's case once their records are taken.",
};

export const itRecords = {
  title: "Your Teen's Records & Plan",
  paragraphs: [
    "Treatment starts with a consultation. We examine your teen's teeth and gums, and take photos, X-rays and a scan or impressions of their teeth. Invisalign's planning software then maps how each tooth will move.",
    "Regular checkups and cleanings continue throughout treatment. If your teen already sees us for [children's dental checkups](/preventative-care/child-dentistry/), we can keep their care in one place.",
  ],
};

export const itCost: CostBlock = {
  title: "Invisalign Teen Cost",
  paragraphs: [
    "Invisalign at Radiant Smiles @ Floral Vale is currently $1,000 off the regular price of $5,800, with a free consultation and second opinion. Ask at your consultation how the offer applies to your teen's treatment plan.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "some dental plans include an orthodontic benefit for dependents that can cover part of the cost. Coverage depends on your plan, and we'll help you check.",
    },
    { lead: "FSA:", text: "flexible spending account funds can be used toward treatment." },
    {
      lead: "CareCredit:",
      text: "parents can spread the cost, with no interest if paid in full within six months on qualifying purchases of $200 or more (subject to credit approval).",
    },
  ],
  after: [
    "See [Invisalign cost and payment options](/cosmetic-dentistry/invisalign/invisalign-cost/) for more detail, or learn about [Invisalign for adults](/cosmetic-dentistry/invisalign/).",
  ],
};

export const itFaqs: FaqBlock = {
  title: "Invisalign Teen FAQs",
  items: [
    {
      question: "How do I know my teen is wearing their aligners?",
      answer:
        "Invisalign Teen aligners have blue compliance indicators that fade as the aligners are worn. Checking the indicators shows whether your teen has been wearing them for the recommended 20 to 22 hours a day. We also check progress at each visit, usually every six to eight weeks.",
    },
    {
      question: "What happens if my teen loses an aligner?",
      answer:
        "Invisalign Teen includes replacement aligners, so losing one set doesn't have to stall treatment. Call Radiant Smiles @ Floral Vale at (215) 860-4600 as soon as you notice it's missing, and we'll tell you whether to move to the next set or wait for a replacement.",
    },
    {
      question: "Can teens play sports with Invisalign?",
      answer:
        "Yes. For contact sports, your teen takes the aligners out and wears a mouthguard instead, then puts the aligners back in after the game or practice. Aligners can also come out to play a musical instrument. The key is getting them back in so they're worn 20 to 22 hours a day.",
    },
    {
      question: "How much does Invisalign Teen cost?",
      answer:
        "Invisalign at Radiant Smiles @ Floral Vale is currently $1,000 off the regular $5,800, with a free consultation and second opinion; ask how it applies to your teen's plan. Some dental plans include orthodontic benefits for dependents, and FSA funds and CareCredit financing can help spread the cost.",
    },
    {
      question: "How long does Invisalign Teen take?",
      answer:
        "Treatment time for teens is comparable to traditional braces, and it depends on how much the teeth need to move. Teens switch to new aligners about every two weeks and wear them 20 to 22 hours a day. We give you an estimate for your teen's case once their records are taken.",
    },
  ],
};

export const itCta: ClosingCta = {
  title: "Book Invisalign Teen in Yardley",
  text: "Bring your teen in for a consultation. We'll show you both the plan, the timeline and the cost before anything starts.",
  sub: ctaNap,
  buttons: [teenConsult, "call"],
};

/* ───────────────────────── Invisalign Cost ───────────────────────── */

export const icMeta: PageMeta = {
  path: "/cosmetic-dentistry/invisalign/invisalign-cost/",
  title: "Invisalign Cost in Yardley, PA | Pricing & Financing",
  description:
    "Invisalign cost in Yardley, PA: regular price $5,800, now $1,000 off with a free consultation. Insurance, FSA and CareCredit options explained.",
};

export const icCrumbs = cdCrumbs("Invisalign Cost", icMeta.path, true);

export const icHero: PageHeroContent = {
  h1: "How Much Does Invisalign Cost in Yardley?",
  intro:
    "Invisalign at Radiant Smiles @ Floral Vale in Yardley, PA has a regular price of $5,800 and is currently $1,000 off, with a free consultation and second opinion. Your final Invisalign cost in Yardley depends on how much your teeth need to move, and some dental plans, FSA funds and CareCredit financing can help pay for it.",
  more: [
    "Below you'll find our published price, what changes the cost, how insurance works for clear aligners and the ways you can spread payments.",
  ],
  buttons: [invisalignConsult, "call"],
};

export const icPrice = {
  title: "Our Invisalign Cost in Yardley",
  intro: "We publish our Invisalign price so you can plan before you visit:",
  rows: [
    ["Regular price", "$5,800"],
    ["Current offer", "$1,000 off"],
    ["Consultation", "Free"],
    ["Second opinion", "Free"],
  ],
  paragraphs: [
    "The free second opinion is useful if you've already had a quote somewhere else. Bring it along, and we'll look at your teeth and explain our plan and price side by side. [See all special offers](/special-offers/)",
    "At the end of your consultation, you'll know what your treatment costs before you decide. There's no pressure to commit that day.",
  ],
};

export const icFactors = {
  title: "What Affects the Cost of Invisalign?",
  intro:
    "The two biggest factors in the cost of Invisalign are how severe your alignment issues are and how long treatment takes. More movement usually means more aligners and more check-ups.",
  listIntro: "Things that can change your plan:",
  items: [
    {
      key: "severity",
      lead: "How crowded, gapped or crooked your teeth are.",
      text: "Mild cases need fewer aligners than complex ones.",
    },
    { key: "length", lead: "Treatment length.", text: "Adults average about one year, but your case may be shorter or longer." },
    {
      key: "other",
      lead: "Other dental needs.",
      text: "Cavities or gum problems need treatment before aligners, and that care is priced separately.",
    },
  ],
  after:
    "Your records and treatment plan show what your case involves, so the cost you're quoted is based on your teeth, not an average. [How Invisalign works](/cosmetic-dentistry/invisalign/)",
};

export const icInsurance = {
  title: "Does Insurance Cover Invisalign?",
  paragraphs: [
    "Some dental insurance plans cover part of Invisalign treatment through an orthodontic benefit. Whether yours does, and how much, depends on your plan.",
    "Orthodontic benefits often have their own lifetime maximum, separate from your yearly dental maximum, and some plans limit them by age. We accept many PPO plans, including Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife and UnitedHealthcare. Call (215) 860-4600 with your plan details and we'll help you check your orthodontic coverage. [Insurance and payment options](/patient-information/insurance-payment-options/)",
  ],
  plans: ["Aetna", "Cigna PPO", "Delta Dental", "Guardian", "Horizon Blue Cross", "MetLife", "UnitedHealthcare"],
};

export const icPay = {
  title: "Invisalign Payment Plans & Financing",
  intro: "You don't have to pay for Invisalign in one go. These are the ways patients cover the cost:",
  items: [
    {
      key: "carecredit",
      icon: "card",
      lead: "CareCredit:",
      text: "a health and wellness credit card with no interest if paid in full within six months on qualifying purchases of $200 or more. Interest is charged from the purchase date if the balance isn't paid in full, and approval is subject to credit. You can prequalify with no impact to your credit score. [CareCredit financing](/patient-information/carecredit/)",
    },
    { key: "monthly", icon: "calendar", lead: "Monthly payment options:", text: "ask us about spreading the cost over your treatment." },
    {
      key: "fsa",
      icon: "banknote",
      lead: "FSA funds:",
      text: "you can use a flexible spending account toward Invisalign, which means paying with pre-tax money.",
    },
    { key: "methods", icon: "cheque", lead: "Payment methods:", text: "cash, check, Visa, MasterCard, Discover and American Express." },
  ],
  button: invisalignConsult,
};

export const icFaqs: FaqBlock = {
  title: "Invisalign Cost FAQs",
  items: [
    {
      question: "How much does Invisalign cost?",
      answer:
        "At Radiant Smiles @ Floral Vale in Yardley, PA, Invisalign has a regular price of $5,800 and is currently $1,000 off, with a free consultation and second opinion. The cost for your case depends on how much your teeth need to move and how long treatment takes, and you'll know your price before you decide.",
    },
    {
      question: "Does insurance cover Invisalign?",
      answer:
        "Some dental plans cover part of Invisalign through an orthodontic benefit, which often has its own lifetime maximum and may have age limits. Coverage depends on your plan. Radiant Smiles @ Floral Vale accepts many PPO plans; call (215) 860-4600 and we'll help you check what your plan pays toward clear aligners.",
    },
    {
      question: "Can I use my FSA for Invisalign?",
      answer:
        "Yes. Flexible spending account funds can be used toward Invisalign treatment at Radiant Smiles @ Floral Vale. Using FSA money means you pay with pre-tax dollars. Check your account balance and your plan's deadlines, and combine FSA funds with insurance or CareCredit financing if you need to.",
    },
    {
      question: "Do you offer Invisalign payment plans?",
      answer:
        "Yes. Monthly payment options are available, and CareCredit offers no interest if paid in full within six months on qualifying purchases of $200 or more, subject to credit approval. You can prequalify for CareCredit with no impact to your credit score. Ask us which option suits your treatment plan.",
    },
    {
      question: "Is the Invisalign consultation free?",
      answer:
        "Yes. The Invisalign consultation and second opinion are free at Radiant Smiles @ Floral Vale. We examine your teeth and gums, take the records we need, explain whether Invisalign suits you and give you the cost of your treatment, with no obligation to start that day.",
    },
  ],
};

export const icCta: ClosingCta = {
  title: "Get Your Invisalign Price in Yardley",
  text: "Book a free consultation and second opinion. You'll leave knowing your plan, your timeline and your cost, with $1,000 off the regular $5,800.",
  sub: ctaNap,
  buttons: [invisalignConsult, "call"],
};
