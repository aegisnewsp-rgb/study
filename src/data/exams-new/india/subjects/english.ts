import type { Subject } from '../types';

const english: Subject = {
  id: 'english', name: '('english', 'English')', color: '#f59e0b',
  topics: [
    { id: 'englis-001', name: 'Grammar', weight: 3 as const, description: 'Tenses, subject-verb agreement, error detection, and sentence correction — fundamental for banking and BITSAT English.' },
    { id: 'englis-002', name: 'Vocabulary', weight: 3 as const, description: 'Word meaning, synonyms, antonyms, idioms, and phrase replacement tested in SBI PO and RBI Grade B.' },
    { id: 'englis-003', name: 'Reading Comprehension', weight: 3 as const, description: 'Passage-based questions testing inference, main idea, and contextual understanding in competitive exams.' },
    { id: 'englis-004', name: 'Para Jumbles', weight: 3 as const, description: 'Arranging sentences in logical order to form a coherent paragraph — common in SBI PO and BITSAT.' },
    { id: 'englis-005', name: 'Cloze Test', weight: 3 as const, description: 'Fill in blanks based on context, grammar, and vocabulary — frequent in IBPS and SBI exams.' },
    { id: 'englis-006', name: 'Error Spotting', weight: 3 as const, description: 'Identify grammatical errors in sentences — high frequency topic in banking and state PSC preliminary exams.' },
    { id: 'englis-007', name: 'Sentence Improvement', weight: 3 as const, description: 'Choose the correct version among alternatives for a grammatically and contextually appropriate sentence.' },
    { id: 'englis-008', name: 'Fill in the Blanks', weight: 3 as const, description: 'Double filler, single filler questions using vocabulary and grammatical knowledge common in entrance tests.' },
  ]
};

export { english };