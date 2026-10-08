import re, json, html, urllib.request, io, os
BASE = "http://localhost:3300"
DOCS = r"E:/Wordpress Project Backup/Amazing Smiles/docs/seo-content/06 Locations"
pages = {
 "/areas-we-serve/": "00 Areas We Serve Hub/Areas We Serve Hub",
 "/dentist-fairless-hills-pa/": "01 Lower Bucks - Practice Listed/Dentist near Fairless Hills, PA",
 "/dentist-feasterville-pa/": "01 Lower Bucks - Practice Listed/Dentist near Feasterville, PA",
 "/dentist-hulmeville-pa/": "01 Lower Bucks - Practice Listed/Dentist near Hulmeville, PA",
 "/dentist-langhorne-pa/": "01 Lower Bucks - Practice Listed/Dentist near Langhorne, PA",
 "/dentist-parkland-pa/": "01 Lower Bucks - Practice Listed/Dentist near Parkland, PA",
 "/dentist-trevose-pa/": "01 Lower Bucks - Practice Listed/Dentist near Trevose, PA",
 "/dentist-bristol-pa/": "02 Lower Bucks - New/Dentist near Bristol, PA",
 "/dentist-croydon-pa/": "02 Lower Bucks - New/Dentist near Croydon, PA",
 "/dentist-levittown-pa/": "02 Lower Bucks - New/Dentist near Levittown, PA",
 "/dentist-morrisville-pa/": "02 Lower Bucks - New/Dentist near Morrisville, PA",
 "/dentist-newtown-pa/": "02 Lower Bucks - New/Dentist near Newtown, PA",
 "/dentist-penndel-pa/": "02 Lower Bucks - New/Dentist near Penndel, PA",
 "/dentist-yardley-pa/": "02 Lower Bucks - New/Dentist near Yardley, PA",
 "/dentist-andalusia-pa/": "03 Bensalem Neighborhoods/Dentist near Andalusia, PA",
 "/dentist-cornwells-heights-pa/": "03 Bensalem Neighborhoods/Dentist near Cornwells Heights, PA",
 "/dentist-eddington-pa/": "03 Bensalem Neighborhoods/Dentist near Eddington, PA",
 "/dentist-oakford-pa/": "03 Bensalem Neighborhoods/Dentist near Oakford, PA",
 "/dentist-huntingdon-valley-pa/": "04 Montgomery County/Dentist near Huntingdon Valley, PA",
 "/dentist-bustleton-philadelphia/": "05 Northeast Philadelphia/Dentist near Bustleton, Philadelphia",
 "/dentist-far-northeast-philadelphia/": "05 Northeast Philadelphia/Dentist near Far Northeast Philadelphia",
 "/dentist-fox-chase-philadelphia/": "05 Northeast Philadelphia/Dentist near Fox Chase, Philadelphia",
 "/dentist-holmesburg-philadelphia/": "05 Northeast Philadelphia/Dentist near Holmesburg, Philadelphia",
 "/dentist-northeast-philadelphia/": "05 Northeast Philadelphia/Dentist near Northeast Philadelphia",
 "/dentist-somerton-philadelphia/": "05 Northeast Philadelphia/Dentist near Somerton, Philadelphia",
 "/dentist-torresdale-philadelphia/": "05 Northeast Philadelphia/Dentist near Torresdale, Philadelphia",
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
