import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Cell Biology & Microscopy', weight: 4 as const, description: 'Cell structure, organelles, cell membrane transport, microscopy techniques, and cell division (mitosis/meiosis) — fundamental for medical admission.' },
    { id: 'biolog-002', name: 'Biochemistry & Enzymology', weight: 4 as const, description: 'Carbohydrates, proteins, lipids, nucleic acids, enzyme mechanisms, and metabolic pathways — core topic for medical and DU biology admission.' },
    { id: 'biolog-003', name: 'Genetics & Molecular Biology', weight: 5 as const, description: 'DNA structure, replication, gene expression, Mendelian inheritance, genetic disorders, and biotechnology — high-weightage for medical admission.' },
    { id: 'biolog-004', name: 'Evolution & Natural Selection', weight: 3 as const, description: 'Evidence of evolution, Darwin\'s theory, natural selection, speciation, and evolutionary relationships — important for medical admission biology.' },
    { id: 'biolog-005', name: 'Animal Kingdom & Classification', weight: 3 as const, description: 'Taxonomy, classification of major animal phyla, characteristics of vertebrates and invertebrates — relevant for DU and medical entrance exams.' },
    { id: 'biolog-006', name: 'Human Anatomy & Physiology', weight: 5 as const, description: 'Organ systems (respiratory, circulatory, digestive, nervous, excretory), homeostasis, and body mechanisms — highest-weightage topic for medical admission.' },
    { id: 'biolog-007', name: 'Plant Kingdom & Morphology', weight: 3 as const, description: 'Classification of plants, plant tissues, photosynthesis, plant hormones, and nutrition — important for both medical and DU biology.' },
    { id: 'biolog-008', name: 'Ecology & Environment', weight: 3 as const, description: 'Ecosystems, food chains, biogeochemical cycles, pollution, and environmental conservation — relevant for medical and general science admission.' },
    { id: 'biolog-009', name: 'Microbiology & Immunology', weight: 4 as const, description: 'Bacteria, viruses, fungi, immune system, antibodies, vaccines, and infectious diseases — critical topic for medical admission and public health context.' },
    { id: 'biolog-010', name: 'Reproduction & Developmental Biology', weight: 4 as const, description: 'Sexual and asexual reproduction, embryonic development, reproductive health, and human reproduction — high-weightage for medical admission.' },
    { id: 'biolog-011', name: 'Biotechnology & Applications', weight: 3 as const, description: 'Recombinant DNA technology, PCR, genetic engineering, fermentation, and applications in medicine and agriculture — modern topic for medical admission.' },
    { id: 'biolog-012', name: 'Animal Behavior & Coordination', weight: 3 as const, description: 'Nervous system, nerve impulses, synapses, hormones, and animal behavior patterns — important for understanding human physiology in medical context.' },
    { id: 'biolog-013', name: 'Nutrition & Human Health', weight: 3 as const, description: 'Nutrients, vitamins, minerals, digestive system, metabolic disorders, and balanced diet — relevant for both medical admission and general biology.' },
    { id: 'biolog-014', name: 'Plant Physiology', weight: 4 as const, description: 'Photosynthesis, respiration, water transport, mineral nutrition, and plant growth regulators — important for DU botany and medical biology sections.' },
    { id: 'biolog-015', name: 'Biodiversity & Conservation', weight: 2 as const, description: 'Species diversity, conservation biology, endangered species, and biodiversity hotspots of Bangladesh — relevant for regional environmental science.' },
  ]
};

export { biology };
