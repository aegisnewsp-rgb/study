import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { logical_reasoning } from './subjects/logical-reasoning';
import { qa } from './subjects/qa';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    logical_reasoning,
    qa,
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
  examId: 'snap',
  examName: 'SNAP',
  description: 'SNAP (Symbiosis National Aptitude Test) is a national-level MBA entrance examination conducted by Symbiosis International University for admission to its various institutes including SCMHRD, SIBM, SIOM, and others. SNAP is unique among Indian MBA exams as it has a lower difficulty level compared to CAT/XAT but is still competitive due to the reputation of Symbiosis institutes. The exam consists of four sections: General English (Reading Comprehension, Verbal Reasoning, Verbal Ability), Quantitative Data Interpretation & Sufficiency (Quantitative Aptitude, Data Interpretation, Data Sufficiency), Analytical & Logical Reasoning (Puzzles, Syllogisms, Blood Relations, Coding), and General Awareness (Current Affairs, Static GK). Unlike other exams, SNAP has a differential marking scheme where some questions carry 2 marks and others 1 mark. The test is conducted in online mode with a total duration of 60 minutes for 60 questions. Candidates must score above the sectional and overall cut-offs to be shortlisted for Group Discussion and Personal Interview rounds at individual institutes.',
  examPattern: 'SNAP is conducted in an online proctored format with 60 multiple choice questions to be answered in 60 minutes. The sections and their typical weightings are: General English (15 questions), Quantitative Data Interpretation & Sufficiency (20 questions), Analytical & Logical Reasoning (15 questions), and General Awareness (15 questions). The marking scheme is not uniform — questions carry either 1 mark or 2 marks. There is negative marking of 0.25 marks for wrong answers. The score is scaled out of 60 (though recent patterns may vary). Shortlisted candidates appear for institute-specific Group Discussion and Personal Interview rounds.',
  eligibility: 'Candidates must hold a bachelor\'s degree in any discipline with minimum 50% marks (45% for SC/ST) from a recognized university. Final year students awaiting results can apply provisionally. There is no age limit for SNAP. Candidates can appear for SNAP and apply to multiple Symbiosis institutes simultaneously by paying separate institute fees. Work experience is preferred by some institutes for specific programs but is not mandatory for appearing in SNAP.',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SNAP — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SNAP — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SNAP — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SNAP — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SNAP — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SNAP — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SNAP — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SNAP',
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
