import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { eduLatest, eduStart, latestPosts } from "@/content/pages/patient/education";
import styles from "./Education.module.css";

/**
 * Patient Education sections (order and heading levels follow 02 Content.md). Designs used
 * on this page only: the fanned guide stack, the latest-posts list and the guide shelf.
 */

/** Hero visual: the starter guides fanned like a stack of booklets (decorative) */
export function GuideStack() {
  return (
    <div className={styles.stack} aria-hidden="true">
      {eduStart.guides.slice(0, 4).map((guide, i) => (
        <span key={guide.href} className={styles.booklet} style={{ "--i": i } as CSSProperties}>
          <span className={styles.bookletIcon}>
            <Icon name={guide.icon as IconName} size={22} />
          </span>
          <span className={styles.bookletTitle}>{guide.label}</span>
          <span className={styles.bookletLines}>
            <span />
            <span />
            <span />
          </span>
        </span>
      ))}
    </div>
  );
}

/** Latest guides: the newest blog posts, hidden while there are none (handoff) */
export function LatestGuides() {
  if (!latestPosts.length) return null;
  return (
    <section className={styles.latest} aria-labelledby="edu-latest-title">
      <div className="container">
        <div className={styles.latestHead}>
          <div>
            <h2 id="edu-latest-title" data-reveal>
              {eduLatest.title}
            </h2>
            <p className="lead" data-reveal>
              {eduLatest.text}
            </p>
          </div>
          <div data-reveal>
            <SiteLink href={eduLatest.link.href} className="text-link">
              {eduLatest.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <ul role="list" className={styles.posts}>
          {latestPosts.slice(0, 6).map((post) => (
            <li key={post.href} data-reveal>
              <SiteLink href={post.href} className={styles.post} data-track="click_blog_post">
                <span className={styles.postDate}>{post.date}</span>
                <span className={styles.postTitle}>{post.title}</span>
                <span className={styles.postSummary}>{post.summary}</span>
              </SiteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Start with these guides: five cards on a shelf */
export function GuideShelf() {
  return (
    <section className={styles.shelf} aria-labelledby="edu-start-title">
      <div className="container">
        <div className={styles.shelfHead}>
          <p className="label" data-reveal>
            Guides
          </p>
          <h2 id="edu-start-title" data-reveal>
            {eduStart.title}
          </h2>
        </div>
        <ul role="list" className={styles.guides}>
          {eduStart.guides.map((guide) => (
            <li key={guide.href} className={styles.guide} data-reveal>
              <span className={styles.guideIcon} aria-hidden="true">
                <Icon name={guide.icon as IconName} size={26} />
              </span>
              <p>
                <SiteLink href={guide.href} className={styles.guideLink}>
                  {guide.label}
                </SiteLink>
                {guide.text}
              </p>
              <span className={styles.guideArrow} aria-hidden="true">
                <Icon name="arrowUpRight" size={18} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
