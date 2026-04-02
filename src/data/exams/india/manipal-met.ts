import type { ExamTemplate } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';

const subjects = [physics, chemistry, mathematics, english];

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
  examId: 'manipal-met',
  examName: 'Manipal MET',
  country: 'india',
  description: `The Manipal MET (Manipal Entrance Test) is a university-level entrance examination conducted by Manipal Academy of Higher Education (MAHE), Manipal, for admission to various undergraduate and postgraduate programmes across its campuses in Manipal, Bengaluru, and Dubai. MAHE is one of the largest and most prestigious deemed-to-be-universities in India, offering programmes in medicine, engineering, management, humanities, and sciences. The Manipal MET is the gateway for admission to MBBS, B.Tech, BBA, MBA, and numerous other professional programmes offered by the institution.`,
  examPattern: `The Manipal MET for undergraduate engineering programmes (B.Tech) consists of Physics, Chemistry, and Mathematics as the main sections, with questions designed to test conceptual understanding and problem-solving abilities at the 10+2 level. For MBBS admission, NEET UG scores are accepted, though MAHE may also conduct its own MET for other health sciences programmes. The BBA/MBA MET consists of sections on English Language, Quantitative Aptitude, Logical Reasoning, and General Awareness. The exam is conducted in online (computer-based) mode. The duration and number of questions vary by programme. For B.Tech, there are typically 200 questions to be completed in 2 hours 30 minutes.`,
  eligibility: `For B.Tech programmes: Candidates must have passed 10+2 or equivalent with Physics and Mathematics as compulsory subjects, along with one of Chemistry/Biotechnology/Computer Science/Biology with a minimum of 50% aggregate marks in PCM. For MBBS: Candidates must have appeared in and qualified NEET UG with the required percentile as determined by MCI/MCC. For BBA: Candidates must have passed 10+2 or equivalent in any stream with a minimum of 50% aggregate marks. For MBA: A bachelor's degree in any discipline with a minimum of 50% aggregate marks from a recognized university is required, along with a valid CAT/MAT/CMAT/ME score or MET score.`,
  subjects,
  durations: {
    '1h':  makeRoadmap(subjects, '1h',  1,   'Study plan for Manipal MET — 1 Hour'),
    '1d':  makeRoadmap(subjects, '1d',  1,   'Study plan for Manipal MET — 1 Day'),
    '3d':  makeRoadmap(subjects, '3d',  3,   'Study plan for Manipal MET — 3 Days'),
    '7d':  makeRoadmap(subjects, '7d',  7,   'Study plan for Manipal MET — 1 Week'),
    '1mo': makeRoadmap(subjects, '1mo', 30,  'Study plan for Manipal MET — 1 Month'),
    '3mo': makeRoadmap(subjects, '3mo', 90,  'Study plan for Manipal MET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Manipal MET — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Manipal MET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-01',
  officialSource: 'https://manipal.edu/mu-met',
};

export default exam;
