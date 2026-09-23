/**
 * Verified exam-dates rows.
 *
 * Source of truth: the `sr.exam_dates` PostgreSQL table (see
 * /data/sr-13h-reports/hour-20260917T203324Z.md). At build time we cannot reach
 * the DB from `astro build` (it runs as `ubuntu`, not the deploy user), so the
 * hour-9 pipeline writes a snapshot to /data/exam-dates-rows.json and the
 * hour-10 pipeline copies it into this module. The page generator MUST refuse
 * to render a row whose `source_url` is missing or whose `verified_quote` does
 * not exist - there is no row without a source, by the campaign rule.
 *
 * Schema mirrors sr.exam_dates:
 *   id              bigint      PK
 *   exam_name       text        MCAT / LSAT / SAT
 *   event_type      text        registration_open | registration_close
 *                               registration_deadline | late_registration_deadline
 *                               exam_date
 *   event_date      ISO date    YYYY-MM-DD
 *   event_end_date  ISO date    optional (e.g. "Oct 20-22" is an open window)
 *   description     text
 *   source_url      text        official conducting body
 *   last_verified   timestamptz
 *   verified_quote  text        verbatim substring from sr-fetch.sh page text
 *
 * Updated 2026-09-17 by hour 10 of the sr-13h campaign. Do not hand-edit;
 * regenerate from the table or from /data/exam-dates-rows.json.
 */

export type ExamDateEventType =
  | 'registration_open'
  | 'registration_close'
  | 'registration_deadline'
  | 'late_registration_deadline'
  | 'exam_date';

export interface ExamDateRow {
  id: number;
  exam_name: string;
  event_type: ExamDateEventType;
  event_date: string;        // YYYY-MM-DD
  event_end_date: string | null;
  description: string;
  source_url: string;
  last_verified: string;     // ISO timestamp
  verified_quote: string;
}

