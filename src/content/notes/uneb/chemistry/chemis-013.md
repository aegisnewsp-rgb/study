---
exam: uneb
examName: UNEB UACE (Uganda)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-013
topicName: Rate equation and order
weight: 3
country: uganda
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Rate equation and order

### 🟢 Lite — Quick Review (1h–1d)

> Slow down on one idea before reading: order is an experimental number, not a stoichiometric copy.

For a reaction aA + bB → products, the rate equation (rate law) reads:

#### rate = k [A]ᵐ [B]ⁿ

- **rate** = rate of reaction, in mol dm⁻³ s⁻¹
- **k** = rate constant; its SI units shift with overall order
- **[A], [B]** = concentrations in mol dm⁻³
- **m, n** = orders *with respect to* A and B; overall order = m + n
- Values of m and n are found from data, never read off the balanced equation.

| Order | Differential form | Integrated form | Units of k | Half-life |
|---|---|---|---|---|
| 0 | rate = k | [A] = [A]₀ − kt | mol dm⁻³ s⁻¹ | [A]₀ / 2k |
| 1 | rate = k[A] | ln[A] = ln[A]₀ − kt | s⁻¹ | 0.693 / k |
| 2 | rate = k[A]² | 1/[A] = 1/[A]₀ + kt | dm³ mol⁻¹ s⁻¹ | 1 / (k[A]₀) |

> 💡 **Memory Hook (RATIO):** **R**ate = k · **A**ll concentrations raised **T**o **I**nteger-or-fractional **O**rders. If a straight-line test is what you need: plot [A] vs t → 0; ln[A] vs t → 1; 1/[A] vs t → 2. Whichever plot linearises the data tells you the order.

### 🟡 Standard — Regular Study (2d–2mo)

> Walk through how UACE questions set up the data, then how to read the answer back out of the graph or the half-life.

#### How order is actually found

UACE papers (Paper 2 and Paper 3) usually give you a small table of initial concentrations and initial rates. Keep [B] fixed and double [A]: if the rate doubles, first order in A; if it quadruples, second order in A; if it stays flat, zero order in A. Repeat with [B] held constant. The orders you read this way are *experimental*, and they may not match the coefficients in the equation — this is the single point examiners love to test.

#### Differential vs integrated forms

The differential form (rate = k[A]ᵐ[B]ⁿ) is what you write before you know m and n. Once you know them, the integrated form is the working tool for any "find k from concentration data" calculation. For a first-order reaction the integrated form ln[A] = ln[A]₀ − kt is linear with slope −k; a positive slope on a 1/[A] vs t plot signals second order; a flat [A] vs t plot with constant rate is zero order.

#### Half-life as a diagnostic

Half-life (t½) is the time for [A] to fall to half its starting value. The first-order case is special: t½ = 0.693/k, independent of [A]₀. Watch for the UACE favourite of giving two half-lives at two different starting concentrations — equal t½ values prove first order, and unequal ones rule it out.

#### Worked example — initial rates to order

A reaction 2N₂O₅ → 4NO₂ + O₂ was studied at 320 K with the data below:

| Run | [N₂O₅] / mol dm⁻³ | [NO₂] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |
|---|---|---|---|
| 1 | 0.10 | 0.10 | 1.4 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 2.8 × 10⁻⁴ |
| 3 | 0.10 | 0.20 | 1.4 × 10⁻⁴ |

Compare runs 1 and 2: [N₂O₅] doubles, rate doubles → first order in N₂O₅. Compare runs 1 and 3: [NO₂] doubles, rate is unchanged → zero order in NO₂. So rate = k[N₂O₅]¹[NO₂]⁰ = k[N₂O₅]. From run 1, k = (1.4 × 10⁻⁴) / 0.10 = 1.4 × 10⁻³ s⁻¹.

> ⚠️ **Examiner Trap:** The balanced equation shows a coefficient of 2 in front of N₂O₅. Students write "second order" and lose the mark. The order is read off the rate data, not the equation.

