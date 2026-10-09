import { FeaturedStories, PostFeed, ResourcesPanel, TopicIndex } from "@/components/sections/blog/BlogHub";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogCrumbs, blogCta, blogHero, blogMeta } from "@/content/pages/blog/hub";
import { breadcrumbList, graph, ids, innerPage } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(blogMeta);

const BLOG_ID = `${absoluteUrl(blogMeta.path)}#blog`;

/**
 * Handoff: CollectionPage + BreadcrumbList + a Blog node (publisher: the practice by @id).
 * The posts carry their own BlogPosting on their pages and are not listed here.
 */
const schema = graph(
  innerPage({
    type: "CollectionPage",
    path: blogMeta.path,
    name: blogMeta.title,
    description: blogMeta.description,
    mainEntity: { "@id": BLOG_ID },
  }),
  breadcrumbList(blogMeta.path, blogCrumbs),
  {
    "@type": "Blog",
    "@id": BLOG_ID,
    url: absoluteUrl(blogMeta.path),
    name: blogHero.h1,
    description: blogMeta.description,
    inLanguage: "en-US",
    publisher: { "@id": ids.dentist },
  },
);

/** Section order follows 02 Content.md. */
export default function BlogPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="blog-title"
        label="Blog"
        content={{ ...blogHero, buttons: [] }}
        crumbs={blogCrumbs}
        strong={[1]}
        track="blog"
        footer={<FeaturedStories />}
      />
      <TopicIndex />
      <PostFeed />
      <ResourcesPanel />
      <ClosingCta id="blog-cta-title" content={blogCta} track="blog_final" />
    </>
  );
}
