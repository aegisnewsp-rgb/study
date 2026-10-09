// NUMS MDCAT — Physics component.
// Source: NUMS "2026 NUMS Updated MDCAT Terms of Conditions" on numspak.edu.pk, as cited and
// quoted by Manus (https://numspak.edu.pk/upload/media/2026-NUMS-Updated-MDCAT-TOS-2026_1779075557.pdf).
// NOTE: numspak.edu.pk returns HTTP 403 to this worker, so these figures are reproduced from
// the Manus retrieval of the official document and were NOT independently fetched here.
// NUMS allocates 40 of the 150 Paper I MCQs to Physics (printed as 26.5%).
// Topic split below is StudyRoadmap's own organisation; NUMS publishes no topic weightage.
import type { Subject } from '../../types';
export const numsPhysics: Subject = {
  id: 'physics', name: 'Physics', color: '#0e7490',
  topics: [
    { id: 'phy-001', name: 'Quantities, Units and Measurement', weight: 4, description: 'SI base units, dimensional analysis as a check on a formula, and converting between metric prefixes without losing the power of ten.' },
    { id: 'phy-002', name: 'Motion in One and Two Dimensions', weight: 5, description: 'Displacement versus distance, velocity versus acceleration, projectile motion, and reading a position-time or velocity-time graph as a story about an object.' },
    { id: 'phy-003', name: 'Newton\'s Laws and Forces', weight: 5, description: 'Newton\'s three laws, free-body diagrams, friction and its direction, tension, and normal force in contact problems including inclined planes and pulleys.' },
    { id: 'phy-004', name: 'Work, Energy, Power and Momentum', weight: 5, description: 'The work-energy theorem, conservation of energy, momentum and impulse in collisions, and the fact that a closed system has one energy route and several momentum traps.' },
    { id: 'phy-005', name: 'Fluids, Heat and Thermodynamics', weight: 4, description: 'Pressure, Pascal\'s and Archimedes\' principles, viscosity, specific heat and latent heat, the laws of thermodynamics, and heat transfer by conduction, convection and radiation.' },
    { id: 'phy-006', name: 'Waves, Sound, Light and Electricity', weight: 4, description: 'Wave behaviour, reflection and refraction, the Doppler effect, ray optics, and the circuit quantities — current, resistance, potential difference, power — used in a medical entrance test.' },
  ],
};
