import { Fragment, type CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { ioCompare, ioLast, ioMaterials, ioVisits, ioWhen } from "@/content/pages/cosmetic/smile";
import c from "../restorative/Common.module.css";
import styles from "./Inlays.module.css";

/**
 * Inlays & Onlays sections (order and heading levels follow 02 Content.md). No strength
 * percentages (handoff). Designs used on this page only: the onlay dropping into a molar,
 * the coverage row over the table, the X-ray case cards, the material samples, the two
 * visits joined by the lab, and the 10-to-30-year range.
 */

/* A lower molar seen from above: four cusps around a central groove */
const MOLAR =
  "M20 30C18 16 30 8 42 12C48 8 54 8 60 12C72 8 84 16 82 30C88 40 88 60 82 70C84 84 72 92 60 88C54 92 48 92 42 88C30 92 18 84 20 70C14 60 14 40 20 30Z";
const GROOVES = "M50 24C48 36 52 44 50 50S52 66 50 76M28 48C38 50 44 46 50 50S64 52 72 48";
const INLAY = "M38 34C44 30 56 30 62 34C68 40 68 60 62 66C56 70 44 70 38 66C32 60 32 40 38 34Z";
const ONLAY = "M38 34C44 30 52 28 56 24C62 12 80 14 82 30C86 40 74 46 66 48C68 56 66 62 62 66C56 70 44 70 38 66C32 60 32 40 38 34Z";
const FILLING = "M44 44C48 40 56 42 58 48C60 54 54 58 48 57C43 56 41 49 44 44Z";

function Molar({ cover, className }: { cover?: string; className?: string }) {
  return (
    <svg viewBox="8 2 86 96" className={className}>
      <path d={MOLAR} className={styles.molar} />
      <path d={GROOVES} className={styles.grooves} />
      {cover ? <path d={cover} className={styles.cover} /> : null}
    </svg>
  );
}

/** Hero visual: an onlay drops into place, covering the center and one cusp (decorative) */
export function OnlayDrop() {
  return (
    <div className={styles.drop} aria-hidden="true">
      <div className={styles.dropArt}>
        <svg viewBox="8 2 86 96" className={styles.dropSvg}>
          <path d={MOLAR} className={styles.molar} />
          <path d={GROOVES} className={styles.grooves} />
          <path d={ONLAY} className={styles.prep} />
          <path d={ONLAY} className={styles.piece} />
        </svg>
        <span className={`${styles.dropTag} ${styles.tagCusp}`}>Covers a cusp</span>
        <span className={`${styles.dropTag} ${styles.tagCenter}`}>Chewing surface</span>
      </div>
      <div className={styles.dropFoot}>
        <span>
          <Icon name="tooth" size={16} /> Only the damaged part is replaced
        </span>
        <span>
          <Icon name="calendar" size={16} /> Two appointments
        </span>
      </div>
    </div>
  );
}

/** Inlay vs onlay vs crown: the coverage row, the table and the partial-crown note */
export function CoverageRow() {
  const row = [
    { name: "Filling", cover: FILLING },
    { name: "Inlay", cover: INLAY },
    { name: "Onlay", cover: ONLAY },
    { name: "Crown", cover: MOLAR },
  ];
  return (
    <section className={c.section} aria-labelledby="io-compare-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Compare
          </p>
          <h2 id="io-compare-title" data-reveal>
            {ioCompare.title}
          </h2>
          <p className="lead" data-reveal>
            {ioCompare.intro}
          </p>
        </div>
        <div className={styles.coverage} aria-hidden="true" data-inview>
          {row.map((item, i) => (
            <span key={item.name} className={styles.coverItem} style={{ "--i": i } as CSSProperties} data-reveal>
              <Molar cover={item.cover} className={styles.coverSvg} />
              <span className={styles.coverName}>{item.name}</span>
            </span>
          ))}
          <span className={styles.coverAxis} data-reveal>
            <span>Covers less</span>
            <span className={styles.coverLine} />
            <span>Covers the whole tooth</span>
          </span>
        </div>
        <div data-reveal>
          <DataTable label="Fillings, inlays, onlays and crowns compared" head={ioCompare.head} rows={ioCompare.rows} className={styles.table} />
        </div>
        <p className={c.note} data-reveal>
          <Icon name="layers" size={20} />
          <span>{ioCompare.after}</span>
        </p>
      </div>
    </section>
  );
}

/** One case on a dark X-ray panel (decorative) */
function CaseXray({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 120 90" className={styles.xraySvg}>
      <path d="M30 70C24 50 22 30 30 18C36 10 48 10 60 14C72 10 84 10 90 18C98 30 96 50 90 70C86 82 78 86 72 80L64 66H56L48 80C42 86 34 82 30 70Z" className={styles.xrayTooth} />
      {kind === "cavity" ? <path d="M46 16C50 26 58 30 66 26C70 22 72 18 72 15" className={styles.xrayDark} /> : null}
      {kind === "filling" ? (
        <>
          <path d="M40 15C44 30 56 34 72 30C78 26 80 20 80 16" className={styles.xrayBright} />
          <path d="M60 30L64 36" className={styles.xrayCrack} />
        </>
      ) : null}
      {kind === "cusp" ? <path d="M78 13L86 24L82 30" className={styles.xrayCrack} /> : null}
    </svg>
  );
}

/** When is an inlay or onlay the right choice: three cases, X-ray style */
export function CaseCards() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="io-when-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            When it fits
          </p>
          <h2 id="io-when-title" data-reveal>
            {ioWhen.title}
          </h2>
          <p className="lead" data-reveal>
            {ioWhen.intro}
          </p>
        </div>
        <ul role="list" className={styles.cases}>
          {ioWhen.items.map((item) => (
            <li key={item.key} className={styles.case} data-reveal>
              <span className={styles.xray} aria-hidden="true">
                <CaseXray kind={item.key} />
              </span>
              <span className={styles.caseText}>{item.text}</span>
            </li>
          ))}
        </ul>
        <p className={c.note} data-reveal>
          <Icon name="xray" size={20} />
          <span>{ioWhen.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Porcelain, gold or composite: three material samples */
export function MaterialSamples() {
  return (
    <section className={c.section} aria-labelledby="io-materials-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Materials
          </p>
          <h2 id="io-materials-title" data-reveal>
            {ioMaterials.title}
          </h2>
          <p className="lead" data-reveal>
            {ioMaterials.intro}
          </p>
        </div>
        <ul role="list" className={styles.samples}>
          {ioMaterials.items.map((item) => (
            <li key={item.key} className={`${styles.sample} ${styles[`sample_${item.key}`]}`} data-reveal>
              <span className={styles.sampleBlock} aria-hidden="true">
                <Molar cover={ONLAY} className={styles.sampleSvg} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={`${c.note} ${styles.center}`} data-reveal>
          <Icon name="check" size={20} />
          <span>{ioMaterials.after}</span>
        </p>
      </div>
    </section>
  );
}

/** The two-visit process: two visit cards joined by the lab */
export function TwoVisits() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="io-visits-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Two visits
          </p>
          <h2 id="io-visits-title" data-reveal>
            {ioVisits.title}
          </h2>
          <p className="lead" data-reveal>
            {ioVisits.intro}
          </p>
        </div>
        <div className={styles.visits}>
          {ioVisits.visits.map((visit, v) => (
            <Fragment key={visit.label}>
              {v === 1 ? (
                <span className={styles.lab} aria-hidden="true" data-reveal>
                  <Icon name="flask" size={18} />
                  <span>Custom-made by a dental lab</span>
                </span>
              ) : null}
              <div className={styles.visit}>
                <p className={styles.visitLabel} data-reveal>
                  <span aria-hidden="true">
                    <Icon name="calendarCheck" size={18} />
                  </span>
                  <strong>{visit.label}</strong>
                </p>
                <ol className={styles.visitSteps}>
                  {visit.steps.map((step) => (
                    <li key={step.text} data-reveal>
                      <span className={styles.visitIcon} aria-hidden="true">
                        <Icon name={step.icon as IconName} size={18} />
                      </span>
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Fragment>
          ))}
        </div>
        <p className={c.note} data-reveal>
          <Icon name="microscope" size={20} />
          <span>{ioVisits.after}</span>
        </p>
      </div>
    </section>
  );
}

/** How long inlays and onlays last: the 10-to-30-year range and what it depends on */
export function YearsRange() {
  return (
    <section className={c.section} aria-labelledby="io-last-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Lifespan
          </p>
          <h2 id="io-last-title" data-reveal>
            {ioLast.title}
          </h2>
          {ioLast.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.range} aria-hidden="true" data-inview data-reveal>
          <span className={styles.rangeFigure}>
            10<span>to</span>30
            <small>years, typically</small>
          </span>
          <span className={styles.rangeTrack}>
            <span className={styles.rangeFill} />
          </span>
          <span className={styles.rangeScale}>
            <span>0</span>
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>40</span>
          </span>
          <span className={styles.depends}>
            <span className={styles.dependsLabel}>Depends on</span>
            {["The material", "Where it sits", "Your bite", "Daily care"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
