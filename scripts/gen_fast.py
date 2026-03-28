#!/usr/bin/env python3
"""
Fast JEE Main notes generator — NO rate limiting (unlimited quota).
5 parallel workers each handle ~11 topics.
"""
import os, sys, time, json, concurrent.futures, requests

MINIMAX_API_KEY = os.environ.get("MINIMAX_API_KEY", "")
MINIMAX_URL = "https://api.minimax.io/v1/text/chatcompletion_v2"
MODEL = "MiniMax-M2.7"
MAX_RETRIES = 3
BACKOFF = 10

JEEM_CHEM = [
    ("chem-001","Some Basic Concepts"),("chem-002","Atomic Structure"),("chem-003","Chemical Bonding"),
    ("chem-004","Classification"),("chem-005","States of Matter"),("chem-006","Thermodynamics"),
    ("chem-007","Equilibrium"),("chem-008","Redox"),("chem-009","Electrochemistry"),
    ("chem-010","Kinetics"),("chem-011","Surface Chemistry"),("chem-012","Solutions"),
    ("chem-013","Colloidal"),("chem-014","Periodic Table"),("chem-015","s-Block"),
    ("chem-016","p-Block"),("chem-017","d-Block"),("chem-018","f-Block"),
    ("chem-019","Metallurgy"),("chem-020","Hydrocarbons"),("chem-021","Haloalkanes"),
    ("chem-022","Alcohols Phenol Ether"),("chem-023","Aldehydes Ketones"),("chem-024","Carboxylic Acids"),
    ("chem-025","Amines"),("chem-026","Biomolecules"),("chem-027","Polymers"),
    ("chem-028","Environmental Chemistry"),
]
JEEM_PHY = [
    ("phy-001","Units & Measurement"),("phy-002","Motion in 1D"),("phy-003","Motion in 2D"),
    ("phy-004","Laws of Motion"),("phy-005","Work Energy Power"),("phy-006","Rotational Motion"),
    ("phy-007","Gravitation"),("phy-008","Mechanical Properties"),("phy-009","Fluid Mechanics"),
    ("phy-010","Thermal Properties"),("phy-011","Thermodynamics"),("phy-012","Kinetic Theory"),
    ("phy-013","SHM"),("phy-014","Waves"),("phy-015","Electrostatics"),
    ("phy-016","Capacitance"),("phy-017","Current Electricity"),("phy-018","Moving Charges"),
    ("phy-019","Magnetism"),("phy-020","EMI"),("phy-021","AC"),
    ("phy-022","EM Waves"),("phy-023","Ray Optics"),("phy-024","Wave Optics"),
    ("phy-025","Dual Nature"),("phy-026","Atoms"),("phy-027","Nuclei"),
    ("phy-028","Semiconductors"),
]

BASE_DIR = "/home/node/workspace/studyroadmap-astro/src/content/notes"
CHEM_DIR = f"{BASE_DIR}/jeemain/chemistry"
PHY_DIR  = f"{BASE_DIR}/jeemain/physics"

CHEM_PROMPT = """You are an expert JEE Main / JEE Advanced Chemistry tutor. Write study notes for: **{name}**.

EXACT format — do not change structure:

---
# {name}

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision.

**{name}** — Key Facts for JEE Main
• [Core fact 1 with key value or formula]
• [Core fact 2 — most tested concept]
• [Core fact 3 — common trap/slip-up]
• [Key equation or relationship]
• [Important exception or edge case]
• [Most frequently tested question type]
⚡ Exam tip: [One sharp exam-winning insight]

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**{name}** — JEE Main / Advanced Study Guide
[Write ~220 words of educational prose. Cover: core concepts, derivations, key equations, common mistakes, and at least 2 solved examples (short, 2-3 lines each) with answers. Use bold for key terms. Write as a knowledgeable tutor explaining to a serious student.]

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer timeline.

**{name}** — Comprehensive JEE Notes
[Write ~280 words at JEE Advanced level. Cover: deeper theory, edge cases, historical context, comparative analysis with related topics, challenging solved examples. Push to Advanced difficulty. Include cross-links to related topics where natural.]
"""

