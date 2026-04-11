#!/usr/bin/env python3
"""
fetch_news_v2.py — StudyRoadmap Smart News Intelligence
=======================================================
A smarter replacement for fetch_news.py with:
- Scoring algorithm (recency + relevance + significance + quality)
- Value-add replacement (only replace bottom-40% items with significantly better new items)
- Country-exam matrix (10 dedicated slots: India 4, Pakistan 2, Nigeria 2, All 2)
- Story-level dedup (title similarity > 60% = same story)
- Graceful SIGTERM handling (trap + atomic rename)
- Sub-25 second completion via parallel feed fetching

Run via cron every 30 minutes.
"""

import json
import os
import re
import sys
import signal
import urllib.request
import time
import threading
from datetime import datetime, timezone, timedelta
from typing import Optional

# ── Config ────────────────────────────────────────────────────────────────────
WORKSPACE = os.path.dirname(os.path.dirname(__file__))
NEWS_FILE = os.path.join(WORKSPACE, "public", "news.json")
TEMP_FILE = NEWS_FILE + ".tmp"
ATOMIC_ON_SUCCESS = True          # rename temp → news on success

# Country-exam matrix: 10 slots total
SLOTS = {
    "india_neet":    1,
    "india_jee":     1,
    "india_upsc":    1,
    "india_general": 1,   # boards, CUET, SSC CGL, CAT, CLAT, NDA, etc.
    "pakistan_mdcat": 1,
    "pakistan_ecat": 1,
    "nigeria_jamb":  1,
    "nigeria_waec":  1,
    "all_intl":      1,   # international education
    "all_general":   1,   # cross-exam general news
}

# Keyword → slot mapping (exact/partial match)
EXAM_SLOT_KEYWORDS = {
    "india_neet":    ["neet", "neet ug", "neet-pg", "medical entrance"],
    "india_jee":     ["jee", "jee main", "jee advanced", "joint entrance"],
    "india_upsc":    ["upsc", "civil services", "ias exam", "ifs exam", "ips exam"],
    "india_general": ["cuet", "ssc cgl", "cat exam", "clat", "nda exam", "ugc net",
                      "cbse", "board exam", "class 12", "class 10", "board result"],
    "pakistan_mdcat": ["mdcat", "medical college admission test"],
    "pakistan_ecat": ["ecat", "engineering college admission test"],
    "nigeria_jamb":  ["jamb", "utme"],
    "nigeria_waec":  ["waec", "neco", "nabteb", "wassce"],
    "all_intl":      [],   # filled below — international edu news
    "all_general":   [],   # everything else cross-exam
}

# High-significance event keywords
SIGNIFICANT = [
    "result", "answer key", "score", "cutoff", "rank", "merit list",
    "registration", "correction", "objection", "challenge",
    "syllabus change", "eligibility", "notification", "admit card",
    "exam date", "examination schedule", "postponed", "cancelled",
    "new exam", "last date", "deadline",
]
# Routine article keywords (lower score)
ROUTINE = [
    "explained", "tips", "strategy", "how to", "guide", "preparation",
    "study plan", "revision", "mock test", "previous year",
    "interview", "experience", "journey", "motivation",
]

