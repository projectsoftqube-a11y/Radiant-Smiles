"""Blog posts: docs/seo-content/08 Blog/01 Posts/*.docx -> src/content/pages/blog/posts/<slug>.ts

Wording is copied exactly. Applied at build time only:
- the client's "&" rule on H1/H2/H3 headings (FAQ questions, paragraphs and lists keep "and"),
- US spelling (corrections log),
- internal links on phrases the docs point at ("See financing options.") and first mentions of
  treatments that have their own page (handoff: each post links to its service page).
"""
import io, json, os, re
import docx
from docx.oxml.ns import qn

ROOT = r"E:/Wordpress Project Backup/Amazing Smiles"
SRC = ROOT + "/docs/seo-content/08 Blog/01 Posts"
OUT = ROOT + "/src/content/pages/blog/posts"

POSTS = {
    "01 - How Long Do Porcelain Veneers Last.docx": {
        "slug": "how-long-do-porcelain-veneers-last",
        "var": "porcelainVeneersLast",
        "label": "How Long Do Porcelain Veneers Last?",
        "topic": "cosmetic-dentistry-title",
        "art": "veneers",
        "h1": ("How Long Do Porcelain", "Veneers Last?"),
        "related": {"label": "Porcelain veneers", "href": "/cosmetic-dentistry/porcelain-veneers/"},
        "links": [
            ("tooth-colored dental bonding is", "tooth-colored [dental bonding](/cosmetic-dentistry/dental-bonding/) is"),
            ("Wear a night guard if you grind", "Wear a [night guard](/cosmetic-dentistry/night-guards/) if you grind"),
            ("Keep your six-month checkups so", "Keep your [six-month checkups](/general-dentistry/dental-checkups-x-rays/) so"),
            ("a dental crown protects it better", "a [dental crown](/restorative-dentistry/dental-crowns/) protects it better"),
            ("See the membership plans.", "See the [membership plans](/specials/)."),
            ("See financing options.", "See [financing options](/patient-information/financing-options/)."),
            ("teeth whitening or dental bonding may", "[teeth whitening](/cosmetic-dentistry/teeth-whitening/) or dental bonding may"),
            (
                "Dr. Keyur Dudhat places and maintains porcelain veneers at",
                "[Dr. Keyur Dudhat](/about-us/dr-keyur-dudhat/) places and maintains [porcelain veneers](/cosmetic-dentistry/porcelain-veneers/) at",
            ),
        ],
    },
    "02 - Dental Implant Cost in Bensalem.docx": {
        "slug": "dental-implant-cost-bensalem",
        "var": "dentalImplantCost",
        "label": "How Much Do Dental Implants Cost?",
        "topic": "repairing-and-replacing-teeth-title",
        "art": "implant",
        "h1": ("How Much Do Dental Implants", "Cost in Bensalem, PA?"),
        "related": {"label": "Dental implants", "href": "/restorative-dentistry/dental-implants/"},
        "links": [
            ("In the US, a single dental implant typically", "In the US, a single [dental implant](/restorative-dentistry/dental-implants/) typically"),
            ("we use a CBCT scan when", "we use a [CBCT scan](/patient-information/advanced-technology/) when"),
            ("A tooth extraction, if the old tooth", "A [tooth extraction](/general-dentistry/tooth-extraction/), if the old tooth"),
            ("Dr. Keyur Dudhat, who focuses on", "[Dr. Keyur Dudhat](/about-us/dr-keyur-dudhat/), who focuses on"),
            ("See insurance and payment options.", "See [insurance and payment options](/patient-information/insurance-payment-options/)."),
            ("See financing options.", "See [financing options](/patient-information/financing-options/)."),
            (
                "like a dental bridge or implant-supported dentures",
                "like a [dental bridge](/restorative-dentistry/dental-bridges/) or [implant-supported dentures](/restorative-dentistry/dentures/)",
            ),
        ],
    },
    "03 - Dental Emergencies What to Do First.docx": {
        "slug": "dental-emergencies-what-to-do-first",
        "var": "dentalEmergenciesFirst",
        "label": "Dental Emergencies: What to Do First",
        "topic": "dental-emergencies-title",
        "art": "emergency",
        "h1": ("Dental Emergencies:", "What Counts & What to Do First"),
        "related": {"label": "Emergency dentistry", "href": "/general-dentistry/emergency-dentistry/"},
        "links": [
            ("A dental emergency is any problem in your mouth", "A [dental emergency](/general-dentistry/emergency-dentistry/) is any problem in your mouth"),
            (
                "Treatment may involve a root canal to save the tooth, or a tooth extraction if",
                "Treatment may involve a [root canal](/restorative-dentistry/non-surgical-root-canal/) to save the tooth, or a [tooth extraction](/general-dentistry/tooth-extraction/) if",
            ),
            (
                "Our membership plans include an emergency exam, and financing is available",
                "Our [membership plans](/specials/) include an emergency exam, and [financing](/patient-information/financing-options/) is available",
            ),
        ],
    },
    "04 - No Dental Insurance in Bensalem.docx": {
        "slug": "no-dental-insurance-bensalem",
        "var": "noDentalInsurance",
        "label": "No Dental Insurance? How to Afford Care",
        "topic": "costs-insurance-and-plans-title",
        "art": "membership",
        "h1": ("No Dental Insurance in Bensalem?", "How to Afford Care"),
        "related": {"label": "Specials & membership plans", "href": "/specials/"},
        "links": [
            ("A yearly membership plan covers your routine care", "A yearly [membership plan](/specials/) covers your routine care"),
            ("See the full details on our specials page.", "See the full details on our [specials page](/specials/)."),
            ("See financing options.", "See [financing options](/patient-information/financing-options/)."),
            ("See emergency dentistry.", "See [emergency dentistry](/general-dentistry/emergency-dentistry/)."),
            ("See insurance and payment options.", "See [insurance and payment options](/patient-information/insurance-payment-options/)."),
            ("Dr. Keyur Dudhat will talk you through", "[Dr. Keyur Dudhat](/about-us/dr-keyur-dudhat/) will talk you through"),
        ],
    },
}

