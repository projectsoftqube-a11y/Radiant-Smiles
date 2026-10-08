import { ToothMark } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
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
            {content.quote ? (
              <figure className={styles.quote} data-reveal>
                <blockquote>
                  <p>&ldquo;{content.quote.text}&rdquo;</p>
                </blockquote>{" "}
                <figcaption>{content.quote.author}</figcaption>
              </figure>
            ) : null}
            <h2 id={id} data-reveal>
              {content.title}
            </h2>
            <p className="lead" data-reveal>
              <Rich text={content.text} />
            </p>
            <div data-reveal>
              <CtaButtons buttons={content.buttons ?? ["call", "appointment"]} track={track} className={styles.ctas} />
            </div>
            {content.link ? (
              <div data-reveal>
                <SiteLink href={content.link.href} className="text-link" data-track={content.link.track}>
                  {content.link.label} <Icon name="arrow" size={16} />
                </SiteLink>
              </div>
            ) : null}
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
