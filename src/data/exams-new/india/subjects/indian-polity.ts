import type { Subject } from '../types';

const indian_polity: Subject = {
  id: 'indian-polity', name: 'Indian-Polity', color: '#6b7280',
  topics: [
    { id: 'indian-001', name: 'Constitution of India', weight: 3 as const, description: 'Making of the constitution, salient features, preamble, and fundamental values — essential for all state PSCs.' },
    { id: 'indian-002', name: 'Parliament and Legislation', weight: 3 as const, description: 'Lok Sabha, Rajya Sabha, legislative process, bill stages, and parliamentary privileges.' },
    { id: 'indian-003', name: 'Executive', weight: 3 as const, description: 'President, Prime Minister, Council of Ministers, Governor, and Chief Minister roles and powers.' },
    { id: 'indian-004', name: 'Judiciary', weight: 3 as const, description: 'Supreme Court, High Courts, judicial review, writs, and structure of Indian courts.' },
    { id: 'indian-005', name: 'Federalism', weight: 3 as const, description: 'Centre-state relations, residuary subjects, interstate councils, and judicial federalism in India.' },
    { id: 'indian-006', name: 'Fundamental Rights', weight: 3 as const, description: 'Article 14-32, right to equality, freedom, protection against exploitation, and cultural rights.' },
    { id: 'indian-007', name: 'Directive Principles', weight: 3 as const, description: 'DPSP objectives, golden triangle, and its impact on Indian governance and legislation.' },
    { id: 'indian-008', name: 'Local Government', weight: 3 as const, description: '73rd and 74th amendments, panchayati raj institutions, municipalities, and urban local bodies.' },
    { id: 'indian-009', name: 'Constitutional Bodies', weight: 3 as const, description: 'Election Commission, UPSC, SPSC, CAG, FC, and National Commission for SC/ST functions.' },
    { id: 'indian-010', name: 'Amending Process', weight: 3 as const, description: 'Article 368, types of amendments, basic structure doctrine, and landmark constitutional cases.' },
  ]
};

export { indian_polity };