# ── RSS Feeds (same list as v1) ───────────────────────────────────────────────
RSS_FEEDS = [
    {"url": "https://news.google.com/rss/search?q=NEET+exam+India&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News / NEET India", "country": "india"},
    {"url": "https://news.google.com/rss/search?q=JEE+Main+Session+2+2026&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News / JEE Main Session 2 2026", "country": "india"},
    {"url": "https://news.google.com/rss/search?q=JEE+exam+India&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News / JEE India", "country": "india"},
    {"url": "https://news.google.com/rss/search?q=UPSC+exam&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News / UPSC", "country": "india"},
    {"url": "https://news.google.com/rss/search?q=CUET+exam+India&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News / CUET India", "country": "india"},
    {"url": "https://news.google.com/rss/search?q=SSC+CGL+exam&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News / SSC CGL", "country": "india"},
    {"url": "https://news.google.com/rss/search?q=MDCAT+Pakistan&hl=en-PK&gl=PK&ceid=PK:en", "source": "Google News / MDCAT Pakistan", "country": "pakistan"},
    {"url": "https://news.google.com/rss/search?q=ECAT+Pakistan&hl=en-PK&gl=PK&ceid=PK:en", "source": "Google News / ECAT Pakistan", "country": "pakistan"},
    {"url": "https://news.google.com/rss/search?q=JAMB+Nigeria+exam&hl=en-NG&gl=NG&ceid=NG:en", "source": "Google News / JAMB Nigeria", "country": "nigeria"},
    {"url": "https://news.google.com/rss/search?q=WAEC+Nigeria+exam&hl=en-NG&gl=NG&ceid=NG:en", "source": "Google News / WAEC Nigeria", "country": "nigeria"},
    {"url": "https://www.reddit.com/r/Indian_Academia/hot/.json?limit=10", "source": "Reddit / r/Indian_Academia", "country": "all"},
    {"url": "https://www.reddit.com/r/CBSE/hot/.json?limit=10", "source": "Reddit / r/CBSE", "country": "all"},
    {"url": "https://www.reddit.com/r/JEEprep/hot/.json?limit=10", "source": "Reddit / r/JEEprep", "country": "all"},
    {"url": "https://www.reddit.com/r/UPSC/hot/.json?limit=10", "source": "Reddit / r/UPSC", "country": "all"},
    {"url": "https://www.reddit.com/r/neet_exams/hot/.json?limit=10", "source": "Reddit / r/neet_exams", "country": "all"},
]

# ── Helpers ────────────────────────────────────────────────────────────────────
_REATOM_TZ = re.compile(r'([+-]\d{2}):(\d{2})$')

def _normalize_atom_date(raw: str) -> str:
    m = _REATOM_TZ.search(raw)
    return raw[:m.start()] + m.group(1) + m.group(2) if m else raw

def _parse_http_date(raw_date: str) -> str:
    normalized = raw_date.replace(" GMT", " +0000")
    for fmt in ["%a, %d %b %Y %H:%M:%S %z", "%Y-%m-%dT%H:%M:%SZ"]:
        for td in [normalized, normalized[:25]]:
            try:
                return datetime.strptime(td.strip(), fmt).isoformat()
            except (ValueError, IndexError):
                pass
    return ""

# ── Scoring ────────────────────────────────────────────────────────────────────
def score_item(item: dict) -> float:
    """
    Score a news item 0–100.
    Components: recency (40pts) + relevance (25pts) + significance (25pts) + quality (10pts)
    """
    now = datetime.now(timezone.utc)
    score = 0.0
    title = item.get("title", "")
    desc = item.get("description", "")
    tags = item.get("tags", [])
    combined = (title + " " + desc).lower()

    # ── Recency (max 40 pts) ───────────────────────────────────────────────────
    raw_date = item.get("published", "")
    try:
        pub = datetime.fromisoformat(raw_date.replace("Z", "+00:00"))
    except (ValueError, TypeError):
        pub = now
    age_hours = max(0, (now - pub).total_seconds() / 3600)
    if age_hours <= 1:
        recency = 40.0
    elif age_hours <= 6:
        recency = 40 - (age_hours - 1) * 3
    elif age_hours <= 24:
        recency = 25 - (age_hours - 6) * 0.6
    elif age_hours <= 72:
        recency = 14 - (age_hours - 24) * 0.1
    else:
        recency = max(0, 8 - (age_hours - 72) * 0.05)
    score += recency

    # ── Relevance (max 25 pts) ─────────────────────────────────────────────────
    # Specific exam tag match → high score
    if tags:
        score += 12
        # More specific tags score higher
        specific = {"neet", "jee", "upsc", "mdcat", "ecat", "jamb", "waec"}
        if any(t in specific for t in tags):
            score += 8
    # Country specificity
    country = item.get("country", "all")
    if country != "all":
        score += 5

    # ── Significance (max 25 pts) ───────────────────────────────────────────────
    sig_count = sum(1 for kw in SIGNIFICANT if kw in combined)
    score += min(25, sig_count * 5)
    # Routine penalty
    routine_count = sum(1 for kw in ROUTINE if kw in combined)
    score -= min(10, routine_count * 3)

    # ── Quality (max 10 pts) ───────────────────────────────────────────────────
    # Longer descriptions with specifics suggest depth
    desc_len = len(desc)
    if desc_len > 200:
        score += 6
    elif desc_len > 80:
        score += 3
    # Numbers in title (dates, years, scores) suggest concrete info
    if re.search(r'\b(202\d|20\d\d)\b', title):
        score += 2
    if re.search(r'\b\d+\b', desc) and desc_len > 100:
        score += 2

    return max(0.0, min(100.0, score))


