# StudyRoadmap.in — Master Bug List (OpenClaw-ready)

**Audit date:** 2026-07-24 (full stack + GA/SEO/ranking/CF/rendering/links deep pass)  
**Auditor:** Grok  
**Site:** https://studyroadmap.in  
**Repo branch:** `feature/openclaw-content-machine` (ahead of origin by **592** commits)  
**Live deploy freshness:** last-modified ~2026-07-22  
**OpenClaw:** all 4 on **2026.4.21 (f788c88)** after uc5t rollback  

---

## Executive summary (all domains)

| Area | Status | Severity |
|------|--------|----------|
| Infrastructure / 4 claws | Healthy; Uptime Kuma crashloop | P1 |
| Live smoke (18 checks) | **18/18 pass** | OK |
| Soft-404 / legal / HSTS | Pass | OK |
| **Google Analytics** | Live GA4; **legal/FAQ contradict**; no Consent Mode | **P0/P1** |
| AdSense baseline sample | P2 ads.txt only | P2 |
| AdSense full-site (3731 URLs) | **NOT READY** P0=13 P1=1102 P2=2064 | **P0/P1** |
| **SEO technical** | Strong schema/sitemap/GSC; thin content kills scale | mixed |
| **Ranking / SERP** | Tracker **stale since 2026-05-07**; empty rank table | **P1** |
| **Cloudflare** | Proxy/DNS OK; robots conflict; HTML DYNAMIC; ufw off | **P1** |
| **Rendering / CWV** | Normal pages OK; **`/roadmap/` ~12.4 MB props bomb** | **P0** |
| Content thinness | Systemic spokes + notes | **P1** |
| **Links** | Hub crawl 173/173 OK; **3366 ghost topics** | **P1** |
| OpenClaw runtime | Gateways up; skills mirrored | OK |
| Postgres backlog | ~950 failed historical; 66+ pending | P1 ops |

**Goal:** One master list → OpenClaw + host fix once → guards so issues never recur.

**Evidence:**
- This file: `/data/openclaw-workspace/BUG-LIST-2026-07-24.md` · mirror `/srv/studyroadmap/BUG-LIST.md`
- AdSense: `/data/openclaw-workspace/adsense-audit/202607241106/`
- SEO daily: `/data/openclaw-workspace/seo-audit/audit-20260724-0530.md`
- CWV: `/var/log/sr-pipeline/cwv-20260724.md`
- SERP: `/data/openclaw-workspace/serp/` (stale)

---

## Quick index by domain

| Domain | Bug IDs |
|--------|---------|
| AdSense / content policy | 001, 010–014, 017, 040 |
| Infra / OpenClaw | 002, 003, 019, 020, 050–054 |
| **Google Analytics / privacy** | **060–064** |
| **SEO on-page / technical** | 013, 030–032, 035–036, **065–072** |
| **Ranking / SERP / authority** | **080–084** |
| **Cloudflare / CDN / crawl** | 016, **090–095** |
| **Rendering / performance / CWV** | **100–106** |
| **Links / internal graph** | 012, 015, **110–114** |
| Content / notes / spokes | 010–015, 018, 033–034, 036–040 |

---

# P0 — Fix immediately

### BUG-001 — 13 notes trip “prohibited content” auditor (mostly false positives)
**Sev:** P0 · **Domain:** AdSense R6  
**Root cause:** `/data/sr-adsense-page-check.py` matches educational `gambling` and accounting/medical `xxx`/`XXX`.

**Pages:**
1. `/notes/cs-exec/accounting/accoun-004/` — `xxx` ledger  
2. `/notes/accagl/accounting/accoun-008/` — `XXX` journals  
3. `/notes/ini-cet/anatomy/anatom-002/` — Triple X syndrome  
4. `/notes/gate/quantitative-aptitude/gate-qa-013/` — probability history  
5. `/notes/xat/decision-making/decisi-003/` — FX metaphor  
6. `/notes/qimiyah/islamic-studies/islami-011/` — fiqh ban on gambling  
7. `/notes/sa-pharm/pharmacy/pharma-013/` — side-effect  
8. `/notes/uii/subject-knowledge/subjec-014/` — historical probability  
9. `/notes/uptet/child-pedagogy/child--005/` — variable-ratio analogy  
10. `/notes/uptet/social/social-001/` — archaeology  
11. `/notes/ibps-clerk/general-awareness/genera-007/` — taxable income  
12. `/notes/ppsc/pakistan-affairs/pakist-007/` — Zia-era ban  
13. `/notes/up-psc/history/histor-004/` — historical ban  

**Fix:** (1) tighten auditor regex to commercial intent only; (2) light rephrase where easy; (3) unit fixtures for these 13 URLs.  
**Owner:** tufi auditor + uc5t content  

---

