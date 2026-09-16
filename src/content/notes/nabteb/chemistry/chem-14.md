---



exam: nabteb
examName: NABTEB
subject: chemistry
subjectName: Chemistry
topic: chem-14
topicName: Chemical Kinetics
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.571796"
lastUpdated: "2026-09-16"
diagramPrompt: "Clear scientific diagram of Chemical Kinetics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---

# Chemical Kinetics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NABTEB Chemistry paper.

**Chemical kinetics** measures how fast reactants are converted into products and explains *why* the speed changes with concentration, temperature, surface area, or a catalyst. The branch focuses on **rate**, **order**, **rate constant**, **half-life**, and the **Arrhenius equation**.

| Term | Meaning | SI Unit |
|---|---|---|
| Rate of reaction | Decrease in [A] per unit time, –Δ[A]/Δt | mol dm⁻³ s⁻¹ |
| Rate constant (k) | Proportionality constant in rate = k[A]ᵐ[B]ⁿ | depends on order |
| Order (n) | Exponent of concentration in rate law | dimensionless |
| Half-life (t½) | Time for [A] to fall to half its value | s |
| Activation energy (Ea) | Minimum energy for a successful collision | J mol⁻¹ |

- **First-order t½** = 0.693/k (k in s⁻¹); **zero-order t½** = [A]₀/2k.
- **Arrhenius:** ln k = ln A − Ea/RT (R = 8.314 J K⁻¹ mol⁻¹, T in K).
- A **catalyst** lowers Ea without being consumed; equilibrium yield is unchanged.

> 💡 **High-Yield Memory Hook:** **"Cats Lower Paths"** — a **Cat**alyst **L**owers the **P**ath (activation energy). For unit recall, remember the **1/n rule**: k's units = (mol dm⁻³)¹⁻ⁿ · s⁻¹, so zero-order gives mol dm⁻³ s⁻¹, first-order gives s⁻¹, second-order gives mol⁻¹ dm³ s⁻¹.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before NABTEB.

#### Core Concepts and Rate Law

The **rate equation** for an elementary or overall reaction A + B → products is written as:

#### Rate = k[A]ᵐ[B]ⁿ

where k is the rate constant, m and n are the orders with respect to A and B, and (m + n) is the **overall order**. Order is determined experimentally, never from the stoichiometric equation alone. NABTEB in most keys tests this by giving concentration–time or initial-rate data and asking candidates to deduce the order graphically or by ratio.

#### Comparison: Molecularity vs Order

| Feature | Molecularity | Order of Reaction |
|---|---|---|
| Basis | Mechanism of a single elementary step | Experimentally measured rate law |
| Values | Whole numbers only (1, 2, 3) | Can be zero, fractional, or whole |
| Applies to | Elementary steps only | Overall or step reactions |
| Example | 2NO + O₂ → 2NO₂ (termolecular) | Rate = k[NO]²[O₂] (third order) |

#### Integrated Rate Laws

For NABTEB, three integrated forms dominate calculations:

- **Zero order:** [A] = [A]₀ − kt ; t½ = [A]₀ / 2k
- **First order:** ln[A] = ln[A]₀ − kt ; t½ = 0.693 / k
- **Second order:** 1/[A] = 1/[A]₀ + kt ; t½ = 1 / (k[A]₀)

A straight-line plot of [A] vs t indicates zero order, ln[A] vs t indicates first order, and 1/[A] vs t indicates second order.

#### Effect of Temperature and Catalysts

Raising temperature increases the fraction of molecules whose kinetic energy exceeds Ea (Maxwell–Boltzmann distribution), so rate climbs sharply. The Arrhenius equation quantifies this:

#### k = A · e^(−Ea/RT)

Plotting ln k against 1/T gives a slope of −Ea/R, from which Ea is calculated. A **catalyst** provides an alternative pathway with lower Ea; it does **not** alter ΔH, equilibrium constant, or final yield.

#### 🎯 Exam-Level Worked Problem

**Question:** The decomposition of N₂O₅ in CCl₄ at 45 °C gave the following concentration data:

| Time (s) | 0 | 200 | 400 | 600 | 800 |
|---|---|---|---|---|---|
| [N₂O₅] (mol dm⁻³) | 1.00 | 0.70 | 0.49 | 0.34 | 0.24 |

(a) Determine the order of the reaction. (b) Calculate the rate constant k. (c) Find the half-life.

#### Solution:

