import type { ExamTemplate, Subject } from '../types';

import { wassce_subjects } from './subjects/wassce-subjects';
import { english } from './subjects/english';

const subjects: Subject[] = [
    wassce_subjects,
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
  examId: 'legon-adm',
  examName: 'Legon Admissions (Ghana)',
  country: 'ghana',
  description: 'University of Ghana (Legon) admission test — a supplementary entrance exam for students who did not meet direct admission requirements to UG. The University of Ghana is the oldest and most prestigious university in Ghana. Each year, the university receives far more qualified applicants than it can admit. The admission test provides a pathway for candidates who have strong WASSCE results but narrowly missed the direct admission cut-off for their preferred programme.',
  examPattern: 'Tests relevant subjects based on programme choice. Typically written examinations. For Science applicants, tests Biology, Chemistry, and Physics. For Business applicants, tests Mathematics, Economics, and Accounting. For Arts applicants, tests English, History, and a chosen elective. For Law applicants, tests English, Literature, and Government or History. Each paper is typically 1-2 hours, consisting of MCQs and short-answer questions. The test is conducted on the Legon campus.',
  eligibility: 'WASSCE with required grades. Legon admissions are competitive with cut-off points per programme. Candidates must have a minimum of 6 credits in WASSCE including English and Mathematics (for most programmes). The admission test is typically offered to candidates whose WASSCE grades meet the programme\'s minimum subject requirements but whose aggregate score is slightly below the cut-off for direct admission. Performance in the test determines whether they are offered a place.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Legon Admissions (Ghana) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Legon Admissions (Ghana) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Legon Admissions (Ghana) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Legon Admissions (Ghana) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Legon Admissions (Ghana) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Legon Admissions (Ghana) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Legon Admissions (Ghana) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Legon Admissions (Ghana)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://ug.edu.gh',
};

export default exam;
