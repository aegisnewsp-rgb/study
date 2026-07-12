---
exam: fmge
examName: FMGE
subject: microbiology
subjectName: Microbiology
topic: microb-008
topicName: Bacterial Genetics & Drug Resistance
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-12"
---

# Bacterial Genetics & Drug Resistance

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your FMGE Microbiology block.

**Bacterial genetics** studies how bacteria store, replicate, and exchange DNA; **antimicrobial resistance (AMR)** is the heritable ability to survive drug exposure. Genetic change occurs through **chromosomal mutation** or acquisition of **mobile genetic elements (MGEs)**: plasmids, transposons, integrons, and prophages.

#### Four core HGT mechanisms to memorise:

| Mechanism | Vehicle | Donor required? |
|-----------|---------|-----------------|
| Transformation | Naked DNA | No |
| Transduction | Bacteriophage | Yes (phage) |
| Conjugation | F-pilus / plasmid | Yes (live cell) |
| Transposition | Transposon (jumping gene) | — |

**Four resistance mechanisms:** enzymatic inactivation (β-lactamase hydrolyses the β-lactam ring), target modification (mecA → PBP2a in MRSA), reduced permeability (porin loss), and active efflux (proton motive force–driven pumps).

> FMGE pearl: MRSA = *mecA* on **SCCmec**; ESBLs hydrolyse cephalosporins but **spare carbapenems**; NDM/KPC/OXA-48 carbapenemases destroy nearly all β-lactams.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Genetic elements in bacteria
The bacterial chromosome is a single circular replicon. Superimposed on it are **extrachromosomal replicons** (plasmids), **insertion sequences (IS)** of <2 kb that encode only transposase, and **composite transposons** (Tn) flanked by two IS elements carrying resistance genes such as *bla*TEM, *aadA*, or *tet*. **Integrons** are non-mobile expression platforms that capture gene cassettes via site-specific recombination (integrase, *intI*) and depend on transposons or plasmids for cell-to-cell spread.

#### Horizontal gene transfer (HGT)
- **Transformation** — uptake of free DNA from lysed cells (natural competence in *Streptococcus pneumoniae*, *Haemophilus influenzae*, *Neisseria*).
- **Transduction** — phage-mediated; *generalised* transfers random host DNA, *specialised* transfers adjacent chromosomal genes during lysogenic induction.
- **Conjugation** — F-pilus bridges donor and recipient; the F-factor plasmid uses a **tra operon** and **relaxase** to initiate rolling-circle transfer. *Hfr* strains form when F integrates into the chromosome, mobilising chromosomal DNA in a fixed temporal order (Lederberg–Tatum, 1946).
- **Transposition** — cut-and-paste or replicative movement of transposons; frequency ≈ 10⁻⁷ per element per generation.

#### Mechanisms of drug resistance
Resistance is encoded either by chromosomal mutation or by MGEs carrying R-genes. The four biochemical strategies are summarised below.

| Mechanism | Biochemical action | Classic example |
|-----------|-------------------|-----------------|
| Enzymatic inactivation | Hydrolysis or modification of drug | β-lactamase on penicillin |
| Target modification | Altered binding site | *mecA* → PBP2a (MRSA); 23S rRNA methylation (macrolide–lincosamide–streptogramin B) |
| Reduced permeability | Porin down-regulation/loss | OmpF loss in *E. coli* |
| Active efflux | Proton motive force drives drug out | TetA (tetracycline), NorA (ciprofloxacin) |

> FMGE trap: ESBLs hydrolyse 3rd-generation cephalosporins but **not carbapenems** — treat with carbapenems. Carbapenemase producers (KPC, NDM, OXA-48) hydrolyse carbapenems; colistin/tigecycline remain options but resistance is rising.

#### Single-step vs multi-step resistance
**Single-step**: one mutation gives high-level resistance (streptomycin — *rpsL*; rifampicin — *rpoB*). **Multi-step**: gradual MIC creep through successive mutations (penicillin in pneumococci, erythromycin, tetracycline).

#### Clinical vignette patterns
Expect MCQs around: post-op wound MRSA needing vancomycin; ESBL *E. coli* UTI after cephalosporin exposure; VRE in a dialysis patient; *mecA* detection by **cefoxitin disk** or **PBP2a latex agglutination**, not oxacillin alone.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Quantifying genetic events
Three formulae anchor experimental interpretation:

1. **Mutation rate** = mutations ÷ (bases × generations). *E. coli* lacI spontaneous rate ≈ 10⁻⁶ per gene per generation.
2. **Conjugation frequency** = transconjugants ÷ recipients; typically 10⁻³ to 10⁻⁶ per donor.
3. **Proton motive force for efflux**: Δp = Δψ − (2.303 RT / F) × ΔpH, where Δψ is the membrane potential (mV), R = 8.314 J·mol⁻¹·K⁻¹, T in kelvin, F = 96,485 C·mol⁻¹, and ΔpH is the transmembrane pH gradient. Δp of −150 to −200 mV powers Tet, MFS, and RND efflux families.

#### Co-resistance, cross-resistance, and integrons
**Co-resistance** = physically linked genes on the same MGE (e.g., *bla*CTX-M + *aac(6′)-Ib* on a single IncF plasmid) so selection of one drags all along. **Cross-resistance** = one mechanism (e.g., an MDR efflux pump) removes chemically unrelated drugs. **Class 1 integrons** dominate clinical multidrug isolates, accumulating gene cassettes (aadA, dfrA, blaVIM) under *intI1* integrase control.

#### MRSA, VRE, ESBLs — molecular detail
- **MRSA**: *mecA* on the **SCCmec** cassette encodes PBP2a with low affinity for methicillin/oxacillin; detection relies on **cefoxitin (30 µg)** disk diffusion or PBP2a agglutination. Vancomycin-intermediate *S. aureus* (VISA) arises via thickened cell wall trapping vancomycin.
- **VRE**: *vanA* (Tn1546) ligates D-Ala-D-Lac instead of D-Ala-D-Ala, dropping vancomycin binding ~1000-fold.
- **ESBLs**: CTX-M, TEM, SHV variants; plasmid-borne; inhibited by **clavulanic acid/sulbactam/tazobactam** — the basis of the double-disk synergy test.

#### Common mistakes to avoid
- Conflating *transformation* (bacterial naked-DNA uptake) with *transfection* (eukaryotic viral-DNA uptake).
- Assuming all plasmids transfer themselves — only conjugative plasmids carry the *tra* operon; non-conjugative plasmids need a mobilising helper.
- Reading "ESBL" and "carbapenemase" as synonyms — ESBLs spare carbapenems.
- Forgetting *Hfr* crosses transfer chromosome in a fixed time-sequence, useful for mapping.

#### Practice prompts
1. A diabetic with a foot ulcer grows methicillin-resistant *S. aureus*. Which gene–protein pair confers resistance, and which phenotypic test confirms it?
2. After three failed courses of ceftriaxone for an ICU-acquired *Klebsiella* bacteraemia, an isolate shows reduced carbapenem susceptibility. Name the most likely gene family, the MGE that typically carries it, and two therapeutic options remaining.

---

## Continue your study

- **[View this topic in your FMGE roadmap](/roadmap/?exam=fmge&duration=1mo)** — see where "Bacterial Genetics & Drug Resistance" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=fmge&duration=1d)** — 1-day sprint covering highest-weight topics
- **[FMGE exam overview](/exams/fmge/)** — pattern, eligibility, and syllabus
- **[All Microbiology notes](/notes/fmge/microbiology/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
