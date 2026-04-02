import type { Subject } from '../types';

const english: Subject = {
  id: 'english',
  name: 'English',
  color: '#f59e0b',
  topics: [
    {
      id: 'englis-001',
      name: 'Reading Comprehension',
      weight: 3 as const,
      description: 'Understanding and interpreting passages from various genres including essays, fiction, and non-fiction texts commonly set in the Uganda context.',
    },
    {
      id: 'englis-002',
      name: 'Essay Writing',
      weight: 3 as const,
      description: 'Planning and composing well-structured essays of 500–800 words on topics of social, moral, or national interest relevant to Uganda and East Africa.',
    },
    {
      id: 'englis-003',
      name: 'Summary Writing',
      weight: 3 as const,
      description: 'Summarising a given passage concisely, capturing key points and presenting them in clear, grammatically correct English.',
    },
    {
      id: 'englis-004',
      name: 'Grammar and Usage',
      weight: 3 as const,
      description: 'Application of correct English grammar including tense, concord, relative clauses, and reported speech in line with UCE and UACE English syllabus requirements.',
    },
    {
      id: 'englis-005',
      name: 'Vocabulary Development',
      weight: 3 as const,
      description: 'Building word power through synonyms, antonyms, idioms, and word formation commonly used in Ugandan examination contexts.',
    },
    {
      id: 'englis-006',
      name: 'Poetry Analysis',
      weight: 3 as const,
      description: 'Interpreting set poems from the UNEB literature syllabus, identifying literary devices, tone, themes, and poetic techniques.',
    },
    {
      id: 'englis-007',
      name: 'Oral Literature',
      weight: 3 as const,
      description: 'Study of oral traditions including folktales, proverbs, and oral poetry from Uganda and East Africa, their forms and cultural significance.',
    },
    {
      id: 'englis-008',
      name: 'Language Register and Style',
      weight: 3 as const,
      description: 'Understanding formal and informal language registers, stylistic devices, and appropriate use of language in different communicative contexts.',
    },
    {
      id: 'englis-009',
      name: 'Transactional Writing',
      weight: 3 as const,
      description: 'Writing formal and informal letters, memoranda, reports, and other transactional texts with proper format and tone.',
    },
    {
      id: 'englis-010',
      name: 'Critical Thinking and Text Response',
      weight: 3 as const,
      description: 'Analysing arguments, evaluating evidence, and presenting logical responses to set texts and unseen passages.',
    },
  ],
};

export { english };
