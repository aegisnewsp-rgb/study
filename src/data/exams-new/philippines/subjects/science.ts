import type { Subject } from '../types';

const science: Subject = {
  id: 'science', name: 'Science', color: '#6b7280',
  topics: [
    { id: 'scienc-001', name: 'Topic 1', weight: 3 as const, description: 'General Science Fundamentals — foundational concepts in physics, chemistry, and biology assessed on UPCAT.' },
    { id: 'scienc-002', name: 'Topic 2', weight: 3 as const, description: 'Physics Concepts — motion, force, energy, waves, electricity, and magnetism at the high school level.' },
    { id: 'scienc-003', name: 'Topic 3', weight: 3 as const, description: 'Chemistry Concepts — atomic structure, periodic table, chemical bonding, reactions, and stoichiometry.' },
    { id: 'scienc-004', name: 'Topic 4', weight: 3 as const, description: 'Biology Concepts — cell structure, genetics, evolution, ecology, and human anatomy and physiology.' },
    { id: 'scienc-005', name: 'Topic 5', weight: 3 as const, description: 'Earth Science — geology, meteorology, and astronomy topics commonly included in Philippine science curricula.' },
    { id: 'scienc-006', name: 'Topic 6', weight: 3 as const, description: 'Scientific Method and Investigation — hypothesis formation, experimental design, and data interpretation.' },
    { id: 'scienc-007', name: 'Topic 7', weight: 3 as const, description: 'Science Process Skills — observation, inference, prediction, classification, and measurement techniques.' },
    { id: 'scienc-008', name: 'Topic 8', weight: 3 as const, description: 'Environmental Science — ecosystems, biodiversity, pollution, and Philippine environmental issues.' },
    { id: 'scienc-009', name: 'Topic 9', weight: 3 as const, description: 'Science Vocabulary and Terminology — key scientific terms and definitions aligned with the Philippine K-12 curriculum.' },
    { id: 'scienc-010', name: 'Topic 10', weight: 3 as const, description: 'UPCAT Science Practice Questions — full-length drills covering physics, chemistry, and biology as tested on UPCAT.' }
  ]
};

export { science };
