import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import {
  deCare,
  deExam,
  deGetting,
  deRelines,
  deTypes,
} from "@/content/pages/restorative/dentures";
import c from "./Common.module.css";
import styles from "./DenturesHub.module.css";

/**
 * Dentures sections (order and heading levels follow 02 Content.md). Designs used on this
 * page only: the full upper and lower set, the type gallery with line art, the five-step
 * denture journey, the nightstand care card, the annual exam clipboard and the reline trio.
 */

/** Teeth on an arch, for the hero set (decorative) */
function ArchTeeth({ cy, flip }: { cy: number; flip?: boolean }) {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => {
        const t = (i - 4.5) / 4.5;
        const x = 150 + t * 104;
        const y = cy + (flip ? -1 : 1) * (1 - t * t) * 26;
        return (
          <rect
            key={i}
            x={x - 10}
            y={y - 11}
            width="20"
            height="22"
            rx="8"
            className={styles.setTooth}
          />
        );
      })}
    </>
  );
}

/** Hero visual: a full upper and lower set, the lower set rising to meet the upper (decorative) */
export function DentureSet() {
  return (
    <div className={styles.set} aria-hidden="true">
      <svg viewBox="0 0 300 260" className={styles.setArt}>
        <g className={styles.upper}>
          <path
            d="M28 96c10-50 60-78 122-78s112 28 122 78"
            className={styles.base}
          />
          <ArchTeeth cy={96} flip />
        </g>
        <g className={styles.lower}>
          <path
            d="M28 164c10 50 60 78 122 78s112-28 122-78"
            className={styles.base}
          />
          <ArchTeeth cy={164} />
        </g>
      </svg>
      <div className={styles.setTags}>
        <span>Full</span>
        <span>Partial</span>
        <span>Immediate</span>
        <span>Implant-retained</span>
      </div>
    </div>
  );
}

const typeArt: Record<string, ReactNode> = {
  full: <path d="M8 38c4-18 16-28 32-28s28 10 32 28" />,
  partial: (
    <>
      <path d="M14 34h52" />
      <path d="M22 34v-12h10v12M48 34v-12h10v12" />
      <path d="M14 30c-4-4-4-10 0-12M66 30c4-4 4-10 0-12" />
    </>
  ),
  immediate: (
    <>
      <circle cx="40" cy="26" r="16" />
      <path d="M40 18v8l6 4" />
    </>
  ),
  implant: (
    <>
      <path d="M10 22h60" />
      <path d="M26 26v16M54 26v16" />
      <circle cx="26" cy="24" r="3" />
      <circle cx="54" cy="24" r="3" />
    </>
  ),
  over: (
    <>
      <path d="M10 18c8-6 52-6 60 0" />
      <path d="M28 22v18M52 22v18" strokeDasharray="3 3" />
    </>
  ),
};

/** Types of dentures: a gallery of five, each with its line art */
export function DentureTypes() {
  return (
    <section className={c.section} aria-labelledby="de-types-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Your options
          </p>
          <h2 id="de-types-title" data-reveal>
            {deTypes.title}
          </h2>
          <p className="lead" data-reveal>
            {deTypes.intro}
          </p>
        </div>
        <div className={styles.types}>
          {deTypes.types.map((type) => (
            <div key={type.kind} className={styles.type} data-reveal>
              <svg
                viewBox="0 0 80 50"
                className={styles.typeArt}
                aria-hidden="true"
              >
                {typeArt[type.kind]}
              </svg>
              <h3>{type.title}</h3>
              <p>
                <Rich text={type.text} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Getting dentures: a five-step journey */
export function DentureJourney() {
  const icons: IconName[] = [
    "search",
    "tooth",
    "clipboard",
    "check",
    "calendarCheck",
  ];
  return (
    <section
      className={`${c.section} ${c.pearl}`}
      aria-labelledby="de-getting-title"
    >
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            The process
          </p>
          <h2 id="de-getting-title" data-reveal>
            {deGetting.title}
          </h2>
          <p className="lead" data-reveal>
            {deGetting.intro}
          </p>
        </div>
        <div className={styles.journeyWrap} data-grow>
          <span className={styles.journeyLine} aria-hidden="true">
            <span data-grow-item />
          </span>
          <ol className={styles.journey}>
            {deGetting.steps.map((step, i) => (
              <li
                key={step.lead}
                style={{ "--i": i } as CSSProperties}
                data-reveal
              >
                <span className={styles.journeyIcon} aria-hidden="true">
                  <Icon name={icons[i]} size={22} />
                </span>
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className={`${c.note} ${styles.center}`} data-reveal>
          <Icon name="chat" size={20} />
          <span>{deGetting.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Denture care: a nightstand card of five habits */
export function NightstandCare() {
  return (
    <section className={c.section} aria-labelledby="de-care-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Daily care
          </p>
          <h2 id="de-care-title" data-reveal>
            {deCare.title}
          </h2>
          <p className="lead" data-reveal>
            {deCare.intro}
          </p>
          <p className={styles.careWarn} data-reveal>
            <Icon name="alert" size={20} />
            <span>{deCare.after}</span>
          </p>
        </div>
        <ul role="list" className={styles.nightstand}>
          {deCare.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.nightIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={20} />
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

/** Annual denture exam: a clipboard of what's included */
export function AnnualExam() {
  return (
    <section
      className={`${c.section} ${c.sky}`}
      aria-labelledby="de-exam-title"
    >
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Once a year
          </p>
          <h2 id="de-exam-title" data-reveal>
            {deExam.title}
          </h2>
          <p data-reveal>{deExam.intro}</p>
        </div>
        <div className={styles.clipboard}>
          <span className={styles.clip} aria-hidden="true" />
          <p className={styles.clipTitle} data-reveal>
            {deExam.listIntro}
          </p>
          <ul role="list" className={styles.clipList}>
            {deExam.items.map((item) => (
              <li key={item.slice(0, 24)} data-reveal>
                <span aria-hidden="true">
                  <Icon name="check" size={14} strokeWidth={2.6} />
                </span>
                <span>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Relines and repairs: three tiles */
export function RelineTrio() {
  const icons: IconName[] = ["layers", "refresh", "firstAid"];
  return (
    <section className={c.section} aria-labelledby="de-relines-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Keeping the fit
          </p>
          <h2 id="de-relines-title" data-reveal>
            {deRelines.title}
          </h2>
          <p className="lead" data-reveal>
            {deRelines.intro}
          </p>
        </div>
        <ul role="list" className={styles.trio}>
          {deRelines.items.map((item, i) => (
            <li key={item.lead} data-reveal>
              <span className={styles.trioIcon} aria-hidden="true">
                <Icon name={icons[i]} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={c.note} data-reveal>
          <Icon name="arrow" size={20} />
          <span>
            <Rich text={deRelines.after} />
          </span>
        </p>
      </div>
    </section>
  );
}
