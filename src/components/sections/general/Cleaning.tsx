import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { tcCheckup, tcCleaning, tcCost, tcNotEnough, tcOften, tcScreening, tcXrays } from "@/content/pages/general/cleaning";
import styles from "./Cleaning.module.css";

/**
 * Teeth Cleaning & Check-ups sections (order and heading levels follow 02 Content.md).
 * Designs used on this page only: the checkup chart, the chair-side steps with the quote,
 * plaque vs tartar, the X-ray film band, the screening ribbon, the cleaning depth cards,
 * the six-month timeline and the cost table.
 */

const toothPath =
  "M7.2 3.6c1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 2.3-1 3.9-1.6 6.3-.6 2.6-.9 6-2.6 6-1.9 0-1.8-4.6-4.3-4.6s-2.4 4.6-4.3 4.6c-1.7 0-2-3.4-2.6-6-.6-2.4-1.6-4-1.6-6.3 0-2.6 1.4-4.6 3.7-4.6Z";

/** One molar outline for the X-ray film */
const filmTooth =
  "M40 40c14 0 22 8 32 8s18-8 32-8c22 0 30 18 30 40 0 20-8 32-12 52-5 22-8 64-20 64-14 0-12-46-30-46s-16 46-30 46c-12 0-15-42-20-64-4-20-12-32-12-52 0-22 8-40 30-40Z";

