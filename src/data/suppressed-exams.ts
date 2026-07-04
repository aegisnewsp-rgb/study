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
  // Added 2026-07-03 (full-site audit) — fabricated/nonexistent exam entities:
  //   - loe: no "LOE Nepal" exam exists; Nepal's real engineering entrance is
  //     the IOE Entrance Exam (entrance.ioe.edu.np).
  //   - nlt: NTS (nts.org.pk) conducts NAT and GAT only — no "National Level Test".
  //   - pcat: conflates the US pharmacy PCAT with a "Philippine College
  //     Admission Test by CEM" that CEM (cem-inc.org.ph) does not run.
  //   - toafa: "TOEFL (Nigeria)" — TOEFL is ETS's global test, not a Nigerian
  //     exam; slug matches the prior corrupted-slug pattern (tast/uAeu).
  //   - haad: renamed to DOH in 2017-2019; /exams/doh/ is the canonical page
  //     (also in DISCONTINUED_EXAMS below with a renamed notice).
  'loe', 'nlt', 'pcat', 'toafa', 'haad',
]);

export const DISCONTINUED_EXAMS: Record<string, string> = {
  lsat: 'LSAT—India was discontinued by the Law School Admission Council (LSAC) from the 2025 admission cycle and is no longer conducted. This page is retained for reference only — verify current options with the official body before relying on the details below.',
  jipmer: 'JIPMER no longer conducts a separate MBBS entrance exam — from 2020 onwards, admission to JIPMER MBBS is solely through NEET UG, and postgraduate (MD/MS) admission is through INI-CET conducted by AIIMS New Delhi. This page is retained for reference only — prepare for NEET UG (or INI-CET for PG) instead.',
  haad: 'The HAAD exam was renamed when the Health Authority Abu Dhabi became the Department of Health (DOH) Abu Dhabi — it is now conducted as the DOH exam. See the DOH (UAE) page for current details.',
};

export function isNoindexExam(examId: string): boolean {
  return NOINDEX_EXAMS.has(examId);
}
