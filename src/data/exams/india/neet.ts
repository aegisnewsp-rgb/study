export interface Topic { id: string; name: string; weight: 1|2|3|4|5; }
export interface Subject { id: string; name: string; topics: Topic[]; color: string; }
export interface DailyTopicItem extends Topic { subject: string; }
export interface RoadmapTemplate { duration: string; totalDays: number; dailyTopics: DailyTopicItem[]; description: string; }
export interface RescueTemplate { name: string; description?: string; duration: string; focusAreas: {subject:string;topics:string[]}[]; strategy: string; }
export interface ExamTemplate { examId: string; examName: string; country: 'india'|'pakistan'|'nigeria'; subjects: Subject[]; durations: Record<string, RoadmapTemplate>; rescueMode: RescueTemplate; lastUpdated: string; officialSource: string;
  description?: string;
  examPattern?: string;
  eligibility?: string; }

function makeRoadmap(subjects: Subject[], durationKey: string, totalDays: number, description: string): RoadmapTemplate {
  const allTopics: DailyTopicItem[] = [];
  for (const s of subjects) { for (const t of s.topics) { allTopics.push({ ...t, subject: s.name }); } }
  const totalTopics = allTopics.length;
  const topicsToCover = Math.min(Math.ceil(totalTopics / totalDays) * 3, totalTopics);
  const selected = allTopics.slice(0, topicsToCover);
  const perDay = Math.ceil(topicsToCover / totalDays);
  const dailyTopics: DailyTopicItem[] = selected.slice(0, perDay);
  return { duration: durationKey, totalDays, dailyTopics, description };
}

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'phy-001', name: 'Units & Measurement', weight: 3 , description: 'Covers SI units, dimensions, significant figures, vernier calipers, screw gauge, and error analysis — foundational for all Physics problem-solving.' },
    { id: 'phy-002', name: 'Motion in 1D', weight: 4 , description: 'Kinematics of straight-line motion — displacement, velocity, acceleration graphs, equations of motion, and scalar/vector quantities.' },
    { id: 'phy-003', name: 'Motion in 2D', weight: 4 , description: 'Projectile motion, relative velocity, and circular motion — 2D motion analysis using vector decomposition.' },
    { id: 'phy-004', name: 'Laws of Motion', weight: 5 , description: "Newton's three laws, free body diagrams, momentum conservation, friction, and pulley problems — core to entire Mechanics." },
    { id: 'phy-005', name: 'Work Energy Power', weight: 5 , description: 'Work done by forces, kinetic and potential energy, work-energy theorem, conservative forces, and power calculations.' },
    { id: 'phy-006', name: 'Rotational Motion', weight: 4 , description: 'Torque, moment of inertia, angular momentum, rotational kinetic energy, and equations of rotational kinematics.' },
    { id: 'phy-007', name: 'Gravitation', weight: 4 , description: "Newton's law of gravitation, gravitational field and potential, Kepler's laws, orbital velocity, and escape velocity." },
    { id: 'phy-008', name: 'Mechanical Properties', weight: 3 , description: "Elasticity — stress, strain, Young's modulus, bulk modulus, shear modulus, and Hooke's law." },
    { id: 'phy-009', name: 'Fluid Mechanics', weight: 3 , description: "Pascal's law, buoyancy, Bernoulli's principle, surface tension, viscosity, and Stokes' law." },
    { id: 'phy-010', name: 'Thermal Properties', weight: 4 , description: 'Heat, temperature, thermal expansion, calorimetry, specific heat, latent heat, and heat transfer.' },
    { id: 'phy-011', name: 'Thermodynamics', weight: 5 , description: 'Laws of thermodynamics, heat engines, refrigerators, entropy, isothermal and adiabatic processes.' },
    { id: 'phy-012', name: 'Kinetic Theory', weight: 3 , description: 'Kinetic theory of gases, RMS velocity, degrees of freedom, equipartition theorem, and gas laws.' },
    { id: 'phy-013', name: 'SHM', weight: 4 , description: 'Simple harmonic motion — displacement, velocity, acceleration, spring-mass system, pendulum, and energy in SHM.' },
    { id: 'phy-014', name: 'Waves', weight: 4 , description: 'Wave characteristics, wave equation, speed of sound, Doppler effect, standing waves, and resonance.' },
    { id: 'phy-015', name: 'Electrostatics', weight: 5 , description: "Coulomb's law, electric field, electric dipole, Gauss's law, electric potential, and capacitance." },
    { id: 'phy-016', name: 'Capacitance', weight: 4 , description: 'Capacitors, series and parallel combinations, dielectric materials, energy stored in capacitors, and time constant in RC circuits.' },
    { id: 'phy-017', name: 'Current Electricity', weight: 5 , description: "Electric current, Ohm's law, resistivity, combination of resistors, Kirchhoff's laws, and DC circuits." },
    { id: 'phy-018', name: 'Moving Charges', weight: 4 , description: 'Magnetic force on moving charges, Biot-Savart law, cyclotron, and torque on current loops.' },
    { id: 'phy-019', name: 'Magnetism', weight: 4 , description: "Earth's magnetism, magnetic fields due to straight wire, solenoid, Bar magnet, and magnetic dipole moment." },
    { id: 'phy-020', name: 'EMI', weight: 5 , description: "Electromagnetic induction — Faraday's law, Lenz's law, motional EMF, self and mutual inductance, and AC generators." },
    { id: 'phy-021', name: 'AC', weight: 4 , description: 'Alternating current, RMS value, phasor diagrams, LCR circuits, resonance, transformers, and power in AC.' },
    { id: 'phy-022', name: 'EM Waves', weight: 3 , description: 'Electromagnetic spectrum, properties of EM waves, displacement current, and wave propagation characteristics.' },
    { id: 'phy-023', name: 'Ray Optics', weight: 5 , description: 'Reflection, refraction, spherical mirrors, lenses, prism dispersion, total internal reflection, and optical instruments.' },
    { id: 'phy-024', name: 'Wave Optics', weight: 4 , description: "Interference, Young's double slit experiment, diffraction, single slit diffraction, and polarization." },
    { id: 'phy-025', name: 'Dual Nature', weight: 5 , description: "Photoelectric effect, Einstein's equation, photon concept, de Broglie wavelength, and wave-particle duality." },
    { id: 'phy-026', name: 'Atoms', weight: 3 , description: 'Bohr model of hydrogen atom, spectral lines, energy levels, Rydberg formula, and atomic structure.' },
    { id: 'phy-027', name: 'Nuclei', weight: 3 , description: 'Nuclear composition, binding energy, mass defect, nuclear fusion and fission, radioactivity, decay laws, and half-life.' },
    { id: 'phy-028', name: 'Semiconductors', weight: 3 , description: 'Semiconductor physics, diodes, transistors, logic gates, p-n junction, and Boolean algebra basics.' },
    { id: 'phy-029', name: 'Communication', weight: 2 , description: 'Communication systems — modulation, amplitude modulation, frequency modulation, antennas, and signal propagation.' },
  ]
};

