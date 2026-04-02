import type { Subject } from '../types';

const karnataka_specific: Subject = {
  id: 'karnataka-specific', name: 'Karnataka-Specific', color: '#6b7280',
  topics: [
    { id: 'karnat-001', name: 'Karnataka History', weight: 3 as const, description: 'Historical evolution of Karnataka, major dynasties like Chalukyas, Rashtrakutas, Hoysalas, and Wodeyars.' },
    { id: 'karnat-002', name: 'Karnataka Geography', weight: 3 as const, description: 'Districts, rivers, mountains, climate zones, and natural resources of Karnataka.' },
    { id: 'karnat-003', name: 'Karnataka Polity', weight: 3 as const, description: 'State government structure, legislative assembly, governance, and local self-government institutions.' },
    { id: 'karnat-004', name: 'Karnataka Culture', weight: 3 as const, description: 'Heritage sites, folk arts, literature, cuisine, and cultural traditions unique to Karnataka.' },
    { id: 'karnat-005', name: 'Karnataka Economy', weight: 3 as const, description: 'IT industry, biotechnology, silk production, agriculture, and industrial development in Karnataka.' },
    { id: 'karnat-006', name: 'Karnataka Personalities', weight: 3 as const, description: 'Notable personalities from Karnataka in literature, arts, politics, sports, and social reform.' },
    { id: 'karnat-007', name: 'Karnataka Districts', weight: 3 as const, description: 'District-wise information, important places, and administrative divisions of Karnataka.' },
    { id: 'karnat-008', name: 'Karnataka Schemes', weight: 3 as const, description: 'State-specific government schemes, welfare programs, and development initiatives of Karnataka.' },
  ]
};

export { karnataka_specific };