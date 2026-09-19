export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Mechanics', weight: 5 as const, description: 'Kinematics, Newton\'s laws, projectile motion, work-energy-power, momentum, circular motion, rotational dynamics. Heaviest NECTA 131/1 topic at 22.57%.' },
    { id: 'physic-002', name: 'Current Electricity', weight: 5 as const, description: 'Ohm\'s law, Kirchhoff\'s laws, DC circuits, internal resistance, electrical measuring instruments, heating effect. Tested across NECTA 131/1 and 131/3 practical.' },
    { id: 'physic-003', name: 'Electronics', weight: 4 as const, description: 'Semiconductors, diodes, transistors, amplifiers, logic gates, integrated circuits, rectifiers. NECTA 131/1 component weighted 22.57%.' },
    { id: 'physic-004', name: 'Vibrations and Waves', weight: 4 as const, description: 'Mechanical vibrations, wave motion, sound, Doppler effect, electromagnetic waves. Heaviest NECTA 131/2 topic at 22.41%.' },
    { id: 'physic-005', name: 'Electromagnetism', weight: 4 as const, description: 'Magnetic fields, force on current-carrying conductor, electromagnetic induction, transformers, AC circuits. NECTA 131/2 at 19.89%.' },
    { id: 'physic-006', name: 'Atomic Physics', weight: 4 as const, description: 'Photoelectric effect, Bohr model, energy levels, atomic spectra, wave-particle duality, X-rays, radioactivity. NECTA 131/2 at 24.09%.' },
    { id: 'physic-007', name: 'Heat', weight: 4 as const, description: 'Thermometry, thermal expansion, heat transfer (conduction, convection, radiation), first law of thermodynamics, calorimetry. NECTA 131/1 at 16.70%.' },
    { id: 'physic-008', name: 'Fluid Dynamics', weight: 3 as const, description: 'Density, pressure, Pascal\'s principle, Archimedes, Bernoulli\'s equation, viscosity, streamline and turbulent flow. NECTA 131/2 at 12.32%.' },
    { id: 'physic-009', name: 'Properties of Matter', weight: 3 as const, description: 'Elasticity (Hooke\'s law, Young\'s modulus), surface tension, kinetic theory of gases. NECTA 131/2 at 12.86%.' },
    { id: 'physic-010', name: 'Electrostatics', weight: 3 as const, description: 'Coulomb\'s law, electric field, potential, capacitance, capacitors in series and parallel, dielectrics. NECTA 131/2 at 8.40%.' },
    { id: 'physic-011', name: 'Physical Optics', weight: 3 as const, description: 'Wave optics: interference, diffraction, polarization, Young\'s double-slit experiment. Official subtopic of the Vibrations and Waves syllabus area.' },
    { id: 'physic-012', name: 'Environmental Physics', weight: 2 as const, description: 'Energy resources, solar radiation, greenhouse effect, atmospheric electricity, noise pollution, radioactivity in the environment. NECTA 131/1 at 18.06%.' },
    { id: 'physic-013', name: 'Measurement', weight: 2 as const, description: 'Physical quantities, SI units, dimensions, errors (systematic, random), significant figures, measurement instruments. NECTA 131/1 at 5.87%.' },
    { id: 'physic-014', name: 'Sound and Acoustics', weight: 2 as const, description: 'Sound waves, speed of sound, intensity, decibel scale, resonance, applications (musical instruments, ultrasound). Official subtopic of Vibrations and Waves.' },
    { id: 'physic-015', name: 'Nuclear Physics', weight: 2 as const, description: 'Radioactive decay, half-life, decay laws, nuclear reactions, fission and fusion, mass-energy equivalence, radiation safety. Official subtopic of Atomic Physics.' }
  ]
};