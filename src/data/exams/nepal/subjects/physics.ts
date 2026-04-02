export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'nep-phy-001', name: 'Mechanics — Kinematics and Dynamics', weight: 5 as const, description: 'Motion in one and two dimensions, Newton\'s laws, friction, circular motion, momentum conservation, and collisions — highest-weight CMAT physics topic.' },
    { id: 'nep-phy-002', name: 'Work, Energy, and Power', weight: 4 as const, description: 'Work done by forces, kinetic and potential energy, conservation of mechanical energy, power, and applications to real-world scenarios.' },
    { id: 'nep-phy-003', name: 'Heat and Thermodynamics', weight: 4 as const, description: 'Heat transfer, calorimetry, specific and latent heat, kinetic theory of gases, first and second laws of thermodynamics, and heat engines.' },
    { id: 'nep-phy-004', name: 'Waves and Optics', weight: 4 as const, description: 'Wave equation, superposition, standing waves, sound, Doppler effect, reflection, refraction, lenses, mirrors, and introductory wave optics.' },
    { id: 'nep-phy-005', name: 'Electricity and Magnetism', weight: 5 as const, description: 'Electrostatics, Coulomb\'s law, electric circuits, Ohm\'s law, Kirchhoff\'s laws, magnetic effects of current, electromagnetic induction, and AC/DC circuits — heaviest CMAT physics topic.' },
    { id: 'nep-phy-006', name: 'Modern Physics and Electronics', weight: 4 as const, description: 'Photoelectric effect, Bohr model, energy levels, radioactivity, semiconductor basics, logic gates, and digital electronics — growing importance in CMAT and management entrance exams.' },
    { id: 'nep-phy-007', name: 'Fluid Mechanics and Properties of Matter', weight: 3 as const, description: 'Fluid pressure, Pascal\'s principle, Archimedes\' principle, Bernoulli\'s equation, surface tension, viscosity, and elastic properties of solids.' }
  ]
};

export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'nep-chem-001', name: 'Atomic Structure and Periodic Trends', weight: 3 as const, description: 'Atomic models, quantum numbers, electron configurations, and periodic variations in element properties — foundational chemistry concepts for all Nepal entrance exams.' },
    { id: 'nep-chem-002', name: 'Chemical Bonding and Molecular Geometry', weight: 4 as const, description: 'Ionic, covalent, and coordinate bonding, VSEPR theory, hybridization, and molecular geometry — essential for understanding organic and inorganic chemistry.' },
    { id: 'nep-chem-003', name: 'Organic Chemistry and Biomolecules', weight: 5 as const, description: 'Hydrocarbons, functional groups, reaction types, polymers, carbohydrates, proteins, and lipids — the highest-weight chemistry topic for CMAT science track.' },
    { id: 'nep-chem-004', name: 'Chemical Equilibrium and Acid-Base Chemistry', weight: 4 as const, description: 'Chemical equilibrium, Le Chatelier\'s principle, acids and bases, pH calculations, buffer solutions, and hydrolysis of salts.' },
    { id: 'nep-chem-005', name: 'Electrochemistry and Redox', weight: 3 as const, description: 'Oxidation and reduction, electrochemical cells, standard electrode potentials, Faraday\'s laws, batteries, and corrosion prevention.' }
  ]
};

export const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'nep-bio-001', name: 'Cell Biology and Biochemistry', weight: 4 as const, description: 'Cell structure and function, organelles, enzymes, metabolic pathways (photosynthesis, cellular respiration), and biochemical molecules — foundational biology for CMAT science track.' },
    { id: 'nep-bio-002', name: 'Genetics and Molecular Biology', weight: 5 as const, description: 'Mendelian inheritance, DNA replication, gene expression, genetic disorders, genetic engineering, and biotechnology applications — highest-weight biology topic for CMAT and IOE entrance.' },
    { id: 'nep-bio-003', name: 'Botany and Plant Physiology', weight: 4 as const, description: 'Plant cell structure, photosynthesis, plant tissues, transport mechanisms, plant hormones, and reproduction in plants.' },
    { id: 'nep-bio-004', name: 'Zoology and Human Physiology', weight: 4 as const, description: 'Animal classification, major human organ systems (digestive, circulatory, respiratory, nervous, endocrine), and homeostasis — frequently tested in Nepal medical and science entrances.' },
    { id: 'nep-bio-005', name: 'Ecology and Evolution', weight: 3 as const, description: 'Ecosystems, food chains, biogeochemical cycles, ecological succession, population dynamics, natural selection, and evidence for evolution.' },
    { id: 'nep-bio-006', name: 'Reproduction and Development', weight: 3 as const, description: 'Asexual and sexual reproduction, gametogenesis, embryonic development, metamorphosis, and reproductive health — commonly tested in CMAT biology.' }
  ]
};
