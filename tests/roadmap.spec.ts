import { describe, it, expect } from 'vitest';
import { ALL_EXAMS } from '../src/data/exams/index';

const DURATION_KEYS = [
  '1h', '2h', '3h', '5h', '12h',
  '1d', '2d', '3d', '5d', '7d', '10d',
  '2w',
  '1mo', '2mo', '3mo', '6mo',
  '1yr', '2yr',
] as const;

const SHORT_DURATIONS = ['1h', '2h', '3h', '5h', '12h', '1d'] as const;

// Astro re-exports may surface as default-wrapped modules in some setups; normalise.
const exams = (ALL_EXAMS as unknown as any[]).filter(Boolean);

describe('roadmap invariants', () => {
  it('has at least one exam loaded', () => {
    expect(exams.length).toBeGreaterThan(0);
  });

  describe.each(exams.map((e) => [e.examId, e]))('%s', (_id, exam: any) => {
    it('defines all 18 duration keys', () => {
      for (const d of DURATION_KEYS) {
        expect(exam.durations, `${exam.examId} missing durations`).toBeDefined();
        expect(exam.durations[d], `${exam.examId} missing duration ${d}`).toBeDefined();
      }
    });

    it('has dailyTopics.length >= 1 for every duration', () => {
      for (const d of DURATION_KEYS) {
        const len = exam.durations[d]?.dailyTopics?.length ?? 0;
        expect(len, `${exam.examId} ${d} has 0 dailyTopics`).toBeGreaterThanOrEqual(1);
      }
    });

    it('has monotonically non-decreasing topic counts across the duration sequence', () => {
      let prev = 0;
      let prevKey = '';
      for (const d of DURATION_KEYS) {
        const len = exam.durations[d].dailyTopics.length;
        expect(
          len,
          `${exam.examId}: dailyTopics.length dropped from ${prev} (${prevKey}) to ${len} (${d})`,
        ).toBeGreaterThanOrEqual(prev);
        prev = len;
        prevKey = d;
      }
    });

    it('weight-sorts the top topic for short durations (weight >= 3)', () => {
      for (const d of SHORT_DURATIONS) {
        const first = exam.durations[d].dailyTopics[0];
        expect(first, `${exam.examId} ${d} has no first topic`).toBeDefined();
        expect(
          first.weight,
          `${exam.examId} ${d}: first topic "${first.name}" weight=${first.weight} < 3`,
        ).toBeGreaterThanOrEqual(3);
      }
    });

    it('emits phases for long durations (1mo+), each with non-empty fields', () => {
      const LONG = ['1mo', '2mo', '3mo', '6mo', '1yr', '2yr'] as const;
      for (const d of LONG) {
        const phases = exam.durations[d].phases;
        expect(phases, `${exam.examId} ${d} missing phases`).toBeDefined();
        expect(phases.length, `${exam.examId} ${d} empty phases`).toBeGreaterThanOrEqual(2);
        for (const p of phases) {
          expect(p.name).toBeTruthy();
          expect(p.weeks).toBeGreaterThan(0);
          expect(p.focus).toBeTruthy();
          expect(Array.isArray(p.deliverables) && p.deliverables.length).toBeTruthy();
        }
      }
    });
  });
});
