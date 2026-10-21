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
  description: `The gaokao syllabus is the 3+1+2 model: six papers totalling 750 marks. Three are compulsory and nationally unified — Chinese, Mathematics, and one Foreign Language paper, most often English, though Japanese, Russian and German are approved in some provinces. Each of those three is worth 150 marks, so they carry 450 of the 750. The stream-defining paper (the "1") is Physics (理科) for Science or History (文科) for Arts, worth 100 marks. The final two (the "2") are drawn from Chemistry, Biology, Politics and Geography at 100 marks each. A Science candidate therefore sits Physics, Chemistry and Biology for 300 marks; an Arts candidate sits History, Politics and Geography for the same 300. Most provincial-level regions run this reformed model, which covers the large majority of candidates; Shanghai, Beijing, Zhejiang, Shandong, Tianjin and Hainan instead use their own 3+3-style arrangements. The ExamPattern block below lists every paper with its marks and timing.`,
  examPattern: '3+1+2 model, 750 marks total. Compulsory (3), each worth 150 marks: Chinese Language (150 minutes), Mathematics (120 minutes), and one Foreign Language paper (120 minutes). Together they supply 450 marks. Stream-defining paper (1), worth 100 marks: Physics (理科) for the Science stream or History (文科) for the Arts stream. Selective papers (2), each worth 100 marks, taken from Chemistry, Biology, Politics and Geography. 450 + 100 + 100 + 100 = 750. In 2026 the national papers were set on 7-8 June, with several provinces adding their selective papers on 9 June and a few running as late as 10 June, so confirm your own province\'s timetable rather than assuming a single national window. Shanghai, Beijing, Zhejiang, Shandong, Tianjin and Hainan use their own 3+3-style arrangements instead, whose subjects, groupings and marks are not identical to the model above — check your province\'s official scheme rather than assuming the 3+1+2 breakdown applies to you.',
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
    'Over 12.9 million candidates registered for the 2026 gaokao, so seat allocation is competitive by default. Match your chosen exam medium to whatever https://www.neea.edu.cn states for that year — do not assume English by default. Plan the three compulsory papers first: Chinese, Mathematics and the foreign language carry 450 of the 750 marks, so they decide the bulk of your score. Then commit to a stream early, because the Physics-or-History choice sets which two of Chemistry, Biology, Politics and Geography you can take, and changing subject combination late can force substantial re-planning on top of your revision. Shanghai, Beijing, Zhejiang, Shandong, Tianjin and Hainan candidates sit 3+3 rather than 3+1+2, so read your own province\'s scheme before following any generic gaokao plan.',
  commonMistakes: [
    'Blogs that never cite https://www.neea.edu.cn or your provincial examination authority usually recycle a retired paper pattern — the reformed model has shifted more than once since 2019, so an undated blog is not evidence of anything.',
    'Practising untimed papers hides the one thing the gaokao actually tests: Chinese allows 150 minutes while Mathematics and the foreign language paper allow 120 each, so a candidate who is slow on Mathematics can run out of time on a paper they otherwise know well.',
    'Admit-card, seat-allocation and ID rules are published by your provincial examination authority and by https://www.neea.edu.cn. They are not sent over WhatsApp or WeChat, so treat any such direct message claiming to be the gaokao authority as a scam.',
    'Ads promising guaranteed admission or a guaranteed provincial rank are not endorsed by the Ministry of Education. Provincial rankings are calculated under local rules from candidates\' own examination results, so no legitimate paid agent can reserve a place or a rank in advance.',
    'Sitting the wrong subject set is the costliest mistake here. The "1" is not an elective you can defer: it is fixed by your stream, with Physics required on the Science track and History required on the Arts track, and the "2" must come from Chemistry, Biology, Politics and Geography. Candidates in the 3+3-style provinces follow their own subject combinations instead, so check what your province actually offers for your year before you lock a revision timetable.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.neea.edu.cn',
  conductingBody: 'Ministry of Education, China',
};

export default exam;
