// IELTS Writing (Academic) — International English Language Testing System
// (Qatar). Awarding body: jointly owned by the British Council, IDP: IELTS
// Australia, and Cambridge University Press & Assessment. Two tasks: Task 1
// (150+ words, ~20 minutes, describes visual information) and Task 2 (250+
// words, ~40 minutes, essay response to a point of view, argument or
// problem). Task 2 carries twice the weight of Task 1 in the final band
// score. In Qatar the test is administered by the British Council at its
// Doha test centre and by IDP IELTS at the Doha centre. Source: IELTS
// Academic Writing test format,
// https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing
// and IELTS Guide for test takers,
// https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-guide-for-test-takers.pdf
// Re-check the live task prompts, word limits and weighting on ielts.org
// before committing any revision plan to a student.

import type { Subject } from '../../types';

export const ieltsWriting: Subject = {
  id: 'ielts-writing',
  name: 'Writing (Academic)',
  color: '#ef4444',
  topics: [
    { id: 'ieltsw-001', name: 'Task 1 — Describing Visual Information', weight: 4 as const, description: 'Describing a graph, table, chart or diagram in 150+ words in ~20 minutes: opening paraphrase, overview of the key trend, supporting detail with data, and accurate comparison across categories.' },
    { id: 'ieltsw-002', name: 'Task 1 — Data Comparison and Selection', weight: 3 as const, description: 'Selecting and grouping the most significant features from the data, ignoring minor detail, and signalling comparison with appropriate cohesive devices (whereas, in contrast, similarly).' },
    { id: 'ieltsw-003', name: 'Task 1 — Process and Map Description', weight: 2 as const, description: 'Describing a natural/manufactured process or a map with two stages/changes — sequenced present tense language (first, then, subsequently) and clear directional vocabulary for spatial layout.' },
    { id: 'ieltsw-004', name: 'Task 2 — Essay Structure and Argument', weight: 5 as const, description: 'Responding to a point of view, argument or problem in 250+ words in ~40 minutes: clear introduction with thesis, two body paragraphs with topic sentences and supported reasons, counter-argument paragraph, and a conclusion. Worth twice Task 1.' },
    { id: 'ieltsw-005', name: 'Task 2 — Opinion, Discussion and Problem/Solution Essays', weight: 4 as const, description: 'The three Task 2 prompt types: "To what extent do you agree or disagree" (opinion), "Discuss both views and give your opinion" (discussion), and "Causes/Solutions/Problems" — each requires a slightly different paragraph plan.' },
    { id: 'ieltsw-006', name: 'Task 2 — Cohesion, Lexical Resource and Grammar', weight: 4 as const, description: 'Cohesive devices without overusing them, paragraphing, accurate subject-verb agreement, range of complex sentence structures, academic vocabulary and the four marking criteria (task response, coherence and cohesion, lexical resource, grammatical range and accuracy).' },
    { id: 'ieltsw-007', name: 'Assessment Criteria — Task Response, Coherence, Lexical, Grammar', weight: 3 as const, description: 'The four public-band descriptors used by IELTS examiners, with the band 7.0-9.0 patterns that mark a strong Academic Writing response — clear position, supported with relevant main points, error-free complex sentences, precise word choice.' }
  ]
};
