import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { rcCrown, rcEmergency, rcHurt, rcOr, rcSigns, rcSteps, rcWhy } from "@/content/pages/restorative/repair";
import styles from "./RootCanal.module.css";

/**
 * Root Canal Therapy sections (order and heading levels follow 02 Content.md). The 911 line
 * stays visible (handoff). Designs used on this page only: the pulp cross-section, the
 * keep-your-tooth panel, the pain cards, the two appointments, the comfort card, the crown
 * shield, save vs remove and the emergency panel.
 */

/** Hero visual: a tooth in cross-section, its inflamed pulp cleaned and sealed (decorative) */
export function PulpSection() {
  return (
    <div className={styles.pulp} aria-hidden="true">
      <svg viewBox="0 0 260 320" className={styles.pulpArt}>
        <defs>
          <linearGradient id="rc-gum" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6cfd0" />
            <stop offset="1" stopColor="#e5959c" />
          </linearGradient>
        </defs>
        <path d="M0 176c40 0 60-12 90-12h80c30 0 50 12 90 12v144H0Z" fill="url(#rc-gum)" opacity="0.9" />
        {/* Tooth: crown and two roots */}
        <path
          d="M66 40c18 0 30 8 64 8s46-8 64-8c26 0 40 22 40 50 0 24-10 40-16 64-6 26-10 70-22 120-4 16-10 24-18 24-14 0-14-30-18-60-3-22-8-38-30-38s-27 16-30 38c-4 30-4 60-18 60-8 0-14-8-18-24-12-50-16-94-22-120-6-24-16-40-16-64 0-28 14-50 40-50Z"
          fill="#ffffff"
          stroke="#1b3d6e"
          strokeWidth="3"
        />
        {/* Pulp chamber and canals: inflamed first, then cleaned and sealed */}
        <g className={styles.inflamed}>
          <path d="M104 92c8-6 44-6 52 0 4 20 0 36-6 48l-8 44c-2 30-4 66-6 92M110 140l-8 44c-2 30-6 66-12 92" fill="none" stroke="#e5959c" strokeWidth="9" strokeLinecap="round" />
          <path d="M104 92c8-6 44-6 52 0 4 20 0 36-6 48h-40c-6-12-10-28-6-48Z" fill="#e5959c" />
        </g>
        <g className={styles.sealed}>
          <path d="M104 92c8-6 44-6 52 0 4 20 0 36-6 48l-8 44c-2 30-4 66-6 92M110 140l-8 44c-2 30-6 66-12 92" fill="none" stroke="#6dbde8" strokeWidth="9" strokeLinecap="round" pathLength={1} />
          <path d="M104 92c8-6 44-6 52 0 4 20 0 36-6 48h-40c-6-12-10-28-6-48Z" fill="#a9daf3" />
        </g>
      </svg>
      <div className={styles.pulpTags}>
        <span className={styles.tagRed}>
          <Icon name="alert" size={16} /> Infected pulp
        </span>
        <span className={styles.tagSky}>
          <Icon name="check" size={16} /> Cleaned & sealed
        </span>
      </div>
    </div>
  );
}

