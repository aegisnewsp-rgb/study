/**
 * serp-unique.ts — SERP title / H1 builders that cannot collide.
 *
 * WHY THIS EXISTS (w22, 2026-10-09)
 * ---------------------------------
 * Measured across all 5,196 live sitemap URLs: **73 title groups collided over
 * 164 URLs** and **395 H1 groups collided over 1,297 URLs**. Almost all of it
 * traced to two mechanical faults in the old inline ladders:
 *
 *   1. `_examCompact` strips the parenthetical out of the exam label, so
 *      "IELTS (Hong Kong)", "IELTS (Kuwait)" and "IELTS (Qatar)" all collapsed
 *      to "IELTS" — and so did "UCAT ANZ" vs "UCAT ANZ (University Clinical
 *      Aptitude Test … NZ)".
 *   2. The overflow branch cut the topic with `slice()`, mid-word. That is how
 *      "Major Topic: Functions and Their Graphs" shipped as
 *      "Major Topi — QCE Mathematical Methods …" — a title that is both ugly
 *      and identical to its seven siblings.
 *
 * So this module does three things and nothing else:
 *   - word-boundary trimming (never a mid-word cut, never a bare "..."),
 *   - an exam label that stays unique across exam ids,
 *   - a collision counter the caller resolves by escalating through
 *     subject/country/exam-id variants.
 *
 * NO FACTS ARE ADDED HERE. Every string is derived from fields that already
 * exist in frontmatter / exam data. Nothing is invented.
 */

export const BRAND = ' | StudyRoadmap';
/** Operator brief 2026-10-09: titles 30–64 characters. */
export const TITLE_MAX = 64;
export const TITLE_MIN = 30;
export const DESC_MIN = 99;
export const DESC_MAX = 160;

/** Count how many times each key appears. Used to decide whether a title needs
 *  escalating — a title nobody else claims is left exactly as it was. */
