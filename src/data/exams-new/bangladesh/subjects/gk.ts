import type { Subject } from '../types';

const gk: Subject = {
  id: 'gk', name: 'General Knowledge', color: '#6b7280',
  topics: [
    { id: 'gk-001', name: 'History of Bangladesh & Liberation War', weight: 5 as const, description: '1971 Liberation War, Sheikh Mujibur Rahman, Language Movement, Pakistan\'s rule, and independence history — high-weightage for all Bangladesh admission tests.' },
    { id: 'gk-002', name: 'Geography of Bangladesh', weight: 4 as const, description: 'Districts, rivers, climate zones, agriculture, natural resources, and environmental features of Bangladesh — frequently tested in DU and BUET.' },
    { id: 'gk-003', name: 'World History & Civilization', weight: 3 as const, description: 'Ancient civilizations, world wars, colonial history, and major historical events — relevant for general knowledge sections of admission tests.' },
    { id: 'gk-004', name: 'Geography of the World', weight: 3 as const, description: 'Continents, oceans, major countries, capitals, mountain ranges, and global environmental issues — important for international GK questions.' },
    { id: 'gk-005', name: 'Bangladesh Constitution & Politics', weight: 4 as const, description: 'Constitution of Bangladesh, parliamentary system, elections, fundamental rights, and political parties — relevant for DU and general admission GK.' },
    { id: 'gk-006', name: 'Economics & Development', weight: 3 as const, description: 'Economic systems, GDP, development indicators, agriculture, industry, and economic challenges of Bangladesh — important for public university admission.' },
    { id: 'gk-007', name: 'International Organizations & Relations', weight: 3 as const, description: 'UN, SAARC, WTO, BIMSTEC, and Bangladesh\'s role in international affairs — common in DU and other university general knowledge sections.' },
    { id: 'gk-008', name: 'General Science Discoveries & Inventions', weight: 4 as const, description: 'Nobel Prize winners, major scientific discoveries, famous scientists, and technological breakthroughs — frequently tested in BUET and medical admission.' },
    { id: 'gk-009', name: 'Current Affairs & Everyday Science', weight: 3 as const, description: 'Recent national and international events, environmental issues, health awareness, and current scientific developments — relevant for updated GK questions.' },
    { id: 'gk-010', name: 'Culture, Sports & Awards', weight: 2 as const, description: 'Bangladeshi culture, Ekushey Padak, sports achievements, UNESCO heritage sites, and national awards — general awareness for admission tests.' },
  ]
};

export { gk };
