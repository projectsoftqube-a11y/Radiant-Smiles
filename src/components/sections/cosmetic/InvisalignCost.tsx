import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { icFactors, icInsurance, icPay, icPrice } from "@/content/pages/cosmetic/invisalign";
import c from "../restorative/Common.module.css";
import styles from "./InvisalignCost.module.css";

/**
 * Invisalign Cost sections (order and heading levels follow 02 Content.md). The four-row
 * price table matches /special-offers/; never a net price, no APRs, no "up to $3,500" or
 * "same as braces" lines (handoff). Designs used on this page only: the two quotes side by
 * side, the price sheet, the factor sliders, the two maximums, and the wallet.
 */

/** Hero visual: your other quote beside our plan, with the free second opinion (decorative) */
export function SecondOpinion() {
  return (
    <div className={styles.quotes} aria-hidden="true">
      <span className={`${styles.sheet} ${styles.sheetOther}`}>
        <span className={styles.sheetTitle}>Your other quote</span>
        {[80, 64, 72, 50].map((w, i) => (
          <span key={i} className={styles.line} style={{ width: `${w}%` }} />
        ))}
      </span>
      <span className={`${styles.sheet} ${styles.sheetOurs}`}>
        <span className={styles.sheetTitle}>Our plan &amp; price</span>
        {[
          { k: "Regular price", v: "$5,800" },
          { k: "Current offer", v: "$1,000 off" },
          { k: "Consultation", v: "Free" },
        ].map((row) => (
          <span key={row.k} className={styles.sheetRow}>
            <span>{row.k}</span>
            <strong>{row.v}</strong>
          </span>
        ))}
      </span>
      <span className={styles.stamp}>
        <Icon name="check" size={16} strokeWidth={2.8} /> Free second opinion
      </span>
    </div>
  );
}

/** Our Invisalign cost: the copy beside the published price sheet (a real table) */
export function PriceSheet() {
  return (
    <section className={c.section} aria-labelledby="ic-price-title">
      <div className={`container ${styles.price}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Published price
          </p>
          <h2 id="ic-price-title" data-reveal>
            {icPrice.title}
          </h2>
          <p className="lead" data-reveal>
            {icPrice.intro}
          </p>
          {icPrice.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.sheetCard} data-reveal>
          <span className={styles.sheetCardTop} aria-hidden="true">
            <Icon name="aligner" size={20} /> Invisalign in Yardley
          </span>
          <table className={styles.priceTable}>
            <caption className="visually-hidden">Our Invisalign price</caption>
            <tbody>
              {icPrice.rows.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td className={/off/.test(v) ? styles.cellOffer : /Free/.test(v) ? styles.cellFree : undefined}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** What affects the cost: three factors, each on a mild-to-complex slider */
export function FactorSliders() {
  const ends: Record<string, [string, string, number]> = {
    severity: ["Mild", "Complex", 0.62],
    length: ["Shorter", "Longer", 0.45],
    other: ["Healthy now", "Care needed first", 0.3],
  };
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="ic-factors-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            What changes it
          </p>
          <h2 id="ic-factors-title" data-reveal>
            {icFactors.title}
          </h2>
          <p className="lead" data-reveal>
            {icFactors.intro}
          </p>
        </div>
        <p className={styles.factorsTitle} data-reveal>
          {icFactors.listIntro}
        </p>
        <ul role="list" className={styles.factors} data-inview>
          {icFactors.items.map((item, i) => {
            const [from, to, at] = ends[item.key];
            return (
              <li key={item.key} className={styles.factor} style={{ "--at": at, "--i": i } as CSSProperties} data-reveal>
                <p>
                  <strong>{item.lead}</strong> {item.text}
                </p>
                <span className={styles.slider} aria-hidden="true">
                  <span className={styles.sliderTrack}>
                    <span className={styles.sliderKnob} />
                  </span>
                  <span className={styles.sliderEnds}>
                    <span>{from}</span>
                    <span>{to}</span>
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
        <p className={c.note} data-reveal>
          <Icon name="clipboard" size={20} />
          <span>
            <Rich text={icFactors.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** Does insurance cover Invisalign: the copy and the two separate maximums */
export function TwoMaximums() {
  return (
    <section className={c.section} aria-labelledby="ic-insurance-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Insurance
          </p>
          <h2 id="ic-insurance-title" data-reveal>
            {icInsurance.title}
          </h2>
          {icInsurance.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.maxes} aria-hidden="true" data-inview data-reveal>
          <span className={styles.jars}>
            <span className={styles.jar}>
              <span className={styles.jarGlass}>
                <span className={styles.jarFill} style={{ "--fill": 0.55 } as CSSProperties} />
              </span>
              <span className={styles.jarName}>Yearly dental maximum</span>
            </span>
            <span className={styles.jarSep}>
              <Icon name="close" size={16} /> separate
            </span>
            <span className={`${styles.jar} ${styles.jarOrtho}`}>
              <span className={styles.jarGlass}>
                <span className={styles.jarFill} style={{ "--fill": 0.8 } as CSSProperties} />
              </span>
              <span className={styles.jarName}>Orthodontic lifetime maximum</span>
            </span>
          </span>
          <span className={styles.plans}>
            <span className={styles.plansLabel}>PPO plans we accept include</span>
            {icInsurance.plans.map((plan) => (
              <span key={plan} className={styles.plan}>
                {plan}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}

/** Payment plans and financing: the four ways to pay as a wallet, then the button */
export function PaymentWallet() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="ic-pay-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Ways to pay
          </p>
          <h2 id="ic-pay-title" data-reveal>
            {icPay.title}
          </h2>
          <p className="lead" data-reveal>
            {icPay.intro}
          </p>
        </div>
        <ul role="list" className={styles.wallet}>
          {icPay.items.map((item) => (
            <li key={item.key} className={`${styles.payCard} ${styles[`pay_${item.key}`]}`} data-reveal>
              <span className={styles.payTop} aria-hidden="true">
                <span className={styles.payChip} />
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{item.lead}</strong> <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.payCta} data-reveal>
          <Button href={icPay.button.href} icon="calendar" long track="appointment_click_ic_pay">
            {icPay.button.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
