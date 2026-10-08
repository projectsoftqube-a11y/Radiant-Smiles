import type { Metadata } from "next";
import { practice, SITE_URL } from "@/content/site";

type PageSeo = {
  path: string;
  /** Used verbatim: the SEO team writes complete titles, so there is no title template. */
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
};

export function buildMetadata({ path, title, description, ogTitle, ogDescription, ogType = "website", noindex }: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      url,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      siteName: practice.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();
