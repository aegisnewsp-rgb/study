// SAT Reading and Writing — College Board digital SAT (international).
// Awarding body: College Board. Test specifications from the Digital SAT
// Suite Specifications Overview PDF published by College Board. Two
// modules of 27 questions each (25 operational + 2 pretest), 32 minutes per
// module, 64 minutes total. Topics here are the four published "content
// domains" of the Reading and Writing section plus the cross-test skills.
// Source: The Digital SAT Suite of Assessments Specifications Overview,
// https://satsuite.collegeboard.org/media/pdf/digital-sat-test-spec-overview.pdf
// and College Board "What's on the Digital SAT" specifications,
// https://counselors.collegeboard.org/media/pdf/Digital%20SAT%20Test%20Specifications.pdf
// Re-check the live content domains and scoring on satsuite.collegeboard.org
// before committing any revision plan to a student.

import type { Subject } from '../../types';

export const satRw: Subject = {
  id: 'sat-rw',
  name: 'Reading and Writing',
  color: '#3b82f6',
  topics: [
    { id: 'satrw-001', name: 'Information and Ideas — Reading Comprehension', weight: 5 as const, description: 'Locating and interpreting explicit textual information, central ideas and themes, summarising, and drawing logical inferences from single passages and paired short passages across literature, history/social science, the humanities, and science.' },
    { id: 'satrw-002', name: 'Information and Ideas — Command of Evidence', weight: 4 as const, description: 'Citing paired textual evidence to support a claim, evaluating the relationship between a quantitative chart/graph and an accompanying passage, and using textual evidence to answer inference questions.' },
    { id: 'satrw-003', name: 'Craft and Structure — Words in Context', weight: 4 as const, description: 'Determining the meaning of high-utility academic words and phrases in context, including figurative and ambiguous language, connotation, and the effect of word choice on tone and meaning.' },
    { id: 'satrw-004', name: 'Craft and Structure — Text Structure and Purpose', weight: 4 as const, description: 'Analysing how a text is structured, the author\'s purpose, the point of view, and the function of paragraphs and sentences within the overall argument.' },
    { id: 'satrw-005', name: 'Expression of Ideas — Transitions and Rhetorical Synthesis', weight: 4 as const, description: 'Improving text by adding, revising or deleting information; combining sentences; selecting the most logical transition between ideas; and synthesising information from a passage with an additional sentence or short passage.' },
    { id: 'satrw-006', name: 'Standard English Conventions — Grammar and Punctuation', weight: 5 as const, description: 'Subject-verb agreement, verb tense, pronoun-antecedent agreement, modifier placement, parallel structure, and the rules for commas, semicolons, colons, dashes, apostrophes and parenthetical punctuation.' },
    { id: 'satrw-007', name: 'Standard English Conventions — Sentence Boundaries and Form', weight: 3 as const, description: 'Recognising and correcting run-on sentences, comma splices and sentence fragments, and choosing the most concise and effective sentence form.' }
  ]
};