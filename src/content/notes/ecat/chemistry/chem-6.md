---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: chemistry
subjectName: Chemistry
topic: chem-6
topicName: Chemical Equilibrium
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.056682"
diagramPrompt: Clear scientific diagram of Chemical Equilibrium with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style
---

# Chemical Equilibrium

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Dynamic Equilibrium — When Forward and Reverse Rates Are Equal:**

A chemical equilibrium occurs when the forward and reverse reactions occur simultaneously at equal rates, so that macroscopic (observable) concentrations of reactants and products remain constant over time. Note: equilibrium does NOT mean the concentrations are equal — it means the rates are equal. This is a dynamic equilibrium — individual molecules are still reacting, but the net change is zero.

For the general reaction: aA + bB ⇌ cC + dD, the equilibrium constant K_eq = [C]^c[D]^d/[A]^a[B]^b, where [] denotes molar concentration at equilibrium (for gases, partial pressures can be used: K_p). This is the law of mass action.

**Key Features of K_eq:**

- K_eq > 1: products are favoured at equilibrium (reaction lies to the right)
- K_eq < 1: reactants are favoured at equilibrium (reaction lies to the left)
- K_eq = 1: roughly equal concentrations of reactants and products
- K_eq is temperature-dependent only (changes with T, but is unaffected by pressure, concentration, or catalysts)
- K_eq has no units when using concentrations in mol/L for reactions where the sum of stoichiometric coefficients equals the sum of product coefficients (because the definition absorbs the standard state)

**Le Chatelier's Principle — Response to Disturbances:**

When a system at equilibrium is disturbed, it shifts to partially counteract the disturbance:

- Adding reactant or product → shifts away from that species
- Removing reactant or product → shifts toward that species
- Increasing pressure (decreasing volume) → shifts toward the side with fewer moles of gas
- Decreasing pressure (increasing volume) → shifts toward the side with more moles of gas
- Increasing temperature → shifts in the endothermic direction (heat absorbed)
- Adding a catalyst → no shift (catalyst speeds up both forward and reverse equally)

**⚡ ECAT Tip:** Changing concentration affects the reaction quotient Q, not K. When Q ≠ K, the system is not at equilibrium and will shift to restore Q = K. This is not a change in K — it's the system adjusting to new concentrations.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**K_c vs K_p — Gaseous Equilibria:**

For reactions involving gases, equilibrium constants can be expressed in terms of molar concentrations (K_c) or partial pressures (K_p). For the general reaction: K_p = K_c(RT)^(Δn), where Δn = (moles of gaseous products) - (moles of gaseous reactants).

Examples:
- N₂(g) + 3H₂(g) ⇌ 2NH₃(g): Δn = 2 - 4 = -2. So K_p = K_c(RT)⁻²
- H₂(g) + I₂(g) ⇌ 2HI(g): Δn = 0. So K_p = K_c (no conversion needed)
- PCl₅(g) ⇌ PCl₃(g) + Cl₂(g): Δn = 2 - 1 = +1. So K_p = K_c(RT)¹

**Relationship Between K and Reaction Quotient Q:**

The reaction quotient Q has the same formula as K_eq but uses initial concentrations (not equilibrium concentrations):
- Q < K: reaction proceeds in the forward direction (products increase)
- Q = K: system is at equilibrium
- Q > K: reaction proceeds in the reverse direction (reactants increase)

This is how we predict the direction of shift when conditions change.

**⚡ ECAT Tip:** For the Haber process (N₂ + 3H₂ ⇌ 2NH₃, ΔH = -92 kJ/mol), to maximise NH₃ yield: (1) high pressure (fewer moles on product side), (2) moderate temperature (low T favours products thermodynamically but slows reaction kinetically — the compromise is around 400-500°C), (3) remove NH₃ as it forms (shifts right). In practice, a catalyst (iron) is also used to achieve acceptable rates at the chosen temperature.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Derivation of Equilibrium Constant from Rate Laws:**

For a elementary reaction A + B ⇌ C + D, forward rate = k_f[A][B] and reverse rate = k_r[C][D]. At equilibrium: k_f[A]_eq[B]_eq = k_r[C]_eq[D]_eq. Therefore K_eq = k_f/k_r = [C]_eq[D]_eq/[A]_eq[B]_eq. This shows that K_eq is fundamentally a ratio of rate constants — which explains why K_eq depends only on temperature (since k_f and k_r each depend on temperature).

**ICE Tables — Solving Equilibrium Problems:**

ICE = Initial, Change, Equilibrium. Set up a table with initial concentrations, define the change (usually x), write equilibrium concentrations, then substitute into K_eq expression and solve.

Example: For 1 mol PCl₅ in a 1 L container, K_c = 0.042 at 250°C for PCl₅ ⇌ PCl₃ + Cl₂.
Initial: [PCl₅] = 1, [PCl₃] = 0, [Cl₂] = 0
Change: -x, +x, +x
Equilibrium: 1-x, x, x
K_c = x²/(1-x) = 0.042 → x² = 0.042(1-x) → x² + 0.042x - 0.042 = 0. Solve quadratic: x ≈ 0.17. So [PCl₅] = 0.83 M, [PCl₃] = [Cl₂] = 0.17 M.

**Degree of Dissociation (α):**

For PCl₅ ⇌ PCl₃ + Cl₂, if α is the fraction dissociated at equilibrium:
Initially: [PCl₅] = c (all PCl₅, no products)
At equilibrium: [PCl₅] = c(1-α), [PCl₃] = cα, [Cl₂] = cα
K_p = (cα)² / [c(1-α)] × (RT)^(Δn)... with Δn = 1.

**Free Energy and Equilibrium:**

The Gibbs free energy change for a reaction is related to the equilibrium constant: ΔG° = -RT ln K_eq. ΔG° = ΔH° - TΔS°. This fundamental thermodynamic relationship connects enthalpy, entropy, and equilibrium:
- ΔG° < 0 (negative): K > 1 (products favoured at standard conditions)
- ΔG° > 0 (positive): K < 1 (reactants favoured at standard conditions)
- ΔG° = 0: K = 1 (roughly equal concentrations at standard conditions)

Also: ΔG = ΔG° + RT ln Q, where Q is the reaction quotient. At equilibrium, ΔG = 0 and Q = K, giving ΔG° = -RT ln K. This is how we calculate K from thermodynamic data.

**⚡ ECAT Pattern:** ECAT chemistry frequently tests: (1) writing the correct K_eq expression and identifying whether K is K_c or K_p; (2) using Le Chatelier's principle to predict shifts; (3) ICE table calculations to find equilibrium concentrations; (4) the relationship between K and degree of dissociation; and (5) calculating K_eq from ΔG° = -RT ln K or from given equilibrium concentrations. A typical ECAT question: "For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), K_c = 280 at 1000 K. If initial concentrations are [SO₂] = 0.10 M, [O₂] = 0.05 M, [SO₃] = 0, find equilibrium concentrations." Set up ICE table, solve quadratic.
