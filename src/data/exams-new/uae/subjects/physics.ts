import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics', name: '('physics', 'Physics')', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Topic 1', weight: 3 as const, description: 'Mechanics: motion, forces, Newton's laws, momentum, and energy conservation in exam contexts.' },
    { id: 'physic-002', name: 'Topic 2', weight: 3 as const, description: 'Waves and sound: wave properties, sound propagation, Doppler effect, and resonance phenomena.' },
    { id: 'physic-003', name: 'Topic 3', weight: 3 as const, description: 'Optics: light reflection, refraction, lenses, mirrors, and optical instrument applications.' },
    { id: 'physic-004', name: 'Topic 4', weight: 3 as const, description: 'Electricity and magnetism: circuits, electrical components, magnetic fields, and electromagnetic induction.' },
    { id: 'physic-005', name: 'Topic 5', weight: 3 as const, description: 'Thermodynamics: heat transfer, temperature scales, gas laws, and energy conversions in physical systems.' },
    { id: 'physic-006', name: 'Topic 6', weight: 3 as const, description: 'Modern physics: atomic structure, nuclear reactions, and quantum physics fundamentals.' },
    { id: 'physic-007', name: 'Topic 7', weight: 3 as const, description: 'Fluid mechanics: pressure, buoyancy, fluid dynamics, and applications in engineering contexts.' },
    { id: 'physic-008', name: 'Topic 8', weight: 3 as const, description: 'Problem-solving strategies: UAE HAAD exam physics approaches, formula application, and calculation techniques.' },
  ]
};

export { physics };