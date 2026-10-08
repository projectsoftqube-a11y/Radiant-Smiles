import { images } from "@/content/images";
import type { LinkItem } from "./home";
import type { ClosingCta, PageHeroContent, PageMeta } from "./shared";

/**
 * Before & After Gallery. Copy verbatim from
 * docs/seo-content/01 Core/04 Proof/Before & After Gallery/02 Content.md.
 *
 * Publishing rule (handoff): a case is indexed only once the practice confirms in writing
 * that the patient's consent for website use is on file and the photos are this
 * practice's own patient. The whitening case from the current gallery page is shown (user
 * request); the page stays noindex and out of sitemap.xml until that confirmation.
 */

export const galleryMeta: PageMeta = {
  path: "/about-us/before-and-after-gallery/",
  title: "Before & After Gallery: Teeth Whitening | Yardley, PA",
  description:
    "Teeth whitening before and after case from Radiant Smiles @ Floral Vale in Yardley, PA, plus what veneers, implants and smile makeovers involve.",
  noindex: true,
};

export const galleryHero: PageHeroContent = {
  h1: "Before & After Gallery: Teeth Whitening & More",
  intro:
    "This before and after gallery from Radiant Smiles @ Floral Vale in Yardley, PA is grouped by treatment, starting with teeth whitening. Each case is labelled with the treatment the patient had. Smile makeover before and after photos will be added as patients agree to share them. Every mouth is different, so your result will depend on your teeth, your goals and the plan you choose with your dentist.",
  buttons: ["appointment"],
};

export type GalleryGroup = "makeover" | "whitening" | "veneers" | "restorations";

/** One before-and-after case. Add cases here (no code change) once they are cleared. */
export type GalleryCase = {
  group: GalleryGroup;
  treatment: string;
  before: (typeof images)["galleryWhiteningBefore"];
  after: (typeof images)["galleryWhiteningAfter"];
  note?: string;
};

/** The whitening case from the current gallery page (user request, 8 Oct 2026) */
export const galleryCases: GalleryCase[] = [
  {
    group: "whitening",
    treatment: "teeth whitening",
    before: images.galleryWhiteningBefore,
    after: images.galleryWhiteningAfter,
  },
];

export const galleryMakeover = {
  title: "What a Smile Makeover Involves",
  paragraphs: [
    "A smile makeover combines two or more treatments, planned together, to change how your smile looks. Depending on what bothers you about your smile, that might mean whitening, porcelain veneers, bonding or crowns, or a mix of these.",
    "Before any treatment, your dentist talks through what you'd like to change, what is realistic for your teeth and what each option costs.",
  ],
  /** The treatments named above, shown as building blocks (decorative) */
  blocks: ["Whitening", "Porcelain veneers", "Bonding", "Crowns"],
  link: { label: "Explore cosmetic dentistry", href: "/cosmetic-dentistry/" } as LinkItem,
};

export const galleryWhitening = {
  title: "Teeth Whitening Before & After",
  text: "Teeth whitening lightens the natural shade of your teeth. At our office, whitening is done with custom take-home trays: we make the trays in 1 to 2 days, and you wear them for 3 to 4 hours each night for 1 to 2 weeks.",
  /** The schedule above as three figures (decorative) */
  steps: [
    { figure: "1–2", unit: "days", text: "to make your trays" },
    { figure: "3–4", unit: "hours", text: "of wear each night" },
    { figure: "1–2", unit: "weeks", text: "until you're done" },
  ],
  caption: "Teeth whitening at Radiant Smiles @ Floral Vale. Individual results vary.",
  offer: "Teeth whitening is currently $100 off (regular price $550).",
  link: { label: "Learn about teeth whitening", href: "/cosmetic-dentistry/teeth-whitening/" } as LinkItem,
};

export const galleryVeneers = {
  title: "Veneers Before & After",
  text: "Porcelain veneers are thin, custom-made shells bonded to the front of your teeth to change their color, shape or size. They're one of the treatments most often used in a smile makeover.",
  link: { label: "Learn about porcelain veneers", href: "/cosmetic-dentistry/dental-veneers-dentistry/" } as LinkItem,
};

export const galleryRestorations = {
  title: "Implants & Restorations",
  text: "Restorative treatment repairs or replaces teeth, and it can change your smile as much as cosmetic work does. A dental implant replaces a missing tooth with an implant, an abutment and a crown. Crowns rebuild teeth that are broken or badly worn.",
  quoteIntro: "One of our patients described her front crowns in a review:",
  quote: "The dentist was unhappy with the labs first ones so sent them back. Made sure they were perfect.",
  link: { label: "Learn about dental implants", href: "/restorative-dentistry/dental-implants/" } as LinkItem,
};

export const galleryShare = {
  title: "Share Your Own Before & After",
  text: "Happy with your treatment? If you'd like your own dental before and after photos considered for the gallery, ask the team at your next visit.",
};

export const galleryCta: ClosingCta = {
  title: "Talk to Us About Your Smile",
  text: "Call (215) 860-4600 or request an appointment online to talk through what you'd like to change.",
};

export const galleryCrumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us/" },
  { name: "Before & After Gallery", path: "/about-us/before-and-after-gallery/" },
];
