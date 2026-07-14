#!/usr/bin/env bash
# sr-adsense-score.sh — comprehensive AdSense + Search + WCAG compliance
# scorecard for StudyRoadmap.in. Runs ~60 deterministic checks against
# production, outputs a weighted score out of 100.
#
# Usage: bash tests/sr-adsense-score.sh [base-url]
set +e
BASE="${1:-https://studyroadmap.in}"
TMP=$(mktemp -d)
trap "rm -rf $TMP" EXIT

# Fetch once, reuse
curl -sIL "$BASE/" -o "$TMP/headers" 2>/dev/null
curl -s "$BASE/" > "$TMP/home.html" 2>/dev/null
curl -s "$BASE/privacy/" > "$TMP/privacy.html" 2>/dev/null
curl -s "$BASE/terms/" > "$TMP/terms.html" 2>/dev/null
curl -s "$BASE/about/" > "$TMP/about.html" 2>/dev/null
curl -s "$BASE/contact/" > "$TMP/contact.html" 2>/dev/null
curl -s "$BASE/robots.txt" > "$TMP/robots.txt" 2>/dev/null
curl -s "$BASE/ads.txt" > "$TMP/ads.txt" 2>/dev/null
curl -s "$BASE/sitemap-0.xml" > "$TMP/sitemap.xml" 2>/dev/null

# Result accumulator: each line = category|weight|score_pct|note
RESULTS_FILE="$TMP/results.txt"
: > "$RESULTS_FILE"
score() { printf "%s|%s|%s|%s\n" "$1" "$2" "$3" "$4" >> "$RESULTS_FILE"; }

# ─────────────────────────────────────────────────────────────────────
# 1. CONTENT QUALITY & ORIGINALITY (weight 15)
# ─────────────────────────────────────────────────────────────────────
INDEXED=$(python3 -c "import re; print(len(re.findall(r'<loc>', open('$TMP/sitemap.xml').read())))" 2>/dev/null)
[ -z "$INDEXED" ] && INDEXED=0
[ "$INDEXED" -gt 1500 ] && score "content.depth" "5" "100" "$INDEXED indexed URLs" || score "content.depth" "5" "$((INDEXED * 100 / 1500))" "$INDEXED indexed urls"
# Sample 5 note pages, check body text length (post-DOM-strip estimate)
NOTE_OK=0; NOTE_TOTAL=5
for url in $(grep -oE '<loc>https://studyroadmap.in/notes/[^<]+</loc>' "$TMP/sitemap.xml" | head -5 | sed 's/<loc>//;s/<\/loc>//'); do
  body=$(curl -s "$url" | python3 -c "import sys, re; html=sys.stdin.read(); t=re.sub(r'<[^>]+>',' ',html); print(len(re.sub(r'\s+',' ',t).strip()))")
  [ "${body:-0}" -gt 3000 ] && NOTE_OK=$((NOTE_OK+1))
done
score "content.note-substance" "5" "$((NOTE_OK * 100 / NOTE_TOTAL))" "$NOTE_OK/$NOTE_TOTAL notes >3k chars body"
# Check for filler patterns in homepage (these are the patterns gate catches)
grep -qE 'is a key topic in this subject|Full coverage:.*detailed explanation' "$TMP/home.html" && score "content.no-filler" "5" "0" "filler patterns on homepage" || score "content.no-filler" "5" "100" "no filler patterns on homepage"

# ─────────────────────────────────────────────────────────────────────
# 2. PRIVACY & LEGAL PAGES (weight 10)
# ─────────────────────────────────────────────────────────────────────
grep -qiE 'cookies' "$TMP/privacy.html" && PV1=1 || PV1=0
grep -qiE 'third.party' "$TMP/privacy.html" && PV2=1 || PV2=0
grep -qiE 'children under 13' "$TMP/privacy.html" && PV3=1 || PV3=0
grep -qiE 'AdSense' "$TMP/privacy.html" && PV4=1 || PV4=0
grep -qiE '(EEA|GDPR|consent)' "$TMP/privacy.html" && PV5=1 || PV5=0
grep -qiE 'opt.?out' "$TMP/privacy.html" && PV6=1 || PV6=0
grep -qiE 'data rights' "$TMP/privacy.html" && PV7=1 || PV7=0
PV_TOT=$((PV1+PV2+PV3+PV4+PV5+PV6+PV7))
score "privacy.completeness" "4" "$((PV_TOT * 100 / 7))" "$PV_TOT/7 required disclosures present"

