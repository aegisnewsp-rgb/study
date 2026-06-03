export const meta = {
  name: 'sr-content-verify',
  description: 'Adversarially verify the title fixes + hunt for fabricated/incorrect content in high-traffic indexed notes',
  phases: [
    { title: 'VerifyTitles', detail: 'confirm each cleaned/expanded title accurately describes its body + is index-worthy' },
    { title: 'HuntFabrication', detail: 'per-exam sweep for fabricated acronyms/mnemonics/laws and clear factual errors' },
    { title: 'RefuteFindings', detail: 'skeptical second pass — refute each finding before it is acted on' },
  ],
}

const NOTES = '/srv/studyroadmap/src/content/notes'

// Embedded defaults (robust to args arriving as string/undefined); args may override.
const A = (() => { try { return typeof args === 'string' ? JSON.parse(args) : (args || {}) } catch { return {} } })()

const DEFAULT_PROMOTED = [
  'cuet/physics/phy-020.md', 'cuet/physics/phy-021.md', 'jeeadvanced/mathematics/math-008.md',
  'jeeadvanced/mathematics/math-011.md', 'jeeadvanced/physics/phy-013.md', 'jeeadvanced/physics/phy-020.md',
  'jeeadvanced/physics/phy-021.md', 'jeemain/physics/phy-013.md', 'jeemain/physics/phy-021.md',
  'neet/physics/phy-020.md', 'neet/physics/phy-021.md', 'ugc-net/paper1/p1-007.md',
  'sbi-clerk/general-awareness/genera-002.md', 'sbi-clerk/general-awareness/genera-003.md',
  'sbi-clerk/general-awareness/genera-004.md', 'sbi-clerk/general-awareness/genera-005.md',
  'sbi-po/general-awareness/genera-001.md', 'sbi-po/general-awareness/genera-002.md',
  'fmge/forensic/forens-001.md', 'fmge/forensic/forens-002.md', 'fmge/microbiology/microb-001.md',
  'fmge/microbiology/microb-002.md', 'kuccps/subject-clusters/subjec-001.md', 'kuccps/subject-clusters/subjec-002.md',
  'legon-adm/wassce-subjects/wassce-001.md', 'legon-adm/wassce-subjects/wassce-003.md',
  'muet/listening/listen-001.md', 'muet/listening/listen-002.md', 'nabe/gk/gk-001.md', 'nabe/gk/gk-002.md',
]
const DEFAULT_HUNT = [
  { exam: 'fmge', subject: 'forensic' }, { exam: 'fmge', subject: 'microbiology' },
  { exam: 'neet', subject: 'physics' }, { exam: 'neet', subject: 'botany' },
  { exam: 'jeemain', subject: 'physics' }, { exam: 'jeeadvanced', subject: 'chemistry' },
  { exam: 'ssc-cgl', subject: 'reasoning' }, { exam: 'ugc-net', subject: 'paper1' },
  { exam: 'cs-exec', subject: 'taxation' },
]
const promoted = A.promoted || DEFAULT_PROMOTED
const huntExams = A.huntExams || DEFAULT_HUNT

const TITLE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    file: { type: 'string' },
    titleAccurate: { type: 'boolean', description: 'does the frontmatter topicName accurately + completely name the body\'s primary topic?' },
    indexWorthy: { type: 'boolean', description: 'is this substantive, accurate, exam-relevant content suitable for public Google indexing (NOT thin/templated/AI-slop)?' },
    issue: { type: 'string', description: 'precise problem, or "none"' },
    suggestedTitle: { type: 'string', description: 'a better topicName if titleAccurate=false, else "N/A"' },
  },
  required: ['file', 'titleAccurate', 'indexWorthy', 'issue', 'suggestedTitle'],
}

const FINDING_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          file: { type: 'string' },
          type: { type: 'string', enum: ['fabricated-acronym', 'fabricated-mnemonic', 'fabricated-law-or-citation', 'wrong-fact', 'wrong-number-or-date', 'other'] },
          quote: { type: 'string', description: 'the exact offending text from the note' },
          why: { type: 'string', description: 'why it is fabricated/wrong, with the correct fact if known' },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
        },
        required: ['file', 'type', 'quote', 'why', 'confidence'],
      },
    },
  },
  required: ['findings'],
}

