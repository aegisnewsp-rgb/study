import type { Subject } from '../types';

const general_awareness: Subject = {
  id: 'general-awareness', name: '('awareness', 'General Awareness')', color: '#6b7280',
  topics: [
    { id: 'genera-001', name: 'Banking Awareness', weight: 3 as const, description: 'Banking terminology, RBI functions, monetary policy, and financial institutions for SBI and IBPS exams.' },
    { id: 'genera-002', name: 'Static GK', weight: 3 as const, description: 'Country-capital-currency, important days, organizations, and factual information for competitive exams.' },
    { id: 'genera-003', name: 'Current Affairs', weight: 3 as const, description: 'Recent national and international events, government schemes, and important appointments.' },
    { id: 'genera-004', name: 'Economics Awareness', weight: 3 as const, description: 'Economic concepts, budget basics, taxation, and financial awareness for banking exams.' },
    { id: 'genera-005', name: 'Indian Financial System', weight: 3 as const, description: 'SEBI, IRDAI, payment banks, small finance banks, and financial sector regulators.' },
    { id: 'genera-006', name: 'Sports Awareness', weight: 3 as const, description: 'Olympic games, national awards, sports tournaments, and sports personalities of India.' },
    { id: 'genera-007', name: 'Science and Technology', weight: 3 as const, description: 'Government initiatives, space programs, defence achievements, and recent scientific discoveries.' },
    { id: 'genera-008', name: 'Government Schemes', weight: 3 as const, description: 'PMJDY, PM-KISAN, Ayushman Bharat, and other major welfare schemes of the government.' },
    { id: 'genera-009', name: 'Places in News', weight: 3 as const, description: 'Geographic locations mentioned in news, international summits, and important visits.' },
    { id: 'genera-010', name: 'Awards and Honours', weight: 3 as const, description: 'Nobel prizes, Padma awards, major literary and cinematic awards nationally and globally.' },
  ]
};

export { general_awareness };