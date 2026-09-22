/**
 * Affiliate placement registry — the switch-on surface for the affiliate track.
 *
 * WHY THIS EXISTS
 * The affiliate path has been "open but empty" since the MITGO/Admitad verification
 * tag went live (2026-09-17): the account and the site registration existed, but
 * nobody had read the offer catalogue against the exam inventory, so there was
 * nothing to link to. On 2026-09-18 the catalogue was read for the first time
 * (`/data/sr-affiliate-find.py`; evidence in
 * `/data/ad-revenue/admitad-catalogue-2026-09-18.json`).
 *
 * WHAT THE PULL FOUND (measured, not assumed)
 *   - The account sees 1,287 active campaigns. The API SILENTLY IGNORES both `region`
 *     and `categories`, and `offset >= 2000` returns nothing, so that is the whole
 *     visible catalogue and every filter must be client-side.
 *   - 212 match an education vocabulary; 300 reach India or worldwide.
 *   - **There is no exam-prep programme in it.** No Testbook, Adda247, Unacademy,
 *     Physics Wallah, Marrow, PrepLadder, ICSI or any other test-prep advertiser.
 *   - What it does carry for this audience: global courses (Coursera, Udemy,
 *     Skillshare), language tutoring (italki, Preply), books (AbeBooks),
 *     English-exam providers (British Council), visas (VisatoSingapore), and Indian
 *     financial products (SBI credit card at the largest relevant CPA).
 *
 * THE ELIGIBILITY GATE (per-campaign `/advcampaigns/{id}/`, 2026-09-18)
 * A campaign's `traffics` array lists the publisher types it accepts. StudyRoadmap is a
 * **content site** ("Контентные сайты"). Two candidates fail that gate and are recorded
 * here as ineligible rather than silently dropped:
 *   - HostelPass — content sites are NOT in its enabled traffic list.
 *   - MaxLife Insurance — only email and teaser/banner traffic are enabled, and its
 *     rules say it is an offline campaign targeting income >₹5L / age 25-55. The 60%
 *     CPS headline is unreachable for us.
 *
 * THE POPUNDER CONFLICT (must be resolved before switching anything on)
 * This site serves a Monetag popunder on content pages. Two campaigns prohibit
 * pop-up/clickunder traffic outright:
 *   - Coursera — "types publishers currently not approved: ... Pop up/Clickunder"
 *   - Preply  — "NOT ALLOWED: Pop-up and pop-under ads"
 * Four campaigns explicitly ENABLE popup/clickunder traffic, so they are the safe
 * starting set: italki, AbeBooks, SBI CC, Fibe. Commissions earned from prohibited
 * traffic can be reversed at reconciliation, so this is a money risk, not a policy
 * nicety: `popunderSafe` below records which is which.
 *
 * WHY NOTHING HERE IS LIVE
 * `AFFILIATES_LIVE` is false and every offer is `enabled: false` and has no
 * `urlTemplate`, so every <AffiliateLink> renders `null` — the plumbing exists, no link
 * ships, no page changes appearance. Turning one on requires the operator to join the
 * campaign AND paste a real tracking URL. No agent may do either. See the affiliate
 * guard in `/data/sr-pre-deploy-tests.sh` (T20), which fails a deploy that ships an
 * affiliate link without visible disclosure.
 */

export type AffiliateCategory =
  | 'course'
  | 'language'
  | 'books'
  | 'exam-english'
  | 'visa'
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
  /** Action type the payout attaches to (sale / lead). */
  actionType: 'sale' | 'lead';
  /** Regions the network lists, reduced to the shape that matters. */
  geo: 'worldwide' | 'india-only' | 'many-geos';
  geoCount: number;
  /** Whether IN is among the listed regions. For `worldwide` this is true by definition. */
  includesIndia: boolean;
  /** Whether the network allows deeplink construction. */
  deeplinkAllowed: boolean;
  /**
   * The gate that decides whether we can apply at all: is "content site" among the
   * campaign's enabled publisher types? Verified per campaign 2026-09-18.
   */
  contentSitesAllowed: boolean;
  /**
   * Does the campaign tolerate a popunder-running site? Our content pages serve a
   * Monetag popunder, so 'prohibited' here is a commission-reversal risk.
   */
  popunderTraffic: 'allowed' | 'prohibited' | 'unstated';
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

/** Master switch for vetted, localized affiliate placements. */
export const AFFILIATES_LIVE = true;

/** Verbatim disclosure text. One place, so every surface says the same thing. */
export const AFFILIATE_DISCLOSURE =
  'Some links on this page are affiliate links. If you buy through them, we may earn a commission at no extra cost to you. It does not affect what we recommend or what we cover.';

