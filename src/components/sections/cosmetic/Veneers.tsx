import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { veCare, veFix, veLast, veQuote, veRight, veSteps, veVersus } from "@/content/pages/cosmetic/smile";
import c from "../restorative/Common.module.css";
import styles from "./Veneers.module.css";

/**
 * Porcelain Veneers sections (order and heading levels follow 02 Content.md). No veneer
 * price (handoff). Designs used on this page only: the shell settling onto an incisor, the
 * five fix tiles, the weigh-up cards, the porcelain vs resin swatches over the table, one
 * tooth through the four steps, the decade bar with the single-veneer swap, and the care
 * routine.
 */

/* An upper incisor from the side, front (labial) face on the left */
const INCISOR =
  "M66 6C56 30 46 60 44 96C40 130 48 165 58 190C61 193 64 191 65 186C70 160 77 140 86 122C90 112 86 100 84 96C82 60 76 30 66 6Z";
const LABIAL = "M44 98C40 130 48 165 58 190";
/* Drawn a little wider than life so the front face reads clearly */
const WIDEN = "translate(64 0) scale(1.45 1) translate(-64 0)";
/* The gum over the root, wide enough to run to the panel's edges */
const GUM = "M-200 0H330V86C200 86 110 88 86 98C76 94 52 94 42 98C18 88 -70 86 -200 86Z";

/** Hero visual: a thin porcelain shell settles onto the front of the tooth (decorative) */
export function ShellSettle() {
  return (
    <div className={styles.shell} aria-hidden="true">
      <div className={styles.shellArt}>
        <svg viewBox="-2 50 132 152" className={styles.shellSvg}>
          <g transform={WIDEN}>
            <path d={INCISOR} className={styles.toothBody} vectorEffect="non-scaling-stroke" />
            <path d={LABIAL} className={styles.shellLayer} transform="translate(-3.6 0)" />
          </g>
          <path d={GUM} className={styles.gumBack} />
        </svg>
        <span className={styles.shellNote}>Thin ceramic shell</span>
      </div>
      <ul role="list" className={styles.match}>
        {["Shade", "Length", "Shape"].map((name, i) => (
          <li key={name} style={{ "--i": i } as CSSProperties}>
            <span className={styles.matchTick}>
              <Icon name="check" size={14} strokeWidth={2.8} />
            </span>
            <span>
              <strong>{name}</strong> matched to your other teeth
            </span>
          </li>
        ))}
        <li className={styles.matchScope} style={{ "--i": 3 } as CSSProperties}>
          <Icon name="microscope" size={18} /> Fit and finish checked under the microscope
        </li>
      </ul>
    </div>
  );
}

/** The patient quote under the hero buttons (plain text, no Review markup) */
export function VeneerQuote() {
  return (
    <figure className={styles.quote}>
      <figcaption className={styles.quoteIntro}>{veQuote.intro}</figcaption>{" "}
      <blockquote>
        <p>&ldquo;{veQuote.text}&rdquo;</p>
      </blockquote>{" "}
      <p className={styles.quoteBy}>({veQuote.author})</p>
    </figure>
  );
}

