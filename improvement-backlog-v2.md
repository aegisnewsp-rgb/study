# StudyRoadmap — Full Improvement Backlog v2
Updated: 2026-04-02 | Goal: 90+/100 per exam

---

## PRIORITY TIERS

### 🏆 TIER 1 — QUICK WINS (can reach 90+ with <5 changes)

#### WAEC (Nigeria) — Current: 89.2 → Target: 95+
**File:** `src/data/exams/nigeria/waec.ts`
**Status:** 152/154 topics described, examPattern=✅, eligibility=✅
**Remaining:**
- [ ] 2 missing topic descriptions (bio-17 topic completion, gov-13 topic)
- [ ] examPattern field already exists: `"180 MCQs, 5 sections (English, Math, Physics, Chemistry, Biology)"`
- [ ] eligibility field already exists

**Action:** Add 2 missing topic descriptions (the ones at 99% coverage).

---

#### NECO (Nigeria) — Current: 88.8 → Target: 95+
**File:** `src/data/exams/nigeria/neco.ts`
**Status:** 134/138 topics described, examPattern=✅, eligibility=✅
**Remaining:**
- [ ] 4 missing topic descriptions

---

### 🔶 TIER 2 — NEAR TARGET (needs 5-15 changes each)

#### MDCAT (Pakistan) — Current: 79.7 → Target: 90+
**File:** `src/data/exams/pakistan/mdcat.ts`
**Status:** 99/98 topic descriptions, description=✅, examPattern=❌, eligibility=❌
**Needed:**
- [ ] examPattern: "180 MCQs, 3 hours, Biology(56) + Chemistry(56) + Physics(44) + English(24)"
- [ ] eligibility: "FSc (Pre-Medical) with 70% aggregate, NEET-qualified for matching"

#### NAT-I (Pakistan) — Current: 73.2 → Target: 85+
**File:** `src/data/exams/pakistan/nat-i.ts`
**Status:** 56/55 topics described (overshoot is fine), description=✅, examPattern=❌, eligibility=❌
**Needed:**
- [ ] examPattern
- [ ] eligibility

#### JEE Main (India) — Current: 70.8 → Target: 90+
**File:** `src/data/exams/india/jeemain.ts`
**Status:** 69/81 topic descriptions, description=✅, examPattern=❌, eligibility=❌
**Needed:**
- [ ] 12 more topic descriptions (physical chemistry topics need descriptions)
- [ ] examPattern: "90 MCQs (30 Physics, 30 Chemistry, 30 Math), 3 hours, 300 marks"
- [ ] eligibility: "Class 12 PCM with 75% for general, subject-wise requirements"

#### NEET (India) — Current: 73.0 → Target: 90+
**File:** `src/data/exams/india/neet.ts`
**Status:** 82/97 topic descriptions, description=✅, examPattern=❌, eligibility=❌
**Needed:**
- [ ] 15 more topic descriptions (some Physics + Biology remaining topics)
- [ ] examPattern: "200 MCQs (Physics 50, Chemistry 50, Biology 100), 3h 20min, 720 marks"
- [ ] eligibility: "Class 12 PCB with 50% for general, 40% for reserved"

---

### 🔷 TIER 3 — HIGH TRAFFIC INDIA EXAMS (need full setup)

| Exam | Score | Missing | Effort |
|------|-------|---------|--------|
| jeeadvanced | ~45 | description, examPattern, eligibility, 84 topic desc | High |
| cuet | ~40 | description, examPattern, eligibility, 109 topic desc | High |
| upsc | ~35 | description, examPattern, eligibility, 15 topic desc | Medium |
| ssc-cgl | ~33 | description, examPattern, eligibility, 49 topic desc | Medium |
| cat | ~31 | description, examPattern, eligibility, 30 topic desc | Medium |
| clat | ~30 | description, examPattern, eligibility, 22 topic desc | Medium |
| nda | ~30 | description, examPattern, eligibility, 22 topic desc | Medium |
| ugc-net | ~30 | description, examPattern, eligibility, 13 topic desc | Medium |
| nabteb | ~47 | description, examPattern, eligibility, 74 topic desc | High |
| jamb | ~47 | description, examPattern, eligibility, 74 topic desc | High |
| ncee | ~47 | description, examPattern, eligibility, 71 topic desc | High |
| ecat | ~45 | description, examPattern, eligibility, 67 topic desc | High |
| hat-ug | ~44 | description, examPattern, eligibility | Low |
| lat | ~44 | description, examPattern, eligibility | Low |

---

### 🏗️ TIER 4 — SKELETON EXAMS (127 exams minus above = ~110 exams)
All need: description, examPattern, eligibility, topic structure
These are new/regional exams with 0-1 topic descriptions.
**Approach:** Batch process by country using a generator script.

---

## SKELETON EXAM COUNT BY COUNTRY

| Country | Count | Exams |
|---------|-------|-------|
| india | ~45 | tnpsc, keam, vitee, aiims-mbbs, ailet, wbjee, gate, fmge, ini-cet, ibps-clerk, ctet, manipal-met, bpsc, cmat, cucet-pg, bitsat, jeeupsee, kpsc, jipmer, comedk, ap-eapcet, ts-eamcet, ca-found, mat, cma, mht-cet-law, lsat, ibps-po, cs-exec, neet-pg, gujcet, kcet, mht-cet + more |
| pakistan | ~11 | gat, mcat, sppsc, ppsc, nlt, fpsc-cce, kpkpse, nabe, ecat-eng + above already listed |
| bangladesh | 6 | du-ad, du-adm, kuet, ruet, buet-adm, medical-adm |
| nigeria | ~7 | nce-cours, toafa, putme, ijmb, ican, jupeb + above already listed |
| china | 2 | gaokao, gaokao-cn |
| nepal | 3 | loe, cmat, engineering-ent |
| ghana | 3 | gmat, legon-adm, wassce |
| malaysia | 3 | muet, matrikulasi, uppm |
| kenya | 3 | kenyatta-ku, law-apt-kenya, kuccps |
| ethiopia | 2 | aau, emu-entrance |
| saudi | 3 | qimiyah, sgpat, s The |
| srilanka | 3 | law-apt, slmc, al-exam |
| tanzania | 3 | acsee, law-ent-tz, must-adm |
| uganda | 3 | uneb, makerere-ent, law-ent-uga |
| uae | 4 | uAeu-cat, doh, uAeu_cat, haad |
| southafrica | 3 | llb-ent, hepc, sa-pharm |
| philippines | 4 | nmat, u-pcat, pcat, [chinese char] |
| russia | 1 | eed |
| indonesia | 3 | uii, undana, utbk |

---

## ACTION PLAN

### Today (Cycle 87-88):
1. WAEC — add 2 missing topic descriptions
2. NECO — add 4 missing topic descriptions
3. MDCAT — add examPattern + eligibility
4. NAT-I — add examPattern + eligibility
5. JEE Main — add examPattern + eligibility + 12 topic descriptions
6. NEET — add examPattern + eligibility + 15 topic descriptions

### This week (Cycles 89-95):
- UPSC: add full metadata + topic descriptions
- SSC CGL: add full metadata + topic descriptions
- CAT, CLAT, NDA, UGC-NET: add full metadata + topic descriptions

### After that:
- CUET, JEE Advanced: full topic structure + metadata
- NABTEB, JAMB, NCEE, ECAT: full topic structure + metadata

### Pipeline approach for Tier 4 skeletons:
- Use MiniMax text API (when funded) to batch-generate exam descriptions and topic lists
- For now: write a script that creates proper topic structures for all skeleton exams