/* Monetag Service Worker — MultiTag Push Notifications, zone 11798846.
 *
 * Why this file exists: the MultiTag container tag (quge5.com/88/tag.min.js)
 * loads the push sub-zone but does NOT register a service worker — verified by
 * request capture on a real browser: without a registered worker the zone only
 * produced "prerequests", and with one registered the tag immediately switched
 * to its worker-backed path (`…/zone?…zone_id=11798846&sw=3.1.647`).
 *
 * Content comes verbatim from the zone's own "Get tag" service worker
 * (`monetag_get_zone_sw`, zoneId 11798846). It must stay byte-faithful: the
 * `domain` + `zoneId` in `self.options` are what the imported bundle uses to
 * attribute the subscription to this zone's reporting.
 *
 * Served from /sw.js so its scope is the whole origin. AdRouter registers it
 * only for eligible humans (never crawlers, never WebDriver, never after an
 * opt-out, and never in the EEA/UK/CH before consent) — see
 * src/components/AdRouter.astro.
 */
self.options = {
    "domain": "3nbf4.com",
    "zoneId": 11798846
}
self.lary = ""
importScripts('https://3nbf4.com/act/files/service-worker.min.js?r=sw')
