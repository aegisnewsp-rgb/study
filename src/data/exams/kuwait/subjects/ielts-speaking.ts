// IELTS Speaking — International English Language Testing System.
// Awarding body: jointly owned by British Council, IDP: IELTS Australia and
// Cambridge University Press & Assessment. Three parts in 11-14 minutes:
// Part 1 introduction and interview (4-5 min), Part 2 individual long turn
// with 1 min preparation and 1-2 min speaking (3-4 min including prep), and
// Part 3 two-way discussion (4-5 min). The same Speaking test is used for
// both Academic and General Training. Source: IELTS Academic Speaking test
// format, https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-speaking
// and IELTS Speaking sample tasks,
// https://ielts.org/cdn/ielts-sample-tests/ielts-speaking-sample-tasks-2023.pdf
// Re-check the live part structure and timing on ielts.org before committing
// any revision plan to a student.

import type { Subject } from '../../types';

export const ieltsSpeaking: Subject = {
  id: 'ielts-speaking',
  name: 'Speaking',
  color: '#f59e0b',
  topics: [
    { id: 'ieltss-001', name: 'Part 1 — Introduction and Interview (4-5 min)', weight: 3 as const, description: 'Examiner introduces themselves, checks identification, then asks familiar questions on everyday topics (home, family, work, studies, hobbies). The candidate answers with short developed responses, not single sentences.' },
    { id: 'ieltss-002', name: 'Part 2 — Individual Long Turn (3-4 min, incl. 1 min prep)', weight: 5 as const, description: 'Candidate receives a task card with a topic and bullet prompts, has 1 minute to prepare, then speaks for 1-2 minutes on the topic — a continuous, structured monologue that the examiner does not interrupt.' },
    { id: 'ieltss-003', name: 'Part 3 — Two-Way Discussion (4-5 min)', weight: 4 as const, description: 'Examiner-led discussion of abstract issues linked to the Part 2 topic. The candidate is expected to express and justify opinions, speculate, and compare — the strongest discriminator at band 7 and above.' },
    { id: 'ieltss-004', name: 'Pronunciation and Fluency Markers', weight: 4 as const, description: 'Word stress, sentence stress, intonation, chunking, hesitation patterns, self-correction, and discourse markers (well, actually, I mean, to be honest) — pronunciation contributes to the band score on a separate criterion from fluency.' },
    { id: 'ieltss-005', name: 'Lexical Resource in Spoken English', weight: 3 as const, description: 'Paraphrasing the question, using a range of vocabulary (collocations, less common idiomatic expressions, topic-specific lexis) and avoiding repetition of the same basic words across the three parts.' },
    { id: 'ieltss-006', name: 'Grammatical Range and Accuracy', weight: 3 as const, description: 'Mixing simple and complex sentences, conditional structures, comparatives, passive voice, modals, and relative clauses — but keeping the error rate low enough to stay inside the target band.' }
  ]
};