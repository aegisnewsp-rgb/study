---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: chemistry
subjectName: Chemistry
topic: chem-7
topicName: "Acids, Bases and Ionic Equilibrium"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.057340"
lastUpdated: "2026-09-07"
diagramPrompt: "Clear scientific diagram of Acids, Bases and Ionic Equilibrium with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Acids, Bases and Ionic Equilibrium

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Arrhenius:** acids release H⁺, bases release OH⁻ in water.
- **Brønsted–Lowry:** acids donate H⁺, bases accept H⁺; each pair is a *conjugate pair*.
- **Lewis:** acids accept an electron pair, bases donate one (covers non-proton systems).
- **Strong vs weak:** strong electrolytes dissociate fully (α ≈ 1); weak electrolytes partially, governed by **Ka** or **Kb**.
- **Water autoprotolysis:** Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C.
- **pH scale:** pH = –log[H⁺]; pH + pOH = 14 at 25 °C; acidic < 7, neutral = 7, basic > 7.
- **Ostwald dilution law:** for a weak acid, α = √(Ka/C) when α ≪ 1.

| Quantity | Formula | Units |
| --- | --- | --- |
| Kw | [H⁺][OH⁻] | mol²/L² |
| pH | –log[H⁺] | dimensionless |
| α (weak acid) | √(Ka/C) | dimensionless |

**High-yield for ECAT:** master pH from Ka/C, the Henderson–Hasselbalch buffer pH, and salt hydrolysis direction — three MCQs almost every paper.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Acid–Base Definitions in Depth

Arrhenius restricts acids and bases to aqueous H⁺ and OH⁻ producers. Brønsted–Lowry generalises this to proton transfer: HA + B ⇌ A⁻ + BH⁺, where HA/A⁻ and B/BH⁺ are two conjugate pairs. Lewis goes further, defining acids as electron-pair acceptors (e.g., BF₃, AlCl₃) and bases as donors (NH₃, H₂O). ECAT MCQs often ask you to identify conjugate pairs in a written reaction or pick the Lewis acid from a list.

#### Dissociation Constants and pH of Weak Acids

For HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA]. A larger Ka means a stronger acid. When α is small, [H⁺] ≈ Cα and [HA] ≈ C, so Ka ≈ Cα², giving the working expression α = √(Ka/C) and [H⁺] = √(Ka·C). ECAT numericals give Ka and C; you solve for pH in three lines. The same pattern holds for weak bases using Kb and [OH⁻].

| Scenario | Working equation | Resulting pH form |
| --- | --- | --- |
| Strong acid, conc. C | [H⁺] = C | pH = –log C |
| Weak acid, conc. C | [H⁺] = √(Ka·C) | pH = ½(pKa – log C) |
| Strong base, conc. C | [OH⁻] = C | pH = 14 + log C |
| Weak base, conc. C | [OH⁻] = √(Kb·C) | pH = 14 – ½(pKb – log C) |

#### Buffers and the Henderson–Hasselbalch Equation

A buffer pairs a weak acid with its conjugate base (or weak base with conjugate acid). Its pH is pH = pKa + log([A⁻]/[HA]). The equation stays accurate when the ratio [A⁻]/[HA] lies between 0.1 and 10; outside that window, the buffer capacity collapses. ECAT frequently tests buffer preparation: choose the weak acid whose pKa is closest to the desired pH.

- **Common ion effect:** adding a salt that shares an ion (e.g., NaA to HA) suppresses α of the weak electrolyte.
- **Hydrolysis of salts:** salt of weak acid + strong base → basic; weak base + strong acid → acidic; strong + strong → neutral.
- **Kh = Kw/Ka** (acidic salt) or **Kw/Kb** (basic salt) gives the hydrolysis constant.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Solubility Product and Precipitation

For a sparingly soluble salt like AgCl ⇌ Ag⁺ + Cl⁻, Ksp = [Ag⁺][Cl⁻]. For CaF₂ ⇌ Ca²⁺ + 2F⁻, Ksp = [Ca²⁺][F⁻]² = 4s³ (where s is molar solubility in mol/L). Compare the ionic product Q with Ksp: Q > Ksp precipitates, Q = Ksp saturated, Q < Ksp unsaturated. Stoichiometry matters — never write Ksp = s² for a non-1:1 salt.

#### Worked Example: Buffer pH

Prepare 0.20 M acetic acid (Ka = 1.8 × 10⁻⁵) with 0.30 M sodium acetate. pKa = –log(1.8 × 10⁻⁵) = 4.74. Apply Henderson–Hasselbalch:
pH = 4.74 + log(0.30 / 0.20) = 4.74 + log 1.5 = 4.74 + 0.18 = 4.92.
On adding 0.01 mol HCl to 1 L, [HA] rises by ≈0.01 and [A⁻] falls by ≈0.01, so pH ≈ 4.74 + log(0.29/0.21) = 4.74 + 0.14 = 4.88. The pH moved only 0.04 units — buffer resistance in action.

#### Edge Cases and Examiner Traps

- **Temperature shifts Kw:** at 50 °C, Kw ≈ 5.5 × 10⁻¹⁴, so neutral pH ≈ 6.63, not 7.
- **Ka × Kb = Kw** for a conjugate pair, not Ka = Kb.
- **Indicator choice:** phenolphthalein (range 8.2–10) suits weak acid–strong base; methyl orange (3.1–4.4) suits strong acid–weak base.
- **Dilution paradox:** diluting a weak acid raises α but lowers [H⁺], so pH rises toward 7.
- **Kohlrausch’s law:** molar conductivity of a weak electrolyte rises steeply with dilution; strong electrolytes show a linear trend.

| Common ECAT trap | Correction |
| --- | --- |
| Ksp = s² for CaF₂ | Ksp = 4s³ |
| pH + pOH = 14 at all T | Only at 25 °C |
| NaCl hydrolyses | It does not — neutral salt |
| [H⁺] = C for 10⁻⁸ M HCl | Include water auto-ionisation |

#### Practice prompts:
1. A 0.050 M weak acid has Ka = 4.0 × 10⁻⁶. Find pH and α.
2. Will a precipitate form when 200 mL of 0.010 M AgNO₃ is mixed with 300 mL of 0.0050 M NaCl? (Ksp AgCl = 1.8 × 10⁻¹⁰.)

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Acids, Bases and Ionic Equilibrium" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/ecat/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
