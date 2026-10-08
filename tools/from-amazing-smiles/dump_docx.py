"""Dump .docx to markdown-ish text keeping style names, bold/italic runs, hyperlinks and tables."""
import sys, glob, os, io
import docx
from docx.oxml.ns import qn

def runs_md(par):
    out = []
    for child in par._p.iterchildren():
        tag = child.tag.split('}')[1]
        if tag == 'r':
            out.append(fmt_run(child))
        elif tag == 'hyperlink':
            rid = child.get(qn('r:id'))
            anchor = child.get(qn('w:anchor'))
            href = par.part.rels[rid].target_ref if rid else '#' + (anchor or '')
            text = ''.join(fmt_run(r) for r in child.iter(qn('w:r')))
            out.append(f'[{text}]({href})')
    return ''.join(out)

def fmt_run(r):
    t = ''.join(x.text or '' for x in r.iter(qn('w:t')))
    if r.find(qn('w:br')) is not None and not t: return '\n'
    rpr = r.find(qn('w:rPr'))
    if rpr is not None and t.strip():
        b = rpr.find(qn('w:b')); i = rpr.find(qn('w:i'))
        bold = b is not None and b.get(qn('w:val')) not in ('0', 'false')
        ital = i is not None and i.get(qn('w:val')) not in ('0', 'false')
        if bold: t = f'**{t}**'
        if ital: t = f'*{t}*'
    return t

def dump(path):
    d = docx.Document(path)
    body = d.element.body
    lines = []
    for el in body.iterchildren():
        tag = el.tag.split('}')[1]
        if tag == 'p':
            p = docx.text.paragraph.Paragraph(el, d)
            style = p.style.name if p.style is not None else ''
            numpr = el.find(qn('w:pPr'))
            isnum = numpr is not None and numpr.find(qn('w:numPr')) is not None
            text = runs_md(p).strip()
            if not text: continue
            lines.append(f'<{style}{" #num" if isnum else ""}> {text}')
        elif tag == 'tbl':
            t = docx.table.Table(el, d)
            lines.append('<TABLE>')
            for row in t.rows:
                lines.append('| ' + ' | '.join(' / '.join(runs_md(pp).strip() for pp in c.paragraphs if pp.text.strip()) for c in row.cells) + ' |')
            lines.append('</TABLE>')
    return '\n'.join(lines)

src = sys.argv[1]; dst = sys.argv[2]
os.makedirs(dst, exist_ok=True)
for f in sorted(glob.glob(os.path.join(src, '*.docx'))):
    out = os.path.join(dst, os.path.basename(f).replace('.docx', '.txt'))
    io.open(out, 'w', encoding='utf-8').write(dump(f))
    print(out, os.path.getsize(out))
