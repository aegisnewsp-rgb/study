import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { legal_reasoning } from './subjects/legal-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    legal_reasoning,
    gk,
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
  examId: 'law-apt-kenya',
  examName: 'Kenya Law Aptitude',
  country: 'kenya',
  description: 'The Kenya Law Aptitude Test (LAT) is an entrance examination for admission to law programmes at Kenyan universities, primarily the Kenya School of Law which trains advocates. The test assesses candidates on logical reasoning, legal awareness, English language proficiency, and general knowledge — skills essential for legal study. The LAT is typically administered annually and is a prerequisite for enrollment in the Certificate in Law programme offered by the Kenya School of Law in Nairobi.',
  examPattern: 'Typically consists of two papers: Paper 1 covers English (comprehension, grammar, vocabulary) and General Knowledge (current affairs, history, politics), while Paper 2 covers Logical Reasoning (analytical thinking, argument analysis) and Legal Awareness (constitutional law basics, human rights, legal institutions in Kenya). Questions are MCQs and short-answer format. Total duration is approximately 2-3 hours.',
  eligibility: 'KCSE holder with minimum C+ including C+ in English. Candidates must have completed a bachelor\'s degree (for the Diploma in Law route) or have A-Level qualifications. There is no age limit. Candidates with prior legal knowledge or those who have completed relevant certificate courses may have an added advantage. Applications are made through the Kenya School of Law admissions portal.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Kenya Law Aptitude — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Kenya Law Aptitude — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Kenya Law Aptitude — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Kenya Law Aptitude — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Kenya Law Aptitude — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Kenya Law Aptitude — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Kenya Law Aptitude — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Kenya Law Aptitude',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://ksl.ac.ke',
};

export default exam;
