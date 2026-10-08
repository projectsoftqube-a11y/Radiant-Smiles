import type { Metadata } from "next";
import { ToothMark } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { practice } from "@/content/site";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${practice.name}` },
  robots: { index: false, follow: true },
};

/** A real 404 (status 404, noindex) with a way back home and the phone number. */
export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <ToothMark className={styles.mark} />
        <p className="label">Error 404</p>
        <h1 className={styles.title}>We Couldn&rsquo;t Find That Page</h1>
        <p className="lead">The page may have moved. Head back to the home page, or call us and we&rsquo;ll help.</p>
        <div className={styles.ctas}>
          <Button href="/">Back to Home</Button>
          <Button href={practice.phone.href} variant="outline" icon="phone" track="call_click_404">
            Call {practice.phone.display}
          </Button>
        </div>
      </div>
    </section>
  );
}
