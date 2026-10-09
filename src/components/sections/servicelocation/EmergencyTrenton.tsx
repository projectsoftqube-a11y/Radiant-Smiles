import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { etCounts, etDay, etSafety, etWhy } from "@/content/pages/servicelocation";
import c from "../restorative/Common.module.css";
import styles from "./EmergencyTrenton.module.css";

/**
 * Emergency Dentist, Trenton NJ sections (order and heading levels follow 02 Content.md).
 * Call-first: the safety note stays visible and unchanged; no 24/7, Sunday or walk-in wording;
 * the $65 exam keeps its members-only qualifier (handoff). Designs used on this page only:
 * the call → drive → exam relay, the hero safety note, the open-slot planner, the triage
 * badges, and the phone-to-plan timeline.
 */

/** Hero visual: call first, a 15-minute drive, then the 30-minute exam (decorative) */
export function CallRelay() {
  const legs: { icon: IconName; big: string; small: string }[] = [
    { icon: "phone", big: "Call first", small: "We hold a slot" },
    { icon: "car", big: "~15 min", small: "From Trenton" },
    { icon: "timer", big: "30 min", small: "Focused exam" },
  ];
  return (
    <div className={styles.relay} aria-hidden="true">
      <span className={styles.relayTitle}>
        <span className={styles.pulse} /> Same-day emergency slots
      </span>
      <span className={styles.legs}>
        {legs.map((leg, i) => (
          <span key={leg.big} className={styles.leg} style={{ "--i": i } as CSSProperties}>
            <span className={styles.legIcon}>
              <Icon name={leg.icon} size={22} />
            </span>
            <strong>{leg.big}</strong>
            <small>{leg.small}</small>
          </span>
        ))}
      </span>
      <span className={styles.relayFoot}>
        <span>
          <strong>Mon–Fri</strong> slots held
        </span>
        <span>
          <strong>Sat</strong> 8 am – 2 pm
        </span>
        <span className={styles.closed}>
          <strong>Sun</strong> closed
        </span>
      </span>
    </div>
  );
}

/** The hero safety note: visible, unchanged */
export function HeroSafetyNote() {
  return (
    <p className={styles.safety}>
      <span className={styles.safetyIcon} aria-hidden="true">
        <Icon name="alert" size={20} />
      </span>
      <span>{etSafety}</span>
    </p>
  );
}

/** Why Trenton patients call us: the open-slot planner beside the four reasons */
export function SlotPlanner() {
  return (
    <section className={c.section} aria-labelledby="et-why-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Why call us
          </p>
          <h2 id="et-why-title" data-reveal>
            {etWhy.title}
          </h2>
          <p className="lead" data-reveal>
            {etWhy.intro}
          </p>
        </div>
        <div className={styles.planner}>
          <div className={styles.day} aria-hidden="true" data-inview data-reveal>
            <span className={styles.dayTitle}>Every business day</span>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span key={i} className={i === 2 || i === 5 ? styles.held : styles.booked} style={{ "--i": i } as CSSProperties}>
                {i === 2 || i === 5 ? "Held for patients in pain" : ""}
              </span>
            ))}
            <span className={styles.dayKey}>Illustration: openings are set aside in the schedule</span>
          </div>
          <ul role="list" className={styles.reasons}>
            {etWhy.items.map((item) => (
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
        </div>
        <p className={c.note} data-reveal>
          <Icon name="phone" size={20} />
          <span>{etWhy.after}</span>
        </p>
      </div>
    </section>
  );
}

/** What counts as an emergency: five triage badges */
export function TriageBadges() {
  const icons: Record<string, IconName> = { ache: "alarm", broken: "bolt", knocked: "drop", lost: "tooth", abscess: "thermo" };
  return (
    <section className={`${c.section} ${c.blush}`} aria-labelledby="et-counts-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Emergencies
          </p>
          <h2 id="et-counts-title" data-reveal>
            {etCounts.title}
          </h2>
          <p className="lead" data-reveal>
            {etCounts.intro}
          </p>
        </div>
        <ul role="list" className={styles.triage}>
          {etCounts.items.map((item) => (
            <li key={item.key} data-reveal>
              <span className={styles.triageIcon} aria-hidden="true">
                <Icon name={icons[item.key]} size={26} />
              </span>
              <p>
                <strong>{item.lead}</strong>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.afterHours} data-reveal>
          <span className={styles.afterIcon} aria-hidden="true">
            <Icon name="moon" size={20} />
          </span>
          <span>
            <Rich text={etCounts.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** What to expect on the day: from the phone call to the plan, on one line */
export function PhoneToPlan() {
  return (
    <section className={c.section} aria-labelledby="et-day-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            On the day
          </p>
          <h2 id="et-day-title" data-reveal>
            {etDay.title}
          </h2>
          <p className="lead" data-reveal>
            {etDay.intro}
          </p>
        </div>
        <ol className={styles.line} data-inview>
          {etDay.steps.map((step, i) => (
            <li key={step.lead} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.lineNode} aria-hidden="true">
                <Icon name={step.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{step.lead}</strong> <Rich text={step.text} />
              </p>
            </li>
          ))}
        </ol>
        <p className={`${c.note} ${styles.center}`} data-reveal>
          <Icon name="headphones" size={20} />
          <span>{etDay.after}</span>
        </p>
      </div>
    </section>
  );
}
