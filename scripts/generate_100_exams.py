#!/usr/bin/env python3
"""
Smart 100-exam expansion.
Exams share existing subject pools. Only creates new notes for genuinely novel subjects.
Exports to src/data/exams-new/ and src/content/notes-new/ for review before going live.
"""

import os, re
from pathlib import Path

EXAMS_DIR  = Path("/home/node/workspace/studyroadmap-astro/src/data/exams")
NOTES_DIR  = Path("/home/node/workspace/studyroadmap-astro/src/content/notes")
OUT_EXAMS  = Path("/home/node/workspace/studyroadmap-astro/src/data/exams-new")
OUT_NOTES  = Path("/home/node/workspace/studyroadmap-astro/src/content/notes-new")
WORKSPACE  = Path("/home/node/workspace/studyroadmap-astro")

# ─── Subject pool mapping ──────────────────────────────────────────────────────
# Key = our internal pool id, Value = (slug, display name)
# Exams that map to the same pool share notes content.
POOL_SLUGS = {
    "physics":         ("physics",         "Physics"),
    "chemistry":       ("chemistry",       "Chemistry"),
    "physical-chem":   ("physical-chemistry","Physical Chemistry"),
    "organic-chem":    ("organic-chemistry","Organic Chemistry"),
    "inorganic-chem":  ("inorganic-chemistry","Inorganic Chemistry"),
    "biology":         ("biology",         "Biology"),
    "botany":          ("botany",          "Botany"),
    "zoology":         ("zoology",         "Zoology"),
    "mathematics":     ("mathematics",     "Mathematics"),
    "english":         ("english",         "English"),
    "quantitative":    ("quantitative-techniques","Quantitative Techniques"),
    "reasoning":       ("reasoning",       "Reasoning"),
    "general-awareness":("awareness",       "General Awareness"),
    "quant":           ("quant",           "Quantitative Aptitude"),
    "legal-reasoning": ("legal-reasoning", "Legal Reasoning"),
    "logical-reasoning":("logical-reasoning","Logical Reasoning"),
    "current-affairs": ("current-affairs", "Current Affairs"),
    "gs1":             ("gs1",             "GS1 (History/Geography)"),
    "gs2":             ("gs2",             "GS2 (Polity/Governance)"),
    "varc":            ("varc",            "VARC"),
    "dilr":            ("dilr",            "DILR"),
    "qa":              ("qa",              "Quantitative Ability"),
    # Novel subjects (no pool yet) — we will generate notes for these
    "economics":       None,   # novel
    "business-law":    None,   # novel
    "accounting":      None,   # novel
    "biochemistry":    None,   # novel
    "anatomy":         None,   # novel
    "pharmacology":    None,   # novel
    "pathology":       None,   # novel
    "microbiology":    None,   # novel
    "forensic":        None,   # novel
    "psm":             None,   # novel
    "child-pedagogy":  None,   # novel
    "child-dev":       None,   # novel
    "islamic-studies": None,   # novel
    "pakistan-affairs":None,   # novel
    "general-science": None,   # novel
    "geography":       None,   # novel
    "history":         None,   # novel
    "commerce":        None,   # novel
    "taxation":        None,   # novel
    "audit":           None,   # novel
    "financial-report":None,   # novel
    "company-law":     None,   # novel
    "cost-accounting":None,   # novel
    "jurisprudence":   None,   # novel
    "management":      None,   # novel
    "computer-it":     None,   # novel
    "nursing":         None,   # novel
    "sports":          None,   # novel
}

# ─── Subject pool → existing notes mapping ──────────────────────────────────────
# Which existing pool slug corresponds to which existing notes subject
POOL_TO_NOTES = {
    "physics":         "physics",
    "chemistry":       "organic-chemistry",
    "physical-chem":   "physical-chemistry",
    "organic-chem":    "organic-chemistry",
    "inorganic-chem":  "inorganic-chemistry",
    "biology":         "botany",
    "botany":          "botany",
    "zoology":         "zoology",
    "mathematics":     "mathematics",
    "english":         "english",
    "quantitative":    "quantitative-techniques",
    "reasoning":       "reasoning",
    "general-awareness":"awareness",
    "general-awareness":"awareness",
    "quant":           "quant",
    "legal-reasoning": "legal-reasoning",
    "logical-reasoning":"logical-reasoning",
    "current-affairs": "current-affairs",
    "gs1":             "gs1",
    "gs2":             "gs2",
    "varc":            "varc",
    "dilr":            "dilr",
    "qa":              "qa",
    # Novel subjects (generate new notes)
    "economics":       "economics",
    "biochemistry":    "biochemistry",
    "accounting":      "accounting",
    "jurisprudence":   "jurisprudence",
    "gk":              "current-affairs",
    "science":         "botany",
    "subject-combination": "quantitative-techniques",
    "analytical-reasoning": "logical-reasoning",
    "reading-comp":    "english",
    "decision-making": "logical-reasoning",
    "general-science": "awareness",
    "islamic-studies": "gs2",
    "pakistan-affairs":"gs2",
    "indian-polity":   "gs2",
    "history":         "gs1",
    "geography":       "gs1",
    "sindh-studies":   "gs2",
    "karnataka-specific": "gs2",
    "computer-it":     "mathematics",
    "management":      "quant",
    "business-law":    "legal-reasoning",
    "hindi":           "english",
    "filipino":         "english",
    "indonesian":       "english",
    "arabic":           "english",
    "bangla":           "english",
    "nursing":          "botany",
    "sports":           "awareness",
    "commerce":         "quant",
    "engineering-maths": "mathematics",
    "general-aptitude": "quant",
    "research":         "quant",
    "taxation":         "accounting",
    "audit":            "accounting",
    "financial-report": "accounting",
    "company-law":      "legal-reasoning",
    "cost-accounting": "accounting",
    "anatomy":         "botany",
    "physiology":      "botany",
    "pharmacology":    "botany",
    "pathology":        "botany",
    "microbiology":     "botany",
    "forensic":         "botany",
    "psm":              "botany",
    "child-pedagogy":   "gs1",
    "child-dev":        "gs1",
    "economics":        "quant",
    "mathematical-skills": "quant",
    "data-analysis":     "dilr",
    "language-comprehension": "varc",
    "mental-ability":   "logical-reasoning",
    "verbal":           "english",
    "logic":           "logical-reasoning",
    "banking":         "quant",
    "finance":         "quant",
    "surgery":         "botany",
    "family-medicine": "botany",
    "medical-knowledge":"botany",
    "clinical-skills": "botany",
    "medicine":        "botany",
    "pharmacy":        "botany",
    "academics":       "quant",
    "academic-potential": "quant",
    "subject-knowledge": "quant",
    "subject-specific":  "quant",
    "paper1-research":   "quant",
    "paper1":           "quant",
    "science-stream":   "botany",
    "commerce-stream": "quant",
    "arts-stream":     "english",
    "wassce-subjects": "quant",
    "child-pedagogy": "gs1",
    "science":         "botany",
    "social":          "gs1",
    "education":       "quant",
    "political-science": "gs2",
    "hindi":           "english",
    "commerce":        "quant",
    "banking":         "quant",
    "reading":         "english",
    "writing":         "english",
    "listening":       "english",
    "speaking":        "english",
    "verbal":          "english",
}

