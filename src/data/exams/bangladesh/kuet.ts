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
  examId: 'kuet',
  examName: 'KUET Admission Test',
  country: 'bangladesh',
  description: 'Khulna University of Engineering and Technology (KUET) admission test is a highly competitive exam for undergraduate engineering programmes in southern Bangladesh. KUET is one of the nine public engineering universities in Bangladesh and focuses on engineering, technology, and applied sciences. The admission test selects candidates for various undergraduate programmes including Computer Science, Electrical, Civil, Mechanical, and other engineering disciplines.',
  examPattern: '100 MCQs: Mathematics(40 questions), Physics(30 questions), Chemistry(20 questions), plus 10 questions from English/General Knowledge combined. Each question carries 1 mark. There is no negative marking. The exam duration is typically 1.5 to 2 hours.',
  eligibility: 'HSC or equivalent with minimum GPA requirements in Science group — minimum GPA 4.0 in Physics, Chemistry, and Mathematics combined. Bangladeshi nationals only. Students who have passed SSC and HSC in Science group from recognized boards are eligible. Diploma holders in engineering may also be eligible for some programmes under special quotas.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KUET — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KUET — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KUET — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KUET — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KUET — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KUET — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KUET — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KUET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://kuet.ac.bd',
};

export default exam;
