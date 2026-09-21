// weight = our editorial study-priority guide on a 1-5 scale (5 = core topic that appears
// in nearly every paper, 2 = peripheral). It is a revision-order signal for students, NOT an
// official mark weighting from the examining body.
export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Measurement and Units', weight: 2 as const, description: 'SI units, dimensions, significant figures and errors; the vocabulary every other physics question uses.' },
    { id: 'physic-002', name: 'Kinematics', weight: 4 as const, description: 'Equations of motion, velocity-time graphs and projectile problems in one and two dimensions.' },
    { id: 'physic-003', name: 'Dynamics and Newtons Laws', weight: 5 as const, description: 'Newton three laws, friction, momentum and impulse; connected masses, pulleys and collision problems.' },
    { id: 'physic-004', name: 'Work, Energy and Power', weight: 4 as const, description: 'Work-energy theorem, conservation of energy, and power and efficiency calculations.' },
    { id: 'physic-005', name: 'Circular Motion and Gravitation', weight: 4 as const, description: 'Centripetal force, banked tracks, satellite orbits and gravitational field strength.' },
    { id: 'physic-006', name: 'Fluid Mechanics', weight: 3 as const, description: 'Pressure, Pascal and Archimedes principles, and Bernoulli equation with its applications.' },
    { id: 'physic-007', name: 'Oscillations and Waves', weight: 4 as const, description: 'Simple harmonic motion, wave speed and superposition, sound, and the Doppler effect.' },
    { id: 'physic-008', name: 'Heat and Thermodynamics', weight: 4 as const, description: 'Heat capacity, latent heat, the laws of thermodynamics, entropy and heat engine efficiency.' },
    { id: 'physic-009', name: 'Electrostatics', weight: 5 as const, description: 'Coulomb law, electric field and potential, capacitors and their combinations.' },
    { id: 'physic-010', name: 'Current Electricity', weight: 5 as const, description: 'Ohm and Kirchhoff laws, series and parallel networks, internal resistance and electrical power.' },
    { id: 'physic-011', name: 'Electromagnetism', weight: 4 as const, description: 'Magnetic fields around current-carrying conductors, force on moving charges, and magnetic materials.' },
    { id: 'physic-012', name: 'Electromagnetic Induction', weight: 4 as const, description: 'Faraday and Lenz laws, induced EMF, transformers, and the AC generator.' },
    { id: 'physic-013', name: 'Optics', weight: 4 as const, description: 'Mirror and lens formulas, refraction through prisms, optical instruments and wave optics.' },
    { id: 'physic-014', name: 'Modern Physics', weight: 3 as const, description: 'Photoelectric effect, atomic models, energy levels and the wave-particle duality of light.' },
    { id: 'physic-015', name: 'Nuclear Physics', weight: 3 as const, description: 'Radioactive decay, half-life, binding energy, and fission and fusion reactions.' }
  ]
};
