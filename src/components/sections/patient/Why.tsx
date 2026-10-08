import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Portrait } from "@/components/ui/Portrait";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import { whyComfort, whyDentists, whyPrecision, whyPrices, whyReviews, whyWeek } from "@/content/pages/patient/why";
import { hours } from "@/content/site";
import styles from "./Why.module.css";

/**
 * Why Choose Us sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the reason arches, the two dentists under one roof, the precision split
 * with Candice's review, the comfort band, the price cards, the week strip and the quote pair.
 * Reviews are plain text (no Review markup).
 */

const reasons: { icon: IconName; title: string; tone: string }[] = [
  { icon: "graduation", title: "Two Temple-trained dentists", tone: "navy" },
  { icon: "microscope", title: "Dental microscopes", tone: "sky" },
  { icon: "calendar", title: "Saturday appointments", tone: "white" },
  { icon: "badgeDollar", title: "A clear price first", tone: "pearl" },
];

/** Hero visual: the four reasons from the intro as arched tiles (decorative) */
export function ReasonArches() {
  return (
    <ul role="list" className={styles.arches} aria-hidden="true">
      {reasons.map((reason, i) => (
        <li key={reason.title} className={`${styles.arch} ${styles[`arch-${reason.tone}`]}`} style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
          <span className={styles.archIcon}>
            <Icon name={reason.icon} size={26} />
          </span>
          <span className={styles.archTitle}>{reason.title}</span>
        </li>
      ))}
    </ul>
  );
}

/** Two dentists under one roof: both portraits inside one arch */
export function UnderOneRoof() {
  return (
    <section className={styles.roofSection} aria-labelledby="why-dentists-title">
      <div className="container">
        <div className={styles.roofHead}>
          <p className="label" data-reveal>
            Your dentists
          </p>
          <h2 id="why-dentists-title" data-reveal>
            {whyDentists.title}
          </h2>
          <p className="lead" data-reveal>
            {whyDentists.intro}
          </p>
        </div>
        <div className={styles.roof} data-reveal>
          <ul role="list" className={styles.doctors}>
            {whyDentists.doctors.map((doctor) => (
              <li key={doctor.key} className={styles.doctor}>
                <Portrait image={images[doctor.image]} sizes="(max-width: 767px) 60vw, 240px" ratio="4 / 5" className={styles.doctorPhoto} />
                <p>
                  <SiteLink href={doctor.href} className={styles.doctorName}>
                    {doctor.name}
                  </SiteLink>{" "}
                  {doctor.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.roofFoot} data-reveal>
          <p>
            <Icon name="shield" size={20} />
            <span>{whyDentists.after}</span>
          </p>
          <SiteLink href={whyDentists.link.href} className="text-link">
            {whyDentists.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}

/** Precision: the microscope photo, the copy and Candice's review */
export function Precision() {
  const { quote } = whyPrecision;
  return (
    <section className={styles.precision} aria-labelledby="why-precision-title">
      <div className={`container ${styles.precisionGrid}`}>
        <div className={styles.precisionMedia}>
          <MediaFrame image={images.techMicroscope} ratio="4 / 5" sizes="(max-width: 991px) 80vw, 40vw" arch reveal="scroll" />
        </div>
        <div className={styles.precisionCopy}>
          <p className="label" data-reveal>
            Precision
          </p>
          <h2 id="why-precision-title" data-reveal>
            {whyPrecision.title}
          </h2>
          <p data-reveal>{whyPrecision.text}</p>
          <p className={styles.quoteIntro} data-reveal>
            {whyPrecision.quoteIntro}
          </p>
          <figure className={styles.bigQuote} data-reveal>
            <blockquote>
              <p>&ldquo;{quote.text}&rdquo;</p>
            </blockquote>
            <figcaption>
              <span className={styles.avatar} aria-hidden="true">
                {quote.author.charAt(0)}
              </span>
              <span>
                <strong>{quote.author}</strong>, {quote.date}
              </span>
            </figcaption>
          </figure>
          <div data-reveal>
            <SiteLink href={whyPrecision.link.href} className="text-link">
              {whyPrecision.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Comfort at every visit: a soft blush band */
export function ComfortBand() {
  return (
    <section className={styles.comfort} aria-labelledby="why-comfort-title">
      <div className="container">
        <div className={styles.comfortBand} data-reveal>
          <span className={styles.comfortIcon} aria-hidden="true">
            <Icon name="headphones" size={32} />
          </span>
          <div className={styles.comfortCopy}>
            <h2 id="why-comfort-title">{whyComfort.title}</h2>
            <p>{whyComfort.text}</p>
            <SiteLink href={whyComfort.link.href} className="text-link">
              {whyComfort.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Clear prices: three cards */
export function Prices() {
  return (
    <section className={styles.prices} aria-labelledby="why-prices-title">
      <div className="container">
        <div className={styles.pricesHead}>
          <div>
            <h2 id="why-prices-title" data-reveal>
              {whyPrices.title}
            </h2>
            <p className="lead" data-reveal>
              {whyPrices.intro}
            </p>
          </div>
          <div data-reveal>
            <SiteLink href={whyPrices.link.href} className="text-link">
              {whyPrices.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <ul role="list" className={styles.priceCards}>
          {whyPrices.items.map((item) => (
            <li key={item.lead} className={styles.priceCard} data-reveal>
              <span className={styles.priceIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
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

/** Appointments that fit your week: the text beside a strip of the seven days */
export function WeekStrip() {
  return (
    <section className={styles.week} aria-labelledby="why-week-title">
      <div className={`container ${styles.weekGrid}`}>
        <div className={styles.weekCopy}>
          <h2 id="why-week-title" data-reveal>
            {whyWeek.title}
          </h2>
          <p data-reveal>{whyWeek.text}</p>
        </div>
        <ul role="list" className={styles.strip} aria-hidden="true" data-reveal>
          {hours.map((day) => (
            <li
              key={day.day}
              className={[styles.stripDay, day.opens ? null : styles.stripOff, day.day === "Saturday" ? styles.stripSat : null, day.closes === "18:00" ? styles.stripLate : null]
                .filter(Boolean)
                .join(" ")}
            >
              <span className={styles.stripName}>{day.short}</span>
              <span className={styles.stripMark}>
                <Icon name={day.opens ? "check" : "close"} size={16} strokeWidth={2.4} />
              </span>
              <span className={styles.stripNote}>{day.opens ? (day.closes === "18:00" ? "to 6 pm" : day.day === "Saturday" ? "8–2" : "Open") : "Closed"}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** What our patients say: the two quotes */
export function PatientQuotes() {
  return (
    <section className={styles.quotes} aria-labelledby="why-reviews-title">
      <div className="container">
        <div className={styles.quotesHead}>
          <h2 id="why-reviews-title" data-reveal>
            {whyReviews.title}
          </h2>
          <div data-reveal>
            <SiteLink href={whyReviews.link.href} className="text-link" data-track="click_reviews">
              {whyReviews.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <div className={styles.quoteRow}>
          {whyReviews.quotes.map((quote, i) => (
            <figure key={quote.author} className={i === 0 ? `${styles.quote} ${styles.quoteWide}` : styles.quote} data-reveal>
              <blockquote>
                <p>&ldquo;{quote.text}&rdquo;</p>
              </blockquote>
              <figcaption>
                <span className={styles.avatar} aria-hidden="true">
                  {quote.author.charAt(0)}
                </span>
                <span>
                  <strong>{quote.author}</strong>, {quote.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
