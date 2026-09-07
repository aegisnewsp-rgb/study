---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: economics
subjectName: "Economics"
topic: econom-003
topicName: "Elasticity"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-07"
---

# Elasticity of Demand & Supply: Theoretical Foundations, Quantitative Derivations & Policy Applications

In the RBI Grade B examination (Phase-I General Awareness and Phase-II Economic and Social Issues / Finance & Management), elasticity is a fundamental microeconomic concept underpinning market structure analysis, monetary transmission, taxation policy, and exchange rate dynamics. Elasticity quantifies the proportionate responsiveness of a dependent economic variable to changes in an independent driver. For central bank economists and monetary policymakers, measuring demand and supply elasticities is critical for predicting inflationary pass-through, fiscal tax incidence, exchange rate devaluations via the Marshall-Lerner condition, and commodity price stabilization.

---

## Complete 3-Tier Study Guide

### 🟢 Lite — Quick Revision (1h–1d sprint)

For rapid formula recall before Phase-I or mock tests, memorize these mathematical expressions, elasticity benchmarks, and geometric relationships:

- **Price Elasticity of Demand (PED)**:
  $$e_p = -\frac{\%\Delta Q_d}{\%\Delta P} = -\left(\frac{\Delta Q}{\Delta P}\right)\left(\frac{P}{Q}\right) = -\left(\frac{dQ}{dP}\right)\left(\frac{P}{Q}\right)$$
  Conventionally reported as an absolute positive magnitude $|e_p|$:
  - $|e_p| = 0$: **Perfectfully Inelastic** (vertical demand curve; quantity demanded is completely insensitive to price).
  - $0 < |e_p| < 1$: **Relatively Inelastic** (percentage change in quantity is smaller than percentage change in price; typical for necessities like foodgrains, basic utilities).
  - $|e_p| = 1$: **Unit Elastic** (rectangular hyperbola demand curve $P \cdot Q = \text{constant}$; total expenditure is invariant to price).
  - $1 < |e_p| < \infty$: **Relatively Elastic** (percentage change in quantity exceeds percentage change in price; typical for consumer durables, luxuries with substitutes).
  - $|e_p| \rightarrow \infty$: **Perfectfully Elastic** (horizontal demand curve; price is strictly determined by the market, as faced by a single firm under perfect competition).
- **Geometric / Point Elasticity on a Linear Demand Curve**:
  $$e_p = \frac{\text{Lower Segment of Demand Curve}}{\text{Upper Segment of Demand Curve}} = \frac{L}{U}$$
  Along a linear, downward-sloping demand curve from vertical intercept to horizontal intercept:
  - Upper vertical intercept ($Q = 0$): $|e_p| = \infty$.
  - Upper half: $|e_p| > 1$.
  - **Exact Midpoint**: $|e_p| = 1$.
  - Lower half: $|e_p| < 1$.
  - Lower horizontal intercept ($P = 0$): $|e_p| = 0$.
- **Amoroso-Robinson Relationship**:
  $$MR = P\left(1 - \frac{1}{|e_p|}\right) = AR\left(1 - \frac{1}{|e_p|}\right)$$
  - If $|e_p| > 1 \implies MR > 0$ (Price cut increases Total Revenue).
  - If $|e_p| = 1 \implies MR = 0$ (Total Revenue is maximized).
  - If $|e_p| < 1 \implies MR < 0$ (Price cut reduces Total Revenue).
- **Income Elasticity of Demand (YED)**:
  $$e_y = \left(\frac{\Delta Q}{\Delta Y}\right)\left(\frac{Y}{Q}\right)$$
  - $e_y > 1$: **Luxury / Superior Good** (demand expands more than proportionately with income; Engel curve bends toward quantity axis).
  - $0 < e_y \le 1$: **Normal Necessity** (demand expands less than proportionately with income; Engel curve bends toward income axis).
  - $e_y < 0$: **Inferior Good** (demand contracts as income rises; negative Engel curve slope).
- **Cross Elasticity of Demand (XED)**:
  $$e_{xy} = \left(\frac{\Delta Q_x}{\Delta P_y}\right)\left(\frac{P_y}{Q_x}\right)$$
  - $e_{xy} > 0$: **Substitute Goods** (price increase of $Y$ increases demand for $X$; e.g., tea and coffee).
  - $e_{xy} < 0$: **Complementary Goods** (price increase of $Y$ decreases demand for $X$; e.g., automobiles and petrol).
  - $e_{xy} = 0$: **Independent / Unrelated Goods**.

---

### 🟡 Standard — Core Exam Concepts (2d–2mo preparation)

