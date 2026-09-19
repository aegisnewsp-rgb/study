export const english: Subject = {
  id: 'english', name: 'English', color: '#6b7280',
  topics: [
    { id: 'nep-eng-001', name: 'Grammar and Usage', weight: 4 as const, description: 'Parts of speech, tenses, subject-verb agreement, modals, conditionals, voice (active/passive), and direct/indirect speech — core English grammar for Tribhuvan University entrance exams.' },
    { id: 'nep-eng-002', name: 'Vocabulary and Word Formation', weight: 4 as const, description: 'Word roots, prefixes, suffixes, synonyms, antonyms, idioms, and contextual vocabulary — frequently tested in reading comprehension and cloze tests.' },
    { id: 'nep-eng-003', name: 'Reading Comprehension', weight: 5 as const, description: 'Passage-based questions testing inference, main idea, vocabulary in context, and critical reading skills — the highest-weight English topic in Nepal bachelor entrance exams.' },
    { id: 'nep-eng-004', name: 'Writing and Composition', weight: 3 as const, description: 'Essay writing, paragraph development, letter writing, summary writing, and formal vs. informal writing conventions for academic English.' },
    { id: 'nep-eng-005', name: 'Poetry and Literary Terms', weight: 3 as const, description: 'Literary devices (metaphor, simile, alliteration, personification), poetic forms, and analysis of prescribed literary texts common in Nepal +2 curriculum.' }
  ]
};


