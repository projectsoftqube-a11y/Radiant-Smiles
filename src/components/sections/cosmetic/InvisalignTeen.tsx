import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { itIndicators, itRecords, itSchedule, itWhy } from "@/content/pages/cosmetic/invisalign";
import c from "../restorative/Common.module.css";
import styles from "./InvisalignTeen.module.css";

/**
 * Invisalign Teen sections (order and heading levels follow 02 Content.md). No child photos
 * and no count of replacement aligners (handoff). Designs used on this page only: the
 * aligner with its fading blue indicator, the sticker tiles, the indicator fade scale with
 * the lost-aligner card, the aligner lanes for sports, music and school, and the one-place
 * card.
 */

/** Hero visual: an aligner whose blue indicator fades as it's worn (decorative) */
export function IndicatorAligner() {
  return (
    <div className={styles.indicator} aria-hidden="true">
      <span className={styles.indTitle}>Parent check</span>
      <div className={styles.indArt}>
        <svg viewBox="0 0 220 150" className={styles.indSvg}>
          {/* Lower arch from above, inside its clear aligner */}
          <path d="M30 20C30 96 70 136 110 136S190 96 190 20" className={styles.alignerBody} />
          <path d="M30 20C30 96 70 136 110 136S190 96 190 20" className={styles.alignerEdge} />
          {Array.from({ length: 12 }, (_, i) => {
            const t = (i + 0.5) / 12;
            const a = Math.PI * (1 - t);
            const x = 110 + Math.cos(a) * 80;
            const y = 20 + Math.sin(a) * 104;
            return <rect key={i} x={x - 8} y={y - 8} width="16" height="16" rx="5" className={styles.archTooth} transform={`rotate(${((a * 180) / Math.PI - 90).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`} />;
          })}
          <circle cx="182" cy="64" r="9" className={styles.dot} />
        </svg>
        <span className={styles.dotCallout}>Blue indicator</span>
      </div>
      <span className={styles.fadeScale}>
        <span className={styles.fadeBar} />
        <span className={styles.fadeLabels}>
          <span>New</span>
          <span>Worn 20 to 22 hours a day</span>
        </span>
      </span>
    </div>
  );
}

/** Why teens like Invisalign: four sticker tiles, each something that's missing */
export function TeenStickers() {
  return (
    <section className={c.section} aria-labelledby="it-why-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            For teens
          </p>
          <h2 id="it-why-title" data-reveal>
            {itWhy.title}
          </h2>
          <p className="lead" data-reveal>
            {itWhy.intro}
          </p>
        </div>
        <ul role="list" className={styles.stickers}>
          {itWhy.items.map((item, i) => (
            <li key={item.lead} className={styles.sticker} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.stickerIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={26} />
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

/** Blue compliance indicators: the fade scale, the copy and the lost-aligner card */
export function ComplianceScale() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="it-indicators-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            For parents
          </p>
          <h2 id="it-indicators-title" data-reveal>
            {itIndicators.title}
          </h2>
          {itIndicators.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.compliance}>
          <div className={styles.scale} aria-hidden="true" data-inview data-reveal>
            <span className={styles.scaleTitle}>A quick look tells you</span>
            <span className={styles.dots}>
              {[1, 0.7, 0.4, 0.12].map((o, i) => (
                <span key={o} className={styles.scaleDot} style={{ "--o": o, "--i": i } as CSSProperties} />
              ))}
            </span>
            <span className={styles.scaleLabels}>
              <span>Fresh set</span>
              <span>Being worn</span>
            </span>
          </div>
          <p className={styles.lost} data-reveal>
            <span className={styles.lostIcon} aria-hidden="true">
              <Icon name="search" size={22} />
            </span>
            <span>{itIndicators.lost}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Sports, music and school: each activity with its aligner lane (out, then back in) */
export function ScheduleLanes() {
  const lanes: Record<string, { out: boolean; note: string }> = {
    "Sports:": { out: true, note: "Mouthguard in for the game" },
    "Music:": { out: true, note: "Out to play, then back" },
    "School:": { out: false, note: "Aligners stay in" },
  };
  return (
    <section className={c.section} aria-labelledby="it-schedule-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            A busy week
          </p>
          <h2 id="it-schedule-title" data-reveal>
            {itSchedule.title}
          </h2>
          <p className="lead" data-reveal>
            {itSchedule.intro}
          </p>
        </div>
        <ul role="list" className={styles.lanes} data-inview>
          {itSchedule.items.map((item, i) => (
            <li key={item.lead} className={styles.lane} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.laneIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
              <span className={styles.laneTrack} aria-hidden="true">
                <span className={styles.laneBar}>
                  <span className={styles.laneIn} />
                  {lanes[item.lead].out ? <span className={styles.laneOut} /> : null}
                  <span className={styles.laneIn} />
                </span>
                <span className={styles.laneNote}>{lanes[item.lead].note}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className={c.note} data-reveal>
          <Icon name="refresh" size={20} />
          <span>{itSchedule.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Your teen's records and plan: the copy and the one-place card */
export function OnePlace() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="it-records-title">
      <div className={`container ${c.split}`}>
        <div className={styles.place} aria-hidden="true" data-reveal>
          <span className={styles.placeTitle}>
            <Icon name="clipboard" size={18} /> Your teen&apos;s plan
          </span>
          <span className={styles.placeRecords}>
            <span>
              <Icon name="camera" size={16} /> Photos
            </span>
            <span>
              <Icon name="xray" size={16} /> X-rays
            </span>
            <span>
              <Icon name="search" size={16} /> Scan or impressions
            </span>
          </span>
          <span className={styles.placeArrow}>
            <Icon name="arrow" size={18} />
          </span>
          <span className={styles.placeMap}>Planning software maps how each tooth will move</span>
          <span className={styles.placeFoot}>
            <Icon name="calendarCheck" size={16} /> Checkups &amp; cleanings continue
          </span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            The plan
          </p>
          <h2 id="it-records-title" data-reveal>
            {itRecords.title}
          </h2>
          {itRecords.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
