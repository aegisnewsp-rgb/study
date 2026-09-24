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
lastUpdated: "2026-09-24"
---

# Glycolysis and Gluconeogenesis

### 🟢 Lite — Quick Review (1h–1d)
> Net ATP, irreversible steps, and the bypass enzymes — these three facts decide most NEET PG MCQs on this topic.

Glycolysis splits a single glucose into two pyruvates in the cytosol, banking **2 ATP net** (4 made, 2 spent) and **2 NADH**. Three steps are physiologically irreversible: hexokinase (or glucokinase), phosphofructokinase-1, and pyruvate kinase. Gluconeogenesis is mostly glycolysis run backwards, but each irreversible step is bypassed by a dedicated enzyme — **glucose-6-phosphatase**, **fructose-1,6-bisphosphatase**, and the **pyruvate carboxylase → PEPCK** pair — costing **4 ATP + 2 GTP + 2 NADH** per glucose.

| Feature | Glycolysis | Gluconeogenesis |
|---|---|---|
| Net high-energy phosphate cost | +2 ATP, +2 NADH | −4 ATP, −2 GTP, −2 NADH (6 total) |
| Irreversible / bypass enzymes | HK/GK, PFK-1, PK | G6Pase, FBPase-1, PC + PEPCK |
| Cellular site | Cytosol | Cytosol + mitochondria + ER |
| Key hormonal signal | Insulin (anabolic) | Glucagon, cortisol (catabolic) |

> 💡 **High-Yield Memory Hook:** **"HFP / GFP"** — the three irreversible glycolytic enzymes are **H**exokinase, **P**FK-1, **P**ruvate kinase; the gluconeogenic bypasses are **G**lucose-6-phosphatase, **F**BPase-1, **P**C + PEPCK. Same letters, opposite direction.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Read this tier end-to-end before touching past papers — every enzyme, every shuttle, and every yield question is built on the steps below.

#### The Ten Steps, Split Into Two Phases

The pathway runs in the cytosol and is split at the aldolase reaction into an energy-investment phase and a payoff phase.

- **Preparatory (investment) phase — glucose → fructose-1,6-bisphosphate:** glucose → glucose-6-phosphate (**hexokinase** in most tissues, **glucokinase** in hepatocytes/β-cells; −1 ATP) → fructose-6-phosphate → fructose-1,6-bisphosphate (**PFK-1**, the rate-limiting step; −1 ATP).
- **Payoff phase — glyceraldehyde-3-phosphate → pyruvate:** aldolase cleaves F-1,6-BP into DHAP and G3P (DHAP is converted to G3P by triose phosphate isomerase, so both halves of glucose continue). GAPDH produces **2 NADH** and a high-energy acyl-phosphate (1,3-BPG); phosphoglycerate kinase and pyruvate kinase together yield **4 ATP** by substrate-level phosphorylation.

Net ledger: **2 ATP in, 4 ATP out, 2 NADH out — net +2 ATP and +2 NADH per glucose.** The standard aerobic oxidation of one glucose to CO₂ + H₂O produces ≈30–32 ATP, depending on which shuttle (glycerol-3-phosphate vs malate–aspartate) reoxidises the cytosolic NADH.

#### Hexokinase vs Glucokinase

These two enzymes catalyse the same reaction with very different kinetics and roles, and examiners test the distinction every year.

| Property | Hexokinase | Glucokinase |
|---|---|---|
| K_m for glucose | ≈0.1 mM (high affinity, saturated at fasting glucose) | ≈10 mM (low affinity, only active after a meal) |
| Inhibition by glucose-6-phosphate | Yes (product feedback) | No |
| Tissue distribution | Ubiquitous | Hepatocytes, pancreatic β-cells |
| Function | Basal glucose uptake | Postprandial glucose disposal; β-cell glucose sensor |
| Induction by insulin | No | Yes |

#### The Three Bypasses in Gluconeogenesis

Gluconeogenesis is not a mirror image — it uses three unique enzymatic detours around the irreversible glycolytic steps.

