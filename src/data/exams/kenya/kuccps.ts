import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { subject_clusters } from './subjects/subject-clusters';

const subjects: Subject[] = [
    mathematics,
    english,
    subject_clusters,
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
  examId: 'kuccps',
  examName: 'KUCCPS Placement (Kenya)',
  country: 'kenya',
  description: 'The Kenya Universities and Colleges Central Placement Service (KUCCPS) places students into university programmes based on KCSE (Kenya Certificate of Secondary Education) grades. There is no separate placement examination — admission is determined entirely by KCSE performance. Students apply through KUCCPS by selecting courses from the available programme list, and placement is done based on cluster points calculated from KCSE grades in the four cluster subjects relevant to the chosen programme. KUCCPS manages placement for all public universities and is the official body for ensuring transparent and merit-based placement of students into higher education in Kenya.',
  examPattern: 'Based on KCSE cluster subjects — no separate exam. Points are calculated from KCSE grades in 4 cluster subjects plus redundancy subjects. The cluster system uses the 48-point scale where each grade (A=12, A-=11, B+=10, B=9, B-=8, C+=7, C=6, C-=5, D+=4, D=3, E=0) is multiplied by the subject weight and summed to produce a cluster points score. Each programme specifies the four subjects that form its cluster.',
  eligibility: 'KCSE holder with minimum C+ for most programmes (some require higher, some accept C). Must apply through KUCCPS during the application window after KCSE results are released. The minimum subject requirements vary by programme — for example, Medicine typically requires A in Biology, A- in Chemistry, A- in Physics/Mathematics, and B+ in English. Candidates must meet both the overall KCSE mean grade requirement and the specific cluster subject requirements for their chosen programme.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KUCCPS (Kenya) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KUCCPS (Kenya) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KUCCPS (Kenya) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KUCCPS (Kenya) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KUCCPS (Kenya) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KUCCPS (Kenya) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KUCCPS (Kenya) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KUCCPS (Kenya)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://kuccps.net',
};

export default exam;
