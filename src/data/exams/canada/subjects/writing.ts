// Ontario Secondary School Literacy Test (OSSLT) — Writing component.
//
// Awarding body: Education Quality and Accountability Office (EQAO).
// Specification: OSSLT Framework (2021/2022 cycle), grounded in the
// Ontario Curriculum literacy expectations for all subjects up to the
// end of Grade 9. The OSSLT Writing component comprises two
// open-response long-writing tasks (News Report and Series of
// Paragraphs expressing an opinion), short-writing tasks, and a
// selected-response Writing section testing conventions.
//
// Source: EQAO OSSLT Framework,
//   https://www.eqao.com/wp-content/uploads/2021/01/framework-osslt.pdf
// Source: EQAO OSSLT landing page,
//   https://www.eqao.com/the-assessments/osslt/
// Source: OSSLT Planning and Preparation Guide (Halton Catholic),
//   https://secondary.hcdsb.org/loyola/wp-content/uploads/sites/8/2019/11/OSSLT-Planning-and-Preparation-Guide-for-Parents.pdf
// Verify the live long-writing rubrics, short-writing task stems and
// any in-year task changes on eqao.com before committing a revision
// plan to a student.

import type { Subject } from '../../types';

export const writing: Subject = {
  id: 'writing',
  name: 'Writing',
  color: '#dc2626',
  topics: [
    { id: 'ossltwr-001', name: 'News Report Long-Writing Task', weight: 5 as const, description: 'The first long-writing task: students write a short news report based on a visual prompt and an information source, using an inverted-pyramid structure, an attention-getting lead, and supporting facts. Scored on idea development, organisation, conventions, and language.' },
    { id: 'ossltwr-002', name: 'Series of Paragraphs Expressing an Opinion', weight: 5 as const, description: 'The second long-writing task: students write two or three connected paragraphs presenting a clear opinion supported by reasons and evidence from supplied source material. The single highest-weighted writing item on the OSSLT.' },
    { id: 'ossltwr-003', name: 'Developing a Main Idea with Supporting Details', weight: 4 as const, description: 'Building a controlling idea, choosing relevant supporting details, and ordering them logically. Underlies both long-writing tasks and most short-writing tasks on the OSSLT.' },
    { id: 'ossltwr-004', name: 'Organising Paragraphs and Using Transitions', weight: 4 as const, description: 'Topic sentences, paragraph unity and coherence, sequencing, transitions (however, for example, in addition, on the other hand) and linking two paragraphs into a coherent short essay.' },
    { id: 'ossltwr-005', name: 'Spelling, Grammar and Punctuation Conventions', weight: 4 as const, description: 'Spelling high-frequency and subject-specific words correctly, using capital letters and end punctuation, internal punctuation (commas, apostrophes, quotation marks), subject-verb agreement, pronoun-antecedent agreement, and consistent verb tense. Tested both in the selected-response Writing section and in the open-response scoring.' },
    { id: 'ossltwr-006', name: 'Sentence Variety and Clarity', weight: 3 as const, description: 'Mixing simple, compound and complex sentences, varying sentence openings, avoiding run-ons and fragments, and choosing precise verbs and nouns. Affects the language and conventions scoring on the long-writing tasks.' },
    { id: 'ossltwr-007', name: 'Short-Writing Tasks (Summary and Brief Response)', weight: 3 as const, description: 'Single-paragraph tasks: a summary of a supplied source, a short response to a specific prompt, and similar short constructions. Practice writing a focused paragraph under a tight word limit.' },
    { id: 'ossltwr-008', name: 'Selected-Response Writing Items', weight: 3 as const, description: 'Multiple-select items testing editing and revising: identifying the most effective sentence, the best word choice, the correct punctuation, and the most coherent paragraph order. Pair practice with the open-response work.' }
  ]
};
