export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Mechanics and Biomechanics', weight: 5 as const, description: 'Forces, motion, work-energy, torque and human-body statics - foundation for HAAD allied-health and nursing scopes.' },
    { id: 'physic-002', name: 'Electricity and Magnetism', weight: 5 as const, description: 'Ohm\'s law, AC/DC circuits, capacitors, electromagnetic induction and biomedical instrumentation basics.' },
    { id: 'physic-003', name: 'Light and Optics', weight: 4 as const, description: 'Reflection, refraction, lenses, optical instruments and the physics of vision for ophthalmic and imaging scopes.' },
    { id: 'physic-004', name: 'Modern Physics and Radiation', weight: 4 as const, description: 'X-ray production, radioactivity, half-life, radiation safety and imaging physics for radiography professionals.' },
    { id: 'physic-005', name: 'Waves and Sound', weight: 3 as const, description: 'Wave properties, sound intensity, Doppler effect, ultrasound principles and hearing physiology.' },
    { id: 'physic-006', name: 'Fluid Mechanics', weight: 3 as const, description: 'Pressure, buoyancy, flow through tubes, Bernoulli principle and cardiovascular fluid dynamics applied clinically.' },
    { id: 'physic-007', name: 'Heat and Thermodynamics', weight: 2 as const, description: 'Temperature scales, specific heat, heat transfer modes and thermal regulation relevant to clinical settings.' },
    { id: 'physic-008', name: 'Measurements and Units', weight: 2 as const, description: 'SI units, dimensional analysis, error analysis and instrument calibration underpinning clinical measurement.' }
  ]
};