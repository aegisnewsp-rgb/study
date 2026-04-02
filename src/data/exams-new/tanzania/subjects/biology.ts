import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Cell Biology & Microscopy', weight: 3 as const, description: 'Cell structure, organelle functions, and microscopy techniques — the ACSEE Biology Paper 3 includes a compulsory microscopy question.' },
    { id: 'biolog-002', name: 'Biological Molecules', weight: 3 as const, description: 'Carbohydrates, proteins, lipids, enzymes, and water — enzyme experiments are frequently assessed in the practical paper.' },
    { id: 'biolog-003', name: 'Nutrition & Human Diet', weight: 3 as const, description: 'Nutrient groups, digestive processes, and deficiency diseases — relevant to Tanzania\'s public health context.' },
    { id: 'biolog-004', name: 'Gas Exchange & Respiration', weight: 3 as const, description: 'Aerobic and anaerobic respiration, respiratory surfaces, and lung function — high-weight topic with calculation questions.' },
    { id: 'biolog-005', name: 'Transport in Plants & Animals', weight: 3 as const, description: 'Transpiration, translocation, blood circulation, and the heart — diagram-based questions are common in Paper 1.' },
    { id: 'biolog-006', name: 'Homeostasis', weight: 3 as const, description: 'Kidney function, thermoregulation, and hormonal control — ADH and osmoregulation appear in nearly every ACSEE session.' },
    { id: 'biolog-007', name: 'Coordination & Response', weight: 3 as const, description: 'Nervous system, reflexes, synapses, and endocrine glands — nervous coordination is heavily tested.' },
    { id: 'biolog-008', name: 'Reproduction & Development', weight: 3 as const, description: 'Sexual and asexual reproduction, meiosis, menstrual cycle, and embryonic development — diagram-based questions in Paper 2.' },
    { id: 'biolog-009', name: 'Genetics & Inheritance', weight: 3 as const, description: 'Mendelian laws, monohybrid and dihybrid crosses, blood groups, and sex-linked inheritance — calculations are examinable.' },
    { id: 'biolog-010', name: 'Variation & Evolution', weight: 3 as const, description: 'Continuous and discontinuous variation, natural selection, speciation, and evidence for evolution — Tanzania\'s biodiversity provides context.' },
    { id: 'biolog-011', name: 'Natural Selection & Adaptation', weight: 3 as const, description: 'Selective pressures, adaptive features, and survival strategies — links evolutionary biology to local ecosystems.' },
    { id: 'biolog-012', name: 'Ecology & Ecosystems', weight: 3 as const, description: 'Food chains, pyramids of number and biomass, nitrogen cycle, and human impact on the environment — compulsory in Paper 2.' },
    { id: 'biolog-013', name: 'Excretion', weight: 3 as const, description: 'Nitrogenous waste products, kidney structure, and dialysis — often combined with homeostasis questions in Section B.' },
    { id: 'biolog-014', name: 'Support & Movement', weight: 3 as const, description: 'Skeletal systems, joints, muscle action, and plant support mechanisms — practical observation questions appear in Paper 3.' },
    { id: 'biolog-015', name: 'Applied Biology & Biotechnology', weight: 3 as const, description: 'Tissue culture, genetic engineering, biological pest control, and fermentation — relevant to Tanzania\'s agricultural sector.' },
  ]
};

export { biology };
