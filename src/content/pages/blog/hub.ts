import { napCtaLine, type ClosingCta, type PageMeta } from "../shared";
import type { Crumb } from "@/lib/schema";
import { posts } from "./posts";
import type { BlogPost, TopicKey } from "./types";

/**
 * Blog hub. Verbatim from 08 Blog/00 Blog Hub/Blog hub/02 Content.md. The 10 posts come from
 * the old site (see tools/convert_blog.py); the 13 posts slated for a 301 are never listed.
 */

export const BLOG_PATH = "/blog/";

export const blogMeta: PageMeta = {
  path: BLOG_PATH,
  title: "Dental Health Blog | Radiant Smiles @ Floral Vale",
  description:
    "Dental health articles from Radiant Smiles @ Floral Vale in Yardley, PA: implants, crowns, whitening, checkups, toothaches and what to expect.",
};

export const blogCrumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Blog", path: BLOG_PATH },
];

export const blogHero = {
  h1: "Dental Health Blog",
  intro:
    "Plain answers to common dental questions from Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA. Each article covers one topic.",
};

/** Topic labels (handoff): labels and jump links on this page, never tag archives */
export const topics: { key: TopicKey; label: string; icon: string; links: { label: string; href: string }[] }[] = [
  {
    key: "implants",
    label: "Dental implants & crowns",
    icon: "implant",
    links: [
      { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" },
      { label: "Dental crowns", href: "/restorative-dentistry/dental-crowns/" },
    ],
  },
  {
    key: "checkups",
    label: "Checkups & prevention",
    icon: "toothClean",
    links: [
      { label: "Teeth cleaning and check-ups", href: "/preventative-care/teeth-cleaning-and-check-ups/" },
      { label: "Preventative care", href: "/preventative-care/" },
    ],
  },
  {
    key: "cosmetic",
    label: "Cosmetic dentistry",
    icon: "whiten",
    links: [
      { label: "Teeth whitening", href: "/cosmetic-dentistry/teeth-whitening/" },
      { label: "Cosmetic dentistry", href: "/cosmetic-dentistry/" },
    ],
  },
  {
    key: "emergencies",
    label: "Dental emergencies",
    icon: "firstAid",
    links: [{ label: "Emergency dentistry", href: "/emergency-dentistry/" }],
  },
  {
    key: "start",
    label: "Getting started",
    icon: "smile",
    links: [],
  },
];

/** "Browse by Topic" (the four topic lines the content file lists; Getting started has none) */
export const blogBrowse = {
  title: "Browse by Topic",
  intro: "The quickest way to find an answer is to start with the topic, then read the articles below it.",
  extra: {
    label: "Costs & insurance",
    icon: "badgeDollar",
    links: [
      { label: "Insurance and payment options", href: "/patient-information/insurance-payment-options/" },
      { label: "Special offers", href: "/special-offers/" },
    ],
  },
};

export const blogLatest = { title: "Latest Posts" };

export const blogResources = {
  title: "More Patient Resources",
  text: "Looking for short guides and videos rather than articles? Our [patient education library](/patient-information/patient-education/) covers topics such as brushing, gum disease, implants and teeth whitening, and our [home care instructions](/patient-information/care-and-comfort/home-instructions/) explain what to do after crowns, fillings and extractions.",
  /** The paragraph's two links again as large doors (labels are the link text) */
  doors: [
    { label: "Patient education library", href: "/patient-information/patient-education/", icon: "book" },
    { label: "Home care instructions", href: "/patient-information/care-and-comfort/home-instructions/", icon: "home" },
  ],
};

export const blogCta: ClosingCta = {
  title: "Have a Question the Blog Doesn't Answer?",
  text: `Call us and ask. ${napCtaLine}`,
  buttons: ["call"],
};

export const postPath = (slug: string) => `${BLOG_PATH}${slug}/`;
export const topicOf = (key: TopicKey) => topics.find((t) => t.key === key)!;
export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

/** "December 6, 2025" */
export const postDate = (iso: string) => {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[m - 1]} ${d}, ${y}`;
};

/** Minutes to read at about 220 words a minute */
export const readMinutes = (post: BlogPost) => {
  const words = post.blocks
    .map((b) => ("p" in b ? b.p : "h2" in b ? b.h2 : b.ul.join(" ")))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};

export { posts };
