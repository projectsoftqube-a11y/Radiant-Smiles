import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Rays } from "@/components/ui/Rays";
import { RiseWords } from "@/components/ui/RiseWords";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import { homeHero } from "@/content/pages/home";
import { practice } from "@/content/site";
import { Jaw } from "./Jaw";
import styles from "./Hero.module.css";

/**
 * Hero: the H1 rises word by word ("Dentist in Yardley, PA" in the heavy weight), light
 * rays draw out behind an arched photo (aligned to the container's right edge), and the
 * quick facts are arch-topped tiles cut through the middle by a smile-shaped line: the top
 * half sits in the hero and the bottom half in the white below, like teeth in an open smile.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`label ${styles.label}`}>{practice.name}</p>
          <h1 id="home-hero-title" className={styles.title}>
            <RiseWords text={homeHero.h1} strong={[0, 1, 2, 3]} />
          </h1>
          <p className={`lead ${styles.intro}`}>{homeHero.intro}</p>
          <div className={styles.ctas}>
            <Button href={practice.phone.href} icon="phone" track="call_click_hero">
              {homeHero.callLabel}
            </Button>
            <Button href={homeHero.appointment.href} variant="outline" track="appointment_click_hero">
              {homeHero.appointment.label}
            </Button>
          </div>
          <SiteLink href={homeHero.newPatient.href} className={`text-link ${styles.newPatient}`}>
            {homeHero.newPatient.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>

        <div className={styles.visual}>
          <Rays className={styles.rays} animate count={25} />
          <MediaFrame
            image={images.homeHero}
            ratio="4 / 5"
            arch
            priority
            reveal="load"
            sizes="(max-width: 991px) 88vw, 40vw"
            quality={85}
            className={styles.photo}
          />
          <p className={styles.badge}>
            <span className={styles.badgeIcon}>
              <Icon name="calendar" size={20} />
            </span>
            <span>
              <strong>Open Saturdays</strong>
              <span>8 am – 2 pm</span>
            </span>
          </p>
        </div>
      </div>

      <div className={styles.rail}>
        <ul role="list" className={`container ${styles.facts}`}>
          {homeHero.facts.map((fact) => (
            <li key={fact.text} className={styles.fact} data-tooth>
              <span className={styles.factIcon}>
                <Icon name={fact.icon as IconName} size={24} strokeWidth={1.7} />
              </span>
              <span className={styles.factText}>{fact.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upper teeth in a pink gum; the Family section below ends with the lower teeth */}
      <Jaw jaw="upper" inside="var(--mouth-edge)" />
    </section>
  );
}
