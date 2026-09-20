---
exam: ini-cet
examName: INI CET (AIIMS PG)
subject: biochemistry
subjectName: Biochemistry
topic: bioche-009
topicName: Amino Acid Metabolism
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-20"
---

# Amino Acid Metabolism

### 🟢 Lite — Quick Review (1h–1d)
> Fast recall anchor for the night before INI CET — the four sentences and one mnemonic that turn this 3% topic into guaranteed marks.

Every proteinogenic amino acid ends up as **NH₄⁺** plus a keto-acid. Nitrogen flows to the urea cycle; the carbon skeleton is either glucogenic, ketogenic, or both. Transamination uses PLP; oxidative deamination uses glutamate dehydrogenase. Remember the stoichiometry of urea synthesis: **2 NH₄⁺ + CO₂ + 3 ATP + Aspartate → Urea + Fumarate + 2 ADP + AMP + 4 Pᵢ** (cost = 4 high-energy phosphate bonds because ATP→AMP counts as two).

| Classification | Amino acids | Carbon-skeleton fate |
|---|---|---|
| Purely ketogenic | Leu, Lys | Acetyl-CoA / acetoacetate |
| Mixed (gluco + keto) | Ile, Phe, Trp, Tyr, Thr | Both acetyl-CoA and a glucogenic intermediate |
| Glucogenic (14) | All the rest | Pyruvate, OAA, α-KG, Succinyl-CoA, or Fumarate |

> 💡 **High-Yield Memory Hook (Purely Ketogenic) — "Leu-Lys Lost it":** **Leu**cine and **Lys**ine are the only two purely ketogenic amino acids. Every other "both" amino acid is **"I PeTTy"** — **I**le, **P**he, **T**rp, **T**yr, **T**hr.

Mnemonic for the urea-cycle enzymes in order: **"CaOwls Are A-rating"** → **C**PS-I, **O**TC, **A**rgininosuccinate synthetase, **A**rgininosuccinate lyase, **A**rginase. The first two enzymes are mitochondrial; the last three are cytosolic.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Working understanding for a 2-week to 2-month window — mechanisms, cofactors, classification traps, and one full worked INI CET-style calculation.

#### Nitrogen flow into the urea cycle

Transamination transfers the α-amino group of any amino acid onto α-ketoglutarate, producing **glutamate** and the corresponding α-keto acid. The reaction is freely reversible (ΔG ≈ 0) and requires **pyridoxal-5′-phosphate (PLP)** as the prosthetic group on every transaminase.

- **ALT (alanine aminotransferase):** Alanine + α-ketoglutarate ⇌ Pyruvate + Glutamate
- **AST (aspartate aminotransferase):** Aspartate + α-ketoglutarate ⇌ Oxaloacetate + Glutamate

The glutamate is then oxidatively deaminated by **glutamate dehydrogenase (EC 1.4.1.3)** in the liver mitochondrial matrix:

NH₄⁺ + α-Ketoglutarate + NAD(P)H + H⁺ ⇌ Glutamate + NAD(P)⁺ + H₂O

This enzyme is allosterically **activated by ADP** and **inhibited by GTP**, so it responds to the cell's energy charge. Free NH₄⁺ plus a second nitrogen donated by aspartate enters the urea cycle.

#### Urea cycle stoichiometry and clinical correlations

The net equation reported in INI CET-style MCQs is:

#### 2 NH₄⁺ + CO₂ + 3 ATP + Aspartate → Urea + Fumarate + 2 ADP + AMP + 4 Pᵢ

The standard pitfall is the ATP count. ATP→ADP contributes two bonds; the ATP hydrolysed to AMP + PPᵢ by argininosuccinate synthetase effectively consumes **two** high-energy phosphate bonds, so the total cellular cost is **four** (~3 ATP equivalents).

#### Carbon-skeleton classification — when memorising fails

| Carbon entry point | Amino acids delivering carbon here |
|---|---|
| Pyruvate | Ala, Ser, Gly, Cys, Trp (via Ala) |
| α-Ketoglutarate | Glu, Gln, His, Pro, Arg |
| Succinyl-CoA | Val, Ile, Met, Thr |
| Fumarate | Phe, Tyr (via Asp-fumarate arm) |
| Oxaloacetate | Asn, Asp |
| Acetyl-CoA / Acetoacetate | Leu, Lys (purely); Ile, Phe, Trp, Tyr, Thr (mixed) |

#### Cofactor map for catabolic blocks

| Cofactor | Pathway / enzyme | Deficiency disease |
|---|---|---|
| PLP (B6) | All transaminations, CBS | MSUD (BCKD), homocystinuria (B6-responsive) |
| BH₄ | Phenylalanine hydroxylase | Phenylketonuria |
| NAD(P)⁺ | Glutamate dehydrogenase | Hyperinsulinism–hyperammonemia (GDH gain-of-function) |
| Adenosylcobalamin (B12) | Methylmalonyl-CoA mutase, MTR | Methylmalonic acidaemia, homocystinuria |
| Tetrahydrofolate | SHMT, MTHFR | Megaloblastic anaemia, homocystinuria |

#### 🎯 Exam-Level Worked Problem

A 6-day-old neonate presents with poor feeding, lethargy, and a plasma ammonia of 480 µmol/L (reference <50). Tandem MS shows elevated glutamine and alanine, but **citrulline is undetectable**. Urine orotic acid is markedly raised.