const physicalChemistry: Subject = {
  id: 'physical-chemistry', name: 'Physical Chemistry', color: '#10b981',
  topics: [
    { id: 'pc-001', name: 'Some Basic Concepts', weight: 3 , description: 'Laws of chemical combination, mole concept, molarity, normality, empirical and molecular formulae, stoichiometry, and limiting reagent.' },
    { id: 'pc-002', name: 'Atomic Structure', weight: 4 , description: "Bohr model, quantum numbers, electronic configuration, de Broglie wavelength, Heisenberg's uncertainty principle, and orbital shapes." },
    { id: 'pc-003', name: 'Chemical Bonding', weight: 5 , description: 'Ionic, covalent, metallic bonds, VSEPR theory, hybridisation, MOT, hydrogen bonding, and dipole moment.' },
    { id: 'pc-004', name: 'Classification', weight: 3 , description: 'Periodicity in properties, modern periodic table, s/p/d/f blocks, ionization enthalpy, electron affinity, and atomic radii trends.' },
    { id: 'pc-005', name: 'States of Matter', weight: 3 , description: 'Gaseous state — gas laws, kinetic theory, real gas corrections, van der Waals equation, and liquefaction.' },
    { id: 'pc-006', name: 'Thermodynamics', weight: 5 , description: "Internal energy, enthalpy, heat capacity, Hess's law, spontaneity, Gibbs free energy, and heat engines." },
    { id: 'pc-007', name: 'Equilibrium', weight: 4 , description: "Chemical equilibrium, Le Chatelier's principle, equilibrium constant, ionic equilibrium, pH, buffer solutions, and solubility product." },
    { id: 'pc-008', name: 'Redox', weight: 3 , description: 'Oxidation-reduction reactions, oxidation number, balancing redox equations, electrochemical cells, and standard electrode potentials.' },
    { id: 'pc-009', name: 'Electrochemistry', weight: 4 , description: "Galvanic cells, electrolytic cells, Nernst equation, conductance, Kohlrausch law, and Faraday's laws of electrolysis." },
    { id: 'pc-010', name: 'Kinetics', weight: 4 , description: 'Rate of reaction, rate laws, order and molecularity, Arrhenius equation, activation energy, and half-life.' },
    { id: 'pc-011', name: 'Surface Chemistry', weight: 2 , description: 'Adsorption, catalysis, colloids, Brownian motion, Tyndall effect, gel, and emulsions.' },
    { id: 'pc-012', name: 'Solutions', weight: 3 , description: "Concentration terms, Raoult's law, abnormal molecular mass, boiling point elevation, and freezing point depression." },
    { id: 'pc-013', name: 'Colloidal', weight: 2 , description: 'Classification of colloids, preparation, properties, coagulation, and applications of colloidal systems.' },
  ]
};