# ─── Novel subjects → template content generator ──────────────────────────────
NOVEL_TEMPLATES = {
    "economics": {
        "topics": [
            ("Microeconomics", ["Demand-Supply, elasticity, consumer surplus, producer surplus",
                               "Theory of the firm: production functions, cost curves, market structures (perfect competition, monopoly, monopolistic competition, oligopoly",
                               "Factor markets: wage determination, rent, interest",
                               "Indifference curves, budget lines, optimal consumption"]),
            ("Macroeconomics", ["National income accounting: GDP, GNP, NDP, NNP",
                               "Inflation: types, causes, Philips curve, measurement (CPI, WPI)",
                               "Monetary policy: RBI, repo rate, CRR, SLR, money supply",
                               "Fiscal policy: government budget, taxation, public debt, deficit financing",
                               "International trade: balance of payments, exchange rates, comparative advantage",
                               "Economic growth: factors, Solow model, inclusive growth"]),
            ("Indian Economy", ["Planning: 5-year plans, NITI Aayog, targets vs achievements",
                               "Agriculture: Green Revolution, land reforms, MSP, food security",
                               "Industry: industrial policies, disinvestment, PSUs, SEZs",
                               "Banking: nationalisation, NPA, IBC, RBI autonomy",
                               "Schemes: MGNREGA, PM-KISAN, Ujjwala, Swachh Bharat, Digital India",
                               "Demographics: population trends, human development index, poverty",
                               "Globalization: LPG reforms 1991, WTO, RCEP, FTAs",
                               "Unemployment: types, Niti Aayog labour reforms, gig economy"]),
            ("Statistics & Data Interpretation", ["Mean, median, mode, standard deviation, variance",
                                                  "Correlation and regression basics",
                                                  "Index numbers: weighted index, Laspeyres, Paasche",
                                                  "Data interpretation from tables, charts, graphs"]),
            ("Development Economics", ["MDGs, SDGs, human development indices",
                                       "Poverty measurement: headcount ratio, Sen index, multidimensional poverty index",
                                       "Inequality: Gini coefficient, Lorenz curve",
                                       "Sustainable development goals and India's progress"]),
        ]
    },
    "biochemistry": {
        "topics": [
            ("Biomolecules", ["Carbohydrates: monosaccharides (glucose, fructose), disaccharides (sucrose, lactose), polysaccharides (starch, glycogen, cellulose)",
                             "Proteins: amino acids (20 standard, essential vs non-essential), peptide bonds, primary/secondary/tertiary/quaternary structure",
                             "Lipids: fatty acids (saturated/unsaturated), triglycerides, phospholipids, cholesterol, waxes",
                             "Nucleic acids: DNA (deoxyribose, double helix), RNA (ribose, single strand), nucleotides, base pairing",
                             "Enzymes: classification (6 classes), lock-and-key vs induced-fit model, Km, Vmax, enzyme kinetics, inhibition (competitive, non-competitive, uncompetitive)",
                             "Vitamins: fat-soluble (A,D,E,K) and water-soluble (B-complex, C), coenzyme function"]),
            ("Metabolism", ["Glycolysis: steps, energy yield (2 ATP net), link to Krebs cycle",
                           "Krebs cycle: acetyl-CoA entry, 8 steps, 2 CO2, 3 NADH, 1 FADH2 per cycle",
                           "Electron transport chain: complex I-IV, ATP synthase, chemiosmosis, 2.5 ATP/NADH, 1.5 ATP/FADH2",
                           "Gluconeogenesis: bypass reactions, Cori cycle, regulation",
                           "Beta-oxidation of fatty acids: activation, 2-carbon cleavages, acetyl-CoA yield",
                           "Amino acid catabolism: transamination, deamination, urea cycle, gluconeogenic amino acids",
                           "Photosynthesis: light reactions (PS II, PS I, Z-scheme), Calvin cycle (C3), C4 pathway, photorespiration"]),
            ("Physiological Chemistry", ["Blood: composition, plasma proteins (albumin, globulins, fibrinogen), RBC/WBC/platelets",
                                        "Liver functions: bilirubin metabolism, detoxification, urea cycle, glycogen storage",
                                        "Kidney: filtration, reabsorption (proximal tubule, loop of Henle, distal tubule), concentration of urine",
                                        "Hormones: insulin, glucagon, thyroid hormones, cortisol, adrenaline — mechanisms and metabolic effects",
                                        "Neurotransmitters: acetylcholine, dopamine, serotonin, GABA, norepinephrine"]),
            ("Genetics & Molecular Biology", ["DNA replication: semi-conservative, enzymes (helicase, primase, polymerase, ligase)",
                                              "Transcription: prokaryotic vs eukaryotic, RNA polymerase, processing (5' cap, poly-A tail, splicing)",
                                              "Translation: ribosome, tRNA, initiation/elongation/termination, genetic code",
                                              "Gene regulation: operon model (lac, trp), activators, repressors, epigenetics",
                                              "PCR: components, steps, applications; restriction enzymes, vectors, transformation",
                                              "DNA sequencing: Sanger method, next-generation sequencing"]),
        ]
    },
    "accounting": {
        "topics": [
            ("Accounting Fundamentals", ["Accounting concepts: going concern, consistency, matching, money measurement, dual aspect, cost concept",
                                       "Golden rules of accounting: personal, real, nominal accounts",
                                       "Journal: recording transactions, journalising, compound journal entries",
                                       "Ledger: posting from journal, balancing of accounts, trial balance",
                                       "Depreciation: straight-line, diminishing balance, units of production, treatment of capital vs revenue expenditure"]),
            ("Financial Statements", ["Trading account: gross profit, closing stock calculations",
                                     "Profit & Loss account: net profit, operating vs non-operating income/expenses",
                                     "Balance sheet: format, vertical presentation, classification of assets/liabilities",
                                     "Adjustment entries: outstanding expenses, prepaid expenses, accrued income, income received in advance, depreciation, bad debts, provision for doubtful debts",
                                     "Rectification of errors: suspense account, effect on trial balance"]),
            ("Company Accounts", ["Issue of shares: at par, premium, discount; calls in arrears, calls in advance",
                                  "Forfeiture and reissue of shares: journal entries, capital reserve",
                                  "Debentures: issue at par/premium/discount, redemption methods (in lump sum, by draw of lots, from sinking fund)",
                                  "Final accounts: preparation of company financial statements per Schedule III",
                                  "Profit prior to incorporation: calculation of ratio"]),
            ("Cost Accounting", ["Elements of cost: material, labour, overheads — classification and allocation",
                                 "Material: purchase procedure, valuation methods (FIFO, LIFO, weighted average), inventory control techniques (ABC, VED, EOQ)",
                                 "Labour: timekeeping, time booking, idle time, overtime, labour turnover",
                                 "Overheads: primary/secondary distribution, absorption costing (rate per unit, labour hour rate, machine hour rate)",
                                 "Cost sheets: tender, quotation, estimate — preparation and analysis"]),
            ("Management Accounting", ["Marginal costing: contribution, P/V ratio, break-even analysis, margin of safety, angle of incidence",
                                        "Standard costing: variance analysis (material price/cost, labour rate/efficiency, overhead volume/controllable)",
                                        "Budgetary control: functional budgets, flexible budget, cash budget, master budget",
                                        "Ratio analysis: liquidity (current, quick, cash), solvency, activity, profitability, leverage ratios; interpretation",
                                        "Funds flow and cash flow statements: schedule of changes in working capital, direct/indirect method"]),
        ]
    },
    "jurisprudence": {
        "topics": [
            ("Legal Theory", ["Meaning and nature of jurisprudence; Is jurisprudence a science or art?",
                             "Legal positivism: Austin, Hart — command theory, rule of recognition",
                             "Natural law theory: Aquinas, Fuller — relationship between law and morality",
                             "Historical school: Savigny, Maine — law as organic growth of society",
                             "Sociological school: Ehrlich, Roscoe Pound — living law, social engineering",
                             "Realism: Holmes, Cardozo — law as predictions of court behaviour",
                             "Concept of law: HLA Hart's minimum content of natural law"]),
            ("Sources of Law", ["Custom: essential elements, classification, proof, validity; difference between custom and usage",
                               "Legislation: supreme/subordinate, codifying/consolidating, declaratory; interpretation principles",
                               "Judicial precedent: ratio decidendi vs obiter dicta, binding vs persuasive precedent, stare decisis",
                               "Agreement: role in contract law; difference between contracts and other agreements"]),
            ("Legal Concepts", ["Legal rights: correlation of rights and duties, different types of rights",
                               "Ownership: factual possession, animus possidendi, characteristics (indefinite, exclusive, absolute); types of ownership",
                               "Possession: corpus + animus, kinds, protection of possession under IPC and CPC",
                               "Liability: fault-based (tort, crime), strict liability (Rylands v Fletcher), vicarious liability",
                               "Personality: natural vs legal person, corporate personality, state liability"]),
            ("Constitutional Law Concepts", ["Rule of law: Dicey's formulation, critique; alternative conceptions",
                                             "Separation of powers: legislative, executive, judicial — checks and balances",
                                             "Judicial review: constitutional basis, limitations, basic structure doctrine",
                                             "Fundamental rights: justiciability, enforceable vs non-enforceable; 9th schedule",
                                             "Amendability: Article 368, procedure, basic structure limitation"]),
            ("International Law Concepts", ["Sources: treaty, custom, general principles, judicial decisions, doctrine",
                                           "State responsibility: attribution of conduct to state, breach, countermeasures",
                                           "Settlement of disputes: peaceful means (negotiation, mediation, arbitration, judicial settlement)",
                                           "Use of force: self-defence (UN Charter Article 51), collective self-defence, humanitarian intervention"]),
        ]
    },
}

