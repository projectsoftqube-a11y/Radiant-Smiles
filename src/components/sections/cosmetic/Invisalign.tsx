import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { inHow, inLiving, inOffer, inRecords, inTime, inVersus, inWho } from "@/content/pages/cosmetic/invisalign";
import c from "../restorative/Common.module.css";
import styles from "./Invisalign.module.css";

/**
 * Invisalign sections (order and heading levels follow 02 Content.md). Offer wording as on
 * /special-offers/, no net price, no Align badges or tiers (handoff). Designs used on this
 * page only: the deck of aligner sets, the wear rhythm cards, the consultation checklist,
 * the plan stage scrubber, the table with its wear-time note, the year track, the navy offer
 * band, and a day with aligners.
 */

/** Five front teeth from the front; `mess` (0–1) sets how crooked they start (decorative) */
export function ToothRow({ mess, className }: { mess: number; className?: string }) {
  const shifts = [
    { y: 6, r: -8 },
    { y: -4, r: 6 },
    { y: 2, r: -3 },
    { y: -6, r: 9 },
    { y: 5, r: -6 },
  ];
  return (
    <svg viewBox="0 0 150 64" className={className}>
      <path d="M-40 0H190V12C170 12 160 6 150 8S120 14 105 10 80 6 75 8 50 12 45 10 20 6 10 8-30 12-40 12Z" className={styles.rowGum} />
      {shifts.map((s, i) => {
        const x = 10 + i * 27;
        const w = i === 2 ? 28 : 25;
        return (
          <rect
            key={i}
            x={x + (i > 2 ? 3 : 0)}
            y={8 + s.y * mess}
            width={w}
            height={i === 2 ? 46 : 42}
            rx="9"
            className={styles.rowTooth}
            transform={`rotate(${s.r * mess} ${x + w / 2} ${30})`}
          />
        );
      })}
    </svg>
  );
}

/** Hero visual: the deck of aligner sets fanning out, each a little straighter (decorative) */
export function AlignerDeck() {
  const sets = [1, 0.6, 0.25, 0];
  return (
    <div className={styles.deck} aria-hidden="true">
      <div className={styles.deckOffer}>
        <span className={styles.deckOff}>$1,000 off</span>
        <span className={styles.deckReg}>regular $5,800</span>
        <span className={styles.deckFree}>
          <Icon name="check" size={14} strokeWidth={2.6} /> Free consultation &amp; second opinion
        </span>
      </div>
      <div className={styles.cards}>
        {sets.map((mess, i) => (
          <span key={i} className={styles.setCard} style={{ "--i": i } as CSSProperties}>
            <span className={styles.setLabel}>{i === sets.length - 1 ? "Planned result" : `Set ${i + 1}`}</span>
            <ToothRow mess={mess} className={styles.setRow} />
          </span>
        ))}
      </div>
      <span className={styles.deckNote}>
        <Icon name="refresh" size={16} /> A new set about every two weeks
      </span>
    </div>
  );
}

/** One of the three wear-rhythm visuals (decorative) */
function Rhythm({ kind }: { kind: string }) {
  if (kind === "hours") {
    return (
      <span className={styles.day}>
        {Array.from({ length: 24 }, (_, h) => (
          <span key={h} className={[7, 12, 18].includes(h) ? styles.hourOut : undefined} style={{ "--i": h } as CSSProperties} />
        ))}
        <span className={styles.dayKey}>
          <span>In: 20 to 22 hours</span>
          <span className={styles.dayKeyOut}>Out: meals &amp; brushing</span>
        </span>
      </span>
    );
  }
  const days = kind === "sets" ? 14 : 42;
  return (
    <span className={`${styles.cal} ${kind === "visits" ? styles.calWide : ""}`}>
      {Array.from({ length: days }, (_, d) => (
        <span key={d} className={d === days - 1 ? styles.calMark : undefined} style={{ "--i": d } as CSSProperties} />
      ))}
      <span className={styles.calKey}>{kind === "sets" ? "Day 14: new set" : "Week 6: check-up"}</span>
    </span>
  );
}

