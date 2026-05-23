// Curated allowlist of genuinely-searched exam comparisons.
//
// The /compare/[pair] route auto-generates every pairwise combination of TIER1
// exams within a country (~94 pages), but most are combinatorial filler with no
// real search demand (Law vs Medicine, MBA vs Lectureship, Civil-services vs
// Engineering-entrance). Those dilute AdSense content quality. Only the pairs
// below are indexed and listed on /compare/; the rest serve noindex and are
// dropped from the listing. Every page still resolves (HTTP 200) for anyone
// arriving via a direct link.
//
// Keys are the two examIds sorted alphabetically and joined with '|', so the
// order the pair is generated in never matters.

const ALLOW = [
  // Medical (India)
  'aiims-mbbs|neet', 'neet|neet-pg', 'aiims-mbbs|neet-pg',
  // Engineering (India)
  'jeeadvanced|jeemain', 'bitsat|jeemain', 'gate|jeemain',
  'bitsat|jeeadvanced', 'gate|jeeadvanced', 'bitsat|gate',
  // Govt / civil services (India)
  'ssc-cgl|upsc',
  // Famous cross-field "which path should I take" decisions
  'jeemain|neet', 'jeeadvanced|neet', 'cuet|jeemain', 'cuet|neet', 'cuet|jeeadvanced',
  // Engineering-graduate career trilemma (M.Tech vs MBA vs civil services)
  'cat|gate', 'gate|upsc', 'cat|upsc',
  // Pakistan medical-vs-engineering (the local NEET-vs-JEE)
  'ecat|mdcat',
  // Nigeria — all four are university/secondary entrance, mutually comparable
  'jamb|waec', 'jamb|neco', 'jamb|nabteb', 'neco|waec', 'nabteb|waec', 'nabteb|neco',
];

export const COMPARE_INDEX_ALLOWLIST = new Set(
  ALLOW.map((k) => k.split('|').sort().join('|')),
);

export function isCuratedComparePair(idA: string, idB: string): boolean {
  return COMPARE_INDEX_ALLOWLIST.has([idA, idB].sort().join('|'));
}
