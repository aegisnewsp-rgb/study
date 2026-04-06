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
  examId: 'ecat-eng',
  examName: 'ECAT (Engineering)',
  country: 'pakistan',
  description: `The Engineering College Admission Test (ECAT) is a standardized entrance examination conducted by the University of Engineering and Technology (UET) Lahore on behalf of the Pakistan Engineering Council (PEC) for admission to undergraduate engineering programmes at public sector engineering universities across Pakistan. ECAT is a mandatory requirement for admission to most engineering universities in Punjab and is also accepted by several universities in other provinces. The test evaluates candidates knowledge and conceptual understanding of Physics, Chemistry, and Mathematics at the intermediate (FSc) level, along with English proficiency.`,
  examPattern: `ECAT consists of approximately 100-110 multiple-choice questions divided into four sections: Mathematics (30 questions), Physics (30 questions), Chemistry (30 questions), and English (10-20 questions covering vocabulary, grammar, and comprehension). Each correct answer carries 4 marks, with no negative marking. The total marks are approximately 400. The duration is 100 minutes (1 hour 40 minutes). The examination is conducted in computer-based format at designated testing centres. The questions are drawn from the FSc/ICS (Part I and Part II) curriculum covering topics in calculus, algebra, mechanics, thermodynamics, electromagnetic theory, organic and inorganic chemistry.`,
  eligibility: `Candidates must have appeared in the FSc (Pre-Engineering) or equivalent examination with Physics, Chemistry, and Mathematics as compulsory subjects, scoring at least 60% marks in the annual examination. Alternatively, candidates with ICS (Intermediate in Computer Science) with Mathematics and Physics are also eligible for some engineering programmes. Candidates with a BSc (Double Mathematics and Physics) degree with at least 60% marks are also eligible. Candidates must be Pakistani nationals or hold valid Pakistani identity documents. Students appearing in their final FSc examination may apply provisionally.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ECAT (Engineering) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ECAT (Engineering) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ECAT (Engineering) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ECAT (Engineering) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ECAT (Engineering) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ECAT (Engineering) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ECAT (Engineering) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ECAT (Engineering)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
