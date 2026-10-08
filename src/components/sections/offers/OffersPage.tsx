import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import {
  offersDiscounts,
  offersNewPatient,
  offersNoInsurance,
  offersStrip,
  offersTerms,
} from "@/content/pages/offers";
import { offers, practice } from "@/content/site";
import styles from "./OffersPage.module.css";

/**
 * Special Offers sections (order and heading levels follow 02 Content.md). Designs used
 * on this page only: the offer board, the $89 visit card, the savings rows (a bar shows
 * the discount against the regular price), the no-insurance options and the terms slip.
 * Prices exactly as written; no expiry dates, countdowns or "limited time" labels.
 */

const stripIcons: Record<string, IconName> = {
  "new-patient": "toothClean",
  implants: "implant",
  invisalign: "aligner",
  whitening: "whiten",
};

/**
 * Hero visual: the offer summary strip as a board of tiles (plain text, handoff). The
 * $89 visit is the large navy tile; each tile jumps to its offer below.
 */
export function OfferBoard() {
  return (
    <ul role="list" className={styles.board}>
      {offersStrip.map((item, i) => (
        <li key={item.target} className={i === 0 ? `${styles.boardItem} ${styles.boardMain}` : styles.boardItem} style={{ "--i": i } as CSSProperties}>
          <a href={`#${item.target}`} className={styles.boardLink}>
            <span className={styles.boardIcon} aria-hidden="true">
              <Icon name={stripIcons[item.target]} size={22} />
            </span>
            <span className={styles.boardFigure}>{item.figure}</span>{" "}
            <span className={styles.boardText}>{item.text}</span>
            {i === 0 ? (
              <span className={styles.boardIncludes} aria-hidden="true">
                Cleaning · X-rays · Exam
              </span>
            ) : null}
            <span className={styles.boardArrow} aria-hidden="true">
              <Icon name="arrow" size={18} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Icons for the three parts of the $89 visit, in content order */
const includeIcons: IconName[] = ["toothClean", "xray", "search"];

/**
 * $89 new patient special: the copy on the left; on the right a navy visit card with the
 * price, what's included (the real list) and the call button. The review closes the copy.
 */
export function NewPatientSpecial() {
  const offer = offersNewPatient;
  return (
    <section id={offer.id} className={styles.special} aria-labelledby="offers-new-patient-title">
      <div className={`container ${styles.specialGrid}`}>
        <div className={styles.specialHead}>
          <p className="label" data-reveal>
            New patients
          </p>
          <h2 id="offers-new-patient-title" data-reveal>
            {offer.title}
          </h2>
          <p className="lead" data-reveal>
            {offer.intro}
          </p>
        </div>

        <div className={styles.visitCard} data-reveal>
          <div className={styles.visitTop}>
            <span className={styles.visitLabel} aria-hidden="true">
              New patient visit
            </span>
            <span className={styles.visitPrice} aria-hidden="true">
              $<span data-count={offers.newPatient.price}>{offers.newPatient.price}</span>
            </span>
          </div>
          <ul role="list" className={styles.includes}>
            {offer.items.map((item, i) => (
              <li key={item}>
                <span className={styles.includeIcon} aria-hidden="true">
                  <Icon name={includeIcons[i]} size={22} />
                </span>
                <span>{item}</span>
                <span className={styles.tick} aria-hidden="true">
                  <Icon name="check" size={16} strokeWidth={2.4} />
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.visitActions}>
            <Button
              href={practice.phone.href}
              icon="phone"
              variant="light"
              track="offer_click,call_click_offers_new_patient"
              trackData={{ offer: "new_patient" }}
              className={styles.longCta}
            >
              {offer.button}
            </Button>
            <SiteLink href={offer.link.href} className={`text-link ${styles.visitLink}`}>
              {offer.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>

        <p className={styles.specialAfter} data-reveal>
          {offer.after}
        </p>

        <figure className={styles.quote} data-reveal>
          <span className={styles.quoteStars} aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Icon key={i} name="star" size={16} />
            ))}
          </span>
          <blockquote>
            <p>&ldquo;{offer.quote.text}&rdquo;</p>
          </blockquote>
          <figcaption>
            <strong>{offer.quote.author}</strong>, {offer.quote.date}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const discountIcons: Record<string, IconName> = { implants: "implant", invisalign: "aligner", whitening: "whiten" };
const money = (n: number) => `$${n.toLocaleString("en-US")}`;

/**
 * Implants, Invisalign and whitening as savings rows: the offer on the left; on the right
 * the saving counts up and a bar shows it against the regular price (decorative; the text
 * gives both figures). No sale price is computed or shown.
 */
export function DiscountOffers() {
  return (
    <div className={styles.discounts}>
      <div className={`container ${styles.discountList}`}>
        {offersDiscounts.map((offer) => {
          const { discount, regular } = offers[offer.id];
          return (
            <section key={offer.id} id={offer.id} className={styles.discount} aria-labelledby={`offers-${offer.id}-title`} data-reveal>
              <div className={styles.discountBody}>
                <span className={styles.discountIcon} aria-hidden="true">
                  <Icon name={discountIcons[offer.id]} size={26} />
                </span>
                <h2 id={`offers-${offer.id}-title`}>{offer.title}</h2>
                <p>{offer.text}</p>
                <div className={styles.discountActions}>
                  {offer.button ? (
                    <Button
                      href={offer.button.href}
                      variant="outline"
                      track="offer_click"
                      trackData={{ offer: offer.button.offer }}
                      className={styles.longCta}
                    >
                      {offer.button.label}
                    </Button>
                  ) : null}
                  {offer.links.map((link) => (
                    <SiteLink key={link.href} href={link.href} className="text-link">
                      {link.label} <Icon name="arrow" size={16} />
                    </SiteLink>
                  ))}
                </div>
              </div>
              <div className={styles.saving} aria-hidden="true">
                <span className={styles.savingLabel}>You save</span>
                <span className={styles.savingFigure}>
                  $<span data-count={discount}>{discount.toLocaleString("en-US")}</span>
                </span>
                <span className={styles.savingBar} data-grow style={{ "--share": discount / regular } as CSSProperties}>
                  <span className={styles.savingCut} data-grow-item />
                </span>
                <span className={styles.savingScale}>
                  <span>Regular {money(regular)}</span>
                  <span>{money(discount)} off</span>
                </span>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

/** Without insurance: the intro, then membership, CareCredit and insurance as three H3 cards */
export function NoInsurance() {
  return (
    <section className={styles.noInsurance} aria-labelledby="offers-no-insurance-title">
      <div className="container">
        <div className={styles.noInsuranceHead}>
          <div>
            <p className="label" data-reveal>
              No insurance
            </p>
            <h2 id="offers-no-insurance-title" data-reveal>
              {offersNoInsurance.title}
            </h2>
          </div>
          <p className="lead" data-reveal>
            {offersNoInsurance.text}
          </p>
        </div>
        <div className={styles.options}>
          {offersNoInsurance.options.map((option) => (
            <article key={option.title} className={styles.option} data-reveal>
              <span className={styles.optionIcon} aria-hidden="true">
                <Icon name={option.icon as IconName} size={26} />
              </span>
              <h3>{option.title}</h3>
              <p>{option.text}</p>
              {option.link ? (
                <SiteLink href={option.link.href} className="text-link">
                  {option.link.label} <Icon name="arrow" size={16} />
                </SiteLink>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Offer terms: a small-print slip */
export function OfferTerms() {
  return (
    <section className={styles.terms} aria-labelledby="offers-terms-title">
      <div className="container">
        <div className={styles.slip} data-reveal>
          <span className={styles.slipIcon} aria-hidden="true">
            <Icon name="clipboard" size={24} />
          </span>
          <div>
            <h2 id="offers-terms-title">{offersTerms.title}</h2>
            <p>{offersTerms.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
