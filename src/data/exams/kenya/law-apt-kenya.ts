import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { legal_reasoning } from './subjects/legal-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    legal_reasoning,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'law-apt-kenya',
  examName: 'Kenya Law Aptitude',
  country: 'kenya',
  description: 'The Kenya Law Aptitude Test (LAT) is an entrance examination for admission to law programmes at Kenyan universities, primarily the Kenya School of Law which trains advocates. The test assesses candidates on logical reasoning, legal awareness, English language proficiency, and general knowledge — skills essential for legal study. The LAT is typically administered annually and is a prerequisite for enrollment in the Certificate in Law programme offered by the Kenya School of Law in Nairobi.',
  examPattern: 'Typically consists of two papers: Paper 1 covers English (comprehension, grammar, vocabulary) and General Knowledge (current affairs, history, politics), while Paper 2 covers Logical Reasoning (analytical thinking, argument analysis) and Legal Awareness (constitutional law basics, human rights, legal institutions in Kenya). Questions are MCQs and short-answer format. Total duration is approximately 2-3 hours.',
  eligibility: 'KCSE holder with minimum C+ including C+ in English. Candidates must have completed a bachelor\'s degree (for the Diploma in Law route) or have A-Level qualifications. There is no age limit. Candidates with prior legal knowledge or those who have completed relevant certificate courses may have an added advantage. Applications are made through the Kenya School of Law admissions portal.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Kenya Law Aptitude — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Kenya Law Aptitude — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Kenya Law Aptitude — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Kenya Law Aptitude — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Kenya Law Aptitude — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Kenya Law Aptitude — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Kenya Law Aptitude — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Kenya Law Aptitude — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Kenya Law Aptitude — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Kenya Law Aptitude — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Kenya Law Aptitude — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Kenya Law Aptitude — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Kenya Law Aptitude — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Kenya Law Aptitude — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Kenya Law Aptitude — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Kenya Law Aptitude — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Kenya Law Aptitude — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Kenya Law Aptitude — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Kenya Law Aptitude',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'These three lists are not the same size: English and Legal Reasoning carry the same number of topics, and General Knowledge carries fewer. Size your hours by those lists rather than by how many subjects the page lists, and give the shorter one a slot of its own instead of treating it as the leftover.',
  commonMistakes: [
    'The Kenya Law Aptitude is not a test you can sit whenever you are ready. The Kenya School of Law takes the applications, and the paper typically has two parts - Paper 1 English and General Knowledge, Paper 2 Logical Reasoning and Legal Awareness - for approximately 2-3 hours. Read the current notice on https://ksl.ac.ke before you build a year around a date nobody has confirmed.',
    'The Kenya Law Aptitude entry has two routes, and the eligibility line names both: a completed bachelor degree for the Diploma in Law entry, or A-Level qualifications. Which route you are on decides the record you present, so read the entry conditions for your own route on https://ksl.ac.ke before you plan the year.',
    'Reading your KCSE grade as a single number. The entry requirement is C+ overall and C+ in English, so a C+ aggregate with a weaker English mark does not clear it - the English grade has to reach C+ too. Check the current entry rules on https://ksl.ac.ke.',
    'Treating age as an entry condition can mislead an applicant or adviser even though the eligibility field states that there is no age limit. Do not ask for an age figure that the exam does not list, and do not delay an application because of a supposed age threshold. Confirm the current eligibility requirements on https://ksl.ac.ke and focus on the qualifications and grades that the entry rules actually specify.',
    'Assuming Paper 2 mirrors Paper 1. Kenya Law Aptitude typically runs two papers, and the pattern recorded for this exam describes Paper 1 and its English component only - so a syllabus built from that one line leaves the second paper unprepared. Read the full paper structure on https://ksl.ac.ke before you split your revision.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://ksl.ac.ke',
};

export default exam;
