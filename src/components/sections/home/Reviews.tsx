import { ToothMark } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import { Rays } from "@/components/ui/Rays";
import SiteLink from "@/components/ui/SiteLink";
import { homeReviews } from "@/content/pages/home";
import styles from "./Reviews.module.css";

/**
 * Two real reviews, set editorially (patients' own words, verbatim; first name, last
 * initial and month). The long review is large type whose words fill in from pale to
 * navy as the page scrolls (data-scrub-words); the short one is a bold statement card
 * with light rays and the logo's tooth in line art. No star ratings and no
 * Review/AggregateRating markup (handoff).
 */
export function Reviews() {
  const [featured, ...others] = homeReviews.quotes;
  const words = `“${featured.text}”`.split(" ");

  return (
    <section className={styles.section} aria-labelledby="home-reviews-title">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.titleBlock}>
            <p className="label" data-reveal>
              Patient reviews
            </p>
            <h2 id="home-reviews-title" data-reveal>
              {homeReviews.title}
            </h2>
          </div>
          <ul role="list" className={styles.links} data-reveal>
            {homeReviews.links.map((link) => (
              <li key={link.href}>
                <SiteLink href={link.href} className="text-link">
                  {link.label} <Icon name="arrow" size={16} />
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.stage}>
          <figure className={styles.featured} data-reveal>
            <svg className={styles.quoteMark} viewBox="0 0 64 48" aria-hidden="true">
              <path d="M0 48V28C0 12 8 3 24 0l3 7C18 10 14 15 13 22h12v26H0Zm37 0V28C37 12 45 3 61 0l3 7c-9 3-13 8-14 15h12v26H37Z" />
            </svg>
            <blockquote className={styles.featuredQuote}>
              <p data-scrub-words>
                {words.map((word, i) => (
                  <span key={i} data-word>
                    {word}
                    {i < words.length - 1 ? " " : null}
                  </span>
                ))}
              </p>
            </blockquote>
            <figcaption className={styles.author}>
              <span className={styles.avatar} aria-hidden="true">
                {featured.author.charAt(0)}
              </span>
              <span className={styles.authorText}>
                <strong>{featured.author}</strong>
                <span className="visually-hidden">, </span>
                <span>{featured.date}</span>
              </span>
            </figcaption>
          </figure>

          {others.map((quote) => (
            <figure key={quote.author} className={styles.statement} data-reveal>
              <Rays className={styles.statementRays} count={17} spread={150} inner={0.42} scroll />
              <ToothMark className={styles.statementTooth} />
              <blockquote className={styles.statementQuote}>
                <p>&ldquo;{quote.text}&rdquo;</p>
              </blockquote>
              <figcaption className={styles.author}>
                <span className={`${styles.avatar} ${styles.avatarLight}`} aria-hidden="true">
                  {quote.author.charAt(0)}
                </span>
                <span className={styles.authorText}>
                  <strong>{quote.author}</strong>
                  <span className="visually-hidden">, </span>
                  <span>{quote.date}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
