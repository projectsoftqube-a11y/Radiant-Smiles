import { ToothMark } from "@/components/ui/Brand";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Rich } from "@/components/ui/Rich";
import { RiseWords } from "@/components/ui/RiseWords";
import SiteLink from "@/components/ui/SiteLink";
import { BLOG_PATH, postDate, postPath, posts, readMinutes, topicOf } from "@/content/pages/blog/hub";
import type { BlogPost } from "@/content/pages/blog/types";
import { practice } from "@/content/site";
import type { Crumb } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import { PostCard, postImage } from "./PostCard";
import { PostToc, ReadingProgress, ShareLinks } from "./PostTools";
import styles from "./BlogPost.module.css";

/**
 * The article template shared by the blog posts: a centred masthead (breadcrumb, topic, H1,
 * byline) over a wide photo; the article between a left rail (contents, share) and a right
 * rail (related treatments, call); the publisher box and previous / next; more posts.
 */

export const anchorId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const topicHref = (key: string) => `${BLOG_PATH}#topic-${key}`;

export function PostHeader({ post, crumbs }: { post: BlogPost; crumbs: Crumb[] }) {
  const topic = topicOf(post.topic);
  return (
    <section className={styles.hero} aria-labelledby="post-title">
      <ReadingProgress target="post-article" />
      <div className={`container ${styles.heroInner}`}>
        <Breadcrumb items={crumbs} className={styles.crumbs} />
        <a href={topicHref(post.topic)} className={styles.topic}>
          <Icon name={topic.icon as IconName} size={16} /> {topic.label}
        </a>
        <h1 id="post-title" className={styles.title}>
          <RiseWords text={post.title} />
        </h1>
        <div className={styles.byline}>
          <span className={styles.avatar} aria-hidden="true">
            <ToothMark />
          </span>
          <span className={styles.bylineText}>
            <strong>{practice.name}</strong>
            <span>
              <time dateTime={post.date.slice(0, 10)}>{postDate(post.date)}</time>
              <span aria-hidden="true"> · </span>
              {readMinutes(post)} min read
            </span>
          </span>
        </div>
      </div>
      <div className={`container ${styles.photo}`}>
        <MediaFrame image={postImage(post.slug)} ratio="21 / 9" sizes="(max-width: 1440px) 92vw, 1300px" priority reveal="load" className={styles.photoFrame} />
      </div>
    </section>
  );
}

export function PostBody({ post }: { post: BlogPost }) {
  const topic = topicOf(post.topic);
  const headings = post.blocks.filter((b): b is { h2: string } => "h2" in b).map((b) => ({ id: anchorId(b.h2), label: b.h2 }));
  const firstP = post.blocks.findIndex((b) => "p" in b);
  return (
    <section className={styles.body} aria-label="Article">
      <div className={`container ${styles.layout}`}>
        <aside className={styles.rail} aria-label="Contents and sharing">
          <div className={styles.railInner} data-reveal>
            {headings.length > 1 ? <PostToc items={headings} /> : null}
            <ShareLinks url={absoluteUrl(postPath(post.slug))} title={post.title} />
          </div>
        </aside>

        <article id="post-article" className={styles.prose}>
          {post.blocks.map((block, i) => {
            if ("h2" in block) {
              return (
                <h2 key={i} id={anchorId(block.h2)} data-reveal>
                  {block.h2}
                </h2>
              );
            }
            if ("ul" in block) {
              return (
                <ul key={i} role="list">
                  {block.ul.map((item) => (
                    <li key={item} data-reveal>
                      <span className={styles.bullet} aria-hidden="true" />
                      <span>
                        <Rich text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className={i === firstP ? styles.lede : undefined} data-reveal>
                <Rich text={block.p} />
              </p>
            );
          })}

          <footer className={styles.articleFoot}>
            <p className={styles.filed} data-reveal>
              <span>Filed under</span>
              <a href={topicHref(post.topic)}>
                <Icon name={topic.icon as IconName} size={15} /> {topic.label}
              </a>
            </p>
            <div className={styles.publisher} data-reveal>
              <span className={styles.publisherMark} aria-hidden="true">
                <ToothMark />
              </span>
              <div className={styles.publisherCopy}>
                <p className={styles.publisherName}>Published by {practice.name}</p>
                <p>
                  {practice.address.street}, {practice.address.city}, {practice.address.region} {practice.address.postalCode} ·{" "}
                  <a href={practice.phone.href}>{practice.phone.display}</a>
                </p>
                <SiteLink href="/about-us/" className="text-link">
                  About our practice <Icon name="arrow" size={16} />
                </SiteLink>
              </div>
            </div>
          </footer>
        </article>

        <aside className={styles.side} aria-label="Related care">
          <div className={styles.sideInner}>
            {topic.links.length ? (
              <div className={styles.related} data-reveal>
                <p className={styles.railTitle}>Related treatments</p>
                <ul role="list">
                  {topic.links.map((link) => (
                    <li key={link.href}>
                      <SiteLink href={link.href}>
                        <span>{link.label}</span>
                        <Icon name="arrow" size={16} />
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className={styles.call} data-reveal>
              <span className={styles.callIcon} aria-hidden="true">
                <Icon name="chat" size={22} />
              </span>
              <p className={styles.callTitle}>Questions about your own teeth?</p>
              <Button href={practice.phone.href} icon="phone" variant="light" track="call_click_blog_post">
                Call {practice.phone.display}
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/** Previous and next post (list order) */
export function PostNav({ post }: { post: BlogPost }) {
  const index = posts.findIndex((p) => p.slug === post.slug);
  const links = [
    { item: posts[index - 1], label: "Previous article", dir: "prev" as const },
    { item: posts[index + 1], label: "Next article", dir: "next" as const },
  ];
  return (
    <nav className={styles.pager} aria-label="Previous and next articles">
      <div className={`container ${styles.pagerGrid}`}>
        {links.map(({ item, label, dir }) =>
          item ? (
            <div key={dir} className={dir === "next" ? styles.pagerNext : undefined} data-reveal>
              <SiteLink href={postPath(item.slug)} className={styles.pagerLink}>
                <MediaFrame image={postImage(item.slug)} ratio="1 / 1" sizes="96px" className={styles.pagerImage} />
                <span className={styles.pagerCopy}>
                  <span className={styles.pagerLabel}>
                    {dir === "prev" ? <Icon name="arrow" size={16} className={styles.flip} /> : null}
                    {label}
                    {dir === "next" ? <Icon name="arrow" size={16} /> : null}
                  </span>
                  <span className={styles.pagerTitle}>{item.title}</span>
                </span>
              </SiteLink>
            </div>
          ) : (
            <span key={dir} aria-hidden="true" />
          ),
        )}
      </div>
    </nav>
  );
}

/** More posts: the same topic first, then others, three in all */
export function MorePosts({ post }: { post: BlogPost }) {
  const same = posts.filter((p) => p.topic === post.topic && p.slug !== post.slug);
  const others = posts.filter((p) => p.topic !== post.topic);
  const more = [...same, ...others].slice(0, 3);
  return (
    <section className={styles.more} aria-labelledby="post-more-title">
      <div className="container">
        <div className={styles.moreHead}>
          <div className={styles.moreTitle}>
            <p className="label" data-reveal>
              Keep reading
            </p>
            <h2 id="post-more-title" data-reveal>
              More From the Blog
            </h2>
          </div>
          <div data-reveal>
            <SiteLink href={BLOG_PATH} className="text-link">
              All articles <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <ul role="list" className={styles.moreGrid}>
          {more.map((p) => (
            <li key={p.slug} data-reveal>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
