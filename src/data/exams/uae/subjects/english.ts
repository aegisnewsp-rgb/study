export const english: Subject = {
  id: 'english', name: 'English', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Reading Comprehension', weight: 5 as const, description: 'Main idea, inference, tone, purpose and detail questions over academic and clinical passages shared by UAEU CAT and DOH exams.' },
    { id: 'englis-002', name: 'Grammar and Sentence Structure', weight: 5 as const, description: 'Tenses, articles, prepositions, subject-verb agreement, conditionals and clause structure - the highest-weighted core area.' },
    { id: 'englis-003', name: 'Vocabulary', weight: 4 as const, description: 'Word meaning, synonyms, antonyms, context clues and academic word list items common to both exams.' },
    { id: 'englis-004', name: 'Writing Skills', weight: 4 as const, description: 'Paragraph organisation, essay structure, argument coherence and clinical writing tasks expected of UAE applicants.' },
    { id: 'englis-005', name: 'Verbal Reasoning', weight: 4 as const, description: 'Logical deduction, analogy, statement-assumption and conclusion questions drawn from CAT-style verbal sections.' },
    { id: 'englis-006', name: 'Cloze Tests and Fill in the Blanks', weight: 3 as const, description: 'Multiple-choice and open-cloze items testing grammar and collocation in connected prose.' },
    { id: 'englis-007', name: 'Professional and Medical English', weight: 3 as const, description: 'Healthcare terminology, clinical correspondence and patient-interaction phrases aligned with DOH scope-of-practice language.' },
    { id: 'englis-008', name: 'Spelling and Punctuation', weight: 3 as const, description: 'Common spelling errors, comma/semicolon rules, apostrophes, capitalisation and sentence punctuation.' },
    { id: 'englis-009', name: 'Listening Comprehension', weight: 2 as const, description: 'Short recorded dialogues and announcements with comprehension questions where the exam is computer-based and audio-supported.' },
    { id: 'englis-010', name: 'Idioms and Phrasal Verbs', weight: 2 as const, description: 'High-frequency idiomatic expressions and phrasal verbs used in academic and workplace contexts in the UAE.' }
  ]
};