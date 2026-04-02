import type { Subject } from '../types';

const verbal: Subject = {
  id: 'verbal', name: 'Verbal', color: '#6b7280',
  topics: [
    { id: 'verbal-001', name: 'Topic 1', weight: 3 as const, description: 'Vocabulary in Context — understanding word meanings as used in medical and scientific passages, essential for NMAT reading comprehension.' },
    { id: 'verbal-002', name: 'Topic 2', weight: 3 as const, description: 'Reading Comprehension — analyzing and interpreting passages on scientific, social, and general topics to extract main ideas and details.' },
    { id: 'verbal-003', name: 'Topic 3', weight: 3 as const, description: 'Analogies — recognizing relationships between pairs of words to determine similarity or opposition, common in NMAT verbal sections.' },
    { id: 'verbal-004', name: 'Topic 4', weight: 3 as const, description: 'Critical Reasoning — evaluating arguments, identifying assumptions, and drawing logical conclusions from written text.' },
    { id: 'verbal-005', name: 'Topic 5', weight: 3 as const, description: 'Idioms and Expressions — familiarizing common idiomatic phrases in English used in standardized test passages.' },
    { id: 'verbal-006', name: 'Topic 6', weight: 3 as const, description: 'Paragraph Organization — understanding structure, coherence, and logical flow of ideas in written passages.' },
    { id: 'verbal-007', name: 'Topic 7', weight: 3 as const, description: 'Inference Skills — deriving implicit meanings and logical deductions from given textual information.' },
    { id: 'verbal-008', name: 'Topic 8', weight: 3 as const, description: 'Grammar and Usage — applying correct English grammar rules in context, including agreement, tense, and sentence structure.' },
    { id: 'verbal-009', name: 'Topic 9', weight: 3 as const, description: 'Synonyms and Antonyms — expanding vocabulary range by identifying words with similar and opposite meanings.' },
    { id: 'verbal-010', name: 'Topic 10', weight: 3 as const, description: 'Test-Taking Strategies for Verbal — time management, elimination techniques, and approach for NMAT verbal items.' }
  ]
};

export { verbal };
