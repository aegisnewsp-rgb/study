#!/usr/bin/env bash
set -uo pipefail

# check-gate-chain.sh — run every repo gate, report every rc, one exit code.
#
# THE DEFECT THIS EXISTS FOR (vqzo 2026-10-20T0435Z):
#   There was no chain runner. "The standard chain" was a convention written in
#   prose in ORCHESTRATION-STATUS files and queue rows:
#
#     check-scope rc=0 - check-astro-syntax rc=0 - check-exam-faq-keys rc=0 -
#     check-data-module-parse rc=0 - check-note-links.cjs rc=0 - check-ad-guards.mjs rc=0 -
#     check-internal-links rc=0 - check-source-hosts.sh rc=0 (under bash) -
#     check-exam-imports rc=1 **PRE-EXISTING, not absorbed**
#
#   Because it was assembled by hand each pulse, it drifted, and every drift was
#   invisible:
#     D1  WRONG FILENAME, SAME INTENT. That row invokes `check-ad-guards.sh`; the
#         file is `check-ad-guards.mjs`. The rc=127 was caught by a reader, not by
#         a tool — and only because that reader read the line closely.
#     D2  A GATE THAT EXISTS IS NOT A GATE THAT RUNS. `check-same-page-restatement.mjs`
#         was built and committed at 539f9c28 to catch a page repeating itself,
#         measured green, and was named in no chain — so it could never fail and
#         could never catch anything.
#     D3  rc=2 WAS READ AS GREEN. `check-consent-journeys` exits 2 when Chromium
#         is absent. A pulse recording "chain rc=0" and a pulse recording rc=2
#         look identical in prose; one of them verified nothing at all.
#     D4  A RED GATE WAS CARRIED AS "PRE-EXISTING, not absorbed" for a full day.
#         The cause was 3 unreachable files; the fix was one `git rm`. Nothing in
#         the chain escalated it, because carrying it forward cost nothing.
#
# WHAT THIS DOES:
#   (a) DISCOVERS gates by globbing scripts/check-*, so a newly added gate is run
#       by the next pulse with no edit to this file. D2 cannot recur.
#   (b) PICKS THE INTERPRETER from the extension. `.sh` -> bash, everything else
#       -> node. A wrong-name call is now impossible. D1 cannot recur.
#   (c) SEPARATES PASS / FAIL / NOT-RUN. rc=2 is NOT-RUN: the gate could not
#       execute, so it asserted nothing. It is reported loudly and never counted
#       as a pass. D3 cannot recur.
#   (d) ESCALATES. Any FAIL, and any REQUIRED gate that is missing, exits non-zero.
#       A gate cannot be "absorbed" by hand-writing about it, because the next
#       pulse runs this and sees the red. D4 cannot recur without someone
#       deliberately changing the code.
#     D5  A CHAIN CAN CERTIFY A BUILD THAT IS STILL HAPPENING. check-inline-scripts,
#         check-internal-links, check-consent-journeys and check-noindex-parity all
#         read dist/, not src/. Astro rewrites dist/ in place, so a chain run during a
#         build reads a half-written tree and reports whatever it finds there. Measured
#         2026-10-21: the 2105Z pulse read ~3579 broken link targets from a dist/ being
#         rewritten, and the 2135Z pulse read two gate FAILs from the same 21:26-21:47Z
#         build window. Both readings were phantom, and both were given a confident root
#         cause that was wrong - first src/layouts/Layout.astro, then
#         src/components/AffiliateLink.astro. Neither file is read by any of those gates,
#         and check-inline-scripts is a SYNTAX checker: it permits inline scripts by
#         design and FAILs only on a SyntaxError, so an inline handler was never its
#         input. A gate cannot catch this from the inside, because a truncated HTML file
#         is still a file. So the chain checks it from the outside, below.
#
# REQUIRED GATES
#   A gate that disappears is as dangerous as one that turns red, and neither
#   shows up as a failure — the chain just gets shorter. REQUIRED lists gates
#   whose ABSENCE must fail the chain. Add a new gate to REQUIRED when it starts
#   enforcing something nobody else enforces.
#
# BASELINE — KNOWN BREACHES
#   scripts/gate-chain-known-failures.txt holds "name<TAB>reason" for a gate that
#   is red for a recorded reason. A baselined FAIL is reported as KNOWN and does
#   not block, so the chain can be armed before the repo is clean. Deleting a
#   line re-arms it. Same idiom as scripts/known-breach-baseline.txt and
#   scripts/exam-faq-key-baseline.txt. Empty file = nothing is excused.
#
# Usage
#   scripts/check-gate-chain.sh              # verify, exit 1 on FAIL or missing REQUIRED
#   scripts/check-gate-chain.sh --list       # names only, run nothing
#   scripts/check-gate-chain.sh --only a,b   # run a subset
#
#   SR_GATE_TIMEOUT=300   per-gate seconds (default 300)
#   SR_GATE_STRICT=1      treat NOT-RUN as FAIL (use in CI)
#   SR_GATE_DIST_SETTLE=3 seconds between the two dist/ samples (default 3)
#   SR_GATE_ALLOW_MUTATING_DIST=1  run anyway if dist/ is being rewritten (D5)

