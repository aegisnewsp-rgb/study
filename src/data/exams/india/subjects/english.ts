export const english: Subject = {
  id: 'english', name: 'English', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Grammar and Usage', weight: 3 as const, description: 'Tense, subject-verb agreement, articles (a, an, the), prepositions, conjunctions, voice (active/passive), narration (direct/indirect), and error spotting — grammar fundamentals tested in BITSAT English section.' },
    { id: 'englis-002', name: 'Vocabulary in Context', weight: 3 as const, description: 'Synonyms, antonyms, one-word substitutions, homophones, idioms, phrases, and phrasal verbs — contextual vocabulary usage and word power tested through sentence completion and reading passages.' },
    { id: 'englis-003', name: 'Reading Comprehension', weight: 3 as const, description: 'Passages on general, scientific, and literary topics with questions on main idea, inference, vocabulary in context, tone, and fact-vs-opinion — speed reading and comprehension skills assessed.' },
    { id: 'englis-004', name: 'Paragraph Formation (Jumbled Paragraphs)', weight: 3 as const, description: 'Rearranging jumbled sentences to form a coherent paragraph — tests logical sequencing, connector usage, and understanding of discourse structure in written English.' },
    { id: 'englis-005', name: 'Sentence Improvement', weight: 3 as const, description: 'Identifying the most grammatically correct and stylistically appropriate version of an underlined portion — combines grammar precision with clarity of expression.' },
    { id: 'englis-006', name: 'Cloze Test', weight: 3 as const, description: 'Passage with missing words to be filled from given options — tests vocabulary, grammar, and contextual coherence simultaneously in a time-efficient format.' },
    { id: 'englis-007', name: 'Verbal Reasoning — Analogies', weight: 3 as const, description: 'Word pairs with relationships (synonym, antonym, part-whole, function, cause-effect) — reasoning through linguistic relationships and logical word connections.' },
    { id: 'englis-008', name: 'Summary and Conclusion Skills', weight: 3 as const, description: 'Identifying the main point or best summary of a passage — tests ability to extract core meaning and distinguish between details and central ideas in written text.' }
  ]
};