1. **Pyruvate → oxaloacetate (mitochondria):** **pyruvate carboxylase**, biotin-dependent, obligate activator **acetyl-CoA**. This commits pyruvate to gluconeogenesis when acetyl-CoA accumulates (e.g., fasting, β-oxidation).
2. **Oxaloacetate → PEP:** **PEPCK**, the GTP-consuming step; exists in cytosolic and mitochondrial isoforms (glucagon and thyroxine induce the cytosolic form; glucocorticoids also induce PEPCK).
3. **Fructose-1,6-bisphosphate → fructose-6-phosphate:** **FBPase-1**, cytosolic, releases inorganic phosphate.
4. **Glucose-6-phosphate → glucose:** **glucose-6-phosphatase**, ER lumen in hepatocytes and renal cortex; absent from skeletal muscle, which therefore cannot release free glucose into blood.

Overall cost: **2 Pyruvate + 4 ATP + 2 GTP + 2 NADH + 6 H₂O → Glucose + 2 NAD⁺ + 4 ADP + 2 GDP + 6 Pᵢ.**

#### Fructose-2,6-bisphosphate — The Master Switch

PFK-2/FBPase-2 is a bifunctional enzyme whose kinase/phosphatase activity is flipped by cAMP/PKA phosphorylation.

- Fed state (insulin high, PKA low): the kinase domain dominates → **F-2,6-BP rises** → PFK-1 activated, FBPase-1 inhibited → glycolysis on.
- Fasted state (glucagon high, PKA active): the phosphatase domain dominates → **F-2,6-BP falls** → PFK-1 inhibited, FBPase-1 disinhibited → gluconeogenesis on.

PFK-1 activity scales with [F-2,6-BP] and inversely with [ATP], [citrate] and [H⁺] — the molecular basis of the Pasteur effect (anaerobic glycolysis rising when aerobic ATP generation is intact).

#### 🎯 Exam-Level Worked Problem

A patient presents with fasting hypoglycaemia, lactic acidosis, hepatomegaly and hypertriglyceridaemia. A liver biopsy shows absent glucose-6-phosphatase activity. Calculate how many high-energy phosphates the liver must expend to synthesise one glucose from two molecules of lactate, and identify which step is blocked in the fasted state.

#### Working it out:

1. Two lactate → two pyruvate (LDH, cytosolic; produces 2 NADH; K_m of LDH for pyruvate ≈ 0.05–0.1 mM).
2. Two pyruvate → two oxaloacetate (pyruvate carboxylase; uses 2 ATP equivalents via biotin activation — here counted within the 4 ATP total).
3. Two oxaloacetate → two PEP (PEPCK; uses 2 GTP).
4. Two PEP continue through the gluconeogenic trunk to 2 GAP-coupled-GAP; inversion via GAPDH consumes 2 NADH (reoxidising the lactate-derived NADH).
5. Net gluconeogenesis cost per glucose: **4 ATP + 2 GTP + 2 NADH = 6 high-energy phosphates**, in agreement with the textbook equation.
6. Diagnosis: **glycogen storage disease type I (von Gierke disease)**. The blocked step is the **glucose-6-phosphatase** reaction — the liver cannot release free glucose into blood during fasting, so glucose-6-phosphate is shunted into glycolysis, explaining the lactic acidosis; shunting into lipogenesis explains the hypertriglyceridaemia.

> ⚠️ **Examiner Trap:** Students often answer "PFK-1 deficiency" or "von Gierke is GSD type V". Von Gierke is **type I**; **type V** is McArdle (muscle phosphorylase deficiency). Also, do not write 4 ATP as the gluconeogenesis cost — the **2 GTP from PEPCK** is the forgotten third fuel.

#### Substrates That Actually Feed Gluconeogenesis

Humans cannot run the glyoxylate cycle, so acetyl-CoA from β-oxidation cannot yield net glucose. The real substrates are:

- **Lactate** (Cori cycle — muscle lactate → hepatic glucose).
- **Glycerol** (from adipose triacylglycerol lipolysis; enters via glycerol kinase → glycerol-3-phosphate → DHAP).
- **Glucogenic amino acids**, especially **alanine** (glucose–alanine cycle), **glutamine** (renal substrate), and most amino acids except leucine and lysine (purely ketogenic).

#### Cytosolic NADH Reoxidation

GAPDH-generated NADH must return to NAD⁺ or glycolysis stalls. Two shuttles carry reducing equivalents into the mitochondrion:

- **Malate–aspartate shuttle** (liver, heart): 1 cytosolic NADH → ≈2.5 ATP.
- **Glycerol-3-phosphate shuttle** (skeletal muscle, brain): 1 cytosolic NADH → ≈1.5 ATP.

