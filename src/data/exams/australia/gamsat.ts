import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { gamsatBioPhysical } from './subjects/gamsat-bio-physical';
import { gamsatHumanities } from './subjects/gamsat-humanities';
import { gamsatWriting } from './subjects/gamsat-writing';

const subjects: Subject[] = [
  gamsatBioPhysical,
  gamsatHumanities,
  gamsatWriting,
];

const exam: ExamTemplate = {
  examId: 'gamsat',
  examName: 'GAMSAT (Graduate Medical School Admissions Test)',
  country: 'australia',
  description:
    'GAMSAT is a computer-based assessment used by Australian universities for entry to graduate-entry medicine and allied health courses. ACER describes it as assessing "capacity to undertake high-level intellectual studies for academic success" — it is not a test of medical knowledge. The three sections are Biological and Physical Sciences (75 multiple-choice questions), Humanities and Social Sciences (62 multiple-choice questions), and Written Communication (2 essay responses). The 137 multiple-choice items are the bulk of the paper, so aptitude and data-reading speed matter more than encyclopaedic recall.',
  examPattern:
    'Three sections. Biological and Physical Sciences: 75 multiple-choice questions, assessing the ability to identify knowledge in new contexts and to analyse and interpret data. Humanities and Social Sciences: 62 multiple-choice questions, testing interpretation and understanding of ideas in social and cultural contexts. Written Communication: 2 essay responses, assessing the ability to generate and develop ideas in writing. ACER states the test is computer-based and is offered two test cycles per year, aligned to application cycles, with results made available to universities for verification. Delivery is a mix of test-centre sitting and remote proctoring — if you sit remotely you must meet ACER\'s minimum technical requirements to complete the Written Communication section.',
  eligibility:
    'ACER states that GAMSAT is available to any person applying to study a course for which GAMSAT is a prerequisite and who meets that institution\'s academic entry requirements. You must have already completed, or be currently enrolled in, a bachelor or undergraduate honours degree, or meet your prospective institution\'s entry requirements at the time you apply. There is no limit on the number of times you may sit GAMSAT. ACER also notes that a first degree in a non-scientific field is not a barrier — while institutions encourage humanities and social-science applicants, ACER stresses that success "is unlikely without knowledge and ability in the biological and physical sciences". Critically, ACER warns that result validity differs between countries and institutions, so you must check the currency of your score against the test cycle your target institution is reading.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'GAMSAT study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'GAMSAT study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'GAMSAT study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'GAMSAT study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'GAMSAT study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'GAMSAT study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'GAMSAT study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'GAMSAT study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'GAMSAT study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'GAMSAT study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'GAMSAT study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'GAMSAT study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'GAMSAT study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'GAMSAT study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'GAMSAT study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'GAMSAT study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'GAMSAT study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'GAMSAT study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Last-ditch GAMSAT plan when the test is days away',
    duration: '1d',
    focusAreas: [
      { subject: 'Biological and Physical Sciences', topics: ['Data Analysis and Graph Interpretation', 'Molecular Biology and Genetics', 'Scientific Method and Experimental Design'] },
      { subject: 'Humanities and Social Sciences', topics: ['Reading Comprehension and Inference', 'Argument and Reasoning', 'Ethics and Moral Reasoning'] },
      { subject: 'Written Communication', topics: ['Timed Essay Technique', 'Paragraph and Coherence'] },
    ],
    strategy: 'Run one timed multiple-choice block under real conditions and one full timed essay, then spend the remaining time on analysis rather than more reading. The essay is the section most improved by a single honest timed attempt; the multiple-choice sections are improved by practising data interpretation, not by re-reading textbooks.',
  },
  prepOverview:
    'Because GAMSAT tests reasoning applied to unfamiliar material more than it tests recall, the prep that pays is timed exposure to dense scientific and social-science material, not syllabus coverage. Spend the first block rebuilding quantitative and data-reading fluency — graph interpretation, scientific method and quantitative reasoning carry more transferable marks than any single content topic. In the second block, do Humanities and Social Sciences as argument practice: identify the claim, find the premise, name the assumption. Only then start timing essays, because a well-argued essay written untimed teaches you nothing about pacing. Run full-length timed mocks from week three, sit them remotely at least once if you intend to take the test that way, and analyse every mock — the section you improve is usually the one you analyse properly. ACER publishes no per-topic weightage for either multiple-choice section, so treat any weightings you see online, including the ones on this page, as study guidance rather than official breakdowns.',
  commonMistakes: [
    'Assuming the multiple-choice sections are content quizzes. They are not: the Biological and Physical Sciences section explicitly assesses applying knowledge "in new contexts" and analysing data.',
    'Studying as though a science degree is required to sit the test. ACER confirms a non-science first degree is not a barrier, but warns that success is unlikely without biological and physical science knowledge.',
    'Leaving the Written Communication section until last. Two essays under a hard time cap are worth a large share of the score and are the section most damaged by untimed practice.',
    'Ignoring result validity windows. ACER states validity differs between countries and institutions — a score can be too old for the cycle your target university reads.',
    'Not testing your technical setup before a remote-proctored sitting. ACER sets minimum technical requirements specifically for completing the Written Communication section remotely.',
    'Believing an unofficial "GAMSAT score predictor" result. Only the score ACER issues and sends to universities is verified.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://www.acer.edu.au/gamsat',
};

export default exam;