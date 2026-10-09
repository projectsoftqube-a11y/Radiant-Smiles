import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { crCare, crFit, crMaterials, crPlace, crWhen } from "@/content/pages/restorative/repair";
import styles from "./Crowns.module.css";

/**
 * Dental Crowns sections (order and heading levels follow 02 Content.md). No same-day crowns
 * (handoff). Designs used on this page only: the crown seating onto its tooth, the reason
 * tiles, the two material cross-sections, the visit board with the lab between, the
 * microscope margin band with the review and the care checklist.
 */

/** Hero visual: a crown lowering onto a prepared tooth, its edge sealing (decorative) */
export function CrownSeat() {
  return (
    <div className={styles.seat} aria-hidden="true">
      <svg viewBox="0 0 300 300" className={styles.seatArt}>
        <defs>
          <linearGradient id="cr-gum" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6cfd0" />
            <stop offset="1" stopColor="#e5959c" />
          </linearGradient>
          <linearGradient id="cr-crown" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#e5f4fb" />
          </linearGradient>
        </defs>
        {/* The root in the gum, and the prepared tooth: a tapered stump */}
        <path d="M30 222c40 0 60-14 90-14h60c30 0 50 14 90 14v78H30Z" fill="url(#cr-gum)" />
        <path d="M30 222c40 0 60-14 90-14h60c30 0 50 14 90 14" fill="none" stroke="#d98089" strokeWidth="2.5" />
        <path d="M110 150c0-10 6-16 14-16h52c8 0 14 6 14 16l-6 58H116Z" fill="#f5f1ea" stroke="#1b3d6e" strokeWidth="2.5" />
        {/* The crown settles over it */}
        <g className={styles.cap}>
          <path
            d="M98 206c-6-28-12-48-12-70 0-30 18-54 44-54 8 0 14 4 20 4s12-4 20-4c26 0 44 24 44 54 0 22-6 42-12 70-16 6-34 8-52 8s-36-2-52-8Z"
            fill="url(#cr-crown)"
            stroke="#1b3d6e"
            strokeWidth="3"
          />
          <path d="M112 108c6-10 14-14 24-14" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
        </g>
        {/* The sealed edge */}
        <path className={styles.margin} d="M98 206c16 6 34 8 52 8s36-2 52-8" fill="none" stroke="#6dbde8" strokeWidth="5" strokeLinecap="round" pathLength={1} />
      </svg>
      <div className={styles.seatTags}>
        <span>
          <Icon name="calendar" size={16} /> Usually two visits
        </span>
        <span>
          <Icon name="flask" size={16} /> Made by a dental lab
        </span>
      </div>
    </div>
  );
}

