import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Physical Quantities & Units', weight: 3 as const, description: 'Identify fundamental and derived quantities, apply SI units correctly, and use scientific notation and prefixes.' },
    { id: 'physic-002', name: 'Kinematics of Linear Motion', weight: 3 as const, description: 'Describe displacement, velocity, and acceleration using equations of motion; interpret motion graphs for linear движение.' },
    { id: 'physic-003', name: 'Dynamics & Newton\'s Laws', weight: 3 as const, description: 'Apply Newton\'s three laws of motion to solve problems involving forces, friction, and momentum conservation.' },
    { id: 'physic-004', name: 'Work, Energy & Power', weight: 3 as const, description: 'Calculate work done, kinetic and potential energy, power, and efficiency; apply the work-energy theorem to problem-solving.' },
    { id: 'physic-005', name: 'Gravitational Field & Satellites', weight: 3 as const, description: 'Understand Newton\'s law of gravitation, orbital motion, and the concept of gravitational field strength.' },
    { id: 'physic-006', name: 'Waves & Oscillations', weight: 3 as const, description: 'Describe wave properties including amplitude, frequency, wavelength, and solve problems using the wave equation v = fλ.' },
    { id: 'physic-007', name: 'Sound & Light Waves', weight: 3 as const, description: 'Explain phenomena such as interference, diffraction, and Doppler effect for sound and electromagnetic waves.' },
    { id: 'physic-008', name: 'Electric Fields & Capacitors', weight: 3 as const, description: 'Analyse electric field patterns, calculate forces and potentials, and understand charging and discharging of capacitors.' },
    { id: 'physic-009', name: 'Current Electricity & Circuits', weight: 3 as const, description: 'Apply Ohm\'s law, Kirchhoff\'s laws, and circuit theorems to solve series, parallel, and combined circuit problems.' },
    { id: 'physic-010', name: 'Electromagnetic Induction', weight: 3 as const, description: 'Explain Faraday\'s and Lenz\'s laws, calculate induced EMF, and understand applications in generators and transformers.' },
    { id: 'physic-011', name: 'Radioactivity & Nuclear Physics', weight: 3 as const, description: 'Understand alpha, beta, and gamma radiation, half-life calculations, and nuclear fission and fusion processes.' },
    { id: 'physic-012', name: 'Modern Physics & Quantum Concepts', weight: 3 as const, description: 'Explore the photoelectric effect, de Broglie wavelength, energy levels, and foundational quantum physics concepts.' },
    { id: 'physic-013', name: 'Thermal Physics', weight: 3 as const, description: 'Understand specific heat capacity, latent heat, the kinetic theory of gases, and the laws of thermodynamics.' },
    { id: 'physic-014', name: 'Elasticity & Material Properties', weight: 3 as const, description: 'Apply Hooke\'s law, understand stress-strain relationships, and calculate Young\'s modulus for different materials.' },
    { id: 'physic-015', name: 'Semiconductors & Electronics', weight: 3 as const, description: 'Understand the behaviour of diodes, transistors, and basic amplifier circuits used in electronic devices.' },
  ]
};

export { physics };