/** One fix tile's drawing: the problem, then the veneer outline that corrects it */
function FixArt({ kind }: { kind: string }) {
  const crown = (x: number, w = 30, h = 54, extra?: string) =>
    `M${x + 3} 14H${x + w - 3}C${x + w} 30 ${x + w} 40 ${x + w} ${14 + h - 12}C${x + w} ${14 + h - 4} ${x + w * 0.75} ${14 + h} ${x + w / 2} ${14 + h}C${x + w * 0.25} ${14 + h} ${x} ${14 + h - 4} ${x} ${14 + h - 12}C${x} 40 ${x} 30 ${x + 3} 14Z${extra ?? ""}`;
  return (
    <svg viewBox="0 0 100 84" className={styles.fixSvg}>
      <path d="M0 0H100V16C88 16 84 12 76 12S62 16 50 16 34 12 26 12 12 16 0 16Z" className={styles.fixGum} />
      {kind === "chip" ? (
        <g>
          <path d={crown(18)} className={styles.fixTooth} />
          <path d="M60 14H79C82 30 82 40 82 56C82 64 78 68 72 68L60 52Z" className={styles.fixTooth} />
          <path d={crown(52)} className={styles.fixVeneer} />
        </g>
      ) : null}
      {kind === "stain" ? (
        <g>
          <path d={crown(18)} className={styles.fixTooth} />
          <path d={crown(52)} className={styles.fixStain} />
          <path d={crown(52)} className={styles.fixVeneerFill} />
        </g>
      ) : null}
      {kind === "small" ? (
        <g>
          <path d={crown(18)} className={styles.fixTooth} />
          <path d="M57 14H77C79 26 78 40 72 52C70 56 64 56 62 52C56 40 55 26 57 14Z" className={styles.fixTooth} />
          <path d={crown(52)} className={styles.fixVeneer} />
        </g>
      ) : null}
      {kind === "gap" ? (
        <g>
          <path d={crown(16, 28)} className={styles.fixTooth} />
          <path d={crown(56, 28)} className={styles.fixTooth} />
          <path d={crown(16, 34)} className={styles.fixVeneer} />
          <path d={crown(50, 34)} className={styles.fixVeneer} />
        </g>
      ) : null}
      {kind === "crooked" ? (
        <g>
          <path d={crown(18)} className={styles.fixTooth} />
          <path d={crown(52)} className={styles.fixTooth} transform="rotate(10 67 40)" />
          <path d={crown(52)} className={styles.fixVeneer} />
        </g>
      ) : null}
    </svg>
  );
}

