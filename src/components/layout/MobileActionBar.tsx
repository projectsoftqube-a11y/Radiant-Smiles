import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { practice } from "@/content/site";
import styles from "./MobileActionBar.module.css";

/** Phones only: call and appointment actions stay within thumb reach on every page. */
export function MobileActionBar() {
  return (
    <div className={styles.bar} data-mobile-bar>
      <a href={practice.phone.href} className={`${styles.action} ${styles.call}`} data-track="call_click_mobile_bar">
        <Icon name="phone" size={18} />
        <span>Call Us</span>
      </a>
      <SiteLink href="/patient-information/scheduling/" className={styles.action} data-track="appointment_click_mobile_bar">
        <Icon name="calendar" size={18} />
        <span>Book a Visit</span>
      </SiteLink>
    </div>
  );
}
