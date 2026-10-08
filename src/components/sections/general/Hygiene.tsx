import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { ohBetween, ohBrush, ohDiet, ohFloss, ohProducts } from "@/content/pages/general/hygiene";
import styles from "./Hygiene.module.css";

/**
 * Oral Hygiene sections (order and heading levels follow 02 Content.md). Informational page:
 * no offer banner (handoff). The two technique diagrams carry alt text describing the
 * technique (handoff). Designs used on this page only: the 45-degree diagram, the stroke
 * cards, the C-shape floss diagram, the product shelf, the acid-attack day chart and the
 * call-us card.
 */

/** Hero visual: diagram of the 45-degree brushing angle (meaningful, with alt text) */
export function BrushAngle() {
  return (
    <figure className={styles.angle}>
      <svg viewBox="0 0 360 320" className={styles.angleArt} role="img" aria-label="Diagram of a toothbrush held at a 45-degree angle to the gumline">
        <defs>
          <linearGradient id="oh-gum" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6cfd0" />
            <stop offset="1" stopColor="#e5959c" />
          </linearGradient>
        </defs>
        {/* A molar standing in its gum */}
        <path
          transform="translate(60 10) scale(0.6)"
          d="M140 70c28 0 44 14 60 14s32-14 60-14c40 0 60 34 60 76 0 40-17 64-27 102-10 42-15 78-41 78-31 0-25-66-52-66s-21 66-52 66c-26 0-31-36-41-78-10-38-27-62-27-102 0-42 20-76 60-76Z"
          fill="#ffffff"
          stroke="#1b3d6e"
          strokeWidth="5"
        />
        <path d="M128 70c6-10 14-14 24-15" fill="none" stroke="#e5f4fb" strokeWidth="7" strokeLinecap="round" />
        <path d="M24 162c52 0 78-12 104-10 22 2 34 8 52 8s30-6 52-8c26-2 52 10 104 10v158H24Z" fill="url(#oh-gum)" />
        <path d="M24 162c52 0 78-12 104-10 22 2 34 8 52 8s30-6 52-8c26-2 52 10 104 10" fill="none" stroke="#d98089" strokeWidth="3" />
        {/* The tooth's long axis and the 45-degree arc */}
        <path d="M241 152V70" stroke="#1b6e9f" strokeWidth="1.6" strokeDasharray="5 5" />
        <path className={styles.arc} d="M241 102A50 50 0 0 1 276.4 116.6" fill="none" stroke="#1b6e9f" strokeWidth="2.4" pathLength={1} />
        {/* The brush head in cross-section, bristles angled into the gumline */}
        <g transform="translate(243 152) rotate(45)">
          <g className={styles.brush}>
            <g stroke="#6dbde8" strokeWidth="4" strokeLinecap="round">
              {[-18, -10, -2, 6, 14].map((x) => (
                <path key={x} d={`M${x} -4V-46`} />
              ))}
            </g>
            <rect x="-26" y="-66" width="52" height="20" rx="8" fill="#1b3d6e" />
          </g>
        </g>
      </svg>
      <span className={styles.angleBadge} aria-hidden="true">
        45°
      </span>
      <figcaption className={styles.angleCaption} aria-hidden="true">
        <Icon name="brush" size={16} /> Bristles toward the gumline
      </figcaption>
    </figure>
  );
}

