---
exam: utbk
examName: UTBK/SNPMTN (Indonesia)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-008
topicName: Calorimetry and Heat Capacity
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# Calorimetry and Heat Capacity

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Termokimia** tracks the heat (enthalpy, **H**) exchanged during a chemical reaction or physical change. The must-know formula for calorimetry is **q = m · c · ΔT**, where *m* is mass (g), *c* is specific heat capacity (J g⁻¹ K⁻¹), and ΔT is the temperature change (K or °C). For a coffee-cup calorimeter, **q_reaction = −q_solution**. Two sign conventions to memorise: **exothermic** reactions release heat (**ΔH < 0**, system loses energy); **endothermic** reactions absorb heat (**ΔH > 0**). Hess's Law lets you calculate ΔH by adding intermediate reactions — flip a reaction reverses the sign, multiply coefficients multiplies ΔH. For UTBK, expect 1–2 questions: one calorimetry numerical plus one Hess's Law multi-step reaction. Watch the sign on the energy-of-bonds formula: **ΔH = Σ bonds broken (reactants) − Σ bonds formed (products)**. Always include physical states (s, l, g, aq) in thermochemical equations.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Calorimetry and Heat Capacity

A **calorimeter** isolates a reaction so that q_system + q_surroundings = 0. In a simple (open) calorimeter, the surroundings are the solution, so q_reaction = −(m · c · ΔT)_solution. Use **c_water = 4.18 J g⁻¹ K⁻¹**. When the calorimeter itself absorbs heat, use the **heat capacity of the calorimeter (C_cal, J K⁻¹)** and write q_reaction = −(m·c·ΔT + C_cal·ΔT). A **bomb calorimeter** operates at constant volume, so the measured heat equals the change in internal energy (q_v = ΔU), not ΔH — important for combustion of gases where Δn_gas ≠ 0.

#### Hess's Law

**Hess's Law** states that ΔH is a state function: it depends only on the initial and final states. To use it:

1. Write the target reaction.
2. Manipulate given reactions — reverse a reaction flips the sign of its ΔH; multiply coefficients by *n* multiplies ΔH by *n*.
3. Add them so intermediates cancel.

#### Standard Enthalpies

- **ΔH°f** = enthalpy of formation of 1 mol of compound from its elements in standard states (298 K, 1 atm); ΔH°f of any element in its standard state is **0**.
- **ΔH°c** = enthalpy of combustion of 1 mol of a substance with excess O₂.
- Calculation: **ΔH°_rxn = Σ ΔH°f(products) − Σ ΔH°f(reactants)**, with each ΔH°f multiplied by its stoichiometric coefficient.

#### Bond Energies

**ΔH_rxn = Σ BE(reactants) − Σ BE(products)**, where BE is the average bond energy (kJ mol⁻¹). Bond breaking is endothermic (+), bond forming is exothermic (−); the net gives the sign of ΔH.

| Quantity | Formula | Sign convention |
|---|---|---|
| Heat absorbed by solution | q = m·c·ΔT | + if T rises |
| Reaction enthalpy (open calorimeter) | q_rxn = −q_solution | − for exothermic |
| From formation enthalpies | Σ ΔH°f(prod) − Σ ΔH°f(react) | follows sign directly |
| From bond energies | Σ BE(react) − Σ BE(prod) | − for exothermic |

#### Typical UTBK Question Patterns

- Numerical: 50 mL of 1.0 M HCl mixed with 50 mL of 1.0 M NaOH; ΔT = 6.8 °C. Compute q, then ΔH per mole of water formed.
- Conceptual: which reaction has the largest −ΔH°f? (Most stable product from its elements.)
- Multi-step Hess: given three reactions with ΔH values, calculate ΔH of a target.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Subtleties

**ΔH vs ΔU.** For reactions in solution (ΔV ≈ 0) or in an open calorimeter, ΔH ≈ q_p. Only a bomb calorimeter gives ΔU, and the two are related by **ΔH = ΔU + Δn_gas·RT**. UTBK rarely tests this conversion, but recognising the distinction prevents losing a "why is q_v not equal to ΔH?" conceptual question.

**Why physical state matters.** H₂O(l) and H₂O(g) have ΔH°f of −285.8 and −241.8 kJ mol⁻¹ respectively. Using the gaseous value in a problem where water condenses would give a ΔH answer off by 44 kJ mol⁻¹ — a classic trap.

**Lavosier–Laplace Law.** The enthalpy change of a forward reaction equals minus the enthalpy change of the reverse reaction at the same temperature; this is a special case of Hess's Law and is sometimes quoted separately in UTBK passages.

#### Common Mistakes to Avoid

1. Forgetting to flip the sign of ΔH when reversing a reaction in Hess cycles.
2. Mixing up Σ ΔH°f(prod) − Σ ΔH°f(react) with Σ ΔH°c(prod) − Σ ΔH°c(react). The **combustion version uses reactants minus products** because combustion is the *reverse* of forming the compound from CO₂ and H₂O.
3. Treating the calorimeter as having zero heat capacity when a value for C_cal is provided.
4. Dividing q by mass of solute instead of moles of reaction when asked for "ΔH per mole of reaction".

#### Connections to Other Topics

Termokimia links to **chemical equilibrium** (van 't Hoff equation: d(ln K)/dT = ΔH°/RT²), **electrochemistry** (ΔG° = −nFE°, and ΔG° = ΔH° − TΔS°), and **kinetics** (activation energy E_a is the kinetic analogue of the enthalpy barrier). UTBK sometimes embeds thermochemistry inside a longer passage that also tests entropy or Gibbs free energy — read for sign conventions consistently.

#### Worked Micro-Example

Combustion of methane: CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), ΔH° = −890 kJ mol⁻¹. Using ΔH°f values: ΔH° = [ΔH°f(CO₂) + 2·ΔH°f(H₂O,l)] − [ΔH°f(CH₄) + 2·ΔH°f(O₂)] = [−393.5 + 2(−285.8)] − [−74.8 + 0] = −965.1 + 74.8 = **−890.3 kJ mol⁻¹** ✓.

#### Practice Prompts

1. Given ΔH°f of CS₂(l) = +89.7 kJ mol⁻¹, CO₂(g) = −393.5 kJ mol⁻¹, SO₂(g) = −296.8 kJ mol⁻¹, calculate ΔH° for CS₂(l) + 3 O₂(g) → CO₂(g) + 2 SO₂(g).
2. A 1.20 g sample of benzoic acid (M = 122 g mol⁻¹) is burned in a bomb calorimeter (C_cal = 8.92 kJ K⁻¹) and T rises by 2.45 K. Find the internal energy change ΔU per mole of benzoic acid.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
