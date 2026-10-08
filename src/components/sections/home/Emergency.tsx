import type { ReactNode } from "react";
import { ToothMark } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { homeEmergency } from "@/content/pages/home";
import { practice } from "@/content/site";
import styles from "./Emergency.module.css";

/** A tooth drawn on a 64 × 64 grid */
const TOOTH =
  "M20 10c5 0 8 2.2 12 2.2S39 10 44 10c7.2 0 11.5 5.2 11.5 12.4 0 6-3 10.2-4.3 16.6-1.6 7.4-2.3 16.6-7.1 16.6-5.3 0-4.6-12.2-12.1-12.2S25.3 55.6 20 55.6c-4.8 0-5.5-9.2-7.1-16.6C11.6 32.6 8.5 28.4 8.5 22.4 8.5 15.2 12.8 10 20 10Z";

/** The four emergencies named in the intro, each as a small tooth illustration */
const emergencies: { name: string; art: ReactNode }[] = [
  {
    name: "Toothache",
    art: (
      <>
        <path d={TOOTH} className={styles.toothFill} />
        <g className={styles.throb}>
          <path d="M50 6l3-4M56 12l5-2M57 20h5" className={styles.mark} />
        </g>
      </>
    ),
  },
  {
    name: "Cracked or broken tooth",
    art: (
      <>
        <path d={TOOTH} className={styles.toothFill} />
        <path d="M33 12l-4 9 6 5-5 8 3 7" className={styles.crack} pathLength={1} />
      </>
    ),
  },
  {
    name: "Swelling",
    art: (
      <>
        <path d="M2 50c6-6 12-8 18-6s8 8 14 8 10-4 16-6 10 0 12 4v14H2Z" className={styles.swell} />
        <path d={TOOTH} className={styles.toothFill} transform="translate(0 -6)" />
      </>
    ),
  },
  {
    name: "Knocked-out tooth",
    art: (
      <>
        <path d={TOOTH} className={styles.gap} transform="translate(-6 4)" />
        <g className={styles.knocked}>
          <path d={TOOTH} className={styles.toothFill} transform="translate(14 -6) rotate(18 32 32) scale(0.82)" />
        </g>
        <path d="M44 50l6 4M40 56l5 5" className={styles.mark} />
      </>
    ),
  },
];

/** The visit from the intro, as three steps (decorative) */
const steps = [
  { title: "Call us first", text: practice.phone.display },
  { title: "Same-day opening", text: "Every business day & Saturday mornings" },
  { title: "Focused exam", text: "30 minutes to find it & start treatment" },
];

/**
 * Dental emergency: the call card (ringing handset), the four emergencies named in the
 * intro as illustrated teeth (a toothache that throbs, a crack that draws down the tooth,
 * swelling at the gum, a tooth knocked out of its place), then the visit as three steps
 * joined by a line with the logo's tooth on each step, then the tips and the 911 note.
 */
export function Emergency() {
  return (
    <section className={styles.section} aria-labelledby="home-emergency-title">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.copy}>
            <p className="label" data-reveal>
              Urgent care
            </p>
            <h2 id="home-emergency-title" data-reveal>
              {homeEmergency.title}
            </h2>
            <p className={`lead ${styles.intro}`} data-reveal>
              {homeEmergency.intro}
            </p>
          </div>

          <div className={styles.callCard} data-reveal>
            <a href={practice.phone.href} className={styles.callButton} data-track="call_click_emergency">
              <span className={styles.callIcon}>
                <Icon name="phone" size={30} />
              </span>
              <span className={styles.callText}>
                <span className={styles.callVerb}>Call</span>
                <span className={styles.callNumber}>{practice.phone.display}</span>
              </span>
            </a>
            <SiteLink href={homeEmergency.link.href} className="text-link">
              {homeEmergency.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>

        {/* The emergencies (decorative: the intro names them) */}
        <ul role="list" className={styles.cases} aria-hidden="true">
          {emergencies.map((item) => (
            <li key={item.name} className={styles.case} data-reveal>
              <svg viewBox="0 0 64 64" className={styles.art} data-draw>
                {item.art}
              </svg>
              <span className={styles.caseName}>{item.name}</span>
            </li>
          ))}
        </ul>

        {/* The visit, step by step (decorative summary of the intro) */}
        <ol className={styles.steps} aria-hidden="true" data-grow>
          <span className={styles.rail}>
            <span className={styles.railFill} data-grow-item />
          </span>
          {steps.map((step) => (
            <li key={step.title} className={styles.step} data-reveal>
              <span className={styles.stepMark}>
                <ToothMark className={styles.stepTooth} />
              </span>
              <span className={styles.stepTitle}>{step.title}</span>
              <span className={styles.stepText}>{step.text}</span>
            </li>
          ))}
        </ol>

        <div className={styles.bottom}>
          {homeEmergency.tips.map((tip, i) => (
            <div key={tip.lead} className={styles.tip} data-reveal>
              <span className={styles.tipIcon}>
                <Icon name={i === 0 ? "tooth" : "card"} size={22} />
              </span>
              <p>
                <strong>{tip.lead}</strong> {tip.text}
              </p>
            </div>
          ))}
          <div className={styles.safety} data-reveal>
            <span className={styles.safetyIcon}>
              <Icon name="alert" size={24} />
            </span>
            <p>{homeEmergency.safety}</p>
            <span className={styles.safetyNumber} aria-hidden="true" data-decor-bleed>
              911
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