SELF="check-gate-chain.sh"
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || echo "$(cd "$(dirname "$0")/.." && pwd)")"
cd "$REPO_ROOT"

TIMEOUT="${SR_GATE_TIMEOUT:-300}"
BASELINE="scripts/gate-chain-known-failures.txt"
SCRIPTS="scripts"

# Gates whose absence must fail the chain.
# check-rejected-content-live.mjs is here because it enforces something no
# other gate enforces: that a curator's REFUSED string is not live in shipped
# content. It was added to the chain by glob (so it runs) but not to REQUIRED
# (so its ABSENCE was free) - the same half-landed shape that left
# check-curate-corpus.mjs REQUIRED while its script was untracked. Both files
# it reads (the gate and scripts/rejected-content-strings.json) are tracked, so
# a fresh checkout has it and it cannot go INERT there.
#
# check-curate-gap.mjs is here for the same reason, one step further: it
# enforces that every patch in the window carries a curate VERDICT, and NO
# other gate in this chain checks that. Until 1505Z it ran by glob (so it
# executed) but was not in REQUIRED (so deleting it was free) - exactly the
# half-landed shape the 1320Z patch closed for check-rejected-content-live.mjs.
# It is tracked, and its own INERT paths (unknown flag, bad --hours, missing
# patch dir) all exit 2, which the chain reports as NOT-RUN ("asserted
# nothing", never a pass) - so arming it cannot turn a missing control into a
# false green.
REQUIRED="check-scope.sh
check-astro-syntax.mjs
check-exam-faq-keys.mjs
check-data-module-parse.mjs
check-ad-guards.mjs
check-note-links.cjs
check-internal-links.mjs
check-source-hosts.sh
check-same-page-restatement.mjs
check-curate-corpus.mjs
check-rejected-content-live.mjs
check-curate-gap.mjs"

mode="verify"
only=""
for arg in "$@"; do
  case "$arg" in
    --list) mode="list" ;;
    --only) mode="verify" ;;
    --only=*) mode="verify"; only="${arg#--only=}" ;;
  esac
done
# `--only a b c` form: everything after --only is a name list.
prev=""
for arg in "$@"; do
  if [ "$prev" = "--only" ]; then only="${only:+$only,}$arg"; fi
  prev="$arg"
done

# ---- discover ----------------------------------------------------------------
# Sorted, and never the runner itself: it matches check-*.sh like everything else.
mapfile -t GATES < <(find "$SCRIPTS" -maxdepth 1 -type f -name 'check-*' -printf '%f\n' \
  | grep -v "^${SELF}$" | sort)

# ---- D5: dist/ must be quiescent ----------------------------------------------
# Sample dist/ twice a few seconds apart. If a build is writing, the newest mtime
# advances or the file count moves; if it is not, both samples are identical.
#
# Deliberately NOT "is dist/ recent". A just-finished build is complete and MUST pass
# - requiring dist to be N minutes old would fail every legitimate host deploy, which
# builds in Docker and immediately runs these gates. The only question here is whether
# something is writing RIGHT NOW.
#
# Nothing in this chain writes to dist/, so a quiescent dist stays quiescent for the
# whole run and this costs one extra sleep, not a re-check of the result.
dist_fingerprint() {
  # newest mtime, file count, byte total - three signals, so a rewrite that happens to
  # preserve file count (astro overwrites hashed assets in place) still shows up.
  #
  # mtime is printed with %.0f, NOT %s. awk's default %s renders a value this large in
  # scientific notation - 1792620003 becomes "1.79262e+09", which is identical for every
  # mtime inside a ~2.8 hour window. A build that overwrites files in place with the
  # same lengths would then move the newest mtime without changing any printed digit,
  # and count and total bytes would both hold steady: the exact rewrite this check
  # exists to catch would pass. Seconds fit exactly in a double, so %.0f is lossless.
  find dist -type f -printf '%T@ %s\n' 2>/dev/null \
    | awk '{ if ($1 > m) m = $1; n++; b += $2 } END { printf "%.0f %d %d\n", m+0, n, b+0 }'
}

if [ "$mode" = "verify" ] && [ -d dist ]; then
  fp_before="$(dist_fingerprint)"
  sleep "${SR_GATE_DIST_SETTLE:-3}"
  fp_after="$(dist_fingerprint)"
  if [ "$fp_before" != "$fp_after" ]; then
    if [ "${SR_GATE_ALLOW_MUTATING_DIST:-0}" = "1" ]; then
      echo "check-gate-chain: WARNING dist/ IS BEING REWRITTEN ($fp_before -> $fp_after)." >&2
      echo "check-gate-chain:          SR_GATE_ALLOW_MUTATING_DIST=1 was set, so continuing anyway." >&2
      echo "check-gate-chain:          Any FAIL below may be an artifact of a half-written build." >&2
    else
      echo "check-gate-chain: REFUSING TO CERTIFY A BUILD IN PROGRESS" >&2
      echo "check-gate-chain:   dist/ changed between two samples ${SR_GATE_DIST_SETTLE:-3}s apart" >&2
      echo "check-gate-chain:   (newest-mtime filecount bytes):" >&2
      echo "check-gate-chain:     before: $fp_before" >&2
      echo "check-gate-chain:      after: $fp_after" >&2
      echo "check-gate-chain:   A gate reading dist/ right now reads a half-written tree. Wait" >&2
      echo "check-gate-chain:   for the build to finish and re-run, or set" >&2
      echo "check-gate-chain:   SR_GATE_ALLOW_MUTATING_DIST=1 if you know the tree is sound." >&2
      exit 3
    fi
  fi
