export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#2563eb',
  topics: [
    { id: 'physic-001', name: 'Measurement', weight: 3 as const, description: 'Physical quantities, SI units, dimensions, measuring instruments and scalar/vector distinction.' },
    { id: 'physic-002', name: 'Mechanics: Kinematics and Dynamics', weight: 4 as const, description: 'Linear and projectile motion, Newton\u2019s laws, force, equilibrium and momentum conservation.' },
    { id: 'physic-003', name: 'Mechanics: Work, Energy, Power and Rotation', weight: 4 as const, description: 'Work-energy theorem, rotational dynamics, hydrostatics and fluid dynamics.' },
    { id: 'physic-004', name: 'Oscillations and Waves', weight: 5 as const, description: 'SHM, wave motion, sound, resonance, standing waves and Doppler effect.' },
    { id: 'physic-005', name: 'Thermal Physics', weight: 4 as const, description: 'Thermometry, calorimetry, gas laws, kinetic theory and thermal properties of matter.' },
    { id: 'physic-006', name: 'Gravitational Field', weight: 2 as const, description: 'Newton\u2019s law of gravitation, gravitational field strength and planetary motion.' },
    { id: 'physic-007', name: 'Electrostatic Field', weight: 4 as const, description: 'Coulomb\u2019s law, electric field, potential, capacitance and capacitors in series/parallel.' },
    { id: 'physic-008', name: 'Magnetic Field', weight: 3 as const, description: 'Magnetic fields, force on moving charges, force on current-carrying conductors.' },
    { id: 'physic-009', name: 'Current Electricity', weight: 5 as const, description: 'Ohm\u2019s law, Kirchhoff\u2019s laws, resistor networks, measuring instruments and DC circuit analysis.' },
    { id: 'physic-010', name: 'Electronics', weight: 3 as const, description: 'Semiconductors, diodes, transistors, op-amps, logic gates and basic amplifier circuits.' },
    { id: 'physic-011', name: 'Mechanical Properties of Matter', weight: 3 as const, description: 'Elasticity, Hooke\u2019s law, Young\u2019s modulus, viscosity and surface tension.' },
    { id: 'physic-012', name: 'Matter and Radiation', weight: 3 as const, description: 'Photoelectric effect, atomic energy levels, line spectra, radioactivity and nuclear reactions.' }
  ]
};
