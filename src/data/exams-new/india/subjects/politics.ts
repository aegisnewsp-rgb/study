import type { Subject } from '../types';

const politics: Subject = {
  id: 'politics', name: 'Politics', color: '#6b7280',
  topics: [
    { id: 'politi-001', name: 'Political Theory', weight: 3 as const, description: 'Liberalism, democracy, socialism, secularism, and major political ideologies for TNPSC.' },
    { id: 'politi-002', name: 'Indian Political System', weight: 3 as const, description: 'Parliamentary system, federal structure, and political institutions of India.' },
    { id: 'politi-003', name: 'Political Movements', weight: 3 as const, description: 'Dravidian movement, caste movements, and regional politics in Tamil Nadu and India.' },
    { id: 'politi-004', name: 'International Relations', weight: 3 as const, description: 'India\'s foreign policy, bilateral relations, SAARC, UN, and global politics.' },
    { id: 'politi-005', name: 'Political Economy', weight: 3 as const, description: 'Political dimensions of economic policies, liberalization, and development debates.' },
    { id: 'politi-006', name: 'Public Administration', weight: 3 as const, description: 'Bureaucracy, administrative reforms, and accountability mechanisms in government.' },
    { id: 'politi-007', name: 'Political Sociology', weight: 3 as const, description: 'Caste, religion, identity politics, and social bases of political power in India.' },
    { id: 'politi-008', name: 'Governance', weight: 3 as const, description: 'E-governance, transparency, RTI, and public service delivery mechanisms in India.' },
  ]
};

export { politics };