# ─── Exam definitions ──────────────────────────────────────────────────────────
# Format: (exam_id, exam_name, country, [(pool_id, num_topics)])
EXAM_DEFS = [
    # ── PCM / Engineering pool (Physics/Chemistry/Math) ────────────────────────
    ("bitsat",    "BITSAT",                    "india",       [("mathematics",15),("physics",15),("chemistry",15),("english",8)]),
    ("vitee",     "VITEEE",                   "india",       [("mathematics",15),("physics",15),("chemistry",15),("english",8)]),
    ("mht-cet",   "MHT-CET",                  "india",       [("mathematics",15),("physics",15),("chemistry",15)]),
    ("kcet",      "KCET",                     "india",       [("mathematics",15),("physics",15),("chemistry",15),("biology",10)]),
    ("wbjee",     "WBJEE",                    "india",       [("mathematics",15),("physics",15),("chemistry",15)]),
    ("comedk",    "COMEDK",                   "india",       [("mathematics",15),("physics",15),("chemistry",15)]),
    ("keam",      "KEAM",                     "india",       [("mathematics",15),("physics",15),("chemistry",15)]),
    ("gujcet",    "GUJCET",                   "india",       [("mathematics",15),("physics",15),("chemistry",15)]),
    ("jeeupsee",  "UPSEE",                    "india",       [("mathematics",15),("physics",15),("chemistry",15)]),
    ("ts-eamcet", "TS EAMCET",                "india",       [("mathematics",15),("physics",15),("chemistry",15)]),
    ("ap-eapcet", "AP EAPCET",                "india",       [("mathematics",15),("physics",15),("chemistry",15)]),
    ("cucet-pg",  "CUCET (PG)",               "india",       [("mathematics",10),("physics",10),("chemistry",10)]),
    ("ecat-eng",  "ECAT (Engineering)",        "pakistan",    [("mathematics",15),("physics",15),("chemistry",15)]),
    ("ruet",      "RUET",                     "bangladesh",  [("mathematics",15),("physics",15),("chemistry",15)]),
    ("kuet",      "KUET",                     "bangladesh",  [("mathematics",15),("physics",15),("chemistry",15)]),
    ("engineering-ent","IOE Entrance (Nepal)", "nepal",      [("mathematics",15),("physics",15),("chemistry",15)]),
    ("emu-entrance","EMU Entrance (Ethiopia)", "ethiopia",   [("mathematics",15),("physics",15),("chemistry",15)]),
    ("must-adm",  "MUST Admission (Tanzania)", "tanzania",   [("mathematics",15),("physics",15),("chemistry",15)]),
    ("gaokao",    "Gaokao (China)",            "china",      [("mathematics",18),("physics",15),("chemistry",15)]),
    ("eed",       "EGE (Russia)",              "russia",      [("mathematics",18),("physics",15),("chemistry",15)]),

    # ── Medical / PCB pool ─────────────────────────────────────────────────────
    ("aiims-mbbs","AIIMS MBBS",               "india",       [("physics",15),("chemistry",15),("biology",15),("botany",10),("zoology",10)]),
    ("jipmer",    "JIPMER",                    "india",       [("physics",15),("chemistry",15),("biology",15),("english",8)]),
    ("mcat",      "MCAT Pakistan",             "pakistan",    [("physics",15),("chemistry",15),("biology",15)]),
    ("medical-adm","Medical Admission (Bangladesh)","bangladesh",[("physics",15),("chemistry",15),("biology",15)]),
    ("buet-adm",  "BUET Admission",            "bangladesh",  [("physics",15),("chemistry",15),("mathematics",15)]),
    ("cmat",      "CMAT Nepal",               "nepal",       [("physics",15),("chemistry",15),("biology",15)]),
    ("hepc",      "HEPC Medical (South Africa)","southafrica",[("physics",15),("chemistry",15),("biology",15)]),
    ("aau",       "AAU Admission (Ethiopia)",   "ethiopia",    [("physics",15),("chemistry",15),("biology",15)]),
    ("du-adm",    "DU Admission (Bangladesh)",  "bangladesh",  [("physics",10),("chemistry",10),("biology",10),("english",8)]),
    ("s Thee",    "Saudi Medical Exam",         "saudi",       [("biology",15),("chemistry",15),("physics",15)]),
    ("gaokao-cn", "Gaokao Science (China)",     "china",       [("physics",15),("chemistry",15),("biology",15)]),
    ("uneb",      "UNEB UACE (Uganda)",         "uganda",      [("physics",15),("chemistry",15),("biology",15)]),
    ("acsee",     "ACSEE (Tanzania)",           "tanzania",    [("physics",15),("chemistry",15),("biology",15)]),
    ("u-pcat",    "UPCAT (Philippines)",         "philippines", [("mathematics",15),("science",10),("english",8),("filipino",8)]),
    ("uppm",      "UPPM Medicine (Malaysia)",   "malaysia",    [("biology",15),("chemistry",15),("physics",15),("english",8)]),
    ("matrikulasi","Matriculation (Malaysia)",  "malaysia",    [("mathematics",15),("physics",15),("chemistry",15),("biology",10)]),

    # ── Commerce pool ─────────────────────────────────────────────────────────
    ("ca-found",  "CA Foundation",             "india",       [("accounting",15),("economics",10),("mathematics",10),("english",8)]),
    ("cs-exec",   "CS Executive",               "india",       [("accounting",10),("company-law",10),("economics",8),("taxation",8)]),
    ("cma",       "CMA Foundation",             "india",       [("accounting",12),("economics",10),("mathematics",10),("business-law",8)]),
    ("accagl",    "ACCA/CA Pakistan",          "pakistan",    [("accounting",15),("taxation",10),("audit",8),("financial-report",8)]),
    ("ican",      "ICAN (Nigeria)",             "nigeria",     [("accounting",15),("economics",10),("mathematics",10),("business-law",8)]),
    ("wassce",    "WASSCE (Ghana)",            "ghana",       [("mathematics",15),("english",10),("economics",10),("accounting",10)]),

    # ── Law pool ──────────────────────────────────────────────────────────────
    ("lsat",      "LSAT India",                "india",       [("logical-reasoning",12),("analytical-reasoning",10),("reading-comp",8),("english",8)]),
    ("ailet",     "AILET",                     "india",       [("legal-reasoning",12),("english",10),("gk",8),("mathematics",6)]),
    ("mht-cet-law","MHC-CET (Law)",            "india",       [("legal-reasoning",12),("english",10),("gk",8)]),
    ("fpsc-cce",  "FPSC CSS (Pakistan)",       "pakistan",    [("english",10),("general-science",8),("current-affairs",8),("pakistan-affairs",8),("islamic-studies",8)]),
    ("ppsc",      "PPSC (Pakistan)",           "pakistan",    [("english",10),("gk",10),("pakistan-affairs",8),("current-affairs",8)]),
    ("sppsc",     "SPSC (Sindh)",              "pakistan",    [("english",10),("gk",10),("sindh-studies",8)]),
    ("kpkpse",    "KPK PMS",                   "pakistan",    [("english",10),("gk",10),("islamic-studies",8),("pakistan-affairs",8)]),
    ("tnpsc",     "TNPSC Group 1",             "india",       [("history",10),("geography",10),("science",10),("politics",8),("economics",8)]),
    ("up-psc",    "UPPSC PCS",                 "india",       [("history",10),("geography",10),("indian-polity",10),("economics",8),("general-science",8)]),
    ("bpsc",      "BPSC",                      "india",       [("history",10),("geography",10),("indian-polity",10),("current-affairs",8)]),
    ("kpsc",      "KPSC KAS",                  "india",       [("history",10),("geography",10),("indian-polity",10),("karnataka-specific",8)]),
    ("llb-ent",   "LLB Admission (South Africa)","southafrica",[("english",10),("legal-reasoning",10),("gk",8)]),
    ("law-apt",   "Sri Lanka Law Aptitude",    "srilanka",    [("english",10),("logical-reasoning",10),("current-affairs",8)]),
    ("law-apt-kenya","Kenya Law Aptitude",     "kenya",       [("english",10),("legal-reasoning",10),("gk",8)]),
    ("law-ent-tz","Tanzania Law School",        "tanzania",    [("english",10),("legal-reasoning",10),("gk",8)]),

    # ── Management pool ────────────────────────────────────────────────────────
    ("xat",       "XAT",                       "india",       [("varc",12),("decision-making",10),("qa",12),("gk",8)]),
    ("mat",       "MAT",                       "india",       [("language-comprehension",10),("mathematical-skills",10),("data-analysis",10),("reasoning",10),("gk",8)]),
    ("cmat",      "CMAT",                      "india",       [("varc",10),("qa",10),("logical-reasoning",10),("gk",8)]),
    ("snap",      "SNAP",                      "india",       [("english",10),("logical-reasoning",10),("qa",10),("gk",8)]),
    ("gmat",      "Ghana GAT",                 "ghana",       [("english",10),("mathematics",10),("gk",8)]),
    ("legon-adm", "Legon Admissions (Ghana)",   "ghana",       [("wassce-subjects",15),("english",8)]),

    # ── PG Medical ────────────────────────────────────────────────────────────
    ("fmge",      "FMGE",                     "india",       [("anatomy",10),("physiology",10),("biochemistry",10),("pharmacology",10),("pathology",10),("microbiology",8),("forensic",6),("psm",8)]),
    ("neet-pg",   "NEET PG",                  "india",       [("anatomy",10),("physiology",10),("biochemistry",10),("pharmacology",10),("pathology",10),("microbiology",8),("psm",8)]),
    ("ini-cet",   "INI CET (AIIMS PG)",        "india",       [("anatomy",10),("physiology",10),("biochemistry",10),("pharmacology",10),("pathology",10)]),

    # ── PG / Masters ──────────────────────────────────────────────────────────
    ("gate",      "GATE",                      "india",       [("engineering-maths",12),("subject-specific",20),("general-aptitude",8)]),
    ("ugc-net",  "UGC NET",                  "india",       [("paper1-research",10),("subject-specific",20)]),
    ("cucet-pg", "CUCET (PG)",               "india",       [("general-awareness",10),("subject-specific",20),("english",8)]),

    # ── Banking / Govt jobs ────────────────────────────────────────────────────
    ("sbi-po",   "SBI PO",                    "india",       [("reasoning",15),("quant",15),("english",12),("general-awareness",10)]),
    ("ibps-po",  "IBPS PO",                   "india",       [("reasoning",15),("quant",15),("english",12),("general-awareness",10)]),
    ("rbi-grad-b","RBI Grade B",              "india",       [("economics",12),("finance",10),("management",10),("english",8),("quant",8)]),
    ("sbi-clerk","SBI Clerk",                  "india",       [("reasoning",12),("quant",12),("english",10),("general-awareness",8)]),
    ("ibps-clerk","IBPS Clerk",               "india",       [("reasoning",12),("quant",12),("english",10),("general-awareness",8)]),
    ("ctet",     "CTET",                      "india",       [("child-pedagogy",10),("english",8),("mathematics",10),("science",8),("social",8)]),
    ("uptet",    "UPTET",                     "india",       [("child-pedagogy",10),("english",8),("mathematics",10),("science",8),("social",8)]),

    # ── State / Civil Services ─────────────────────────────────────────────────
    ("uppsc",     "UPPSC RO/ARO",              "india",       [("general-studies",20),("english",8),("hindi",8)]),
    ("ras",       "RPSC RAS",                  "india",       [("history",10),("geography",10),("indian-polity",10),("economics",8),("gk",8)]),

    # ── Other countries ────────────────────────────────────────────────────────
    ("gat",       "GAT Pakistan",             "pakistan",    [("english",10),("quantitative",10),("logical-reasoning",10)]),
    ("nlt",       "NLT Pakistan",            "pakistan",    [("english",10),("gk",10),("current-affairs",8)]),
    ("nabe",      "NABE (Pakistan)",          "pakistan",    [("gk",10),("subject-specific",15)]),
    ("putme",     "Post-UTME (Nigeria)",       "nigeria",     [("english",10),("subject-combination",10)]),
    ("du-ad",     "DU Admission (Bangladesh)", "bangladesh",  [("bangla",10),("english",10),("gk",10),("science",10)]),
    ("slmc",      "SLMC Medical (Sri Lanka)", "srilanka",    [("physics",12),("chemistry",12),("biology",12),("english",8)]),
    ("al-exam",   "A/L Examination (Sri Lanka)","srilanka",   [("science-stream",15),("commerce-stream",15),("arts-stream",15)]),
    ("loe",       "LOE Nepal",                "nepal",       [("english",10),("gk",8),("legal-reasoning",10)]),
    ("sgpat",     "Saudi GP Board",            "saudi",       [("medicine",15),("surgery",10),("family-medicine",8)]),
    ("qimiyah",   "Qimiyah Exam (Saudi)",      "saudi",       [("islamic-studies",12),("arabic",10),("gk",8)]),
    ("haad",      "HAAD (UAE)",               "uae",         [("biology",10),("chemistry",10),("physics",8),("nursing",8)]),
    ("doh",       "DOH (UAE)",                "uae",         [("medical-knowledge",15),("english",10),("clinical-skills",10)]),
    ("uAeu-cat",  "UAE University CAT",       "uae",         [("mathematics",12),("english",10),("science",10),("gk",8)]),
    ("sa-pharm",  "SAPC (South Africa)",       "southafrica", [("pharmacy",15),("chemistry",10),("biology",8),("business-law",8)]),
    ("law-ent-uga","Uganda Law Admission",    "uganda",      [("english",10),("legal-reasoning",10),("gk",8)]),
    ("makerere-ent","Makerere University (Uganda)","uganda", [("physics",12),("chemistry",12),("biology",12)]),
    ("kuccps",    "KUCCPS (Kenya)",           "kenya",       [("mathematics",12),("english",10),("subject-clusters",15)]),
    ("kenyatta-ku","Kenyatta University (Kenya)","kenya",    [("physics",12),("chemistry",12),("mathematics",12),("english",8)]),
    ("toafa",     "TOAFL (Nigeria)",          "nigeria",     [("english",10),("mathematics",10),("logical-reasoning",10)]),
    ("nmat",      "NMAT (Philippines)",         "philippines", [("verbal",10),("logical",10),("quantitative",10),("mental-ability",8)]),
    ("帖ast",     "LEA/RX Exam (Philippines)","philippines", [("pharmacy",15),("chemistry",10),("biology",10)]),
    ("utbk",      "UTBK/SNPMTN (Indonesia)",  "indonesia",   [("mathematics",12),("physics",10),("chemistry",10),("biology",10),("indonesian",8)]),
    ("uii",       "UI Entrance (Indonesia)",   "indonesia",   [("academic-potential",15),("subject-knowledge",15)]),
    ("undana",    "UNDANA Admission (Indonesia)","indonesia",  [("mathematics",12),("science",12),("language",10),("gk",8)]),
    ("muet",      "MUET (Malaysia)",           "malaysia",    [("reading",8),("writing",8),("listening",8),("speaking",8)]),
    ("nce-cours", "NCE (Nigeria)",            "nigeria",     [("english",10),("mathematics",10),("education",10)]),
    ("jupeb",     "JUPEB (Nigeria)",          "nigeria",     [("subject-combinations",15)]),
    ("ijmb",      "IJMB (Nigeria)",           "nigeria",     [("subject-combinations",12)]),
]


