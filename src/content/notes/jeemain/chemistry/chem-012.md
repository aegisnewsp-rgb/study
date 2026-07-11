---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-012
topicName: Solutions
weight: 3
country: india
generated: "2026-03-28T21:09:48"
lastUpdated: "2026-07-11"
---

# Solutions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your JEE Main attempt.

A **solution** is a homogeneous mixture of two or more components, classified by physical state into solid, liquid, or gaseous solutions. The **solute** is the component present in smaller amount; the **solvent** is the medium of dissolution present in larger amount.

#### Concentration units you must convert between:

| Unit | Formula | Depends on |
|---|---|---|
| Molarity (M) | mol solute / L solution | Volume (T-dependent) |
| Molality (m) | mol solute / kg solvent | Mass (T-independent) |
| Mole fraction (x) | mol component / total mol | Dimensionless, Σx = 1 |

**Raoult's Law** (volatile component): P_A = p_A° · x_A; for a non-volatile solute, relative lowering of vapour pressure Δp/p° equals x_solute. Colligative properties (ΔT_b, ΔT_f, π) depend only on particle count and are corrected by the **van't Hoff factor (i)**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Raoult's Law and Vapour Pressure
For an **ideal binary liquid solution**, Raoult's Law gives the partial pressure of each component as its pure vapour pressure multiplied by its mole fraction: p_A = p_A° · x_A and p_B = p_B° · x_B. By Dalton's Law, P_total = p_A°x_A + p_B°x_B.

When A–B intermolecular forces are weaker than A–A and B–B, the solution shows **positive deviation** (e.g., ethanol + cyclohexane) and forms a **minimum-boiling azeotrope**. When A–B interactions are stronger, it shows **negative deviation** (e.g., chloroform + acetone, HNO₃ + H₂O) and forms a **maximum-boiling azeotrope**. Azeotropes cannot be separated by simple distillation.

> **Exam tip:** JEE frequently frames an assertion-reason around "all positive-deviation solutions have minimum-boiling azeotropes" — true, but the reverse is the easier trap.

#### Colligative Properties
Four properties depend only on solute particle concentration, not identity:

1. **Relative lowering of vapour pressure:** (p° − p_s)/p° = x_solute
2. **Elevation of boiling point:** ΔT_b = K_b · m
3. **Depression of freezing point:** ΔT_f = K_f · m
4. **Osmotic pressure (van't Hoff equation):** π = MRT

#### van't Hoff Factor (i)
For electrolytes, i accounts for dissociation (NaCl → i ≈ 2; CaCl₂ → i ≈ 3; K₃[Fe(CN)₆] → i ≈ 4). For associated solutes (benzoic acid in benzene), i < 1.

- Degree of dissociation: α = (i − 1)/(n − 1)
- Degree of association: α = (1 − i)/(1 − 1/n)

> **Trap alert:** Osmotic pressure numericals with an "abnormal molar mass" (e.g., dimerising solute) expect M_observed = i · M_theoretical used **inverted** from the molar-mass formula — read the question stem twice.

#### Osmotic Phenomena and Henry's Law
**Isotonic** solutions share the same π. **Reverse osmosis** applies external pressure > π to desalinate seawater. **Henry's Law** (p = K_H · x) governs gas solubility; K_H rises with temperature, so gas solubility in water typically drops on heating.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases in Concentration Conversions
Molarity and molality interconversion uses solution density (ρ, g mL⁻¹):

$$M = \frac{m \cdot \rho \cdot 1000}{1000 + m \cdot M_{solute}}$$

For dilute aqueous solutions ρ ≈ 1.0 g mL⁻¹, so M ≈ m numerically — but in H₂SO₄, NaOH, or non-aqueous solvents, this approximation fails and JEE questions explicitly provide density. A 1.5 M H₂SO₄ solution (ρ = 1.10 g mL⁻¹) has molality ≈ 1.63 m, a ~9% difference.

#### Worked Micro-Example (van't Hoff + Osmotic Pressure)
A 0.5% (w/v) solution of a protein has osmotic pressure 0.02 atm at 27 °C. Estimate molar mass assuming i = 1.

Using π = (w · R · T)/(M · V) with w/V = 0.5 g / 0.1 L = 5 g L⁻¹:

$$M = \frac{wRT}{\pi V} = \frac{5 \times 0.0821 \times 300}{0.02} \approx 6157 \text{ g mol}^{-1}$$

If the protein dimerises at this concentration (i = 0.5), M_observed = i · M_true, so true molar mass ≈ 12,314 g mol⁻¹ — a classic JEE two-step numerical.

#### Adjacent Topics and Strategy
Solutions connects directly to **Electrochemistry** (Kohlrausch's law uses limiting molar conductivity from infinite dilution), **Chemical Kinetics** (pseudo-first-order reactions in large solvent excess), and **Equilibrium** (partition coefficient, distribution law). In JEE Main (~3% weightage, typically 1 question), expect a single MCQ or numerical worth +4 marks, solvable in under 90 seconds if you recall the i-correction formula. Skip lengthy azeotropy derivations — focus on numerical fluency with K_b (water = 0.52 K kg mol⁻¹), K_f (water = 1.86 K kg mol⁻¹), and K_H (O₂ in water at 298 K ≈ 34.86 k bar).

#### Common Mistakes Recap
- Confusing M and m → wrong answer in density-given problems.
- Forgetting i for electrolytes → answer is off by factor of 2 or 3.
- Applying Raoult's Law with x_solute instead of x_solvent for Δp/p°.

> **Time strategy:** If a question pairs a colligative property with a dissociation constant K_a or K_sp, expect α → i conversion first, then plug into ΔT_f or π.

#### Practice Prompts
1. **Numerical:** A solution of 1.2 g of a non-electrolyte in 50 g water freezes at −0.74 °C. Calculate molar mass. (K_f = 1.86; answer ≈ 60.3 g mol⁻¹)
2. **Conceptual:** Justify why a mixture of 95.6% ethanol + 4.4% water (the ethanol–water azeotrope) cannot yield 100% ethanol by fractional distillation.

---

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Solutions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeemain/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
