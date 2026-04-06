import type { ExamTemplate, Subject } from '../types';

import { subject_combinations } from './subjects/subject-combinations';

const subjects: Subject[] = [
    subject_combinations,
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
  examId: 'jupeb',
  examName: 'JUPEB (Joint Universities Preliminary Examinations Board)',
  country: 'nigeria',
  description: 'The Joint Universities Preliminary Examinations Board (JUPEB) is a national direct entry programme accepted by all Nigerian universities. Candidates study 3-4 subjects for one academic year at accredited JUPEB centres and use the resulting certificate for 200-level (second year) admission. The programme serves as a bridge between SSCE/NECO and university education, compressing the A-Level equivalent curriculum into one year. JUPEB is managed by a consortium of Nigerian universities and the examinations are standardized across all accredited centres nationwide.',
  examPattern: '3 subjects (depending on desired university course), each with 2-3 papers per subject plus a general paper. Each subject paper is 2-3 hours. The examination is held at the end of the one-year programme. Science combinations include PCM (Physics, Chemistry, Mathematics) or PCB (Physics, Chemistry, Biology); Arts combinations include Literature, Government, Economics; Commercial combinations include Accounting, Economics, Mathematics. Grades awarded are A-E with minimum E required for direct entry.',
  eligibility: 'SSCE holder with minimum 5 credits including English and Mathematics (for most university requirements). The programme is open to all who meet the O-Level requirements regardless of age. Students who have completed their NCE, Diploma, or already have JAMB attempt may also enroll. The programme is typically one academic year (September to June). Candidates must register with an accredited JUPEB centre and sit the final examinations at designated centres.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for JUPEB (Nigeria) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for JUPEB (Nigeria) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for JUPEB (Nigeria) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for JUPEB (Nigeria) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for JUPEB (Nigeria) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for JUPEB (Nigeria) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for JUPEB (Nigeria) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for JUPEB (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://jupeb.edu.ng',
};

export default exam;
