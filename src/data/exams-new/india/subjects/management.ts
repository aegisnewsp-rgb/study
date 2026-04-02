import type { Subject } from '../types';

const management: Subject = {
  id: 'management', name: 'None', color: '#6b7280',
  topics: [
    { id: 'manage-001', name: 'Management Principles', weight: 3 as const, description: 'Classical, behavioral, and modern management theories — Henri Fayol, Taylor, and contemporary approaches.' },
    { id: 'manage-002', name: 'Planning and Decision Making', weight: 3 as const, description: 'Strategic planning, business forecasting, MBO, and decision tree analysis for managers.' },
    { id: 'manage-003', name: 'Organizing', weight: 3 as const, description: 'Departmentation, span of control, organizational structures, and coordination mechanisms.' },
    { id: 'manage-004', name: 'Staffing and HRM', weight: 3 as const, description: 'Recruitment, training, performance appraisal, and compensation management in organizations.' },
    { id: 'manage-005', name: 'Leading', weight: 3 as const, description: 'Leadership styles, motivation theories, group dynamics, and communication in management.' },
    { id: 'manage-006', name: 'Controlling', weight: 3 as const, description: 'Control process, budgetary control, PERT/CPM, and feedback mechanisms for performance management.' },
    { id: 'manage-007', name: 'Strategic Management', weight: 3 as const, description: 'SWOT analysis, BCG matrix, competitive strategies, and strategic implementation frameworks.' },
    { id: 'manage-008', name: 'Marketing Management', weight: 3 as const, description: '4Ps of marketing, market segmentation, branding, digital marketing, and consumer behavior.' },
    { id: 'manage-009', name: 'Operations Management', weight: 3 as const, description: 'Production planning, quality control, TQM, and supply chain management concepts.' },
    { id: 'manage-010', name: 'Business Ethics', weight: 3 as const, description: 'Corporate governance, CSR, ethical decision-making, and social responsibility of businesses.' },
  ]
};

export { management };