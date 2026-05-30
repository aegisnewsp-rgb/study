/**
 * Canonical site origin (scheme + host, no trailing slash).
 *
 * Import via `@data/site` instead of hardcoding the literal so the origin lives
 * in exactly one place. NB: inline JSON-LD `set:html` string blocks in a few
 * page files still embed the literal because templating inside a stringified
 * schema object is error-prone — those are intentionally left as-is.
 */
export const SITE_URL = 'https://studyroadmap.in';
