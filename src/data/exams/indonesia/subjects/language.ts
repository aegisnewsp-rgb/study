export const language: Subject = {
  id: 'language', name: 'Language (Indonesian/English)', color: '#f59e0b',
  topics: [
    { id: 'ind-lang-001', name: 'Indonesian Language Proficiency', weight: 4 as const, description: 'Bahasa Indonesia grammar, vocabulary, sentence structure, and formal writing conventions for Indonesian university entrance exams.' },
    { id: 'ind-lang-002', name: 'English Language Proficiency', weight: 4 as const, description: 'English grammar, vocabulary, reading comprehension, and basic academic writing skills tested in UTBK and other Indonesian entrance exams.' },
    { id: 'ind-lang-003', name: 'Reading Comprehension', weight: 5 as const, description: 'Understanding passages, identifying main ideas, inference, vocabulary in context, and critical analysis of texts in both Indonesian and English.' },
    { id: 'ind-lang-004', name: 'Writing and Expression', weight: 3 as const, description: 'Paragraph writing, essay structure, coherent argumentation, and proper use of formal language in academic contexts.' }
  ]
};
