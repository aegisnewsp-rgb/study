export const arabic: Subject = {
  id: 'arabic', name: 'Arabic', color: '#dc2626',
  topics: [
    { id: 'sa-ara-001', name: 'Arabic Grammar (النحو)', weight: 5 as const, description: 'Nahw (Arabic syntax) — sentence structure, case endings (إعراب), noun patterns, verb conjugation, and grammatical analysis. Core Qiya test component for Saudi university admission.' },
    { id: 'sa-ara-002', name: 'Arabic Morphology (الصرف)', weight: 4 as const, description: 'Sarf rules — word formation, root patterns (أوزان), derived nouns and verbs, conjugation patterns, and morphological analysis of Arabic words.' },
    { id: 'sa-ara-003', name: 'Vocabulary and Language Usage', weight: 4 as const, description: 'Classical and modern Arabic vocabulary, synonyms and antonyms, contextual word usage, idiomatic expressions, and lexical analysis in literary and religious texts.' },
    { id: 'sa-ara-004', name: 'Rhetoric and Literary Analysis (البلاغة)', weight: 3 as const, description: 'Metaphor, simile, metonymy, hyperbole, and other rhetorical devices. Analysis of Quranic, prophetic, and classical literary texts — important for Qiya overall score.' },
    { id: 'sa-ara-005', name: 'Text Comprehension and Reading', weight: 4 as const, description: 'Reading comprehension passages from classical Arabic literature, Quranic excerpts, and modern texts. Inference, main idea, and vocabulary-in-context questions.' }
  ]
};
