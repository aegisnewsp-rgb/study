import type { Subject } from '../types';

const pharmacy: Subject = {
  id: 'pharmacy', name: 'Pharmacy', color: '#6b7280',
  topics: [
    { id: 'pharma-001', name: 'Topic 1', weight: 3 as const, description: 'Drug classification, nomenclature, and scheduling status under South African medicines legislation including the Medicines and Related Substances Act.' },
    { id: 'pharma-002', name: 'Topic 2', weight: 3 as const, description: 'Pharmacokinetics covering absorption, distribution, metabolism, and excretion (ADME) of drugs — essential for understanding dose optimisation and drug interactions.' },
    { id: 'pharma-003', name: 'Topic 3', weight: 3 as const, description: 'Pharmaceutical chemistry including drug structures, structure-activity relationships, and chemical properties relevant to drug formulation and stability.' },
    { id: 'pharma-004', name: 'Topic 4', weight: 3 as const, description: 'Clinical pharmacy practice including dispensing, patient counselling, and the role of the pharmacist in South African healthcare teams.' },
    { id: 'pharma-005', name: 'Topic 5', weight: 3 as const, description: 'Drug interactions and contraindications covering pharmacodynamic and pharmacokinetic interactions critical for safe prescribing and dispensing.' },
    { id: 'pharma-006', name: 'Topic 6', weight: 3 as const, description: 'Pharmaceutical calculations including dose calculations, dilution, alligation, and IV flow rates — a high-stakes section in SAPC licensing examinations.' },
    { id: 'pharma-007', name: 'Topic 7', weight: 3 as const, description: 'Pharmacodynamics covering drug mechanisms of action, receptor theory, agonists, antagonists, and dose-response relationships.' },
    { id: 'pharma-008', name: 'Topic 8', weight: 3 as const, description: 'Chemotherapy and antimicrobial agents including antibiotics, antivirals, and antifungals with relevance to South African disease patterns including TB and HIV.' },
    { id: 'pharma-009', name: 'Topic 9', weight: 3 as const, description: 'Pharmaceutics including solid dosage forms, suspensions, emulsions, and the manufacturing and quality control of pharmaceutical products.' },
    { id: 'pharma-010', name: 'Topic 10', weight: 3 as const, description: 'Pharmacology of the central nervous system including analgesics, anaesthetics, antidepressants, and substances of abuse relevant to SA addiction patterns.' },
    { id: 'pharma-011', name: 'Topic 11', weight: 3 as const, description: 'Endocrine pharmacology covering antidiabetic agents, corticosteroids, and thyroid medications for conditions prevalent in the South African population.' },
    { id: 'pharma-012', name: 'Topic 12', weight: 3 as const, description: 'Cardiovascular pharmacology including antihypertensives, anticoagulants, and lipid-lowering agents for heart disease prevalent in SA.' },
    { id: 'pharma-013', name: 'Topic 13', weight: 3 as const, description: 'Pharmacy ethics and professional responsibility under the SAPC Code of Conduct, patient confidentiality, and ethical dilemmas in South African practice.' },
    { id: 'pharma-014', name: 'Topic 14', weight: 3 as const, description: 'Good dispensing practice, labelling requirements, and patient information Leaflets as mandated by South African medicines regulations.' },
    { id: 'pharma-015', name: 'Topic 15', weight: 3 as const, description: 'Integrated revision covering commonly tested SAPC examination topics, previous year question patterns, and South African medicines regulatory frameworks.' }
  ]
};

export { pharmacy };