def slugify(s):
    s = s.lower().replace(' ', '-').replace('&', '').replace('(', '').replace(')', '')
    s = re.sub(r'[^a-z0-9-]', '', s)
    return re.sub(r'-+', '-', s).strip('-')


def make_topic_id(subj_slug, idx):
    return f"{subj_slug[:6]}-{idx:03d}"


def topic_name_from_idx(idx, subj):
    """Generate realistic topic name."""
    names = {
        "economics": ["Introduction to Economics","Demand and Supply","Elasticity","Consumer Behaviour","Theory of Production","Cost Theory","Market Structures","Factor Markets","National Income","Money and Banking","Inflation","Monetary Policy","Fiscal Policy","Balance of Payments","International Trade","Economic Growth","Development Economics","Indian Economic Planning","Agriculture Sector","Industrial Policy","Labour Market","Budget and Taxation","Globalization"],
        "biochemistry": ["Biomolecules and Enzymes","Carbohydrate Metabolism","Protein Chemistry","Lipid Metabolism","Enzymology","Glycolysis and Gluconeogenesis","Krebs Cycle","Electron Transport Chain","Amino Acid Metabolism","Nucleic Acid Structure","DNA Replication","Transcription and Translation","Gene Regulation","Metabolic Integration","Hormonal Regulation"],
        "accounting": ["Accounting Principles","Journal Entries","Ledger Posting","Trial Balance","Depreciation","Final Accounts","Company Accounts","Issue of Shares","Debentures","Cost Accounting Basics","Marginal Costing","Standard Costing","Budgetary Control","Ratio Analysis","Funds Flow Statement","Cash Flow Statement","Working Capital Management","Inventory Valuation"],
        "jurisprudence": ["Nature and Scope of Jurisprudence","Legal Positivism","Natural Law Theory","Historical School","Sociological School","Realist School","Sources of Law","Custom and Usage","Legislation","Judicial Precedent","Legal Rights","Ownership and Possession","Liability Theory","Rule of Law","Separation of Powers","Judicial Review","International Law Basics"],
        "logical-reasoning": ["Analytical Reasoning","Blood Relations","Direction Sense","Coding-Decoding","Series Completion","Seating Arrangement","Puzzle Solving","Syllogism","Logical Deduction","Assumptions and Conclusions","Inference and Evaluation","Non-Verbal Reasoning","Pattern Recognition","Venn Diagrams","Binary Logic"],
    }
    pool_names = names.get(subj, None)
    if pool_names and idx <= len(pool_names):
        return pool_names[idx-1]
    return f"Topic {idx}"


