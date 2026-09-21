// Ontario Secondary School Literacy Test (OSSLT) — Reading component.
//
// Awarding body: Education Quality and Accountability Office (EQAO),
// an arm's-length agency of the Ontario Ministry of Education.
//
// Specification: OSSLT Framework (2021/2022 cycle), grounded in the
// Ontario Curriculum literacy expectations for all subjects up to the
// end of Grade 9. The computer-based OSSLT comprises two sessions
// (Session A and Session B) of selected-response and open-response
// items built around four reading selection types: Real-Life Narrative,
// Information Paragraph, News Report, and Dialogue.
//
// Source: EQAO OSSLT Framework,
//   https://www.eqao.com/wp-content/uploads/2021/01/framework-osslt.pdf
// Source: EQAO OSSLT landing page,
//   https://www.eqao.com/the-assessments/osslt/
// Source: EQAO OSSLT FAQ,
//   https://www.eqao.com/frequently-asked-questions/faq-osslt/
// Verify the live assessment window, accommodations policy and any
// in-year item-type changes on eqao.com before committing a revision
// plan to a student.

import type { Subject } from '../../types';

export const reading: Subject = {
  id: 'reading',
  name: 'Reading',
  color: '#2563eb',
  topics: [
    { id: 'ossltrd-001', name: 'Understanding Explicitly Stated Information', weight: 5 as const, description: 'Reading 1 — locating directly stated ideas and supporting details in a selection, recognising explicit cause-and-effect, and identifying clearly named characters, settings, dates and quantities. The largest cluster of multiple-select items on the OSSLT.' },
    { id: 'ossltrd-002', name: 'Understanding Implied Meaning (Inference)', weight: 5 as const, description: 'Reading 2 — drawing conclusions a writer leaves unsaid, identifying the writer\'s tone and attitude, and inferring what a detail suggests. Tested through multiple-select items paired with Real-Life Narrative, News Report and Dialogue selections.' },
    { id: 'ossltrd-003', name: 'Making Connections Between Texts and Personal Knowledge', weight: 4 as const, description: 'Reading 3 — linking ideas across selections and to the reader\'s own experience, comparing two perspectives on the same topic, and recognising how prior knowledge shapes interpretation. Often paired with the open-response reading item.' },
    { id: 'ossltrd-004', name: 'Real-Life Narrative Selections', weight: 4 as const, description: 'First-person or third-person recountings of an event, typically a personal experience. Each narrative is followed by seven multiple-select items that test explicit recall, inference, and connection. Length is set so the selection fits one screen on the OSSLT platform.' },
    { id: 'ossltrd-005', name: 'Information Paragraph Selections', weight: 3 as const, description: 'Short expository paragraphs (about a printed page) explaining a process, concept or topic. Items test identifying main idea, supporting details, vocabulary in context, and the writer\'s purpose.' },
    { id: 'ossltrd-006', name: 'News Report Selections', weight: 4 as const, description: 'Inverted-pyramid news writing on a current event. Items focus on who/what/when/where/why, identifying the lead, distinguishing fact from comment, and reading accompanying graphic elements (captions, sub-headings, sidebars).' },
    { id: 'ossltrd-007', name: 'Dialogue Selections', weight: 3 as const, description: 'Two- or three-speaker exchanges between characters. Items test tracking who-said-what, recognising the speaker\'s purpose (to inform, persuade, request, deflect), and identifying the relationship between speakers.' },
    { id: 'ossltrd-008', name: 'Reading Conventions, Vocabulary and Visual Information', weight: 3 as const, description: 'Recognising spelling, grammar and punctuation cues inside reading items; using context to determine the meaning of unfamiliar words; interpreting simple tables, charts, captioned photos and diagrams that accompany OSSLT selections.' }
  ]
};
