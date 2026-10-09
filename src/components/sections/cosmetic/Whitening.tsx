import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { twHow, twHurt, twLast, twTrays, twWho } from "@/content/pages/cosmetic/smile";
import c from "../restorative/Common.module.css";
import styles from "./Whitening.module.css";

/**
 * Teeth Whitening sections (order and heading levels follow 02 Content.md). Take-home trays
 * only; no in-office or laser whitening (handoff). Designs used on this page only: the tray
 * and the nights, the timeline with its gaps, the fit comparison, the arch choice with the
 * limits card, the pause control, and the stain culprits.
 */

/* Upper arch seen from above: fourteen teeth along a U */
function archTeeth() {
  return Array.from({ length: 14 }, (_, i) => {
    const t = (i + 0.5) / 14;
    const a = Math.PI * (1 - t);
    const x = 100 + Math.cos(a) * 74;
    const y = 30 + Math.sin(a) * 92;
    const size = i < 3 || i > 10 ? 19 : i < 5 || i > 8 ? 16 : 14;
    return { x, y, size, rot: (a * 180) / Math.PI - 90 };
  });
}

/** Hero visual: the custom tray with gel in each tooth's well, and the nights at home (decorative) */
export function TrayNights() {
  const teeth = archTeeth();
  return (
    <div className={styles.tray} aria-hidden="true">
      <div className={styles.trayTop}>
        <span className={styles.trayTitle}>Your custom trays</span>
        <span className={styles.trayOffer}>
          <strong>$100 off</strong> regular $550
        </span>
      </div>
      <div className={styles.trayArt}>
        <svg viewBox="0 0 200 140" className={styles.traySvg}>
          {/* The clear tray, following the arch */}
          <path d="M26 22A74 92 0 0 0 174 22" className={styles.trayShell} transform="translate(0 8)" />
          {teeth.map((t, i) => (
            <g key={i} transform={`translate(${t.x.toFixed(1)} ${t.y.toFixed(1)}) rotate(${t.rot.toFixed(1)})`}>
              <rect x={-t.size / 2} y={-t.size / 2} width={t.size} height={t.size} rx={t.size / 3} className={styles.archTooth} style={{ "--i": i } as CSSProperties} />
              <circle r={t.size / 5} className={styles.gel} style={{ "--i": i } as CSSProperties} />
            </g>
          ))}
        </svg>
        <span className={styles.ready}>
          <Icon name="clock" size={14} /> Ready in a day or two
        </span>
      </div>
      <div className={styles.nights}>
        <span className={styles.nightsLabel}>
          <Icon name="moon" size={16} /> About 3 to 4 hours a night
        </span>
        <span className={styles.nightRow}>
          {Array.from({ length: 14 }, (_, i) => (
            <span key={i} className={i >= 7 ? styles.nightMaybe : undefined} style={{ "--i": i } as CSSProperties} />
          ))}
        </span>
        <span className={styles.nightScale}>
          <span>Week one</span>
          <span>Week two</span>
        </span>
      </div>
    </div>
  );
}

