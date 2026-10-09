import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Portrait } from "@/components/ui/Portrait";
import { Rays } from "@/components/ui/Rays";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import {
  cdDentists,
  cdMakeover,
  cdPrecision,
  cdProcedures,
  cdResults,
  cdTreatments,
  cdWhat,
  cdWhich,
} from "@/content/pages/cosmetic/hub";
import c from "../restorative/Common.module.css";
import styles from "./CosmeticHub.module.css";

/**
 * Cosmetic Dentistry hub sections (order and heading levels follow 02 Content.md).
 * Designs used on this page only: the smile plan (straighten, whiten, bond), the five
 * qualities of a smile, the procedure staircase, the makeover plan card, the five treatment
 * spec cards, the goal table, the navy zoom strip, the results split, and the two dentist
 * cards.
 */

/* Six upper front teeth: canine, lateral, central, central, lateral, canine */
const TEETH = [
  { w: 40, h: 84, point: true },
  { w: 38, h: 80 },
  { w: 46, h: 94 },
  { w: 46, h: 94 },
  { w: 38, h: 80 },
  { w: 40, h: 84, point: true },
];
const GAP = 4;
const START = 36;
const MID = 170;

function teethLayout() {
  let x = START;
  return TEETH.map((t) => {
    const cx = x + t.w / 2;
    const top = 30 + ((cx - MID) / 114) ** 2 * 14;
    const tooth = { ...t, x, top, cx };
    x += t.w + GAP;
    return tooth;
  });
}

/** A crown hanging from the gum: square shoulders, rounded (or pointed, for a canine) edge */
function crownPath(w: number, h: number, point?: boolean) {
  const s = point ? 22 : 16;
  const k = point ? 12 : 6;
  const p = point ? 0.12 : 0.25;
  const t = Math.round(w * 0.08);
  return `M${t} 0H${w - t}C${w - t / 2} ${h * 0.3} ${w} ${h * 0.45} ${w} ${h - s}C${w} ${h - k} ${w * (1 - p)} ${h} ${w / 2} ${h}C${w * p} ${h} 0 ${h - k} 0 ${h - s}C0 ${h * 0.45} ${t / 2} ${h * 0.3} ${t} 0Z`;
}