US_SPELLING = [("neighbouring", "neighboring"), ("colour", "color"), ("favour", "favor"), ("centre", "center")]


def us(text):
    for a, b in US_SPELLING:
        text = text.replace(a, b)
    return text


def amp(title):
    return re.sub(r"\band\b", "&", title.replace(", and ", " and "))


def slugify(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower().replace("&", "and")).strip("-") + "-title"


def fmt_run(r):
    t = "".join(x.text or "" for x in r.iter(qn("w:t")))
    rpr = r.find(qn("w:rPr"))
    if rpr is not None and t.strip():
        b = rpr.find(qn("w:b"))
        i = rpr.find(qn("w:i"))
        lead = t[: len(t) - len(t.lstrip())]
        trail = t[len(t.rstrip()) :]
        core = t.strip()
        if b is not None and b.get(qn("w:val")) not in ("0", "false"):
            core = f"**{core}**"
        if i is not None and i.get(qn("w:val")) not in ("0", "false"):
            core = f"*{core}*"
        t = lead + core + trail
    return t


def para_text(p):
    out = []
    for child in p._p.iterchildren():
        tag = child.tag.split("}")[1]
        if tag == "r":
            out.append(fmt_run(child))
        elif tag == "hyperlink":
            out.append("".join(fmt_run(r) for r in child.iter(qn("w:r"))))
    text = "".join(out)
    # Adjacent runs with the same style: "**a****b**" -> "**ab**", "*a**b*" stays
    text = text.replace("****", "")
    return us(re.sub(r"\s+", " ", text).strip())


def plain(text):
    return re.sub(r"\*+", "", text).strip()


def list_formats(d):
    numbering = d.part.numbering_part.element
    absmap = {n.get(qn("w:numId")): n.find(qn("w:abstractNumId")).get(qn("w:val")) for n in numbering.findall(qn("w:num"))}
    fmts = {
        a.get(qn("w:abstractNumId")): a.find(qn("w:lvl")).find(qn("w:numFmt")).get(qn("w:val"))
        for a in numbering.findall(qn("w:abstractNum"))
    }
    return lambda num_id: fmts[absmap[num_id]]


