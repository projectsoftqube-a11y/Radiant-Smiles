import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { rlHard, rlRebase, rlRepair, rlSigns, rlSoft, rlTemp } from "@/content/pages/restorative/dentures";
import { practice } from "@/content/site";
import c from "./Common.module.css";
import styles from "./Relines.module.css";

/**
 * Denture Relines & Repairs sections (order and heading levels follow 02 Content.md). Call
 * first (handoff). Designs used on this page only: the denture cross-section with its new
 * lining, the warning list, the three lining rows with cross-section samples, the
 * rebase vs reline layers and the same-day repair call card.
 */

/** Hero visual: a denture in cross-section, a fresh lining laid against the gum (decorative) */
export function LiningSection() {
  return (
    <div className={styles.lining} aria-hidden="true">
      <svg viewBox="0 0 300 220" className={styles.liningArt}>
        {/* Gum ridge */}
        <path d="M20 200c0-60 50-110 130-110s130 50 130 110Z" fill="#f6cfd0" stroke="#e5959c" strokeWidth="2" />
        {/* New lining */}
        <path className={styles.newLining} d="M30 196c2-56 50-100 120-100s118 44 120 100" fill="none" stroke="#6dbde8" strokeWidth="10" strokeLinecap="round" pathLength={1} />
        {/* Denture base and teeth, lifted to show the lining */}
        <g className={styles.base}>
          <path d="M18 186c2-66 54-114 132-114s130 48 132 114h-14c-2-58-50-100-118-100S34 128 32 186Z" fill="#e5959c" />
          {[70, 110, 150, 190, 230].map((x, i) => (
            <rect key={x} x={x - 14} y={i === 2 ? 40 : 46 + Math.abs(2 - i) * 6} width="28" height="30" rx="10" fill="#ffffff" stroke="#1b3d6e" strokeWidth="2" />
          ))}
        </g>
      </svg>
      <div className={styles.liningKey}>
        <span className={styles.keyBase}>Denture base</span>
        <span className={styles.keyLine}>New lining</span>
        <span className={styles.keyGum}>Your gums</span>
      </div>
    </div>
  );
}

