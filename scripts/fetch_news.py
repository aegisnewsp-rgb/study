#!/usr/bin/env python3
"""
fetch_news.py — StudyRoadmap News Fetcher
Fetches exam/education news from free RSS sources, maintains a rolling 10-item window.
Run via cron every 30 minutes.
"""

import json
import os
import re
import sys
import urllib.request
import urllib.parse
import time
from datetime import datetime, timezone
from typing import Optional

NEWS_FILE = os.path.join(os.path.dirname(__file__), "..", "public", "news.json")
MAX_ITEMS = 10

# Free RSS feeds — exam and education news
RSS_FEEDS = [
    # India
    {
        "url": "https://news.google.com/rss/search?q=NEET+exam+India&hl=en-IN&gl=IN&ceid=IN:en",
        "source": "Google News / NEET India",
        "country": "india",
    },
    {
        "url": "https://news.google.com/rss/search?q=JEE+Main+Session+2+2026&hl=en-IN&gl=IN&ceid=IN:en",
        "source": "Google News / JEE Main Session 2 2026",
        "country": "india",
    },
    {
        "url": "https://news.google.com/rss/search?q=JEE+exam+India&hl=en-IN&gl=IN&ceid=IN:en",
        "source": "Google News / JEE India",
        "country": "india",
    },
    {
        "url": "https://news.google.com/rss/search?q=UPSC+exam&hl=en-IN&gl=IN&ceid=IN:en",
        "source": "Google News / UPSC",
        "country": "india",
    },
    {
        "url": "https://news.google.com/rss/search?q=CUET+exam+India&hl=en-IN&gl=IN&ceid=IN:en",
        "source": "Google News / CUET India",
        "country": "india",
    },
    {
        "url": "https://news.google.com/rss/search?q=SSC+CGL+exam&hl=en-IN&gl=IN&ceid=IN:en",
        "source": "Google News / SSC CGL",
        "country": "india",
    },
    # Pakistan
    {
        "url": "https://news.google.com/rss/search?q=MDCAT+Pakistan&hl=en-PK&gl=PK&ceid=PK:en",
        "source": "Google News / MDCAT Pakistan",
        "country": "pakistan",
    },
    {
        "url": "https://news.google.com/rss/search?q=ECAT+Pakistan&hl=en-PK&gl=PK&ceid=PK:en",
        "source": "Google News / ECAT Pakistan",
        "country": "pakistan",
    },
    # Nigeria
    {
        "url": "https://news.google.com/rss/search?q=JAMB+Nigeria+exam&hl=en-NG&gl=NG&ceid=NG:en",
        "source": "Google News / JAMB Nigeria",
        "country": "nigeria",
    },
    {
        "url": "https://news.google.com/rss/search?q=WAEC+Nigeria+exam&hl=en-NG&gl=NG&ceid=NG:en",
        "source": "Google News / WAEC Nigeria",
        "country": "nigeria",
    },
    # Reddit communities — education and exam discussions
    {
        "url": "https://www.reddit.com/r/Indian_Academia/.rss",
        "source": "Reddit / r/Indian_Academia",
        "country": "all",
    },
    {
        "url": "https://www.reddit.com/r/CBSE/.rss",
        "source": "Reddit / r/CBSE",
        "country": "all",
    },
    {
        "url": "https://www.reddit.com/r/JEEprep/.rss",
        "source": "Reddit / r/JEEprep",
        "country": "all",
    },
    {
        "url": "https://www.reddit.com/r/UPSC/.rss",
        "source": "Reddit / r/UPSC",
        "country": "all",
    },
    {
        "url": "https://www.reddit.com/r/neet_exams/.rss",
        "source": "Reddit / r/neet_exams",
        "country": "all",
    },
    {
        "url": "https://www.reddit.com/r/Pakistan/.rss",
        "source": "Reddit / r/Pakistan",
        "country": "all",
    },
    {
        "url": "https://www.reddit.com/r/Nigeria/.rss",
        "source": "Reddit / r/Nigeria",
        "country": "all",
    },
]

# Keywords to help tag which exams an item is relevant to
EXAM_TAGS = {
    "india": ["neet", "jee", "upsc", "cuet", "ssc cgl", "cat", "clat", "nda", "ugc net", "gre", "cbse", "board exam", "class 12", "class 10", "jee main", "jee advanced", "upsc civil services", "medical entrance", "engineering entrance", "board result"],
    "pakistan": ["mdcat", "ecat", "nat", "lat", "hat"],
    "nigeria": ["jamb", "waec", "neco", "nabteb", "ncee"],
}