/** A tiny diagram of each brushing stroke (decorative) */
function Stroke({ kind }: { kind: string }) {
  const paths: Record<string, ReactNode> = {
    angle: (
      <>
        <path d="M14 8v30" stroke="#1b3d6e" strokeWidth="3" />
        <path d="M36 12 18 30" stroke="#6dbde8" strokeWidth="4" />
      </>
    ),
    circles: <path d="M8 26c0-6 8-6 8 0s-8 6-8 0m10 0c0-6 8-6 8 0s-8 6-8 0m10 0c0-6 8-6 8 0s-8 6-8 0" stroke="#6dbde8" strokeWidth="3" />,
    updown: <path d="M23 8v30M17 14l6-6 6 6M17 32l6 6 6-6" stroke="#6dbde8" strokeWidth="3" />,
    backforth: <path d="M6 23h34M12 17l-6 6 6 6M34 17l6 6-6 6" stroke="#6dbde8" strokeWidth="3" />,
    rinse: <path d="M6 18c4-4 8-4 12 0s8 4 12 0 6-4 10-2M6 28c4-4 8-4 12 0s8 4 12 0 6-4 10-2" stroke="#6dbde8" strokeWidth="3" />,
  };
  return (
    <svg viewBox="0 0 46 46" className={styles.stroke} fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}

/** How to brush: five stroke cards, then the pressure note */
export function Brushing() {
  return (
    <section className={styles.brushing} aria-labelledby="oh-brush-title">
      <div className="container">
        <div className={styles.brushHead}>
          <p className="label" data-reveal>
            Twice a day
          </p>
          <h2 id="oh-brush-title" data-reveal>
            {ohBrush.title}
          </h2>
          <p className="lead" data-reveal>
            {ohBrush.intro}
          </p>
        </div>
        <ol className={styles.strokes}>
          {ohBrush.steps.map((step) => (
            <li key={step.lead} data-reveal>
              <Stroke kind={step.stroke} />
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={styles.pressure} data-reveal>
          <span className={styles.splay} aria-hidden="true">
            <svg viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <path d="M10 30 4 16M16 30l-3-16M23 30V14M30 30l3-16M36 30l6-14" />
              <rect x="6" y="30" width="34" height="8" rx="3" fill="currentColor" />
            </svg>
          </span>
          <span>{ohBrush.after}</span>
        </p>
      </div>
    </section>
  );
}

/** How to floss: the C-shape diagram and the six steps */
export function Flossing() {
  return (
    <section className={styles.flossing} aria-labelledby="oh-floss-title">
      <div className={`container ${styles.flossGrid}`}>
        <div className={styles.flossCopy}>
          <p className="label" data-reveal>
            Once a day
          </p>
          <h2 id="oh-floss-title" data-reveal>
            {ohFloss.title}
          </h2>
          <p className="lead" data-reveal>
            {ohFloss.intro}
          </p>
          <figure className={styles.cShape} data-reveal>
            <svg viewBox="0 0 300 200" role="img" aria-label="Diagram of floss curved into a C-shape against the side of a tooth" data-draw>
              <rect x="40" y="40" width="104" height="120" rx="40" fill="#ffffff" stroke="#1b3d6e" strokeWidth="3" />
              <rect x="160" y="40" width="104" height="120" rx="40" fill="#ffffff" stroke="#1b3d6e" strokeWidth="3" />
              <path
                pathLength={1}
                d="M14 22 120 34c26 4 34 30 34 66s-8 62-34 66L14 178"
                fill="none"
                stroke="#6dbde8"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            <figcaption aria-hidden="true">
              <Icon name="floss" size={16} /> Hug the tooth in a C-shape
            </figcaption>
          </figure>
        </div>
        <div className={styles.flossSteps}>
          <span className={styles.ruler} aria-hidden="true" data-reveal>
            <span>18 inches</span>
          </span>
          <ol className={styles.flossList}>
            {ohFloss.steps.map((step, i) => (
              <li key={step} style={{ "--i": i } as CSSProperties} data-reveal>
                <span className={styles.flossDot} aria-hidden="true" />
                {step}
              </li>
            ))}
          </ol>
          <p className={styles.flossAfter} data-reveal>
            <Icon name="drop" size={20} />
            <span>{ohFloss.after}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Products that help: four cards standing on a shelf */
export function Products() {
  return (
    <section className={styles.products} aria-labelledby="oh-products-title">
      <div className="container">
        <div className={styles.productsHead}>
          <p className="label" data-reveal>
            Worth asking about
          </p>
          <h2 id="oh-products-title" data-reveal>
            {ohProducts.title}
          </h2>
          <p className="lead" data-reveal>
            {ohProducts.intro}
          </p>
        </div>
        <ul role="list" className={styles.shelf}>
          {ohProducts.items.map((item, i) => (
            <li key={item.lead} className={styles.product} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.productCap} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.productsAfter} data-reveal>
          {ohProducts.after}
        </p>
      </div>
    </section>
  );
}

/** Diet and your teeth: acid attacks across a day, grazing vs set times */
export function Diet() {
  const graze = [8, 9.5, 10.5, 11.5, 13, 14, 15, 16, 17, 18.5, 19.5, 21];
  const meals = [8, 12.5, 18.5];
  const pos = (h: number) => `${((h - 7) / 15) * 100}%`;
  return (
    <section className={styles.diet} aria-labelledby="oh-diet-title">
      <div className={`container ${styles.dietGrid}`}>
        <div className={styles.dietCopy}>
          <p className="label" data-reveal>
            What & when
          </p>
          <h2 id="oh-diet-title" data-reveal>
            {ohDiet.title}
          </h2>
          <p className="lead" data-reveal>
            {ohDiet.intro}
          </p>
          <ul role="list" className={styles.dietList}>
            {ohDiet.items.map((item) => (
              <li key={item.text} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <p data-reveal>
            <Rich text={ohDiet.after} />
          </p>
        </div>
        <div className={styles.day} aria-hidden="true" data-inview data-reveal>
          <span className={styles.dayTitle}>Acid attacks in a day</span>
          {[
            { name: "Grazing all day", times: graze, cls: styles.rowGraze },
            { name: "Snacks at set times", times: meals, cls: styles.rowSet },
          ].map((row) => (
            <div key={row.name} className={`${styles.dayRow} ${row.cls}`}>
              <span className={styles.dayName}>{row.name}</span>
              <span className={styles.dayTrack}>
                {row.times.map((t, i) => (
                  <span key={t} className={styles.spike} style={{ left: pos(t), "--i": i } as CSSProperties} />
                ))}
              </span>
            </div>
          ))}
          <span className={styles.dayScale}>
            <span>7 am</span>
            <span>Noon</span>
            <span>10 pm</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/** Help between visits: the copy, then a call-us card with the warning signs */
export function Between() {
  return (
    <section className={styles.between} aria-labelledby="oh-between-title">
      <div className={`container ${styles.betweenGrid}`}>
        <div className={styles.betweenCopy}>
          <p className="label" data-reveal>
            Your hygienist
          </p>
          <h2 id="oh-between-title" data-reveal>
            {ohBetween.title}
          </h2>
          <p data-reveal>
            <Rich text={ohBetween.text} />
          </p>
        </div>
        <div className={styles.callCard}>
          <p className={styles.callIntro} data-reveal>
            <Icon name="phone" size={20} />
            {ohBetween.listIntro}
          </p>
          <ul role="list" className={styles.callList}>
            {ohBetween.items.map((item) => (
              <li key={item} data-reveal>
                <span aria-hidden="true">
                  <Icon name="alert" size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.callAfter} data-reveal>
            {ohBetween.after}
          </p>
        </div>
      </div>
    </section>
  );
}
