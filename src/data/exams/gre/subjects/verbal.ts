import type { Subject } from '../../types';

export const verbal: Subject = {
  id: 'verbal', name: 'Verbal Reasoning', color: '#8b5cf6',
  topics: [
    { id: 'vr-001', name: 'Reading Comprehension', weight: 5 },
    { id: 'vr-002', name: 'Text Completion', weight: 4 },
    { id: 'vr-003', name: 'Sentence Equivalence', weight: 4 },
    { id: 'vr-004', name: 'Vocabulary Building', weight: 5 },
    { id: 'vr-005', name: 'Critical Reasoning', weight: 4 },
    { id: 'vr-006', name: 'Para Jumbles', weight: 3 },
    { id: 'vr-007', name: 'Inference', weight: 4 },
    { id: 'vr-008', name: 'Main Idea', weight: 4 },
  ]
};
