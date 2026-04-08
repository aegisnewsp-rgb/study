# Deploy Guide — VPS Only (No GitHub Actions)

StudyRoadmap deploys directly on the VPS. No CI/CD pipeline needed.

---

## Quick Deploy

SSH into your VPS and run:

```bash
cd /opt/studyroadmap-astro
bash deploy.sh
```

Or trigger remotely (if the deploy server is running):

```bash
curl -X POST "http://187.127.134.151:9000/deploy?token=YOUR_TOKEN"
```

---

## One-Time VPS Setup

Run these commands once on your VPS:

```bash
# 1. Install Docker + docker-compose (if not already installed)
curl -fsSL https://get.docker.com | sh
sudo systemctl enable docker

# 2. Create the app directory
sudo mkdir -p /opt/studyroadmap-astro
sudo chown $USER:$USER /opt/studyroadmap-astro

# 3. Clone the repo (one-time)
git clone https://github.com/aegisnewsp-rgb/study.git /opt/studyroadmap-astro
cd /opt/studyroadmap-astro
git checkout main

# 4. Set your deploy token (change 'your-secret-token' to something secure)
export DEPLOY_TOKEN="your-secret-token"

# 5. Create the deploy network for Traefik
docker network create traefik-proxy 2>/dev/null || true

# 6. First build
docker compose build
docker compose up -d

# 7. Start the deploy server (as systemd service — see below)
sudo cp /opt/studyroadmap-astro/scripts/studyroadmap-deploy.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable studyroadmap-deploy
sudo systemctl start studyroadmap-deploy
sudo systemctl status studyroadmap-deploy
```

---

## Deploy Server (systemd service)

The deploy server is a lightweight Node.js process listening on port **9000**.
It receives deploy commands and runs `deploy.sh` in a child process.

**Important:** It runs as `Type=simple` (always-on), NOT `Type=oneshot`. This means:
- ✅ It stays alive and responds to pings
- ✅ It won't crash on the first deploy
- ✅ `systemctl restart` works reliably

### Commands

```bash
# Check status
sudo systemctl status studyroadmap-deploy

# View live logs
sudo journalctl -u studyroadmap-deploy -f

# Restart (e.g., after changing deploy-server.js)
sudo systemctl restart studyroadmap-deploy

# Stop / start
sudo systemctl stop studyroadmap-deploy
sudo systemctl start studyroadmap-deploy
```

### Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `http://localhost:9000/status` | Health check — is the server alive? |
| POST | `http://localhost:9000/deploy?token=X` | Trigger a deploy |
| GET | `http://localhost:9000/log` | View last 80 lines of deploy log |

### Example

```bash
# Trigger deploy from anywhere
curl -X POST "http://187.127.134.151:9000/deploy?token=your-secret-token"

# Check deploy status
curl "http://187.127.134.151:9000/status"

# View recent deploy log
curl "http://187.127.134.151:9000/log"
```

---

## Changing the Token

Edit the `DEPLOY_TOKEN` environment variable in two places:

1. `/etc/systemd/system/studyroadmap-deploy.service` → `Environment=DEPLOY_TOKEN=your-new-token`
2. Your shell profile (`~/.bashrc`) or `/etc/environment` → `export DEPLOY_TOKEN=your-new-token`

Then restart:
```bash
sudo systemctl restart studyroadmap-deploy
```

---

## Docker Compose

The site runs inside a Docker container with nginx, fronted by Traefik for SSL.

```bash
docker compose ps          # see container status
docker compose logs -f    # watch container logs
docker compose restart    # restart just the site (not the deploy server)
docker compose down        # stop the site
docker compose up -d       # start the site
docker compose build       # rebuild image (after code changes without deploy)
```

---

## Nginx / Traefik Notes

- Traefik handles SSL (Let's Encrypt) and routes `studyroadmap.in` → container
- The container exposes port 80 only
- Traefik must be running on the host: `docker compose up -d` from the Traefik config directory
- If Traefik is not set up, the site still works — just no SSL (HTTP only)

---

## Troubleshooting

### "Deploy already in progress"
Wait for the current deploy to finish (~2-5 min for a full build). Check progress:
```bash
curl http://localhost:9000/log
```

### Deploy server won't start
```bash
# Check if port 9000 is already in use
sudo lsof -i :9000

# Run manually to see errors
node /opt/studyroadmap-astro/scripts/deploy-server.js
```

### Docker container won't start
```bash
docker compose logs studyroadmap
docker compose up -d --force-recreate
```

### Site returns 502
Traefik is probably not running or not connected to the `traefik-proxy` network:
```bash
docker network ls
docker network connect traefik-proxy studyroadmap
docker compose restart
```

---

## Cron: Auto-Deploy on Git Push (optional)

To auto-deploy when the VPS git repo receives a push:

```bash
# Add git post-receive hook
cat > /opt/studyroadmap-astro/.git/hooks/post-receive << 'EOF'
#!/bin/bash
DEPLOY_TOKEN="your-secret-token"
while read oldrev newrev branch; do
  [ "$branch" = "refs/heads/main" ] || exit 0
  curl -s -X POST "http://localhost:9000/deploy?token=$DEPLOY_TOKEN" &
done
EOF
chmod +x /opt/studyroadmap-astro/.git/hooks/post-receive
```

Now `git push origin main` from anywhere will auto-deploy.
