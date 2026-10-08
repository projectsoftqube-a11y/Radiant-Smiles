import { Icon } from "@/components/ui/Icon";
import { Rays } from "@/components/ui/Rays";
import SiteLink from "@/components/ui/SiteLink";
import { homeTechnology } from "@/content/pages/home";
import { TechViewfinder } from "./TechViewfinder";
import styles from "./Technology.module.css";

/**
 * The page's one deep-navy band: a microscope viewfinder with the six technologies as a
 * list beside it (focus pull on each change, auto-advance), then the
 * materials note and Candice C.'s crown review under the lead-in "What that looks like
 * in practice:" (plain text, no Review markup, quote verbatim including typos).
 */
export function Technology() {
  const { quote } = homeTechnology;
  return (
    <section className={styles.section} aria-labelledby="home-tech-title">
      <Rays className={styles.rays} scroll count={19} spread={160} />
      <div className="container">
        <div className={styles.head}>
          <p className="label label-inverse" data-reveal>
            Technology
          </p>
          <h2 id="home-tech-title" className={styles.title} data-reveal>
            {homeTechnology.title}
          </h2>
          <p className={`lead ${styles.intro}`} data-reveal>
            {homeTechnology.intro}
          </p>
        </div>

        <TechViewfinder />

        <div className={styles.foot}>
          <div className={styles.materials} data-reveal>
            <p>{homeTechnology.materials}</p>
            <SiteLink href={homeTechnology.link.href} className={`text-link ${styles.link}`}>
              {homeTechnology.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
          <figure className={styles.quote} data-reveal>
            <p className={styles.quoteLead}>{homeTechnology.quoteLead}</p>
            <blockquote>
              <p>&ldquo;{quote.text}&rdquo;</p>
            </blockquote>
            <figcaption>
              <strong>{quote.author}</strong>, {quote.date}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
