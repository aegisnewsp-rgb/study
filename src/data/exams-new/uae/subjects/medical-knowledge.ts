import type { Subject } from '../types';

const medical_knowledge: Subject = {
  id: 'medical-knowledge', name: 'Medical-Knowledge', color: '#6b7280',
  topics: [
    { id: 'medica-001', name: 'Topic 1', weight: 3 as const, description: 'Anatomy and physiology: human body systems, organ functions, and structural organization for healthcare practice.' },
    { id: 'medica-002', name: 'Topic 2', weight: 3 as const, description: 'Pathophysiology: disease mechanisms, cellular changes, and pathological processes affecting body systems.' },
    { id: 'medica-003', name: 'Topic 3', weight: 3 as const, description: 'Pharmacology fundamentals: drug classifications, mechanisms of action, and UAE DHA medication guidelines.' },
    { id: 'medica-004', name: 'Topic 4', weight: 3 as const, description: 'Clinical diagnosis: patient assessment, diagnostic testing interpretation, and clinical decision-making.' },
    { id: 'medica-005', name: 'Topic 5', weight: 3 as const, description: 'Medical ethics and professionalism: healthcare regulations, patient rights, and ethical dilemmas in UAE practice.' },
    { id: 'medica-006', name: 'Topic 6', weight: 3 as const, description: 'Public health and epidemiology: disease prevention, health promotion, and population health in UAE.' },
    { id: 'medica-007', name: 'Topic 7', weight: 3 as const, description: 'Emergency medicine: trauma care, resuscitation, and emergency management protocols in UAE healthcare.' },
    { id: 'medica-008', name: 'Topic 8', weight: 3 as const, description: 'Chronic disease management: diabetes, cardiovascular diseases, and long-term care approaches in the Gulf.' },
    { id: 'medica-009', name: 'Topic 9', weight: 3 as const, description: 'Infectious diseases: transmission, prevention, treatment protocols, and outbreak management in the UAE.' },
    { id: 'medica-010', name: 'Topic 10', weight: 3 as const, description: 'Mental health basics: psychiatric conditions, patient assessment, and UAE mental health awareness.' },
    { id: 'medica-011', name: 'Topic 11', weight: 3 as const, description: 'Pediatric care: childhood diseases, growth milestones, and age-specific healthcare approaches in UAE.' },
    { id: 'medica-012', name: 'Topic 12', weight: 3 as const, description: 'Women health: reproductive health, prenatal care, and UAE maternal health services.' },
    { id: 'medica-013', name: 'Topic 13', weight: 3 as const, description: 'Geriatric care: aging processes, elderly patient management, and UAE geriatric healthcare services.' },
    { id: 'medica-014', name: 'Topic 14', weight: 3 as const, description: 'Laboratory medicine: common lab tests, result interpretation, and clinical significance for diagnosis.' },
    { id: 'medica-015', name: 'Topic 15', weight: 3 as const, description: 'Healthcare systems and regulations: UAE health authority requirements, licensing, and practice standards.' },
  ]
};

export { medical_knowledge };