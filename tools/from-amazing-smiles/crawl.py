import re, urllib.request, urllib.error, html as H
from collections import defaultdict
BASE = "http://localhost:3300"
def get(path):
    try:
        r = urllib.request.urlopen(BASE + path, timeout=300); return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e: return e.code, ""
xml = get("/sitemap.xml")[1]
queue = ["/", "/no-such-page-404/"] + [u.replace("https://www.radiant-smiles.com", "") for u in re.findall(r"<loc>(.*?)</loc>", xml)]
seen, status, ids = set(), {}, {}
problems = defaultdict(list)
anchors = []   # (page, href)
pending = set()  # placeholder links (#) to pages not built yet (SiteLink)
external = defaultdict(set)
while queue:
    p = queue.pop(0)
    if p in seen: continue
    seen.add(p)
    code, src = get(p); status[p] = code
    if code != 200: problems["page not 200"].append((p, code)); continue
    ids[p] = set(re.findall(r'\bid="([^"]+)"', src))
    for tag in re.findall(r"<a\b[^>]*>", src):
        m = re.search(r'\shref="([^"]*)"', tag)
        if not m:
            problems["<a> without href"].append((p, tag[:80])); continue
        href = H.unescape(m.group(1)).strip()
        if href == "#" and "data-pending-link" in tag:
            pending.add(re.search(r'data-pending-link="([^"]*)"', tag).group(1)); continue
        if href in ("", "#") or href.startswith("javascript"):
            problems["empty, # or javascript: link"].append((p, tag[:100])); continue
        if href.startswith("#"):
            anchors.append((p, href)); continue
        if href.startswith(("tel:", "sms:")):
            if not re.fullmatch(r"(tel|sms):\+1\d{10}", href): problems["bad tel/sms"].append((p, href))
            continue
        if href.startswith("mailto:"):
            if not re.fullmatch(r"mailto:[^@\s]+@[^@\s]+\.\w+", href): problems["bad mailto"].append((p, href))
            continue
        if href.startswith("http"):
            if "amazingsmilesbydesign.com" in href and "vercel" not in href:
                problems["absolute link to production domain"].append((p, href))
            external[href].add(p); continue
        path, _, frag = href.partition("#")
        if not path.startswith("/"): problems["relative link"].append((p, href)); continue
        if not path.endswith("/") and "." not in path.split("/")[-1]: problems["missing trailing slash"].append((p, href))
        if path not in seen and path not in queue and not path.startswith("/_next"): queue.append(path)
        if frag: anchors.append((path, "#" + frag, p))
# check anchors after all pages are known
for a in anchors:
    if len(a) == 2:
        page, href = a; target = page
    else:
        target, href, page = a
    if target in ids and href[1:] not in ids[target]:
        problems["anchor target missing"].append((page, target + href))
print("pages crawled:", len(seen), "| non-200:", [p for p, c in status.items() if c != 200])
print("in-page/anchor links checked:", len(anchors), "| external links:", len(external))
print("placeholder (#) links to pages not built yet:", len(pending), "distinct targets (not counted as problems)")
for k, v in problems.items():
    print(f"\n## {k} ({len(v)})")
    for x in sorted(set(v))[:40]: print("  ", x)
import json; json.dump({k: sorted(v) for k, v in external.items()}, open(__import__("os").path.join(__import__("tempfile").gettempdir(), "external.json"), "w"), indent=1)
