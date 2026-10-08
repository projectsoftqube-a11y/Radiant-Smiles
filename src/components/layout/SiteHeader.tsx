"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { mainNav, serviceMenu } from "@/content/navigation";
import { offers, practice } from "@/content/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating (state is adjusted while rendering, per React docs)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <p className={styles.topItem}>
            <Icon name="calendar" size={16} />
            <span>
              <strong>Open Saturdays</strong> 8 am – 2 pm
            </span>
          </p>
          <p className={`${styles.topItem} ${styles.topEmergency}`}>
            <Icon name="firstAid" size={16} />
            <span>Same-day emergency slots every business day</span>
          </p>
          <p className={`${styles.topItem} ${styles.topAddress}`}>
            <Icon name="pin" size={16} />
            <span>
              {practice.address.street}, {practice.address.city}, {practice.address.region} {practice.address.postalCode}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <Logo priority className={styles.logo} />

          <nav aria-label="Main" className={styles.nav}>
            <ul role="list" className={styles.navList}>
              {mainNav.map((item) => (
                <li
                  key={item.label}
                  className={[item.children || item.mega ? styles.hasMenu : null, item.mega ? styles.megaItem : null].filter(Boolean).join(" ") || undefined}
                >
                  <SiteLink href={item.href} className={styles.navLink}>
                    {item.label}
                    {item.children || item.mega ? <Icon name="chevron" size={14} className={styles.chevron} /> : null}
                  </SiteLink>

                  {item.children ? (
                    <div className={styles.dropdown}>
                      <ul role="list">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <SiteLink href={child.href} className={styles.dropLink}>
                              <span>{child.label}</span>
                              <Icon name="arrow" size={18} strokeWidth={2} className={styles.dropArrow} />
                            </SiteLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {item.mega ? (
                    <div className={`${styles.dropdown} ${styles.mega}`}>
                      <div className={styles.megaGrid}>
                        {serviceMenu.map((group) => (
                          <div key={group.id} className={styles.megaGroup}>
                            <p className={styles.megaTitle}>{group.title}</p>
                            <ul role="list">
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <SiteLink href={link.href} className={styles.dropLink}>
                                    <span>{link.label}</span>
                                    <Icon name="arrow" size={18} strokeWidth={2} className={styles.dropArrow} />
                                  </SiteLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className={styles.megaPromo}>
                        <p className={styles.megaPromoFigure}>${offers.newPatient.price}</p>
                        <p className={styles.megaPromoText}>New-patient visit for uninsured patients: cleaning, X-rays &amp; exam.</p>
                        <SiteLink href="/special-offers/" className="text-link">
                          See all special offers <Icon name="arrow" size={16} />
                        </SiteLink>
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={practice.phone.href} className={styles.phone} data-track="call_click_header">
              <Icon name="phone" size={18} />
              <span>{practice.phone.display}</span>
            </a>
            <Button href="/patient-information/scheduling/" className={styles.cta} track="appointment_click_header">
              Request an Appointment
            </Button>
            <a href={practice.phone.href} className={styles.callIcon} aria-label={`Call ${practice.phone.display}`} data-track="call_click_header">
              <Icon name="phone" size={20} />
            </a>
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <Icon name="menu" size={22} />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
