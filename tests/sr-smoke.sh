#!/usr/bin/env bash
# sr-smoke.sh — production smoke test for 12 critical routes.
# Covers what a Playwright e2e would for SEO + AdSense + schema:
#   - HTTP 200
#   - canonical matches fetched URL exactly (incl trailing slash)
#   - every JSON-LD block parses + has required Schema.org fields per @type
#   - robots="noindex" never appears on AdSense-indexed routes
#   - no Plausible / GA / GTM references (privacy.astro is the only allowed mention)
#   - apple-touch-icon + favicon resolve
#   - ads.txt is parseable
# Run from cron or pre-deploy.
#
# Usage: bash tests/sr-smoke.sh [base-url]  (default: https://studyroadmap.in)
set +e
BASE="${1:-https://studyroadmap.in}"

ROUTES=(
  "/"
  "/about/"
  "/privacy/"
  "/terms/"
  "/contact/"
  "/feedback/"
  "/roadmap/"
  "/study-plan/"
  "/study-plan-generator/"
  "/notes/"
  "/exams/"
  "/exams/cat/"
)

# Sample one real route per kind. Picked from current sitemap (2026-05-28).
DEEP_ROUTES=(
  "/notes/accagl/accounting/accoun-001/"
  "/study-plan/cat/3mo/"
)

ALL=("${ROUTES[@]}" "${DEEP_ROUTES[@]}")

FAILS=()
PASS=0

assert() {
  local cond="$1" msg="$2"
  if eval "$cond" >/dev/null 2>&1; then
    PASS=$((PASS+1))
  else
    FAILS+=("$msg")
  fi
}

# Per-route checks
for r in "${ALL[@]}"; do
  url="${BASE}${r}"
  code=$(curl -so /tmp/sr-smoke.html -w "%{http_code}" "$url")
  if [ "$code" != "200" ]; then
    FAILS+=("HTTP-$code $url")
    continue
  fi
  PASS=$((PASS+1))

  # Canonical match
  canon=$(grep -oE 'rel="canonical" href="[^"]+"' /tmp/sr-smoke.html | head -1 | grep -oE 'href="[^"]+"' | sed 's/href="//;s/"$//')
  if [ -n "$canon" ] && [ "$canon" != "$url" ]; then
    FAILS+=("canonical-mismatch $url -> $canon")
  fi

  # robots noindex must NOT be present on these public routes (except dynamic
  # noindexed slugs we don't test here — these are the AdSense-indexed pages).
  if grep -qE 'robots".*noindex' /tmp/sr-smoke.html; then
    case "$r" in
      /notes/*) : ;;  # individual notes may be noindex; hub is OK
      *) FAILS+=("noindex-on-public $url") ;;
    esac
  fi

  # No tracker (Plausible / GA / GTM) — privacy/terms are allowed to *mention* by name
  case "$r" in
    /privacy/|/terms/) : ;;
    *)
      if grep -qE 'plausible\.io/api/event|googletagmanager\.com/gtm\.js|google-analytics\.com|gtag\(' /tmp/sr-smoke.html; then
        FAILS+=("tracker-leak $url")
      fi
      ;;
  esac

  # JSON-LD validity + required fields
  python3 - "$url" /tmp/sr-smoke.html <<'PY'
import sys, re, json
url = sys.argv[1]
html = open(sys.argv[2], encoding='utf-8', errors='replace').read()
blocks = re.findall(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html, re.S)
REQ = {
  'Article': ['headline','image','author','datePublished','dateModified'],
  'Course': ['name','description','provider'],
  'FAQPage': ['mainEntity'],
  'BreadcrumbList': ['itemListElement'],
  'HowTo': ['name','step'],
  'Organization': ['name','url','logo'],
  'WebSite': ['name','url'],
  'CollectionPage': ['name','description'],
  'Person': ['name'],
}
errs = []
for i, b in enumerate(blocks):
  b = b.strip()
  if not b:
    continue
  try:
    obj = json.loads(b)
  except Exception as e:
    errs.append(f'jsonld#{i} parse: {e}')
    continue
  t = obj.get('@type','?')
  for k in REQ.get(t, []):
    if k not in obj or obj[k] in (None,'',[],{}):
      errs.append(f'jsonld#{i} {t} missing {k}')
if errs:
  print('JSONLD-FAIL', url, '|', '; '.join(errs[:4]))
  sys.exit(1)
PY
  [ $? -ne 0 ] && FAILS+=("jsonld $url")
done

# ads.txt parses
ADSTXT=$(curl -s "${BASE}/ads.txt")
if echo "$ADSTXT" | grep -qE '^google\.com,\s*pub-[0-9]+,\s*DIRECT'; then
  PASS=$((PASS+1))
else
  # Acceptable while user hasn't applied yet (file is comment-only stub)
  if echo "$ADSTXT" | grep -qE '^#.*google\.com.*pub-'; then
    PASS=$((PASS+1))
  else
    FAILS+=("ads.txt malformed or missing")
  fi
fi

# Apple-touch-icon + favicon
for asset in /apple-touch-icon.png /favicon.svg; do
  c=$(curl -so /dev/null -w "%{http_code}" "${BASE}${asset}")
  if [ "$c" = "200" ]; then PASS=$((PASS+1)); else FAILS+=("$c ${BASE}${asset}"); fi
done

# Sitemap-index reachable + sitemap-0 contains > 1500 URLs
SMAP=$(curl -s "${BASE}/sitemap-0.xml")
URLN=$(echo "$SMAP" | grep -oE '<loc>' | wc -l)
if [ "$URLN" -gt 1500 ]; then
  PASS=$((PASS+1))
else
  FAILS+=("sitemap too small: $URLN urls")
fi

echo "=== sr-smoke results ==="
echo "passed=$PASS  failed=${#FAILS[@]}"
if [ ${#FAILS[@]} -gt 0 ]; then
  for f in "${FAILS[@]}"; do echo "  FAIL: $f"; done
  exit 1
fi
exit 0
