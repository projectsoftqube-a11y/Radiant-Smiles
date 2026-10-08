import { serializeJsonLd } from "@/lib/schema";

/** Structured data is not executable, so a plain server-rendered <script> is used. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
