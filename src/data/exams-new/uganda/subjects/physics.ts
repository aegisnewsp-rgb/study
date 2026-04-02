import type { Subject } from '../types';

const physics: Subject = {
  id: 'physics',
  name: 'Physics',
  color: '#3b82f6',
  topics: [
    {
      id: 'physic-001',
      name: 'Mechanics',
      weight: 3 as const,
      description: 'Laws of motion, Newton\'s laws, friction, circular motion, and the application of conservation of momentum and energy in solving UACE physics problems.',
    },
    {
      id: 'physic-002',
      name: 'Gravitation',
      weight: 3 as const,
      description: 'Newton\'s law of universal gravitation, gravitational field and potential, orbital motion, and escape velocity relevant to UACE examinations.',
    },
    {
      id: 'physic-003',
      name: 'Waves and Optics',
      weight: 3 as const,
      description: 'Properties of waves including superposition, interference, diffraction, and polarization, with applications to light and sound phenomena.',
    },
    {
      id: 'physic-004',
      name: 'Heat and Thermodynamics',
      weight: 3 as const,
      description: 'Heat transfer, kinetic theory of gases, the first and second laws of thermodynamics, and their applications in thermal systems.',
    },
    {
      id: 'physic-005',
      name: 'Electrostatics and Electric Fields',
      weight: 3 as const,
      description: 'Coulomb\'s law, electric field and potential, capacitors, and the behaviour of charges in electric fields as covered in UACE physics.',
    },
    {
      id: 'physic-006',
      name: 'Electric Circuits',
      weight: 3 as const,
      description: 'Current, voltage, resistance, Ohm\'s law, series and parallel circuits, Kirchhoff\'s laws, and practical circuit analysis.',
    },
    {
      id: 'physic-007',
      name: 'Magnetism and Electromagnetic Induction',
      weight: 3 as const,
      description: 'Magnetic fields, the motion of charged particles in magnetic fields, electromagnetic induction, Faraday\'s and Lenz\'s laws.',
    },
    {
      id: 'physic-008',
      name: 'Modern Physics',
      weight: 3 as const,
      description: 'Quantum concepts, the photoelectric effect, atomic models, nuclear physics, and radioactivity as required in the UACE syllabus.',
    },
    {
      id: 'physic-009',
      name: 'Dimensional Analysis and Measurements',
      weight: 3 as const,
      description: 'Systematic error analysis, significant figures, precision, accuracy, and the use of dimensions to verify physical equations.',
    },
    {
      id: 'physic-010',
      name: 'Work, Energy and Power',
      weight: 3 as const,
      description: 'Work-energy theorem, kinetic and potential energy, conservation of mechanical energy, and power calculations in physics problems.',
    },
    {
      id: 'physic-011',
      name: 'Rotational Motion',
      weight: 3 as const,
      description: 'Angular displacement, velocity and acceleration, moment of inertia, torque, angular momentum, and their equations analogous to linear motion.',
    },
    {
      id: 'physic-012',
      name: 'Oscillations',
      weight: 3 as const,
      description: 'Simple harmonic motion, the simple pendulum, mass-spring systems, damping, and resonance phenomena in UACE physics.',
    },
    {
      id: 'physic-013',
      name: 'Fluid Mechanics',
      weight: 3 as const,
      description: 'Fluid statics and dynamics, Archimedes\' principle, Bernoulli\'s equation, viscosity, and surface tension concepts.',
    },
    {
      id: 'physic-014',
      name: 'Elasticity',
      weight: 3 as const,
      description: 'Stress, strain, Young\'s modulus, shear modulus, bulk modulus, and the behaviour of materials under load.',
    },
    {
      id: 'physic-015',
      name: 'Practical Physics and Experimental Methods',
      weight: 3 as const,
      description: 'Laboratory techniques, graphical analysis of experimental data, uncertainties, and the practical physics component of UACE examinations.',
    },
  ],
};

export { physics };
