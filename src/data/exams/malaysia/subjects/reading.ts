export const reading: Subject = {
  id: 'reading', name: 'Reading (Paper 2)', color: '#3b82f6',
  topics: [
    { id: 'muet-read-001', name: 'Main Idea and Supporting Details', weight: 5 as const, description: 'Identifying the central theme, distinguishing main ideas from supporting details, and understanding author\'s intent in academic and general texts — core MUET reading comprehension skill.' },
    { id: 'muet-read-002', name: 'Inference and Deduction', weight: 5 as const, description: 'Drawing logical conclusions from textual evidence, inferring implied meanings, and deducing tone, attitude, and purpose from context — highest-weight reading topic in MUET Paper 2.' },
    { id: 'muet-read-003', name: 'Vocabulary in Context', weight: 4 as const, description: 'Understanding unfamiliar words from contextual clues, synonyms, antonyms, and word formation (prefixes, suffixes, roots) — essential for MUET reading success.' },
    { id: 'muet-read-004', name: 'Text Structure and Organization', weight: 3 as const, description: 'Identifying text types (expository, narrative, argumentative), logical flow, paragraph organization, cohesion and coherence signals, and signpost words.' },
    { id: 'muet-read-005', name: 'Critical Analysis of Texts', weight: 4 as const, description: 'Evaluating arguments, identifying bias, distinguishing fact from opinion, assessing evidence quality, and recognizing rhetorical strategies in academic reading passages.' },
    { id: 'muet-read-006', name: 'Graph and Data Interpretation', weight: 3 as const, description: 'Interpreting charts, graphs, tables, and diagrams from academic sources — increasingly tested in MUET reading to assess real-world data literacy.' },
    { id: 'muet-read-007', name: 'Summary Writing from Source Material', weight: 3 as const, description: 'Extracting key points, paraphrasing, and synthesizing information from multiple passages for summary and short-answer responses.' },
    { id: 'muet-read-008', name: 'Cross-Text Comparison', weight: 3 as const, description: 'Comparing perspectives across different texts, identifying similarities and differences in arguments, and synthesizing information from multiple sources.' }
  ]
};