const organicChemistry: Subject = {
  id: 'organic-chemistry', name: 'Organic Chemistry', color: '#059669',
  topics: [
    { id: 'oc-001', name: 'Hydrocarbons', weight: 4 , description: 'Alkanes, alkenes, alkynes — preparation, properties, isomerism, and reaction mechanisms including free radical halogenation.' },
    { id: 'oc-002', name: 'Haloalkanes', weight: 3 , description: 'Classification, nucleophilic substitution SN1 and SN2, elimination reactions E1 and E2, and chiral molecules.' },
    { id: 'oc-003', name: 'Alcohols Phenol Ether', weight: 3 , description: 'Alcohols, phenols, and ethers — preparation, properties, distinction between them, and important reactions.' },
    { id: 'oc-004', name: 'Aldehydes Ketones', weight: 3 , description: 'Aldehydes and ketones — nucleophilic addition, Cannizzaro reaction, aldol condensation, and tests for carbonyl compounds.' },
    { id: 'oc-005', name: 'Carboxylic Acids', weight: 3 , description: 'Acidity of carboxylic acids, esterification, decarboxylation, and conversion to amides and anhydrides.' },
    { id: 'oc-006', name: 'Amines', weight: 3 , description: 'Classification of amines, basicity comparison, preparation methods, and nucleophilic substitution reactions.' },
    { id: 'oc-007', name: 'Biomolecules', weight: 3 , description: 'Carbohydrates, proteins, enzymes, nucleic acids — structure, classification, and biological functions.' },
    { id: 'oc-008', name: 'Polymers', weight: 2 , description: 'Classification of polymers, addition and condensation polymerisation, biodegradable polymers, and commercial plastics.' },
    { id: 'oc-009', name: 'Environmental Chemistry', weight: 2 , description: 'Environmental pollution — air, water, and soil; greenhouse effect, ozone depletion, and waste management.' },
    { id: 'oc-010', name: 'Chemistry in Everyday', weight: 1 , description: 'Drugs, detergents, soaps, food additives, antioxidants, and green chemistry principles.' },
  ]
};

