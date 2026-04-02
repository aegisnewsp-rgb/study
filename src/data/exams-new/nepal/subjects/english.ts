import type { Subject } from '../types';

const english: Subject = {
  id: 'english', name: '('english', 'English')', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Topic 1', weight: 3 as const, description: 'Grammar fundamentals covering parts of speech, sentence structure, and basic English syntax essential for LOE Nepal.' },
    { id: 'englis-002', name: 'Topic 2', weight: 3 as const, description: 'Vocabulary building including word usage, synonyms, antonyms, and context-based meaning as tested in LOE exams.' },
    { id: 'englis-003', name: 'Topic 3', weight: 3 as const, description: 'Reading comprehension passages with inference and interpretation questions commonly found in LOE Nepal.' },
    { id: 'englis-004', name: 'Topic 4', weight: 3 as const, description: 'Writing skills including essay structure, paragraph development, and formal letter writing for LOE preparation.' },
    { id: 'englis-005', name: 'Topic 5', weight: 3 as const, description: 'Tense usage and verb agreement rules with practical application in sentence construction for LOE exams.' },
    { id: 'englis-006', name: 'Topic 6', weight: 3 as const, description: 'Direct and indirect speech transformation rules and their application in LOE English questions.' },
    { id: 'englis-007', name: 'Topic 7', weight: 3 as const, description: 'Active and passive voice conversion with emphasis on Nepali exam question patterns.' },
    { id: 'englis-008', name: 'Topic 8', weight: 3 as const, description: 'Sentence transformation techniques including simple, compound, and complex sentence conversions.' },
    { id: 'englis-009', name: 'Topic 9', weight: 3 as const, description: 'Idioms, phrases, and proverbs commonly tested in LOE Nepal English section.' },
    { id: 'englis-010', name: 'Topic 10', weight: 3 as const, description: 'Comprehension and textual interpretation skills focusing on main idea, tone, and purpose identification.' },
  ]
};

export { english };
