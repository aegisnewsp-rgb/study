export const gk: Subject = {
  id: 'gk', name: 'General Knowledge', color: '#6b7280',
  topics: [
    { id: 'gk-001', name: 'Ancient Indian History', weight: 4 as const, description: 'Indus Valley, Vedic, Mahajanapada, Maurya and Gupta periods — sites, rulers, scripts, religion and early Indian culture.' },
    { id: 'gk-002', name: 'Medieval & Modern Indian History', weight: 3 as const, description: 'Delhi Sultanate, Mughal and Maratha empires, British rule, the 1857 revolt and the Indian freedom movement up to 1947.' },
    { id: 'gk-003', name: 'Indian Geography & Environment', weight: 4 as const, description: 'Physiography, monsoon mechanism, rivers, soils, forests, biodiversity hotspots, protected-area categories and environmental statutes.' },
    { id: 'gk-004', name: 'Indian Polity & Constitution', weight: 5 as const, description: 'Constitutional framework, fundamental rights, DPSP, Parliament, Centre-state relations, key amendments and Indian governance bodies.' },
    { id: 'gk-005', name: 'Indian Economy & Banking', weight: 5 as const, description: 'Planning, sectors, fiscal indicators, RBI monetary tools (repo, CRR, SLR), banking structure and major financial-sector reforms.' },
    { id: 'gk-006', name: 'General Science & Technology', weight: 3 as const, description: 'Physics, chemistry and biology fundamentals plus Indian S&T developments: ISRO missions, DRDO, nuclear, defence and emerging tech.' },
    { id: 'gk-007', name: 'World Geography & Current Affairs', weight: 3 as const, description: 'Continents, oceans, major landforms, rivers and recent international summits, groupings (UN, G20, BRICS, ASEAN) and global agreements.' },
    { id: 'gk-008', name: 'Sports, Awards & Important Days', weight: 2 as const, description: 'Major sports tournaments (Olympics, Asian Games, World Cups), civilian and sports awards, and important international days that form the static portion of general studies.' }
  ]
};
