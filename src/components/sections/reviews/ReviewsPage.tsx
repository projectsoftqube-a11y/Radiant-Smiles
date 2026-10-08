import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import {
  googleReviewUrl,
  reviewsLeave,
  reviewsNewPatients,
  reviewsRecent,
  reviewsWhy,
  type PatientReview,
} from "@/content/pages/reviews";
import styles from "./ReviewsPage.module.css";

/**
 * Patient Reviews sections (order and heading levels follow 02 Content.md). Designs used
 * on this page only: the review deck, the review wall with a sticky "why reviews help" card, the three
 * review steps and the new-patient banner. Reviews are plain HTML (blockquote, name,
 * stars, month): no Review or AggregateRating markup.
 */

function Stars({ count }: { count: number }) {
  return (
    <span className={styles.stars} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" style={{ animationDelay: `${0.25 + i * 0.08}s` }}>
          <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3-4.6-4.4 6.3-.9L12 2.8Z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * One review. The byline reads, for screen readers and the wording check, exactly as the
 * content file writes it ("Candice C., 5 stars, September 2026 · Treatment: dental
 * crowns"); on screen the stars sit above the quote and the treatment is a chip.
 */
function ReviewCard({ review, featured = false }: { review: PatientReview; featured?: boolean }) {
  return (
    <figure className={featured ? `${styles.review} ${styles.featured}` : styles.review} data-reveal>
      <Stars count={review.stars} />
      <blockquote className={styles.quote}>
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
      <figcaption className={styles.byline}>
        <span className={styles.avatar} aria-hidden="true">
          {review.author.charAt(0)}
        </span>
        <span className={styles.who}>
          <strong>{review.author}</strong>
          <span className="visually-hidden">, {review.stars} stars, </span>
          <span className={styles.date}>{review.date}</span>
        </span>
        {review.treatment ? (
          <span className={styles.treatment}>
            <span className="visually-hidden"> · </span>
            Treatment: {review.treatment}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

/**
 * Hero visual: the three reviews as a fanned deck of cards, each with its stars, a few
 * words from the review and the reviewer (decorative; the full reviews are below).
 */
export function ReviewDeck() {
  const cards = [
    { words: "Look amazing.", author: "Candice C.", tone: styles.deckNavy },
    { words: "Excellent service and proper treatment", author: "Avni D.", tone: styles.deckWhite },
    { words: "Quality care", author: "Bob M.", tone: styles.deckSky },
  ];
  return (
    <div className={styles.deck} aria-hidden="true">
      {cards.map((card, i) => (
        <span key={card.author} className={`${styles.deckCard} ${card.tone}`} style={{ "--i": i } as CSSProperties}>
          <Stars count={5} />
          <span className={styles.deckWords}>&ldquo;{card.words}&rdquo;</span>
          <span className={styles.deckAuthor}>
            <span className={styles.deckAvatar}>{card.author.charAt(0)}</span>
            {card.author}
          </span>
        </span>
      ))}
    </div>
  );
}

/** Recent reviews: the wall on the left, "why reviews help" (H3) sticky on the right */
export function RecentReviews() {
  const [first, ...rest] = reviewsRecent.reviews;
  return (
    <section className={styles.recent} aria-labelledby="reviews-recent-title">
      <div className="container">
        <div className={styles.recentHead}>
          <p className="label" data-reveal>
            In their words
          </p>
          <h2 id="reviews-recent-title" data-reveal>
            {reviewsRecent.title}
          </h2>
        </div>
        <div className={styles.recentGrid}>
          <div className={styles.wall}>
            <ReviewCard review={first} featured />
            <div className={styles.pairRow}>
              {rest.map((review) => (
                <ReviewCard key={review.author} review={review} />
              ))}
            </div>
          </div>
          <aside className={styles.why} data-reveal>
            <span className={styles.whyIcon} aria-hidden="true">
              <Icon name="chat" size={26} />
            </span>
            <h3>{reviewsWhy.title}</h3>
            <p>{reviewsWhy.text}</p>
            <SiteLink href={reviewsWhy.link.href} className={`text-link ${styles.whyLink}`}>
              {reviewsWhy.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </aside>
        </div>
      </div>
    </section>
  );
}

/** Leave a review: three steps joined by a line, then the privacy note */
export function LeaveReview() {
  return (
    <section className={styles.leave} aria-labelledby="reviews-leave-title">
      <div className="container">
        <div className={styles.leaveHead}>
          <p className="label" data-reveal>
            Your turn
          </p>
          <h2 id="reviews-leave-title" data-reveal>
            {reviewsLeave.title}
          </h2>
          <p className="lead" data-reveal>
            {reviewsLeave.intro}
          </p>
        </div>
        <div className={styles.stepsWrap} data-grow>
          <span className={styles.stepsLine} aria-hidden="true">
            <span data-grow-item />
          </span>
          <ol className={styles.steps}>
          {reviewsLeave.steps.map((step) => (
            <li key={step.text} className={styles.step} data-reveal>
              <span className={styles.stepIcon} aria-hidden="true">
                <Icon name={step.icon as IconName} size={26} />
              </span>
              <p>{step.text}</p>
              {/* Shown once the practice supplies its Google review link */}
              {"button" in step && googleReviewUrl ? (
                <Button href={googleReviewUrl} variant="sky" iconEnd="arrowUpRight" track="review_click" external>
                  {step.button}
                </Button>
              ) : null}
            </li>
          ))}
          </ol>
        </div>
        <p className={styles.note} data-reveal>
          <Icon name="shield" size={20} />
          <span>{reviewsLeave.note}</span>
        </p>
      </div>
    </section>
  );
}

/** New patients welcome: a banner with the $89 figure */
export function NewPatientsBanner() {
  return (
    <section className={styles.welcome} aria-labelledby="reviews-welcome-title">
      <div className="container">
        <div className={styles.banner} data-reveal>
          <span className={styles.bannerFigure} aria-hidden="true">
            $89
            <small>first visit</small>
          </span>
          <div className={styles.bannerCopy}>
            <h2 id="reviews-welcome-title">{reviewsNewPatients.title}</h2>
            <p>{reviewsNewPatients.text}</p>
            <div className={styles.bannerLinks}>
              {reviewsNewPatients.links.map((link) => (
                <SiteLink key={link.href} href={link.href} className="text-link">
                  {link.label} <Icon name="arrow" size={16} />
                </SiteLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
