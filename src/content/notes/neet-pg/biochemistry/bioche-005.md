---
exam: neet-pg
examName: NEET PG
subject: biochemistry
subjectName: Biochemistry
topic: bioche-005
topicName: Enzymology
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-28"
---

# Enzymology

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Enzymes are biological catalysts, almost always proteins (exceptions: ribozymes such as peptidyl transferase and the hammerhead ribozyme) that accelerate reactions by lowering **activation energy (Ea)** without being consumed. The catalytically active unit = **apoenzyme + cofactor = holoenzyme**; a cofactor that is organic and vitamin-derived is a **coenzyme** (NAD⁺, FAD, TPP, PLP, CoA), while a tightly/covalently bound one is a **prosthetic group** (FAD in succinate dehydrogenase, biotin).

The single most-tested equation is Michaelis–Menten:

$$v = \frac{V_{max}[S]}{K_m + [S]}$$

- **Km** = substrate concentration at v = Vmax/2; low Km ≈ high apparent affinity.
- **Vmax** = maximum velocity at saturating [S].
- **kcat = Vmax/[E]total** (turnover number, s⁻¹); **kcat/Km** measures catalytic efficiency.

In a Lineweaver–Burk plot (1/v vs 1/[S]): y-intercept = 1/Vmax, x-intercept = −1/Km.

- Competitive inhibition: Vmax unchanged, Km↑ (lines intersect y-axis).
- Non-competitive: Vmax↓, Km unchanged (lines intersect x-axis).
- Uncompetitive: both Vmax and Km↓ (parallel lines).

Exam pointers: know **zymogens** (trypsinogen → trypsin by enteropeptidase; pepsinogen → pepsin by HCl; chymotrypsinogen → chymotrypsin by trypsin), the **six IUBMB classes** (oxidoreductases EC 1 … ligases EC 6), and the diagnostic isoenzymes **CK-MB** (MI), **LDH1** (cardiac), **ALP bone vs liver isoforms**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Michaelis–Menten kinetics and the Lineweaver–Burk plot

The steady-state derivation assumes [S] >> [E], a single active site, reversible ES formation, and that initial velocities are measured (so product inhibition is negligible). Under these, the **Michaelis constant Km = (k₋₁ + kcat)/k₁** and is independent of [E] but is altered by temperature, pH, ionic strength, and the substrate. Because v = Vmax/2 when [S] = Km, a small Km signals strong apparent binding — but only for enzymes that obey hyperbolic (non-cooperative) kinetics. For allosteric enzymes, the analogous term is **S0.5** (Hill equation), not Km.

A double-reciprocal plot linearises the curve and lets you read off inhibition patterns.

| Inhibitor type | Vmax | Km (apparent) | Lineweaver–Burk pattern |
| --- | --- | --- | --- |
| Competitive | unchanged | increased | Lines intersect on y-axis |
| Non-competitive (pure) | decreased | unchanged | Lines intersect on x-axis |
| Uncompetitive | decreased | decreased | Parallel lines |
| Mixed | decreased | changed | Intersect left of y-axis, not on x-axis |

#### Cofactors, coenzymes, and prosthetic groups

| Class | Nature | Examples | Binding |
| --- | --- | --- | --- |
| Metal ion cofactor | Inorganic | Zn²⁺ (alcohol dehydrogenase), Mg²⁺ (kinases), Fe²⁺/³⁺ (cytochromes) | Loose/tight ionic |
| Coenzyme | Organic, vitamin-derived | NAD⁺/NADP⁺, FAD/FMN, TPP, PLP, CoA, tetrahydrofolate, biotin | Loose, cosubstrate |
| Prosthetic group | Organic or metal, tightly bound | FAD (succinate dehydrogenase), biotin (carboxylases), heme (peroxidases) | Tight, often covalent |

- **Apoenzyme** = protein only (inactive); **holoenzyme** = apoenzyme + cofactor (active).
- Zn²⁺-requiring enzymes include carbonic anhydrase, carboxypeptidase A, and alcohol dehydrogenase.

#### Regulation of enzyme activity

