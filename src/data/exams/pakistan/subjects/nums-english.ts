// NUMS MDCAT — English component.
// Source: NUMS "2026 NUMS Updated MDCAT Terms of Conditions" on numspak.edu.pk, as cited and
// quoted by Manus (https://numspak.edu.pk/upload/media/2026-NUMS-Updated-MDCAT-TOS-2026_1779075557.pdf).
// NOTE: numspak.edu.pk returns HTTP 403 to this worker, so these figures are reproduced from
// the Manus retrieval of the official document and were NOT independently fetched here.
// NUMS allocates 15 of the 150 Paper I MCQs to English (printed as 10.0%).
// NUMS does not publish a per-topic breakdown for English. Topic split below is
// StudyRoadmap's own organisation and the weights are our prioritisation only.
import type { Subject } from '../../types';
export const numsEnglish: Subject = {
  id: 'english', name: 'English', color: '#6d28d9',
  topics: [
    { id: 'eng-001', name: 'Reading Comprehension and Inference', weight: 5, description: 'Extracting stated information, drawing inferences the passage licenses, and separating an inference from a guess dressed as one.' },
    { id: 'eng-002', name: 'Vocabulary in Context and Word Formation', weight: 4, description: 'Deriving meaning from morphology and context, and choosing between near-synonyms that change the force of a statement.' },
    { id: 'eng-003', name: 'Sentence Correction and Grammar', weight: 4, description: 'Agreement, tense, clause structure, pronoun reference and modifier placement, applied inside a sentence rather than as isolated fill-in-the-blank items.' },
    { id: 'eng-004', name: 'Technical and Register Awareness', weight: 3, description: 'Reading a passage from a medical or biological source and understanding its register, abbreviations and argument structure without needing a glossary for every term.' },
  ],
};