/** When you need a crown: seven reasons as tiles */
export function WhenCrown() {
  return (
    <section className={styles.when} aria-labelledby="cr-when-title">
      <div className="container">
        <div className={styles.whenHead}>
          <div className={styles.whenCopy}>
            <p className="label" data-reveal>
              Is it time
            </p>
            <h2 id="cr-when-title" data-reveal>
              {crWhen.title}
            </h2>
            <p className="lead" data-reveal>
              {crWhen.intro}
            </p>
          </div>
          <p className={styles.whenIntro} data-reveal>
            {crWhen.listIntro}
          </p>
        </div>
        <ul role="list" className={styles.reasons}>
          {crWhen.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.reasonIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{item.lead}</strong> <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.whenAfter} data-reveal>
          <Icon name="layers" size={20} />
          <span>
            <Rich text={crWhen.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** Crown materials: the copy beside two cross-sections */
export function Materials() {
  return (
    <section className={styles.materials} aria-labelledby="cr-materials-title">
      <div className={`container ${styles.materialsGrid}`}>
        <div className={styles.materialsCopy}>
          <p className="label" data-reveal>
            Materials
          </p>
          <h2 id="cr-materials-title" data-reveal>
            {crMaterials.title}
          </h2>
          {crMaterials.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.swatches} aria-hidden="true">
          {[
            { name: "Porcelain", note: "Tooth-colored, metal-free", gold: false },
            { name: "Porcelain bonded to gold", note: "Gold inside for strength", gold: true },
          ].map((m) => (
            <figure key={m.name} className={styles.swatch} data-reveal>
              <svg viewBox="0 0 120 120">
                <path
                  d="M24 104c-4-22-8-36-8-52 0-24 14-40 34-40 4 0 7 2 10 2s6-2 10-2c20 0 34 16 34 40 0 16-4 30-8 52Z"
                  fill={m.gold ? "#f3e3b3" : "#ffffff"}
                  stroke="#1b3d6e"
                  strokeWidth="2"
                />
                {m.gold ? (
                  <path
                    d="M34 104c-3-18-6-30-6-44 0-18 10-30 24-30h16c14 0 24 12 24 30 0 14-3 26-6 44Z"
                    fill="#d9b25a"
                    opacity="0.85"
                  />
                ) : null}
                <path
                  d="M40 104c-2-14-4-24-4-34 0-12 8-20 18-20h12c10 0 18 8 18 20 0 10-2 20-4 34Z"
                  fill="#f5f1ea"
                  stroke="#c8d1dc"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>
              <figcaption>
                <span className={styles.swatchName}>{m.name}</span>
                <span className={styles.swatchNote}>{m.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/** How crowns are placed: Visit 1, the lab, Visit 2 */
export function VisitBoard() {
  return (
    <section className={styles.place} aria-labelledby="cr-place-title">
      <div className="container">
        <div className={styles.placeHead}>
          <p className="label" data-reveal>
            Two visits
          </p>
          <h2 id="cr-place-title" data-reveal>
            {crPlace.title}
          </h2>
          <p className="lead" data-reveal>
            {crPlace.intro}
          </p>
        </div>
        <div className={styles.board}>
          {crPlace.visits.map((visit, v) => [
            v === 1 ? (
              <span key="lab" className={styles.lab} aria-hidden="true" data-reveal>
                <Icon name="flask" size={24} />
                <span>Dental lab</span>
              </span>
            ) : null,
            <div key={visit.title} className={v ? `${styles.visit} ${styles.visitTwo}` : styles.visit}>
              <h3 data-reveal>{visit.title}</h3>
              <ol className={styles.visitSteps}>
                {visit.steps.map((step, i) => (
                  <li key={step} style={{ "--i": i } as CSSProperties} data-reveal>
                    {step}
                  </li>
                ))}
              </ol>
            </div>,
          ])}
        </div>
        <p className={styles.noSameDay} data-reveal>
          <Icon name="ban" size={22} />
          <span>{crPlace.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Precise fit: the page's navy band, a magnified margin and the review */
export function FitBand() {
  return (
    <section className={styles.fit} aria-labelledby="cr-fit-title">
      <div className={`container ${styles.fitGrid}`}>
        <div className={styles.lens} aria-hidden="true" data-inview data-reveal>
          <span className={styles.lensLabel}>
            <Icon name="microscope" size={16} /> Under the microscope
          </span>
          <svg viewBox="0 0 240 200" className={styles.lensArt}>
            {/* Magnified: the crown's edge meeting the tooth at the gumline */}
            <path d="M0 0h240v200H0Z" fill="transparent" />
            <path d="M60 0c-6 50-10 96-12 128h144c-2-32-6-78-12-128Z" fill="#f5f1ea" />
            <path d="M40 0c-6 52-12 100-16 138 30 10 62 14 96 14s66-4 96-14c-4-38-10-86-16-138" fill="#ffffff" stroke="#a9daf3" strokeWidth="3" />
            <path d="M0 150c40 0 60-8 120-8s80 8 120 8v50H0Z" fill="#e5959c" opacity="0.85" />
            <path className={styles.edge} d="M24 138c30 10 62 14 96 14s66-4 96-14" fill="none" stroke="#6dbde8" strokeWidth="6" strokeLinecap="round" />
            <circle className={styles.sealDot} cx="216" cy="138" r="7" fill="#6dbde8" />
            <circle className={styles.sealDot} cx="24" cy="138" r="7" fill="#6dbde8" />
          </svg>
          <span className={styles.lensNote}>Edge sealed tight to the tooth</span>
        </div>
        <div className={styles.fitCopy}>
          <p className="label label-inverse" data-reveal>
            Precision
          </p>
          <h2 id="cr-fit-title" data-reveal>
            {crFit.title}
          </h2>
          {crFit.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
          <figure className={styles.review} data-reveal>
            <blockquote>
              <p>&ldquo;{crFit.quote}&rdquo;</p>
            </blockquote>{" "}
            <figcaption>{crFit.quoteBy}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/** Caring for your crown: four habits, then the call note */
export function CrownCare() {
  return (
    <section className={styles.care} aria-labelledby="cr-care-title">
      <div className={`container ${styles.careGrid}`}>
        <div className={styles.careCopy}>
          <p className="label" data-reveal>
            Aftercare
          </p>
          <h2 id="cr-care-title" data-reveal>
            {crCare.title}
          </h2>
          <p className="lead" data-reveal>
            {crCare.intro}
          </p>
        </div>
        <div className={styles.careCard}>
          <ul role="list" className={styles.careList}>
            {crCare.items.map((item) => (
              <li key={item.text} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                <p>
                  <Rich text={item.text} />
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.careAfter} data-reveal>
            <Icon name="phone" size={20} />
            <span>{crCare.after}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
