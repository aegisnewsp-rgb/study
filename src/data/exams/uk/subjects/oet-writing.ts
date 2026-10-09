// OET — Writing and Speaking sub-tests.
// Source: the official "OET Test Handbook 2026",
// https://cdn-aus.aglty.io/oet/pdf-files/OET%20Test%20Handbook%202026.pdf — fetched and
// text-extracted independently by this worker on 2026-10-09.
// Verbatim from the handbook: Writing, 45 minutes total, 1 task, "45 minutes in total (5 minutes
// reading time and 40 minutes writing time)"; "The Writing sub-test has one task. You write a
// letter to another [health professional caring for a patient], in response to a set of case
// notes outlining the patient's [condition]." Writing is profession-specific and assessed on six
// criteria. Speaking, 20 minutes total, 2 tasks, "Warm-up: about 2–3 minutes", "Preparation:
// 3 minutes per role play", "Role plays: 5 minutes each", assessed on two sets of criteria.
// Both are reported on the 0–500 scale. Topic split below is StudyRoadmap's own organisation.
import type { Subject } from '../../types';
export const oetWriting: Subject = {
  id: 'writing', name: 'Writing and Speaking', color: '#7c3aed',
  topics: [
    { id: 'wr-001', name: 'The Writing Task: A Profession-Specific Letter', weight: 5, description: 'One task, 45 minutes including 5 minutes of reading time. Reading the case notes is part of the assessed skill, because a letter written from a misread note scores badly however fluent the prose.' },
    { id: 'wr-002', name: 'Purpose, Audience and Register', weight: 5, description: 'Writing to a specific professional audience for a specific purpose — a referral, a discharge summary, a care instruction — and matching the register to it.' },
    { id: 'wr-003', name: 'The Six Writing Assessment Criteria', weight: 5, description: 'The handbook states the writing sub-test is assessed using six criteria whose scores are combined and converted to the 500 scale. Practise against the criteria rather than against your own sense of good writing.' },
    { id: 'wr-004', name: 'Speaking: Two Profession-Specific Role-Plays', weight: 5, description: 'Twenty minutes in total for two role-plays with warm-up, three minutes of preparation each and five minutes each to perform, assessed on two sets of criteria.' },
    { id: 'wr-005', name: 'Speaking Clarity, Fluency and Interaction', weight: 4, description: 'Audible, unhurried, structured speech that responds to the interlocutor rather than reciting a prepared answer — the criteria that punish silent memorisation.' },
  ],
};
