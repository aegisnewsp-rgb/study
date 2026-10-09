import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { tmuaPaper1Applications } from './subjects/tmua-paper-1-applications';
import { tmuaAlgebraAndCalculus } from './subjects/tmua-algebra-calculus';
import { tmuaMathematicalReasoning } from './subjects/tmua-mathematical-reasoning';

const subjects: Subject[] = [
  tmuaPaper1Applications,
  tmuaAlgebraAndCalculus,
  tmuaMathematicalReasoning,
];

const exam: ExamTemplate = {
  examId: 'tmua',
  examName: 'TMUA (Test of Mathematics for University Admission)',
  country: 'uk',
  description:
    'TMUA is a mathematics admissions test for applicants to engineering-related and mathematics degrees, administered by University Admissions Tests UK (UAT-UK), a collaboration between Imperial College London and the University of Cambridge and delivered through Pearson VUE test centres. It is computer-based, lasts 2 hours 30 minutes in total and consists of two papers of 20 multiple-choice questions each, 75 minutes per paper. It has no pass mark and no negative marking, so a candidate is scored purely on how many answers are correct.',
  examPattern:
    'Paper 1, Applications of Mathematical Knowledge, 20 multiple-choice questions in 75 minutes, assessing "your ability to apply your knowledge of mathematics in new situations". Paper 2, Mathematical Reasoning, 20 multiple-choice questions in 75 minutes, assessing "your ability to deal with mathematical reasoning, and simple ideas from elementary logic". UAT-UK states that no calculator or dictionary may be used, that there is no pass or fail, and that "your final scores are based on the number of correct answers you give. You do not lose marks for wrong answers, so it\'s worth attempting all questions." Candidates receive one single overall score, reported on a scale from 1 (low) to 9 (high) to one decimal place.',
  eligibility:
    'TMUA has no universal academic entry requirement — it is course-specific. UAT-UK states that if you are applying to study Mathematics or a mathematics-related degree such as Economics or Computer Science at a UAT-UK institution, "you may need to take the TMUA. You must check the university webpages for your chosen course to see if the TMUA is required", and warns that "failure to register for your admissions test may invalidate your application". Oxford requires TMUA for Mathematics, Computer Science and relevant joint-honours courses; Cambridge requires advance registration for TMUA for courses including Computer Science, Economics and Mathematics. Most Cambridge and Oxford applicants must sit the October sitting, with exceptions for certain Cambridge mature applicants applying to a mature college with a January admissions deadline and for the Oxford Astrophoria Foundation Year.',
  calendarDates: {
    applicationStart: 'Bookings for the January 2027 sitting open at 3pm (BST) on 26 October 2026. October 2026 bookings closed on Monday 28 September at 6pm UK time.',
    examDates: 'October 2026 sitting: 12–16 October 2026. January 2027 sitting: 4–8 January 2027.',
    resultDate: 'Candidates normally receive results approximately four weeks after the test sitting, through their UAT-UK account.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'TMUA study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'TMUA study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'TMUA study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'TMUA study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'TMUA study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'TMUA study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'TMUA study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'TMUA study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'TMUA study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'TMUA study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'TMUA study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'TMUA study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'TMUA study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'TMUA study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'TMUA study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'TMUA study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'TMUA study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'TMUA study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Four-week TMUA plan for a sitting already booked',
    duration: '1mo',
    focusAreas: [
      { subject: 'Paper 1 — Applications of Mathematical Knowledge', topics: ['Algebraic Manipulation and the Quadratic Core', 'Differentiation and Its Applications'] },
      { subject: 'Algebra and Calculus Foundations', topics: ['MM6 Differentiation', 'MM7 Integration'] },
      { subject: 'Paper 2 — Mathematical Reasoning', topics: ['Err1-Err2: Finding the Error in a Proof', 'Arg1: Statements, Connectives and Truth Conditions'] },
    ],
    strategy: 'Four weeks is enough for Paper 2 and marginal for Paper 1, so start Paper 2. Its content is logic and proof reasoning, it is genuinely learnable in a fortnight, and most candidates arrive having practised mathematics rather than argument. Do one hour of logic every day for the first two weeks, including the error-spotting family, which is the most learnable and the most frequently skipped. Paper 1 gets the remaining time on calculus and the quadratic core, since those are where the question count is. Timed practice starts in week two: 20 questions in 75 minutes is 3 minutes 45 seconds each, and candidates routinely lose marks to arithmetic under pressure rather than to content. Because there is no negative marking, finish every question — a blank is a certain zero and a guess is free.',
  },
  prepOverview:
    'Start with the scoring rule, because it changes how you should sit the paper. UAT-UK states that scores are based on the number of correct answers, that you do not lose marks for wrong answers, and that there is no pass mark. The optimal behaviour follows directly: attempt every question. A candidate who leaves five items blank to "do them properly later" throws away five free lottery tickets. Write the rule at the top of the practice paper and let it govern every decision in the last ten minutes.\n\nThen read the official content specification rather than a third-party topic list. It is short, free, and it is the actual document the paper is written from — MM1 to MM8 for pure mathematics in Paper 1, plus a Section 2 that specifies exactly what logic and proof material Paper 2 assesses.\n\nPractise without a calculator. UAT-UK prohibits both calculator and dictionary, which means a candidate who has quietly relied on either for two years will lose marks on arithmetic they no longer need to do. Do the last month of practice by hand.\n\nTime Paper 1 honestly. 20 questions in 75 minutes is generous per question but unforgiving across the paper, and the applied items are slow — a modelling question you have read carefully can take six minutes. Set the clock for every practice session rather than doing untimed sets, and mark where the time went.\n\nDo not over-invest in the pure-mathematics families. The specification is long, but the exam is short. Calculus, algebra, functions and trigonometry cover most of Paper 1; a candidate who is strong in those and average elsewhere has a realistic score, and a candidate who memorised every topic on the list has not.',
  commonMistakes: [
    'Leaving questions blank. UAT-UK states scores are based on the number of correct answers and you do not lose marks for wrong answers, so a blank is a guaranteed zero.',
    'Using a calculator in practice. UAT-UK permits neither calculator nor dictionary in the test, so fluently-arithmetic-until-exam is a strategy that fails on the day.',
    'Practising Paper 2 only through past mathematics papers. Paper 2 assesses mathematical reasoning and elementary logic — argument, implication, quantifiers and proof-error-spotting — which most mathematics practice barely touches.',
    'Assuming there is a pass mark. UAT-UK states there is no pass or fail; the single overall score is used alongside the rest of your university application.',
    'Missing the booking deadline and assuming there is a late option. UAT-UK states it is "unable to accept test bookings after the stated deadline".',
    'Sitting the January sitting when your university requires October. Most Cambridge and Oxford applicants must sit in October, with narrow exceptions for certain mature applicants and the Oxford Astrophoria Foundation Year.',
    'Assuming the fee follows your nationality. UAT-UK states the fee depends on the test centre location, not your home address or nationality.',
    'Leaving bursary and access-arrangement applications until after booking. UAT-UK states a bursary or access arrangement can only be applied for before a test is selected or booked, and that neither can be applied retrospectively to a test you have already paid for.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://esat-tmua.ac.uk/about-the-tests/tmua-test/',
};

export default exam;