import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology', name: '('biology', 'Biology')', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Cell Biology', weight: 3 as const, description: 'Cell structure, organelles, cell division (mitosis/meiosis), and cell theory for NEET and KCET.' },
    { id: 'biolog-002', name: 'Genetics', weight: 3 as const, description: 'Mendelian inheritance, DNA replication, gene expression, and genetic disorders — high weight in NEET.' },
    { id: 'biolog-003', name: 'Ecology and Environment', weight: 3 as const, description: 'Ecosystems, biodiversity, environmental issues, and conservation biology for KCET and state exams.' },
    { id: 'biolog-004', name: 'Human Physiology', weight: 3 as const, description: 'Digestive, circulatory, respiratory, nervous, and endocrine systems — core for NEET biology.' },
    { id: 'biolog-005', name: 'Plant Kingdom', weight: 3 as const, description: 'Classification, plant groups, photosynthesis, and plant reproduction for KCET and board exams.' },
    { id: 'biolog-006', name: 'Biotechnology', weight: 3 as const, description: 'Recombinant DNA technology, PCR, gene cloning, and applications in medicine and agriculture.' },
    { id: 'biolog-007', name: 'Evolution', weight: 3 as const, description: 'Darwin\'s theory, natural selection, speciation, and evidence of evolution in biology.' },
    { id: 'biolog-008', name: 'Microbiology', weight: 3 as const, description: 'Bacteria, viruses, fungi, immunity, and vaccine technology increasingly asked in medical exams.' },
    { id: 'biolog-009', name: 'Animal Kingdom', weight: 3 as const, description: 'Classification of animals, binomial nomenclature, and structural-functional adaptations.' },
    { id: 'biolog-010', name: 'Biological Classification', weight: 3 as const, description: 'Five kingdom classification, morphological basis, and microbial diversity in living organisms.' },
  ]
};

export { biology };