/** Hero visual: a dental chart whose teeth are checked off one by one (decorative) */
export function CheckupChart() {
  const row = Array.from({ length: 8 });
  const steps: { icon: IconName; name: string }[] = [
    { icon: "search", name: "Exam" },
    { icon: "xray", name: "X-rays" },
    { icon: "toothClean", name: "Cleaning" },
  ];
  return (
    <div className={styles.chart} aria-hidden="true">
      <div className={styles.chartHead}>
        <span className={styles.chartTitle}>Checkup chart</span>
        <span className={styles.chartTime}>
          <Icon name="clock" size={16} /> About an hour
        </span>
      </div>
      {["Upper", "Lower"].map((jaw, j) => (
        <div key={jaw} className={j ? `${styles.jaw} ${styles.lower}` : styles.jaw}>
          <span className={styles.jawName}>{jaw}</span>
          <span className={styles.teeth}>
            {row.map((_, i) => (
              <span key={i} className={styles.slot} style={{ "--i": i + j * 8 } as CSSProperties}>
                <svg viewBox="0 0 24 24" className={styles.chartTooth}>
                  <path d={toothPath} />
                </svg>
                <span className={styles.slotTick}>
                  <Icon name="check" size={10} strokeWidth={3} />
                </span>
              </span>
            ))}
          </span>
        </div>
      ))}
      <div className={styles.chartSteps}>
        {steps.map((step, i) => (
          <span key={step.name} style={{ "--i": i } as CSSProperties}>
            <Icon name={step.icon} size={16} />
            {step.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/** What happens at a checkup: a sticky intro beside the seven chair-side steps, then the quote */
export function CheckupSteps() {
  return (
    <section className={styles.steps} aria-labelledby="tc-checkup-title">
      <div className={`container ${styles.stepsGrid}`}>
        <div className={styles.stepsIntro}>
          <p className="label" data-reveal>
            Your visit
          </p>
          <h2 id="tc-checkup-title" data-reveal>
            {tcCheckup.title}
          </h2>
          <p className="lead" data-reveal>
            {tcCheckup.intro}
          </p>
          <p className={styles.listIntro} data-reveal>
            {tcCheckup.listIntro}
          </p>
        </div>
        <div className={styles.stepsCol}>
          <ol className={styles.stepList} data-inview>
            {tcCheckup.steps.map((step, i) => (
              <li key={step.text} style={{ "--i": i } as CSSProperties} data-reveal>
                <span className={styles.stepIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={22} />
                </span>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.noPressure} data-reveal>
            <Icon name="badgeDollar" size={24} />
            <span>{tcCheckup.after}</span>
          </p>
          <figure className={styles.quote} data-reveal>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>
              <p>&ldquo;{tcCheckup.quote.text}&rdquo;</p>
            </blockquote>{" "}
            <figcaption>{tcCheckup.quote.author}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/** Professional cleaning: plaque vs tartar, then what regular cleanings help with */
export function ProCleaning() {
  return (
    <section className={styles.cleaning} aria-labelledby="tc-cleaning-title">
      <div className={`container ${styles.cleaningGrid}`}>
        <div className={styles.compare} aria-hidden="true" data-inview data-reveal>
          <div className={`${styles.layer} ${styles.plaque}`}>
            <span className={styles.layerSwatch}>
              {Array.from({ length: 14 }, (_, i) => (
                <span
                  key={i}
                  style={{ "--i": i, left: `${((i * 23) % 84) + 4}%`, top: `${((i * 41) % 70) + 8}%` } as CSSProperties}
                />
              ))}
            </span>
            <span className={styles.layerName}>Plaque</span>
            <span className={styles.layerNote}>Soft, sticky film</span>
          </div>
          <span className={styles.compareArrow}>
            <Icon name="arrow" size={20} />
          </span>
          <div className={`${styles.layer} ${styles.tartar}`}>
            <span className={styles.layerSwatch} />
            <span className={styles.layerName}>Tartar</span>
            <span className={styles.layerNote}>Hardened plaque</span>
          </div>
          <div className={styles.polish}>
            <svg viewBox="0 0 24 24" className={styles.polishTooth}>
              <path d={toothPath} />
            </svg>
            <span className={styles.polishShine} />
            <span className={styles.layerName}>Smooth & shiny</span>
          </div>
        </div>
        <div className={styles.cleaningCopy}>
          <p className="label" data-reveal>
            The cleaning
          </p>
          <h2 id="tc-cleaning-title" data-reveal>
            {tcCleaning.title}
          </h2>
          {tcCleaning.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
          <p className={styles.helpIntro} data-reveal>
            {tcCleaning.listIntro}
          </p>
          <ul role="list" className={styles.helpList}>
            {tcCleaning.list.map((item) => (
              <li key={item} data-reveal>
                <span aria-hidden="true">
                  <Icon name="check" size={14} strokeWidth={2.6} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Digital X-rays: the page's navy band, with a film that draws its tooth outlines */
export function XrayBand() {
  return (
    <section className={styles.xray} aria-labelledby="tc-xray-title">
      <div className={`container ${styles.xrayGrid}`}>
        <div className={styles.xrayCopy}>
          <p className="label label-inverse" data-reveal>
            Imaging
          </p>
          <h2 id="tc-xray-title" data-reveal>
            {tcXrays.title}
          </h2>
          {tcXrays.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.film} aria-hidden="true" data-reveal>
          <svg viewBox="0 0 360 240" className={styles.filmArt} data-draw>
            <g fill="none" stroke="#a9daf3" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              {[8, 124, 240].map((x) => (
                <path key={x} transform={`translate(${x} 18) scale(0.82)`} pathLength={1} d={filmTooth} />
              ))}
              <path pathLength={1} d="M6 156c40 6 80 10 174 10s134-4 174-10" opacity="0.5" />
            </g>
            {/* An old filling, and a small dark spot between two teeth */}
            <rect x="166" y="60" width="32" height="16" rx="6" fill="#ffffff" opacity="0.85" data-draw-pop />
            <circle cx="126" cy="92" r="6" fill="#e5959c" data-draw-pop />
          </svg>
          <span className={styles.filmScan} />
          <span className={styles.filmTag}>
            <Icon name="xray" size={16} /> On screen in seconds
          </span>
        </div>
      </div>
    </section>
  );
}

/** Oral cancer screening: a ribbon */
export function ScreeningRibbon() {
  return (
    <section className={styles.screening} aria-labelledby="tc-screening-title">
      <div className="container">
        <div className={styles.ribbon} data-reveal>
          <span className={styles.ribbonIcon} aria-hidden="true">
            <Icon name="search" size={28} />
          </span>
          <div className={styles.ribbonCopy}>
            <h2 id="tc-screening-title">{tcScreening.title}</h2>
            <p>
              <Rich text={tcScreening.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** When a regular cleaning isn't enough: three cards, each reaching deeper below the gum */
export function NotEnough() {
  return (
    <section className={styles.deeper} aria-labelledby="tc-deeper-title">
      <div className="container">
        <div className={styles.deeperHead}>
          <p className="label" data-reveal>
            Beyond a regular cleaning
          </p>
          <h2 id="tc-deeper-title" data-reveal>
            {tcNotEnough.title}
          </h2>
          <p className="lead" data-reveal>
            {tcNotEnough.intro}
          </p>
        </div>
        <ul role="list" className={styles.deeperCards} data-inview>
          {tcNotEnough.items.map((item, i) => (
            <li key={item.lead} className={styles.deeperCard} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.gauge} aria-hidden="true">
                <span className={styles.gaugeGum} />
                <span className={styles.gaugeFill} />
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
        <p className={styles.deeperAfter} data-reveal>
          <Icon name="chat" size={20} />
          <span>{tcNotEnough.after}</span>
        </p>
      </div>
    </section>
  );
}

/** How often to come in: two visits a year on a timeline */
export function HowOften() {
  return (
    <section className={styles.often} aria-labelledby="tc-often-title">
      <div className={`container ${styles.oftenGrid}`}>
        <div className={styles.oftenCopy}>
          <p className="label" data-reveal>
            Twice a year
          </p>
          <h2 id="tc-often-title" data-reveal>
            {tcOften.title}
          </h2>
          {tcOften.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.timeline} aria-hidden="true" data-inview data-reveal>
          <span className={styles.track}>
            <span />
          </span>
          {["Visit", "6 months", "Visit", "6 months", "Visit"].map((text, i) => (
            <span key={i} className={i % 2 ? styles.gap : styles.visit} style={{ "--i": i } as CSSProperties}>
              {i % 2 ? null : (
                <span className={styles.visitDot}>
                  <Icon name="toothClean" size={20} />
                </span>
              )}
              <span className={styles.visitText}>{text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Cost and insurance: the real price table, then insurance and financing */
export function CleaningCost() {
  return (
    <section className={styles.cost} aria-labelledby="tc-cost-title">
      <div className="container">
        <div className={styles.costHead}>
          <p className="label" data-reveal>
            Cost & insurance
          </p>
          <h2 id="tc-cost-title" data-reveal>
            {tcCost.title}
          </h2>
          <p className="lead" data-reveal>
            {tcCost.intro}
          </p>
        </div>
        <div className={styles.costGrid}>
          <div data-reveal>
            <DataTable label={tcCost.title} head={tcCost.head} rows={tcCost.rows} className={styles.priceTable} />
          </div>
          <div className={styles.costSide}>
            <ul role="list" className={styles.costList}>
              {tcCost.items.map((item) => (
                <li key={item.lead} data-reveal>
                  <span className={styles.costIcon} aria-hidden="true">
                    <Icon name={item.lead === "Financing:" ? "banknote" : "shield"} size={22} />
                  </span>
                  <p>
                    <strong>{item.lead}</strong> <Rich text={item.text} />
                  </p>
                </li>
              ))}
            </ul>
            <p className={styles.costAfter} data-reveal>
              {tcCost.after}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
