import type { Subject } from '../types';

const business_law: Subject = {
  id: 'business-law', name: 'Business Law', color: '#6b7280',
  topics: [
    { id: 'busine-001', name: 'Topic 1', weight: 3 as const, description: 'South African law of contract including formation, validity, performance, breach, and remedies — foundational for all commercial and professional transactions.' },
    { id: 'busine-002', name: 'Topic 2', weight: 3 as const, description: 'Business entities under South African law including sole proprietorships, partnerships, companies (private, public, and state-owned), and close corporations.' },
    { id: 'busine-003', name: 'Topic 3', weight: 3 as const, description: 'Consumer protection under the Consumer Protection Act including fair business practices, consumer rights, and product liability relevant to pharmacy practice.' },
    { id: 'busine-004', name: 'Topic 4', weight: 3 as const, description: 'Employment law covering the Labour Relations Act, Basic Conditions of Employment Act, and employment equity relevant to managing a pharmacy business.' },
    { id: 'busine-005', name: 'Topic 5', weight: 3 as const, description: 'Intellectual property law including patents, trademarks, and copyright under South African law relevant to pharmaceutical product registration and licensing.' },
    { id: 'busine-006', name: 'Topic 6', weight: 3 as const, description: 'Competition law and regulations affecting the pharmacy sector including pricing, exclusive dealing, and anti-competitive practices under South African law.' },
    { id: 'busine-007', name: 'Topic 7', weight: 3 as const, description: 'Tax law basics including VAT, income tax implications, and tax considerations for running a pharmacy or pharmaceutical distribution business in SA.' },
    { id: 'busine-008', name: 'Topic 8', weight: 3 as const, description: 'South African pharmacy legislation including the Pharmacy Act, Medicines Act, and relevant SAPC regulations governing ownership, licensing, and practice standards.' }
  ]
};

export { business_law };
