---
exam: utbk
examName: UTBK/SNPMTN (Indonesia)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-005
topicName: Topic 5
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-06-18"
---

# Topic 5

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Thermochemistry** studies heat changes that accompany chemical reactions. The core quantity is **enthalpy (H)**, and the measurable quantity is the **change in enthalpy (ΔH)**:

$$\Delta H = H_{products} - H_{reactants}$$

- **Exothermic reactions** release heat → **ΔH < 0** (products sit lower on the energy diagram).
- **Endothermic reactions** absorb heat → **ΔH > 0** (products sit higher).
- Calorimetry equation: **q = m × c × ΔT**, where *m* is mass (g), *c* is specific heat (J g⁻¹ K⁻¹), and *ΔT* is temperature change. At constant pressure, **q_p = ΔH**.
- **Hess's Law**: ΔH of a reaction is the same whether it occurs in one step or many, because enthalpy is a **state function**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Variables and Sign Convention

Enthalpy (H) is a state function — its change depends only on initial and final states, not the path. By convention, a negative ΔH means the system loses energy to the surroundings (feels hot), while a positive ΔH means the system gains energy (feels cold).

#### Measuring ΔH: Calorimetry

In a simple calorimeter, a known mass *m* of solution is heated by a reaction. The heat exchanged is:

$$q = m \cdot c \cdot \Delta T$$

If the calorimeter itself absorbs heat (with heat capacity *C*), use **q = C × ΔT**. The reaction's ΔH is then **−q** (heat lost by reaction = heat gained by solution). A bomb calorimeter (constant volume) gives **q_v = ΔU** (internal energy change), while a coffee-cup calorimeter (constant pressure) gives **q_p = ΔH**.

#### Calculating ΔH from Formation Data

The standard enthalpy of formation (ΔH_f°) is the enthalpy change when **1 mole of a compound forms from its elements in their standard states**. By definition, **ΔH_f° = 0 for all elements in their standard state** (O₂, N₂, graphite, S₈, Hg(l), etc.).

$$\Delta H^\circ_{rxn} = \sum n \Delta H_f^\circ (products) - \sum n \Delta H_f^\circ (reactants)$$

Each ΔH_f° is multiplied by its **stoichiometric coefficient** *n* from the balanced equation.

#### Calculating ΔH from Bond Energies

Bond energy (E) is the energy required to break 1 mole of bonds in the gas phase. Breaking bonds **absorbs** energy (+E), forming bonds **releases** energy (−E). Therefore:

$$\Delta H_{rxn} = \sum E_{bonds\,broken} - \sum E_{bonds\,formed}$$

#### Hess's Law

Reverse a reaction → flip the sign of ΔH. Multiply a reaction by a factor *n* → multiply ΔH by *n*. Add reactions to construct the target equation → add their ΔH values.

#### Quick Reference

| Quantity | Symbol | Sign for Exothermic |
|---|---|---|
| ΔH (enthalpy change) | kJ | negative |
| ΔU (internal energy) | kJ | negative |
| q_p (heat at const. P) | kJ | negative |
| q_v (heat at const. V) | kJ | negative |

**Exam pattern**: UTBK typically combines a 2–3 step Hess cycle with one calorimetry calculation in a single question, then tests sign convention with a diagram interpretation.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example: Hess's Law

Given:
- (1) C(s) + O₂(g) → CO₂(g) , ΔH₁ = −393.5 kJ
- (2) CO(g) + ½O₂(g) → CO₂(g) , ΔH₂ = −283.0 kJ

Find ΔH for: C(s) + ½O₂(g) → CO(g)

Reverse (2): CO₂(g) → CO(g) + ½O₂(g) , ΔH = +283.0 kJ
Add to (1): C(s) + O₂(g) + CO₂(g) → CO₂(g) + CO(g) + ½O₂(g)
Cancel CO₂ and ½O₂ → target equation, ΔH = −393.5 + 283.0 = **−110.5 kJ** (exothermic).

#### Calorimetry Worked Example

When 1.00 g of methanol (CH₃OH, M = 32 g/mol) is burned in a calorimeter containing 500 g of water (c = 4.18 J g⁻¹ K⁻¹), the temperature rises by 6.79 °C.

q = 500 × 4.18 × 6.79 = 14,189 J ≈ 14.19 kJ
Moles of methanol = 1.00 / 32 = 0.03125 mol
ΔH_combustion = −q / n = −14.19 / 0.03125 = **−454 kJ/mol**

#### Edge Cases and Traps

- **ΔH vs ΔU difference**: ΔH = ΔU + Δn_gas·RT. For reactions with gaseous moles changing, the two values differ by ~2.5 kJ per mole of gas at 298 K.
- **Standard state confusion**: For sulfur, the standard state is **rhombic S₈ (s)**, not monoclinic. ΔH_f°(S, monoclinic) = +0.30 kJ/mol.
- **Aqueous ions**: ΔH_f° of H⁺(aq) is defined as **zero**; all other aqueous ion enthalpies are relative to this.
- **Neutralization heat**: For any strong acid + strong base → −57.1 kJ/mol. Weak acid/base values are **less exothermic** because some energy is consumed ionizing the weak species.
- **Sign of bond-energy ΔH**: A common mistake is computing products − reactants. The correct form is **bonds broken − bonds formed** (energy in − energy out).

#### Connections to Adjacent Topics

Thermochemistry links directly to **stoichiometry** (mole ratios scale ΔH), **chemical equilibrium** (van 't Hoff equation: d ln K/dT = ΔH°/RT² — sign of ΔH predicts whether K increases or decreases with T), and **electrochemistry** (ΔG° = −nFE° = ΔH° − TΔS°).

#### Common Mistakes Summary

1. Forgetting to flip the sign when reversing a reaction in Hess's Law.
2. Using ΔH_f° of an element as non-zero.
3. Mixing J and kJ in calorimetry problems.
4. Multiplying ΔH_f° by the wrong stoichiometric coefficient.
5. Confusing "heat released by reaction" (positive q_absorbed) with ΔH (already signed).

#### Practice Prompts

1. Using ΔH_f° values (CO₂ = −393.5, H₂O(l) = −285.8, C₂H₆ = −84.7 kJ/mol), calculate ΔH for the combustion of ethane: 2 C₂H₆(g) + 7 O₂(g) → 4 CO₂(g) + 6 H₂O(l).
2. A bomb calorimeter (C = 8.50 kJ/°C) contains 1.200 g of glucose (M = 180 g/mol). Temperature rises 3.20 °C. Find ΔU per mole and compare with the literature ΔH = −2802 kJ/mol, commenting on the sign of Δn_gas.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
