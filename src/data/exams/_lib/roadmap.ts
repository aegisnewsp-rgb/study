import type { Subject, DailyTopicItem, RoadmapTemplate, Phase } from '../types';

// Phase blueprints for long-duration plans. Long plans need real structure
// (foundation → advanced → mocks) rather than a flat topic list, otherwise
// 3mo and 1yr render the same data with only a different page title.
const PHASE_BLUEPRINTS: Record<string, Phase[]> = {
  '1mo': [
    { name: 'Foundation pass', weeks: 3, focus: 'Cover full syllabus once, weight-sorted', deliverables: ['Daily ~3 topics', 'Short notes per topic', 'End-of-week recap'] },
    { name: 'Mock + revision', weeks: 1, focus: 'Two full-length mocks + targeted revision', deliverables: ['Mock 1 + analysis', 'Mock 2 + analysis', 'Weak-area drill'] },
  ],
  '2mo': [
    { name: 'Foundation', weeks: 4, focus: 'Concept building across full syllabus', deliverables: ['~2 topics/day', 'Cheatsheet per subject', 'Topic-wise quizzes'] },
    { name: 'Practice', weeks: 3, focus: 'Topic-wise problem sets, no new concepts', deliverables: ['100+ problems/subject', 'Daily timed drills', 'Error log'] },
    { name: 'Mocks + revision', weeks: 1, focus: '3-4 full-length mocks + analysis', deliverables: ['Mock cycle', 'Final formula sheet'] },
  ],
  '3mo': [
    { name: 'Foundation', weeks: 4, focus: 'Concept pass across full syllabus', deliverables: ['Subject-wise notes', 'Topic-wise quizzes', 'Weekly recaps'] },
    { name: 'Advanced + practice', weeks: 4, focus: 'Higher-difficulty problems, PYQs', deliverables: ['Last 5 years PYQs', 'Topic-wise problem journals', 'Weak-topic drill'] },
    { name: 'Mock cycle + revision', weeks: 4, focus: '6-8 full-length mocks + per-mock analysis', deliverables: ['Bi-weekly mocks', 'Final revision sheet', 'Last-mile cheatsheets'] },
  ],
  '6mo': [
    { name: 'Foundation', weeks: 8, focus: 'Build concept depth across full syllabus', deliverables: ['Topic-wise notes', 'Concept tests', 'Recap docs'] },
    { name: 'Advanced + PYQs', weeks: 10, focus: 'PYQs of last 7-10 years; advanced problems', deliverables: ['Year-wise PYQ solving', 'Topic-wise problem mastery', 'Concept gap-fix list'] },
    { name: 'Mocks + final revision', weeks: 6, focus: 'Weekly full-length mocks; targeted revision', deliverables: ['10+ full mocks', 'Weak-topic eradication', 'Last-mile drill'] },
  ],
  '1yr': [
    { name: 'Foundation Q1', weeks: 12, focus: 'Concept pass + textbook coverage', deliverables: ['NCERT/standard-text mastery', 'Topic-wise notes', 'Concept tests'] },
    { name: 'Advanced Q2', weeks: 12, focus: 'Higher-difficulty material, problem journals', deliverables: ['Reference book problems', 'Topic-wise journals', 'Weak-area drill'] },
    { name: 'Practice Q3', weeks: 14, focus: 'PYQs + topic-wise mocks', deliverables: ['Last 10 years PYQs', 'Topic-mock cycles', 'Error log'] },
    { name: 'Mocks + revision Q4', weeks: 14, focus: 'Weekly full-length mocks + final revision', deliverables: ['12+ mocks', 'Final cheatsheets', 'Last-mile drill'] },
  ],
  '2yr': [
    { name: 'Y1 Foundation', weeks: 24, focus: 'Concept depth + NCERT-level coverage', deliverables: ['Subject-wise mastery', 'Topic notes', 'Monthly tests'] },
    { name: 'Y1 Advanced', weeks: 28, focus: 'Reference-book level problems + first PYQ pass', deliverables: ['Topic-wise problem mastery', 'PYQ pass 1', 'Weak-area journal'] },
    { name: 'Y2 Practice', weeks: 26, focus: 'PYQ deep-dive + topic-wise mocks', deliverables: ['PYQ pass 2', 'Topic-mock cycles', 'Concept-gap closure'] },
    { name: 'Y2 Mocks + final', weeks: 26, focus: 'Weekly full-length mocks + final revision', deliverables: ['20+ mocks', 'Last-mile cheatsheets', 'Exam-mode drills'] },
  ],
};

