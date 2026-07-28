// Single source of truth for the low-value-note gate.
//
// A note that trips this gate is BOTH:
//   1. noindexed (robots="noindex,follow" in [topic].astro), and
//   2. orphaned from on-site navigation (filtered out of the notes listing pages),
// so a thin / templated / placeholder note is neither indexed by Google nor
// reachable by a human AdSense reviewer browsing the site — until the rewrite
// pipeline (sr-note-rewrite.sh) replaces it with substantive content, at which
// point it automatically rejoins both the index and the listings. No per-file
// frontmatter flag is needed.
//
// Keep this in lockstep with the inline gate in
// src/pages/notes/[exam]/[subject]/[topic].astro.

const FILLER_PATTERNS = [
  /is an important topic in/i,
  /is a fundamental concept in [A-Z]/,
  /appear regularly in (NEET|JEE)/i,
  /Build (a |strong )?(solid )?foundation of fundamentals/i,
  /Understand the core principle and its direct applications/i,
  // The "generic-tier" template variant: padded past the 2500-char floor with
  // contentless boilerplate (e.g. "X is a key topic in this subject area",
  // "Full coverage: X with detailed explanation"). These phrases appear ONLY in
  // that template across the whole corpus — never in substantive notes.
  /is a key topic in this subject area/i,
  /Build a clear understanding of fundamentals/i,
  /Typical patterns seen in competitive exams/i,
  /Focus on understanding over memorisation — application is everything/i,
  /Full coverage:\s*.+ with detailed explanation/i,
];

// Detects CJK code-switch contamination: the note-authoring model (a Chinese LLM)
// sometimes leaks Chinese words mid-sentence into English notes ("Population公式").
// A leak is a few CJK chars in a mostly-English note; a legitimately Chinese-medium
// note (e.g. gaokao) would be majority CJK — so we gate on density, not presence.
const CJK_RE = /[一-鿿]/g;
export function hasCjkContamination(text: string): boolean {
  const cjk = (text.match(CJK_RE) ?? []).length;
  if (cjk === 0) return false;
  const nonSpace = text.replace(/\s/g, '').length;
  return nonSpace > 0 && cjk / nonSpace < 0.05;
}

export function isLowValueNote(
  body: string | undefined,
  data: { topicName?: string } | undefined,
): boolean {
  const topicName = data?.topicName ?? '';
  const isPlaceholderTopic =
    typeof topicName === 'string' &&
    /^(Topic|Chapter|Unit|Section)\s+\d+/i.test(topicName.trim());
  const text = body ?? '';
  // Body char floor: 4000 (~550–600 body words). AdSense 2026 reviewer rubric
  // treats sub-~800-word pages as thin when the whole site looks templated.
  // chars-to-words ratio on our corpus is ~7; 4000 catches FAIL + worst THIN
  // tiers while only noindexing ~4% of notes. Raised 2500→3500 (2026-05-28)
  // then 3500→4000 (2026-07-28) for stricter application review. NB: H2/H3
  // structural-emptiness would noindex 1800+ notes that use bold-as-heading;
  // rewrite pipeline requires `#### ` sub-headings instead.
  const isThinBody = text.length < 4000;
  const isTemplatedFiller = FILLER_PATTERNS.some((re) => re.test(text));
  return isPlaceholderTopic || isThinBody || isTemplatedFiller || hasCjkContamination(text);
}

// Convenience for `.filter(isGoodNote)` over a collection of entries.
export function isGoodNote(entry: { body?: string; data?: { topicName?: string } }): boolean {
  return !isLowValueNote(entry.body, entry.data);
}

