import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { plabOneClinicalKnowledge } from './subjects/plab-1-clinical-knowledge';
import { plabDataGathering } from './subjects/plab-data-gathering';
import { plabClinicalManagement } from './subjects/plab-clinical-management';
import { plabInterpersonal } from './subjects/plab-interpersonal';

const subjects: Subject[] = [
  plabOneClinicalKnowledge,
  plabDataGathering,
  plabClinicalManagement,
  plabInterpersonal,
];

const exam: ExamTemplate = {
  examId: 'plab',
  examName: 'PLAB (UK Medical Licensing Examination, GMC)',
  country: 'uk',
  description:
    'PLAB is the General Medical Council\'s route into the UK medical register for doctors who qualified outside the UK. It is a two-part examination: PLAB 1 is a written paper of 180 single-best-answer questions in one three-hour session, and PLAB 2 is a practical objective structured clinical examination (OSCE) built from 16 scenarios lasting 8 minutes each. The GMC assesses three domains inside every PLAB 2 scenario: data gathering, technical and assessment skills; clinical management skills; and interpersonal skills. You must pass both parts to pass PLAB.',
  examPattern:
    'PLAB 1: 180 single-best-answer questions, each beginning with a short clinical scenario and offering five answers, in a single three-hour examination. The GMC states that it "assesses the knowledge and skills expected of a doctor entering the second year of the UK Foundation Programme", and it does not publish a separate block structure for the paper. Each correct answer scores one mark, and the GMC reports your total score, the score required to pass, and the average score for all candidates. PLAB 2: 16 scenarios of 8 minutes each, designed to reflect real clinical settings such as consultations and acute-ward situations. Each station has its own cut score calculated using borderline-regression scoring, and there is no fixed station pass mark — it moves with station difficulty and with the examination centre. To pass overall you must meet or exceed the overall pass mark and pass the required minimum number of stations.',
  eligibility:
    'To book PLAB 1 you must hold an acceptable overseas primary medical qualification. If you have not yet graduated, the GMC requires confirmation that you have passed your final examinations and met the other requirements for that qualification. You must also provide acceptable evidence of your knowledge of English, which the GMC verifies before you can access the PLAB booking service, and you must have a GMC Online account. The GMC\'s PLAB booking page does not state an internship as a prerequisite to sit PLAB; internship requirements apply later, at the registration stage, and the GMC page cited here does not set them out.',
  calendarDates: {
    examDates: 'PLAB 1 runs four sittings a year — February, May, August and November. The GMC\'s current PLAB 1 page lists 6 August 2026 and 5 November 2026; confirm the February and May 2026 dates directly on the GMC page.',
    resultDate: 'PLAB 2 dates run throughout the year, and available dates appear in GMC Online after you receive your PLAB 1 results. The GMC publishes no public fixed list of 2026 PLAB 2 dates.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'PLAB study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'PLAB study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'PLAB study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'PLAB study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'PLAB study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'PLAB study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'PLAB study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'PLAB study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'PLAB study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'PLAB study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'PLAB study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'PLAB study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'PLAB study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'PLAB study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'PLAB study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'PLAB study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'PLAB study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'PLAB study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Six-week plan for a PLAB 1 sitting already booked, or a PLAB 2 first attempt with four weeks to go',
    duration: '1mo',
    focusAreas: [
      { subject: 'PLAB 1 — Clinical Knowledge', topics: ['Data Interpretation and Clinical Reasoning', 'Medicine: Systems and Diagnosis', 'Obstetrics and Paediatrics'] },
      { subject: 'PLAB 2 — Data Gathering and Assessment', topics: ['History Taking in an OSCE Station', 'Recognising and Managing the Deteriorating Patient'] },
      { subject: 'PLAB 2 — Clinical Management', topics: ['Acute Prescribing and Safe Medication'] },
      { subject: 'PLAB 2 — Interpersonal Skills', topics: ['Building Rapport Quickly Under a Timer', 'Explaining Bad News and Difficult Issues'] },
    ],
    strategy: 'PLAB 2 is the part that moves fastest, so start there even if PLAB 1 is the paper you are sitting. Sixteen stations at eight minutes is a performance, not a knowledge test, and it needs a rehearsed opening, a rehearsed structure and a rehearsed close. Run a full mock circuit every week in a group; solo practice does not reproduce the pressure. Put PLAB 1 second, and put data interpretation and clinical reasoning ahead of disease facts — 180 questions in three hours is a minute each, and the reading speed is the binding constraint, not the recall. In the final fortnight, do nothing untimed.',
  },
  prepOverview:
    'Understand what PLAB is measuring before you study. The GMC describes PLAB 1 as assessing the knowledge and skills expected of a doctor entering the second year of the UK Foundation Programme, which is a specific and helpful line: this is a safe-practice exam, not a specialist-knowledge exam. That determines what to revise. Revise the common presentations and the safe response to them — chest pain, breathlessness, abdominal pain, altered consciousness, the febrile child, the undifferentiated sick patient — rather than rare diseases, because a rare disease you half-remember is worth less than a common one you can manage. For PLAB 2, the structure is public and should be rehearsed exactly. Sixteen scenarios of eight minutes, three domains assessed in each, cut scores calculated per station. That means you can practise the shape of the encounter rather than only its content: open, structure, examine, manage, examine, examine, close. Get the sequence to the point where it is automatic, because the stations are scored partly on whether you were safe and organised, not only on whether you were right. Book PLAB 2 dates early. The GMC states that PLAB 2 dates are shown in GMC Online after you receive your PLAB 1 results, so a late PLAB 1 pass can leave you waiting weeks for a station, and there is a limit on how often you may sit each part. If your English-language evidence is not settled, start there: the GMC verifies it before you can access the booking service at all.',
  commonMistakes: [
    'Only preparing PLAB 2. PLAB 2 dates are only visible in GMC Online after your PLAB 1 results arrive, so a strong PLAB 2 preparation can still leave you unable to book for months.',
    'Preparing PLAB 1 as a knowledge quiz. 180 single-best-answer questions in three hours is one minute each, and the scenario reading is what eats that minute. Practise the reading, not just the medicine.',
    'Assuming the PLAB 1 pass mark is a fixed number. The GMC sets it using the Angoff method with one standard error of measurement and publishes it alongside your score and the candidate average — read the number the GMC gives you, not one quoted online.',
    'Looking for a fixed PLAB 2 station pass mark. The GMC states each station has its own cut score from borderline regression and that it varies with station difficulty and examination centre, so a station you "should" have passed may have been hard.',
    'Revising specialist content instead of common presentations. The GMC frames the paper at the level of the second Foundation year.',
    'Missing the retake rule. The GMC states you may take a part until you have failed it four times, may apply for a fifth and final attempt, and must complete at least 12 months of additional learning and development after the fourth failure.',
    'Booking without settled English-language evidence. The GMC verifies English evidence before granting access to the PLAB booking service.',
    'Forgetting that you must pass both parts. Passing PLAB 1 does not shorten or simplify PLAB 2.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab',
};

export default exam;