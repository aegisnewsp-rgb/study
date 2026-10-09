import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { numsBiology } from './subjects/nums-biology';
import { numsChemistry } from './subjects/nums-chemistry';
import { numsPhysics } from './subjects/nums-physics';
import { numsEnglish } from './subjects/nums-english';
import { numsPsychologicalTest } from './subjects/nums-psychological-test';

const subjects: Subject[] = [
  numsBiology,
  numsChemistry,
  numsPhysics,
  numsEnglish,
  numsPsychologicalTest,
];

const exam: ExamTemplate = {
  examId: 'nums-mdcat',
  examName: 'NUMS MDCAT (NUMS Admission Test, Pakistan)',
  country: 'pakistan',
  description:
    'NUMS runs its own medical and dental entrance test, separate from the national PM&DC MDCAT. The 2026 sitting was held on 13 September 2026 for MBBS and BDS admissions into NUMS constituent, affiliated and Military (Armed Forces) administered medical and dental colleges for session 2026–27. It is a paper-based examination in two papers: Paper I is 150 one-best-option multiple-choice questions across Biology, Chemistry, Physics and English in 2 hours 45 minutes; Paper II is a 50-question Psychological Test in 15 minutes. NUMS states that there is no negative marking.',
  examPattern:
    'Paper I: 150 one-best-option MCQs in 2 hours 45 minutes, allocated Biology 55 questions (printed as 37.0%), Chemistry 40 (26.5%), Physics 40 (26.5%) and English 15 (10.0%). Paper II: the Psychological Test, 50 one-best-option MCQs in 15 minutes, which NUMS\'s structure table gives a 5% component weightage. NUMS also publishes a difficulty distribution for the paper — easy 20%, moderate 60%, hard 20% of MCQs — and states that for Biology, Chemistry and Physics, 70% of questions are recall-level and 30% application-level. Marking is one-best-option throughout with no negative marking. NUMS publishes detailed content lists and learning objectives for Biology, Chemistry, Physics and English, but no topic-level percentage allocation, so any topic weightage you see quoted is a study aid rather than an official blueprint.',
  eligibility:
    'NUMS publishes these eligibility conditions verbatim for session 2026–27: "The candidates having valid citizenship of Pakistan / Overseas Pakistanis/Dual Nationals/Foreign Nationals can appear in NUMS MDCAT-2026." And: "FSc/HSSC/A-Levels/ 12th Grade and candidate result awaiting can apply for NUMS MDCAT-2026." Candidates below 18 need a valid Juvenile card issued by NADRA. The same notice states: "Only NUMS MDCAT -2026 being held on 13th September 2026 will be valid for admission in MBBS/BDS Session 2026-27 in NUMS Constituent, Affiliated and all Military (Armed Forces) Administered Medical and Dental Colleges." Note the scope question worth checking before you apply: NUMS\'s operational notice lists constituent, affiliated, private-sector and Armed Forces colleges, while the Pakistan Medical and Dental Council\'s Admissions Regulations-2025 describe the NUMS admission test as considered only for Armed Forces-administered colleges. Both are official statements and they do not fully agree.',
  calendarDates: {
    applicationStart: '18 May 2026',
    applicationEnd: '22 June 2026 by 4:00 PM (regular fee); late-fee registration closes 19 August 2026 by 4:00 PM',
    examDates: '13 September 2026 at 10:00 AM PST, at local examination centres (international centre time stated on the admit card)',
    resultDate: 'Not published as a fixed date. NUMS operates a separate result portal for MDCAT (NUMS) 2026.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'NUMS MDCAT study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'NUMS MDCAT study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'NUMS MDCAT study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'NUMS MDCAT study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'NUMS MDCAT study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'NUMS MDCAT study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'NUMS MDCAT study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'NUMS MDCAT study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'NUMS MDCAT study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'NUMS MDCAT study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'NUMS MDCAT study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'NUMS MDCAT study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'NUMS MDCAT study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'NUMS MDCAT study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'NUMS MDCAT study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'NUMS MDCAT study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'NUMS MDCAT study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'NUMS MDCAT study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Last-ditch NUMS MDCAT plan in the final fortnight before the September sitting',
    duration: '2w',
    focusAreas: [
      { subject: 'Biology', topics: ['Human Physiology: Systems and Homeostasis', 'Genetics and Molecular Biology'] },
      { subject: 'Chemistry', topics: ['Organic Chemistry and Biochemistry', 'Acids, Bases, Buffers and pH'] },
      { subject: 'Physics', topics: ['Newton\'s Laws and Forces', 'Work, Energy, Power and Momentum'] },
      { subject: 'English', topics: ['Reading Comprehension and Inference'] },
      { subject: 'Psychological Test (Paper II)', topics: ['Time and Attempt Strategy for Paper II', 'Classification, Odd-One-Out and Series Problems'] },
    ],
    strategy: 'Paper II first, because it is the one component you can still transform in a fortnight: 50 questions in 15 minutes is a pacing problem until it is not, and no amount of syllabus revision fixes a 20-minute overrun. Run four full Paper II sittings this week with a hard stop. Then split the fortnight by NUMS\'s own allocation — Biology is the largest single block at 55 questions, so it gets the most hours, and English at 15 questions gets the least. Reserve the last two days for two complete Paper I sittings under exam timing, since 150 questions in 2 hours 45 minutes is roughly 39 seconds each and most candidates discover they cannot hold that pace untimed.',
  },
  prepOverview:
    'NUMS states that 70% of the Biology, Chemistry and Physics questions are recall-level and 30% application-level. Read that as a study plan: the largest share of your marks comes from accurate recall under a clock, not from solving unfamiliar problems. That favours breadth over depth — you need every topic represented, not three topics mastered. The exception is the 30% application component, which is where a timed question bank pays back, because application items test whether you can use a fact rather than whether you can produce it on cue. Paper II is the exception to the whole approach: it is 50 questions in 15 minutes, worth a 5% component weightage, and it rewards raw practice volume far more than understanding. Because NUMS states there is no negative marking, the correct Paper II behaviour is to attempt every item, which is only possible if you have pre-decided to leave an item that is not resolving inside its first fifteen seconds. Finally, read the scope question before you sit: NUMS\'s notice and the PM&DC Admissions Regulations-2025 describe who accepts the NUMS test, and they do not say the same thing.',
  commonMistakes: [
    'Confusing this with the national PM&DC MDCAT. NUMS runs its own test on its own date with its own fee structure. The 2026 national MDCAT was rescheduled to 20 September 2026 while NUMS MDCAT 2026 was held on 13 September 2026 — two separate tests, two separate schedules.',
    'Assuming your NUMS result is accepted by every private medical college. NUMS\'s operational notice is broader than the wording in the PM&DC Admissions Regulations-2025, and the difference decides whether your score is usable.',
    'Spending the whole revision window on Paper I content and treating Paper II as a formality. Fifty questions in 15 minutes is 18 seconds each, and the component carries a published 5% weightage.',
    'Applying negative-marking habits from another entrance test. NUMS states there shall be no negative marking, so a guess costs you nothing and a stall costs you the next five items.',
    'Miss the registration deadline and assume a late fee will always be available. The regular-fee deadline and the late-fee deadline are about two months apart; the second one is the real one.',
    'Turning up without checking the admit card for the international centre. Local centres start at 10:00 AM PST, and NUMS states the international-centre time appears on the admit card.',
    'Applying below 18 without a NADRA Juvenile card. NUMS names this requirement explicitly.',
    'Treating NUMS\'s difficulty split as a target. The 20/60/20 easy-moderate-hard distribution describes the paper, not a strategy — chasing easy items is worth less than finishing the moderate ones.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://numspak.edu.pk/news-detail/nums-mdcat-2026-for-admissions-in-mbbs-bds-session-2026-27',
};

export default exam;