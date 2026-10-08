import { Button } from "@/components/ui/Button";
import { Rich } from "@/components/ui/Rich";
import { callLink, type FaqBlock } from "@/content/pages/shared";
import styles from "./FaqAccordion.module.css";

/**
 * FAQ for inner pages: the H2 and a call button on the left (sticky on desktop), the
 * questions on the right as one list of <details>, so every answer is in the HTML on
 * load. The first question starts open. Text is identical to the FAQPage schema.
 */
export function FaqAccordion({ id, faqs, track }: { id: string; faqs: FaqBlock; track: string }) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.side}>
          <p className="label" data-reveal>
            FAQ
          </p>
          <h2 id={id} data-reveal>
            {faqs.title}
          </h2>
          <div data-reveal>
            <Button href={callLink.href} icon="phone" variant="outline" track={`call_click_${track}_faq`}>
              {callLink.label}
            </Button>
          </div>
        </div>

        <div className={styles.list}>
          {faqs.items.map((item, i) => (
            <details key={item.question} className={styles.item} open={i === 0} data-reveal>
              <summary className={styles.summary}>
                <h3 className={styles.question}>{item.question}</h3>
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                <p>
                  <Rich text={item.answer} />
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
