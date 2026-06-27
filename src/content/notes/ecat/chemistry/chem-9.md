---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: chemistry
subjectName: Chemistry
topic: chem-9
topicName: Chemical Kinetics
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.058310"
lastUpdated: "2026-06-27"
diagramPrompt: "Clear scientific diagram of Chemical Kinetics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---

# Chemical Kinetics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Chemical kinetics** is the branch of physical chemistry that quantifies *how fast* reactants convert into products and identifies the molecular pathway that makes that speed possible. The core measurable quantity is the **rate of reaction**, defined as the change in concentration of a species per unit time. For a generic reaction A → products:

**Rate = −d[A]/dt = k[A]ⁿ**

where **k** is the **rate constant** and **n** is the **order of reaction**. The **half-life (t₁/₂)** for a first-order process is the universal **0.693/k** — independent of initial concentration. The temperature dependence of k is governed by the **Arrhenius equation**: **k = A·e^(−Eₐ/RT)**, where **Eₐ** is the **activation energy**. ECAT expects you to distinguish **order** (experimentally determined) from **molecularity** (theoretical count of molecules colliding in an elementary step). Three high-yield pointers: (1) rate is never written from the balanced equation, (2) units of k reveal the order, and (3) a catalyst lowers Eₐ without shifting equilibrium.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition of Rate and Average vs Instantaneous Rate
The rate is the time derivative of concentration. The **average rate** over interval Δt uses the magnitude of Δ[conc]/Δt, while the **instantaneous rate** is the limit as Δt → 0, obtained graphically from the slope of the concentration–time curve. For multiple species A, B, C with stoichiometric coefficients a, b, c, rates are linked by the relation:

**−(1/a)·d[A]/dt = −(1/b)·d[B]/dt = +(1/c)·d[C]/dt**

This factor ensures the rate is independent of which species is monitored.

#### Rate Law, Order, and Molecularity
The **rate law** has the form **Rate = k[A]ᵐ[B]ⁿ**, where exponents m and n are *not* read from the balanced equation — they are found from experiments (initial-rates method or graphical fitting of integrated laws). **Order** = m + n (overall) and applies to the overall reaction. **Molecularity** refers only to an **elementary step** and equals the number of molecules colliding simultaneously; unimolecular, bimolecular, and termolecular being the only realistic cases.

#### Integrated Rate Laws and Half-Life
For a first-order reaction A → products:

**ln[A]ₜ = ln[A]₀ − kt**    →    **[A]ₜ = [A]₀·e^(−kt)**

The corresponding **t₁/₂ = 0.693/k** — concentration-independent. A plot of ln[A] vs t is linear with slope −k.

For a second-order reaction (single reactant):

**1/[A]ₜ = 1/[A]₀ + kt**,   and   **t₁/₂ = 1/(k[A]₀)**

A plot of 1/[A] vs t is linear; here t₁/₂ *depends* on initial concentration.

#### Arrhenius Equation
The temperature dependence is given by:

**k = A·e^(−Eₐ/RT)**,   or   **ln k = ln A − Eₐ/RT**

A plot of ln k versus 1/T is linear with slope −Eₐ/R, allowing Eₐ to be extracted from two temperatures:

**ln(k₂/k₁) = (Eₐ/R)·(1/T₁ − 1/T₂)**

| Order | Integrated form (linear plot) | Slope | t₁/₂ |
|---|---|---|---|
| 0 | [A]ₜ = [A]₀ − kt | −k | [A]₀/(2k) |
| 1 | ln[A]ₜ = ln[A]₀ − kt | −k | 0.693/k |
| 2 | 1/[A]ₜ = 1/[A]₀ + kt | +k | 1/(k[A]₀) |

#### Catalysts and Collision Theory
A **catalyst** provides an alternative pathway with lower **activation energy**, increasing k for *both* forward and reverse directions equally — ΔH and K_eq remain unchanged. **Collision theory** requires (i) sufficient kinetic energy (≥ Eₐ) and (ii) proper geometric **orientation** for a productive collision.

#### ECAT Question Patterns
Expect 3–5 MCQs covering: order identification from tabulated concentration data, unit analysis of k (s⁻¹ for 1st order, M⁻¹s⁻¹ for 2nd), Eₐ calculation from a 2-temperature dataset, and selecting the correct integrated-law plot.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Pseudo-Order Reactions
When one reactant is present in huge excess (e.g., hydrolysis in water), its concentration stays effectively constant and gets absorbed into k. The reaction then behaves as a lower-order **pseudo-order** reaction. For instance, the acid-catalyzed inversion of sucrose is pseudo-first-order in sucrose because [H⁺] is buffered. Recognizing this lets you correctly apply the first-order integrated law.

#### Mechanism and the Rate-Determining Step
A complex reaction proceeds via a **mechanism** — a sequence of elementary steps. The overall rate equals the rate of the slowest (**rate-determining**) step. Intermediates formed in fast prior steps are consumed before they accumulate and must not appear in the final rate law. Constructing the mechanism from kinetic data: if Rate = k[A][B] and a stoichiometric excess of B shows first-order-in-A only, then the RDS involves A alone, with B participating in a rapid pre-equilibrium — a classic ECAT trap.

#### Worked Example (Eₐ Calculation)
Given k₁ = 3.5 × 10⁻³ s⁻¹ at T₁ = 300 K and k₂ = 1.2 × 10⁻² s⁻¹ at T₂ = 320 K, find Eₐ.

Using **ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂)**:

ln(1.2 × 10⁻² / 3.5 × 10⁻³) = ln(3.43) ≈ 1.233
(1/300 − 1/320) = (320 − 300)/(300·320) = 20/96000 = 2.083 × 10⁻⁴ K⁻¹
Eₐ = 1.233 × 8.314 / 2.083 × 10⁻⁴ ≈ **49.2 kJ/mol**

#### Common Mistakes
- Using log₁₀ instead of ln without the 2.303 conversion factor in Arrhenius problems.
- Reading the order directly from coefficients in the balanced equation — valid *only* for elementary steps.
- Forgetting that a catalyst lowers Eₐ for **both** forward and reverse directions, so the equilibrium constant is unchanged.
- Confusing **molecularity** (≤3, integer) with **order** (any real number including fractional).

#### Connections to Other ECAT Topics
Kinetics bridges directly into **chemical equilibrium** (K_eq = k_f/k_r), **thermodynamics** (ΔG‡ from Eyring equation, related to Eₐ), and **electrochemistry** (current–overpotential relationships). Mastery here makes the equilibrium constant problems much easier.

#### Practice Prompts
1. The decomposition of N₂O₅ in CCl₄ gives a straight line when ln[conc] is plotted against time. What is the order, and what does the slope represent?
2. A reaction doubles in rate when temperature rises from 300 K to 310 K. Estimate Eₐ using the rule of thumb that a 10 K rise near 300 K roughly doubles k.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
