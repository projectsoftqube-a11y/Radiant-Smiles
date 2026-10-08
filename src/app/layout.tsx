import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionController } from "@/components/motion/MotionController";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { TrackClicks } from "@/components/motion/TrackClicks";
import { BrandSprite } from "@/components/ui/Brand";
import { practice, SITE_URL } from "@/content/site";
import { googleSans, raleway } from "@/lib/fonts";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: practice.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Runs before first paint: marks visitors who allow motion, so text that reveals on
 * scroll starts hidden in CSS (no flash before the scripts load). MotionController plays
 * every reveal; if it hasn't started within 4 seconds, everything is simply shown.
 */
const MOTION_FLAG = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches){var d=document.documentElement;d.classList.add("motion");setTimeout(function(){if(!window.__motionReady)d.classList.remove("motion")},4000)}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The motion flag adds a class to <html> before React loads
    <html lang="en-US" className={`${raleway.variable} ${googleSans.variable}`} suppressHydrationWarning>
      {/* Browser extensions add attributes to <body> before React hydrates; this only
          silences that attribute mismatch on this one element. */}
      <head>
        {/* Plain inline script: the parser runs it before the body is painted */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_FLAG }} />
      </head>
      <body suppressHydrationWarning>
        <BrandSprite />
        <a href="#main" className={styles.skipLink}>
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className={styles.main}>
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
        <SmoothScroll />
        <MotionController />
        <TrackClicks />
      </body>
    </html>
  );
}
