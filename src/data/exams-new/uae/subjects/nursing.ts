import type { Subject } from '../types';

const nursing: Subject = {
  id: 'nursing', name: 'None', color: '#6b7280',
  topics: [
    { id: 'nursin-001', name: 'Topic 1', weight: 3 as const, description: 'Fundamentals of nursing: basic care principles, patient safety, and nursing process implementation in UAE facilities.' },
    { id: 'nursin-002', name: 'Topic 2', weight: 3 as const, description: 'Patient care techniques: vital signs monitoring, personal hygiene assistance, and comfort measures.' },
    { id: 'nursin-003', name: 'Topic 3', weight: 3 as const, description: 'Medication administration: nursing responsibilities, dosage calculations, and HAAD medication safety standards.' },
    { id: 'nursin-004', name: 'Topic 4', weight: 3 as const, description: 'Patient assessment: health history, physical examination, and nursing documentation requirements.' },
    { id: 'nursin-005', name: 'Topic 5', weight: 3 as const, description: 'Wound management: wound care principles, dressing techniques, and infection prevention in nursing practice.' },
    { id: 'nursin-006', name: 'Topic 6', weight: 3 as const, description: 'IV therapy and fluid management: infusion administration, monitoring, and complication prevention.' },
    { id: 'nursin-007', name: 'Topic 7', weight: 3 as const, description: 'Patient education: health promotion, disease prevention, and patient counseling strategies in UAE healthcare.' },
    { id: 'nursin-008', name: 'Topic 8', weight: 3 as const, description: 'Nursing ethics and communication: professional conduct, teamwork, and culturally sensitive care in UAE.' },
  ]
};

export { nursing };