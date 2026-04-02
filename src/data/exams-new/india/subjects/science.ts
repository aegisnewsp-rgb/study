import type { Subject } from '../types';

const science: Subject = {
  id: 'science', name: 'Science', color: '#6b7280',
  topics: [
    { id: 'scienc-001', name: 'Physics Fundamentals', weight: 3 as const, description: 'Motion, force, energy, and basic laws of physics for TNPSC Group 1 and state board exams.' },
    { id: 'scienc-002', name: 'Chemistry Basics', weight: 3 as const, description: 'Elements, compounds, reactions, and periodic table concepts for TNPSC science sections.' },
    { id: 'scienc-003', name: 'Biology and Life Sciences', weight: 3 as const, description: 'Living organisms, cell structure, photosynthesis, and human biology for TNPSC exam.' },
    { id: 'scienc-004', name: 'Environmental Science', weight: 3 as const, description: 'Ecosystems, biodiversity, pollution, and environmental conservation for civil service exams.' },
    { id: 'scienc-005', name: 'Agriculture Science', weight: 3 as const, description: 'Crop patterns, soil science, irrigation methods, and modern farming techniques in India.' },
    { id: 'scienc-006', name: 'Health and Nutrition', weight: 3 as const, description: 'Balanced diet, vitamins, minerals, diseases, and public health in Indian context.' },
    { id: 'scienc-007', name: 'Computer Awareness', weight: 3 as const, description: 'Basic computer operations, MS Office, internet, and digital literacy for competitive exams.' },
    { id: 'scienc-008', name: 'Technology and Innovations', weight: 3 as const, description: 'Recent scientific discoveries, space technology, and innovations relevant to India.' },
    { id: 'scienc-009', name: 'Scientific Instruments', weight: 3 as const, description: 'Working principles of common lab instruments and their applications in research.' },
    { id: 'scienc-010', name: 'Scientific Terminology', weight: 3 as const, description: 'Important scientific terms, units, measurements, and nomenclature in physics and chemistry.' },
  ]
};

export { science };