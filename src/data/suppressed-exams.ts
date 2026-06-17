// Exams suppressed from search indexing, or flagged as no longer conducted.
//
// Added 2026-06-17 (S849) after web-verification of every exam's official
// conducting body:
//   - nabe: fabricated entry — no real Pakistani "National Association of
//     Business Excellence" exists and its source field was empty. noindex all
//     of its pages (exam page + note hub + subject + topic) until removed.
//   - lsat: LSAT—India was discontinued by LSAC from the 2025 admission cycle.
//     Kept indexed but rendered with a visible "no longer conducted" notice.
export const NOINDEX_EXAMS = new Set<string>(['nabe']);

export const DISCONTINUED_EXAMS: Record<string, string> = {
  lsat: 'LSAT—India was discontinued by the Law School Admission Council (LSAC) from the 2025 admission cycle and is no longer conducted. This page is retained for reference only — verify current options with the official body before relying on the details below.',
};

export function isNoindexExam(examId: string): boolean {
  return NOINDEX_EXAMS.has(examId);
}
