import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { wtAll, wtExpect, wtRecovery, wtSigns, wtTime } from "@/content/pages/restorative/extract";
import c from "./Common.module.css";
import styles from "./Wisdom.module.css";

/**
 * Wisdom Teeth Removal sections (order and heading levels follow 02 Content.md). Never name
 * IV sedation; age guidance stays as written (handoff). Designs used on this page only: the
 * impacted third molar X-ray, the four problem cards, the now/later/not-at-all choice, the
 * age band, the under-an-hour steps and the first-days recovery grid.
 */

/** Hero visual: an X-ray style view of a wisdom tooth tilted against the second molar (decorative) */
export function ImpactedXray() {
  return (
    <div className={styles.xray} aria-hidden="true">
      <span className={styles.xrayTitle}>
        <Icon name="xray" size={16} /> X-ray view
      </span>
      <svg viewBox="0 0 300 200" className={styles.xrayArt}>
        <path d="M0 96h300" stroke="rgb(169 218 243 / 0.3)" strokeWidth="2" strokeDasharray="6 6" />
        {/* First and second molars upright */}
        {[60, 140].map((x) => (
          <path
            key={x}
            d={`M${x - 30} 40c0-14 12-22 30-22s30 8 30 22v44c0 8-4 14-8 18l-6 66c-1 8-6 12-10 12s-6-6-6-14l-2-40-2 40c0 8-2 14-6 14s-9-4-10-12l-6-66c-4-4-8-10-8-18Z`}
            fill="rgb(255 255 255 / 0.12)"
            stroke="#a9daf3"
            strokeWidth="2.5"
          />
        ))}
        {/* The wisdom tooth, tilted into the second molar */}
        <g className={styles.wisdom}>
          <path
            d="M200 60c0-14 12-22 30-22s30 8 30 22v44c0 8-4 14-8 18l-6 50c-1 8-6 12-10 12s-6-6-6-14l-2-30-2 30c0 8-2 14-6 14s-9-4-10-12l-6-50c-4-4-8-10-8-18Z"
            fill="rgb(229 149 156 / 0.25)"
            stroke="#e5959c"
            strokeWidth="2.5"
            transform="rotate(-38 230 110)"
          />
        </g>
        <circle className={styles.pressure} cx="176" cy="90" r="9" fill="#e5959c" />
      </svg>
      <div className={styles.xrayKey}>
        <span className={styles.keyOk}>Second molar</span>
        <span className={styles.keyBad}>Trapped wisdom tooth</span>
      </div>
    </div>
  );
}

/** Signs of wisdom tooth problems: four cards, then what to watch for */
export function WisdomSigns() {
  return (
    <section className={c.section} aria-labelledby="wt-signs-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Problems
          </p>
          <h2 id="wt-signs-title" data-reveal>
            {wtSigns.title}
          </h2>
          <p className="lead" data-reveal>
            {wtSigns.intro}
          </p>
        </div>
        <ul role="list" className={styles.problems}>
          {wtSigns.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.problemIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.watch} data-reveal>
          <Icon name="search" size={22} />
          <span>{wtSigns.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Do all wisdom teeth need removing: now, later or not at all */
export function NowLaterNever() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="wt-all-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Not always
          </p>
          <h2 id="wt-all-title" data-reveal>
            {wtAll.title}
          </h2>
          {wtAll.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.choice} aria-hidden="true">
          {[
            { name: "Now", note: "Trapped, crowding or infected", cls: styles.choiceNow },
            { name: "Later", note: "Watched at your checkups", cls: styles.choiceLater },
            { name: "Not at all", note: "Fully in, healthy & easy to clean", cls: styles.choiceNever },
          ].map((o) => (
            <span key={o.name} className={`${styles.choiceRow} ${o.cls}`} data-reveal>
              <span className={styles.choiceName}>{o.name}</span>
              <span className={styles.choiceNote}>{o.note}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The right time: an age band from the teens to after 30 */
export function AgeBand() {
  return (
    <section className={c.section} aria-labelledby="wt-time-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Timing
          </p>
          <h2 id="wt-time-title" data-reveal>
            {wtTime.title}
          </h2>
        </div>
        <div className={styles.band} aria-hidden="true" data-inview data-reveal>
          <span className={styles.bandBar}>
            <span className={styles.bandEasy} />
          </span>
          <span className={styles.bandLabels}>
            <span>Teens</span>
            <span className={styles.bandBest}>Mid-teens to early twenties: easiest</span>
            <span>After 30: slower healing</span>
          </span>
        </div>
        <div className={styles.timeCopy}>
          {wtTime.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** What to expect: four steps, most removals under an hour */
export function UnderAnHour() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="wt-expect-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            In the office
          </p>
          <h2 id="wt-expect-title" data-reveal>
            {wtExpect.title}
          </h2>
          <p className="lead" data-reveal>
            {wtExpect.intro}
          </p>
        </div>
        <ol className={styles.steps}>
          {wtExpect.steps.map((step, i) => (
            <li key={step.lead} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.stepIcon} aria-hidden="true">
                <Icon name={step.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={`${c.note} ${styles.center}`} data-reveal>
          <Icon name="clipboard" size={20} />
          <span>{wtExpect.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Recovery tips: the first days, six at a glance */
export function FirstDays() {
  return (
    <section className={c.section} aria-labelledby="wt-recovery-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Recovery
          </p>
          <h2 id="wt-recovery-title" data-reveal>
            {wtRecovery.title}
          </h2>
          <p className="lead" data-reveal>
            {wtRecovery.intro}
          </p>
        </div>
        <ul role="list" className={styles.days}>
          {wtRecovery.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.dayIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.callIf} data-reveal>
          <Icon name="phone" size={20} />
          <span>
            <Rich text={wtRecovery.after} />
          </span>
        </p>
      </div>
    </section>
  );
}