### BUG-002 — Uptime Kuma crashloop
**Sev:** P0 infra  
**Symptom:** `uptime-kuma-ns90-uptime-kuma-1` Restarting  
**Log:** `SQLITE_ERROR: no such table: setting`  
**Fix:** restore/re-init Kuma DB; re-add monitors for studyroadmap.in + claws.  
**Owner:** host / vggo  

---

### BUG-003 — OpenClaw upgrade pin (do not use 2026.7.x without Node ≥22.22.3)
**Sev:** P0 ops  
**What happened:** `openclaw update` → 2026.7.1-2 broke uc5t on Node 22.22.2.  
**Recovery:** all claws pinned **2026.4.21**.  
**Never recur:** health-check refuse latest until Node OK; keep 4 versions identical.  

---

### BUG-060 — Legal/FAQ/about/terms deny analytics while GA4 is live
**Sev:** P0 trust / AdSense / GDPR honesty  
**Domain:** Google Analytics + privacy  

**Live:** every page loads:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XPWXLW8J3R"></script>
gtag('config', 'G-XPWXLW8J3R');
```

**Privacy (`privacy.astro`):** correctly discloses GA4 `G-XPWXLW8J3R` ✓  

**Contradictions (must fix):**
| File | False claim |
|------|-------------|
| `src/pages/index.astro` FAQ | “We do not run any first-party analytics at this time” |
| `src/pages/about.astro` | Same — no first-party analytics |
| `src/pages/terms.astro` | “sets no first-party tracking cookies” |
| Homepage FAQ JSON-LD (same FAQ text) | Surfaces false claim in rich results |

**Fix:** rewrite FAQ/about/terms to match privacy (GA4 + localStorage + future AdSense). Optionally add `gtag('config', …, { anonymize_ip: true })` if desired.  
**Never recur:** pre-deploy grep forbids “no first-party analytics” / “no tracking cookies” while Layout contains `G-XPW`.  
**Owner:** uc5t content patch (copy only)  

---

### BUG-100 — `/roadmap/` HTML ~12.4 MB (entire exam catalog in island props)
**Sev:** P0 performance / crawl budget / mobile UX  
**Domain:** Rendering  

**Evidence (2026-07-24 live):**
- Download size: **12,450,823** bytes  
- Almost all in one `<astro-island … props="{&quot;exams&quot;:[…]}">`  
- `props` attribute length ≈ **12,019,486**  
- `RoadmapApp.js` itself only ~22 KB; `client.js` ~186 KB  

**Impact:** terrible LCP/TTFB on mobile, wastes Google crawl budget, hurts AdSense UX, CF less useful.  

**Fix:**
1. Do **not** SSR-serialize full exam graph into props.  
2. Fetch `/exams.json` (already in `public/`) client-side or lazy by country.  
3. Cap initial payload; code-split.  
4. Pre-deploy fail if any HTML page > 1 MB (or > 500 KB for `/roadmap/`).  

**Owner:** structural (RoadmapApp + `roadmap.astro`) — human/Grok, not pure OpenClaw content  
**Related:** BUG-101, BUG-105  

---

# P1 — High

## Content / AdSense scale

### BUG-010 — Systemic thin exam spoke pages (eligibility / pattern / syllabus)
**Sev:** P1 · R2  
| Spoke | Pages | thin &lt;600w | median |
|-------|------:|-------------:|-------:|
| eligibility | 124 | **124** | 322 |
| pattern | 124 | **124** | 309 |
| syllabus | 124 | **121** | 324 |

Full-site AdSense: ~1100+ P1 thin. Backlog failed: eligibility 103, pattern 102, syllabus 78.  

**Fix:** thick templates from structured data + swarm; gate merge &lt;600w; optional noindex until thick.  
**Owner:** uc5t + vggo + vqzo · Priority: NEET, JEE, UPSC, SSC-CGL, MDCAT, JAMB, WAEC, CAT, CLAT, GATE, CUET  

---

### BUG-011 — Thin notes (176 &lt;3KB; 249 placeholder H1s; 3 index title mismatches)
**Sev:** P1  
- Notes total **2891**; &lt;3KB **176** (hat-ug 20, lat 19, tnpsc 16…)  
- Placeholder H1 **249** (all noindexed — good)  
- Index-eligible title/body mismatch: `clat/current-affairs/ca-002`, `ppsc/gk/gk-008`, `ssc-cgl/reasoning/rs-005`  
- subject-name-scan: 100 topicName placeholders; 649 noteMissing  

**Owner:** rewrite pipeline · pending 29 / failed 649  

---

### BUG-012 — Ghost topics = 3366 broken-link risks
**Sev:** P1 SEO + links  
Exam data lists topics with **no note file**. Worst: buet-adm 57, utbk 42, sbi-clerk 39, ailet/ibps-clerk 39, snap 36…  

**Fix:** generate notes **or** strip links for missing notes; pre-deploy `ghost-topic-scan.cjs` delta gate.  
**Owner:** tufi + vqzo · Script: `node scripts/ghost-topic-scan.cjs`  

---

### BUG-013 — Duplicate meta descriptions (13 clusters)
**Sev:** P1 R2  
Examples: 19× “Pakistan”; cloned thermo/biomolecules note descs; Kohlberg/Piaget.  
**Owner:** uc5t  

---

### BUG-014 — Low information-gain notes ~493 (R6 soft)
**Sev:** P1/P2 · `low information-gain 2/4` (474) / `1/4` (19)  
**Owner:** deep-tier rewrite  

---

### BUG-015 — QA: `/notes/neet/` missing “Biology”
**Sev:** P1 UX  
Live hub shows **Botany / Zoology / Chemistry / Physics** — not the string “Biology”.  
Journey: `FAIL|notes-neet-hub|notes-hub-empty|/notes/neet/ missing text "Biology"` (confirmed 2×).  

**Fix:** either label “Biology (Botany + Zoology)” on hub **or** update `/opt/sr-qa/journeys.cjs` expectation.  
**Owner:** tufi qa + content  

---

### BUG-017 — ads.txt placeholder
**Sev:** P2 now → P0 when AdSense approved  
No real `google.com, pub-…, DIRECT, f08c47fec0942fa0`.  

---

### BUG-018 — Content decay ~1274 pages &gt;90 days
**Sev:** P1 freshness · orphans=0 (good)  
**Owner:** vggo freshness + rewrite  

---

### BUG-019 — Git 592 commits ahead of origin
**Sev:** P1 DR · push feature branch; no PAT in remote URL  

---

### BUG-020 — Postgres backlog mass failures
**Sev:** P1 pipeline  
note-rewrite failed 649; exam-eligibility 103; pattern 102; syllabus 78; empty drafts / curate false.  
**Owner:** vqzo orchestrator  

---

## Google Analytics / privacy / consent

### BUG-061 — No Consent Mode v2 before GA load
**Sev:** P1 GDPR/EEA  
gtag loads and configs immediately with no `ad_storage`/`analytics_storage` default-denied + update on consent.  
Privacy mentions Google consent prompt mainly for **AdSense**, not analytics.  

**Fix:** implement Consent Mode (or region-gated load); document in privacy.  
**Owner:** Layout structural + privacy copy  

---

### BUG-062 — No IP anonymization / ads_data_redaction flags documented
**Sev:** P2/P1  
`gtag('config', 'G-XPWXLW8J3R')` bare — consider `anonymize_ip`, limited ads personalization until AdSense live.  
**Owner:** Layout  

---

### BUG-063 — CLAUDE.md / agent docs still “Plausible only”
**Sev:** P1 agent drift  
Live = GA4; privacy = GA4; CLAUDE.md still Plausible narrative.  
**Fix:** update CLAUDE.md, skill snippets, AGENTS-SR if needed.  
**Owner:** docs (host)  

---

### BUG-064 — About/homepage E-E-A-T privacy FAQ still wrong after deploy
**Sev:** P1 (same class as BUG-060)  
Ensure deploy of FAQ fixes actually ships (branch 592 ahead; live may lag).  
**Owner:** deploy discipline  

---

## SEO technical / on-page

### BUG-065 — Homepage title too long (~98 chars)
**Sev:** P1/P2 SERP  
Live: `StudyRoadmap 2026 — Free AI Study Plan Generator for NEET, JEE, UPSC, MDCAT, JAMB & 125+ Exams`  
Ideal ≤60 chars.  
**Owner:** index.astro copy  

---

### BUG-066 — GSC verification OK but indexing coverage unknown from host
**Sev:** P1 visibility  
Meta tag live; no automated GSC API coverage report in pipeline.  
**Fix:** periodic GSC coverage export or Search Console MCP if available; track indexed vs sitemap 3731.  
**Owner:** host / sr-cloudflare-gsc  

---

### BUG-067 — hreflang incomplete (only en + x-default on many pages)
**Sev:** P2  
CLAUDE.md mentions en-IN, en-PK, en-NG; live samples often only `en` + `x-default`.  
**Owner:** Layout geo/hreflang  

---

### BUG-068 — Strong schema present; quality under schema still thin on spokes
**Sev:** P1  
Live JSON-LD types OK (WebSite, Organization, FAQPage, HowTo, Course, BreadcrumbList, Article).  
Thin spoke body under Course/FAQ still risks low-quality rich-result eligibility.  
**Owner:** content (BUG-010)  

---

### BUG-069 — Organization logo is favicon.svg
**Sev:** P2 Knowledge Graph  
Prefer 112×112+ branded PNG/SVG logo URL.  
**Owner:** Layout + asset  

---

### BUG-070 — Organization `sameAs` empty / weak social proof
**Sev:** P2 authority  
Add real Twitter/X, LinkedIn, YouTube when profiles exist.  
**Owner:** Layout + marketing  

---

### BUG-071 — Sitemap priority/changefreq inconsistent
**Sev:** P2  
Exam URLs often loc+lastmod only; static pages “weekly” though rarely change.  
**Owner:** `scripts/fix-sitemap.cjs`  

---

### BUG-072 — llms-full.txt / llm.txt freshness
**Sev:** P2 AI SEO  
Last generated **2026-07-22**; regenerate on every deploy (`gen-llms.cjs`).  
**Owner:** deploy hook  

---

### BUG-030 — Organization schema incomplete (logo/sameAs/contact)
**Sev:** P2 · see BUG-069/070  

### BUG-031 — Sitemap priority/changefreq · see BUG-071  

### BUG-032 — llms-full stale · see BUG-072  

### BUG-035 — CLAUDE.md Plausible · see BUG-063  

### BUG-036 — Exams without notes dirs: `gre`, `manipal-met`, `pcat`
**Sev:** P2  

---

## Ranking / SERP / authority

### BUG-080 — SERP rank tracker stale / empty since 2026-05-07
**Sev:** P1 ranking ops  
Files: `/data/openclaw-workspace/serp/rank-20260507-0555.md` — table has **no positions**.  
`tracker.log`: one line May 7.  

**Fix:** re-enable `/data/sr-serp-tracker.sh` cron; verify mmx search; fill Top-1/3/10 for core queries (NEET study plan, JEE roadmap, etc.).  
**Owner:** tufi SERP + cron  

---

### BUG-081 — No weekly competitor / featured-snippet loop running
**Sev:** P1  
Ranking plan (Apr) assigned vggo/uc5t pulses; evidence of continuous SERP outline harvest is cold.  
**Owner:** vggo research cron  

---

### BUG-082 — Backlink / authority program not operational
**Sev:** P1 long-term  
Old technical SEO scorecard backlinks ~2/10; no active directory/GBP/LinkedIn pipeline in claws.  
**Owner:** human + optional tufi outreach drafts  

---

### BUG-083 — Ranking plan document outdated (gateway dead narrative)
**Sev:** P2 docs  
`/data/sr-ranking-plan.md` still says vqzo gateway dead (Apr) — **false now**. Confuses agents.  
**Fix:** refresh plan against 2026-07 health + this bug list.  
**Owner:** docs  

---

### BUG-084 — Indexable thin pages compete with thick hubs (cannibalization risk)
**Sev:** P1  
Hundreds of thin eligibility/pattern/syllabus URLs in sitemap may dilute crawl/quality vs main `/exams/{id}/`.  
**Fix:** thicken or noindex spokes; consolidate.  
**Owner:** SEO policy + BUG-010  

---

## Cloudflare / CDN / crawl

### BUG-016 — Robots.txt Cloudflare managed vs origin conflict
**Sev:** P1  
CF managed **Disallow:** ClaudeBot, Amazonbot, meta-externalagent, Bytespider, GPTBot, Google-Extended, …  
Origin later **Allow:** ClaudeBot, Amazonbot, OAI-SearchBot, PerplexityBot, …  
Bots typically honor **first** group → citation bots may stay blocked vs CLAUDE.md AI-citation intent.  

**Fix:** Cloudflare AI Crawl Control align with origin; re-curl live robots.  
**Owner:** host + `sr-cloudflare-gsc`  

---

### BUG-090 — HTML often `cf-cache-status: DYNAMIC` despite s-maxage=2592000
**Sev:** P1 CDN efficiency  
Origin sends `Cache-Control: public, max-age=300, s-maxage=2592000` but CF samples show **DYNAMIC**.  
Edge may not Cache Everything for HTML; TTFB higher than necessary.  

**Fix:** CF Cache Rule for `studyroadmap.in/*` HTML (respect origin s-maxage); purge on deploy.  
**Owner:** CF rules / `sr-cloudflare-setup.sh`  

---

### BUG-091 — Origin UFW inactive (WARN from cloudflare-gsc audit)
**Sev:** P1 security  
If proxy ever bypassed, origin exposed.  
**Fix:** `bash /data/sr-cloudflare-origin-firewall.sh --apply` after confirming CF-only access.  
**Owner:** host  

---

### BUG-092 — Bot Fight Mode blocks simple automated crawlers (403)
**Sev:** P2 ops  
Python urllib without browser UA → 403; real browsers OK.  
Impacts homemade auditors unless UA set.  
**Fix:** document UA requirement; allowlist audit tool if needed.  
**Owner:** docs / CF  

---

### BUG-093 — DNSSEC off
**Sev:** P3  
Audit: no DS/DNSKEY. Optional enable in CF.  
**Owner:** CF  

---

### BUG-094 — cloudflare-config.md still lists old Hostinger IP narrative
**Sev:** P2 docs  
Doc mentions `187.127.134.151`; live CF anycast `104.21.*` / `172.67.*`. Refresh runbook.  
**Owner:** docs  

---

### BUG-095 — Always Online / Polish / Mirage settings not verified from host
**Sev:** P3  
Recommended in cloudflare-config.md; not API-verified this audit. Confirm in dashboard.  
**Owner:** human CF checklist  

---

## Rendering / performance / CWV

### BUG-101 — CWV dual-H1 “regressions” are false positives
**Sev:** P1 tooling  
`/var/log/sr-pipeline/cwv-20260724.md` flags **H1=2** on ~19 pages.  
Cause: Layout HTML **comment** contains the string `<h1>` (“stay inside the first 14KB…LCP &lt;h1&gt;”).  
After stripping comments: **1 real H1** per page (verified NEET + home).  

**Fix:** `sr-cwv-weekly.sh` / journeys strip `<!-- -->` before counting H1.  
**Owner:** host scripts  

---

### BUG-102 — TTFB ~400–700 ms from audit host (monitor, not panic)
**Sev:** P2  
Exam pages ~55–65 KB total OK; TTFB partly geography + DYNAMIC cache (BUG-090).  
Validate with CrUX / GSC Core Web Vitals.  
**Owner:** monitor  

---

### BUG-103 — Google Fonts still runtime CDN (preload present)
**Sev:** P2 CWV  
Preload + display=swap OK; self-host Inter removes third-party RTT.  
**Owner:** optional performance  

---

### BUG-104 — GA in critical path of every page head
**Sev:** P2  
async gtag still competes for early bandwidth. Consider `requestIdleCallback` / Partytown / delayed load after consent.  
**Owner:** Layout  

---

### BUG-105 — Pre-deploy has no max HTML size gate
**Sev:** P1 prevention  
`/roadmap/` 12 MB would not fail current pre-deploy (content-only skip common).  
**Fix:** T-test: fail build if any `dist/**/*.html` &gt; N bytes (e.g. 800 KB).  
**Owner:** `sr-pre-deploy-tests.sh`  

---

### BUG-106 — CSS single bundle OK; ensure no render-blocking font CSS without preload fallback
**Sev:** P3  
Current preload+onload pattern OK; keep noscript fallback.  

---

## Links / internal graph

### BUG-110 — Hub internal link sample healthy (173/173)
**Sev:** info / baseline  
Crawl of `/`, `/exams/`, `/exams/neet/`, `/notes/neet/` internal hrefs: **all 200**.  
Orphans scan: **0**.  
*(Not a bug — baseline for regressions.)*  

---

### BUG-111 — Ghost-driven broken topic links at scale
**Sev:** P1 · same root as BUG-012  
Any UI that emits links from exam topic lists without existence check → 404/soft fails.  
**Fix:** link emitter must `exists(notePath)` or filter.  
**Owner:** notes/exam page components  

---

### BUG-112 — Weak lateral linking on exam pages
**Sev:** P2 ranking  
`/exams/neet/` internal links sparse (few related exams/notes; heavy nav/footer).  
Topic-cluster pillar links under-developed vs ranking plan.  
**Owner:** uc5t linker weekly  

---

### BUG-113 — Prefer `/exams/{id}/` over `/roadmap?exam=` (policy)
**Sev:** P1 SEO hygiene (CLAUDE.md critical rule)  
Audit sample: some footer/roadmap lists still use `/roadmap/?exam=…` (202+ on roadmap page itself is expected).  
Ensure **cards and crawlable hubs** never replace exam pages with SPA query links.  
**Owner:** components + linker  

---

### BUG-114 — NEET hub subject taxonomy vs user language
**Sev:** P1 · related BUG-015  
Official NEET language is often “Biology”; site splits Botany/Zoology. Both valid; labels must match QA + student mental model.  

---

# P2 — Medium (remainder)

### BUG-033 — OG coverage gaps (exam-level)
Notes OG ~1371 jpgs; exam-level OG incomplete. · `sr-og-backfill.sh`  

### BUG-034 — Formspree YOUR_FORMSPREE_ID comments
mailto fallback OK; clean comments.  

### BUG-037 — Self-host Inter font · see BUG-103  

### BUG-038 — CSP has no plausible.io (OK if removed)
Verify no dead Plausible script tags remain.  

### BUG-039 — Index title mismatches · see BUG-011  

### BUG-040 — Leading H1 “Topic N — …” placeholders (UPPSC/TNPSC/UTBK etc.)
Keep noindex or rewrite.  

### BUG-050 — `sr-orphans.sh` uses deprecated `datetime.utcnow()`
Cosmetic.  

### BUG-051 — skill-snippets 11 compact vs full skills on claws
Keep `sr-sync-claw-skills.sh` in health-check.  

### BUG-052 — Non-SR skills on claws (horoscope, yahoo-finance, birth-chart)
Scope pollution / quota risk. Remove from SR workers.  

### BUG-053 — Never deploy `main` (feature branch is deploy truth)

### BUG-054 — IndexNow after content waves

---

# P3 — Lower

### BUG-120 — DNSSEC off · see BUG-093  
### BUG-121 — CF Polish/Mirage not API-verified · see BUG-095  
### BUG-122 — Optional AggregateRating never add (spam policy) — keep banned  
### BUG-123 — News ticker external links `target=_blank` OK; monitor rel=noopener  

---

# Domain deep-dive (reference)

## Google Analytics (current truth)
| Item | Value |
|------|--------|
| ID | `G-XPWXLW8J3R` |
| Loader | async gtag.js |
| CSP | allows GTM + GA collect endpoints |
| Privacy page | discloses GA4 correctly |
| Consent Mode | **not implemented** |
| Contradiction pages | index FAQ, about, terms, FAQ JSON-LD |

## SEO (current truth)
| Item | Value |
|------|--------|
| Sitemap URLs | ~3731 |
| GSC meta | live |
| Soft-404 | pass |
| Schema | rich (FAQ/Course/HowTo/Breadcrumb/Article) |
| Sample hub links | 173/173 200 |
| Thin spokes | 124+124+121 under 600w |
| Ghosts | 3366 |
| Homepage title | ~98 chars |

## Ranking
| Item | Value |
|------|--------|
| Last SERP track | 2026-05-07 empty |
| Backlinks program | inactive |
| Primary blocker | thin templates + ghosts + authority |

## Cloudflare
| Item | Value |
|------|--------|
| Proxy | ON |
| www→apex | 301 |
| HTML cache sample | DYNAMIC |
| Robots | CF managed conflicts origin citation allows |
| UFW origin | inactive WARN |

## Rendering
| Page | Size | Notes |
|------|------|-------|
| `/` | ~138 KB | OK |
| `/exams/neet/` | ~62 KB | OK; 1 real H1 |
| `/notes/neet/` | ~53 KB | OK |
| `/study-plan/neet/1mo/` | ~110 KB | OK |
| **`/roadmap/`** | **~12.4 MB** | **props bomb** |

## Links
| Check | Result |
|-------|--------|
| Orphans | 0 |
| Hub crawl | 173/173 OK |
| Ghosts | 3366 |
| QA | NEET Biology string missing |

---

# OpenClaw execution plan (updated)

### Phase A — Host / structural (Grok or human)
1. BUG-001 auditor regex + fixtures  
2. BUG-060/063/035 FAQ+docs GA truth  
3. BUG-100/105 roadmap props slim + size gate  
4. BUG-002 Uptime Kuma  
5. BUG-016/090/091 Cloudflare robots + cache + ufw  
6. BUG-101 CWV H1 false positive  
7. BUG-003 version pin docs  

### Phase B — OpenClaw content
1. BUG-015/114 NEET hub labels  
2. BUG-011 three title mismatches + R6 rephrases  
3. BUG-010 top-20 exam spokes  
4. BUG-012/111 ghost strip or fill  
5. BUG-013 unique descriptions  
6. BUG-014 deep notes  

### Phase C — Ranking ops
1. BUG-080 re-enable SERP tracker  
2. BUG-081 competitor weekly  
3. BUG-084 noindex or thicken thin spokes  

### Phase D — Prevention forever
- Pre-deploy: HTML size, ghost delta, “no analytics” forbidden string, R6 fixtures, OpenClaw version equality  
- Weekly: adsense full audit → backlog  
- Heartbeat: qa-scout + kuma  

---

# Commands cheat-sheet

```bash
# Health
bash /data/sr-health-check.sh
bash /data/sr-4claw-heartbeat.sh
bash /data/sr-cloudflare-gsc-audit.sh

