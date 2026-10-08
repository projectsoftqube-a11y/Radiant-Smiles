import { Google_Sans, Raleway } from "next/font/google";

/**
 * Fonts chosen by the user (6 Oct 2026): Raleway for titles and headings, Google Sans
 * for all other text. Both are self-hosted by next/font, so no request goes to Google.
 */
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-raleway",
});

export const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-google-sans",
  // Next has no metric overrides for Google Sans yet; skip the generated fallback (no build warning)
  adjustFontFallback: false,
});
