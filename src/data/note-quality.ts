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
  const isThinBody = text.length < 2500;
  const isTemplatedFiller = FILLER_PATTERNS.some((re) => re.test(text));
  return isPlaceholderTopic || isThinBody || isTemplatedFiller || hasCjkContamination(text);
}

// Convenience for `.filter(isGoodNote)` over a collection of entries.
export function isGoodNote(entry: { body?: string; data?: { topicName?: string } }): boolean {
  return !isLowValueNote(entry.body, entry.data);
}
