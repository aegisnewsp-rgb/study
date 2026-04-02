import type { Subject } from '../types';

const business_law: Subject = {
  id: 'business-law', name: 'Business Law', color: '#6b7280',
  topics: [
    { id: 'busine-001', name: 'Indian Contract Act 1872', weight: 3 as const, description: 'Essentials of valid contract, offer, acceptance, consideration, capacity, and free consent for CMA and CS exams.' },
    { id: 'busine-002', name: 'Contract Performance', weight: 3 as const, description: 'Performance of contracts, time and place of performance, and reciprocal promises.' },
    { id: 'busine-003', name: 'Breach of Contract', weight: 3 as const, description: 'Damages, liquidated damages, injunction, and specific performance remedies for breach.' },
    { id: 'busine-004', name: 'Special Contracts', weight: 3 as const, description: 'Bailment, pledge, guarantee, indemnity, and agency contracts and their legal provisions.' },
    { id: 'busine-005', name: 'Sale of Goods Act', weight: 3 as const, description: 'Contract of sale, conditions and warranties, transfer of title, and rights of unpaid seller.' },
    { id: 'busine-006', name: 'Partnership Act', weight: 3 as const, description: 'Formation, relations between partners, registration, and dissolution of partnership firms.' },
    { id: 'busine-007', name: 'Negotiable Instruments Act', weight: 3 as const, description: 'Bills of exchange, promissory notes, cheques, endorsements, and holder in due course.' },
    { id: 'busine-008', name: 'Consumer Protection Act', weight: 3 as const, description: 'Consumer rights, complaints, consumer protection councils, and redressal forums under CPA 2019.' },
  ]
};

export { business_law };
