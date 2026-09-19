export const english: Subject = {
  id: 'english', name: 'English', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Reading Comprehension', weight: 5 as const, description: 'Reading passages and answering questions on main idea, tone, inference, vocabulary in context and the writer\'s purpose.' },
    { id: 'englis-002', name: 'Grammar and Usage', weight: 5 as const, description: 'Parts of speech, tense, subject-verb agreement, concord, articles, prepositions and conditional clauses.' },
    { id: 'englis-003', name: 'Vocabulary and Lexis', weight: 4 as const, description: 'Word meaning, synonyms, antonyms, collocations, idioms and register in standard English usage.' },
    { id: 'englis-004', name: 'Critical Reasoning and Argument Analysis', weight: 4 as const, description: 'Identifying assumptions, evaluating evidence, recognising logical flaws and writing GMAT-style argument essays.' },
    { id: 'englis-005', name: 'Essay and Composition Writing', weight: 4 as const, description: 'Argumentative, narrative, descriptive, expository and letter writing with paragraph structure and coherence.' },
    { id: 'englis-006', name: 'Sentence Correction and Structure', weight: 4 as const, description: 'Modifying phrases, parallelism, pronoun reference, modifier placement and idiom use to choose the best sentence.' },
    { id: 'englis-007', name: 'Summary Writing', weight: 3 as const, description: 'Reducing a passage to key points in a fixed word count, using one\'s own words without losing meaning.' },
    { id: 'englis-008', name: 'Oral English and Phonetics', weight: 3 as const, description: 'Vowels, consonants, syllable types, stress patterns, intonation and rhyming in spoken English.' },
    { id: 'englis-009', name: 'Literature Appreciation', weight: 3 as const, description: 'WASSCE English Literature covering prose, poetry and drama appreciation, theme, characterisation, figures of speech, setting and literary devices.' },
    { id: 'englis-010', name: 'Punctuation and Mechanics', weight: 2 as const, description: 'Correct use of commas, semicolons, colons, apostrophes, quotation marks and capitalisation in writing.' }
  ]
};
