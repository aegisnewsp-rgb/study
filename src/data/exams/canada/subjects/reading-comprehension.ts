// Law School Admission Test (LSAT) — Reading Comprehension.
//
// Awarding body: Law School Admission Council (LSAC).
// The LSAT Reading Comprehension section tests comprehension,
// analysis, and reasoning across four passages (drawn from the
// humanities, social sciences, the natural sciences, and law-related
// topics), with one comparative reading pair and approximately 27
// items. Items target the main idea, the author's purpose and tone,
// the structure of the argument, specific details, inference,
// strengthen/weaken, and application to new situations.
//
// Source: LSAC, Reading Comprehension,
//   https://www.lsac.org/lsat/taking-lsat/test-format/reading-comprehension
// Source: LSAC, Types of LSAT Questions,
//   https://www.lsac.org/lsat/prepare/types-lsat-questions
// Verify the live section length, item count, and any in-year
// changes on lsac.org before committing a revision plan to a student.

import type { Subject } from '../../types';

export const readingComprehension: Subject = {
  id: 'reading-comprehension',
  name: 'Reading Comprehension',
  color: '#0ea5e9',
  topics: [
    { id: 'lsatrc-001', name: 'Passage Types and Disciplines', weight: 3 as const, description: 'Recognising the four LSAT Reading Comprehension passage types: humanities, social sciences, natural sciences, and law-related. Each demands a slightly different reading approach.' },
    { id: 'lsatrc-002', name: 'Main Idea and Primary Purpose', weight: 5 as const, description: 'Identifying the central claim, theme, or purpose of the passage. Often the first and highest-weighted question type.' },
    { id: 'lsatrc-003', name: 'Detail and Specific Information', weight: 4 as const, description: 'Locating stated facts, examples, and definitions in the passage. Straightforward if you remember the structure of the passage.' },
    { id: 'lsatrc-004', name: 'Inference and Implication', weight: 5 as const, description: 'Drawing conclusions that follow from the passage even when not stated explicitly. The single most-tested RC question type.' },
    { id: 'lsatrc-005', name: 'Author\'s Tone, Attitude and Purpose', weight: 4 as const, description: 'Identifying the author\'s attitude toward the subject, the tone (formal, sceptical, sympathetic, etc.), and the purpose (to inform, persuade, critique, reflect).' },
    { id: 'lsatrc-006', name: 'Argument Structure and Function', weight: 4 as const, description: 'Recognising the structure of the argument (claim, evidence, counter-argument, response) and identifying the function of a specific sentence or paragraph.' },
    { id: 'lsatrc-007', name: 'Strengthen, Weaken and Assumption in RC', weight: 4 as const, description: 'Items that ask which choice would strengthen or weaken the author\'s argument, or what assumption the argument depends on. Mirrors Logical Reasoning items but in passage context.' },
    { id: 'lsatrc-008', name: 'Comparative Reading Passages', weight: 3 as const, description: 'One pair of passages on related topics, with items asking how the two passages agree, disagree, or address the same issue from different perspectives.' }
  ]
};
