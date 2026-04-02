export const writing: Subject = {
  id: 'writing', name: 'Writing (Paper 4)', color: '#dc2626',
  topics: [
    { id: 'muet-write-001', name: 'Essay Structure and Organization', weight: 5 as const, description: 'Introduction-body-conclusion structure, thesis statements, topic sentences, paragraph development, and logical progression of ideas — foundational MUET writing skills for Band 4+.' },
    { id: 'muet-write-002', name: 'Academic Argumentative Writing', weight: 5 as const, description: 'Presenting arguments with evidence, counterarguments, rebuttals, and logical reasoning — essential for Task A (extended writing) in MUET Paper 4, highest-weight writing topic.' },
    { id: 'muet-write-003', name: 'Language Accuracy and Grammatical Range', weight: 4 as const, description: 'Tense consistency, subject-verb agreement, complex sentence structures, clause formation, and error-free writing — critical for MUET scoring criteria.' },
    { id: 'muet-write-004', name: 'Vocabulary Range and Appropriacy', weight: 4 as const, description: 'Using topic-specific vocabulary, collocations, idiomatic expressions, and academic register appropriate for formal essay writing in Malaysian tertiary contexts.' },
    { id: 'muet-write-005', name: 'Cohesion and Coherence', weight: 4 as const, description: 'Using discourse markers, transitional phrases, pronoun references, lexical chains, and logical connectors to create unified, coherent academic essays.' },
    { id: 'muet-write-006', name: 'Summary and Short-Review Writing', weight: 3 as const, description: 'Writing summaries from source material (emails, letters, articles) and short formal reviews — Task B in MUET Paper 4 requiring conciseness and accuracy.' },
    { id: 'muet-write-007', name: 'Formal Letter and Email Writing', weight: 3 as const, description: 'Format, register, and conventions of formal correspondence in Malaysian academic and professional contexts — tested in MUET Task B short writings.' },
    { id: 'muet-write-008', name: 'Punctuation and Formatting', weight: 3 as const, description: 'Correct use of commas, periods, apostrophes, quotation marks, and paragraph formatting — technical accuracy that affects MUET writing band score.' }
  ]
};
