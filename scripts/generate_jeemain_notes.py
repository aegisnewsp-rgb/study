#!/usr/bin/env python3
"""
Generate real study note content for JEE Main Chemistry (28 topics - replace placeholder)
and JEE Main Physics (28 topics - create from scratch).
Uses MiniMax text API with exponential backoff retry.
"""

import os, sys, time, json, re
import requests

MINIMAX_API_KEY = os.environ.get("MINIMAX_API_KEY", "")
MINIMAX_URL = "https://api.minimax.io/v1/text/chatcompletion_v2"
MODEL = "MiniMax-M2.7"

# Rate limiting
CALL_GAP = 3.0  # seconds between calls
MAX_RETRIES = 3
BACKOFF_BASE = 15  # seconds

# ── JEE Main Chemistry topics ────────────────────────────────────────────────
JEEM_CHEM_TOPICS = [
    ("chem-001", "Some Basic Concepts"),
    ("chem-002", "Atomic Structure"),
    ("chem-003", "Chemical Bonding"),
    ("chem-004", "Classification"),
    ("chem-005", "States of Matter"),
    ("chem-006", "Thermodynamics"),
    ("chem-007", "Equilibrium"),
    ("chem-008", "Redox"),
    ("chem-009", "Electrochemistry"),
    ("chem-010", "Kinetics"),
    ("chem-011", "Surface Chemistry"),
    ("chem-012", "Solutions"),
    ("chem-013", "Colloidal"),
    ("chem-014", "Periodic Table"),
    ("chem-015", "s-Block"),
    ("chem-016", "p-Block"),
    ("chem-017", "d-Block"),
    ("chem-018", "f-Block"),
    ("chem-019", "Metallurgy"),
    ("chem-020", "Hydrocarbons"),
    ("chem-021", "Haloalkanes"),
    ("chem-022", "Alcohols Phenol Ether"),
    ("chem-023", "Aldehydes Ketones"),
    ("chem-024", "Carboxylic Acids"),
    ("chem-025", "Amines"),
    ("chem-026", "Biomolecules"),
    ("chem-027", "Polymers"),
    ("chem-028", "Environmental Chemistry"),
]

# ── JEE Main Physics topics ─────────────────────────────────────────────────
JEEM_PHY_TOPICS = [
    ("phy-001", "Units & Measurement"),
    ("phy-002", "Motion in 1D"),
    ("phy-003", "Motion in 2D"),
    ("phy-004", "Laws of Motion"),
    ("phy-005", "Work Energy Power"),
    ("phy-006", "Rotational Motion"),
    ("phy-007", "Gravitation"),
    ("phy-008", "Mechanical Properties"),
    ("phy-009", "Fluid Mechanics"),
    ("phy-010", "Thermal Properties"),
    ("phy-011", "Thermodynamics"),
    ("phy-012", "Kinetic Theory"),
    ("phy-013", "SHM"),
    ("phy-014", "Waves"),
    ("phy-015", "Electrostatics"),
    ("phy-016", "Capacitance"),
    ("phy-017", "Current Electricity"),
    ("phy-018", "Moving Charges"),
    ("phy-019", "Magnetism"),
    ("phy-020", "EMI"),
    ("phy-021", "AC"),
    ("phy-022", "EM Waves"),
    ("phy-023", "Ray Optics"),
    ("phy-024", "Wave Optics"),
    ("phy-025", "Dual Nature"),
    ("phy-026", "Atoms"),
    ("phy-027", "Nuclei"),
    ("phy-028", "Semiconductors"),
]

BASE_DIR = "/home/node/workspace/studyroadmap-astro/src/content/notes"
CHEM_DIR = f"{BASE_DIR}/jeemain/chemistry"
PHY_DIR  = f"{BASE_DIR}/jeemain/physics"

