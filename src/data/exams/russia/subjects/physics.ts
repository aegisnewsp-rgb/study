export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Kinematics', weight: 4 as const, description: 'Motion in one and two dimensions, free fall, projectile motion, circular motion, relative velocity, and kinematic graphs - EGE Mechanics part 1.' },
    { id: 'physic-002', name: 'Dynamics - Newton\'s Laws', weight: 5 as const, description: 'Newton\'s three laws, force diagrams, friction, inclined planes, circular dynamics, gravitational force, and inertial reference frames - EGE Mechanics part 2.' },
    { id: 'physic-003', name: 'Conservation Laws in Mechanics', weight: 5 as const, description: 'Conservation of momentum, conservation of energy, work, power, kinetic and potential energy, elastic and inelastic collisions - the most heavily tested EGE mechanics topic.' },
    { id: 'physic-004', name: 'Statics and Mechanics of Rigid Bodies', weight: 3 as const, description: 'Torque, lever and pulley systems, centre of mass, equilibrium of bodies, pressure in fluids, and Archimedes principle - EGE Mechanics part 3.' },
    { id: 'physic-005', name: 'Mechanical Oscillations and Waves', weight: 4 as const, description: 'Simple harmonic motion, pendulums, spring oscillators, resonance, transverse and longitudinal waves, sound intensity, and Doppler effect - EGE Mechanics part 4.' },
    { id: 'physic-006', name: 'Molecular-Kinetic Theory of Gases', weight: 3 as const, description: 'Kinetic theory of gases, ideal gas law (PV=nRT), Dalton law, partial pressure, mean kinetic energy, and isothermal, isobaric, and adiabatic processes.' },
    { id: 'physic-007', name: 'Thermodynamics', weight: 4 as const, description: 'Internal energy, work, heat, first and second laws of thermodynamics, heat engines, Carnot cycle, entropy, and phase transitions - EGE Molecular Physics part 2.' },
    { id: 'physic-008', name: 'Electrostatics', weight: 4 as const, description: 'Electric charge, Coulomb law, electric field, potential, capacitors, dielectrics, and energy of an electric field - EGE Electrodynamics part 1.' },
    { id: 'physic-009', name: 'Direct Current Circuits', weight: 5 as const, description: 'Ohm law for a complete circuit, series and parallel resistors, Kirchhoff laws, work and power of current, Joule heating - the heaviest EGE electricity topic.' },
    { id: 'physic-010', name: 'Magnetic Field', weight: 3 as const, description: 'Magnetic induction, force on a current-carrying conductor, Lorentz force, solenoid, electromagnetic flow meter, and charged-particle motion - EGE Electrodynamics part 3.' },
    { id: 'physic-011', name: 'Electromagnetic Induction and Alternating Current', weight: 4 as const, description: 'Faraday law, Lenz law, self-induction, mutual induction, AC generator, transformer, reactance, and resonance in AC circuits - EGE Electrodynamics part 4.' },
    { id: 'physic-012', name: 'Geometric Optics', weight: 3 as const, description: 'Laws of reflection and refraction, total internal reflection, mirrors (plane and spherical), thin lenses, optical instruments, and image construction - EGE Optics part 1.' },
    { id: 'physic-013', name: 'Wave Optics', weight: 3 as const, description: 'Interference, diffraction, polarization, diffraction grating, coherence, and resolving power of optical instruments - EGE Optics part 2.' },
    { id: 'physic-014', name: 'Quantum Physics', weight: 3 as const, description: 'Photoelectric effect, photon, de Broglie wavelength, Bohr atomic model, emission and absorption spectra, and wave-particle duality - EGE Quantum part 1.' },
    { id: 'physic-015', name: 'Nuclear Physics', weight: 3 as const, description: 'Atomic nucleus composition, binding energy, radioactive decay (alpha, beta, gamma), half-life, decay law, nuclear reactions, fission and fusion - EGE Quantum part 2.' }
  ]
};
