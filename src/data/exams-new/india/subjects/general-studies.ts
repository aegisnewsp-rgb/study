import type { Subject } from '../types';

const general_studies: Subject = {
  id: 'general-studies', name: 'General-Studies', color: '#6b7280',
  topics: [
    { id: 'genera-001', name: 'Indian History', weight: 3 as const, description: 'Ancient, medieval, and modern Indian history with focus on culture, dynasties, and movements.' },
    { id: 'genera-002', name: 'Indian Geography', weight: 3 as const, description: 'Physical, economic, and human geography of India including resources and infrastructure.' },
    { id: 'genera-003', name: 'Indian Polity', weight: 3 as const, description: 'Constitution, governance, political institutions, and constitutional amendments in India.' },
    { id: 'genera-004', name: 'General Science', weight: 3 as const, description: 'Physics, chemistry, and biology concepts at the level required for UPPSC RO/ARO exam.' },
    { id: 'genera-005', name: 'Economics', weight: 3 as const, description: 'Indian economy, planning, sectoral development, and economic policies of the government.' },
    { id: 'genera-006', name: 'Environment and Ecology', weight: 3 as const, description: 'Biodiversity, conservation, climate change, and environmental impact assessment.' },
    { id: 'genera-007', name: 'Current Affairs', weight: 3 as const, description: 'National and international events, government policies, and important developments.' },
    { id: 'genera-008', name: 'Art and Culture', weight: 3 as const, description: 'Indian art, architecture, literature, music, and cultural heritage across states.' },
    { id: 'genera-009', name: 'Ethics and Integrity', weight: 3 as const, description: 'Human values, ethics in governance, corruption, and integrity in public service.' },
    { id: 'genera-010', name: 'Disaster Management', weight: 3 as const, description: 'Natural and man-made disasters, response mechanisms, and disaster management in India.' },
    { id: 'genera-011', name: 'Right to Information', weight: 3 as const, description: 'RTI Act provisions, information commission, and transparency in governance.' },
    { id: 'genera-012', name: 'Governance', weight: 3 as const, description: 'Government schemes, public welfare programs, and delivery mechanisms for citizens.' },
    { id: 'genera-013', name: 'International Relations', weight: 3 as const, description: 'India\'s foreign policy, neighboring relations, and global strategic interests.' },
    { id: 'genera-014', name: 'Social Issues', weight: 3 as const, description: 'Poverty, inequality, unemployment, education, and social justice concerns in India.' },
    { id: 'genera-015', name: 'Science and Technology', weight: 3 as const, description: 'Government S&T initiatives, innovations, and technology applications in governance.' },
    { id: 'genera-016', name: 'Legal Awareness', weight: 3 as const, description: 'Constitutional rights, legal provisions, and important laws affecting citizens daily.' },
    { id: 'genera-017', name: 'Amendment Process', weight: 3 as const, description: 'How laws are made, legislative process, and the role of various bodies in lawmaking.' },
    { id: 'genera-018', name: 'Statistical Analysis', weight: 3 as const, description: 'Data interpretation, graphs, tables, and basic statistical concepts for exams.' },
    { id: 'genera-019', name: 'Sports and Awards', weight: 3 as const, description: 'Important sports events, national awards, and recognition of achievements in India.' },
    { id: 'genera-020', name: 'Projects and Schemes', weight: 3 as const, description: 'Major government projects, missions, and welfare schemes across sectors in India.' },
  ]
};

export { general_studies };