def fetch_rss(url: str, timeout: int = 10) -> Optional[str]:
    """Fetch RSS feed, return raw XML or None on failure."""
    try:
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "Mozilla/5.0 (compatible; StudyRoadmapBot/1.0; +https://studyroadmap.in)",
                "Accept": "application/rss+xml, application/xml, text/xml",
            },
        )
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except Exception as e:
        print(f"[fetch_rss] ERROR fetching {url}: {e}", file=sys.stderr)
        return None


def parse_rss_item(entry: dict) -> Optional[dict]:
    """Parse a single RSS item into our news format."""
    title = entry.get("title", "").strip()
    link = entry.get("link", "")
    raw_date = entry.get("pubDate", "")
    description = entry.get("description", "").strip()

    if not title or not link:
        return None

    # Reject obviously off-topic items early (check full text)
    combined = (title + " " + description).lower()
    off_topic = ["football", "fifa", "cricket match", "basketball", "premier league",
                 "afcon", "africa cup of nations", "world cup", "premier league",
                 "crypto", "bitcoin", "celebrity", "gossip", "stock market",
                 "transfer", "trading", "share price"]
    if any(bad in combined for bad in off_topic):
        return None

    # Parse date: HTTP/GMT dates, ISO Atom dates, ISO basic dates
    published = ""
    if raw_date:
        # Try HTTP/GMT date (e.g., "Fri, 27 Mar 2026 07:00:00 GMT")
        if " GMT" in raw_date:
            published = _parse_http_date(raw_date)
        # Try ISO Atom / ISO with timezone (e.g., "2026-03-29T14:32:07+00:00" or "2026-03-29T14:32:07Z")
        if not published:
            normalized = _normalize_atom_date(raw_date)
            for fmt in ["%Y-%m-%dT%H:%M:%SZ", "%Y-%m-%dT%H:%M:%S%z", "%Y-%m-%d %H:%M:%S"]:
                for td in [normalized, normalized[:25], raw_date, raw_date[:25]]:
                    try:
                        published = datetime.strptime(td.strip(), fmt).isoformat()
                        break
                    except (ValueError, IndexError):
                        pass
                if published:
                    break
    if not published:
        published = datetime.now(timezone.utc).isoformat()

    # Auto-tag by title/description using word-boundary matching
    import re
    tagged_exams = []
    for country, keywords in EXAM_TAGS.items():
        for kw in keywords:
            # Only match as whole words (not "nat" inside "national")
            if re.search(r'\b' + re.escape(kw) + r'\b', combined):
                tagged_exams.append(kw)

    return {
        "id": link,  # Use link as unique ID for dedup
        "title": title[:200],  # Truncate very long titles
        "url": link,
        "source": entry.get("source", "Unknown"),
        "published": published or datetime.now(timezone.utc).isoformat(),
        "country": None,  # Set below by caller
        "tags": list(set(tagged_exams)) if tagged_exams else [],
    }


# Atom date format with +00:00 timezone
_REATOM_TZ = re.compile(r'([+-]\d{2}):(\d{2})$')

def _normalize_atom_date(raw: str) -> str:
    """Convert +HH:MM timezone to +HHMM for strptime."""
    m = _REATOM_TZ.search(raw)
    if m:
        return raw[:m.start()] + m.group(1) + m.group(2)
    return raw

def _parse_http_date(raw_date: str) -> str:
    """Parse HTTP date (RFC 2822) with GMT timezone, return ISO format."""
    if not raw_date:
        return ""
    # Normalize: replace GMT with +0000 for %z compatibility
    normalized = raw_date.replace(" GMT", " +0000")
    for fmt in ["%a, %d %b %Y %H:%M:%S %z", "%Y-%m-%dT%H:%M:%SZ"]:
        for td in [normalized, normalized[:25]]:
            try:
                return datetime.strptime(td.strip(), fmt).isoformat()
            except (ValueError, IndexError):
                pass
    return ""