def call_minimax(prompt: str, max_tokens: int = 800) -> str:
    """Call MiniMax text API with retry logic. Returns text content."""
    last_error = None
    for attempt in range(MAX_RETRIES):
        try:
            resp = requests.post(
                MINIMAX_URL,
                headers={"Authorization": f"Bearer {MINIMAX_API_KEY}", "Content-Type": "application/json"},
                json={
                    "model": MODEL,
                    "messages": [{"role": "user", "content": prompt}],
                    "max_tokens": max_tokens,
                },
                timeout=30,
            )
            data = resp.json()
            sc = data.get("status_code", -1)

            if sc == 0:
                choices = data.get("choices", [])
                if choices:
                    return choices[0].get("messages", [{}])[0].get("content", "").strip()

            # Permanent failures — don't retry
            if sc in (1008, 2054, 2061):
                print(f"  [FATAL status={sc}] — not retrying")
                return "__FAIL__"

            # Rate limit / server error — retry with backoff
            if sc in (429,) or resp.status_code >= 500 or sc in (2003, 2004, 2005, 2006):
                wait = BACKOFF_BASE * (2 ** attempt)
                print(f"  Attempt {attempt+1} failed (status={sc}, http={resp.status_code}) — backoff {wait:.0f}s")
                time.sleep(wait)
                continue

            print(f"  Unexpected status={sc}, http={resp.status_code}: {str(data)[:200]}")
            last_error = str(data)

        except Exception as e:
            last_error = str(e)
            wait = BACKOFF_BASE * (2 ** attempt)
            print(f"  Exception: {e} — backoff {wait:.0f}s")
            time.sleep(wait)

    print(f"  [FAILED after {MAX_RETRIES} attempts] {last_error}")
    return "__FAIL__"


def generate_chem_content(topic_id: str, topic_name: str) -> str:
    """Generate all 3 tiers for a JEE Main Chemistry topic."""
    prompt = f"""You are an expert JEE Main / JEE Advanced Chemistry tutor. Write comprehensive study notes for the topic: **{topic_name}** (topic id: {topic_id}).

Follow this EXACT markdown structure. Do not deviate. Use proper markdown formatting.

---
# {topic_name}

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**{topic_name}** — Key Facts for JEE Main
[Write 5-7 bullet points covering the most essential facts, formulae, and common exam traps. Be concise but exam-focused. Include at least one ⚡ Exam tip line at the end.]

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**{topic_name}** — JEE Main / Advanced Study Guide
[Write a thorough but accessible explanation covering: core concepts, key equations, important exceptions, common confusion points, and at least 2-3 solved short-answer examples relevant to JEE Main difficulty. Write as educational prose, not bullet-point list. Target ~200-250 words.]

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**{topic_name}** — Comprehensive JEE Notes
[Write in-depth coverage suitable for JEE Advanced level: theoretical depth,derangements, edge cases, historical context where relevant, comparative analysis with related concepts, and practice prompts. Target ~250-300 words. Include challenging solved examples where appropriate.]
"""
    return call_minimax(prompt, max_tokens=1200)


def generate_phy_content(topic_id: str, topic_name: str) -> str:
    """Generate all 3 tiers for a JEE Main Physics topic."""
    prompt = f"""You are an expert JEE Main / JEE Advanced Physics tutor. Write comprehensive study notes for the topic: **{topic_name}** (topic id: {topic_id}).

Follow this EXACT markdown structure. Do not deviate. Use proper markdown formatting.

---
# {topic_name}

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**{topic_name}** — Key Facts for JEE Main
[Write 5-7 bullet points covering the most essential formulae, concepts, and common exam traps. Be concise but exam-focused. Include at least one ⚡ Exam tip line at the end.]

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**{topic_name}** — JEE Main / Advanced Study Guide
[Write a thorough but accessible explanation covering: core physics concepts, key equations, derivations where essential, important exceptions, and at least 2-3 short solved numerical examples relevant to JEE Main difficulty. Write as educational prose. Target ~200-250 words.]

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**{topic_name}** — Comprehensive JEE Notes
[Write in-depth coverage suitable for JEE Advanced level: deeper theory, extended derivations, edge cases, historical context, comparative analysis with related topics, and challenging solved examples. Target ~250-300 words. Push to JEE Advanced difficulty level where relevant.]
"""
    return call_minimax(prompt, max_tokens=1200)


