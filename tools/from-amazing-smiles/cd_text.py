import html
import io
import os
import re
import urllib.request

BASE = "http://localhost:3300"
DOCS = r"E:/Wordpress Project Backup/Amazing Smiles/docs/seo-content/05 Cosmetic Dentistry"
PAGES = {
 "/cosmetic-dentistry/": "00 Hub/Cosmetic Dentistry Hub",
 "/cosmetic-dentistry/porcelain-veneers/": "01 Smile Enhancement/Porcelain Veneers",
 "/cosmetic-dentistry/teeth-whitening/": "01 Smile Enhancement/Teeth Whitening",
 "/cosmetic-dentistry/dental-bonding/": "01 Smile Enhancement/Dental Bonding",
 "/cosmetic-dentistry/clear-aligners/": "02 Teeth Straightening/Clear Aligners",
 "/cosmetic-dentistry/night-guards/": "03 Protection/Night Guards",
}
INLINE = re.compile(r"</?(?:a|strong|em|span|b)(?:\s[^>]*)?>")
MDLINK = re.compile(r"\[([^\]]+)\]\([^)]+\)")


def page_text(src):
    src = src.split("<footer")[0]
    src = re.sub(r"<script.*?</script>", " ", src, flags=re.S)
    src = re.sub(r"<!--.*?-->", "", src, flags=re.S)
    src = INLINE.sub("", src)
    src = re.sub(r"<[^>]+>", " ", src)
    return norm(src)


def norm(t):
    t = html.unescape(t).replace("\u2019", "'")
    return re.sub(r"\s+", " ", t).strip().lower()


def content_text(line):
    line = MDLINK.sub(r"\1", line).replace("**", "")
    return norm(line)


total = missing = 0
for path, folder in PAGES.items():
    page = page_text(urllib.request.urlopen(BASE + path).read().decode("utf-8"))
    content = io.open(os.path.join(DOCS, folder, "02 Content.md"), encoding="utf-8").read()
    body = content.split("## [HERO]", 1)[1]
    misses = []
    for raw in body.splitlines():
        line = raw.strip()
        if not line or line.startswith(("#", "---", "**[")):
            continue
        line = re.sub(r"^(- |\d+\. )", "", line)
        if line.startswith("*") and not line.startswith("**"):
            line = line.strip("*")
        text = content_text(line)
        if len(text) < 12:
            continue
        total += 1
        variants = {text, text.replace(" and ", " & ")}
        if not any(v in page for v in variants):
            misses.append(text[:100])
            missing += 1
    print(("OK   " if not misses else "MISS ") + path + "".join("\n    - " + m for m in misses))
print(f"{total - missing}/{total} content lines found on the pages")