def assign_slot(item: dict) -> str:
    """Return the best-fit slot key for an item based on its tags and country."""
    tags = set(item.get("tags", []))
    title = item.get("title", "").lower()
    desc = item.get("description", "").lower()
    combined = title + " " + desc
    country = item.get("country", "all")

    # Try each slot in priority order
    for slot, keywords in EXAM_SLOT_KEYWORDS.items():
        if slot.startswith("all_"):
            continue  # handled separately
        if any(kw in combined for kw in keywords):
            return slot

    # Fallback by country
    if country == "india":
        return "india_general"
    elif country == "pakistan":
        return "pakistan_mdcat"
    elif country == "nigeria":
        return "nigeria_jamb"
    else:
        return "all_general"


def title_similarity(a: str, b: str) -> float:
    """
    Word-overlap similarity between two titles (0.0–1.0).
    Normalises, lowercases, splits on non-alphanumeric.
    """
    def words(s):
        return set(re.findall(r'[a-z0-9]+', s.lower()))
    wa, wb = words(a), words(b)
    if not wa or not wb:
        return 0.0
    inter = wa & wb
    union = wa | wb
    return len(inter) / len(union)


# ── Fetching ──────────────────────────────────────────────────────────────────
def fetch_feed(feed: dict) -> list[dict]:
    url, source, country = feed["url"], feed["source"], feed["country"]
    try:
        req = urllib.request.Request(url, headers={
            "User-Agent": "Mozilla/5.0 (compatible; StudyRoadmapBot/2.0; +https://studyroadmap.in)",
            "Accept": "application/rss+xml, application/xml, text/xml, application/json",
        })
        with urllib.request.urlopen(req, timeout=12) as resp:
            raw = resp.read().decode("utf-8", errors="replace")
    except Exception as e:
        print(f"  [E] {source}: {e}", file=sys.stderr)
        return []

    if "/.json" in url:
        items = _parse_reddit(raw, source)
    else:
        items = _parse_rss(raw)
    for it in items:
        it["country"] = country
        it["slot"] = assign_slot(it)
        it["_score"] = score_item(it)
    return items


def _parse_rss(content: str) -> list[dict]:
    import xml.etree.ElementTree as ET
    items = []
    try:
        root = ET.fromstring(content)
        ch = root.find("channel")
        if ch is None:
            return items
        for item in ch.findall("item"):
            e = {}
            for child in item:
                tag = child.tag.split("}")[-1]
                if tag == "link" and child.text:
                    e["link"] = child.text.strip()
                elif tag in ("title", "description", "pubDate"):
                    e[tag] = child.text or ""
                elif tag == "source":
                    e["source"] = child.text or ""
            p = _parse_rss_item(e)
            if p:
                items.append(p)
    except ET.ParseError as e:
        print(f"  [E] RSS parse error: {e}", file=sys.stderr)
    return items


def _parse_reddit(content: str, source: str) -> list[dict]:
    items = []
    try:
        data = json.loads(content)
        for post in data.get("data", {}).get("children", []):
            p = _parse_reddit_item(post, source)
            if p:
                items.append(p)
    except (json.JSONDecodeError, ValueError, KeyError) as e:
        print(f"  [E] Reddit parse error {source}: {e}", file=sys.stderr)
    return items


