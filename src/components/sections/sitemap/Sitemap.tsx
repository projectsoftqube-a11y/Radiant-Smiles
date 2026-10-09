import type { CSSProperties } from "react";
import { ToothMark } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import type { SitemapGroup, SitemapLink } from "@/content/pages/sitemap";
import { practice } from "@/content/site";
import styles from "./Sitemap.module.css";

/**
 * HTML sitemap (designs used on this page only): the site tree in the hero, the page finder,
 * and the directory of topic cards whose links hang off a tree spine. Handoff markup: each
 * group is an H2 followed by a list of plain links; Pennsylvania and New Jersey are H3s.
 */

export const count = (group: SitemapGroup) => group.links.length + (group.subgroups ?? []).reduce((n, s) => n + s.links.length, 0);

/** Hero visual: the website as a tree, one branch per group with its page count; each branch jumps to its group */
export function SiteTree({ groups }: { groups: SitemapGroup[] }) {
  return (
    <nav className={styles.tree} aria-label="Jump to a group">
      <span className={styles.root} aria-hidden="true">
        <span className={styles.rootMark}>
          <ToothMark />
        </span>
        <span>
          <strong>radiant-smiles.com</strong>
          <small>{groups.reduce((n, g) => n + count(g), 0)} pages</small>
        </span>
      </span>
      <ul role="list" className={styles.branches}>
        {groups.map((group, i) => (
          <li key={group.id} style={{ "--i": i } as CSSProperties}>
            <a href={`#${group.id}`} className={styles.branch}>
              <span className={styles.branchIcon} aria-hidden="true">
                <Icon name={group.icon} size={16} />
              </span>
              <span className={styles.branchName}>{group.title}</span>
              <span className={styles.branchCount}>
                {count(group)}
                <span className="visually-hidden"> pages</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Links({ links }: { links: SitemapLink[] }) {
  return (
    <ul role="list" className={styles.links}>
      {links.map((link) => (
        <li key={link.href} data-sitemap-item={link.label.toLowerCase()} data-reveal>
          <SiteLink href={link.href} className={styles.link}>
            <span>{link.label}</span>
            <Icon name="arrow" size={16} className={styles.linkArrow} />
          </SiteLink>
        </li>
      ))}
    </ul>
  );
}

/** The directory: one card per group, in content-file order */
export function SitemapDirectory({ groups }: { groups: SitemapGroup[] }) {
  return (
    <section className={styles.directory} aria-label="All pages">
      <div className="container">
        <p className={styles.noMatch} data-sitemap-empty hidden>
          No page titles match your search. Call us at <a href={practice.phone.href}>{practice.phone.display}</a> and we&apos;ll point
          you in the right direction.
        </p>
        <div className={styles.columns}>
          {groups.map((group) => (
            <section key={group.id} id={group.id} className={styles.group} aria-labelledby={`${group.id}-title`} data-sitemap-group>
              <div className={styles.groupHead}>
                <span className={styles.groupIcon} aria-hidden="true" data-reveal>
                  <Icon name={group.icon} size={22} />
                </span>
                <h2 id={`${group.id}-title`} data-reveal>
                  {group.title}
                </h2>
                <span className={styles.groupCount} data-reveal>
                  {count(group)} {count(group) === 1 ? "page" : "pages"}
                </span>
              </div>
              <p className={styles.groupIntro} data-reveal>
                {group.intro}
              </p>
              {group.links.length ? <Links links={group.links} /> : null}
              {group.subgroups ? (
                <div className={styles.states}>
                  {group.subgroups.map((sub) => (
                    <div key={sub.title} className={styles.state} data-sitemap-sub>
                      <h3 className={styles.stateTitle} data-reveal>
                        <span aria-hidden="true">{sub.title === "Pennsylvania" ? "PA" : "NJ"}</span>
                        {sub.title}
                      </h3>
                      <Links links={sub.links} />
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
