// Exams suppressed from search indexing, or flagged as no longer conducted.
//
// Added 2026-06-17 (S849) after web-verification of every exam's official
// conducting body:
//   - lsat: LSAT—India was discontinued by LSAC from the 2025 admission cycle.
//     Kept indexed but rendered with a visible "no longer conducted" notice.
//   - shell exams: no notes dir and no rich exam-specific FAQ — thin indexed
//     landing pages that add crawl noise without search value.
export const NOINDEX_EXAMS = new Set<string>([
  'aau', 'cmat-nepal', 'eed', 'emu-entrance', 'engineering-ent', 'gaokao-cn',
  'hepc', 'kuet', 'law-apt', 'matrikulasi', 'medical-adm', 'must-adm', 'ruet', 'uppm',
]);

export const DISCONTINUED_EXAMS: Record<string, string> = {
  lsat: 'LSAT—India was discontinued by the Law School Admission Council (LSAC) from the 2025 admission cycle and is no longer conducted. This page is retained for reference only — verify current options with the official body before relying on the details below.',
};

export function isNoindexExam(examId: string): boolean {
  return NOINDEX_EXAMS.has(examId);
}