(a) Test for first order by checking if the ratio [A]₀/[A] doubles as time doubles, i.e. whether t½ is constant.
- 1.00 → 0.50 (≈ t½) occurs between t = 0 and t ≈ 280 s
- 0.70 → 0.35 occurs between t ≈ 200 and t ≈ 480 s; gap ≈ 280 s
- 0.49 → 0.245 occurs between t ≈ 400 and t ≈ 680 s; gap ≈ 280 s

Half-life is constant ⇒ **first-order reaction**.

(b) Use ln[A] = ln[A]₀ − kt → k = (ln[A]₀ − ln[A]) / t
At t = 400 s, [A] = 0.49 mol dm⁻³:
k = (ln 1.00 − ln 0.49) / 400 = (0 − (−0.7133)) / 400 = 1.78 × 10⁻³ s⁻¹

(c) t½ = 0.693 / k = 0.693 / (1.78 × 10⁻³) ≈ **389 s**

> ⚠️ **Examiner Trap:** Candidates in many papers read [A] against t and expect a straight line for first order. The correct linear plot is **ln[A] vs t**, not [A] vs t. Another common slip is writing k with units of mol dm⁻³ s⁻¹ for a first-order reaction — first-order k must be in **s⁻¹**.

#### Common Pitfalls in NABTEB Questions

1. Using t½ = 0.693/k for second-order reactions — it is **first-order only**.
2. Treating the stoichiometric coefficient as the order — always derive order from data.
3. Believing catalysts shift equilibrium position — they only accelerate attainment.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Collision Theory and Transition State

For two molecules to react, they must (i) collide with energy ≥ Ea and (ii) collide with the correct geometric orientation. The fraction of effective collisions increases with temperature, which is why a 10 K rise in many papers doubles or triples the rate. **Transition state theory** adds that reactants pass through an activated complex at the peak of the energy profile before forming products.

#### Rate-Determining Step and Mechanism

In a multi-step mechanism, the slowest elementary step controls the overall rate. Its molecularity predicts the rate law, provided it involves species that appear before the rate-determining step. Intermediates formed *after* the slow step do not appear in the rate equation. NABTEB Paper II frequently tests this with a three-step mechanism in which candidates must identify the slow step from a given rate law.

#### Edge Cases and Exceptions

| Scenario | What Happens | Exam Implication |
|---|---|---|
| Zero-order reaction | Rate independent of [A]; [A] vs t is linear | Common in surface-catalysed reactions |
| Fractional order (e.g. ½) | In many papers arises from adsorption steps | Order ≠ molecularity of balanced equation |
| Very high [A] | Rate can level off (enzyme saturation) | Michaelis–Menten kinetics; beyond NABTEB scope |
| Negative Ea | Barrierless reactions (radical recombinations) | Rare; theoretical concept |
| Opposite temperature effect | Some reactions slow with heat (exothermic dissolution) | Mention only when asked |

#### Advanced Practice Prompts

1. A reaction has Ea = 50 kJ mol⁻¹ at 300 K. Using the Arrhenius equation, show quantitatively why a 10 K rise changes k by a factor of approximately 2.2. *Hint: compute k₂/k₁ = exp[(Ea/R)(1/T₁ − 1/T₂)].*
2. For the mechanism Step 1 (fast): 2NO ⇌ N₂O₂ ; Step 2 (slow): N₂O₂ + O₂ → 2NO₂, derive the overall rate law. Explain why the rate depends on [NO]² even though the balanced equation is 2NO + O₂ → 2NO₂.

#### Connections to Adjacent Topics

- **Equilibrium** — K_eq is unaffected by a catalyst; only the *approach* to equilibrium speeds up.
- **Thermodynamics** — ΔG decides feasibility; kinetics decides speed. A reaction can be thermodynamically spontaneous yet infinitely slow (e.g. diamond → graphite).
- **Industrial chemistry** — Haber process uses iron catalyst and 450 °C to balance rate against equilibrium yield.

> 💡 **High-Yield Revision Hook:** Use the **"1/T rule"** for Arrhenius problems: when temperature rises, 1/T falls, slope (–Ea/R) stays constant, so ln k rises linearly — meaning k increases exponentially with T.

---

## Continue your study

- **[View this topic in your NABTEB roadmap](/roadmap/?exam=nabteb&duration=1mo)** — see where "Chemical Kinetics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nabteb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NABTEB exam overview](/exams/nabteb/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/nabteb/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
