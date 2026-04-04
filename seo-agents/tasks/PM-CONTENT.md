# PM-CONTENT Task Queue
## Status: QUEUED

---

## TASK QUEUE

### TASK-CONTENT-001 [PM-Content] Trust Signals & E-E-A-T on Homepage
**Status:** DONE ✅

---

### TASK-CONTENT-002 [PM-Content] Expand NEET Physics Topic Pages — Thin Content Detection
**Status:** DONE ✅
**File(s):** src/content/notes/neet/physics/phy-001.md through phy-005.md
**What:** NEET Physics topic pages are the highest-traffic pages on StudyRoadmap. Check if any of the first 5 NEET Physics topic pages have thin content (less than 300 words of useful content). For any thin pages found, use MiniMax text API to enhance the content with exam-specific examples and tips.

MiniMax API:
- endpoint: https://api.minimax.io/v1/text/chatcompletion_v2
- model: MiniMax-M2.7
- auth: Bearer MINIMAX_API_KEY
- timeout: 30s, retry: 3x with 15s backoff

**Acceptance:**
1. Identify which NEET Physics topic pages have thin content (< 300 words)
2. For each thin page, generate enhanced content using MiniMax API (include topic name, exam, and request educational examples specific to NEET)
3. Insert the enhanced content into the topic page
4. Total of at least 3 pages enhanced if thin content is found, otherwise report "All pages have sufficient content"

**Why:** Thin content hurts SEO. NEET Physics is the top traffic driver. Ensuring comprehensive content improves rankings and user experience.

**Rollback:** git checkout HEAD -- src/pages/notes/neet/physics/[topic].astro

---