/** How our take-home whitening works: the four steps on a timeline with the waits between them */
export function WhiteningTimeline() {
  /* The waits after each step, from the copy (trays ready in a day or two; one to two weeks at home) */
  const gaps = ["", "A day or two", "One to two weeks"];
  return (
    <section className={c.section} aria-labelledby="tw-how-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            How it works
          </p>
          <h2 id="tw-how-title" data-reveal>
            {twHow.title}
          </h2>
          <p className="lead" data-reveal>
            {twHow.intro}
          </p>
        </div>
        <ol className={styles.timeline} data-inview>
          {twHow.steps.map((step, i) => (
            <li key={step.lead} className={styles.moment} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.momentNode} aria-hidden="true">
                <Icon name={step.icon as IconName} size={22} />
              </span>
              {gaps[i] ? (
                <span className={styles.gap} aria-hidden="true">
                  {gaps[i]}
                </span>
              ) : null}
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={`${c.note} ${styles.keep}`} data-reveal>
          <Icon name="refresh" size={20} />
          <span>{twHow.after}</span>
        </p>
      </div>
    </section>
  );
}

/** One tooth in its tray, in cross-section: a close fit keeps the gel on the tooth (decorative) */
function FitSection({ loose }: { loose?: boolean }) {
  return (
    <svg viewBox="0 -12 160 162" className={styles.fitSvg}>
      <path d="M60 102C54 78 52 46 58 28C62 16 70 10 80 10S98 16 102 28C108 46 106 78 100 102Z" className={styles.fitTooth} />
      {loose ? (
        <>
          <path d="M42 118C32 74 32 30 48 12C58 0 70 -6 80 -6S102 0 112 12C128 30 128 74 118 118" className={styles.fitTrayLoose} />
          <path d="M57 102C50 78 49 45 55 26C60 13 69 6.5 80 6.5S100 13 105 26C111 45 110 78 103 102" className={styles.fitGel} />
        </>
      ) : (
        <>
          <path d="M54 104C47 78 45 44 52 24C57 10 68 3 80 3S103 10 108 24C115 44 113 78 106 104" className={styles.fitTray} />
          <path d="M57 102C50 78 49 45 55 26C60 13 69 6.5 80 6.5S100 13 105 26C111 45 110 78 103 102" className={styles.fitGel} />
        </>
      )}
      <path d="M0 150V114C20 110 36 101 50 99C57 98 61 100 63 103H97C99 100 103 98 110 99C124 101 140 110 160 114V150Z" className={styles.fitGum} />
      {loose ? (
        <>
          <ellipse cx="44" cy="110" rx="10" ry="4.5" className={styles.leak} />
          <ellipse cx="116" cy="110" rx="10" ry="4.5" className={styles.leak} />
        </>
      ) : null}
    </svg>
  );
}

/** Custom trays vs store-bought kits: the copy and the two fits side by side */
export function TrayFit() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="tw-trays-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            The fit
          </p>
          <h2 id="tw-trays-title" data-reveal>
            {twTrays.title}
          </h2>
          {twTrays.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.fits} aria-hidden="true">
          <span className={`${styles.fit} ${styles.fitGood}`} data-reveal>
            <FitSection />
            <span className={styles.fitName}>
              <Icon name="check" size={16} strokeWidth={2.6} /> Custom tray
            </span>
            <span className={styles.fitNote}>Gel stays on your teeth</span>
          </span>
          <span className={`${styles.fit} ${styles.fitBad}`} data-reveal>
            <FitSection loose />
            <span className={styles.fitName}>
              <Icon name="close" size={16} strokeWidth={2.6} /> One-size kit
            </span>
            <span className={styles.fitNote}>Doesn&apos;t fit anyone exactly</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/** Who is whitening for: upper only or both arches, and the limits */
export function WhoWhitening() {
  return (
    <section className={c.section} aria-labelledby="tw-who-title">
      <div className={`container ${styles.who}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Who it suits
          </p>
          <h2 id="tw-who-title" data-reveal>
            {twWho.title}
          </h2>
          <p data-reveal>{twWho.intro}</p>
          <span className={styles.arches} aria-hidden="true" data-reveal>
            <span className={styles.arch}>
              <svg viewBox="0 0 60 40">
                <path d="M6 6C6 26 18 36 30 36S54 26 54 6" className={styles.archOn} />
                <path d="M6 34C6 14 18 4 30 4S54 14 54 34" className={styles.archOff} />
              </svg>
              Upper only
            </span>
            <span className={styles.arch}>
              <svg viewBox="0 0 60 40">
                <path d="M6 6C6 26 18 36 30 36S54 26 54 6" className={styles.archOn} />
                <path d="M6 34C6 14 18 4 30 4S54 14 54 34" className={styles.archOn} />
              </svg>
              Upper &amp; lower
            </span>
          </span>
        </div>
        <div className={styles.limits}>
          <p className={styles.limitsTitle} data-reveal>
            {twWho.listIntro}
          </p>
          <ul role="list">
            {twWho.items.map((item) => (
              <li key={item.lead} data-reveal>
                <span className={styles.limitIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                <p>
                  <strong>{item.lead}</strong> <Rich text={item.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Does whitening hurt: the copy, and the pause-then-resume control */
export function PaceControl() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="tw-hurt-title">
      <div className={`container ${c.split}`}>
        <div className={styles.pace} aria-hidden="true" data-inview data-reveal>
          <span className={styles.paceTitle}>Your pace</span>
          <span className={styles.paceTrack}>
            {Array.from({ length: 14 }, (_, i) => (
              <span key={i} className={i === 5 || i === 6 ? styles.paceRest : undefined} style={{ "--i": i } as CSSProperties} />
            ))}
          </span>
          <span className={styles.paceKey}>
            <span>
              <Icon name="moon" size={14} /> Tray night
            </span>
            <span className={styles.paceKeyRest}>Short break</span>
          </span>
          <span className={styles.paceButtons}>
            <span className={styles.pauseBtn}>
              <span className={styles.pauseGlyph} /> Pause
            </span>
            <span className={styles.playBtn}>
              <span className={styles.playGlyph} /> Start again
            </span>
          </span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Sensitivity
          </p>
          <h2 id="tw-hurt-title" data-reveal>
            {twHurt.title}
          </h2>
          {twHurt.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Making results last: the usual culprits, a rinse, and three habits */
export function StainCulprits() {
  return (
    <section className={c.section} aria-labelledby="tw-last-title">
      <div className="container">
        <div className={styles.lastHead}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Keep it bright
            </p>
            <h2 id="tw-last-title" data-reveal>
              {twLast.title}
            </h2>
            <p className="lead" data-reveal>
              {twLast.intro}
            </p>
          </div>
          <span className={styles.culprits} aria-hidden="true" data-reveal>
            {["Coffee", "Tea", "Red wine", "Tobacco"].map((name) => (
              <span key={name} className={styles.culprit}>
                {name}
              </span>
            ))}
            <span className={styles.rinse}>
              <Icon name="drop" size={18} /> Then rinse with water
            </span>
          </span>
        </div>
        <ul role="list" className={styles.habits}>
          {twLast.items.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.habitIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <span>
                <Rich text={item.text} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
