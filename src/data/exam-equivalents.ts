// Cross-country / cross-exam equivalents used to render "Related exams" internal links.
// Single source of truth — imported by the exam hub, subject index, and topic note pages.
// Each call site filters these against the set of exams that actually have a notes hub,
// so listing an exam here that has no hub yet never produces a 404.

export type ExamEquivalent = { id: string; name: string; flag: string };

export const EXAM_EQUIVALENTS: Record<string, Array<{id: string; name: string; flag: string}>> = {
  // ── Medical / Health Sciences ───────────────────────────────
  'neet':       [{id:'mdcat', name:'MDCAT (Pakistan)', flag:'🇵🇰'}, {id:'jamb', name:'JAMB (Nigeria)', flag:'🇳🇬'}],
  'mdcat':      [{id:'neet', name:'NEET UG (India)', flag:'🇮🇳'}, {id:'jamb', name:'JAMB (Nigeria)', flag:'🇳🇬'}],
  'jamb':       [{id:'neet', name:'NEET UG (India)', flag:'🇮🇳'}, {id:'mdcat', name:'MDCAT (Pakistan)', flag:'🇵🇰'}],
  'fmge':       [{id:'mdcat', name:'MDCAT (Pakistan)', flag:'🇵🇰'}],
  'aiims-mbbs': [{id:'neet', name:'NEET UG (India)', flag:'🇮🇳'}],
  'jipmer':     [{id:'neet', name:'NEET UG (India)', flag:'🇮🇳'}],

  // ── Engineering / Technology ───────────────────────────────
  'jeemain':    [{id:'jeeadvanced', name:'JEE Advanced (India)', flag:'🇮🇳'}, {id:'ecat', name:'ECAT (Pakistan)', flag:'🇵🇰'}],
  'jeeadvanced':[{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}, {id:'ecat', name:'ECAT (Pakistan)', flag:'🇵🇰'}],
  'ecat':       [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}, {id:'jeeadvanced', name:'JEE Advanced (India)', flag:'🇮🇳'}],
  'comedk':     [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}, {id:'kcet', name:'KCET (India)', flag:'🇮🇳'}],
  'kcet':       [{id:'comedk', name:'COMED-K (India)', flag:'🇮🇳'}, {id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}],
  'bitsat':     [{id:'vitee', name:'VITEEE (India)', flag:'🇮🇳'}, {id:'manipal-met', name:'Manipal MET (India)', flag:'🇮🇳'}],
  'vitee':      [{id:'bitsat', name:'BITSAT (India)', flag:'🇮🇳'}, {id:'manipal-met', name:'Manipal MET (India)', flag:'🇮🇳'}],
  'manipal-met':[{id:'vitee', name:'VITEEE (India)', flag:'🇮🇳'}, {id:'bitsat', name:'BITSAT (India)', flag:'🇮🇳'}],
  'mht-cet':    [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}, {id:'comedk', name:'COMED-K (India)', flag:'🇮🇳'}],
  'ap-eapcet':  [{id:'ts-eamcet', name:'TS-EAMCET (India)', flag:'🇮🇳'}, {id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}],
  'ts-eamcet':  [{id:'ap-eapcet', name:'AP-EAMCET (India)', flag:'🇮🇳'}, {id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}],
  'gujcet':     [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}],
  'keam':       [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}],
  'wbjee':      [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}],
  'lpunest':    [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}],
  'nata':       [{id:'jeeupsee', name:'UPSEE (India)', flag:'🇮🇳'}],
  'buet-adm':   [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}, {id:'ecat', name:'ECAT (Pakistan)', flag:'🇵🇰'}],
  'gaokao':     [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}, {id:'ecat', name:'ECAT (Pakistan)', flag:'🇵🇰'}],
  'ege':        [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}, {id:'gaokao', name:'GAOKAO (China)', flag:'🇨🇳'}],
  'ioe-ent':    [{id:'jeemain', name:'JEE Main (India)', flag:'🇮🇳'}],

  // ── Law ───────────────────────────────────────────────────
  'clat':       [{id:'lat', name:'LAT (Pakistan)', flag:'🇵🇰'}, {id:'ailet', name:'AILET (India)', flag:'🇮🇳'}],
  'lat':        [{id:'clat', name:'CLAT (India)', flag:'🇮🇳'}],
  'ailet':      [{id:'clat', name:'CLAT (India)', flag:'🇮🇳'}, {id:'lat', name:'LAT (Pakistan)', flag:'🇵🇰'}],
  'lsat':       [{id:'clat', name:'CLAT (India)', flag:'🇮🇳'}, {id:'lat', name:'LAT (Pakistan)', flag:'🇵🇰'}],
  'llb-ent':    [{id:'clat', name:'CLAT (India)', flag:'🇮🇳'}, {id:'lat', name:'LAT (Pakistan)', flag:'🇵🇰'}],

  // ── MBA / Management ─────────────────────────────────────
  'cat':        [{id:'mat', name:'MAT (India)', flag:'🇮🇳'}, {id:'nmat', name:'NMAT (India)', flag:'🇮🇳'}, {id:'xat', name:'XAT (India)', flag:'🇮🇳'}, {id:'gmat', name:'GMAT (Global)', flag:'🌍'}],
  'mat':        [{id:'cat', name:'CAT (India)', flag:'🇮🇳'}, {id:'nmat', name:'NMAT (India)', flag:'🇮🇳'}, {id:'xat', name:'XAT (India)', flag:'🇮🇳'}],
  'nmat':       [{id:'cat', name:'CAT (India)', flag:'🇮🇳'}, {id:'mat', name:'MAT (India)', flag:'🇮🇳'}, {id:'snap', name:'SNAP (India)', flag:'🇮🇳'}],
  'xat':        [{id:'cat', name:'CAT (India)', flag:'🇮🇳'}, {id:'mat', name:'MAT (India)', flag:'🇮🇳'}, {id:'snap', name:'SNAP (India)', flag:'🇮🇳'}],
  'snap':       [{id:'cat', name:'CAT (India)', flag:'🇮🇳'}, {id:'nmat', name:'NMAT (India)', flag:'🇮🇳'}, {id:'xat', name:'XAT (India)', flag:'🇮🇳'}],
  'cmat':       [{id:'mat', name:'MAT (India)', flag:'🇮🇳'}, {id:'cat', name:'CAT (India)', flag:'🇮🇳'}],

  // ── Common University / Central Exams ─────────────────────
  'cuet':       [{id:'cuet-ug', name:'CUET-UG (India)', flag:'🇮🇳'}, {id:'cucet-pg', name:'CUCET-PG (India)', flag:'🇮🇳'}],
  'cuet-ug':    [{id:'cuet', name:'CUET (India)', flag:'🇮🇳'}],
  'cucet-pg':   [{id:'cuet', name:'CUET (India)', flag:'🇮🇳'}, {id:'gate', name:'GATE (India)', flag:'🇮🇳'}],
  'du-ad':      [{id:'du-adm', name:'DU-Admin (India)', flag:'🇮🇳'}, {id:'cuet', name:'CUET (India)', flag:'🇮🇳'}],
  'du-adm':     [{id:'du-ad', name:'DU-Arts (India)', flag:'🇮🇳'}],

  // ── Postgraduate / Academic ────────────────────────────────
  'gate':       [{id:'cucet-pg', name:'CUCET-PG (India)', flag:'🇮🇳'}, {id:'ugc-net', name:'UGC NET (India)', flag:'🇮🇳'}],
  'ugc-net':    [{id:'gate', name:'GATE (India)', flag:'🇮🇳'}],
  'gre':        [{id:'gmat', name:'GMAT (Global)', flag:'🌍'}],
  'gmat':       [{id:'gre', name:'GRE (Global)', flag:'🌍'}, {id:'cat', name:'CAT (India)', flag:'🇮🇳'}],

  // ── English Language Tests ────────────────────────────────
  'ielts':      [{id:'toefl', name:'TOEFL (Global)', flag:'🌍'}, {id:'pte', name:'PTE (Global)', flag:'🌍'}],
  'toefl':      [{id:'ielts', name:'IELTS (Global)', flag:'🌍'}, {id:'pte', name:'PTE (Global)', flag:'🌍'}],
  'pte':        [{id:'ielts', name:'IELTS (Global)', flag:'🌍'}, {id:'toefl', name:'TOEFL (Global)', flag:'🌍'}],

  // ── Teaching ──────────────────────────────────────────────
  'ctet':       [{id:'uptet', name:'UPTET (India)', flag:'🇮🇳'}],
  'uptet':      [{id:'ctet', name:'CTET (India)', flag:'🇮🇳'}],

  // ── Banking ───────────────────────────────────────────────
  'ibps-po':    [{id:'ibps-clerk', name:'IBPS Clerk (India)', flag:'🇮🇳'}, {id:'ssc-cgl', name:'SSC CGL (India)', flag:'🇮🇳'}],
  'ibps-clerk': [{id:'ibps-po', name:'IBPS PO (India)', flag:'🇮🇳'}],

  // ── Civil Services ────────────────────────────────────────
  'upsc':       [{id:'fpsc-cce', name:'CSS/FPSC (Pakistan)', flag:'🇵🇰'}, {id:'jamb', name:'JAMB (Nigeria)', flag:'🇳🇬'}],
  'uppsc':      [{id:'upsc', name:'UPSC (India)', flag:'🇮🇳'}, {id:'ras', name:'RAS (India)', flag:'🇮🇳'}],
  'ras':        [{id:'upsc', name:'UPSC (India)', flag:'🇮🇳'}, {id:'uppsc', name:'UPPSC (India)', flag:'🇮🇳'}],
  'bpsc':       [{id:'upsc', name:'UPSC (India)', flag:'🇮🇳'}, {id:'bpsc', name:'BPSC (India)', flag:'🇮🇳'}],

  // ── Defence ───────────────────────────────────────────────
  'nda':        [{id:'cds', name:'CDS (India)', flag:'🇮🇳'}],
  'cds':        [{id:'nda', name:'NDA (India)', flag:'🇮🇳'}],

  // ── Chartered Accountancy / Finance ────────────────────────
  'ca-found':   [{id:'cma', name:'CMA (India)', flag:'🇮🇳'}, {id:'cs-exec', name:'CS Executive (India)', flag:'🇮🇳'}],
  'cma':        [{id:'ca-found', name:'CA Foundation (India)', flag:'🇮🇳'}],
  'cs-exec':    [{id:'ca-found', name:'CA Foundation (India)', flag:'🇮🇳'}, {id:'cma', name:'CMA (India)', flag:'🇮🇳'}],
  'ican':       [{id:'ca-found', name:'CA Foundation (India)', flag:'🇮🇳'}],

  // ── Secondary / National Boards ──────────────────────────
  'neco':       [{id:'waec', name:'WAEC (West Africa)', flag:'🇳🇬'}, {id:'nabteb', name:'NABTEB (Nigeria)', flag:'🇳🇬'}],
  'waec':       [{id:'neco', name:'NECO (Nigeria)', flag:'🇳🇬'}, {id:'nabteb', name:'NABTEB (Nigeria)', flag:'🇳🇬'}],
  'nabteb':     [{id:'waec', name:'WAEC (Nigeria)', flag:'🇳🇬'}, {id:'neco', name:'NECO (Nigeria)', flag:'🇳🇬'}],
  'ncee':       [{id:'waec', name:'WAEC (Nigeria)', flag:'🇳🇬'}, {id:'neco', name:'NECO (Nigeria)', flag:'🇳🇬'}],

  // ── Sub-national / State Exams ────────────────────────────
  'ssc-cgl':    [{id:'bpsc', name:'BPSC (India)', flag:'🇮🇳'}, {id:'uppsc', name:'UPPSC (India)', flag:'🇮🇳'}],
  'ssc-cgl-tier2': [{id:'ssc-cgl', name:'SSC CGL (India)', flag:'🇮🇳'}],
  'tnpsc':      [{id:'upsc', name:'UPSC (India)', flag:'🇮🇳'}, {id:'bpsc', name:'BPSC (India)', flag:'🇮🇳'}],
  'kpsc':       [{id:'upsc', name:'UPSC (India)', flag:'🇮🇳'}, {id:'ras', name:'RAS (India)', flag:'🇮🇳'}],

  // ── International University Admissions ───────────────────
  'acsee':      [{id:'waec', name:'WAEC (Nigeria)', flag:'🇳🇬'}, {id:'ncee', name:'NCEE (Nigeria)', flag:'🇳🇬'}],
  'legon-adm':  [{id:'waec', name:'WAEC (Nigeria)', flag:'🇳🇬'}, {id:'jamb', name:'JAMB (Nigeria)', flag:'🇳🇬'}],
  'aau':        [{id:'jamb', name:'JAMB (Nigeria)', flag:'🇳🇬'}],
  'emu-entrance': [{id:'aau', name:'AAU (Ethiopia)', flag:'🇪🇹'}],
};
