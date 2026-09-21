// IELTS Reading (Academic) — International English Language Testing System
// (Qatar). Awarding body: jointly owned by the British Council, IDP: IELTS
// Australia, and Cambridge University Press & Assessment. The IELTS Academic
// Reading test is 60 minutes long with 40 questions across 3 long authentic
// passages drawn from books, journals, magazines and newspapers. Topic items
// below are the official 11 IELTS question types as published on ielts.org
// and the question-type grouping used by the British Council IELTS
// preparation resources. In Qatar the test is administered by the British
// Council at its Doha test centre and by IDP IELTS at the Doha centre.
// Source: IELTS Academic Reading test format,
// https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading
// and IELTS Academic sample test questions,
// https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test
// Re-check the live question types and timing on ielts.org before
// committing any revision plan to a student.

import type { Subject } from '../../types';

export const ieltsReading: Subject = {
  id: 'ielts-reading',
  name: 'Reading (Academic)',
  color: '#10b981',
  topics: [
    { id: 'ieltsr-001', name: 'Academic Passage Reading and Skimming', weight: 4 as const, description: 'Skimming for gist, scanning for specific information, and reading for detail across three long authentic academic passages drawn from books, journals, magazines and newspapers — total length 2,150-2,750 words.' },
    { id: 'ieltsr-002', name: 'Multiple Choice (Reading)', weight: 3 as const, description: 'Choosing one of four options (A-D) for a question, or one of five options (A-E) for a sentence-completion multiple choice — tests understanding of main idea, detail, inference and opinion.' },
    { id: 'ieltsr-003', name: 'Identifying Information (True/False/Not Given)', weight: 4 as const, description: 'Deciding whether statements agree with the information in the passage (True), contradict it (False), or are not stated (Not Given) — the question type that most often trips up candidates who read too fast.' },
    { id: 'ieltsr-004', name: 'Identifying Writer\'s Views/Claims (Yes/No/Not Given)', weight: 4 as const, description: 'Distinguishing fact from opinion: Yes if the writer claims/holds the view, No if the writer holds the opposite view, Not Given if the writer expresses no view.' },
    { id: 'ieltsr-005', name: 'Matching Information and Headings', weight: 4 as const, description: 'Matching information to specific paragraphs, or selecting the correct heading for each paragraph from a list of options — tests paragraph-level main idea and detail-location.' },
    { id: 'ieltsr-006', name: 'Matching Features and Sentence Endings', weight: 3 as const, description: 'Matching features (e.g. researchers to theories, dates to events) and matching sentence endings from a list of options — tests careful line-reference reading.' },
    { id: 'ieltsr-007', name: 'Sentence, Summary, Note, Table, Flow-Chart and Diagram Completion', weight: 4 as const, description: 'The completion family of question types — completing sentences, summaries, notes, tables, flow-charts and diagrams using words from the passage within a stated word limit.' },
    { id: 'ieltsr-008', name: 'Short-Answer Questions', weight: 2 as const, description: 'Answering open-ended questions about detail in the passage using short answers (no more than three words and/or a number from the passage).' }
  ]
};
