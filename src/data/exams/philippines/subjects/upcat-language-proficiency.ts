// UPCAT — Language Proficiency subtest.
// Official source: https://upcat.up.edu.ph/htmls/aboutupcat.html (University of the
// Philippines Office of Admissions, retrieved 2026-10-09). UP states the UPCAT "consists
// of four subtests: Language Proficiency (in English and Filipino), Science, Mathematics,
// and Reading Comprehension (in English and Filipino)".
// NOTE: UP publishes NO question counts, per-subtest durations or weightages for the four
// subtests. The topic split below is StudyRoadmap's own study organisation of the official
// subtest, not an UP-published weightage. Weight values are our prioritisation only.
import type { Subject } from '../../types';
export const upcatLanguageProficiency: Subject = {
  id: 'language-proficiency', name: 'Language Proficiency', color: '#0e7490',
  topics: [
    { id: 'lp-001', name: 'Reading for Comprehension Under Time Pressure', weight: 5, description: 'Extracting the intended meaning from unfamiliar passages, tracking who-said-what across long texts, and holding the argument in mind long enough to answer a question about it. This is the subtest most damaged by reading too slowly.' },
    { id: 'lp-002', name: 'Grammar in Context, Not in Isolation', weight: 5, description: 'Sentence-level competence tested through the sentence: agreement, tense consistency, clause structure, pronoun reference and modifier placement, applied to a real passage rather than to fill-in-the-blank items.' },
    { id: 'lp-003', name: 'Vocabulary from Context and Word Families', weight: 4, description: 'Deriving meaning from morphology and context — prefixes, suffixes, roots, collocations — rather than from memorised glosses, and recognising a word\'s domain register.' },
    { id: 'lp-004', name: 'Filipulo Grammar and Sentence Construction', weight: 4, description: 'Filipulo syntax, morphology and orthography for the Filipino half of the subtest, including the verb-actor orientation and the afix system that English does not have.' },
    { id: 'lp-005', name: 'Sentence Boundaries and Punctuation', weight: 3, description: 'Using punctuation and structural cues to find where one idea ends and another begins; recognising run-on sentences, comma splices and misplaced semicolons inside running text.' },
    { id: 'lp-006', name: 'Editing and Revision as a Skill', weight: 3, description: 'Choosing the more precise, more concise and better-ordered version of a passage — the skill the sentence-combination and editing items actually test.' },
  ],
};
