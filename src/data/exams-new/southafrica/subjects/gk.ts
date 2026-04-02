import type { Subject } from '../types';

const gk: Subject = {
  id: 'gk', name: 'General Knowledge', color: '#6b7280',
  topics: [
    { id: 'gk-001', name: 'Topic 1', weight: 3 as const, description: 'South African Constitution, governance structures, the three tiers of government, and the roles of Parliament, the Executive, and the Judiciary.' },
    { id: 'gk-002', name: 'Topic 2', weight: 3 as const, description: 'Key events in South African history from colonialism through apartheid to the democratic transition of 1994 and the Truth and Reconciliation Commission.' },
    { id: 'gk-003', name: 'Topic 3', weight: 3 as const, description: 'Contemporary South African social issues including load-shedding, inequality, unemployment, land reform, and the role of civil society.' },
    { id: 'gk-004', name: 'Topic 4', weight: 3 as const, description: 'Geography of South Africa including provinces, major biomes, water resources, and environmental challenges affecting public health and pharmacy practice.' },
    { id: 'gk-005', name: 'Topic 5', weight: 3 as const, description: 'Current national and international affairs as reported in South African media — essential for informed citizenship and professional practice.' },
    { id: 'gk-006', name: 'Topic 6', weight: 3 as const, description: 'Socioeconomic context of South Africa including GDP, Gini coefficient, NSFAS funding, and the healthcare system structure from primary to tertiary level.' },
    { id: 'gk-007', name: 'Topic 7', weight: 3 as const, description: 'South African cultural diversity including eleven official languages, heritage, and indigenous legal traditions relevant to multilingual legal practice.' },
    { id: 'gk-008', name: 'Topic 8', weight: 3 as const, description: 'Science and technology awareness including digital transformation, health technology, and innovation relevant to modern legal and pharmacy practice.' }
  ]
};

export { gk };