OFF_TOPIC = {"football", "fifa", "cricket match", "basketball", "premier league",
             "groundwater", "water crisis", "flood", "earthquake", "cyclone",
             "landslide", "afcon", "world cup", "crypto", "bitcoin", "celebrity",
             "gossip", "stock market", "transfer", "trading", "share price",
             "memes", "shitpost"}

EXAM_KEYWORDS = {
    "india":    ["neet", "jee", "upsc", "cuet", "ssc cgl", "cat", "clat", "nda",
                 "ugc net", "gre", "cbse", "board exam", "class 12", "class 10",
                 "jee main", "jee advanced", "upsc civil services",
                 "medical entrance", "engineering entrance", "board result"],
    "pakistan": ["mdcat", "ecat", "nat", "lat", "hat"],
    "nigeria":  ["jamb", "waec", "neco", "nabteb", "ncee"],
}


def _parse_rss_item(e: dict) -> Optional[dict]:
    title = e.get("title", "").strip()
    link = e.get("link", "")
    if not title or not link:
        return None
    desc = e.get("description", "").strip()
    combined = (title + " " + desc).lower()
    if any(bad in combined for bad in OFF_TOPIC):
        return None

    raw_date = e.get("pubDate", "")
    published = _parse_http_date(raw_date) if " GMT" in raw_date else ""
    if not published:
        normalized = _normalize_atom_date(raw_date)
        for fmt in ["%Y-%m-%dT%H:%M:%SZ", "%Y-%m-%dT%H:%M:%S%z", "%Y-%m-%d %H:%M:%S"]:
            for td in [normalized, normalized[:25], raw_date, raw_date[:25]]:
                try:
                    published = datetime.strptime(td.strip(), fmt).isoformat()
                    break
                except (ValueError, IndexError):
                    pass
        if not published:
            published = datetime.now(timezone.utc).isoformat()

    tagged = []
    for country, kws in EXAM_KEYWORDS.items():
        for kw in kws:
            if re.search(r'\b' + re.escape(kw) + r'\b', combined):
                tagged.append(kw)

    return {
        "id": link,
        "title": title[:200],
        "url": link,
        "source": e.get("source") or "Unknown",
        "published": published,
        "description": desc[:500],
        "country": None,
        "tags": list(set(tagged)),
        "slot": None,
        "_score": 0.0,
    }


def _parse_reddit_item(post: dict, source: str) -> Optional[dict]:
    d = post.get("data", {})
    title = d.get("title", "").strip()
    permalink = d.get("permalink", "")
    link = f"https://www.reddit.com{permalink}" if permalink else d.get("url", "")
    score = d.get("score", 0)
    if not title or score < 3:
        return None
    combined = (title + " " + d.get("selftext", "")).lower()
    if any(bad in combined for bad in OFF_TOPIC):
        return None
    try:
        published = datetime.fromtimestamp(float(d.get("created_utc", 0)),
                                            tz=timezone.utc).isoformat()
    except (ValueError, OSError):
        published = datetime.now(timezone.utc).isoformat()
    tagged = []
    for country, kws in EXAM_KEYWORDS.items():
        for kw in kws:
            if re.search(r'\b' + re.escape(kw) + r'\b', combined):
                tagged.append(kw)
    return {
        "id": link or f"reddit-{d.get('id', '')}",
        "title": title[:200],
        "url": link,
        "source": source,
        "published": published,
        "description": d.get("selftext", "")[:500],
        "country": "all",
        "tags": list(set(tagged)),
        "slot": None,
        "_score": 0.0,
    }


