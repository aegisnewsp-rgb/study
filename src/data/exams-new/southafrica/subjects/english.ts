import type { Subject } from '../types';

const english: Subject = {
  id: 'english', name: 'English', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Topic 1', weight: 3 as const, description: 'Reading comprehension and inference skills using academic and legal texts — essential for understanding case law, statutes, and legal arguments at SA universities.' },
    { id: 'englis-002', name: 'Topic 2', weight: 3 as const, description: 'Vocabulary development and word usage in academic and legal contexts, covering Latin and French legal terms commonly used in South African law.' },
    { id: 'englis-003', name: 'Topic 3', weight: 3 as const, description: 'Grammar and sentence structure including tense consistency, subject-verb agreement, and complex sentence construction for clear legal writing.' },
    { id: 'englis-004', name: 'Topic 4', weight: 3 as const, description: 'Essay writing and argumentation covering introduction, body, and conclusion structures for academic legal essays required at SA law schools.' },
    { id: 'englis-005', name: 'Topic 5', weight: 3 as const, description: 'Summary and paraphrasing skills to condense legal texts, witness statements, and contractual clauses — frequently tested in LLB entrance examinations.' },
    { id: 'englis-006', name: 'Topic 6', weight: 3 as const, description: 'Critical analysis of argumentative texts identifying assumptions, evidence, logical fallacies, and conclusions in legal reasoning scenarios.' },
    { id: 'englis-007', name: 'Topic 7', weight: 3 as const, description: 'Legal language and register distinguishing formal legal writing from everyday English, including appropriate use of terms of art in South African law.' },
    { id: 'englis-008', name: 'Topic 8', weight: 3 as const, description: 'Reading speed and information extraction techniques for handling large volumes of legal material encountered in university LLB programmes.' },
    { id: 'englis-009', name: 'Topic 9', weight: 3 as const, description: 'Language conventions for oral communication and moot court presentations — skills required for advocacy training at South African law faculties.' },
    { id: 'englis-010', name: 'Topic 10', weight: 3 as const, description: 'NSC English Home Language or First Additional Language examination techniques adapted for LLB admission test performance at SA universities.' }
  ]
};

export { english };
