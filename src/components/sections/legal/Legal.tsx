import { Fragment, type ReactNode } from "react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { ToConfirm } from "@/components/ui/ToConfirm";
import type { LegalBlock, LegalPage, LegalSection } from "@/content/pages/legal/common";
import { LegalIndex, PrintButton } from "./LegalTools";
import styles from "./Legal.module.css";

/**
 * The legal document frame shared by the five legal pages (like the hero and FAQ, one frame
 * for one kind of page: the handoffs ask for plain, consistent, print-friendly documents).
 * Each page has its own hero visual. Every section is in the HTML, nothing collapsed.
 */

const CONFIRM = /(\[CONFIRM[^\]]*\])/g;

/** The note inside a "[CONFIRM …]" marker, for the visible staging tag */
function confirmNote(marker: string) {
  const note = marker
    .slice(1, -1)
    .replace(/^CONFIRM\s*:?\s*/, "")
    .trim();
  if (!note) return "Approve or remove this paragraph";
  return note.charAt(0).toUpperCase() + note.slice(1);
}

/** Content-file text: Rich markup, with each "[CONFIRM …]" shown as a To confirm tag */
export function LegalText({ text, newTab }: { text: string; newTab?: boolean }) {
  return (
    <>
      {text
        .split(CONFIRM)
        .filter(Boolean)
        .map((part, i) =>
          part.startsWith("[CONFIRM") ? (
            <ToConfirm key={i} note={confirmNote(part)} />
          ) : (
            <Fragment key={i}>
              <Rich text={part} newTab={newTab} />
            </Fragment>
          ),
        )}
    </>
  );
}

/** Hero: PageHero with the dated line (and any extra actions) under the intro */
export function LegalHero({ page, aside, actions }: { page: LegalPage; aside: ReactNode; actions?: ReactNode }) {
  return (
    <PageHero
      id="legal-title"
      label={page.label}
      content={{ h1: page.hero.h1, intro: page.hero.intro, more: page.hero.more, buttons: [] }}
      crumbs={page.crumbs}
      track="legal"
      aside={aside}
    >
      <p className={styles.dated}>
        <Icon name="calendar" size={18} />
        <span>
          <LegalText text={page.hero.dated} />
        </span>
      </p>
      {actions ? (
        <div className={styles.heroActions} data-print-hide>
          {actions}
        </div>
      ) : null}
    </PageHero>
  );
}

/** "[label](href)" or "[label](href): description" */
function parsePolicy(item: string) {
  const m = item.match(/^\[([^\]]+)\]\(([^)]+)\)(?::\s*(.*))?$/);
  return m ? { label: m[1], href: m[2], text: m[3] } : { label: item, href: "#", text: undefined };
}

const POLICY_ICON: Record<string, IconName> = {
  "/patient-information/terms/": "book",
  "/patient-information/terms/privacy/": "shield",
  "/patient-information/terms/web-accessibility/": "accessible",
  "/disclaimer/": "alert",
  "/hipaa-notice-of-privacy-practices/": "clipboard",
};

