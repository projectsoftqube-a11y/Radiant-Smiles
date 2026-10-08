import html
import io
import os
import re
import urllib.request

BASE = "http://localhost:3300"
DOCS = r"E:/Wordpress Project Backup/Amazing Smiles/docs/seo-content/06 Locations"
PAGES = {
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
