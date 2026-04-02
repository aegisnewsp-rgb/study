import type { Subject } from '../types';

const gk: Subject = {
  id: 'gk', name: 'Gk', color: '#6b7280',
  topics: [
    { id: 'gk-001', name: 'Indian History', weight: 3 as const, description: 'Major dynasties, rulers, freedom movement events, and cultural heritage of India for competitive exams.' },
    { id: 'gk-002', name: 'Geography of India', weight: 3 as const, description: 'States, capitals, rivers, mountains, and national parks — high frequency in SSC and state PSCs.' },
    { id: 'gk-003', name: 'Indian Polity', weight: 3 as const, description: 'Constitutional features, governance structure, and political system of India for civil service exams.' },
    { id: 'gk-004', name: 'Economics', weight: 3 as const, description: 'Five-year plans, budget concepts, banking, and economic development issues in India.' },
    { id: 'gk-005', name: 'General Science', weight: 3 as const, description: 'Physics, chemistry, biology fundamentals, and latest scientific discoveries for objective tests.' },
    { id: 'gk-006', name: 'Current Affairs', weight: 3 as const, description: 'National and international events, awards, appointments, and important government schemes.' },
    { id: 'gk-007', name: 'Sports and Games', weight: 3 as const, description: 'Major sporting events, medals, records, and sports personalities from India and the world.' },
    { id: 'gk-008', name: 'Books and Authors', weight: 3 as const, description: 'Important books, authors, literary awards, and prominent literary works in Indian context.' },
  ]
};

export { gk };