fi

if [ "$mode" = "list" ]; then
  printf '%s\n' "${GATES[@]}"
  exit 0
fi

# ---- baseline ----------------------------------------------------------------
declare -A KNOWN=()
if [ -f "$BASELINE" ]; then
  while read -r k reason; do
    case "$k" in ''|'#'*) continue ;; esac
    KNOWN["$k"]="$reason"
  done < <(sed 's/#.*$//' "$BASELINE" | sed 's/[[:space:]]\+/ /g')
fi

run_one() {
  local gate="$1"
  local out rc
  case "$gate" in
    *.sh) cmd=(bash "$SCRIPTS/$gate") ;;
    *)    cmd=(node "$SCRIPTS/$gate") ;;
  esac
  out="$(timeout "$TIMEOUT" "${cmd[@]}" 2>&1)"
  rc=$?
  LAST_OUT="$out"
  LAST_RC="$rc"
}

printf 'check-gate-chain: %d gate(s) discovered in %s\n' "${#GATES[@]}" "$SCRIPTS"
echo

fail_count=0
notrun_count=0
known_count=0
pass_count=0

for gate in "${GATES[@]}"; do
  if [ -n "$only" ] && ! printf '%s' ",$only," | grep -q ",${gate},"; then
    printf '  %-40s SKIPPED (not in --only)\n' "$gate"
    continue
  fi
  run_one "$gate"
  rc="$LAST_RC"; out="$LAST_OUT"

  if [ "$rc" -eq 0 ]; then
    printf '  %-40s PASS\n' "$gate"
    pass_count=$((pass_count + 1))
  elif [ -n "${KNOWN[$gate]:-}" ]; then
    printf '  %-40s KNOWN-FAIL  %s\n' "$gate" "${KNOWN[$gate]}"
    known_count=$((known_count + 1))
  elif [ "$rc" -eq 2 ] || [ "$rc" -eq 124 ]; then
    # rc=124 is `timeout` firing: the gate neither passed nor failed.
    printf '  %-40s NOT-RUN (rc=%s) — asserted nothing, NOT a pass\n' "$gate" "$rc"
    notrun_count=$((notrun_count + 1))
    printf '%s\n' "$out" | tail -3 | sed 's/^/        | /'
    if [ "${SR_GATE_STRICT:-0}" = "1" ]; then
      fail_count=$((fail_count + 1))
    fi
  else
    printf '  %-40s FAIL (rc=%s)\n' "$gate" "$rc"
    fail_count=$((fail_count + 1))
    printf '%s\n' "$out" | tail -6 | sed 's/^/        | /'
  fi
done

# ---- missing REQUIRED --------------------------------------------------------
missing=0
echo
while read -r req; do
  case "$req" in ''|'#'*) continue ;; esac
  if ! printf '%s\n' "${GATES[@]}" | grep -qxF "$req"; then
    printf '  %-40s MISSING — required gate is not in %s\n' "$req" "$SCRIPTS"
    missing=$((missing + 1))
    fail_count=$((fail_count + 1))
  fi
done <<< "$REQUIRED"

# ---- enforcement-gap census (2026-10-24T1250Z) --------------------------------
# A MEASUREMENT, not a gate. It is printed here so the DEPLOY-side summary carries
# the same coverage numbers the commit line carries: how many refusing receipts in
# the store could NOT be enforced against the files being shipped. It cannot change
# fail_count and cannot fail the chain - it is the "no refusal fired" vs "nothing was
# refused" distinction, made visible where an operator reads the summary.
#
# Its own rc is ignored on purpose. It exits 2 when the receipt store is not
# reachable, and on the deploy host it usually is not; that must read as NOT-RUN
# (which it says out loud) and never as a failure of the chain.
if [ -f "$SCRIPTS/sr-receipt-coverage-census.mjs" ]; then
    node "$SCRIPTS/sr-receipt-coverage-census.mjs" >&2 || true
fi

printf '\ncheck-gate-chain: PASS %s | KNOWN-FAIL %s | NOT-RUN %s | FAIL %s | MISSING %s\n' \
  "$pass_count" "$known_count" "$notrun_count" "$fail_count" "$missing"

if [ "$fail_count" -ne 0 ]; then
  echo "check-gate-chain: FAILED" >&2
  exit 1
fi
if [ "$notrun_count" -ne 0 ]; then
  # Honest exit: the chain is not green, it is INCOMPLETE.
  echo "check-gate-chain: INCOMPLETE — $notrun_count gate(s) could not run; set SR_GATE_STRICT=1 to fail" >&2
  exit 0
fi
echo "check-gate-chain: OK"