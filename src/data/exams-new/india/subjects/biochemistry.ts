import type { Subject } from '../types';

const biochemistry: Subject = {
  id: 'biochemistry', name: 'Biochemistry', color: '#7c3aed',
  topics: [
    { id: 'bioche-001', name: 'Biomolecules and Enzymes', weight: 3 as const, description: 'Structure and function of carbohydrates, proteins, lipids, and nucleic acids; enzyme classification and kinetics.' },
    { id: 'bioche-002', name: 'Carbohydrate Metabolism', weight: 3 as const, description: 'Glycolysis, glycogenolysis, gluconeogenesis, and blood glucose regulation for medical PG entrance exams.' },
    { id: 'bioche-003', name: 'Protein Chemistry', weight: 3 as const, description: 'Amino acid structure, protein folding, denaturation, and structure-function relationships.' },
    { id: 'bioche-004', name: 'Lipid Metabolism', weight: 3 as const, description: 'Beta-oxidation of fatty acids, ketogenesis, cholesterol synthesis, and lipoprotein metabolism.' },
    { id: 'bioche-005', name: 'Enzymology', weight: 3 as const, description: 'Enzyme kinetics (Michaelis-Menten), Lineweaver-Burk plots, coenzymes, and enzyme regulation.' },
    { id: 'bioche-006', name: 'Glycolysis and Gluconeogenesis', weight: 3 as const, description: 'Aerobic and anaerobic glycolysis pathways, key enzymes, energy yield, and regulation.' },
    { id: 'bioche-007', name: 'Krebs Cycle', weight: 3 as const, description: 'Citric acid cycle steps, energy yield, regulation, and anaplerotic reactions for NEET PG and INI CET.' },
    { id: 'bioche-008', name: 'Electron Transport Chain', weight: 3 as const, description: 'Mitochondrial electron transport, oxidative phosphorylation, ATP synthase, and uncouplers.' },
    { id: 'bioche-009', name: 'Amino Acid Metabolism', weight: 3 as const, description: 'Transamination, deamination, urea cycle, and inherited disorders of amino acid metabolism.' },
    { id: 'bioche-010', name: 'Nucleic Acid Structure', weight: 3 as const, description: 'DNA and RNA structure, replication, transcription, translation, and molecular biology techniques.' },
  ]
};

export { biochemistry };
