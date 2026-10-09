/** A block of post body, in reading order (inline **bold** and [label](href) as in Rich) */
export type PostBlock = { h2: string } | { p: string } | { ul: string[] };

export type TopicKey = "implants" | "checkups" | "cosmetic" | "emergencies" | "start";

export type BlogPost = {
  slug: string;
  title: string;
  topic: TopicKey;
  /** ISO date and time the post was published on the old site */
  date: string;
  /** One-line excerpt for the cards (the post's first sentence) */
  excerpt: string;
  /** Meta description (the post's opening sentences, to 155 characters) */
  description: string;
  blocks: PostBlock[];
};
