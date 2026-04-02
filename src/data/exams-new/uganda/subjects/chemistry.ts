import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry',
  name: 'Chemistry',
  color: '#10b981',
  topics: [
    {
      id: 'chemis-001',
      name: 'Atomic Structure and the Periodic Table',
      weight: 3 as const,
      description: 'Electronic configuration, periodic trends, ionisation energy, electronegativity, and the relationship between atomic structure and chemical behaviour.',
    },
    {
      id: 'chemis-002',
      name: 'Chemical Bonding',
      weight: 3 as const,
      description: 'Ionic, covalent, and metallic bonding, VSEPR theory, shape of molecules, dipole moments, and intermolecular forces in UACE chemistry.',
    },
    {
      id: 'chemis-003',
      name: 'Stoichiometry',
      weight: 3 as const,
      description: 'Mole concept, empirical and molecular formulas, balancing equations, limiting reagents, and quantitative calculations in chemical reactions.',
    },
    {
      id: 'chemis-004',
      name: 'States of Matter',
      weight: 3 as const,
      description: 'Kinetic theory of gases, ideal gas equation, liquids, solids, phase changes, and the properties of matter in different states.',
    },
    {
      id: 'chemis-005',
      name: 'Chemical Energetics',
      weight: 3 as const,
      description: 'Enthalpy changes, Hess\'s law, bond energies, entropy, and the prediction of reaction feasibility using Gibbs free energy.',
    },
    {
      id: 'chemis-006',
      name: 'Chemical Kinetics',
      weight: 3 as const,
      description: 'Reaction rates, rate laws, order of reactions, activation energy, collision theory, and factors affecting the speed of reactions.',
    },
    {
      id: 'chemis-007',
      name: 'Chemical Equilibrium',
      weight: 3 as const,
      description: 'Reversible reactions, the equilibrium constant, Le Chatelier\'s principle, and calculations involving homogeneous equilibrium systems.',
    },
    {
      id: 'chemis-008',
      name: 'Acids, Bases and Salts',
      weight: 3 as const,
      description: 'pH, buffer solutions, indicators, hydrolysis of salts, acid-base titrations, and the Bronsted-Lowry theory of acids and bases.',
    },
    {
      id: 'chemis-009',
      name: 'Oxidation and Reduction',
      weight: 3 as const,
      description: 'Redox reactions, oxidation numbers, electrochemical cells, standard electrode potentials, and the applications of electrolysis.',
    },
    {
      id: 'chemis-010',
      name: 'Electrochemistry',
      weight: 3 as const,
      description: 'Galvanic and electrolytic cells, standard electrode potentials, Nernst equation, and the chemistry of batteries relevant to UACE.',
    },
    {
      id: 'chemis-011',
      name: 'Organic Chemistry',
      weight: 3 as const,
      description: 'Structure, nomenclature, and reactions of alkanes, alkenes, alkynes, alcohols, aldehydes, ketones, carboxylic acids, and esters.',
    },
    {
      id: 'chemis-012',
      name: 'Nitrogen and Sulfur Compounds',
      weight: 3 as const,
      description: 'Preparation, properties, and reactions of ammonia, nitric acid, sulfur dioxide, sulfuric acid, and their compounds as per UACE syllabus.',
    },
    {
      id: 'chemis-013',
      name: 'Transition Metals',
      weight: 3 as const,
      description: 'Properties of transition elements, variable oxidation states, complex formation, colour of complexes, and their catalytic applications.',
    },
    {
      id: 'chemis-014',
      name: 'Analytical Chemistry',
      weight: 3 as const,
      description: 'Qualitative analysis of cations and anions, precipitation reactions, flame tests, and the principles of chromatography and titrimetry.',
    },
    {
      id: 'chemis-015',
      name: 'Environmental Chemistry',
      weight: 3 as const,
      description: 'Water pollution, atmospheric chemistry, greenhouse effect, ozone depletion, and the chemistry of soil and natural ecosystems.',
    },
  ],
};

export { chemistry };