/** Why a root canal saves your tooth: copy with a keep-vs-gap panel */
export function WhySave() {
  return (
    <section className={styles.why} aria-labelledby="rc-why-title">
      <div className={`container ${styles.whyGrid}`}>
        <div className={styles.whyCopy}>
          <p className="label" data-reveal>
            Keep your tooth
          </p>
          <h2 id="rc-why-title" data-reveal>
            {rcWhy.title}
          </h2>
          {rcWhy.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.keep} aria-hidden="true">
          <div className={styles.keepCard} data-reveal>
            <span className={styles.keepIcon}>
              <Icon name="tooth" size={30} />
            </span>
            <span className={styles.keepName}>Root canal</span>
            <span className={styles.keepNote}>Your own tooth & root stay</span>
          </div>
          <div className={`${styles.keepCard} ${styles.gapCard}`} data-reveal>
            <span className={styles.keepIcon}>
              <Icon name="ban" size={30} />
            </span>
            <span className={styles.keepName}>Extraction</span>
            <span className={styles.keepNote}>Leaves a gap to fill</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Signs you need a root canal: five pain cards */
export function PainSigns() {
  return (
    <section className={styles.signs} aria-labelledby="rc-signs-title">
      <div className="container">
        <div className={styles.signsHead}>
          <p className="label" data-reveal>
            Warning signs
          </p>
          <h2 id="rc-signs-title" data-reveal>
            {rcSigns.title}
          </h2>
          <p className="lead" data-reveal>
            {rcSigns.intro}
          </p>
        </div>
        <ul role="list" className={styles.painCards}>
          {rcSigns.items.map((item, i) => (
            <li key={item.lead} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.painIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.signsAfter} data-reveal>
          <Icon name="xray" size={20} />
          <span>{rcSigns.after}</span>
        </p>
      </div>
    </section>
  );
}

/** What happens: the two appointments side by side */
export function TwoAppointments() {
  return (
    <section className={styles.steps} aria-labelledby="rc-steps-title">
      <div className="container">
        <div className={styles.stepsHead}>
          <p className="label" data-reveal>
            Two appointments
          </p>
          <h2 id="rc-steps-title" data-reveal>
            {rcSteps.title}
          </h2>
          <p className="lead" data-reveal>
            {rcSteps.intro}
          </p>
        </div>
        <div className={styles.appts}>
          <div className={styles.apptOne}>
            <h3 data-reveal>{rcSteps.firstTitle}</h3>
            <ol className={styles.depth} data-inview>
              {rcSteps.first.map((step, i) => (
                <li key={step.lead} style={{ "--i": i } as CSSProperties} data-reveal>
                  <span className={styles.depthMark} aria-hidden="true" />
                  <p>
                    <strong>{step.lead}</strong> {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.apptTwo}>
            <span className={styles.apptIcon} aria-hidden="true" data-reveal>
              <Icon name="veneer" size={28} />
            </span>
            <h3 data-reveal>{rcSteps.secondTitle}</h3>
            <p data-reveal>
              <Rich text={rcSteps.second} />
            </p>
            <p className={styles.apptNote} data-reveal>
              <Icon name="microscope" size={20} />
              <span>{rcSteps.after}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Does a root canal hurt: a calm comfort card */
export function DoesItHurt() {
  return (
    <section className={styles.hurt} aria-labelledby="rc-hurt-title">
      <div className="container">
        <div className={styles.hurtCard}>
          <div className={styles.hurtIcons} aria-hidden="true" data-reveal>
            <span>
              <Icon name="drop" size={24} />
            </span>
            <span>
              <Icon name="headphones" size={24} />
            </span>
            <span>
              <Icon name="car" size={24} />
            </span>
          </div>
          <div className={styles.hurtCopy}>
            <h2 id="rc-hurt-title" data-reveal>
              {rcHurt.title}
            </h2>
            {rcHurt.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** A crown after a root canal: the copy beside a crown capping the treated tooth */
export function CrownAfter() {
  return (
    <section className={styles.crown} aria-labelledby="rc-crown-title">
      <div className={`container ${styles.crownGrid}`}>
        <div className={styles.crownArt} aria-hidden="true" data-inview data-reveal>
          <svg viewBox="0 0 160 180">
            <path d="M52 90h56l-6 60c-2 16-8 24-22 24s-20-8-22-24Z" fill="#f5f1ea" stroke="#1b3d6e" strokeWidth="2.5" />
            <path d="M80 94v70" stroke="#6dbde8" strokeWidth="5" strokeLinecap="round" />
            <path
              className={styles.crownCap}
              d="M38 100c-4-20-6-32-6-46 0-22 14-38 32-38 6 0 10 3 16 3s10-3 16-3c18 0 32 16 32 38 0 14-2 26-6 46Z"
              fill="#ffffff"
              stroke="#1b3d6e"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className={styles.crownCopy}>
          <p className="label" data-reveal>
            Protect it
          </p>
          <h2 id="rc-crown-title" data-reveal>
            {rcCrown.title}
          </h2>
          {rcCrown.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Root canal or extraction: save it or remove it */
export function SaveOrRemove() {
  return (
    <section className={styles.or} aria-labelledby="rc-or-title">
      <div className={`container ${styles.orGrid}`}>
        <div className={styles.orCopy}>
          <p className="label" data-reveal>
            Your options
          </p>
          <h2 id="rc-or-title" data-reveal>
            {rcOr.title}
          </h2>
          {rcOr.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.paths} aria-hidden="true">
          <div className={`${styles.pathCard} ${styles.pathSave}`} data-reveal>
            <span className={styles.pathTitle}>Save it</span>
            <span className={styles.pathSteps}>
              <span>Root canal</span>
              <Icon name="arrow" size={16} />
              <span>Crown</span>
            </span>
          </div>
          <div className={styles.pathCard} data-reveal>
            <span className={styles.pathTitle}>Remove it</span>
            <span className={styles.pathSteps}>
              <span>Extraction</span>
              <Icon name="arrow" size={16} />
              <span>Implant, bridge or partial</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** When tooth pain is an emergency: the copy and the visible 911 line */
export function PainEmergency() {
  return (
    <section className={styles.emergency} aria-labelledby="rc-emergency-title">
      <div className="container">
        <div className={styles.emergencyCard}>
          <span className={styles.emergencyIcon} aria-hidden="true" data-reveal>
            <Icon name="firstAid" size={30} />
          </span>
          <div className={styles.emergencyCopy}>
            <h2 id="rc-emergency-title" data-reveal>
              {rcEmergency.title}
            </h2>
            {rcEmergency.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                <Rich text={text} />
              </p>
            ))}
            <p className={styles.safety} data-reveal>
              <Icon name="alert" size={20} />
              <strong>{rcEmergency.safety}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
