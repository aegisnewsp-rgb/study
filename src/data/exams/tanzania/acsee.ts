import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
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
  examId: 'acsee',
  examName: 'ACSEE (Tanzania)',
  country: 'tanzania',
  description: 'Tanzania Advanced Certificate of Secondary Education (ACSEE) is the national examination for post-secondary selection. Equivalent to A-Levels, it determines university admission in Tanzania. The ACSEE is administered by the National Examinations Council of Tanzania (NECTA) and is taken by students who have successfully completed their CSEE (Form IV). It is the key determinant for admission to Tanzania\'s public universities through the Tanzania Commission for Universities (TCU).',
  examPattern: '6-7 papers including compulsory General Studies plus 3 elective subjects. Essay, short answer, and MCQ formats. General Studies is compulsory and covers civics, communication skills, and basic mathematics. Elective subjects are chosen based on the student\'s desired university programme — natural sciences (Physics, Chemistry, Biology, Mathematics), business (Economics, Commerce, Accounting), or humanities (History, Geography, Languages). Each paper is 3 hours.',
  eligibility: 'CSEE (Form IV) certificate with minimum passes. Selection based on ACSEE results and subject clusters. Students must have passed at least 4 subjects at CSEE level. University admission is coordinated through TCU which sets minimum subject and grade requirements for each programme. Competitive programmes like Medicine, Engineering, and Law require specific subject combinations and high grades.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ACSEE (Tanzania) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ACSEE (Tanzania) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ACSEE (Tanzania) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ACSEE (Tanzania) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ACSEE (Tanzania) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ACSEE (Tanzania) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ACSEE (Tanzania) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ACSEE (Tanzania)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.necta.go.tz',
};

export default exam;
