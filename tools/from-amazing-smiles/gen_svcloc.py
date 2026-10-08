"""One-time converter: docs/seo-content/07 Service + Location/*/02 Content.md -> typed TS content.

Wording is copied exactly. Only the client's "&" rule is applied to H2/H3 headings and
standalone link labels. Breadcrumb, page type, areaServed and hours come from each
Developer Handoff's JSON-LD.
"""
import glob, io, json, os, re, sys

sys.argv = ["x", "general"]
here = os.path.dirname(os.path.abspath(__file__))
src = io.open(os.path.join(here, "gen_services2.py"), encoding="utf-8").read()
ns = {}
exec(src.split("os.makedirs(OUT")[0], ns)
parse_blocks, amp, BUTTON, LINK, slugify, camel = ns["parse_blocks"], ns["amp"], ns["BUTTON"], ns["LINK"], ns["slugify"], ns["camel"]
js = lambda v: json.dumps(v, ensure_ascii=False)

ROOT = r"E:/Wordpress Project Backup/Amazing Smiles"
DOCS = ROOT + "/docs/seo-content/07 Service + Location"
OUT = ROOT + "/src/content/pages/service-locations"
SITE = "https://www.amazingsmilesbydesign.com"


def split_h1(h1):
    m = re.search(r"\s((?:in|Near) .+)$", h1)
    return {"lead": h1[: m.start()], "accent": m.group(1)}


def split_final(h2):
    for mark in ("?", ":"):
        if mark in h2:
            a, b = h2.split(mark, 1)
            return {"lead": a + mark, "accent": b.strip()}
    m = re.search(r"\s(From .+)$", h2)
    if m:
        return {"lead": h2[: m.start()], "accent": m.group(1)}
    words = h2.split()
    return {"lead": " ".join(words[:-2]), "accent": " ".join(words[-2:])}


def parse(folder):
    content = io.open(os.path.join(DOCS, folder, "02 Content.md"), encoding="utf-8").read()
    handoff = io.open(os.path.join(DOCS, folder, "03 Developer Handoff.md"), encoding="utf-8").read()
    path = re.search(r"\*\*URL:\*\* `(.+?)`", content).group(1)
    title = re.search(r"\*\*Title tag:\*\* (.*)", content).group(1).strip()
    desc = re.search(r"\*\*Meta description:\*\* (.*)", content).group(1).strip()
    graph = json.loads(re.findall(r"```json\n(.*?)\n```", handoff, re.S)[0])["@graph"]
    page = next(n for n in graph if n["@type"] in ("MedicalWebPage", "WebPage"))
    dentist = next(n for n in graph if n["@type"] == "Dentist")
    crumbs = next(n for n in graph if n["@type"] == "BreadcrumbList")["itemListElement"]
    breadcrumb = [{"name": c["name"], "path": c["item"].replace(SITE, "")} for c in crumbs]

    chunks = [c.strip("\n") for c in re.split(r"\n---\n", content)]
    hero = next(c for c in chunks if c.startswith("## [HERO]")).splitlines()
    final = next(c for c in chunks if c.startswith("## [FINAL CTA]")).splitlines()
    body = [c for c in chunks if c.startswith("## ") and not c.startswith("## [") and "SEO fields" not in c]

    h1 = next(l[2:] for l in hero if l.startswith("# "))
    paras, buttons, note = [], [], None
    for l in hero:
        if l.startswith("#") or not l.strip():
            continue
        m = BUTTON.match(l)
        if m:
            buttons.append({"label": m.group(1), "href": m.group(2)})
        elif re.match(r"^\*[^*].*\*$", l):
            note = l[1:-1]
        else:
            paras.append(l.strip())

    sections, faq = [], None
    for chunk in body:
        lines = chunk.splitlines()
        h2 = lines[0][3:].strip()
        if h2.endswith("FAQs"):
            items, q, a = [], None, []
            for l in lines[1:]:
                if l.startswith("### "):
                    if q:
                        items.append({"question": q, "answer": " ".join(a).strip()})
                    q, a = l[4:].strip(), []
                elif l.strip():
                    a.append(l.strip())
            items.append({"question": q, "answer": " ".join(a).strip()})
            faq = {"title": amp(h2), "items": items}
            continue
        sections.append({"id": slugify(h2) + "-title", "title": amp(h2), "blocks": parse_blocks(lines[1:])})

    fh2 = next(l[3:] for l in final if l.startswith("## ") and "[FINAL CTA]" not in l)
    fbody = " ".join(l.strip() for l in final if l.strip() and not l.startswith("#") and not BUTTON.match(l) and not LINK.match(l))
    fbuttons = [{"label": m.group(1), "href": m.group(2)} for m in (BUTTON.match(l) for l in final) if m]
    flinks = [{"label": amp(m.group(1)), "href": m.group(2)} for m in (LINK.match(l) for l in final) if m]

    return path, {
        "meta": {"path": path, "title": title, "description": desc},
        "breadcrumb": breadcrumb,
        "hero": {"title": split_h1(h1), "intro": " ".join(paras), "buttons": buttons, **({"safety": note} if note else {})},
        "procedure": None,
        "withHours": "openingHoursSpecification" in dentist,
        "sections": sections,
        "faqs": faq,
        "finalCta": {"title": split_final(amp(fh2)), "body": fbody, "buttons": fbuttons, "links": flinks},
        "pageType": page["@type"],
        "areaServed": dentist["areaServed"],
    }


os.makedirs(OUT, exist_ok=True)
for f in sorted(glob.glob(DOCS + "/*/*/02 Content.md")):
    folder = os.path.relpath(os.path.dirname(f), DOCS).replace("\\", "/")
    path, data = parse(folder)
    slug = path.strip("/")
    name = camel(slug)
    out = f'''import type {{ ServicePageContent }} from "@/content/service-page";

/**
 * Verbatim from docs/seo-content/07 Service + Location/{folder}/02 Content.md (Final v1).
 * Generated by a one-time converter; headings and link labels use "&" (client rule).
 * Breadcrumb, page type, areaServed and hours are copied from its 03 Developer Handoff.md.
 */
export const {name}: ServicePageContent = {js(data)};
'''
    io.open(os.path.join(OUT, slug + ".ts"), "w", encoding="utf-8", newline="\n").write(out)
    shapes = []
    for s in data["sections"]:
        k = []
        for b in s["blocks"]:
            if b["kind"] in ("ul", "ol"):
                k.append(b["kind"] + str(len(b["items"])) + ("L" if b["items"][0].startswith("**") else ""))
            elif b["kind"] == "table":
                k.append(f"table{len(b['rows'])}x{len(b['head'])}")
            else:
                k.append(b["kind"])
        shapes.append(f"{s['id']}[{' '.join(k)}]")
    print("==", slug, data["pageType"], "hours" if data["withHours"] else "", "| H1", data["hero"]["title"], "| final", data["finalCta"]["title"])
    for sh in shapes:
        print("    ", sh)
