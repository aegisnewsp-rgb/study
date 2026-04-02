import type { Subject } from '../types';

const english: Subject = {
  id: 'english', name: '('english', 'English')', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Topic 1', weight: 3 as const, description: 'Grammar and Correct Usage — parts of speech, agreement, tenses, and sentence construction in standard English.' },
    { id: 'englis-002', name: 'Topic 2', weight: 3 as const, description: 'Vocabulary Development — word meanings, synonyms, antonyms, context clues, and academic word lists for UPCAT.' },
    { id: 'englis-003', name: 'Topic 3', weight: 3 as const, description: 'Reading Comprehension — extracting main ideas, supporting details, tone, and purpose from various passage types.' },
    { id: 'englis-004', name: 'Topic 4', weight: 3 as const, description: 'Verbal Reasoning — analogies, critical analysis of arguments, and evaluating inference in reading passages.' },
    { id: 'englis-005', name: 'Topic 5', weight: 3 as const, description: 'Essay Writing Fundamentals — structure, coherence, unity, and appropriate use of English in written responses.' },
    { id: 'englis-006', name: 'Topic 6', weight: 3 as const, description: ' Philippine English and Academic Language — register, diction, and formal English conventions used in academic settings.' },
    { id: 'englis-007', name: 'Topic 7', weight: 3 as const, description: 'Listening and Oral Communication — comprehension of spoken English and effective verbal expression skills.' },
    { id: 'englis-008', name: 'Topic 8', weight: 3 as const, description: 'UPCAT English Practice Tests — simulated timed drills matching the format and difficulty of UPCAT English sections.' }
  ]
};

export { english };
