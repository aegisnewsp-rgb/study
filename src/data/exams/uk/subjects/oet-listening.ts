// OET — Listening sub-test.
// Source: the official "OET Test Handbook 2026",
// https://cdn-aus.aglty.io/oet/pdf-files/OET%20Test%20Handbook%202026.pdf — PDF fetched and
// text-extracted independently by this worker on 2026-10-09 (HTTP 200, application/pdf).
// Verbatim from the handbook: "The OET Test assesses the four English communication skills:
// Listening, Reading, Writing and Speaking. Listening and Reading are the same for all
// candidates, regardless of profession. Writing and Speaking are tailored to the candidate's
// profession." Listening: approximately 40 minutes, 3 parts, 42 questions; 1 mark per correct
// answer, converted from a score out of 42 to the 500 scale.
// Topic split below is StudyRoadmap's own study organisation of the three parts. The handbook
// publishes no per-part question distribution. Weight values below are our prioritisation.
import type { Subject } from '../../types';
export const oetListening: Subject = {
  id: 'listening', name: 'Listening', color: '#0e7490',
  topics: [
    { id: 'li-001', name: 'Part 1: Identifying Specific Detail', weight: 5, description: 'Matching and short-answer items where the answer is stated once, quickly, and often with a distractor of the same type — a different number, place or time.' },
    { id: 'li-002', name: 'Part 2: Following a Clinical Exchange', weight: 5, description: 'Longer professional dialogue with note-completion and multiple-response items, requiring you to track several exchanges at once without losing the thread.' },
    { id: 'li-003', name: 'Part 3: Extended Monologue or Consultation', weight: 5, description: 'A long single-speaker monologue or an extended consultation, tested with note-completion and summary-completion items that require you to select and paraphrase rather than transcribe.' },
    { id: 'li-004', name: 'Listening for Attitude, Modality and Register', weight: 4, description: 'Distinguishing advice from instruction, a suggestion from a decision, and a hedged statement from a firm one — the distinction healthcare candidates most often miss.' },
    { id: 'li-005', name: 'Numbers, Names and Spellings Under Time Pressure', weight: 4, description: 'Filling detail fields accurately at listening speed, where a transcribed error is indistinguishable in length but wrong in every marked character.' },
  ],
};