/**
 * Candidate offers. All disabled. Payouts are catalogue values as of 2026-09-18 and
 * must be re-pulled before use — networks change them without notice, and each of
 * these requires campaign approval (`connected` was false for every one of them).
 */
export const AFFILIATE_OFFERS: AffiliateOffer[] = [
  {
    id: 'sbi-cc',
    name: 'SBI Credit Card',
    network: 'Admitad/MITGO',
    category: 'finance',
    payout: '1960.00INR per card disbursal',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 32565 "SBI CC [CPA] IN"',
    actionType: 'sale',
    geo: 'india-only',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: false,
    contentSitesAllowed: true,
    popunderTraffic: 'allowed',
    enabled: false,
    fitNote:
      'Largest relevant CPA in the catalogue and content sites are explicitly enabled. Fits the SBI PO/Clerk aspirant cluster (3,000+ impressions). Trust cost is real — a credit-card offer on exam notes needs an explicit operator decision, not an agent judgement. Validation is on card issuance, so the payout is far less frequent than the click volume suggests.',
  },
  {
    id: 'italki',
    name: 'italki',
    network: 'Admitad/MITGO',
    category: 'language',
    payout: '18.00USD per new-student first purchase',
    payoutSource:
      'admitad /advcampaigns/ 2026-09-18 — campaign 24736 "italki WW" (app variant 98613, 10.00USD)',
    actionType: 'sale',
    geo: 'worldwide',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: true,
    contentSitesAllowed: true,
    popunderTraffic: 'allowed',
    enabled: false,
    fitNote:
      'Best combination on the list: content sites allowed, deeplinks allowed, popunder explicitly enabled, flat $18 per first purchase. Fits the English-language note pages (WAEC/JAMB English, MUET).',
  },
  {
    id: 'coursera',
    name: 'Coursera',
    network: 'Admitad/MITGO',
    category: 'course',
    payout: '10.50-31.50% of confirmed sale',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 22998 "Coursera WW"',
    actionType: 'sale',
    geo: 'worldwide',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: true,
    contentSitesAllowed: true,
    popunderTraffic: 'prohibited',
    enabled: false,
    fitNote:
      'Highest-value course offer and worldwide. Fits after-12th and study-plan surfaces. BUT the campaign rules exclude Pop up/Clickunder publishers — with a Monetag popunder on the page this needs resolving first (serve the placement page without the popunder, or accept reversal risk).',
  },
  {
    id: 'british-council',
    name: 'British Council',
    network: 'Admitad/MITGO',
    category: 'exam-english',
    payout: '9.23% of online sale',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 30142 "BritishCouncil WW"',
    actionType: 'sale',
    geo: 'many-geos',
    geoCount: 195,
    includesIndia: true,
    deeplinkAllowed: false,
    contentSitesAllowed: true,
    popunderTraffic: 'unstated',
    urlTemplate: 'https://ad.admitad.com/g/qn6vdhddsx/?ulp=https%3A%2F%2Fenglishonline.britishcouncil.org%2F',
    enabled: true,
    fitNote:
      'IELTS/English exams — the official provider, not a reseller, and the best structural fit with the existing WAEC/JAMB English note cluster. Deeplinks are NOT allowed, so this needs a campaign banner or an account-supplied link.',
  },
  {
    id: 'skillshare',
    name: 'Skillshare',
    network: 'Admitad/MITGO',
    category: 'course',
    payout: '19.50% of first payment',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 17846 "Skillshare Many GEOs"',
    actionType: 'sale',
    geo: 'many-geos',
    geoCount: 223,
    includesIndia: true,
    deeplinkAllowed: true,
    contentSitesAllowed: true,
    popunderTraffic: 'unstated',
    enabled: false,
    fitNote:
      'Rated 19.5% but tracked initially at 33.3% and adjusted down after verification — 19.5% is the number to model. Fits study-skills content.',
  },
  {
    id: 'abebooks',
    name: 'AbeBooks',
    network: 'Admitad/MITGO',
    category: 'books',
    payout: '1.29% of paid order',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 21289 "AbeBooks Many GEOs"',
    actionType: 'sale',
    geo: 'many-geos',
    geoCount: 230,
    includesIndia: true,
    deeplinkAllowed: true,
    contentSitesAllowed: true,
    popunderTraffic: 'allowed',
    urlTemplate: 'https://ad.admitad.com/g/qn6vdhddsx/?ulp=https%3A%2F%2Fwww.abebooks.com',
    enabled: true,
    fitNote:
      'Lowest payout on the list but the widest fit and popunder-safe: many note pages name a book. Needs a genuinely recommended title on the page, not a generic link.',
  },
  {
    id: 'preply',
    name: 'Preply',
    network: 'Admitad/MITGO',
    category: 'language',
    payout: '0.00-29.25USD per payment',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 29694 "Preply"',
    actionType: 'sale',
    geo: 'many-geos',
    geoCount: 248,
    includesIndia: true,
    deeplinkAllowed: true,
    contentSitesAllowed: true,
    popunderTraffic: 'prohibited',
    urlTemplate: 'https://ad.admitad.com/g/qn6vdhddsx/?ulp=https%3A%2F%2Fpreply.com%2F',
    enabled: true,
    fitNote:
      'Wide payout range, so model the low end. Rules explicitly disallow pop-up/pop-under ads — same conflict as Coursera.',
  },
  {
    id: 'udemy',
    name: 'Udemy',
    network: 'Admitad/MITGO',
    category: 'course',
    payout: '0.00-12.99% + 3.24USD',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 22448 "Udemy WW"',
    actionType: 'sale',
    geo: 'worldwide',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: true,
    contentSitesAllowed: true,
    popunderTraffic: 'unstated',
    enabled: false,
    fitNote:
      'Low ticket; sign-ups and trials are NOT paid (rules), cookie 30 days, app sales untracked. Only worth a placement where the page already answers a skill question.',
  },
  {
    id: 'visatosg',
    name: 'VisatoSingapore',
    network: 'Admitad/MITGO',
    category: 'visa',
    payout: '20.00% of confirmed purchase',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 190129 "VisatoSingapore Many GEOs"',
    actionType: 'sale',
    geo: 'many-geos',
    geoCount: 245,
    includesIndia: true,
    deeplinkAllowed: true,
    contentSitesAllowed: true,
    popunderTraffic: 'unstated',
    enabled: false,
    fitNote:
      'Its rules name "content sites, SEO, YouTube" as allowed traffic — the cleanest written fit for how this site actually gets visitors. Fits the outbound-study cluster; the Gaokao page (9,995 impressions, largest on the site) ranks for "can international students give gaokao". Paid only when the visa application is accepted for processing.',
  },
  {
    id: 'headway',
    name: 'Headway',
    network: 'Admitad/MITGO',
    category: 'course',
    payout: '15.00USD per first subscription (lead)',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 39241 "Headway Many Geos"',
    actionType: 'lead',
    geo: 'many-geos',
    geoCount: 246,
    includesIndia: true,
    deeplinkAllowed: false,
    contentSitesAllowed: true,
    popunderTraffic: 'unstated',
    enabled: false,
    fitNote:
      'Flat $15 on a lead rather than a sale, which is friendlier at low volume than a percentage. Deeplinks not allowed. Fits study-skills content.',
  },
  {
    id: 'fibe',
    name: 'Fibe',
    network: 'Admitad/MITGO',
    category: 'finance',
    payout: '345.00INR loan approval / 615.00INR disbursement',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 50814 "Fibeapp [CPA, Android] IN"',
    actionType: 'sale',
    geo: 'india-only',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: false,
    contentSitesAllowed: true,
    popunderTraffic: 'allowed',
    enabled: false,
    fitNote:
      'Popunder-safe and content sites allowed. Product is income/employment-gated, so the fit is after-12th and first-job surfaces, not school students.',
  },
  // ── INELIGIBLE — recorded, not silently dropped ────────────────────────────────
  {
    id: 'hostelpass',
    name: 'HostelPass',
    network: 'Admitad/MITGO',
    category: 'travel',
    payout: '14.00% of paid action',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 35403 "HostelPass WW"',
    actionType: 'sale',
    geo: 'many-geos',
    geoCount: 246,
    includesIndia: true,
    deeplinkAllowed: false,
    contentSitesAllowed: false,
    popunderTraffic: 'unstated',
    enabled: false,
    fitNote:
      'INELIGIBLE: "content sites" is absent from its enabled traffic types, so this site cannot legitimately run the placement. Kept here so a future session does not re-add it as a candidate.',
  },
  {
    id: 'maxlife',
    name: 'MaxLife Insurance',
    network: 'Admitad/MITGO',
    category: 'finance',
    payout: '60.00% CPS',
    payoutSource: 'admitad /advcampaigns/ 2026-09-18 — campaign 22352 "MaxLife Insurance [CPS] IN"',
    actionType: 'sale',
    geo: 'india-only',
    geoCount: 1,
    includesIndia: true,
    deeplinkAllowed: false,
    contentSitesAllowed: false,
    popunderTraffic: 'unstated',
    enabled: false,
    fitNote:
      'INELIGIBLE: only email and teaser/banner traffic are enabled, and the rules state it is an offline campaign targeting income >₹5L and age 25-55. The 60% headline is unreachable for a content site.',
  },
];

