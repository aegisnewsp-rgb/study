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
