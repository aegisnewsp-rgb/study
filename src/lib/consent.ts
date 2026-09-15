/**
 * StudyRoadmap consent policy — single source of truth for the CMP.
 *
 * Why this exists
 * ---------------
 * Before this module the site inferred consent from geography: gtag's Consent
 * Mode defaults denied `analytics_storage` in EEA/UK/CH, and AdRouter withheld
 * only the *popunder* there. That left two problems:
 *
 *   1. Compliance — GDPR/ePrivacy require prior consent for non-essential
 *      storage and personalised advertising. Inferring "no consent" and then
 *      still loading the MultiTag (in-page push / vignette / clickunder) in
 *      EEA/UK/CH is not a lawful basis; it is an unconsented load.
 *   2. Revenue — withholding the popunder from *every* EEA/UK/CH visitor also
 *      withheld it from the majority who would have consented. Under a real CMP
 *      those users unlock the full ad surface, so the fix is revenue-positive,
 *      not a pure cost.
 *
 * Contract with the ad layer
 * --------------------------
 * The CMP writes a decision; `AdRouter.astro` reads it. In a consent-restricted
 * region nothing ad-related loads until the decision is `granted`. In every
 * other region behaviour is unchanged (ads load immediately, as before), so
 * core markets (IN/PK/NG/KE…) see no new friction.
 *
 * Everything is observable through `window.__SR_CONSENT`, mirroring the
 * `window.__SR_AD` contract the 30-minute review job already asserts against.
 */
import { CONSENT_RESTRICTED_GEOS } from './ads';

/** localStorage key holding the persisted decision. */
export const CONSENT_STORAGE_KEY = 'sr:consent';

/**
 * Bump when the category set changes: a stored decision from an older version
 * is treated as absent so the visitor is asked again under the new terms.
 */
export const CONSENT_VERSION = 1;

export type ConsentLevel = 'unknown' | 'granted' | 'denied' | 'partial';

export interface ConsentRecord {
    v: number;
    /** `granted` = all categories, `denied` = none, `partial` = ads or analytics only. */
    level: ConsentLevel;
    ads: boolean;
    analytics: boolean;
    /** ISO timestamp of the decision. */
    ts: string;
    /** ISO-3166-1 alpha-2 country the decision was collected in, when known. */
    geo?: string;
    /** How the decision was reached. */
    via?: 'banner' | 'assumed-non-eu' | 'default';
}

/** True when this ISO country requires prior consent (EEA + UK + CH). */
export function consentRequired(geo?: string | null): boolean {
    const cc = (geo || '').trim().toUpperCase();
    return cc.length === 2 && CONSENT_RESTRICTED_GEOS.includes(cc);
}

/**
 * Categories shown in the banner. `necessary` is always on and is not offered
 * as a toggle (it covers the theme preference and the consent record itself).
 */
export const CONSENT_CATEGORIES = {
    necessary: { enabled: true, readOnly: true },
    ads: { enabled: false, readOnly: false },
    analytics: { enabled: false, readOnly: false },
} as const;

/**
 * Classify a stored decision. Returns `null` for anything missing, malformed or
 * written under an older consent version, so the caller re-asks rather than
 * silently honouring a stale grant.
 */
export function parseConsent(raw: string | null | undefined): ConsentRecord | null {
    if (!raw) return null;
    try {
        const d = JSON.parse(raw) as Partial<ConsentRecord>;
        if (!d || typeof d !== 'object') return null;
        if (d.v !== CONSENT_VERSION) return null;
        const ads = d.ads === true;
        const analytics = d.analytics === true;
        const level: ConsentLevel = ads && analytics ? 'granted' : !ads && !analytics ? 'denied' : 'partial';
        return {
            v: CONSENT_VERSION,
            level,
            ads,
            analytics,
            ts: typeof d.ts === 'string' ? d.ts : '',
            geo: typeof d.geo === 'string' ? d.geo : undefined,
            via: d.via,
        };
    } catch {
        return null;
    }
}

/** Build a record from raw category flags. */
export function makeConsent(
    ads: boolean,
    analytics: boolean,
    geo?: string,
    via: ConsentRecord['via'] = 'banner',
): ConsentRecord {
    return {
        v: CONSENT_VERSION,
        level: ads && analytics ? 'granted' : !ads && !analytics ? 'denied' : 'partial',
        ads,
        analytics,
        ts: new Date().toISOString(),
        geo,
        via,
    };
}

/** Human-readable one-liner for logs and QA assertions. */
export function describeConsent(c: ConsentRecord | null): string {
    if (!c) return 'none';
    return `${c.level}(ads=${c.ads},analytics=${c.analytics},v=${c.v})`;
}
