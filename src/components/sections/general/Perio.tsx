import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { pmCost, pmOften, pmProtect, pmVisit, pmWhat, pmWho } from "@/content/pages/general/perio";
import { membershipPlan } from "@/content/site";
import styles from "./Perio.module.css";

/**
 * Periodontal Maintenance sections (order and heading levels follow 02 Content.md).
 * "Membership plan" sits next to every $75 (handoff). Designs used on this page only: the
 * pocket chart, the ruled comparison table, the risk chips, the visit loop, the interval
 * rows, the member price tag and the home care list.
 */

/** Hero visual: pocket depths per tooth, last visit against today (decorative) */
export function PocketChart() {
  const teeth = [
    [4, 3],
    [5, 3],
    [4, 3],
    [3, 2],
    [5, 4],
    [4, 3],
    [3, 3],
    [4, 2],
  ];
  return (
    <div className={styles.chart} aria-hidden="true">
      <div className={styles.chartHead}>
        <span className={styles.chartTitle}>Gum pockets, tracked</span>
        <span className={styles.legend}>
          <span className={styles.legendLast}>Last visit</span>
          <span className={styles.legendNow}>Today</span>
        </span>
      </div>
      <div className={styles.bars}>
        {teeth.map(([last, now], i) => (
          <span key={i} className={styles.tooth} style={{ "--i": i } as CSSProperties}>
            <span className={styles.barLast} style={{ height: `${last * 16}%` }} />
            <span className={styles.barNow} style={{ height: `${now * 16}%` }} />
          </span>
        ))}
      </div>
      <span className={styles.chartFoot}>
        <Icon name="check" size={16} strokeWidth={2.4} /> Measured & compared at every visit
      </span>
    </div>
  );
}

/** What it is: the copy, then the ruled comparison table */
export function WhatPerio() {
  return (
    <section className={styles.what} aria-labelledby="pm-what-title">
      <div className="container">
        <div className={styles.whatGrid}>
          <div className={styles.whatCopy}>
            <p className="label" data-reveal>
              Perio maintenance
            </p>
            <h2 id="pm-what-title" data-reveal>
              {pmWhat.title}
            </h2>
          </div>
          <div className={styles.whatText}>
            {pmWhat.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                <Rich text={text} />
              </p>
            ))}
          </div>
        </div>
        <div data-reveal>
          <DataTable label={pmWhat.title} head={pmWhat.head} rows={pmWhat.rows} highlight={2} className={styles.ruled} />
        </div>
      </div>
    </section>
  );
}

