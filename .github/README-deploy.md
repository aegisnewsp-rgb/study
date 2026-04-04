# GitHub Actions Auto-Deploy Setup

This workflow bypasses the broken deploy service on the VPS permanently.

## What It Does
On every push to `main` or `studyroadmap-astro` branch:
1. Checks out the code
2. Runs `npm ci && npm run build`
3. SSHs into the VPS and pulls the latest code
4. Rebuilds and deploys

## Secrets Needed (add in GitHub repo Settings → Secrets)

| Secret | Value |
|--------|-------|
| `VPS_HOST` | `187.127.134.151` |
| `VPS_USER` | `root` (or a sudo user) |
| `VPS_SSH_KEY` | Private SSH key (generate a new deploy key) |
| `VPS_SSH_PORT` | `22` (default) |

## Setup Steps

### 1. Generate SSH Deploy Key on VPS
```bash
# On the VPS:
ssh-keygen -t ed25519 -f /root/.ssh/github_deploy -N ""
cat /root/.ssh/github_deploy.pub >> /root/.ssh/authorized_keys
```

### 2. Add Private Key to GitHub Secrets
Copy the private key: `cat /root/.ssh/github_deploy`
Add to GitHub repo → Settings → Secrets → Actions → New secret:
- Name: `VPS_SSH_KEY`
- Value: (paste entire private key)

### 3. Verify SSH Works
```bash
ssh -i /root/.ssh/github_deploy -p 22 root@187.127.134.151 "echo 'SSH OK'"
```

### 4. Test the Workflow
Push any small change to `studyroadmap-astro` branch and watch:
GitHub repo → Actions tab → "Build & Deploy to StudyRoadmap VPS"

## VPS-side Requirements
The SSH user needs:
- Read access to `/opt/studyroadmap-astro` (or wherever the repo is cloned)
- Ability to run `npm ci && npm run build`
- `sudo systemctl restart studyroadmap-backend` (optional)

## Troubleshooting
- "Permission denied (publickey)": Check the SSH key is correct in GitHub Secrets
- "Build failed": Check Node.js version on VPS (`node --version` should be 22)
- "Deploy succeeded but site not updated": Check Nginx is serving from the right `dist/` folder
