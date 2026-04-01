# Cloudflare Setup for StudyRoadmap

## Step 1 — Nameservers (at your domain registrar: studyroadmap.in)

Change these NS records to point to Cloudflare:
```
ns1.cloudflare.com
ns2.cloudflare.com
```

This takes 24-48h to propagate.

---

## Step 2 — DNS in Cloudflare Dashboard

Go to: https://dash.cloudflare.com → Add site → studyroadmap.in

Add these DNS records:
```
Type    Name    IPv4 address      Proxy status
A       @       187.127.134.151   Proxied (orange)
A       www     187.127.134.151   Proxied (orange)
```

---

## Step 3 — SSL/TLS Mode

Dashboard → SSL/TLS → Overview → set to **"Full"**

---

## Step 4 — Performance Rules (Page Rules alternative)

Go to → Rules → Optimization

### Caching:
- **Caching Level**: Standard (or Aggressive)
- **Browser Cache TTL**: 31536000 (1 year)
- **Always Online**: ON (serves cached pages if origin is down — critical!)

### Minification:
- Auto Minify: ✅ HTML ✅ CSS ✅ JavaScript

### Polish & Mirage:
- **Polish**: Auto (lossless image compression)
- **Mirage**: ON (responsive images for mobile)

---

## Step 5 — Page Rules (for maximum caching)

Go to → Rules → Page Rules → Create Page Rule

Pattern: `studyroadmap.in/*`
```
✅ Cache Everything
✅ Edge Cache TTL: 1 month
✅ Browser Cache TTL: 1 year
```

Pattern: `studyroadmap.in/news.json`
```
(Broken Object Chains disabled for this specific file — set to "No query string" or don't cache news.json)
Cache Level: Standard
```

---

## Step 6 — Security Settings (keep lightweight)

Go to → Security → Settings
- **Security Level**: Medium
- **Bot Fight Mode**: ON
- **I'm Under Attack Mode**: OFF

---

## Step 7 — Speed Settings

Go to → Speed → Settings
- **Rocket Loader**: ON (async JS loading — helps React hydration)
- **Brotli**: ON (better than gzip)
- **HTTP/2 Push**: ON

---

## Expected Impact

| Metric | Before | After (est.) |
|--------|--------|---------------|
| TTFB (India) | ~200-400ms | ~20-50ms |
| LCP (India) | ~3-4s | ~1-1.5s |
| Cache hit | 0% | ~90%+ |
| JS bundle parse | blocking | async (Rocket Loader) |

---

## Notes

- Once Cloudflare proxies traffic, VPS IP is hidden from end users
- "Always Online" feature means even if your VPS goes down, Cloudflare serves cached pages
- This also fixes the 404 issue when VPS is unavailable — Cloudflare will serve cached content
- robots.txt in Cloudflare dashboard should point to `/sitemap-index.xml`
