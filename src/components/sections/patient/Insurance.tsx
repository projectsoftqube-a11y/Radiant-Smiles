import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { insBenefits, insCareCredit, insMembership, insPayment, insPlans } from "@/content/pages/patient/insurance";
import { insurancePlans } from "@/content/site";
import styles from "./Insurance.module.css";

/**
 * Insurance & Payment sections (order and heading levels follow 02 Content.md). Designs
 * used on this page only: the coverage card, the three-column plan list, the plan-year
 * timeline, the membership price table, the payment tiles and the financing teaser.
 * Wording rule: "accept", never "in-network".
 */

/** Hero visual: a coverage card (decorative; the plan list below is the real content) */
export function CoverageCard() {
  const sample = ["Aetna", "Cigna PPO", "Delta Dental", "Horizon Blue Cross", "MetLife", "UnitedHealthcare"];
  return (
    <div className={styles.coverage} aria-hidden="true">
      <div className={styles.coverageTop}>
        <span className={styles.coverageCount}>
          <span data-count={insurancePlans.length}>{insurancePlans.length}</span>
        </span>
        <span>
          <span className={styles.coverageTitle}>dental plans accepted</span>
          <span className={styles.coverageSub}>Most are PPO plans</span>
        </span>
      </div>
      <ul role="list" className={styles.sample}>
        {sample.map((plan, i) => (
          <li key={plan} style={{ animationDelay: `${0.8 + i * 0.08}s` }}>
            <Icon name="check" size={14} strokeWidth={2.6} />
            {plan}
          </li>
        ))}
      </ul>
      <div className={styles.coverageFoot}>
        <span>
          <Icon name="badgeDollar" size={18} />
          No insurance? $150 a year
        </span>
        <span>
          <Icon name="card" size={18} />
          CareCredit
        </span>
      </div>
    </div>
  );
}

/** The plans: a real list in columns (3 desktop, 2 tablet, 1 phone), text not logos */
export function PlanList() {
  return (
    <section className={styles.plans} aria-labelledby="ins-plans-title">
      <div className="container">
        <div className={styles.plansHead}>
          <div>
            <p className="label" data-reveal>
              Insurance
            </p>
            <h2 id="ins-plans-title" data-reveal>
              {insPlans.title}
            </h2>
          </div>
          <p className="lead" data-reveal>
            {insPlans.intro}
          </p>
        </div>
        <ul className={styles.planList} data-reveal>
          {insurancePlans.map((plan) => (
            <li key={plan}>
              <span className={styles.planTick} aria-hidden="true">
                <Icon name="check" size={13} strokeWidth={2.6} />
              </span>
              {plan}
            </li>
          ))}
        </ul>
        <p className={styles.plansAfter} data-reveal>
          <Icon name="phone" size={20} />
          <span>{insPlans.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Use your benefits: a plan year drawn as twelve months with the renewal at the end */
export function BenefitsYear() {
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return (
    <section className={styles.benefits} aria-labelledby="ins-benefits-title">
      <div className={`container ${styles.benefitsGrid}`}>
        <div className={styles.benefitsCopy}>
          <h2 id="ins-benefits-title" data-reveal>
            {insBenefits.title}
          </h2>
          <p data-reveal>{insBenefits.text}</p>
        </div>
        <div className={styles.year} aria-hidden="true" data-reveal>
          <span className={styles.yearLabel}>Your plan year</span>
          <span className={styles.months} data-rise>
            {months.map((m, i) => (
              <span key={i} className={i > 8 ? `${styles.month} ${styles.monthLate}` : styles.month}>
                <span className={styles.monthFill} data-rise-item />
                <span className={styles.monthName}>{m}</span>
              </span>
            ))}
          </span>
          <span className={styles.yearFoot}>
            <span>
              <Icon name="calendarCheck" size={16} />
              Book treatment in time
            </span>
            <span>
              <Icon name="clock" size={16} />
              Benefits renew
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

/** Membership: a real table with a header row */
export function MembershipTable() {
  return (
    <section className={styles.membership} aria-labelledby="ins-membership-title">
      <div className={`container ${styles.membershipGrid}`}>
        <div className={styles.membershipCopy}>
          <p className="label" data-reveal>
            No insurance
          </p>
          <h2 id="ins-membership-title" data-reveal>
            {insMembership.title}
          </h2>
          <p className="lead" data-reveal>
            {insMembership.intro}
          </p>
          <p className={styles.membershipAfter} data-reveal>
            {insMembership.after}
          </p>
          <div data-reveal>
            <SiteLink href={insMembership.link.href} className="text-link" data-track="click_offer">
              {insMembership.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <div className={styles.priceCard} data-reveal>
          <table className={styles.priceTable}>
            <caption className="visually-hidden">In-office membership plan prices</caption>
            <thead>
              <tr>
                <th scope="col">{insMembership.head[0]}</th>
                <th scope="col">{insMembership.head[1]}</th>
              </tr>
            </thead>
            <tbody>
              {insMembership.rows.map(([what, price], i) => (
                <tr key={what} className={i === 0 ? styles.rowMain : undefined}>
                  <td>{what}</td>
                  <td>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const methods: { icon: IconName; name: string }[] = [
  { icon: "banknote", name: "Cash" },
  { icon: "cheque", name: "Check" },
  { icon: "card", name: "Visa" },
  { icon: "card", name: "MasterCard" },
  { icon: "card", name: "Discover" },
  { icon: "card", name: "American Express" },
  { icon: "badgeDollar", name: "CareCredit" },
];

/** Payment options and the CareCredit teaser, side by side */
export function PaymentAndFinancing() {
  return (
    <div className={styles.pay}>
      <div className={`container ${styles.payGrid}`}>
        <section className={styles.payCard} aria-labelledby="ins-payment-title" data-reveal>
          <h2 id="ins-payment-title">{insPayment.title}</h2>
          <p>{insPayment.text}</p>
          <ul role="list" className={styles.methods} aria-hidden="true">
            {methods.map((method) => (
              <li key={method.name}>
                <Icon name={method.icon} size={18} />
                {method.name}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.financeCard} aria-labelledby="ins-carecredit-title" data-reveal>
          <span className={styles.financeIcon} aria-hidden="true">
            <Icon name="calendarCheck" size={26} />
          </span>
          <h2 id="ins-carecredit-title">{insCareCredit.title}</h2>
          <p>{insCareCredit.text}</p>
          <SiteLink href={insCareCredit.link.href} className={`text-link ${styles.lightLink}`} data-track="click_financing">
            {insCareCredit.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </section>
      </div>
    </div>
  );
}
