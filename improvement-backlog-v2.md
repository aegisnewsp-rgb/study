# StudyRoadmap — Improvement Backlog v3
Updated: 2026-04-10 | Status: Exam metadata COMPLETE ✅

---

## ✅ COMPLETED — Exam Metadata (as of 2026-04-10)
All 52 India exam files and all Pakistan/Nigeria/Bangladesh/Ghana/Kenya/South Africa/UAE exam files now have:
- ✅ examPattern
- ✅ eligibility  
- ✅ description

Tier 1 and Tier 2 items from v2 are ** DONE**. WAEC, NECO, MDCAT, NAT-I, JEE Main, NEET all verified complete.

---

## 🔴 CRITICAL — User Action Required

1. **Deploy service DOWN** — SSH fix needed:
   ```bash
   sudo sed -i 's/Type=oneshot/Type=simple/' /etc/systemd/system/studyroadmap-deploy.service
   sudo sed -i 's/Restart=no/Restart=always/' /etc/systemd/system/studyroadmap-deploy.service
   sudo systemctl daemon-reload && sudo systemctl restart studyroadmap-deploy
   ```
   All code changes since 2026-04-08 are stuck locally (cannot deploy).

2. **GSC verification** — Replace `YOUR_VERIFICATION_CODE_HERE` in `src/layouts/Layout.astro`

3. **Bing verification** — Replace `REPLACE_WITH_BING_VERIFICATION_CODE` in `src/layouts/Layout.astro`

4. **AdSense** — Needs approved account + code injection

5. **Formspree** — Replace `REPLACE_WITH_FORMSPREE_ID` in `src/pages/feedback.astro`

6. **GitHub push** — No origin remote; commits accumulate locally

---

## 🟡 HIGH PRIORITY — Content Quality (Ongoing)

**Approach:** Spawn content wave subagents on-demand (daily cron handles 10-20 pages automatically).

### Known placeholder clusters (2026-04-10):

| Exam | Files | Size | Issue |
|------|-------|------|-------|
| ras/economics | econom-001 to econom-008 | ~1.5KB each | Thin content, subject mismatch (quant/aptitude in economics folder) |
| law-ent-tz/gk | gk-001 to gk-008 | ~1.5KB each | Thin placeholder |
| ini-cet/biochemistry | bioche-003,005,007 | ~1.5KB each | Thin placeholder |
| ppsc/gk | gk-010 | 1.5KB | Thin |
| **TOTAL** | **~939 files under 3KB** | various | Many are auto-generated thin content |

### Content wave workflow:
1. `sessions_spawn` with task from `.tasks/content-wave.md`
2. Daily cron at 6AM UTC spawns one automatically
3. Target: 10-20 pages per wave

---

## 🟢 MEDIUM — SEO Improvements

- [ ] **OG images** — Generate exam-specific OG images for remaining ~100 exams (currently only ~20 exist: neet, jeemain, upsc, etc.)
- [ ] **FAQ expansion** — Add 3-5 exam-specific FAQs to high-traffic exam pages
- [ ] **Internal linking** — Build topic-to-topic links within subjects
- [ ] **llm.txt** — Update date when significant content changes
- [ ] **About page E-E-A-T** — Add author credentials, methodology

---

## 📝 LOWER PRIORITY

- [ ] JSON-LD syntax audit (build passes but validate manually)
- [ ] 404 audit — find broken internal links
- [ ] Canonical tag verification (all self-referential)
- [ ] Directory submissions (exam-specific education directories)

---

## Spawn Commands

```bash
# Spawn content wave (rewrite 10-20 placeholder pages)
sessions_spawn with runtime="subagent", task from .tasks/content-wave.md

# Spawn SEO audit (quick check + fix)
sessions_spawn with runtime="subagent", task from .tasks/seo-audit.md
```

## Active Cron Jobs (as of 2026-04-10)
| Name | Schedule | Timeout | Purpose |
|------|---------|---------|---------|
| Heartbeat 5min | every 5min | 60s | Health + news |
| SEO Pulse hourly | hourly | 120s | One quick fix |
| Content Wave daily | daily 6AM UTC | 1800s | 10-20 page rewrite |
| Research 30min | every 30min | 90s | Lightweight monitoring |
| KidsSmileFactory | hourly | 7200s | KidsSmile backup |
| SEO+News 4x | hourly | 60s | News refresh |