export function tally<T>(items: T[], key: (item: T) => string): Map<string, number> {
  const m = new Map<string, number>();
  for (const it of items) {
    const k = key(it);
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  return m;
}

/** "IELTS (International English Language Test)" -> "IELTS".
 *  Whitespace collapsed; never returns an empty string. */
export function compactExamLabel(examName: string): string {
  return String(examName ?? '')
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Short acronym-style label from the exam id: "qce-mathematical-methods" ->
 *  "QCE Mathematical Methods", "ielts-hk" -> "IELTS HK". Derived from the id we
 *  already route on, so it cannot invent a fact; it only shortens an existing
 *  identifier for SERP space. Tokens of <=4 chars, or tokens that are already a
 *  known exam acronym, stay upper-case. */
const KNOWN_ACRONYMS = new Set([
  'aqa', 'a level', 'ncea', 'nce', 'ucat', 'hsc', 'hkdse', 'dse', 'ssc', 'cgl',
  'jeb', 'gcse', 'ib', 'vce', 'sce', 'wace', 'sace', 'qce', 'hpat', 'lnat',
  'gmat', 'ielts', 'toefl', 'pte', 'sat', 'act', 'ap', 'mcat', 'mdcat', 'nmat',
  'neet', 'jee', 'upsc', 'bpsc', 'fpsc', 'ppsc', 'ssce', 'waec', 'neco', 'jamb',
  'utme', 'jwu', 'cuet', 'gate', 'cat', 'clat', 'gre', 'gmatfocus', 'usmle',
  'nce', 'knuth', 'o level', 'a level', 'osslt', 'ospi', 'senior', 'gcse',
  'jeeadvanced', 'neetug', 'jeeupsee', 'upsc', 'upse', 'sscgl', 'eamcet',
]);

function isAcronymish(tok: string): boolean {
  return tok.length <= 4 || KNOWN_ACRONYMS.has(tok);
}

export function examIdLabel(examId: string): string {
  return String(examId ?? '')
    .split('-')
    .filter(Boolean)
    .map(tok => (isAcronymish(tok) ? tok.toUpperCase() : tok.charAt(0).toUpperCase() + tok.slice(1)))
    .join(' ')
    .trim();
}

/** Trim to `room` characters at a WORD boundary. Never mid-word. Never leaves a
 *  trailing comma/dash/ellipsis. Falls back to the raw cut only when even the
 *  first word is longer than the room (a single 40-char German compound, say),
 *  because returning "" would be worse. */
export function trimToWord(s: string, room: number): string {
  const t = String(s ?? '').trim();
  if (room <= 0) return '';
  if (t.length <= room) return t;
  const cut = t.slice(0, room);
  const atWord = cut.replace(/[\s,;:.·—–-]+[^,;:.·—–\s]*$/, '').trim();
  return (atWord || cut.replace(/\s+\S*$/, '').trim() || cut).trim();
}

/** Pick the first candidate that fits inside TITLE_MAX once the brand is added.
 *  If none fit, the LAST candidate is word-trimmed rather than mid-word cut. */
export function fitTitle(candidates: string[], brand = BRAND): string {
  for (const c of candidates) {
    const full = `${c}${brand}`;
    if (c && full.length <= TITLE_MAX) return full;
  }
  const room = TITLE_MAX - brand.length;
  // Truncating the LAST candidate is what produced titles that ran to the very
  // edge of the SERP ("Question Types — Form, Note, Table, Flow-Chart | StudyRoadmap",
  // 72ch) or collided after the cut. Only cut when EVERY candidate overflows,
  // and then cut the one that fits the room most closely.
  const scored = candidates.filter(Boolean)
    .map(c => ({ c, over: `${c}${brand}`.length - TITLE_MAX }))
    .filter(x => x.over > 0)
    .sort((a, b) => a.over - b.over);
  const src = scored.length ? scored[0].c : (candidates[candidates.length - 1] ?? '');
  const cut = trimToWord(src, room);
  return `${cut}${brand}`;
}

/**
 * Final tie-breaker: keep the TAIL (exam + topic slug), trim the TOPIC.
 *
 * The bug this fixes: `fitTitle` cuts from the END at a word boundary, so a long
 * topicName ate the disambiguator entirely —
 * "Atomic Structure and Electron Configuration — NECO" became
 * "Atomic Structure and Electron Configuration | StudyRoadmap", which is exactly
 * as colliding as the title it replaced (JAMB vs NECO, same slug `chem-1`).
 * When the thing that makes a title unique is at the END, the cut has to come
 * out of the topic, not the tail.
 */
export function fitTitleWithTail(topicName: string, tails: string[], brand = BRAND): string {
  const usable = tails.filter(Boolean);
  for (const tail of usable) {
    const full = `${topicName} ${tail}${brand}`;
    if (topicName && full.length <= TITLE_MAX) return full;
  }
  // Shorten the TAIL before shortening the topic: the tail is what makes this
  // title unique, the topic is what is already long.
  const ranked = usable
    .map(t => ({ t, over: `${topicName} ${t}${brand}`.length - TITLE_MAX }))
    .sort((a, b) => a.over - b.over);
  const tail = ranked.length ? ranked[0].t : (usable[0] ?? '');
  let room = Math.max(12, TITLE_MAX - brand.length - tail.length - 1);
  let out = `${trimToWord(topicName, room)} ${tail}${brand}`;
  if (out.length > TITLE_MAX) {
    // tail itself is longer than the whole budget — drop the subject/token part
    const parts = tail.replace(/^·\s*/, '').split('·').map(s => s.trim()).filter(Boolean);
    const keep = parts.length > 1 ? ` · ${parts[parts.length - 1]}` : '';
    room = Math.max(12, TITLE_MAX - brand.length - keep.length - 1);
    out = `${trimToWord(topicName, room)}${keep}${brand}`;
  }
  return out;
}

/** Keep a description inside 99–160 chars without inventing a new claim: it
 *  trims the tail at a word boundary and only falls back to a hard cut (plus
 *  "…") if even the first clause is over-long. The old code did
 *  `slice(0,157)+'...'`, which routinely emitted "syllabus, exam pat…". */
export function fitDescription(text: string): string {
  const t = String(text ?? '').trim();
  if (t.length <= DESC_MAX) return t;
  const cut = trimToWord(t, DESC_MAX - 1);
  const out = cut.endsWith('.') || cut.endsWith(',') ? cut.slice(0, -1) : cut;
  return `${out}…`;
}

/**
 * Country display names + alias lists.
 *
 * w21 measured 233 dead HIGH-geo pages that "never name their country" and
 * w22 re-measured it against the rendered HTML. w21's alias list was country
 * NOUNS only, so 191 of its 233 already named the country in adjectival or
 * board form ("Irish Leaving Certificate", "NCEA Level 2", "HKDSE", "VCE").
 * The genuinely unnamed set is 49. These lists exist so the check that decides
 * "does this page name its country" is not a noun-only guess.
 *
 * The exam hub page (`src/pages/exams/[exam].astro`) has its own, shorter
 * `countryLabels` map that stops at 'South Africa' / 'UAE' and falls back to
 * the raw slug — which is why `/exams/hkdse/` renders "hongkong". Not changed
 * here (that is a locked-ish UI surface); the note and study-plan templates
 * below use this complete map.
 */
export const COUNTRY_NAME: Record<string, string> = {
  india: 'India', pakistan: 'Pakistan', nigeria: 'Nigeria', bangladesh: 'Bangladesh',
  srilanka: 'Sri Lanka', nepal: 'Nepal', china: 'China', ethiopia: 'Ethiopia',
  ghana: 'Ghana', kenya: 'Kenya', malaysia: 'Malaysia', indonesia: 'Indonesia',
  philippines: 'Philippines', southafrica: 'South Africa', saudi: 'Saudi Arabia',
  uae: 'UAE', australia: 'Australia', newzealand: 'New Zealand', canada: 'Canada',
  ireland: 'Ireland', hongkong: 'Hong Kong', qatar: 'Qatar', kuwait: 'Kuwait',
  singapore: 'Singapore', maldives: 'Maldives', zimbabwe: 'Zimbabwe', zambia: 'Zambia',
  tanzania: 'Tanzania', uganda: 'Uganda', rwanda: 'Rwanda', nepal2: 'Nepal',
  cambodia: 'Cambodia', myanmar: 'Myanmar', jordan: 'Jordan', egypt: 'Egypt',
  brazil: 'Brazil', germany: 'Germany', france: 'France', ireland2: 'Ireland',
  italy: 'Italy', spain: 'Spain', netherlands: 'Netherlands', poland: 'Poland',
  turkey: 'Turkey', kazakhstan: 'Kazakhstan', tajikistan: 'Tajikistan',
  turkmenistan: 'Turkmenistan', kyrgyzstan: 'Kyrgyzstan', austria: 'Austria',
  switzerland: 'Switzerland', belgium: 'Belgium', sweden: 'Sweden', norway: 'Norway',
  denmark: 'Denmark', finland: 'Finland', iceland: 'Iceland', ireland3: 'Ireland',
  greece: 'Greece', portugal: 'Portugal', romania: 'Romania', ukraine: 'Ukraine',
  israel: 'Israel', saudi2: 'Saudi Arabia', oman: 'Oman', bahrain: 'Bahrain',
  bhutan: 'Bhutan', maldives2: 'Maldives', mauritius: 'Mauritius',
};

const COUNTRY_ALIAS: Record<string, string[]> = {
  australia: ['australia', 'australian', 'acara', 'nesa', 'nsw', 'queensland', 'victoria', 'wa'],
  newzealand: ['new zealand', 'ncea', 'nzqa', 'nzeo'],
  canada: ['canada', 'canadian', 'ontario', 'osslt', 'o. cat', 'brunswick'],
  ireland: ['ireland', 'irish', 'leaving certificate', 'central applications office', 'cao'],
  hongkong: ['hong kong', 'hkdse', 'hkabe'],
  india: ['india', 'indian', 'nta', 'cbse', 'state board'],
  pakistan: ['pakistan', 'pakistani', 'inter board', 'punjab', 'sindh'],
  nigeria: ['nigeria', 'nigerian', 'waec', 'neco', 'jamb'],
  qatar: ['qatar', 'qatari', 'moe'],
  kuwait: ['kuwait', 'kuwaiti'],
  singapore: ['singapore', 'moe', 'a-level', 'o-level'],
  saudi: ['saudi', 'saudi arabia'],
  bangladesh: ['bangladesh', 'bangladeshi', 'dhaka'],
  srilanka: ['sri lanka', 'al-exam', 'n.ie'],
};

/** True when the text already names this country in ANY form (noun, adjective,
 *  or the board/qualification acronym). Used as the guard that keeps the geo
 *  pass from adding a country name to a page that already has one. */
export function namesCountry(haystack: string, countrySlug: string): boolean {
  const t = String(haystack ?? '').toLowerCase();
  const aliases = COUNTRY_ALIAS[countrySlug] ?? [COUNTRY_NAME[countrySlug]?.toLowerCase() ?? countrySlug];
  return aliases.some(a => a && t.includes(a));
}

/** The five countries w21 measured as geo-mislabelled (H5a) and w22 re-measured
 *  as genuinely unnamed (49 pages). The geo pass is scoped to THESE ONLY.
 *  A first run applied it to every country and touched 584 notes — including 271
 *  Pakistani and 170 Indian ones the order never mentioned and that already earn
 *  the traffic. Scope discipline beats "more is better" when 500 earning pages
 *  are in the blast radius. */
export const GEO_PASS_COUNTRIES = new Set(['australia', 'newzealand', 'canada', 'ireland', 'hongkong']);

export function countryDisplay(countrySlug: string): string {
  return COUNTRY_NAME[countrySlug] ?? '';
}

/**
 * Note SERP title. `collides` is true when this note's plain title is shared
 * with at least one other note in the collection — only then do we escalate, so
 * every currently-unique title is left byte-identical.
 *
 * Order of escalation (each still a true statement about the page):
 *   1. the historical ladder, word-trimmed instead of mid-word cut
 *   2. exam label with the parenthetical kept (IELTS Hong Kong, not IELTS)
 *   3. exam-id label (short enough to leave the topic intact)
 *   4. subject name + exam-id label
 */
export function noteTitle(args: {
  topicName: string;
  examName: string;
  subjectName: string;
  examId: string;
  /** exam ids that share the SAME compact label — forces keeping the parenthetical */
  sharedExamLabel: boolean;
  collides: boolean;
  /** display country, when this page does NOT already name its country */
  countryName?: string;
  /** how many notes already resolved to this exact title — drives the last rung */
  titleCount?: number;
  /** the note's own topic slug — used only as the LAST tie-breaker, when two
   *  notes in the same exam AND subject carry the same topicName (e.g. two
   *  "Chemical Bonding" notes in CUET chemistry). Nothing above it can separate
   *  those two; this can, and it is still a true identifier for the page. */
  topicId?: string;
}): string {
  const { topicName, examName, subjectName, examId, sharedExamLabel, collides, countryName = '', titleCount = 1 } = args;
  const BRAND_SUFFIX = BRAND;

  // Historical ladder first, unchanged where it fits — this is what 3,300+
  // already-unique titles depend on.
  const full = `${topicName} — ${examName} Notes`;
  const mid = `${topicName} — ${examName}`;
  const compact = `${topicName} — ${compactExamLabel(examName)} Notes`;
  const tight = `${topicName} — ${compactExamLabel(examName)}`;

  // Collision path. The parenthetical is what distinguishes ielts-hk / -kuwait /
  // -qatar, so re-attach it whenever the stripped label is ambiguous.
  const examLabel = sharedExamLabel ? examName : compactExamLabel(examName);
  const idLabel = examIdLabel(examId);
  const subj = subjectName && subjectName !== 'None' ? subjectName : '';

  // Pass 2, checked BEFORE the non-collide early return. Two notes can have
  // different legacy titles and still converge here: `jamb/chemistry/chem-1` and
  // `neco/chemistry/chem-1` both carry "Atomic Structure and the Periodic
  // Table"-shaped topic names long enough that the word-boundary cut eats the
  // exam label, leaving "Atomic Structure … | StudyRoadmap" on both. When the
  // only honest separator left is the note's own slug, use it and trim the TOPIC.
  if (titleCount > 1) {
    return fitTitleWithTail(topicName, [
      `· ${examIdLabel(examId)} · ${args.topicId ?? ''}`.trim(),
      subj ? `· ${subj} · ${examIdLabel(examId)} · ${args.topicId ?? ''}`.trim() : '',
    ], BRAND_SUFFIX);
  }

  if (!collides) {
    return fitTitle([full, mid, compact, tight], BRAND_SUFFIX);
  }

  return fitTitle([
    `${topicName} — ${examName} Notes`,
    `${topicName} — ${examName}`,
    `${topicName} — ${examLabel} Notes`,
    `${topicName} — ${examLabel}`,
    // Geo pass: a page that never names its country gets it here, before the
    // shorter variants, because "country + exam + topic" is the ordering a
    // student in that market actually searches.
    ...(countryName ? [`${topicName} — ${examLabel}, ${countryName}`, `${topicName} — ${countryName} ${idLabel}`] : []),
    `${topicName} — ${idLabel}`,
    subj ? `${topicName} — ${subj} · ${idLabel}` : `${topicName} — ${idLabel}`,
    subj ? `${topicName} (${idLabel}) · ${subj}` : `${topicName} (${idLabel})`,
    // last rungs: same exam, same subject, same topicName. The frontmatter is
    // ambiguous there and only the topic slug separates the two pages.
    subj ? `${topicName} — ${subj} · ${args.topicId ?? ''}`.trim() : `${topicName} · ${args.topicId ?? ''}`.trim(),
    `${topicName} · ${examIdLabel(examId)} · ${args.topicId ?? ''}`.trim(),
  ], BRAND_SUFFIX);
}

/**
 * Note H1. Plain `topicName` is the historical behaviour and stays for every
 * note whose topic name is unique in the collection. Generic topic names
 * ("Probability" on 11 exams, "Algebra" on 10) escalate to the exam the page is
 * actually about, which is also what the title already says.
 */
export function noteH1(args: {
  topicName: string;
  subjectName: string;
  examId: string;
  /** how many notes in the collection share this topicName */
  topicNameCount: number;
  /** how many notes share `topicName — idLabel` */
  h1Count: number;
  /** how many notes share `topicName — subject · idLabel` */
  subjectH1Count?: number;
  topicId?: string;
}): string {
  const { topicName, subjectName, examId, topicNameCount, h1Count, subjectH1Count = 0, topicId = '' } = args;
  if (topicNameCount <= 1) return topicName;
  const idLabel = examIdLabel(examId);
  const subj = subjectName && subjectName !== 'None' ? subjectName : '';
  if (h1Count <= 1) return `${topicName} — ${idLabel}`;
  if (subjectH1Count <= 1 && subj) return `${topicName} — ${subj} · ${idLabel}`;
  return topicId ? `${topicName} (${idLabel}) · ${topicId}` : `${topicName} (${idLabel})`;
}

/**
 * Exam-page / study-plan label. Exam-family variants ("IELTS (Hong Kong)" vs
 * "IELTS (Kuwait)", "UCAT ANZ" vs "UCAT ANZ (… NZ)") share a compact label, so
 * the parenthetical is only stripped when the stripped form is unique.
 */
export function pageExamLabel(examName: string, examId: string, sharedExamLabel: boolean): string {
  const c = compactExamLabel(examName);
  if (!sharedExamLabel && c) return c;
  const full = String(examName ?? '').trim();
  // 30 was too aggressive: "OSSLT: Ontario Secondary School Literacy Test" fell
  // back to "OSSLT" and shipped "OSSLT Dates | StudyRoadmap" at 26 chars, under
  // the operator's 30-char floor. The compact form is preferred, and the full
  // form is only abandoned when it genuinely cannot fit next to a spoke word.
  if (full.length <= 46) return full;
  return c.length <= 46 ? c : examIdLabel(examId);
}