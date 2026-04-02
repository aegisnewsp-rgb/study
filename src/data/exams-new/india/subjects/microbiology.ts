import type { Subject } from '../types';

const microbiology: Subject = {
  id: 'microbiology', name: 'Microbiology', color: '#6b7280',
  topics: [
    { id: 'microb-001', name: 'General Microbiology', weight: 3 as const, description: 'Bacterial structure, growth, nutrition, sterilization, and culture methods for medical exams.' },
    { id: 'microb-002', name: 'Immunology', weight: 3 as const, description: 'Immune system, antigens, antibodies, hypersensitivity, autoimmune diseases, and immunodeficiency.' },
    { id: 'microb-003', name: 'Bacteriology', weight: 3 as const, description: 'Gram-positive and gram-negative bacteria, pathogens, and lab diagnosis for NEET PG and INI CET.' },
    { id: 'microb-004', name: 'Virology', weight: 3 as const, description: 'DNA and RNA viruses, viral pathogenesis, HIV, hepatitis viruses, and antiviral agents.' },
    { id: 'microb-005', name: 'Mycology', weight: 3 as const, description: 'Fungal classification, superficial and systemic mycoses, and antifungal therapy.' },
    { id: 'microb-006', name: 'Parasitology', weight: 3 as const, description: 'Protozoa and helminths, life cycles, intestinal and blood parasites, and stool microscopy.' },
    { id: 'microb-007', name: 'Clinical Microbiology', weight: 3 as const, description: 'Specimen collection, culture, identification, antibiotic sensitivity testing, and hospital-acquired infections.' },
    { id: 'microb-008', name: 'Applied Microbiology', weight: 3 as const, description: 'Vaccines, immunotherapy, microbial genetics, and recent advances in diagnostic microbiology.' },
  ]
};

export { microbiology };
