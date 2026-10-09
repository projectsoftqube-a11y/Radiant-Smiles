import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Portrait } from "@/components/ui/Portrait";
import { Rich } from "@/components/ui/Rich";
import { images } from "@/content/images";
import { trCare, trCost, trWeek } from "@/content/pages/locations/nj";
import c from "../restorative/Common.module.css";
import { SafetyLine } from "./Location";
import styles from "./Trenton.module.css";

/**
 * Trenton, NJ sections (order and heading levels follow 02 Content.md). Prices from the
 * content file, the Avni D. quote as plain text, the 911 line visible, Medicaid only in the
 * FAQ (handoff). Designs used on this page only: the price board with its receipt-style
 * table, the care list beside the safety line, and the week strip with the two dentists.
 */

/** Clear about cost: the published price board (a real table), the quote and the button */
export function PriceBoard() {
  const t = trCost;
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="tr-cost-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Published prices
          </p>
          <h2 id="tr-cost-title" data-reveal>
            {t.title}
          </h2>
          <p className="lead" data-reveal>
            {t.intro}
          </p>
        </div>
        <div className={styles.board}>
          <div className={styles.receipt} data-reveal>
            <table className={styles.table}>
              <caption className="visually-hidden">Prices for patients who pay for themselves</caption>
              <thead>
                <tr>
                  {t.head.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map(([option, price, included]) => (
                  <tr key={option}>
                    <th scope="row">{option}</th>
                    <td className={styles.price} data-label={t.head[1]}>
                      {price}
                    </td>
                    <td data-label={t.head[2]}>{included}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.side}>
            <figure className={styles.quote} data-reveal>
              <blockquote>
                <p>&ldquo;{t.quote.text}&rdquo;</p>
              </blockquote>{" "}
              <figcaption>{t.quote.author}</figcaption>
            </figure>
            <p className={styles.pay} data-reveal>
              <Rich text={t.after} />
            </p>
            <div data-reveal>
              <Button href="/patient-information/scheduling/" icon="calendar" track="appointment_click,appointment_click_tr_cost">
                Request an Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Family, emergency and implant care: four care rows, then the 911 line */
export function CareRows() {
  return (
    <section className={c.section} aria-labelledby="tr-care-title">
      <div className={`container ${styles.care}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Care for Trenton
          </p>
          <h2 id="tr-care-title" data-reveal>
            {trCare.title}
          </h2>
          <p data-reveal>
            <Rich text={trCare.intro} />
          </p>
          <SafetyLine />
        </div>
        <ul role="list" className={styles.rows}>
          {trCare.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.rowIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{item.lead}</strong> <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Saturday mornings and later weekdays: the week strip with the two dentists */
export function WeekStrip() {
  const days = [
    { d: "Mon", on: false },
    { d: "Tue", on: false },
    { d: "Wed", on: true, note: "to 6 pm" },
    { d: "Thu", on: true, note: "to 6 pm" },
    { d: "Fri", on: false },
    { d: "Sat", on: true, note: "8–2" },
    { d: "Sun", on: false, closed: true },
  ];
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="tr-week-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Hours
          </p>
          <h2 id="tr-week-title" data-reveal>
            {trWeek.title}
          </h2>
          <p data-reveal>
            <Rich text={trWeek.text} />
          </p>
        </div>
        <div className={styles.week} aria-hidden="true" data-reveal>
          <span className={styles.days}>
            {days.map((day) => (
              <span key={day.d} className={day.on ? styles.dayOn : day.closed ? styles.dayClosed : undefined}>
                <strong>{day.d}</strong>
                {day.note ? <small>{day.note}</small> : null}
              </span>
            ))}
          </span>
          <span className={styles.duo}>
            <Portrait image={images.drBhalala} ratio="1 / 1" sizes="72px" className={styles.face} />
            <Portrait image={images.drGadria} ratio="1 / 1" sizes="72px" className={styles.face} />
            <span className={styles.duoText}>Two Temple-trained dentists</span>
          </span>
        </div>
      </div>
    </section>
  );
}
