import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MorePosts, PostBody, PostHeader, PostNav } from "@/components/sections/blog/BlogPost";
import { postImage } from "@/components/sections/blog/PostCard";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogCrumbs, blogCta, BLOG_PATH, postBySlug, postPath, posts } from "@/content/pages/blog/hub";
import { breadcrumbList, graph, ids, innerPage } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

/** Only the 10 launch posts exist; any other slug is a 404 (the 13 retired posts redirect). */
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

const metaTitle = (title: string) => `${title} | Radiant Smiles`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = postBySlug((await params).slug);
  if (!post) return {};
  return buildMetadata({ path: postPath(post.slug), title: metaTitle(post.title), description: post.description, ogType: "article" });
}

export default async function BlogPostPage({ params }: Props) {
  const post = postBySlug((await params).slug);
  if (!post) notFound();

  const path = postPath(post.slug);
  const crumbs = [...blogCrumbs, { name: post.title, path }];
  const image = postImage(post.slug);
  // WordPress stored local Yardley time; add its UTC offset (EST in December, when all were published)
  const published = /[+-]\d\d:\d\d$|Z$/.test(post.date) ? post.date : `${post.date}-05:00`;

  /** WebPage + BreadcrumbList + BlogPosting (part of the hub's Blog node) */
  const schema = graph(
    innerPage({
      type: "WebPage",
      path,
      name: metaTitle(post.title),
      description: post.description,
      mainEntity: { "@id": `${absoluteUrl(path)}#article` },
    }),
    breadcrumbList(path, crumbs),
    {
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(path)}#article`,
      headline: post.title,
      description: post.description,
      datePublished: published,
      dateModified: published,
      inLanguage: "en-US",
      ...(image?.src ? { image: absoluteUrl(image.src.src) } : {}),
      author: { "@id": ids.dentist },
      publisher: { "@id": ids.dentist },
      mainEntityOfPage: { "@id": ids.webpage(path) },
      isPartOf: { "@id": `${absoluteUrl(BLOG_PATH)}#blog` },
    },
  );

  return (
    <>
      <JsonLd data={schema} />
      <PostHeader post={post} crumbs={crumbs} />
      <PostBody post={post} />
      <PostNav post={post} />
      <MorePosts post={post} />
      <ClosingCta id="post-cta-title" content={blogCta} track="blog_post_final" />
    </>
  );
}
