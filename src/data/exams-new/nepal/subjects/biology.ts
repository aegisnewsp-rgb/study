import type { Subject } from '../types';

const biology: Subject = {
  id: 'biology', name: '('biology', 'Biology')', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Topic 1', weight: 3 as const, description: 'Cell biology covering cell structure, organelles, cell division, and cellular processes for CMAT Nepal.' },
    { id: 'biolog-002', name: 'Topic 2', weight: 3 as const, description: 'Genetics including Mendelian inheritance, DNA structure, gene expression, and genetic disorders.' },
    { id: 'biolog-003', name: 'Topic 3', weight: 3 as const, description: 'Evolution covering natural selection, speciation, evidence of evolution, and evolutionary relationships.' },
    { id: 'biolog-004', name: 'Topic 4', weight: 3 as const, description: 'Ecology including ecosystems, food chains, biodiversity, and environmental conservation in Nepal.' },
    { id: 'biolog-005', name: 'Topic 5', weight: 3 as const, description: 'Plant physiology covering photosynthesis, respiration, nutrition, and plant hormones.' },
    { id: 'biolog-006', name: 'Topic 6', weight: 3 as const, description: 'Animal physiology including digestive, circulatory, respiratory, and excretory systems.' },
    { id: 'biolog-007', name: 'Topic 7', weight: 3 as const, description: 'Human anatomy covering structure and functions of major organ systems and tissues.' },
    { id: 'biolog-008', name: 'Topic 8', weight: 3 as const, description: 'Nutrition including nutrients, vitamins, minerals, balanced diet, and metabolic disorders.' },
    { id: 'biolog-009', name: 'Topic 9', weight: 3 as const, description: 'Respiration covering aerobic and anaerobic respiration, Krebs cycle, and ATP production.' },
    { id: 'biolog-010', name: 'Topic 10', weight: 3 as const, description: 'Reproduction including human reproductive system, gametogenesis, and embryonic development.' },
    { id: 'biolog-011', name: 'Topic 11', weight: 3 as const, description: 'Growth and development covering plant and animal development, germination, and metamorphosis.' },
    { id: 'biolog-012', name: 'Topic 12', weight: 3 as const, description: 'Behavior including animal behavior patterns, reflexes, instinct, and learned behaviors.' },
    { id: 'biolog-013', name: 'Topic 13', weight: 3 as const, description: 'Biotechnology covering genetic engineering, cloning, PCR, and applications in medicine and agriculture.' },
    { id: 'biolog-014', name: 'Topic 14', weight: 3 as const, description: 'Environmental biology including biodiversity of Nepal, conservation efforts, and ecosystem services.' },
    { id: 'biolog-015', name: 'Topic 15', weight: 3 as const, description: 'Practical biology including microscopy, specimen observation, and biological drawing techniques.' },
  ]
};

export { biology };
