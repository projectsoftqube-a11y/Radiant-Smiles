import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rays } from "@/components/ui/Rays";
import { homeHero, homeMembership } from "@/content/pages/home";
import { practice } from "@/content/site";
import styles from "./Membership.module.css";

/** Keeps each word whole, so "In-Office" and "X-rays" never break at their hyphens */
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

/** "$75 per visit" → the figure set large and the rest of the same text beside it */
function Price({ text }: { text: string }) {
  const [figure, ...rest] = text.split(" ");
  return (
    <>
      <strong className={styles.figure}>{figure}</strong>
      {rest.length ? <span className={styles.unit}> {rest.join(" ")}</span> : null}
    </>
  );
}

/** A small icon for each member price (decorative) */
const iconFor = (item: string): IconName =>
  item.includes("3rd") ? "calendar" : item.includes("Periodontal") ? "tooth" : item.includes("Emergency") ? "firstAid" : "toothClean";

/**
 * Membership (client, 27 Nov 2026: "redesign it entirely, the best you can make"; the user's
 * reference was a two-tone plan card). A split header (label + H2 left, intro right), then
 * one wide card: on white, the member prices as price-first tiles and the 20% discount as
 * a strip; on a blue panel with the radiant rays, the two yearly fees and the buttons. The
 * plan's terms sit under the card. Every row and term is the site.ts rate card, word for word.
 */
export function Membership() {
  const [first, additional, ...others] = homeMembership.rows;
  const discount = others.find((row) => row.price.endsWith("% off"));
  const memberPrices = others.filter((row) => row !== discount);

  return (
    <section className={styles.section} aria-labelledby="home-membership-title">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headTitle}>
            <p className="label" data-reveal>
              No insurance
            </p>
            <h2 id="home-membership-title" className={styles.title} data-reveal>
              <Words text={homeMembership.title} />
            </h2>
          </div>
          <p className={`lead ${styles.intro}`} data-reveal>
            {homeMembership.intro}
          </p>
        </div>

        <div className={styles.plan}>
          <div className={styles.prices} data-reveal>
            <p className={styles.kicker}>Member prices</p>
            <dl className={styles.tiles}>
              {memberPrices.map((row) => (
                <div key={row.item} className={styles.tile}>
                  <dt>
                    <span className={styles.tileIcon} aria-hidden="true">
                      <Icon name={iconFor(row.item)} size={22} strokeWidth={1.6} />
                    </span>
                    <Words text={row.item} />
                  </dt>
                  <dd>
                    <Price text={row.price} />
                  </dd>
                </div>
              ))}
            </dl>
            {discount ? (
              <dl className={styles.discount}>
                <div className={styles.discountRow}>
                  <dt>
                    <Words text={discount.item} />
                  </dt>
                  <dd>
                    <Price text={discount.price} />
                  </dd>
                </div>
              </dl>
            ) : null}
          </div>

          <div className={styles.side} data-reveal>
            <Rays className={styles.rays} count={19} spread={150} inner={0.3} scroll />
            <p className={styles.sideKicker}>{homeMembership.columns[0]}</p>
            <dl className={styles.fees}>
              {[first, additional].map((row) => (
                <div key={row.item} className={styles.fee}>
                  <dt>{row.item}</dt>
                  <dd>
                    <Price text={row.price} />
                  </dd>
                </div>
              ))}
            </dl>
            <div className={styles.actions}>
              <Button href={practice.phone.href} variant="light" icon="phone" track="call_click_membership">
                {homeHero.callLabel}
              </Button>
              <Button href={homeMembership.link.href} variant="ghost-light" iconEnd="arrow" long>
                {homeMembership.link.label}
              </Button>
            </div>
          </div>
        </div>

        <ul role="list" className={styles.terms} data-reveal>
          {homeMembership.terms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
