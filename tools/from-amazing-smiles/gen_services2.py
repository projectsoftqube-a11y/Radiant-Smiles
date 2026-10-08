"""One-time converter: docs/seo-content/03 General Dentistry/*/02 Content.md -> typed TS content.

Wording is copied exactly. Only the client's "&" rule is applied to H1/H2/H3 body
headings and standalone link labels (FAQ questions, paragraphs and list text keep "and").
"""
import io, json, os, re

ROOT = r"E:/Wordpress Project Backup/Amazing Smiles"
import sys
CFG = {
  "general": ("03 General Dentistry", "general-dentistry", "General Dentistry", "generalCrumb"),
  "restorative": ("04 Restorative Dentistry", "restorative-dentistry", "Restorative Dentistry", "restorativeCrumb"),
  "cosmetic": ("05 Cosmetic Dentistry", "cosmetic-dentistry", "Cosmetic Dentistry", "cosmeticCrumb"),
}
KEY = sys.argv[1] if len(sys.argv) > 1 else "general"
FOLDER, PREFIX, PARENT, CRUMB_FN = CFG[KEY]
DOCS = ROOT + "/docs/seo-content/" + FOLDER
OUT = ROOT + "/src/content/pages/" + KEY

PAGES_BY_KEY = {
 "general": {
    "dental-checkups-x-rays": "01 Preventive Care/Dental Checkups & X-Rays",
    "dental-sealants": "01 Preventive Care/Dental Sealants",
    "oral-cancer-screening": "01 Preventive Care/Oral Cancer Screening",
    "oral-hygiene": "01 Preventive Care/Oral Hygiene",
    "arestin": "02 Gum Health/Arestin",
    "periodontal-maintenance": "02 Gum Health/Periodontal Maintenance",
    "scaling-and-root-planing": "02 Gum Health/Scaling & Root Planing",
    "child-dentistry": "03 Childrens Dentistry/Child Dentistry",
    "emergency-dentistry": "04 Urgent Care/Emergency Dentistry",
    "tooth-extraction": "04 Urgent Care/Tooth Extraction",
 },
 "restorative": {
    "dental-fillings": "01 Repair Damaged Teeth/Dental Fillings",
    "inlays-onlays": "01 Repair Damaged Teeth/Inlays & Onlays",
    "dental-crowns": "01 Repair Damaged Teeth/Dental Crowns",
    "non-surgical-root-canal": "02 Save Infected Teeth/Non-Surgical Root Canal",
    "dental-implants": "03 Replace Missing Teeth/Dental Implants",
    "dental-bridges": "03 Replace Missing Teeth/Dental Bridges",
    "dentures": "03 Replace Missing Teeth/Dentures",
 },
 "cosmetic": {
    "porcelain-veneers": "01 Smile Enhancement/Porcelain Veneers",
    "teeth-whitening": "01 Smile Enhancement/Teeth Whitening",
    "dental-bonding": "01 Smile Enhancement/Dental Bonding",
    "clear-aligners": "02 Teeth Straightening/Clear Aligners",
    "night-guards": "03 Protection/Night Guards",
 },
}
PAGES = PAGES_BY_KEY[KEY]

amp = lambda t: re.sub(r"\band\b", "&", t)
js = lambda v: json.dumps(v, ensure_ascii=False)
BUTTON = re.compile(r"^\*\*\[Button\] (.+?)\*\* → `(.+?)`$")
LINK = re.compile(r"^\*\*\[Link\] (.+?)\*\* → `(.+?)`$")


def split_title(h1):
    m = re.search(r"\s(in Bensalem.*)$", h1)
    if m:
        return h1[: m.start()], m.group(1)
    if ":" in h1:
        a, b = h1.split(":", 1)
        return a + ":", b.strip()
    words = h1.split()
    return " ".join(words[:-1]), words[-1]


