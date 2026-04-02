import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology',
  name: 'Biology',
  color: '#16a34a',
  topics: [
    {
      id: 'biolog-001',
      name: 'Cell Biology and Microscopy',
      weight: 3 as const,
      description: 'Structure and function of plant and animal cells, cell organelles, cell division (mitosis and meiosis), and the use of microscopes in biological studies.',
    },
    {
      id: 'biolog-002',
      name: 'Biological Molecules',
      weight: 3 as const,
      description: 'Carbohydrates, proteins, lipids, and nucleic acids — their structures, functions, and roles in living organisms as covered in UACE biology.',
    },
    {
      id: 'biolog-003',
      name: 'Enzymology',
      weight: 3 as const,
      description: 'Enzyme structure, mechanisms of action, factors affecting enzyme activity, and the role of enzymes in metabolic reactions.',
    },
    {
      id: 'biolog-004',
      name: 'Nutrition',
      weight: 3 as const,
      description: 'Autotrophic and heterotrophic nutrition, photosynthesis, chemosynthesis, human digestive system, and nutrient cycling in ecosystems.',
    },
    {
      id: 'biolog-005',
      name: 'Respiration',
      weight: 3 as const,
      description: 'Aerobic and anaerobic respiration, glycolysis, the Krebs cycle, oxidative phosphorylation, and the energy yield from glucose breakdown.',
    },
    {
      id: 'biolog-006',
      name: 'Gas Exchange and Transport',
      weight: 3 as const,
      description: 'Structure and function of gas exchange surfaces, transport systems in plants and animals, and the mechanisms of breathing and circulation.',
    },
    {
      id: 'biolog-007',
      name: 'Excretion and Osmoregulation',
      weight: 3 as const,
      description: 'Nitrogenous waste products, the structure and function of excretory organs, kidney function, and osmoregulation in different environments.',
    },
    {
      id: 'biolog-008',
      name: 'Homeostasis',
      weight: 3 as const,
      description: 'Principles of homeostasis, feedback mechanisms, the role of hormones, and the maintenance of internal balance in living organisms.',
    },
    {
      id: 'biolog-009',
      name: 'Coordination and Control',
      weight: 3 as const,
      description: 'Nervous system structure, nerve impulse transmission, reflex arcs, and the role of hormones in chemical coordination in humans and plants.',
    },
    {
      id: 'biolog-010',
      name: 'Reproduction and Development',
      weight: 3 as const,
      description: 'Asexual and sexual reproduction, gamete formation, fertilisation, embryonic development, and the biology of reproduction in humans and plants.',
    },
    {
      id: 'biolog-011',
      name: 'Genetics and Inheritance',
      weight: 3 as const,
      description: 'Mendelian inheritance, monohybrid and dihybrid crosses, genetic diagrams, chromosome theory, and the basics of molecular genetics.',
    },
    {
      id: 'biolog-012',
      name: 'Variation and Evolution',
      weight: 3 as const,
      description: 'Sources of genetic variation, natural selection, speciation, evidence for evolution, and adaptation of organisms to their environments.',
    },
    {
      id: 'biolog-013',
      name: 'Ecology',
      weight: 3 as const,
      description: 'Ecosystem structure, food chains and webs, energy flow, biogeochemical cycles, population ecology, and conservation in Uganda\'s diverse habitats.',
    },
    {
      id: 'biolog-014',
      name: 'Microbiology',
      weight: 3 as const,
      description: 'Structure and function of bacteria, viruses, fungi, and protoctists, their roles in disease, decomposition, and biotechnology applications.',
    },
    {
      id: 'biolog-015',
      name: 'Practical Biology',
      weight: 3 as const,
      description: 'Laboratory skills, biological drawing, data analysis, experimental design, and the practical examination component of UACE biology.',
    },
  ],
};

export { biology };
