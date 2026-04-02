export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'sa-phy-001', name: 'Mechanics', weight: 5 as const, description: 'Kinematics, dynamics, Newton\'s laws, friction, work-energy theorem, conservation of momentum, and circular motion — the heaviest-weighted physics topic in Saudi achievement tests.' },
    { id: 'sa-phy-002', name: 'Waves and Optics', weight: 4 as const, description: 'Wave properties, simple harmonic motion, sound waves, light propagation, reflection, refraction, lenses, mirrors, and optical instruments.' },
    { id: 'sa-phy-003', name: 'Electricity and Magnetism', weight: 5 as const, description: 'Electrostatics, Coulomb\'s law, electric circuits, Ohm\'s law, Kirchhoff\'s laws, magnetic fields, electromagnetic induction, and AC/DC circuits.' },
    { id: 'sa-phy-004', name: 'Heat and Thermodynamics', weight: 4 as const, description: 'Heat transfer, calorimetry, specific heat, latent heat, kinetic theory of gases, and the laws of thermodynamics with practical applications.' },
    { id: 'sa-phy-005', name: 'Modern Physics', weight: 3 as const, description: 'Photoelectric effect, Bohr model, atomic energy levels, radioactivity, nuclear reactions, and fundamental particles — high-difficulty questions in Saudi university physics tests.' }
  ]
};