/** What porcelain veneers can fix: five tiles, each problem corrected by its veneer */
export function VeneerFixes() {
  return (
    <section className={c.section} aria-labelledby="ve-fix-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            What they fix
          </p>
          <h2 id="ve-fix-title" data-reveal>
            {veFix.title}
          </h2>
          <p className="lead" data-reveal>
            {veFix.intro}
          </p>
        </div>
        <ul role="list" className={styles.fixes} data-inview>
          {veFix.items.map((item, i) => (
            <li key={item.key} className={styles.fix} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.fixArt} aria-hidden="true">
                <FixArt kind={item.key} />
              </span>
              <span className={styles.fixText}>{item.text}</span>
            </li>
          ))}
        </ul>
        <p className={`${c.note} ${styles.fixAfter}`} data-reveal>
          <Icon name="veneer" size={20} />
          <span>
            <Rich text={veFix.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** Are veneers right for you: the intro, four things to weigh, then the consultation */
export function WeighUp() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="ve-right-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Before you decide
          </p>
          <h2 id="ve-right-title" data-reveal>
            {veRight.title}
          </h2>
          <p className="lead" data-reveal>
            {veRight.intro}
          </p>
        </div>
        <p className={styles.weighTitle} data-reveal>
          <Icon name="ruler" size={20} />
          {veRight.listIntro}
        </p>
        <ul role="list" className={styles.weigh}>
          {veRight.items.map((item, i) => (
            <li key={item.lead} className={i === 0 ? styles.weighFirst : undefined} data-reveal>
              <span className={styles.weighIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{item.lead}</strong> <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.consult}>
          <p data-reveal>{veRight.after}</p>
          <div data-reveal>
            <Button href={veRight.button.href} icon="calendar" long track="appointment_click_ve_right">
              {veRight.button.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Porcelain veneers vs dental bonding: two material swatches over the comparison table */
export function VeneerVsBonding() {
  return (
    <section className={c.section} aria-labelledby="ve-versus-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Compare
          </p>
          <h2 id="ve-versus-title" data-reveal>
            {veVersus.title}
          </h2>
          <p className="lead" data-reveal>
            {veVersus.intro}
          </p>
        </div>
        <div className={styles.swatches} aria-hidden="true">
          <span className={`${styles.swatch} ${styles.porcelain}`} data-reveal>
            <span className={styles.swatchChip} />
            <span>
              <strong>Porcelain</strong> made for each tooth
            </span>
          </span>
          <span className={`${styles.swatch} ${styles.resin}`} data-reveal>
            <span className={styles.swatchChip} />
            <span>
              <strong>Resin</strong> sculpted on the tooth
            </span>
          </span>
        </div>
        <div data-reveal>
          <DataTable label="Porcelain veneers compared with dental bonding" head={veVersus.head} rows={veVersus.rows} highlight={1} className={styles.table} />
        </div>
        <p className={c.note} data-reveal>
          <Icon name="tooth" size={20} />
          <span>
            <Rich text={veVersus.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** The same tooth at each of the four steps (decorative) */
function StageTooth({ stage }: { stage: number }) {
  return (
    <svg viewBox="10 60 110 140" className={styles.stageSvg}>
      <g transform={WIDEN}>
        <path d={INCISOR} className={styles.toothBody} vectorEffect="non-scaling-stroke" />
        {stage === 2 ? <path d={LABIAL} className={styles.prepLine} transform="translate(2.5 0)" vectorEffect="non-scaling-stroke" /> : null}
        {stage === 3 ? <path d={LABIAL} className={styles.shellLayer} transform="translate(-1 0)" /> : null}
        {stage === 1 ? <path d={LABIAL} className={styles.designLine} transform="translate(-4 0)" vectorEffect="non-scaling-stroke" /> : null}
      </g>
      <path d={GUM} className={styles.gumBack} />
      {stage === 0 ? (
        <g className={styles.lens}>
          <path d="M82 150l14 14" />
          <rect x="58" y="122" width="30" height="30" rx="8" />
        </g>
      ) : null}
    </svg>
  );
}

/** Getting veneers step by step: one tooth through consultation, design, preparation and placement */
export function VeneerSteps() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="ve-steps-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Step by step
          </p>
          <h2 id="ve-steps-title" data-reveal>
            {veSteps.title}
          </h2>
          <p className="lead" data-reveal>
            {veSteps.intro}
          </p>
        </div>
        <ol className={styles.stages}>
          {veSteps.steps.map((step, i) => (
            <li key={step.lead} className={styles.stage} data-reveal>
              <span className={styles.stageArt} aria-hidden="true">
                <StageTooth stage={i} />
                <span className={styles.stageIcon}>
                  <Icon name={step.icon as IconName} size={18} />
                </span>
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={`${c.note} ${styles.center}`} data-reveal>
          <Icon name="calendarCheck" size={20} />
          <span>{veSteps.after}</span>
        </p>
      </div>
    </section>
  );
}

/** How long veneers last: the decade bar, and one veneer replaced on its own */
export function DecadeBar() {
  return (
    <section className={c.section} aria-labelledby="ve-last-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Lifespan
          </p>
          <h2 id="ve-last-title" data-reveal>
            {veLast.title}
          </h2>
          {veLast.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.decade} aria-hidden="true" data-inview data-reveal>
          <span className={styles.decadeTitle}>Well over a decade, with proper care</span>
          <span className={styles.years}>
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className={i >= 10 ? styles.yearPlus : undefined} style={{ "--i": i } as CSSProperties} />
            ))}
          </span>
          <span className={styles.resists}>
            <span>
              <Icon name="cup" size={16} /> Coffee
            </span>
            <span>
              <Icon name="cup" size={16} /> Tea
            </span>
            <span className={styles.resistNote}>Porcelain resists staining</span>
          </span>
          <span className={styles.swap}>
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={i === 2 ? styles.swapNew : undefined} />
            ))}
          </span>
          <span className={styles.swapNote}>One damaged veneer can usually be replaced on its own</span>
        </div>
      </div>
    </section>
  );
}

/** Caring for porcelain veneers: the five habits as a routine */
export function VeneerCare() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="ve-care-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Care
          </p>
          <h2 id="ve-care-title" data-reveal>
            {veCare.title}
          </h2>
          <p className="lead" data-reveal>
            {veCare.intro}
          </p>
        </div>
        <ul role="list" className={styles.care}>
          {veCare.items.map((item) => (
            <li key={item.text} className={item.icon === "ban" || item.icon === "hand" ? styles.careAvoid : undefined} data-reveal>
              <span className={styles.careIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
