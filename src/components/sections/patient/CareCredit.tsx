import type { CSSProperties } from "react";
import { ToothMark } from "@/components/ui/Brand";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { ccApply, ccFinance, ccHow, ccOther } from "@/content/pages/patient/carecredit";
import styles from "./CareCredit.module.css";

/**
 * CareCredit sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the payment-plan card, the terms panel, the finance tiles, the apply
 * timeline and the other-ways cards. No CareCredit logo (official artwork only) and no
 * interest rates (handoff).
 */

/** Hero visual: a cost spread over six monthly payments (decorative) */
export function PlanCard() {
  return (
    <div className={styles.plan} aria-hidden="true">
      <div className={styles.planTop}>
        <ToothMark className={styles.planMark} />
        <span>
          <span className={styles.planKicker}>Dental financing</span>
          <span className={styles.planTitle}>Spread the cost over time</span>
        </span>
      </div>
      <div className={styles.months}>
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className={styles.month} style={{ "--i": i } as CSSProperties}>
            <span className={styles.monthBar} />
            <span className={styles.monthName}>Month {i + 1}</span>
          </span>
        ))}
      </div>
      <p className={styles.planNote}>
        <Icon name="clock" size={18} />
        No interest on $200+ if paid in full within 6 months
      </p>
      <p className={styles.planFine}>Subject to credit approval</p>
    </div>
  );
}

/** How it works: the intro, then the terms (kept in full beside the 6-month promotion) */
export function HowItWorks() {
  return (
    <section className={styles.how} aria-labelledby="cc-how-title">
      <div className={`container ${styles.howGrid}`}>
        <div className={styles.howCopy}>
          <p className="label" data-reveal>
            How it works
          </p>
          <h2 id="cc-how-title" data-reveal>
            {ccHow.title}
          </h2>
          <p className="lead" data-reveal>
            {ccHow.intro}
          </p>
        </div>
        <div className={styles.terms} data-reveal>
          <p className={styles.termsIntro}>{ccHow.termsIntro}</p>
          <ul role="list" className={styles.termsList}>
            {ccHow.terms.map((term) => (
              <li key={term.lead}>
                <span className={styles.termIcon} aria-hidden="true">
                  <Icon name={term.icon as IconName} size={22} />
                </span>
                <p>
                  <strong>{term.lead}</strong> {term.text}
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.termsAfter}>{ccHow.after}</p>
          <a
            href={ccHow.termsLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            data-track="click_carecredit_terms"
          >
            {ccHow.termsLink.label} <Icon name="arrowUpRight" size={16} />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/** What you can finance: four tiles */
export function FinanceTiles() {
  return (
    <section className={styles.finance} aria-labelledby="cc-finance-title">
      <div className="container">
        <div className={styles.financeHead}>
          <h2 id="cc-finance-title" data-reveal>
            {ccFinance.title}
          </h2>
          <p className="lead" data-reveal>
            {ccFinance.intro}
          </p>
        </div>
        <ul role="list" className={styles.tiles}>
          {ccFinance.items.map((item) => (
            <li key={item.icon} className={styles.tile} data-reveal>
              <span className={styles.tileIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={28} />
              </span>
              <p>
                {item.link ? (
                  <SiteLink href={item.link.href} className={styles.tileLink}>
                    {item.link.label}
                  </SiteLink>
                ) : null}
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.financeAfter} data-reveal>
          <Icon name="chat" size={20} />
          <span>{ccFinance.after}</span>
        </p>
      </div>
    </section>
  );
}

/** How to apply: four steps on a vertical timeline (a real ordered list) */
export function ApplySteps() {
  return (
    <section className={styles.apply} aria-labelledby="cc-apply-title">
      <div className={`container ${styles.applyGrid}`}>
        <div className={styles.applyHead}>
          <p className="label" data-reveal>
            Apply
          </p>
          <h2 id="cc-apply-title" data-reveal>
            {ccApply.title}
          </h2>
          <p data-reveal>
            <Rich text={ccApply.after} />
          </p>
        </div>
        <ol className={styles.timeline}>
          {ccApply.steps.map((step) => (
            <li key={step.lead} className={styles.stage} data-reveal>
              <span className={styles.stageIcon} aria-hidden="true">
                <Icon name={step.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Other ways to pay: three cards and the link */
export function OtherWays() {
  return (
    <section className={styles.other} aria-labelledby="cc-other-title">
      <div className="container">
        <div className={styles.otherHead}>
          <div>
            <h2 id="cc-other-title" data-reveal>
              {ccOther.title}
            </h2>
            <p className="lead" data-reveal>
              {ccOther.intro}
            </p>
          </div>
          <div data-reveal>
            <SiteLink href={ccOther.link.href} className="text-link">
              {ccOther.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <ul role="list" className={styles.ways}>
          {ccOther.items.map((item) => (
            <li key={item.lead} className={styles.way} data-reveal>
              <span className={styles.wayIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
