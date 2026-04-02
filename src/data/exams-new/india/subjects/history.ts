import type { Subject } from '../types';

const history: Subject = {
  id: 'history', name: 'None', color: '#6b7280',
  topics: [
    { id: 'histor-001', name: 'Ancient India', weight: 3 as const, description: 'Indus Valley civilization, Vedic period, Mauryan and Gupta empires — frequently asked in UPSC and state PSC exams.' },
    { id: 'histor-002', name: 'Medieval India', weight: 3 as const, description: 'Delhi Sultanate, Mughal empire, Bhakti and Sufi movements — core for BPSC and UPPSC history sections.' },
    { id: 'histor-003', name: 'Modern India', weight: 3 as const, description: 'British rule, Indian National Movement, Freedom struggle leaders, and constitutional development.' },
    { id: 'histor-004', name: 'World History', weight: 3 as const, description: 'French Revolution, Industrial Revolution, World Wars, and Cold War — asked in general studies papers.' },
    { id: 'histor-005', name: 'Art and Culture', weight: 3 as const, description: 'Buddhist and Jain texts, temple architecture, Bhakti saints, and Indian literary traditions.' },
    { id: 'histor-006', name: 'Post-Independence India', weight: 3 as const, description: 'Partition, integration of princely states, five-year plans, and foreign policy since 1947.' },
    { id: 'histor-007', name: 'Historiography', weight: 3 as const, description: 'Sources of Indian history, archaeological evidence, numismatics, and techniques of historical research.' },
    { id: 'histor-008', name: 'Indian National Congress', weight: 3 as const, description: 'Formation of INC, moderate and extremist phases, revolutionary movements, and key leaders.' },
    { id: 'histor-009', name: 'British Policies', weight: 3 as const, description: 'Land revenue systems, Administrative reforms, Vernacular Press Act, and exploited policies.' },
    { id: 'histor-010', name: 'Social Reforms', weight: 3 as const, description: 'Abolition of Sati, Widow remarriage, Women's education, and reform movements across India.' },
  ]
};

export { history };