/** Who needs it: the intro, then the risk chips */
export function WhoPerio() {
  return (
    <section className={styles.who} aria-labelledby="pm-who-title">
      <div className={`container ${styles.whoGrid}`}>
        <div className={styles.whoCopy}>
          <p className="label" data-reveal>
            After gum disease
          </p>
          <h2 id="pm-who-title" data-reveal>
            {pmWho.title}
          </h2>
          <p data-reveal>{pmWho.intro}</p>
        </div>
        <div className={styles.riskCard}>
          <p className={styles.riskIntro} data-reveal>
            {pmWho.listIntro}
          </p>
          <ul role="list" className={styles.chips}>
            {pmWho.items.map((item) => (
              <li key={item.text} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={18} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.riskAfter} data-reveal>
            {pmWho.after}
          </p>
        </div>
      </div>
    </section>
  );
}

/** What happens at a visit: four steps in a loop that comes round again */
export function VisitLoop() {
  return (
    <section className={styles.visit} aria-labelledby="pm-visit-title">
      <div className="container">
        <div className={styles.visitHead}>
          <p className="label" data-reveal>
            Each visit
          </p>
          <h2 id="pm-visit-title" data-reveal>
            {pmVisit.title}
          </h2>
          <p className="lead" data-reveal>
            {pmVisit.intro}
          </p>
        </div>
        <div className={styles.loop}>
          <ol className={styles.loopSteps}>
            {pmVisit.steps.map((step) => (
              <li key={step.lead} data-reveal>
                <span className={styles.loopIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={24} />
                </span>
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
          <span className={styles.loopBack} aria-hidden="true" data-reveal>
            <span className={styles.loopLine} />
            <span>Then again at your next visit</span>
          </span>
        </div>
        <p className={styles.visitAfter} data-reveal>
          <Icon name="pill" size={20} />
          <span>
            <Rich text={pmVisit.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** How often: regular cleanings against a shorter interval set by the dentist */
export function Interval() {
  return (
    <section className={styles.often} aria-labelledby="pm-often-title">
      <div className={`container ${styles.oftenGrid}`}>
        <div className={styles.oftenCopy}>
          <p className="label" data-reveal>
            Your schedule
          </p>
          <h2 id="pm-often-title" data-reveal>
            {pmOften.title}
          </h2>
          {pmOften.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.rows} aria-hidden="true" data-inview data-reveal>
          <div className={styles.row}>
            <span className={styles.rowName}>Regular cleanings</span>
            <span className={styles.rowTrack}>
              {[0, 50].map((left, i) => (
                <span key={left} className={styles.rowDot} style={{ left: `${left}%`, "--i": i } as CSSProperties} />
              ))}
            </span>
            <span className={styles.rowNote}>Every six months</span>
          </div>
          <div className={`${styles.row} ${styles.rowPerio}`}>
            <span className={styles.rowName}>Periodontal maintenance</span>
            <span className={styles.rowTrack}>
              {[0, 25, 50, 75].map((left, i) => (
                <span key={left} className={styles.rowDot} style={{ left: `${left}%`, "--i": i } as CSSProperties} />
              ))}
            </span>
            <span className={styles.rowNote}>Often shorter, set for your gums</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Cost and insurance: the member price tag beside the ways to pay */
export function PerioCost() {
  return (
    <section className={styles.cost} aria-labelledby="pm-cost-title">
      <div className={`container ${styles.costGrid}`}>
        <div className={styles.tag} aria-hidden="true" data-reveal>
          <span className={styles.tagKicker}>Membership plan</span>
          <span className={styles.tagPrice}>
            $<span data-count={membershipPlan.extraCleaning}>{membershipPlan.extraCleaning}</span>
          </span>
          <span className={styles.tagNote}>Each additional periodontal maintenance visit, for membership plan members</span>
        </div>
        <div className={styles.costCopy}>
          <p className="label" data-reveal>
            Cost & insurance
          </p>
          <h2 id="pm-cost-title" data-reveal>
            {pmCost.title}
          </h2>
          {pmCost.paragraphs?.map((text) => (
            <p key={text} className="lead" data-reveal>
              {text}
            </p>
          ))}
          <ul role="list" className={styles.costList}>
            {pmCost.items?.map((item) => (
              <li key={item.lead} data-reveal>
                <p>
                  <strong>{item.lead}</strong> <Rich text={item.text} />
                </p>
              </li>
            ))}
          </ul>
          {pmCost.after?.map((text) => (
            <p key={text} className={styles.costAfter} data-reveal>
              <Icon name="phone" size={18} />
              <span>
                <Rich text={text} />
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Protecting your gums between visits: four habits and the hygiene link */
export function ProtectGums() {
  return (
    <section className={styles.protect} aria-labelledby="pm-protect-title">
      <div className="container">
        <div className={styles.protectHead}>
          <p className="label" data-reveal>
            At home
          </p>
          <h2 id="pm-protect-title" data-reveal>
            {pmProtect.title}
          </h2>
          <p className="lead" data-reveal>
            {pmProtect.intro}
          </p>
        </div>
        <ul role="list" className={styles.habits}>
          {pmProtect.items.map((item) => (
            <li key={item.text} data-reveal>
              <span aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
        <div className={styles.protectLink} data-reveal>
          <SiteLink href={pmProtect.link.href} className="text-link">
            {pmProtect.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
