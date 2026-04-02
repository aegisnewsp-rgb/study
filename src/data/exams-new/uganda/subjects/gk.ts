import type { Subject } from '../types';

const gk: Subject = {
  id: 'gk',
  name: 'General Knowledge',
  color: '#6b7280',
  topics: [
    {
      id: 'gk-001',
      name: 'History of Uganda',
      weight: 3 as const,
      description: 'Key events in Ugandan history from the pre-colonial period through independence (1962) to the present, including the role of major kingdoms and colonial administration.',
    },
    {
      id: 'gk-002',
      name: 'Ugandan Constitution and Governance',
      weight: 3 as const,
      description: 'Structure and functions of the Ugandan government, the 1995 Constitution, the presidency, Parliament, and local government structures.',
    },
    {
      id: 'gk-003',
      name: 'Current Affairs (Uganda and East Africa)',
      weight: 3 as const,
      description: 'Recent national and regional events, government policies, and significant developments in Uganda and the East African Community.',
    },
    {
      id: 'gk-004',
      name: 'Geography of Uganda',
      weight: 3 as const,
      description: 'Physical geography, climate, major lakes and rivers, protected areas, and the distribution of natural resources in Uganda.',
    },
    {
      id: 'gk-005',
      name: 'Economics and Development',
      weight: 3 as const,
      description: 'Basic economic concepts, Uganda\'s economy, key sectors (agriculture, services, industry), and development challenges and indicators.',
    },
    {
      id: 'gk-006',
      name: 'Culture and Society',
      weight: 3 as const,
      description: 'Cultural diversity of Uganda, major ethnic groups, traditional institutions, and social customs relevant to contemporary Ugandan society.',
    },
    {
      id: 'gk-007',
      name: 'International Relations',
      weight: 3 as const,
      description: 'Uganda\'s foreign policy, its role in the East African Community, African Union, Commonwealth, and key bilateral relationships.',
    },
    {
      id: 'gk-008',
      name: 'Science and Technology',
      weight: 3 as const,
      description: 'Basic scientific concepts and their application, notable Ugandan scientists and innovators, and the role of technology in national development.',
    },
  ],
};

export { gk };
