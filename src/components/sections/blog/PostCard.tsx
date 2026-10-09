import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import SiteLink from "@/components/ui/SiteLink";
import { images, type ImageKey } from "@/content/images";
import { postDate, postPath, readMinutes, topicOf } from "@/content/pages/blog/hub";
import type { BlogPost } from "@/content/pages/blog/types";
import styles from "./PostCard.module.css";

/** The image for a post (registered in images.ts as blog + PascalCase slug) */
export function postImage(slug: string) {
  const key = ("blog" + slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("")) as ImageKey;
  return images[key];
}

/**
 * Post teasers. Handoff: each shows the title (link), date, a one-line excerpt and the topic
 * label. Titles are not headings (cards use non-heading text); the title link covers the
 * whole teaser and fires blog_card_click with the post slug.
 */

function TitleLink({ post }: { post: BlogPost }) {
  return (
    <SiteLink href={postPath(post.slug)} className={styles.link} data-track="blog_card_click" data-track-post={post.slug}>
      {post.title}
    </SiteLink>
  );
}

function Topic({ post }: { post: BlogPost }) {
  const topic = topicOf(post.topic);
  return (
    <span className={styles.topic}>
      <Icon name={topic.icon as IconName} size={14} /> {topic.label}
    </span>
  );
}

function Meta({ post }: { post: BlogPost }) {
  return (
    <span className={styles.meta}>
      <time dateTime={post.date.slice(0, 10)}>{postDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{readMinutes(post)} min read</span>
    </span>
  );
}

/** Hub feed: a wide row (image, then topic, title, excerpt, date and read time) */
export function PostRow({ post }: { post: BlogPost }) {
  return (
    <article className={styles.row}>
      <div className={styles.rowMedia}>
        <MediaFrame image={postImage(post.slug)} sizes="(max-width: 575px) 92vw, (max-width: 991px) 40vw, 320px" className={styles.rowImage} />
      </div>
      <div className={styles.rowBody}>
        <Topic post={post} />
        <p className={styles.rowTitle}>
          <TitleLink post={post} />
        </p>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <Meta post={post} />
      </div>
      <span className={styles.go} aria-hidden="true">
        <Icon name="arrowUpRight" size={20} />
      </span>
    </article>
  );
}

/** Post page "More From the Blog": a portrait card under an arched photo */
export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className={styles.card}>
      <MediaFrame image={postImage(post.slug)} ratio="4 / 3" sizes="(max-width: 767px) 92vw, (max-width: 1199px) 45vw, 420px" arch className={styles.cardImage} />
      <div className={styles.cardBody}>
        <Topic post={post} />
        <p className={styles.cardTitle}>
          <TitleLink post={post} />
        </p>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <Meta post={post} />
      </div>
    </article>
  );
}

/** Hub hero "Also new": a compact teaser with a square thumbnail */
export function PostMini({ post }: { post: BlogPost }) {
  return (
    <article className={styles.mini}>
      <MediaFrame image={postImage(post.slug)} ratio="1 / 1" sizes="120px" className={styles.miniImage} />
      <div className={styles.miniBody}>
        <Topic post={post} />
        <p className={styles.miniTitle}>
          <TitleLink post={post} />
        </p>
        <Meta post={post} />
      </div>
    </article>
  );
}
