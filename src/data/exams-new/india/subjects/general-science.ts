import type { Subject } from '../types';

const general_science: Subject = {
  id: 'general-science', name: 'None', color: '#6b7280',
  topics: [
    { id: 'genera-001', name: 'Physics', weight: 3 as const, description: 'Mechanics, heat, light, electricity, and magnetism for UPPSC and state PSC preliminary exams.' },
    { id: 'genera-002', name: 'Chemistry', weight: 3 as const, description: 'Atoms, molecules, periodic table, chemical reactions, and organic chemistry basics.' },
    { id: 'genera-003', name: 'Biology', weight: 3 as const, description: 'Cell structure, plant and animal kingdom, human physiology, and environmental science.' },
    { id: 'genera-004', name: 'Scientific Instruments', weight: 3 as const, description: 'Vernier calipers, microscopes, spectrometers, and measurement devices and their uses.' },
    { id: 'genera-005', name: 'Nutrition and Health', weight: 3 as const, description: 'Balanced diet, deficiency diseases, common illnesses, and primary healthcare in India.' },
    { id: 'genera-006', name: 'Information Technology', weight: 3 as const, description: 'Computer basics, internet, software, and digital technologies for competitive exams.' },
    { id: 'genera-007', name: 'Space Science', weight: 3 as const, description: 'ISRO missions, planets, satellites, and India\'s space program achievements.' },
    { id: 'genera-008', name: 'Environmental Concerns', weight: 3 as const, description: 'Pollution control, global warming, conservation, and sustainable development goals.' },
  ]
};

export { general_science };