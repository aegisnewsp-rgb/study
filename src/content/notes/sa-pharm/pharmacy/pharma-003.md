---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-003
topicName: Pharmacokinetics — Absorption
weight: 3
country: southafrica
generated: "2026-04-09T20:00:00"
lastUpdated: "2026-07-14"
---

# Pharmacokinetics — Absorption

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Absorption** is the movement of an intact drug molecule from its administration site across a biological membrane into the systemic circulation, characterised by two parameters: rate (*k*ₐ) and extent (bioavailability, *F*). The governing equation for overall oral bioavailability is **F = fₐ × f_g × f_h**, where *f*ₐ is the fraction absorbed from the dosage form, *f*_g is the fraction surviving gut-wall metabolism (largely CYP3A4), and *f*_h is the fraction escaping hepatic first-pass metabolism.

| Parameter | What it measures | Typical unit |
|---|---|---|
| *F* | Extent of systemic availability | Dimensionless (0–1) |
| *C*_max | Peak plasma concentration | mg/L |
| *t*_max | Time to reach *C*_max | hours |
| AUC | Total systemic exposure | mg·h/L |

> **Exam tip:** A single oral dose of an IV-equivalent drug gives *F* = AUC_oral/AUC_IV × (Dose_IV/Dose_oral). Expect a calculation short-answer.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Routes and driving forces

Most clinically relevant absorption occurs via **transcellular passive diffusion**, governed by **Fick's first law**: d*Q*/d*t* = −*D* × *A* × (d*C*/d*x*). For a drug to diffuse readily, it must traverse the lipid bilayer in a largely **unionised, lipophilic form**. The **pH-partition hypothesis** (Shore, Brodie, Hogben) uses the **Henderson–Hasselbalch relationship** to predict the ionisation ratio across a pH gradient.

#### Mechanisms of membrane transport

- **Passive diffusion** — no carrier, follows concentration gradient (transcellular or paracellular for small hydrophilic molecules).
- **Facilitated diffusion** — carrier-mediated, saturable, no ATP (e.g. vitamin B₁₂ via intrinsic factor).
- **Active transport** — carrier-mediated, ATP-dependent, against the gradient (e.g. L-dopa, methotrexate).
- **Efflux transport** — P-glycoprotein (P-gp, ABCB1) pumps substrate back into the gut lumen, lowering *f*_g.
- **Lymphatic uptake** — bypasses hepatic first-pass, important for highly lipophilic drugs (log P > 5) and triglyceride-solvated compounds.

#### Determinants of absorption rate and extent

| Factor class | Examples | Effect |
|---|---|---|
| Physicochemical | log *P*, p*K*ₐ, molecular weight, polymorphism, salt form | Govern permeation and dissolution |
| Physiological | GI pH, gastric emptying rate, splanchnic blood flow, disease state | Alters contact time and gradient |
| Formulation | Disintegration, dissolution, particle size, excipients, dosage form | Modifies *f*ₐ and *k*ₐ |

#### Bioavailability versus bioequivalence

The **Biopharmaceutics Classification System (BCS)** groups drugs by solubility and permeability:

| BCS class | Solubility | Permeability | Absorption risk |
|---|---|---|---|
| I | High | High | Formulation-independent |
| II | Low | High | Dissolution-limited |
| III | High | Low | Permeability-limited |
| IV | Low | Low | Variable, often poor |

For SAPC registration of multisource (generic) products, BCS-based biowaivers apply mainly to Class I and III compounds.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### First-pass effect — clinical consequences

Oral drugs absorbed from the small intestine enter the **portal circulation** and pass through the liver before reaching systemic arteries. Drugs metabolised extensively by CYP3A4 (e.g. midazolam, felodipine) or by hepatic conjugation (e.g. nitroglycerin, *F* < 1%) show dramatic reductions in *F*. Strategies to bypass this include sublingual (nitroglycerin), transdermal (fentanyl), rectal, or inhalation routes.

#### Pharmacokinetic profile of an orally absorbed drug

For a one-compartment model with first-order absorption and elimination:

> **t_max = ln(*k*ₐ/*k*_e) / (*k*ₐ − *k*_e)** ; **C_max = (F·Dose/*V*_d) · e^(−*k*_e·t_max)**

Increasing *k*ₐ (e.g. by micronisation, use of a solution, or salt selection) shifts *t*_max earlier and raises *C*_max, but does **not** change AUC. Conversely, increasing *F* raises AUC and *C*_max proportionally without altering *t*_max — an exam-favourite distinction.

#### Common traps

- **Weak acids are better absorbed from the small intestine** (higher pH → more unionised fraction available despite lower total solubility), not from the stomach.
- **High log *P* does not guarantee high absorption**: lipophilic BCS Class II drugs (e.g. griseofulvin, danazol) may dissolve too slowly to be absorbed completely.
- **Confusing *F* with *k*ₐ**: extent is independent of speed; rapid absorption can still yield low bioavailability if first-pass metabolism is extensive.

#### Practice prompts

1. A 500 mg oral dose of drug X yields AUC = 80 mg·h/L; the same patient receives 250 mg IV with AUC = 95 mg·h/L. Calculate the absolute bioavailability and interpret the result in the context of formulation and first-pass losses.
2. Explain, using the pH-partition hypothesis and a p*K*ₐ of 4.2, why a weak acid such as ibuprofen (p*K*ₐ 4.9) is poorly absorbed from the stomach but well absorbed from the duodenum.

---

## Continue your study

- **[View this topic in your SAPC (South Africa) roadmap](/roadmap/?exam=sa-pharm&duration=1mo)** — see where "Pharmacokinetics — Absorption" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sa-pharm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SAPC (South Africa) exam overview](/exams/sa-pharm/)** — pattern, eligibility, and syllabus
- **[All Pharmacy notes](/notes/sa-pharm/pharmacy/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
