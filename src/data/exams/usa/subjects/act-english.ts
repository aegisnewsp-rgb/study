// ACT — English Section.
// Awarding body: ACT, Inc.
// 75 questions, 45 minutes assessing production of writing, language knowledge, and standard conventions.
// Official source: https://www.act.org/content/act/en/products-and-services/the-act.html

import type { Subject } from '../../types';

export const actEnglish: Subject = {
  id: 'act-english',
  name: 'English',
  color: '#2563eb',
  topics: [
    { id: 'acteng-001', name: 'Production of Writing: Topic Development and Unity', weight: 5 as const, description: 'Evaluating whether a proposed addition, revision, or deletion supports the primary rhetorical purpose of a passage.' },
    { id: 'acteng-002', name: 'Production of Writing: Organization, Sequence, and Transitions', weight: 4 as const, description: 'Ordering paragraphs logically, placing transitional phrases, and smoothing narrative flow across multi-paragraph essays.' },
    { id: 'acteng-003', name: 'Conventions of Standard English: Sentence Structure and Fragments', weight: 5 as const, description: 'Resolving comma splices, run-on sentences, missing predicates, and misplaced modifying phrases.' },
    { id: 'acteng-004', name: 'Conventions of Standard English: Punctuation Rules', weight: 5 as const, description: 'Mastering apostrophes, restrictive vs non-restrictive clauses, essential commas, em-dashes, and colons before lists or explanations.' },
    { id: 'acteng-005', name: 'Conventions of Standard English: Usage and Agreement', weight: 4 as const, description: 'Matching subject and verb number across intervening prepositional phrases and maintaining consistent pronoun person and case.' },
    { id: 'acteng-006', name: 'Knowledge of Language: Word Choice, Tone, and Economy', weight: 4 as const, description: 'Eliminating wordiness, redundancy, and awkward phrasing while preserving formal tone and precise vocabulary.' }
  ]
};

export default actEnglish;
