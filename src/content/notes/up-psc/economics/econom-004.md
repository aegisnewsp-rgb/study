---
exam: up-psc
examName: UPPSC PCS
subject: economics
subjectName: "Economics"
topic: econom-004
topicName: Consumer Behaviour
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-22"
---

# Consumer Behaviour

### 🟢 Lite — Quick Review (1h–1d)
> Use this pass to lock the one equation and the one diagram that decide the question.

**Consumer Behaviour** studies how a household spends a fixed income across goods to extract the highest possible satisfaction. The single condition a UPPSC PCS examiner tests is the equimarginal principle:

> MUx / Px = MUy / Py = λ

Here **MUx, MUy** are marginal utilities (utils per unit), **Px, Py** are prices in ₹ per unit, and **λ** is the marginal utility of money in utils per ₹. The two goods must also sit on, not outside, the budget line **Px·X + Py·Y = M**, where **M** is income in ₹.

> 💡 **High-Yield Memory Hook:** "**MUTT** — **M**U per **R**upee, **T**wo goods, **T**angent." Equate MU/Px across goods, then check tangency on the budget line.

| Concept | One-line recall |
|---|---|
| Total Utility (TU) | Sum of satisfaction from all units consumed |
| Marginal Utility (MU) | Addition to TU from the next unit |
| Indifference Curve | All bundles giving the same TU; convex to origin |
| Budget Line | All bundles costing exactly M; slope = −Px/Py |
| Consumer Equilibrium | Tangency of highest IC with budget line |

### 🟡 Standard — Regular Study (2d–2mo)
> Working depth for the typical two-month UPPSC revision cycle.

#### The optimisation problem

The consumer picks quantities (X, Y) to maximise U(X, Y) subject to Px·X + Py·Y ≤ M. Solving with a Lagrangian gives two conditions: (i) the slope condition MUx/Px = MUy/Py, and (ii) the budget constraint binds. Skipping either costs marks — UPPSC answer scripts commonly quote only the slope condition.

#### Cardinal versus ordinal approach

The **cardinal approach** treats utility as measurable in utils and rests on the law of **diminishing marginal utility**: as X rises with Y held constant, MUx falls and TU rises at a decreasing rate, peaks where MUx = 0, then declines. The **ordinal approach** drops the utils and ranks bundles using indifference curves, whose key properties are downward slope, convexity to the origin, and non-intersection.

#### Slopes, ratios and elasticity

Along an indifference curve the slope equals the **Marginal Rate of Substitution**, MRSxy = −ΔY/ΔX = MUx/MUy, a dimensionless ratio of units. The Hicks–Allen elasticity of substitution σ = d ln(X/Y) / d ln(MRSxy) measures how easily the consumer swaps between X and Y when relative prices change.

#### Decomposing a price change

A fall in Px rotates the budget line outward. The resulting rise in X splits into two parts through the **Slutsky equation**:

> ∂x/∂px = (∂x/∂px at constant utility) − x · (∂x/∂m)

The first term on the right is the **substitution effect** (always non-positive for normal goods), the second is the **income effect**. For a **Giffen good** the income effect is negative and large enough to swamp substitution, so the demand curve slopes upward — a classic UPPSC Prelims trap.

#### Comparison matrix — terms that get mixed up

| Often confused | What it actually is | Typical sign/slope |
|---|---|---|
| Giffen good vs Inferior good | Giffen is a special inferior good where |income effect| > |substitution effect| | Demand curve slopes upward |
| Engel curve vs Demand curve | Engel: quantity vs income at fixed prices | Demand: quantity vs own price at fixed income |
| MU of a good (MUx) vs MU of money (λ) | MUx = utils from extra unit of X | λ = utils from extra ₹ of income |
| Hicks vs Slutsky compensation | Hicks keeps utility constant | Slutsky keeps the original bundle affordable |
| Consumer surplus vs Producer surplus | Area under demand, above price | Area above supply, below price |

#### A 10-mark diagram question, resolved

"Draw the indifference curve and budget line analysis to show consumer equilibrium. What happens when Px falls?" — this is a textbook UPPSC mains prompt.

Step 1. Plot the budget line AB with A on the Y-axis at M/Py and B on the X-axis at M/Px. Its slope is −Px/Py.

Step 2. Draw three convex indifference curves IC1 < IC2 < IC3. Equilibrium occurs at the tangency point E on IC2 where the IC touches AB.

