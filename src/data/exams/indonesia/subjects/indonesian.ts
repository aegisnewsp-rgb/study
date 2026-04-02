export const indonesian: Subject = {
  id: 'indonesian', name: 'Indonesian Language (Literasi Bahasa Indonesia)', color: '#dc2626',
  topics: [
    { id: 'utbk-ind-001', name: 'Grammar and Language Usage', weight: 4 as const, description: 'Parts of speech, sentence structure (kalimat efektif), paragraph structure, PUEBI punctuation rules, and correct language usage in formal Indonesian — essential for Literasi Bahasa Indonesia section.' },
    { id: 'utbk-ind-002', name: 'Vocabulary and Word Meaning', weight: 3 as const, description: 'Antonyms, synonyms, idiomatic expressions, derivational morphology, and contextual word meanings in formal and literary Indonesian texts.' },
    { id: 'utbk-ind-003', name: 'Reading Comprehension (Pemahaman Bacaan)', weight: 5 as const, description: 'Main idea, inference, vocabulary in context, author\'s purpose, tone, and critical analysis of literary and non-literary Indonesian passages — highest-weight topic in UTBK Literasi Bahasa Indonesia.' },
    { id: 'utbk-ind-004', name: 'Text Types and Structure', weight: 3 as const, description: 'Expository, narrative, persuasive, and descriptive text structures; logical connectors; cohesion and coherence in Indonesian academic writing.' },
    { id: 'utbk-ind-005', name: 'Literature and Cultural Texts', weight: 3 as const, description: 'Indonesian literary works (prose, poetry, drama), literary terms, analysis of famous Indonesian literary figures and works, and cultural texts from Indonesia and the Malay world.' }
  ]
};