This 1 ATP difference per NADH is why the textbook glucose yield is 30 or 32 ATP, and NEET PG regularly tests both numbers.

---

### 🔴 Extended — Deep Study (3mo+)
> Once the steps and enzymes are second nature, the exam separates rank holders from the rest by testing shuttles, isoenzymes, and inborn errors.

#### Tissue Isoenzymes Worth Memorising

- **Pyruvate kinase:** L-type (liver, allosterically activated by F-1,6-BP and inhibited by phosphorylation) vs M-type (muscle). The L-form is induced by insulin and high-carbohydrate feeding.
- **Hexokinase** I–III (low K_m, G6P-inhibited) vs **glucokinase** (hexokinase IV): glucokinase's high K_m lets the liver take up glucose only when blood glucose is elevated, sparing it for peripheral tissues in the fasted state.
- **PEPCK**: mitochondrial isoform in liver and kidney; cytosolic isoform induced by glucagon, glucocorticoids and thyroxine — a frequent MCQ stem.

#### F-2,6-BP Kinetics and the Warburg Effect

F-2,6-BP is the most potent allosteric activator of PFK-1 known; tumour cells overexpress PFK-2 and constitutively raise F-2,6-BP, locking PFK-1 "on". Combined with HIF-1-driven expression of pyruvate dehydrogenase kinase (which inactivates PDH) and lactate dehydrogenase A, the result is aerobic lactate production even with oxygen present — the **Warburg effect**, the metabolic basis for **¹⁸F-FDG-PET** imaging, since FDG-6-phosphate cannot be further metabolised and accumulates in tumour cells.

#### Common Errors Examiners Exploit

1. **Net ATP = 2**, not 4 — the two preparatory-phase ATPs are forgotten, so students pick the option "4 ATP net".
2. **Glucokinase has the higher K_m**, not the lower one; hexokinase is the low-K_m, G6P-inhibited, ubiquitous enzyme.
3. **Gluconeogenesis is not simply reversible glycolysis** — three unique bypasses and a 6 high-energy-phosphate cost must be stated.
4. **PEPCK consumes GTP**, not ATP — and both cytosolic and mitochondrial forms exist.
5. **Fatty acids do not yield glucose**: acetyl-CoA from β-oxidation is completely oxidised; humans lack the glyoxylate cycle.
6. **PFK-2 ≠ PFK-1**: PFK-1 makes F-1,6-BP (substrate); PFK-2 makes F-2,6-BP (regulator).

#### Clinical Correlations That Appear in MCQs

- **von Gierke disease (GSD I)** — glucose-6-phosphatase deficiency → fasting hypoglycaemia, lactic acidosis, hepatomegaly, hyperuricaemia, hyperlipidaemia.
- **Tarui disease (GSD VII)** — PFK-1 deficiency in muscle → haemolytic anaemia + exercise myopathy.
- **Pyruvate kinase deficiency** — ATP depletion in RBCs → haemolytic anaemia (the classic "low ATP, echinocytes" stem).
- **RBCs** depend entirely on anaerobic glycolysis and use the **Rapoport–Luebering shunt** (BPG mutase) to make 2,3-BPG, which lowers Hb-O₂ affinity.
- **Fasting lactate → hepatic glucose** is the **Cori cycle**; **alanine → glucose** is the **glucose–alanine cycle**; do not swap the two on the answer sheet.

#### Advanced Practice Prompts

1. A hepatocyte has cytosolic [ATP]/[ADP] = 8, [NADH]/[NAD⁺] = 0.05, high acetyl-CoA, and F-2,6-BP ≈ 0.02 mM. Predict the net flux at PFK-1/FBPase-1 and at pyruvate carboxylase, and justify each prediction with the dominant allosteric effector.
2. In a skeletal-muscle biopsy, lactate production continues despite arterial pO₂ of 95 mmHg. List three biochemical mechanisms that would force glycolysis to remain anaerobic (NADH-shuttle saturation, PDH inhibition, LDH induction), and explain how FDG-PET would distinguish a Warburg-type tumour from normal oxidative muscle on imaging.

---

## Continue your study

- **[View this topic in your NEET PG roadmap](/roadmap/?exam=neet-pg&duration=1mo)** — see where "Glycolysis and Gluconeogenesis" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neet-pg&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NEET PG exam overview](/exams/neet-pg/)** — pattern, eligibility, and syllabus
- **[All Biochemistry notes](/notes/neet-pg/biochemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