// Canonical-dedup. When two or more good notes share the same
// exam/subject/topicName they render a byte-identical <title> and meta
// description — a Google duplicate-content signal (10 pairs flagged in the
// 2026-07-04 AdSense audit, e.g. neet/physics `fluid-mechanics.md` and
// `phy-009.md` are both "Fluid Mechanics"). Keep exactly ONE canonical page per
// group indexed and noindex the rest. Canonical preference: a human-readable
// topic slug (the intended URL) over a generic numbered slug (`phy-009`), then
// the longer body, then id — fully deterministic so the build is reproducible.
// Returns the set of note ids that should be noindexed as non-canonical dups.
const GENERIC_SLUG_RE = /^[a-z]{2,8}-?\d{2,4}$/i; // phy-009, chem-003, compan-004, wassce-015
export function duplicateNoteIds(
  allNotes: Array<{ id: string; body?: string; data?: { topicName?: string } }>,
): Set<string> {
  const groups = new Map<string, Array<{ id: string; body?: string; data?: { topicName?: string } }>>();
  for (const n of allNotes) {
    if (isLowValueNote(n.body, n.data)) continue; // already noindexed elsewhere
    const parts = n.id.split('/');
    const topic = (n.data?.topicName ?? '').trim().toLowerCase();
    if (!topic || parts.length < 3) continue;
    const key = `${parts[0]}/${parts[1]}/${topic}`;
    const arr = groups.get(key);
    if (arr) arr.push(n); else groups.set(key, [n]);
  }
  const dups = new Set<string>();
  for (const notes of groups.values()) {
    if (notes.length < 2) continue;
    const slugOf = (id: string) => id.split('/')[2] || '';
    const canonical = [...notes].sort((a, b) => {
      const ag = GENERIC_SLUG_RE.test(slugOf(a.id)) ? 1 : 0;
      const bg = GENERIC_SLUG_RE.test(slugOf(b.id)) ? 1 : 0;
      if (ag !== bg) return ag - bg;                       // human-readable slug wins
      const al = (a.body ?? '').length, bl = (b.body ?? '').length;
      if (al !== bl) return bl - al;                       // longer body wins
      return a.id.localeCompare(b.id);                     // stable tiebreak
    })[0];
    for (const n of notes) if (n.id !== canonical.id) dups.add(n.id);
  }
  return dups;
}

// ── Hub indexability thresholds ──────────────────────────────────────────────
// Single source of truth shared by the notes hub pages (robots meta) and every
// page that LINKS to a hub (e.g. the exam-hub subject grid in exams/[exam].astro).
// If a linker uses different thresholds than the hub's own noindex logic,
// indexable pages start passing follow-links into noindexed hubs again
// (the leak class plugged in ca38b672 and again on 2026-07-03).
import { isNoindexExam } from './suppressed-exams';

// notes/[exam]/index.astro: an exam notes hub is indexable only with >=5 good
// notes. The old >=1 floor indexed near-empty hubs that link to just 2-3 leaf
// notes and have no indexable subject hub of their own (uppsc=2, utbk=3 good
// notes — flagged as thin content in the 2026-07-04 AdSense audit). A floor of
// 5 keeps the hub at least as substantive as one full subject hub (>=3) plus
// depth, and self-heals upward as the rewrite pipeline improves notes. Every
// caller passes the exam's TOTAL good-note count, so the hub and every page
// that links to it stay in lockstep — no follow-link-into-noindex leak, the
// invariant these call sites depend on.
export function isIndexableExamHub(goodNoteCount: number, examId: string): boolean {
  return goodNoteCount >= 5 && !isNoindexExam(examId);
}

// notes/[exam]/[subject]/index.astro: hub is indexable with >=3 good notes
// (AdSense 2026 thin-content gate, tightened from ===0 on 2026-05-28).
export function isIndexableSubjectHub(goodNoteCount: number, examId: string): boolean {
  return goodNoteCount >= 3 && !isNoindexExam(examId);
}

// ── Exam-data placeholder helpers ────────────────────────────────────────────
// Literal "Topic N" rows are corrupt placeholder module data, not content.
// Shared by the exam hub, syllabus spoke, and study-plan templates so the
// noindex gate and every linker/count agree on what a placeholder is —
// a hub must not link (or claim topic counts for) a spoke it knows is
// majority-placeholder and therefore noindexed.
export const isPlaceholderExamTopic = (t: { name?: string } | null | undefined): boolean =>
  /^Topic \d+$/i.test(t?.name || '');

export function placeholderSyllabusStats(subjects: Array<{ topics?: Array<{ name?: string }> }> | undefined) {
  const subs = subjects || [];
  const raw = subs.reduce((n, s) => n + (s.topics?.length || 0), 0);
  const placeholders = subs.reduce(
    (n, s) => n + (s.topics || []).filter(isPlaceholderExamTopic).length, 0);
  return { raw, placeholders, isPlaceholderSyllabus: raw > 0 && placeholders / raw >= 0.5 };
}
