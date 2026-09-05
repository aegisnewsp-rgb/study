export const varc: Subject = {
  id: 'varc', name: 'VARC', color: '#6b7280',
  topics: [
    { id: 'varc-001', name: 'Reading Comprehension', weight: 3 as const, description: 'Reading Comprehension: Long passages from diverse topics (business, philosophy, literature, social issues) with inference, tone, main idea, and vocabulary questions — the most time-consuming section in XAT VARC.' },
    { id: 'varc-002', name: 'Verbal Ability & Cloze Test', weight: 3 as const, description: 'Verbal Ability — Fill in the Blanks: Vocabulary-based, grammar-based, and contextual fill-in-the-blank questions — tests word power and usage.' },
    { id: 'varc-003', name: 'Para Jumbles & Sentence Ordering', weight: 3 as const, description: 'Para Jumbles and Sentence Rearrangement: Arranging jumbled sentences to form a coherent paragraph — XAT tests both logical sequencing and connector usage.' },
    { id: 'varc-004', name: 'Critical Reasoning & Arguments', weight: 3 as const, description: 'Critical Reasoning: Argument identification, assumption recognition, strengthening and weakening arguments, and logical flaw detection — XAT tests higher-order reasoning through RC and verbal ability.' },
    { id: 'varc-005', name: 'Analogies & Contextual Vocabulary', weight: 3 as const, description: 'Analogies and Vocabulary: Word analogies, synonyms, antonyms, and contextual usage — vocabulary depth required for high XAT VARC scores.' },
    { id: 'varc-006', name: 'Sentence Completion & Fillers', weight: 3 as const, description: 'Sentence Completion: Single and double blanks with contextual clues, grammatically and logically correct completions — precision in language usage.' },
    { id: 'varc-007', name: 'Error Spotting & Grammar', weight: 3 as const, description: 'Error Spotting: Grammatical errors, inappropriate word usage, spelling errors, and idiom-based errors — requires strong foundational grammar knowledge.' },
    { id: 'varc-008', name: 'Verbal Logic (Fact, Inference, Judgment)', weight: 3 as const, description: 'Verbal Logic — Fact, Inference, Judgment: Distinguishing between facts, opinions, inferences, and judgments in a passage — a unique question type in XAT requiring careful reading.' },
    { id: 'varc-009', name: 'Idioms, Phrases & Phrasal Verbs', weight: 3 as const, description: 'Idioms and Phrases: Common idioms, proverbs, and phrases used in formal and informal English — vocabulary enrichment for XAT verbal ability.' },
    { id: 'varc-010', name: 'Paragraph Summary & Main Idea', weight: 3 as const, description: 'Summary Questions: Selecting the most appropriate summary of a passage from given options — tests comprehensive understanding and conciseness.' },
    { id: 'varc-011', name: 'Word Usage & Vocabulary Precision', weight: 3 as const, description: 'Word Usage in Context: Identifying correct usage of words in given contexts, distinguishing between similar-sounding words — precision-based vocabulary questions.' },
    { id: 'varc-012', name: 'Literary & Analytical Passages', weight: 3 as const, description: 'Literary and Cultural Passages: Passages from classical literature, historical accounts, and cultural commentary — XAT known for selecting intellectually challenging passages.' }
  ]
};
