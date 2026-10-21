#!/usr/bin/env node
/**
 * sr-receipt-gate — pre-commit guard for StudyRoadmap.
 *
 * WHY THIS EXISTS (host directive, telegram-inbox 2026-10-20T22:09:33Z):
 *   commit 239e1f88 applied VQZO-20261020T1920Z-nce-cours-four-module-side-pairs.diff
 *   AFTER its receipt recorded outcome=REJECTED__NOT_APPLIED__REVERTED with
 *   curate_verdict ok=false. The reject was silently undone and the JAMB fact +
 *   jamb.gov.ng citation were lost until f9434ba9 repaired it. Nothing enforced
 *   the receipt, so nothing stopped the commit.
 *
 * CONTRACT: a commit that stages any file named by a patch whose receipt says the
 * patch did NOT land cleanly is refused. The receipt is the adjudication record;
 * this gate is what makes it binding instead of advisory.
 *
 * Exit 0 = allow. Exit 1 = refuse (commit blocked).
 *
 * OPERATOR ESCAPE HATCH: SR_RECEIPT_GATE_BYPASS=1 bypasses, and only the host
 * operator should ever set it. A bypass is printed loudly, never silent, and
 * it is RECORDED on disk (ts, staged paths, verdict, and the names of the
 * receipts that said no) in $SR_AUDIT_LOG, default
 * /data/openclaw-workspace/gate-audit.jsonl. The flag applies to the COMMIT
 * path only: the deploy path (--worktree) never honours it.
 *
 * Usage:
 *   node scripts/sr-receipt-gate.mjs                 # read staged files from git
 *   node scripts/sr-receipt-gate.mjs --files a,b,c   # explicit file list (tests)
 *   node scripts/sr-receipt-gate.mjs --selfcheck     # run the negative controls
 */

import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PATCH_DIR = process.env.SR_PATCH_DIR || '/data/openclaw-workspace/patches';

// Read at CALL time, not at import time: the self-check has to be able to
// exercise the bypass path in-process, without re-spawning the process.
export function bypassRequested() {
  return process.env.SR_RECEIPT_GATE_BYPASS === '1';
}

// The durable audit writer lives next to this file. It is imported DYNAMICALLY
// and its absence is tolerated on purpose: a host with an older checkout must
// still be able to run the gate. The absence is LOUD, never silent — a control
// that vanishes without a word is the defect class this exists to close.
let writeAudit = null;
try {
  ({ writeAudit } = await import('./sr-gate-audit.mjs'));
} catch {
  writeAudit = null;
}

