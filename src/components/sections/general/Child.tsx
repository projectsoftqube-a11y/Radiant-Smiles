import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { cdCheckups, cdFamily, cdFirst, cdFun, cdHome, cdProtect } from "@/content/pages/general/child";
import styles from "./Child.module.css";

/**
 * Children's Dentistry sections (order and heading levels follow 02 Content.md). No child
 * photos without written consent, "pediatric" only in the one FAQ (handoff). Designs used
 * on this page only: the baby-teeth arch, the first-visit checklist with the eruption
 * ribbon, the twice-a-year band, the twin protection cards, the fridge chart, the storybook
 * and the family card.
 */

const toothPath =
  "M7.2 3.6c1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 2.3-1 3.9-1.6 6.3-.6 2.6-.9 6-2.6 6-1.9 0-1.8-4.6-4.3-4.6s-2.4 4.6-4.3 4.6c-1.7 0-2-3.4-2.6-6-.6-2.4-1.6-4-1.6-6.3 0-2.6 1.4-4.6 3.7-4.6Z";

/** Ten teeth on an arch: angle from the centre and eruption order (front teeth first) */
const arch = Array.from({ length: 10 }, (_, i) => {
  const t = (i - 4.5) / 4.5;
  const order = Math.abs(i - 4.5) - 0.5;
  return { x: 50 + t * 42, y: 10 + (1 - t * t) * 22, rot: t * 20, order };
});

