import type { Subject } from '../types';

const gk: Subject = {
  id: 'gk', name: 'General Knowledge', color: '#6b7280',
  topics: [
    { id: 'gk-001', name: 'Tanzanian History', weight: 3 as const, description: 'Pre-colonial, colonial, and post-independence history — union of Tanganyika and Zanzibar, Julius Nyerere\'s legacy, and Ujamaa.' },
    { id: 'gk-002', name: 'Tanzanian Geography', weight: 3 as const, description: 'Mount Kilimanjaro, Great Rift Valley, major lakes and rivers, climate zones, and conservation areas like Serengeti and Ngorongoro.' },
    { id: 'gk-003', name: 'Tanzanian Constitution & Governance', weight: 3 as const, description: 'Structure of government, executive, legislature, and the role of CCM and opposition parties in Tanzania\'s democracy.' },
    { id: 'gk-004', name: 'Current Affairs (EAC & SADC)', weight: 3 as const, description: 'East African Community integration, SADC, Tanzania\'s foreign policy, and regional geopolitical developments.' },
    { id: 'gk-005', name: 'International Organisations', weight: 3 as const, description: 'United Nations, African Union, Commonwealth, and Tanzania\'s role in these bodies — frequently tested in general knowledge sections.' },
    { id: 'gk-006', name: 'Science & Technology', weight: 3 as const, description: 'General scientific principles, notable inventions, and technology developments with relevance to East Africa.' },
    { id: 'gk-007', name: 'Economics & Development', weight: 3 as const, description: 'Tanzania\'s economy, Vision 2025, Kilimo Kwanza, natural resources, and challenges of industrialisation.' },
    { id: 'gk-008', name: 'Culture, Sports & Society', weight: 3 as const, description: 'Swahili culture, national holidays, famous Tanzanians, and current events in arts and sports.' },
  ]
};

export { gk };