def pool_to_notes_slug(pool_id):
    """Map subject pool to existing notes subject slug."""
    return POOL_TO_NOTES.get(pool_id, pool_id)


def gen_subject_ts(pool_id, num_topics):
    """Generate TypeScript Subject block, using real topic names where possible."""
    sid = slugify(pool_id)
    lines = []
    for i in range(1, num_topics + 1):
        tname = topic_name_from_idx(i, pool_id)
        tid = make_topic_id(sid, i)
        lines.append(f"    {{ id: '{tid}', name: '{tname}', weight: 3 as const }}")
    color_map = {
        "economics": "#059669", "biochemistry": "#7c3aed", "accounting": "#0891b2",
        "jurisprudence": "#b45309", "logical-reasoning": "#1d4ed8",
        "physics": "#3b82f6", "chemistry": "#10b981", "mathematics": "#8b5cf6",
        "biology": "#16a34a", "english": "#f59e0b", "quantitative": "#0ea5e9",
    }
    color = color_map.get(pool_id, "#6b7280")
    return f"""const {sid.replace('-', '_')}: Subject = {{
  id: '{sid}', name: '{POOL_SLUGS.get(pool_id, (pool_id, pool_id.replace('-', ' ').title()))[1]}', color: '{color}',
  topics: [
{chr(10).join(lines)}
  ]
}};
"""


