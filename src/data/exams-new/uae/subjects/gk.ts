import type { Subject } from '../types';

const gk: Subject = {
  id: 'gk', name: 'Gk', color: '#6b7280',
  topics: [
    { id: 'gk-001', name: 'Topic 1', weight: 3 as const, description: 'UAE geography and landmarks: emirates, major cities, and cultural heritage sites for national awareness.' },
    { id: 'gk-002', name: 'Topic 2', weight: 3 as const, description: 'UAE history and governance: founding, leadership, federal institutions, and national development milestones.' },
    { id: 'gk-003', name: 'Topic 3', weight: 3 as const, description: 'Current affairs and world events: international news, global issues, and UAE foreign relations.' },
    { id: 'gk-004', name: 'Topic 4', weight: 3 as const, description: 'Science and technology: innovations, discoveries, and their impact on modern society in the Gulf region.' },
    { id: 'gk-005', name: 'Topic 5', weight: 3 as const, description: 'Cultural awareness: UAE traditions, customs, religions, and multicultural society understanding.' },
    { id: 'gk-006', name: 'Topic 6', weight: 3 as const, description: 'Environmental issues: climate change, sustainability, and UAE environmental initiatives and Vision 2030.' },
    { id: 'gk-007', name: 'Topic 7', weight: 3 as const, description: 'Economics and business: UAE economy, major industries, trade partnerships, and business culture.' },
    { id: 'gk-008', name: 'Topic 8', weight: 3 as const, description: 'Health and wellness: public health topics, common diseases in UAE, and healthcare system awareness.' },
  ]
};

export { gk };