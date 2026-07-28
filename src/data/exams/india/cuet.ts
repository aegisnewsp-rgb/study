import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from '../types';


import { makeRoadmap } from '../_lib/roadmap';
const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'phy-001', name: 'Units & Measurement', weight: 3 },
    { id: 'phy-002', name: 'Motion in 1D', weight: 4 },
    { id: 'phy-003', name: 'Motion in 2D', weight: 4 },
    { id: 'phy-004', name: 'Laws of Motion', weight: 5 },
    { id: 'phy-005', name: 'Work Energy Power', weight: 5 },
    { id: 'phy-006', name: 'Rotational Motion', weight: 4 },
    { id: 'phy-007', name: 'Gravitation', weight: 4 },
    { id: 'phy-008', name: 'Mechanical Properties', weight: 3 },
    { id: 'phy-009', name: 'Fluid Mechanics', weight: 3 },
    { id: 'phy-010', name: 'Thermal Properties', weight: 4 },
    { id: 'phy-011', name: 'Thermodynamics', weight: 5 },
    { id: 'phy-012', name: 'Kinetic Theory', weight: 3 },
    { id: 'phy-013', name: 'SHM', weight: 4 },
    { id: 'phy-014', name: 'Waves', weight: 4 },
    { id: 'phy-015', name: 'Electrostatics', weight: 5 },
    { id: 'phy-016', name: 'Capacitance', weight: 4 },
    { id: 'phy-017', name: 'Current Electricity', weight: 5 },
    { id: 'phy-018', name: 'Moving Charges', weight: 4 },
    { id: 'phy-019', name: 'Magnetism', weight: 4 },
    { id: 'phy-020', name: 'EMI', weight: 5 },
    { id: 'phy-021', name: 'AC', weight: 4 },
    { id: 'phy-022', name: 'EM Waves', weight: 3 },
    { id: 'phy-023', name: 'Ray Optics', weight: 5 },
    { id: 'phy-024', name: 'Wave Optics', weight: 4 },
    { id: 'phy-025', name: 'Dual Nature', weight: 5 },
    { id: 'phy-026', name: 'Atoms', weight: 3 },
    { id: 'phy-027', name: 'Nuclei', weight: 3 },
    { id: 'phy-028', name: 'Semiconductors', weight: 3 },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chem-001', name: 'Some Basic Concepts', weight: 3 },
    { id: 'chem-002', name: 'Atomic Structure', weight: 4 },
    { id: 'chem-003', name: 'Chemical Bonding', weight: 5 },
    { id: 'chem-004', name: 'Classification', weight: 3 },
    { id: 'chem-005', name: 'States of Matter', weight: 3 },
    { id: 'chem-006', name: 'Thermodynamics', weight: 5 },
    { id: 'chem-007', name: 'Equilibrium', weight: 4 },
    { id: 'chem-008', name: 'Redox', weight: 3 },
    { id: 'chem-009', name: 'Electrochemistry', weight: 4 },
    { id: 'chem-010', name: 'Kinetics', weight: 4 },
    { id: 'chem-011', name: 'Surface Chemistry', weight: 2 },
    { id: 'chem-012', name: 'Solutions', weight: 3 },
    { id: 'chem-013', name: 'Colloidal', weight: 2 },
    { id: 'chem-014', name: 'Periodic Table', weight: 4 },
    { id: 'chem-015', name: 's-Block', weight: 3 },
    { id: 'chem-016', name: 'p-Block', weight: 4 },
    { id: 'chem-017', name: 'd-Block', weight: 4 },
    { id: 'chem-018', name: 'f-Block', weight: 2 },
    { id: 'chem-019', name: 'Metallurgy', weight: 3 },
    { id: 'chem-020', name: 'Hydrocarbons', weight: 4 },
    { id: 'chem-021', name: 'Haloalkanes', weight: 3 },
    { id: 'chem-022', name: 'Alcohols Phenol Ether', weight: 3 },
    { id: 'chem-023', name: 'Aldehydes Ketones', weight: 3 },
    { id: 'chem-024', name: 'Carboxylic Acids', weight: 3 },
    { id: 'chem-025', name: 'Amines', weight: 3 },
    { id: 'chem-026', name: 'Biomolecules', weight: 3 },
    { id: 'chem-027', name: 'Polymers', weight: 2 },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#f59e0b',
  topics: [
    { id: 'math-001', name: 'Sets Relations', weight: 3, description: "Sets, Relations & Functions: Set operations (union, intersection, complement), Venn diagrams, types of relations (reflexive, symmetric, transitive), types of functions (one-one, onto, bijective), and inverse trigonometric functions." },
    { id: 'math-002', name: 'Trigonometry', weight: 5, description: "Trigonometry: Trigonometric ratios and identities, conditional identities, solutions of triangles,Height and Distance, and inverse trigonometry — all essential for solving geometry and algebraic problems." },
    { id: 'math-003', name: 'Inverse Trig', weight: 3, description: "Inverse Trigonometric Functions: Domain, range, and principal value branches of inverse trig functions; identities involving inverse trig; and solving equations with inverse trig functions." },
    { id: 'math-004', name: 'Limits', weight: 5, description: "Limits: Algebraic and trigonometric limits, L'Hospital's rule, limits at infinity, indeterminate forms, and the sandwich theorem — foundational for calculus." },
    { id: 'math-005', name: 'Continuity', weight: 4, description: "Continuity: Continuity at a point and over an interval, types of discontinuities, algebra of continuous functions, and the intermediate value theorem." },
    { id: 'math-006', name: 'Differentiability', weight: 4, description: "Differentiability: Derivative as rate of change, left and right derivatives, relationship between continuity and differentiability, and identifying non-differentiable points." },
    { id: 'math-007', name: 'Differentiation', weight: 5, description: "Differentiation: Derivatives of standard functions, product rule, quotient rule, chain rule, implicit differentiation, parametric differentiation, and logarithmic differentiation." },
    { id: 'math-008', name: 'AOD', weight: 5, description: "Applications of Derivatives: Tangents and normals, increasing/decreasing functions, maxima and minima using first and second derivative tests, and Rolle's and Lagrange's mean value theorems." },
    { id: 'math-009', name: 'Indefinite Integrals', weight: 4, description: "Indefinite Integrals: Integration as antiderivative, standard integrals, methods of integration (substitution, partial fractions, integration by parts), and trigonometric integrals." },
    { id: 'math-010', name: 'Definite Integrals', weight: 4, description: "Definite Integrals: Fundamental theorem of calculus, properties of definite integrals, evaluation using substitution and parts, and area under curves using definite integrals." },
    { id: 'math-011', name: 'DE', weight: 3, description: "Differential Equations: Order and degree of DE, formation of differential equations, solving linear and Bernoulli equations, homogeneous equations, and applications (growth/decay, mixture problems)." },
    { id: 'math-012', name: 'Vector Algebra', weight: 4, description: "Vector Algebra: Vector operations (addition, subtraction, scalar multiplication), dot product and cross product, scalar and vector triple product, and geometric applications." },
    { id: 'math-013', name: '3D Geometry', weight: 4, description: "3D Geometry: Direction cosines and ratios, straight lines in 3D (various forms), plane equations, distance between point and plane, angle between lines and planes, and sphere equations." },
    { id: 'math-014', name: 'Probability', weight: 4, description: "Probability: Classical and axiomatic probability, conditional probability and Bayes' theorem, independence of events, random variables, and binomial distribution." },
    { id: 'math-015', name: 'Permutations', weight: 3, description: "Permutations & Combinations: Fundamental principle of counting, permutations of distinct and identical objects, combinations, and circular permutations — essential for counting problems." },
    { id: 'math-016', name: 'Binomial', weight: 3, description: "Binomial Theorem: Binomial expansion for positive integer index, general term, middle term, greatest term, and using binomial expansion for approximations." },
    { id: 'math-017', name: 'Sequences', weight: 4, description: "Sequences & Series: Arithmetic, geometric, and harmonic progressions, special series sums, arithmetic and geometric means, and convergence of infinite series." },
    { id: 'math-018', name: 'Matrices', weight: 4, description: "Matrices: Types of matrices, operations (addition, multiplication, transpose), adjoint and inverse of a matrix, rank of a matrix, and solving linear equations using matrix methods." },
    { id: 'math-019', name: 'Determinants', weight: 3, description: "Determinants: Properties of determinants, evaluation using row and column operations, minors and cofactors, product of determinants, and solving simultaneous linear equations using Cramer's rule." },
    { id: 'math-020', name: 'Complex Numbers', weight: 5, description: "Complex Numbers: Argand plane representation, modulus and argument, polar form, de Moivre's theorem, cube roots of unity, and solving polynomial equations with complex roots." },
    { id: 'math-021', name: 'Parabola', weight: 4, description: "Parabola: Standard equations (y² = 4ax, x² = 4ay), focus, directrix, latus rectum, equations of tangent and normal, and parametric equations — part of conic sections." },
    { id: 'math-022', name: 'Ellipse', weight: 3, description: "Ellipse: Standard equation (x²/a² + y²/b² = 1), eccentricity, focus, directrix, latus rectum, tangent and normal equations, and parametric form in conic sections." },
    { id: 'math-023', name: 'Hyperbola', weight: 3, description: "Hyperbola: Standard equation (x²/a² - y²/b² = 1), eccentricity, conjugate hyperbola, asymptotes, tangent and normal, and rectangular hyperbola (xy = c²)." },
    { id: 'math-024', name: 'Circle', weight: 4, description: "Circle: Standard and general equation, centre and radius, equation of tangent and normal, length of tangent from a point to a circle, and radical axis for intersecting circles." },
    { id: 'math-025', name: 'Straight Lines', weight: 3, description: "Straight Lines: Various forms (slope-intercept, point-slope, two-point), angle between lines, conditions for parallel and perpendicular lines, distance from point to line, and family of lines." },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#8b5cf6',
  topics: [
    { id: 'eng-001', name: 'Vocabulary', weight: 4 },
    { id: 'eng-002', name: 'Grammar', weight: 4 },
    { id: 'eng-003', name: 'Comprehension', weight: 5 },
    { id: 'eng-004', name: 'Writing Skills', weight: 4 },
    { id: 'eng-005', name: 'Idioms Phrases', weight: 3 },
    { id: 'eng-006', name: 'Synonyms Antonyms', weight: 3 },
    { id: 'eng-007', name: 'Fill in Blanks', weight: 3 },
    { id: 'eng-008', name: 'Para Jumbles', weight: 3 },
    { id: 'eng-009', name: 'Cloze Test', weight: 3 },
    { id: 'eng-010', name: 'Sentence Correction', weight: 4 },
    { id: 'eng-011', name: 'Active Passive', weight: 3 },
    { id: 'eng-012', name: 'Direct Indirect', weight: 3 },
    { id: 'eng-013', name: 'Reading Comprehension', weight: 5 },
    { id: 'eng-014', name: 'One Word Substitution', weight: 3 },
    { id: 'eng-015', name: 'Tenses', weight: 3 },
  ]
};

