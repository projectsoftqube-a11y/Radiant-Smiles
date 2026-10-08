import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import type { CostBlock } from "@/content/pages/general/common";
import styles from "./Cost.module.css";

/** Icon for each way to pay, from its bold lead */
const payIcon = (lead: string): IconName =>
  /insurance:/i.test(lead) && !/no insurance/i.test(lead)
    ? "shield"
    : /financ/i.test(lead)
      ? "banknote"
      : /membership plan:/i.test(lead)
        ? "card"
        : "tag";

/**
 * Cost & insurance, shared by the treatment pages like the FAQ: the H2 and its copy on the
 * left, the ways to pay as a ledger card on the right. A cost section that is a single
 * paragraph (sealants, fluoride) becomes a slim note with a coin chip.
 */
export function Cost({
  id,
  cost,
  label = "Cost & insurance",
  flush,
}: {
  id: string;
  cost: CostBlock;
  label?: string;
  /** No top padding (the section above is white too) */
  flush?: boolean;
}) {
  if (!cost.items?.length) {
    return (
      <section className={flush ? `${styles.noteSection} ${styles.flush}` : styles.noteSection} aria-labelledby={id}>
        <div className="container">
          <div className={styles.note}>
            <span className={styles.noteIcon} aria-hidden="true" data-reveal>
              <Icon name="badgeDollar" size={30} />
            </span>
            <div className={styles.noteCopy}>
              <h2 id={id} data-reveal>
                {cost.title}
              </h2>
              {cost.paragraphs?.map((text) => (
                <p key={text.slice(0, 30)} data-reveal>
                  <Rich text={text} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="label" data-reveal>
            {label}
          </p>
          <h2 id={id} data-reveal>
            {cost.title}
          </h2>
          {cost.paragraphs?.map((text) => (
            <p key={text.slice(0, 30)} className="lead" data-reveal>
              <Rich text={text} />
            </p>
          ))}
          {cost.after?.map((text) => (
            <p key={text.slice(0, 30)} className={styles.after} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <ul role="list" className={styles.ledger}>
          {cost.items.map((item) => (
            <li key={item.lead} className={styles.row} data-reveal>
              <span className={styles.rowIcon} aria-hidden="true">
                <Icon name={payIcon(item.lead)} size={22} />
              </span>
              <p>
                <strong>{item.lead}</strong> <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
