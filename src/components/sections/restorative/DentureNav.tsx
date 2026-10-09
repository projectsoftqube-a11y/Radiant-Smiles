import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { dentureNav } from "@/content/pages/restorative/dentures";
import styles from "./DentureNav.module.css";

/**
 * Dentures sub-hub navigation (handoff: Dentures is the parent of Partial, Immediate,
 * Implant-Retained and Relines & Repairs). Sticky under the header; the current page is marked.
 */
export function DentureNav({ current }: { current: string }) {
  return (
    <nav className={styles.nav} aria-label="Denture pages">
      <div className={`container ${styles.inner}`}>
        <span className={styles.title} aria-hidden="true" data-reveal>
          <Icon name="smile" size={18} /> Dentures
        </span>
        <ul role="list" className={styles.list} data-reveal>
          {dentureNav.map((item) => (
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