const generalTest: Subject = {
  id: 'general-test', name: 'General Test', color: '#ef4444',
  topics: [
    { id: 'gt-001', name: 'Current Affairs', weight: 4 },
    { id: 'gt-002', name: 'General Knowledge', weight: 4 },
    { id: 'gt-003', name: 'Reasoning', weight: 4 },
    { id: 'gt-004', name: 'Static GK', weight: 3 },
    { id: 'gt-005', name: 'Geography', weight: 4 },
    { id: 'gt-006', name: 'History', weight: 4 },
    { id: 'gt-007', name: 'Polity', weight: 4 },
    { id: 'gt-008', name: 'Economics', weight: 3 },
    { id: 'gt-009', name: 'General Science', weight: 3 },
    { id: 'gt-010', name: 'Computer Awareness', weight: 3 },
    { id: 'gt-011', name: 'Logical Reasoning', weight: 4 },
    { id: 'gt-012', name: 'Analytical Reasoning', weight: 3 },
    { id: 'gt-013', name: 'Data Interpretation', weight: 4 },
    { id: 'gt-014', name: 'Sports & Culture', weight: 2 },
    { id: 'gt-015', name: 'Awards & Honours', weight: 2 },
  ]
};

const subjects = [physics, chemistry, mathematics, english, generalTest];

