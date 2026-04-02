import type { Subject } from '../types';

const english: Subject = {
  id: 'english', name: 'English', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Reading Comprehension', weight: 3 as const, description: 'Inference, main idea identification, vocabulary in context, and critical analysis of unseen passages — the reading section carries significant weight.' },
    { id: 'englis-002', name: 'Essay Writing', weight: 3 as const, description: 'Structure, coherence, argument development, and language accuracy for formal essays — practise with past Tanzania Law School essay topics.' },
    { id: 'englis-003', name: 'Summary & Note-Taking', weight: 3 as const, description: 'Extracting key points, paraphrasing, and condensing information without distortion — tested in the comprehension and summary paper.' },
    { id: 'englis-004', name: 'Grammar & Usage', weight: 3 as const, description: 'Tense consistency, subject-verb agreement, reported speech, and conditionals — frequent source of errors in law entrance candidates.' },
    { id: 'englis-005', name: 'Vocabulary Development', weight: 3 as const, description: 'Word formation, synonyms, antonyms, and legal terminology — essential for understanding law examination questions in English.' },
    { id: 'englis-006', name: 'Legal Language & Registers', weight: 3 as const, description: 'Formal and legal English, Latin phrases, and precise expression — law school candidates must demonstrate appropriate register.' },
    { id: 'englis-007', name: 'Paragraph & Coherence', weight: 3 as const, description: 'Topic sentences, cohesion devices, and logical flow — law essays require structured, logically connected arguments.' },
    { id: 'englis-008', name: 'Critical Reasoning', weight: 3 as const, description: 'Identifying assumptions, evaluating arguments, and detecting logical fallacies — core skill for Tanzania law entrance examinations.' },
    { id: 'englis-009', name: 'Letter & Report Writing', weight: 3 as const, description: 'Formal letter conventions, report structure, and professional tone — legal correspondence skills assessed in law entrance.' },
    { id: 'englis-010', name: 'Oral Communication', weight: 3 as const, description: 'Clarity, persuasion, and formal presentation skills — oral assessment may form part of the law school selection process.' },
  ]
};

export { english };
