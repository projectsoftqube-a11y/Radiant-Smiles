import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { bdFixes, bdLast, bdProcess, bdVersus } from "@/content/pages/cosmetic/smile";
import c from "../restorative/Common.module.css";
import styles from "./Bonding.module.css";

/**
 * Dental Bonding sections (order and heading levels follow 02 Content.md). "Often" one
 * visit, never always; no bonding price (handoff). Designs used on this page only: the
 * chip rebuilt in resin layers, the pinned tooth, the one-appointment bar, the table beside
 * its copy, and the three-to-five-year band.
 */

/* A central incisor from the front: neck at the top, biting edge at the bottom */
const CROWN = "M24 8H96C100 40 104 70 104 112C104 130 96 140 84 142H36C24 140 16 130 16 112C16 70 20 40 24 8Z";
/* The chipped corner, rebuilt in three layers out from the break */
const LAYERS = [
  "M60 150L72 128L88 120L106 98V112L92 128L78 136L68 150Z",
  "M60 150L72 128L88 120L106 98V126L96 136L82 144L76 150Z",
  "M60 150L72 128L88 120L106 98V150Z",
];

/** Hero visual: resin rebuilds a chipped corner in thin layers, then it's polished (decorative) */
export function ResinLayers() {
  return (
    <div className={styles.resin} aria-hidden="true">
      <span className={styles.resinTitle}>Rebuilding a chipped corner</span>
      <div className={styles.resinArt}>
        <svg viewBox="-10 -6 140 160" className={styles.resinSvg}>
          <defs>
            {LAYERS.map((d, i) => (
              <clipPath key={d} id={`bd-layer-${i}`}>
                <path d={d} />
              </clipPath>
            ))}
            <mask id="bd-tooth" maskUnits="userSpaceOnUse">
              <rect x="-20" y="-20" width="160" height="180" fill="#fff" />
              <path d={LAYERS[2]} fill="#000" />
            </mask>
          </defs>
          <path d="M-56 10H8C11 40 12 70 12 96C12 112 6 120 -4 122H-44C-54 120 -60 112 -60 96C-60 70 -59 40 -56 10Z" className={styles.neighbour} />
          <path d="M112 10H176C179 40 180 70 180 96C180 112 174 120 164 122H124C114 120 108 112 108 96C108 70 109 40 112 10Z" className={styles.neighbour} />
          <path d={CROWN} className={styles.enamel} mask="url(#bd-tooth)" />
          {LAYERS.map((d, i) => (
            <path key={d} d={CROWN} clipPath={`url(#bd-layer-${i})`} className={styles.layer} style={{ "--i": i } as CSSProperties} />
          ))}
          <path d={CROWN} clipPath="url(#bd-layer-2)" className={styles.rebuilt} />
          <path d="M72 126L90 120" className={styles.polish} />
          <path d="M-200 -40H330V16C220 16 206 6 196 10C176 22 150 22 120 12C112 8 104 4 96 8C76 22 44 22 24 8C16 4 10 8 0 12C-30 22 -56 22 -76 10C-90 4 -110 16 -200 16Z" className={styles.gum} />
        </svg>
      </div>
      <span className={styles.visit}>
        <span className={styles.visitLabel}>
          <Icon name="clock" size={16} /> Often one visit
        </span>
        <span className={styles.visitBar}>
          <span />
        </span>
      </span>
    </div>
  );
}