/** Hero visual: all 20 baby teeth coming in, bottom front teeth first (decorative) */
export function BabyTeeth() {
  return (
    <div className={styles.baby} aria-hidden="true">
      <div className={styles.babyArches}>
        {[
          { jaw: "upper", delay: 0.6 },
          { jaw: "lower", delay: 0 },
        ].map(({ jaw, delay }) => (
          <div key={jaw} className={jaw === "upper" ? styles.upper : styles.lower}>
            {arch.map((tooth, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className={styles.babyTooth}
                style={
                  {
                    left: `${tooth.x}%`,
                    // Both rows follow a smile: front teeth lowest
                    top: jaw === "upper" ? `${tooth.y}%` : undefined,
                    bottom: jaw === "upper" ? undefined : `${42 - tooth.y}%`,
                    "--r": `${jaw === "upper" ? 180 - tooth.rot : tooth.rot}deg`,
                    "--d": `${0.8 + delay + tooth.order * 0.32}s`,
                  } as CSSProperties
                }
              >
                <path d={toothPath} />
              </svg>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.babyFoot}>
        <span className={styles.babyCount}>
          <span className={styles.babyFigure}>20</span> baby teeth
        </span>
        <span className={styles.babyAge}>
          <Icon name="calendar" size={16} /> By about age two & a half
        </span>
      </div>
    </div>
  );
}

/** Your child's first visit: the checklist, then the H3 eruption ribbon */
export function FirstVisit() {
  const milestones = [
    { age: "6–8 months", note: "First teeth, bottom front" },
    { age: "About 2½ years", note: "All 20 baby teeth" },
    { age: "Ages 5–6", note: "Permanent teeth begin" },
  ];
  return (
    <section className={styles.first} aria-labelledby="cd-first-title">
      <div className="container">
        <div className={styles.firstGrid}>
          <div className={styles.firstCopy}>
            <p className="label" data-reveal>
              Age one
            </p>
            <h2 id="cd-first-title" data-reveal>
              {cdFirst.title}
            </h2>
            <p className="lead" data-reveal>
              {cdFirst.intro}
            </p>
            <p className={styles.firstAfter} data-reveal>
              <Icon name="heart" size={20} />
              <span>{cdFirst.after}</span>
            </p>
          </div>
          <div className={styles.checklist}>
            <p className={styles.checklistIntro} data-reveal>
              {cdFirst.listIntro}
            </p>
            <ul role="list">
              {cdFirst.items.map((item, i) => (
                <li key={item.text} style={{ "--i": i } as CSSProperties} data-reveal>
                  <span className={styles.sticker} aria-hidden="true">
                    <Icon name={item.icon as IconName} size={22} />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.eruption}>
          <div className={styles.eruptionCopy}>
            <h3 data-reveal>{cdFirst.teeth.title}</h3>
            <p data-reveal>{cdFirst.teeth.text}</p>
          </div>
          <div className={styles.ribbon} aria-hidden="true" data-grow data-reveal>
            <span className={styles.ribbonLine}>
              <span data-grow-item />
            </span>
            <ol className={styles.ribbonList}>
              {milestones.map((m) => (
                <li key={m.age}>
                  <span className={styles.ribbonDot}>
                    <Icon name="tooth" size={18} />
                  </span>
                  <span className={styles.ribbonAge}>{m.age}</span>
                  <span className={styles.ribbonNote}>{m.note}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Cleanings and checkups: a twice-a-year band */
export function KidsCheckups() {
  return (
    <section className={styles.checkups} aria-labelledby="cd-checkups-title">
      <div className="container">
        <div className={styles.checkBand}>
          <span className={styles.checkBadge} aria-hidden="true" data-reveal>
            <span className={styles.checkFigure}>2×</span>
            <span>a year</span>
          </span>
          <div className={styles.checkCopy}>
            <h2 id="cd-checkups-title" data-reveal>
              {cdCheckups.title}
            </h2>
            <p data-reveal>
              <Rich text={cdCheckups.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Fluoride and sealants: two protection cards */
export function KidsProtect() {
  return (
    <section className={styles.protect} aria-labelledby="cd-protect-title">
      <div className="container">
        <div className={styles.protectHead}>
          <p className="label" data-reveal>
            Cavity protection
          </p>
          <h2 id="cd-protect-title" data-reveal>
            {cdProtect.title}
          </h2>
          <p className="lead" data-reveal>
            {cdProtect.intro}
          </p>
        </div>
        <ul role="list" className={styles.protectCards}>
          {cdProtect.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.protectIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={30} />
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
        <p className={styles.protectAfter} data-reveal>
          {cdProtect.after}
        </p>
      </div>
    </section>
  );
}

/** Preventing cavities at home: a fridge chart of habits */
export function FridgeChart() {
  return (
    <section className={styles.home} aria-labelledby="cd-home-title">
      <div className={`container ${styles.homeGrid}`}>
        <div className={styles.homeCopy}>
          <p className="label" data-reveal>
            At home
          </p>
          <h2 id="cd-home-title" data-reveal>
            {cdHome.title}
          </h2>
          <p className="lead" data-reveal>
            {cdHome.intro}
          </p>
          <p data-reveal>
            <Rich text={cdHome.after} />
          </p>
        </div>
        <div className={styles.fridge} data-inview>
          <span className={styles.magnet} aria-hidden="true" />
          <span className={styles.fridgeHead} aria-hidden="true" data-reveal>
            <span className={styles.fridgeTitle}>Our tooth-friendly habits</span>
            <span className={styles.fridgeDone}>Done</span>
          </span>
          <ul role="list" className={styles.fridgeList}>
            {cdHome.items.map((item, i) => (
              <li key={item.text} style={{ "--i": i } as CSSProperties} data-reveal>
                <span className={styles.fridgeIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                <span className={styles.fridgeText}>{item.text}</span>
                <span className={styles.fridgeBox} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className={styles.fridgeTick}>
                    <path d="M5 12.5l4.5 4.5L19 7.5" pathLength={1} />
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Making visits fun: an open storybook, two tips on each page */
export function Storybook() {
  const left = cdFun.items.slice(0, 2);
  const right = cdFun.items.slice(2);
  const page = (items: typeof cdFun.items) => (
    <ul role="list" className={styles.page}>
      {items.map((item) => (
        <li key={item.text} data-reveal>
          <span className={styles.pageIcon} aria-hidden="true">
            <Icon name={item.icon as IconName} size={24} />
          </span>
          {item.text}
        </li>
      ))}
    </ul>
  );
  return (
    <section className={styles.fun} aria-labelledby="cd-fun-title">
      <div className="container">
        <div className={styles.funHead}>
          <p className="label" data-reveal>
            A relaxed visit
          </p>
          <h2 id="cd-fun-title" data-reveal>
            {cdFun.title}
          </h2>
          <p className="lead" data-reveal>
            {cdFun.intro}
          </p>
        </div>
        <div className={styles.book}>
          {page(left)}
          <span className={styles.spine} aria-hidden="true" />
          {page(right)}
        </div>
        <p className={styles.funAfter} data-reveal>
          <Icon name="smile" size={22} />
          <span>{cdFun.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Family appointments: the copy and the ways to pay */
export function KidsFamily() {
  return (
    <section className={styles.family} aria-labelledby="cd-family-title">
      <div className="container">
        <div className={styles.familyCard}>
          <div className={styles.familyCopy}>
            <p className="label label-inverse" data-reveal>
              One office for everyone
            </p>
            <h2 id="cd-family-title" data-reveal>
              {cdFamily.title}
            </h2>
            <p data-reveal>
              <Rich text={cdFamily.text} />
            </p>
          </div>
          <div className={styles.familyPay}>
            <p className={styles.payTitle} data-reveal>
              <strong>{cdFamily.payTitle}</strong>
            </p>
            <ul role="list">
              {cdFamily.pay.map((item, i) => (
                <li key={item.slice(0, 20)} data-reveal>
                  <span aria-hidden="true">
                    <Icon name={i ? "card" : "shield"} size={20} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