/** Signs your denture needs attention */
export function RelineSigns() {
  return (
    <section className={c.section} aria-labelledby="rl-signs-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            When to call
          </p>
          <h2 id="rl-signs-title" data-reveal>
            {rlSigns.title}
          </h2>
          <p className="lead" data-reveal>
            {rlSigns.intro}
          </p>
          <p className={styles.signsWarn} data-reveal>
            <Icon name="alert" size={20} />
            <span>{rlSigns.after}</span>
          </p>
        </div>
        <div className={styles.signs}>
          <p className={styles.signsTitle} data-reveal>
            {rlSigns.listIntro}
          </p>
          <ul role="list">
            {rlSigns.items.map((item) => (
              <li key={item.text} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Ridge top (gum crest) shared by the three lining samples */
const RIDGE = "M-10 118C40 118 62 76 120 76S200 118 250 118";

/**
 * One lining sample: a cross-section of gum ridge, lining and denture base with a tooth,
 * the lining drawn at its relative thickness (decorative).
 */
function LiningSample({ soft, thickness }: { soft?: boolean; thickness: number }) {
  const base = thickness + 10;
  return (
    <svg viewBox="0 10 240 122" className={styles.sampleArt}>
      <path className={styles.sampleGum} d={`${RIDGE}V160H-10Z`} />
      <g className={styles.sampleLining}>
        <path
          d={RIDGE}
          transform={`translate(0 ${-thickness / 2 - 1})`}
          fill="none"
          strokeWidth={thickness}
          pathLength={1}
          className={styles.liningStroke}
        />
        {soft ? <path d={RIDGE} transform={`translate(0 ${-thickness / 2 - 1})`} fill="none" className={styles.softDots} /> : null}
      </g>
      <g className={styles.sampleBase}>
        <path d={RIDGE} transform={`translate(0 ${-base - 1})`} fill="none" stroke="#e5959c" strokeWidth="18" />
        <path
          d={`M97 ${66 - base}c0-16 8-24 16-24 3 0 5 3 7 3s4-3 7-3c8 0 16 8 16 24v10H97Z`}
          fill="#fff"
          stroke="#1b3d6e"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/** A lining's feel and how long it lasts, under its text (decorative) */
function Spec({ feel, time, icon }: { feel: string; time: string; icon: IconName }) {
  return (
    <span className={styles.sampleSpec} aria-hidden="true" data-reveal>
      <span className={styles.sampleFeel}>{feel}</span>
      <span className={styles.sampleTime}>
        <Icon name={icon} size={16} /> {time}
      </span>
    </span>
  );
}

/** A lining's cross-section sample (decorative) */
function Sample({ soft, thickness }: { soft?: boolean; thickness: number }) {
  return (
    <div className={styles.sample} aria-hidden="true" data-inview data-reveal>
      <LiningSample soft={soft} thickness={thickness} />
    </div>
  );
}

/** Hard, soft and temporary relines: three lining rows, each its own H2 section */
export function Linings() {
  return (
    <div className={`${c.section} ${c.pearl}`}>
      <div className={`container ${styles.linings}`}>
        <p className="label" data-reveal>
          Three kinds of lining
        </p>
        <section className={`${styles.liningRow} ${styles.hard}`} aria-labelledby="rl-hard-title">
          <Sample thickness={6} />
          <div className={styles.liningCopy}>
            <h2 id="rl-hard-title" data-reveal>
              {rlHard.title}
            </h2>
            {rlHard.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                {text}
              </p>
            ))}
            <Spec feel="Firm" time="Redone about every two years" icon="calendar" />
          </div>
        </section>
        <section className={`${styles.liningRow} ${styles.soft}`} aria-labelledby="rl-soft-title">
          <Sample soft thickness={15} />
          <div className={styles.liningCopy}>
            <h2 id="rl-soft-title" data-reveal>
              {rlSoft.title}
            </h2>
            <p data-reveal>{rlSoft.intro}</p>
            <Spec feel="Pliable" time="Stays flexible one to two years" icon="clock" />
            <div className={styles.liner}>
              <div className={styles.linerMain}>
                <h3 data-reveal>{rlSoft.liner.title}</h3>
                <p data-reveal>{rlSoft.liner.text}</p>
              </div>
              <div className={styles.linerList}>
                <p className={styles.linerIntro} data-reveal>
                  {rlSoft.liner.listIntro}
                </p>
                <ul role="list">
                  {rlSoft.liner.items.map((item) => (
                    <li key={item} data-reveal>
                      <span aria-hidden="true">
                        <Icon name="check" size={14} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className={styles.linerAfter} data-reveal>
                <Rich text={rlSoft.liner.after} />
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.liningRow} ${styles.temp}`} aria-labelledby="rl-temp-title">
          <Sample thickness={10} />
          <div className={styles.liningCopy}>
            <h2 id="rl-temp-title" data-reveal>
              {rlTemp.title}
            </h2>
            <p data-reveal>{rlTemp.text}</p>
            <Spec feel="Healing" time="Gums settle in a few weeks" icon="heart" />
          </div>
        </section>
      </div>
    </div>
  );
}

/** Denture rebasing: the reline vs rebase layers */
export function Rebase() {
  return (
    <section className={c.section} aria-labelledby="rl-rebase-title">
      <div className={`container ${c.split}`}>
        <div className={styles.layers} aria-hidden="true">
          {[
            { name: "Reline", note: "Replaces only the lining", rows: [false, false, true] },
            { name: "Rebase", note: "Replaces all of the base", rows: [false, true, true] },
          ].map((m) => (
            <div key={m.name} className={styles.layerCard} data-reveal>
              <span className={styles.stackTeeth}>Teeth</span>
              <span className={m.rows[1] ? styles.stackNew : styles.stackOld}>Base</span>
              <span className={m.rows[2] ? styles.stackNew : styles.stackOld}>Lining</span>
              <span className={styles.layerName}>{m.name}</span>
              <span className={styles.layerNote}>{m.note}</span>
            </div>
          ))}
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Rebase
          </p>
          <h2 id="rl-rebase-title" data-reveal>
            {rlRebase.title}
          </h2>
          <p data-reveal>{rlRebase.intro}</p>
          <p className={styles.rebaseIntro} data-reveal>
            {rlRebase.listIntro}
          </p>
          <ul role="list" className={styles.rebaseList}>
            {rlRebase.items.map((item, i) => (
              <li key={item} style={{ "--i": i } as CSSProperties} data-reveal>
                <span aria-hidden="true">
                  <Icon name="check" size={14} strokeWidth={2.6} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.rebaseAfter} data-reveal>
            {rlRebase.after}
          </p>
        </div>
      </div>
    </section>
  );
}

/** Same-day repair: a call card */
export function SameDayRepair() {
  return (
    <section className={`${c.section} ${styles.repairSection}`} aria-labelledby="rl-repair-title">
      <div className="container">
        <div className={styles.repair}>
          <span className={styles.repairIcon} aria-hidden="true" data-reveal>
            <Icon name="firstAid" size={32} />
          </span>
          <div className={styles.repairCopy}>
            <h2 id="rl-repair-title" data-reveal>
              {rlRepair.title}
            </h2>
            {rlRepair.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                <Rich text={text} />
              </p>
            ))}
            <div data-reveal>
              <Button href={practice.phone.href} icon="phone" variant="light" track="denture_repair_call_click_section">
                Call {practice.phone.display}
              </Button>
            </div>
          </div>
          <ul role="list" className={styles.bring} aria-hidden="true">
            <li data-reveal>
              <Icon name="check" size={16} strokeWidth={2.4} /> Bring every piece
            </li>
            <li data-reveal>
              <Icon name="ban" size={16} /> No household glue
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
