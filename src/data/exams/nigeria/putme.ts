import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { subject_combination } from './subjects/subject-combination';

const subjects: Subject[] = [
    english,
    subject_combination,
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
  examId: 'putme',
  examName: 'Post-UTME (Nigeria)',
  country: 'nigeria',
  description: 'Post-UTME is the screening examination conducted by individual Nigerian universities after the JAMB UTME. Each university designs its own Post-UTME test, which evaluates candidates on subject-specific knowledge relevant to their chosen course. The Post-UTME score, combined with the JAMB UTME score, determines a candidate\'s admission chances. As there are over 50 universities in Nigeria, each with unique Post-UTME formats, preparation must be tailored to the specific university. Competition is intense, particularly for popular courses like Medicine, Law, and Engineering.',
  examPattern: 'Format varies by university — typically 40-100 MCQs in relevant subjects, 1-2 hours duration. Most universities test Use of English (compulsory) plus 2-3 subjects relevant to the candidate\'s chosen programme. Some universities like UNILAG use fully CBT format while others use paper-based tests. Lagos State universities use EKO-KSS, Ogun uses OGUN-SS, Oyo uses OYOSTATE-SS. Questions are drawn from the JAMB UTME syllabus and the university\'s subject requirements.',
  eligibility: 'Must have sat JAMB UTME and scored the minimum cut-off mark set by the university and course of choice. Each university publishes its own cut-off marks annually based on JAMB\'s national guidelines. Candidates must also meet the university\'s O-Level subject requirements. The combination of JAMB score and Post-UTME score determines the admission ranking. Candidates can only sit Post-UTME at one university per admission year.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Post-UTME (Nigeria) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Post-UTME (Nigeria) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Post-UTME (Nigeria) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Post-UTME (Nigeria) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Post-UTME (Nigeria) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Post-UTME (Nigeria) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Post-UTME (Nigeria) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Post-UTME (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.jamb.gov.ng',
};

export default exam;
