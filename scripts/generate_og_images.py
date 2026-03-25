#!/usr/bin/env python3
"""
Generate per-topic OG images for StudyRoadmap notes pages.
Uses Pillow — generates 640x360 branded PNGs.
Saves to public/og-notes/{topicId}.jpg
"""
import os, re, json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = Path("/home/node/workspace/studyroadmap-astro/public/og-notes")
OUT_DIR.mkdir(exist_ok=True)

NOTES_DIR = Path("/home/node/workspace/studyroadmap-astro/src/content/notes")

# Brand colors
BG_COLOR = (15, 23, 42)        # dark blue-slate
ACCENT   = (59, 130, 246)       # blue-500  
WHITE    = (255, 255, 255)
GRAY     = (148, 163, 184)      # slate-400
GREEN    = (34, 197, 94)        # green-500

FONT_BOLD  = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG   = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def get_title_font(size):
    try:
        return ImageFont.truetype(FONT_BOLD, size)
    except:
        return ImageFont.load_default()

def get_body_font(size):
    try:
        return ImageFont.truetype(FONT_REG, size)
    except:
        return ImageFont.load_default()

def wrap_text(text, font, max_width, draw):
    """Wrap text to fit max_width."""
    words = text.split()
    lines, current = [], ""
    for word in words:
        test = (current + " " + word).strip()
        if draw.textlength(test, font=font) <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines

def generate_og(exam_name, subject_name, topic_name, country_flag, output_path):
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG_COLOR)
    draw = ImageDraw.Draw(img)

    title_font  = get_title_font(52)
    subtitle_f  = get_body_font(32)
    body_f      = get_body_font(26)

    # Country flag + site name — top left
    flag_text = f"{country_flag}  StudyRoadmap"
    draw.text((60, 50), flag_text, fill=GRAY, font=body_f)

    # Green accent bar at top
    draw.rectangle([(0, 0), (W, 6)], fill=GREEN)

    # Exam name — slate badge
    exam_label = f"  {exam_name.upper()}  "
    ex_w = draw.textlength(exam_label, font=subtitle_f)
    draw.rounded_rectangle([(60, 100), (70 + ex_w, 150)], radius=8, fill=(30, 41, 70))
    draw.text((70, 104), exam_label, fill=ACCENT, font=subtitle_f)

    # Subject name
    sub_text = f"📚 {subject_name}"
    draw.text((60, 165), sub_text, fill=GRAY, font=body_f)

    # Topic name — main headline (wrap if long)
    max_line_w = W - 120
    lines = wrap_text(topic_name, title_font, max_line_w, draw)
    line_h = 64
    total_h = len(lines) * line_h
    y_start = 260 - (total_h // 2) + (len(lines) // 2) * line_h // 2
    for i, line in enumerate(lines):
        y = y_start + i * line_h
        draw.text(((W - draw.textlength(line, font=title_font)) // 2, y),
                  line, fill=WHITE, font=title_font)

    # Bottom tagline
    tagline = "Free Study Plans · No Signup · Instant Roadmap"
    tag_w = draw.textlength(tagline, font=body_f)
    draw.text(((W - tag_w) // 2, H - 80), tagline, fill=GRAY, font=body_f)

    # Bottom accent line
    draw.rectangle([(0, H-8), (W, H)], fill=ACCENT)

    img.save(output_path, "JPEG", quality=88, optimize=True)
    print(f"  ✓ {output_path.name}")

def main():
    notes_dir = Path("/home/node/workspace/studyroadmap-astro/src/content/notes")
    count = 0

    for md_file in sorted(notes_dir.glob("*/*/*/*.md")):
        # id format: exam/subject/topicId.md
        parts = md_file.stem.split("/")
        if len(parts) < 3:
            # file is at exam/subject/topicId.md but stem gives just topicId
            rel = md_file.relative_to(notes_dir)  # e.g. neet/physics/phy-001.md
            id_parts = str(rel).replace(".md", "").split("/")
        else:
            id_parts = parts[-3:]

        exam, subject, topic_id = id_parts[0], id_parts[1], id_parts[2]

        # Read frontmatter for names
        try:
            content = md_file.read_text()
            fm_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
            if not fm_match:
                continue
            fm = fm_match.group(1)
            exam_name   = re.search(r'^examName:\s*"?(.+?)"?\s*$', fm, re.MULTILINE)
            subjectName = re.search(r'^subjectName:\s*"?(.+?)"?\s*$', fm, re.MULTILINE)
            topicName   = re.search(r'^topicName:\s*"?(.+?)"?\s*$', fm, re.MULTILINE)
            country     = re.search(r'^country:\s*"?(.+?)"?\s*$', fm, re.MULTILINE)

            if not (exam_name and topic_name and subjectName):
                continue

            exam_name_v   = exam_name.group(1).strip()
            subject_name_v = subjectName.group(1).strip()
            topic_name_v  = topicName.group(1).strip()
            country_val   = country.group(1).strip() if country else "india"

            flag = {"india": "🇮🇳", "pakistan": "🇵🇰", "nigeria": "🇳🇬"}.get(country_val, "🌍")

            out_path = OUT_DIR / f"{exam}-{subject}-{topic_id}.jpg"
            generate_og(exam_name_v, subject_name_v, topic_name_v, flag, out_path)
            count += 1
        except Exception as e:
            print(f"  ✗ {md_file}: {e}")

    print(f"\nGenerated {count} OG images → {OUT_DIR}/")

if __name__ == "__main__":
    main()
