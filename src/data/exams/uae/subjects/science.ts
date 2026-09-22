export const science: Subject = {
  id: 'science', name: 'Science', color: '#6b7280',
  topics: [
    { id: 'scienc-001', name: 'Scientific Method and Inquiry', weight: 4 as const, description: 'Formulating hypotheses, identifying controls and variables, interpreting data and drawing conclusions - the inquiry skills expected at high-school level under MOE science standards.' },
    { id: 'scienc-002', name: 'Measurement, Units, and Data Analysis', weight: 3 as const, description: 'SI units, dimensional analysis, significant figures, reading graphs and basic error analysis - applied to MCQs that require interpreting a chart, table or experimental result.' },
    { id: 'scienc-003', name: 'Motion and Newton\'s Laws', weight: 5 as const, description: 'Displacement, velocity, acceleration, the three laws of motion, free-body diagrams and projectile motion - tested across translational, rotational and fluid mechanics items per the EmSAT Achieve Physics specification.' },
    { id: 'scienc-004', name: 'Energy, Work, and Power', weight: 4 as const, description: 'Kinetic and potential energy, work, power, conservation of energy and simple machines - applied in calculation items on EmSAT Achieve Physics.' },
    { id: 'scienc-005', name: 'Electricity and Circuit Analysis', weight: 5 as const, description: 'Electric charge, current, voltage, resistance, Ohm\'s law, series and parallel circuits - the EmSAT Achieve Physics electricity and magnetism domain.' },
    { id: 'scienc-006', name: 'Waves, Sound, and Light', weight: 4 as const, description: 'Wave properties, sound, the electromagnetic spectrum, reflection, refraction and thin lenses - drawn from the EmSAT Achieve Waves and Optics domain.' },
    { id: 'scienc-007', name: 'Atomic Structure and the Periodic Table', weight: 5 as const, description: 'Atomic models, electron configuration, periodic trends, bonding types and the mole concept - tested on EmSAT Achieve Chemistry per the official MOE specification.' },
    { id: 'scienc-008', name: 'Chemical Reactions and Acids and Bases', weight: 4 as const, description: 'Reaction types, balancing equations, stoichiometry, acids and bases, pH scale and redox - tested on EmSAT Achieve Chemistry per the official MOE specification.' },
    { id: 'scienc-009', name: 'Cell Biology and Genetics', weight: 5 as const, description: 'Cell structure, mitosis and meiosis, DNA replication, Mendelian inheritance and modern biotechnology - drawn from the EmSAT Achieve Biology genetics domain.' },
    { id: 'scienc-010', name: 'Ecology and Ecosystems', weight: 3 as const, description: 'Population dynamics, energy flow, biogeochemical cycles and UAE-relevant ecosystems - the applied ecology domain in EmSAT Achieve Biology.' }
  ]
};
