import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { imCompare, imCost, imImaging, imOffer, imOptions, imProcess, imRecovery, imRight, imWhy, imYouGet } from "@/content/pages/restorative/replace";
import { offers } from "@/content/site";
import styles from "./Implants.module.css";

/**
 * Dental Implants sections (order and heading levels follow 02 Content.md). The offer always
 * reads "$500 off the regular $3,500", never a net price (handoff). Designs used on this page
 * only: the exploded implant, the offer callout, the root-and-crown panel, the candidate
 * check with the second-opinion card, the healing timeline, the 3D scan panel, the option
 * cards with implant counts, the offer price card, the three-way table, the aftercare list
 * and the "what you get" receipt.
 */

/** Hero visual: crown, abutment and implant post assembling into one tooth (decorative) */
export function ImplantExploded() {
  return (
    <div className={styles.exploded} aria-hidden="true">
      <svg viewBox="0 0 260 340" className={styles.explodedArt}>
        <defs>
          <linearGradient id="im-bone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6cfd0" />
            <stop offset="0.35" stopColor="#e5959c" />
            <stop offset="0.36" stopColor="#f1e6cf" />
            <stop offset="1" stopColor="#e7dcc2" />
          </linearGradient>
          <linearGradient id="im-metal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#a3adbb" />
            <stop offset="0.5" stopColor="#e3e7ec" />
            <stop offset="1" stopColor="#8a97a8" />
          </linearGradient>
        </defs>
        <path d="M0 190c40 0 60-8 130-8s90 8 130 8v150H0Z" fill="url(#im-bone)" />
        {/* Post */}
        <g className={styles.post}>
          <path d="M108 196h44l-4 96c-1 14-8 24-18 30-10-6-17-16-18-30Z" fill="url(#im-metal)" stroke="#1b3d6e" strokeWidth="2" />
          {[214, 232, 250, 268, 286].map((y) => (
            <path key={y} d={`M${106 + (y - 196) * 0.04} ${y}h${48 - (y - 196) * 0.08}`} stroke="#1b3d6e" strokeWidth="2" />
          ))}
        </g>
        {/* Abutment */}
        <g className={styles.abutment}>
          <path d="M114 150h32l6 46h-44Z" fill="url(#im-metal)" stroke="#1b3d6e" strokeWidth="2" />
        </g>
        {/* Crown */}
        <g className={styles.crown}>
          <path
            d="M82 160c-6-22-10-38-10-54 0-28 16-48 40-48 8 0 12 4 18 4s10-4 18-4c24 0 40 20 40 48 0 16-4 32-10 54-14 6-30 8-48 8s-34-2-48-8Z"
            fill="#ffffff"
            stroke="#1b3d6e"
            strokeWidth="3"
          />
          <path d="M94 86c6-10 14-14 22-14" fill="none" stroke="#e5f4fb" strokeWidth="7" strokeLinecap="round" />
        </g>
      </svg>
      <div className={styles.parts}>
        <span className={styles.partCrown}>Crown</span>
        <span className={styles.partAbut}>Abutment</span>
        <span className={styles.partPost}>Implant</span>
      </div>
    </div>
  );
}

/** The hero offer line as a distinct callout (handoff) */
export function OfferCallout() {
  return (
    <p className={styles.offer}>
      <span className={styles.offerTag} aria-hidden="true">
        <Icon name="tag" size={20} />
      </span>
      <span>
        <strong>{imOffer.lead}</strong> {imOffer.text}
      </span>
    </p>
  );
}

