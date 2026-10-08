import re, json, html, urllib.request, io, os
BASE = "http://localhost:3300"
DOCS = r"E:/Wordpress Project Backup/Amazing Smiles/docs/seo-content/07 Service + Location"
pages = {
 "/dental-implants-bucks-county/": "01 Dental Implants/Dental Implants, Bucks County",
 "/dental-implants-feasterville-pa/": "01 Dental Implants/Dental Implants, Feasterville",
 "/dental-implants-langhorne-pa/": "01 Dental Implants/Dental Implants, Langhorne",
 "/cosmetic-dentist-bucks-county/": "02 Cosmetic/Cosmetic Dentist, Bucks County",
 "/emergency-dentist-bucks-county/": "03 Emergency/Emergency Dentist, Bucks County",
 "/emergency-dentist-langhorne-pa/": "03 Emergency/Emergency Dentist, Langhorne",
 "/clear-aligners-langhorne-pa/": "04 Clear Aligners (Conditional)/Clear Aligners - Invisalign, Langhorne",
}
norm = lambda t: re.sub(r"\s+", " ", re.sub(r"\band\b", "&", html.unescape(t))).strip().rstrip(":").lower()
def strip(t): return re.sub(r"<[^>]+>", "", t)
allok = True
for path, folder in pages.items():
    src = urllib.request.urlopen(BASE + path).read().decode("utf-8")
    content = io.open(os.path.join(DOCS, folder, "02 Content.md"), encoding="utf-8").read()
    handoff = io.open(os.path.join(DOCS, folder, "03 Developer Handoff.md"), encoding="utf-8").read()
    title = html.unescape(re.search(r"<title>(.*?)</title>", src).group(1))
    desc = html.unescape(re.search(r'<meta name="description" content="(.*?)"', src).group(1))
    canon = re.search(r'<link rel="canonical" href="(.*?)"', src).group(1)
    want_title = re.search(r"\*\*Title tag:\*\* (.*)", content).group(1).strip()
    want_desc = re.search(r"\*\*Meta description:\*\* (.*)", content).group(1).strip()
    want_canon = re.search(r'rel="canonical" href="(.*?)"', handoff).group(1)
    # headings in page (main only: before footer)
    main = src.split("<footer")[0]
    got = [(int(l), norm(strip(t))) for l, t in re.findall(r"<h([1-3])[^>]*>(.*?)</h\1>", main, re.S)]
    # headings in content (skip SEO fields and [FINAL CTA]/[HERO] markers)
    want = []
    for line in content.splitlines():
        m = re.match(r"^(#{1,3}) (.*)", line)
        if not m: continue
        lvl, text = len(m.group(1)), m.group(2).strip()
        if text in ("SEO fields",) or text.startswith("[") or ": Page Content" in text: continue
        want.append((lvl, norm(text)))
    types = sorted({t for blk in re.findall(r'<script type="application/ld\+json">(.*?)</script>', src, re.S) for t in re.findall(r'"@type":"(\w+)"', blk)})
    want_types = sorted(set(re.findall(r'"@type": "(\w+)"', handoff)))
    faq_in_html = all(norm(a)[:60] in norm(strip(src)) for a in re.findall(r"^### .*\n(.+)$", content, re.M)) if "FAQ" in content or "Questions" in content else True
    issues = []
    if title != want_title: issues.append(f"title {title!r} != {want_title!r}")
    if desc != want_desc: issues.append(f"desc mismatch: {desc!r}")
    if canon != want_canon: issues.append(f"canonical {canon} != {want_canon}")
    if got != want:
        issues.append("headings differ:\n   got:  " + str(got) + "\n   want: " + str(want))
    missing = [t for t in want_types if t not in types]
    if missing: issues.append(f"schema types missing {missing}")
    print(("OK  " if not issues else "FAIL") + f" {path}  h={len(got)} types={types}")
    for i in issues: print("    -", i); allok = False
print("ALL OK" if allok else "SOME ISSUES")
