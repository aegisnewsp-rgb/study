import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { science } from './subjects/science';
import { politics } from './subjects/politics';
import { economics } from './subjects/economics';

const subjects: Subject[] = [
    history,
    geography,
    science,
    politics,
    economics,
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
  examId: 'tnpsc',
  examName: 'TNPSC Group 1',
  country: 'india',
  description: `The Tamil Nadu Public Service Commission (TNPSC) Group 1 examination is one of the most prestigious civil service examinations in Tamil Nadu, India. It recruits candidates for high-ranking administrative positions in the Tamil Nadu state government, including Deputy Collector, District Registrar, Deputy Superintendent of Police, Assistant Commissioner (Commercial Taxes), and other Group A services. The examination is conducted in three stages: Preliminary (objective type screening test), Main (written examination), and Interview. It is known for its comprehensive syllabus covering history, geography, polity, economy, and current affairs with a specific focus on Tamil Nadu.`,
  examPattern: `The TNPSC Group 1 Preliminary examination consists of a single paper General Studies (200 questions, 300 marks) to be completed in 3 hours. This paper covers current events, history and geography of India and Tamil Nadu, Indian polity, Indian economy, general science, and mental ability tests. The Main examination has three papers: Paper I (General Studies - 300 marks, 3 hours) covering similar topics as Prelims but in depth; Paper II (General Studies - 300 marks, 3 hours) with more specialized topics; and Paper III (a paper chosen by the candidate from a list of optional subjects - 500 marks, 3 hours). The Interview/Personality Test carries 100 marks. Only those who qualify in Prelims appear for Mains, and final selection is based on Mains + Interview marks.`,
  eligibility: `Candidates must be Indian citizens (or subjects of Nepal, Bhutan, or Tibetan refugees) with a bachelor's degree in any discipline from a recognized university. The age limit is 21-32 years for most positions, with relaxations for SC/ST (no upper limit), OBC (35 years), PwD (37 years for blind/deaf, 40 years for others), and ex-servicemen (48 years). Candidates must have proficiency in Tamil language (reading, writing, and speaking). Those without Tamil proficiency may need to pass the Tamil language test conducted by TNPSC within a specified period after appointment.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for TNPSC Group 1 — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for TNPSC Group 1 — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for TNPSC Group 1 — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for TNPSC Group 1 — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for TNPSC Group 1 — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for TNPSC Group 1 — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for TNPSC Group 1 — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for TNPSC Group 1',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.tnpsc.gov.in',
};

export default exam;
