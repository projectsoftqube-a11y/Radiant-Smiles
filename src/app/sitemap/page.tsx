import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { PageFinder } from "@/components/sections/sitemap/PageFinder";
import { SiteTree, SitemapDirectory } from "@/components/sections/sitemap/Sitemap";
import { JsonLd } from "@/components/ui/JsonLd";
import { sitemapCrumbs, sitemapCta, sitemapGroups, sitemapHero, sitemapMeta } from "@/content/pages/sitemap";
import { breadcrumbList, graph, legalPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(sitemapMeta);

/** Handoff 3a: WebPage (publisher by @id) + BreadcrumbList, the same shape as the legal pages */
const schema = graph(
  legalPage({ path: sitemapMeta.path, name: sitemapMeta.title, description: sitemapMeta.description }),
  breadcrumbList(sitemapMeta.path, sitemapCrumbs),
);

/** Section order follows 02 Content.md. The lists are built from routes.ts (handoff). */
export default function SitemapPage() {
  const groups = sitemapGroups();
  const labels = groups.flatMap((g) => [...g.links, ...(g.subgroups ?? []).flatMap((s) => s.links)].map((link) => link.label));
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="sitemap-title"
        label="All pages"
        content={{ ...sitemapHero, buttons: [] }}
        crumbs={sitemapCrumbs}
        track="sitemap"
        aside={<SiteTree groups={groups} />}
      >
        <PageFinder labels={labels} />
      </PageHero>
      <SitemapDirectory groups={groups} />
      <ClosingCta id="sitemap-cta-title" content={sitemapCta} track="sitemap_final" />
    </>
  );
}
