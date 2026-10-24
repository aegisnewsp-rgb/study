import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { sindh_studies } from './subjects/sindh-studies';

const subjects: Subject[] = [
    english,
    gk,
    sindh_studies,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'sppsc',
  examName: 'SPSC (Sindh)',
  country: 'pakistan',
  description: `The Sindh Public Service Commission (SPSC) is a constitutional body that conducts competitive examinations for recruitment to civil service posts in the Sindh province of Pakistan. SPSC conducts examinations for the Sindh Superior Judicial Service, Sindh Civil Service (Provincial Management Service), and various other provincial posts. The commission is headquartered in Karachi and conducts written examinations, viva voce (interviews), and other selection processes to identify qualified candidates for administrative, judicial, and secretariat positions within the Sindh provincial government.`,
  examPattern: `The SPSC Combined Competitive Examination for Sindh Civil Service runs in three stages: an objective screening test that shortlists candidates, the descriptive Main Examination, and the Personality Test. The Main Examination is 10 papers, of which a candidate sits eight — the six compulsory ones plus two of the four optional subject groups — for 800 marks in all and 24 hours of written exam time, 3 hours per paper (confirm the paper count and timings in the current official SPSC prospectus). The six compulsory papers are 100 marks each — English Essay, English Precis & Composition, General Knowledge, Islamic Studies or Ethics, Pakistan & Sindh Affairs, and Current Affairs — for 600 compulsory marks, and each of the two optional papers a candidate adds is 100 marks, for 200 more (the same prospectus lists the optional subject groups). The Personality Test carries 100 marks.`,
  eligibility: `Candidates must be Pakistani nationals with a bachelor's degree (at least second division) from an HEC-recognized university. The age limit is 21-33 years for general category, with relaxations for Sindh government employees (up to 40 years), candidates from tribal areas, and SC/ST categories. Candidates must be domiciled in Sindh province. Female candidates and transgender persons with Sindh domicile are also eligible. Candidates must not have been convicted for any criminal offence and must be of good moral character. Candidates with Sindhi as a subject at the intermediate or bachelor's level may get preference in certain positions.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SPSC (Sindh) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for SPSC (Sindh) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for SPSC (Sindh) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for SPSC (Sindh) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for SPSC (Sindh) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SPSC (Sindh) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for SPSC (Sindh) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SPSC (Sindh) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for SPSC (Sindh) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SPSC (Sindh) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for SPSC (Sindh) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for SPSC (Sindh) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SPSC (Sindh) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for SPSC (Sindh) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SPSC (Sindh) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SPSC (Sindh) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for SPSC (Sindh) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for SPSC (Sindh) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SPSC (Sindh)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Work backwards from the three stages the commission runs. The screening test is objective, so build speed and coverage in the areas it names rather than depth in a syllabus. The Main Examination carries the marks, and its compulsory papers are two different kinds of paper: the two English ones are written skill, so essay and precis practice belongs in your weekly plan from week one, while the knowledge papers are a daily reading habit rather than a revision sprint. Register your optional subjects early, because the pairing on the form is the pairing you revise for. Sit every mock to the full 3-hour paper length, and start interview preparation in the first month rather than after the written result.',
  commonMistakes: [
    'Preparing only the optional subjects and General Knowledge, and leaving the English papers untouched — precis and essay are skills you practise under time, not syllabus you memorise.',
    'Ignoring the objective screening test because it is not a written paper: it is the stage that decides who reaches the descriptive papers, so a candidate who revises only for the written stage is preparing for an exam they have not been called for.',
    'Reading a previous year advertisement as the current one: the optional-subject list, the age relaxation and the interview schedule are re-published every cycle, so the paper list on a coaching page from last year may not be the one you are allowed to sit.',
    'Assuming 21-33 years is the only age rule, and missing the relaxation up to 40 years for Sindh government employees, tribal-area candidates and SC/ST categories — and the separate requirement that you be domiciled in Sindh.',
    'Ignoring the Personality Test, which carries its own weight in the final result. The written papers are not the last hurdle, so interview practice belongs in the first month of the plan rather than after the written result.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://spsc.gos.pk/',
  conductingBody: 'Sindh Public Service Commission (SPSC)',
};

export default exam;