In this standard preparation tier, we examine point vs. arc measurement mechanics, determinants of demand/supply elasticity, and the total revenue test.

#### 1. Point vs. Arc Elasticity Mechanics

A classic pitfall in numerical questions arises from the choice of base values:
1. **Point Elasticity**:
   - Evaluated at an infinitesimal change around a single coordinate point on the demand function:
     $$e_p = -\left(\frac{dQ}{dP}\right)\left(\frac{P}{Q}\right)$$
   - Requires a continuous, differentiable demand equation $Q = f(P)$.
2. **Arc Elasticity (Midpoint / Average Formula)**:
   - When moving between two discrete, widely separated price-quantity observations $(P_1, Q_1)$ and $(P_2, Q_2)$, calculating percentage changes using initial values yields asymmetric results depending on the direction of price change.
   - The mid-point convention developed by R.G.D. Allen resolves this by using average prices and quantities:
     $$e_{arc} = -\frac{\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\frac{P_2 - P_1}{(P_1 + P_2)/2}} = -\left(\frac{Q_2 - Q_1}{P_2 - P_1}\right)\left(\frac{P_1 + P_2}{Q_1 + Q_2}\right)$$
   - In RBI Grade B numerical problems, always deploy the **arc formula** whenever discrete coordinate pairs are provided without an explicit functional derivative.

#### 2. The Total Outlay / Total Revenue (TR) Test

Alfred Marshall established the relationship between price adjustments, demand elasticity, and total expenditure ($TE = P \times Q$):

```
+-----------------------------------------------------------------------------------------+
|                  MARSHALLIAN TOTAL REVENUE / EXPENDITURE TEST MATRIX                    |
+-----------------------------------------------------------------------------------------+
| ELASTICITY VALUE     | PRICE DIRECTION | QUANTITY EFFECT | TOTAL REVENUE (TR = P x Q)   |
+----------------------+-----------------+-----------------+------------------------------+
| Elastic (|e| > 1)    | Price Falls (↓) | Q rises by >%   | Total Revenue Increases (↑)  |
|                      | Price Rises (↑) | Q falls by >%   | Total Revenue Decreases (↓)  |
+----------------------+-----------------+-----------------+------------------------------+
| Unitary (|e| = 1)    | Price Falls (↓) | Q rises by =%   | Total Revenue Constant (↔)   |
|                      | Price Rises (↑) | Q falls by =%   | Total Revenue Constant (↔)   |
+----------------------+-----------------+-----------------+------------------------------+
| Inelastic (|e| < 1)  | Price Falls (↓) | Q rises by <%   | Total Revenue Decreases (↓)  |
|                      | Price Rises (↑) | Q falls by <%   | Total Revenue Increases (↑)  |
+----------------------+-----------------+-----------------+------------------------------+
```

**Monopolist Behavior Proof**:
A rational monopolist maximizes profit where Marginal Revenue equals Marginal Cost ($MR = MC$). Since Marginal Cost is physically non-negative ($MC \ge 0$), equilibrium requires:
$$MR \ge 0 \implies P\left(1 - \frac{1}{|e_p|}\right) \ge 0 \implies 1 - \frac{1}{|e_p|} \ge 0 \implies |e_p| \ge 1$$
**Core Deduction**: A profit-maximizing monopolist will **never intentionally produce on the inelastic portion** of its demand curve ($|e_p| < 1$), because raising price in that region would simultaneously increase revenue (by the TR test) and reduce total production costs (by producing fewer units), unequivocally increasing profits!

#### 3. Determinants of Price Elasticity of Demand

1. **Availability and Closeness of Substitutes**: The single most dominant factor. Commodities with close substitutes (e.g., individual brands of tea or edible oils) exhibit high elasticity because consumers can switch readily. Commodities with no substitutes (e.g., life-saving medicines, insulin, salt) are highly inelastic.
2. **Proportion of Consumer Income Spent**: Goods that consume an infinitesimal fraction of household budgets (e.g., matchboxes, needles, newspapers) face inelastic demand, whereas major capital outlays (e.g., motor vehicles, housing) exhibit high price sensitivity.
3. **Nature of Need (Necessity vs. Luxury)**: Basic sustenance requirements are price inelastic; luxury recreational services are price elastic.
4. **Number of Alternative Uses**: Goods with versatile multi-functional applications (e.g., electricity, steel, milk) are more elastic than single-purpose goods.
5. **Time Horizon**: Demand is invariably **more elastic in the long run** than in the short run. Over longer horizons, consumers alter habitual behavior, adopt energy-efficient appliances, or retool manufacturing processes.

