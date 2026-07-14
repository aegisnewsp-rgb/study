---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-005
topicName: Pharmacokinetics — Metabolism
weight: 3
country: southafrica
generated: "2026-04-09T20:00:00"
lastUpdated: "2026-07-14"
---

# Pharmacokinetics — Metabolism

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Definition:** Biotransformation is the enzyme-mediated biochemical conversion of a drug, mostly in the **liver**, into more polar metabolites for excretion.
- **Phase I** (oxidation, reduction, hydrolysis) is catalysed mainly by **cytochrome P450** isoforms (CYP3A4, CYP2D6, CYP2C9, CYP1A2) and exposes or adds a functional group.
- **Phase II** conjugates the drug or its Phase I metabolite with glucuronic acid, sulphate, acetyl, methyl or glutathione, sharply increasing water solubility.
- **Well-stirred hepatic extraction ratio:** `Eh = (fu × CLint) / (Qh + fu × CLint)`, where `fu` is the fraction unbound in plasma and `Qh` is hepatic blood flow (~1.5 L/min).
- **Oral bioavailability with first-pass loss:** `F = Fabs × (1 − Eh) × Flung`.
- **First-pass** occurs in gut wall, liver, and lungs; drugs with high `Eh` (e.g. propranolol, lidocaine) lose a large fraction of the absorbed dose.
- **Pro-drugs** (enalapril → enalaprilat, codeine → morphine) require metabolism for activity; conversely some metabolites retain activity (e.g. desmethyldiazepam).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### The LADME Position of Metabolism
Metabolism sits between **Absorption** and **Distribution** in the LADME model. It is the only step that chemically alters the drug molecule, and it governs whether an absorbed dose reaches the systemic circulation unchanged.

#### Phase I Reactions
Phase I introduces, unmasks, or modifies a functional group, slightly increasing polarity. The dominant enzyme system is **CYP450**, a haem-thiolate superfamily located primarily in hepatocyte smooth endoplasmic reticulum. Important isoforms and typical substrates:

| Isoform | Example substrates |
|---|---|
| CYP3A4 | midazolam, simvastatin, nifedipine |
| CYP2D6 | codeine, metoprolol, tramadol |
| CYP2C9 | warfarin, phenytoin |
| CYP1A2 | theophylline, caffeine |

#### Phase II Reactions
Phase II conjugates the drug (or its Phase I product) with an endogenous substrate via transferases — UGT, SULT, NAT, COMT, GST. Conjugates are usually inactive, highly polar, and rapidly renally excreted.

#### First-Pass and Bioavailability
The **well-stirred liver model** gives:

`CLh = Qh × Eh`, where `Eh = (fu × CLint) / (Qh + fu × CLint)`.

Two clinical categories follow:

- **High-extraction drugs (Eh > 0.7):** clearance depends on **Qh**. Bioavailability is sensitive to hepatic blood flow changes (cirrhosis, congestive heart failure) but not to altered `fu` or enzyme activity.
- **Low-extraction drugs (Eh < 0.3):** clearance depends on **enzyme activity and `fu`**. Bioavailability is largely preserved, but disease- or drug-induced changes in protein binding or `CLint` matter.

> Mnemonic: **"High-Eh drugs are Flow-limited; Low-Eh drugs are Capacity-limited."**

#### Enzyme Induction vs Inhibition

| Effect | Mechanism | Clinical consequence | Examples |
|---|---|---|---|
| Induction | ↑ CYP synthesis over days | ↓ substrate AUC, possible therapeutic failure | rifampicin, carbamazepine, St John's wort, chronic alcohol |
| Inhibition | ↓ CYP activity (competitive, mechanism-based) | ↑ substrate AUC, toxicity risk | ketoconazole, erythromycin, grapefruit juice (CYP3A4), fluvoxamine |

Induction needs enzyme turnover time (~1 week) before peak effect; inhibition acts within hours.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Pharmacogenomic Variability in South African Practice
**CYP2D6 polymorphism** is highly relevant in South African prescribing. The population distribution of poor, intermediate, extensive and ultrarapid metabolisers shifts therapeutic decisions for **codeine** (CYP2D6 converts to morphine — ultrarapid metabolisers risk opioid toxicity), **tamoxifen** (CYP2D6 converts to endoxifen), and certain antidepressants and antipsychotics. **CYP2C19** variants similarly affect proton pump inhibitor and clopidogrel activation. **NAT2 acetylation polymorphism** stratifies patients on **isoniazid** into slow and fast acetylators, altering hepatotoxicity and lupus risk.

#### Worked Example — Hepatic Extraction Calculation
A drug has `Qh = 1.5 L/min`, `fu = 0.1`, and `CLint = 9 L/min`.

```
Eh = (0.1 × 9) / (1.5 + 0.1 × 9) = 0.9 / 2.4 = 0.375
CLh = Qh × Eh = 1.5 × 0.375 = 0.5625 L/min
```

This is a **moderate-extraction** drug: clearance is influenced by both blood flow and enzyme capacity. A 50 % drop in `CLint` (e.g. enzyme inhibition) lowers `Eh` to `0.23` and `CLh` to `0.345 L/min`, increasing AUC by ~63 %.

#### Active Metabolites and Toxicity
Phase I is not detoxifying by default. **Paracetamol** is metabolised by CYP2E1 to **NAPQI**, a reactive intermediate detoxified by glutathione; overdose depletes glutathione and produces centrilobular hepatic necrosis. **Diazepam → desmethyldiazepam**, **amitriptyline → nortriptyline**, and **morphine (from codeine)** are clinically active.

#### Adjacent Topic Links
- Connects directly to **Pharmacokinetics — Absorption** (presystemic loss), **Distribution** (`fu` dependency) and **Excretion** (polarity for renal/biliary clearance).
- Underpins **Drug Interactions** in the SAPC syllabus.
- Provides the kinetic basis for **Therapeutic Drug Monitoring** decisions.

#### Common Exam Traps
- Confusing **induction** (lowers concentration) with **inhibition** (raises concentration) when two interacting drugs are named.
- Forgetting that the **same equation** `Eh = (fu × CLint) / (Qh + fu × CLint)` simplifies: at very high `CLint`, `Eh → 1`; at very low `CLint`, `Eh → 0`.
- Assuming Phase II always inactivates — **morphine-6-glucuronide** is a potent active metabolite.

#### Practice Prompts
1. **Calculation:** A 70 kg patient receives an oral dose of a low-extraction drug (`Eh = 0.2`, `Fabs = 0.9`, `Flung = 1`). What is the effective bioavailability? *(Answer: 0.72)*
2. **Clinical scenario:** A patient on warfarin starts rifampicin for TB. Predict the interaction, its time-course, and the monitoring action required.

---

## Continue your study

- **[View this topic in your SAPC (South Africa) roadmap](/roadmap/?exam=sa-pharm&duration=1mo)** — see where "Pharmacokinetics — Metabolism" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sa-pharm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SAPC (South Africa) exam overview](/exams/sa-pharm/)** — pattern, eligibility, and syllabus
- **[All Pharmacy notes](/notes/sa-pharm/pharmacy/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