/** The repo root, or '' when git cannot answer. */
export function repoRoot() {
  try {
    return execFileSync('git', ['rev-parse', '--show-toplevel'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
}

/**
 * Record a bypass ON DISK. Called in BOTH directions — a bypass over a clean
 * tree is exactly the case that used to be invisible, because the old code
 * printed its one line only on the REFUSE path.
 *
 * Never throws and never changes the commit's fate: the verdict is already
 * decided by the time this runs. A failed write is reported loudly, because a
 * bypass nobody can see is the thing being fixed here.
 */
export function recordBypass({ staged, allow, rc, block, wouldRefuse }) {
  const fields = {
    event: 'bypass',
    verdict: allow ? 'ALLOW' : 'REFUSE',
    would_refuse: wouldRefuse === undefined ? !allow : Boolean(wouldRefuse),
    rc,
    paths: (staged || []).slice(0, 200),
    path_count: (staged || []).length,
    block: (block || []).slice(0, 20),
    block_count: (block || []).length,
    bypass_env: 'SR_RECEIPT_GATE_BYPASS=1',
    repo: repoRoot(),
    user: process.env.USER || process.env.LOGNAME || 'unknown',
    pid: process.pid,
  };
  if (!writeAudit) {
    console.error('  !! AUDIT UNAVAILABLE — scripts/sr-gate-audit.mjs could not be loaded.');
    console.error('     This bypass is NOT recorded by the gate. The post-commit hook may still capture the commit.');
    return { ok: false, error: 'audit module missing' };
  }
  const out = writeAudit(fields);
  if (!out.ok) {
    console.error(`  !! AUDIT WRITE FAILED — ${out.error}. This bypass is NOT recorded.`);
    return out;
  }
  return out;
}

// A receipt refutes a commit when a value under any of these keys reads as a
// refusal. Keys are matched at every depth because receipts in the wild disagree
// on shape (some nest gates.curate, some flatten).
const REFUSE_KEYS = ['applied', 'ok', 'status', 'outcome', 'curate_verdict', 'verdict', 'result'];
const REFUSE_VALUES = [
  'false',
  'rejected',
  'reject',
  'not_applied',
  'reverted',
  'no',
  'fail',
  'blocked',
  'hold',
  'held',
];

// Keys holding NARRATIVE, not a verdict. A repair receipt's proof block says
// things like "confirms the JAMB fact belongs in eligibility; the rejected
// edit's deletion was fact-losing" — matching refusal words in prose would block
// the very commit we want to make, pushing the operator into bypassing the gate.
// Observed live on VQZO-20261020T2205Z-nce-cours-rejected-patch-landed-anyway-fix.
const NARRATIVE_KEY = /(proof|check|_note|context|rationale|why|detail|excerpt|summary|description|comment)/i;

// A verdict is a short token, not a sentence. "ok=false, verdict=REJECT" is a
// verdict; a 30-word sentence containing "rejected" is not.
const MAX_VERDICT_WORDS = 6;

function walk(node, path = '') {
  const hits = [];
  if (Array.isArray(node)) {
    node.forEach((v, i) => hits.push(...walk(v, `${path}[${i}]`)));
  } else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      const p = path ? `${path}.${k}` : k;
      hits.push(...walk(v, p));
    }
  } else {
    hits.push({ path, value: node });
  }
  return hits;
}

/**
 * Decide whether one receipt refuses a commit.
 * Returns {refuse:boolean, reasons:string[]} — never throws: a gate that crashes
 * on a malformed receipt must fail LOUD, never fail open.
 */
export function judgeReceipt(receiptPath) {
  const name = receiptPath.split('/').pop();
  let raw;
  try {
    raw = readFileSync(receiptPath, 'utf8');
  } catch (e) {
    return { refuse: true, reasons: [`${name}: receipt unreadable: ${e.message}`] };
  }
  let doc;
  try {
    doc = JSON.parse(raw);
  } catch (e) {
    return {
      refuse: true,
      reasons: [
        `${name}: receipt is not valid JSON (${e.message.split('\n')[0]}). ` +
          `A receipt that cannot be read cannot clear a commit. Fix or delete it.`,
      ],
    };
  }

  const reasons = [];
  const skippedProse = [];
  for (const { path, value } of walk(doc)) {
    if (value === null || value === undefined) continue;
    const leafKey = path.split('.').pop().replace(/\[\d+\]$/, '').toLowerCase();
    if (!REFUSE_KEYS.includes(leafKey)) continue;
    if (NARRATIVE_KEY.test(leafKey)) {
      skippedProse.push(`${name}: ${path} (narrative field, not a verdict)`);
      continue;
    }
    const text = Array.isArray(value) ? value.join(' ') : String(value);
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    // Long prose describes what happened; it is not a decision. Refusing on it
    // produces false reds on legitimate repair commits.
    if (wordCount > MAX_VERDICT_WORDS) {
      skippedProse.push(`${name}: ${path} (${wordCount} words — prose, not a verdict)`);
      continue;
    }
    const str = text.toLowerCase();
    // Real-world shape is "ok=false, verdict=REJECT" — scan tokens, not equality.
    for (const bad of REFUSE_VALUES) {
      if (str === bad || new RegExp(`(^|[^a-z_])${bad}([^a-z_]|$)`).test(str)) {
        reasons.push(`${name}: ${path} = ${JSON.stringify(text).slice(0, 160)}`);
        break;
      }
    }
  }
  return { refuse: reasons.length > 0, reasons: [...new Set(reasons)], skippedProse };
}

/** Files a receipt claims to govern: targets / target_files / files / file. */
export function receiptTargets(doc) {
  const out = new Set();
  for (const k of ['targets', 'target_files', 'files', 'file']) {
    const v = doc?.[k];
    if (Array.isArray(v)) v.forEach((x) => typeof x === 'string' && out.add(x));
    else if (typeof v === 'string') v.split(/\s*\+\s*/).forEach((x) => x && out.add(x.trim()));
  }
  return out;
}

/**
 * Map staged paths back to the receipts that govern them.
 *
 * A receipt whose JSON is unreadable cannot be mapped to any file — we do not
 * know what it governs. Pushing it unconditionally would make the gate block
 * every commit in the repo (a blanket block operators disable, which is worse
 * than no gate). So unmappable receipts are returned separately as `unmappable`
 * and surface as a WARNING; only receipts that positively match a staged path
 * can refuse. judgeReceipt() still fails loud on malformed JSON for any receipt
 * we do manage to match, so "cannot read" never becomes "silent allow" for a
 * receipt that governs the staged file.
 */
export function findReceipts(staged, patchDir = PATCH_DIR) {
  if (!existsSync(patchDir)) {
    // MEASURED 2026-10-21T04:50Z: the receipt store lives OUTSIDE the repo
    // (/data/openclaw-workspace/patches by default), so on any machine where it is
    // not mounted — the host that actually runs deploy.sh — this used to return an
    // empty match set and the gate printed a reassuring
    // "OK (36 dirty shipped-content file(s), none governed by a refusing receipt)"
    // and exited 0. That is the 0330Z failure class (a control that prints OK
    // while governing nothing) sitting on the live deploy path: the guard shipped
    // 0405Z would have waved EVERY deploy through. A missing store is now reported
    // as INERT (rc=2) so it can never be read as a pass.
    return { matched: [], unmappable: [], storeMissing: true, storePath: patchDir };
  }
  const matched = [];
  const unmappable = [];
  for (const rf of readdirSync(patchDir).filter((f) => f.endsWith('.receipt.json'))) {
    const full = join(patchDir, rf);
    let doc;
    try {
      doc = JSON.parse(readFileSync(full, 'utf8'));
    } catch {
      unmappable.push({ receipt: full, note: 'unreadable — could not be mapped to any file, NOT adjudicating it' });
      continue;
    }
    const targets = receiptTargets(doc);
    if (!targets.size) {
      // Fail-open shape, found live 2026-10-21T0330Z. A receipt that declares no
      // target list can never be matched to a staged file, so its verdict never
      // runs. Harmless for a passing receipt (there is nothing to adjudicate);
      // NOT harmless for a refusing one — it becomes invisible. Surface it.
      // Deliberately a WARN, not a block: a blanket block is what teaches an
      // operator to disable a gate, and one unmappable receipt must not be able
      // to stop every commit in the repo.
      const j = judgeReceipt(full);
      unmappable.push({
        receipt: full,
        note:
          'declares no targets (targets/files/target_files/file) — cannot be mapped to any staged file' +
          (j.refuse ? ` AND ITS VERDICT REFUSES: ${j.reasons.join('; ')}` : ''),
      });
      continue;
    }
    const hits = staged.filter(
      (s) => targets.has(s) || [...targets].some((t) => s === t || s.startsWith(`${t}/`)),
    );
    if (hits.length) matched.push({ receipt: full, targets, hits });
  }
  return { matched, unmappable, storeMissing: false, storePath: patchDir };
}

export function gate(staged, patchDir = PATCH_DIR) {
  if (!staged.length) {
    return { allow: false, rc: 1, block: ['no staged files — nothing to adjudicate'], warn: [], receipts: [] };
  }
  const { matched, unmappable, storeMissing, storePath } = findReceipts(staged, patchDir);
  if (storeMissing) {
    // NOT-RUN, not PASS. rc=2 is the house convention for "the gate could not
    // execute" (see scripts/check-gate-chain.sh, defect D3). It is deliberately
    // NOT rc=1: blocking every deploy because a control store is not mounted would
    // be a self-inflicted outage, and a control that gets disabled within a day is
    // worse than none. It is deliberately NOT rc=0 either: rc=0 is a verdict, and
    // the entire point of this branch is that no verdict was reached.
    return {
      allow: true,
      rc: 2,
      block: [],
      warn: [],
      receipts: [],
      inert: true,
      storePath,
      note: `RECEIPT STORE NOT FOUND (${storePath}) — nothing was adjudicated; this is NOT a pass`,
    };
  }
  const warn = unmappable.map((u) => `${u.receipt.split('/').pop()}: ${u.note}`);
  if (!matched.length) {
    return {
      allow: true,
      rc: 0,
      block: [],
      warn,
      receipts: [],
      note: 'no receipt governs the staged files',
    };
  }
  const block = [];
  for (const r of matched) {
    const j = judgeReceipt(r.receipt);
    if (j.refuse) block.push(...j.reasons);
  }
  return { allow: block.length === 0, rc: block.length === 0 ? 0 : 1, block, warn, receipts: matched };
}

/**
 * Paths whose WORKING-TREE state is what a deploy actually builds and serves.
 *
 * WHY THIS LIST IS NARROW (the trap, recorded in telegram-inbox 2026-10-21T0240Z):
 *   A naive `git diff --quiet` dirty-tree guard is worse than having no guard. The
 *   news bot rewrites src/data/site-revision.json and public/revision.json on EVERY
 *   run, so the tree is never clean; a whole-tree guard would block every deploy
 *   forever, including legitimate news updates, and the operator would disable it
 *   within a day. Only editorial content paths are adjudicated here.
 *
 * src/data/site-revision.json and public/revision.json are release markers, not
 * content. MEASURED 2026-10-21T0412Z: both are written at BUILD time (identical
 * mtime 02:35:28Z = the 02:35Z build the operator reported), so they are dirty
 * on every deploy for reasons that have nothing to do with editorial work.
 * NEVER_GATE is the explicit line of defence that keeps them out, so a future
 * widening of the prefix list cannot silently pull them back in.
 *
 * WIDENED 2026-10-21T0412Z: src/data/ (not just src/data/exams/). The operator's
 * 0240Z brief listed three prefixes, but src/data/ ROOT holds shipped content
 * too: exam-faqs.ts is imported by src/pages/roadmap.astro and
 * src/pages/exams/[exam].astro, and seo-meta-overrides.ts by four more pages.
 * A guard that cannot see those two is blind to the most-edited data files in
 * the repo. Editor backups (*.bak) are untracked and are excluded by NEVER_GATE.
 * public/ stays OUT on purpose: public/news.json is machine-generated and
 * committed by the news bot, and judging it would be the permanent-red trap.
 */
const SHIPPED_CONTENT_PREFIXES = ['src/content/', 'src/data/', 'src/pages/'];
const SHIPPED_CONTENT_EXACT = new Set(['src/content.config.ts']);
const NEVER_GATE = [
  /site-revision\.json$/,
  /(^|\/)revision\.json$/,
  /\.bak($|-)/,
];

export function isShippedContentPath(f) {
  if (NEVER_GATE.some((re) => re.test(f))) return false;
  return SHIPPED_CONTENT_EXACT.has(f) || SHIPPED_CONTENT_PREFIXES.some((p) => f.startsWith(p));
}

/**
 * The dirty-worktree check a PRE-COMMIT gate structurally cannot do.
 *
 * A deploy builds the working tree, not a commit. The pre-commit hook therefore
 * adjudicates content that is never staged and would otherwise ship unreviewed —
 * measured live 2026-10-21T0350Z: 36 dirty content/exams files, several governed
 * by receipts reading ok=false, and the hook sees none of them because nothing is
 * staged. This mode closes that gap against the same receipts.
 */
function dirtyShippedFiles() {
  const run = (args) => {
    try {
      return execFileSync('git', args, { encoding: 'utf8' })
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean);
    } catch {
      return [];
    }
  };
  const unstaged = run(['diff', '--name-only']);
  const untracked = run(['ls-files', '--others', '--exclude-standard']);
  return [...new Set([...unstaged, ...untracked])].filter(isShippedContentPath);
}

