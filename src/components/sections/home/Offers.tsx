import { Button } from "@/components/ui/Button";
import { Rich } from "@/components/ui/Rich";
import { homeOffers } from "@/content/pages/home";
import styles from "./Offers.module.css";

/**
 * The offers table, laid out as four tear-off tickets: price and offer on a tinted stub,
 * a dashed tear line, what's included below, and a zigzag bottom edge (user request). Explicit ARIA table roles keep it a real table for
 * screen readers even though CSS lays the rows out as cards.
 * Prices exactly as written; no expiry dates, countdowns or "limited time" labels (handoff).
 */
export function Offers() {
  return (
    <section className={styles.section} aria-labelledby="home-offers-title">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headCopy}>
            <p className="label" data-reveal>
              Specials
            </p>
            <h2 id="home-offers-title" data-reveal>
              {homeOffers.title}
            </h2>
          </div>
          <p className={`lead ${styles.intro}`} data-reveal>
            {homeOffers.intro}
          </p>
        </div>

        <table className={styles.tickets} role="table">
          <caption className="visually-hidden">{homeOffers.title}</caption>
          <thead className="visually-hidden" role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">
                {homeOffers.columns[0]}
              </th>
              <th scope="col" role="columnheader">
                {homeOffers.columns[1]}
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className={styles.body}>
            {homeOffers.rows.map((row, i) => (
              <tr key={row.offer} role="row" className={i === 0 ? `${styles.ticket} ${styles.featured}` : styles.ticket} data-reveal>
                <th scope="row" role="rowheader" className={styles.stub}>
                  <span className={styles.figure} aria-hidden="true">
                    {row.figure}
                    <small>{row.unit}</small>
                  </span>
                  <span className={styles.offer}>{row.offer}</span>
                </th>
                <td role="cell" className={styles.detail}>
                  {row.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.foot} data-reveal>
          <p className={styles.note}>
            <Rich text={homeOffers.note} />
          </p>
          <Button href={homeOffers.button.href} variant="outline" iconEnd="arrow" track="offers_click">
            {homeOffers.button.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
