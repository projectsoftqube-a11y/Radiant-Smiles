import { ToothRow } from "@/components/sections/cosmetic/Invisalign";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { itnSteps, itnWhy } from "@/content/pages/servicelocation";
import c from "../restorative/Common.module.css";
import styles from "./InvisalignTrenton.module.css";

/**
 * Invisalign, Trenton NJ sections (order and heading levels follow 02 Content.md).
 * "Invisalign®" on first use (hero); no Align logos or provider badges; offer wording as on
 * /special-offers/ (handoff). Designs used on this page only: the Trenton → Yardley pass,
 * the navy reasons panel, and the five steps with the teeth straightening along them.
 */

/** Hero visual: a pass from Trenton to Yardley carrying the offer and the check-up rhythm (decorative) */
export function TrentonPass() {
  return (
    <div className={styles.pass} aria-hidden="true">
      <span className={styles.passMain}>
        <span className={styles.route}>
          <span className={styles.stop}>
            <small>From</small>
            <strong>Trenton</strong>
            <em>NJ</em>
          </span>
          <span className={styles.trip}>
            <Icon name="car" size={20} />
            <span className={styles.tripLine} />
            <small>About 15 min</small>
          </span>
          <span className={`${styles.stop} ${styles.stopEnd}`}>
            <small>To</small>
            <strong>Yardley</strong>
            <em>PA</em>
          </span>
        </span>
        <span className={styles.fields}>
          <span>
            <small>Offer</small>
            <strong>$1,000 off</strong>
          </span>
          <span>
            <small>Regular</small>
            <strong>$5,800</strong>
          </span>
          <span>
            <small>Check-ups</small>
            <strong>About every 6 weeks</strong>
          </span>
          <span>
            <small>Saturdays</small>
            <strong>8 am – 2 pm</strong>
          </span>
        </span>
      </span>
      <span className={styles.stub}>
        <Icon name="aligner" size={26} />
        <strong>Free consultation</strong>
        <small>&amp; second opinion</small>
      </span>
    </div>
  );
}

/** Why NJ patients choose our Yardley office: the copy beside the navy reasons panel */
export function ReasonsPanel() {
  return (
    <section className={c.section} aria-labelledby="itn-why-title">
      <div className={`container ${styles.why}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Why Yardley
          </p>
          <h2 id="itn-why-title" data-reveal>
            {itnWhy.title}
          </h2>
          <p className="lead" data-reveal>
            {itnWhy.intro}
          </p>
          <p data-reveal>{itnWhy.after}</p>
        </div>
        <ul role="list" className={styles.panel}>
          {itnWhy.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.panelIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
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

/** From consultation to final aligner: five steps, the teeth straighter at each one */
export function StraighteningSteps() {
  const s = itnSteps;
  const mess = [1, 0.75, 0.5, 0.25, 0];
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="itn-steps-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Step by step
          </p>
          <h2 id="itn-steps-title" data-reveal>
            {s.title}
          </h2>
          <p className="lead" data-reveal>
            {s.intro}
          </p>
        </div>
        <ol className={styles.steps}>
          {s.steps.map((step, i) => (
            <li key={step.lead} data-reveal>
              <span className={styles.stepArt} aria-hidden="true">
                <ToothRow mess={mess[i]} className={styles.stepRow} />
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <div className={styles.afterRow}>
          <p className={styles.noWires} data-reveal>
            <span className={styles.noIcon} aria-hidden="true">
              <Icon name="ban" size={20} />
            </span>
            <span>
              <Rich text={s.after} />
            </span>
          </p>
          <p className={styles.teen} data-reveal>
            <span className={styles.teenDots} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>
              <strong>{s.teen.lead}</strong> <Rich text={s.teen.text} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