# ── Smart merge ────────────────────────────────────────────────────────────────
def smart_merge(existing: list[dict], new_items: list[dict]) -> list[dict]:
    """
    Value-add replacement algorithm:
    1. Dedup: remove new items that are story-similar to existing (sim > 0.6)
       → keep the one with the higher score
    2. Slot-fill: maintain a matrix of 10 slots, each with a capacity
    3. Replacement: new item can replace an existing item only if:
       a. existing is in bottom 40% of its slot, AND
       b. new item has either (recency advantage OR 10+ score advantage)
    4. After all fills, fill remaining open slots with highest-scoring remaining new items
    """
    # Re-score and re-slot existing items (slot/_score are internal, not persisted)
    for item in existing:
        item["slot"] = assign_slot(item)
        item["_score"] = score_item(item)

    # Build existing_by_slot from re-scored existing items
    existing_by_slot = {slot: [] for slot in SLOTS}
    for item in existing:
        slot = item.get("slot", "all_general")
        if slot in existing_by_slot:
            existing_by_slot[slot].append(item)
        else:
            existing_by_slot["all_general"].append(item)

    # Deduplicate new items against existing (and each other)
    seen_stories = {}  # story_key → best_item
    all_candidates = existing + new_items
    for item in all_candidates:
        key = item.get("id", item.get("title", ""))
        s = item.get("_score", 0)
        if key not in seen_stories or s > seen_stories[key].get("_score", 0):
            seen_stories[key] = item

    # Build deduped new items: best per story
    new_by_story = {}
    for item in new_items:
        best_key = None
        best_score = -1
        for key, existing_item in seen_stories.items():
            if existing_item in existing and title_similarity(item["title"], existing_item["title"]) > 0.6:
                sim = title_similarity(item["title"], existing_item["title"])
                if sim > best_score:
                    best_score = sim
                    best_key = key
        if best_key and existing_by_slot.get(item.get("slot", "all_general")):
            # Compare scores: keep better one
            existing_item_in_slot = None
            for ex in existing_by_slot[item.get("slot", "all_general")]:
                if title_similarity(ex["title"], item["title"]) > 0.6:
                    existing_item_in_slot = ex
                    break
            if existing_item_in_slot and item.get("_score", 0) <= existing_item_in_slot.get("_score", 0):
                continue  # keep existing
        new_by_story[item["id"]] = item

    final_new = list(new_by_story.values())

    # Sort new items by score descending
    final_new.sort(key=lambda x: x.get("_score", 0), reverse=True)

    result = []
    slot_results = {slot: [] for slot in SLOTS}

    # Phase 1: Fill each slot with existing items (keep best by score)
    for slot in SLOTS:
        slot_items = existing_by_slot.get(slot, [])
        slot_items.sort(key=lambda x: x.get("_score", 0), reverse=True)
        cap = SLOTS[slot]
        slot_results[slot] = slot_items[:cap]

    # Phase 2: Try to add new items to their designated slots
    for item in final_new:
        slot = item.get("slot", "all_general")
        if slot not in slot_results:
            slot = "all_general"
        cap = SLOTS[slot]
        if len(slot_results[slot]) < cap:
            slot_results[slot].append(item)
        else:
            # Try replacement in bottom 40% of slot
            bottom_cut = max(1, int(cap * 0.4))
            worst_in_slot = slot_results[slot][-bottom_cut:]
            for i, worst in enumerate(worst_in_slot):
                new_score = item.get("_score", 0)
                old_score = worst.get("_score", 0)
                age_new = item.get("published", "")
                age_old = worst.get("published", "")
                try:
                    age_new_dt = datetime.fromisoformat(age_new.replace("Z", "+00:00"))
                except (ValueError, TypeError):
                    age_new_dt = datetime.min
                try:
                    age_old_dt = datetime.fromisoformat(age_old.replace("Z", "+00:00"))
                except (ValueError, TypeError):
                    age_old_dt = datetime.min
                recency_ok = age_new_dt >= age_old_dt
                score_ok = new_score >= old_score + 10
                if recency_ok or score_ok:
                    # Replace the worst item
                    replace_idx = len(slot_results[slot]) - bottom_cut + i
                    slot_results[slot][replace_idx] = item
                    break

    # Phase 3: Flatten, sort all final results by score
    all_final = []
    for slot_items in slot_results.values():
        all_final.extend(slot_items)

    # Sort by score descending for the final window
    all_final.sort(key=lambda x: x.get("_score", 0), reverse=True)

    # Trim to max 10 items (cap)
    max_total = sum(SLOTS.values())
    all_final = all_final[:max_total]

    # Clean up internal fields
    for item in all_final:
        item.pop("slot", None)
        item.pop("_score", None)
        # Remove description if it's empty
        if not item.get("description"):
            item.pop("description", None)

    return all_final


