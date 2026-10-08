import { ToothMark } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { Rays } from "@/components/ui/Rays";
import { Rich } from "@/components/ui/Rich";
import { appointmentLink, callLink, type ClosingCta as ClosingCtaContent } from "@/content/pages/shared";
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
            <div className={styles.ctas} data-reveal>
              <Button href={callLink.href} icon="phone" track={`call_click_${track}`}>
                {callLink.label}
              </Button>
              <Button href={appointmentLink.href} variant="outline" track={`appointment_click_${track}`}>
                {appointmentLink.label}
              </Button>
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
