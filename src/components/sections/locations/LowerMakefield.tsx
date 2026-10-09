import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { lmEveryAge, lmKids, lmMembership } from "@/content/pages/locations/pa";
import c from "../restorative/Common.module.css";
import styles from "./LowerMakefield.module.css";

/**
 * Lower Makefield, PA sections (order and heading levels follow 02 Content.md). No ZIP and no
 * "Yardley" targeting outside the NAP and one FAQ; membership prices match the insurance and
 * offers pages (handoff). Designs used on this page only: the routine-care menu, the
 * protection layers with the at-home panel, and the household pass.
 */

/** Every age: the check-up copy beside a menu of routine care */
export function CareMenu() {
  const a = lmEveryAge;
  return (
    <section className={c.section} aria-labelledby="lm-age-title">
      <div className={`container ${styles.menuGrid}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Every age
          </p>
          <h2 id="lm-age-title" data-reveal>
            {a.title}
          </h2>
          <p data-reveal>{a.intro}</p>
          <p data-reveal>
            <Rich text={a.after} />
          </p>
        </div>
        <ul role="list" className={styles.menu}>
          {a.items.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.menuIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <span>
                <Rich text={item.text} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Children's visits: the copy, the three protection layers, then cavity prevention at home */
export function KidsLayers() {
  const k = lmKids;
  const tips = ["Treats at mealtimes", "Nutritious snacks", "Easy on sticky & sugary", "Brush & floss at bedtime"];
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="lm-kids-title">
      <div className="container">
        <div className={styles.kids}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Children
            </p>
            <h2 id="lm-kids-title" data-reveal>
              {k.title}
            </h2>
            {k.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                {text}
              </p>
            ))}
            <p className={styles.layersIntro} data-reveal>
              {k.listIntro}
            </p>
            <ul role="list" className={styles.layerList}>
              {k.items.map((item) => (
                <li key={item.text} data-reveal>
                  <span className={styles.layerIcon} aria-hidden="true">
                    <Icon name={item.icon as IconName} size={20} />
                  </span>
                  <span>
                    <Rich text={item.text} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.toothCard} aria-hidden="true" data-inview data-reveal>
            <span className={styles.birthday}>
              <Icon name="star" size={16} /> First visit: just after the first birthday
            </span>
            <svg viewBox="0 0 200 210" className={styles.toothSvg}>
              <path
                d="M40 46c0-20 18-34 40-34 10 0 14 6 20 6s10-6 20-6c22 0 40 14 40 34v62c0 30-10 64-26 84-6 8-16 8-20-2l-14-40-14 40c-4 10-14 10-20 2-16-20-26-54-26-84Z"
                className={styles.toothBody}
              />
              {[0, 1, 2].map((i) => (
                <path
                  key={i}
                  d="M40 46c0-20 18-34 40-34 10 0 14 6 20 6s10-6 20-6c22 0 40 14 40 34"
                  className={styles.toothLayer}
                  transform={`translate(${100 - 100 * (1 + i * 0.09)} ${-8 - i * 9}) scale(${1 + i * 0.09} 1)`}
                  style={{ "--i": i } as CSSProperties}
                />
              ))}
            </svg>
            <span className={styles.layerKey}>
              <span>Hygiene coaching</span>
              <span>Sealants</span>
              <span>Fluoride</span>
            </span>
          </div>
        </div>
        <div className={styles.home}>
          <div className={styles.homeCopy}>
            <h3 data-reveal>{k.home.title}</h3>
            {k.home.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                <Rich text={text} />
              </p>
            ))}
          </div>
          <div className={styles.homeTips} aria-hidden="true" data-reveal>
            <span className={styles.timer}>
              <Icon name="timer" size={20} />
              <span>
                <strong>About 20 min</strong> of acid after each snack
              </span>
            </span>
            {tips.map((tip) => (
              <span key={tip} className={styles.tip}>
                <Icon name="check" size={14} strokeWidth={2.6} /> {tip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** The membership plan: a household pass holding the real table */
export function HouseholdPass() {
  const m = lmMembership;
  return (
    <section className={c.section} aria-labelledby="lm-member-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            No insurance?
          </p>
          <h2 id="lm-member-title" data-reveal>
            {m.title}
          </h2>
          <p data-reveal>{m.intro}</p>
          <p data-reveal>
            <Rich text={m.after} />
          </p>
        </div>
        <div className={styles.pass} data-reveal>
          <span className={styles.passTop} aria-hidden="true">
            <span className={styles.passName}>Household membership</span>
            <span className={styles.passPeople}>
              <span className={styles.person}>
                <Icon name="user" size={18} />
                <small>$150</small>
              </span>
              <span className={styles.plus}>+</span>
              <span className={`${styles.person} ${styles.personMore}`}>
                <Icon name="users" size={18} />
                <small>$75 each</small>
              </span>
            </span>
          </span>
          <table className={styles.passTable}>
            <caption className="visually-hidden">Membership plan: what&apos;s included each year and the member price</caption>
            <thead>
              <tr>
                {m.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {m.rows.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
