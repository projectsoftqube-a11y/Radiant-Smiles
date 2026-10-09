import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { fiAfter, fiComposite, fiPlace, fiSigns, fiWhich } from "@/content/pages/restorative/repair";
import styles from "./Fillings.module.css";

/**
 * Dental Fillings sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the layered filling under the curing light, the cavity watch-list, the
 * composite property cards, the layer-by-layer steps, the coverage comparison and the
 * aftercare list.
 */

/** Hero visual: a cavity filled in thin layers, each set by the curing light (decorative) */
export function LayerFill() {
  return (
    <div className={styles.fill} aria-hidden="true">
      <svg viewBox="0 0 300 280" className={styles.fillArt}>
        <defs>
          <radialGradient id="fi-light" cx="0.5" cy="0" r="0.9">
            <stop offset="0" stopColor="#a9daf3" stopOpacity="0.85" />
            <stop offset="1" stopColor="#a9daf3" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* The curing light */}
        <path d="M180 0h44l-6 40h-32Z" fill="#1b3d6e" />
        <path className={styles.beam} d="M186 40h32l40 100H146Z" fill="url(#fi-light)" />
        {/* The tooth with its cavity */}
        <path
          d="M70 96c22 0 36 12 80 12s58-12 80-12c32 0 48 28 48 62 0 30-14 50-22 80-6 24-10 42-24 42-18 0-16-42-42-42h-40c-26 0-24 42-42 42-14 0-18-18-24-42-8-30-22-50-22-80 0-34 16-62 48-62Z"
          fill="#ffffff"
          stroke="#1b3d6e"
          strokeWidth="3"
        />
        <path d="M120 112c4 22 14 36 30 36s26-14 30-36Z" fill="#f5f1ea" stroke="#c8d1dc" strokeWidth="2" strokeDasharray="4 4" />
        {/* Three thin layers of composite, set one after another */}
        <path className={`${styles.layer} ${styles.l1}`} d="M128 132c6 10 14 16 22 16s16-6 22-16Z" />
        <path className={`${styles.layer} ${styles.l2}`} d="M122 120c5 9 15 14 28 14s23-5 28-14l-4 12c-5 6-13 9-24 9s-19-3-24-9Z" />
        <path className={`${styles.layer} ${styles.l3}`} d="M120 112h60c0 4-2 8-4 10-6 6-16 8-26 8s-20-2-26-8c-2-2-4-6-4-10Z" />
      </svg>
      <div className={styles.fillTags}>
        <span>
          <Icon name="layers" size={16} /> Built up in layers
        </span>
        <span>
          <Icon name="check" size={16} /> Mercury-free composite
        </span>
      </div>
    </div>
  );
}

