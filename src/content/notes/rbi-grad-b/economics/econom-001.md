---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: economics
subjectName: "Economics"
topic: econom-001
topicName: "Introduction to Economics"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Introduction to Economics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Economics studies how societies ration **scarce** resources against **unlimited wants**. The textbook split runs from **microeconomics** (a single buyer, a single firm) to **macroeconomics** (whole-economy aggregates like GDP and inflation). The single most-tested relation is **Price Elasticity of Demand**, written E_d = (%ΔQ)/(%ΔP). Its magnitude decides whether a tax is absorbed by the consumer or passed to the producer — examiners love that consequence.

| Term | One-line meaning | Unit / Form |
|---|---|---|
| Scarcity | Resources finite, choices mandatory | concept |
| Opportunity cost | Value of the next-best foregone alternative | ₹ |
| E_d = (ΔQ/Q)÷(ΔP/P) | Price elasticity of demand | dimensionless |
| GDP = C + I + G + (X − M) | Expenditure-side output | ₹ crore |
| π = [(CPI_t − CPI_{t−1}) / CPI_{t−1}] × 100 | Year-on-year inflation | % |

> 💡 **High-Yield Memory Hook:** **"CIGXM"** = the GDP expenditure components in order — **C**onsumption, **I**nvestment, **G**overnment spending, e**X**ports minus **M**imports. Read the letters as "cigs-ex-em" and you will write the formula under exam pressure without thinking.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Core Problems Every Economy Must Solve

Three questions sit at the base of the syllabus: **What** to produce (which goods, in what quantities), **How** to produce (labour-intensive vs capital-intensive technique), and **For whom** to produce (distribution rule). The constraint binding these questions is the **Production Possibility Frontier (PPF)** — a concave curve showing maximum feasible combinations of two goods given fixed resources and technology. Points inside the PPF mean inefficient use; points outside are unattainable today. The slope of the PPF is the **marginal rate of transformation**, which equals the opportunity cost of one good in units of the other.

#### Micro vs Macro — and Why RBI Tests Both

Microeconomics studies individual units: a consumer maximising utility subject to a budget, a firm maximising profit subject to a cost function. Macroeconomics studies aggregates: total output (GDP), the general price level (CPI/WPI), and total employment. The bridge between them is the **demand–supply** mechanism, which determines an **equilibrium price** P* where Q_d = Q_s. Shifts of either curve (income, tastes, input costs, technology) move P*; that move is the micro-macro transmission examiners ask about.

#### Comparison Matrix — Often-Confused Pairs

| Confused pair | Distinction students miss |
|---|---|
| GDP at Market Price vs GDP at Factor Cost | GMP minus **Net Indirect Taxes** = GFP; subsidies raise GFP above GMP |
| WPI vs CPI | WPI tracks wholesale (producer) prices; CPI tracks retail (consumer) prices — services enter CPI only |
| Monetary Policy vs Fiscal Policy | RBI runs monetary policy (Repo, CRR, SLR, OMO); GoI runs fiscal policy (taxation, spending, borrowing) |
| GNP vs GDP | GNP = GDP + **Net Factor Income from Abroad (NFIA)** — for India NFIA is typically negative |
| Nominal vs Real GDP | Real GDP deflates nominal GDP by a price index to strip out inflation |
| Inflation vs Monetary expansion | Inflation is a sustained general price rise; printing money is one possible cause, not the same thing |

#### Worked Numerical — Elasticity Around a Tax

A commodity's price rises from ₹100 to ₹110 (+10%). Quantity demanded falls from 1,000 units to 900 units (−10%). Compute E_d and classify.

**Step 1.** Use E_d = (ΔQ/Q) ÷ (ΔP/P). ΔQ/Q = (900 − 1000)/1000 = −0.10. ΔP/P = (110 − 100)/100 = +0.10.

**Step 2.** E_d = (−0.10) / (+0.10) = **−1.0**. By convention we report |E_d| = **1.0**, so demand is **unit elastic**.

**Step 3.** Implication for a 5% excise duty: the tax burden splits roughly 50:50 between buyer and seller. If |E_d| were 0.5 instead, the consumer would absorb about two-thirds of any tax — a point RBI questions test by varying the elasticity number.

> ⚠️ **Examiner Trap:** Students leave the **negative sign** on E_d and then claim demand is "elastic with E_d = −1". Elasticity magnitude, not sign, classifies the curve; the sign merely reflects the law of demand.

---

### 🔴 Extended — Deep Study (3mo+)

#### Money Multiplier — Why m = 1/CRR Is a Simplification

The clean formula m = 1/CRR assumes banks lend out every rupee above the statutory reserve and the public holds no cash. Real-world leakage comes from **currency held by the public** (c), **excess reserves** banks hoard (e), and the **reserve requirement** itself (r). The rigorous form is

#### m = (1 + c) / (r + e + c)

with c = currency-deposit ratio, r = reserve ratio (CRR + SLR portion not lent), e = excess reserve ratio — all dimensionless fractions. If c = 0.15, r = 0.04, e = 0.01, then m = 1.15 / 0.20 = **5.75**, far below 1/0.04 = 25. Numericals in the OG illustrate exactly this gap; treat 1/CRR as an upper bound, not the answer.

#### Edge Cases in Elasticity and Demand

- **Giffen goods**: a staple whose demand rises when its own price rises, because the income effect overwhelms the substitution effect. E_d is **positive** — contradicting the usual sign convention.
- **Veblen goods**: status items (luxury watches) where higher price signals desirability; again E_d can be positive.
- **Perfectly inelastic** demand (|E_d| = 0): a vertical line — essential medicines with no substitute often approximate this.
- **Perfectly elastic** demand (|E_d| = ∞): a horizontal line at the market price — the textbook limit for a firm in perfect competition facing many rivals.

#### Common Mistakes in Numerical Items

1. Forgetting that **Net Indirect Taxes (NIT) = Indirect taxes − Subsidies** when converting GMP to GFP.
2. Using the **money-multiplier** 1/CRR when the question specifies currency held by the public — use the leakage form above.
3. Treating **SLR** (Statutory Liquidity Ratio, held in gold/government securities) as additive to **CRR** in the simple multiplier — CRR is the binding reserve for the multiplier, SLR is a separate liquidity rule.
4. Reading "real GDP growth" off nominal GDP deflated by WPI instead of the **GDP deflator** — the deflator covers all domestic output, WPI does not.
5. Confusing **NFIA** (Net Factor Income from Abroad) with **NRI** remittances, which sit under private transfers, not factor income.

#### Advanced Practice Prompts

1. **Numerical.** CRR = 4%, currency-deposit ratio c = 0.20, excess reserves e = 0.02. Compute the leakage-adjusted money multiplier and the deposit expansion from an initial ₹1,000 crore primary injection. Compare with the naïve 1/CRR figure.
2. **Policy reasoning.** RBI hikes the Repo Rate by 25 basis points while GoI cuts excise duty on petrol. Trace the transmission to (a) bank lending rate, (b) aggregate demand, (c) WPI versus CPI in the following quarter. Identify which instrument targets inflation versus growth.

> 📌 **Formula Check:** Every elasticity formula is **dimensionless** because two percentages cancel; GDP aggregates carry units of **₹ crore** (or ₹ lakh, depending on the table); the inflation rate π carries units of **%**; the money multiplier is a pure ratio. Mixing units across these in a single line is the most common arithmetic slip in the numerical set.

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "Introduction to Economics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Economics notes](/notes/rbi-grad-b/economics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