**Step 1 — Locate the block.** Low citrulline places the defect at **carbamoyl phosphate synthetase I** or **ornithine transcarbamylase (OTC)**. Both produce hyperammonemia, but only OTC deficiency allows carbamoyl phosphate to spill into the cytosol and condense with aspartate via CPS-II → orotic acid.

**Step 2 — Confirm with the cytological clue.** Elevated orotic acid + low citrulline → **OTC deficiency**, the only X-linked urea cycle defect (lethal in hemizygous males).

**Step 3 — Calculate nitrogen load to clear.** Using Cockcroft-Gault for renal context is irrelevant here (renal function is intact), but the serum urea conversion is testable:

Serum urea (mmol/L) = BUN (mg/dL) ÷ **2.14**

If the lab reports a BUN of 28 mg/dL with this neonate, the corresponding urea = **28 ÷ 2.14 = 13.08 mmol/L** (reference 2.5–7.1). The patient is hyperammonemic **with** elevated urea — meaning nitrogen is reaching the cycle but accumulating because of the downstream block plus hyperammonemia.

**Resolution:** Stop protein, give sodium benzoate + phenylacetate, and dialysis; the OTC defect itself is untreatable pharmacologically beyond ammonia scavenging.

> ⚠️ **Examiner Trap:** Both CPS-I and OTC deficiency present with **low citrulline and high glutamine**. CPS-I does **not** raise orotic acid; only OTC does. If an MCQ lists "high orotic acid + low citrulline", the answer is OTC, never CPS-I.

---

### 🔴 Extended — Deep Study (3mo+)
> Edge cases, mathematical limits, and the integration traps that surface in INI CET image-based MCQs.

#### Boundary conditions of the urea cycle

- **N-acetylglutamate (NAG)** is the obligatory allosteric activator of CPS-I. NAG is synthesised from glutamate + acetyl-CoA by **N-acetylglutamate synthase (NAGS)**; NAGS deficiency mimics CPS-I deficiency (low citrulline, normal orotic acid). Treatment: N-carbamylglutamate (carglumic acid).
- **CPS-I is mitochondrial and ammonia-specific**; **CPS-II is cytosolic and uses glutamine** for pyrimidine synthesis. Do not let a poorly worded question conflate them.
- **Maximum nitrogen flux**: a healthy adult excretes ~30 g of urea/day. Above this, ammonia accumulates faster than CPS-I can process it because the cycle's rate-limiting step (argininosuccinate synthetase in vivo) saturates.

#### Edge cases in clinical aminoacidurias

| Disorder | Enzyme | Distinguishing lab/clinical clue |
|---|---|---|
| Phenylketonuria | Phenylalanine hydroxylase | Serum Phe > 1200 µmol/L; tyrosine becomes essential |
| Maternal PKU | Placental Phe transfer | Fetal microcephaly, CHD if maternal Phe uncontrolled |
| MSUD | Branched-chain α-ketoacid dehydrogenase (BCKD) | Sweet-smelling urine; ↑ Leu/Ile/Val |
| Alkaptonuria | Homogentisate 1,2-dioxygenase (HGD) | Urine darkens on standing/alkalinisation; ochronosis |
| Homocystinuria | Cystathionine β-synthase | Lens subluxation downward, Marfanoid habitus |
| Methylmalonic acidaemia | Methylmalonyl-CoA mutase | Metabolic acidosis without ketosis; B12-responsive subset |
| Scurvy masquerade | Proline/lysine hydroxylase cofactor (vitamin C) | Connective-tissue, not aminoaciduria — frequent distractor |

#### Two advanced practice prompts

1. **Integration question.** A neonate on a tyrosine-deficient phenylalanine-restricted diet continues to deteriorate with low plasma tyrosine. The same enzyme assay shows *normal* phenylalanine hydroxylase activity. Name the second-most likely cofactor deficiency and the substrate you'd measure to confirm it. (Expected answer: BH₄ deficiency; confirm by raised urinary pterins or a dihydropteridine reductase assay on dried blood spot.)
2. **Numerical MCQ.** If a patient produces 30 g of urea per day (urea Mᵣ = 60.06 g/mol), and the laboratory reports serum urea as 14.0 mmol/L in a 70 kg adult with 42 L total body water, how many hours of zero hepatic urea synthesis would raise plasma NH₃ by 100 µmol/L? Use total nitrogen pool of ~4 g NH₃-N in this volume. (Calculated answer: ≈1.6 hours; illustrates why hyperammonemic coma can develop overnight in OTC-deficient infants.)

> 📌 **Integration trap:** When a question offers both B6-responsive homocystinuria and B12-responsive homocystinuria, the **B6-responsive form = CBS deficiency** and the **B12/folate-responsive form = MTHFR deficiency**. A wrong cofactor choice is the most common reason students miss this question.

---

## Continue your study

- **[View this topic in your INI CET (AIIMS PG) roadmap](/roadmap/?exam=ini-cet&duration=1mo)** — see where "Amino Acid Metabolism" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ini-cet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[INI CET (AIIMS PG) exam overview](/exams/ini-cet/)** — pattern, eligibility, and syllabus
- **[All Biochemistry notes](/notes/ini-cet/biochemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