def gen_exam_ts(exam_id, exam_name, country, pools):
    """Generate exam data TypeScript file."""
    country_map = {"india":"india","pakistan":"pakistan","nigeria":"nigeria",
                   "bangladesh":"bangladesh","srilanka":"srilanka","nepal":"nepal",
                   "saudi":"saudi","uae":"uae","southafrica":"southafrica",
                   "kenya":"kenya","ethiopia":"ethiopia","ghana":"ghana",
                   "uganda":"uganda","tanzania":"tanzania","russia":"russia",
                   "china":"china","philippines":"philippines","indonesia":"indonesia","malaysia":"malaysia"}
    cc = country_map.get(country, country)

    subject_ids = []
    subject_imports = []
    for (pid, ntopics) in pools:
        sid = slugify(pid)
        subject_ids.append(f"    {sid.replace('-','_')},")
        subject_imports.append(f"import {{ {sid.replace('-','_')} }} from './subjects/{sid}';")

    # Duration templates
    durations = "\n".join([
        f"  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for {exam_name} — 1 Hour'),",
        f"  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for {exam_name} — 1 Day'),",
        f"  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for {exam_name} — 3 Days'),",
        f"  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for {exam_name} — 1 Week'),",
        f"  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for {exam_name} — 1 Month'),",
        f"  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for {exam_name} — 3 Months'),",
        f"  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for {exam_name} — 6 Months'),",
    ])

    imports_str = "\n".join(subject_imports)
    subjects_str = "\n".join(subject_ids)

    return f"""import type {{ ExamTemplate, Subject }} from './types';
import {{ makeRoadmap }} from './types';

{imports_str}

const subjects: Subject[] = [
{subjects_str}
];

const exam: ExamTemplate = {{
  examId: '{exam_id}',
  examName: '{exam_name}',
  country: '{cc}',
  subjects,
  durations: {{
{durations}
  }},
  rescueMode: {{
    name: 'Rescue Mode',
    description: 'Cramming plan for {exam_name}',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({{
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    }})),
    strategy: 'Focus on high-weight topics and previous year questions.',
  }},
  lastUpdated: '2026-03-25',
  officialSource: 'https://example.com',
}};

export default exam;
"""