def parse_rss(content: str) -> list[dict]:
    """Parse RSS XML into list of item dicts."""
    import xml.etree.ElementTree as ET

    items = []
    try:
        root = ET.fromstring(content)
        channel = root.find("channel")
        if channel is None:
            return items

        for item in channel.findall("item"):
            entry = {}
            for child in item:
                tag = child.tag.split("}")[-1]  # strip namespace
                if tag == "link" and child.text:
                    entry["link"] = child.text.strip()
                elif tag in ("title", "description", "pubDate"):
                    entry[tag] = child.text or ""
                elif tag == "source":
                    entry["source"] = child.text or ""
            parsed = parse_rss_item(entry)
            if parsed:
                items.append(parsed)
    except ET.ParseError as e:
        print(f"[parse_rss] XML parse error: {e}", file=sys.stderr)
    return items


def load_existing() -> list[dict]:
    """Load existing news from JSON file."""
    if not os.path.exists(NEWS_FILE):
        return []
    try:
        with open(NEWS_FILE) as f:
            data = json.load(f)
            return data if isinstance(data, list) else []
    except (json.JSONDecodeError, IOError) as e:
        print(f"[load_existing] Error reading {NEWS_FILE}: {e}", file=sys.stderr)
        return []


def save_news(items: list[dict]) -> None:
    """Save news list to JSON file."""
    try:
        with open(NEWS_FILE, "w") as f:
            json.dump(items, f, indent=2, ensure_ascii=False)
        print(f"[save_news] Saved {len(items)} items to {NEWS_FILE}")
    except IOError as e:
        print(f"[save_news] Error writing {NEWS_FILE}: {e}", file=sys.stderr)
        sys.exit(1)


def deduplicate_and_merge(existing: list[dict], new_items: list[dict]) -> list[dict]:
    """
    Merge new items with existing, keeping:
    - All existing items (preserve history)
    - New items that aren't duplicates (by URL/id)
    - Cap at MAX_ITEMS most recent by published date
    """
    existing_ids = {item["id"] for item in existing}

    added = 0
    for item in new_items:
        # Reject "all" country items with no exam tags (likely general noise)
        if item.get("country") == "all" and not item.get("tags"):
            continue
        if item["id"] not in existing_ids:
            existing.append(item)
            added += 1

    if added == 0:
        print(f"[deduplicate_and_merge] No new items — rolling window unchanged")
        return existing

    print(f"[deduplicate_and_merge] Added {added} new items")

    # Sort by published date (newest first)
    existing.sort(key=lambda x: x.get("published", ""), reverse=True)

    # Keep only top MAX_ITEMS
    # Country-diversified trim: max 4 items per country, then fill with newest
    from collections import defaultdict
    country_counts = defaultdict(int)
    diversified = []
    for item in existing:
        c = item.get("country") or "?"
        if country_counts[c] < 4:
            diversified.append(item)
            country_counts[c] += 1
        if len(diversified) >= MAX_ITEMS:
            break

    # If less than MAX_ITEMS, fill with remaining items (any country)
    if len(diversified) < MAX_ITEMS:
        added_ids = {it["id"] for it in diversified}
        for item in existing:
            if item["id"] not in added_ids and len(diversified) < MAX_ITEMS:
                diversified.append(item)

    result = diversified[:MAX_ITEMS]
    removed = len(existing) - len(result)
    if removed > 0:
        country_dist = dict(country_counts)
        print(f"[deduplicate_and_merge] Trimmed {removed} older items — country dist: {country_dist}")

    return result


def main():
    print(f"[{datetime.now(timezone.utc).isoformat()}] fetch_news.py starting...")

    all_new_items: list[dict] = []

    for feed in RSS_FEEDS:
        url = feed["url"]
        country = feed["country"]
        print(f"  Fetching: {feed['source']}...", end=" ", flush=True)
        content = fetch_rss(url)
        if content:
            items = parse_rss(content)
            for item in items:
                item["country"] = country
            print(f"{len(items)} items")
            all_new_items.extend(items)
        else:
            print("FAILED (no content)")
        time.sleep(0.5)  # Be polite to Google News

    if not all_new_items:
        print("[main] No items fetched from any feed — exiting without changing news file")
        sys.exit(0)

    existing = load_existing()
    merged = deduplicate_and_merge(existing, all_new_items)
    save_news(merged)

    print(f"[{datetime.now(timezone.utc).isoformat()}] Done. {len(merged)} items in window.")


if __name__ == "__main__":
    main()