BUTTON = re.compile(r"^\*\*▸ (.+?)\*\*\s*\((\S+)\)$")
TABLE_BUTTON = re.compile(r"^\*\*\[Button\] (.+?)\*\* → (\S+)$")


def convert(name, cfg):
    d = docx.Document(os.path.join(SRC, name))
    fmt_of = list_formats(d)
    post = {"title": None, "quickAnswer": {"text": [], "buttons": []}, "takeaways": [], "sections": []}
    seo = {}
    state = "start"
    section = None
    target = None  # block list being filled (section or h3)
    last_cta = None

    def add(block):
        nonlocal last_cta
        target.append(block)
        last_cta = block if block["kind"] == "cta" else None

    for el in d.element.body.iterchildren():
        tag = el.tag.split("}")[1]
        if tag == "tbl":
            table = docx.table.Table(el, d)
            cells = [[[para_text(p) for p in c.paragraphs if p.text.strip()] for c in row.cells] for row in table.rows]
            first = cells[0][0][0] if cells[0][0] else ""
            if "PLACEHOLDER" in first or "COVER IMAGE" in first:
                continue  # optional practice-photo slots, left blank (no stock or AI imagery)
            if first == "**QUICK ANSWER**":
                for line in cells[0][0][1:]:
                    m = TABLE_BUTTON.match(line)
                    if m:
                        post["quickAnswer"]["buttons"].append({"label": m.group(1), "href": m.group(2)})
                    else:
                        post["quickAnswer"]["text"].append(line)
                continue
            head = [plain(" ".join(c)) for c in cells[0]]
            rows = [[" ".join(c) for c in row] for row in cells[1:]]
            add({"kind": "table", "head": head, "rows": rows})
            continue
        if tag != "p":
            continue
        p = docx.text.paragraph.Paragraph(el, d)
        style = p.style.name if p.style is not None else ""
        text = para_text(p)
        if not text:
            continue
        ppr = el.find(qn("w:pPr"))
        num = ppr.find(qn("w:numPr")) if ppr is not None else None

        if state == "editor":
            if text.startswith("**SEO title:**"):
                seo["title"] = re.sub(r"\s+\(\d+ chars\)$", "", plain(text.split(":**", 1)[1]))
            elif text.startswith("**Meta description:**"):
                seo["description"] = re.sub(r"\s+\(\d+ chars\)$", "", plain(text.split(":**", 1)[1]))
            continue

        if style == "Heading 1":
            title = plain(text)
            if title == "For the editor":
                state = "editor"
                continue
            section = {"id": slugify(title), "title": amp(title), "blocks": []}
            post["sections"].append(section)
            target = section["blocks"]
            state = "body"
            last_cta = None
            continue
        if style == "Heading 2":
            title = plain(text)
            if section["title"].endswith("FAQs"):
                section.setdefault("faqs", []).append({"question": title, "answer": None})
                target = None
            else:
                h3 = {"kind": "h3", "title": amp(title), "blocks": []}
                section["blocks"].append(h3)
                target = h3["blocks"]
            continue

        if state == "start":
            if post["title"] is None:
                post["title"] = plain(text)
            elif text.startswith("*Dr. Keyur Dudhat"):
                post["byline"] = plain(text)
            elif text == "**Key Takeaways**":
                state = "takeaways"
            continue
        if state == "takeaways":
            post["takeaways"].append(text)
            continue

        if section.get("faqs") and section["faqs"][-1]["answer"] is None:
            section["faqs"][-1]["answer"] = text
            continue

        m = BUTTON.match(text)
        if m:
            button = {"label": m.group(1), "href": m.group(2)}
            if last_cta is not None and "note" not in last_cta:
                last_cta["buttons"].append(button)
            else:
                add({"kind": "cta", "buttons": [button]})
            continue
        if last_cta is not None and re.fullmatch(r"\*[^*].*[^*]\*", text):
            last_cta["note"] = text[1:-1]
            continue
        if num is not None:
            kind = "ol" if fmt_of(num.find(qn("w:numId")).get(qn("w:val"))) == "decimal" else "ul"
            if target and target[-1]["kind"] == kind:
                target[-1]["items"].append(text)
                last_cta = None
            else:
                add({"kind": kind, "items": [text]})
            continue
        add({"kind": "p", "text": text})

    # FAQ section and the closing CTA section (the last one, after the FAQs)
    faq_index = next(i for i, s in enumerate(post["sections"]) if s.get("faqs"))
    faq = post["sections"][faq_index]
    closing = post["sections"][faq_index + 1 :]
    assert len(closing) == 1, [s["title"] for s in closing]
    closing = closing[0]
    body = [b["text"] for b in closing["blocks"] if b["kind"] == "p"]
    buttons = [btn for b in closing["blocks"] if b["kind"] == "cta" for btn in b["buttons"]]
    title = closing["title"]
    if " in Bensalem" in title:
        lead, accent = title.rsplit(" in Bensalem", 1)[0], "in Bensalem" + title.rsplit(" in Bensalem", 1)[1]
    else:
        lead, accent = title.split("? ", 1)
        lead += "?"
    sections = post["sections"][:faq_index]

    # Internal links: each phrase must exist in the article body exactly where intended
    blob = json.dumps(sections, ensure_ascii=False)
    for old, new in cfg["links"]:
        assert blob.count(old) == 1, (cfg["slug"], old, blob.count(old))
        blob = blob.replace(old, new)
    sections = json.loads(blob)

    byline = post["byline"]
    assert "Published 6 October 2026" in byline and "Updated 6 October 2026" in byline, byline
    return {
        "slug": cfg["slug"],
        "meta": {"path": f"/blog/{cfg['slug']}/", "title": seo["title"], "description": seo["description"]},
        "label": cfg["label"],
        "topic": cfg["topic"],
        "art": cfg["art"],
        "title": {"lead": cfg["h1"][0], "accent": cfg["h1"][1]},
        "author": "Dr. Keyur Dudhat, DMD",
        "published": "2026-10-06",
        "updated": "2026-10-06",
        "quickAnswer": post["quickAnswer"],
        "takeaways": post["takeaways"],
        "sections": sections,
        "faqs": {"id": faq["id"], "title": faq["title"], "items": faq["faqs"]},
        "finalCta": {"id": closing["id"], "title": {"lead": lead, "accent": accent}, "body": " ".join(body), "buttons": buttons},
        "related": cfg["related"],
        "_h1": post["title"],
    }