def slugify(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def parse_blocks(lines):
    """Lines of one H2 section (after its heading) -> list of blocks."""
    blocks, stack = [], None  # stack: current h3 block or None
    para = []

    def target():
        return stack["blocks"] if stack else blocks

    def flush():
        nonlocal para
        if para:
            target().append({"kind": "p", "text": " ".join(para)})
            para = []

    for raw in lines:
        line = raw.rstrip()
        if not line.strip():
            flush()
            continue
        if line.startswith("### "):
            flush()
            stack = {"kind": "h3", "title": amp(line[4:].strip()), "blocks": []}
            blocks.append(stack)
            continue
        m = LINK.match(line)
        if m:
            flush()
            target().append({"kind": "link", "label": amp(m.group(1)), "href": m.group(2)})
            continue
        if line.startswith("|"):
            flush()
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if all(re.fullmatch(r":?-{3,}:?", c) for c in cells):
                continue
            t = target()
            if t and t[-1]["kind"] == "table" and not t[-1].get("_closed"):
                t[-1]["rows"].append(cells)
            else:
                t.append({"kind": "table", "head": cells, "rows": []})
            continue
        if line.startswith("- "):
            flush()
            t = target()
            if t and t[-1]["kind"] == "ul":
                t[-1]["items"].append(line[2:])
            else:
                t.append({"kind": "ul", "items": [line[2:]]})
            continue
        m = re.match(r"^\d+\. (.*)", line)
        if m:
            flush()
            t = target()
            if t and t[-1]["kind"] == "ol":
                t[-1]["items"].append(m.group(1))
            else:
                t.append({"kind": "ol", "items": [m.group(1)]})
            continue
        if re.match(r"^\*[^*].*\*$", line):
            flush()
            target().append({"kind": "note", "text": line[1:-1]})
            continue
        para.append(line.strip())
    flush()
    return blocks


def parse(slug, folder):
    content = io.open(os.path.join(DOCS, folder, "02 Content.md"), encoding="utf-8").read()
    handoff = io.open(os.path.join(DOCS, folder, "03 Developer Handoff.md"), encoding="utf-8").read()
    title = re.search(r"\*\*Title tag:\*\* (.*)", content).group(1).strip()
    desc = re.search(r"\*\*Meta description:\*\* (.*)", content).group(1).strip()
    crumb = re.search(r"Breadcrumb: Home › " + re.escape(PARENT) + r" › (.+?)\.\s*$", handoff, re.M).group(1).strip()
    proc = re.search(r'"@type": "MedicalProcedure",\s*"@id": "[^"]+",\s*"name": "([^"]+)",\s*"description": "([^"]+)"', handoff)
    hours = '"OpeningHoursSpecification"' in handoff

    # Split on horizontal rules into chunks
    chunks = [c.strip("\n") for c in re.split(r"\n---\n", content)]
    hero = next(c for c in chunks if c.startswith("## [HERO]"))
    final = next(c for c in chunks if c.startswith("## [FINAL CTA]"))
    body = [c for c in chunks if c.startswith("## ") and not c.startswith("## [") and "SEO fields" not in c]

    # Hero
    hl = hero.splitlines()
    h1 = next(l[2:] for l in hl if l.startswith("# "))
    paras, buttons, note = [], [], None
    for l in hl:
        if l.startswith("#") or not l.strip():
            continue
        m = BUTTON.match(l)
        if m:
            buttons.append({"label": m.group(1), "href": m.group(2)})
        elif re.match(r"^\*[^*].*\*$", l):
            note = l[1:-1]
        else:
            paras.append(l.strip())
    lead, accent = split_title(amp(h1))

    sections, faq = [], None
    for chunk in body:
        lines = chunk.splitlines()
        h2 = lines[0][3:].strip()
        if re.search(r"FAQs$|Questions$", h2):
            items, q, a = [], None, []
            for l in lines[1:]:
                if l.startswith("### "):
                    if q:
                        items.append({"question": q, "answer": " ".join(a).strip()})
                    q, a = l[4:].strip(), []
                elif l.strip():
                    a.append(l.strip())
            if q:
                items.append({"question": q, "answer": " ".join(a).strip()})
            faq = {"title": amp(h2), "items": items}
            continue
        sections.append({"id": slugify(h2) + "-title", "title": amp(h2), "blocks": parse_blocks(lines[1:])})

    # Final CTA
    fl = final.splitlines()
    fh2 = next(l[3:] for l in fl if l.startswith("## ") and "[FINAL CTA]" not in l)
    fbody = " ".join(l.strip() for l in fl if l.strip() and not l.startswith("#") and not BUTTON.match(l) and not LINK.match(l))
    fbuttons = [{"label": m.group(1), "href": m.group(2)} for m in (BUTTON.match(l) for l in fl) if m]
    flinks = [{"label": amp(m.group(1)), "href": m.group(2)} for m in (LINK.match(l) for l in fl) if m]

    return {
        "meta": {"path": f"/{PREFIX}/{slug}/", "title": title, "description": desc},
        "crumb": crumb,
        "hero": {"title": {"lead": lead, "accent": accent}, "intro": " ".join(paras), "buttons": buttons, **({"safety": note} if note else {})},
        "procedure": {"name": proc.group(1), "description": proc.group(2)} if proc else None,
        "withHours": hours,
        "sections": sections,
        "faqs": faq,
        "finalCta": {"title": split_title_final(amp(fh2)), "body": fbody, "buttons": fbuttons, "links": flinks},
    }


def split_title_final(h2):
    words = h2.split()
    if len(words) <= 3:
        return {"lead": " ".join(words[:-1]), "accent": words[-1]}
    cut = max(1, len(words) - 2)
    return {"lead": " ".join(words[:cut]), "accent": " ".join(words[cut:])}


def camel(slug):
    parts = slug.split("-")
    return parts[0] + "".join(p.title() for p in parts[1:])


os.makedirs(OUT, exist_ok=True)
for slug, folder in PAGES.items():
    data = parse(slug, folder)
    name = camel(slug)
    crumb = data.pop("crumb")
    src = f'''import type {{ ServicePageContent }} from "@/content/service-page";
import {{ {CRUMB_FN} }} from "./hub";

/**
 * Verbatim from docs/seo-content/{FOLDER}/{folder}/02 Content.md (Final v1).
 * Generated by a one-time converter; headings and link labels use "&" (client rule).
 */
export const {name}: ServicePageContent = {{
  ...{js(data)},
  breadcrumb: {CRUMB_FN}({js(crumb)}, {js(data["meta"]["path"])}),
}};
'''
    io.open(os.path.join(OUT, slug + ".ts"), "w", encoding="utf-8", newline="\n").write(src)
    print(slug, "sections:", len(data["sections"]), "faqs:", len(data["faqs"]["items"]), "proc:", bool(data["procedure"]), "hours:", data["withHours"], "| H1:", data["hero"]["title"], "| final:", data["finalCta"]["title"])
