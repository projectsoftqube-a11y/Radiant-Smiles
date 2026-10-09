import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { exExpect, exRecovery, exReplace, exWhen, exWisdom } from "@/content/pages/restorative/extract";
import c from "./Common.module.css";
import styles from "./Extractions.module.css";

/**
 * Tooth Extractions sections (order and heading levels follow 02 Content.md). Aftercare is
 * plain HTML text (handoff). Designs used on this page only: the plan-before-it-comes-out
 * card, the save-first reasons, the four-step chairside list with the sections note, the
 * 72-hour recovery clock, the replacement shelf and the wisdom teeth link card.
 */

/** Hero visual: the tooth comes out, and its replacement is already planned (decorative) */
export function PlanAhead() {
  return (
    <div className={styles.plan} aria-hidden="true">
      <svg viewBox="0 0 300 200" className={styles.planArt}>
        <path d="M0 130c50 0 70-12 150-12s100 12 150 12v70H0Z" fill="#f6cfd0" />
        {[40, 104, 196, 260].map((x) => (
          <rect key={x} x={x - 22} y="70" width="44" height="54" rx="16" fill="#ffffff" stroke="#1b3d6e" strokeWidth="2.5" />
        ))}
        {/* The tooth lifting out of its socket */}
        <g className={styles.lift}>
          <path d="M128 64c0-10 8-16 22-16s22 6 22 16v52c0 6-6 10-10 10l-4 34c-1 8-4 12-8 12s-7-4-8-12l-4-34c-4 0-10-4-10-10Z" fill="#fbf6ec" stroke="#1b3d6e" strokeWidth="2.5" />
        </g>
        <path className={styles.socket} d="M132 124h36" stroke="#c86b76" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <div className={styles.planCard}>
        <span className={styles.planKicker}>Planned before it comes out</span>
        <span className={styles.planOptions}>
          <span>Implant</span>
          <span>Bridge</span>
          <span>Partial</span>
          <span>Immediate denture</span>
        </span>
      </div>
    </div>
  );
}

/** When a tooth needs to come out: five reasons, saving it first */
export function WhenRemove() {
  return (
    <section className={c.section} aria-labelledby="ex-when-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Save it first
          </p>
          <h2 id="ex-when-title" data-reveal>
            {exWhen.title}
          </h2>
          <p className="lead" data-reveal>
            {exWhen.intro}
          </p>
        </div>
        <ul role="list" className={styles.reasons}>
          {exWhen.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.reasonIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.saveFirst} data-reveal>
          <Icon name="shield" size={22} />
          <span>
            <Rich text={exWhen.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** What to expect: four chairside steps and the sections note */
export function Chairside() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="ex-expect-title">
      <div className={`container ${styles.expectGrid}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            In the chair
          </p>
          <h2 id="ex-expect-title" data-reveal>
            {exExpect.title}
          </h2>
          <p className="lead" data-reveal>
            {exExpect.intro}
          </p>
          <div className={styles.sections}>
            <h3 data-reveal>{exExpect.sections.title}</h3>
            <p data-reveal>{exExpect.sections.text}</p>
          </div>
        </div>
        <div className={styles.chair}>
          <ol className={styles.chairSteps}>
            {exExpect.steps.map((step, i) => (
              <li key={step.lead} style={{ "--i": i } as CSSProperties} data-reveal>
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
          <p className={styles.chairNote} data-reveal>
            <Icon name="headphones" size={20} />
            <span>{exExpect.after}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Recovery: the first hour, the 72-hour avoid list and the notes */
export function RecoveryClock() {
  return (
    <section className={c.section} aria-labelledby="ex-recovery-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Healing
          </p>
          <h2 id="ex-recovery-title" data-reveal>
            {exRecovery.title}
          </h2>
          <p className="lead" data-reveal>
            {exRecovery.intro}
          </p>
        </div>
        <div className={styles.recoveryGrid}>
          <div className={styles.hour}>
            <span className={styles.hourDial} aria-hidden="true" data-reveal>
              <span className={styles.hourFigure}>30–45</span>
              <span>minutes</span>
            </span>
            <h3 data-reveal>{exRecovery.hour.title}</h3>
            <p data-reveal>{exRecovery.hour.text}</p>
          </div>
          <div className={styles.days}>
            <span className={styles.daysBadge} aria-hidden="true" data-reveal>
              72 hours
            </span>
            <h3 data-reveal>{exRecovery.days.title}</h3>
            <p data-reveal>{exRecovery.days.intro}</p>
            <ul role="list" className={styles.avoid}>
              {exRecovery.days.items.map((item) => (
                <li key={item.text} data-reveal>
                  <span aria-hidden="true">
                    <Icon name={item.icon as IconName} size={18} />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.recoveryAfter}>
          {exRecovery.after.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Replacing the tooth: four options on a shelf */
export function ReplaceShelf() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="ex-replace-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            What comes next
          </p>
          <h2 id="ex-replace-title" data-reveal>
            {exReplace.title}
          </h2>
          <p className="lead" data-reveal>
            {exReplace.intro}
          </p>
        </div>
        <ul role="list" className={styles.shelf}>
          {exReplace.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.shelfIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={26} />
              </span>
              <p>
                <strong>
                  <Rich text={item.lead} />
                </strong>{" "}
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Wisdom teeth extraction: a link card */
export function WisdomLink() {
  return (
    <section className={c.section} aria-labelledby="ex-wisdom-title">
      <div className="container">
        <div className={styles.wisdom}>
          <span className={styles.wisdomIcon} aria-hidden="true" data-reveal>
            <Icon name="xray" size={28} />
          </span>
          <div className={styles.wisdomCopy}>
            <h2 id="ex-wisdom-title" data-reveal>
              {exWisdom.title}
            </h2>
            <p data-reveal>
              <Rich text={exWisdom.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
