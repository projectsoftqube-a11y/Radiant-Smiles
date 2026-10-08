import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { homeInsurance } from "@/content/pages/home";
import { PlanChecker } from "./PlanChecker";
import styles from "./Insurance.module.css";

/** The payment methods named in the second paragraph, as tiles (decorative) */
const methods: { name: string; icon: IconName }[] = [
  { name: "Cash", icon: "banknote" },
  { name: "Check", icon: "cheque" },
  { name: "Visa", icon: "card" },
  { name: "MasterCard", icon: "card" },
  { name: "Discover", icon: "card" },
  { name: "American Express", icon: "card" },
];

/**
 * "Will my plan work?": a live plan checker beside the insurance paragraph, then two
 * blocks: paying at the visit (method tiles) and CareCredit (a six-month timeline whose
 * bar fills on scroll). Every paragraph is verbatim; tiles and timeline are decorative.
 */
export function Insurance() {
  const [plans, payment, careCredit] = homeInsurance.paragraphs;
  return (
    <section className={styles.section} aria-labelledby="home-insurance-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.lead}>
          <p className="label" data-reveal>
            Paying for care
          </p>
          <h2 id="home-insurance-title" data-reveal>
            {homeInsurance.title}
          </h2>
          <p className={styles.plansText} data-reveal>
            {plans}
          </p>
          <div className={styles.checkerWrap} data-reveal>
            <PlanChecker />
          </div>
        </div>

        <div className={styles.side}>
          <div className={styles.block} data-reveal>
            <p className={styles.blockTitle}>
              <Icon name="card" size={20} />
              Pay at your visit
            </p>
            <ul role="list" className={styles.methods} aria-hidden="true">
              {methods.map((method) => (
                <li key={method.name}>
                  <Icon name={method.icon} size={20} />
                  <span>{method.name}</span>
                </li>
              ))}
            </ul>
            <p className={styles.blockText}>{payment}</p>
          </div>

          <div className={`${styles.block} ${styles.finance}`} data-reveal>
            <p className={styles.blockTitle}>
              <Icon name="tag" size={20} />
              CareCredit
            </p>
            {/* Six months, no interest if paid in full (decorative summary of the paragraph) */}
            <div className={styles.timeline} aria-hidden="true" data-grow>
              <div className={styles.months}>
                {Array.from({ length: 6 }, (_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <div className={styles.track}>
                <span className={styles.fill} data-grow-item />
              </div>
              <div className={styles.timelineFoot}>
                <span>No interest if paid in full</span>
                <span className={styles.min}>$200+</span>
              </div>
            </div>
            <p className={styles.blockText}>{careCredit}</p>
            <SiteLink href={homeInsurance.link.href} className="text-link">
              {homeInsurance.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
