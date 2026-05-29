// Study-plan differentiation engine.
//
// Why this exists: the per-duration study-plan pages (/study-plan/{exam}/{dur}/)
// used to differ ONLY by the day-numbers in a schedule table — ~98% identical
// prose. Google treats that as doorway/scaled content, which is why all but one
// duration per exam was noindexed. To index durations legitimately, each indexed
// page must give genuinely different, useful guidance.
//
// Two design rules keep the indexed pages non-duplicative:
//   1. Each timeline maps to a distinct STRATEGY ARCHETYPE (sprint → marathon),
//      and each archetype has its own written guidance (pace, what to cut, pass
//      count, mock cadence, risks) — not the same text with swapped numbers.
//   2. We index exactly ONE representative duration per archetype an exam offers
//      (see indexedDurationsFor). Two "focused"-tier durations (e.g. 2-month and
//      3-month) are the same strategy, so only the representative is indexed; the
//      other stays noindex,follow as a user tool. This prevents within-tier
//      near-duplicates from becoming a fresh set of doorways.
// Same-archetype pages across exams still differ because the woven subject data,
// topic counts and schedule differ per exam.

export interface DailyTopic {
  subject: string;
  name: string;
  weight?: number;
  description?: string;
}

export type ArchetypeId =
  | 'cram'
  | 'sprint'
  | 'intensive'
  | 'focused'
  | 'foundation'
  | 'longhorizon'
  | 'marathon';

export interface StudyPlanStrategy {
  archetypeId: ArchetypeId;
  archetype: string;
  tagline: string;
  hoursPerDay: string;
  topicsPerDay: string;
  passes: string;
  coverage: string;
  whatToCut: string;
  mockPlan: string;
  weeklyRhythm: string;
  risk: string;
  paragraphs: string[];
  faq: { q: string; a: string }[];
}

// Distinct strategy archetype per timeline. Boundaries are chosen so the common
// duration presets each land in a different archetype: 2w→sprint, 1mo→intensive,
// 2-3mo→focused, 6mo→foundation, 1yr→longhorizon, 2yr→marathon.
export function archetypeFor(totalDays: number): ArchetypeId {
  if (totalDays <= 3) return 'cram';
  if (totalDays <= 21) return 'sprint';
  if (totalDays <= 49) return 'intensive';
  if (totalDays <= 105) return 'focused';
  if (totalDays <= 225) return 'foundation';
  if (totalDays <= 450) return 'longhorizon';
  return 'marathon';
}

function hoursPerDayFor(totalDays: number): string {
  if (totalDays <= 1) return 'every available hour';
  if (totalDays <= 3) return '8–10 hours';
  if (totalDays <= 14) return '6–8 hours';
  if (totalDays <= 30) return '5–6 hours';
  if (totalDays <= 60) return '4–5 hours';
  if (totalDays <= 100) return '3.5–4.5 hours';
  if (totalDays <= 200) return '2.5–3.5 hours';
  if (totalDays <= 400) return '2–3 hours';
  return '1.5–2.5 hours';
}

// Order subjects by total weight so the prose can name the genuinely heaviest ones.
function rankSubjects(dailyTopics: DailyTopic[]): { name: string; total: number; count: number }[] {
  const agg: Record<string, { total: number; count: number }> = {};
  for (const t of dailyTopics) {
    if (!t.subject) continue;
    if (!agg[t.subject]) agg[t.subject] = { total: 0, count: 0 };
    agg[t.subject].total += t.weight || 0;
    agg[t.subject].count += 1;
  }
  return Object.entries(agg)
    .map(([name, v]) => ({ name, total: v.total, count: v.count }))
    .sort((a, b) => b.total - a.total);
}

