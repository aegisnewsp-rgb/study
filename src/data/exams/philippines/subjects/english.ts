export const english: Subject = {
  id: 'english', name: 'English', color: '#6b7280',
  topics: [
    { id: 'english-001', name: 'Vocabulary: Synonyms, Antonyms, and Confusing Words', weight: 5 as const, description: 'Identifying synonyms, antonyms, homonyms, and easily confused word pairs drawn from the UPCAT Language Proficiency subtest.' },
    { id: 'english-002', name: 'Spelling and Word Definitions', weight: 4 as const, description: 'Spelling rules and defining grade-level vocabulary words as tested under UPCAT Vocabulary items.' },
    { id: 'english-003', name: 'Grammar and Correct Usage', weight: 5 as const, description: 'Parts of speech, subject-verb agreement, pronoun usage, modifiers, and active vs passive voice in UPCAT Language Proficiency.' },
    { id: 'english-004', name: 'Punctuation, Capitalization, and Sentence Construction', weight: 4 as const, description: 'Comma, semicolon, colon, and capitalization rules plus correct sentence structure and parallelism in UPCAT items.' },
    { id: 'english-005', name: 'Reading Comprehension: Main Idea and Supporting Details', weight: 5 as const, description: 'Identifying the topic sentence, main idea, and explicit supporting details from prose and poetry passages in UPCAT.' },
    { id: 'english-006', name: 'Reading Comprehension: Inference and Conclusions', weight: 5 as const, description: 'Drawing logical conclusions and inferences from passages covering essays, short stories, news articles, and speeches.' },
    { id: 'english-007', name: 'Reading Comprehension: Author\'s Point of View and Tone', weight: 4 as const, description: 'Inferring author purpose, tone, point of view, and bias from UPCAT Reading Comprehension selections.' },
    { id: 'english-008', name: 'Context Clues and Figures of Speech', weight: 3 as const, description: 'Determining word meaning from context and recognizing simile, metaphor, personification, and other literary devices.' }
  ]
};
