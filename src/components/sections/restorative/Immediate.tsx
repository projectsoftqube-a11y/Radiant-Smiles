import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { idHealing, idHow, idKnow, idLong, idWho } from "@/content/pages/restorative/dentures";
import c from "./Common.module.css";
import styles from "./Immediate.module.css";

/**
 * Immediate Dentures sections (order and heading levels follow 02 Content.md). "Same day
 * dentures" is not used in headings or alt text (handoff). Designs used on this page only:
 * the one-appointment board, the keep-or-remove check, the made-in-advance steps, the honest
 * trade-off card, the healing months and the long-term fit card.
 */

/** Hero visual: one appointment, teeth out and the denture in (decorative) */
export function OneAppointment() {
  return (
    <div className={styles.board} aria-hidden="true">
      <span className={styles.boardTitle}>
        <Icon name="calendarCheck" size={18} /> One appointment
      </span>
      <div className={styles.slots}>
        <span className={styles.slot} style={{ "--i": 0 } as CSSProperties}>
          <span className={styles.slotIcon}>
            <Icon name="tooth" size={22} />
          </span>
          <span className={styles.slotText}>Remaining teeth removed</span>
        </span>
        <span className={styles.arrow}>
          <Icon name="arrow" size={18} />
        </span>
        <span className={`${styles.slot} ${styles.slotNew}`} style={{ "--i": 1 } as CSSProperties}>
          <span className={styles.slotIcon}>
            <Icon name="smile" size={22} />
          </span>
          <span className={styles.slotText}>Denture placed</span>
        </span>
      </div>
      <span className={styles.boardFoot}>You leave with teeth</span>
    </div>
  );
}

/** Who immediate dentures are for */
export function WhoImmediate() {
  return (
    <section className={c.section} aria-labelledby="id-who-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Is it for you
          </p>
          <h2 id="id-who-title" data-reveal>
            {idWho.title}
          </h2>
          {idWho.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.decide} aria-hidden="true">
          <span className={styles.decideQ} data-reveal>
            Can any teeth be kept?
          </span>
          <div className={styles.decideRow}>
            <span className={styles.decideYes} data-reveal>
              <strong>Yes</strong> Partial or implant-retained denture
            </span>
            <span className={styles.decideNo} data-reveal>
              <strong>No</strong> Immediate denture, planned first
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** How they work: three steps, made in advance */
export function MadeInAdvance() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="id-how-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Made in advance
          </p>
          <h2 id="id-how-title" data-reveal>
            {idHow.title}
          </h2>
          <p className="lead" data-reveal>
            {idHow.intro}
          </p>
        </div>
        <ol className={styles.steps}>
          {idHow.steps.map((step, i) => (
            <li key={step.lead} className={i === 2 ? styles.stepDay : undefined} data-reveal>
              <span className={styles.stepIcon} aria-hidden="true">
                <Icon name={step.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={`${c.note} ${styles.center}`} data-reveal>
          <Icon name="shield" size={20} />
          <span>{idHow.after}</span>
        </p>
      </div>
    </section>
  );
}

/** What to know: the honest trade-off */
export function TradeOff() {
  return (
    <section className={c.section} aria-labelledby="id-know-title">
      <div className="container">
        <div className={styles.trade}>
          <span className={styles.tradeIcon} aria-hidden="true" data-reveal>
            <Icon name="alert" size={30} />
          </span>
          <div className={styles.tradeCopy}>
            <h2 id="id-know-title" data-reveal>
              {idKnow.title}
            </h2>
            {idKnow.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Healing and adjustments: the first months, gums settling */
export function HealingMonths() {
  return (
    <section className={`${c.section} ${c.blush}`} aria-labelledby="id-healing-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            While you heal
          </p>
          <h2 id="id-healing-title" data-reveal>
            {idHealing.title}
          </h2>
          {idHealing.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.months} aria-hidden="true" data-inview data-reveal>
          <span className={styles.monthsTitle}>Gums settle as they heal</span>
          {[
            { name: "Placement day", fill: 100 },
            { name: "First weeks", fill: 78 },
            { name: "First months", fill: 58 },
            { name: "Healed", fill: 44 },
          ].map((m, i) => (
            <span key={m.name} className={styles.monthRow} style={{ "--i": i } as CSSProperties}>
              <span className={styles.monthName}>{m.name}</span>
              <span className={styles.monthBar}>
                <span style={{ width: `${m.fill}%` }} />
              </span>
            </span>
          ))}
          <span className={styles.monthsNote}>
            <Icon name="layers" size={16} /> Soft liner fills the space in between
          </span>
        </div>
      </div>
    </section>
  );
}

/** Moving to your long-term fit: the permanent reline */
export function LongTermFit() {
  return (
    <section className={c.section} aria-labelledby="id-long-title">
      <div className="container">
        <div className={styles.longCard}>
          <div className={styles.longCopy}>
            <h2 id="id-long-title" data-reveal>
              {idLong.title}
            </h2>
            {idLong.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                <Rich text={text} />
              </p>
            ))}
          </div>
          <span className={styles.reline} aria-hidden="true" data-reveal>
            <Icon name="check" size={18} strokeWidth={2.4} />
            Permanent reline
          </span>
        </div>
      </div>
    </section>
  );
}
