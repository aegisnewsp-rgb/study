// Full forms for exam abbreviations that otherwise never expand in page copy.
//
// These strings are NOT new claims: each one is copied from a fact this repo
// already asserts elsewhere, so adding them to a page cannot introduce a claim
// the site has not already made. Provenance is recorded per entry so the next
// editor can tell where the wording came from instead of guessing.
//
// An exam with no entry here renders exactly as it did before this file
// existed. Absent entry means "we have no sourced wording", never "assume".
export interface ExamFullForm {
  /** The expansion, without the exam name. */
  fullForm: string;
  /** Where this repo already asserts the same wording. */
  source: string;
}

export const EXAM_FULL_FORMS: Record<string, ExamFullForm> = {
  // NOTE: "Medical and Dental", not "Medical College". PMDC runs the test and
  // the repo's own /exams/mdcat/ meta already uses this exact wording. An earlier
  // audit looked for "Medical College Admission Test", which is a different
  // (wrong-for-this-exam) expansion — do not "fix" this string back to it.
  mdcat: {
    fullForm: 'Medical and Dental College Admission Test',
    source: 'src/data/seo-meta-overrides.ts -> /exams/mdcat/ description',
  },
  ecat: {
    fullForm: 'Engineering College Admission Test',
    source: 'src/data/exams/pakistan/ecat.ts -> examName',
  },
};

export function examFullForm(examId: string): string | undefined {
  return EXAM_FULL_FORMS[examId]?.fullForm;
}

/**
 * Expand an exam label when the label does not already carry its own full form.
 *
 * `examName` is authored inconsistently across the corpus: ecat.ts spells its
 * expansion inline, mdcat.ts does not. Rendering the same shape for both keeps
 * the compare template free of per-exam special cases.
 */
export function expandExamLabel(examId: string, examName: string): string {
  const fullForm = examFullForm(examId);
  if (!fullForm) return examName;
  if (examName.toLowerCase().includes(fullForm.toLowerCase())) return examName;
  return `${examName} (${fullForm})`;
}

/** The bare acronym, for sentences like "X stands for ...". */
export function shortExamLabel(examName: string): string {
  const parenAt = examName.indexOf(' (');
  return parenAt === -1 ? examName : examName.slice(0, parenAt);
}