import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';
import { botany } from './subjects/botany';
import { zoology } from './subjects/zoology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
    botany,
    zoology,
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
  examId: 'aiims-mbbs',
  examName: 'AIIMS MBBS',
  country: 'india',
  description: `The All India Institute of Medical Sciences (AIIMS) MBBS entrance examination was the premier medical entrance exam for admission to MBBS programmes at AIIMS New Delhi and its satellite campuses across India. From 2020 onwards, AIIMS MBBS was merged with JIPMER and NEET UG, making NEET UG the single nationwide entrance test for all medical colleges in India including AIIMS institutions. The exam evaluated candidates on Physics, Chemistry, and Biology at the 10+2 level, testing conceptual understanding and application of scientific principles essential for medical studies. Lakhs of students appeared for this highly competitive examination annually.`,
  examPattern: `The AIIMS MBBS examination consisted of 200 multiple-choice questions (MCQs) divided across four sections: Physics (60 questions), Chemistry (60 questions), Biology (60 questions including Botany and Zoology), and General Knowledge/Aptitude (20 questions). Total duration was 3 hours and 30 minutes. Each correct answer was awarded 1 mark with no negative marking for incorrect answers. The examination was conducted in a computer-based (CBT) format at designated test centres across India. Questions were designed to test comprehension, application, and analytical skills rather than mere recall.`,
  eligibility: `Candidates must have completed the 10+2 or equivalent examination with Physics, Chemistry, Biology, and English as compulsory subjects from a recognized board. A minimum aggregate of 60% marks in Physics, Chemistry, and Biology (PCB) is required for the general category, with 50% for SC/ST and 55% for OBC candidates. The upper age limit was 25 years for general category with 5-year relaxations for SC/ST/OBC candidates. Only Indian citizens and Overseas Citizens of India (OCI) were eligible to appear for the examination.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for AIIMS MBBS — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for AIIMS MBBS — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for AIIMS MBBS — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for AIIMS MBBS — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for AIIMS MBBS — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for AIIMS MBBS — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for AIIMS MBBS — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for AIIMS MBBS',
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