/**
 * Print receipt warnings without burying the ones that matter.
 *
 * A wall of ~140 near-identical warnings is a warning nobody reads, and a gate whose
 * output gets ignored is the same as no gate at all. Print the REFUSING receipts in
 * full — those are the fail-open holes — and collapse the benign ones into a count.
 */
function printWarns(warns) {
  const limit = Number(process.env.SR_RECEIPT_GATE_WARN_LIMIT || 12);
  const refusing = warns.filter((w) => w.includes('REFUSES'));
  refusing.slice(0, limit).forEach((w) => console.error(`sr-receipt-gate: WARN  ${w}`));
  if (refusing.length > limit) {
    // Measured 2026-10-21T0350Z: ~120 refusing-but-unmappable receipts are on disk,
    // most of them month-old curate-pulse artifacts. Printing all of them buries the
    // handful that belong to work in flight, so the overflow is counted, not hidden.
    console.error(
      `sr-receipt-gate: WARN  +${refusing.length - limit} more refusing-but-unmappable receipt(s) (SR_RECEIPT_GATE_WARN_LIMIT=${limit} to see all).`,
    );
  }
  const benign = warns.length - refusing.length;
  if (benign) {
    console.error(
      `sr-receipt-gate: WARN  ${benign} further receipt(s) declare no targets and PASS — they govern no staged file, nothing to adjudicate.`,
    );
  }
}

