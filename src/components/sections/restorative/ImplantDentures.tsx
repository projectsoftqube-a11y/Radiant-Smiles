import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { irCandidate, irProcess, irTypes, irWhy } from "@/content/pages/restorative/dentures";
import c from "./Common.module.css";
import styles from "./ImplantDentures.module.css";

/**
 * Implant-Retained Dentures sections (order and heading levels follow 02 Content.md). The
 * $500 implant offer is never shown as an implant-denture price (handoff). Designs used on
 * this page only: the snap-in arch, the suction-vs-implant comparison, the three attachment
 * styles with their implant counts, the upper-jaw note, the bone check and the staged path.
 */

/** Hero visual: a lower denture snapping down onto two implants (decorative) */
export function SnapIn() {
  return (
    <div className={styles.snap} aria-hidden="true">
      <svg viewBox="0 0 300 220" className={styles.snapArt}>
        <path d="M20 150c30 40 70 54 130 54s100-14 130-54v70H20Z" fill="#f1e6cf" />
        <path d="M20 150c30 40 70 54 130 54s100-14 130-54" fill="none" stroke="#e5959c" strokeWidth="14" strokeLinecap="round" />
        {/* Two implants with ball attachments */}
        {[96, 204].map((x) => (
          <g key={x}>
            <path d={`M${x - 7} 150h14l-2 46-5 6-5-6Z`} fill="#c4d3e6" stroke="#1b3d6e" strokeWidth="1.6" />
            <circle cx={x} cy="146" r="7" fill="#6dbde8" stroke="#1b3d6e" strokeWidth="1.6" />
          </g>
        ))}
        {/* The denture lowering onto them */}
        <g className={styles.denture}>
          <path d="M26 100c26 34 64 46 124 46s98-12 124-46" fill="none" stroke="#e5959c" strokeWidth="26" strokeLinecap="round" />
          {Array.from({ length: 9 }, (_, i) => {
            const t = (i - 4) / 4;
            const x = 150 + t * 112;
            const y = 98 + (1 - t * t) * 30;
            return <rect key={i} x={x - 10} y={y - 24} width="20" height="22" rx="7" fill="#ffffff" stroke="#1b3d6e" strokeWidth="1.6" />;
          })}
        </g>
      </svg>
      <div className={styles.snapTags}>
        <span>
          <Icon name="screw" size={16} /> Snaps onto implants
        </span>
        <span>
          <Icon name="apple" size={16} /> Stays put when you eat
        </span>
      </div>
    </div>
  );
}

/** Why implant dentures stay put: suction vs implants, then five benefits */
export function StayPut() {
  return (
    <section className={c.section} aria-labelledby="ir-why-title">
      <div className="container">
        <div className={c.split}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Stability
            </p>
            <h2 id="ir-why-title" data-reveal>
              {irWhy.title}
            </h2>
            <p className="lead" data-reveal>
              <Rich text={irWhy.intro} />
            </p>
          </div>
          <div className={styles.versus} aria-hidden="true">
            <span className={styles.vsCard} data-reveal>
              <span className={styles.vsName}>Conventional denture</span>
              <span className={styles.vsNote}>Suction & gum shape: can slip</span>
            </span>
            <span className={`${styles.vsCard} ${styles.vsImplant}`} data-reveal>
              <span className={styles.vsName}>Implant-retained</span>
              <span className={styles.vsNote}>Locks onto implants</span>
            </span>
          </div>
        </div>
        <p className={styles.benefitsIntro} data-reveal>
          {irWhy.listIntro}
        </p>
        <ul role="list" className={styles.benefits}>
          {irWhy.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.benefitIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
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

/** Types: three attachment styles with their implant counts, then the upper-jaw note */
export function AttachmentStyles() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="ir-types-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Three styles
          </p>
          <h2 id="ir-types-title" data-reveal>
            {irTypes.title}
          </h2>
          <p className="lead" data-reveal>
            {irTypes.intro}
          </p>
        </div>
        <div className={styles.styles}>
          {irTypes.types.map((type, i) => (
            <div key={type.title} className={i === 2 ? `${styles.style} ${styles.styleFixed}` : styles.style} data-reveal>
              <span className={styles.ridge} aria-hidden="true">
                {i === 1 ? <span className={styles.bar} /> : null}
                {Array.from({ length: type.posts }, (_, n) => (
                  <span key={n} className={styles.postMark}>
                    <Icon name="screw" size={22} />
                  </span>
                ))}
              </span>
              <span className={styles.styleTag} aria-hidden="true">
                {type.tag}
              </span>
              <h3>{type.title}</h3>
              <p>{type.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.upper}>
          <span className={styles.upperIcon} aria-hidden="true" data-reveal>
            <Icon name="smile" size={26} />
          </span>
          <div>
            <h3 data-reveal>{irTypes.upper.title}</h3>
            <p data-reveal>{irTypes.upper.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Who is a candidate: the bone check */
export function BoneCheck() {
  return (
    <section className={c.section} aria-labelledby="ir-candidate-title">
      <div className={`container ${c.split}`}>
        <div className={styles.bone} aria-hidden="true" data-reveal>
          <span className={styles.boneTitle}>
            <Icon name="layers" size={16} /> What decides it
          </span>
          {[
            { icon: "layers" as IconName, name: "Bone in your jaw" },
            { icon: "heart" as IconName, name: "Health of your gums" },
            { icon: "check" as IconName, name: "Your general health" },
          ].map((row, i) => (
            <span key={row.name} className={styles.boneRow} style={{ "--i": i } as CSSProperties}>
              <span className={styles.boneIcon}>
                <Icon name={row.icon} size={20} />
              </span>
              {row.name}
            </span>
          ))}
          <span className={styles.boneScan}>
            <Icon name="xray" size={16} /> Exam, X-rays &amp; 3D imaging where needed
          </span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Candidates
          </p>
          <h2 id="ir-candidate-title" data-reveal>
            {irCandidate.title}
          </h2>
          {irCandidate.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The process: four stages */
export function StagedPath() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="ir-process-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            In stages
          </p>
          <h2 id="ir-process-title" data-reveal>
            {irProcess.title}
          </h2>
          <p className="lead" data-reveal>
            {irProcess.intro}
          </p>
        </div>
        <ol className={styles.path}>
          {irProcess.steps.map((step) => (
            <li key={step.lead} data-reveal>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={c.note} data-reveal>
          <Icon name="calendarCheck" size={20} />
          <span>{irProcess.after}</span>
        </p>
      </div>
    </section>
  );
}
