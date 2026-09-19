export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'eth-phy-001', name: 'Mechanics — Kinematics and Dynamics', weight: 5 as const, description: 'Motion in one and two dimensions, Newton\'s laws, friction, circular motion, work-energy theorem, and momentum conservation. Core EUEE physics topic with frequent numerical problems.' },
    { id: 'eth-phy-002', name: 'Waves and Oscillations', weight: 4 as const, description: 'Simple harmonic motion, wave properties (amplitude, frequency, wavelength, speed), wave equations, superposition, standing waves, and sound waves.' },
    { id: 'eth-phy-003', name: 'Heat and Thermodynamics', weight: 4 as const, description: 'Heat transfer, specific heat capacity, latent heat, first and second laws of thermodynamics, heat engines, and entropy concepts.' },
    { id: 'eth-phy-004', name: 'Electricity and Magnetism', weight: 5 as const, description: 'Coulomb\'s law, electric fields and potential, capacitors, DC circuits, Kirchhoff\'s laws, magnetic fields, electromagnetic induction, and AC circuits. Highest-weight EUEE physics topic.' },
    { id: 'eth-phy-005', name: 'Optics', weight: 4 as const, description: 'Reflection and refraction, lenses and mirrors, optical instruments, wave optics (interference, diffraction), and the human eye as an optical system.' },
    { id: 'eth-phy-006', name: 'Modern Physics', weight: 4 as const, description: 'Photoelectric effect, Bohr model of the atom, energy levels, radioactivity (alpha, beta, gamma decay), half-life, nuclear fission and fusion, and fundamental particles.' },
    { id: 'eth-phy-007', name: 'Fluid Mechanics', weight: 3 as const, description: 'Pressure, Pascal\'s principle, Archimedes\' principle, Bernoulli\'s equation, viscosity, and surface tension — concept-based and application-oriented problems.' }
  ]
};
