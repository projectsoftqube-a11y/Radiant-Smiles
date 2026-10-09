import type { CSSProperties } from "react";
import { ToothMark } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { hipaaCall } from "@/content/pages/legal/hipaa";
import { practice } from "@/content/site";
import { LegalText } from "./Legal";
import styles from "./LegalVisuals.module.css";

/**
 * Hero visuals, one per legal page (decorative: every fact is in the page text), and the
 * HIPAA notice's closing call band.
 */

/** Disclaimer: a website notice sheet with a "general information" stamp */
export function NoticeSheet() {
  const rows: { icon: IconName; text: string }[] = [
    { icon: "book", text: "Information & education only" },
    { icon: "ban", text: "No diagnosis or treatment" },
    { icon: "smile", text: "Results vary" },
  ];
  return (
    <div className={styles.notice} aria-hidden="true">
      <div className={styles.noticeSheet}>
        <span className={styles.noticeHead}>
          <ToothMark className={styles.noticeMark} />
          <span>
            <strong>Website notice</strong>
            <small>{practice.name}</small>
          </span>
        </span>
        <span className={styles.noticeLines}>
          <span />
          <span />
          <span />
        </span>
        <ul role="list" className={styles.noticeRows}>
          {rows.map((row, i) => (
            <li key={row.text} style={{ "--i": i } as CSSProperties}>
              <span>
                <Icon name={row.icon} size={18} />
              </span>
              {row.text}
            </li>
          ))}
        </ul>
      </div>
      <span className={styles.stamp}>
        General information
        <small>Not dental advice</small>
      </span>
    </div>
  );
}

/** Terms of Use: a folder of the five website policies, the terms on top */
export function PolicyFolder() {
  const tabs = ["Terms", "Privacy", "Access", "Notice", "Disclaimer"];
  return (
    <div className={styles.folder} aria-hidden="true">
      <div className={styles.folderTabs}>
        {tabs.map((tab, i) => (
          <span key={tab} className={i === 0 ? styles.tabActive : undefined} style={{ "--i": i } as CSSProperties}>
            {tab}
          </span>
        ))}
      </div>
      <div className={styles.folderBack} />
      <div className={styles.folderSheet}>
        <span className={styles.sheetKicker}>www.radiant-smiles.com</span>
        <strong>Website Terms of Use</strong>
        <span className={styles.sheetLines}>
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className={styles.sheetRow}>
          <Icon name="check" size={16} strokeWidth={2.4} /> Requests, not bookings
        </span>
        <span className={styles.sheetRow}>
          <Icon name="check" size={16} strokeWidth={2.4} /> Pennsylvania law
        </span>
      </div>
      <div className={styles.folderFront} />
    </div>
  );
}

/** Privacy Policy: the appointment form the policy describes, sent over a padlocked page */
export function FormPreview() {
  const fields = [
    { label: "Name", value: "" },
    { label: "Phone", value: "" },
    { label: "Preferred day or time", value: "" },
  ];
  return (
    <div className={styles.browser} aria-hidden="true">
      <span className={styles.browserBar}>
        <Icon name="shield" size={16} />
        <span>radiant-smiles.com</span>
      </span>
      <div className={styles.form}>
        <strong>Request an appointment</strong>
        {fields.map((field, i) => (
          <span key={field.label} className={styles.field} style={{ "--i": i } as CSSProperties}>
            <small>{field.label}</small>
            <span />
          </span>
        ))}
        <span className={`${styles.field} ${styles.message}`} style={{ "--i": 3 } as CSSProperties}>
          <small>Short message</small>
          <span>
            Broken tooth<i />
          </span>
        </span>
        <span className={styles.brief}>
          <Icon name="check" size={14} strokeWidth={2.6} /> Keep it brief
        </span>
      </div>
      <span className={styles.cookie}>
        <Icon name="layers" size={18} />
        <span>
          <strong>Cookies</strong>
          <small>Your browser, your choice</small>
        </span>
        <span className={styles.toggle} />
      </span>
    </div>
  );
}

/** Web Accessibility: Tab moves a visible focus outline through a page; zoom and contrast keys */
export function FocusDemo() {
  return (
    <div className={styles.focus} aria-hidden="true">
      <div className={styles.focusPage}>
        <span className={styles.focusHead}>
          <ToothMark className={styles.focusMark} />
          <span className={styles.focusNav}>
            <span className={styles.f} style={{ "--i": 0 } as CSSProperties}>
              About
            </span>
            <span className={styles.f} style={{ "--i": 1 } as CSSProperties}>
              Services
            </span>
            <span>Contact</span>
          </span>
        </span>
        <span className={styles.focusTitle}>Find our office</span>
        <span className={styles.focusLines}>
          <span />
          <span />
        </span>
        {/* Tab moves the visible focus outline from link to link */}
        <span className={styles.focusButtons}>
          <span className={styles.f} style={{ "--i": 2 } as CSSProperties}>
            Call us
          </span>
          <span className={styles.f} style={{ "--i": 3 } as CSSProperties}>
            Directions
          </span>
        </span>
      </div>
      <div className={styles.keys}>
        <span className={styles.keyWide}>Tab</span>
        <span className={styles.keyWide}>Enter</span>
        <span>Ctrl</span>
        <span>+</span>
        <span>−</span>
      </div>
      <span className={styles.zoom}>
        <span className={styles.zoomSmall}>Aa</span>
        <Icon name="arrow" size={16} />
        <span className={styles.zoomLarge}>Aa</span>
      </span>
    </div>
  );
}

/** HIPAA notice: the notice as a record, sealed with a shield, its four parts ticked */
export function NoticeRecord() {
  const parts = ["Your rights", "Our uses & disclosures", "Your choices", "Our responsibilities"];
  return (
    <div className={styles.record} aria-hidden="true">
      <div className={styles.recordSheet}>
        <span className={styles.recordKicker}>HIPAA</span>
        <strong>Notice of Privacy Practices</strong>
        <small>{practice.name}</small>
        <ul role="list">
          {parts.map((part, i) => (
            <li key={part} style={{ "--i": i } as CSSProperties}>
              <span className={styles.recordTick}>
                <Icon name="check" size={14} strokeWidth={2.6} />
              </span>
              {part}
            </li>
          ))}
        </ul>
        <span className={styles.recordFoot}>
          <span />
          <span />
        </span>
      </div>
      <span className={styles.seal}>
        <Icon name="shield" size={34} />
      </span>
    </div>
  );
}

/** HIPAA [FINAL CTA]: the page's only call to action */
export function HipaaCall() {
  return (
    <div className={styles.call}>
      <span className={styles.callIcon} aria-hidden="true" data-reveal>
        <Icon name="phone" size={24} />
      </span>
      <div className={styles.callCopy}>
        <p className={styles.callText} data-reveal>
          <LegalText text={hipaaCall.text} />
        </p>
        <p className={styles.callNap} data-reveal>
          <LegalText text={hipaaCall.nap} />
        </p>
      </div>
      <div data-reveal>
        <Button href={practice.phone.href} icon="phone" variant="light" track="call_click_hipaa">
          {hipaaCall.button}
        </Button>
      </div>
    </div>
  );
}
