import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: '('chemistry', 'Chemistry')', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Physical Chemistry', weight: 3 as const, description: 'Atomic structure, chemical bonding, thermodynamics, and equilibrium — core concepts for AP EAPCET chemistry.' },
    { id: 'chemis-002', name: 'Organic Chemistry', weight: 3 as const, description: 'Nomenclature, reaction mechanisms, stereochemistry, and named reactions frequently tested in engineering entrance exams.' },
    { id: 'chemis-003', name: 'Inorganic Chemistry', weight: 3 as const, description: 'p-block, d-block, f-block elements, periodic trends, and coordination chemistry with focus on exceptions and trends.' },
    { id: 'chemis-004', name: 'Chemical Bonding', weight: 3 as const, description: 'VSEPR theory, hybridization, MOT, ionic vs covalent bonding, and bond parameters.' },
    { id: 'chemis-005', name: 'Equilibrium', weight: 3 as const, description: 'Acids, bases, buffer solutions, solubility, and common ion effect — often combined with pH calculations.' },
    { id: 'chemis-006', name: 'Electrochemistry', weight: 3 as const, description: 'Nernst equation, galvanic cells, electrolysis, and corrosion with standard electrode potential problems.' },
    { id: 'chemis-007', name: 'Kinetics', weight: 3 as const, description: 'Rate laws, order of reactions, Arrhenius equation, and catalyst effects on reaction rates.' },
    { id: 'chemis-008', name: 'States of Matter', weight: 3 as const, description: 'Gaseous state equations, liquid properties, phase diagrams, and Clapeyron equations.' },
    { id: 'chemis-009', name: 'Solutions', weight: 3 as const, description: 'Raoult\'s law, osmotic pressure, depression in freezing point, and elevation in boiling point.' },
    { id: 'chemis-010', name: 'Haloalkanes and Haloarenes', weight: 3 as const, description: 'SN1/SN2 mechanisms, elimination reactions, and environmental effects of organochlorine compounds.' },
    { id: 'chemis-011', name: 'Biomolecules', weight: 3 as const, description: 'Carbohydrates, proteins, enzymes, nucleic acids, and vitamins with structure-function relationships.' },
    { id: 'chemis-012', name: 'Environmental Chemistry', weight: 3 as const, description: 'Green chemistry, ozone depletion, acid rain, and water pollution — frequently asked in AP EAPCET.' },
    { id: 'chemis-013', name: 'Industrial Chemistry', weight: 3 as const, description: 'Fertilizers, cement, glass, soaps, detergents, and petroleum refining processes.' },
    { id: 'chemis-014', name: 'Coordination Compounds', weight: 3 as const, description: 'Werner\'s theory, VBT, CFT, isomerism, and stability constants of metal complexes.' },
    { id: 'chemis-015', name: 'Nuclear Chemistry', weight: 3 as const, description: 'Radioactivity, half-life, fission/fusion reactions, and applications of radioisotopes in medicine.' },
  ]
};

export { chemistry };