---

### 🔴 Extended — Deep Analytical Study (3mo+ mastery)

In this advanced tier, we dissect tax incidence mechanics, deadweight loss optimization via the Ramsey Rule, the Cobweb supply model, and the Marshall-Lerner condition.

#### 1. Tax Incidence and Deadweight Loss Mechanics

When the government levies a specific per-unit excise tax ($t$) or GST on a commodity, the economic burden (*incidence*) does not depend on whether the statutory tax is collected from buyers or sellers. The relative burden is dictated strictly by the **relative elasticities of demand and supply**:

```
+-----------------------------------------------------------------------------------+
|               TAX INCIDENCE AND SURPLUS EXTRACTION RATIOS                         |
+-----------------------------------------------------------------------------------+
| Ratio of Tax Burdens:                                                             |
|   (Consumer Tax Burden) / (Producer Tax Burden) = e_s / |e_d|                     |
|                                                                                   |
| SPECIAL BOUNDARY CASES:                                                           |
| • Perfectly Inelastic Demand (|e_d| = 0): Consumer bears 100% of the tax burden;  |
|   market price rises by the exact amount of the tax t; zero deadweight loss.      |
| • Perfectly Elastic Demand (|e_d| -> inf): Producer absorbs 100% of the tax burden|
| • Inelastic Supply (e_s = 0): Producer bears 100% of the tax burden.              |
+-----------------------------------------------------------------------------------+
```

**Deadweight Loss (Excess Burden) Formula**:
The Harberger triangle representing the deadweight loss ($DWL$) of taxation is derived from the lost consumer and producer surplus:
$$DWL = \frac{1}{2} \cdot t \cdot \Delta Q = \frac{1}{2} \cdot t^2 \cdot \left(\frac{e_d \cdot e_s}{e_s - e_d}\right) \cdot \frac{Q_0}{P_0}$$
- Deadweight loss increases with the **square of the tax rate** ($t^2$). Doubling the tax rate quadruples the welfare deadweight loss!
- **Ramsey Rule for Optimal Taxation**: To minimize society's aggregate deadweight loss when raising a fixed target of fiscal tax revenue, commodity tax rates should be set **inversely proportional to their price elasticities of demand** ($t_i \propto 1/|e_{di}|$). Taxing inelastic commodities (e.g., fuels, tobacco) minimizes economic distortions.

#### 2. Price Elasticity of Supply & The Cobweb Phenomenon

Price Elasticity of Supply (PES) measures producer responsiveness:
$$e_s = \left(\frac{dQ_s}{dP}\right)\left(\frac{P}{Q_s}\right)$$
- For any linear supply curve passing through the origin ($Q_s = cP$), $e_s = 1$ everywhere along the curve regardless of its slope!
- If a linear supply curve intersects the price axis (positive price intercept), $e_s > 1$ (elastic).
- If a linear supply curve intersects the quantity axis (positive quantity intercept), $e_s < 1$ (inelastic).

**The Cobweb Model in Agricultural Commodities**:
In agricultural markets with fixed production lags (planting in period $t$, harvesting in period $t+1$):
- Current supply is determined by past prices: $Q_s^t = f(P_{t-1})$.
- Current price clears current supply: $P_t = f(Q_s^t)$.
- **Stability Conditions**:
  - *Convergent (Damped) Cobweb*: Stable equilibrium reached if supply is less responsive than demand (slope of supply curve steeper than demand curve, $|e_d| > e_s$).
  - *Divergent (Explosive) Cobweb*: Price cycles oscillate with widening amplitude if supply is more responsive than demand ($e_s > |e_d|$).

#### 3. Macroeconomic Application: The Marshall-Lerner Condition

In international macroeconomics, central banks evaluate whether a currency depreciation will improve the trade balance:
- Currency devaluation makes exports cheaper in foreign currency and imports more expensive in domestic currency.
- **Marshall-Lerner Condition**: A nominal currency depreciation improves the current account balance if and only if the sum of price elasticities of export and import demand exceeds unity:
  $$|e_x| + |e_m| > 1$$
- **The J-Curve Effect**: In the short run, contracts are pre-committed and elasticities are low ($|e_x| + |e_m| < 1$), causing the trade balance to worsen initially. Over a 6-to-18-month horizon, consumers and firms substitute import sources, elasticities rise, and the trade balance decisively improves.

---

## High-Yield Comparison Tables

### Table 1: Comprehensive Elasticity Coefficients & Economic Typologies

