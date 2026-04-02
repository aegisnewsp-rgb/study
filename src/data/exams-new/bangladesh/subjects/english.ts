import type { Subject } from '../types';

const english: Subject = {
  id: 'english', name: 'English', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Grammar: Parts of Speech & Sentence Structure', weight: 5 as const, description: 'Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and sentence patterns — fundamental for all Bangladesh admission English tests.' },
    { id: 'englis-002', name: 'Tense, Voice & Narration', weight: 5 as const, description: 'All twelve tenses, active-passive voice, direct-indirect speech transformations — consistently tested in DU, BUET, and medical admission English sections.' },
    { id: 'englis-003', name: 'Vocabulary & Word Formation', weight: 4 as const, description: 'Root words, prefixes, suffixes, synonyms, antonyms, and contextual word usage — high-weightage for admission tests and English proficiency.' },
    { id: 'englis-004', name: 'Reading Comprehension', weight: 5 as const, description: 'Passage reading, inference, main idea identification, and answering contextual questions — essential skill for DU and medical college admission English.' },
    { id: 'englis-005', name: 'English Literature & Prose', weight: 3 as const, description: 'Classic prose passages, literary devices, tone analysis, and comprehension of literary texts — relevant for DU admission English literature section.' },
    { id: 'englis-006', name: 'Poetry & Figurative Language', weight: 3 as const, description: 'Poetic devices, metaphor, simile, personification, rhyme scheme, and critical appreciation of poems — important for DU English Hons. admission.' },
    { id: 'englis-007', name: 'Translation: Bangla to English', weight: 3 as const, description: 'Translating Bengali passages to English accurately — frequently tested in public university admission tests in Bangladesh.' },
    { id: 'englis-008', name: ' Cloze Test & Fill-in-the-Blanks', weight: 4 as const, description: 'Grammar-based and vocabulary-based fill-in-the-blank questions, cloze passages with contextual clues — common format in BUET and DU admission tests.' },
  ]
};

export { english };
