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

export const gk: Subject = {
  id: 'gk', name: 'General Knowledge', color: '#f59e0b',
  topics: [
    { id: 'nep-gk-001', name: 'Nepali History and Culture', weight: 4 as const, description: 'Major historical events of Nepal ( unification, Rana period, democracy movements), cultural heritage, festivals, traditions, and famous personalities — important for Tribhuvan University entrance.' },
    { id: 'nep-gk-002', name: 'Nepal Geography and Environment', weight: 4 as const, description: 'Physical geography of Nepal (Himalayan, Hilly, Terai regions), climate, rivers, biodiversity, national parks, and environmental issues specific to Nepal.' },
    { id: 'nep-gk-003', name: 'Civics and Current Affairs', weight: 3 as const, description: 'Nepalese constitution, government structure, federal system, rights and duties of citizens, recent national and international events, and social issues.' },
    { id: 'nep-gk-004', name: 'World Geography and History', weight: 3 as const, description: 'Major world civilizations, important historical events, continents and countries, international organizations, and general world geography knowledge.' },
    { id: 'nep-gk-005', name: 'Science and Technology', weight: 3 as const, description: 'General scientific principles, recent technological advancements, notable scientists, and applications of science in everyday life.' }
  ]
};

export const legal_reasoning: Subject = {
  id: 'legal_reasoning', name: 'Legal Reasoning', color: '#7c3aed',
  topics: [
    { id: 'nep-law-001', name: 'Nepalese Legal System and Constitution', weight: 5 as const, description: 'Overview of Nepal\'s legal system, fundamental rights, constitutional framework, federal, provincial, and local government structure, and the role of judiciary — core legal reasoning topic.' },
    { id: 'nep-law-002', name: 'Legal Terminology and Concepts', weight: 4 as const, description: 'Common legal terms (plaintiff, defendant, petitioner, respondent, prima facie, suo motu), legal maxims, and fundamental legal concepts used in Nepalese law.' },
    { id: 'nep-law-003', name: 'Indian Legal System (for CLAT-Nepal)', weight: 4 as const, description: 'Indian legal history (common law, equity), important Indian legislation, landmark Supreme Court cases, and comparative Nepal-India legal frameworks for integrated programmes.' },
    { id: 'nep-law-004', name: 'Logical Reasoning and Legal Analysis', weight: 4 as const, description: 'Syllogisms, logical deduction, assumption identification, argument evaluation, and applying legal principles to hypothetical fact patterns.' },
    { id: 'nep-law-005', name: 'International Law and Human Rights', weight: 3 as const, description: 'Fundamental human rights (UDHR, ICCPR), international humanitarian law, treaties and conventions, and the role of international courts and tribunals.' }
  ]
};
