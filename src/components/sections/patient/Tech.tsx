import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import { techFacts, techSections } from "@/content/pages/patient/care";
import styles from "./Tech.module.css";

/**
 * Advanced Technology sections (order and heading levels follow 02 Content.md). Designs
 * used on this page only: the 3D scan card, the equipment jump list (the quick facts strip)
 * and the alternating equipment chapters. Photos are generic stock and are never presented
 * as this office's own equipment (alt text describes the scene only).
 */

/** Hero visual: a 3D scan card, a tooth on a grid with a scan line sweeping over it */
export function ScanCard() {
  return (
    <div className={styles.scan} aria-hidden="true">
      <div className={styles.scanScreen}>
        <svg viewBox="0 0 120 150" className={styles.scanTooth}>
          <path d="M60 14c-9-6-22-9-33-6C14 12 8 25 10 39c2 13 9 21 11 34 2 18 2 44 12 60 5 8 13 6 15-3 3-13 2-30 12-30s9 17 12 30c2 9 10 11 15 3 10-16 10-42 12-60 2-13 9-21 11-34 2-14-4-27-17-31-11-3-24 0-33 6Z" />
          <path className={styles.scanRoot} d="M33 133c-4-20-6-40 6-58M87 133c4-20 6-40-6-58" />
        </svg>
        <span className={styles.scanLine} />
        <span className={styles.scanTag}>3D · all angles</span>
      </div>
      <div className={styles.scanFoot}>
        <span className={styles.scanTitle}>Cone beam CT</span>
        <span className={styles.scanMeta}>Teeth · jaw bone · roots & nerves</span>
      </div>
    </div>
  );
}

/** Quick facts strip (plain text) as a jump list to each chapter */
export function TechJumpList() {
  return (
    <ul role="list" className={styles.jump}>
      {techFacts.map((fact) => (
        <li key={fact.target}>
          <a href={`#${fact.target}`} className={styles.jumpLink}>
            <span className={styles.jumpIcon} aria-hidden="true">
              <Icon name={fact.icon as IconName} size={18} />
            </span>
            {fact.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** The five equipment chapters, photo and copy alternating sides */
export function TechChapters() {
  return (
    <div className={styles.chapters}>
      {techSections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={i % 2 ? `${styles.chapter} ${styles.flip}` : styles.chapter}
          aria-labelledby={`${section.id}-title`}
        >
          <div className={`container ${styles.chapterGrid}`}>
            <div className={styles.media}>
              <MediaFrame image={images[section.image]} ratio="5 / 4" sizes="(max-width: 991px) 92vw, 45vw" reveal="scroll" className={styles.photo} />
            </div>
            <div className={styles.copy}>
              <h2 id={`${section.id}-title`} data-reveal>
                {section.title}
              </h2>
              {section.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} data-reveal>
                  <Rich text={text} />
                </p>
              ))}
              {section.list ? (
                <div className={styles.listBox} data-reveal>
                  <p className={styles.listIntro}>{section.listIntro}</p>
                  <ul role="list" className={styles.list}>
                    {section.list.map((item) => (
                      <li key={item.slice(0, 24)}>
                        <Icon name="check" size={16} strokeWidth={2.4} />
                        <span>
                          <Rich text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {section.sub ? (
                <div className={styles.sub} data-reveal>
                  <h3>{section.sub.title}</h3>
                  <p>{section.sub.text}</p>
                </div>
              ) : null}
              {section.link ? (
                <div data-reveal>
                  <SiteLink href={section.link.href} className="text-link">
                    {section.link.label} <Icon name="arrow" size={16} />
                  </SiteLink>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