grep -qiE 'governing law' "$TMP/terms.html" && TM1=1 || TM1=0
grep -qiE 'limitation of liability' "$TMP/terms.html" && TM2=1 || TM2=0
grep -qiE 'no affiliation' "$TMP/terms.html" && TM3=1 || TM3=0
grep -qiE 'intellectual property' "$TMP/terms.html" && TM4=1 || TM4=0
grep -qiE 'accuracy disclaimer|accuracy' "$TMP/terms.html" && TM5=1 || TM5=0
TM_TOT=$((TM1+TM2+TM3+TM4+TM5))
score "terms.completeness" "3" "$((TM_TOT * 100 / 5))" "$TM_TOT/5 required sections"

ABOUT_LEN=$(python3 -c "import sys, re; t=open('$TMP/about.html').read(); print(len(re.sub(r'<[^>]+>',' ',t).strip()))")
[ "$ABOUT_LEN" -gt 800 ] && score "about.substance" "2" "100" "${ABOUT_LEN}B about-page text" || score "about.substance" "2" "$((ABOUT_LEN * 100 / 800))" "${ABOUT_LEN}B about-page text"

grep -qE 'mailto:|@' "$TMP/contact.html" && score "contact.reachable" "1" "100" "contact has email" || score "contact.reachable" "1" "0" "no contact email"

# ─────────────────────────────────────────────────────────────────────
# 3. SITE ARCHITECTURE (weight 8)
# ─────────────────────────────────────────────────────────────────────
grep -qE 'User-agent: Mediapartners-Google' "$TMP/robots.txt" && score "robots.adsense-allow" "2" "100" "Mediapartners-Google allow present" || score "robots.adsense-allow" "2" "0" "Mediapartners-Google missing"
grep -qE 'Sitemap: https?://[^/]+/sitemap' "$TMP/robots.txt" && score "robots.sitemap-pointer" "1" "100" "sitemap pointer present" || score "robots.sitemap-pointer" "1" "0" "no sitemap pointer in robots.txt"
[ "$INDEXED" -gt 0 ] && score "sitemap.present" "2" "100" "sitemap returns $INDEXED urls" || score "sitemap.present" "2" "0" "sitemap empty"
# Canonical present on critical pages
CN_OK=0
for f in home privacy terms about contact; do
  grep -qE 'rel="canonical" href="[^"]+"' "$TMP/$f.html" && CN_OK=$((CN_OK+1))
done
score "canonical.coverage" "2" "$((CN_OK * 100 / 5))" "$CN_OK/5 pages have canonical"
# Trailing-slash consistency
LIVE_HREFS=$(grep -oE 'href="/[a-z][^"#?]*"' "$TMP/home.html" | grep -vE '\.(png|jpg|svg|webp|xml|txt|js|css|ico|pdf|json|webmanifest|woff2?)"' | head -50)
# Use printf instead of echo so empty input doesn't synthesize a phantom newline
BAD_SLASH=$(printf '%s' "$LIVE_HREFS" | grep -cvE '/"$' 2>/dev/null)
[ -z "$LIVE_HREFS" ] && BAD_SLASH=0
[ "$BAD_SLASH" -eq 0 ] && score "canonical.trailing-slash" "1" "100" "all internal hrefs end with /" || score "canonical.trailing-slash" "1" "$((100 - BAD_SLASH * 10))" "$BAD_SLASH hrefs without /"

# ─────────────────────────────────────────────────────────────────────
# 4. STRUCTURED DATA (weight 8)
# ─────────────────────────────────────────────────────────────────────
SCH_OK=0; SCH_TOT=0
for f in home privacy terms about contact; do
  SCH_TOT=$((SCH_TOT+1))
  python3 -c "