def gen_notes_md(exam_id, exam_name, pool_id, topic_id, topic_name, weight):
    """Generate notes markdown with tiered content."""
    notes_subj = pool_to_notes_slug(pool_id)
    country = exam_id.split('-')[0]
    pool_display = POOL_SLUGS.get(pool_id, pool_id.replace('-', ' ').title())

    # Get knowledge base content if available
    kb = NOVEL_TEMPLATES.get(pool_id, {})
    kb_topics = kb.get("topics", [])
    topic_content = None
    for (name, points) in kb_topics:
        if topic_name.lower() in name.lower() or name.lower() in topic_name.lower() or topic_name == f"Topic {list(kb_topics).index((name,points))+1}":
            topic_content = points
            break

    if topic_content:
        lite = [f"**{topic_name}** — Key Facts for {exam_name}", f"Core: {topic_content[0]}"] + [f"- {p}" for p in topic_content[:3]] + [f"⚡ Exam tip: {topic_name} is a key topic in {exam_name} — direct questions common"]
        std  = [f"**{topic_name}** — {exam_name} Study Guide", f"Concept: {topic_content[0]}"] + [f"- {p}" for p in topic_content[:5]]
        ext  = [f"**{topic_name}** — Comprehensive {exam_name} Notes", f"Full explanation: {topic_content[0]}"] + [f"- {p}" for p in topic_content]
    else:
        lite = [f"**{topic_name}** — Key Facts for {exam_name}", f"Core concept: {topic_name} is an important topic in {pool_display} for {exam_name}", "High-yield point: Understand the fundamental principles and their applications", f"⚡ Exam tip: Questions from {topic_name} appear regularly in {exam_name}"]
        std  = [f"**{topic_name}** — {exam_name} Study Guide", f"Overview: {topic_name} is a key {pool_display} topic for {exam_name}", "Core principles: Build a solid understanding of fundamentals", "Key points: Definitions, applications, and typical exam question patterns", "Study strategy: Theory first, then practice problems"]
        ext  = [f"**{topic_name}** — Comprehensive {exam_name} Notes", f"Full coverage: {topic_name} in {pool_display} for {exam_name} preparation", "Detailed theory and concept explanations", "Problem-solving strategies and common mistakes to avoid", "Practice: Attempt previous year questions and standard textbook exercises"]

    md = f"""---
exam: {exam_id}
examName: {exam_name}
subject: {notes_subj}
subjectName: {pool_display}
topic: {topic_id}
topicName: {topic_name}
weight: {weight}
country: {country}
generated: "2026-03-25T17:00:00"
---

# {topic_name}

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

{chr(10).join(lite)}

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

{chr(10).join(std)}

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

{chr(10).join(ext)}

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
"""
    return md


