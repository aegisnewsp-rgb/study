import type { ExamTemplate, Subject } from '../types';

import { engineering_maths } from './subjects/engineering-maths';
import { subject_specific } from './subjects/subject-specific';
import { general_aptitude } from './subjects/general-aptitude';

const subjects: Subject[] = [
    engineering_maths,
    subject_specific,
    general_aptitude,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'gate',
  examName: 'GATE',
  country: 'india',
  description:
    "The Graduate Aptitude Test in Engineering (GATE) is India's national postgraduate engineering and science entrance exam, organised each year by one of the IITs or IISc on behalf of the National Coordination Board – GATE. A GATE score is used for M.E./M.Tech./Ph.D. admissions at IITs, IISc, NITs and many other institutes, and as a shortlisting filter for recruitment and trainee roles in several Public Sector Undertakings (PSUs) such as ONGC, NTPC, IOCL and others that advertise GATE-based hiring. Candidates choose one (or, where allowed, two) paper codes matching their discipline — Computer Science, Electrical, Mechanical, Civil, Electronics, and many science and interdisciplinary papers. The test is fully computer-based and runs over multiple days and sessions. Use this hub for pattern, eligibility, subject weightage and free day-by-day roadmaps — then confirm paper codes, dates, fees and two-paper rules only on the official GATE organising institute site for the current year.",
  examPattern:
    "GATE is typically a 3-hour computer-based test of 65 questions for 100 marks. The usual structure is General Aptitude (about 15 marks), Engineering Mathematics where applicable (often ~13 marks depending on paper), and the core subject section for the remaining marks. Question types include Multiple Choice Questions (MCQs) with negative marking, Multiple Select Questions (MSQs) in many papers (no partial credit unless the bulletin says otherwise), and Numerical Answer Type (NAT) items where you enter a number (usually no negative marking). Classic MCQ negative marking is often 1/3 mark for a wrong 1-mark MCQ and 2/3 for a wrong 2-mark MCQ — always re-check the live information brochure. There is no sectional time lock inside the 3 hours, so you must self-pace aptitude, maths and core. Marks are normalised across multi-session papers; admissions and PSU shortlists use score/percentile cut-offs that change every year.",
  eligibility:
    "Candidates currently in the third year or higher of an undergraduate degree programme in Engineering/Technology/Architecture/Science/Commerce/Arts/Humanities, or who have already completed a government-recognised Bachelor's degree in a relevant discipline, are typically eligible as per the current GATE brochure (exact programme lists and two-paper combinations are paper-code specific). There is no upper age limit under the usual GATE rules. Final-year students may appear provisionally. Category-based fee concessions and PwD provisions follow the organising institute's notice. GATE eligibility for the exam is not the same as eligibility for a particular IIT/NIT programme or PSU post — those bodies set their own degree, GATE paper and score requirements after results. Always re-verify paper codes, two-paper options and documentary rules on the official GATE website before fee payment.",
  prepOverview:
    "Treat GATE as a single-paper depth exam: core engineering/science strength first, aptitude and maths as score stabilisers. Phase 1 (foundation): finish standard undergraduate textbooks for high-weight topics in your paper code; maintain a formula sheet for maths and core; do General Aptitude (verbal + numerical) weekly so 15 marks are not left to chance. Phase 2 (problem skill): topic-wise previous-year questions (PYQs) under timed slices; log weak topics and revisit theory only when error patterns show concept gaps, not just calculation slips. Practise NAT accuracy (units, decimal places, ranges) and MSQ all-correct selection where your paper uses them. Phase 3 (simulation): full 3-hour mocks every 1–2 weeks, then weekly in the last 2–3 months — review for 1.5–2× mock duration focusing on wrong MCQs (negative risk), unattempted high-weight topics and time sinks. Weight calendar toward your paper's highest-weight units without abandoning aptitude. Use StudyRoadmap notes for concept refreshers and a free roadmap matched to weeks left; pair with official GATE previous papers and a serious mock series. One standard textbook set + full PYQ bank beats ten shallow topic apps.",
  commonMistakes: [
    'Collecting coaching material for every minor topic while never finishing high-weight core units and full-length 3-hour mocks.',
    'Ignoring General Aptitude and Engineering Mathematics until the last month, then leaving easy marks on the table.',
    'Attempting every MCQ under time pressure and bleeding marks to negative marking instead of selective accuracy on NAT/MSQ/MCQ mix.',
    'Practising only untimed chapter quizzes and never training NAT entry precision or multi-session stamina.',
    'Assuming last year\'s paper code list, two-paper rules or PSU cut-offs without opening the current official GATE brochure and each institute/PSU notice.',
  ],
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for GATE — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for GATE — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for GATE — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for GATE — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for GATE — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for GATE — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for GATE — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for GATE — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for GATE — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for GATE — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for GATE — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for GATE — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for GATE — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for GATE — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for GATE — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for GATE — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for GATE — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for GATE — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for GATE',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions. Protect General Aptitude marks and avoid negative-marking traps on low-confidence MCQs.',
  },
  lastUpdated: '2026-07-28',
  officialSource: 'https://gate2026.iitg.ac.in/',
};

export default exam;
