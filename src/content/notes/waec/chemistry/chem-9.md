---
exam: waec
examName: WAEC WASSCE
subject: chemistry
subjectName: Chemistry
topic: chem-9
topicName: Chemical Kinetics and Rate of Reaction
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.643723"
lastUpdated: "2026-09-15"
diagramPrompt: "Clear scientific diagram of Chemical Kinetics and Rate of Reaction with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"


---

# Chemical Kinetics and Rate of Reaction

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Chemical kinetics** measures how fast reactants turn into products, expressed as the change in concentration per unit time (mol dm⁻³ s⁻¹). The **rate of reaction** can be written as:

- **Rate = -1/a × d[A]/dt = +1/b × d[B]/dt**

where a and b are stoichiometric coefficients, [A] decreases, and [B] increases. The **rate law** takes the form **Rate = k[A]ᵐ[B]ⁿ**, where k is the rate constant and m, n are orders found experimentally (not from the balanced equation).

| Term | Meaning | Typical unit |
|------|---------|--------------|
| Rate of reaction | Change in concentration per second | mol dm⁻³ s⁻¹ |
| Rate constant (k) | Proportionality factor; depends only on T | varies with order |
| Activation energy (Eₐ) | Minimum energy barrier for reaction | J mol⁻¹ |
| Half-life (t₁/₂) | Time for concentration to halve | seconds |

> 💡 **High-Yield Memory Hook:** **CPSC-L** — **C**oncentration, **P**ressure/surface area, **S**urface area, **C**atalyst, **L**ight/Temperature. These five factors speed up any reaction. Also remember: **"Order is from the lab, molecularity is from the equation"** — order is experimental, molecularity is theoretical.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions

**Rate of reaction** is the measurable change in concentration of a reactant or product per unit time. **Rate constant (k)** is the proportionality factor in the rate law, dependent only on temperature and catalyst presence — not on concentration. **Order of reaction** with respect to a reactant is the power to which its concentration is raised in the rate law; **overall order** is the sum of individual orders.

#### Collision Theory and Activation Energy

Reacting particles must **collide** with energy ≥ Eₐ and with the **correct orientation**. Only "effective collisions" form the **activated complex** (transition state), which then breaks into products. Raising temperature increases both collision frequency and the fraction of molecules exceeding Eₐ.

#### The Arrhenius Equation

The temperature dependence of k is given by:

- **k = A·exp(-Eₐ/RT)**

where A = frequency factor (s⁻¹), Eₐ = activation energy (J mol⁻¹), R = 8.314 J K⁻¹ mol⁻¹, and T = temperature in kelvin. A plot of **ln k against 1/T** yields a straight line with **slope = -Eₐ/R**, the most common WAEC graphical question.

#### Integrated Rate Laws and Half-Lives

| Order | Integrated form | Linear graph | Half-life t₁/₂ | Unit of k |
|-------|-----------------|--------------|----------------|-----------|
| Zero | [A] = [A]₀ − kt | [A] vs t | [A]₀ / 2k | mol dm⁻³ s⁻¹ |
| First | ln[A] = ln[A]₀ − kt | ln[A] vs t | 0.693 / k | s⁻¹ |
| Second | 1/[A] = 1/[A]₀ + kt | 1/[A] vs t | 1 / (k[A]₀) | mol⁻¹ dm³ s⁻¹ |

For a **first-order** reaction, t₁/₂ is constant and independent of [A]₀. For zero- and second-order reactions, t₁/₂ depends on [A]₀.

#### Order vs Molecularity — Comparison Matrix

| Feature | Order of reaction | Molecularity |
|---------|-------------------|--------------|
| Determined by | Experiment | Balanced equation of elementary step |
| Values allowed | 0, 1, 2, 3, fractional | 1, 2, or 3 only |
| Applies to | Overall reaction | Single elementary step |
| Can change with conditions? | Yes | No |

#### 🎯 Exam-Level Worked Problem

**Question:** The decomposition of N₂O₅ follows first-order kinetics. If the initial concentration is 0.080 mol dm⁻³ and the rate constant is 3.0 × 10⁻³ s⁻¹, calculate (a) the concentration after 200 s, and (b) the half-life of the reaction.

#### Solution:

(a) Using **ln[A] = ln[A]₀ − kt** (first-order):

- ln[A] = ln(0.080) − (3.0 × 10⁻³)(200)
- ln[A] = −2.5257 − 0.600 = −3.1257
- [A] = e⁻³·¹²⁵⁷ = **0.044 mol dm⁻³**

