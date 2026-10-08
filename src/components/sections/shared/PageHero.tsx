import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Rich } from "@/components/ui/Rich";
import { RiseWords } from "@/components/ui/RiseWords";
import type { PageHeroContent } from "@/content/pages/shared";
import { CtaButtons } from "./CtaButtons";
import type { Crumb } from "@/lib/schema";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  /** Unique id for the H1 (the section is labelled by it) */
  id: string;
  /** Eyebrow above the H1 (decorative label, not a heading) */
  label: string;
  content: PageHeroContent;
  crumbs: Crumb[];
  /** Zero-based word indexes of the H1 set in the heavy weight */
  strong?: number[];
  /** Event name prefix for the hero buttons, e.g. "about" → call_click_about_hero */
  track: string;
  /** The page's own visual, beside the copy. Without it the hero is centred. */
  aside?: ReactNode;
  /** Extra content under the buttons (e.g. a NAP block) */
  children?: ReactNode;
  /** Full-width content along the bottom of the hero (e.g. an offer strip) */
  footer?: ReactNode;
};

/**
 * The inner-page hero, shared by every Core page: breadcrumb, eyebrow, the H1 rising word
 * by word, the intro and the hero buttons on the left; the page's own visual on the right
 * (no line rays: the user wants none in heroes). Pure CSS entrance (no flash, no layout shift).
 * The hero ends on a straight line.
 */
export function PageHero({ id, label, content, crumbs, strong = [], track, aside, children, footer }: PageHeroProps) {
  const centred = !aside;
  return (
    <section className={centred ? `${styles.hero} ${styles.centred}` : styles.hero} aria-labelledby={id}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Breadcrumb items={crumbs} className={styles.crumbs} />
          <p className={`label ${styles.label}`}>{label}</p>
          <h1 id={id} className={styles.title}>
            <RiseWords text={content.h1} strong={strong} />
          </h1>
          <p className={`lead ${styles.intro}`}>
            <Rich text={content.intro} />
          </p>
          <CtaButtons buttons={content.buttons} track={`${track}_hero`} className={styles.ctas} />
          {children ? <div className={styles.extra}>{children}</div> : null}
        </div>
        {aside ? <div className={styles.aside}>{aside}</div> : null}
      </div>
      {footer ? <div className={`container ${styles.footer}`}>{footer}</div> : null}
    </section>
  );
}