const REFUTE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    file: { type: 'string' },
    quote: { type: 'string' },
    verdict: { type: 'string', enum: ['confirmed-problem', 'false-alarm'] },
    reasoning: { type: 'string' },
    correctedText: { type: 'string', description: 'exact replacement text if confirmed, else "N/A"' },
  },
  required: ['file', 'quote', 'verdict', 'reasoning', 'correctedText'],
}

// ---------- Phase 1: verify title fixes ----------
phase('VerifyTitles')
const titleResults = await parallel(promoted.map((rel) => () => agent(
  `Read the StudyRoadmap study note at ${NOTES}/${rel} (use the Read tool — read the whole file).\n` +
  `Its frontmatter \`topicName\` was just cleaned (a leftover "Topic N:" placeholder prefix removed, or a bare abbreviation expanded). ` +
  `This topicName is rendered as the page <title> and <h1> and is used for SEO.\n\n` +
  `Judge two things strictly and independently:\n` +
  `1. titleAccurate: does the topicName accurately and completely name the PRIMARY topic the body actually teaches? (If the body covers a different/narrower/broader topic, it's NOT accurate.)\n` +
  `2. indexWorthy: is the body substantive, factually sound, exam-relevant content fit for public Google indexing — NOT thin, templated, or AI-slop?\n` +
  `Report precisely. If titleAccurate is false, propose a better topicName.`,
  { label: `title:${rel}`, phase: 'VerifyTitles', schema: TITLE_SCHEMA },
)))

// ---------- Phase 2: hunt fabricated/incorrect content (find -> refute) ----------
phase('HuntFabrication')
const refuted = await pipeline(
  huntExams,
  ({ exam, subject }) => agent(
    `You are a domain expert fact-checking AI-generated study notes for the Indian/international competitive-exam site StudyRoadmap.\n` +
    `Look at the indexed notes under ${NOTES}/${exam}/${subject}/ . List the .md files (Bash \`ls\`), then read several of them.\n\n` +
    `Hunt SPECIFICALLY for FABRICATED or clearly WRONG content — the kind an LLM invents and a student would be embarrassed to repeat in an exam:\n` +
    `- fabricated acronyms/mnemonics presented as established (e.g. a made-up "DIMIA" mnemonic),\n` +
    `- invented laws, cases, sections, theorems, or citations,\n` +
    `- wrong facts, wrong numbers, wrong dates, wrong formulae.\n\n` +
    `Be conservative: only report things you are genuinely confident are fabricated/wrong. Quote the EXACT offending text and give the correct fact. ` +
    `Return at most the 6 strongest findings. If the notes look sound, return an empty findings array.`,
    { label: `hunt:${exam}/${subject}`, phase: 'HuntFabrication', schema: FINDING_SCHEMA },
  ),
  // refute stage — runs per-slice as soon as its hunt completes
  (res, slice) => {
    const fs = (res && res.findings) || []
    if (!fs.length) return []
    return parallel(fs.map((f) => () => agent(
      `Adversarially REFUTE this alleged content problem in a StudyRoadmap note. Default to "false-alarm" unless you are confident it is a real fabrication/error.\n` +
      `File: ${NOTES}/${f.file} (Read it fresh for context).\n` +
      `Alleged ${f.type}: "${f.quote}"\n` +
      `Claim: ${f.why}\n\n` +
      `Use WebSearch/WebFetch against authoritative sources to check. Is the flagged text genuinely fabricated or factually wrong, or is it legitimate (a real but unfamiliar term, an acceptable mnemonic, a correct fact)? ` +
      `If confirmed a real problem, give exact corrected replacement text. Verdict confirmed-problem ONLY if you verified it is wrong.`,
      { label: `refute:${f.file}`, phase: 'RefuteFindings', schema: REFUTE_SCHEMA },
    ).then((v) => ({ ...f, refute: v })))).then((arr) => arr.filter(Boolean))
  },
)

return {
  titles: titleResults.filter(Boolean),
  confirmed: refuted.flat().filter(Boolean).filter((x) => x.refute && x.refute.verdict === 'confirmed-problem'),
  allFindings: refuted.flat().filter(Boolean),
}
