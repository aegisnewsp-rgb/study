export const subject_knowledge: Subject = {
  id: 'subject_knowledge', name: 'Subject Knowledge (Saintek/Soshum)', color: '#10b981',
  topics: [
    { id: 'utbk-sain-001', name: 'Mathematics (Saintek)', weight: 5 as const, description: 'Algebra, functions, trigonometry, calculus (differentiation and integration), geometry, probability, and statistics for Science/Technology track — highest-weight UTBK subject knowledge topic.' },
    { id: 'utbk-sain-002', name: 'Physics (Saintek)', weight: 4 as const, description: 'Mechanics, waves and optics, thermodynamics, electricity and magnetism, and modern physics — tested in UTBK Saintek (Science and Technology) track.' },
    { id: 'utbk-sain-003', name: 'Chemistry (Saintek)', weight: 4 as const, description: 'Atomic structure, chemical bonding, organic and inorganic chemistry, stoichiometry, and chemical thermodynamics — UTBK Saintek chemistry section.' },
    { id: 'utbk-sain-004', name: 'Biology (Saintek)', weight: 4 as const, description: 'Cell biology, genetics, evolution, plant and animal physiology, ecology, and biotechnology — biology component of UTBK Saintek track.' },
    { id: 'utbk-sosh-001', name: 'Economics (Soshum)', weight: 4 as const, description: 'Microeconomics, macroeconomics, supply and demand, market structures, national income, monetary and fiscal policy — Soshum (Social Sciences) track subject knowledge.' },
    { id: 'utbk-sosh-002', name: 'Geography (Soshum)', weight: 3 as const, description: 'Physical geography, human geography, Indonesian and world geography, climate, natural resources, and environmental issues — Soshum track subject.' },
    { id: 'utbk-sosh-003', name: 'History and Sociology (Soshum)', weight: 3 as const, description: 'Indonesian and world history, historical events and figures, sociological concepts, social structures, and cultural anthropology — Soshum social sciences.' },
    { id: 'utbk-sosh-004', name: 'Indonesian Language and Literature', weight: 4 as const, description: 'Bahasa Indonesia grammar, vocabulary, text comprehension, literary analysis, and writing conventions — required for both Saintek and Soshum tracks.' }
  ]
};
