import type { Subject } from '../types';

const science: Subject = {
  id: 'science', name: 'Science', color: '#6b7280',
  topics: [
    { id: 'scienc-001', name: 'Physics: Mechanics & Laws of Motion', weight: 5 as const, description: 'Newton\'s three laws, momentum, friction, work-energy theorem, and projectile motion — fundamental for general science and engineering admission.' },
    { id: 'scienc-002', name: 'Physics: Heat, Light & Sound', weight: 4 as const, description: 'Heat transfer, thermal expansion, reflection, refraction, sound waves, and Doppler effect — core physics topics for science admission tests.' },
    { id: 'scienc-003', name: 'Physics: Electricity & Magnetism', weight: 4 as const, description: 'Electric current, Ohm\'s law, magnetic effects, electromagnetic induction, and household electrical safety — important for general science.' },
    { id: 'scienc-004', name: 'Chemistry: Elements, Compounds & Reactions', weight: 4 as const, description: 'Periodic table, chemical bonding, types of reactions, acids-bases-salts, and pollution — essential chemistry for science admission.' },
    { id: 'scienc-005', name: 'Chemistry: Organic & Biochemistry', weight: 4 as const, description: 'Hydrocarbons, functional groups, carbohydrates, proteins, and biological molecules — relevant for medical-bound science students.' },
    { id: 'scienc-006', name: 'Biology: Cell & Living World', weight: 4 as const, description: 'Cell structure, photosynthesis, respiration, nutrition, and classification of organisms — foundational biology for science admission.' },
    { id: 'scienc-007', name: 'Biology: Human Body Systems', weight: 5 as const, description: 'Circulatory, respiratory, digestive, nervous systems, health, and disease — high-weightage topic for medical and science admission tests.' },
    { id: 'scienc-008', name: 'Earth Science & Environment', weight: 3 as const, description: 'Earth structure, rocks, weather, climate change, natural disasters, and environmental conservation — important for general science awareness.' },
    { id: 'scienc-009', name: 'Computer & Digital Technology', weight: 3 as const, description: 'Basic computer concepts, internet, software, digital safety, and emerging technologies — relevant for modern science curriculum and admission.' },
    { id: 'scienc-010', name: 'Scientific Method & Reasoning', weight: 3 as const, description: 'Observation, hypothesis, experimentation, data analysis, and logical scientific reasoning — foundational skills tested in science admission exams.' },
  ]
};

export { science };
