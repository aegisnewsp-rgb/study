import type { Subject } from '../types';

const hindi: Subject = {
  id: 'hindi', name: 'Hindi', color: '#6b7280',
  topics: [
    { id: 'hindi-001', name: 'Hindi Grammar', weight: 3 as const, description: 'Sangya, Sarvanam, Visheshan, Kriya, and basic Hindi grammar rules for competitive exams.' },
    { id: 'hindi-002', name: 'Hindi Composition', weight: 3 as const, description: 'Essay writing, paragraph composition, and letter drafting in formal and informal Hindi.' },
    { id: 'hindi-003', name: 'Hindi Literature', weight: 3 as const, description: 'Renaissance literature, Chhayavaad, Prayogvaad, and major Hindi writers and poets.' },
    { id: 'hindi-004', name: 'Unseen Passage', weight: 3 as const, description: 'Reading comprehension in Hindi with questions on inference, vocabulary, and main idea.' },
    { id: 'hindi-005', name: 'Sentence Correction', weight: 3 as const, description: 'Identify errors in Hindi sentences and choose the grammatically correct option.' },
    { id: 'hindi-006', name: 'Synonyms and Antonyms', weight: 3 as const, description: 'Word meaning, similar and opposite words in Hindi for vocabulary development.' },
    { id: 'hindi-007', name: 'Idioms and Phrases', weight: 3 as const, description: 'Common Hindi idioms, phrases, and their usage in sentences for language tests.' },
    { id: 'hindi-008', name: 'Translation Skills', weight: 3 as const, description: 'English to Hindi and Hindi to English translation for official and competitive exam purposes.' },
  ]
};

export { hindi };