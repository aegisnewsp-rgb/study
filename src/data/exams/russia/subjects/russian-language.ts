export const russian_language: Subject = {
  id: 'russian_language', name: 'Russian Language', color: '#dc2626',
  topics: [
    { id: 'eed-rus-001', name: 'Phonetics and Orthography', weight: 3 as const, description: 'Russian alphabet, sound-letter correspondence, stress rules, spelling conventions, and phonetic analysis. EGE tests accurate spelling and pronunciation in the written exam component.' },
    { id: 'eed-rus-002', name: 'Vocabulary and Word Formation', weight: 4 as const, description: 'Lexical norms, antonyms, synonyms, paronyms, derivational morphology, root words, prefixes, and suffixes. Vocabulary is tested through contextual word usage and word-building tasks.' },
    { id: 'eed-rus-003', name: 'Morphology — Parts of Speech', weight: 5 as const, description: 'Nouns (gender, number, case), adjectives, pronouns, numerals, verbs (aspect, mood, tense, conjugation), adverbs, prepositions, and conjunctions. Grammatical case system mastery is essential.' },
    { id: 'eed-rus-004', name: 'Sentence Structure and Syntax', weight: 5 as const, description: 'Simple and compound sentences, complex sentences with subordinate clauses (subject, predicate, attributive, adverbial), sentence analysis, and punctuation rules — the most heavily weighted grammar section.' },
    { id: 'eed-rus-005', name: 'Text Analysis and Reading Comprehension', weight: 4 as const, description: 'Understanding and interpreting literary and publicistic texts, identifying the main idea, author\'s intent, composition structure, and types of speech (narrative, descriptive, argumentative).' },
    { id: 'eed-rus-006', name: 'Essay Writing and Speech Styles', weight: 4 as const, description: 'Rules of essay composition (introduction, thesis, arguments, conclusion), different speech styles (colloquial, literary, scientific), register, and coherence in written expression.' },
    { id: 'eed-rus-007', name: 'Punctuation and Capitalization', weight: 3 as const, description: 'Correct use of commas, periods, colons, semicolons, dashes, quotation marks, parentheses, and capitalization rules in Russian orthography — frequently tested in part C of the exam.' }
  ]
};