def run():
    OUT_EXAMS.mkdir(parents=True, exist_ok=True)
    OUT_NOTES.mkdir(parents=True, exist_ok=True)

    exams_created = 0
    notes_created = 0
    skipped_existing = set({
        "neet","jee-main","jeeadvanced","cuet","upsc","ssc-cgl","cat","clat","nda","ugc-net",
        "mdcat","ecat","nat-i","lat","hat-ug","jamb","waec","neco","nabteb","ncee"
    })

    for (exam_id, exam_name, country, pools) in EXAM_DEFS:
        if exam_id in skipped_existing:
            print(f"  ⏭️  Skipping existing: {exam_id}")
            continue

        country_out = OUT_EXAMS / country
        country_out.mkdir(exist_ok=True)
        subjects_out = country_out / "subjects"
        subjects_out.mkdir(exist_ok=True)
        notes_exam_out = OUT_NOTES / exam_id

        # Generate TypeScript for each subject in pool
        pool_subject_ids = []
        for (pool_id, ntopics) in pools:
            sid = slugify(pool_id)
            pool_subject_ids.append(sid)
            subj_ts_path = subjects_out / f"{sid}.ts"

            # Ensure notes exam dir + subject dir exists
            notes_exam_out.mkdir(parents=True, exist_ok=True)
            note_subj_dir = notes_exam_out / sid
            note_subj_dir.mkdir(parents=True, exist_ok=True)

            # Only write if not exists (don't overwrite real existing data)
            if not subj_ts_path.exists():
                subj_ts = gen_subject_ts(pool_id, ntopics)
                subj_ts_path.write_text(subj_ts, encoding='utf-8')

            # Generate notes for each topic
            for i in range(1, ntopics + 1):
                tid = make_topic_id(sid, i)
                tname = topic_name_from_idx(i, pool_id)
                note_file = note_subj_dir / f"{tid}.md"

                if not note_file.exists():
                    md = gen_notes_md(exam_id, exam_name, pool_id, tid, tname, 3)
                    note_file.write_text(md, encoding='utf-8')
                    notes_created += 1

        # Generate exam data file
        exam_ts_path = country_out / f"{exam_id}.ts"
        if not exam_ts_path.exists():
            exam_ts = gen_exam_ts(exam_id, exam_name, country, pools)
            exam_ts_path.write_text(exam_ts, encoding='utf-8')
            exams_created += 1

        print(f"  ✅ {exam_id}: {len(pools)} pools, notes in {', '.join(pool_subject_ids)}")

    print(f"\n✅ Created {exams_created} new exam data files in {OUT_EXAMS}")
    print(f"✅ Created {notes_created} new notes files in {OUT_NOTES}")
    print(f"\n⚠️  Next: Review files in {OUT_EXAMS} and {OUT_NOTES}")
    print(f"⚠️  Then: Copy to production dirs + update src/data/exams/index.ts")


if __name__ == "__main__":
    print("Starting 100-exam expansion...")
    run()
