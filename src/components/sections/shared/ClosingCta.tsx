import { ToothMark } from "@/components/ui/Brand";
import { Rays } from "@/components/ui/Rays";
import { Rich } from "@/components/ui/Rich";
import type { ClosingCta as ClosingCtaContent } from "@/content/pages/shared";
import { CtaButtons } from "./CtaButtons";
import styles from "./ClosingCta.module.css";

/**
 * Closing call to action, shared by every page: light rays draw out from the logo's tooth
 * mark as it scrolls in. The text may carry inline links ([label](/path)).
 */
export function ClosingCta({ id, content, track }: { id: string; content: ClosingCtaContent; track: string }) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className="container">
        <div className={styles.panel} data-reveal>
          <div className={styles.copy}>
            <h2 id={id} data-reveal>
              {content.title}
            </h2>
            <p className="lead" data-reveal>
              <Rich text={content.text} />
            </p>
            <div data-reveal>
              <CtaButtons buttons={content.buttons ?? ["call", "appointment"]} track={track} className={styles.ctas} />
            </div>
          </div>
          <div className={styles.art} aria-hidden="true">
            <Rays className={styles.rays} scroll count={21} spread={200} inner={0.3} />
            <ToothMark className={styles.mark} />
          </div>
        </div>
      </div>
    </section>
  );
}