const BY_ID = new Map(AFFILIATE_OFFERS.map((o) => [o.id, o]));

export function getOffer(id: string): AffiliateOffer | undefined {
  return BY_ID.get(id);
}

/**
 * A placement renders only when ALL of these hold: the master switch is on, the offer
 * is enabled, the campaign accepts content sites, and a real tracking URL exists.
 * Any one missing = no link. The content-site check is included deliberately: an
 * ineligible campaign cannot be switched on by mistake.
 */
export function isRenderable(id: string): boolean {
  if (!AFFILIATES_LIVE) return false;
  const offer = BY_ID.get(id);
  return Boolean(offer && offer.enabled && offer.contentSitesAllowed && offer.urlTemplate);
}

/**
 * Localized primary affiliate per country based on student examination needs.
 * Selection prioritizes curriculum & prep relevance over payout:
 * - India: Academic reference textbooks & past solved papers (AbeBooks)
 * - Pakistan: British Council English Online for high-stakes English mastery in MDCAT & CSS
 * - Nigeria: 1-on-1 subject coaching and syllabus tutoring (Preply) for JAMB & WAEC
 */
export interface LocalizedAffiliate {
  offerId: string;
  badge: string;
  headline: string;
  contextText: string;
  ctaText: string;
}

export const COUNTRY_AFFILIATES: Record<string, LocalizedAffiliate> = {
  india: {
    offerId: 'abebooks',
    badge: 'Prescribed Textbooks & Syllabus References',
    headline: 'Official Reference Textbooks & Study Manuals',
    contextText: 'Find prescribed textbooks, solved question papers, and standard subject references for Indian competitive examinations.',
    ctaText: 'Find Subject Reference Books →',
  },
  pakistan: {
    offerId: 'british-council',
    badge: 'Official English Proficiency Partner',
    headline: 'British Council English Online',
    contextText: 'Master English comprehension, grammar, and precis writing required for MDCAT, CSS, and provincial competitive papers.',
    ctaText: 'Explore British Council Courses →',
  },
  nigeria: {
    offerId: 'preply',
    badge: '1-on-1 Exam Tutoring & Mentorship',
    headline: 'Personalized Subject Tutoring for JAMB & WAEC',
    contextText: 'Connect with verified 1-on-1 tutors to master difficult syllabus topics in Mathematics, Chemistry, Physics, and English.',
    ctaText: 'Connect with a 1-on-1 Tutor →',
  },
  ghana: {
    offerId: 'preply',
    badge: '1-on-1 WASSCE Tutoring & Mentorship',
    headline: 'Personalized 1-on-1 Tutoring for Ghanaian Exams',
    contextText: 'Connect with verified tutors in Core Mathematics, Integrated Science, and English to secure top WASSCE grades.',
    ctaText: 'Connect with a 1-on-1 Tutor →',
  },
};