os.makedirs(OUT, exist_ok=True)
for name, cfg in POSTS.items():
    data = convert(name, cfg)
    h1 = data.pop("_h1")
    assert amp(h1) == f"{data['title']['lead']} {data['title']['accent']}", (h1, data["title"])
    src = f"docs/seo-content/08 Blog/01 Posts/{name}"
    ts = (
        'import type { BlogPostContent } from "@/content/blog-post";\n\n'
        "/**\n"
        f" * Verbatim from {src} (6 Oct 2026).\n"
        ' * Generated by a one-time converter (scratchpad gen_blog.py): headings use "&" (client rule),\n'
        " * US spelling, and internal links added on the phrases the doc points at. The doc's optional\n"
        " * in-body photo slot is left out (practice-supplied photo only; no stock or AI imagery).\n"
        " */\n"
        f"export const {cfg['var']}: BlogPostContent = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    )
    io.open(os.path.join(OUT, cfg["slug"] + ".ts"), "w", encoding="utf-8", newline="\n").write(ts)
    words = len(re.sub(r"[*\[\]()]", " ", json.dumps(data["sections"]) + " ".join(data["quickAnswer"]["text"])).split())
    print(cfg["slug"].ljust(40), "sections", len(data["sections"]), "faqs", len(data["faqs"]["items"]), "| title:", data["meta"]["title"])
