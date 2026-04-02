import type { Subject } from '../types';

const legal_reasoning: Subject = {
  id: 'legal-reasoning', name: '('legal-reasoning', 'Legal Reasoning')', color: '#6b7280',
  topics: [
    { id: 'legal--001', name: 'Topic 1', weight: 3 as const, description: 'Introduction to law including sources of law, legal systems, and basic legal terminology for LOE Nepal.' },
    { id: 'legal--002', name: 'Topic 2', weight: 3 as const, description: 'Constitutional law basics of Nepal covering fundamental rights, duties, and directive principles.' },
    { id: 'legal--003', name: 'Topic 3', weight: 3 as const, description: 'Contract law fundamentals including formation, validity, and breach of contract under Nepali law.' },
    { id: 'legal--004', name: 'Topic 4', weight: 3 as const, description: 'Criminal law basics covering offenses, punishments, and general principles of criminal liability.' },
    { id: 'legal--005', name: 'Topic 5', weight: 3 as const, description: 'Legal terminology and vocabulary essential for understanding and reasoning through legal problems.' },
    { id: 'legal--006', name: 'Topic 6', weight: 3 as const, description: 'Case study analysis methodology for identifying legal issues and applying relevant laws.' },
    { id: 'legal--007', name: 'Topic 7', weight: 3 as const, description: 'Legal writing skills including how to construct logical legal arguments and interpretations.' },
    { id: 'legal--008', name: 'Topic 8', weight: 3 as const, description: 'Nepal legal system structure including courts, tribunals, and alternative dispute resolution mechanisms.' },
    { id: 'legal--009', name: 'Topic 9', weight: 3 as const, description: 'Human rights law including protected rights under Nepali and international human rights frameworks.' },
    { id: 'legal--010', name: 'Topic 10', weight: 3 as const, description: 'Legal reasoning exercises including premise-conclusion relationships and logical deduction in law.' },
  ]
};

export { legal_reasoning };
