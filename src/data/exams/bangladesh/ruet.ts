import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
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
  examId: 'ruet',
  examName: 'RUET Admission Test',
  country: 'bangladesh',
  description: 'Rajshahi University of Engineering and Technology (RUET) admission test is the entrance examination for undergraduate engineering programmes at RUET, located in Rajshahi, Bangladesh. RUET is one of the premier public engineering universities in the country, offering degrees in Civil, Electrical, Mechanical, Computer Science, and Textile Engineering. The admission process is highly competitive, testing candidates from the science background in essential engineering prerequisites.',
  examPattern: '100 MCQs: Mathematics(40 questions), Physics(30 questions), Chemistry(20 questions), and English/General Knowledge(10 questions). Total 100 marks with each MCQ carrying 1 mark. No negative marking for wrong answers. Exam is usually held in a single sitting of 1.5 to 2 hours at the Rajshahi university campus and regional centres.',
  eligibility: 'HSC or equivalent with a minimum GPA of 4.0 in Physics, Chemistry, and Mathematics (combined). Science group students from HSC or equivalent are eligible. Diploma holders in engineering may apply for credit transfer in some programmes. Bangladeshi nationals only under the general quota. Foreign students may apply through designated quotas with proper equivalence certificates from the Bangladeshi education board.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for RUET — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for RUET — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for RUET — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for RUET — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for RUET — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for RUET — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for RUET — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for RUET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://ruet.ac.bd',
};

export default exam;