# ── Atomic write ───────────────────────────────────────────────────────────────
def save_atomic(items: list[dict]) -> bool:
    """Write items to temp file, then atomically rename. Returns True on success."""
    try:
        with open(TEMP_FILE, "w") as f:
            json.dump(items, f, indent=2, ensure_ascii=False)
        if ATOMIC_ON_SUCCESS:
            os.replace(TEMP_FILE, NEWS_FILE)
        else:
            import shutil
            shutil.move(TEMP_FILE, NEWS_FILE)
        return True
    except Exception as e:
        print(f"[E] save_atomic failed: {e}", file=sys.stderr)
        return False


def load_existing() -> list[dict]:
    if not os.path.exists(NEWS_FILE):
        return []
    try:
        with open(NEWS_FILE) as f:
            data = json.load(f)
            return data if isinstance(data, list) else []
    except (json.JSONDecodeError, IOError) as e:
        print(f"[E] load_existing: {e}", file=sys.stderr)
        return []


# ── SIGTERM handling ───────────────────────────────────────────────────────────
_shutdown_requested = False

def _sigterm_handler(signum, frame):
    global _shutdown_requested
    _shutdown_requested = True
    print("[!] SIGTERM received — will save state and exit gracefully", file=sys.stderr)

signal.signal(signal.SIGTERM, _sigterm_handler)


# ── Main ───────────────────────────────────────────────────────────────────────
def main():
    start = time.monotonic()
    print(f"[{datetime.now(timezone.utc).isoformat()}] fetch_news_v2.py starting...")

    # Parallel fetch using threads
    results: list[dict] = []
    lock = threading.Lock()

    def fetch_and_collect(feed):
        if _shutdown_requested:
            return
        items = fetch_feed(feed)
        with lock:
            results.extend(items)

    threads = []
    for feed in RSS_FEEDS:
        t = threading.Thread(target=fetch_and_collect, args=(feed,))
        t.start()
        threads.append(t)
        time.sleep(0.2)  # throttle start

    # Wait for all threads (max 20s to stay under 25s total)
    for t in threads:
        remaining = 25 - (time.monotonic() - start)
        t.join(timeout=max(1.0, remaining))

    if _shutdown_requested:
        print("[!] Shutdown requested during fetch — exiting", file=sys.stderr)
        sys.exit(0)

    elapsed_feed = time.monotonic() - start
    print(f"  Fetched {len(results)} raw items in {elapsed_feed:.1f}s")

    if not results:
        print("[main] No items fetched — keeping existing news.json unchanged")
        sys.exit(0)

    existing = load_existing()
    merged = smart_merge(existing, results)

    # Only save if changed
    changed = True
    try:
        existing_ids = {it["id"] for it in existing}
        new_ids = {it["id"] for it in merged}
        changed = (existing_ids != new_ids) or (len(existing) != len(merged))
    except Exception:
        changed = True

    if changed:
        if save_atomic(merged):
            print(f"[main] Saved {len(merged)} items → {NEWS_FILE}")
        else:
            print("[main] Save failed — news.json unchanged", file=sys.stderr)
            sys.exit(1)
    else:
        print("[main] No change — news.json unchanged")

    total_elapsed = time.monotonic() - start
    print(f"[{datetime.now(timezone.utc).isoformat()}] Done in {total_elapsed:.1f}s. "
          f"{len(merged)} items in window.")

    if total_elapsed > 23:
        print(f"[W] Took {total_elapsed:.1f}s — approaching SIGTERM limit!", file=sys.stderr)


if __name__ == "__main__":
    main()
