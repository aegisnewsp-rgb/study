import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Mechanics', weight: 3 as const, description: 'Covers Newton\'s laws, motion, momentum, energy, and rotational dynamics — fundamental for solving ACSEE physics problems.' },
    { id: 'physic-002', name: 'Thermal Physics', weight: 3 as const, description: 'Heat transfer, kinetic theory, and the laws of thermodynamics with practical applications relevant to Tanzanian industry.' },
    { id: 'physic-003', name: 'Waves & Optics', weight: 3 as const, description: 'Wave properties, sound, light interference, diffraction, and polarization tested in Section B of ACSEE Physics Paper 3.' },
    { id: 'physic-004', name: 'Electricity & Magnetism', weight: 3 as const, description: 'Circuit analysis, Coulomb\'s law, electromagnetic induction, and AC circuits — high-scoring topics in ACSEE examinations.' },
    { id: 'physic-005', name: 'Atomic Physics', weight: 3 as const, description: 'Atomic structure, electron transitions, X-rays, and radioactive decay — frequently tested with calculation-based questions.' },
    { id: 'physic-006', name: 'Electronics', weight: 3 as const, description: 'Semiconductors, transistors, amplifiers, and digital circuits — practical focus aligned with Tanzania\'s technical education goals.' },
    { id: 'physic-007', name: 'Gravitation & Space', weight: 3 as const, description: 'Newton\'s gravitational law, orbital motion, and satellite dynamics — conceptual questions appear regularly in ACSEE.' },
    { id: 'physic-008', name: 'Fluid Mechanics', weight: 3 as const, description: 'Hydrostatics, Bernoulli\'s principle, viscosity, and surface tension — application-oriented problems in Paper 2.' },
    { id: 'physic-009', name: 'Simple Harmonic Motion', weight: 3 as const, description: 'Oscillations, pendulums, and resonance — linked with waves and often combined in examination questions.' },
    { id: 'physic-010', name: 'Dimensional Analysis & Units', weight: 3 as const, description: 'SI units, dimensional analysis, and error estimation — basic skills tested across all ACSEE Physics papers.' },
    { id: 'physic-011', name: 'Work, Energy & Power', weight: 3 as const, description: 'Conservation of energy, work-energy theorems, and power calculations — core topic appearing in nearly every exam session.' },
    { id: 'physic-012', name: 'Elasticity', weight: 3 as const, description: 'Hooke\'s law, Young\'s modulus, and stress-strain relationships — practical experiments are part of the ACSEE practical paper.' },
    { id: 'physic-013', name: 'Capacitance', weight: 3 as const, description: 'Capacitor combinations, energy stored, and RC circuits — increasingly tested in recent ACSEE Physics examinations.' },
    { id: 'physic-014', name: 'Nuclear Physics', weight: 3 as const, description: 'Nuclear reactions, binding energy, fission and fusion, and radiation detection — often linked with atomic physics questions.' },
    { id: 'physic-015', name: 'Practical Physics', weight: 3 as const, description: 'Experimental techniques, graph plotting, and error analysis from Paper 3 — compulsory for all ACSEE Physics candidates.' },
  ]
};

export { physics };
