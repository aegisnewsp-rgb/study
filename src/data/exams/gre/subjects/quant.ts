import type { Subject } from '../../types';

export const quant: Subject = {
  id: 'quant', name: 'Quantitative Reasoning', color: '#10b981',
  topics: [
    { id: 'qr-001', name: 'Arithmetic', weight: 5 },
    { id: 'qr-002', name: 'Algebra', weight: 5 },
    { id: 'qr-003', name: 'Geometry', weight: 4 },
    { id: 'qr-004', name: 'Data Interpretation', weight: 5 },
    { id: 'qr-005', name: 'Number Properties', weight: 4 },
    { id: 'qr-006', name: 'Probability & Statistics', weight: 4 },
    { id: 'qr-007', name: 'Permutations & Combinations', weight: 3 },
    { id: 'qr-008', name: 'Word Problems', weight: 4 },
    { id: 'qr-009', name: 'Comparison Problems', weight: 3 },
    { id: 'qr-010', name: 'Coordinate Geometry', weight: 3 },
  ]
};