const inorganicChemistry: Subject = {
  id: 'inorganic-chemistry', name: 'Inorganic Chemistry', color: '#14b8a6',
  topics: [
    { id: 'ic-001', name: 'Periodic Table', weight: 4, description: 'Modern periodic table, s/p/d/f block elements, trends in atomic radius, ionisation enthalpy, electron affinity, electronegativity, and diagonal relationships.' },
    { id: 'ic-002', name: 's-Block', weight: 3, description: 'Alkali and alkaline earth metals — compounds, uses, biological importance, and diagonal relationship between Li and Mg.' },
    { id: 'ic-003', name: 'p-Block', weight: 4, description: 'Group 13-18 elements — boron, carbon family, nitrogen, oxygen, halogens, noble gases — compounds, trends, and important reactions.' },
    { id: 'ic-004', name: 'd-Block', weight: 4, description: 'Transition metals — electronic configuration, properties, oxidation states, variable valency, inner transition metals, and magnetic properties.' },
    { id: 'ic-005', name: 'f-Block', weight: 2, description: 'Lanthanides and actinides — electronic configurations, oxidation states, lanthanide contraction, and actinide contraction effects.' },
    { id: 'ic-006', name: 'Metallurgy', weight: 3, description: 'Occurrence of metals, concentration of ores, extraction of iron, copper, and aluminium, refining methods, and environmental effects.' },
    { id: 'ic-007', name: 'Environmental Chemistry', weight: 3, description: 'Environmental pollution — air, water, and soil pollutants, greenhouse effect, ozone depletion, acid rain, and waste management.' },
  ]
};

const botany: Subject = {
  id: 'botany', name: 'Botany', color: '#8b5cf6',
  topics: [
    { id: 'bot-001', name: 'Cell', weight: 4 , description: 'Cell theory, prokaryotic vs eukaryotic cells, cell organelles, and cell membrane structure — the fundamental unit of life.' },
    { id: 'bot-002', name: 'Biomolecules', weight: 3 , description: 'Carbohydrates, proteins, lipids, nucleic acids — structure, classification, and biological functions of biomolecules.' },
    { id: 'bot-003', name: 'Enzymes', weight: 2 , description: 'Enzyme structure, mechanism of action, Michaelis-Menten kinetics, co-factors, and enzyme inhibition.' },
    { id: 'bot-004', name: 'Cell Division', weight: 4 , description: 'Mitosis and meiosis — stages, significance, cell cycle regulation, and cancer connection.' },
    { id: 'bot-005', name: 'Variety of Life', weight: 2 , description: 'Biodiversity, taxonomy, classification of living organisms, binomial nomenclature, and taxonomic categories.' },
    { id: 'bot-006', name: 'Kingdom Monera', weight: 2 , description: 'Bacteria — structure, reproduction, classification (archaebacteria, eubacteria), and economic importance.' },
    { id: 'bot-007', name: 'Kingdom Protista', weight: 2 , description: 'Unicellular eukaryotes — protozoa, algae, slime molds; nutrition, locomotion, and reproduction.' },
    { id: 'bot-008', name: 'Kingdom Fungi', weight: 2 , description: 'Fungi — structure, reproduction (asexual and sexual), nutrition, and commercial uses; lichens and mycorrhiza.' },
    { id: 'bot-009', name: 'Plant Kingdom', weight: 3 , description: 'Classification of plants — algae, bryophytes, pteridophytes, gymnosperms, angiosperms; life cycle patterns.' },
    { id: 'bot-010', name: 'Anatomy', weight: 3 , description: 'Plant tissues, internal structure of root, stem, leaf, secondary growth, and wood anatomy in plants.' },
    { id: 'bot-011', name: 'Transport', weight: 3 , description: 'Transport in plants — water absorption, ascent of sap, transpiration pull, and phloem transport.' },
    { id: 'bot-012', name: 'Nutrition', weight: 3 , description: 'Mineral nutrition, essential nutrients, deficiency diseases, and nitrogen cycle in plants.' },
    { id: 'bot-013', name: 'Gas Exchange', weight: 2 , description: 'Mechanism of breathing in plants, stomatal function, and gas exchange during photosynthesis.' },
    { id: 'bot-014', name: 'Photosynthesis', weight: 5 , description: 'Light reactions, Calvin cycle, C3 and C4 pathways, photorespiration, and factors affecting photosynthesis.' },
    { id: 'bot-015', name: 'Respiration', weight: 4 , description: 'Glycolysis, Krebs cycle, electron transport chain, anaerobic respiration, and energy yield in plants.' },
    { id: 'bot-016', name: 'Growth', weight: 2 , description: 'Plant growth regulators — auxins, gibberellins, cytokinins, ethylene, abscisic acid; photoperiodism and vernalisation.' },
    { id: 'bot-017', name: 'Reproduction Asexual', weight: 3 , description: 'Asexual reproduction in plants — vegetative propagation, budding, fragmentation, and spore formation.' },
    { id: 'bot-018', name: 'Reproduction Sexual', weight: 3 , description: 'Angiosperm reproduction — pollen-pistil interaction, double fertilisation, seed and fruit formation.' },
    { id: 'bot-019', name: 'Inheritance', weight: 5 , description: "Mendel's laws, monohybrid and dihybrid crosses, linkage, crossing over, and chromosome theory of inheritance." },
    { id: 'bot-020', name: 'Evolution', weight: 3 , description: "Darwin's theory, evidence of evolution, natural selection, speciation, Hardy-Weinberg principle, and human evolution." },
    { id: 'bot-021', name: 'Biotechnology', weight: 3 , description: 'Recombinant DNA technology, PCR, gene cloning, transgenic organisms, and ethical issues.' },
    { id: 'bot-022', name: 'Ecology', weight: 3 , description: 'Ecosystem, energy flow, food chains, ecological pyramids, biogeochemical cycles, and ecological succession.' },
    { id: 'bot-023', name: 'Environmental Issues', weight: 2 , description: 'Pollution, global warming, ozone depletion, solid waste management, and conservation strategies.' },
  ]
};

