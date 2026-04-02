import type { Subject } from '../types';

const pharmacy: Subject = {
  id: 'pharmacy', name: 'Pharmacy', color: '#6b7280',
  topics: [
    { id: 'pharma-001', name: 'Topic 1', weight: 3 as const, description: 'Pharmaceutical Chemistry — drug composition, chemical properties, and structure-activity relationships of pharmaceutical compounds.' },
    { id: 'pharma-002', name: 'Topic 2', weight: 3 as const, description: 'Pharmacology Basics — drug classification, mechanisms of action, pharmacokinetics, and therapeutic uses of common drugs.' },
    { id: 'pharma-003', name: 'Topic 3', weight: 3 as const, description: 'Pharmacy Law and Ethics — Philippine Pharmacy Act, professional ethics, and regulatory requirements for pharmacists in the Philippines.' },
    { id: 'pharma-004', name: 'Topic 4', weight: 3 as const, description: 'Dosage Calculations — metric conversions, flow rates, IV drip calculations, and compounding calculations.' },
    { id: 'pharma-005', name: 'Topic 5', weight: 3 as const, description: 'Pharmaceutics — drug formulation, manufacturing processes, and quality control in pharmaceutical production.' },
    { id: 'pharma-006', name: 'Topic 6', weight: 3 as const, description: 'Clinical Pharmacy — prescription interpretation, drug therapy monitoring, and patient counseling practices.' },
    { id: 'pharma-007', name: 'Topic 7', weight: 3 as const, description: 'Drug Interactions and Adverse Reactions — identifying and preventing harmful drug interactions and side effects.' },
    { id: 'pharma-008', name: 'Topic 8', weight: 3 as const, description: 'Phytochemistry — medicinal plants, natural product chemistry, and herbal medicine preparations in the Philippines.' },
    { id: 'pharma-009', name: 'Topic 9', weight: 3 as const, description: 'Microbiology and Sterilization — aseptic techniques, microbial control, and sterile product preparation.' },
    { id: 'pharma-010', name: 'Topic 10', weight: 3 as const, description: 'Pharmaceutical Mathematics — alligation, proportion, and concentration calculations required in pharmacy practice.' },
    { id: 'pharma-011', name: 'Topic 11', weight: 3 as const, description: 'Community Pharmacy Practice — dispensing procedures, inventory management, and over-the-counter medication counseling.' },
    { id: 'pharma-012', name: 'Topic 12', weight: 3 as const, description: 'Hospital Pharmacy — unit dose systems, IV admixture, and institutional pharmacy operations.' },
    { id: 'pharma-013', name: 'Topic 13', weight: 3 as const, description: 'Toxicology — poisoning management, antidote categories, and toxicological assessment in acute care settings.' },
    { id: 'pharma-014', name: 'Topic 14', weight: 3 as const, description: 'Drug Standards and Testing — Pharmacopeial standards, quality assurance, and bioequivalence testing.' },
    { id: 'pharma-015', name: 'Topic 15', weight: 3 as const, description: 'LEA/RX Board Exam Practice Tests — comprehensive drills simulating the actual Pharmacy licensure examination format.' }
  ]
};

export { pharmacy };