(b) For first-order: **t₁/₂ = 0.693 / k**

- t₁/₂ = 0.693 / (3.0 × 10⁻³ s⁻¹)
- t₁/₂ = **231 s**

> ⚠️ **Examiner Trap:** Students in many papers apply the second-order formula t₁/₂ = 1/(k[A]₀) to a first-order problem and obtain 4167 s — a huge numerical error. Always confirm the order from the rate law before reaching for t₁/₂.

#### Factors Affecting Reaction Rate

1. **Concentration** — higher [reactant] gives more collisions per second.
2. **Temperature** — raises k via the Arrhenius relation (≈ doubles rate per 10 °C rise for many reactions).
3. **Surface area** — powdered solids react faster than lumps.
4. **Catalyst** — provides an alternative pathway, lowering Eₐ without being consumed.
5. **Light** — supplies photons to break bonds (e.g., H₂ + Cl₂ in sunlight).

A catalyst **does not shift equilibrium** nor change **ΔH**; it only shortens the time to reach equilibrium.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### The Rate-Determining Step

In a multi-step mechanism, the **slowest step** controls the overall rate. The rate law contains only species that appear in or before the rate-determining step; intermediates that appear afterward do not appear in the rate law. WAEC sometimes offers a mechanism and asks for the rate law — write it directly from the slow step.

#### Common WAEC Traps and Edge Cases

1. **Pseudo-order reactions:** When one reactant (in many papers water or a solvent) is in vast excess, its concentration is effectively constant, so a second-order reaction behaves as first-order overall. WAEC can describe such a system and ask for the apparent order.
2. **Negative activation energy:** Genuine negative Eₐ values are physically meaningless — students sometimes see a wrongly drawn Arrhenius plot and panic. Always check that ln k vs 1/T has a **negative** slope (positive Eₐ).
3. **Catalyst at equilibrium:** A catalyst added to a reversible reaction at equilibrium does **not** change Kc or the equilibrium composition — it only reduces the time needed to reach equilibrium.
4. **Units of k:** Zero order → mol dm⁻³ s⁻¹; first order → s⁻¹; second order → mol⁻¹ dm³ s⁻¹; third order → mol⁻² dm⁶ s⁻¹. Memorise the pattern: **(mol dm⁻³)¹⁻ⁿ s⁻¹** for overall order n.
5. **Heterogeneous catalysis:** Involves adsorption of reactants onto a solid surface (e.g., Fe in the Haber process). The mechanism differs from homogeneous catalysis but the principle — lowering Eₐ — is identical.

#### Worked Micro-Example (Arrhenius)

A reaction has k₁ = 2.5 × 10⁻⁴ s⁻¹ at 300 K and k₂ = 1.2 × 10⁻² s⁻¹ at 320 K. Estimate Eₐ using:

- **ln(k₂/k₁) = Eₐ/R × (1/T₁ − 1/T₂)**
- ln(1.2 × 10⁻² / 2.5 × 10⁻⁴) = ln(48) = 3.871
- (1/300 − 1/320) = (320 − 300)/(300 × 320) = 20/96000 = 2.083 × 10⁻⁴ K⁻¹
- Eₐ = 3.871 × 8.314 / 2.083 × 10⁻⁴ = **1.54 × 10⁵ J mol⁻¹ ≈ 154 kJ mol⁻¹**

#### Exam Strategy for WAEC WASSCE

- Topic weightage is **~4%** across Papers 1 and 2 — in standard papers 1–3 questions per year.
- Paper 1 (Objective) in many papers tests definitions, factor identification, and unit recall.
- Paper 2 (Essay) favours **half-life calculations**, **order determination from graphs**, and **Arrhenius plots**.
- Always show working with units; an unlabelled numerical answer loses method marks even when correct.

#### Advanced Practice Prompts

1. A graph of ln[A] vs t for a reaction gives a straight line of slope −0.025 s⁻¹. Identify the order, the rate constant, and the time for [A] to fall to one-eighth of its initial value.
2. The rate law for the reaction 2NO + O₂ → 2NO₂ is Rate = k[NO]²[O₂]. Propose a two-step mechanism whose rate-determining step is consistent with this law, identifying any intermediates.

## Continue your study

- **[View this topic in your WAEC WASSCE roadmap](/roadmap/?exam=waec&duration=1mo)** — see where "Chemical Kinetics and Rate of Reaction" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=waec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[WAEC WASSCE exam overview](/exams/waec/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/waec/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