Step 3. At E, the slope of IC2 ( = MUx/MUy ) equals the slope of AB ( = Px/Py ), reproducing MUx/Px = MUy/Py.

Step 4. When Px falls, B shifts right to B′. The new equilibrium E′ lies on a higher curve IC3 to the right of E. The horizontal distance E to E′ is the total price effect; splitting it by the dashed compensated budget line A″B″ separates the substitution effect (E to E″) from the income effect (E″ to E′).

> ⚠️ **Examiner Trap:** Students draw the new equilibrium on the same indifference curve as E. A lower price raises real income, so the new IC must be strictly higher than IC2.

### 🔴 Extended — Deep Study (3mo+)
> Edge cases, mathematical limits and links to adjacent units — for candidates targeting PCS top ranks.

#### Boundary conditions on the budget set

Corner solutions occur when the optimum lies on an axis, typically when a consumer strongly prefers one good (perfect substitutes, MRSxy constant, or one MU/P ratio persistently higher). The interior tangency fails; the Kuhn–Tucker conditions replace equality with inequality MUx/Px ≥ λ ≥ MUy/Py. UPPSC rarely tests this, but UPSC and the UPPCS Economics optional do.

#### Limits of standard models

- **Diminishing MU fails** for addictive goods (tobacco, alcohol) where MU can rise with consumption, breaking the convex-TU assumption.
- **Revealed Preference Theory** (Samuelson, 1938) infers preferences from observed choices without measuring utility; weak axiom: if bundle A is chosen when B was affordable, B is never chosen when A is affordable. Strong axiom extends this across price regimes.
- **Engel curve shapes**: positively sloped for normal goods, negatively sloped for inferior goods, but for **Giffen goods** the Engel curve is also negatively sloped while the demand curve is upward-sloping — an apparent paradox resolved by noting the two curves plot different variables on the x-axis.

#### Slutsky versus Hicks in policy work

When the government compensates a consumer for a price rise, choosing **Hicksian** compensation (utility held constant) versus **Slutsky** compensation (original bundle still affordable) yields different substitution effects. Cost-of-living index literature uses Hicks; tax-incidence work often uses Slutsky. UPPSC Mains occasionally asks which approach welfare economics prefers — answer Hicks because utility is the welfare measure.

#### Advanced traps and exceptions

1. Treating **income elasticity of demand** as the slope of the Engel curve — slope mixes units; elasticity is the % change interpretation.
2. Forgetting that **consumer surplus** falls to zero only under perfect price discrimination, not in competitive equilibrium.
3. Assuming **transitivity** holds for all choices — behavioural experiments (Allais, Ellsberg paradoxes) violate it.
4. Equating the **price-consumption curve** with the **demand curve** — the PCC plots utility-maximising bundles against Px; recovering the demand curve needs re-expressing each PCC point as (Px, X).
5. Drawing an Engel curve through the origin for a necessity — many necessities have a positive intercept (lumpy minimum consumption).

#### Two practice prompts for self-test

1. If MUx = 20 − 2X and MUy = 30 − 3Y, with Px = ₹4, Py = ₹6, M = ₹120, find the equilibrium (X\*, Y\*). *(Equate MUx/Px = MUy/Py, substitute into the budget line.)*
2. A 10% rise in the price of wheat reduces quantity demanded by 2%. Show, using the Slutsky equation, whether wheat is a normal or inferior good, and state when it could be Giffen. *(Negative income effect term implies inferior; Giffen if the income-effect magnitude exceeds the substitution-effect magnitude.)*

#### How UPPSC PCS actually tests this unit

- **Prelims**: 1–2 MCQs on Giffen goods, Engel curve, equimarginal utility, consumer surplus.
- **Mains (GS Paper II, Economics optional)**: 10-mark short notes on equimarginal utility with diagram; 15-mark questions demanding derivation of demand from PCC; comparison of Hicks and Slutsky.
- **Time per question**: budget ~6 minutes for a 10-marker with diagram, ~12 minutes for a 15-marker.
- **Topper pattern**: always label axes (X, Y in units; Px, Py in ₹/unit), shade consumer surplus, and state both the tangency condition and the budget-line binding.

## Continue your study

- **[View this topic in your UPPSC PCS roadmap](/roadmap/?exam=up-psc&duration=1mo)** — see where "Consumer Behaviour" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=up-psc&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UPPSC PCS exam overview](/exams/up-psc/)** — pattern, eligibility, and syllabus
- **[All Economics notes](/notes/up-psc/economics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