/** Hero visual: six front teeth put right in a sensible order (decorative) */
export function SmilePlan() {
  const teeth = teethLayout();
  const central = teeth[2];
  const gum =
    `M0 0H340V${teeth[5].top + 12}` +
    teeth
      .slice()
      .reverse()
      .map((t) => `L${t.x + t.w} ${t.top + 10}Q${t.cx} ${t.top - 8} ${t.x} ${t.top + 10}`)
      .join("") +
    `L0 ${teeth[0].top + 12}Z`;
  const tooth = (i: number, extra?: string) => {
    const t = teeth[i];
    return (
      <g transform={`translate(${t.x} ${t.top})`}>
        <path
          d={crownPath(t.w, t.h, t.point)}
          className={[styles.crown, extra].filter(Boolean).join(" ")}
          mask={i === 2 ? "url(#cd-chip)" : undefined}
        />
      </g>
    );
  };
  return (
    <div className={styles.plan} aria-hidden="true">
      <span className={styles.planTitle}>Your smile, one plan</span>
      <div className={styles.planArt}>
        <svg viewBox="0 0 340 150" className={styles.planSvg}>
          <defs>
            <mask id="cd-chip" maskUnits="userSpaceOnUse">
              <rect x="-10" y="-10" width="80" height="130" fill="#fff" />
              <path d={`M${central.w - 18} ${central.h + 2}L${central.w + 2} ${central.h - 24}V${central.h + 2}Z`} fill="#000" />
            </mask>
          </defs>
          {tooth(0)}
          {tooth(1, styles.stain)}
          {tooth(2, styles.stain)}
          <g transform={`translate(${central.x} ${central.top})`}>
            <path
              className={styles.resin}
              d={`M${central.w - 18} ${central.h + 2}L${central.w + 2} ${central.h - 24}V${central.h - 16}C${central.w} ${central.h - 6} ${central.w * 0.75} ${central.h} ${central.w / 2 + 4} ${central.h}Z`}
            />
          </g>
          <g className={styles.shift}>
            {tooth(3, styles.stain)}
            {tooth(4, styles.stain)}
            <g className={styles.turn} style={{ transformOrigin: `${teeth[5].cx}px ${teeth[5].top}px` } as CSSProperties}>
              {tooth(5)}
            </g>
          </g>
          <path d={gum} className={styles.gum} />
        </svg>
      </div>
      <ol className={styles.planSteps}>
        {[
          { icon: "aligner", name: "Straighten" },
          { icon: "whiten", name: "Whiten" },
          { icon: "tooth", name: "Bond" },
        ].map((step, i) => (
          <li key={step.name} style={{ "--i": i } as CSSProperties}>
            <Icon name={step.icon as IconName} size={16} />
            {step.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** What is cosmetic dentistry: the copy and the five qualities treatment can change */
export function CosmeticWhat() {
  const qualities = [
    { name: "Color", area: "a" },
    { name: "Shape", area: "b" },
    { name: "Size", area: "c" },
    { name: "Alignment", area: "d" },
    { name: "Spaces", area: "e" },
  ];
  return (
    <section className={c.section} aria-labelledby="cd-what-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            The basics
          </p>
          <h2 id="cd-what-title" data-reveal>
            {cdWhat.title}
          </h2>
          {cdWhat.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.qualities} aria-hidden="true" data-inview data-reveal>
          <svg viewBox="0 0 120 150" className={styles.bigTooth}>
            <path
              d="M14 18c0-8 8-14 22-14 9 0 15 4 24 4s15-4 24-4c14 0 22 6 22 14v58c0 22-8 48-22 64-5 6-12 6-15-2l-9-30-9 30c-3 8-10 8-15 2-14-16-22-42-22-64Z"
              transform="translate(-3 0)"
            />
            <path d="M28 30c6-6 16-8 24-6" className={styles.bigToothShine} />
          </svg>
          {qualities.map((q, i) => (
            <span key={q.name} className={`${styles.quality} ${styles[`q${q.area}`]}`} style={{ "--i": i } as CSSProperties}>
              {q.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Procedures: five steps from the simplest to the most involved */
export function ProcedureStairs() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="cd-procedures-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            What we offer
          </p>
          <h2 id="cd-procedures-title" data-reveal>
            {cdProcedures.title}
          </h2>
          <p className="lead" data-reveal>
            {cdProcedures.intro}
          </p>
        </div>
        <ul role="list" className={styles.stairs}>
          {cdProcedures.items.map((item, i) => (
            <li key={item.href} className={styles.stair} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.stairTop}>
                <span className={styles.stairIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={24} />
                </span>
                <span className={styles.pips} aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((p) => (
                    <span key={p} className={p <= i ? styles.pipOn : undefined} />
                  ))}
                </span>
              </span>
              <p>
                <SiteLink href={item.href} className={styles.stairLink}>
                  {item.label}
                </SiteLink>
                <span className={styles.stairColon}>:</span> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.axis} aria-hidden="true" data-reveal>
          <span>Simplest</span>
          <span className={styles.axisLine} />
          <span>Most involved</span>
        </div>
      </div>
    </section>
  );
}

/** Smile makeovers: the copy, then the plan card (order chips, four steps, button) */
export function MakeoverPlan() {
  const m = cdMakeover;
  return (
    <section className={c.section} aria-labelledby="cd-makeover-title">
      <div className={`container ${styles.makeover}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Smile makeovers
          </p>
          <h2 id="cd-makeover-title" data-reveal>
            {m.title}
          </h2>
          {m.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
          <span className={styles.order} aria-hidden="true" data-reveal>
            <span>Straighten</span>
            <Icon name="arrow" size={16} />
            <span>Whiten</span>
            <Icon name="arrow" size={16} />
            <span>Bond or veneers</span>
          </span>
        </div>
        <div className={styles.planCard}>
          <span className={styles.planCardTop} aria-hidden="true" data-reveal>
            <Icon name="clipboard" size={18} /> Makeover plan
          </span>
          <h3 data-reveal>{m.plan.title}</h3>
          <ol className={styles.planList}>
            {m.plan.steps.map((step) => (
              <li key={step.lead} data-reveal>
                <span className={styles.planIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={20} />
                </span>
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
          <div data-reveal>
            <Button href="/patient-information/scheduling/" icon="calendar" track="appointment_click_cd_makeover">
              Request an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const TREATMENT_ICON: Record<string, IconName> = {
  veneers: "veneer",
  whitening: "whiten",
  bonding: "tooth",
  inlays: "layers",
  invisalign: "aligner",
};

const TREATMENT_LABEL: Record<string, string> = {
  veneers: "Shape & color",
  whitening: "Brighter shade",
  bonding: "Small fixes",
  inlays: "Back teeth",
  invisalign: "Straighter teeth",
};

/** The five treatments: each its own H2, with a spec card beside the copy */
export function TreatmentSpecs() {
  return (
    <div className={styles.specsWrap}>
      {cdTreatments.map((t, i) => (
        <section
          key={t.key}
          className={`${c.section} ${styles.specSection} ${i % 2 ? styles.specFlip : ""} ${styles[`spec_${t.key}`]}`}
          aria-labelledby={`cd-${t.key}-title`}
        >
          <div className={`container ${styles.specGrid}`}>
            <div className={styles.spec} aria-hidden="true" data-reveal>
              <span className={styles.specSwatch}>
                <Rays className={styles.specRays} scroll count={17} spread={150} inner={0.32} />
                <span className={styles.specIcon}>
                  <Icon name={TREATMENT_ICON[t.key]} size={56} strokeWidth={1.3} />
                </span>
                {"offer" in t ? <span className={styles.specOffer}>{t.offer}</span> : null}
              </span>
              <span className={styles.specRows}>
                {t.facts.map((fact) => (
                  <span key={fact} className={styles.specRow}>
                    <Icon name="check" size={14} strokeWidth={2.6} />
                    {fact}
                  </span>
                ))}
              </span>
            </div>
            <div className={c.copy}>
              <p className="label" data-reveal>
                {TREATMENT_LABEL[t.key]}
              </p>
              <h2 id={`cd-${t.key}-title`} data-reveal>
                {t.title}
              </h2>
              {t.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} data-reveal>
                  <Rich text={text} />
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/** Which treatment fits your goal: the comparison table, full width */
export function GoalTable() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="cd-which-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Find your fit
          </p>
          <h2 id="cd-which-title" data-reveal>
            {cdWhich.title}
          </h2>
        </div>
        <div className={styles.goal} data-reveal>
          <DataTable label="Cosmetic treatments by goal" head={cdWhich.head} rows={cdWhich.rows} highlight={1} className={styles.goalTable} />
        </div>
        <p className={`${c.note} ${styles.goalNote}`} data-reveal>
          <Icon name="chat" size={20} />
          <span>{cdWhich.after}</span>
        </p>
      </div>
    </section>
  );
}

/** An incisor from the side with a veneer on its front face, zoomed in on the margin (decorative) */
function VeneerProfile({ scale }: { scale: number }) {
  return (
    <svg viewBox="0 0 100 100" className={styles.zoomSvg}>
      <g transform={`translate(50 50) scale(${scale}) translate(${scale === 1 ? -56 : -40.5} ${scale === 1 ? -50 : -27})`}>
        <path d="M40 2C37 30 41 62 56 96C70 64 78 30 75 2Z" fill="#fff" stroke="#a9daf3" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        <path d="M39 22C38.2 42 43 66 56 96" fill="none" stroke="#6dbde8" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M-20 -10H130V20C106 20 92 28 75 25C62 23 50 23 40 25C22 28 2 20 -20 20Z" fill="#f2b7bc" stroke="#d98089" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

/** Precision you can see: the navy band with the zoom strip */
export function ZoomStrip() {
  const panels = [
    { name: "At a glance", scale: 1 },
    { name: "Closer", scale: 2.2 },
    { name: "Under the microscope", scale: 5 },
  ];
  return (
    <section className={`${c.section} ${styles.zoomSection}`} aria-labelledby="cd-precision-title">
      <div className={`container ${styles.zoomGrid}`}>
        <div className={styles.zoomCopy}>
          <p className="label label-inverse" data-reveal>
            Up close
          </p>
          <h2 id="cd-precision-title" data-reveal>
            {cdPrecision.title}
          </h2>
          {cdPrecision.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
          <span className={styles.zoomTech} aria-hidden="true" data-reveal>
            <span>
              <Icon name="xray" size={16} /> Digital X-rays
            </span>
            <span>
              <Icon name="camera" size={16} /> Intraoral camera
            </span>
            <span>
              <Icon name="search" size={16} /> iTero scanner
            </span>
          </span>
        </div>
        <div className={styles.zoom} aria-hidden="true" data-inview data-reveal>
          {panels.map((panel, i) => (
            <span key={panel.name} className={styles.zoomPanel} style={{ "--i": i } as CSSProperties}>
              <span className={styles.zoomView}>
                <VeneerProfile scale={panel.scale} />
                {i === 2 ? <span className={styles.zoomFit}>Close fit</span> : null}
              </span>
              <span className={styles.zoomName}>{panel.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Four front teeth under a gum line, for the results split (decorative) */
function ResultsSmile({ className }: { className: string }) {
  const gum = "M0 0H320V44" + [0, 1, 2, 3].map((i) => {
    const x = 26 + i * 70;
    return `L${x + 64} 46Q${x + 32} 22 ${x} 46`;
  }).reverse().join("") + "L0 44Z";
  return (
    <svg viewBox="0 0 320 200" className={className} preserveAspectRatio="xMidYMid slice">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${26 + i * 70} 34)`}>
          <path d={crownPath(64, i === 0 || i === 3 ? 118 : 132)} />
        </g>
      ))}
      <path d={gum} className={styles.splitGum} />
    </svg>
  );
}

/** See our results: a split shade view and the gallery link */
export function ResultsSplit() {
  return (
    <section className={c.section} aria-labelledby="cd-results-title">
      <div className="container">
        <div className={styles.results}>
          <div className={styles.split} aria-hidden="true" data-inview data-reveal>
            <ResultsSmile className={styles.splitBefore} />
            <ResultsSmile className={styles.splitAfter} />
            <span className={styles.splitHandle}>
              <Icon name="chevron" size={16} />
            </span>
            <span className={`${styles.splitTag} ${styles.tagBefore}`}>Before</span>
            <span className={`${styles.splitTag} ${styles.tagAfter}`}>After</span>
          </div>
          <div className={styles.resultsCopy}>
            <p className="label" data-reveal>
              Results
            </p>
            <h2 id="cd-results-title" data-reveal>
              {cdResults.title}
            </h2>
            <p data-reveal>
              <Rich text={cdResults.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Meet your cosmetic dentists: two cards, arched portraits and their facts */
export function CosmeticDentists() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="cd-dentists-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Your dentists
          </p>
          <h2 id="cd-dentists-title" data-reveal>
            {cdDentists.title}
          </h2>
          <p className={`lead ${styles.temple}`} data-reveal>
            <Icon name="graduation" size={22} />
            <span>{cdDentists.intro}</span>
          </p>
        </div>
        <ul role="list" className={styles.dentists}>
          {cdDentists.people.map((person) => (
            <li key={person.key} className={styles.dentist}>
              <Portrait image={images[person.key]} ratio="4 / 5" sizes="(max-width: 575px) 40vw, 200px" reveal="scroll" className={styles.dentistPhoto} />
              <div className={styles.dentistCopy}>
                <p data-reveal>
                  <SiteLink href={person.href} className={styles.dentistName}>
                    {person.name}
                  </SiteLink>{" "}
                  {person.text}
                </p>
                <span className={styles.dentistTags} aria-hidden="true" data-reveal>
                  {person.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
