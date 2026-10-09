// GCE O/L — Sinhala/Tamil Language and Literature.
// Source: Department of Examinations, Sri Lanka. https://www.doenets.lk/ returned HTTP 200 to
// this worker on 2026-10-09; the Department's 2026 timetable sets Sinhala/Tamil Language and
// Literature as a three-paper subject with Paper III at 13:00–15:00, and the language papers
// are scheduled on 9 December 2026. Both figures are reproduced from the Manus retrieval of the
// Department's own 2026 timetable PDF
// (https://doenets.lk/images/resources/EXCA/OL%20timetable%20English%20-%202026_1791431651960.pdf)
// because the calendar page renders client-side and did not serve the PDF to this host.
// The Department publishes no consolidated weightage for this subject. Weight values below
// are StudyRoadmap's own prioritisation.
import type { Subject } from '../../types';
export const gceOlLanguage: Subject = {
  id: 'language-literature', name: 'Sinhala/Tamil Language and Literature', color: '#7c3aed',
  topics: [
    { id: 'la-001', name: 'Composition and Written Expression', weight: 5, description: 'Writing coherently in the language of instruction, organising an argument, using appropriate register, and the essay and letter forms the papers set.' },
    { id: 'la-002', name: 'Grammar and Language Structure', weight: 5, description: 'Phonology, morphology, syntax and the prescriptive rules the Department applies, in the language of instruction.' },
    { id: 'la-003', name: 'Poetry', weight: 4, description: 'Close reading of the prescribed poems: imagery, tone, structure, figure of speech, and the effect of form on meaning.' },
    { id: 'la-004', name: 'Prose and Drama', weight: 4, description: 'The prescribed prose and dramatic texts, characterisation, plot and theme, and the difference between narrative and dramatic technique.' },
    { id: 'la-005', name: 'Translation and Paraphrase', weight: 3, description: 'Rendering meaning accurately between the language of instruction and English, and paraphrasing a text without distorting it.' },
  ],
};
