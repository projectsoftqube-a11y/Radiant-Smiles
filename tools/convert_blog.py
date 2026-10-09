"""
Blog posts: convert the 10 kept posts from the old site's mirror (Radiant Smiles Old Site Backup,
a copy of the live site taken 2026-10-06) into src/content/pages/blog/posts.ts.

Kept as published: the wording, the order and the inline links (old /services/ links are pointed
at the new pages; the broken tel: link is fixed). Cleaned up: inline styles, hard line breaks,
the old site's duplicate in-content H1s and bold-only paragraphs, which become H2 subheadings
(the page H1 is the post title).

Run: python tools/convert_blog.py
"""
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MIRROR = Path(r"E:\Wordpress Project Backup\Radiant Smiles Old Site Backup\site-mirror\blog")
POSTS_JSON = Path(r"E:\Wordpress Project Backup\Radiant Smiles Old Site Backup\wp-export\json\posts.json")
OUT = ROOT / "src" / "content" / "pages" / "blog" / "posts.ts"

# Launch list (blog hub content file), with the topic each post sits under
TOPICS = {
    "best-candidate-for-dental-implants-in-yardley": "implants",
    "dental-implants-associated-costs-in-yardley": "implants",
    "natural-looking-dental-crowns-in-yardley": "implants",
    "general-dental-exam-in-yardley": "checkups",
    "general-dental-care-near-me-in-yardley": "checkups",
    "preventive-dental-treatments-near-me-in-yardley": "checkups",
    "what-to-expect-with-teeth-whitening-in-yardley": "cosmetic",
    "affordable-toothache-relief-treatment-near-me-yardley": "emergencies",
    "welcome-to-your-dentist-in-yardley": "start",
    "affordable-dentist-in-my-area-yardley": "start",
}

# Titles exactly as listed in the blog hub content file
TITLES = {
    "best-candidate-for-dental-implants-in-yardley": "Candidates for Dental Implants in Yardley",
    "dental-implants-associated-costs-in-yardley": "Dental Implant Costs in Yardley",
    "natural-looking-dental-crowns-in-yardley": "Natural Looking Dental Crowns in Yardley",
    "general-dental-exam-in-yardley": "General Dental Exam in Yardley",
    "general-dental-care-near-me-in-yardley": "General Dental Care Near Me in Yardley",
    "preventive-dental-treatments-near-me-in-yardley": "Preventive Dental Treatments Near Me in Yardley",
    "what-to-expect-with-teeth-whitening-in-yardley": "What to Expect with Teeth Whitening in Yardley",
    "affordable-toothache-relief-treatment-near-me-yardley": "Affordable Toothache Relief & Treatment Near Me, Yardley",
    "welcome-to-your-dentist-in-yardley": "Welcome to Your Dentist in Yardley",
    "affordable-dentist-in-my-area-yardley": "Affordable Dentist In My Area, Yardley",
}

# Old /services/ links → the new pages (same targets as src/content/redirects.ts)
LINKS = {
    "/services/teeth-whitening/": "/cosmetic-dentistry/teeth-whitening/",
    "/services/general-dentistry/": "/family-dentistry/",
    "/services/dental-exam/": "/preventative-care/teeth-cleaning-and-check-ups/",
    "/services/dental-crowns/": "/restorative-dentistry/dental-crowns/",
    "/services/dental-implants/": "/restorative-dentistry/dental-implants/",
}


def clean_text(s: str) -> str:
    s = html.unescape(s)
    s = s.replace("\u00a0", " ")
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def inline(fragment: str) -> str:
    """HTML inline content → Rich markup (**bold**, [label](href))."""
    fragment = re.sub(r"<br\s*/?>", " ", fragment)

    def link(m):
        href, label = m.group(1), re.sub(r"<[^>]+>", "", m.group(2))
        href = re.sub(r"^https?://www\.radiant-smiles\.com", "", href)
        href = re.sub(r"^\.\./\.\./", "/", href)
        href = re.sub(r"index\.html$", "", href)
        if "tel:" in href:
            href = "tel:+12158604600"
        for old, new in LINKS.items():
            if href.rstrip("/").endswith(old.rstrip("/")):
                href = new
        return f"[{clean_text(label)}]({href})"

    fragment = re.sub(r'<a[^>]*href="([^"]+)"[^>]*>(.*?)</a\s*>', link, fragment, flags=re.S)

    def bold(m):
        inner = clean_text(re.sub(r"<[^>]+>", "", m.group(1)))
        return f"**{inner}**" if inner else " "

    fragment = re.sub(r"<strong[^>]*>(.*?)</strong\s*>", bold, fragment, flags=re.S)
    fragment = re.sub(r"<[^>]+>", "", fragment)
    text = clean_text(fragment)
    # A bold run that holds a link reads better as the link alone
    text = re.sub(r"\*\*(\[[^\]]+\]\([^)]+\))\*\*", r"\1", text)
    text = text.replace("** **", " ").replace("****", "")
    return re.sub(r"\s+([.,;:])", r"\1", text).strip()


