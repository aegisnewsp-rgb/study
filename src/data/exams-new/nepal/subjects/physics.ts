import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics', name: '('physics', 'Physics')', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Topic 1', weight: 3 as const, description: 'Units, dimensions, and measurement techniques with significant figures and error analysis.' },
    { id: 'physic-002', name: 'Topic 2', weight: 3 as const, description: 'Kinematics covering motion in one and two dimensions with graphical analysis of displacement, velocity, and acceleration.' },
    { id: 'physic-003', name: 'Topic 3', weight: 3 as const, description: 'Laws of motion including Newton\'s laws, friction, circular motion, and pulley problems.' },
    { id: 'physic-004', name: 'Topic 4', weight: 3 as const, description: 'Work, energy, and power including conservation laws, kinetic and potential energy transformations.' },
    { id: 'physic-005', name: 'Topic 5', weight: 3 as const, description: 'Gravitation including Kepler\'s laws, satellite motion, and gravitational potential energy problems.' },
    { id: 'physic-006', name: 'Topic 6', weight: 3 as const, description: 'Properties of matter including elasticity, surface tension, viscosity, and fluid mechanics.' },
    { id: 'physic-007', name: 'Topic 7', weight: 3 as const, description: 'Heat and thermodynamics covering calorimetry, heat transfer, and laws of thermodynamics.' },
    { id: 'physic-008', name: 'Topic 8', weight: 3 as const, description: 'Oscillations and waves including SHM, wave equations, Doppler effect, and standing waves.' },
    { id: 'physic-009', name: 'Topic 9', weight: 3 as const, description: 'Electricity and magnetism covering Coulomb\'s law, circuits, magnetic fields, and electromagnetic induction.' },
    { id: 'physic-010', name: 'Topic 10', weight: 3 as const, description: 'Optics including reflection, refraction, lenses, mirrors, and optical instruments.' },
    { id: 'physic-011', name: 'Topic 11', weight: 3 as const, description: 'Modern physics covering photoelectric effect, Bohr atom, radioactivity, and nuclear physics.' },
    { id: 'physic-012', name: 'Topic 12', weight: 3 as const, description: 'Semiconductor physics including diodes, transistors, and basic electronic circuits.' },
    { id: 'physic-013', name: 'Topic 13', weight: 3 as const, description: 'Electronics covering analog and digital circuits, logic gates, and communication systems.' },
    { id: 'physic-014', name: 'Topic 14', weight: 3 as const, description: 'Environmental physics including pollution, renewable energy sources, and climate change concepts.' },
    { id: 'physic-015', name: 'Topic 15', weight: 3 as const, description: 'Practical physics including laboratory skills, measurement techniques, and data analysis methods.' },
  ]
};

export { physics };
