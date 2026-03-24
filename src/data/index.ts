// ─── Re-export from subdirectories ───────────────────────────
export { default as MDCAT } from './pakistan/mdcat';
export { default as ECAT } from './pakistan/ecat';
export { default as NAT1 } from './pakistan/nat-i';
export { default as LAT } from './pakistan/lat';
export { default as HATUG } from './pakistan/hat-ug';

export { default as JAMB } from './nigeria/jamb';
export { default as WAEC } from './nigeria/waec';
export { default as NECO } from './nigeria/neco';
export { default as NABTEB } from './nigeria/nabteb';
export { default as NCEE } from './nigeria/ncee';

// India exams
export { default as NEET } from './india/neet';
export { default as JEEMain } from './india/jeemain';
export { default as JEEAdvanced } from './india/jeeadvanced';
export { default as CUET } from './india/cuet';
export { default as UPSC } from './india/upsc';
export { default as SSCCGL } from './india/ssc-cgl';
export { default as CAT } from './india/cat';
export { default as CLAT } from './india/clat';
export { default as NDA } from './india/nda';
export { default as UGCNET } from './india/ugc-net';
export { default as GRE } from './india/gre';

// ─── Exam list ───────────────────────────────────────────────
import MDCAT from './pakistan/mdcat';
import ECAT from './pakistan/ecat';
import NAT1 from './pakistan/nat-i';
import LAT from './pakistan/lat';
import HATUG from './pakistan/hat-ug';
import JAMB from './nigeria/jamb';
import WAEC from './nigeria/waec';
import NECO from './nigeria/neco';
import NABTEB from './nigeria/nabteb';
import NCEE from './nigeria/ncee';
import NEET from './india/neet';
import JEEMain from './india/jeemain';
import JEEAdvanced from './india/jeeadvanced';
import CUET from './india/cuet';
import UPSC from './india/upsc';
import SSCCGL from './india/ssc-cgl';
import CAT from './india/cat';
import CLAT from './india/clat';
import NDA from './india/nda';
import UGCNET from './india/ugc-net';
import GRE from './india/gre';

export const ALL_EXAMS = [
  NEET, JEEMain, JEEAdvanced, CUET, UPSC, SSCCGL, CAT, CLAT, NDA, UGCNET, GRE,
  MDCAT, ECAT, NAT1, LAT, HATUG,
  JAMB, WAEC, NECO, NABTEB, NCEE,
].filter(Boolean);

// ─── Country flags ───────────────────────────────────────────
export const COUNTRY_FLAGS: Record<string, string> = {
  india: '🇮🇳',
  Pakistan: '🇵🇰',
  pakistan: '🇵🇰',
  Nigeria: '🇳🇬',
  nigeria: '🇳🇬',
};

// ─── Duration data ───────────────────────────────────────────
export type DurationKey =
  | '1h' | '2h' | '3h' | '5h' | '12h'
  | '1d' | '2d' | '3d' | '5d' | '7d' | '10d'
  | '2w'
  | '1mo' | '2mo' | '3mo' | '6mo'
  | '1yr' | '2yr';

export const ALL_DURATIONS: DurationKey[] = [
  '1h', '2h', '3h', '5h', '12h',
  '1d', '2d', '3d', '5d', '7d', '10d',
  '2w',
  '1mo', '2mo', '3mo', '6mo',
  '1yr', '2yr',
];

export const DURATION_GROUPS: Record<string, DurationKey[]> = {
  Hourly:  ['1h', '2h', '3h', '5h', '12h'],
  Daily:   ['1d', '2d', '3d', '5d', '7d', '10d'],
  Weekly:  ['2w'],
  Monthly: ['1mo', '2mo', '3mo', '6mo'],
  Yearly:  ['1yr', '2yr'],
};

export function parseDuration(key: string): { hours: number; label: string } {
  const map: Record<string, { hours: number; label: string }> = {
    '1h':  { hours: 1,    label: '1 Hour' },
    '2h':  { hours: 2,    label: '2 Hours' },
    '3h':  { hours: 3,    label: '3 Hours' },
    '5h':  { hours: 5,    label: '5 Hours' },
    '12h': { hours: 12,   label: '12 Hours' },
    '1d':  { hours: 24,   label: '1 Day' },
    '2d':  { hours: 48,   label: '2 Days' },
    '3d':  { hours: 72,   label: '3 Days' },
    '5d':  { hours: 120,  label: '5 Days' },
    '7d':  { hours: 168,  label: '7 Days' },
    '10d': { hours: 240,  label: '10 Days' },
    '2w':  { hours: 336,  label: '2 Weeks' },
    '1mo': { hours: 720,  label: '1 Month' },
    '2mo': { hours: 1440, label: '2 Months' },
    '3mo': { hours: 2160, label: '3 Months' },
    '6mo': { hours: 4320, label: '6 Months' },
    '1yr': { hours: 8760, label: '1 Year' },
    '2yr': { hours: 17520,label: '2 Years' },
  };
  return map[key] ?? { hours: 0, label: key };
}

// ─── Lookup helpers ──────────────────────────────────────────
import type { ExamTemplate } from './types';

export function getExamById(id: string): ExamTemplate | undefined {
  return ALL_EXAMS.find(e => e?.examId === id);
}

export function getExamsByCountry(country: string): ExamTemplate[] {
  return ALL_EXAMS.filter(e => e?.country === country);
}

export function getCountryFlag(country: string): string {
  return COUNTRY_FLAGS[country] ?? '🌐';
}

// Re-export types
export type { ExamTemplate, Subject, Topic, DailyTopicItem, RoadmapTemplate, RescueTemplate } from './types';
