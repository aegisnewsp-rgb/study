import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { economics } from './subjects/economics';
import { accounting } from './subjects/accounting';

const subjects: Subject[] = [
    mathematics,
    english,
    economics,
    accounting,
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
  examId: 'wassce',
  examName: 'WASSCE (Ghana)',
  country: 'ghana',
  description: 'West African Senior School Certificate Examination (WASSCE) for Ghana — Ghana\'s national secondary school leaving exam, equivalent to the Nigerian WAEC exam. Required for university admission in Ghana. The WASSCE is administered by the West African Examinations Council (WAEC) and is taken by Senior High School (SHS) students in their third year (SHS 3). It is the benchmark examination for both university admission and employment in Ghana.',
  examPattern: 'Core: English, Mathematics, Integrated Science. Electives: Physics, Chemistry, Biology, Economics, Geography, Government, etc. Written papers + practical for science subjects. The core subjects are compulsory for all candidates. Elective subjects are chosen based on the student\'s programme track (Science, Business, General Arts, Home Economics, Visual Arts). Science subjects have practical components. Papers include essay-type, short-answer, and MCQ questions. The examination is held in May/June.',
  eligibility: 'Junior High School (JHS) completion certificate. Minimum WASSCE grades required for university admission. Candidates must have completed JHS 3 and be registered SHS 3 students. For university admission, candidates typically need a minimum of 6 credits including the three core subjects. Competitive programmes like Medicine require A1 in Biology and Chemistry plus Physics and Elective Mathematics. The WASSCE grades are graded A1-D7, with A1 being the highest.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for WASSCE (Ghana) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for WASSCE (Ghana) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for WASSCE (Ghana) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for WASSCE (Ghana) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for WASSCE (Ghana) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for WASSCE (Ghana) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for WASSCE (Ghana) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for WASSCE (Ghana)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://www.waecgh.org',
};

export default exam;
