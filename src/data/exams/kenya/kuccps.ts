import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { subject_clusters } from './subjects/subject-clusters';

const subjects: Subject[] = [
    mathematics,
    english,
    subject_clusters,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'kuccps',
  examName: 'KUCCPS Placement (Kenya)',
  country: 'kenya',
  description: 'The Kenya Universities and Colleges Central Placement Service (KUCCPS) places students into university programmes based on KCSE (Kenya Certificate of Secondary Education) grades. There is no separate placement examination — admission is determined entirely by KCSE performance. Students apply through KUCCPS by selecting courses from the available programme list, and placement is done based on cluster points calculated from KCSE grades in the four cluster subjects relevant to the chosen programme. KUCCPS manages placement for all public universities and is the official body for ensuring transparent and merit-based placement of students into higher education in Kenya.',
  examPattern: 'There is no separate placement exam. Your own result is read on the 48-point scale: each KCSE grade carries a point value from A=12 down to E=1, and the four cluster subjects of your programme are the ones the points come from, so four A grades give 48. The figure that decides placement is the weighted cluster points, computed by KUCCPS to three decimal places from KNEC performance data and reported in your portal. You cannot work it out by hand: the performance index behind it is never released to students. KUCCPS also says the seven best subjects you sat are considered in that calculation.',
  eligibility: 'KCSE holder with minimum C+ for most programmes (some require higher, some accept C). Must apply through KUCCPS during the application window after KCSE results are released. The minimum subject requirements vary by programme — for example, Medicine typically requires A in Biology, A- in Chemistry, A- in Physics/Mathematics, and B+ in English. Candidates must meet both the overall KCSE mean grade requirement and the specific cluster subject requirements for their chosen programme.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KUCCPS (Kenya) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for KUCCPS (Kenya) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for KUCCPS (Kenya) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for KUCCPS (Kenya) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for KUCCPS (Kenya) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KUCCPS (Kenya) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for KUCCPS (Kenya) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KUCCPS (Kenya) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for KUCCPS (Kenya) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KUCCPS (Kenya) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for KUCCPS (Kenya) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for KUCCPS (Kenya) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KUCCPS (Kenya) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for KUCCPS (Kenya) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KUCCPS (Kenya) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KUCCPS (Kenya) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for KUCCPS (Kenya) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for KUCCPS (Kenya) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KUCCPS (Kenya)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Placement runs on documents rather than a paper, so the work happens in the portal before you apply. Download the programme list and the degree cluster document from the Programme Lists tab: they carry each programme’s cluster subjects, minimum subject requirements and cut-off points. Compare the cluster weight the portal gives you against the previous year’s cut-off, then apply in order of preference using the programme codes, with the same programme offered at three universities. You may put down up to six degree courses. A degree application needs a mean grade of C+ at the minimum, and some programmes ask for more. The fee is Ksh 1,500, paid through eCitizen.',
  commonMistakes: [
    'Waiting for a KUCCPS entrance paper to revise for. Placement is decided entirely on KCSE performance, so there is no paper to sit.',
    'Adding every subject into the total without first identifying the four that make up the cluster for the programme you want.',
    'Treating your own 48-point total as the placement score. Placement runs on the weighted cluster points that KUCCPS computes and provides in the portal.',
    'Leaving redundancy subjects out because they are not in the cluster. The seven best subjects you sat are the ones the weighted calculation counts.',
    'Checking only the general C+ mean, and not the per-subject minimums and programme requirements the portal lists, before you apply.',
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://kuccps.net',
  conductingBody: 'Kenya Universities and Colleges Central Placement Service (KUCCPS)',
};

export default exam;
