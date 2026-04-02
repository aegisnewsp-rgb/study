export const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'eth-bio-001', name: 'Cell Biology and Cell Division', weight: 4 as const, description: 'Cell structure (prokaryotic and eukaryotic), organelles, cell membrane transport, mitosis and meiosis, cell cycle, and cellular respiration — foundational biology for EUEE science track.' },
    { id: 'eth-bio-002', name: 'Genetics and Molecular Biology', weight: 5 as const, description: 'Mendelian inheritance, DNA structure and replication, gene expression, transcription and translation, genetic disorders, and Punnett square applications — the highest-weight biology topic for EUEE.' },
    { id: 'eth-bio-003', name: 'Botany — Plant Biology', weight: 4 as const, description: 'Plant cell structure, photosynthesis (light and dark reactions), plant tissues, transport in plants (xylem, phloem), plant hormones, and reproduction in plants.' },
    { id: 'eth-bio-004', name: 'Zoology and Animal Physiology', weight: 4 as const, description: 'Animal classification, digestive system, circulatory system (open and closed), respiratory systems, nervous system, and endocrine system in humans and major animal groups.' },
    { id: 'eth-bio-005', name: 'Ecology and Ecosystems', weight: 3 as const, description: 'Ecosystem components, food chains and food webs, biogeochemical cycles (carbon, nitrogen), ecological succession, population ecology, and environmental conservation.' },
    { id: 'eth-bio-006', name: 'Evolution and Natural Selection', weight: 3 as const, description: 'Darwin\'s theory of evolution, natural selection, speciation, evidence of evolution (fossil record, homology), and evolutionary adaptations in organisms.' },
    { id: 'eth-bio-007', name: 'Human Anatomy and Health', weight: 4 as const, description: 'Structure and function of major human organ systems — skeletal, muscular, digestive, respiratory, circulatory, nervous, and excretory systems. Common diseases and health topics.' },
    { id: 'eth-bio-008', name: 'Reproduction and Development', weight: 3 as const, description: 'Asexual and sexual reproduction, gametogenesis, fertilization, embryonic development, metamorphosis, and reproductive health in humans.' }
  ]
};

export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'eth-chem-001', name: 'Atomic Structure and Periodic Table', weight: 3 as const, description: 'Atomic models, electron configuration, periodic trends, chemical periodicity, and the relationship between atomic structure and element properties.' },
    { id: 'eth-chem-002', name: 'Chemical Bonding and Molecular Structure', weight: 4 as const, description: 'Ionic, covalent, and metallic bonding, VSEPR theory, hybridization, intermolecular forces, and molecular geometry — core concepts for EUEE chemistry.' },
    { id: 'eth-chem-003', name: 'Chemical Reactions and Stoichiometry', weight: 4 as const, description: 'Balancing equations, oxidation-reduction, limiting reagent, mole calculations, molarity, and theoretical yield calculations.' },
    { id: 'eth-chem-004', name: 'Organic Chemistry', weight: 5 as const, description: 'Hydrocarbons, functional groups, reactions (substitution, addition, elimination), polymerization, biomolecules (carbohydrates, proteins, lipids), and reaction mechanisms.' },
    { id: 'eth-chem-005', name: 'Chemical Thermodynamics and Equilibrium', weight: 4 as const, description: 'Enthalpy, entropy, Gibbs free energy, chemical equilibrium, Le Chatelier\'s principle, and factors affecting equilibrium position.' },
    { id: 'eth-chem-006', name: 'Electrochemistry and Redox', weight: 3 as const, description: 'Galvanic and electrolytic cells, standard electrode potentials, Faraday\'s laws, and practical applications of redox reactions.' },
    { id: 'eth-chem-007', name: 'Inorganic Chemistry', weight: 3 as const, description: 'Properties of main group and transition elements, extraction of metals, qualitative analysis, and descriptive chemistry of key elements.' }
  ]
};

export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'eth-math-001', name: 'Algebra and Functions', weight: 5 as const, description: 'Equations and inequalities, polynomial functions, rational functions, exponential and logarithmic functions, and function transformations — core EUEE quantitative section.' },
    { id: 'eth-math-002', name: 'Trigonometry', weight: 4 as const, description: 'Trigonometric functions, identities, inverse trig, solving triangles, and applications of trigonometry in geometry and physics contexts.' },
    { id: 'eth-math-003', name: 'Calculus', weight: 5 as const, description: 'Limits, derivatives of algebraic and trigonometric functions, applications of derivatives (maxima/minima, optimization), and basic integration with applications.' },
    { id: 'eth-math-004', name: 'Geometry and Trigonometry', weight: 4 as const, description: 'Plane geometry (triangles, circles, polygons), solid geometry, coordinate geometry, and applications of geometric theorems.' },
    { id: 'eth-math-005', name: 'Probability and Statistics', weight: 3 as const, description: 'Counting principles, permutations and combinations, probability of events, conditional probability, mean, median, mode, and standard deviation.' },
    { id: 'eth-math-006', name: 'Vectors and Matrices', weight: 3 as const, description: 'Vector operations in 2D and 3D, matrix operations, determinants, solving systems of linear equations, and applications of vectors in geometry.' }
  ]
};
