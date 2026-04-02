export const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'sa-bio-001', name: 'Cell Biology and Biochemistry', weight: 4 as const, description: 'Cell structure, organelles, cell membrane, enzymes, carbohydrates, proteins, lipids, nucleic acids, and metabolic processes (photosynthesis, cellular respiration).' },
    { id: 'sa-bio-002', name: 'Genetics and Evolution', weight: 5 as const, description: 'Mendelian inheritance, DNA replication, gene expression, genetic disorders, evolutionary theory, natural selection, and population genetics — highest-weight biology topic for Saudi achievement test.' },
    { id: 'sa-bio-003', name: 'Plant Biology', weight: 3 as const, description: 'Plant cell structure, photosynthesis, plant tissues, transport mechanisms (xylem, phloem), plant hormones, and reproduction in plants.' },
    { id: 'sa-bio-004', name: 'Animal Physiology', weight: 4 as const, description: 'Digestive, circulatory, respiratory, nervous, and endocrine systems in humans and animals. Homeostasis, feedback mechanisms, and organ system integration.' },
    { id: 'sa-bio-005', name: 'Ecology and Environment', weight: 3 as const, description: 'Ecosystem structure, food webs, biogeochemical cycles, population ecology, ecological succession, and environmental conservation.' },
    { id: 'sa-bio-006', name: 'Human Anatomy and Health', weight: 4 as const, description: 'Major human organ systems, common diseases, immunity (innate and adaptive), vaccines, and public health concepts — frequently tested in Saudi medical admission exams.' }
  ]
};
