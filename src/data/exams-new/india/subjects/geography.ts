import type { Subject } from '../types';

const geography: Subject = {
  id: 'geography', name: 'None', color: '#6b7280',
  topics: [
    { id: 'geogra-001', name: 'Physical Geography', weight: 3 as const, description: 'Landforms, climate, monsoon, cyclones, and ocean currents — important for UPSC and state PSC prelims.' },
    { id: 'geogra-002', name: 'Indian Geography', weight: 3 as const, description: 'India\'s physiographic divisions, rivers, climate zones, minerals, and agriculture patterns.' },
    { id: 'geogra-003', name: 'World Geography', weight: 3 as const, description: 'Continents, countries, natural resources distribution, and major geographic phenomena.' },
    { id: 'geogra-004', name: 'Human Geography', weight: 3 as const, description: 'Population distribution, migration, urbanization patterns, and economic activities worldwide.' },
    { id: 'geogra-005', name: 'Economic Geography', weight: 3 as const, description: 'Agricultural patterns, industrial locations, trade routes, and resource allocation globally.' },
    { id: 'geogra-006', name: 'Environmental Geography', weight: 3 as const, description: 'Ecosystems, biodiversity, conservation, climate change, and environmental policies.' },
    { id: 'geogra-007', name: 'Maps and Cartography', weight: 3 as const, description: 'Reading topographic maps, identifying places, and using lat-long coordinates in exams.' },
    { id: 'geogra-008', name: 'Geographical Thought', weight: 3 as const, description: 'Major geographic thinkers, schools of thought, and evolution of geography as a discipline.' },
    { id: 'geogra-009', name: 'Disaster Management', weight: 3 as const, description: 'Floods, earthquakes, landslides, and disaster response frameworks for Indian states.' },
    { id: 'geogra-010', name: 'Remote Sensing and GIS', weight: 3 as const, description: 'Satellite imagery interpretation, GIS applications, and modern geographic tools for planning.' },
  ]
};

export { geography };