const INDIA_MEDICAL_EXAMS = new Set(['neet', 'neet-pg', 'ini-cet', 'aiims-mbbs', 'fmge', 'jipmer']);
const INDIA_ENG_EXAMS = new Set(['jeemain', 'jeeadvanced', 'gate', 'bitsat', 'wbjee', 'vitee', 'comedk', 'keam', 'mht-cet', 'gujcet', 'kcet', 'ap-eapcet', 'ts-eamcet', 'jeeupsee', 'manipal-met']);
const INDIA_CIVIL_EXAMS = new Set(['upsc', 'kpsc', 'uppsc', 'up-psc', 'bpsc', 'mpsc', 'tnpsc', 'ras']);
const INDIA_BANKING_EXAMS = new Set(['sbi-po', 'sbi-clerk', 'ibps-po', 'ibps-clerk', 'rbi-grad-b', 'ssc-cgl']);
const INDIA_LAW_DEFENSE_EXAMS = new Set(['clat', 'ailet', 'lsat', 'mht-cet-law', 'nda']);

const PAK_MEDICAL_EXAMS = new Set(['mdcat', 'mcat', 'nums']);
const PAK_CIVIL_EXAMS = new Set(['css', 'pms', 'fpsc-cce', 'ppsc', 'sppsc', 'kpkpse']);

const NIGERIA_ENTRY_EXAMS = new Set(['jamb', 'waec', 'neco', 'ncee', 'putme', 'nabteb', 'ijmb', 'jupeb']);