/** What dental bonding fixes: one tooth with the four problems pinned, and the list */
export function PinnedTooth() {
  const pins: Record<string, { x: string; y: string; icon: IconName }> = {
    chip: { x: "74%", y: "80%", icon: "tooth" },
    crack: { x: "34%", y: "46%", icon: "bolt" },
    stain: { x: "64%", y: "30%", icon: "drop" },
    uneven: { x: "30%", y: "88%", icon: "ruler" },
  };
  return (
    <section className={c.section} aria-labelledby="bd-fix-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            What it fixes
          </p>
          <h2 id="bd-fix-title" data-reveal>
            {bdFixes.title}
          </h2>
          <p className="lead" data-reveal>
            {bdFixes.intro}
          </p>
        </div>
        <div className={styles.pinned}>
          <div className={styles.pinArt} aria-hidden="true" data-inview data-reveal>
            <svg viewBox="0 0 120 150" className={styles.pinSvg}>
              <path d="M24 8H96C100 40 104 70 104 112C104 130 96 140 84 142H70L60 132L48 140H36C24 140 16 130 16 118C16 70 20 40 24 8Z" className={styles.enamel} />
              <path d="M88 142L104 118C104 132 98 140 88 142Z" className={styles.chipGap} />
              <path d="M30 40L40 58L34 72" className={styles.crack} />
              <ellipse cx="78" cy="44" rx="9" ry="7" className={styles.spot} />
            </svg>
            {bdFixes.items.map((item, i) => (
              <span
                key={item.key}
                className={styles.pin}
                style={{ left: pins[item.key].x, top: pins[item.key].y, "--i": i } as CSSProperties}
              >
                <Icon name={pins[item.key].icon} size={16} />
              </span>
            ))}
          </div>
          <ul role="list" className={styles.pinList}>
            {bdFixes.items.map((item) => (
              <li key={item.key} data-reveal>
                <span className={styles.pinChip} aria-hidden="true">
                  <Icon name={pins[item.key].icon} size={18} />
                </span>
                <p>
                  <strong>{item.lead}</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p className={c.note} data-reveal>
          <Icon name="veneer" size={20} />
          <span>{bdFixes.after}</span>
        </p>
      </div>
    </section>
  );
}

/** The one-visit process: a single appointment bar split into its four steps */
export function OneAppointment() {
  return (
    <section className={`${c.section} ${c.blush}`} aria-labelledby="bd-process-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            One visit
          </p>
          <h2 id="bd-process-title" data-reveal>
            {bdProcess.title}
          </h2>
          <p className="lead" data-reveal>
            {bdProcess.intro}
          </p>
        </div>
        <div className={styles.appointment} data-inview>
          <span className={styles.apptBar} aria-hidden="true">
            {bdProcess.steps.map((step, i) => (
              <span key={step.lead} style={{ "--i": i } as CSSProperties} />
            ))}
          </span>
          <ol className={styles.apptSteps}>
            {bdProcess.steps.map((step) => (
              <li key={step.lead} data-reveal>
                <span className={styles.apptIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={20} />
                </span>
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.scope} data-reveal>
          <Icon name="microscope" size={22} />
          <span>{bdProcess.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Dental bonding vs veneers: the copy beside the comparison table */
export function BondingVsVeneers() {
  return (
    <section className={c.section} aria-labelledby="bd-versus-title">
      <div className={`container ${styles.versus}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Compare
          </p>
          <h2 id="bd-versus-title" data-reveal>
            {bdVersus.title}
          </h2>
          <p data-reveal>{bdVersus.intro}</p>
          <p className={styles.versusAfter} data-reveal>
            <Rich text={bdVersus.after} />
          </p>
        </div>
        <div data-reveal>
          <DataTable label="Dental bonding compared with porcelain veneers" head={bdVersus.head} rows={bdVersus.rows} highlight={1} className={styles.table} />
        </div>
      </div>
    </section>
  );
}

/** How long bonding lasts: the three-to-five-year band, then the habits */
export function LifespanBand() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="bd-last-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Lifespan
          </p>
          <h2 id="bd-last-title" data-reveal>
            {bdLast.title}
          </h2>
          <p data-reveal>{bdLast.intro}</p>
          <div className={styles.band} aria-hidden="true" data-inview data-reveal>
            <span className={styles.bandTrack}>
              <span className={styles.bandRange} />
            </span>
            <span className={styles.bandScale}>
              {[0, 1, 2, 3, 4, 5, 6].map((y) => (
                <span key={y}>{y === 0 ? "Placed" : `${y} yr`}</span>
              ))}
            </span>
            <span className={styles.bandNote}>Typically three to five years before repair</span>
          </div>
        </div>
        <div className={styles.keepers}>
          <p className={styles.keepersTitle} data-reveal>
            {bdLast.listIntro}
          </p>
          <ul role="list">
            {bdLast.items.map((item) => (
              <li key={item.text} data-reveal>
                <span className={styles.keeperIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className={styles.keepersAfter} data-reveal>
            <Icon name="refresh" size={18} />
            <span>{bdLast.after}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
