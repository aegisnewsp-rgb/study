import type { ExamTemplate, Subject } from '../types';

import { child_pedagogy } from './subjects/child-pedagogy';
import { english } from './subjects/english';
import { mathematics } from './subjects/mathematics';
import { science } from './subjects/science';
import { social } from './subjects/social';

const subjects: Subject[] = [
    child_pedagogy,
    english,
    mathematics,
    science,
    social,
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
  examId: 'ctet',
  examName: 'CTET',
  country: 'india',
  description: `The Central Teacher Eligibility Test (CTET) is a national-level examination conducted by the Central Board of Secondary Education (CBSE) to determine the eligibility of candidates for appointment as teachers for Classes I to VIII in schools governed by the Central government and schools under the NDMC, as well as schools aided by the central government. CTET is also recognized by many state governments and private schools as a benchmark for teacher recruitment. It assesses a candidate's knowledge of child development, pedagogy, language proficiency, mathematics, and environmental studies.`,
  examPattern: `CTET consists of two papers. Paper I is for candidates aspiring to teach Classes I to V and has five sections: Child Development and Pedagogy (30 questions), Language I (30 questions), Language II (30 questions), Mathematics (30 questions), and Environmental Studies (30 questions). Paper II is for Classes VI to VIII and covers Child Development and Pedagogy (30 questions), Language I (30 questions), Language II (30 questions), Mathematics and Science (60 questions) or Social Studies/Social Science (60 questions). Each paper has 150 MCQs of 1 mark each, to be completed in 150 minutes. There is no negative marking.`,
  eligibility: `For Paper I (Classes I-V): Candidates must have passed Senior Secondary (or its equivalent) with at least 50% marks and must have passed or be appearing in the final year of a 2-year Diploma in Elementary Education (D.El.Ed). For Paper II (Classes VI-VIII): Candidates must have graduation with at least 50% marks and must have passed or be appearing in the final year of a 1-year Bachelor of Education (B.Ed.) programme. Candidates with B.El.Ed., D.El.Ed., and D.Ed. qualifications from various states are also eligible.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CTET — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CTET — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CTET — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CTET — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CTET — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CTET — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CTET — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CTET',
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
