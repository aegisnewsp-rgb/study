export const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Cell Biology and Biomolecules', weight: 5 as const, description: 'Cell structure, organelles, cell cycle, mitosis/meiosis, and biomolecules (carbohydrates, proteins, lipids, nucleic acids, enzymes) - core topic for medical entrance biology.' },
    { id: 'biolog-002', name: 'Molecular Biology and Genetics', weight: 5 as const, description: 'DNA replication, transcription, translation, gene regulation, Mendelian genetics, linkage, mutation, and population genetics - the most heavily weighted biology area.' },
    { id: 'biolog-003', name: 'Human Physiology - Digestion and Respiration', weight: 4 as const, description: 'Digestive system organs, enzymes, absorption; respiratory mechanics, gas exchange, oxygen-haemoglobin dissociation and respiratory regulation.' },
    { id: 'biolog-004', name: 'Human Physiology - Circulation and Excretion', weight: 4 as const, description: 'Heart structure, cardiac cycle, ECG, blood groups, coagulation; nephron function, urine formation, counter-current mechanism, and dialysis basics.' },
    { id: 'biolog-005', name: 'Nervous System and Sense Organs', weight: 4 as const, description: 'Neuron structure, synapse, reflex arc, central and peripheral nervous system; eye, ear, and skin receptor physiology for +2 medical entrance.' },
    { id: 'biolog-006', name: 'Endocrine and Reproductive Physiology', weight: 4 as const, description: 'Hormones, feedback mechanisms, pituitary, thyroid, adrenal, pancreas; male and female reproductive systems, gametogenesis, menstrual cycle, parturition.' },
    { id: 'biolog-007', name: 'Plant Physiology', weight: 4 as const, description: 'Water potential, transpiration, translocation; photosynthesis light and dark reactions; respiration in plants; plant growth regulators and photoperiodism.' },
    { id: 'biolog-008', name: 'Reproduction in Plants and Animals', weight: 3 as const, description: 'Asexual and sexual reproduction, flower structure, microsporogenesis, megasporogenesis, double fertilization; animal reproductive strategies and embryology.' },
    { id: 'biolog-009', name: 'Ecology and Environment', weight: 3 as const, description: 'Ecosystem structure, energy flow, biogeochemical cycles, population interactions, biodiversity, conservation, and Nepal-specific environmental concerns.' },
    { id: 'biolog-010', name: 'Evolution and Biodiversity', weight: 3 as const, description: 'Origin of life, theories of evolution, Darwin, Lamarck, evidence, speciation; five-kingdom classification and salient features of major taxa.' },
    { id: 'biolog-011', name: 'Microbiology and Immunology', weight: 3 as const, description: 'Bacteria, viruses, fungi, protozoa structure and life cycles; antigens, antibodies, humoral and cell-mediated immunity, vaccines, and disorders.' },
    { id: 'biolog-012', name: 'Biotechnology and Applied Biology', weight: 3 as const, description: 'Recombinant DNA, PCR, gene cloning, transgenic organisms, bioethics, GMOs, tissue culture, and biomedical applications per NEB +2 syllabus.' },
    { id: 'biolog-013', name: 'Plant and Animal Kingdom Diversity', weight: 2 as const, description: 'Classification criteria, salient features and examples of major phyla - Porifera to Chordata; algae, bryophytes, pteridophytes, gymnosperms, angiosperms.' },
    { id: 'biolog-014', name: 'Structural Organization and Anatomy', weight: 2 as const, description: 'Tissues (epithelial, connective, muscular, nervous), anatomy of root, stem, leaf, cockroach, and frog at the +2 comparative level.' },
    { id: 'biolog-015', name: 'Economic Biology and Human Welfare', weight: 1 as const, description: 'Crop improvement, animal husbandry, aquaculture, food biotechnology, immunity disorders (AIDS, cancer), and drug abuse awareness - lowest-weight topic.' }
  ]
};
