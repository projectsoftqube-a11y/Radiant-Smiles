import { Logo } from "@/components/layout/Logo";
import { ToothMark } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { footerColumns, legalNav, type FooterMenu } from "@/content/navigation";
import { hours, practice } from "@/content/site";
import styles from "./SiteFooter.module.css";

function LinkList({ links }: { links: FooterMenu["links"] }) {
  return (
    <ul role="list" className={styles.links}>
      {links.map((link) => (
        <li key={link.href}>
          <SiteLink href={link.href} className={styles.link}>
            <span>{link.label}</span>
            <Icon name="arrow" size={16} strokeWidth={2} className={styles.linkArrow} />
          </SiteLink>
        </li>
      ))}
    </ul>
  );
}

/**
 * Light footer (the user turned down a dark footer on the sister site): all practice
 * details on the left (logo, NAP, phone, directions, hours); on the right three columns of
 * two stacked menus each (user feedback, 7 Oct 2026). NAP comes from site.ts. Menu titles
 * are not headings.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ToothMark className={styles.watermark} />

      <div className={`container ${styles.top}`}>
        <div className={styles.brand} data-reveal>
          <Logo className={styles.logo} />
          <p className={styles.tagline}>{practice.tagline}</p>
          <address className={styles.nap}>
            <span className={styles.napName}>{practice.name}</span>
            <span>{practice.address.street}</span>
            <span>
              {practice.address.city}, {practice.address.region} {practice.address.postalCode}
            </span>
          </address>
          <a href={practice.phone.href} className={styles.phone} data-track="call_click_footer">
            <span className={styles.phoneIcon}>
              <Icon name="phone" size={20} />
            </span>
            {practice.phone.display}
          </a>
          <a href={practice.directionsUrl} className="text-link" target="_blank" rel="noopener noreferrer" data-track="directions_click_footer">
            Get Directions <Icon name="arrowUpRight" size={16} />
            <span className="visually-hidden"> (opens Google Maps in a new tab)</span>
          </a>

          <div className={styles.hours}>
            <p className={styles.hoursTitle}>Office Hours</p>
            <dl className={styles.hoursList}>
              {hours.map((day) => (
                <div key={day.day} className={day.day === "Saturday" ? styles.saturday : undefined}>
                  <dt>{day.day}</dt>
                  <dd>{day.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className={styles.menus}>
          {footerColumns.map((column, c) => (
            <div key={c} className={styles.column}>
              {column.map((menu) => (
                <nav key={menu.title} className={styles.menu} aria-label={`Footer: ${menu.title}`} data-reveal>
                  <p className={styles.menuTitle}>{menu.title}</p>
                  <LinkList links={menu.links} />
                </nav>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.base}>
        <div className={`container ${styles.baseInner}`}>
          <p data-reveal>
            © {year} {practice.name}. All rights reserved.
          </p>
          <ul role="list" className={styles.legal} data-reveal>
            {legalNav.map((link) => (
              <li key={link.href}>
                <SiteLink href={link.href} className={styles.legalLink}>
                  {link.label}
                </SiteLink>
              </li>
            ))}
          </ul>
          <p className={styles.credit} data-reveal>
            Design &amp; Developed By{" "}
            <a href="https://softqubes.com/" target="_blank" rel="noopener">
              Softqube Technologies LLC<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
