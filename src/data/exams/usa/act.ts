import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { actEnglish } from './subjects/act-english';
import { actMath } from './subjects/act-math';
import { actReading } from './subjects/act-reading';
import { actScience } from './subjects/act-science';

const subjects: Subject[] = [
  actEnglish,
  actMath,
  actReading,
  actScience,
];

const exam: ExamTemplate = {
  examId: 'act',
  examName: 'ACT (American College Testing)',
  country: 'usa',
  description: 'The ACT is a national standardized college admissions assessment administered by ACT, Inc. The exam evaluates academic readiness across four core multiple-choice sections: English (75 questions, 45 minutes), Mathematics (60 questions, 60 minutes), Reading (40 questions, 35 minutes), and Science (40 questions, 35 minutes), accompanied by an optional Writing test (40 minutes). Total testing time for the four required sections is 2 hours and 55 minutes. Each section is graded on a scale of 1 to 36, and the composite score is the unweighted average of the four sections rounded to the nearest integer.',
  examPattern: 'Four standard multiple-choice sections with an optional analytical Writing section. Section 1 English presents 75 questions across 5 essays in 45 minutes (36 seconds per question). Section 2 Mathematics presents 60 questions in 60 minutes with five answer choices per item, ordered from foundational arithmetic to advanced trigonometry. Section 3 Reading provides 40 questions across 4 passages in 35 minutes (approx. 52 seconds per question covering prose fiction, social science, humanities, and natural science). Section 4 Science delivers 40 questions across 6 passages in 35 minutes, evaluating Data Representation, Research Summaries, and Conflicting Viewpoints. No marks are deducted for incorrect answers.',
  eligibility: 'Open to secondary school students and international university applicants. No minimum age or prerequisite academic milestones are mandated. Most candidates take the exam during Year 11 (Junior year) or Year 12 (Senior year). Registration is completed directly through the official ACT candidate portal (my.act.org). Testing occurs across seven national test dates annually in September, October, December, February, April, June, and July.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ACT — 1 Hour Triage'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for ACT — 2 Hours Speed Drills'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for ACT — 3 Hours Targeted Practice'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for ACT — 5 Hours Section Sprint'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for ACT — 12 Hours Strategy Pass'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ACT — 1 Day Full Pass'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for ACT — 2 Days Intensive Review'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ACT — 3 Days Speed and Accuracy'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for ACT — 5 Days Timing Mastery'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ACT — 1 Week Full Prep'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for ACT — 10 Days Benchmark Practice'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for ACT — 2 Weeks Complete Strategy'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ACT — 1 Month Full Syllabus Mastery'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for ACT — 2 Months Structured Study Plan'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ACT — 3 Months Candidate Course'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ACT — 6 Months Comprehensive Preparation'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for ACT — 1 Year Foundation and Mastery'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for ACT — 2 Years Complete Curriculum'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Fast-paced cramming strategy for ACT exam-eve revision',
    duration: '1d',
    focusAreas: subjects.map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 2).map(t => t.name),
    })),
    strategy: 'Focus on English punctuation economy (shortest answer without grammatical flaw is frequently correct), Math plane geometry and algebra fundamentals, and Science figure-reading speed.',
  },
  prepOverview: 'Preparing for the ACT is fundamentally an exercise in pacing and disciplined time management. Unlike the SAT, the ACT tests straightforward concepts under extreme time pressure. On English, candidates must answer 75 questions in 45 minutes; apply the principle of conciseness—when two options are grammatically sound, the shorter, more direct phrasing is almost always correct. On Math, budget time aggressively by completing questions 1 through 30 in 20 minutes, leaving 40 minutes for the more complex geometry, trigonometry, and modeling problems in questions 31 through 60. On Reading, spend no more than 3 minutes actively skimming a passage before tackling questions, relying on paragraph mapping rather than memorization. On the Science section, do not read the dense introductory scientific background text; proceed directly to the questions, locate the cited figures or tables, and trace axes, trends, and experimental units. Never leave any question blank because incorrect answers carry zero penalty.',
  commonMistakes: [
    'Reading the background explanatory text in Science passages before looking at the questions, which wastes critical minutes without adding necessary comprehension.',
    'Pacing Math evenly at one minute per question across all 60 items, leaving insufficient time for the significantly more challenging items in questions 45 to 60.',
    'Overthinking English conciseness items and selecting lengthy, ornate options rather than the most direct and grammatically precise choice.',
    'Failing to track passage line references in Reading and guessing based on vague general impressions rather than direct textual evidence.',
    'Leaving unanswered questions at the end of a section instead of filling in a consistent guess bubble before time expires.',
    'Neglecting foundational middle school arithmetic and algebra rules, which account for a substantial percentage of the Integrating Essential Skills category on Math.',
  ],
  lastUpdated: '2026-09-24',
  officialSource: 'https://www.act.org/content/act/en/products-and-services/the-act.html',
};

export default exam;
