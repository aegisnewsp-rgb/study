import type { Subject } from '../types';

const gk: Subject = {
  id: 'gk', name: 'Gk', color: '#6b7280',
  topics: [
    { id: 'gk-001', name: 'Topic 1', weight: 3 as const, description: 'Nepali history from ancient to modern times including the Shah dynasty, Rana regime, and democracy movements.' },
    { id: 'gk-002', name: 'Topic 2', weight: 3 as const, description: 'Geography of Nepal covering mountains, rivers, climate zones, and regional distribution of natural resources.' },
    { id: 'gk-003', name: 'Topic 3', weight: 3 as const, description: 'Nepalese polity including the constitution, federal structure, and functions of government bodies.' },
    { id: 'gk-004', name: 'Topic 4', weight: 3 as const, description: 'Current affairs of Nepal including recent political developments, policies, and important national events.' },
    { id: 'gk-005', name: 'Topic 5', weight: 3 as const, description: 'Economic development of Nepal including GDP, trade, agriculture, and industrial sectors.' },
    { id: 'gk-006', name: 'Topic 6', weight: 3 as const, description: 'Social issues in Nepal such as education, health, gender, and cultural preservation efforts.' },
    { id: 'gk-007', name: 'Topic 7', weight: 3 as const, description: 'International relations of Nepal with neighboring countries and global organizations.' },
    { id: 'gk-008', name: 'Topic 8', weight: 3 as const, description: 'Science and technology developments in Nepal including IT sector growth and environmental conservation.' },
  ]
};

export { gk };