| Elasticity Type | Mathematical Definition | Sign & Value Range | Economic Interpretation & Classification |
| :--- | :--- | :--- | :--- |
| **Price Elasticity of Demand (PED)** | $-(\Delta Q/Q) / (\Delta P/P)$ | $|e_p| = 0$ | Perfectly Inelastic (Vertical demand curve; insulin, water) |
| | | $0 < |e_p| < 1$ | Inelastic Necessity (Food staples, residential electricity) |
| | | $|e_p| = 1$ | Unit Elastic (Constant expenditure hyperbola) |
| | | $1 < |e_p| < \infty$ | Elastic (Consumer durables, competitive brand goods) |
| | | $|e_p| \rightarrow \infty$ | Perfectly Elastic (Horizontal price line; perfect competition) |
| **Income Elasticity (YED)** | $(\Delta Q/Q) / (\Delta Y/Y)$ | $e_y < 0$ | Inferior Good (Coarse cereals, cheap local transport) |
| | | $0 < e_y \le 1$ | Normal Necessity (Clothing, staple foodstuffs) |
| | | $e_y > 1$ | Superior / Luxury Good (High-end electronics, overseas tourism) |
| **Cross Elasticity (XED)** | $(\Delta Q_x/Q_x) / (\Delta P_y/P_y)$ | $e_{xy} > 0$ | Substitute Commodities (Butter & margarine, rail & air travel) |
| | | $e_{xy} < 0$ | Complementary Commodities (Hardware & software, cars & tyres) |
| | | $e_{xy} = 0$ | Unrelated Commodities (Salt and laptops) |
| **Price Elasticity of Supply (PES)**| $(\Delta Q_s/Q_s) / (\Delta P/P)$ | $0 < e_s < 1$ | Inelastic Supply (Agricultural crops in immediate post-harvest) |
| | | $e_s > 1$ | Elastic Supply (Manufactured goods with spare factory capacity) |

### Table 2: Elasticity, Marginal Revenue & Expenditure Interactions

| Elasticity Segment | Price Adjustment | Marginal Revenue ($MR$) | Total Revenue ($TR$) / Total Expenditure ($TE$) |
| :--- | :--- | :--- | :--- |
| **Elastic ($|e_p| > 1$)** | Price Increases (↑) | Positive ($MR > 0$) | Total Revenue Falls (↓) |
| | Price Decreases (↓) | Positive ($MR > 0$) | Total Revenue Rises (↑) |
| **Unitary ($|e_p| = 1$)** | Price Increases (↑) | Zero ($MR = 0$) | Total Revenue Stays Constant (↔) |
| | Price Decreases (↓) | Zero ($MR = 0$) | Total Revenue Stays Constant (↔) |
| **Inelastic ($|e_p| < 1$)**| Price Increases (↑) | Negative ($MR < 0$) | Total Revenue Rises (↑) |
| | Price Decreases (↓) | Negative ($MR < 0$) | Total Revenue Falls (↓) |

### Table 3: Tax Incidence Under Differing Elasticity Regimes

| Demand Elasticity ($|e_d|$) | Supply Elasticity ($e_s$) | Who Bears the Greater Burden? | Price Received by Producer vs. Paid by Consumer |
| :--- | :--- | :--- | :--- |
| **$|e_d| < e_s$** (Demand more inelastic) | — | **Buyer / Consumer** | Consumer price increases by more than producer price drops |
| **$|e_d| > e_s$** (Supply more inelastic) | — | **Seller / Producer** | Producer price drops by more than consumer price rises |
| **$|e_d| = e_s$** | — | **Shared Exactly 50–50** | Tax wedge divided equally between buyer and seller |
| **$|e_d| = 0$** (Perfect Inelasticity) | Any $e_s > 0$ | **100% on Consumer** | Consumer price rises by full amount of tax; zero producer burden |
| **$|e_d| \rightarrow \infty$** (Perfect Elasticity) | Any $e_s > 0$ | **100% on Producer** | Consumer price unchanged; producer receives $P_0 - t$ |

---

## Worked RBI Grade B Exam Questions

### Question 1 (Phase-I Analytical Microeconomics)

**Question:** A monopolist faces the linear demand function $Q = 100 - 2P$. At what price and quantity will the firm's Total Revenue be maximized, and what is the Price Elasticity of Demand at that output level?
- (A) $P = 25, Q = 50, |e_p| = 1$
- (B) $P = 50, Q = 0, |e_p| = \infty$
- (C) $P = 20, Q = 60, |e_p| = 0.67$
- (D) $P = 30, Q = 40, |e_p| = 1.5$

**Detailed Solution:**
1. Express inverse demand:
   $$2P = 100 - Q \implies P = 50 - 0.5Q$$
