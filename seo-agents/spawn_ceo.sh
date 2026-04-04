#!/bin/bash
# StudyRoadmap SEO Multi-Agent System — CEO Spawner
# Run this at the start of each cycle (called by main session)
# Then CEO spawns 4 PM agents, which spawn workers

set -e

WORKSPACE="/home/node/workspace/studyroadmap-astro"
TASKBOARD="$WORKSPACE/seo-agents/tasks/TASK_BOARD.md"
TIMESTAMP=$(date -u +%Y-%m-%dT%H:%M:%SZ)

echo "[SPAWN] CEO spawning at $TIMESTAMP"

# Update task board — mark CEO as ACTIVE
cat > "$TASKBOARD" << EOF
# StudyRoadmap SEO Task Board
## Active Cycle: $TIMESTAMP

---
## QUEUE — All pending tasks

---
## CEO STATUS
- Last CEO spawn: $TIMESTAMP
- CEO PID: $$
- Next expected action: Reading backlog, assigning tasks

---
## PM DOMAINS
| Domain | PM File | Status | Current Task | Last Activity |
|--------|---------|--------|-------------|---------------|
| Technical SEO | PM-TECHNICAL.md | IDLE | none | never |
| Content Quality | PM-CONTENT.md | IDLE | none | never |
| Structured Data | PM-STRUCTURED.md | IDLE | none | never |
| Internal Linking | PM-LINKING.md | IDLE | none | never |

---
## COMPLETED THIS CYCLE

---
## ARCHIVE (last 10 completed)

EOF

echo "[SPAWN] Task board initialized. CEO will self-spawn PMs."

# Note: Actual CEO spawning is done by the main agent via sessions_spawn
# This script just updates the task board before the spawn
