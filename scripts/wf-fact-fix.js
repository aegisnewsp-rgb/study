export const meta = {
  name: 'sr-fact-fix',
  description: 'Apply the 42 adversarially-confirmed factual corrections, one agent per note, with an independent re-derivation before each edit',
  phases: [{ title: 'Fix', detail: 'per-file: re-verify the fact, then Edit the correction in place' }],
}

const NOTES = '/srv/studyroadmap/src/content/notes'
const ERR_JSON = '/tmp/sr-fact-errors-byfile.json'

const FILES = [
  'fmge/forensic/forens-001.md', 'fmge/forensic/forens-006.md', 'fmge/forensic/forens-002.md',
  'fmge/forensic/forens-004.md', 'fmge/microbiology/microb-004.md', 'fmge/microbiology/microb-006.md',
  'neet/physics/phy-005.md', 'neet/physics/kinetic-theory.md', 'neet/physics/phy-024.md',
  'neet/physics/phy-018.md', 'neet/physics/atoms.md', 'neet/botany/bot-017.md', 'neet/botany/bot-009.md',
  'neet/botany/bot-018.md', 'neet/botany/bot-020.md', 'neet/botany/bot-002.md', 'neet/botany/bot-013.md',
  'jeemain/physics/phy-021.md', 'jeemain/physics/phy-007.md', 'jeeadvanced/chemistry/chem-009.md',
  'jeeadvanced/chemistry/chem-016.md', 'jeeadvanced/chemistry/chem-020.md', 'jeeadvanced/chemistry/chem-017.md',
  'jeeadvanced/chemistry/chem-014.md', 'jeeadvanced/chemistry/chem-018.md', 'ssc-cgl/reasoning/rs-016.md',
  'ssc-cgl/reasoning/rs-008.md', 'ssc-cgl/reasoning/rs-013.md', 'ssc-cgl/reasoning/rs-001.md',
  'ugc-net/paper1/p1-008.md', 'ugc-net/paper1/p1-009.md', 'cs-exec/taxation/taxati-001.md',
  'cs-exec/taxation/taxati-002.md', 'cs-exec/taxation/taxati-004.md',
]

const FIX_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    file: { type: 'string' },
    edits_applied: { type: 'integer' },
    edits_skipped: { type: 'integer' },
    details: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          status: { type: 'string', enum: ['applied', 'skipped-false-alarm', 'skipped-not-found', 'skipped-other'] },
          what: { type: 'string', description: 'short: the fact corrected (or why skipped)' },
        },
        required: ['status', 'what'],
      },
    },
    stillBuilds: { type: 'boolean', description: 'true if the markdown is still structurally intact (frontmatter + tier markers preserved)' },
  },
  required: ['file', 'edits_applied', 'edits_skipped', 'details', 'stillBuilds'],
}

phase('Fix')
const results = await parallel(FILES.map((rel) => () => agent(
  `You are correcting confirmed factual errors in a StudyRoadmap study note.\n\n` +
  `1. Run: \`node -e 'const b=require("${ERR_JSON}"); console.log(JSON.stringify(b["${rel}"],null,2))'\`  (or Read ${ERR_JSON} and find the "${rel}" key) to get the list of confirmed errors for THIS note. Each has: quote (the wrong text), why (what's wrong + the correct fact, already web-verified by a prior adversarial step), fix (suggested corrected text).\n` +
  `2. Read the note at ${NOTES}/${rel} in full.\n` +
  `3. For EACH error: independently confirm the correct fact from your own knowledge. If you AGREE it is wrong, use the Edit tool to replace the offending text with a correct, well-phrased version (use the suggested fix as a guide but write clean prose/markdown; keep tier markers 🟢🟡🔴, tables, and frontmatter intact). If the note CONTRADICTS itself elsewhere on the same fact, make it consistent. If you are confident the original was actually CORRECT (a real false-alarm), SKIP it and say why.\n` +
  `4. Do NOT introduce new claims beyond the correction. Do NOT touch unrelated content. Preserve exact markdown structure.\n` +
  `5. After editing, re-read the changed region to confirm it reads correctly and structure is intact.\n\n` +
  `Return the structured result (edits_applied, edits_skipped, per-edit details, stillBuilds).`,
  { label: `fix:${rel}`, phase: 'Fix', schema: FIX_SCHEMA },
)))

const ok = results.filter(Boolean)
return {
  filesProcessed: ok.length,
  totalApplied: ok.reduce((s, r) => s + (r.edits_applied || 0), 0),
  totalSkipped: ok.reduce((s, r) => s + (r.edits_skipped || 0), 0),
  structuralConcerns: ok.filter((r) => r.stillBuilds === false).map((r) => r.file),
  perFile: ok,
}
