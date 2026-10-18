#!/usr/bin/env bash
set -euo pipefail

# Official-source host liveness guard for StudyRoadmap.
#
# WHY THIS EXISTS
#   On 2026-10-18 a DNS sweep of every officialSource host found three pages
#   pointing at hosts with no DNS record at all:
#     cmat.edu.np      (Nepal CMAT)  - repeated in prepOverview + 5 commonMistakes
#     slmedcouncil.lk  (SLMC)        - indexed page
#     cem-inc.org      (CEM, PH)     - .ph dropped, indexed page
#   A dead "official source" is worse than no source: it is a trust signal we
#   publish that a reader cannot follow up on. The defect is cheap to detect
#   (one DNS lookup per host) and was found only by luck.
#
# DESIGN CONSTRAINT THAT SHAPED EVERYTHING BELOW
#   This host runs Docker's embedded resolver (nameserver 127.0.0.11). While
#   building this script that resolver went down mid-session and stayed down
#   long enough to fail `getent hosts example.com`. A naive guard would have
#   read that as "all 149 official sources are dead" and hard-failed every
#   commit and every human who ran it. So:
#     - every run CONTROL-PROBEs known-good hosts BEFORE trusting any failure;
#     - a control failure is reported as INCOMPLETE, never as FAIL;
#     - INCOMPLETE exits 0 by default (it is not evidence of a defect) and 2
#       under SR_HOSTS_STRICT=1 so CI can still insist on a resolvable run.
#   "Never report a defect you did not actually measure."
#
# EXIT CODES
#   0  every host resolved, OR the run was INCOMPLETE and SR_HOSTS_STRICT!=1
#   1  one or more hosts have no DNS record and are not baselined  -> BLOCKING
#   2  the run was INCOMPLETE (resolver unusable) and SR_HOSTS_STRICT=1
#
# USAGE
#   ./scripts/check-source-hosts.sh                 # scan src/data officialSource
#   SR_HOSTS_STRICT=1 ./scripts/check-source-hosts.sh
#   SR_HOSTS_INPUT=/tmp/hosts ./scripts/check-source-hosts.sh   # explicit list
#   SR_HOSTS_ALLOWLIST=/path/to/list ./scripts/check-source-hosts.sh
#
# BASELINING A HOST THAT GENUINELY HAS NO A RECORD
#   Add the bare hostname to scripts/source-hosts-allowlist.txt, one per line,
#   with a comment saying WHY. An empty allowlist ships inert; the file is read
#   by default and does not require an env var.

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [ -z "$REPO_ROOT" ]; then
  echo "check-source-hosts: not inside a git repo; run from the repo root." >&2
  exit 1
fi
cd "$REPO_ROOT"

# mktemp, not a fixed /tmp path: the agent workers run as uid 1000 and a
# root-created /tmp file made this class of gate un-runnable for every claw
# pulse until 2026-09-10. Same lesson as check-scope.sh.
hosts="$(mktemp -t sr_hosts.XXXXXX)"
mapf="$(mktemp -t sr_hostmap.XXXXXX)"
dead="$(mktemp -t sr_dead.XXXXXX)"
allow="$(mktemp -t sr_allow.XXXXXX)"
trap 'rm -f "$hosts" "$mapf" "$dead" "$allow"' EXIT

# ---------------------------------------------------------------- host list
if [ -n "${SR_HOSTS_INPUT:-}" ]; then
  cp "$SR_HOSTS_INPUT" "$hosts"
  source_desc="$SR_HOSTS_INPUT"
else
  # The dead-source defect class lives in the `officialSource` field. Scoped to
  # that field on purpose: a general "every URL in the repo" check would fail on
  # intentionally-relative and example.com placeholders and train people to
  # ignore it.
  grep -rhoE "officialSource:[[:space:]]*'[^']+'" src/data/ 2>/dev/null \
    | sed -E "s/.*'([^']*)'.*/\1/" \
    | sed -E 's#^[a-zA-Z]+://##; s#/.*$##' \
    | sed -E 's/:[0-9]+$//' \
    | sed '/^[[:space:]]*$/d' \
    | sort -u > "$hosts" || true
  source_desc="src/data/** officialSource"
fi

total="$(wc -l < "$hosts" | tr -d ' ')"

if [ "$total" -eq 0 ]; then
  echo "INCOMPLETE: 0 hosts extracted from $source_desc - nothing was scanned."
  echo "  This is NOT a pass. A guard that reports success having looked at"
  echo "  nothing is the failure mode this script exists to avoid."
  [ "${SR_HOSTS_STRICT:-0}" = "1" ] && exit 2
  exit 0