def build_note_md(exam_id: str, exam_name: str, subject: str, subject_name: str,
                  topic_id: str, topic_name: str, weight: int,
                  generated_tiers: str) -> str:
    """Build complete note markdown file with frontmatter and generated content."""
    today = time.strftime("%Y-%m-%dT%H:%M:%S")
    country = "india"

    frontmatter = f"""\
---
exam: {exam_id}
examName: {exam_name}
subject: {subject}
subjectName: {subject_name}
topic: {topic_id}
topicName: {topic_name}
weight: {weight}
country: {country}
generated: "{today}"
---
"""

    footer = """
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*"""

    return frontmatter + generated_tiers + footer


def process_chem_topic(topic_id: str, topic_name: str) -> bool:
    fpath = f"{CHEM_DIR}/{topic_id}.md"
    if not os.path.exists(fpath):
        print(f"  [SKIP] {fpath} does not exist")
        return False

    print(f"  Generating JEE Main Chemistry: {topic_name}...")
    content = generate_chem_content(topic_id, topic_name)
    if content == "__FAIL__":
        return False

    md = build_note_md(
        exam_id="jeemain", exam_name="JEE Main",
        subject="chemistry", subject_name="Chemistry",
        topic_id=topic_id, topic_name=topic_name,
        weight=3, generated_tiers=content,
    )
    with open(fpath, "w") as fh:
        fh.write(md)
    print(f"  ✓ Wrote {fpath}")
    return True


def process_phy_topic(topic_id: str, topic_name: str) -> bool:
    os.makedirs(PHY_DIR, exist_ok=True)
    fpath = f"{PHY_DIR}/{topic_id}.md"

    print(f"  Generating JEE Main Physics: {topic_name}...")
    content = generate_phy_content(topic_id, topic_name)
    if content == "__FAIL__":
        return False

    md = build_note_md(
        exam_id="jeemain", exam_name="JEE Main",
        subject="physics", subject_name="Physics",
        topic_id=topic_id, topic_name=topic_name,
        weight=3, generated_tiers=content,
    )
    with open(fpath, "w") as fh:
        fh.write(md)
    print(f"  ✓ Wrote {fpath}")
    return True


def main():
    if not MINIMAX_API_KEY:
        print("ERROR: MINIMAX_API_KEY not set")
        sys.exit(1)

    print(f"API key: {MINIMAX_API_KEY[:20]}...")
    print()

    # ── Phase 1: JEE Main Chemistry (28 topics) ────────────────────────────
    print("=== Phase 1: JEE Main Chemistry (replace placeholder content) ===")
    chem_ok = 0
    for topic_id, topic_name in JEEM_CHEM_TOPICS:
        ok = process_chem_topic(topic_id, topic_name)
        if ok:
            chem_ok += 1
        time.sleep(CALL_GAP)

    print(f"\nChemistry: {chem_ok}/{len(JEEM_CHEM_TOPICS)} topics updated\n")

    # ── Phase 2: JEE Main Physics (28 topics, create files) ────────────────
    print("=== Phase 2: JEE Main Physics (create from scratch) ===")
    phy_ok = 0
    for topic_id, topic_name in JEEM_PHY_TOPICS:
        ok = process_phy_topic(topic_id, topic_name)
        if ok:
            phy_ok += 1
        time.sleep(CALL_GAP)

    print(f"\nPhysics: {phy_ok}/{len(JEEM_PHY_TOPICS)} topics created")
    print(f"\n=== DONE ===")
    print(f"JEE Main Chemistry: {chem_ok}/{len(JEEM_CHEM_TOPICS)}")
    print(f"JEE Main Physics:  {phy_ok}/{len(JEEM_PHY_TOPICS)}")


if __name__ == "__main__":
    main()
