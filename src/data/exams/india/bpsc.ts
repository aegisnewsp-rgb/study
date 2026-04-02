import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { indian_polity } from './subjects/indian-polity';
import { current_affairs } from './subjects/current-affairs';

const subjects: Subject[] = [
    history,
    geography,
    indian_polity,
    current_affairs,
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
  examId: 'bpsc',
  examName: 'BPSC',
  country: 'india',
  description: `The Bihar Public Service Commission (BPSC) Combined Competition Examination is one of the most prestigious civil service examinations in Bihar, India. It recruits candidates for various Group A and Group B posts in the Bihar state government, including District Collector, Deputy Superintendent of Police, Revenue Officer, and other administrative positions. The examination is conducted in three stages: Preliminary Examination (Objective), Main Examination (Descriptive), and Interview. BPSC is considered a gateway for candidates aspiring to serve in the Bihar state civil services.`,
  examPattern: `The BPSC Preliminary Examination consists of one General Studies paper with 100 multiple-choice questions carrying 200 marks, to be completed in 2 hours. The Main Examination has four compulsory papers: General Hindi (100 marks), General Studies Paper 1 (300 marks), General Studies Paper 2 (300 marks), and Optional Subject Paper (300 marks). Each Main paper is of 3 hours duration. The Interview/Personality Test carries 120 marks. The Preliminary serves as a screening test; only those who qualify are allowed to appear for the Main examination.`,
  eligibility: `Candidates must be Indian citizens with a bachelor's degree in any discipline from a recognized university. The age limit is 21-37 years for general category candidates, with relaxations up to 42 years for SC/ST and 40 years for OBC candidates. Female candidates from general category get age relaxation up to 40 years. Candidates must be proficient in Hindi language and of good moral character. Those already employed in government service may also apply subject to certain conditions.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for BPSC — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for BPSC — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for BPSC — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for BPSC — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for BPSC — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for BPSC — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for BPSC — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for BPSC',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://example.com',
};

export default exam;
