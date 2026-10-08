import type { NextConfig } from "next";
import { redirects } from "./src/content/redirects";

/**
 * Fully static marketing site. Cache Components (and its partial prefetching) is left off:
 * nothing is fetched at request time, and its <Activity> navigation keeps hidden routes
 * mounted, which conflicts with the page-scoped GSAP scroll triggers.
 */
const nextConfig: NextConfig = {
  // Every URL on the current site ends in a slash; the SEO sitemap keeps them.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  async redirects() {
    // The SEO sheet specifies 301s (Next.js uses 308 for `permanent: true`)
    return redirects.map((rule) => ({ ...rule, statusCode: 301 as const }));
  },
};

export default nextConfig;