export const EXAM_DATES_ROWS: readonly ExamDateRow[] = [
  {
    id: 1,
    exam_name: 'MCAT',
    event_type: 'registration_open' as ExamDateEventType,
    event_date: '2026-10-20',
    event_end_date: '2026-10-22',
    description:
      'Registration for January-September 2027 MCAT exam dates opens by testing-center location.',
    source_url: 'https://www.aamc.org/',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Registration for 2027 MCAT® exam dates will open Oct. 20-22, by testing center location',
  },
  {
    id: 2,
    exam_name: 'LSAT',
    event_type: 'registration_close' as ExamDateEventType,
    event_date: '2026-10-01',
    event_end_date: null,
    description:
      'Registration deadline for the November 2026 LSAT administration.',
    source_url: 'https://www.lsac.org/',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Registration for the November 2026 LSAT ends October 1, 2026',
  },
  {
    id: 3,
    exam_name: 'SAT',
    event_type: 'exam_date' as ExamDateEventType,
    event_date: '2026-08-22',
    event_end_date: null,
    description:
      'SAT Weekend administration.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Aug. 22, 2026',
  },
  {
    id: 4,
    exam_name: 'SAT',
    event_type: 'registration_deadline' as ExamDateEventType,
    event_date: '2026-08-07',
    event_end_date: null,
    description:
      'Registration deadline for Aug. 22, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Aug. 7, 2026',
  },
  {
    id: 5,
    exam_name: 'SAT',
    event_type: 'late_registration_deadline' as ExamDateEventType,
    event_date: '2026-08-11',
    event_end_date: null,
    description:
      'Late registration deadline for Aug. 22, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Aug. 11, 2026',
  },
  {
    id: 6,
    exam_name: 'SAT',
    event_type: 'exam_date' as ExamDateEventType,
    event_date: '2026-09-12',
    event_end_date: null,
    description:
      'SAT Weekend administration.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Sept. 12, 2026',
  },
  {
    id: 7,
    exam_name: 'SAT',
    event_type: 'registration_deadline' as ExamDateEventType,
    event_date: '2026-08-28',
    event_end_date: null,
    description:
      'Registration deadline for Sept. 12, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Aug. 28, 2026',
  },
  {
    id: 8,
    exam_name: 'SAT',
    event_type: 'late_registration_deadline' as ExamDateEventType,
    event_date: '2026-09-01',
    event_end_date: null,
    description:
      'Late registration deadline for Sept. 12, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Sept. 1, 2026',
  },
  {
    id: 9,
    exam_name: 'SAT',
    event_type: 'exam_date' as ExamDateEventType,
    event_date: '2026-10-03',
    event_end_date: null,
    description:
      'SAT Weekend administration.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Oct. 3, 2026',
  },
  {
    id: 10,
    exam_name: 'SAT',
    event_type: 'registration_deadline' as ExamDateEventType,
    event_date: '2026-09-18',
    event_end_date: null,
    description:
      'Registration deadline for Oct. 3, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Sept. 18, 2026',
  },
  {
    id: 11,
    exam_name: 'SAT',
    event_type: 'late_registration_deadline' as ExamDateEventType,
    event_date: '2026-09-22',
    event_end_date: null,
    description:
      'Late registration deadline for Oct. 3, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Sept. 22, 2026',
  },
  {
    id: 12,
    exam_name: 'SAT',
    event_type: 'exam_date' as ExamDateEventType,
    event_date: '2026-11-07',
    event_end_date: null,
    description:
      'SAT Weekend administration.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Nov. 7, 2026',
  },
  {
    id: 13,
    exam_name: 'SAT',
    event_type: 'registration_deadline' as ExamDateEventType,
    event_date: '2026-10-23',
    event_end_date: null,
    description:
      'Registration deadline for Nov. 7, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Oct. 23, 2026',
  },
  {
    id: 14,
    exam_name: 'SAT',
    event_type: 'late_registration_deadline' as ExamDateEventType,
    event_date: '2026-10-27',
    event_end_date: null,
    description:
      'Late registration deadline for Nov. 7, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Oct. 27, 2026',
  },
  {
    id: 15,
    exam_name: 'SAT',
    event_type: 'exam_date' as ExamDateEventType,
    event_date: '2026-12-05',
    event_end_date: null,
    description:
      'SAT Weekend administration.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Dec. 5, 2026',
  },
  {
    id: 16,
    exam_name: 'SAT',
    event_type: 'registration_deadline' as ExamDateEventType,
    event_date: '2026-11-20',
    event_end_date: null,
    description:
      'Registration deadline for Dec. 5, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Nov. 20, 2026',
  },
  {
    id: 17,
    exam_name: 'SAT',
    event_type: 'late_registration_deadline' as ExamDateEventType,
    event_date: '2026-11-24',
    event_end_date: null,
    description:
      'Late registration deadline for Dec. 5, 2026 SAT.',
    source_url: 'https://satsuite.collegeboard.org/sat/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Nov. 24, 2026',
  },
  {
    id: 18,
    exam_name: 'SAT',
    event_type: 'exam_date' as ExamDateEventType,
    event_date: '2027-03-06',
    event_end_date: null,
    description:
      'SAT Weekend test date',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'March 6, 2027',
  },
  {
    id: 19,
    exam_name: 'SAT',
    event_type: 'registration_deadline' as ExamDateEventType,
    event_date: '2027-02-19',
    event_end_date: null,
    description:
      'SAT Weekend registration deadline',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Feb. 19, 2027',
  },
  {
    id: 20,
    exam_name: 'SAT',
    event_type: 'late_registration_deadline' as ExamDateEventType,
    event_date: '2027-02-23',
    event_end_date: null,
    description:
      'Late registration deadline for March 2027 SAT',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Feb. 23, 2027',
  },
  {
    id: 21,
    exam_name: 'SAT',
    event_type: 'exam_date' as ExamDateEventType,
    event_date: '2027-05-01',
    event_end_date: null,
    description:
      'SAT Weekend test date',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'May 1, 2027',
  },
  {
    id: 22,
    exam_name: 'SAT',
    event_type: 'registration_deadline' as ExamDateEventType,
    event_date: '2027-04-16',
    event_end_date: null,
    description:
      'SAT Weekend registration deadline',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'Apr. 16, 2027',
  },
  {
    id: 23,
    exam_name: 'SAT',
    event_type: 'late_registration_deadline' as ExamDateEventType,
    event_date: '2027-04-20',
    event_end_date: null,
    description:
      'Late registration deadline for May 2027 SAT',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'April 20, 2027',
  },
  {
    id: 24,
    exam_name: 'SAT',
    event_type: 'exam_date' as ExamDateEventType,
    event_date: '2027-06-05',
    event_end_date: null,
    description:
      'SAT Weekend test date',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'June 5, 2027',
  },
  {
    id: 25,
    exam_name: 'SAT',
    event_type: 'registration_deadline' as ExamDateEventType,
    event_date: '2027-05-21',
    event_end_date: null,
    description:
      'SAT Weekend registration deadline',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'May 21, 2027',
  },
  {
    id: 26,
    exam_name: 'SAT',
    event_type: 'late_registration_deadline' as ExamDateEventType,
    event_date: '2027-05-25',
    event_end_date: null,
    description:
      'Late registration deadline for June 2027 SAT',
    source_url: 'https://satsuite.collegeboard.org/sat/registration/dates-deadlines',
    last_verified: '2026-09-23T18:40:12Z',
    verified_quote:
      'May 25, 2027',
  },
];

