import { Fragment } from "react";
import SiteLink from "@/components/ui/SiteLink";
import { practice } from "@/content/site";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\(215\) 860-4600)/g;

/**
 * Renders content-file text with its inline **bold** and [label](/path) markup, so copy
 * stays verbatim in src/content. The practice phone number becomes a tel: link. Internal links go through SiteLink (plain text until
 * the page is built); tel:, mailto: and external links are plain anchors.
 */
export function Rich({ text, newTab = false }: { text: string; /** External links open in a new tab (HIPAA handoff: the OCR portal) */ newTab?: boolean }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
        // Every phone mention is a tel: link (handoffs)
        if (part === practice.phone.display) return <Fragment key={index}>{anchor(part, practice.phone.href)}</Fragment>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) return <Fragment key={index}>{anchor(link[1], link[2], newTab)}</Fragment>;
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

function anchor(label: string, href: string, newTab = false) {
  // Phone numbers never break across lines
  if (href.startsWith("tel:")) return <a href={href} style={{ whiteSpace: "nowrap" }}>{label}</a>;
  if (href.startsWith("mailto:")) return <a href={href}>{label}</a>;
  // External health sources (NIDCR, MSKCC): rel="noopener" per the handoffs
  if (/^https?:/.test(href))
    return newTab ? (
      <a href={href} target="_blank" rel="noopener">
        {label}
      </a>
    ) : (
      <a href={href} rel="noopener">
        {label}
      </a>
    );
  return <SiteLink href={href}>{label}</SiteLink>;
}
