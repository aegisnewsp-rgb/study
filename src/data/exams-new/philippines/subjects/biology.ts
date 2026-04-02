import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology', name: '('biology', 'Biology')', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Topic 1', weight: 3 as const, description: 'Cell Biology — cell structure, organelles, cell membrane transport, mitosis, and meiosis processes.' },
    { id: 'biolog-002', name: 'Topic 2', weight: 3 as const, description: 'Genetics and Heredity — Mendelian genetics, DNA replication, gene expression, and hereditary disorders.' },
    { id: 'biolog-003', name: 'Topic 3', weight: 3 as const, description: 'Evolution and Natural Selection — Darwin\'s theory, evidence of evolution, speciation, and phylogenetic concepts.' },
    { id: 'biolog-004', name: 'Topic 4', weight: 3 as const, description: 'Ecology and Ecosystems — food chains, biogeochemical cycles, population ecology, and environmental interactions.' },
    { id: 'biolog-005', name: 'Topic 5', weight: 3 as const, description: 'Human Anatomy and Physiology — organ systems, homeostasis, and the structure-function relationship in the human body.' },
    { id: 'biolog-006', name: 'Topic 6', weight: 3 as const, description: 'Plant Biology — photosynthesis, plant anatomy, transport mechanisms, and reproduction in plants.' },
    { id: 'biolog-007', name: 'Topic 7', weight: 3 as const, description: 'Animal Kingdom and Diversity — classification, characteristics of major animal phyla, and comparative anatomy.' },
    { id: 'biolog-008', name: 'Topic 8', weight: 3 as const, description: 'Microbiology — bacteria, viruses, fungi, pathogenic microorganisms, and antimicrobial agents.' },
    { id: 'biolog-009', name: 'Topic 9', weight: 3 as const, description: 'Biological Chemistry — biomolecules, enzymes, metabolism, cellular respiration, and biochemical pathways.' },
    { id: 'biolog-010', name: 'Topic 10', weight: 3 as const, description: 'Biology Board Exam Practice Questions — comprehensive drills covering all biology topics for pharmacy and LEA/RX exams.' }
  ]
};

export { biology };
