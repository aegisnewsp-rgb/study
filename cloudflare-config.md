# Cloudflare Setup for StudyRoadmap

Domain: **studyroadmap.in**  
Origin VPS: **187.127.134.151**  
Cloudflare NS: **rosa.ns.cloudflare.com**, **sevki.ns.cloudflare.com**

## Goal

Serve static HTML/CSS/JS/JSON from Cloudflare’s edge so the VPS only handles
cache misses, purges after deploy, and non-CF traffic is blocked by UFW.

| Layer | What | TTL |
|-------|------|-----|
| Browser (HTML) | `max-age=300` | 5 minutes |
| Cloudflare edge (HTML) | `s-maxage=2592000` + Cache Rule | 30 days |
| Browser + edge (`/_astro/*`) | `max-age=31536000, immutable` | 1 year |
| Edge (`/news.json`) | override 300s | 5 minutes |

## Automated setup (preferred)

```bash
# 1. Create API token (dash.cloudflare.com → My Profile → API Tokens)
#    Permissions: Zone DNS Edit, Zone Settings Edit, Cache Purge,
#                 Cache Rules Edit (or Zone Edit), Zone Read
#    Zone: studyroadmap.in

# 2. Store token (pick one)
export CF_API_TOKEN='...'
# OR edit /etc/sr-pipeline.env and set:
#   CF_API_TOKEN=...

# 3. Apply DNS + SSL + Cache Everything + performance settings
bash /data/sr-cloudflare-setup.sh

# 4. Verify HTML is HIT (not DYNAMIC)
bash /data/sr-cloudflare-gsc-audit.sh --verbose
for i in 1 2 3; do curl -sI https://studyroadmap.in/ | grep -i cf-cache; sleep 1; done

# 5. Purge after deploys (also hooked into /data/sr-deploy.sh)
bash /data/sr-cloudflare-purge.sh
```

## Manual dashboard (if no API token)

### 1. Nameservers (Hostinger)

- DNSSEC **OFF** before NS change  
- NS only: `rosa.ns.cloudflare.com`, `sevki.ns.cloudflare.com`

### 2. DNS

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | @ | 187.127.134.151 | Proxied (orange) |
| A | www | 187.127.134.151 | Proxied (orange) |

### 3. SSL/TLS

- Overview → **Full (strict)** if Traefik LE cert is valid, else **Full**
- Always Use HTTPS: **On**
- Min TLS: **1.2**, TLS 1.3: **On**

### 4. Caching → Cache Rules (not Page Rules)

Create rule **Cache Everything — static site**:

- If: hostname is `studyroadmap.in` OR `www.studyroadmap.in`
- Then: **Eligible for cache** = Yes  
  Edge TTL = Respect origin (fallback 1 month)  
  Browser TTL = Respect origin  
  Origin Cache-Control = On

Optional second rule (higher priority) for `/news.json`:

- Edge TTL = 5 minutes override

### 5. Speed

| Setting | Value | Notes |
|---------|-------|-------|
| Brotli | On | |
| HTTP/2 | On | |
| HTTP/3 (QUIC) | On | |
| Early Hints | On | |
| Rocket Loader | **Off** | Breaks modules / AdSense |
| Always Online | On | Serves last cache if origin down |

### 6. Security

- Security Level: Medium  
- Bot Fight Mode: On (free)  
- Browser Integrity Check: On  
- Email Obfuscation: Off (keeps mailto: working)

### 7. Origin firewall (VPS)

```bash
bash /data/sr-cloudflare-origin-firewall.sh --status
sudo bash /data/sr-cloudflare-origin-firewall.sh --apply
```

Only Cloudflare IP ranges may hit ports 80/443 on the VPS.

## Origin nginx (already in repo)

`/srv/studyroadmap/nginx.conf`:

- Single `Cache-Control` header (no dual `expires` + `add_header`)
- HTML: `public, max-age=300, s-maxage=2592000`
- `/_astro/`: immutable 1y
- `/news.json`: short edge TTL
- `open_file_cache` for cheap static I/O
- `real_ip` from `CF-Connecting-IP` + CF IP ranges

Hot-reload without full rebuild:

```bash
docker cp /srv/studyroadmap/nginx.conf studyroadmap:/etc/nginx/conf.d/default.conf
docker exec studyroadmap nginx -t && docker exec studyroadmap nginx -s reload
```

## Expected impact

| Metric | Before (DYNAMIC HTML) | After (edge HIT) |
|--------|----------------------|------------------|
| HTML origin hits | Every request | Misses only (~1–5%) |
| TTFB (India) | 200–400ms+ | ~20–80ms from CF |
| VPS CPU / bandwidth | High crawler load | Mostly CF |
| Origin down | Site down | Always Online serves cache |

## Verify

```bash
bash /data/sr-cloudflare-gsc-audit.sh --verbose
curl -sI https://studyroadmap.in/ | grep -iE 'cf-cache|cache-control|server'
# Expect: server: cloudflare, cf-cache-status: HIT, one Cache-Control with s-maxage
```

## Scripts

| Script | Role |
|--------|------|
| `/data/sr-cloudflare-setup.sh` | DNS, SSL, speed, Cache Rules |
| `/data/sr-cloudflare-purge.sh` | Purge all (or URLs) after deploy |
| `/data/sr-cloudflare-gsc-audit.sh` | DNS + proxy + cache HIT + GSC |
| `/data/sr-cloudflare-origin-firewall.sh` | UFW allow only CF → 80/443 |
| `/data/sr-deploy.sh` | Deploy + purge on success |

## Common failures

| Symptom | Cause | Fix |
|---------|-------|-----|
| `cf-cache-status: DYNAMIC` on HTML | No Cache Everything rule | `sr-cloudflare-setup.sh` or dashboard Cache Rule |
| Two `Cache-Control` headers | nginx `expires` + `add_header` | Fixed in `nginx.conf` — use only `add_header` |
| Stale HTML after deploy | No purge | `sr-cloudflare-purge.sh` + set `CF_API_TOKEN` |
| `server: nginx` | Proxy off / wrong NS | Proxied A records + rosa/sevki NS |
| Origin still hammered | UFW open | `sr-cloudflare-origin-firewall.sh --apply` |
