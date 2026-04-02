import type { ExamTemplate, Subject } from '../types';

import { reasoning } from './subjects/reasoning';
import { quant } from './subjects/quant';
import { english } from './subjects/english';
import { general_awareness } from './subjects/general-awareness';

const subjects: Subject[] = [
    reasoning,
    quant,
    english,
    general_awareness,
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
  examId: 'ibps-po',
  examName: 'IBPS PO',
  country: 'india',
  description: `The IBPS Probationary Officer (PO) examination is conducted by the Institute of Banking Personnel Selection (IBPS) for recruitment to the post of Probationary Officer/Management Trainee in public sector banks across India. It is one of the most sought-after banking examinations in India, attracting lakhs of aspirants every year. The PO position is considered a prestigious entry-level role in banking, with opportunities for career advancement to positions like Branch Manager, Deputy Manager, and beyond. The selection process includes Prelims, Mains, and an Interview round.`,
  examPattern: `The IBPS PO Preliminary Examination has three sections: English Language (30 questions, 30 marks), Numerical Ability (35 questions, 35 marks), and Reasoning Ability (35 questions, 35 marks), totaling 100 questions for 100 marks to be completed in 60 minutes. The Main Examination has five sections: Reasoning and Computer Aptitude (45 questions, 60 marks), English Language (35 questions, 40 marks), Data Analysis and Interpretation (35 questions, 60 marks), General/Economy/Banking Awareness (40 questions, 40 marks), and an English Descriptive Paper (2 questions, 25 marks). Total duration is 3 hours 30 minutes for the Main. Both exams are online (CBT) with negative marking of 0.25 marks for wrong answers.`,
  eligibility: `Candidates must be Indian citizens with a bachelor's degree in any discipline from a recognized university with a minimum of 50% aggregate marks. The age limit is 20-30 years for general category candidates, with relaxations up to 33 years for OBC, 35 years for SC/ST, and 40 years for PwD candidates. Candidates should have basic computer knowledge and proficiency in the official language of the state they are applying for. Some banks may have additional eligibility criteria regarding educational background or experience.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for IBPS PO — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for IBPS PO — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for IBPS PO — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for IBPS PO — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for IBPS PO — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for IBPS PO — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for IBPS PO — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for IBPS PO',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://example.com',
};

export default exam;
