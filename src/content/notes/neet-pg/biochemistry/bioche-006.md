---
exam: neet-pg
examName: NEET PG
subject: biochemistry
subjectName: Biochemistry
topic: bioche-006
topicName: Glycolysis and Gluconeogenesis
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-06-04"
---

# Glycolysis and Gluconeogenesis

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Glycolysis** is the cytosolic, largely anaerobic conversion of one **glucose (6C)** into two **pyruvate (3C)**, yielding a net **2 ATP + 2 NADH**. The pathway consumes **2 ATP** in the preparatory phase and generates **4 ATP** in the payoff phase.

**Three irreversible enzymes** serve as control points: **Hexokinase** (G → G6P, inhibited by G6P), **PFK-1** (F6P → F1,6BP, the principal rate-limiting step — inhibited by ATP/citrate, activated by AMP and **fructose-2,6-bisphosphate**), and **Pyruvate kinase** (PEP → pyruvate, inhibited by ATP/acetyl-CoA).

**Gluconeogenesis** is hepatic/renal synthesis of glucose from non-carbohydrate precursors (lactate, glycerol, glucogenic amino acids). It reverses glycolysis but requires **4 bypass reactions** at the 3 irreversible steps:

- **Pyruvate → PEP:** Pyruvate carboxylase (mitochondrial, biotin, requires acetyl-CoA) + PEPCK (GTP)
- **F1,6BP → F6P:** Fructose-1,6-bisphosphatase
- **G6P → Glucose:** Glucose-6-phosphatase

**Net cost:** 6 ATP equivalents per glucose molecule. **Cori cycle** (lactate from muscle → liver → glucose back to muscle) is the key inter-organ shuttle.

**High-yield pointers for NEET PG:** PFK-1 regulation by F26BP is the most potent allosteric mechanism; the **Randle cycle** (fatty acids suppress glucose oxidation via acetyl-CoA-mediated inhibition) explains diabetic dysregulation; pyruvate carboxylase deficiency causes severe hypoglycemia.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

#### Glycolysis: Step-by-Step Mechanism

Glycolysis proceeds in two phases. The **preparatory phase** (steps 1–5) consumes 2 ATP to phosphorylate glucose twice, generating **fructose-1,6-bisphosphate** — a high-energy intermediate. **Hexokinase** (Km ~0.1 mM, ubiquitously expressed) traps glucose as G6P and is feedback-inhibited by its product. In the liver, **glucokinase** (Hexokinase IV, Km ~10 mM) serves a glucose-sensing role, allowing hepatic uptake when blood glucose is high.

The **payoff phase** (steps 6–10) converts F1,6BP into two triose phosphates, generating **4 ATP and 2 NADH** via substrate-level phosphorylation. The enzyme **bisphosphoglycerate mutase** converts 1,3-BPG to 3-PG, producing ATP in step 7.

**PFK-1** is the major regulatory node. Its activity is modulated by:
- **Inhibitors:** ATP, citrate, low pH
- **Activators:** AMP, fructose-2,6-bisphosphate (F26BP) — the most potent activator

**PFK-2** synthesizes F26BP in the liver; when insulin is high, PFK-2 is dephosphorylated and produces F26BP, activating PFK-1 and glycolysis. During fasting, glucagon activates PKA, which phosphorylates PFK-2 to stop F26BP production.

#### Gluconeogenesis: Bypass Logic

Gluconeogenesis occurs mainly in the **liver (85%)** and **renal cortex (15%)**. Three irreversible glycolytic steps require dedicated bypass enzymes:

| Glycolysis step | Reversal enzyme | Location | Cofactor |
|---|---|---|---|
| Pyruvate → PEP | Pyruvate carboxylase + PEPCK | Mitochondria → Cytosol | Biotin; GTP |
| F1,6BP → F6P | F1,6-bisphosphatase | Cytosol | Mg²⁺ |
| G6P → Glucose | Glucose-6-phosphatase | ER membrane | — |

**Pyruvate carboxylase** (mitochondrial) incorporates CO₂ using biotin. Acetyl-CoA is the allosteric activator — this makes metabolic sense: when fatty acid oxidation generates acetyl-CoA (fasting state), gluconeogenesis is stimulated to maintain blood glucose.

