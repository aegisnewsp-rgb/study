// IELTS Writing (Academic) — International English Language Testing System
// (administered in Hong Kong).
// Awarding body: jointly owned by British Council, IDP: IELTS Australia and
// Cambridge University Press & Assessment. The IELTS Academic Writing test
// is 60 minutes long, with two tasks: Task 1 (about 150 words, 20 minutes
// recommended) and Task 2 (about 250 words, 40 minutes recommended).
// Task 2 carries twice the weight of Task 1. The Writing band descriptors
// (Task Response, Coherence and Cohesion, Lexical Resource, Grammatical
// Range and Accuracy) are the official scoring rubric. Source: IELTS
// Academic Writing test format,
//   https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing
// and IELTS Academic sample test questions,
//   https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test
// Re-check the live task format, time allocation and Hong Kong test centre
// availability on ielts.org before committing a revision plan.

import type { Subject } from '../../types';

export const ieltsHkWriting: Subject = {
  id: 'ielts-hk-writing',
  name: 'Writing (Academic)',
  color: '#f59e0b',
  topics: [
    { id: 'ieltshk-w-001', name: 'Task 1 — Describing Visual Information', weight: 4 as const, description: 'Describe and summarise the main features of a graph, chart, table or diagram in about 150 words. Recommend spending about 20 minutes. Must include an overview (the most important sentence), key supporting details with specific data, and a logical structure. The most common errors: omitting the overview, listing data without selecting what is significant, and exceeding the recommended time.' },
    { id: 'ieltshk-w-002', name: 'Task 2 — Essay Structure and Argument', weight: 5 as const, description: 'Write an essay in response to a point of view, argument or problem in about 250 words. Recommend spending about 40 minutes. Choose 1 of the question formats (opinion, discussion of two views, problem/solution, advantage/disadvantage, two-part question). Must include a clear position, body paragraphs with topic sentences and supporting examples, and a conclusion. Task 2 carries twice the weight of Task 1.' },
    { id: 'ieltshk-w-003', name: 'Assessment Criteria — Task Response, Coherence, Lexical, Grammar', weight: 5 as const, description: 'The four IELTS Writing band descriptors: Task Achievement/Response (address all parts, present a clear position, support with specific reasons/examples); Coherence and Cohesion (logical organisation, clear progression, varied and accurate linking devices); Lexical Resource (wide range of vocabulary, accurate word formation and collocation); Grammatical Range and Accuracy (varied sentence structures, error-free sentences). Each descriptor contributes equally to the band score.' },
    { id: 'ieltshk-w-004', name: 'Vocabulary for Academic Writing', weight: 4 as const, description: 'Topic-specific academic vocabulary for the common Task 1 and Task 2 topics (education, environment, technology, health, society, government, transport, globalisation, work, culture). Collocations, hedging language ("tend to", "it is widely accepted that"), reporting verbs ("suggest", "indicate", "illustrate"), and signposting phrases ("firstly", "moreover", "in contrast"). Memorising memorised essay templates drops the Lexical Resource band.' },
    { id: 'ieltshk-w-005', name: 'Grammar for Writing — Sentence Structures', weight: 3 as const, description: 'Complex noun phrases, relative clauses, participial phrases, conditional sentences, passive voice, cleft sentences and inversion for emphasis. Avoid common errors: subject-verb agreement, article usage (a/an/the/zero), countable/uncountable nouns, tense consistency. A wider grammatical range lifts the Grammatical Range and Accuracy band.' },
    { id: 'ieltshk-w-006', name: 'Time Management and Process', weight: 3 as const, description: 'Allocate 20 minutes to Task 1 and 40 minutes to Task 2. Read both tasks, decide on Task 2 position first (Task 2 carries more marks), draft Task 2 quickly (about 5-7 minutes), write Task 2 (about 35 minutes), then write Task 1 (about 18-20 minutes). Leave 2-3 minutes for review at the end. Common trap: spending too long on Task 1, leaving Task 2 rushed.' }
  ]
};