fi

# ---------------------------------------------------------------- allowlist
allowlist="${SR_HOSTS_ALLOWLIST:-scripts/source-hosts-allowlist.txt}"
if [ -f "$allowlist" ]; then
  sed '/^[[:space:]]*#/d;/^[[:space:]]*$/d' "$allowlist" | tr '[:upper:]' '[:lower:]' | sort -u > "$allow"
else
  : > "$allow"
fi

# --------------------------------------------------------- control probe
# .invalid is reserved by RFC 2606 and MUST never resolve, so the dead-host
# self-test needs no network and no luck.
CONTROL_HOSTS="${SR_HOSTS_CONTROL:-example.com google.com}"
control_ok=0
control_total=0
control_log="$(mktemp -t sr_ctrl.XXXXXX)"
trap 'rm -f "$hosts" "$mapf" "$dead" "$allow" "$control_log"' EXIT
for c in $CONTROL_HOSTS; do
  control_total=$((control_total + 1))
  if getent ahosts "$c" >/dev/null 2>&1; then
    control_ok=$((control_ok + 1))
  else
    echo "  control host did NOT resolve: $c" >> "$control_log"
  fi
done

if [ "$control_ok" -eq 0 ]; then
  echo "INCOMPLETE: DNS resolver is unusable - 0 of $control_total control hosts resolved."
  sed 's/^/  /' "$control_log"
  echo
  echo "  NOTHING WAS CONCLUDED about our official sources. $total hosts were"
  echo "  NOT tested, and a resolver outage is indistinguishable from a dead"
  echo "  host at this point. Do not 'fix' any officialSource because of this."
  [ "${SR_HOSTS_STRICT:-0}" = "1" ] && exit 2
  exit 0
fi

if [ "$control_ok" -lt "$control_total" ]; then
  echo "NOTE: $control_ok/$control_total control hosts resolved; partial resolver trouble."
  echo "  Failures below are re-tried once before being called dead."
  sed 's/^/  /' "$control_log"
fi

# ------------------------------------------------------------------- scan
resolved=0; failed=0
while IFS= read -r h; do
  [ -z "$h" ] && continue
  if getent ahosts "$h" >/dev/null 2>&1; then
    resolved=$((resolved + 1))
    continue
  fi
  # Retry once. The embedded resolver drops bursts; a single missed answer is
  # not evidence of a dead domain.
  sleep 0.3
  if getent ahosts "$h" >/dev/null 2>&1; then
    resolved=$((resolved + 1))
    continue
  fi
  if grep -Fxq "$h" "$allow"; then
    resolved=$((resolved + 1))
    continue
  fi
  failed=$((failed + 1))
  printf '%s\t' "$h" >> "$dead"
  # `|| true` is REQUIRED, not cosmetic. This is a purely diagnostic lookup: a
  # dead host supplied via SR_HOSTS_INPUT that is not referenced from src/data
  # makes grep exit 1, which under `set -e` + `pipefail` kills the script
  # mid-report. Self-test T2 caught exactly that: the guard exited 1 -- which
  # LOOKED like a correct block -- while printing no explanation whatsoever,
  # because it died here instead of reaching the BLOCKED branch. A blocking
  # guard that fails silently is a guard people learn to run with --force.
  grep -rlE "officialSource:[[:space:]]*'[^']*${h//./\\.}[^']*'" src/data/ 2>/dev/null \
    | tr '\n' ' ' >> "$dead" || true
  printf '\n' >> "$dead"
done < "$hosts"

baselined=$( [ -s "$allow" ] && wc -l < "$allow" | tr -d ' ' || echo 0 )

echo "Source-host liveness: $total unique host(s) from $source_desc"
echo "  resolved (or baselined): $resolved"
echo "  DEAD:                   $failed"
echo "  allowlist entries:      $baselined ($allowlist)"

if [ "$failed" -gt 0 ]; then
  echo
  echo "BLOCKED: official sources with no DNS record:"
  while IFS=$'\t' read -r h files; do
    [ -z "$h" ] && continue
    echo "  DEAD HOST: $h"
    [ -n "${files:-}" ] && echo "    referenced by: $files"
  done < "$dead"
  echo
  echo "Re-point officialSource at a host that resolves, OR baseline the host in"
  echo "$allowlist with a comment explaining why it legitimately has no A record."
  echo "Verify the replacement answers HTTP before pointing a page at it - a host"
  echo "that resolves is not yet a host that serves."
  exit 1
fi

echo "Source hosts OK ($resolved/$total resolve)."