**PEPCK** (cytosolic in liver, mitochondrial in kidney) uses GTP to generate phosphoenolpyruvate (PEP). Both **pyruvate carboxylase and PEPCK are rate-limiting** for gluconeogenesis; their gene expression is controlled by cortisol and glucagon via CREB and PPARγ.

#### Integration: Cori and Randle Cycles

- **Cori cycle:** Muscle generates lactate → transported to liver → converted to glucose via gluconeogenesis → glucose returned to muscle. This loop shifts the metabolic burden to the liver during intense exercise.
- **Randle cycle (glucose-fatty acid cycle):** Elevated fatty acids generate acetyl-CoA and citrate → acetyl-CoA inhibits pyruvate dehydrogenase; citrate inhibits PFK-1 → glycolysis is suppressed, conserving glucose for brain.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

#### Allosteric and Hormonal Regulation of PFK-1/PFK-2

The **PFK-2 / F26BP / PFK-1 axis** is the central glycolytic regulatory unit. PFK-2 has two active sites on a single bifunctional enzyme: its kinase domain produces F26BP, and its phosphatase domain degrades it. In the **fed state**, insulin dephosphorylates PFK-2/FBPase-2, suppressing the phosphatase and activating the kinase → F26BP rises → PFK-1 activated → glycolysis promoted. In the **fasting state**, glucagon activates PKA, which phosphorylates PFK-2 at Ser466, inverting its function: FBPase-2 domain activates, F26BP declines, PFK-1 is inhibited.

This dual regulation allows rapid, post-translational switching without requiring new protein synthesis — crucial for minute-to-minute glucose homeostasis.

#### Pyruvate Kinase Isoforms and Transcriptional Control

Three PK isoforms exist: **M1** (muscle, constitutive active), **M2** (liver, fetal tissue, many cancers — low activity in fasting), and **L** (liver, active in fed state). **PKM2** (the fetal isoform re-expressed in cancer) is regulated by tyrosine phosphorylation (inactive) and serine dephosphorylation (active). In the liver, PKA phosphorylates PKM2 at Ser83, reducing its affinity for PEP and promoting gluconeogenesis by conserving PEP.

This explains why liver glycolysis is suppressed during fasting even though muscle PKM1 remains active — the liver must export glucose, not consume it.

#### Common Mistakes in NEET PG Questions

1. **Confusing glucokinase with hexokinase:** Hexokinase is inhibited by G6P (product inhibition) and has low Km — it operates even at low glucose. Glucokinase has high Km and is NOT inhibited by G6P, allowing hepatic glucose uptake when blood glucose is elevated. Glucokinase deficiency causes **MODY-2**.
2. **Forgetting the ATP cost of gluconeogenesis:** It costs 6 high-energy phosphate bonds (4 ATP + 2 GTP) per glucose — energetically expensive, which is why the body resorts to gluconeogenesis only when glycogen stores are insufficient.
3. **Misidentifying the 3 bypasses:** Students often miss that pyruvate carboxylase is a carboxylation (adds CO₂), while PEPCK is a decarboxylation (releases CO₂) — both together convert pyruvate to PEP.

#### Worked Micro-Example: Lactate to Glucose

Lactate (from anaerobic muscle) enters the Cori cycle. In the liver:
- **Lactate → Pyruvate** via lactate dehydrogenase (NAD⁺ required)
- **Pyruvate → OAA** via pyruvate carboxylase (ATP + CO₂ consumed)
- **OAA → PEP** via PEPCK (GTP consumed)
- F1,6BP → F6P (F1,6-bisphosphatase)
- G6P → Glucose (glucose-6-phosphatase, requires transport into ER lumen)

**Total cost:** 6 ATP equivalents per glucose synthesized from 2 pyruvate molecules (derived from 2 lactate).

#### Clinical Integration

- **Von Gierke disease (G6Pase deficiency):** Severe fasting hypoglycemia, hepatomegaly, lactic acidosis — the liver cannot release free glucose despite adequate G6P accumulation.
- **Pyruvate carboxylase deficiency:** Severe hypoglycemia, ketosis, lactic acidosis; presents in infancy; survival requires alternative energy sources.
- **Fructose-1,6-bisphosphatase deficiency:** Impaired gluconeogenesis; triggers hypoglycemia and ketosis during fasting or fructose ingestion.

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
