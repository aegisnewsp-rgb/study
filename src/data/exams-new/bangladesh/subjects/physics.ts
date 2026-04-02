import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Mechanics', weight: 5 as const, description: 'Covers Newton\'s laws of motion, kinematics, momentum, work-energy theorem, and rotational dynamics essential for BUET admission problems.' },
    { id: 'physic-002', name: 'Gravitation & Circular Motion', weight: 4 as const, description: 'Gravitational field, Kepler\'s laws, satellite motion, centripetal force, and banking of roads — frequently tested in BUET written exams.' },
    { id: 'physic-003', name: 'Fluid Mechanics', weight: 3 as const, description: 'Pascal\'s law, Archimedes principle, Bernoulli\'s theorem, viscosity, and surface tension — important for both BUET and medical admission.' },
    { id: 'physic-004', name: 'Heat & Thermodynamics', weight: 4 as const, description: 'Heat transfer, specific heat, thermodynamics laws, Carnot cycle, and entropy — key topic for BUET engineering admission thermal physics section.' },
    { id: 'physic-005', name: 'Waves & Oscillations', weight: 4 as const, description: 'Simple harmonic motion, wave equation, sound waves, Doppler effect, and standing waves — essential for BUET physics paper.' },
    { id: 'physic-006', name: 'Optics', weight: 4 as const, description: 'Reflection, refraction, lenses, mirrors, interference, diffraction, and optical instruments — consistently appears in BUET admission tests.' },
    { id: 'physic-007', name: 'Electrostatics', weight: 5 as const, description: 'Coulomb\'s law, electric field, potential, capacitance, and Gauss\'s law — high-weightage topic for BUET and DU engineering admission.' },
    { id: 'physic-008', name: 'Current Electricity', weight: 5 as const, description: 'Ohm\'s law, Kirchhoff\'s laws, DC circuits, Wheatstone bridge, and electrical measurements — fundamental for BUET electrical/electronic engineering.' },
    { id: 'physic-009', name: 'Magnetism', weight: 4 as const, description: 'Magnetic field, Biot-Savart law, Ampere\'s circuital law, and magnetic materials — important for BUET admission physics.' },
    { id: 'physic-010', name: 'Electromagnetic Induction', weight: 4 as const, description: 'Faraday\'s law, Lenz\'s law, induced EMF, self-induction, and transformers — key topic for BUET electrical engineering stream.' },
    { id: 'physic-011', name: 'Alternating Current', weight: 3 as const, description: 'AC fundamentals, RMS values, impedance, resonance, and phasor diagrams — relevant for BUET admission and practical circuit analysis.' },
    { id: 'physic-012', name: 'Modern Physics', weight: 4 as const, description: 'Photoelectric effect, atomic models, Bohr theory, X-rays, and de Broglie hypothesis — high-scoring topic frequently tested in BUET.' },
    { id: 'physic-013', name: 'Nuclear Physics', weight: 3 as const, description: 'Radioactive decay, half-life, nuclear fission/fusion, alpha-beta-gamma radiation, and binding energy — important for both BUET and medical admission.' },
    { id: 'physic-014', name: 'Electronics & Semiconductors', weight: 3 as const, description: 'Diodes, transistors, logic gates, amplifiers, and basic electronic circuits — essential for BUET admission test electronics section.' },
    { id: 'physic-015', name: 'Units, Dimensions & Errors', weight: 2 as const, description: 'SI units, dimensional analysis, significant figures, and measurement errors — foundational topic that supports all other physics areas.' },
  ]
};

export { physics };