- **Allosteric:** sigmoidal v vs [S], described by Hill equation; aspartate transcarbamoylase (ATCase) is the prototype.
- **Covalent modification:** phosphorylation/dephosphorylation (glycogen phosphorylase), acetylation, ubiquitination.
- **Proteolytic activation of zymogens:** enteropeptidase → trypsin → activates chymotrypsinogen, proelastase, procarboxypeptidases; pepsinogen → pepsin by gastric HCl; procollagen → collagen by procollagen peptidase.
- **Induction/repression:** CYP450 induction by phenobarbital, rifampicin; repression by feedback.
- **Feedback inhibition:** end-product blocks an early pathway enzyme (isosteric or allosteric).

#### Isoenzymes and diagnostic enzymology

| Isoenzyme / marker | Clinical use |
| --- | --- |
| CK-MB, troponin I/T | Myocardial infarction |
| LDH1 > LDH2 ("flipped ratio") | Cardiac injury |
| ALT > AST, GGT, ALP | Hepatocellular vs cholestatic injury |
| Amylase, lipase | Acute pancreatitis |
| Alkaline phosphatase (bone vs liver isoform) | Bone disease vs biliary obstruction |
| G6PD deficiency | Haemolytic anaemia, Heinz bodies |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked example: Lineweaver–Burk interpretation

Assume the following initial-rate data are obtained for an enzyme without and with inhibitor I (1 mM):

| [S] (mM) | v (μmol min⁻¹) | v + I (μmol min⁻¹) |
| --- | --- | --- |
| 0.1 | 0.091 | 0.045 |
| 0.2 | 0.167 | 0.083 |
| 0.5 | 0.333 | 0.167 |
| 1.0 | 0.500 | 0.250 |

Plotting 1/v vs 1/[S] gives a y-intercept of 2 (so Vmax = 0.5 μmol min⁻¹) without I and 4 (Vmax = 0.25 μmol min⁻¹) with I; the slopes are 20 and 20 respectively, so lines intersect on the x-axis at −1/Km = −2 (Km = 0.5 mM, unchanged). Conclusion: **pure non-competitive inhibition** — Vmax halves, Km unaltered, suggesting I binds equally well to E and ES (α = α′ = 2). Substrate cannot outcompete this inhibitor.

#### Edge cases and traps examiners exploit

1. **Ribozymes break the "protein catalyst" rule.** Peptidyl transferase (23S rRNA), self-splicing Group I introns, and the hammerhead ribozyme are catalytic RNAs — a standard "all enzymes are proteins" statement is false.
2. **Specific activity** (units mg⁻¹ protein) and **turnover number** (kcat, s⁻¹) are NOT the same; specific activity falls during purification as inert protein is removed, while kcat for the pure enzyme is constant.
3. **Diffusion limit:** kcat/Km approaching 10⁸–10⁹ L mol⁻¹ s⁻¹ (e.g., triose phosphate isomerase, catalase) means every collision yields product; further "perfection" is physically impossible.
4. **Temperature:** Q10 ≈ 2 below the optimum, but above it the Arrhenius relation breaks as the protein denatures — an asymmetric, not symmetric, activity–temperature curve.
5. **pH optima are diagnostic:** pepsin ~2, alkaline phosphatase ~9–10, trypsin ~8, carbonic anhydrase ~7 — questions often test this rather than any mechanistic detail.

#### Drug–enzyme connections worth memorising

| Drug | Target enzyme | Inhibition type |
| --- | --- | --- |
| Statins | HMG-CoA reductase | Competitive |
| Allopurinol | Xanthine oxidase | Competitive (suicide) |
| Methotrexate | Dihydrofolate reductase | Competitive |
| Enalapril/captopril | ACE | Competitive (zinc-binding) |
| Saquinavir etc. | HIV protease | Competitive |
| Aspirin | Cyclooxygenase | Irreversible covalent (acetylation) |
| Fluorouracil | Thymidylate synthase | Suicide substrate |

Practice prompts:

1. An inhibitor gives parallel lines on a Lineweaver–Burk plot at three inhibitor concentrations. State the inhibition type, the effect on apparent Km and Vmax, and explain mechanistically why raising [S] cannot overcome the inhibition.
2. Pepsinogen is secreted by chief cells and has negligible activity at pH 7. Outline its activation pathway, name the activating agent, and explain why activation outside the stomach would be biologically dangerous.

## Continue your study

- **[View this topic in your NEET PG roadmap](/roadmap/?exam=neet-pg&duration=1mo)** — see where "Enzymology" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neet-pg&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NEET PG exam overview](/exams/neet-pg/)** — pattern, eligibility, and syllabus
- **[All Biochemistry notes](/notes/neet-pg/biochemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