2. Formulate Total Revenue ($TR$):
   $$TR = P \times Q = (50 - 0.5Q)Q = 50Q - 0.5Q^2$$
3. Find Marginal Revenue ($MR$) by taking the first derivative:
   $$MR = \frac{d(TR)}{dQ} = 50 - Q$$
4. Set $MR = 0$ to maximize Total Revenue:
   $$50 - Q = 0 \implies Q = 50$$
5. Solve for corresponding price $P$:
   $$P = 50 - 0.5(50) = 50 - 25 = 25$$
6. Verify Price Elasticity of Demand at $(P=25, Q=50)$:
   $$|e_p| = -\left(\frac{dQ}{dP}\right)\left(\frac{P}{Q}\right) = -(-2)\left(\frac{25}{50}\right) = 2 \times 0.5 = 1.0$$
- *Correct Answer:* **(A) $P = 25, Q = 50, |e_p| = 1$**.

---

### Question 2 (Phase-II Descriptive Economics & Policy Framework)

**Question:** The retail price of petrol in an economy increases from ₹90 per litre to ₹110 per litre. Consequently, monthly household petrol consumption drops from 50 litres to 45 litres.
1. Calculate the Arc Price Elasticity of Demand using the midpoint method.
2. Determine whether consumer expenditure on petrol increased or decreased.
3. State the policy implication for government excise duty revenues.

**Step-by-Step Solution:**
1. **Calculate Arc Elasticity**:
   - $P_1 = 90, P_2 = 110 \implies \Delta P = 110 - 90 = 20$; Average $P = (90+110)/2 = 100$.
   - $Q_1 = 50, Q_2 = 45 \implies \Delta Q = 45 - 50 = -5$; Average $Q = (50+45)/2 = 47.5$.
   $$e_{arc} = -\frac{\Delta Q / Q_{avg}}{\Delta P / P_{avg}} = -\frac{-5 / 47.5}{20 / 100} = \frac{0.10526}{0.20} \approx 0.526$$
   - Since $|e_{arc}| = 0.53 < 1$, demand for petrol is **relatively inelastic**.
2. **Total Expenditure Analysis**:
   - Initial monthly expenditure: $TE_1 = P_1 \times Q_1 = 90 \times 50 = ₹4,500$.
   - Subsequent monthly expenditure: $TE_2 = P_2 \times Q_2 = 110 \times 45 = ₹4,950$.
   - Household expenditure increased by ₹450 (a $10\%$ expansion). This validates the Total Revenue test: when $|e| < 1$, a price increase expands total outlay.
3. **Fiscal Policy Implications**:
   - Because fuel demand is highly price inelastic ($|e| \approx 0.53$), increasing excise duties generates substantial fiscal revenues with minimal reduction in quantity consumed and relatively minor deadweight loss. This explains why central and state fiscal authorities rely heavily on fuel excises for steady budget stabilization.

---

## Common Preparation Traps for RBI Grade B

- **Trap 1: Elasticity vs. Slope**: Never equate elasticity with the slope of the demand curve. The slope of a linear demand curve ($dP/dQ$) is constant throughout, but elasticity changes continuously from infinity at the price axis to zero at the quantity axis.
- **Trap 2: Reporting Negative Signs**: While PED is mathematically negative due to the Law of Demand, economists report $|e_p|$ as an absolute positive number. However, for **Income Elasticity (YED)** and **Cross Elasticity (XED)**, the algebraic sign is **strictly mandatory** because the sign indicates good categorization (inferior vs. normal; substitute vs. complement).
- **Trap 3: Unit Elastic Demand Curve Shape**: A straight-line demand curve has unit elasticity at only **one single point** (its midpoint). A demand curve that exhibits unit elasticity at **every point** is a **rectangular hyperbola** ($P \cdot Q = C$).
- **Trap 4: Short-Run vs. Long-Run Supply**: In immediate market periods, supply is fixed and perfectly inelastic. As time elapses, capital and labor adjust, rendering long-run supply significantly more elastic.

---

## Continue your study

- **[RBI Grade B Exam Overview](/exams/rbi-grad-b/)** — phase-wise exam pattern, syllabus coverage, cutoff trends, and interview weightage
- **[All RBI Grade B Economics Notes](/notes/rbi-grad-b/economics/)** — complete study guides on Monetary Policy, Inflation Dynamics, and National Income
- **[RBI Grade B Preparation Roadmap](/exams/rbi-grad-b/#roadmap)** — 90-day structured study strategy for Phase-I and Phase-II success

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
