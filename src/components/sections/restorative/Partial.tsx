import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { paDesign, paDoes, paFit, paTypes, paWho } from "@/content/pages/restorative/dentures";
import c from "./Common.module.css";
import styles from "./Partial.module.css";

/**
 * Partial Dentures sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the arch with a partial clipping into its gaps, the gap map, the three
 * benefits, the metal vs acrylic cross-sections, the even-force diagram and the care list.
 */

/** Hero visual: a lower arch with gaps, the partial's teeth and clasps settling in (decorative) */
export function PartialFit() {
  const slots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const missing = new Set([2, 3, 7]);
  return (
    <div className={styles.fit} aria-hidden="true">
      <svg viewBox="0 0 300 200" className={styles.fitArt}>
        <path d="M24 70c12 60 62 100 126 100s114-40 126-100" fill="none" stroke="#f6cfd0" strokeWidth="36" strokeLinecap="round" />
        {slots.map((i) => {
          const t = (i - 4.5) / 4.5;
          const x = 150 + t * 112;
          const y = 70 + (1 - t * t) * 70;
          const gap = missing.has(i);
          return (
            <g key={i} className={gap ? styles.replacement : undefined} style={{ "--i": i } as CSSProperties}>
              <rect x={x - 11} y={y - 12} width="22" height="24" rx="8" className={gap ? styles.newTooth : styles.natural} />
            </g>
          );
        })}
        {/* The metal framework joining the replacement teeth */}
        <path className={styles.frame} d="M70 128c30 22 50 30 80 30s50-8 80-30" fill="none" stroke="#8a97a8" strokeWidth="4" strokeLinecap="round" pathLength={1} />
      </svg>
      <div className={styles.fitTags}>
        <span className={styles.tagNatural}>Your own teeth</span>
        <span className={styles.tagNew}>Partial fills the gaps</span>
      </div>
    </div>
  );
}

/** Who partial dentures suit */
export function WhoPartial() {
  return (
    <section className={c.section} aria-labelledby="pa-who-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Is it for you
          </p>
          <h2 id="pa-who-title" data-reveal>
            {paWho.title}
          </h2>
          <p className="lead" data-reveal>
            {paWho.intro}
          </p>
        </div>
        <div className={styles.goodFit}>
          <p className={styles.goodFitTitle} data-reveal>
            {paWho.listIntro}
          </p>
          <ul role="list">
            {paWho.items.map((item) => (
              <li key={item.text} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                <p>
                  <Rich text={item.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** What a partial does for you: three benefits */
export function PartialDoes() {
  return (
    <section className={`${c.section} ${c.blush}`} aria-labelledby="pa-does-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            The benefits
          </p>
          <h2 id="pa-does-title" data-reveal>
            {paDoes.title}
          </h2>
          <p className="lead" data-reveal>
            {paDoes.intro}
          </p>
        </div>
        <ul role="list" className={styles.benefits}>
          {paDoes.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.benefitIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={26} />
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

/** Types: metal-and-acrylic vs all-acrylic, as two cross-sections */
export function PartialTypes() {
  return (
    <section className={c.section} aria-labelledby="pa-types-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Materials
          </p>
          <h2 id="pa-types-title" data-reveal>
            {paTypes.title}
          </h2>
          <p className="lead" data-reveal>
            {paTypes.intro}
          </p>
        </div>
        <div className={styles.typeCards}>
          {paTypes.types.map((type) => (
            <div key={type.title} className={type.metal ? `${styles.typeCard} ${styles.metal}` : styles.typeCard} data-reveal>
              <svg viewBox="0 0 160 70" className={styles.section} aria-hidden="true">
                <rect x="10" y="36" width="140" height={type.metal ? 14 : 24} rx="7" fill="#f6cfd0" stroke="#e5959c" strokeWidth="2" />
                {type.metal ? <path d="M14 44h132" stroke="#8a97a8" strokeWidth="4" strokeLinecap="round" /> : null}
                {[34, 72, 110].map((x) => (
                  <rect key={x} x={x} y="12" width="20" height="26" rx="8" fill="#ffffff" stroke="#1b3d6e" strokeWidth="2" />
                ))}
              </svg>
              {type.metal ? (
                <span className={styles.preferred}>
                  <Icon name="check" size={14} strokeWidth={2.6} /> Preferred for long-term use
                </span>
              ) : null}
              <h3>{type.title}</h3>
              <p>{type.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** How your partial is designed: chewing forces spread evenly */
export function EvenForces() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="pa-design-title">
      <div className={`container ${c.split}`}>
        <div className={styles.forces} aria-hidden="true" data-inview data-reveal>
          <svg viewBox="0 0 260 150">
            {[30, 80, 130, 180, 230].map((x, i) => (
              <g key={x} className={styles.arrow} style={{ "--i": i } as CSSProperties}>
                <path d={`M${x} 14v36`} stroke="#1b6e9f" strokeWidth="3" strokeLinecap="round" />
                <path d={`M${x - 7} 42l7 9 7-9`} fill="none" stroke="#1b6e9f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ))}
            <rect x="10" y="64" width="240" height="20" rx="10" fill="#8a97a8" opacity="0.5" />
            <path d="M10 96c40 0 80 10 120 10s80-10 120-10v40H10Z" fill="#f6cfd0" />
          </svg>
          <span className={styles.forcesNote}>Spread evenly across teeth & gums</span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Designed for you
          </p>
          <h2 id="pa-design-title" data-reveal>
            {paDesign.title}
          </h2>
          {paDesign.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Fit and care: five habits beside the reline note */
export function PartialCare() {
  return (
    <section className={c.section} aria-labelledby="pa-fit-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Fit & care
          </p>
          <h2 id="pa-fit-title" data-reveal>
            {paFit.title}
          </h2>
          <p className="lead" data-reveal>
            {paFit.intro}
          </p>
        </div>
        <ol className={styles.careList}>
          {paFit.items.map((item) => (
            <li key={item} data-reveal>
              {item}
            </li>
          ))}
        </ol>
        <p className={c.note} data-reveal>
          <Icon name="refresh" size={20} />
          <span>
            <Rich text={paFit.after} />
          </span>
        </p>
      </div>
    </section>
  );
}
