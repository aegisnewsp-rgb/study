export const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Cellular and Molecular Biology', weight: 5 as const, description: 'Structure and function of cells, organelles, biomolecules, and membrane transport as defined in the PCAT Biological Processes blueprint.' },
    { id: 'biolog-002', name: 'Gene Expression and Cell Division', weight: 4 as const, description: 'DNA replication, transcription, translation, mitosis and meiosis, and the central dogma as tested under PCAT B1.' },
    { id: 'biolog-003', name: 'Energy Transformations and Metabolism', weight: 4 as const, description: 'Cellular respiration, photosynthesis, enzyme kinetics, and metabolic pathways in the PCAT Biological Processes content area.' },
    { id: 'biolog-004', name: 'Genetics and Inheritance', weight: 5 as const, description: 'Mendelian genetics, inheritance patterns, chromosomal anomalies, and population genetics tested under PCAT B1.' },
    { id: 'biolog-005', name: 'Diversity of Life Forms', weight: 3 as const, description: 'Taxonomy, phylogeny, and the defining traits of major kingdoms and domains in PCAT B1 Biology.' },
    { id: 'biolog-006', name: 'Microbiology: Microorganisms and Ecology', weight: 4 as const, description: 'Structure of bacteria, viruses, fungi, and parasites, plus microbial ecology and microbial roles in ecosystems (PCAT B2).' },
    { id: 'biolog-007', name: 'Infectious Diseases, Prevention, and Immunity', weight: 5 as const, description: 'Pathogens, immune response, antigens and antibodies, and public-health prevention strategies in PCAT B2 items.' },
    { id: 'biolog-008', name: 'Human Anatomy: Tissues, Organs, and Health', weight: 4 as const, description: 'Tissue types, organ systems, nutrition, and major diseases and drug classes tested under PCAT B3 Human Anatomy and Physiology.' },
    { id: 'biolog-009', name: 'Human Systems: Skeletal, Muscular, Nervous, Circulatory, Respiratory', weight: 5 as const, description: 'Structure and function of musculoskeletal, nervous, circulatory, and respiratory systems per PCAT B3B.' },
    { id: 'biolog-010', name: 'Human Systems: Excretory, Digestive, Endocrine, Reproductive, Integumentary', weight: 4 as const, description: 'Structure and function of excretory, digestive, endocrine, reproductive, and integumentary systems per PCAT B3B.' }
  ]
};
