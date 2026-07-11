---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-010
topicName: Kinetics
weight: 3
country: india
generated: "2026-03-28T21:10:24"
lastUpdated: "2026-07-11"
---

# Kinetics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Chemical Kinetics** quantifies how fast reactants convert into products and identifies the molecular factors controlling that speed. The **rate** is defined as the decrease in reactant concentration (or increase in product concentration) per unit time, expressed in mol L⁻¹ s⁻¹.

The governing equation for most exam questions is the **rate law**: for aA + bB → products, Rate = k[A]ᵐ[B]ⁿ, where the **order** (m + n) is an experimental quantity, not the stoichiometric coefficients. The **Arrhenius equation** k = A·exp(−Ea/RT) links the rate constant to temperature and activation energy.

#### Must-know facts
- **Zero-order** t₁/₂ = [A]₀/(2k) — depends on initial concentration.
- **First-order** t₁/₂ = 0.693/k — **independent** of [A]₀ (most-tested case).
- **Second-order** (equal conc.) t₁/₂ = 1/(k[A]₀).
- A **catalyst lowers Ea** without changing K_eq or ΔH.
- **Molecularity** applies only to elementary steps and is always a positive integer; **order** can be zero, fractional, or negative.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

Chemical Kinetics is the experimental and theoretical study of reaction rates and mechanisms. It separates *how fast* a reaction proceeds (kinetics) from *how far* it proceeds at equilibrium (thermodynamics).

#### Rate, Rate Law, and Order
Rate is always reported as a positive quantity: Rate = −d[R]/dt = +d[P]/dt. The **rate law** has the general form Rate = k[A]ᵐ[B]ⁿ, where k is the **rate constant** (units depend on overall order) and m + n is the **overall order**. Order is determined from data — initial rates, graphical plots of integrated forms, or the half-life method — *never* read off the balanced equation.

#### Integrated Rate Equations

| Order | Integrated form | Half-life t₁/₂ | Units of k |
|-------|-----------------|----------------|------------|
| 0 | [A] = [A]₀ − kt | [A]₀/(2k) | mol L⁻¹ s⁻¹ |
| 1 | ln[A] = ln[A]₀ − kt | 0.693/k | s⁻¹ |
| 2 | 1/[A] = 1/[A]₀ + kt | 1/(k[A]₀) | L mol⁻¹ s⁻¹ |

The first-order equation is most heavily tested: t₁/₂ depends *only* on k, which is why radioactive decay and many decomposition reactions show concentration-independent half-lives.

#### Arrhenius and Temperature Dependence
The Arrhenius equation, k = A·exp(−Ea/RT), gives a straight line when ln k is plotted against 1/T. The slope (−Ea/R) lets you extract Ea from two-temperature data:

$$\log\frac{k_2}{k_1} = \frac{E_a}{2.303\,R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)$$

with R = 8.314 J K⁻¹ mol⁻¹.

> **JEE trap:** A 10 K rise near 300 K roughly doubles k because of the exponential term — students often miss that the *factor*, not the *absolute value*, of rate increase matters.

#### Pseudo-order and Catalysts
When one reactant (usually water) is in vast excess, its concentration stays effectively constant and the reaction becomes **pseudo-first-order**; the ester hydrolysis in aqueous medium is the textbook example. A **catalyst** provides an alternative pathway with a lower Ea, raising k at a given T without shifting ΔG or K_eq.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

The Extended tier treats Kinetics at the depth needed for JEE Advanced-style numericals, where distinguishing **order from molecularity** and applying the **rate-determining step (RDS)** rule decides full marks.

#### Order vs Molecularity — The Critical Distinction
**Molecularity** is a theoretical concept: the number of reactant molecules colliding in a single elementary step. It is always a positive integer (1, 2, or rarely 3) and never applies to a complex, multi-step reaction. **Order** is empirical, derived from the experimentally measured rate law, and may be zero, fractional, or even negative (when a product inhibits the reaction). For an elementary step, order equals molecularity; for a complex reaction, only the **RDS** appears in the overall rate law — fast steps equilibrate rapidly and contribute through equilibrium constants.

#### Worked Example — Arrhenius Slope
A reaction has k = 2.5 × 10⁻⁴ s⁻¹ at 300 K and k = 4.0 × 10⁻³ s⁻¹ at 320 K. Find Ea.

Plugging into the two-temperature form:
- log(4.0×10⁻³ / 2.5×10⁻⁴) = log(16) = 1.204
- (T₂ − T₁)/(T₁T₂) = 20/(300·320) = 2.083×10⁻⁴ K⁻¹
- Ea = 1.204 × 2.303 × 8.314 / 2.083×10⁻⁴ ≈ 88.3 kJ mol⁻¹

> **Mnemonic:** "Slope = −Ea/R" — a steeper negative slope means a *larger* Ea.

#### Common Mistakes
- Writing rate as +d[R]/dt instead of −d[R]/dt — the integrated forms assume the negative sign, so sign errors propagate.
- Conflating Ea in cal/mol with R in J K⁻¹ mol⁻¹ inside one calculation. Standardise units first.
- Treating a catalyst as if it changes ΔH or K_eq. It lowers Ea only.
- Assuming t₁/₂ of a zero-order reaction is constant — it scales linearly with [A]₀.

#### Collision Theory in Brief
Rate = Z·ρ·f, where Z is the collision frequency, ρ the orientation (steric) factor, and f the fraction of collisions exceeding Ea. Raising temperature increases Z modestly but boosts f exponentially — the dominant reason reactions accelerate with heat.

#### Two Practice Prompts
1. For the reaction 2N₂O₅ → 4NO₂ + O₂, the rate of O₂ formation is 1.5 × 10⁻⁴ mol L⁻¹ s⁻¹. Express the rate in terms of (i) d[N₂O₅]/dt and (ii) d[NO₂]/dt, and determine the order if halving [N₂O₅] doubles t₁/₂.
2. At 600 K a first-order reaction is 50% complete in 25 minutes. How long will it take to reach 90% completion at the same temperature?

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Kinetics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeemain/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
