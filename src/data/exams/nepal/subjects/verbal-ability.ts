import type { Subject } from '../types';

export const verbal_ability: Subject = {
  id: 'verbal-ability', name: 'Verbal Ability', color: '#f59e0b',
  topics: [
    { id: 'cmat-va-001', name: 'Reading Comprehension - Factual Passages', weight: 5 as const, description: 'Direct-fact, vocabulary-in-context, and explicit-statement questions on business, social, and science passages, forming the highest-yield area of CMAT Verbal Ability.' },
    { id: 'cmat-va-002', name: 'Reading Comprehension - Inferential Passages', weight: 5 as const, description: 'Inference, tone, attitude, authors-purpose, and argument-structure questions that test deep reading on long passages in the CMAT verbal section.' },
    { id: 'cmat-va-003', name: 'Vocabulary - Synonyms and Antonyms', weight: 4 as const, description: 'Context-based synonym selection, antonym identification, and meaning-from-passage vocabulary used across CMAT Verbal Ability passages and standalone items.' },
    { id: 'cmat-va-004', name: 'Sentence Correction and Error Spotting', weight: 4 as const, description: 'Identify grammatical errors in subject-verb agreement, pronoun reference, modifiers, parallelism, and tense usage, and pick the best rewrite - heavily tested in CMAT verbal MCQs.' },
    { id: 'cmat-va-005', name: 'Fill in the Blanks and Cloze Tests', weight: 4 as const, description: 'Single, double, and triple blank fillers plus paragraph cloze tests where the correct word depends on grammar and overall context - a CMAT Verbal Ability staple.' },
    { id: 'cmat-va-006', name: 'Para Jumbles and Sentence Rearrangement', weight: 3 as const, description: 'Reorder jumbled sentences into a coherent paragraph, identify opening and closing sentences, and solve theme-based ordering problems common in MBA entrance verbal sets.' },
    { id: 'cmat-va-007', name: 'Idioms, Phrases, and One-Word Substitution', weight: 3 as const, description: 'Choose the meaning of idioms, match phrase meanings, and select one-word substitutes that replace long definitions in CMAT Verbal Ability vocabulary MCQs.' },
    { id: 'cmat-va-008', name: 'Grammar - Tenses, Articles, and Prepositions', weight: 3 as const, description: 'Spot the correct tense form, proper article usage, and preposition choice in sentences and short paragraphs that appear as discrete grammar items in CMAT verbal papers.' },
    { id: 'cmat-va-009', name: 'Voice Change - Active and Passive', weight: 2 as const, description: 'Convert active sentences to passive and vice versa, retain tense and pronoun structure, and identify correct passive rewrites in CMAT Verbal Ability grammar blocks.' },
    { id: 'cmat-va-010', name: 'Speech - Direct and Indirect', weight: 2 as const, description: 'Convert direct speech to reported speech with correct tense backshift, pronoun changes, and reporting-verb selection in the grammar portion of CMAT Verbal Ability.' },
    { id: 'cmat-va-011', name: 'Verbal Analogies and Word Relationships', weight: 2 as const, description: 'Word-pair analogies, synonyms-antonyms pairs, part-whole and cause-effect relationships treated as short standalone vocabulary items in the CMAT verbal paper.' },
    { id: 'cmat-va-012', name: 'Odd-One-Out and Spelling Correction', weight: 1 as const, description: 'Spelling-correction MCQs, odd-word-out based on category, and frequently-confused-word identification - lowest-weight verbal items recurring in CMAT Verbal Ability.' }
  ]
};