export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Physical Quantities and Measurement', weight: 2 as const, description: 'SI units, dimensional analysis, scalar and vector quantities, significant figures and uncertainty in measurement for the matriculation and UPPM engineering physics papers.' },
    { id: 'physic-002', name: 'Kinematics of Linear Motion', weight: 4 as const, description: 'Displacement, velocity and acceleration in one and two dimensions, equations of motion, projectile motion and graphical analysis of motion data.' },
    { id: 'physic-003', name: 'Forces and Newton\'s Laws', weight: 5 as const, description: 'Newton\'s three laws of motion, free-body diagrams, friction, equilibrium and non-equilibrium problems involving concurrent and non-concurrent forces.' },
    { id: 'physic-004', name: 'Work, Energy and Power', weight: 4 as const, description: 'Work done by constant and variable forces, kinetic and gravitational potential energy, conservation of energy, power and efficiency calculations.' },
    { id: 'physic-005', name: 'Momentum and Impulse', weight: 3 as const, description: 'Linear momentum, impulse, conservation of momentum in one and two dimensions, elastic and inelastic collisions and centre of mass problems.' },
    { id: 'physic-006', name: 'Circular Motion and Gravitation', weight: 4 as const, description: 'Uniform circular motion, centripetal force and acceleration, Newton\'s law of gravitation, gravitational field strength, Kepler\'s laws and satellite motion.' },
    { id: 'physic-007', name: 'Rotational Motion of Rigid Bodies', weight: 3 as const, description: 'Moment of inertia, torque, angular momentum, rolling motion, rotational kinetic energy and equilibrium of a rigid body in two dimensions.' },
    { id: 'physic-008', name: 'Oscillations and Waves', weight: 3 as const, description: 'Simple harmonic motion, pendulum and spring-mass systems, transverse and longitudinal waves, wave speed, superposition, interference and standing waves.' },
    { id: 'physic-009', name: 'Thermal Physics and Thermodynamics', weight: 4 as const, description: 'Thermometry, thermal expansion, heat capacity, latent heat, heat transfer, ideal gas law, kinetic theory of gases and first law of thermodynamics.' },
    { id: 'physic-010', name: 'Electrostatics and Capacitors', weight: 4 as const, description: 'Coulomb\'s law, electric field and potential, capacitors, dielectrics, energy stored in a capacitor and series-parallel combinations of capacitors.' },
    { id: 'physic-011', name: 'Electric Current and DC Circuits', weight: 5 as const, description: 'Ohm\'s law, resistors in series and parallel, Kirchhoff\'s laws, internal resistance, electrical measuring instruments and DC circuit analysis.' },
    { id: 'physic-012', name: 'Magnetism and Electromagnetic Induction', weight: 4 as const, description: 'Magnetic field, force on a current-carrying conductor, Faraday\'s law, Lenz\'s law, self and mutual inductance and applications to motors and generators.' },
    { id: 'physic-013', name: 'Alternating Current', weight: 3 as const, description: 'AC generator, RMS and peak values, reactance of inductors and capacitors, RLC series circuits, resonance and power in AC circuits.' },
    { id: 'physic-014', name: 'Optics and Wave Nature of Light', weight: 3 as const, description: 'Reflection, refraction, total internal reflection, thin lenses, mirror and lens equations, interference, diffraction and polarisation of light.' },
    { id: 'physic-015', name: 'Modern Physics and Nuclear Physics', weight: 3 as const, description: 'Photoelectric effect, photon concept, de Broglie wavelength, Bohr model, atomic spectra, radioactivity, half-life, nuclear reactions and mass-energy equivalence.' }
  ]
};
