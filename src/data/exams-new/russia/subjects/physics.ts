import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics', name: '("physics", "Physics")', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Topic 1', weight: 3 as const, description: 'Kinematics — motion along a straight line and projectile motion, including graphs of motion on the ЕГЭ Physics exam.' },
    { id: 'physic-002', name: 'Topic 2', weight: 3 as const, description: 'Newton\'s laws — forces, equilibrium, friction, and solving dynamics problems with free-body diagrams.' },
    { id: 'physic-003', name: 'Topic 3', weight: 3 as const, description: 'Work, energy, and power — kinetic and potential energy, conservation of mechanical energy in ЕГЭ problems.' },
    { id: 'physic-004', name: 'Topic 4', weight: 3 as const, description: 'Impulse and momentum — conservation of momentum in collisions and rocket motion on the ЕГЭ exam.' },
    { id: 'physic-005', name: 'Topic 5', weight: 3 as const, description: 'Rotational kinematics and dynamics — angular velocity, torque, moment of inertia, and rotational energy.' },
    { id: 'physic-006', name: 'Topic 6', weight: 3 as const, description: 'Gravitation — Kepler\'s laws, orbital motion, and gravitational field strength in ЕГЭ Physics problems.' },
    { id: 'physic-007', name: 'Topic 7', weight: 3 as const, description: 'Molecular physics and thermodynamics — ideal gas laws, internal energy, heat capacity, and PV-diagrams.' },
    { id: 'physic-008', name: 'Topic 8', weight: 3 as const, description: 'Phase transitions and heat engines — melting, boiling, calorimetry, and efficiency calculations on the ЕГЭ.' },
    { id: 'physic-009', name: 'Topic 9', weight: 3 as const, description: 'Mechanical oscillations and waves — simple harmonic motion, wave properties, Doppler effect, and resonance.' },
    { id: 'physic-010', name: 'Topic 10', weight: 3 as const, description: 'Electrostatics — Coulomb\'s law, electric fields, potential, capacitors, and Gauss\'s law in ЕГЭ problems.' },
    { id: 'physic-011', name: 'Topic 11', weight: 3 as const, description: 'Direct current circuits — Ohm\'s law, Kirchhoff\'s rules, series and parallel circuits, and power calculations.' },
    { id: 'physic-012', name: 'Topic 12', weight: 3 as const, description: 'Magnetic field — Lorentz force, electromagnetic induction, Faraday\'s law, self-induction, and alternating current.' },
    { id: 'physic-013', name: 'Topic 13', weight: 3 as const, description: 'Geometric optics — reflection, refraction, lenses, mirrors, optical instruments, and vision correction on the ЕГЭ.' },
    { id: 'physic-014', name: 'Topic 14', weight: 3 as const, description: 'Wave optics — interference, diffraction, dispersion, and polarization of light in ЕГЭ Physics problems.' },
    { id: 'physic-015', name: 'Topic 15', weight: 3 as const, description: 'Modern physics and astrophysics — relativity, quantum physics, atomic structure, nuclear reactions, and cosmological concepts on the ЕГЭ.' },
  ]
};

export { physics };
