// HKDSE Physics — Awarding body: Hong Kong Examinations and Assessment
// Authority (HKEAA). Source: 2026 HKDSE Physics Assessment Framework,
//   https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/phy/2026hkdse-e-phy.pdf
// and the CDC/HKEAA Physics Curriculum and Assessment Guide (Secondary
// 4 - 6), 2007 with updates in November 2015,
//   https://www.edb.gov.hk/attachment/en/curriculum-development/kla/science-edu/Phy_C_and_A_Guide_updated_e_20151126.pdf
// The Compulsory Part has five published topics (I-V) covering Heat and
// Gases, Force and Motion, Wave Motion, Electricity and Magnetism, and
// Radioactivity and Nuclear Energy. The Elective Part has four published
// topics (VI-IX) — candidates attempt any two: Astronomy and Space
// Science; Atomic World; Energy and Use of Energy; Medical Physics.
// Plus an Investigative Study. Assessment: Paper 1 (Compulsory Part, 60%);
// Paper 2 (Elective Part, 20%); SBA (20%). Re-check the live paper
// structure and SBA arrangement on hkeaa.edu.hk before committing.

import type { Subject } from '../../types';

export const hkdsePhysics: Subject = {
  id: 'hkdse-physics',
  name: 'Physics',
  color: '#f59e0b',
  topics: [
    { id: 'hkdse-phy-001', name: 'I. Heat and Gases', weight: 4 as const, description: 'Temperature, heat and internal energy (thermometric properties, specific heat capacity, latent heat); transfer processes (conduction, convection, radiation); change of state and the gas laws (Boyle\'s law, Charles\' law, the ideal gas equation); kinetic theory of gases.' },
    { id: 'hkdse-phy-002', name: 'II. Force and Motion', weight: 5 as const, description: 'Position and movement (displacement, velocity, acceleration, motion graphs); force and motion (Newton\'s three laws, free-body diagrams, friction); projectile motion (horizontal and angled launch, trajectory equations); work, energy and power (kinetic and potential energy, conservation of energy); momentum (impulse, conservation of momentum, collisions); uniform circular motion (centripetal force and acceleration); gravitation (Newton\'s law of gravitation, gravitational field strength, g).' },
    { id: 'hkdse-phy-003', name: 'III. Wave Motion', weight: 4 as const, description: 'Nature and properties of waves (transverse and longitudinal, wavelength, frequency, speed, amplitude, superposition); light (reflection, refraction, total internal reflection, lenses, the eye and optical instruments); sound (production, speed, intensity, the decibel scale, the Doppler effect).' },
    { id: 'hkdse-phy-004', name: 'IV. Electricity and Magnetism', weight: 5 as const, description: 'Electrostatics (electric charge, Coulomb\'s law, electric field, electric potential, capacitors); circuits and domestic electricity (Ohm\'s law, series and parallel circuits, electrical energy and power, AC circuits, the domestic ring main, fuses and circuit breakers); electromagnetism (magnetic fields, the magnetic effect of a current, the force on a current-carrying conductor, electromagnetic induction, transformers, motors and generators).' },
    { id: 'hkdse-phy-005', name: 'V. Radioactivity and Nuclear Energy', weight: 3 as const, description: 'Radiation and radioactivity (alpha, beta and gamma radiation, radioactive decay, half-life, activity); atomic model (Rutherford\'s scattering experiment, the Bohr model, energy levels); nuclear energy (nuclear fission and fusion, mass-energy equivalence E = mc^2, nuclear reactors).' },
    { id: 'hkdse-phy-006', name: 'VI. Astronomy and Space Science (Elective)', weight: 2 as const, description: 'The universe as seen in different scales (celestial coordinates, distance measurement); orbital motions under gravity (Kepler\'s laws, satellites, escape velocity); stars and the universe (stellar classification, the Hertzsprung-Russell diagram, stellar evolution, the Big Bang and cosmology).' },
    { id: 'hkdse-phy-007', name: 'VII. Atomic World (Elective)', weight: 2 as const, description: 'Rutherford\'s atomic model and the limits of classical physics; the photoelectric effect and Einstein\'s explanation; Bohr\'s atomic model of hydrogen and atomic spectra; wave-particle duality (de Broglie waves, electron diffraction); probing the nano scale (scanning tunnelling microscope, atomic force microscope).' },
    { id: 'hkdse-phy-008', name: 'VIII. Energy and Use of Energy (Elective)', weight: 2 as const, description: 'Electricity at home (domestic wiring, three-pin plugs, energy-saving appliances); energy efficiency in building and transportation (insulation, heat transfer, combustion efficiency); renewable and non-renewable energy sources (solar, wind, tidal, geothermal, nuclear, fossil fuels); energy policy and the environment.' },
    { id: 'hkdse-phy-009', name: 'IX. Medical Physics (Elective)', weight: 2 as const, description: 'Making sense of the eye and the ear (vision correction, hearing aids); medical imaging using non-ionizing radiation (ultrasound, MRI); medical imaging using ionizing radiation (X-rays, CT scans, PET scans, radiation safety and dose).' }
  ]
};