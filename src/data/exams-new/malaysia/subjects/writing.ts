import type { Subject } from '../types';

const writing: Subject = {
  id: 'writing', name: 'Writing', color: '#6b7280',
  topics: [
    { id: 'writin-001', name: 'Understanding Task Requirements', weight: 3 as const, description: 'Analyse the Writing Task prompt carefully to identify all key points, audience, and purpose before planning your response.' },
    { id: 'writin-002', name: 'Essay Planning & Organisation', weight: 3 as const, description: 'Structure essays with a clear introduction, logical body paragraphs, and a coherent conclusion using appropriate discourse markers.' },
    { id: 'writin-003', name: 'Introducing & Concluding Arguments', weight: 3 as const, description: 'Write compelling introductions that contextualise the topic and conclusions that synthesise key arguments without introducing new points.' },
    { id: 'writin-004', name: 'Developing Body Paragraphs with Evidence', weight: 3 as const, description: 'Support arguments with relevant examples, statistics, or case studies while maintaining paragraph unity and coherence.' },
    { id: 'writin-005', name: 'Using Academic Vocabulary & Collocations', weight: 3 as const, description: 'Incorporate subject-specific vocabulary and natural word combinations appropriate for formal academic writing in Malaysian context.' },
    { id: 'writin-006', name: 'Sentence Variety & Grammatical Accuracy', weight: 3 as const, description: 'Use a mix of sentence structures — simple, compound, and complex — while avoiding common grammatical errors in MUET writing.' },
    { id: 'writin-007', name: 'Formal Letter / Email Writing', weight: 3 as const, description: 'Practise writing formal letters or emails for Task 1, including letter format, register, and persuasive techniques.' },
    { id: 'writin-008', name: 'Time Management for Writing Tasks', weight: 3 as const, description: 'Allocate approximately 45 minutes for Task 2 and 30 minutes for Task 1, including planning, drafting, and reviewing time.' },
  ]
};

export { writing };
