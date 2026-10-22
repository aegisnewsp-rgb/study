import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'gaokao-cn',
  examName: 'Gaokao Science Stream (China)',
  country: 'china',
  description: 'Gaokao Science Stream (理科, Likao) is the science track of China\'s national university entrance examination. This is an alias/specialized variant of the main Gaokao exam for students in the science stream. Science stream students take Physics, Chemistry, and Biology as their combined science paper alongside the mandatory Chinese, Mathematics, and English papers. This stream leads to engineering, medicine, natural sciences, and technology degree programmes at China\'s top universities including Tsinghua, Peking University, Fudan, and Shanghai Jiao Tong.',
  examPattern: 'Combined Science paper (Physics, Chemistry, Biology) worth 300 marks combined: Physics(110 marks), Chemistry(100 marks), Biology(90 marks). This is taken alongside the mandatory Chinese(150), Mathematics(150), and English(150) papers. Total: 750 marks. The science paper is typically 2.5 hours. Questions range from basic recall to complex analytical problems requiring multi-step solutions.',
  eligibility: 'High school graduation certificate (普通高中毕业证书) with science stream background. Students must have studied Physics, Chemistry, and Biology throughout their senior high school years. Minimum age typically 17. Students from mainland China with valid household registration (Hukou). Students from Hong Kong, Macau, and Taiwan follow separate admission procedures through the Mainland College Entrance Examination (聯招).',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Gaokao Science Stream (China) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Gaokao Science Stream (China) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Gaokao Science Stream (China) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Gaokao Science Stream (China) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Gaokao Science Stream (China) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Gaokao Science Stream (China) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Gaokao Science Stream (China) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Gaokao Science Stream (China) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Gaokao Science Stream (China) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Gaokao Science Stream (China) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Gaokao Science Stream (China) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Gaokao Science Stream (China) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Gaokao Science Stream (China) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Gaokao Science Stream (China) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Gaokao Science Stream (China) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Gaokao Science Stream (China) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Gaokao Science Stream (China) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Gaokao Science Stream (China) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Gaokao Science Stream (China)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Gaokao Science Stream is a 750-mark examination, and the way to prepare for it is to treat the science paper as one subject rather than three. Physics carries 110 marks, Chemistry 100 and Biology 90 inside a single 300-mark Combined Science paper, so skipping Biology alone puts 90 of the paper\'s 300 marks outside your revision plan. Chinese, Mathematics and English each carry 150 marks on top — more than the science paper on its own — and each is a separate paper. Sit the science paper to its typical 2.5 hours in every mock, because the paper moves from straight recall to problems that take several steps to solve. If you hold Hong Kong, Macau or Taiwan credentials, check the separate 聯招 admission procedure early: those applicants do not come through the mainland route.',
  commonMistakes: [
    'Treating the science paper as one block and ignoring its internal mark split wastes prep time because Physics, Chemistry and Biology carry 110, 100 and 90 marks respectively within the 300-mark combined paper.',
    'Forgetting that English, Chinese and Mathematics each sit as a separate 150-mark paper leads candidates to underweight them while overdrilling the combined science paper alone.',
    'Overlooking household registration rules out mainland applicants, because eligibility requires a valid Hukou while candidates from Hong Kong, Macau and Taiwan apply through the separate Mainland College Entrance Examination (聯招).',
    'Skipping Physics, Chemistry or Biology in senior high school rules you out, because eligibility requires all three to have been studied throughout the senior high school years.',
    'Applying without checking the eligibility floor is a mistake, because Gaokao asks for a high school graduation certificate with a science stream background and a minimum age typically 17.',
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.neea.edu.cn',
};

export default exam;
