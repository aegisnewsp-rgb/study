import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Cell Structure & Organelle Functions', weight: 3 as const, description: 'Identify cell organelles in plant and animal cells, understand their functions, and compare prokaryotic and eukaryotic cells.' },
    { id: 'biolog-002', name: 'Biological Molecules & Enzymes', weight: 3 as const, description: 'Understand the properties and functions of carbohydrates, proteins, lipids, and enzymes, including enzyme kinetics.' },
    { id: 'biolog-003', name: 'Cell Division — Mitosis & Meiosis', weight: 3 as const, description: 'Describe the stages of mitosis and meiosis, their significance in growth, repair, and genetic variation, and understand cell cycle control.' },
    { id: 'biolog-004', name: 'DNA, RNA & Protein Synthesis', weight: 3 as const, description: 'Understand DNA replication, transcription, translation, and the role of genes in protein synthesis and inheritance.' },
    { id: 'biolog-005', name: 'Genetics & Inheritance Patterns', weight: 3 as const, description: 'Apply Mendelian genetics to solve inheritance problems, understand non-Mendelian patterns, and interpret pedigree charts.' },
    { id: 'biolog-006', name: 'Variation & Evolution', weight: 3 as const, description: 'Understand sources of genetic variation, natural selection, speciation, and evidence supporting evolutionary theory.' },
    { id: 'biolog-007', name: 'Nutrition & Human Digestive System', weight: 3 as const, description: 'Understand nutrient requirements, the structure and function of the human digestive system, and absorption processes.' },
    { id: 'biolog-008', name: 'Gas Exchange & Respiration', weight: 3 as const, description: 'Describe the structure of gas exchange surfaces, mechanisms of ventilation, and cellular respiration pathways.' },
    { id: 'biolog-009', name: 'Transport in Plants & Humans', weight: 3 as const, description: 'Understand xylem and phloem function, the cohesion-tension theory, and the structure and function of the human circulatory system.' },
    { id: 'biolog-010', name: 'Homeostasis & The Excretory System', weight: 3 as const, description: 'Understand the principles of homeostasis, the structure and function of the kidney, and thermoregulation.' },
    { id: 'biolog-011', name: 'Nervous System & Hormonal Control', weight: 3 as const, description: 'Describe the structure and function of neurons, reflex arcs, synaptic transmission, and endocrine glands and their hormones.' },
    { id: 'biolog-012', name: 'Immune System & Disease', weight: 3 as const, description: 'Understand innate and adaptive immunity, antibody production, vaccination, and common infectious diseases in Malaysia.' },
    { id: 'biolog-013', name: 'Reproduction & Development', weight: 3 as const, description: 'Describe human reproductive systems, fertilisation, embryonic development, and factors affecting prenatal development.' },
    { id: 'biolog-014', name: 'Ecology & Ecosystems', weight: 3 as const, description: 'Understand energy flow, food chains and webs, nutrient cycling, and human impact on Malaysian ecosystems and biodiversity.' },
    { id: 'biolog-015', name: 'Biotechnology & Its Applications', weight: 3 as const, description: 'Explore DNA technology, genetic engineering, PCR, tissue culture, and their applications in medicine and agriculture.' },
  ]
};

export { biology };
