import { Fragment } from "react";
import SiteLink from "@/components/ui/SiteLink";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

/**
 * Renders content-file text with its inline **bold** and [label](/path) markup, so copy
 * stays verbatim in src/content. Internal links go through SiteLink (plain text until
 * the page is built); tel:, mailto: and external links are plain anchors.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) return <Fragment key={index}>{anchor(link[1], link[2])}</Fragment>;
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

function anchor(label: string, href: string) {
  if (/^(tel:|mailto:|https?:)/.test(href)) return <a href={href}>{label}</a>;
  return <SiteLink href={href}>{label}</SiteLink>;
}
