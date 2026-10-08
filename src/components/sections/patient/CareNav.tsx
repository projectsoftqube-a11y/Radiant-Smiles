import SiteLink from "@/components/ui/SiteLink";
import { careSectionNav } from "@/content/pages/patient/care";
import styles from "./CareNav.module.css";

/**
 * Section navigation for Care & Comfort and its child pages (handoff: show the children
 * as links in the section navigation). The current page is marked.
 */
export function CareNav({ current }: { current: string }) {
  return (
    <nav className={styles.nav} aria-label="Care & Comfort pages">
      <div className="container">
        <ul role="list" className={styles.list} data-reveal>
          {careSectionNav.map((item) => (
            <li key={item.href}>
              {item.href === current ? (
                <span className={`${styles.link} ${styles.current}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <SiteLink href={item.href} className={styles.link}>
                  {item.label}
                </SiteLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