const zoology: Subject = {
  id: 'zoology', name: 'Zoology', color: '#ef4444',
  topics: [
    { id: 'zoo-001', name: 'Animal Kingdom', weight: 4 , description: 'Classification of animals — phylum-wise features, segmentation, coelom, symmetry, and reproductive patterns.' },
    { id: 'zoo-002', name: 'Phylum', weight: 3 , description: 'Detailed study of major animal phyla — Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Chordata.' },
    { id: 'zoo-003', name: 'Body Fluids', weight: 4 , description: 'Circulatory system — heart structure, cardiac cycle, blood groups, ABO and Rh factor, and circulation patterns.' },
    { id: 'zoo-004', name: 'Excretory', weight: 4 , description: 'Kidney function, nephron, urine formation, dialysis, and osmoregulation in humans.' },
    { id: 'zoo-005', name: 'Neural Control', weight: 5 , description: 'Neuron structure, nerve impulse conduction, synapse, neurotransmitters, and reflex arcs in nervous system.' },
    { id: 'zoo-006', name: 'Chemical Coordination', weight: 5 , description: 'Endocrine glands, hormones, feedback mechanisms, hypothalamus, and hormonal disorders in humans.' },
    { id: 'zoo-007', name: 'Human Reproduction', weight: 4 , description: 'Male and female reproductive systems, gametogenesis, menstrual cycle, fertilisation, pregnancy, and reproductive health.' },
    { id: 'zoo-008', name: 'Growth Development', weight: 2 , description: 'Human embryonic development, blastulation, gastrulation, organogenesis, and birth defects.' },
    { id: 'zoo-009', name: 'Inheritance', weight: 5 , description: "Mendel's laws, monohybrid and dihybrid crosses, linkage, crossing over, and chromosomal disorders." },
    { id: 'zoo-010', name: 'Evolution', weight: 3 , description: "Darwin's theory, evidence of evolution, natural selection, speciation, Hardy-Weinberg principle, and human evolution." },
    { id: 'zoo-011', name: 'Human Health Disease', weight: 4 , description: 'Common diseases — malaria, dengue, tuberculosis, AIDS; immunity, vaccines, and public health measures.' },
    { id: 'zoo-012', name: 'Human Welfare', weight: 2 , description: 'Common human diseases,寄生虫, bacterial and viral infections, and public health in India.' },
    { id: 'zoo-013', name: 'Biotechnology', weight: 3 , description: 'Recombinant DNA technology, PCR, gene cloning, transgenic organisms, and ethical issues in biomedicine.' },
    { id: 'zoo-014', name: 'Health Disease', weight: 2 , description: 'Human health — nutrition, mental health, infectious diseases, and first aid basics.' },
    { id: 'zoo-015', name: 'Sensory Organs', weight: 3 , description: 'Eye, ear, nose, tongue, skin — structure and function of sensory receptors and signal transmission.' },
  ]
};

