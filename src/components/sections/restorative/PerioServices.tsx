import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { psCauses, psDiagnose, psMaintenance, psOptions, psSigns } from "@/content/pages/restorative/extract";
import c from "./Common.module.css";
import styles from "./PerioServices.module.css";

/**
 * Periodontal Services (gum disease treatment) sections (order and heading levels follow
 * 02 Content.md). Never "periodontist" except the one FAQ (handoff). Designs used on this
 * page only: the conservative ladder, the five signs with the bleeding/receding note, the
 * plaque-to-tartar causes, the gum exam measure, the treatment path (four H3 stages, surgery
 * last) and the maintenance loop with the member price.
 */

/** Hero visual: the conservative path, non-surgical steps first and surgery last (decorative) */
export function ConservativeLadder() {
  const rungs: { icon: IconName; name: string; tone?: string }[] = [
    { icon: "toothClean", name: "Deep cleaning" },
    { icon: "pill", name: "Arestin" },
    { icon: "bolt", name: "Laser gum therapy" },
    { icon: "alert", name: "Surgery only where needed", tone: "last" },
  ];
  return (
    <div className={styles.ladder} aria-hidden="true">
      <span className={styles.ladderTitle}>A conservative path</span>
      <ol className={styles.rungs}>
        {rungs.map((rung, i) => (
          <li key={rung.name} className={rung.tone ? styles.rungLast : undefined} style={{ "--i": i } as CSSProperties}>
            <span className={styles.rungIcon}>
              <Icon name={rung.icon} size={18} />
            </span>
            {rung.name}
          </li>
        ))}
      </ol>
      <span className={styles.ladderFoot}>
        <Icon name="calendarCheck" size={16} /> Then periodontal maintenance
      </span>
    </div>
  );
}

/** Signs of gum disease: five signs and the bleeding/receding H3 */
export function GumSigns() {
  return (
    <section className={c.section} aria-labelledby="ps-signs-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Warning signs
          </p>
          <h2 id="ps-signs-title" data-reveal>
            {psSigns.title}
          </h2>
          <p className="lead" data-reveal>
            {psSigns.intro}
          </p>
        </div>
        <div className={styles.signsGrid}>
          <ul role="list" className={styles.signs}>
            {psSigns.items.map((item) => (
              <li key={item.lead} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                <p>
                  <strong>{item.lead}</strong>
                  {item.text ? ` ${item.text}` : null}
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.bleeding}>
            <span className={styles.gumline} aria-hidden="true" data-reveal>
              <span />
            </span>
            <h3 data-reveal>{psSigns.sub.title}</h3>
            <p data-reveal>{psSigns.sub.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** What causes gum disease: plaque to tartar, then the risk factors */
export function Causes() {
  return (
    <section className={`${c.section} ${c.blush}`} aria-labelledby="ps-causes-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Causes
          </p>
          <h2 id="ps-causes-title" data-reveal>
            {psCauses.title}
          </h2>
          <p data-reveal>{psCauses.intro}</p>
          <span className={styles.chain} aria-hidden="true" data-reveal>
            <span>Plaque</span>
            <Icon name="arrow" size={16} />
            <span>Tartar below the gum line</span>
            <Icon name="arrow" size={16} />
            <span>Inflamed gums</span>
          </span>
        </div>
        <div className={styles.risks}>
          <p className={styles.risksTitle} data-reveal>
            {psCauses.listIntro}
          </p>
          <ul role="list">
            {psCauses.items.map((item) => (
              <li key={item.text} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={18} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.risksAfter} data-reveal>
            {psCauses.after}
          </p>
        </div>
      </div>
    </section>
  );
}

/** How it's diagnosed: the gum exam and X-rays */
export function Diagnose() {
  return (
    <section className={c.section} aria-labelledby="ps-diagnose-title">
      <div className={`container ${c.split}`}>
        <div className={styles.measure} aria-hidden="true" data-inview data-reveal>
          <span className={styles.measureTitle}>Pocket depth</span>
          <span className={styles.scale}>
            {[1, 2, 3, 4, 5].map((mm) => (
              <span key={mm} className={mm > 3 ? styles.deep : undefined}>
                {mm} mm
              </span>
            ))}
          </span>
          <span className={styles.measureLegend}>
            <span className={styles.legendOk}>Up to 3 mm</span>
            <span className={styles.legendDeep}>Over 3 mm: room for bacteria</span>
          </span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Diagnosis
          </p>
          <h2 id="ps-diagnose-title" data-reveal>
            {psDiagnose.title}
          </h2>
          {psDiagnose.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Treatment options: deep cleaning, Arestin, laser, then surgery only where needed */
export function TreatmentPath() {
  const o = psOptions;
  return (
    <section className={`${c.section} ${styles.pathSection}`} aria-labelledby="ps-options-title">
      <div className="container">
        <div className={styles.pathHead}>
          <p className="label label-inverse" data-reveal>
            Conservative care
          </p>
          <h2 id="ps-options-title" data-reveal>
            {o.title}
          </h2>
          <p className="lead" data-reveal>
            {o.intro}
          </p>
        </div>
        <div className={styles.path}>
          <div className={`${styles.stage} ${styles.stageMain}`}>
            <span className={styles.stageTag} aria-hidden="true" data-reveal>
              Usually first
            </span>
            <h3 data-reveal>{o.deep.title}</h3>
            <p data-reveal>
              <Rich text={o.deep.text} />
            </p>
            <ul role="list" className={styles.stageList}>
              {o.deep.items.map((item) => (
                <li key={item.lead} data-reveal>
                  <strong>{item.lead}</strong> {item.text}
                </li>
              ))}
            </ul>
            <p className={styles.stageAfter} data-reveal>
              {o.deep.after}
            </p>
          </div>
          {[o.arestin, o.laser].map((stage, i) => (
            <div key={stage.title} className={styles.stage}>
              <span className={styles.stageIcon} aria-hidden="true" data-reveal>
                <Icon name={i ? "bolt" : "pill"} size={22} />
              </span>
              <h3 data-reveal>{stage.title}</h3>
              <p data-reveal>
                <Rich text={stage.text} />
              </p>
            </div>
          ))}
          <div className={`${styles.stage} ${styles.stageLast}`}>
            <span className={styles.stageIcon} aria-hidden="true" data-reveal>
              <Icon name="alert" size={22} />
            </span>
            <h3 data-reveal>{o.surgery.title}</h3>
            <p data-reveal>{o.surgery.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Ongoing maintenance: the loop and the member price */
export function MaintenanceLoop() {
  return (
    <section className={c.section} aria-labelledby="ps-maintenance-title">
      <div className="container">
        <div className={styles.loop}>
          <div className={styles.loopCopy}>
            <p className="label" data-reveal>
              Keep it controlled
            </p>
            <h2 id="ps-maintenance-title" data-reveal>
              {psMaintenance.title}
            </h2>
            {psMaintenance.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                <Rich text={text} />
              </p>
            ))}
          </div>
          <div className={styles.cycle} aria-hidden="true" data-reveal>
            {["Clean", "Measure", "Catch flare-ups early"].map((step) => (
              <span key={step} className={styles.cycleStep}>
                <Icon name="refresh" size={16} /> {step}
              </span>
            ))}
            <span className={styles.member}>
              <span className={styles.memberFigure}>$75</span>
              <span>per visit for membership plan members</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
