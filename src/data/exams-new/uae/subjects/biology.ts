import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology', name: '('biology', 'Biology')', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Topic 1', weight: 3 as const, description: 'Cell structure and organelles, including cell membrane function and cellular transport mechanisms.' },
    { id: 'biolog-002', name: 'Topic 2', weight: 3 as const, description: 'Biochemistry of life: carbohydrates, proteins, lipids, and nucleic acids structure and function.' },
    { id: 'biolog-003', name: 'Topic 3', weight: 3 as const, description: 'Genetics and heredity: DNA replication, gene expression, and inheritance patterns in humans.' },
    { id: 'biolog-004', name: 'Topic 4', weight: 3 as const, description: 'Human anatomy and physiology: organ systems, homeostasis, and physiological processes.' },
    { id: 'biolog-005', name: 'Topic 5', weight: 3 as const, description: 'Ecology and ecosystems: energy flow, food chains, and environmental interactions in UAE contexts.' },
    { id: 'biolog-006', name: 'Topic 6', weight: 3 as const, description: 'Evolution and natural selection: mechanisms of speciation and adaptation in organisms.' },
    { id: 'biolog-007', name: 'Topic 7', weight: 3 as const, description: 'Microbiology fundamentals: bacteria, viruses, fungi, and their roles in health and disease.' },
    { id: 'biolog-008', name: 'Topic 8', weight: 3 as const, description: 'Plant biology: photosynthesis, plant structures, and reproduction in desert environments.' },
    { id: 'biolog-009', name: 'Topic 9', weight: 3 as const, description: 'Human body systems integration: circulatory, respiratory, and nervous system interactions.' },
    { id: 'biolog-010', name: 'Topic 10', weight: 3 as const, description: 'Biological research methods and scientific inquiry in life sciences.' },
  ]
};

export { biology };