/**
 * Defensive read - the build must refuse to render a row that lacks a sourced
 * date or a verified quote. Returns null for the first invalid row, never a
 * partial row, so the page generator can hold the build rather than emit a
 * page that violates the campaign rule.
 */
export function assertValidRow(row: ExamDateRow): ExamDateRow | null {
  if (!row || typeof row !== 'object') return null;
  if (!row.exam_name || !row.event_type || !row.event_date) return null;
  if (!row.source_url || !/^https?:\/\//i.test(row.source_url)) return null;
  if (!row.verified_quote || row.verified_quote.length < 4) return null;
  if (!row.last_verified) return null;
  return row;
}

/**
 * Map a row to a URL slug. The slug is what appears in `/exam-dates/<exam>/<event>/<date>/`.
 * Each component is normalised:
 *   exam   -> lowercase, dashes for any non-alnum
 *   event  -> lowercase, underscores -> dashes
 *   date   -> ISO date kept verbatim (YYYY-MM-DD)
 */
export function slugifyExam(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function slugifyEvent(type: ExamDateEventType): string {
  return type.toLowerCase().replace(/_/g, '-');
}

/** Human-readable event label, used as the page <h2> subhead. */
export function eventLabel(type: ExamDateEventType): string {
  switch (type) {
    case 'registration_open':         return 'Registration opens';
    case 'registration_close':        return 'Registration closes';
    case 'registration_deadline':     return 'Registration deadline';
    case 'late_registration_deadline':return 'Late registration deadline';
    case 'exam_date':                 return 'Exam date';
  }
}

/** Group rows by exam for the index page. Sorted by event_date ascending within each group. */
export function groupByExam(
  rows: readonly ExamDateRow[]
): { exam: string; rows: ExamDateRow[] }[] {
  const map = new Map<string, ExamDateRow[]>();
  for (const r of rows) {
    if (!assertValidRow(r)) continue;
    const list = map.get(r.exam_name) || [];
    list.push(r);
    map.set(r.exam_name, list);
  }
  return [...map.entries()]
    .map(([exam, list]) => ({ exam, rows: list.sort((a, b) => a.event_date.localeCompare(b.event_date)) }))
    .sort((a, b) => a.exam.localeCompare(b.exam));
}

/**
 * Source display labels. The host part of `source_url` only - never the full
 * URL in display copy (URLs in body text leak keystrokes and break in print).
 */
export function sourceLabel(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '') + (u.pathname === '/' ? '' : u.pathname);
  } catch {
    return url;
  }
}