function Block({ block, newTab }: { block: LegalBlock; newTab?: boolean }) {
  if ("p" in block) {
    return (
      <p data-reveal>
        <LegalText text={block.p} newTab={newTab} />
      </p>
    );
  }
  if ("confirm" in block) {
    return (
      <p className={styles.confirm} data-reveal>
        <LegalText text={block.confirm} />
      </p>
    );
  }
  if ("h3" in block) {
    return (
      <h3 className={styles.subhead} data-reveal>
        {block.h3}
      </h3>
    );
  }
  if ("ul" in block) {
    return (
      <ul role="list" className={styles.list}>
        {block.ul.map((item) => (
          <li key={item} data-reveal>
            <span className={styles.bullet} aria-hidden="true" />
            <span>
              <LegalText text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }
  if ("cards" in block) {
    // Long items read better as full-width rows than as narrow columns
    const rows = block.cards.some((item) => item.length > 120);
    return (
      <ul role="list" className={`${styles.cards} ${rows ? styles.cardRows : ""}`}>
        {block.cards.map((item, i) => (
          <li key={item} className={styles.card} data-reveal>
            <span className={styles.cardIcon} aria-hidden="true">
              <Icon name={block.icons[i]} size={22} />
            </span>
            <p>
              <LegalText text={item} newTab={newTab} />
            </p>
          </li>
        ))}
      </ul>
    );
  }
  if ("donts" in block) {
    return (
      <ul role="list" className={styles.donts}>
        {block.donts.map((item) => (
          <li key={item} data-reveal>
            <span className={styles.dontIcon} aria-hidden="true">
              <Icon name="ban" size={18} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if ("policies" in block) {
    return (
      <ul role="list" className={styles.policies}>
        {block.policies.map((item) => {
          const policy = parsePolicy(item);
          return (
            <li key={policy.href} className={styles.policy} data-reveal>
              <span className={styles.policyIcon} aria-hidden="true">
                <Icon name={POLICY_ICON[policy.href] ?? "book"} size={22} />
              </span>
              <span className={styles.policyCopy}>
                <SiteLink href={policy.href} className={styles.policyLink}>
                  {policy.label}
                </SiteLink>
                {policy.text ? (
                  <span className={styles.policyText}>
                    {/* The content file's "label: description", read in full by screen readers */}
                    <span className="visually-hidden">: </span>
                    {policy.text}
                  </span>
                ) : null}
              </span>
              <Icon name="arrow" size={18} className={styles.policyArrow} />
            </li>
          );
        })}
      </ul>
    );
  }
  if ("rights" in block) {
    return (
      <div className={styles.rights}>
        {block.rights.map((right) => (
          <div key={right.h3} className={styles.right} data-reveal>
            <span className={styles.rightIcon} aria-hidden="true">
              <Icon name={right.icon} size={22} />
            </span>
            <h3>{right.h3}</h3>
            <p>
              <LegalText text={right.text} />
            </p>
          </div>
        ))}
      </div>
    );
  }
  if ("panel" in block) {
    const allow = block.panel.tone === "allow";
    return (
      <div className={`${styles.panel} ${allow ? styles.panelAllow : styles.panelNever}`} data-reveal>
        <p className={styles.panelTitle}>
          <span className={styles.panelIcon} aria-hidden="true">
            <Icon name={allow ? "check" : "ban"} size={18} strokeWidth={allow ? 2.4 : 1.8} />
          </span>
          <span>
            <LegalText text={block.panel.title} />
          </span>
        </p>
        <ul role="list">
          {block.panel.ul.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  if ("callout" in block) {
    return (
      <div className={`${styles.callout} ${block.tone === "alert" ? styles.calloutAlert : styles.calloutHelp}`} data-reveal>
        <span className={styles.calloutIcon} aria-hidden="true">
          <Icon name={block.icon} size={22} />
        </span>
        <p>
          <LegalText text={block.callout} />
        </p>
      </div>
    );
  }
  return (
    <address className={styles.address} data-reveal>
      {block.address.map((line) => (
        <span key={line}>
          <LegalText text={line} />
        </span>
      ))}
    </address>
  );
}

function Section({ section, newTab }: { section: LegalSection; newTab?: boolean }) {
  const titleId = `${section.id}-title`;
  if (section.contact) {
    return (
      <section id={section.id} className={styles.contact} aria-labelledby={titleId}>
        <span className={styles.contactIcon} aria-hidden="true" data-reveal>
          <Icon name="pin" size={24} />
        </span>
        <div className={styles.contactCopy}>
          <h2 id={titleId} data-reveal>
            {section.h2}
          </h2>
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </section>
    );
  }
  return (
    <section id={section.id} className={styles.part} aria-labelledby={titleId}>
      <div className={styles.partHead}>
        <span className={styles.partIcon} aria-hidden="true" data-reveal>
          <Icon name={section.icon} size={20} />
        </span>
        <h2 id={titleId} data-reveal>
          {section.h2}
        </h2>
      </div>
      <div className={styles.partBody}>
        {section.blocks.map((block, i) => (
          <Block key={i} block={block} newTab={newTab} />
        ))}
      </div>
    </section>
  );
}

/** The document: a sticky index beside the sheet with every section in order */
export function LegalDocument({ page, after, newTab }: { page: LegalPage; after?: ReactNode; newTab?: boolean }) {
  const items = page.sections.map((s) => ({ id: s.id, label: s.h2 }));
  return (
    <section className={styles.doc} aria-label={page.hero.h1}>
      <div className={`container ${styles.docGrid}`}>
        <aside className={styles.aside} data-print-hide>
          <div className={styles.asideInner} data-reveal>
            <LegalIndex items={items} />
            <PrintButton />
          </div>
        </aside>
        <div className={styles.sheet}>
          {page.sections.map((section) => (
            <Section key={section.id} section={section} newTab={newTab} />
          ))}
          {after}
        </div>
      </div>
    </section>
  );
}
