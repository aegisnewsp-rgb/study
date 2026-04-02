export const science: Subject = {
  id: 'science', name: 'Science (Saintek)', color: '#3b82f6',
  topics: [
    { id: 'undana-sci-001', name: 'Physics Fundamentals', weight: 4 as const, description: 'Mechanics (kinematics, dynamics, work-energy), waves, heat, electricity, and magnetism — core physics topics for Indonesian university entrance science track.' },
    { id: 'undana-sci-002', name: 'Chemistry Fundamentals', weight: 4 as const, description: 'Atomic structure, periodic table, chemical bonding, reactions, stoichiometry, and organic chemistry basics — essential chemistry topics for Indonesian university science programmes.' },
    { id: 'undana-sci-003', name: 'Biology Fundamentals', weight: 4 as const, description: 'Cell biology, genetics, evolution, plant and animal systems, ecology, and biotechnology — biology topics for Indonesian university entrance exams.' },
    { id: 'undana-sci-004', name: 'Mathematics Fundamentals', weight: 3 as const, description: 'Algebra, functions, trigonometry, statistics, and basic calculus concepts — mathematical foundations for Indonesian university science and engineering tracks.' }
  ]
};