# Obvious slips in the published posts, fixed in place (listed for the content team)
FIXES = [
    ("personalized care and -of-the-art treatments", "personalized care and state-of-the-art treatments"),
    ("**Increased Self-esteem: F**eeling", "**Increased Self-esteem:** Feeling"),
    ("The location of the dental practise", "The location of the dental practice"),
]


def blocks_from(content: str):
    content = re.sub(r"<style>.*?</style>", "", content, flags=re.S)
    content = re.sub(r"<p>\s*<img[^>]*>\s*</p>", "", content)
    content = re.sub(r"<div[^>]*>\s*<img[^>]*>.*?</div>", "", content, count=1, flags=re.S)
    out = []
    for m in re.finditer(r"<(h1|h2|h3|p|ul)[^>]*>(.*?)</\1\s*>", content, flags=re.S):
        tag, body = m.group(1), m.group(2)
        if tag in ("h1", "h2", "h3"):
            t = clean_text(re.sub(r"<[^>]+>", " ", body))
            if t:
                out.append({"h2": t})
        elif tag == "ul":
            items = [inline(li) for li in re.findall(r"<li[^>]*>(.*?)</li\s*>", body, flags=re.S)]
            for old, new in FIXES:
                items = [i.replace(old, new) for i in items]
            items = [i for i in items if i]
            if items:
                out.append({"ul": items})
        else:
            if "<img" in body:
                continue
            t = inline(body)
            for old, new in FIXES:
                t = t.replace(old, new)
            if not t:
                continue
            # A paragraph that is only bold text is a subheading on the old site
            bold_only = re.fullmatch(r"\*\*([^*]+)\*\*", t)
            if bold_only:
                out.append({"h2": bold_only.group(1).strip()})
            else:
                out.append({"p": t})
    return out


def article(slug: str) -> str:
    s = (MIRROR / slug / "index.html").read_text(encoding="utf-8")
    m = re.search(r'<div id="content" class="clearfix">(.*?)<div class="metadata">', s, flags=re.S)
    return m.group(1)


def first_sentence_excerpt(blocks, limit=150):
    for b in blocks:
        if "p" in b:
            text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", b["p"]).replace("**", "")
            sentence = re.split(r"(?<=[.!?])\s", text)[0]
            if len(sentence) <= limit:
                return sentence
            cut = sentence[:limit].rsplit(" ", 1)[0].rstrip(",;:")
            return cut + "…"
    return ""


def meta_description(blocks, limit=155):
    text = ""
    for b in blocks:
        if "p" in b:
            text += " " + re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", b["p"]).replace("**", "")
        if len(text) > limit:
            break
    text = text.strip()
    if len(text) <= limit:
        return text
    sentences = re.split(r"(?<=[.!?])\s", text)
    out = ""
    for sentence in sentences:
        if len(out) + len(sentence) + 1 > limit:
            break
        out = (out + " " + sentence).strip()
    return out or text[:limit].rsplit(" ", 1)[0] + "…"


def main():
    dates = {p["slug"]: p["date"] for p in json.loads(POSTS_JSON.read_text(encoding="utf-8"))}
    posts = []
    for slug in TOPICS:
        blocks = blocks_from(article(slug))
        posts.append(
            {
                "slug": slug,
                "title": TITLES[slug],
                "topic": TOPICS[slug],
                "date": dates[slug],
                "excerpt": first_sentence_excerpt(blocks),
                "description": meta_description(blocks),
                "blocks": blocks,
            }
        )
    posts.sort(key=lambda p: p["date"], reverse=True)
    body = json.dumps(posts, ensure_ascii=False, indent=2)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        '/* Generated by tools/convert_blog.py from the old site mirror (copy of the live site, 2026-10-06). Do not edit by hand. */\n'
        'import type { BlogPost } from "./types";\n\n'
        f"export const posts: BlogPost[] = {body};\n",
        encoding="utf-8",
    )
    for p in posts:
        print(p["date"], p["slug"], len(p["blocks"]), "blocks |", p["excerpt"][:70], "| meta", len(p["description"]))


if __name__ == "__main__":
    main()