/** How Invisalign works: the three rhythms of treatment */
export function WearRhythm() {
  return (
    <section className={c.section} aria-labelledby="in-how-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            How it works
          </p>
          <h2 id="in-how-title" data-reveal>
            {inHow.title}
          </h2>
          <p className="lead" data-reveal>
            {inHow.intro}
          </p>
        </div>
        <ul role="list" className={styles.rhythms} data-inview>
          {inHow.items.map((item) => (
            <li key={item.key} className={styles.rhythm} data-reveal>
              <span className={styles.rhythmArt} aria-hidden="true">
                <Rhythm kind={item.key} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={c.note} data-reveal>
          <Icon name="smile" size={20} />
          <span>{inHow.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Who Invisalign is for: the copy and what the consultation checks */
export function WhoInvisalign() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="in-who-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Who it suits
          </p>
          <h2 id="in-who-title" data-reveal>
            {inWho.title}
          </h2>
          {inWho.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.checks} aria-hidden="true" data-reveal>
          <span className={styles.checksTitle}>
            <Icon name="search" size={18} /> At your consultation we look at
          </span>
          {["Your teeth", "Your gums", "Your bite"].map((name, i) => (
            <span key={name} className={styles.checkRow} style={{ "--i": i } as CSSProperties}>
              <span className={styles.checkTick}>
                <Icon name="check" size={14} strokeWidth={2.8} />
              </span>
              {name}
            </span>
          ))}
          <span className={styles.checksFoot}>
            <Icon name="heart" size={16} /> Healthy teeth &amp; gums come first
          </span>
          <span className={styles.adults}>
            <span>Never had braces</span>
            <span>Teeth shifted since</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/** Your records and treatment plan: the records, then the plan scrubbed stage by stage */
export function PlanStages() {
  return (
    <section className={c.section} aria-labelledby="in-records-title">
      <div className={`container ${c.split}`}>
        <div className={styles.stages} aria-hidden="true" data-inview data-reveal>
          <span className={styles.records}>
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
          <span className={styles.screen}>
            <span className={styles.screenRows}>
              <ToothRow mess={1} className={styles.screenBefore} />
              <ToothRow mess={0} className={styles.screenAfter} />
            </span>
            <span className={styles.scrub}>
              <span className={styles.scrubTrack}>
                <span className={styles.scrubKnob} />
              </span>
              <span className={styles.scrubLabels}>
                <span>Today</span>
                <span>Stage by stage</span>
                <span>Planned result</span>
              </span>
            </span>
          </span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Your plan
          </p>
          <h2 id="in-records-title" data-reveal>
            {inRecords.title}
          </h2>
          {inRecords.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Invisalign vs braces: the table, then the trade-off */
export function AlignersVsBraces() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="in-versus-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Compare
          </p>
          <h2 id="in-versus-title" data-reveal>
            {inVersus.title}
          </h2>
          <p className="lead" data-reveal>
            {inVersus.intro}
          </p>
        </div>
        <div data-reveal>
          <DataTable label="Invisalign clear aligners compared with traditional braces" head={inVersus.head} rows={inVersus.rows} highlight={1} className={styles.table} />
        </div>
        <p className={styles.tradeOff} data-reveal>
          <span className={styles.tradeIcon} aria-hidden="true">
            <Icon name="clock" size={22} />
          </span>
          <span>{inVersus.after}</span>
        </p>
      </div>
    </section>
  );
}

/** How long Invisalign takes: the year with its aligner changes and check-ups */
export function YearTrack() {
  return (
    <section className={c.section} aria-labelledby="in-time-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Timeline
          </p>
          <h2 id="in-time-title" data-reveal>
            {inTime.title}
          </h2>
        </div>
        <div className={styles.year} aria-hidden="true" data-inview data-reveal>
          <span className={styles.yearTitle}>About one year, for adults on average</span>
          <span className={styles.yearSets}>
            {Array.from({ length: 26 }, (_, i) => (
              <span key={i} style={{ "--i": i } as CSSProperties} />
            ))}
          </span>
          <span className={styles.yearVisits}>
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i} style={{ left: `${((i + 1) * 6 * 7) / 3.65}%`, "--i": i } as CSSProperties}>
                <Icon name="calendarCheck" size={14} />
              </span>
            ))}
          </span>
          <span className={styles.yearKey}>
            <span className={styles.keySet}>New aligners about every two weeks</span>
            <span className={styles.keyVisit}>Check-up roughly every six weeks</span>
          </span>
        </div>
        <div className={styles.timeCopy}>
          {inTime.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Cost and the current offer: the navy band with the price card and the quote */
export function OfferBand() {
  return (
    <section className={`${c.section} ${styles.offer}`} aria-labelledby="in-offer-title">
      <div className={`container ${styles.offerGrid}`}>
        <div className={styles.priceCard} aria-hidden="true" data-reveal>
          <span className={styles.priceLabel}>Invisalign at our Yardley office</span>
          <span className={styles.priceOff}>
            $1,000 <small>off</small>
          </span>
          <span className={styles.priceReg}>Regular price $5,800</span>
          <span className={styles.priceFree}>
            <span>
              <Icon name="check" size={14} strokeWidth={2.8} /> Consultation: free
            </span>
            <span>
              <Icon name="check" size={14} strokeWidth={2.8} /> Second opinion: free
            </span>
          </span>
        </div>
        <div className={styles.offerCopy}>
          <p className="label label-inverse" data-reveal>
            Current offer
          </p>
          <h2 id="in-offer-title" data-reveal>
            {inOffer.title}
          </h2>
          <p className="lead" data-reveal>
            <Rich text={inOffer.intro} />
          </p>
          <ul role="list" className={styles.offerList}>
            {inOffer.items.map((item) => (
              <li key={item.lead} data-reveal>
                <span className={styles.offerIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={18} />
                </span>
                <p>
                  <strong>{item.lead}</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>
          <p data-reveal>
            <Rich text={inOffer.after} />
          </p>
          <div data-reveal>
            <Button href={inOffer.button.href} variant="light" icon="calendar" long track="appointment_click_in_offer">
              {inOffer.button.label}
            </Button>
          </div>
          <figure className={styles.quote} data-reveal>
            <blockquote>
              <p>&ldquo;{inOffer.quote.text}&rdquo;</p>
            </blockquote>{" "}
            <figcaption>({inOffer.quote.author})</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/** Living with clear aligners: four moments of the day */
export function AlignerDay() {
  const status: Record<string, string> = {
    "Meals:": "Out, then brush, then back in",
    "Sports:": "Out, mouthguard in",
    "Special occasions:": "Out, then back in",
    "Cleaning:": "Rinse & clean",
  };
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="in-living-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Daily life
          </p>
          <h2 id="in-living-title" data-reveal>
            {inLiving.title}
          </h2>
          <p className="lead" data-reveal>
            {inLiving.intro}
          </p>
        </div>
        <ul role="list" className={styles.moments}>
          {inLiving.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.momentTop} aria-hidden="true">
                <span className={styles.momentIcon}>
                  <Icon name={item.icon as IconName} size={22} />
                </span>
                <span className={styles.momentStatus}>{status[item.lead]}</span>
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
