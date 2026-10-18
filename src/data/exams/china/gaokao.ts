import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'gaokao',
  examName: 'Gaokao (China National College Entrance)',
  country: 'china',
  description: `The gaokao syllabus follows the 3+1+2 model, 750 marks in total: three compulsory papers — Chinese Language (150 marks, 150 minutes), Mathematics (150 marks, 120 minutes) and a Foreign Language paper (English, Japanese, Russian or German — 150 marks, 120 minutes) — then one stream-defining paper chosen between Physics (Science stream, 理科) and History (Arts stream, 文科), plus two more subject papers chosen from Chemistry, Biology, Politics and Geography. A Science student therefore sits Physics, Chemistry and Biology; an Arts student sits History, Politics and Geography. Each paper runs 120-150 minutes and the papers are held across two days in June. 29 provincial-level regions now run the reformed 3+1+2 model; Shanghai and Beijing still use the older 3+3 model. Gaokao is China's national university entrance examination — one of the largest and most consequential exams in the world, with about 12.9 million students registered in 2026, down from 13.35 million in 2025. It determines admission to undergraduate programmes at Chinese universities and is the single most important academic milestone in a Chinese student's life. The Science or Arts stream choice determines their university placement and future career paths.`,
  examPattern: '3+1+2 model. Compulsory (3): Chinese Language (150 marks, 150 minutes), Mathematics (150 marks, 120 minutes), Foreign Language (150 marks, 120 minutes). Stream-defining paper (1): Physics for the Science stream or History for the Arts stream. Two further papers (2) chosen from Chemistry, Biology, Politics and Geography — so Science sits Physics + Chemistry + Biology, Arts sits History + Politics + Geography. Papers run 120-150 minutes each across two days in June. Total marks: 750. Shanghai and Beijing use the older 3+3 model instead.',
  eligibility: 'High school graduation certificate (普通高中毕业证书), minimum age typically 17. Students must be from mainland China or meet specific residency requirements. Students from Hong Kong, Macau, and Taiwan may have separate admission channels. Foreign nationals studying in China may apply through specific scholarship programmes or as international students through separate channels.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Gaokao (China) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Gaokao (China) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Gaokao (China) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Gaokao (China) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Gaokao (China) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Gaokao (China) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Gaokao (China) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Gaokao (China) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Gaokao (China) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Gaokao (China) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Gaokao (China) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Gaokao (China) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Gaokao (China) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Gaokao (China) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Gaokao (China) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Gaokao (China) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Gaokao (China) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Gaokao (China) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Gaokao (China)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Gaokao is China\'s national university entrance examination — one of the largest and most consequential exams in the world. Over 12.9 million students registered in 2026. For Gaokao (China National College Entrance), match the exam medium for Gaokao (China National College Entrance) to whatever https://www.neea.edu.cn states — do not assume English for Gaokao (China National College Entrance).',
  commonMistakes: [
    'Coaching blogs that skip https://www.neea.edu.cn often recycle a retired Gaokao (China National College Entrance) pattern.',
    'Untimed Gaokao (China National College Entrance) practice hides whether you can finish the published paper.',
    'Photo, ID, and attempt-limit rules for Gaokao (China National College Entrance) live on https://www.neea.edu.cn, not on WhatsApp.',
    'Treat \'sure selection\' Gaokao (China National College Entrance) ads as marketing; the board does not endorse them.',
    'Pattern note for Gaokao (China National College Entrance): the exam runs the 3+1+2 model — 3 compulsory papers, 1 stream-defining paper (Physics for Science, History for Arts), then 2 more chosen from Chemistry, Biology, Politics and Geography, for 750 marks in total. A candidate who plans around "3 subjects plus 1 elective" sits the wrong subject set. Confirm that wording on https://www.neea.edu.cn before you lock a timetable.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.neea.edu.cn',
};

export default exam;
