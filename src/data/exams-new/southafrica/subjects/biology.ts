import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Topic 1', weight: 3 as const, description: 'Cell biology covering cell organelles, membrane transport, and cell division — the foundation for understanding tissue structure, wound healing, and cancer biology.' },
    { id: 'biolog-002', name: 'Topic 2', weight: 3 as const, description: 'Human anatomy and physiological systems including the circulatory, respiratory, and nervous systems, directly tested in HEPC Medical for clinical readiness.' },
    { id: 'biolog-003', name: 'Topic 3', weight: 3 as const, description: 'Genetics and heredity including Mendelian genetics, DNA structure, and genetic disorders — essential for understanding inherited diseases prevalent in South African populations.' },
    { id: 'biolog-004', name: 'Topic 4', weight: 3 as const, description: 'Evolution and natural selection examining evidence for evolution and mechanisms of speciation, contextualised within African biodiversity and conservation.' },
    { id: 'biolog-005', name: 'Topic 5', weight: 3 as const, description: 'Ecology and ecosystems covering nutrient cycles, energy flow, and ecological interactions relevant to environmental health and disease vectors in southern Africa.' },
    { id: 'biolog-006', name: 'Topic 6', weight: 3 as const, description: 'Photosynthesis and cellular respiration as the basis of energy metabolism, with applications to plant biology and understanding metabolic disorders.' },
    { id: 'biolog-007', name: 'Topic 7', weight: 3 as const, description: 'Reproduction and development from gametogenesis through embryonic development, relevant to obstetrics and reproductive health in medical practice.' },
    { id: 'biolog-008', name: 'Topic 8', weight: 3 as const, description: 'Homeostasis and feedback mechanisms controlling blood glucose, temperature, and water balance — fundamental to endocrine and metabolic medicine.' },
    { id: 'biolog-009', name: 'Topic 9', weight: 3 as const, description: 'Microbiology covering bacteria, viruses, fungi, and parasites including tropical diseases such as malaria and TB prevalent in South African communities.' },
    { id: 'biolog-010', name: 'Topic 10', weight: 3 as const, description: 'Immunology including innate and adaptive immunity, vaccination principles, and HIV/AIDS epidemiology critical for South African medical practice.' },
    { id: 'biolog-011', name: 'Topic 11', weight: 3 as const, description: 'Plant biology and biodiversity in South Africa covering plant anatomy, transport systems, and the ecological importance of indigenous flora.' },
    { id: 'biolog-012', name: 'Topic 12', weight: 3 as const, description: 'Animal Kingdom classification and comparative anatomy across vertebrate phyla, with emphasis on mammalian anatomy relevant to human medicine.' },
    { id: 'biolog-013', name: 'Topic 13', weight: 3 as const, description: 'Nutrition and digestion encompassing macronutrients, micronutrients, and metabolic diseases such as diabetes and malnutrition conditions in South Africa.' },
    { id: 'biolog-014', name: 'Topic 14', weight: 3 as const, description: 'Examination techniques, diagram drawing, and practical biology skills required for NSC practical assessment and HEPC Medical preparation.' },
    { id: 'biolog-015', name: 'Topic 15', weight: 3 as const, description: 'Integrated revision of NSC Life Sciences concepts aligned with HEPC Medical entry requirements and South African university health science programmes.' }
  ]
};

export { biology };
