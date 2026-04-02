import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Topic 1', weight: 3 as const, description: 'Atomic structure, electron configuration, and the periodic table — foundational for understanding drug molecules and their interactions with biological targets.' },
    { id: 'chemis-002', name: 'Topic 2', weight: 3 as const, description: 'Chemical bonding including ionic, covalent, and hydrogen bonds that determine the shape and reactivity of pharmaceutical compounds.' },
    { id: 'chemis-003', name: 'Topic 3', weight: 3 as const, description: 'Stoichiometry and the mole concept enabling calculation of drug dosages, solution concentrations, and IV fluid preparation in clinical chemistry.' },
    { id: 'chemis-004', name: 'Topic 4', weight: 3 as const, description: 'States of matter and gas laws applied to respiratory gas exchange, oxygen therapy, and anaesthetic gas administration in medical settings.' },
    { id: 'chemis-005', name: 'Topic 5', weight: 3 as const, description: 'Chemical kinetics and reaction rates crucial for understanding drug stability, shelf life, and the rate of metabolic reactions in the body.' },
    { id: 'chemis-006', name: 'Topic 6', weight: 3 as const, description: 'Chemical equilibrium and Le Chatelier\'s principle relevant to blood pH buffering systems and acid-base balance in clinical diagnosis.' },
    { id: 'chemis-007', name: 'Topic 7', weight: 3 as const, description: 'Electrochemistry covering redox reactions, galvanic cells, and electrochemical equivalence — applied in understanding cellular respiration and battery-powered medical devices.' },
    { id: 'chemis-008', name: 'Topic 8', weight: 3 as const, description: 'Organic chemistry of hydrocarbons, functional groups, and stereochemistry forming the basis of most pharmaceutical agents and drug design.' },
    { id: 'chemis-009', name: 'Topic 9', weight: 3 as const, description: 'Biomolecules including carbohydrates, proteins, lipids, and nucleic acids — the chemical foundation of life processes and clinical biochemistry.' },
    { id: 'chemis-010', name: 'Topic 10', weight: 3 as const, description: 'Chemical thermodynamics covering enthalpy, entropy, and Gibbs free energy applied to metabolic energy pathways and biochemical reactions.' },
    { id: 'chemis-011', name: 'Topic 11', weight: 3 as const, description: 'Solutions, solubility, and colligative properties essential for preparing injectable solutions, oral suspensions, and understanding haemodialysis.' },
    { id: 'chemis-012', name: 'Topic 12', weight: 3 as const, description: 'Acids, bases, and pH including buffer systems in the human body — critical for interpreting blood gas analyses and IV fluid therapy.' },
    { id: 'chemis-013', name: 'Topic 13', weight: 3 as const, description: 'Oxidation and reduction reactions in biological systems including oxidative stress, antioxidants, and their role in disease processes.' },
    { id: 'chemis-014', name: 'Topic 14', weight: 3 as const, description: 'Environmental and green chemistry considerations relevant to pharmaceutical waste disposal and sustainable healthcare practices in South Africa.' },
    { id: 'chemis-015', name: 'Topic 15', weight: 3 as const, description: 'NSC chemistry examination techniques and problem-solving strategies specific to the HEPC Medical entrance paper in South Africa.' }
  ]
};

export { chemistry };
