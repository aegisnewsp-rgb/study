import type { Subject } from '../types';

const reading: Subject = {
  id: 'reading', name: 'Reading', color: '#6b7280',
  topics: [
    { id: 'readin-001', name: 'Identifying Main Ideas & Details', weight: 3 as const, description: 'Locate the central theme, supporting details, and specific information from academic passages commonly used in MUET Paper 2.' },
    { id: 'readin-002', name: 'Understanding Vocabulary in Context', weight: 3 as const, description: 'Infer the meaning of unfamiliar words and phrases from contextual clues within authentic academic texts.' },
    { id: 'readin-003', name: 'Making Inferences & Drawing Conclusions', weight: 3 as const, description: 'Evaluate implied meanings, author intent, and logical deductions based on textual evidence in reading passages.' },
    { id: 'readin-004', name: 'Understanding Text Structure & Organisation', weight: 3 as const, description: 'Recognise rhetorical patterns such as cause-effect, comparison-contrast, and classification in academic writing.' },
    { id: 'readin-005', name: 'Evaluating Arguments & Opinion', weight: 3 as const, description: 'Distinguish between facts and opinions, assess the strength of arguments, and identify writer bias in opinion-based texts.' },
    { id: 'readin-006', name: 'Summarising & Synthesising Information', weight: 3 as const, description: 'Condense key points from multiple passages and synthesise information to answer integrated comprehension questions.' },
    { id: 'readin-007', name: 'Understanding Explicit & Implicit Information', weight: 3 as const, description: 'Distinguish between directly stated information and implied meanings across a range of academic text types.' },
    { id: 'readin-008', name: 'Speed Reading & Time Management', weight: 3 as const, description: 'Apply effective scanning and skimming strategies to efficiently answer 40 questions within the 75-minute reading paper.' },
  ]
};

export { reading };
