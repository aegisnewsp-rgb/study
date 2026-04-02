import type { Subject } from '../types';

const current_affairs: Subject = {
  id: 'current-affairs', name: '('current-affairs', 'Current Affairs')', color: '#6b7280',
  topics: [
    { id: 'curren-001', name: 'National Events', weight: 3 as const, description: 'Important national developments, government announcements, and political events in India.' },
    { id: 'curren-002', name: 'International Events', weight: 3 as const, description: 'Global affairs, summits, treaties, and international organizations relevant to India.' },
    { id: 'curren-003', name: 'Economics and Finance', weight: 3 as const, description: 'Budget, economic surveys, GDP data, banking developments, and financial market news.' },
    { id: 'curren-004', name: 'Sports and Games', weight: 3 as const, description: 'Tournaments, medals, sports awards, and notable performances by Indian athletes globally.' },
    { id: 'curren-005', name: 'Awards and Honors', weight: 3 as const, description: 'Nobel Prize, Padma awards, major literary and film awards nationally and internationally.' },
    { id: 'curren-006', name: 'Science and Technology', weight: 3 as const, description: 'Space missions, tech innovations, defence achievements, and IT developments in India.' },
    { id: 'curren-007', name: 'Government Schemes', weight: 3 as const, description: 'Central and state government welfare programs, missions, and policy initiatives.' },
    { id: 'curren-008', name: 'Appointments and Resignations', weight: 3 as const, description: 'High-profile appointments in judiciary, bureaucracy, banks, and constitutional bodies.' },
  ]
};

export { current_affairs };