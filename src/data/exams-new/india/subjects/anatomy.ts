import type { Subject } from '../types';

const anatomy: Subject = {
  id: 'anatomy', name: 'Anatomy', color: '#6b7280',
  topics: [
    { id: 'anatom-001', name: 'Upper Limb', weight: 3 as const, description: 'Upper limb anatomy including bones, muscles, nerves, and blood vessels of arm and forearm for medical PG exams.' },
    { id: 'anatom-002', name: 'Lower Limb', weight: 3 as const, description: 'Lower limb anatomy covering hip joint, gluteal region, thigh, leg, and foot structures.' },
    { id: 'anatom-003', name: 'Thorax', weight: 3 as const, description: 'Thorax including heart, lungs, great vessels, and thoracic wall muscles for INI CET preparation.' },
    { id: 'anatom-004', name: 'Abdomen', weight: 3 as const, description: 'Abdomen including abdominal wall, organs of GIT, peritoneal relations, and retroperitoneal structures.' },
    { id: 'anatom-005', name: 'Head and Neck', weight: 3 as const, description: 'Head and neck including skull, cranial nerves, blood supply, and facial muscles.' },
    { id: 'anatom-006', name: 'Brain and Spinal Cord', weight: 3 as const, description: 'Brain and spinal cord including histology of nervous tissue and neural pathways.' },
    { id: 'anatom-007', name: 'Embryology', weight: 3 as const, description: 'Embryology covering gametogenesis, fetal development, and congenital anomalies for NEET PG.' },
    { id: 'anatom-008', name: 'Histology', weight: 3 as const, description: 'Histology of epithelial, connective, muscular, and nervous tissues with microscopic identification.' },
    { id: 'anatom-009', name: 'Genetics', weight: 3 as const, description: 'Genetics including chromosomal disorders, inheritance patterns, and molecular genetics.' },
    { id: 'anatom-010', name: 'Osteology', weight: 3 as const, description: 'Osteology including bones of skull, vertebral column, and appendicular skeleton with clinical correlations.' },
  ]
};

export { anatomy };
