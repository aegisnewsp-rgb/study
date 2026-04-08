#!/usr/bin/env node
/**
 * StudyRoadmap Deploy Server
 * Listens on port 9000, runs deploy.sh when triggered.
 * Meant to run as a systemd service (Type=simple), not Type=oneshot.
 *
 * Endpoints:
 *   GET  /status          — health check (returns 200 if server is alive)
 *   GET  /deploy          — same as POST /deploy
 *   POST /deploy?token=X  — trigger deploy (requires correct token)
 *   GET  /log             — tail the last 50 lines of deploy log
 *
 * Auth: token passed as ?token= query param or DEPLOY_TOKEN env var.
 */

const http = require('http');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const PORT = process.env.DEPLOY_PORT || 9000;
const TOKEN = process.env.DEPLOY_TOKEN || 'change-me-in-deploy.sh';
const APP_DIR = process.env.APP_DIR || '/opt/studyroadmap-astro';
const LOG_FILE = '/var/log/studyroadmap-deploy.log';
const PID_FILE = '/var/run/studyroadmap-deploy.pid';

// ── Logging ───────────────────────────────────────────────────────────────────
function log(msg) {
    const ts = new Date().toISOString();
    const line = `[${ts}] ${msg}\n`;
    process.stdout.write(line);
    try {
        fs.appendFileSync(LOG_FILE, line);
    } catch (_) {}
}

// ── Auth ─────────────────────────────────────────────────────────────────────
function checkToken(url) {
    const u = new URL(url, `http://localhost:${PORT}`);
    return u.searchParams.get('token') === TOKEN;
}

// ── Run deploy.sh ─────────────────────────────────────────────────────────────
let deployRunning = false;

function runDeploy(res) {
    if (deployRunning) {
        res.writeHead(409, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Deploy already in progress' }));
        return;
    }

    deployRunning = true;
    const deployScript = path.join(APP_DIR, 'deploy.sh');
    const startTime = Date.now();

    log(`Starting deploy (pid ${process.pid})...`);

    const child = spawn('bash', [deployScript], {
        cwd: APP_DIR,
        env: { ...process.env, DEPLOY_TOKEN: TOKEN },
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
        const txt = data.toString();
        stdout += txt;
        process.stdout.write(txt);
    });

    child.stderr.on('data', (data) => {
        const txt = data.toString();
        stderr += txt;
        process.stderr.write(txt);
    });

    child.on('close', (code) => {
        const duration = ((Date.now() - startTime) / 1000).toFixed(1);
        deployRunning = false;

        if (code === 0) {
            log(`Deploy finished successfully in ${duration}s`);
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'X-Deploy-Duration': duration,
            });
            res.end(JSON.stringify({ ok: true, duration: `${duration}s`, output: stdout }));
        } else {
            log(`Deploy FAILED (exit ${code}) after ${duration}s`);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: false, exitCode: code, duration: `${duration}s`, error: stderr || stdout }));
        }
    });

    child.on('error', (err) => {
        deployRunning = false;
        log(`Deploy spawn error: ${err.message}`);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
    });
}

// ── Tail log ─────────────────────────────────────────────────────────────────
function tailLog(res, lines = 50) {
    try {
        if (!fs.existsSync(LOG_FILE)) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('No log file yet.\n');
            return;
        }
        const content = fs.readFileSync(LOG_FILE, 'utf8');
        const allLines = content.split('\n').filter(Boolean).slice(-lines);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(allLines.join('\n') + '\n');
    } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
    }
}

// ── HTTP Server ───────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
    const url = req.url.split('?')[0];

    // CORS preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        });
        res.end();
        return;
    }

    // GET /status — health check
    if (req.method === 'GET' && (url === '/status' || url === '/')) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            service: 'studyroadmap-deploy',
            status: 'alive',
            deployRunning,
            pid: process.pid,
            uptime: `${(process.uptime()).toFixed(0)}s`,
            tokenRequired: true,
        }));
        return;
    }

    // GET /log — view deploy log
    if (req.method === 'GET' && url === '/log') {
        tailLog(res, 80);
        return;
    }

    // POST /deploy or GET /deploy
    if (req.method === 'POST' || req.method === 'GET') {
        if (url === '/deploy' || url.startsWith('/deploy?')) {
            if (!checkToken(req.url)) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Unauthorized — missing or wrong token' }));
                return;
            }
            runDeploy(res);
            return;
        }
    }

    // 404
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found', hint: 'Try GET /status or POST /deploy?token=...' }));
});

// ── Start ─────────────────────────────────────────────────────────────────────
server.listen(PORT, '0.0.0.0', () => {
    log(`StudyRoadmap Deploy Server ready on port ${PORT}`);
    log(`Auth token: ${TOKEN} (change via DEPLOY_TOKEN env var)`);
    log(`Deploy script: ${APP_DIR}/deploy.sh`);
});

// Save PID
try {
    fs.writeFileSync(PID_FILE, process.pid.toString());
} catch (_) {}

process.on('SIGTERM', () => {
    log('SIGTERM received, shutting down...');
    server.close(() => process.exit(0));
});