/** Why an implant: the copy beside a root-and-crown panel */
export function WhyImplant() {
  return (
    <section className={styles.why} aria-labelledby="im-why-title">
      <div className={`container ${styles.whyGrid}`}>
        <div className={styles.whyCopy}>
          <p className="label" data-reveal>
            Root & crown
          </p>
          <h2 id="im-why-title" data-reveal>
            {imWhy.title}
          </h2>
          {imWhy.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <ul role="list" className={styles.whole} aria-hidden="true">
          {[
            { icon: "tooth" as IconName, name: "Replaces the whole tooth", note: "Root and crown" },
            { icon: "shield" as IconName, name: "Stands on its own", note: "No leaning on neighbors" },
            { icon: "layers" as IconName, name: "Helps preserve bone", note: "Works like a root" },
          ].map((row, i) => (
            <li key={row.name} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.wholeIcon}>
                <Icon name={row.icon} size={22} />
              </span>
              <span className={styles.wholeText}>
                <span className={styles.wholeName}>{row.name}</span>
                <span className={styles.wholeNote}>{row.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Are implants right for you: the candidate check and the second-opinion card */
export function RightForYou() {
  return (
    <section className={styles.right} aria-labelledby="im-right-title">
      <div className="container">
        <div className={styles.rightHead}>
          <p className="label" data-reveal>
            Candidates
          </p>
          <h2 id="im-right-title" data-reveal>
            {imRight.title}
          </h2>
          <p className="lead" data-reveal>
            {imRight.intro}
          </p>
        </div>
        <div className={styles.rightGrid}>
          <div className={styles.candidates}>
            <p className={styles.candidatesIntro} data-reveal>
              {imRight.listIntro}
            </p>
            <ul role="list">
              {imRight.items.map((item) => (
                <li key={item} data-reveal>
                  <span aria-hidden="true">
                    <Icon name="check" size={14} strokeWidth={2.6} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.candidatesAfter} data-reveal>
              <Rich text={imRight.after} />
            </p>
          </div>
          <p className={styles.second} data-reveal>
            <span className={styles.secondIcon} aria-hidden="true">
              <Icon name="chat" size={28} />
            </span>
            <strong className={styles.secondLead}>{imRight.second.lead}</strong>{" "}
            <span>{imRight.second.text}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** How treatment works: four stages on a six-to-eight-month line */
export function HealingTimeline() {
  return (
    <section className={styles.process} aria-labelledby="im-process-title">
      <div className="container">
        <div className={styles.processHead}>
          <p className="label label-inverse" data-reveal>
            Six to eight months
          </p>
          <h2 id="im-process-title" data-reveal>
            {imProcess.title}
          </h2>
          <p className="lead" data-reveal>
            {imProcess.intro}
          </p>
        </div>
        <div className={styles.timeline} data-grow>
          <span className={styles.timeBar} aria-hidden="true">
            <span data-grow-item />
          </span>
          <ol className={styles.stages}>
            {imProcess.steps.map((step, i) => (
              <li key={step.lead} className={i === 2 ? styles.stageLong : undefined} data-reveal>
                <span className={styles.stageDot} aria-hidden="true" />
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.processAfter} data-reveal>
          {imProcess.after}
        </p>
      </div>
    </section>
  );
}

/** 3D imaging and microscopes: a CBCT slice panel beside the copy and the patient line */
export function Imaging() {
  return (
    <section className={styles.imaging} aria-labelledby="im-imaging-title">
      <div className={`container ${styles.imagingGrid}`}>
        <div className={styles.scan} aria-hidden="true" data-inview data-reveal>
          <span className={styles.scanTitle}>
            <Icon name="layers" size={16} /> Cone beam CT · 3D
          </span>
          <svg viewBox="0 0 240 180" className={styles.scanArt}>
            <path d="M20 150c20-70 60-110 100-110s80 40 100 110" fill="none" stroke="#a9daf3" strokeWidth="26" strokeLinecap="round" opacity="0.35" />
            <path d="M20 150c20-70 60-110 100-110s80 40 100 110" fill="none" stroke="#a9daf3" strokeWidth="2" />
            <path className={styles.nerve} d="M30 158c30-50 60-80 90-80s60 30 90 80" fill="none" stroke="#e5959c" strokeWidth="2.5" strokeDasharray="6 5" />
            <rect className={styles.plan} x="112" y="30" width="16" height="44" rx="5" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 3" />
            <path className={styles.sweep} d="M0 0h240" stroke="#6dbde8" strokeWidth="3" />
          </svg>
          <span className={styles.scanLegend}>
            <span className={styles.legendBone}>Bone</span>
            <span className={styles.legendNerve}>Nerve</span>
            <span className={styles.legendPlan}>Planned implant</span>
          </span>
        </div>
        <div className={styles.imagingCopy}>
          <p className="label" data-reveal>
            Planning
          </p>
          <h2 id="im-imaging-title" data-reveal>
            {imImaging.title}
          </h2>
          {imImaging.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
          <p data-reveal>
            {imImaging.quoteIntro}{" "}
            <span className={styles.quote}>&ldquo;{imImaging.quote}&rdquo;</span> {imImaging.quoteBy}.{" "}
            <Rich text={imImaging.more} />
          </p>
        </div>
      </div>
    </section>
  );
}

/** Single, multiple and full-arch: three cards with the implant count drawn */
export function ImplantOptions() {
  return (
    <section className={styles.options} aria-labelledby="im-options-title">
      <div className="container">
        <div className={styles.optionsHead}>
          <p className="label" data-reveal>
            Options
          </p>
          <h2 id="im-options-title" data-reveal>
            {imOptions.title}
          </h2>
          <p className="lead" data-reveal>
            {imOptions.intro}
          </p>
        </div>
        <div className={styles.optionCards}>
          {imOptions.options.map((option, i) => (
            <div key={option.title} className={i === 0 ? `${styles.option} ${styles.optionFeatured}` : styles.option} data-reveal>
              <span className={styles.posts} aria-hidden="true">
                {Array.from({ length: option.count }, (_, n) => (
                  <Icon key={n} name="screw" size={26} />
                ))}
              </span>
              <h3>{option.title}</h3>
              <p>
                <Rich text={option.text} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Implant cost: the offer price card, what affects cost, insurance and financing */
export function ImplantCost() {
  return (
    <section className={styles.cost} aria-labelledby="im-cost-title">
      <div className="container">
        <div className={styles.costTop}>
          <div className={styles.costCopy}>
            <p className="label" data-reveal>
              Cost & offer
            </p>
            <h2 id="im-cost-title" data-reveal>
              {imCost.title}
            </h2>
            <p className="lead" data-reveal>
              <Rich text={imCost.intro} />
            </p>
          </div>
          <div className={styles.priceCard} aria-hidden="true" data-reveal>
            <span className={styles.priceKicker}>Implant, abutment & crown</span>
            <span className={styles.priceRegular}>
              Regular ${offers.implants.regular.toLocaleString("en-US")}
            </span>
            <span className={styles.priceOff}>
              $<span data-count={offers.implants.discount}>{offers.implants.discount}</span> off
            </span>
            <span className={styles.priceExtras}>
              <Icon name="check" size={14} strokeWidth={2.6} /> Free consultation & second opinion
            </span>
          </div>
        </div>
        <div className={styles.costGrid}>
          <div className={styles.affects}>
            <h3 data-reveal>{imCost.affectsTitle}</h3>
            <p data-reveal>{imCost.affectsIntro}</p>
            <ul role="list">
              {imCost.affects.map((item) => (
                <li key={item} data-reveal>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.affectsAfter} data-reveal>
              {imCost.affectsAfter}
            </p>
          </div>
          <div className={styles.pay}>
            <h3 data-reveal>{imCost.payTitle}</h3>
            <ul role="list">
              {imCost.pay.map((item, i) => (
                <li key={item.lead} data-reveal>
                  <span className={styles.payIcon} aria-hidden="true">
                    <Icon name={i ? "banknote" : "shield"} size={20} />
                  </span>
                  <p>
                    <strong>{item.lead}</strong> <Rich text={item.text} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Implants vs bridges vs dentures: the three-way table (with a caption: handoff) */
export function ThreeWay() {
  return (
    <section className={styles.compare} aria-labelledby="im-compare-title">
      <div className="container">
        <div className={styles.compareHead}>
          <p className="label" data-reveal>
            Compare
          </p>
          <h2 id="im-compare-title" data-reveal>
            {imCompare.title}
          </h2>
          <p className="lead" data-reveal>
            {imCompare.intro}
          </p>
        </div>
        <div data-reveal>
          <DataTable label={imCompare.title} head={imCompare.head} rows={imCompare.rows} highlight={1} className={styles.compareTable} />
        </div>
        <p className={styles.compareAfter} data-reveal>
          <Rich text={imCompare.after} />
        </p>
      </div>
    </section>
  );
}

/** Recovery and caring for your implant */
export function ImplantRecovery() {
  return (
    <section className={styles.recovery} aria-labelledby="im-recovery-title">
      <div className={`container ${styles.recoveryGrid}`}>
        <div className={styles.recoveryCopy}>
          <p className="label" data-reveal>
            Aftercare
          </p>
          <h2 id="im-recovery-title" data-reveal>
            {imRecovery.title}
          </h2>
          <p data-reveal>
            <Rich text={imRecovery.intro} />
          </p>
          <p className={styles.recoveryAfter} data-reveal>
            {imRecovery.after}
          </p>
        </div>
        <div className={styles.recoveryCard}>
          <p className={styles.recoveryIntro} data-reveal>
            {imRecovery.listIntro}
          </p>
          <ul role="list">
            {imRecovery.items.map((item) => (
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

/** What you get at our Yardley office: a receipt-style list */
export function YouGet() {
  return (
    <section className={styles.get} aria-labelledby="im-get-title">
      <div className={`container ${styles.getGrid}`}>
        <div className={styles.getCopy}>
          <p className="label" data-reveal>
            At our office
          </p>
          <h2 id="im-get-title" data-reveal>
            {imYouGet.title}
          </h2>
          <p data-reveal>
            <Rich text={imYouGet.intro} />
          </p>
        </div>
        <ul role="list" className={styles.getList}>
          {imYouGet.items.map((item) => (
            <li key={item.text} data-reveal>
              <span aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
