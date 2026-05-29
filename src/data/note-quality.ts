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
  // Body char floor: 3500 (~500 body words). AdSense 2026 reviewer rubric
  // (eastondev / pubfuture / genieegroup 2026 corpora) treats <800 words as
  // thin; on our content the chars-to-words ratio is ~7 so 3500 catches the
  // <500-word FAIL tier and the worst of the THIN tier. Raised from the
  // original 2500 char floor on 2026-05-28 evening after a 150-URL sample
  // showed ~9% of indexed pages falling in the THIN/FAIL tier. NB: H2/H3
  // structural-emptiness was considered but would have noindexed 1800+ notes
  // that use bold-as-heading rather than markdown `## `. The real fix is at the
  // authoring source — the rewrite prompt + pipeline gate now ban standalone
  // bold-as-label and require `#### ` sub-headings; a one-time backfill of the
  // legacy corpus is tracked separately. (There is NO render-time bold→h2
  // promotion — an earlier comment here claimed one that never existed.)
  const isThinBody = text.length < 3500;
  const isTemplatedFiller = FILLER_PATTERNS.some((re) => re.test(text));
  return isPlaceholderTopic || isThinBody || isTemplatedFiller || hasCjkContamination(text);
}

// Convenience for `.filter(isGoodNote)` over a collection of entries.
export function isGoodNote(entry: { body?: string; data?: { topicName?: string } }): boolean {
  return !isLowValueNote(entry.body, entry.data);
}
