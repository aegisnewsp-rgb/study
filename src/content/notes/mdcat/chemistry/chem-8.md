---



exam: mdcat
examName: MDCAT
subject: chemistry
subjectName: Chemistry
topic: chem-8
topicName: Reaction Kinetics
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.096971"
lastUpdated: "2026-06-25"
diagramPrompt: "Clear scientific diagram of Reaction Kinetics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---

# Reaction Kinetics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Reaction kinetics** quantifies how fast reactants are consumed and products form, governed by the **rate law**: Rate = k[A]ᵐ[B]ⁿ, where **k** is the rate constant, **m** and **n** are experimental orders. **Order** is determined from data, never from balanced coefficients. **Activation energy (Eₐ)** is the minimum energy barrier; catalysts lower Eₐ without changing ΔH or K_eq. The **Arrhenius equation**, k = A·e^(−Eₐ/RT), shows k rises exponentially with T — a 10 °C jump often doubles the rate. **Half-life** for first-order reactions (t₁/₂ = 0.693/k) is independent of [A]₀, a fact MCQs love to test.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Rate, Rate Law, and Order
The **instantaneous rate** is the derivative: Rate = −d[Reactant]/dt = d[Product]/dt. The negative sign keeps the rate positive as reactant concentration falls. The **differential rate law** expresses rate in terms of concentrations; the **integrated rate law** expresses concentration as a function of time. The overall order (m + n) is found by running experiments at different initial concentrations — not by reading the balanced equation.

#### Integrated Forms and Half-Lives

| Order | Integrated Law | Half-life (t₁/₂) |
|-------|---------------|-----------------|
| Zero | [A]ₜ = [A]₀ − kt | [A]₀ / (2k) |
| First | ln[A]ₜ = ln[A]₀ − kt | 0.693 / k |
| Second | 1/[A]ₜ = 1/[A]₀ + kt | 1 / (k[A]₀) |

Plotting [A] vs t (zero), ln[A] vs t (first), and 1/[A] vs t (second) gives a straight line — the classical way to identify order experimentally.

#### Arrhenius Behaviour
From k = A·e^(−Eₐ/RT), the two-temperature form is:
**ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂)**.
This lets MDCAT numericals solve for Eₐ when two k–T pairs are given.

#### Molecularity vs Mechanism
**Molecularity** counts colliding particles in one elementary step (1, 2, or rarely 3). It must be an integer and applies only to single steps. The **rate-determining step** — the slowest step in the mechanism — dictates the overall rate law. A **catalyst** provides an alternative pathway with lower Eₐ; it never alters ΔH, K_eq, or overall stoichiometry.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Collision and Transition-State Theory
**Collision theory** requires that colliding molecules carry energy ≥ Eₐ **and** correct orientation; otherwise the collision is ineffective. **Transition state theory** refines this by defining the **activated complex** — a short-lived, high-energy configuration at the peak of the reaction coordinate diagram. Catalysts stabilise this complex, lowering Eₐ forward and reverse equally, so K_eq stays unchanged.

#### Worked Example
For a first-order decomposition, k = 3.2 × 10⁻⁴ s⁻¹ at 35 °C and 9.8 × 10⁻⁴ s⁻¹ at 50 °C. Find Eₐ.
ln(9.8/3.2) = (Eₐ/8.314)[1/308 − 1/323] → 1.119 = (Eₐ/8.314)(1.507 × 10⁻⁴) → **Eₐ ≈ 61.7 kJ mol⁻¹**.

#### Common Traps
- Treating the stoichiometric coefficient as the order — only true for elementary steps.
- Writing rate without the negative sign on [Reactant].
- Applying t₁/₂ = 0.693/k to zero- or second-order reactions, where the formula depends on [A]₀.
- Assuming higher [A] always speeds the rate proportionally — only true when order = 1.

#### Adjacent Links
Mastery here feeds directly into **chemical equilibrium** (catalysts shift rates, not K), **electrochemical kinetics** (Butler–Volmer extends Arrhenius), and **enzyme kinetics** (Michaelis–Menten is a saturation form of rate laws).

#### Practice Prompts
1. A reaction doubles in rate when [A] doubles and [B] is tripled. Write the rate law and state the overall order.
2. Using k values at 400 K and 500 K, calculate Eₐ via the two-point Arrhenius form and predict k at 450 K.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
