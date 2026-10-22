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
    'GAMSAT is a computer-based assessment developed by ACER in conjunction with GEMPASS Australia Limited, used for entry to graduate-entry medicine and allied health courses in Australia, Ireland and the UK. ACER describes it as assessing "capacity to undertake high-level intellectual studies for academic success" — it is not a test of medical knowledge. The three sections are Biological and Physical Sciences (75 multiple-choice questions), Humanities and Social Sciences (62 multiple-choice questions), and Written Communication (2 essay responses). The 137 multiple-choice items are the bulk of the paper, so aptitude and data-reading speed matter more than encyclopaedic recall.',
  examPattern:
    'Three sections, sat across two separate sittings. Written Communication: two (2) 30-minute writing tasks delivered as a single 65-minute remote-proctored component. Each task offers four statements on a common theme; the first task deals with socio-cultural issues and the second with more personal and social issues. Reasoning in Humanities and Social Sciences: 62 multiple-choice questions in 100 minutes, testing interpretation and understanding of ideas in social and cultural contexts. Reasoning in Biological and Physical Sciences: 75 multiple-choice questions in 150 minutes, assessing the ability to identify knowledge in new contexts and to analyse and interpret data. The two multiple-choice sections are completed at in-person test centres approximately three (3) weeks after the Written Communication test window, so this is not one continuous paper: the writing is sat first, on its own, and the 100- and 150-minute blocks come later. ACER offers two test cycles per year, aligned to application cycles, with results made available to universities for verification. Delivery is a mix of test-centre and remote delivery, but it is not a free choice within one candidate\'s sitting — see Written Communication below.',
  eligibility:
    'ACER states that GAMSAT is available to any person applying to study a course for which GAMSAT is a prerequisite and who meets that institution\'s academic entry requirements. You must have already completed, or be currently enrolled in, a bachelor or undergraduate honours degree, or meet your prospective institution\'s entry requirements at the time you apply. There is no limit on the number of times you may sit GAMSAT. ACER also notes that a first degree in a non-scientific field is not a barrier — while institutions encourage humanities and social-science applicants, ACER stresses that success "is unlikely without knowledge and ability in the biological and physical sciences". Critically, ACER warns that result validity differs between countries and institutions, so you must check the currency of your score against the test cycle your target institution is reading. The window differs by country: a GAMSAT result can be used for applications to Australian universities for up to four consecutive years, and for two consecutive years in the UK and Ireland. For an Australian application lodged in 2026 for a course starting in 2027, ACER accepts results from September 2022, March 2023, September 2023, March 2024, September 2024, March 2025, September 2025 and March 2026. The registration fee is AUD$568 including GST in Australia, €378 in Ireland and £296 in the UK, payable in full by credit card (MasterCard or Visa) at the time of registration, with an additional AUD$208 overseas test levy if you sit in Singapore.',
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
    'Not rehearsing the remote-proctored writing sitting. ACER delivers the Written Communication section by remote proctoring for ALL test takers, so a technical run-through on the machine, keyboard and connection you will use is part of preparing for the paper, not an optional extra.',
    'Planning the test day as one continuous sitting. The Written Communication section is a separate remote-proctored event roughly three weeks ahead of the two multiple-choice sections, so the writing has to be practised inside its own two 30-minute tasks rather than treated as an appendix to the MCQ blocks.',
    'Believing an unofficial "GAMSAT score predictor" result. Only the score ACER issues and sends to universities is verified.',
  ],
  calendarDates: {
    examDates:
      'ACER runs two test cycles a year. The 2026 sittings have both now been sat: March cycle Written Communication 28 February - 1 March 2026 and the two multiple-choice sections 20-22 March 2026; September cycle Written Communication 22-23 August 2026 and the two multiple-choice sections 11-13 September 2026. The next registration window after these is announced on gamsat.acer.org, so check there for the dates and the opening date rather than assuming a cycle is still open.',
    resultDate:
      'Results for the March 2026 cycle were released in late May 2026. Results for the September 2026 cycle are released in mid November 2026.',
  },
  lastUpdated: '2026-10-20',
  officialSource: 'https://gamsat.acer.org/',
  conductingBody: 'ACER',
};

export default exam;