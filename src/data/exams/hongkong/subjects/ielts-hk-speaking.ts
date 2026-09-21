// IELTS Speaking — International English Language Testing System
// (administered in Hong Kong).
// Awarding body: jointly owned by British Council, IDP: IELTS Australia and
// Cambridge University Press & Assessment. The IELTS Speaking test is a
// face-to-face interview with a certified examiner lasting 11-14 minutes,
// consisting of three parts. Source: IELTS Speaking test format,
//   https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-speaking
// and IELTS Speaking band descriptors,
//   https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-guide-for-test-takers.pdf
// and the Hong Kong British Council Speaking preparation page,
//   https://www.britishcouncil.hk/en/exam/ielts/prepare/speaking
// Re-check the live Speaking format, test centre delivery and examiner
// assignment on ielts.org before committing a revision plan.

import type { Subject } from '../../types';

export const ieltsHkSpeaking: Subject = {
  id: 'ielts-hk-speaking',
  name: 'Speaking',
  color: '#8b5cf6',
  topics: [
    { id: 'ieltshk-s-001', name: 'Part 1 — Introduction and Interview (4-5 minutes)', weight: 3 as const, description: 'The examiner introduces themselves, confirms identity, and asks familiar questions on three familiar topics (e.g. studies, work, hobbies, hometown, daily routine, food, weather). Each topic runs about 4 questions. Tests ability to give extended answers on everyday topics.' },
    { id: 'ieltshk-s-002', name: 'Part 2 — Individual Long Turn (3-4 minutes, including 1 minute prep)', weight: 4 as const, description: 'The examiner gives a cue card with a topic and prompts; the candidate has 1 minute to prepare notes, then must speak for 1-2 minutes on the topic without interruption. After the long turn the examiner asks 1-2 follow-up questions. The 1-minute prep time should be used to plan structure (point 1, point 2, point 3) and key vocabulary, not to write full sentences.' },
    { id: 'ieltshk-s-003', name: 'Part 3 — Two-Way Discussion (4-5 minutes)', weight: 4 as const, description: 'A deeper discussion linked to the Part 2 topic, with more abstract and analytical questions (e.g. opinions on social trends, comparisons, predictions, evaluations). Tests ability to express and defend opinions, analyse issues and discuss abstract ideas. Part 3 is the strongest band discriminator at higher bands.' },
    { id: 'ieltshk-s-004', name: 'Assessment Criteria — Fluency, Lexical, Grammar, Pronunciation', weight: 5 as const, description: 'The four Speaking band descriptors: Fluency and Coherence (natural pace, hesitations, self-corrections, coherent discourse); Lexical Resource (vocabulary range, accuracy, paraphrasing); Grammatical Range and Accuracy (varied structures, error-free sentences); Pronunciation (clear articulation, stress and intonation, individual sounds). Each descriptor contributes equally to the band score.' },
    { id: 'ieltshk-s-005', name: 'Pronunciation and Fluency Markers', weight: 3 as const, description: 'English pronunciation for Hong Kong candidates: handling consonant clusters, distinguishing /l/ and /n/, ending consonant sounds, sentence stress, weak forms (e.g. "and" reduced to /ən/), intonation for question types, and chunking at natural phrase boundaries. Fluency markers: discourse markers ("well", "actually", "in fact"), hedging ("sort of", "kind of"), rephrasing.' },
    { id: 'ieltshk-s-006', name: 'Common Cue Card Topics and Preparation', weight: 3 as const, description: 'The published IELTS Speaking cue card topics cycle through: a person you admire, a place you would like to visit, an important event, a book/film you enjoyed, a piece of equipment, a memorable journey, a healthy lifestyle, a change in your life, an educational experience, an environmental issue. Pre-practise answers using the PEEL structure (Point, Explain, Example, Link) for each topic.' }
  ]
};