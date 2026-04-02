import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';

const subjects: Subject[] = [
    physics,
    chemistry,
    mathematics,
    english,
];


function makeRoadmap(subjects: Subject[], duration: string, totalDays: number, description: string): RoadmapTemplate {
  const dailyCapacity = Math.max(1, Math.floor(subjects.reduce((sum, s) => sum + s.topics.length, 0) / totalDays));
  const dailyTopics: DailyTopicItem[] = [];
  let day = 1;
  const usedTopics = new Set<string>();

  while (day <= totalDays) {
    for (const subject of subjects) {
      const available = subject.topics.filter(t => !usedTopics.has(t.id));
      const toUse = available.slice(0, dailyCapacity);
      for (const topic of toUse) {
        usedTopics.add(topic.id);
        dailyTopics.push({ ...topic, subject: subject.name });
      }
    }
    day++;
    if (usedTopics.size >= subjects.reduce((s, sb) => s + sb.topics.length, 0)) break;
  }

  return { duration, totalDays, dailyTopics, description };
}

const exam: ExamTemplate = {
  examId: 'kenyatta-ku',
  examName: 'Kenyatta University Admission Test (Kenya)',
  country: 'kenya',
  description: 'Kenyatta University (KU) is one of Kenya\'s largest public universities, located near Nairobi. The university conducts its own admission tests for various undergraduate programmes, especially those that are competitive such as Medicine, Law, Engineering, and Computer Science. KU admission test evaluates candidates on their subject-specific knowledge, general aptitude, and language proficiency. The test is administered on campus and is a key component of the selection process alongside KCSE performance for courses that receive more applicants than available slots.',
  examPattern: 'Typically consists of 2-3 papers depending on the programme applied for: Subject-specific paper (relevant to the chosen course, e.g., Biology and Chemistry for Medicine, Mathematics and Physics for Engineering), English and General Aptitude test, and sometimes a programme-specific paper. Each paper is 1-2 hours. Questions are primarily multiple choice with some structured short-answer questions. For Education programmes, there may be an interview component.',
  eligibility: 'KCSE holder with minimum C+ mean grade for most programmes. Specific programmes require minimum grades in relevant subjects — for example, Engineering requires C+ in Mathematics and Physics, Medicine requires A in Biology, A- in Chemistry, and A- in Physics/Mathematics. KU\'s own cut-off points vary by programme and change annually based on demand. Candidates must apply through KUCCPS first, and shortlisted candidates are invited for the university\'s own admission test.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Kenyatta University (Kenya) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Kenyatta University (Kenya) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Kenyatta University (Kenya) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Kenyatta University (Kenya) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Kenyatta University (Kenya) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Kenyatta University (Kenya) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Kenyatta University (Kenya) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Kenyatta University (Kenya)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://ku.ac.ke',
};

export default exam;