import re, json, sys
html = open('$TMP/$f.html').read()
blocks = re.findall(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html, re.S)
ok = True
for b in blocks:
  b = b.strip()
  if not b: continue
  try: json.loads(b)
  except: ok = False
sys.exit(0 if ok else 1)" && SCH_OK=$((SCH_OK+1))
done
score "schema.parse-validity" "3" "$((SCH_OK * 100 / SCH_TOT))" "$SCH_OK/$SCH_TOT pages parse cleanly"

# Required types present on critical pages
HOMETYPES=$(python3 -c "
import re, json
html = open('$TMP/home.html').read()
blocks = re.findall(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html, re.S)
types = set()
for b in blocks:
  try: types.add(json.loads(b.strip()).get('@type',''))
  except: pass
print(','.join(sorted(types)))" 2>/dev/null)
echo "$HOMETYPES" | grep -q WebSite && WS=1 || WS=0
echo "$HOMETYPES" | grep -q Organization && OR=1 || OR=0
echo "$HOMETYPES" | grep -q FAQPage && FQ=1 || FQ=0
echo "$HOMETYPES" | grep -q HowTo && HT=1 || HT=0
score "schema.homepage-types" "2" "$(( (WS + OR + FQ + HT) * 25 ))" "WebSite=$WS Org=$OR FAQ=$FQ HowTo=$HT"

# Article + Breadcrumb on a sample note. Pick a 3-level-deep note URL
# (/notes/exam/subject/topic/) — the 2-level subject hubs are CollectionPage,
# not Article, so the test must hit an actual topic page.
NOTEURL=$(grep -oE '<loc>https://studyroadmap.in/notes/[^<]+/[^<]+/[^<]+/</loc>' "$TMP/sitemap.xml" | head -1 | sed 's/<loc>//;s/<\/loc>//')
curl -s "$NOTEURL" > "$TMP/note.html"
NTYPES=$(python3 -c "
import re, json
html = open('$TMP/note.html').read()
blocks = re.findall(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html, re.S)
types = []
for b in blocks:
  try: types.append(json.loads(b.strip()).get('@type',''))
  except: pass
print(','.join(types))" 2>/dev/null)
echo "$NTYPES" | grep -q Article && AR=1 || AR=0
echo "$NTYPES" | grep -q Breadcrumb && BR=1 || BR=0
echo "$NTYPES" | grep -q Person && PN=1 || PN=0
score "schema.note-types" "2" "$(( (AR + BR + PN) * 100 / 3 ))" "Article=$AR Breadcrumb=$BR Person=$PN"

# Course on exam page
curl -s "$BASE/exams/cat/" > "$TMP/exam.html"
grep -q '"@type":"Course"' "$TMP/exam.html" && CR=1 || CR=0
score "schema.course-exam" "1" "$((CR * 100))" "Course=$CR on /exams/cat/"

# ─────────────────────────────────────────────────────────────────────
# 5. CORE WEB VITALS (weight 10) — uses Playwright if available, else byte heuristic
# ─────────────────────────────────────────────────────────────────────
HSIZE=$(wc -c < "$TMP/home.html")
if [ "$HSIZE" -lt 150000 ]; then SC=100
elif [ "$HSIZE" -lt 250000 ]; then SC=80
elif [ "$HSIZE" -lt 350000 ]; then SC=60
else SC=40; fi
score "cwv.html-budget-home" "3" "$SC" "homepage $HSIZE B"

# Inline first-14k contains H1 + main
F14=$(head -c 14336 "$TMP/home.html")
echo "$F14" | grep -q '<h1' && H1=1 || H1=0
echo "$F14" | grep -q 'id="main-content"' && MM=1 || MM=0
score "cwv.first14k-lcp-candidate" "2" "$(( (H1 + MM) * 50 ))" "h1=$H1 main=$MM in first 14KB"

# Render-blocking scripts in head
BLOCK=$(python3 -c "
import re
head = open('$TMP/home.html').read()
# Only count external <script src=> (those actually block); inline FOUC-prevention
# is required and not 'render-blocking' in the way Google measures.
m = re.search(r'<head[^>]*>(.*?)</head>', head, re.S)
head_only = m.group(1) if m else head[:25000]
ext = re.findall(r'<script[^>]+src=\"[^\"]+\"[^>]*>', head_only)
blocking = [s for s in ext if 'defer' not in s and 'async' not in s and 'type=\"module\"' not in s]
print(len(blocking))")
[ "$BLOCK" -lt 3 ] && score "cwv.no-render-block" "2" "100" "$BLOCK blocking <script> in head" || score "cwv.no-render-block" "2" "$((100 - BLOCK * 20))" "$BLOCK blocking <script>"

# Real measurements (run-once Playwright)
if [ -f /srv/studyroadmap/playwright.config.ts ] && [ -d /srv/studyroadmap/node_modules/@playwright/test ]; then
  cd /srv/studyroadmap && npx playwright test tests/cwv.spec.ts --reporter=line > "$TMP/pw.log" 2>&1
  LCP_AVG=$(grep -oE 'lcp=[0-9]+ms' "$TMP/pw.log" | grep -oE '[0-9]+' | awk '{s+=$1; n++} END {if(n>0) print int(s/n); else print 9999}')
  CLS_BAD=$(grep -oE 'cls=[0-9.]+' "$TMP/pw.log" | grep -oE '[0-9.]+' | awk '$1 > 0.1' | wc -l)
  cd /root
  if [ "$LCP_AVG" -lt 2500 ]; then score "cwv.real-lcp" "2" "100" "avg LCP ${LCP_AVG}ms (target <2500ms)"
  elif [ "$LCP_AVG" -lt 4000 ]; then score "cwv.real-lcp" "2" "60" "avg LCP ${LCP_AVG}ms"
  else score "cwv.real-lcp" "2" "30" "avg LCP ${LCP_AVG}ms"; fi
  [ "$CLS_BAD" -eq 0 ] && score "cwv.real-cls" "1" "100" "all routes CLS <0.1" || score "cwv.real-cls" "1" "$((100 - CLS_BAD * 20))" "$CLS_BAD routes with CLS>0.1"
else
  score "cwv.real-lcp" "2" "0" "Playwright not available"
  score "cwv.real-cls" "1" "0" "Playwright not available"
fi

# ─────────────────────────────────────────────────────────────────────
# 6. MOBILE EXPERIENCE (weight 7)
# ─────────────────────────────────────────────────────────────────────
grep -qE 'viewport.*width=device-width' "$TMP/home.html" && score "mobile.viewport" "2" "100" "viewport meta correct" || score "mobile.viewport" "2" "0" "viewport meta missing"
grep -qE 'name="theme-color"' "$TMP/home.html" && score "mobile.theme-color" "1" "100" "theme-color set" || score "mobile.theme-color" "1" "0" "theme-color missing"
grep -qE 'apple-touch-icon.*180x180' "$TMP/home.html" && score "mobile.apple-icon" "1" "100" "apple-touch-icon" || score "mobile.apple-icon" "1" "0" "apple-touch-icon missing"
# manifest.webmanifest
MAN_CODE=$(curl -so /dev/null -w "%{http_code}" "$BASE/manifest.webmanifest")
[ "$MAN_CODE" = "200" ] && score "mobile.manifest" "1" "100" "manifest.webmanifest 200" || score "mobile.manifest" "1" "0" "manifest.webmanifest missing ($MAN_CODE)"
# Fixed-pixel widths in HTML body (responsive smell test)
# Match a standalone width="N" attribute (a space before it, not e.g. stroke-width).
# Also exclude width attrs inside <svg> tags (SVG width is intrinsic, not layout).
FIXPX=$(python3 -c "
import re
html = open('$TMP/home.html').read()
# Strip <svg ... </svg> blocks first
nosvg = re.sub(r'<svg [\s\S]*?</svg>', '', html)
# Then count standalone width= attrs
print(len(re.findall(r'\swidth=\"\d+\"', nosvg)))")
[ "$FIXPX" -lt 5 ] && score "mobile.no-fixed-px" "2" "100" "$FIXPX fixed-pixel widths" || score "mobile.no-fixed-px" "2" "$((100 - FIXPX * 5))" "$FIXPX fixed-pixel widths"

# ─────────────────────────────────────────────────────────────────────
# 7. SECURITY HEADERS / HTTPS (weight 7)
# ─────────────────────────────────────────────────────────────────────
grep -qiE 'strict-transport-security' "$TMP/headers" && HS1=1 || HS1=0
grep -qiE 'x-frame-options' "$TMP/headers" && HS2=1 || HS2=0
grep -qiE 'x-content-type-options.*nosniff' "$TMP/headers" && HS3=1 || HS3=0
grep -qiE 'referrer-policy' "$TMP/headers" && HS4=1 || HS4=0
grep -qiE 'content-security-policy' "$TMP/headers" && HS5=1 || HS5=0
grep -qiE 'permissions-policy' "$TMP/headers" && HS6=1 || HS6=0
HS_TOT=$((HS1+HS2+HS3+HS4+HS5+HS6))
score "security.headers" "4" "$((HS_TOT * 100 / 6))" "$HS_TOT/6 headers (HSTS=$HS1 XFO=$HS2 XCTO=$HS3 Ref=$HS4 CSP=$HS5 PP=$HS6)"
# HTTPS redirect from HTTP
HTTP_REDIR=$(curl -sI http://studyroadmap.in/ -o /dev/null -w "%{http_code}|%{redirect_url}" 2>/dev/null)
echo "$HTTP_REDIR" | grep -q '^301\|^308' && score "security.https-redirect" "2" "100" "http→https $(echo $HTTP_REDIR | cut -d'|' -f1)" || score "security.https-redirect" "2" "0" "no http→https redirect"
# www → apex
WWW=$(curl -sI https://www.studyroadmap.in/ -o /dev/null -w "%{http_code}|%{redirect_url}" 2>/dev/null)
echo "$WWW" | grep -q '^301\|^308' && score "security.www-canonical" "1" "100" "www→apex" || score "security.www-canonical" "1" "0" "www→apex missing"

# ─────────────────────────────────────────────────────────────────────
# 8. ACCESSIBILITY / WCAG (weight 7)
# ─────────────────────────────────────────────────────────────────────
TOTAL_SVG=$(grep -c '<svg' "$TMP/home.html")
NOAR=$(grep -c '<svg \(\?\!.*aria-hidden\)\(\?\!.*aria-label\)\(\?\!.*role=\).*' "$TMP/home.html" 2>/dev/null)
NOAR=$(python3 -c "
import re
html = open('$TMP/home.html').read()
svgs = re.findall(r'<svg [^>]*>', html)
miss = [s for s in svgs if 'aria-hidden' not in s and 'aria-label' not in s and 'role=' not in s]
print(len(miss))")
[ "$NOAR" -eq 0 ] && score "a11y.svg-aria" "2" "100" "$TOTAL_SVG svgs, $NOAR missing aria" || score "a11y.svg-aria" "2" "$((100 - NOAR * 15))" "$NOAR/$TOTAL_SVG svgs missing aria"
# Heading order
grep -qE '<h1' "$TMP/home.html" && score "a11y.h1-present" "1" "100" "h1 present" || score "a11y.h1-present" "1" "0" "h1 missing"
# Skip link
grep -qE 'href="#main-content"' "$TMP/home.html" && score "a11y.skip-link" "1" "100" "skip link present" || score "a11y.skip-link" "1" "0" "skip link missing"
# html lang
grep -qE 'html lang="[a-z]{2}' "$TMP/home.html" && score "a11y.html-lang" "1" "100" "html lang set" || score "a11y.html-lang" "1" "0" "html lang missing"
# Images without alt
NOALT=$(python3 -c "
import re
html = open('$TMP/home.html').read()
imgs = re.findall(r'<img [^>]+>', html)
miss = [i for i in imgs if 'alt=' not in i]
print(len(miss))")
[ "$NOALT" -eq 0 ] && score "a11y.img-alt" "2" "100" "all imgs have alt" || score "a11y.img-alt" "2" "$((100 - NOALT * 20))" "$NOALT imgs missing alt"

# ─────────────────────────────────────────────────────────────────────
# 9. INTERNAL LINKING (weight 5)
# ─────────────────────────────────────────────────────────────────────
HOME_LINKS=$(grep -oE 'href="/[^"]+"' "$TMP/home.html" | grep -vE '\.(png|jpg|svg|webp|xml|txt|js|css|ico|pdf|json)"' | sort -u | wc -l)
[ "$HOME_LINKS" -gt 50 ] && score "links.homepage-density" "2" "100" "$HOME_LINKS unique internal links" || score "links.homepage-density" "2" "$((HOME_LINKS * 2))" "$HOME_LINKS unique internal links"
# Hub backlinks present
HUB_OK=0
for hub in "/study-plan/" "/study-plan-generator/" "/notes/" "/exams/" "/about/" "/privacy/" "/terms/" "/after-12th/" "/compare/" "/contact/"; do
  grep -qE "href=\"$hub" "$TMP/home.html" && HUB_OK=$((HUB_OK+1))
done
score "links.hub-coverage" "2" "$((HUB_OK * 10))" "$HUB_OK/10 hub backlinks from home"
# Footer has legal links
grep -qE 'href="/privacy/"' "$TMP/home.html" && grep -qE 'href="/terms/"' "$TMP/home.html" && score "links.legal-footer" "1" "100" "legal links in footer" || score "links.legal-footer" "1" "0" "legal links missing from footer"

# ─────────────────────────────────────────────────────────────────────
# 10. IMAGE OPTIMIZATION (weight 4)
# ─────────────────────────────────────────────────────────────────────
# OG image present
grep -qE 'property="og:image"' "$TMP/home.html" && score "img.og-meta" "1" "100" "og:image present" || score "img.og-meta" "1" "0" "og:image missing"
# All og:image URLs resolve
OG_URLS=$(grep -oE 'property="og:image" content="[^"]+"' "$TMP/home.html" | sed 's/.*content="//;s/"$//')
OG_OK=0; OG_TOT=0
for u in $OG_URLS; do
  OG_TOT=$((OG_TOT+1))
  c=$(curl -so /dev/null -w "%{http_code}" "$u")
  [ "$c" = "200" ] && OG_OK=$((OG_OK+1))
done
[ "$OG_TOT" -gt 0 ] && score "img.og-resolves" "1" "$((OG_OK * 100 / OG_TOT))" "$OG_OK/$OG_TOT og urls 200" || score "img.og-resolves" "1" "0" "no og url"
# Favicon resolves
FAV=$(curl -so /dev/null -w "%{http_code}" "$BASE/favicon.svg")
[ "$FAV" = "200" ] && score "img.favicon" "1" "100" "favicon 200" || score "img.favicon" "1" "0" "favicon $FAV"
# Apple touch icon
ATI=$(curl -so /dev/null -w "%{http_code}" "$BASE/apple-touch-icon.png")
[ "$ATI" = "200" ] && score "img.apple-icon" "1" "100" "apple-touch-icon 200" || score "img.apple-icon" "1" "0" "apple-touch-icon $ATI"

# ─────────────────────────────────────────────────────────────────────
# 11. CRAWLABILITY (weight 4)
# ─────────────────────────────────────────────────────────────────────
# 404 returns 404
F404=$(curl -so /dev/null -w "%{http_code}" "$BASE/this-url-does-not-exist-12345")
[ "$F404" = "404" ] && score "crawl.real-404" "2" "100" "404 returns 404" || score "crawl.real-404" "2" "0" "soft 404 ($F404)"
# Random 10 sitemap URLs all 200
SAMPLE_OK=0; SAMPLE_TOT=10
for u in $(grep -oE '<loc>https://studyroadmap.in/[^<]+</loc>' "$TMP/sitemap.xml" | sed 's/<loc>//;s/<\/loc>//' | shuf | head -10); do
  c=$(curl -so /dev/null -w "%{http_code}" "$u")
  [ "$c" = "200" ] && SAMPLE_OK=$((SAMPLE_OK+1))
done
score "crawl.sitemap-200s" "2" "$((SAMPLE_OK * 100 / SAMPLE_TOT))" "$SAMPLE_OK/$SAMPLE_TOT sampled urls 200"

# ─────────────────────────────────────────────────────────────────────
# 12. E-E-A-T (weight 5)
# ─────────────────────────────────────────────────────────────────────
grep -qE 'meta name="author"' "$TMP/home.html" && score "eeat.author-meta" "1" "100" "author meta set" || score "eeat.author-meta" "1" "0" "author meta missing"
grep -qE '"@type":"Person"' "$TMP/home.html" && score "eeat.person-schema" "1" "100" "Person schema present" || score "eeat.person-schema" "1" "0" "Person schema missing"
# Last-updated visible on at least sample note
NOTE_HTML=$(cat "$TMP/note.html" 2>/dev/null)
echo "$NOTE_HTML" | grep -qE 'dateModified|Last updated|Updated' && score "eeat.last-modified-visible" "1" "100" "last-modified visible" || score "eeat.last-modified-visible" "1" "0" "no last-modified"
# Editorial/about disclosure
grep -qiE 'editorial|editor|team' "$TMP/about.html" && score "eeat.editorial-disclosure" "1" "100" "editorial team mentioned" || score "eeat.editorial-disclosure" "1" "0" "no editorial disclosure"
# Disclaimer page exists
DISC=$(curl -so /dev/null -w "%{http_code}" "$BASE/disclaimer/")
[ "$DISC" = "200" ] && score "eeat.disclaimer-page" "1" "100" "disclaimer page 200" || score "eeat.disclaimer-page" "1" "0" "disclaimer $DISC"

# Round-4: named author + author archive + editorial-process + external citation + no-dead-social
# Named real author byline (not generic "Editorial Team") on note page
echo "$NOTE_HTML" | grep -qE 'Pushkar Saini' && score "eeat.named-author-byline" "2" "100" "named author byline on note" || score "eeat.named-author-byline" "2" "0" "generic byline only"
# Author archive page exists with Person schema
AUTH=$(curl -s "$BASE/author/pushkar-saini/")
echo "$AUTH" | grep -q '"@type":"Person"' && score "eeat.author-archive-page" "1" "100" "author archive + Person schema" || score "eeat.author-archive-page" "1" "0" "author archive missing or no Person schema"
# Editorial-process page exists with methodology
EPROC=$(curl -s "$BASE/editorial-process/")
if echo "$EPROC" | grep -qiE 'research.*draft.*verify.*curate|fact-verify'; then
  score "eeat.editorial-process-page" "2" "100" "editorial-process documents pipeline"
else
  score "eeat.editorial-process-page" "2" "0" "editorial-process missing or thin"
fi
# External authoritative citation present on note (Sources section)
echo "$NOTE_HTML" | grep -qE 'Sources.*verification|Authoritative source|officialSource|target="_blank"[^>]*rel=' && score "eeat.external-citation" "2" "100" "external authoritative source on note" || score "eeat.external-citation" "2" "0" "no external citation"
# Organization schema sameAs is empty OR contains only verifiable URLs (no dead Twitter/LinkedIn)
SAMEAS=$(grep -oE '"sameAs":\[[^]]*\]' "$TMP/home.html" | head -1)
DEAD_SOCIAL=0
echo "$SAMEAS" | grep -qE 'twitter\.com/studyroadmap|linkedin\.com/company/studyroadmap|instagram\.com/studyroadmap' && DEAD_SOCIAL=1
[ "$DEAD_SOCIAL" = "0" ] && score "eeat.no-dead-social" "1" "100" "no dead social URLs in schema" || score "eeat.no-dead-social" "1" "0" "dead social URLs still claimed"

# ─────────────────────────────────────────────────────────────────────
# 13. ADS.TXT + ADSENSE SETUP (weight 4)
# ─────────────────────────────────────────────────────────────────────
[ -s "$TMP/ads.txt" ] && score "ads.txt-present" "1" "100" "ads.txt exists" || score "ads.txt-present" "1" "0" "ads.txt empty/missing"
grep -qE '^google\.com,\s*pub-[0-9]+,\s*DIRECT' "$TMP/ads.txt" && score "ads.txt-pub-id" "2" "100" "pub-id populated" || score "ads.txt-pub-id" "2" "0" "pub-id placeholder (user must apply + supply)"
# Real AdSense unit loader (not GA4 gtag). Expected 0 until user supplies pub-ID + snippet.
grep -qE 'pagead2\.googlesyndication\.com/pagead/js/adsbygoogle|adsbygoogle\.js|ca-pub-[0-9]+' "$TMP/home.html" && score "ads.adsense-loader" "1" "100" "AdSense script loaded" || score "ads.adsense-loader" "1" "0" "AdSense script not present (depends on approval)"

# ─────────────────────────────────────────────────────────────────────
# 14. SOFT 404 / REDIRECT QUALITY (weight 3)
# ─────────────────────────────────────────────────────────────────────
# We already counted real-404 above; here check that bad nested URLs also 404
F1=$(curl -so /dev/null -w "%{http_code}" "$BASE/exams/no-such-exam-xyz/")
[ "$F1" = "404" ] && score "redirect.nested-404" "1" "100" "deep 404 correct" || score "redirect.nested-404" "1" "0" "soft 404 on deep ($F1)"
# No 301 chains for canonical pages
C1=$(curl -sI "$BASE/" -o /dev/null -w "%{num_redirects}")
[ "$C1" -eq 0 ] && score "redirect.no-chain" "1" "100" "homepage 0 redirects" || score "redirect.no-chain" "1" "$((100 - C1 * 30))" "$C1 redirects on homepage"
# Sample exam page that we know slug-redirects (jee-main -> jeemain) — should be 301 not chain
JEE_R=$(curl -sI "$BASE/exams/jee-main/" -o /dev/null -w "%{num_redirects}|%{http_code}")
echo "$JEE_R" | grep -qE '^1\||^0\|3' && score "redirect.slug-canonical" "1" "100" "jee-main canonical: $JEE_R" || score "redirect.slug-canonical" "1" "50" "jee-main: $JEE_R"

# ─────────────────────────────────────────────────────────────────────
# 15. CSP / FRAME ANCESTORS (weight 3)
# ─────────────────────────────────────────────────────────────────────
grep -qiE 'content-security-policy' "$TMP/headers" && CSP=1 || CSP=0
grep -qiE 'permissions-policy' "$TMP/headers" && PP=1 || PP=0
grep -qiE 'frame-ancestors' "$TMP/headers" && FA=1 || FA=0
score "csp.headers" "3" "$(( (CSP + PP + FA) * 100 / 3 ))" "CSP=$CSP PP=$PP frame-ancestors=$FA"

# ─────────────────────────────────────────────────────────────────────
# Aggregate + render
# ─────────────────────────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════════════════════════"
echo "  StudyRoadmap.in — AdSense + Search + WCAG compliance scorecard"
echo "═══════════════════════════════════════════════════════════════════"
printf "%-40s  %5s  %6s  %s\n" "Check" "Wt" "Score%" "Note"
printf "%-40s  %5s  %6s  %s\n" "----------------------------------------" "-----" "------" "----"

# Sort by category prefix to render grouped
sort "$RESULTS_FILE" | awk -F'|' '
{
  cat = $1
  wt = $2 + 0
  sc = $3 + 0
  note = $4
  if (split(cat, parts, ".") >= 2) {
    cur_section = parts[1]
  } else {
    cur_section = cat
  }
  if (cur_section != last_section && last_section != "") {
    sect_score = sect_pts; sect_max = sect_wt
    printf "  → %-37s  %5s  %4d%%  %s\n", "(group total)", sect_wt, int(sect_pts * 100 / sect_wt), ""
    sect_pts = 0; sect_wt = 0
  }
  last_section = cur_section
  pts = wt * sc / 100
  printf "%-40s  %5d  %5d%%  %s\n", "  " cat, wt, sc, note
  sect_pts += pts
  sect_wt += wt
  total_pts += pts
  total_wt += wt
}
END {
  if (sect_wt > 0) printf "  → %-37s  %5s  %4d%%  %s\n", "(group total)", sect_wt, int(sect_pts * 100 / sect_wt), ""
  print ""
  printf "  WEIGHTED TOTAL: %d / %d (%.1f%%)\n", int(total_pts), total_wt, total_pts * 100 / total_wt
}
'
