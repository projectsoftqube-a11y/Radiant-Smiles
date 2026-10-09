import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { invisalignNav } from "@/content/pages/cosmetic/common";
import styles from "../restorative/DentureNav.module.css";
import own from "./InvisalignNav.module.css";

/**
 * Invisalign pages navigation (Invisalign is the parent of Invisalign Teen and Invisalign
 * Cost). Sticky under the header, the current page marked; same rail as the dentures pages.
 */
export function InvisalignNav({ current }: { current: string }) {
  return (
    <nav className={styles.nav} aria-label="Invisalign pages">
      <div className={`container ${styles.inner}`}>
        <span className={`${styles.title} ${own.title}`} aria-hidden="true" data-reveal>
          <Icon name="aligner" size={18} /> Invisalign
        </span>
        <ul role="list" className={styles.list} data-reveal>
          {invisalignNav.map((item) => (
            <li key={item.href}>
              {item.href === current ? (
                <span className={`${styles.link} ${styles.current} ${own.current}`} aria-current="page">
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
