export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Atomic Theory, Periodicity, and Bonding', weight: 5 as const, description: 'Atomic structure, periodic trends, ionic and covalent bonding, and Lewis structures as defined in the PCAT C2 General Chemistry blueprint.' },
    { id: 'chemis-002', name: 'Chemical Reactions and Equilibrium', weight: 5 as const, description: 'Balancing equations, reaction types, oxidation-reduction, and dynamic equilibrium constants tested under PCAT C2.' },
    { id: 'chemis-003', name: 'Stoichiometry and Kinetic Theory', weight: 4 as const, description: 'Mole relationships, limiting reagents, percent yield, and the kinetic theory of matter per PCAT C2D.' },
    { id: 'chemis-004', name: 'Gas Laws', weight: 4 as const, description: 'Boyle, Charles, ideal gas, and combined gas laws applied to pressure-volume-temperature problems in PCAT C2E.' },
    { id: 'chemis-005', name: 'Solutions, pH, and Acid-Base Theories', weight: 5 as const, description: 'Molarity, solubility, Arrhenius and Bronsted acid-base theories, pH and buffer calculations per PCAT C2F.' },
    { id: 'chemis-006', name: 'Nuclear Chemistry: Radioisotopes', weight: 2 as const, description: 'Radioactive decay, half-life, and applications of radioisotopes in pharmacy per PCAT C2G.' },
    { id: 'chemis-007', name: 'Organic Structure and Properties', weight: 4 as const, description: 'Structural formulas, functional groups, hybridization, and physical properties of organic compounds per PCAT C3A.' },
    { id: 'chemis-008', name: 'Organic Reactions and Mechanisms', weight: 4 as const, description: 'Oxidation-reduction, hydration, hydrolysis, addition, substitution, and elimination reactions in PCAT C3B.' },
    { id: 'chemis-009', name: 'Biochemistry: DNA, RNA, Lipids, and Proteins', weight: 5 as const, description: 'Nucleic acid structure, lipid classes, amino acids, and protein primary through quaternary structure per PCAT C4.' },
    { id: 'chemis-010', name: 'Biochemistry Processes: Denaturation and Metabolism', weight: 3 as const, description: 'Protein denaturation, enzyme activity, and key metabolic pathways tested in the PCAT C4 Basic Biochemistry Processes area.' }
  ]
};