function listToProse(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

export function getStudyPlanStrategy(opts: {
  durationLabel: string;
  totalDays: number;
  dailyTopics: DailyTopic[];
  examName: string;
}): StudyPlanStrategy {
  const { durationLabel, totalDays, dailyTopics, examName } = opts;
  const topicCount = dailyTopics.length || 0;
  const ranked = rankSubjects(dailyTopics);
  const subjectCount = ranked.length;
  const topSubjects = ranked.slice(0, 3).map((s) => s.name);
  const topProse = listToProse(topSubjects) || 'the highest-weight subjects';
  const days = Math.max(1, totalDays);
  const tpd = topicCount > 0 ? topicCount / days : 0;
  const topicsPerDay = tpd >= 1 ? tpd.toFixed(1) : tpd.toFixed(2);
  const hoursPerDay = hoursPerDayFor(days);
  const id = archetypeFor(days);
  const lower = durationLabel.toLowerCase();

  type Tier = Omit<StudyPlanStrategy, 'hoursPerDay' | 'topicsPerDay' | 'paragraphs' | 'faq' | 'archetypeId'> & {
    pace: string;
    frontLoad: string;
  };

  const byTier: Record<ArchetypeId, Tier> = {
    cram: {
      archetype: 'Emergency triage',
      tagline: 'Maximise marks per hour — there is no time for anything but the highest-yield topics.',
      passes: 'no full pass — pure triage of the highest-weight topics only',
      coverage: `In ${days} day${days === 1 ? '' : 's'} you cannot cover ${topicCount} topics, so this plan does not try. It targets only the handful that historically carry the most marks.`,
      whatToCut: 'Study weight-5 topics only. Everything weight-4 and below is noise at this range — skip it without guilt.',
      mockPlan: 'No full mocks. Spend every minute on previous-year questions for your highest-weight topics and memorise their solution patterns.',
      weeklyRhythm: 'There is no week — work in 90-minute focused blocks with short breaks, prioritising recall over re-reading.',
      risk: 'The failure mode here is spreading thin. Pick the top topics and go deep enough to actually score, rather than skimming everything.',
      pace: 'That is not a study plan in the normal sense — it is damage control, and done right it can still move your score.',
      frontLoad: 'with only the heaviest topics in scope, everything else is deliberately out of frame',
    },
    sprint: {
      archetype: 'Last-mile sprint',
      tagline: 'One fast, weight-prioritised pass over what actually appears on the paper.',
      passes: 'one rapid pass over high-weight topics, with a short review of the weakest',
      coverage: `${days} days is enough for one disciplined pass over the high-weight portion of ${examName}, not the full ${topicCount}-topic syllabus.`,
      whatToCut: 'Cover weight 4–5 topics properly. Touch weight-3 topics only if you finish early; skip weight 1–2 entirely.',
      mockPlan: 'Sit two or three timed previous-year papers in the second half and review every wrong answer the same day.',
      weeklyRhythm: 'Front-load new learning into the first 60% of days; reserve the last 40% for previous-year papers and error review.',
      risk: 'The trap is starting too slow. Begin with the heaviest subjects on day one — you do not have a buffer week.',
      pace: 'That pace is brisk but survivable if you protect your highest-weight subjects first.',
      frontLoad: 'so they get your first and best hours, before fatigue sets in',
    },
    intensive: {
      archetype: 'Focused intensive',
      tagline: 'A single full pass plus targeted revision of your weak areas — one demanding month.',
      passes: 'one full pass plus a targeted second look at weak topics',
      coverage: `${days} days lets you cover the full ${examName} syllabus once at a steady pace, then circle back to whatever stayed shaky.`,
      whatToCut: 'Cover weight 3–5 topics thoroughly. Give weight 1–2 topics a single light reading in your final week rather than skipping them outright.',
      mockPlan: 'From the second week, sit one full-length mock every week and analyse it fully before moving on — analysis matters more than the score.',
      weeklyRhythm: 'Each week: 5 days new topics, 1 day consolidating that week, 1 day mock + review. Keep a running error log.',
      risk: 'At this pace it is tempting to chase coverage and never revise. Protect the weekly consolidation day — it is what makes the pass stick.',
      pace: 'That is a demanding but realistic daily load for a one-month working timeline.',
      frontLoad: 'so they are mastered in the first fortnight and the lighter subjects fill the rest',
    },
    focused: {
      archetype: 'Structured build',
      tagline: 'Full coverage, one real revision cycle, and a weekly mock series — the standard serious-attempt window.',
      passes: 'one full pass, one structured revision cycle, and a weekly mock series',
      coverage: `${days} days is enough to cover all ${topicCount} ${examName} topics once, revise them once more, and build a genuine mock-test habit on top.`,
      whatToCut: 'Cover the entire syllabus once, then let weightage decide what earns a second and third pass. Nothing is skipped — only deprioritised.',
      mockPlan: 'Topic-wise tests while you learn, then weekly full-length mocks once the first pass is done. Track sectional timing, not just the total.',
      weeklyRhythm: 'Roughly the first 60% of the timeline on the first pass, the next 25% on weight-prioritised revision, the last 15% on full mocks and an error-log review.',
      risk: 'The risk is plateauing after the first pass. Block out the revision cycle in your calendar now, before mocks crowd it out.',
      pace: 'That is a sustainable pace that leaves real room for revision instead of just first-time coverage.',
      frontLoad: 'so they anchor the first pass and earn the most revision time later',
    },
    foundation: {
      archetype: 'Full foundation',
      tagline: 'Build real understanding, then layer depth, two revision passes, and a structured mock series.',
      passes: 'a concept-first pass, a depth pass, a revision pass, and a structured mock series',
      coverage: `Around ${Math.round(days / 30)} months lets you do far more than cover ${examName} — you can understand it: a concept pass, a problem-solving pass, then spaced revision across all ${topicCount} topics.`,
      whatToCut: 'Cover everything, and give weight 3–5 topics a second problem-solving pass. Low-weight topics get one solid pass — at this length they are worth keeping, not cutting.',
      mockPlan: 'Topic and sectional tests through the build phase; full-length mocks every other week from the midpoint, weekly in the final two months. Maintain an error log from the start.',
      weeklyRhythm: 'Three arcs: a concept-building phase, a depth-and-problems phase, and a revision-plus-mocks phase. Each subject gets at least two spaced passes.',
      risk: 'A multi-month plan fails by drifting in the early, low-pressure weeks. Anchor each month to a concrete checkpoint so the slack does not become a late scramble.',
      pace: 'That moderate daily load is the point of starting this early — you trade intensity for retention.',
      frontLoad: 'so they become the conceptual backbone the rest of the syllabus hangs off',
    },
    longhorizon: {
      archetype: 'Long-horizon mastery',
      tagline: 'A year to build from the ground up: deep concepts, multiple passes, and a long mock campaign.',
      passes: 'a from-scratch concept pass, two depth passes, and a months-long mock campaign',
      coverage: `A full year means you are not preparing for ${examName} so much as mastering it — building every one of the ${topicCount} topics from first principles, including the low-weight ones that separate top ranks from safe passes.`,
      whatToCut: 'Cut nothing. Over a year, low-weight topics are exactly where you build the edge most candidates never reach — depth compounds at this length.',
      mockPlan: 'Light topic tests in the first months, monthly full-length mocks from the midpoint, shifting to weekly in the final 10–12 weeks. Revisit your error log on a spaced schedule throughout.',
      weeklyRhythm: 'Quarter-by-quarter: foundations, depth and problem-solving, full-syllabus revision, then a mock-and-fine-tuning quarter. Re-touch every subject at least three times.',
      risk: 'The year-long failure mode is silent drift — early months feel relaxed, then the second half panics. Run monthly self-tests so a slipping schedule shows up early.',
      pace: 'That light daily load is sustainable for a full year without burning out — consistency beats intensity over this long.',
      frontLoad: 'so the early months build deep fluency in them while there is time to spare',
    },
    marathon: {
      archetype: 'Two-year deep build',
      tagline: 'The long game: build from zero across two cycles, with depth and a sustained mock habit most candidates never reach.',
      passes: 'a foundations year, a mastery-and-depth year, and a sustained mock campaign across both',
      coverage: `Two years is a genuine head start. You can build ${examName} from zero in year one and convert understanding into rank-grade speed and accuracy in year two — every one of the ${topicCount} topics, twice over, with room for the hardest material.`,
      whatToCut: 'Nothing is cut and nothing is rushed. At this length the differentiator is depth on the hardest, lowest-frequency topics and relentless revision — the work most candidates skip.',
      mockPlan: 'Year one: topic and sectional tests only, building accuracy. Year two: monthly then fortnightly then weekly full-length mocks, with a disciplined error log you actually revisit.',
      weeklyRhythm: 'Think in semesters, not weeks: build, deepen, revise, simulate — repeated across two cycles so every subject is seen many times on a spaced schedule.',
      risk: 'The two-year risk is losing momentum in the long flat middle. Set quarterly milestones and treat year-one mocks as checkpoints, or the early lead quietly evaporates.',
      pace: 'That gentle daily load is the whole advantage of a two-year run — you build mastery slowly enough that it actually sticks.',
      frontLoad: 'so the first year builds genuine mastery of them, not just familiarity',
    },
  };

  const t = byTier[id];

  const paragraphs = [
    `This ${lower} gives you ${days} day${days === 1 ? '' : 's'} to work through ${topicCount} weighted ${examName} topics across ${subjectCount} subject${subjectCount === 1 ? '' : 's'} — roughly ${topicsPerDay} new topic${topicsPerDay === '1.0' ? '' : 's'} a day at ${hoursPerDay} of focused study. ${t.pace}`,
    `${examName} marks are not spread evenly across subjects. ${topProse} carry the heaviest weightage in recent papers, so this plan front-loads them — ${t.frontLoad}. ${t.whatToCut}`,
    `${t.coverage} ${t.risk}`,
  ];

  const faq = [
    {
      q: `Is ${days} day${days === 1 ? '' : 's'} enough to prepare for ${examName}?`,
      a: `${t.coverage} The honest answer depends on your starting point, but this ${lower} is built to get the most from the time you have: ${t.tagline.toLowerCase()}`,
    },
    {
      q: `How many hours a day does this ${examName} ${durationLabel.toLowerCase()} need?`,
      a: `Plan for ${hoursPerDay} of focused study, covering about ${topicsPerDay} new topics a day. ${t.weeklyRhythm}`,
    },
    {
      q: `What should I skip if I am short on time?`,
      a: `${t.whatToCut}`,
    },
    {
      q: `When should I start mock tests on this plan?`,
      a: `${t.mockPlan}`,
    },
  ];

  return {
    archetypeId: id,
    archetype: t.archetype,
    tagline: t.tagline,
    hoursPerDay,
    topicsPerDay,
    passes: t.passes,
    coverage: t.coverage,
    whatToCut: t.whatToCut,
    mockPlan: t.mockPlan,
    weeklyRhythm: t.weeklyRhythm,
    risk: t.risk,
    paragraphs,
    faq,
  };
}

// Index exactly ONE representative duration per distinct strategy archetype the
// exam offers. Two durations in the same archetype (e.g. a 2-month and 3-month
// "focused" plan) are the same strategy, so indexing both would just create a
// within-tier doorway pair — instead we index the representative and leave the
// other as a noindex,follow user tool. Cram-tier (≤3 days) is never indexed.
// Within an archetype the representative is the most-searched/roundest preset.
const REP_PREFERENCE = ['2w', '1mo', '3mo', '2mo', '6mo', '1yr', '2yr', '10d', '7d', '5d', '3d', '2d', '1d'];

export function indexedDurationsFor(
  durationKeys: string[],
  totalDaysByKey: Record<string, number>,
): Set<string> {
  const byArchetype: Record<string, string[]> = {};
  for (const k of durationKeys) {
    const arch = archetypeFor(totalDaysByKey[k] || 0);
    if (arch === 'cram') continue; // never index cram-tier
    (byArchetype[arch] ||= []).push(k);
  }
  const indexed = new Set<string>();
  for (const arch of Object.keys(byArchetype)) {
    const candidates = byArchetype[arch];
    const rep =
      REP_PREFERENCE.find((p) => candidates.includes(p)) ||
      [...candidates].sort((a, b) => (totalDaysByKey[b] || 0) - (totalDaysByKey[a] || 0))[0];
    if (rep) indexed.add(rep);
  }
  // Guarantee at least one indexed plan per exam (e.g. an exam offering only
  // sub-4-day cram plans): index its single longest duration.
  if (indexed.size === 0 && durationKeys.length > 0) {
    const longest = durationKeys.reduce(
      (best, k) => ((totalDaysByKey[k] || 0) > (totalDaysByKey[best] || 0) ? k : best),
      durationKeys[0],
    );
    indexed.add(longest);
  }
  return indexed;
}
