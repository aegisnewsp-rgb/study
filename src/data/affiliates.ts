/**
 * Affiliate placement registry — the switch-on surface for the affiliate track.
 *
 * WHY THIS EXISTS
 * The affiliate path has been "open but empty" since the MITGO/Admitad verification
 * tag went live (2026-09-17): the account and the site registration existed, but
 * nobody had read the offer catalogue against the exam inventory, so there was
 * nothing to link to. On 2026-09-18 the catalogue was pulled for the first time
 * (`/data/sr-affiliate-find.py`, evidence in
 * `/data/ad-revenue/admitad-catalogue-2026-09-18.json`).
 *
 * WHAT THE PULL FOUND (measured, not assumed):
 *   - The account can see 1,287 active campaigns. The API silently IGNORES both
 *     `region` and `categories`, and `offset >= 2000` returns nothing, so that is the
 *     whole visible catalogue and every filter must be client-side.
 *   - 212 of them match an education vocabulary; 300 reach India or worldwide.
 *   - **There is no exam-prep programme in it.** No Testbook, Adda247, Unacademy,
 *     Physics Wallah, Marrow, PrepLadder, ICSI or any other test-prep advertiser.
 *     The earlier assumption that Admitad carried Indian test-prep offers was wrong.
 *   - What it DOES carry for this audience: global courses (Coursera, Udemy,
 *     Skillshare), language tutoring (italki, Preply), books (AbeBooks), English-exam
 *     providers (British Council), study-abroad travel/visa/hostel, travel insurance,
 *     and Indian financial products (credit cards at the highest payouts on the list).
 *
 * WHY NOTHING HERE IS LIVE
 * `AFFILIATES_LIVE` is false and every offer's `enabled` is false, so every
 * <AffiliateLink> renders `null` — the plumbing exists, no link ships, and no page
 * changes appearance. Turning a placement on requires BOTH: (a) the operator approving
 * the offer and joining the campaign, and (b) a real tracking URL in `urlTemplate`.
 * No agent may set either. See the affiliate guard in `/data/sr-pre-deploy-tests.sh`
 * (T20), which fails a deploy that ships an affiliate link without visible disclosure.
 */

export type AffiliateCategory =
  | 'course'
  | 'language'
  | 'books'
  | 'exam-english'
  | 'travel'
  | 'visa'
  | 'insurance'
  | 'finance';

export interface AffiliateOffer {
  /** Stable key referenced by <AffiliateLink id="..." />. */
  id: string;
  name: string;
  network: string;
  category: AffiliateCategory;
  /** Payout string verbatim from the network catalogue. Never paraphrase money. */
  payout: string;
  /** Where that payout came from — a placement without this is not admissible. */
  payoutSource: string;
  /** Regions the network lists, reduced to the shape that matters for a placement. */
  geo: 'worldwide' | 'india-only' | 'many-geos';
  /** How many regions the network actually lists — evidence that `geo` is a reduction, not a guess. */
  geoCount: number;
  /** Whether IN is among the listed regions. For `worldwide` this is true by definition of worldwide, not because IN appears in the list. */
  includesIndia: boolean;
  /** Whether the network allows deeplink construction. */
  deeplinkAllowed: boolean;
  /**
   * The real tracking URL, supplied by the operator after joining the campaign.
   * Undefined = placement cannot render, whatever `enabled` says.
   */
  urlTemplate?: string;
  /** Operator-only flag. Default false. */
  enabled: boolean;
  /** Why this fits, in one line, tied to a measured surface. */
  fitNote: string;
}

/**
 * Master switch. Operator-only. While false, nothing renders anywhere.
 * Deliberately a constant rather than an env var so a stray build environment
 * cannot switch monetisation on by accident.
 */
export const AFFILIATES_LIVE = false;

/** Verbatim disclosure text. Kept in one place so every surface says the same thing. */
export const AFFILIATE_DISCLOSURE =
  'Some links on this page are affiliate links. If you buy through them, we may earn a commission at no extra cost to you. It does not affect what we recommend or what we cover.';

/**
 * Candidate offers, ranked by fit with the measured traffic. All disabled.
 * Payouts are catalogue values as of 2026-09-18 and must be re-pulled before use —
 * networks change them without notice.
 */
