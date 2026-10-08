/**
 * Google Maps embed of the office (home handoff: lazy-load). The browser only loads it
 * when it nears the viewport, so it never slows the first view of the page.
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      src={src}
      title={title}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