function stagedFiles() {
  try {
    return execFileSync('git', ['diff', '--cached', '--name-only'], { encoding: 'utf8' })
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function selfcheck() {
  const tmp = '/tmp/sr-receipt-gate-selfcheck';
  execFileSync('rm', ['-rf', tmp]);
  mkdirSync(tmp, { recursive: true });
  const wr = (n, s) => writeFileSync(join(tmp, n), s + '\n');

  let fails = 0;
  let total = 0;
  const check = (ok, label, detail) => {
    total++;
    if (!ok) fails++;
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? ` -> ${detail}` : ''}`);
  };

  console.log('sr-receipt-gate selfcheck (negative controls)');

  // Fixtures MUST carry the .receipt.json suffix: findReceipts() only reads files
  // matching that pattern, so a misnamed fixture silently tests nothing.
  const R = (n) => `${n}.receipt.json`;

  // 1. clean receipt passes
  wr(R('pass'), '{"patch":"p","applied":true,"curate_verdict":"ok=true, verdict=ACCEPT"}');
  let j = judgeReceipt(join(tmp, R('pass')));
  check(!j.refuse, 'clean receipt passes (no false all-red)', j.refuse ? j.reasons[0] : 'allow');

  // 2. the exact 239e1f88 shape refuses
  wr(
    R('reject'),
    '{"patch":"p","applied":false,"outcome":"REJECTED__NOT_APPLIED__REVERTED","curate_verdict":"ok=false, verdict=REJECT"}',
  );
  j = judgeReceipt(join(tmp, R('reject')));
  check(j.refuse && j.reasons.length >= 2, 'applied=false + ok=false refuses (the 239e1f88 shape)', `${j.reasons.length} reasons`);

  // 3. nested refusal is caught
  wr(R('nested'), '{"patch":"p","applied":true,"gates":{"curate":{"ok":false}}}');
  j = judgeReceipt(join(tmp, R('nested')));
  check(j.refuse, 'nested ok=false refuses', j.reasons[0] || 'allowed!');

  // 4. malformed JSON must fail LOUD, never open
  wr(R('bad'), '{"patch":"p", "applied": tru');
  j = judgeReceipt(join(tmp, R('bad')));
  check(j.refuse, 'malformed JSON refuses (never fails open)', j.reasons[0] || 'allowed!');

  // 5. no-files guard
  const g0 = gate([], tmp);
  check(g0.allow === false && g0.rc === 1, 'empty staged set trips the no-files guard', `rc=${g0.rc}`);

  // 6. refusal names the offending receipt file (two receipts govern one path:
  //    the passing one and the rejecting one — the rejecting one must be named)
  wr(R('t-good'), '{"patch":"p","applied":true,"targets":["src/x.ts"]}');
  wr(R('t-bad'), '{"patch":"q","applied":false,"targets":["src/x.ts"]}');
  const g2 = gate(['src/x.ts'], tmp);
  check(
    g2.allow === false && g2.block.some((b) => b.includes('t-bad')),
    'refusal names the offending receipt file',
    g2.block.find((b) => b.includes('t-bad')) || 'no t-bad block!',
  );

  // 7. a staged file no receipt governs still passes — the gate must not become a
  //    blanket block (an unreadable receipt must not block unrelated commits)
  const g3 = gate(['src/unrelated.ts'], tmp);
  check(g3.allow === true, 'unguarded staged file passes (gate is not a blanket block)', g3.block[0] || 'allow');

  // 8. an unreadable receipt surfaces as a WARNING on an unrelated commit,
  //    never as a silent pass and never as a blanket refusal
  check(
    g3.warn.some((w) => w.includes('bad.receipt.json')),
    'unreadable receipt is warned about, not silently ignored',
    g3.warn.find((w) => w.includes('bad')) || 'no warning!',
  );

  // 9. a governing receipt that PASSES lets its own files through
  wr(R('good'), '{"patch":"g","applied":true,"curate_verdict":"ok=true","targets":["src/y.ts"]}');
  const g4 = gate(['src/y.ts'], tmp);
  check(g4.allow === true, 'file governed by a PASSING receipt is allowed', g4.block[0] || 'allow');

  // 10. FALSE-POSITIVE CONTROL (regression, found live): a repair receipt whose
  //     PROSE contains the word "rejected" must NOT block the repair commit.
  wr(
    R('repair'),
    JSON.stringify({
      patch: 'repair.diff',
      applied: true,
      outcome: 'LANDED_AND_COMMITTED',
      targets: ['src/z.ts'],
      primary_source_check: {
        verdict: 'confirms the JAMB fact belongs in eligibility; the rejected edit was fact-losing',
      },
      revert_proof: { note: 'the rejected edit was reverted and the citation restored' },
    }),
  );
  const g5 = gate(['src/z.ts'], tmp);
  check(
    g5.allow === true,
    'repair receipt mentioning "rejected" in prose is NOT blocked (no false red)',
    g5.block[0] || 'allow',
  );

  // 11. a short ok=false on a repair-shaped receipt still blocks
  wr(R('shortreject'), '{"patch":"r2","applied":true,"targets":["src/w.ts"],"curate_verdict":"ok=false"}');
  const g6 = gate(['src/w.ts'], tmp);
  check(g6.allow === false, 'short ok=false still blocks on a repair-shaped receipt', g6.block[0] || 'allowed!');

  // 12. a receipt with NO targets and a PASSING verdict: warn, do not block.
  //     Path is fresh (src/iso12.ts) because every earlier fixture still lives in this
  //     tmp dir and t-bad already governs src/x.ts — reusing it would test contamination.
  wr(R('notarget-pass'), '{"patch":"p8","applied":true,"curate_verdict":"ok=true"}');
  const g7 = gate(['src/iso12.ts'], tmp);
  check(
    g7.allow === true && g7.warn.some((w) => w.includes('notarget-pass')),
    'target-less PASSING receipt warns without blocking',
    g7.warn.find((w) => w.includes('notarget-pass')) || 'no warning!',
  );

  // 13. REGRESSION, found live 0330Z: a receipt with NO targets and a REFUSING verdict
  //     was invisible — findReceipts() could not match it, so ok=false never ran. The
  //     WARN must now name the refusal. It must still NOT be a blanket block.
  wr(R('notarget-refuse'), '{"patch":"p9","applied":false,"targets":[],"curate_verdict":"ok=false"}');
  const g8 = gate(['src/iso13.ts'], tmp);
  check(
    g8.warn.some((w) => w.includes('notarget-refuse') && /REFUSES/.test(w)),
    'target-less REFUSING receipt is surfaced by name (was silent)',
    g8.warn.find((w) => w.includes('notarget-refuse')) || 'SILENT — the 0330Z hole is open',
  );
  check(
    g8.allow === true,
    'unmappable receipts still do not become a blanket block',
    g8.block[0] || 'allow',
  );

  // 14. TRAP CONTROL: the news bot dirties the revision files on every single run.
  //     If --worktree ever judged them it would be permanently red and would get
  //     disabled, which is worse than no guard at all. Assert they are excluded
  //     and that real editorial content is NOT.
  check(!isShippedContentPath('src/data/site-revision.json'), 'src/data/site-revision.json is EXCLUDED (news bot)', '');
  check(!isShippedContentPath('public/revision.json'), 'public/revision.json is EXCLUDED (news bot)', '');
  check(isShippedContentPath('src/data/exams/uganda/uneb.ts'), 'src/data/exams/... is judged', '');
  check(isShippedContentPath('src/content/notes/hpat/hpat/hpat-005.md'), 'src/content/... is judged', '');
  check(isShippedContentPath('src/pages/index.astro'), 'src/pages/... is judged', '');
  check(!isShippedContentPath('scripts/sr-receipt-gate.mjs'), 'scripts/... is NOT judged (not shipped content)', '');
  check(!isShippedContentPath('src/data/exam-faqs.ts.bak-20261017T072732Z'), 'a .bak in src/data is NOT judged', '');
  // 15. WIDENED SCOPE (2026-10-21T0412Z). The operator's 0240Z brief named three
  //     prefixes; src/data/ ROOT also holds shipped content. These three controls
  //     pin the widened scope in BOTH directions so it can never drift back.
  check(
    isShippedContentPath('src/data/exam-faqs.ts'),
    'src/data/exam-faqs.ts IS judged (imported by roadmap.astro and exams/[exam].astro)',
    '',
  );
  check(
    isShippedContentPath('src/data/seo-meta-overrides.ts'),
    'src/data/seo-meta-overrides.ts IS judged (imported by 4 pages)',
    '',
  );
  check(
    !isShippedContentPath('public/news.json'),
    'public/ is NOT judged (news bot commits it; machine-generated)',
    '',
  );

  // 16. THE 0405Z DEPLOY-GUARD HOLE (measured 2026-10-21T04:50Z). The receipt
  //     store lives outside the repo, so on the host the gate read NOTHING and
  //     still printed "OK (... none governed by a refusing receipt)" with rc=0.
  //     A missing store must be INERT (rc=2), never a pass.
  const gInert = gate(['src/x.ts'], '/nonexistent/sr-receipt-store-selfcheck');
  check(
    gInert.inert === true && gInert.rc === 2,
    'missing receipt store is INERT (rc=2), never a pass',
    `rc=${gInert.rc} allow=${gInert.allow}`,
  );
  check(
    gInert.note && /NOT a pass/i.test(gInert.note),
    'the INERT verdict says in words that it is not a pass',
    gInert.note || 'no note',
  );

  // 17. THE BYPASS AUDIT (measured 2026-10-21T05:35Z). Commit 870649cf landed
  //     four files that three REFUSING receipts govern. The gate was live and
  //     correct — replayed in an isolated clone it returns rc=1 and names all
  //     three receipts — so the commit went in with `--no-verify` or with
  //     SR_RECEIPT_GATE_BYPASS=1. Neither left a record: the bypass printed
  //     ONE stderr line, only on the REFUSE path, and wrote nothing to disk.
  //     A bypass is now written to the audit log in BOTH directions.
  const auditLog = join(tmp, 'audit.jsonl');
  const prevAuditLog = process.env.SR_AUDIT_LOG;
  process.env.SR_AUDIT_LOG = auditLog;
  const bypassed = recordBypass({
    staged: ['src/data/exams/uganda/uneb.ts'],
    allow: false,
    rc: 1,
    block: ['some.receipt.json: applied = "false"'],
  });
  check(bypassed.ok === true && existsSync(auditLog), 'a bypass writes a durable audit line', bypassed.error || '');
  let auditRec = null;
  try {
    auditRec = JSON.parse(readFileSync(auditLog, 'utf8').trim().split('\n').pop());
  } catch {
    auditRec = null;
  }
  check(
    !!auditRec && auditRec.event === 'bypass' && auditRec.verdict === 'REFUSE' && auditRec.rc === 1,
    'the audit line records the event, the verdict and the rc',
    auditRec ? JSON.stringify({ e: auditRec.event, v: auditRec.verdict, rc: auditRec.rc }) : 'unreadable',
  );
  check(
    !!auditRec && Array.isArray(auditRec.paths) && auditRec.paths[0] === 'src/data/exams/uganda/uneb.ts',
    'the audit line records the paths that were waved through',
    auditRec ? JSON.stringify(auditRec.paths) : 'no paths',
  );
  // An OVERRIDE must be distinguishable from a clean allow: the record says
  // what the gate said (would_refuse) and which receipts said no (block).
  const overrideRec = (() => {
    const p2 = join(tmp, 'audit-override.jsonl');
    process.env.SR_AUDIT_LOG = p2;
    recordBypass({
      staged: ['src/data/exams/uganda/uneb.ts'],
      allow: true,
      rc: 0,
      block: ['some.receipt.json: applied = "false"'],
      wouldRefuse: true,
    });
    try {
      return JSON.parse(readFileSync(p2, 'utf8').trim().split('\n').pop());
    } catch {
      return null;
    }
  })();
  check(
    !!overrideRec &&
      overrideRec.verdict === 'ALLOW' &&
      overrideRec.would_refuse === true &&
      Array.isArray(overrideRec.block) &&
      overrideRec.block.length === 1,
    'an override records both the final verdict and the refusal it overrode',
    overrideRec ? JSON.stringify({ v: overrideRec.verdict, w: overrideRec.would_refuse, b: overrideRec.block }) : 'unreadable',
  );
  process.env.SR_AUDIT_LOG = auditLog;
  // The bypass env var must be read at CALL time, or the control above could
  // never have exercised the path at all.
  const prevBypass = process.env.SR_RECEIPT_GATE_BYPASS;
  process.env.SR_RECEIPT_GATE_BYPASS = '1';
  const bypassOn = bypassRequested();
  process.env.SR_RECEIPT_GATE_BYPASS = '0';
  const bypassOff = bypassRequested();
  if (prevBypass === undefined) delete process.env.SR_RECEIPT_GATE_BYPASS;
  else process.env.SR_RECEIPT_GATE_BYPASS = prevBypass;
  check(
    bypassOn === true && bypassOff === false,
    'the bypass flag is read at call time',
    `on=${bypassOn} off=${bypassOff}`,
  );
  // A broken audit trail must never break a commit: the writer returns a result
  // object and does not throw, even when the destination is impossible.
  // The impossible path here is a FILE used as a directory (ENOTDIR) — a
  // deterministic, instant failure. A procfs path is NOT used: mkdirSync on
  // /proc hangs forever on this host, which is why the writer never creates
  // directories at all.
  const badWrite = writeAudit
    ? writeAudit({ event: 'bypass' }, join(tmp, 'audit.jsonl', 'nested.jsonl'))
    : { ok: false, error: 'audit module missing' };
  check(
    badWrite.ok === false && typeof badWrite.error === 'string',
    'a failed audit write is reported, not thrown',
    badWrite.error || 'ok=true (the write should have failed)',
  );
  const missingDir = writeAudit
    ? writeAudit({ event: 'bypass' }, join(tmp, 'no-such-dir', 'audit.jsonl'))
    : { ok: false, error: 'audit module missing' };
  check(
    missingDir.ok === false && /does not exist/.test(missingDir.error || ''),
    'a missing audit directory is reported, never created',
    missingDir.error || 'ok=true (it should have refused to create a directory)',
  );
  if (prevAuditLog === undefined) delete process.env.SR_AUDIT_LOG;
  else process.env.SR_AUDIT_LOG = prevAuditLog;

  console.log(
    fails === 0
      ? `SELFTEST OK (${total - fails}/${total} controls)`
      : `SELFTEST FAILED (${fails} failing control(s), ${total} total)`,
  );
  process.exit(fails === 0 ? 0 : 1);
}

// The banner for the INERT case. It must be impossible to read as a pass: the
// 0405Z deploy guard and the pre-commit hook both branch on the exit code, but a
// human reading deploy logs reads this text.
function printInert(storePath) {
  console.error(`\n\x1b[33msr-receipt-gate: INERT — RECEIPT STORE NOT FOUND\x1b[0m — ${storePath}`);
  console.error('  No receipt was read, so NOTHING was adjudicated. This is NOT a pass.');
  console.error('  The receipt store lives outside this repo, so on a host where it is not');
  console.error('  mounted every deploy would be waved through by a gate that read nothing.');
  console.error('  Mount the store, or point SR_PATCH_DIR at the directory holding the *.receipt.json files.');
}

// Only act when run directly; importing this file for judgeReceipt()/gate() in a
// test must not execute the CLI branch.
const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
const argv = process.argv.slice(2);
if (!isMain) {
  // imported as a module — export and stop
} else if (argv.includes('--selfcheck')) {
  selfcheck();
} else if (argv.includes('--worktree')) {
  const files = dirtyShippedFiles();
  if (!files.length) {
    console.error('sr-receipt-gate: OK (no dirty shipped-content files)');
    process.exit(0);
  }
  const res = gate(files);
  if (res.inert) {
    printInert(res.storePath);
    process.exit(res.rc);
  }
  printWarns(res.warn || []);
  if (res.allow) {
    console.error(
      `sr-receipt-gate: OK (${files.length} dirty shipped-content file(s), none governed by a refusing receipt)`,
    );
    process.exit(0);
  }
  console.error(
    `\n\x1b[31msr-receipt-gate: DEPLOY REFUSED\x1b[0m — ${files.length} dirty shipped-content file(s) are governed by a receipt that refuses:`,
  );
  res.block.forEach((b) => console.error(`  - ${b}`));
  console.error('\n  A deploy builds the WORKTREE, not a commit, so the pre-commit hook cannot see');
  console.error('  any of this. Wire this mode into the deploy path, or deploy from clean HEAD.');
  process.exit(res.rc);
} else {
  const fi = argv.indexOf('--files');
  const staged =
    fi >= 0
      ? argv[fi + 1].split(',').map((s) => s.trim()).filter(Boolean)
      : stagedFiles();
  const res = gate(staged);
  if (res.inert) {
    printInert(res.storePath);
    process.exit(res.rc);
  }
  printWarns(res.warn || []);
  const bypassing = bypassRequested();
  if (bypassing) {
    // Record the bypass BEFORE acting on it, so the evidence exists even if
    // the process dies on the next line. verdict is the FINAL outcome; the
    // refusal it overrode is kept in `block` and `would_refuse`.
    recordBypass({
      staged,
      // The FINAL outcome. When the flag overrides a refusal the effective
      // verdict is ALLOW, and `would_refuse` keeps the refusal that was
      // overridden, so an override can never be mistaken for a clean allow.
      allow: res.allow || bypassing,
      rc: res.allow || bypassing ? 0 : res.rc,
      block: res.block || [],
      wouldRefuse: !res.allow,
    });
  }
  if (res.allow) {
    if (res.note) console.error(`sr-receipt-gate: OK (${res.note})`);
    if (bypassing) {
      console.error('  !! SR_RECEIPT_GATE_BYPASS=1 was set — operator bypass, RECORDED in the audit log.');
    }
    process.exit(0);
  }
  if (bypassing) {
    // THE DOCUMENTED ESCAPE HATCH, honoured ONLY on the commit path, and only
    // after the audit line above has been written. The header of this file has
    // always claimed the flag "bypasses"; the implementation never did — it
    // printed one stderr line and then REFUSED anyway, so the flag was a
    // documented hatch that no hatch could open (the same class as the 0405Z
    // --worktree branch that did not exist). It is honoured now, and every
    // use of it is on the record: ts, the staged paths, the verdict, and the
    // names of the receipts that said no.
    // The DEPLOY path (--worktree) does NOT honour this flag: a deploy is not
    // a commit, and the operator's deploy decision must be made explicitly.
    console.error('\n\x1b[31msr-receipt-gate: COMMIT REFUSED\x1b[0m — but SR_RECEIPT_GATE_BYPASS=1 is set.');
    res.block.forEach((b) => console.error(`  - ${b}`));
    console.error('  !! OPERATOR BYPASS: this commit is ALLOWED despite the refusal above.');
    console.error('     The bypass is RECORDED in the audit log (ts, paths, verdict, receipts).');
    console.error('     The deploy path (--worktree) does NOT honour this flag.');
    process.exit(0);
  }
  console.error('\n\x1b[31msr-receipt-gate: COMMIT REFUSED\x1b[0m');
  res.block.forEach((b) => console.error(`  - ${b}`));
  console.error('\n  A patch receipt says this edit did NOT land cleanly. Fix the content, or');
  console.error('  land the repair with a NEW receipt — do not commit against a rejected one.');
  console.error('  Context: telegram-inbox.txt 2026-10-20T22:09:33Z (commit 239e1f88).\n');
  process.exit(res.rc);
}
