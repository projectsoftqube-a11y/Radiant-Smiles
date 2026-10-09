import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Rays } from "@/components/ui/Rays";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { blogBrowse, blogLatest, blogResources, postDate, postPath, posts, readMinutes, topicOf, topics } from "@/content/pages/blog/hub";
import type { BlogPost } from "@/content/pages/blog/types";
import { PostMini, PostRow, postImage } from "./PostCard";
import { TopicFilter } from "./TopicFilter";
import styles from "./BlogHub.module.css";

/**
 * Blog hub sections (order and heading levels follow 02 Content.md). Designs used on this page
 * only: the front-page featured block under the masthead, the topic index, the topic-grouped
 * article list with its filter, and the resources panel.
 */

/** The newest post, then the next two from other topics */
function frontPage(): { lead: BlogPost; more: BlogPost[] } {
  const [lead, ...rest] = posts;
  const more: BlogPost[] = [];
  const seen = new Set([lead.topic]);
  for (const post of rest) {
    if (more.length === 3) break;
    if (seen.has(post.topic)) continue;
    seen.add(post.topic);
    more.push(post);
  }
  return { lead, more };
}

/** Hero footer: the featured article beside an "Also new" list (real links, tracked) */
export function FeaturedStories() {
  const { lead, more } = frontPage();
  const topic = topicOf(lead.topic);
  return (
    <div className={styles.front}>
      <article className={styles.lead}>
        <MediaFrame image={postImage(lead.slug)} sizes="(max-width: 991px) 92vw, 760px" priority reveal="load" className={styles.leadImage} />
        <div className={styles.leadCard}>
          <span className={styles.kicker}>
            <Icon name={topic.icon as IconName} size={14} /> Featured · {topic.label}
          </span>
          <p className={styles.leadTitle}>
            <SiteLink href={postPath(lead.slug)} className={styles.leadLink} data-track="blog_card_click" data-track-post={lead.slug}>
              {lead.title}
            </SiteLink>
          </p>
          <p className={styles.leadExcerpt}>{lead.excerpt}</p>
          <span className={styles.leadFoot}>
            <span>
              <time dateTime={lead.date.slice(0, 10)}>{postDate(lead.date)}</time> · {readMinutes(lead)} min read
            </span>
            <span className={styles.leadGo} aria-hidden="true">
              Read article <Icon name="arrow" size={16} />
            </span>
          </span>
        </div>
      </article>
      <div className={styles.alsoNew}>
        <p className={styles.alsoTitle}>Also new</p>
        <ul role="list">
          {more.map((post) => (
            <li key={post.slug}>
              <PostMini post={post} />
            </li>
          ))}
        </ul>
        <a href="#blog-latest-title" className={styles.alsoAll}>
          All {posts.length} articles <Icon name="arrow" size={16} />
        </a>
      </div>
    </div>
  );
}

/** Browse by topic: an index of topics, each with its treatment links and article count */
export function TopicIndex() {
  const rows = [
    ...topics.filter((t) => t.links.length).map((t) => ({ ...t, count: posts.filter((p) => p.topic === t.key).length })),
    { key: "costs", label: blogBrowse.extra.label, icon: blogBrowse.extra.icon, links: blogBrowse.extra.links, count: 0 },
  ];
  return (
    <section className={styles.browse} aria-labelledby="blog-browse-title">
      <div className={`container ${styles.browseGrid}`}>
        <div className={styles.browseHead}>
          <p className="label" data-reveal>
            Topics
          </p>
          <h2 id="blog-browse-title" data-reveal>
            {blogBrowse.title}
          </h2>
          <p className="lead" data-reveal>
            {blogBrowse.intro}
          </p>
        </div>
        <ul role="list" className={styles.index}>
          {rows.map((row) => (
            <li key={row.key} className={styles.indexRow} data-reveal>
              <span className={styles.indexIcon} aria-hidden="true">
                <Icon name={row.icon as IconName} size={24} />
              </span>
              <p className={styles.indexCopy}>
                <strong>{row.label}:</strong>{" "}
                {row.links.map((link, i) => (
                  <span key={link.href}>
                    {i ? <span aria-hidden="true"> · </span> : null}
                    <SiteLink href={link.href}>{link.label}</SiteLink>
                  </span>
                ))}
              </p>
              {row.count ? (
                <a href={`#topic-${row.key}`} className={styles.indexCount} aria-label={`${row.count} ${row.count === 1 ? "article" : "articles"} on ${row.label}`}>
                  {row.count} {row.count === 1 ? "article" : "articles"} <Icon name="arrow" size={16} />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Latest posts: the topic filter, then one H3 group per topic (content-file order) with its rows */
export function PostFeed() {
  const groups = topics.map((t) => ({ ...t, posts: posts.filter((p) => p.topic === t.key) })).filter((g) => g.posts.length);
  return (
    <section className={styles.feed} aria-labelledby="blog-latest-title">
      <div className="container">
        <div className={styles.feedHead}>
          <div className={styles.feedTitle}>
            <p className="label" data-reveal>
              Articles
            </p>
            <h2 id="blog-latest-title" data-reveal>
              {blogLatest.title}
            </h2>
          </div>
          <div data-reveal>
            <TopicFilter total={posts.length} topics={groups.map((g) => ({ key: g.key, label: g.label, count: g.posts.length }))} />
          </div>
        </div>
        <div className={styles.groups}>
          {groups.map((g) => (
            <div key={g.key} id={`topic-${g.key}`} className={styles.group} data-topic-group={g.key}>
              <div className={styles.groupHead}>
                <span className={styles.groupIcon} aria-hidden="true" data-reveal>
                  <Icon name={g.icon as IconName} size={22} />
                </span>
                <h3 className={styles.groupTitle} data-reveal>
                  {g.label}
                </h3>
                <p className={styles.groupCount} data-reveal>
                  {g.posts.length} {g.posts.length === 1 ? "article" : "articles"}
                </p>
              </div>
              <ul role="list" className={styles.rows}>
                {g.posts.map((post) => (
                  <li key={post.slug} data-reveal>
                    <PostRow post={post} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** More patient resources: the paragraph beside its two destinations as doors */
export function ResourcesPanel() {
  return (
    <section className={styles.resources} aria-labelledby="blog-resources-title">
      <div className="container">
        <div className={styles.panel}>
          <Rays className={styles.panelRays} count={17} spread={120} inner={0.3} scroll />
          <div className={styles.panelCopy}>
            <p className="label label-inverse" data-reveal>
              Resources
            </p>
            <h2 id="blog-resources-title" data-reveal>
              {blogResources.title}
            </h2>
            <p data-reveal>
              <Rich text={blogResources.text} />
            </p>
          </div>
          <ul role="list" className={styles.doors}>
            {blogResources.doors.map((door) => (
              <li key={door.href} data-reveal>
                <SiteLink href={door.href} className={styles.door}>
                  <span className={styles.doorIcon} aria-hidden="true">
                    <Icon name={door.icon as IconName} size={24} />
                  </span>
                  <span className={styles.doorLabel}>{door.label}</span>
                  <Icon name="arrow" size={18} />
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
