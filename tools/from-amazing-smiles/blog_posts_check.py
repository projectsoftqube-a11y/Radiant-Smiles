"""Every doc line (except the editor notes and photo slots) must appear in the rendered post; SEO head + schema checks."""
import glob, html, io, json, os, re, urllib.request
SP = os.path.dirname(os.path.abspath(__file__))
SLUGS = {"01": "how-long-do-porcelain-veneers-last", "02": "dental-implant-cost-bensalem", "03": "dental-emergencies-what-to-do-first", "04": "no-dental-insurance-bensalem"}
norm = lambda s: re.sub(r"\s+", " ", s.replace("’", "'").replace("&amp;", "&")).strip().lower()
ok_all = True
for f in sorted(glob.glob(os.path.join(SP, "blogdump", "*.txt"))):
    num = os.path.basename(f)[:2]; slug = SLUGS[num]
    raw = urllib.request.urlopen(f"http://localhost:3300/blog/{slug}/").read().decode("utf-8")
    body = raw.split("<main", 1)[1].split("</main>", 1)[0]
    text = norm(html.unescape(re.sub(r"<[^>]+>", " ", re.sub(r"<script.*?</script>", "", body, flags=re.S))))
    text = re.sub(r" ([.,;:?!)])", r"\1", text)
    misses = []; checked = 0
    for line in io.open(f, encoding="utf-8").read().splitlines():
        if line.startswith("<Heading 1> For the editor"): break
        m = re.match(r"<([^>]+)> (.*)", line) or (re.match(r"(ROW)(\|.*)", "ROW" + line) if line.startswith("|") else None)
        if not m: continue
        style, t = m.groups()
        t = re.sub(r"\*+", "", t).replace("▸ ", "")
        t = re.sub(r"\s+\((/|tel:)[^)]*\)$", "", t)
        if t.startswith(("Dr. Keyur Dudhat, DMD, Amazing", "QUICK ANSWER")) or "PLACEHOLDER" in t or "COVER IMAGE" in t: continue
        if style == "TABLE" or t.startswith("|") and False: continue
        cells = [c.strip() for c in t.strip("| ").split(" | ")] if t.startswith("|") else [t]
        for c in cells:
            for part in c.split(" / "):
                part = part.replace("[Button] ", "").split(" → ")[0].strip()
                if not part or part in ("QUICK ANSWER",): continue
                checked += 1
                p = norm(part).replace("neighbouring", "neighboring")
                if p not in text and p.replace(" and ", " & ").replace(", & ", " & ") not in text and p.replace(", and ", " & ") not in text:
                    misses.append(part[:110])
    head = raw.split("</head>", 1)[0]
    title = html.unescape(re.search(r"<title>(.*?)</title>", head).group(1))
    desc = html.unescape(re.search(r'<meta name="description" content="([^"]*)"', head).group(1))
    robots = re.search(r'<meta name="robots" content="([^"]*)"', head)
    h1 = len(re.findall(r"<h1[ >]", body))
    types = sorted({t for blob in re.findall(r'<script type="application/ld\+json">(.*?)</script>', raw, flags=re.S) for t in re.findall(r'"@type":"(\w+)"', blob)})
    seo = io.open(f, encoding="utf-8").read()
    want_t = re.search(r"SEO title: \*\*(.*?)  \(", seo).group(1); want_d = re.search(r"Meta description: \*\*(.*?)  \(", seo).group(1)
    ok = not misses and title == want_t and desc == want_d and h1 == 1 and not robots
    ok_all &= ok
    print("OK  " if ok else "MISS", slug, f"{checked} lines", "| title", title == want_t, "| meta", desc == want_d, "| h1", h1, "| robots", robots.group(1) if robots else "-", "|", types)
    for m in misses: print("    -", m)
print("ALL OK" if ok_all else "PROBLEMS")
