const physics: Subject = {
  id: 'physics', name: '('physics', 'Physics')', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Mechanics', weight: 3 as const, description: 'Covers Newton\'s laws of motion, kinematics, work-energy theorem, and momentum — fundamental for solving A/L physics problems.' },
    { id: 'physic-002', name: 'Waves & Optics', weight: 3 as const, description: 'Studies wave properties, superposition, interference, diffraction, and optical instruments; essential for understanding light-based questions.' },
    { id: 'physic-003', name: 'Electricity & Magnetism', weight: 3 as const, description: 'Explores electric circuits, magnetic fields, electromagnetic induction, and AC/DC currents — a high-scoring section in A/L Physics.' },
    { id: 'physic-004', name: 'Thermal Physics', weight: 3 as const, description: 'Covers heat transfer, kinetic theory, thermodynamics, and gas laws; frequently tested with numerical problems in the exam.' },
    { id: 'physic-005', name: 'Modern Physics', weight: 3 as const, description: 'Includes atomic structure, nuclear physics, photoelectric effect, and quantum concepts — increasingly important in recent A/L papers.' },
    { id: 'physic-006', name: 'Oscillations & Gravitation', weight: 3 as const, description: 'Studies simple harmonic motion, gravitational fields, Kepler\'s laws, and satellite motion; often appears in Section B of the paper.' },
    { id: 'physic-007', name: 'Properties of Matter', weight: 3 as const, description: 'Covers elasticity, stress-strain relationships, surface tension, and viscosity; links closely with mechanics concepts.' },
    { id: 'physic-008', name: 'Fluid Mechanics', weight: 3 as const, description: 'Studies fluid statics, buoyancy, Bernoulli\'s principle, and viscosity — important for engineering-related career paths.' },
    { id: 'physic-009', name: 'Sound', weight: 3 as const, description: 'Explores sound waves, Doppler effect, resonance, and acoustics; commonly tested with wave phenomenon questions.' },
    { id: 'physic-010', name: 'Electronics', weight: 3 as const, description: 'Covers semiconductor devices, transistors, amplifiers, and digital electronics; a practical-oriented section in the A/L syllabus.' },
    { id: 'physic-011', name: 'Mathematical Methods in Physics', weight: 3 as const, description: 'Application of calculus, vectors, and complex numbers to solve physics problems; strengthens problem-solving skills.' },
    { id: 'physic-012', name: 'Practical Physics', weight: 3 as const, description: 'Laboratory skills, error analysis, and experimental techniques; mandatory graph work and practical questions in Paper 3.' },
  ]
};