PHY_PROMPT = """You are an expert JEE Main / JEE Advanced Physics tutor. Write study notes for: **{name}**.

EXACT format — do not change structure:

---
# {name}

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision.

**{name}** — Key Facts for JEE Main
• [Core formula or law — write the equation]
• [Core concept — one sentence explanation]
• [Most common application of this topic]
• [Key numerical value or constant to memorise]
• [Most tested concept in JEE Main]
• [Common mistake students make here]
⚡ Exam tip: [One sharp exam-winning insight]

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**{name}** — JEE Main / Advanced Study Guide
[Write ~220 words of educational prose. Cover: core physics concepts, key equations and derivations, important applications, common misconceptions, and at least 2 solved numerical examples with answers. Use ** for key terms. Write as a knowledgeable physics tutor.]

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer timeline.

**{name}** — Comprehensive JEE Notes
[Write ~280 words at JEE Advanced level. Cover: deeper theory, extended derivations, edge cases, historical notes, comparative analysis with related topics, challenging solved examples at Advanced level. Push to Advanced difficulty where appropriate.]
"""

def call(prompt, max_tokens=1000):
    for attempt in range(MAX_RETRIES):
        try:
            r = requests.post(MINIMAX_URL, headers={"Authorization": f"Bearer {MINIMAX_API_KEY}", "Content-Type": "application/json"},
                json={"model": MODEL, "messages": [{"role": "user", "content": prompt}], "max_tokens": max_tokens}, timeout=30)
            d = r.json()
            sc = d.get("base_resp", {}).get("status_code", -1)
            if sc == 0:
                choices = d.get("choices", [])
                if choices:
                    return choices[0].get("messages", [{}])[0].get("content", "").strip()
            if sc in (1008, 2054, 2061):
                print(f"[FATAL status={sc}]"); return "__FAIL__"
            print(f"  retry status={sc} attempt {attempt+1}")
            time.sleep(BACKOFF * (2**attempt))
        except Exception as e:
            print(f"  exception: {e}, retry {attempt+1}")
            time.sleep(BACKOFF * (2**attempt))
    return "__FAIL__"

def write_note(fpath, exam_id, subject, topic_id, topic_name, content):
    frontmatter = f"""---
exam: {exam_id}
examName: JEE Main
subject: {subject}
subjectName: {subject.title()}
topic: {topic_id}
topicName: {topic_name}
weight: 3
country: india
generated: "{time.strftime("%Y-%m-%dT%H:%M:%S")}"
---
"""
    footer = "\n*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*"
    with open(fpath, "w") as fh:
        fh.write(frontmatter + content + footer)

def do_chem(tid, tname):
    fpath = f"{CHEM_DIR}/{tid}.md"
    if os.path.exists(fpath):
        return 0
    print(f"  chem {tid} {tname}")
    content = call(CHEM_PROMPT.format(name=tname))
    if content == "__FAIL__":
        return 0
    write_note(fpath, "jeemain", "chemistry", tid, tname, content)
    return 1

def do_phy(tid, tname):
    os.makedirs(PHY_DIR, exist_ok=True)
    fpath = f"{PHY_DIR}/{tid}.md"
    print(f"  phy  {tid} {tname}")
    content = call(PHY_PROMPT.format(name=tname))
    if content == "__FAIL__":
        return 0
    write_note(fpath, "jeemain", "physics", tid, tname, content)
    return 1
    return 1

def worker_chem(batch):
    return sum(do_chem(tid, tname) for tid, tname in batch)

def worker_phy(batch):
    return sum(do_phy(tid, tname) for tid, tname in batch)

def split(lst, n):
    k = len(lst) // n
    return [lst[i*k:(i+1)*k if i < n-1 else len(lst)] for i in range(n)]

if __name__ == "__main__":
    if not MINIMAX_API_KEY:
        print("ERROR: MINIMAX_API_KEY not set"); sys.exit(1)
    print(f"Unlimited quota mode — no rate limiting")
    print(f"JEE Main Chemistry: {len(JEEM_CHEM)} topics")
    print(f"JEE Main Physics: {len(JEEM_PHY)} topics")
    print()

    # Phase 1: Chemistry in parallel
    print("=== Chemistry (parallel) ===")
    chem_batches = split(JEEM_CHEM, 5)
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex:
        chem_results = list(ex.map(worker_chem, chem_batches))
    print(f"Chemistry done: {sum(chem_results)}/{len(JEEM_CHEM)}")

    # Phase 2: Physics in parallel
    print("=== Physics (parallel) ===")
    phy_batches = split(JEEM_PHY, 5)
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex:
        phy_results = list(ex.map(worker_phy, phy_batches))
    print(f"Physics done: {sum(phy_results)}/{len(JEEM_PHY)}")

    total_chem = sum(chem_results)
    total_phy = sum(phy_results)
    print(f"\n=== COMPLETE ===")
    print(f"Chemistry: {total_chem}/{len(JEEM_CHEM)}")
    print(f"Physics: {total_phy}/{len(JEEM_PHY)}")
    print(f"Total: {total_chem + total_phy}/{len(JEEM_CHEM) + len(JEEM_PHY)}")
