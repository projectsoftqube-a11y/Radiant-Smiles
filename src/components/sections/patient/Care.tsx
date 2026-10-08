import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { careAnxious, careInfection, careTech, careVisit } from "@/content/pages/patient/care";
import styles from "./Care.module.css";

/**
 * Care & Comfort sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the now-playing card, the comfort tiles, the calm split, the gentler
 * technology band and the infection-control teaser.
 */

/** Hero visual: "bring your own music", a now-playing card with a moving sound wave */
export function NowPlaying() {
  const bars = [0.35, 0.7, 0.5, 0.9, 0.6, 1, 0.55, 0.8, 0.4, 0.75, 0.5, 0.95, 0.6, 0.85, 0.45, 0.7, 0.35, 0.6];
  return (
    <div className={styles.player} aria-hidden="true">
      <div className={styles.playerTop}>
        <span className={styles.playerArt}>
          <Icon name="headphones" size={34} />
        </span>
        <span>
          <span className={styles.playerKicker}>Now playing</span>
          <span className={styles.playerTitle}>Your own music</span>
          <span className={styles.playerSub}>Bring headphones to any visit</span>
        </span>
      </div>
      <span className={styles.wave}>
        {bars.map((h, i) => (
          <span key={i} style={{ "--h": h, "--i": i } as CSSProperties} />
        ))}
      </span>
      <span className={styles.chips}>
        <span>
          <Icon name="chat" size={16} />
          Every step explained
        </span>
        <span>
          <Icon name="badgeDollar" size={16} />
          Prices up front
        </span>
      </span>
    </div>
  );
}

/** Comfort at every visit: the intro and four tiles */
export function ComfortTiles() {
  return (
    <section className={styles.visit} aria-labelledby="care-visit-title">
      <div className={`container ${styles.visitGrid}`}>
        <div className={styles.visitCopy}>
          <p className="label" data-reveal>
            Every visit
          </p>
          <h2 id="care-visit-title" data-reveal>
            {careVisit.title}
          </h2>
          <p className="lead" data-reveal>
            {careVisit.intro}
          </p>
        </div>
        <ul role="list" className={styles.tiles}>
          {careVisit.items.map((item) => (
            <li key={item.lead} className={styles.tile} data-reveal>
              <span className={styles.tileIcon} aria-hidden="true">
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

/** Nervous about the dentist: a calm split on blush */
export function CalmSplit() {
  return (
    <section className={styles.calm} aria-labelledby="care-anxious-title">
      <div className={`container ${styles.calmGrid}`}>
        <h2 id="care-anxious-title" className={styles.calmTitle} data-reveal>
          {careAnxious.title}
        </h2>
        <div className={styles.calmCopy}>
          {careAnxious.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Gentler technology: the page's one navy band */
export function GentleTech() {
  return (
    <section className={styles.tech} aria-labelledby="care-tech-title">
      <div className="container">
        <div className={styles.techHead}>
          <div>
            <p className="label label-inverse" data-reveal>
              Technology
            </p>
            <h2 id="care-tech-title" data-reveal>
              {careTech.title}
            </h2>
          </div>
          <p className="lead" data-reveal>
            {careTech.intro}
          </p>
        </div>
        <ul role="list" className={styles.techList}>
          {careTech.items.map((item) => (
            <li key={item.lead} className={styles.techItem} data-reveal>
              <span className={styles.techIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={26} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.techFoot} data-reveal>
          <SiteLink href={careTech.link.href} className={`text-link ${styles.lightLink}`}>
            {careTech.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}

/** Infection control: a teaser card */
export function InfectionTeaser() {
  return (
    <section className={styles.infection} aria-labelledby="care-infection-title">
      <div className="container">
        <div className={styles.teaser} data-reveal>
          <span className={styles.teaserIcon} aria-hidden="true">
            <Icon name="shield" size={30} />
          </span>
          <div className={styles.teaserCopy}>
            <h2 id="care-infection-title">{careInfection.title}</h2>
            <p>{careInfection.text}</p>
            <SiteLink href={careInfection.link.href} className="text-link">
              {careInfection.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
          <ul role="list" className={styles.agencies} aria-hidden="true">
            <li>OSHA</li>
            <li>EPA</li>
            <li>CDC</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
