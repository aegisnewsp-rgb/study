---
exam: utbk
examName: UTBK/SNPMTN (Indonesia)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-006
topicName: Topic 6
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-06-18"
---

# Topic 6

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Termokimia** tracks the heat exchanged during chemical reactions, anchored by the enthalpy change **ΔH = H_produk − H_reaktan** (kJ). Exothermic reactions release heat (ΔH < 0); endothermic reactions absorb it (ΔH > 0). Two calculation routes dominate UTBK: (1) formation enthalpies via **ΔH_rxn = Σ ΔH°f(produk) − Σ ΔH°f(reaktan)**, and (2) bond energies via **ΔH_rxn = Σ BE(reaktan) − Σ BE(produk)**. In bomb calorimetry, **q = m·c·ΔT** gives the heat absorbed by water, while the reaction's ΔU = −q_v (constant volume). Hess's Law: ΔH is a state function, so add/subtract step enthalpies to reach the target equation. Standard state means **298 K and 1 atm**, and ΔH°f of an element in its standard form is **0**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Defining Enthalpy Change
Enthalpy (H) is the heat content at constant pressure. Because absolute H is unmeasurable, we work with **ΔH**, the difference between products and reactants. A negative ΔH marks an exothermic process (combustion of methane: CH₄ + 2O₂ → CO₂ + 2H₂O, ΔH = −890 kJ/mol), while a positive ΔH marks endothermic processes (photosynthesis, dissolution of NH₄NO₃ in water).

#### Calorimetry Relations
At constant pressure, **ΔH = q_p**, and the heat absorbed by the surroundings is **q = m·c·ΔT**, where *m* (g) is mass, *c* (J·g⁻¹·K⁻¹) is specific heat, and *ΔT* (K) is the temperature rise. Heat capacity **C = q/ΔT** (J·K⁻¹) is the proportionality between heat and temperature change for a body. A coffee-cup calorimeter (open, constant P) measures ΔH directly; a bomb calorimeter (sealed, constant V) measures internal energy ΔU, with **ΔH ≈ ΔU + Δn_g·R·T** for ideal gases.

#### Hess's Law
Because enthalpy is a state function, a reaction's ΔH equals the sum of step enthalpies along any path from reactants to products. To apply it, reverse any step whose direction is opposite the target (flip the sign of its ΔH) and multiply any step by a coefficient (multiply ΔH by the same factor). Always cancel species appearing on both sides.

#### Standard Formation and Bond Energies
**ΔH°f** is the enthalpy change when 1 mole of a compound forms from its elements in their standard states (298 K, 1 atm). By definition, ΔH°f = 0 for elements in their reference form (O₂, N₂, graphite, S₈, Hg(l), etc.). For any reaction, **ΔH_rxn = Σ n·ΔH°f(products) − Σ n·ΔH°f(reactants)**. The bond-energy route is less accurate but useful when formation data is missing: **ΔH_rxn = Σ BE(bonds broken) − Σ BE(bonds formed)**. Use this only for gaseous species; liquids and solids require additional phase-change terms.

#### Common Exam Patterns
- Compute ΔH_rxn from a table of ΔH°f values (number sign and coefficient traps).
- Apply Hess's Law to a 3- or 4-step thermochemical cycle.
- Read a calorimetry graph to extract ΔT and compute q or c.
- Classify a reaction from a ΔH sign or a temperature-versus-time graph.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Sign Conventions
A subtle trap: when a reaction is reversed, **ΔH flips sign but the numerical value stays the same in magnitude**; students often write the same value twice. Another trap involves **elements in non-standard states** — for example, ΔH°f of O₃(g) ≠ 0 even though O₂(g) does, because ozone is not oxygen's reference form. Phase changes also matter: ΔH°f of H₂O(l) is −285.8 kJ/mol, while H₂O(g) is −241.8 kJ/mol; the 44 kJ/mol gap is the vaporization enthalpy.

#### Connecting to Other UTBK Topics
Thermochemistry interlocks with **chemical equilibrium** (Le Chatelier's principle predicts the temperature shift of K based on reaction exo/endothermicity via the **van 't Hoff equation** d(ln K)/dT = ΔH°/RT²) and with **electrochemistry** (ΔG° = −nFE° and ΔG° = ΔH° − TΔS° link calorimetric data to cell potentials). Bond-energy reasoning also feeds into **kinetics**: activation energy Eₐ is the energy to break the first set of bonds in the rate-determining step.

#### Worked Micro-Example
Given: ΔH°f (kJ/mol) of CO₂(g) = −393.5, H₂O(l) = −285.8, C₃H₈(g) = −103.8. Find ΔH°combustion of propane.
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
Σ ΔH°f(products) = 3(−393.5) + 4(−285.8) = −1180.5 − 1143.2 = −2323.7 kJ
Σ ΔH°f(reactants) = −103.8 + 0 = −103.8 kJ
**ΔH°rxn = −2323.7 − (−103.8) = −2219.9 kJ/mol** of C₃H₈ (consistent with experimental −2220 kJ).

#### Common Mistakes
- Forgetting to multiply ΔH°f by stoichiometric coefficients.
- Treating ΔH°f of an element as nonzero in its standard state.
- Adding Hess step enthalpies without flipping the sign of reversed steps.
- Confusing q (heat of surroundings) with ΔH (heat of system), dropping the negative sign in ΔH = −q.
- Applying bond-energy arithmetic to liquids or solids without phase corrections.

#### Practice Prompts
1. Construct a Hess's Law cycle to derive ΔH°f of ethane from combustion data of C(s), H₂(g), and C₂H₆(g), each measured in a bomb calorimeter.
2. A 1.50 g sample of glucose (M = 180 g/mol) is burned in a calorimeter containing 2.00 kg of water (c = 4.18 J·g⁻¹·K⁻¹); temperature rises by 3.10 °C. Calculate ΔH°combustion per mole of glucose, then estimate ΔH°f of glucose using tabulated CO₂ and H₂O values.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