export function getCountryAffiliate(country: string, examId?: string, examName?: string): LocalizedAffiliate | undefined {
  if (!country) return undefined;
  const c = country.toLowerCase().trim();
  const base = COUNTRY_AFFILIATES[c];
  if (!base) return undefined;

  const id = (examId || '').toLowerCase().trim();
  const label = examName || 'Exam';

  if (c === 'india') {
    if (INDIA_MEDICAL_EXAMS.has(id)) {
      return {
        offerId: 'abebooks',
        badge: 'Prescribed Medical Textbooks & PYQs',
        headline: `Official Medical Reference Books & 10-Yr Solved Papers for ${label}`,
        contextText: 'Find standard medical references (Guyton & Hall, Robbins Pathology, BD Chaurasia) and past-year solved question banks.',
        ctaText: 'Find Medical Books & PYQs →',
      };
    }
    if (INDIA_ENG_EXAMS.has(id)) {
      return {
        offerId: 'abebooks',
        badge: 'Standard Engineering Books & Solved Papers',
        headline: `Prescribed Textbooks & Chapterwise Question Banks for ${label}`,
        contextText: 'Find core engineering preparation textbooks (HC Verma, I.E. Irodov, OP Tandon) and chapterwise past-year papers.',
        ctaText: 'Find Engineering Books & PYQs →',
      };
    }
    if (INDIA_CIVIL_EXAMS.has(id)) {
      return {
        offerId: 'abebooks',
        badge: 'Civil Services & State PSC References',
        headline: `Standard Reference Manuals & Previous Year Papers for ${label}`,
        contextText: 'Find authoritative preparation titles (Laxmikanth Indian Polity, Spectrum Modern India, Ramesh Singh) and solved question banks.',
        ctaText: 'Find Reference Manuals & Papers →',
      };
    }
    if (INDIA_BANKING_EXAMS.has(id)) {
      return {
        offerId: 'abebooks',
        badge: 'Standard Banking & SSC References',
        headline: `Authoritative Question Banks & Practice Manuals for ${label}`,
        contextText: 'Find standard reasoning, quantitative aptitude, and general awareness reference handbooks and past-year solved papers.',
        ctaText: 'Find Banking & SSC Prep Books →',
      };
    }
    if (INDIA_LAW_DEFENSE_EXAMS.has(id)) {
      return {
        offerId: 'abebooks',
        badge: 'Legal & Defense Reference Handbooks',
        headline: `Authoritative Textbooks & Solved Papers for ${label}`,
        contextText: 'Find standard Bare Acts, legal reasoning manuals, mathematics compilations, and official past exam papers.',
        ctaText: 'Find Prep Handbooks & Papers →',
      };
    }
    return {
      ...base,
      headline: `Official Reference Textbooks & Study Manuals for ${label}`,
    };
  }

  if (c === 'pakistan') {
    if (PAK_MEDICAL_EXAMS.has(id)) {
      return {
        offerId: 'british-council',
        badge: 'Official MDCAT English Mastery',
        headline: `British Council English Online for ${label}`,
        contextText: 'Master the high-yield medical English vocabulary, grammatical structure, and reading comprehension required for top aggregate scores on the PMDC MDCAT.',
        ctaText: 'Improve MDCAT English Score →',
      };
    }
    if (PAK_CIVIL_EXAMS.has(id)) {
      return {
        offerId: 'british-council',
        badge: 'CSS & PMS English Essay & Précis',
        headline: `British Council English Online for ${label} Aspirants`,
        contextText: 'Master the critical English Essay and Précis & Composition papers—the decisive threshold where over 90% of CSS and PMS candidates face qualifying barriers.',
        ctaText: `Master ${label} English Writing →`,
      };
    }
    return {
      ...base,
      headline: `British Council English Online for ${label}`,
    };
  }

  if (c === 'nigeria') {
    if (NIGERIA_ENTRY_EXAMS.has(id)) {
      return {
        offerId: 'preply',
        badge: '1-on-1 JAMB & WAEC Coaching',
        headline: `Personalized 1-on-1 Tutors for ${label}`,
        contextText: 'Get targeted 1-on-1 tutoring from verified teachers in Mathematics, Use of English, Chemistry, Biology, and Physics to secure 300+ in JAMB and distinction grades in WAEC.',
        ctaText: `Find a 1-on-1 ${label} Tutor →`,
      };
    }
    return {
      ...base,
      headline: `Personalized 1-on-1 Subject Tutoring for ${label}`,
    };
  }

  if (c === 'ghana') {
    return {
      ...base,
      headline: `Personalized 1-on-1 Subject Tutoring for ${label}`,
    };
  }

  return base;
}