# Content / SEO
cd /srv/studyroadmap
node scripts/ghost-topic-scan.cjs
node scripts/placeholder-heading-scan.mjs
node scripts/title-body-scan.mjs
node scripts/subject-name-scan.cjs
bash /data/sr-sitemap-audit.sh
bash /data/sr-orphans.sh

# AdSense
bash /data/sr-adsense-audit.sh
bash /data/sr-adsense-full-audit.sh

# CWV / perf
bash /data/sr-cwv-weekly.sh
curl -sI https://studyroadmap.in/ | grep -i cf-cache
curl -sL -o /dev/null -w '%{size_download}\n' https://studyroadmap.in/roadmap/

# GA contradiction check
curl -sL https://studyroadmap.in/ | grep -i 'first-party analytics'
curl -sL https://studyroadmap.in/ | grep -o 'G-[A-Z0-9]*'

# Rewrite / drain
bash /data/sr-note-rewrite-batch.sh
bash /data/sr-backlog-drain.sh
bash /data/sr-sync-claw-skills.sh
```

---

# Success criteria (done when)

- [ ] AdSense full-audit **P0=0**; thin spokes &lt;50 on top-30 exams  
- [ ] FAQ/about/terms **match** privacy on GA (no false “no analytics”)  
- [ ] `/roadmap/` HTML **&lt; 500 KB** (or props not full catalog)  
- [ ] Ghost topics top-30 exams = 0 **or** no links to missing notes  
- [ ] Placeholder H1 on **indexable** notes = 0  
- [ ] qa-scout consecutive fails = 0  
- [ ] SERP tracker fresh &lt;7 days with real positions  
- [ ] CF robots: citation bots allow matches origin policy  
- [ ] Uptime Kuma Up; health-check WARNS=0  
- [ ] CWV script no false dual-H1  
- [ ] Pre-deploy gates: size, ghost, GA-copy, R6 fixtures  
- [ ] ads.txt real when AdSense approved  
- [ ] All 4 OpenClaws same version  

---

# Full ID registry (complete)

| ID | Sev | One-line |
|----|-----|----------|
| 001 | P0 | R6 false positives (13 notes) |
| 002 | P0 | Uptime Kuma crashloop |
| 003 | P0 | OpenClaw version/Node pin |
| 010 | P1 | Thin eligibility/pattern/syllabus all exams |
| 011 | P1 | Thin notes + placeholders + 3 title mismatches |
| 012 | P1 | 3366 ghost topics |
| 013 | P1 | Duplicate meta descriptions |
| 014 | P1 | Low information-gain notes |
| 015 | P1 | NEET hub missing “Biology” |
| 016 | P1 | CF vs origin robots conflict |
| 017 | P2 | ads.txt placeholder |
| 018 | P1 | Content decay &gt;90d |
| 019 | P1 | Git 592 ahead of origin |
| 020 | P1 | Mass failed backlog jobs |
| 030 | P2 | Organization schema incomplete |
| 031 | P2 | Sitemap priority/changefreq |
| 032 | P2 | llms-full stale |
| 033 | P2 | OG gaps |
| 034 | P2 | Formspree placeholder comments |
| 035 | P1 | CLAUDE.md Plausible (→063) |
| 036 | P2 | Exams without notes dirs |
| 037 | P2 | Self-host fonts |
| 038 | P3 | Dead Plausible refs check |
| 039 | P1 | Title mismatches (→011) |
| 040 | P2 | Topic N placeholder H1s |
| 050 | P3 | utcnow deprecation |
| 051 | P3 | skill-snippets sync |
| 052 | P2 | Non-SR skills on claws |
| 053 | P1 | Deploy branch discipline |
| 054 | P2 | IndexNow after waves |
| **060** | **P0** | **GA live vs FAQ/about/terms deny analytics** |
| **061** | **P1** | **No Consent Mode v2** |
| **062** | **P2** | **No anonymize_ip / redaction flags** |
| **063** | **P1** | **Agent docs Plausible-only drift** |
| **064** | **P1** | **Deploy lag of privacy copy fixes** |
| **065** | **P1** | **Homepage title ~98 chars** |
| **066** | **P1** | **GSC coverage not automated** |
| **067** | **P2** | **hreflang incomplete** |
| **068** | **P1** | **Thin body under rich schema** |
| **069** | **P2** | **logo=favicon** |
| **070** | **P2** | **sameAs empty** |
| **071** | **P2** | **sitemap changefreq** |
| **072** | **P2** | **llm.txt freshness** |
| **080** | **P1** | **SERP tracker empty/stale since May** |
| **081** | **P1** | **Competitor pulse cold** |
| **082** | **P1** | **Backlink program inactive** |
| **083** | **P2** | **ranking-plan.md outdated** |
| **084** | **P1** | **Thin spoke cannibalization** |
| **090** | **P1** | **CF HTML DYNAMIC despite s-maxage** |
| **091** | **P1** | **Origin UFW inactive** |
| **092** | **P2** | **Bot Fight 403 for scripts** |
| **093** | **P3** | **DNSSEC off** |
| **094** | **P2** | **cloudflare-config.md stale IPs** |
| **095** | **P3** | **Polish/Mirage unverified** |
| **100** | **P0** | **`/roadmap/` 12.4 MB props bomb** |
| **101** | **P1** | **CWV dual-H1 false positive** |
| **102** | **P2** | **TTFB monitor** |
| **103** | **P2** | **Google Fonts CDN** |
| **104** | **P2** | **GA early head cost** |
| **105** | **P1** | **No max HTML size pre-deploy gate** |
| **106** | **P3** | **Font CSS pattern keep** |
| **110** | info | Hub links 173/173 baseline |
| **111** | **P1** | Ghost link emitter |
| **112** | **P2** | Weak lateral linking |
| **113** | **P1** | roadmap?exam= vs /exams/ policy |
| **114** | **P1** | NEET Biology taxonomy |
| 120–123 | P3 | DNSSEC/CF polish/policy notes |

**Count:** ~70 distinct tracked issues (P0: 5 · P1: ~35 · P2/P3: remainder)

---

# Changelog

1. **2026-07-24 a.m.** — Initial full audit (claws, AdSense full, content scanners, smoke).  
2. **2026-07-24 a.m.** — uc5t OpenClaw pin; skills mirror; backlog enqueue.  
3. **2026-07-24 noon** — Deep pass: **GA, SEO, ranking, Cloudflare, rendering, links** → BUG-060–114 added; executive summary expanded; full ID registry.  

*End of master bug list — single source of truth for OpenClaw + host remediation.*
---

## Phase A progress (2026-07-24 p.m. — deploy + continue)

**Deployed live** commit chain: `e419362b` (GA honesty / NEET hub) + Docker build included BUG-100 slim (committed as `173a7a20`).

| ID | Status | What changed |
|----|--------|----------------|
| 001 | **FIXED** (auditor) | R6 commercial-intent regex + fixtures |
| 060/063/035/065 | **LIVE** | GA honesty FAQs + CLAUDE.md + short homepage title |
| 015/114 | **LIVE** | NEET notes hub mentions Biology (Botany & Zoology) |
| 101 | **FIXED** | CWV H1 comment strip |
| **100/105** | **LIVE + gated** | `/roadmap/` **~12.4 MB → ~501 KB**; per-exam `/data/roadmap/{id}.json` (125 files); T17 fail if >1 MB |
| **002** | **FIXED** (ops) | Kuma DB re-init; admin + 4 HTTP monitors; healthy |
| **091** | **FIXED** | ufw active; 80/443 CF IP only; SSH open |
| 016 | OPEN (needs CF_API_TOKEN) | CF managed robots still Disallow ClaudeBot/Amazonbot before origin Allow |
| 090 | OPEN (needs CF_API_TOKEN) | HTML often `cf-cache-status: DYNAMIC` |
| 003 | **FIXED** (docs) | OpenClaw pin 2026.4.21 |

**Kuma:** container healthy; setup URL via Traefik host `uptime-kuma-ns90.srv1518653.hstgr.cloud`. Admin creds: `/root/.kuma-admin.env` (mode 600). Monitors: home, NEET, notes, roadmap.

### Phase B wave (2026-07-24 continue) — LIVE

| Item | Status |
|------|--------|
| note-rewrite | **LIVE** at `45bbe954` — 9 notes: CLAT ca-002 + JEE chem-016/017/020 + phy-026 + NEET ic-005/oc-004 + MDCAT lr-6 + UPSC gs1-007/010 |
| note-rewrite wave2 | **LIVE** at `dc22ea1d` + `24138100` — oc-003, communications, CLAT en-004/006, JAMB phy-7, NEET phy-012, MDCAT lr-7, SSC rs-005, WAEC eng-9/16 (src) |
| note-rewrite wave3+restore | **LIVE** at `802428d3` — 11 notes: NECO math-9/2/11 + eng-5/10/11 + bio-11; CUET chem-005/021; ACCA financ-007; CS-Exec econom-007. Restored from WORK + HEDGEFIX after T11 wipe |
| note-rewrite wave4 | **Committed** `2cee1bf3` (8: WAEC phy-8/16, NECO phy/chem) + `835752ff` (11: CUET eng/math/phy/chem, LAT eng-2, NECO math-18/chem) — **LIVE** via manual deploy `74c146a4` @ 18:10Z |
| Deploy unblock | **FIXED** `check-scope.sh`: allow `BUG-LIST.md` + `docs/` — uncommitted BUG-LIST had aborted every post-commit ship (scope fail after gauntlet pass) |
| Ship proof | Live `74c146a4` Created=18:10Z; WAEC phy-8/16, NECO chem-9, CUET eng-001, NAT-I ar-6 all **noindex=0** HTTP 200 |
| wave5 (hourly N=8) | In-flight after scope fix: **committed** `b230e568` (6: ACCAGL accoun-010, INI-CET pathol-004, LAT gk-7, NCEE math-8 + qr-8/12); npm/docker build → auto-deploy |
| Claw health | All 4 gateways **UP**; heartbeat fails=0; qa-scout 10/10 (18:10Z) |
| Pipeline harden | FOOTERFIX + **HEDGEFIX** (≤4 hedge/1k); selective unstage; flock; scope allowlist for ops docs |
| Backlog | **~185 pending** note-rewrite; done 1751; abandoned ~972; failed ~285; top pending exams: hat-ug/tnpsc/lat/nat-i/ncee |
| Page tests | Rewritten notes rejoin index once container ships; smoke after 18:10 deploy green |
| Dual-batch race | flock prevents concurrent batch; wave5 N=10 skipped lock-busy while hourly N=8 builds |

