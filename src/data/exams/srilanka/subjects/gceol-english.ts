// GCE O/L — English Language.
// Source: Department of Examinations, Sri Lanka. https://www.doenets.lk/ and
// https://www.doenets.lk/examcalendar both returned HTTP 200 to this worker on 2026-10-09,
// but the exam calendar page renders client-side and the published timetable and marking
// scheme PDFs were not served to it. The 2026 timetable and the English Language marking
// scheme below are therefore reproduced from the Manus retrieval of the Department's own
// documents (https://www.doenets.lk/images/resources/EXCA/OL%20timetable%20English%20-%202026_1791431651960.pdf
// and https://www.doenets.lk/images/resources/EVRE/31-English_1641357112539.pdf) and were NOT
// independently fetched here.
// The Department publishes subject-specific marking schemes through its Evaluation Reports
// section. It does NOT publish a single consolidated weightage table for all O/L subjects.
// Weight values below are StudyRoadmap's own prioritisation.
import type { Subject } from '../../types';
export const gceOlEnglish: Subject = {
  id: 'english-language', name: 'English Language', color: '#0e7490',
  topics: [
    { id: 'en-001', name: 'Reading Comprehension and Inference', weight: 5, description: 'Locating stated information, drawing inferences the passage supports, and reading tone and purpose without importing outside knowledge.' },
    { id: 'en-002', name: 'Summary, Note and Paragraph Writing', weight: 5, description: 'Condensing a passage to its main points, picking out the points that carry the meaning, and writing a continuous paragraph with topic sentences rather than note-form fragments.' },
    { id: 'en-003', name: 'Grammar, Usage and Editing', weight: 5, description: 'Tense and agreement, clause structure, pronoun reference, modifiers, and the sentence-combination and editing items that make up much of Paper I.' },
    { id: 'en-004', name: 'Vocabulary in Context', weight: 4, description: 'Deriving meaning from context and morphology, and choosing between words that are near-synonyms in ordinary use but differ in force.' },
    { id: 'en-005', name: 'Spoken and Literary English', weight: 4, description: 'Correct usage and register, literary appreciation of the prescribed texts, and the oral-competence component in its written form.' },
  ],
};