const DURATIONS = ['1h','2h','3h','5h','12h','1d','2d','3d','5d','7d','10d','2w','1mo','2mo','3mo','6mo','1yr','2yr'];
const DUR_MAP: Record<string, {days: number; desc: string}> = {
  
  '1h':  { days: 1,   desc: '60-minute exam-eve sprint: only the 4 highest-weight topics, formula-card style.' },
  '2h':  { days: 1,   desc: 'Two-hour priority pass — 6 top-weight topics, one quick example each, no theory deep-dive.' },
  '3h':  { days: 1,   desc: 'Three-hour focus block — 9 highest-yield topics, brief concept + 1-2 worked examples per topic.' },
  '5h':  { days: 1,   desc: 'Five-hour intensive — 12 top-weight topics across all subjects, formula recall + practice questions.' },
  '12h': { days: 1,   desc: 'Half-day crash — 30% syllabus coverage, weight-sorted, ~20 min/topic across all subjects.' },
  '1d':  { days: 1,   desc: 'One-day intensive — top 20% of syllabus by weight, ~25 min/topic, single-pass with quick recall.' },
  '2d':  { days: 2,   desc: 'Two-day rapid revision — 30% coverage, weight-sorted, ~30 min/topic, balanced across subjects.' },
  '3d':  { days: 3,   desc: 'Three-day plan — 40% syllabus coverage, ~30-40 min/topic, includes brief recap each evening.' },
  '5d':  { days: 5,   desc: 'Five-day plan — 55% coverage of weighted topics, ~3 hours/day, room for one mock test on day 5.' },
  '7d':  { days: 7,   desc: 'One-week plan — 70% coverage, ~3-4 hours/day, weight-sorted, two practice sessions over the week.' },
  '10d': { days: 10,  desc: 'Ten-day plan — 85% coverage, ~3 hours/day, daily revision of prior topic, two mocks.' },
  '2w':  { days: 14,  desc: 'Two-week plan — full syllabus, ~3 hours/day, last 2 days for full mocks + revision.' },
  '1mo': { days: 30,  desc: 'One-month plan — full syllabus at ~2-3 topics/day, weekly mocks, last week for revision sprint.' },
  '2mo': { days: 60,  desc: 'Two-month plan — full syllabus + topic-wise practice, alternate-week mocks, dedicated weak-topic sessions.' },
  '3mo': { days: 90,  desc: 'Three-month plan — first month learn, second month practice + mocks, third month revision + mock cycles.' },
  '6mo': { days: 180, desc: 'Six-month plan — foundation phase (8 weeks) + advanced phase (10 weeks) + revision phase (6 weeks).' },
  '1yr': { days: 365, desc: 'One-year plan — full syllabus twice (concept pass + advanced pass), monthly mocks, ~2 hours/day baseline.' },
  '2yr': { days: 730, desc: 'Two-year plan — Year 1 foundation + concept depth, Year 2 advanced + mocks + final revision; ~2 hours/day.' },
};
const durations: Record<string, RoadmapTemplate> = {};
for (const d of DURATIONS) { durations[d] = makeRoadmap(subjects, d, DUR_MAP[d].days, DUR_MAP[d].desc); }

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint covering only the highest-yield topics most likely to appear in the exam.',
  duration: '2d',
  focusAreas: [
    { subject: 'Physics', topics: ['Electrostatics', 'Current Electricity', 'EMI', 'Ray Optics', 'Laws of Motion'] },
    { subject: 'Chemistry', topics: ['Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Organic Chemistry'] },
    { subject: 'Mathematics', topics: ['Calculus', 'Algebra', 'Coordinate Geometry'] },
    { subject: 'English', topics: ['Comprehension', 'Grammar', 'Writing Skills'] },
    { subject: 'General Test', topics: ['Current Affairs', 'Reasoning', 'General Knowledge'] },
  ],
  strategy: 'Focus on NCERT fundamentals. Practice CUET-specific MCQs. Review Language and General Test sections.',
};

