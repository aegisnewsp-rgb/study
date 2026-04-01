import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { indian_polity } from './subjects/indian-polity';
import { economics } from './subjects/economics';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    history,
    geography,
    indian_polity,
    economics,
    gk,
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
  examId: 'ras',
  examName: 'RPSC RAS',
  description: 'RPSC RAS (Rajasthan Administrative Service) is a prestigious state-level competitive exam conducted by the Rajasthan Public Service Commission for recruitment to various administrative posts in the Rajasthan government. The exam consists of three stages: Prelims (objective MCQ screening test), Mains (descriptive written exam with GS papers I-IV and Hindi), and finally a Personality Test/Interview. The Prelims tests General Knowledge with special emphasis on Rajasthan — its history including the Maurya, Gupta, Sultanate, and Mughal periods, freedom struggle, and Rajasthan-specific culture, art, and heritage. Geography covers physical, economic, and human geography of Rajasthan, India\'s climate, and world geography. Indian Polity tests the Indian Constitution, governance, federal structure, and constitutional bodies. General Studies II covers science and technology, current events, and logical reasoning. Success requires deep understanding of Rajasthan-specific content alongside national and international affairs, making regional focus essential for scoring well in this highly competitive exam.',
  examPattern: 'The RAS exam is conducted in three stages. Prelims is a single paper of 200 MCQs (General Knowledge and General Aptitude) for 200 marks with 1/3 negative marking, duration 3 hours. Candidates who clear Prelims appear for Mains, which comprises four conventional type papers: GS-I (Indian History, World History, Geography of India and Rajasthan), GS-II (Indian Polity, Governance, International Relations), GS-III (Economics, Science and Technology, Environment), and GS-IV (Logical Reasoning, Decision Making, Interpersonal Skills). Each Mains paper is of 200 marks. The final stage is a Personality Test of 100 marks. The final merit list is prepared from Mains marks after adding interview marks. The exam is conducted in Hindi and English (except language papers).',
  eligibility: 'Candidates must be Indian citizens and hold a bachelor\'s degree in any discipline from a recognized university. The age limit is 21-40 years for general category, with relaxation for SC/ST/OBC and other reserved categories. Physical standards may be specified for certain posts. Final year students awaiting results can also apply provisionally. Domicile of Rajasthan is not mandatory, though it may be considered in final selection for state-level posts.',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for RPSC RAS — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for RPSC RAS — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for RPSC RAS — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for RPSC RAS — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for RPSC RAS — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for RPSC RAS — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for RPSC RAS — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for RPSC RAS',
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
