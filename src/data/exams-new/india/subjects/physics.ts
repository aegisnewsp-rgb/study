import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics', name: '('physics', 'Physics')', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Mechanics', weight: 3 as const, description: 'Laws of motion, work-energy theorem, conservation laws, and rotational mechanics — core to AP EAPCET and JEE physics.' },
    { id: 'physic-002', name: 'Waves and Oscillations', weight: 3 as const, description: 'Simple harmonic motion, wave equations, Doppler effect, and resonance phenomena frequently tested.' },
    { id: 'physic-003', name: 'Thermodynamics', weight: 3 as const, description: 'Laws of thermodynamics, heat engines, entropy, and kinetic theory of gases — high weight in AP EAPCET.' },
    { id: 'physic-004', name: 'Electromagnetism', weight: 3 as const, description: 'Coulomb\'s law, Gauss\'s theorem, capacitors, magnetic effects of current, and electromagnetic induction.' },
    { id: 'physic-005', name: 'Optics', weight: 3 as const, description: 'Ray optics, lens/mirror formulas, wave optics (interference, diffraction), and optical instruments.' },
    { id: 'physic-006', name: 'Modern Physics', weight: 3 as const, description: 'Photoelectric effect, Bohr model, de Broglie wavelength, X-rays, and nuclear physics — scoring area in exams.' },
    { id: 'physic-007', name: 'Current Electricity', weight: 3 as const, description: 'Ohm\'s law, Kirchhoff\'s laws, equivalent resistance, RC/RL/LC circuits, and network analysis.' },
    { id: 'physic-008', name: 'Gravitation', weight: 3 as const, description: 'Newton\'s law of gravitation, orbital velocity, escape velocity, and Kepler\'s laws of planetary motion.' },
    { id: 'physic-009', name: 'Fluid Mechanics', weight: 3 as const, description: 'Pascal\'s law, Bernoulli\'s principle, viscosity, surface tension, and capillarity problems.' },
    { id: 'physic-010', name: 'Material Science', weight: 3 as const, description: 'Elasticity, stress-strain curves, Young\'s modulus, and deformation of solids under load.' },
    { id: 'physic-011', name: 'Semiconductors', weight: 3 as const, description: 'Diodes, transistors, logic gates, Boolean algebra, and digital electronics fundamentals.' },
    { id: 'physic-012', name: 'Communication Systems', weight: 3 as const, description: 'Modulation, demodulation, antenna basics, and signal transmission in analog and digital communication.' },
    { id: 'physic-013', name: 'Experimental Physics', weight: 3 as const, description: 'Error analysis, significant figures, Vernier calipers, screw gauge, and physics lab experiments.' },
    { id: 'physic-014', name: 'Vector Physics', weight: 3 as const, description: 'Vector addition, resolution, scalar/vector products, and their applications in force and motion problems.' },
    { id: 'physic-015', name: 'Properties of Matter', weight: 3 as const, description: 'Surface tension, viscosity, elasticity, and Hooke\'s law with practical applications.' },
  ]
};

export { physics };