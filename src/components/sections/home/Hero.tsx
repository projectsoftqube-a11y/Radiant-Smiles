import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { RiseWords } from "@/components/ui/RiseWords";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import { homeHero } from "@/content/pages/home";
import { practice } from "@/content/site";
import { HeroSlider, type HeroSlide } from "./HeroSlider";
import styles from "./Hero.module.css";

/**
 * Hero: the H1 rises word by word ("Dentist in Yardley, PA" in the heavy weight) beside an
 * open banner photo. The photo is unframed and runs to the screen's right edge, fading into
 * the blue on its left and at the bottom (client feedback, 14 Oct 2026: "keep the banner
 * photo open, with a fading effect"; it was an arched frame with rays before). Below, five
 * service cards, each a link (client feedback, 15 Oct 2026; plain cards since 26 Nov 2026,
 * when the client dropped the upper-teeth design).
 */
export function Hero() {
  // The banner's photos (homeHero.slides), each with its crop for the wide banner
  const slides = homeHero.slides.flatMap((slide): HeroSlide[] => {
    const photo = images[slide.image];
    if (!photo.src) return [];
    const position = ("position" in slide ? slide.position : undefined) ?? ("position" in photo ? photo.position : undefined) ?? "center";
    return [{ src: photo.src, alt: photo.alt, position }];
  });
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.top}>
      {slides.length ? <HeroSlider slides={slides} className={styles.banner} imageClassName={styles.bannerImg} /> : null}
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

        {/* Holds the banner's space on phones and anchors the Saturday card */}
        <div className={styles.visual}>
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
      </div>

      <div className={styles.rail}>
        <ul role="list" className={`container ${styles.facts}`}>
          {homeHero.facts.map((fact) => (
            <li key={fact.text} className={styles.fact}>
              <SiteLink href={fact.href} className={styles.factLink} data-track="hero_service_click" data-track-service={fact.text}>
                <span className={styles.factIcon} aria-hidden="true">
                  <Icon name={fact.icon as IconName} size={24} strokeWidth={1.7} />
                </span>
                <span className={styles.factText}>{fact.text}</span>
              </SiteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
