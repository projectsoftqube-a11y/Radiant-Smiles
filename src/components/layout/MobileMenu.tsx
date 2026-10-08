"use client";

import { useEffect, useRef } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { mainNav, serviceMenu } from "@/content/navigation";
import { practice } from "@/content/site";
import styles from "./MobileMenu.module.css";

/** Full-screen menu below 1200px: accordions for the menus, calls to action pinned at the end. */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add("menu-open");
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !panelRef.current) return;
      // Keep keyboard focus inside the open menu
      const focusables = panelRef.current.querySelectorAll<HTMLElement>("a, button, summary");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      className={`${styles.panel} ${open ? styles.open : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      data-lenis-prevent
    >
      <div className={styles.head}>
        <Logo className={styles.logo} />
        <button ref={closeRef} type="button" className={styles.close} onClick={onClose}>
          <Icon name="close" size={22} />
          <span className="visually-hidden">Close menu</span>
        </button>
      </div>

      <nav aria-label="Mobile" className={styles.nav}>
        <ul role="list" className={styles.list}>
          {mainNav.map((item) =>
            item.children || item.mega ? (
              <li key={item.label}>
                <details className={styles.group}>
                  <summary className={styles.item}>
                    {item.label}
                    <Icon name="chevron" size={18} className={styles.chevron} />
                  </summary>
                  {item.children ? (
                    <ul role="list" className={styles.sub}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SiteLink href={child.href} className={styles.subLink}>
                            {child.label}
                          </SiteLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className={styles.services}>
                      {serviceMenu.map((group) => (
                        <div key={group.id}>
                          <p className={styles.serviceTitle}>{group.title}</p>
                          <ul role="list" className={styles.sub}>
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <SiteLink href={link.href} className={styles.subLink}>
                                  {link.label}
                                </SiteLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </details>
              </li>
            ) : (
              <li key={item.label}>
                <SiteLink href={item.href} className={styles.item}>
                  {item.label}
                </SiteLink>
              </li>
            ),
          )}
        </ul>
      </nav>

      <div className={styles.foot}>
        <p className={styles.hours}>
          <Icon name="calendar" size={18} />
          <span>
            <strong>Open Saturdays</strong> 8 am – 2 pm · Same-day emergency slots
          </span>
        </p>
        <div className={styles.ctas}>
          <Button href={practice.phone.href} icon="phone" track="call_click_menu">
            Call {practice.phone.display}
          </Button>
          <Button href="/patient-information/scheduling/" variant="outline" track="appointment_click_menu">
            Request an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
