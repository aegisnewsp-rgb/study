import type { Subject } from '../types';

const science: Subject = {
  id: 'science', name: 'Science', color: '#6b7280',
  topics: [
    { id: 'scienc-001', name: 'Topic 1', weight: 3 as const, description: 'Scientific method and inquiry: hypothesis formation, experimentation, data analysis, and scientific reasoning.' },
    { id: 'scienc-002', name: 'Topic 2', weight: 3 as const, description: 'Life sciences overview: biology, ecology, and environmental science foundations for UAE CAT preparation.' },
    { id: 'scienc-003', name: 'Topic 3', weight: 3 as const, description: 'Physical sciences foundation: chemistry and physics principles applied to real-world scenarios.' },
    { id: 'scienc-004', name: 'Topic 4', weight: 3 as const, description: 'Earth and space science: geology, astronomy, and UAE environmental science applications.' },
    { id: 'scienc-005', name: 'Topic 5', weight: 3 as const, description: 'Energy and matter: forms of energy, matter cycles, and scientific principles governing physical world.' },
    { id: 'scienc-006', name: 'Topic 6', weight: 3 as const, description: 'Laboratory skills: scientific equipment usage, measurements, safety protocols, and experimental design.' },
    { id: 'scienc-007', name: 'Topic 7', weight: 3 as const, description: 'Technology and society: impact of scientific advances on daily life and future career considerations.' },
    { id: 'scienc-008', name: 'Topic 8', weight: 3 as const, description: 'Data interpretation: graphs, charts, tables analysis, and drawing scientific conclusions from evidence.' },
    { id: 'scienc-009', name: 'Topic 9', weight: 3 as const, description: 'Environmental science: sustainability, conservation, and UAE Vision 2030 environmental goals.' },
    { id: 'scienc-010', name: 'Topic 10', weight: 3 as const, description: 'UAE CAT science exam strategies: time management, question analysis, and test-taking techniques.' },
  ]
};

export { science };