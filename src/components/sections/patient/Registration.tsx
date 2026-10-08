import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { regGetting, regPrivacy, regSections } from "@/content/pages/patient/registration";
import styles from "./Registration.module.css";

/**
 * Patient Registration sections (order and heading levels follow 02 Content.md). Launch
 * version: no online form is embedded (handoff). Designs used on this page only: the
 * clipboard, the forms checklist, the three detail cards and the privacy banner.
 */

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** Hero visual: a clipboard whose six sections tick off one by one (decorative) */
export function Clipboard() {
  return (
    <div className={styles.clipboard} aria-hidden="true">
      <span className={styles.clip} />
      <div className={styles.paper}>
        <span className={styles.paperTitle}>Patient forms</span>
        <span className={styles.paperSub}>Radiant Smiles @ Floral Vale</span>
        <ul role="list" className={styles.lines}>
          {regGetting.items.map((item, i) => (
            <li key={item.text} style={{ "--i": i } as CSSProperties}>
              <span className={styles.box}>
                <Icon name="check" size={14} strokeWidth={2.8} />
              </span>
              <span className={styles.line}>{capitalize(item.text.replace(/^Your /, ""))}</span>
            </li>
          ))}
        </ul>
        <span className={styles.sign}>
          <svg viewBox="0 0 160 40" className={styles.signature}>
            <path d="M6 28c12-18 18-20 20-10s-6 16 2 8 16-22 20-12-4 18 6 10 14-16 20-8 2 12 12 6 22-10 40-6" pathLength={1} />
          </svg>
          <span className={styles.signLine} />
        </span>
      </div>
    </div>
  );
}

/** Getting your forms: the text and what the forms ask for */
export function GettingForms() {
  return (
    <section className={styles.getting} aria-labelledby="reg-getting-title">
      <div className={`container ${styles.gettingGrid}`}>
        <div className={styles.gettingCopy}>
          <p className="label" data-reveal>
            Your forms
          </p>
          <h2 id="reg-getting-title" data-reveal>
            {regGetting.title}
          </h2>
          <p className="lead" data-reveal>
            {regGetting.text}
          </p>
        </div>
        <div className={styles.askCard} data-reveal>
          <p className={styles.askIntro}>{regGetting.listIntro}</p>
          <ul role="list" className={styles.askList}>
            {regGetting.items.map((item) => (
              <li key={item.text}>
                <span className={styles.askIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Medical history, insurance details, patients under 18: three cards, each with its H2 */
export function DetailCards() {
  return (
    <div className={styles.details}>
      <div className={`container ${styles.detailGrid}`}>
        {regSections.map((section) => (
          <section key={section.id} id={section.id} className={styles.detail} aria-labelledby={`${section.id}-title`} data-reveal>
            <span className={styles.detailIcon} aria-hidden="true">
              <Icon name={section.icon as IconName} size={26} />
            </span>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <p>
              <Rich text={section.text} />
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

/** Keeping your health information private: a shield banner */
export function PrivacyBanner() {
  return (
    <section className={styles.privacy} aria-labelledby="reg-privacy-title">
      <div className="container">
        <div className={styles.banner} data-reveal>
          <span className={styles.bannerIcon} aria-hidden="true">
            <Icon name="shield" size={32} />
          </span>
          <div className={styles.bannerCopy}>
            <h2 id="reg-privacy-title">{regPrivacy.title}</h2>
            <p>
              <Rich text={regPrivacy.text} />
            </p>
            <SiteLink href={regPrivacy.link.href} className={`text-link ${styles.lightLink}`}>
              {regPrivacy.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
