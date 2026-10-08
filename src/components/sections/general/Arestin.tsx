import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { arExpect, arWhat, arWhen, arWho } from "@/content/pages/general/arestin";
import styles from "./Arestin.module.css";

/**
 * Arestin sections (order and heading levels follow 02 Content.md). No doses, no study
 * claims (handoff). Designs used on this page only: the pocket close-up, pill vs pocket,
 * the deep cleaning + Arestin pairing, the placement timeline with the one-week aftercare
 * countdown and the caution card.
 */

/** Microsphere positions inside the pocket (decorative) */
const spheres = [
  [176, 168],
  [186, 184],
  [172, 198],
  [184, 212],
  [174, 226],
  [186, 240],
  [178, 254],
  [190, 198],
  [168, 182],
];

/** Hero visual: a gum pocket in close-up, microspheres settling into it (decorative) */
export function PocketCloseUp() {
  return (
    <div className={styles.pocket} aria-hidden="true">
      <svg viewBox="0 0 320 320" className={styles.pocketArt}>
        <defs>
          <linearGradient id="ar-gum" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#e5959c" />
            <stop offset="1" stopColor="#f6cfd0" />
          </linearGradient>
          <radialGradient id="ar-glow">
            <stop offset="0" stopColor="#a9daf3" stopOpacity="0.8" />
            <stop offset="1" stopColor="#a9daf3" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* The tooth: crown above, root going down on the left */}
        <path
          d="M34 60C34 34 50 20 74 20h56c24 0 40 14 40 40v44c0 12-4 20-8 28l-8 150c-1 12-8 18-18 18H68c-10 0-17-6-18-18l-8-150c-4-8-8-16-8-28Z"
          fill="#ffffff"
          stroke="#1b3d6e"
          strokeWidth="3"
        />
        <path d="M36 118h132" stroke="#e3e7ec" strokeWidth="2" strokeDasharray="4 6" />
        {/* The gum on the right, with the pocket opening between it and the root */}
        <path d="M168 132c14 6 24 22 26 44l4 144h122V120c-60 0-112-2-152 12Z" fill="url(#ar-gum)" />
        <path d="M168 132c14 6 24 22 26 44l4 144" fill="none" stroke="#d98089" strokeWidth="3" />
        <ellipse className={styles.glow} cx="180" cy="210" rx="34" ry="70" fill="url(#ar-glow)" />
        <g className={styles.spheres}>
          {spheres.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="5.5" style={{ "--i": i } as CSSProperties} />
          ))}
        </g>
      </svg>
      <span className={`${styles.pocketTag} ${styles.tagA}`}>
        <Icon name="drop" size={16} /> Placed in the pocket
      </span>
      <span className={`${styles.pocketTag} ${styles.tagB}`}>
        <Icon name="ban" size={16} /> No pill to swallow
      </span>
    </div>
  );
}

/** What Arestin is: pill vs pocket */
export function WhatArestin() {
  return (
    <section className={styles.what} aria-labelledby="ar-what-title">
      <div className={`container ${styles.whatGrid}`}>
        <div className={styles.whatCopy}>
          <p className="label" data-reveal>
            Antibiotic in the gum pocket
          </p>
          <h2 id="ar-what-title" data-reveal>
            {arWhat.title}
          </h2>
          {arWhat.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.versus} aria-hidden="true">
          <div className={`${styles.route} ${styles.routePill}`} data-reveal>
            <span className={styles.routeIcon}>
              <Icon name="pill" size={30} />
            </span>
            <span className={styles.routeName}>A pill you swallow</span>
            <span className={styles.routeNote}>Not how Arestin is given</span>
          </div>
          <span className={styles.versusMark} data-reveal>
            vs
          </span>
          <div className={`${styles.route} ${styles.routePocket}`} data-reveal>
            <span className={styles.routeIcon}>
              <Icon name="drop" size={30} />
            </span>
            <span className={styles.routeName}>Straight into the pocket</span>
            <span className={styles.routeNote}>Works on the infected area itself</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** When it's used: deep cleaning plus Arestin */
export function WhenUsed() {
  return (
    <section className={styles.when} aria-labelledby="ar-when-title">
      <div className="container">
        <div className={styles.whenCard}>
          <div className={styles.pair} aria-hidden="true" data-reveal>
            <span className={styles.pairStep}>
              <Icon name="toothClean" size={24} /> Deep cleaning
            </span>
            <span className={styles.pairPlus}>+</span>
            <span className={`${styles.pairStep} ${styles.pairArestin}`}>
              <Icon name="drop" size={24} /> Arestin
            </span>
          </div>
          <div className={styles.whenCopy}>
            <h2 id="ar-when-title" data-reveal>
              {arWhen.title}
            </h2>
            <p data-reveal>
              <Rich text={arWhen.text} />
            </p>
            <p className={styles.whenIntro} data-reveal>
              {arWhen.listIntro}
            </p>
            <ul role="list" className={styles.whenList}>
              {arWhen.items.map((item) => (
                <li key={item} data-reveal>
                  <span aria-hidden="true">
                    <Icon name="check" size={14} strokeWidth={2.6} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.whenAfter} data-reveal>
              {arWhen.after}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** What to expect: four steps, then the H3 aftercare tips with a one-week countdown */
export function ArestinExpect() {
  const days = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className={styles.expect} aria-labelledby="ar-expect-title">
      <div className="container">
        <div className={styles.expectHead}>
          <p className="label" data-reveal>
            At your deep cleaning
          </p>
          <h2 id="ar-expect-title" data-reveal>
            {arExpect.title}
          </h2>
          <p className="lead" data-reveal>
            {arExpect.intro}
          </p>
        </div>
        <ol className={styles.timeline}>
          {arExpect.steps.map((step) => (
            <li key={step.lead} data-reveal>
              <span className={styles.timeIcon} aria-hidden="true">
                <Icon name={step.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={styles.expectAfter} data-reveal>
          {arExpect.after}
        </p>
        <div className={styles.care}>
          <div className={styles.careCopy}>
            <h3 data-reveal>{arExpect.care.title}</h3>
            <p data-reveal>
              <Rich text={arExpect.care.text} />
            </p>
          </div>
          <div className={styles.week} aria-hidden="true" data-inview data-reveal>
            <span className={styles.weekTitle}>1 week: no hard, crunchy or sticky foods on the treated teeth</span>
            <span className={styles.weekDays}>
              {days.map((day, i) => (
                <span key={day} style={{ "--i": i } as CSSProperties}>
                  {day}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Who shouldn't have Arestin: an amber caution card */
export function WhoShouldnt() {
  return (
    <section className={styles.caution} aria-labelledby="ar-who-title">
      <div className="container">
        <div className={styles.cautionCard}>
          <div className={styles.cautionHead}>
            <span className={styles.cautionIcon} aria-hidden="true" data-reveal>
              <Icon name="alert" size={30} />
            </span>
            <div>
              <h2 id="ar-who-title" data-reveal>
                {arWho.title}
              </h2>
              <p data-reveal>{arWho.intro}</p>
            </div>
          </div>
          <ul role="list" className={styles.cautionList}>
            {arWho.items.map((item) => (
              <li key={item.text} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.cautionAfter} data-reveal>
            {arWho.after}
          </p>
        </div>
      </div>
    </section>
  );
}
