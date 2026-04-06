import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { general_science } from './subjects/general-science';
import { current_affairs } from './subjects/current-affairs';
import { pakistan_affairs } from './subjects/pakistan-affairs';
import { islamic_studies } from './subjects/islamic-studies';

const subjects: Subject[] = [
    english,
    general_science,
    current_affairs,
    pakistan_affairs,
    islamic_studies,
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
  examId: 'fpsc-cce',
  examName: 'FPSC CSS (Pakistan)',
  country: 'pakistan',
  description: `The Federal Public Service Commission (FPSC) Central Superior Services (CSS) examination is the most prestigious civil service examination in Pakistan, conducted annually for recruitment to various Group A and B posts in the federal government. The CSS examination offers appointments to the Pakistan Administrative Service (PAS), Police Service of Pakistan (PSP), Commerce and Trade Group, Income Tax Group, and several other occupational groups and secretariat services. It is considered the gateway to the highest echelons of Pakistan bureaucracy and offers a distinguished career in public service administration.`,
  examPattern: `The CSS examination consists of a written examination followed by a psychological test and interview. The written examination has 12 papers (six compulsory and six optional) each of 100 marks. Compulsory papers include English (Essay, Précis, and Composition), Urdu (Precise Writing and Translation), Islamic Studies/Pakistan Studies, Current Affairs (100 marks), General Science and Computer Proficiency (100 marks), and Pakistan Affairs and Islamic History (100 marks). Optional papers cover subjects chosen by the candidate from a list of 27 groups including History, Geography, Political Science, Economics, Sociology, Physics, Chemistry, Mathematics, and others. Each paper is of 3 hours duration. The total marks for the written examination are 1200. The psychological test includes written tests and an interview.`,
  eligibility: `Candidates must be Pakistani nationals with a bachelor's degree (at least second division) from an HEC-recognized university. The age limit is 21-30 years for most positions, with relaxations for civil servants (35 years for Grade 16-17 employees), candidates from tribal areas, and certain other categories. There is no limit on the number of attempts. Candidates must be of good character and must not have been convicted for any criminal offence. Female candidates and those from Azad Jammu and Kashmir and Gilgit-Baltistan are also eligible on the same terms as male candidates.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for FPSC CSS (Pakistan) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for FPSC CSS (Pakistan) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for FPSC CSS (Pakistan) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for FPSC CSS (Pakistan) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for FPSC CSS (Pakistan) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for FPSC CSS (Pakistan) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for FPSC CSS (Pakistan) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for FPSC CSS (Pakistan)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
