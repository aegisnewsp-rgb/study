// IELTS Reading (Academic) — International English Language Testing System
// (administered in Hong Kong).
// Awarding body: jointly owned by British Council, IDP: IELTS Australia and
// Cambridge University Press & Assessment. The IELTS Academic Reading test
// is 60 minutes long, with 40 questions across 3 long passages (2,150-2,750
// words in total). Topic items below are the official 11 question types
// published on ielts.org and the question-type grouping used in the British
// Council Hong Kong preparation resources. Source: IELTS Academic Reading
// test format, https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading
// and IELTS Academic sample test questions,
//   https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test
// and the Hong Kong British Council test-format page,
//   https://www.britishcouncil.hk/en/exam/ielts/which-test/academic
// Re-check the live question types, timing and Hong Kong test centre
// availability on ielts.org before committing a revision plan.

import type { Subject } from '../../types';

export const ieltsHkReading: Subject = {
  id: 'ielts-hk-reading',
  name: 'Reading (Academic)',
  color: '#10b981',
  topics: [
    { id: 'ieltshk-r-001', name: 'Academic Passage Reading and Skimming', weight: 4 as const, description: 'Skimming for gist, scanning for specific information, and reading for detail across three long authentic academic passages drawn from books, journals, magazines and newspapers — total length 2,150-2,750 words.' },
    { id: 'ieltshk-r-002', name: 'Multiple Choice (Reading)', weight: 3 as const, description: 'Choosing one of four options (A-D) for a question, or one of five options (A-E) for a sentence-completion multiple choice — tests understanding of main idea, detail, inference and opinion.' },
    { id: 'ieltshk-r-003', name: 'Identifying Information (True/False/Not Given)', weight: 4 as const, description: 'Deciding whether statements agree with the information in the passage (True), contradict it (False), or are not stated (Not Given) — the question type that most often trips up candidates who read too fast.' },
    { id: 'ieltshk-r-004', name: 'Identifying Writer\'s Views/Claims (Yes/No/Not Given)', weight: 4 as const, description: 'Distinguishing fact from opinion: Yes if the writer claims or holds the view, No if the writer holds the opposite view, Not Given if the writer expresses no view. Easy to confuse with True/False/Not Given — the distinction is critical.' },
    { id: 'ieltshk-r-005', name: 'Matching Information and Headings', weight: 4 as const, description: 'Matching information to specific paragraphs, or selecting the correct heading for each paragraph from a list of options — tests paragraph-level main idea and detail-location.' },
    { id: 'ieltshk-r-006', name: 'Matching Features and Sentence Endings', weight: 3 as const, description: 'Matching features (e.g. researchers to theories, dates to events) and matching sentence endings from a list of options — tests careful line-reference reading.' },
    { id: 'ieltshk-r-007', name: 'Sentence, Summary, Note, Table, Flow-Chart and Diagram Completion', weight: 4 as const, description: 'The completion family of question types — completing sentences, summaries, notes, tables, flow-charts and diagrams using words from the passage within a stated word limit.' },
    { id: 'ieltshk-r-008', name: 'Short-Answer Questions', weight: 2 as const, description: 'Answering open-ended questions about detail in the passage using short answers (no more than three words and/or a number from the passage).' }
  ]
};