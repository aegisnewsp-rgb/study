import type { Subject } from '../types';

const english: Subject = {
  id: 'english', name: 'English', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Reading Comprehension & Analysis', weight: 3 as const, description: 'Read and analyse passages similar to those in UPPM English Paper 1, focusing on main ideas, inference, and vocabulary in context.' },
    { id: 'englis-002', name: 'Vocabulary Building & Word Formation', weight: 3 as const, description: 'Expand academic and medical vocabulary, understand word roots, prefixes, and suffixes commonly tested in UPPM English.' },
    { id: 'englis-003', name: 'Grammar & Sentence Structure', weight: 3 as const, description: 'Master advanced English grammar including tense consistency, conditionals, subjunctive mood, and complex sentence structures.' },
    { id: 'englis-004', name: 'Essay Writing & Coherence', weight: 3 as const, description: 'Write well-structured essays with clear thesis statements, logical paragraphs, and appropriate discourse markers for academic purposes.' },
    { id: 'englis-005', name: 'Summary Writing & Information Transfer', weight: 3 as const, description: 'Practise condensing source texts into summaries and transferring information between formats such as tables, graphs, and paragraphs.' },
    { id: 'englis-006', name: 'Listening Comprehension Skills', weight: 3 as const, description: 'Develop listening skills for academic English with various accents, focusing on detail extraction and overall comprehension.' },
    { id: 'englis-007', name: 'Oral Communication & Presentation', weight: 3 as const, description: 'Build confidence in speaking through group discussions, oral presentations, and pronunciation practice for academic settings.' },
    { id: 'englis-008', name: 'Exam Strategies & Time Management', weight: 3 as const, description: 'Apply time allocation strategies across all sections of the UPPM English paper, including reading, writing, and use of English questions.' },
  ]
};

export { english };
