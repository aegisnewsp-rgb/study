// IELTS Listening — International English Language Testing System
// (administered in Hong Kong).
// Awarding body: jointly owned by British Council, IDP: IELTS Australia and
// Cambridge University Press & Assessment. In Hong Kong the test is
// administered by the British Council Hong Kong (https://www.britishcouncil.hk/)
// and IDP Education Hong Kong (https://ielts.idp.com/hongkong). Both
// computer-delivered and paper-based formats are available in Hong Kong.
// Topics here are the four parts published in the official IELTS Academic
// Listening test format on ielts.org and the British Council Hong Kong test
// format page. Source: IELTS Academic Listening test format,
//   https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening
// and the official IELTS Guide for test takers,
//   https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-guide-for-test-takers.pdf
// Re-check the live question types, recording lengths and Hong Kong test
// centre availability on ielts.org before committing a revision plan.

import type { Subject } from '../../types';

export const ieltsHkListening: Subject = {
  id: 'ielts-hk-listening',
  name: 'Listening',
  color: '#3b82f6',
  topics: [
    { id: 'ieltshk-l-001', name: 'Part 1 — Everyday Social Context', weight: 3 as const, description: 'Conversation between two speakers in an everyday social context (e.g. booking travel, finding accommodation, an enquiry about a community service). 10 questions. Tests form completion, note completion, table completion, multiple choice and matching on transactional exchanges.' },
    { id: 'ieltshk-l-002', name: 'Part 2 — Social Monologue', weight: 3 as const, description: 'Monologue set in an everyday social context (e.g. speech about local facilities, a guided tour, arrangements for an event). 10 questions. Tests plan/map/diagram labelling, summary completion, sentence completion, multiple choice.' },
    { id: 'ieltshk-l-003', name: 'Part 3 — Academic Discussion', weight: 4 as const, description: 'Conversation between two main speakers in an educational or training context (e.g. university students discussing an assignment with a tutor). 10 questions. Tests multiple choice, matching, flow-chart completion, and short-answer questions on argumentative and analytical exchanges.' },
    { id: 'ieltshk-l-004', name: 'Part 4 — Academic Lecture', weight: 4 as const, description: 'Monologue on an academic subject (e.g. university lecture, research summary). 10 questions. Tests sentence completion, summary completion, note completion, table completion and flow-chart completion on dense academic vocabulary.' },
    { id: 'ieltshk-l-005', name: 'Question Types — Form, Note, Table, Flow-Chart Completion', weight: 3 as const, description: 'The five "completion" question families used across IELTS Listening: form, note, table, flow-chart and summary completion — exact wording, word limits, and plural/distractor traps. Common in Parts 1 and 4.' },
    { id: 'ieltshk-l-006', name: 'Question Types — Multiple Choice, Matching, Labelling, Short Answer', weight: 3 as const, description: 'Multiple choice (with three options A/B/C, or five options A-E), matching (matching items to lists, speakers to opinions), plan/map/diagram labelling, and short-answer questions. Common in Parts 2 and 3.' }
  ]
};