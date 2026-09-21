// HKDSE Chemistry — Awarding body: Hong Kong Examinations and Assessment
// Authority (HKEAA). Source: 2026 HKDSE Chemistry Assessment Framework,
//   https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/chem/2026hkdse-e-chem.pdf
// and the CDC/HKEAA Chemistry Curriculum and Assessment Guide (Secondary
// 4 - 6), reviewed in the HKEAA Chemistry and Combined Science briefing
// session documents at
//   https://www.hkeaa.edu.hk/doclibrary/hkdse/subject_information/chem/chemncsbriefing.pdf
// The Compulsory Part covers twelve published topics (I-XII). The Elective
// Part has three published topics (XIII-XV); candidates attempt any two
// plus an Investigative Study. Topic names below are taken from the
// published HKEAA topic numbering used in the briefing session.
// Combined Science (Chemistry part) uses a subset of Topics 1-8 plus 9-12.
// Re-check the live paper structure and elective choices on hkeaa.edu.hk
// before committing a revision plan to a student.

import type { Subject } from '../../types';

export const hkdseChemistry: Subject = {
  id: 'hkdse-chemistry',
  name: 'Chemistry',
  color: '#a855f7',
  topics: [
    { id: 'hkdse-chem-001', name: 'I. Planet Earth', weight: 3 as const, description: 'Atmosphere, hydrosphere, lithosphere; the origin of the atmosphere and oceans; the impact of human activities on the environment (acid rain, ozone depletion, greenhouse effect, climate change); water treatment and sewage treatment; the chemistry of metals and non-metals in the Earth\'s crust.' },
    { id: 'hkdse-chem-002', name: 'II. Microscopic World I', weight: 4 as const, description: 'Atomic structure (subatomic particles, isotopes, electron arrangement); the periodic table (periodicity across periods and down groups); chemical bonding (ionic, covalent, metallic; Lewis structures; shapes of molecules by VSEPR); intermolecular forces.' },
    { id: 'hkdse-chem-003', name: 'III. Metals', weight: 3 as const, description: 'Occurrence of metals in the Earth; the reactivity series of metals; extraction of metals from their ores (iron, aluminium); the corrosion of metals and its prevention; uses of common alloys.' },
    { id: 'hkdse-chem-004', name: 'IV. Acids and Bases', weight: 4 as const, description: 'Common acids and alkalis; indicators and the pH scale; the behaviour of acids and bases; acid-base reactions (neutralisation, salt preparation); concentration of solutions (mol/dm^3, molarity); strong and weak acids and bases; salt hydrolysis.' },
    { id: 'hkdse-chem-005', name: 'V. Fossil Fuels and Carbon Compounds', weight: 4 as const, description: 'Fossil fuels (coal, petroleum, natural gas); homologous series, structural formulas and naming of carbon compounds (alkanes, alkenes, alkanols, alkanoic acids, esters); the cracking of petroleum and the reforming of naphtha; the use of fossil fuels and the resulting environmental issues (air pollution, acid rain).' },
    { id: 'hkdse-chem-006', name: 'VI. Microscopic World II', weight: 3 as const, description: 'Chemical cells (simple cells, electrochemistry, electrode potentials, the electrochemical series); non-electrolyte solutions and concentration; molar concentration and its calculations; dilution; volumetric analysis.' },
    { id: 'hkdse-chem-007', name: 'VII. Redox Reactions, Chemical Cells and Electrolysis', weight: 4 as const, description: 'Oxidation and reduction in terms of electron transfer and oxidation number; balancing redox equations; common oxidising and reducing agents; electrolysis of molten compounds and aqueous solutions; industrial applications of electrolysis (extraction of aluminium, electroplating).' },
    { id: 'hkdse-chem-008', name: 'VIII. Chemical Reactions and Energy', weight: 3 as const, description: 'Enthalpy change of reactions (exothermic and endothermic); standard enthalpy changes of formation, combustion and neutralisation; Hess\'s law; fuel cells and energy storage.' },
    { id: 'hkdse-chem-009', name: 'IX. Rate of Reaction', weight: 4 as const, description: 'Rate of reaction expressions; factors affecting rate (concentration, surface area, temperature, catalysts); collision theory and activation energy; the Maxwell-Boltzmann distribution; industrial applications.' },
    { id: 'hkdse-chem-010', name: 'X. Chemical Equilibrium', weight: 4 as const, description: 'Reversible reactions and dynamic equilibrium; the equilibrium constant Kc; Le Chatelier\'s principle (concentration, pressure, temperature changes); industrial processes (e.g. the Haber process, the Contact process).' },
    { id: 'hkdse-chem-011', name: 'XI. Chemistry of Carbon Compounds', weight: 4 as const, description: 'Functional groups and homologous series (alcohols, carboxylic acids, esters, amides, amines, carbonyl compounds); isomerism (structural and stereoisomerism); important reactions (substitution, addition, esterification, hydrolysis, polymerisation); synthetic polymers.' },
    { id: 'hkdse-chem-012', name: 'XII. Patterns in the Chemical World', weight: 3 as const, description: 'Variation of properties across a period and down a group; periodicity and chemical bonding; selected inorganic chemistry of Group I, Group VII, transition metals and noble gases; selected organic chemistry of plastics, detergents and pharmaceuticals.' },
    { id: 'hkdse-chem-013', name: 'XIII. Industrial Chemistry (Elective)', weight: 2 as const, description: 'Bulk chemicals (production of ammonia, sulfuric acid, sodium hydroxide, sodium carbonate); petrochemicals; plastics and synthetic polymers; detergents; pharmaceuticals and the pharmaceutical industry.' },
    { id: 'hkdse-chem-014', name: 'XIV. Materials Chemistry (Elective)', weight: 2 as const, description: 'Metals and alloys; ceramics and glasses; polymers and composite materials; liquid crystals and their applications; nanomaterials and their properties; green chemistry and sustainability.' },
    { id: 'hkdse-chem-015', name: 'XV. Analytical Chemistry (Elective)', weight: 2 as const, description: 'Detection of species (qualitative analysis of cations, anions and gases); separation methods (filtration, distillation, solvent extraction, chromatography); volumetric analysis and titration; instrumental methods (colorimetry, pH meters, conductivity meters, mass spectrometry basics).' }
  ]
};