const exam: ExamTemplate = {
  examId: 'cuet',
  examName: 'CUET UG',
  country: 'india',
  description:
    "The Common University Entrance Test (CUET UG) is India's central undergraduate admissions exam for participating central, state, deemed and private universities — including major campuses such as University of Delhi, BHU, AMU, JNU and many more that list CUET scores in their admission policies. Conducted by the National Testing Agency (NTA), CUET replaced a patchwork of university-specific entrances for many programmes from 2022 onward. The paper is modular: language tests, domain subjects aligned to Class 12 curricula, and an optional General Test, so you choose subject combinations that match target university programme codes rather than sitting one fixed national syllabus. Cut-offs and seat allocation remain university- and programme-specific after NTA scores are out. Use this hub for pattern, eligibility, subject map and free day-by-day roadmaps — then confirm registration windows, fees, exam cities and programme mapping only on the official NTA CUET (Samarth) portal for the current cycle.",
  examPattern:
    "CUET UG is a computer-based test with modular sections. Language papers (Section I): typically objective questions testing reading comprehension, vocabulary and grammar in the chosen language(s). Domain subjects (Section II): Class 12–aligned papers; you pick subjects required by your target programmes (exact question counts and duration per paper are set in that year's information bulletin — often on the order of ~40–50 questions per domain paper with a fixed time block). General Test (Section III): optional for many programmes — general knowledge, current affairs, numerical ability, logical and analytical reasoning. Marking is usually +5 for a correct answer and −1 for a wrong answer when negative marking applies (confirm in the live bulletin). You do not need every section: map university programme codes first, then book only the papers those codes require. Multiple shifts may use normalisation; treat official NTA scorecards and university counselling calendars as the source of truth after results.",
  eligibility:
    "Candidates who have passed or are appearing in Class 12 (or equivalent) from a recognised board may apply, subject to the age and qualification rules in the current NTA CUET UG information bulletin. There is no single national minimum percentage for appearing in CUET itself — but individual universities and programmes set their own eligibility (subjects studied in Class 12, minimum marks, category rules) for admission after the exam. Subject mapping is critical: a CUET score in the wrong domain paper will not help a programme that requires a different subject combination. Reserved-category relaxations, PwBD provisions and documentary requirements follow NTA and the admitting university. Always re-verify programme-wise subject requirements on both the NTA portal and the university admission brochure before fee payment.",
  prepOverview:
    "Treat CUET as a mapped-subject exam: programme codes first, syllabus second. Phase 1 (mapping): list 5–10 target programmes, note required language/domain/General Test papers, and drop subjects you will not use. Phase 2 (foundation): finish NCERT Class 12 (and Class 11 where the bulletin or university requires it) for each booked domain subject; for language papers, daily comprehension + grammar error spotting; for General Test (if needed), rolling current affairs plus Class 10–level quant and reasoning drills. Phase 3 (exam skill): timed full papers in the same subject order you will sit; practise accuracy under negative marking (+5/−1 style) rather than endless untimed MCQ banks. Last 4–6 weeks: 2–3 full mocks per booked paper weekly and a short error log (concept miss vs silly vs time pressure). Use StudyRoadmap notes for topic refreshers and a free roadmap matched to weeks left; pair with official NTA sample questions and previous-year style papers. One NCERT-complete pass per domain + official mocks beats collecting ten coaching PDFs for subjects you never booked.",
  commonMistakes: [
    'Booking every possible domain paper "just in case" and spreading revision so thin that no subject reaches CUET accuracy.',
    'Ignoring university programme subject maps and discovering after results that scores do not match the required combination.',
    'Skipping NCERT Class 12 domain textbooks for shortcut MCQ apps, then failing application-style and assertion-type items.',
    'Practising only untimed chapter quizzes and never sitting full timed language/domain papers with negative-marking discipline.',
    'Relying on last year\'s paper list, marking scheme or university cut-offs instead of the current NTA CUET bulletin and each university\'s admission notice.',
  ],
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-07-28',
  officialSource: 'https://cuet.samarth.ac.in',
};
export default exam;
