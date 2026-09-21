// IELTS Listening — International English Language Testing System (Qatar).
// Awarding body: jointly owned by the British Council, IDP: IELTS Australia,
// and Cambridge University Press & Assessment. Topics here are the four parts
// of the official IELTS Academic Listening test format as published on
// ielts.org and the British Council takeielts.britishcouncil.org site.
// In Qatar the test is administered by the British Council at its Doha
// test centre and by IDP IELTS at the Doha centre. Source: IELTS Academic
// Listening test format, https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening
// and the official IELTS Guide for test takers,
// https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-guide-for-test-takers.pdf
// Re-check the live question types, recording lengths and the
// computer-delivered vs paper-based option at the British Council Doha or
// IDP Doha before committing any revision plan to a student.

import type { Subject } from '../../types';

export const ieltsListening: Subject = {
  id: 'ielts-listening',
  name: 'Listening',
  color: '#3b82f6',
  topics: [
    { id: 'ieltsl-001', name: 'Part 1 — Everyday Social Context', weight: 3 as const, description: 'Conversation between two speakers in an everyday social context (e.g. travel, accommodation, services). Tests form completion, note completion, table completion, multiple choice and matching on transactional exchanges — the warm-up section.' },
    { id: 'ieltsl-002', name: 'Part 2 — Social Monologue', weight: 3 as const, description: 'Monologue set in an everyday social context (e.g. speech about local facilities, a guided tour, event arrangements). Tests plan/map/diagram labelling, summary completion, sentence completion and multiple choice.' },
    { id: 'ieltsl-003', name: 'Part 3 — Academic Discussion', weight: 4 as const, description: 'Conversation between two main speakers in an educational or training context (e.g. students discussing an assignment with a tutor). Tests multiple choice, matching, flow-chart completion and short-answer on argumentative and analytical exchanges.' },
    { id: 'ieltsl-004', name: 'Part 4 — Academic Lecture', weight: 4 as const, description: 'Monologue on an academic subject (e.g. university lecture, research summary). Tests sentence completion, summary completion, note completion, table completion and flow-chart completion on dense academic vocabulary at lecture speed.' },
    { id: 'ieltsl-005', name: 'Question Types — Completion Family', weight: 3 as const, description: 'The five completion families used across IELTS Listening: form, note, table, flow-chart and summary completion — exact wording requirements, word limits, plural/distractor traps and the spelling penalty.' },
    { id: 'ieltsl-006', name: 'Question Types — Multiple Choice, Matching, Labelling, Short Answer', weight: 3 as const, description: 'Multiple choice (three-option A/B/C or five-option A-E), matching (items to lists, speakers to opinions), plan/map/diagram labelling and short-answer questions — strategies for the highest-cognitive-load items.' }
  ]
};
