import type { Subject } from '../types';

const english: Subject = {
  id: 'english', name: '('english', 'English')', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Topic 1', weight: 3 as const, description: 'Reading comprehension: passage analysis, inference skills, and critical reading strategies for exam success.' },
    { id: 'englis-002', name: 'Topic 2', weight: 3 as const, description: 'Vocabulary development: word meanings, context clues, and medical/technical terminology for UAE healthcare contexts.' },
    { id: 'englis-003', name: 'Topic 3', weight: 3 as const, description: 'Grammar and usage: sentence structure, tenses, and error identification in professional communication.' },
    { id: 'englis-004', name: 'Topic 4', weight: 3 as const, description: 'Writing skills: paragraph construction, essay organization, and coherent expression of ideas.' },
    { id: 'englis-005', name: 'Topic 5', weight: 3 as const, description: 'Verbal reasoning: analogies, logical relationships, and language-based problem solving.' },
    { id: 'englis-006', name: 'Topic 6', weight: 3 as const, description: 'Listening comprehension: audio passage understanding and information extraction for CAT examinations.' },
    { id: 'englis-007', name: 'Topic 7', weight: 3 as const, description: 'Speaking skills: pronunciation, fluency, and interactive communication in professional settings.' },
    { id: 'englis-008', name: 'Topic 8', weight: 3 as const, description: 'Academic English: research paper conventions, citation styles, and scholarly writing standards.' },
    { id: 'englis-009', name: 'Topic 9', weight: 3 as const, description: 'Business English communication: professional correspondence, reports, and workplace communication in UAE.' },
    { id: 'englis-010', name: 'Topic 10', weight: 3 as const, description: 'Exam-specific strategies: time management, question analysis, and test-taking techniques for UAE exams.' },
  ]
};

export { english };