/** Signs you may need a filling: a watch-list beside the copy */
export function FillingSigns() {
  return (
    <section className={styles.signs} aria-labelledby="fi-signs-title">
      <div className={`container ${styles.signsGrid}`}>
        <div className={styles.signsCopy}>
          <p className="label" data-reveal>
            What to watch for
          </p>
          <h2 id="fi-signs-title" data-reveal>
            {fiSigns.title}
          </h2>
          <p className="lead" data-reveal>
            {fiSigns.intro}
          </p>
        </div>
        <ul role="list" className={styles.watch}>
          {fiSigns.items.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.watchIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={20} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
        <p className={styles.signsAfter} data-reveal>
          <Rich text={fiSigns.after} />
        </p>
      </div>
    </section>
  );
}

/** Tooth-colored, mercury-free fillings: the copy, then the four reasons as property cards */
export function Composite() {
  const icons: IconName[] = ["smile", "layers", "drop", "check"];
  return (
    <section className={styles.composite} aria-labelledby="fi-composite-title">
      <div className="container">
        <div className={styles.compositeHead}>
          <div className={styles.compositeCopy}>
            <p className="label" data-reveal>
              Composite resin
            </p>
            <h2 id="fi-composite-title" data-reveal>
              {fiComposite.title}
            </h2>
            {fiComposite.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="lead" data-reveal>
                {text}
              </p>
            ))}
          </div>
          <span className={styles.mix} aria-hidden="true" data-reveal>
            <span className={styles.mixPart}>
              <span className={styles.resin} />
              Acrylic resin
            </span>
            <span className={styles.mixPlus}>+</span>
            <span className={styles.mixPart}>
              <span className={styles.glass} />
              Powdered glass
            </span>
            <span className={styles.mixResult}>Tooth-colored composite</span>
          </span>
        </div>
        <h3 className={styles.whyTitle} data-reveal>
          {fiComposite.whyTitle}
        </h3>
        <ul role="list" className={styles.props}>
          {fiComposite.why.map((item, i) => (
            <li key={item.lead} data-reveal>
              <span className={styles.propIcon} aria-hidden="true">
                <Icon name={icons[i]} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.compositeAfter} data-reveal>
          {fiComposite.after}
        </p>
      </div>
    </section>
  );
}

/** How fillings are placed: six steps, each a layer thicker than the last */
export function LayerSteps() {
  return (
    <section className={styles.steps} aria-labelledby="fi-steps-title">
      <div className={`container ${styles.stepsGrid}`}>
        <div className={styles.stepsCopy}>
          <p className="label" data-reveal>
            One visit
          </p>
          <h2 id="fi-steps-title" data-reveal>
            {fiPlace.title}
          </h2>
          <p className="lead" data-reveal>
            {fiPlace.intro}
          </p>
          <p className={styles.microscope} data-reveal>
            <Icon name="microscope" size={22} />
            <span>{fiPlace.after}</span>
          </p>
        </div>
        <ol className={styles.stack} data-inview>
          {fiPlace.steps.map((step, i) => (
            <li key={step.lead} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.stackBar} aria-hidden="true">
                <span />
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Filling, inlay or crown: three teeth, each covered a little more */
export function Coverage() {
  return (
    <section className={styles.coverage} aria-labelledby="fi-which-title">
      <div className="container">
        <div className={styles.coverageHead}>
          <p className="label" data-reveal>
            The right repair
          </p>
          <h2 id="fi-which-title" data-reveal>
            {fiWhich.title}
          </h2>
          <p className="lead" data-reveal>
            {fiWhich.intro}
          </p>
        </div>
        <ul role="list" className={styles.options}>
          {fiWhich.options.map((option) => (
            <li key={option.lead} data-reveal>
              <svg viewBox="0 0 100 100" className={styles.topView} aria-hidden="true">
                <rect x="10" y="10" width="80" height="80" rx="32" fill="#ffffff" stroke="#1b3d6e" strokeWidth="2.5" />
                {option.cover === 1 ? <path d="M40 38c6-4 14-4 20 0 4 8 0 18-10 20-10-2-14-12-10-20Z" fill="#a9daf3" /> : null}
                {option.cover === 2 ? <path d="M26 30c10-6 38-6 48 0 6 14 4 30-4 38-12 6-28 6-40 0-8-8-10-24-4-38Z" fill="#a9daf3" /> : null}
                {option.cover === 3 ? <rect x="10" y="10" width="80" height="80" rx="32" fill="#a9daf3" stroke="#1b6e9f" strokeWidth="2.5" /> : null}
              </svg>
              <p>
                <strong>
                  <Rich text={option.lead} />
                </strong>{" "}
                {option.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.coverageAfter} data-reveal>
          <Icon name="xray" size={20} />
          <span>{fiWhich.after}</span>
        </p>
      </div>
    </section>
  );
}

/** After your filling: the copy beside the habits */
export function FillingAfter() {
  return (
    <section className={styles.after} aria-labelledby="fi-after-title">
      <div className={`container ${styles.afterGrid}`}>
        <div className={styles.afterCopy}>
          <p className="label" data-reveal>
            Aftercare
          </p>
          <h2 id="fi-after-title" data-reveal>
            {fiAfter.title}
          </h2>
          <p data-reveal>{fiAfter.intro}</p>
          <p className={styles.afterNote} data-reveal>
            <Rich text={fiAfter.after} />
          </p>
        </div>
        <div className={styles.habits}>
          <p className={styles.habitsIntro} data-reveal>
            {fiAfter.listIntro}
          </p>
          <ul role="list">
            {fiAfter.items.map((item) => (
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