const subjects = [physics, physicalChemistry, organicChemistry, inorganicChemistry, botany, zoology];

const DURATIONS = ['1h','2h','3h','5h','12h','1d','2d','3d','5d','7d','10d','2w','1mo','2mo','3mo','6mo','1yr','2yr'];
const DUR_MAP: Record<string, {days: number; desc: string}> = {
  '1h':{days:1,desc:'One-hour speed-run covering highest-yield topics.'},
  '2h':{days:1,desc:'Two-hour rapid review of must-know concepts.'},
  '3h':{days:1,desc:'Three-hour focused session on critical topics.'},
  '5h':{days:1,desc:'Five-hour intensive sprint for quick learners.'},
  '12h':{days:1,desc:'Half-day comprehensive coverage of fundamentals.'},
  '1d':{days:1,desc:'One-day intensive sprint covering highest-weight topics.'},
  '2d':{days:2,desc:'Two-day rapid revision on high-weight topics.'},
  '3d':{days:3,desc:'Three-day intensive covering core concepts.'},
  '5d':{days:5,desc:'Five-day comprehensive focused preparation.'},
  '7d':{days:7,desc:'One-week intensive covering all major topics.'},
  '10d':{days:10,desc:'Ten-day detailed plan with thorough coverage.'},
  '2w':{days:14,desc:'Two-week balanced plan with revision time.'},
  '1mo':{days:30,desc:'One-month comprehensive preparation plan.'},
  '2mo':{days:60,desc:'Two-month detailed study plan with revision.'},
  '3mo':{days:90,desc:'Three-month extensive prep with mock tests.'},
  '6mo':{days:180,desc:'Six-month complete prep with stronghold building.'},
  '1yr':{days:365,desc:'One-year comprehensive journey to mastery.'},
  '2yr':{days:730,desc:'Two-year relaxed prep for deep understanding.'},
};
const durations: Record<string, RoadmapTemplate> = {};
for (const d of DURATIONS) { durations[d] = makeRoadmap(subjects, d, DUR_MAP[d].days, DUR_MAP[d].desc); }

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint covering only the highest-yield topics most likely to appear in the exam.',
  duration: '2d',
  focusAreas: [
    { subject: 'Physics', topics: ['Electrostatics', 'Current Electricity', 'EMI', 'Ray Optics', 'Laws of Motion'] },
    { subject: 'Physical Chemistry', topics: ['Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Electrochemistry'] },
    { subject: 'Organic Chemistry', topics: ['Hydrocarbons', 'Aldehydes Ketones', 'Carboxylic Acids', 'Amines'] },
    { subject: 'Botany', topics: ['Cell', 'Photosynthesis', 'Inheritance', 'Cell Division'] },
    { subject: 'Zoology', topics: ['Neural Control', 'Chemical Coordination', 'Inheritance', 'Human Reproduction'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas and concepts.',
};

const exam: ExamTemplate = {
  examId: 'neet',
  examName: 'NEET UG',
  country: 'india',
  description: `NEET\ UG\ is\ India's\ single\-window\ entrance\ exam\ for\ admission\ to\ MBBS,\ BDS,\ AYUSH\ and\ other\ medical\ courses\ in\ government\ and\ private\ colleges\.\ Conducted\ by\ NTA,\ it\ tests\ Physics,\ Chemistry,\ and\ Biology\ from\ the\ NCERT\ syllabus\.`,
  examPattern: "200 MCQs — Physics(45), Chemistry(45), Biology(90), 3h 20min, 720 marks total. 4 marks per correct answer, 1 mark deducted for wrong answer.",
  eligibility: "Class 12 PCB (Physics, Chemistry, Biology) with minimum 50% aggregate for general category (40% for SC/ST/OBC). Lower age limit 17 years as of December 31 of admission year.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://neet.ntaonline.in',
};
export default exam;