export const AFFILIATE_OFFERS: AffiliateOffer[] = [
  {
    id: 'coursera',
    name: 'Coursera',
    network: 'Admitad/MITGO',
    category: 'course',
    payout: '10.50-31.50%',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 22998 "Coursera WW"',
    geo: 'worldwide',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: true,
    enabled: false,
    fitNote:
      'Worldwide (region "00"). Fits the after-12th and study-plan surfaces, where the reader is deciding what to learn next rather than which exam to sit.',
  },
  {
    id: 'udemy',
    name: 'Udemy',
    network: 'Admitad/MITGO',
    category: 'course',
    payout: '0.00-12.99% + 3.24USD',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 22448 "Udemy WW"',
    geo: 'worldwide',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: true,
    enabled: false,
    fitNote:
      'Worldwide, low ticket. Only worth a placement where the page already answers a skill question.',
  },
  {
    id: 'skillshare',
    name: 'Skillshare',
    network: 'Admitad/MITGO',
    category: 'course',
    payout: '19.50%',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 17846 "Skillshare Many GEOs"',
    geo: 'many-geos',
    geoCount: 223,
    includesIndia: true,
    deeplinkAllowed: true,
    enabled: false,
    fitNote: 'Subscription courses; fits study-skills and note-taking content.',
  },
  {
    id: 'british-council',
    name: 'British Council',
    network: 'Admitad/MITGO',
    category: 'exam-english',
    payout: '9.23%',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 30142 "BritishCouncil WW"',
    geo: 'many-geos',
    geoCount: 195,
    includesIndia: true,
    deeplinkAllowed: false,
    enabled: false,
    fitNote:
      'IELTS/English exams. Best structural fit on the list: the site already serves WAEC/JAMB English notes and IELTS-adjacent queries, and this is the official provider rather than a reseller. NOTE: deeplinks are NOT allowed — the placement must use a campaign banner or a supplied link.',
  },
  {
    id: 'italki',
    name: 'italki',
    network: 'Admitad/MITGO',
    category: 'language',
    payout: '18.00USD',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 24736 "italki WW" (app CPA variant: 98613, 10.00USD)',
    geo: 'worldwide',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: true,
    enabled: false,
    fitNote: 'Language tutoring; fits English-language note pages.',
  },
  {
    id: 'preply',
    name: 'Preply',
    network: 'Admitad/MITGO',
    category: 'language',
    payout: '0.00-29.25USD',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 29694 "Preply"',
    geo: 'many-geos',
    geoCount: 248,
    includesIndia: true,
    deeplinkAllowed: true,
    enabled: false,
    fitNote:
      'Tutoring marketplace; the payout range is wide, so verify the real tier before use.',
  },
  {
    id: 'abebooks',
    name: 'AbeBooks',
    network: 'Admitad/MITGO',
    category: 'books',
    payout: '1.29%',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 21289 "AbeBooks Many GEOs"',
    geo: 'many-geos',
    geoCount: 230,
    includesIndia: true,
    deeplinkAllowed: true,
    enabled: false,
    fitNote:
      'Used-textbook marketplace. Low rate but universal fit: many note pages name a book. Only viable where a specific title is genuinely recommended.',
  },
  {
    id: 'headway',
    name: 'Headway',
    network: 'Admitad/MITGO',
    category: 'course',
    payout: '15.00USD',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 39241 "Headway Many Geos"',
    geo: 'many-geos',
    geoCount: 246,
    includesIndia: true,
    deeplinkAllowed: false,
    enabled: false,
    fitNote: 'Book-summary app; fits study-skills content. Deeplinks not allowed.',
  },
  {
    id: 'visatosg',
    name: 'VisatoSingapore',
    network: 'Admitad/MITGO',
    category: 'visa',
    payout: '20.00%',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 190129 "VisatoSingapore Many GEOs"',
    geo: 'many-geos',
    geoCount: 245,
    includesIndia: true,
    deeplinkAllowed: true,
    enabled: false,
    fitNote:
      'Visa services. Fits the study-abroad cluster — the Gaokao page (9,995 impressions, the largest on the site) ranks for "can international students give gaokao", i.e. an outbound-study audience.',
  },
  {
    id: 'hostelpass',
    name: 'HostelPass',
    network: 'Admitad/MITGO',
    category: 'travel',
    payout: '14.00%',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 35403 "HostelPass WW"',
    geo: 'many-geos',
    geoCount: 246,
    includesIndia: true,
    deeplinkAllowed: false,
    enabled: false,
    fitNote: 'Student travel; only relevant on outbound-study surfaces. Deeplinks not allowed.',
  },
  {
    id: 'maxlife',
    name: 'MaxLife Insurance',
    network: 'Admitad/MITGO',
    category: 'insurance',
    payout: '60.00% CPS',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 22352 "MaxLife Insurance [CPS] IN"',
    geo: 'india-only',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: false,
    enabled: false,
    fitNote:
      'Highest CPS rate in the catalogue. Trust risk on a student surface is real — requires an explicit operator decision, not an agent judgement.',
  },
  {
    id: 'sbi-cc',
    name: 'SBI Credit Card',
    network: 'Admitad/MITGO',
    category: 'finance',
    payout: '1960.00INR CPA',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 32565 "SBI CC [CPA] IN"',
    geo: 'india-only',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: false,
    enabled: false,
    fitNote:
      'Largest relevant CPA on the list. Audience argument: SBI PO/Clerk aspirants (3,000+ impressions) already target SBI. Counter-argument: a credit-card offer on exam notes is a trust cost the site may not want to pay — operator decision, flagged not assumed.',
  },
  {
    id: 'fibe',
    name: 'Fibe',
    network: 'Admitad/MITGO',
    category: 'finance',
    payout: '345.00INR / 615.00INR CPA',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 50814 "Fibeapp [CPA, Android] IN"',
    geo: 'india-only',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: false,
    enabled: false,
    fitNote:
      'Income/employment-gated product; weak fit for an under-18 student audience, plausible on after-12th/first-job surfaces.',
  },
];

const BY_ID = new Map(AFFILIATE_OFFERS.map((o) => [o.id, o]));

export function getOffer(id: string): AffiliateOffer | undefined {
  return BY_ID.get(id);
}

/**
 * A placement renders only when the master switch is on, the offer is enabled,
 * and a real tracking URL exists. Any one of the three missing = no link.
 */
export function isRenderable(id: string): boolean {
  if (!AFFILIATES_LIVE) return false;
  const offer = BY_ID.get(id);
  return Boolean(offer && offer.enabled && offer.urlTemplate);
}
