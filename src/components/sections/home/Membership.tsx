import { Fragment } from "react";
import { ToothMark } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { homeMembership } from "@/content/pages/home";
import { practice } from "@/content/site";
import { MemberCard } from "./MemberCard";
import styles from "./Membership.module.css";

/** Keeps each word whole, so "X-rays" never breaks at its hyphen on narrow receipts */
function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={i}>
          {i > 0 ? " " : null}
          <span className={styles.word}>{word}</span>
        </Fragment>
      ))}
    </>
  );
}

/**
 * "Pay one fee, get the receipt": a glossy member card sits in a card reader, and as the
 * section scrolls into view the plan table prints out of the reader as a paper receipt
 * (MotionController, data-print). The receipt is the real table, so it is always in the
 * HTML; without motion it is simply shown.
 */
export function Membership() {
  return (
    <section className={styles.section} aria-labelledby="home-membership-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="label" data-reveal>
            No insurance
          </p>
          <h2 id="home-membership-title" data-reveal>
            {homeMembership.title}
          </h2>
          <p className={`lead ${styles.intro}`} data-reveal>
            {homeMembership.intro}
          </p>
          <div data-reveal>
            <SiteLink href={homeMembership.link.href} className="text-link">
              {homeMembership.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>

        <div className={styles.stage} data-reveal>
          <div className={styles.cardSlot}>
            <MemberCard />
          </div>

          {/* The card reader, with the slot the receipt prints from */}
          <div className={styles.reader} aria-hidden="true">
            <span className={styles.readerLight} />
            <span className={styles.readerSlot} />
          </div>

          <div className={styles.paperWell} data-print>
            <div className={styles.paper} data-print-paper>
              <div className={styles.paperHead} aria-hidden="true">
                <ToothMark className={styles.paperMark} />
                <span className={styles.paperName}>{practice.name}</span>
              </div>
              <table className={styles.receipt}>
                <caption className="visually-hidden">{homeMembership.title}</caption>
                <thead>
                  <tr>
                    <th scope="col">{homeMembership.columns[0]}</th>
                    <th scope="col">{homeMembership.columns[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {homeMembership.rows.map((row) => (
                    <tr key={row.item}>
                      <th scope="row">
                        <Words text={row.item} />
                      </th>
                      <td>
                        <Words text={row.price} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <span className={styles.barcode} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
