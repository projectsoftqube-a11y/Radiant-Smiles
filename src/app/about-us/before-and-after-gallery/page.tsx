import { GalleryMakeover, GalleryShare, GalleryTreatments, GalleryWhitening, ShadeGuide } from "@/components/sections/gallery/Gallery";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { galleryCrumbs, galleryCta, galleryHero, galleryMeta } from "@/content/pages/gallery";
import { breadcrumbList, graph, innerPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

/** noindex, follow until the first case is cleared (handoff publishing rule). */
export const metadata = buildMetadata(galleryMeta);

/**
 * Handoff 3a: ImageGallery about the practice + breadcrumb. No ImageObject nodes until a
 * case is cleared for publishing (template in the handoff, 3c).
 */
const schema = graph(
  innerPage({ type: "ImageGallery", path: galleryMeta.path, name: galleryMeta.title, description: galleryMeta.description }),
  breadcrumbList(galleryMeta.path, galleryCrumbs),
);

/** Section order follows 02 Content.md. */
export default function GalleryPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="gallery-title"
        label="Before & after"
        content={galleryHero}
        crumbs={galleryCrumbs}
        strong={[0, 1, 2, 3]}
        track="gallery"
        aside={<ShadeGuide />}
      />
      <GalleryMakeover />
      <GalleryWhitening />
      <GalleryTreatments />
      <GalleryShare />
      <ClosingCta id="gallery-cta-title" content={galleryCta} track="gallery_final" />
    </>
  );
}