export function makeRoadmap(subjects: Subject[], durationKey: string, totalDays: number, description: string): RoadmapTemplate {
  // SR-FEASIBILITY-V1 — feasibility-aware topic selection.
  // Per-duration coverage and per-day load assume realistic study budgets:
  //   short plans (<= 12h): 30-45 min/topic, single pass, weight-sorted
  //   day-scale (1d-2w):    rapid first pass, partial → full coverage
  //   month+:               full coverage; longer plans get more revision
  // Subjects are round-robin interleaved so day-1 isn't all one subject.
  const allTopics: DailyTopicItem[] = [];
  for (const s of subjects) {
    for (const t of s.topics) allTopics.push({ ...t, subject: s.name });
  }
  const totalTopics = allTopics.length;

  // coverage = monotonic fraction of distinct topics shown.
  const coverageMap: Record<string, number> = {
    '1h':  0.03, '2h':  0.06, '3h':  0.09, '5h':  0.14, '12h': 0.20,
    '1d':  0.25, '2d':  0.35, '3d':  0.45, '5d':  0.60, '7d':  0.75,
    '10d': 0.90, '2w':  1.00,
    '1mo': 1.00, '2mo': 1.00, '3mo': 1.00, '6mo': 1.00, '1yr': 1.00, '2yr': 1.00,
  };
  // Hard floor per duration — guarantees monotonic non-decreasing topic count
  // across the duration sequence even when the syllabus is small (≤55 topics).
  // Without these, exams like uneb (14 topics) would show 1d=4 < 12h=14.
  const minTopicsMap: Record<string, number> = {
    '1h': 2,  '2h': 4,  '3h': 6,  '5h': 9,  '12h': 14,
    '1d': 16, '2d': 18, '3d': 22, '5d': 28, '7d': 34,
    '10d': 42, '2w': 50,
    '1mo': 50, '2mo': 50, '3mo': 50, '6mo': 50, '1yr': 50, '2yr': 50,
  };
  const cov = coverageMap[durationKey] ?? 1.00;
  const floor = minTopicsMap[durationKey] ?? 1;
  // Cap at totalTopics last so a small-syllabus exam never asks for more
  // topics than it has.
  const pickCount = Math.min(totalTopics, Math.max(floor, Math.ceil(totalTopics * cov)));

  // Group by subject, sort each by weight desc, then round-robin interleave.
  const bySubject: Record<string, DailyTopicItem[]> = {};
  const order: string[] = [];
  for (const t of allTopics) {
    if (!bySubject[t.subject]) { bySubject[t.subject] = []; order.push(t.subject); }
    bySubject[t.subject].push(t);
  }
  for (const k of order) bySubject[k].sort((a, b) => b.weight - a.weight);

  const interleaved: DailyTopicItem[] = [];
  let depth = 0;
  while (interleaved.length < totalTopics) {
    let added = false;
    for (const k of order) {
      const arr = bySubject[k];
      if (arr[depth]) { interleaved.push(arr[depth]); added = true; }
    }
    depth++;
    if (!added) break;
  }

  const dailyTopics: DailyTopicItem[] = interleaved.slice(0, pickCount);
  const phases = PHASE_BLUEPRINTS[durationKey];
  return { duration: durationKey, totalDays, dailyTopics, description, ...(phases ? { phases } : {}) };
}
