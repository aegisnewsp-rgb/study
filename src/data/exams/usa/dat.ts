import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { datNaturalSciences } from './subjects/dat-natural-sciences';
import { datPerceptualAbility } from './subjects/dat-perceptual-ability';
import { datReadingQuantitative } from './subjects/dat-reading-quantitative';

const subjects: Subject[] = [
  datNaturalSciences,
  datPerceptualAbility,
  datReadingQuantitative,
];

const exam: ExamTemplate = {
  examId: 'dat',
  examName: 'DAT (Dental Admission Test, United States)',
  country: 'usa',
  description:
    'The Dental Admission Test is the admissions examination for dental schools in the United States and for a small number of dental schools in Canada. The ADA states that it "is accepted by all U.S. dental schools and select dental schools in Canada" and that it "is designed to provide dental education programs with a means to assess applicants\' potential for success". It is computer-based, run at Prometric test centres, and offered year round. Four sections make up the examination: Survey of the Natural Sciences (100 items), Perceptual Ability (90 items), Reading Comprehension (50 items) and Quantitative Reasoning (40 items) — 280 items in total, in a five hour fifteen minute administration.',
  examPattern:
    'Four sections totalling 280 items, with a total administration time of five hours and 15 minutes. The ADA Candidate Guide breaks that down as an optional 15-minute tutorial, 90 minutes for the Survey of the Natural Sciences, 60 minutes for the Perceptual Ability Test, an optional 30-minute break, 60 minutes for Reading Comprehension, 45 minutes for Quantitative Reasoning and an optional 15-minute post-test survey. The Survey of the Natural Sciences divides into Biology (40 items), General Chemistry (30 items) and Organic Chemistry (30 items). The ADA does not set a passing score, and each program decides what it will accept. Scoring changed underneath that decision: from 1 March 2025 the ADA reports results on a three-digit scale running from 200 to 600 in 10-point increments, replacing the previous 1-to-30 reporting scale. A result carries an Academic Average plus section subscores, with Biology, General Chemistry and Organic Chemistry reported individually alongside Perceptual Ability, Quantitative Reasoning and Reading Comprehension. The ADA publishes a concordance table for reading an older score on the new scale, where an Academic Average of 18 is approximately 390, and a percentile-rank table drawn from a national normative sample of more than 30,000 DAT attempts.',
  eligibility:
    'There is no single national eligibility rule, because acceptance is a decision of each dental school rather than of the ADA. What the ADA does set is the process: after your application is processed you receive an eligibility letter confirming the application has been accepted, and you must then contact Prometric to secure an appointment. The ADA states the application should be submitted six to eight weeks before your desired test date, and recommends contacting Prometric at least 60 to 90 days before that date because schedules fill up. Attempts are capped and gated rather than open. You must wait 60 days between testing attempts, with a maximum of four administrations permitted during any 12-month period. Once you have three or more attempts you must apply in writing to DATexam@ADA.org for permission to test again, supplying evidence of an application to dental school within the previous 18 months, such as a submitted ADEA AADSAS application, a letter of rejection, or a letter from an admissions officer or health-profession advisor. After a fifth attempt you may retest only once per 12-month period, and the ADA states these retest policies are not subject to appeal. One administrative rule costs real money: the name on your application must exactly match the identification you bring to the test centre, or the ADA states you will not be permitted to test and the appointment and the application fee are both forfeited. Changes and corrections must be completed at least two weeks before the appointment. A new application and fee are required for each attempt, and an assigned appointment that is not taken still forfeits the fee.',
  calendarDates: {
    applicationStart: 'Applications are accepted year round and the ADA states an application should be submitted six to eight weeks before your desired test date. After processing, the ADA assigns an eligibility period, which can be extended by 45 days for a $150 eligibility extension fee, available once per submitted application.',
    examDates: 'Offered year round at Prometric test centres throughout the United States and in select Canadian locations. The ADA states the test is no longer offered in the province of Quebec. There is no national fixed test-day calendar.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'DAT study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'DAT study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'DAT study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'DAT study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'DAT study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'DAT study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'DAT study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'DAT study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'DAT study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'DAT study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'DAT study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'DAT study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'DAT study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'DAT study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'DAT study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'DAT study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'DAT study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'DAT study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Four-week DAT plan for a booked Prometric appointment',
    duration: '1mo',
    focusAreas: [
      { subject: 'Perceptual Ability Test', topics: ['Keyhole Problems', 'Paper Folding', 'Spatial Practice and Speed'] },
      { subject: 'Survey of the Natural Sciences', topics: ['Organic Chemistry Structure and Reactivity', 'General Chemistry Foundations'] },
      { subject: 'Reading Comprehension and Quantitative Reasoning', topics: ['Quantitative Reasoning: Arithmetic and Estimation', 'Pacing Across a Five-Hour Examination'] },
    ],
    strategy: 'Perceptual Ability first, by a wide margin. It is 90 items that reward pure spatial practice and are almost impossible to improve by reading, so every hour not spent on it is an hour spent second-guessing a skill that responds only to repetition. Do thirty keyhole and paper-folding items every day for the full four weeks, untimed at first and timed by the second week, and aim to finish the section inside its 60-minute seat. Next, Quantitative Reasoning, which is arithmetic and moves fastest per hour. Then Organic Chemistry — and check the ADA\'s Organic Chemistry specifications first, because ADA states updates to those specifications were expected in April 2026 and directs candidates testing from May 2026 onward to review the new specifications and use the version in effect on their administration date. Finally run two complete five-hour sittings, because the total administration time is five hours and 15 minutes and the fourth hour is where unprepared candidates lose sections they could have passed.',
  },
  prepOverview:
    'Start with the two facts about the DAT that change everything downstream. It has no passing score — the ADA reports results on a three-digit scale running from 200 to 600 in 10-point increments, and each dental program sets its own threshold — so your preparation target is a school-by-school list of minimum acceptable scores, not a single number. And it is a five hour fifteen minute examination with 280 items, so stamina is a first-order skill rather than an afterthought. A candidate who has never sat for five hours will discover something about hour four that no amount of content revision would have told them.\n\nTwo administrative facts are worth as much as any study advice, because both can cost you a cycle. First, attempts are capped and gated. You must wait 60 days between attempts, at most four administrations are permitted in any 12-month period, and once you have three or more attempts the ADA requires you to apply in writing to DATexam@ADA.org for permission to test again, with evidence that you applied to dental school within the previous 18 months. After a fifth attempt you may retest only once every 12 months, and the ADA states the policy is not subject to appeal. Second, the name on your application must exactly match the identification you bring to the test centre; if it does not, the ADA states you will not be permitted to test and the appointment and application fee are both forfeited.\n\nNote the score scale itself has moved. Since 1 March 2025 the ADA reports on the 200-to-600 three-digit scale, which replaced the previous 1-to-30 scale, and publishes a concordance table so an old score can be compared against a new one. If you are comparing your current result to a previous attempt reported on the old scale, convert it first, or the comparison will be meaningless.\n\nThen sequence by what each section actually rewards. Perceptual Ability, at 90 items, is a spatial-ability test and responds to volume practice rather than study; nobody learns it from a textbook in a week, and everybody improves it with thirty untimed items a day. The Survey of the Natural Sciences at 100 items is the largest academic block and is where the bulk of conventional revision goes. Reading Comprehension at 50 items and Quantitative Reasoning at 40 items are the two fastest to improve, because one is technique and the other is arithmetic.\n\nBook early. The ADA states the test is offered year round, which sounds convenient and is a trap — it means a seat can be weeks away. ADA recommends contacting Prometric at least 60 to 90 days before your desired date because schedules fill up. Add the examination fee for each attempt, because a new application and fee are required each time.\n\nCheck the specifications version before you study organic chemistry. ADA has updated its Organic Chemistry Test Specifications for 2026 and states that candidates planning to test from May 2026 onward should review the new specifications, and that the 2026 Candidate Guide contains both the pre-update and post-update versions with a direction to use the specifications in effect on your administration date. Preparing from the wrong version wastes a large share of your Organic Chemistry revision.\n\nIf you are applying to Canadian schools, note that the Canadian DAT is a different test with different sections, a different score scale and a Manual Dexterity Test that the Canadian Dental Association states remains suspended. Do not assume your US score is interchangeable.',
  commonMistakes: [
    'Burning attempts without knowing the cap. The ADA allows a maximum of four administrations in any 12-month period with a 60-day wait between attempts, and after three attempts you must apply in writing to DATexam@ADA.org for permission to retest, with evidence of an application to dental school in the previous 18 months. After a fifth attempt you may retest only once per 12 months, and the policy is not appealable.',
    'Comparing a new score against an old one without converting. The ADA replaced the 1-to-30 reporting scale with the 200-to-600 three-digit scale on 1 March 2025 and publishes a concordance table for exactly this reason; an Academic Average of 18 on the old scale is approximately 390 on the new one.',
    'Letting a name mismatch void the appointment and the fee. The name on the application must exactly match the identification brought to the test centre, corrections must be made at least two weeks ahead, and the ADA states a mismatch means you will not be permitted to test and lose the appointment and the application fee.',
    'Assuming there is a passing score. The ADA sets none; results are reported on a 200 to 600 scale and each dental school decides what it will accept.',
    'Trying to learn Perceptual Ability instead of practising it. It is 90 items of spatial reasoning that improves through volume, not through reading.',
    'Ignoring the five-hour fifteen-minute length. The ADA states that total administration time explicitly, and it is the reason candidates run out of sections in the later hours.',
    'Booking late. ADA recommends contacting Prometric at least 60 to 90 days before your desired test date because schedules fill up.',
    'Preparing organic chemistry from the wrong specification version. ADA updated the Organic Chemistry Test Specifications for 2026 and directs candidates to use the version in effect on their administration date.',
    'Assuming Quebec is an option. The ADA states the test is no longer offered in the province of Quebec.',
    'Confusing the US DAT with the Canadian DAT. They are separate tests with different sections, different score scales and different fees.',
    'Forgetting that a new application and fee are required for each attempt, which makes a scheduled but unready sitting an expensive option.',
  ],
  lastUpdated: '2026-10-20',
  officialSource: 'https://www.ada.org/education/testing/exams/dental-admission-test-dat',
};

export default exam;
