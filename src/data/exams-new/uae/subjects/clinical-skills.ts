import type { Subject } from '../types';

const clinical_skills: Subject = {
  id: 'clinical-skills', name: 'Clinical-Skills', color: '#6b7280',
  topics: [
    { id: 'clinic-001', name: 'Topic 1', weight: 3 as const, description: 'Patient assessment fundamentals: vital signs measurement, health history taking, and physical examination techniques.' },
    { id: 'clinic-002', name: 'Topic 2', weight: 3 as const, description: 'Clinical documentation and communication: medical records, handover procedures, and patient interaction protocols.' },
    { id: 'clinic-003', name: 'Topic 3', weight: 3 as const, description: 'Infection control and prevention: hand hygiene, PPE usage, and healthcare-associated infection prevention.' },
    { id: 'clinic-004', name: 'Topic 4', weight: 3 as const, description: 'Medication administration: dosage calculations, routes of administration, and UAE healthcare medication safety standards.' },
    { id: 'clinic-005', name: 'Topic 5', weight: 3 as const, description: 'Emergency response and basic life support: CPR, AED usage, and emergency situation management.' },
    { id: 'clinic-006', name: 'Topic 6', weight: 3 as const, description: 'Wound care and dressing changes: aseptic technique, wound assessment, and chronic wound management.' },
    { id: 'clinic-007', name: 'Topic 7', weight: 3 as const, description: 'Patient positioning and mobility: transfer techniques, pressure ulcer prevention, and rehabilitation basics.' },
    { id: 'clinic-008', name: 'Topic 8', weight: 3 as const, description: 'Specimen collection and handling: blood draws, culture samples, and laboratory test preparation.' },
    { id: 'clinic-009', name: 'Topic 9', weight: 3 as const, description: 'Medical equipment handling: monitoring devices, infusion pumps, and UAE healthcare facility equipment protocols.' },
    { id: 'clinic-010', name: 'Topic 10', weight: 3 as const, description: 'Healthcare ethics and patient rights: confidentiality, informed consent, and culturally sensitive care in UAE.' },
  ]
};

export { clinical_skills };