> 📌 **Formula Check:** k here has units s⁻¹ because the overall order is 1. If you forget the units, UACE markers will deduct a mark even when the number is correct.

### 🔴 Extended — Deep Study (3mo+)

> Two questions worth practising before the paper: the molecularity-vs-order trap, and the third-order units question.

#### Molecularity and order are not the same thing

Molecularity counts colliding molecules in one elementary step, so it is a whole number from 1 to 3 and is a *theoretical* property. Order comes out of experiment and can be 0, fractional (e.g. 0.5 from a chain mechanism) or even negative (a product inhibiting the reaction). Most UACE mechanism questions ask you to identify the rate-determining step and confirm that the orders predicted from it match the experimental rate law — if they don't, the proposed mechanism is wrong.

#### Edge cases that show up in Paper 3

- **Pseudo-order reactions.** Hydrolysis of an ester in water keeps [H₂O] effectively constant at ~55 mol dm⁻³, so the rate reduces to k' [ester], an apparent first-order reaction with k' = k[H₂O]. UACE papers have asked why changing the solvent volume does not change the rate.
- **Catalyst-saturated surfaces.** Heterogeneous catalysis on a metal surface often gives zero order in the reactant because every active site is occupied; raising the pressure no longer speeds things up. This is the textbook explanation for why zero-order kinetics can coexist with a catalyst.
- **Negative orders.** A product that binds to the active site and blocks it produces a negative order in that product. The rate law then carries a denominator-like factor, e.g. rate = k[A]/(1 + K[B]). Most UACE questions only require you to state the sign of the order.
- **Third-order units.** k for an overall third-order reaction has units dm⁶ mol⁻² s⁻¹. The general rule is units of k = (mol dm⁻³)¹⁻ⁿ · s⁻¹ where n = overall order. Tabulating this is a quick win.

#### Comparison matrix — commonly confused concepts

| Feature | Order | Molecularity | Rate constant k | Half-life |
|---|---|---|---|---|
| Source | Experiment | Mechanism theory | Experiment (slope of integrated plot) | Experiment (time to halve) |
| Allowed values | 0, ±, fractional | Whole number 1–3 | Positive real | Positive real |
| Depends on [A]₀? | No | No | No | Only for n ≠ 1 |
| Changes with temperature? | No | No | Yes (Arrhenius) | Yes, via k |

#### Advanced traps and exceptions

1. The half-life formula t½ = 0.693/k is first-order only; substituting into zero- or second-order contexts gives nonsense numbers and loses easy marks.
2. A negative sign in ln[A] = ln[A]₀ − kt is part of the slope, not a calculation error — plotting −ln[A] vs t reverses the sign convention.
3. ln and log₁₀ differ by a factor of 2.303; mixing them silently inflates k by that factor. UACE papers use ln throughout; check the axis label before committing.
4. Catalysts change k but leave the order unchanged; an order shift on adding a catalyst means a different reaction pathway is operating.
5. Pseudo-order constants are valid only while [H₂O] (or whichever species is in large excess) really is constant — dilute the solvent far enough and the assumption collapses.

#### Practice prompts

- **Prompt A.** A reaction is reported as third order overall with rate 2.6 × 10⁻⁴ mol dm⁻³ s⁻¹ when [A] = [B] = [C] = 0.050 mol dm⁻³. Calculate k with correct SI units.
- **Prompt B.** The half-life of a reactant at 0.20 mol dm⁻³ is 120 s, and at 0.40 mol dm⁻³ it is 240 s. Identify the order and write the integrated rate law.

## Continue your study

- **[View this topic in your UNEB UACE (Uganda) roadmap](/roadmap/?exam=uneb&duration=1mo)** — see where "Rate equation and order" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uneb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UNEB UACE (Uganda) exam overview](/exams/uneb/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/uneb/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
