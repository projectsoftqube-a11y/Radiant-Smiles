import type { CSSProperties } from "react";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import {
  galleryCases,
  galleryMakeover,
  galleryRestorations,
  galleryShare,
  galleryVeneers,
  galleryWhitening,
  type GalleryGroup,
} from "@/content/pages/gallery";
import styles from "./Gallery.module.css";

/**
 * Before & After Gallery sections (order and heading levels follow 02 Content.md).
 * Designs used on this page only: the shade guide, the makeover building blocks, the
 * whitening timeline, the case cards and the treatment pair.
 * A group with no cleared cases shows no frames at all (handoff: never empty
 * "coming soon" frames); the whitening group shows a staging note until it is cleared.
 */

/** Hero visual: a shade guide, tabs from natural to bright, a marker sliding along (decorative) */
export function ShadeGuide() {
  const shades = ["#efe2c4", "#f1e6cc", "#f3ead4", "#f5eedc", "#f7f2e4", "#f9f6ec", "#fbf9f4", "#fdfcf9"];
  return (
    <div className={styles.guide} aria-hidden="true">
      <div className={styles.tabs}>
        {shades.map((shade, i) => (
          <span key={shade} className={styles.tab} style={{ "--shade": shade, "--i": i } as CSSProperties}>
            <span className={styles.tabTooth} />
          </span>
        ))}
      </div>
      <div className={styles.scale}>
        <span>Natural shade</span>
        <span className={styles.scaleTrack}>
          <span className={styles.scaleThumb} />
        </span>
        <span>Brighter</span>
      </div>
      <span className={styles.guideNote}>
        <Icon name="clipboard" size={18} />
        Grouped by treatment
      </span>
    </div>
  );
}

/** Cards for the cases in a group (nothing at all when there are none) */
function CaseGrid({ group, caption }: { group: GalleryGroup; caption?: string }) {
  const cases = galleryCases.filter((item) => item.group === group);
  if (!cases.length) return null;
  return (
    <ul role="list" className={cases.length > 1 ? styles.cases : `${styles.cases} ${styles.single}`}>
      {cases.map((item) => (
        <li key={item.before.alt} className={styles.case} data-reveal>
          {item.before.src && item.after.src ? (
            <BeforeAfter
              before={item.before.src}
              after={item.after.src}
              beforeAlt={item.before.alt}
              afterAlt={item.after.alt}
              sizes="(max-width: 767px) 92vw, 760px"
            />
          ) : null}
          <div className={styles.caseText}>
            <p className={styles.caseLabel}>
              <Icon name="whiten" size={18} />
              Treatment: {item.treatment}
            </p>
            {item.note ? <p className={styles.caseNote}>{item.note}</p> : null}
            <p className={styles.caseVary}>{caption ?? "Individual results vary."}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Smile makeover: the text, with the treatments it names as building blocks */
export function GalleryMakeover() {
  return (
    <section className={styles.makeover} aria-labelledby="gallery-makeover-title">
      <div className={`container ${styles.makeoverGrid}`}>
        <div className={styles.copy}>
          <p className="label" data-reveal>
            Smile makeovers
          </p>
          <h2 id="gallery-makeover-title" data-reveal>
            {galleryMakeover.title}
          </h2>
          {galleryMakeover.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
          <div data-reveal>
            <SiteLink href={galleryMakeover.link.href} className="text-link">
              {galleryMakeover.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <div className={styles.blocks} aria-hidden="true">
          {galleryMakeover.blocks.map((block, i) => (
            <span key={block} className={styles.blockRow} data-reveal>
              <span className={styles.block}>
                <Icon name={(["whiten", "veneer", "tooth", "tooth"] as const)[i] ?? "tooth"} size={20} />
                {block}
              </span>
              {i < galleryMakeover.blocks.length - 1 ? <span className={styles.plus}>+</span> : null}
            </span>
          ))}
          <span className={styles.equals} data-reveal>
            <Icon name="clipboard" size={20} />
            Planned together
          </span>
        </div>
      </div>
      <div className="container">
        <CaseGrid group="makeover" />
      </div>
    </section>
  );
}

/** Teeth whitening: the case card (held until cleared), the tray schedule and the offer */
export function GalleryWhitening() {
  return (
    <section className={styles.whitening} aria-labelledby="gallery-whitening-title">
      <div className="container">
        <div className={styles.whiteningHead}>
          <p className="label" data-reveal>
            Teeth whitening
          </p>
          <h2 id="gallery-whitening-title" data-reveal>
            {galleryWhitening.title}
          </h2>
          <p className="lead" data-reveal>
            {galleryWhitening.text}
          </p>
        </div>

        <ol className={styles.schedule} aria-hidden="true">
          {galleryWhitening.steps.map((step) => (
            <li key={step.unit} className={styles.step} data-reveal>
              <span className={styles.figure}>
                {step.figure}
                <small>{step.unit}</small>
              </span>
              <span className={styles.stepText}>{step.text}</span>
            </li>
          ))}
        </ol>

        <div className={styles.whiteningCase}>
          <CaseGrid group="whitening" caption={galleryWhitening.caption} />
        </div>

        <div className={styles.whiteningFoot} data-reveal>
          <p className={styles.offer}>
            <Icon name="tag" size={20} />
            {galleryWhitening.offer}
          </p>
          <SiteLink href={galleryWhitening.link.href} className="text-link">
            {galleryWhitening.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}

/** Veneers and implants side by side: two treatment panels, each with its own H2 */
export function GalleryTreatments() {
  return (
    <div className={styles.treatments}>
      <div className={`container ${styles.treatmentGrid}`}>
        <section className={styles.treatment} aria-labelledby="gallery-veneers-title" data-reveal>
          <span className={styles.treatmentArt} aria-hidden="true">
            <Icon name="veneer" size={30} strokeWidth={1.4} />
          </span>
          <h2 id="gallery-veneers-title">{galleryVeneers.title}</h2>
          <p>{galleryVeneers.text}</p>
          <CaseGrid group="veneers" />
          <SiteLink href={galleryVeneers.link.href} className="text-link">
            {galleryVeneers.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </section>
        <section className={`${styles.treatment} ${styles.treatmentDark}`} aria-labelledby="gallery-restorations-title" data-reveal>
          <span className={styles.treatmentArt} aria-hidden="true">
            <Icon name="implant" size={30} strokeWidth={1.4} />
          </span>
          <h2 id="gallery-restorations-title">{galleryRestorations.title}</h2>
          <p>{galleryRestorations.text}</p>
          <figure className={styles.quote}>
            <figcaption>{galleryRestorations.quoteIntro} </figcaption>
            <blockquote>
              <p>&ldquo;{galleryRestorations.quote}&rdquo;</p>
            </blockquote>
          </figure>
          <CaseGrid group="restorations" />
          <SiteLink href={galleryRestorations.link.href} className={`text-link ${styles.lightLink}`}>
            {galleryRestorations.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </section>
      </div>
    </div>
  );
}

/** Share your own: a slim banner */
export function GalleryShare() {
  return (
    <section className={styles.share} aria-labelledby="gallery-share-title">
      <div className="container">
        <div className={styles.shareBanner} data-reveal>
          <span className={styles.shareIcon} aria-hidden="true">
            <Icon name="camera" size={26} />
          </span>
          <div>
            <h2 id="gallery-share-title">{galleryShare.title}</h2>
            <p>{galleryShare.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
