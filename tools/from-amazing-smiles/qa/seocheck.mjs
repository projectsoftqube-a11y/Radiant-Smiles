// SEO head check per page: title, meta description, one H1, canonical, robots, JSON-LD types.
// Usage: PAGES="about-us/,contact-us/" node seocheck.mjs
const pages = (process.env.PAGES || "").split(",");
for (const page of pages) {
  const html = await (await fetch("http://localhost:3300/" + page)).text();
  const pick = (re) => (html.match(re) || [])[1] ?? "—";
  const title = pick(/<title>([^<]*)<\/title>/);
  const desc = pick(/<meta name="description" content="([^"]*)"/);
  const canonical = pick(/<link rel="canonical" href="([^"]*)"/);
  const robots = pick(/<meta name="robots" content="([^"]*)"/);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const types = [...html.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)].flatMap((m) => {
    try { return (JSON.parse(m[1])["@graph"] || []).map((n) => n["@type"]); } catch { return ["(bad JSON)"]; }
  });
  const review = /"(Review|AggregateRating)"/.test(html);
  console.log(`/${page}\n  title: ${title}\n  meta: ${desc}\n  canonical: ${canonical} | robots: ${robots} | h1: ${h1}\n  schema: ${types.join(", ")}${review ? "  !! Review/AggregateRating found" : ""}`);
}
