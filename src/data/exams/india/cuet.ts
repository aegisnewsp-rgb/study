export interface Topic { id: string; name: string; weight: 1|2|3|4|5; description?: string; }
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
  description: "The Common University Entrance Test (CUET) is India's central exam for undergraduate admission to 200+ central, deemed, and private universities including DU, BHU, AMU, and JNU. Introduced in 2022, it is a mandatory requirement for students seeking admission to these universities. Tests domain knowledge, general awareness, and language proficiency.",
  examPattern: "Section IA: Language (25 questions), Section IB: Another Language (25 questions), Section II: Domain-specific subjects (25-50 questions per subject), Section III: General Test (25 questions). 3 hours maximum. Each question carries 5 marks, 1 mark deducted for wrong answer.",
  eligibility: "Class 12 passed from a recognised board. Specific subject requirements vary by university and programme. No minimum percentage requirement at national level (individual universities may set their own cut-offs).",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://cuet.samarth.ac.in',
};
export default exam;
