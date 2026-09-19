---
exam: cs-exec
examName: CS Executive
subject: economics
subjectName: Economics
description: Introduction to Economics, covering basic concepts, scope, and fundamental principles for CS Executive exam preparation.
topic: econom-001
topicName: Introduction to Economics
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-18"
diagramPrompt: "A simple supply-demand graph with S curve sloping upward and D curve sloping downward, intersecting at equilibrium point labeled E with price axis and quantity axis labeled."
---

# Introduction to Economics

> Lite = 60-second snapshot before the exam hall door closes. Standard = the explanation a working student actually sits with for two weeks. Extended = the version a topper reads a third time before the attempt.

### 🟢 Lite — Quick Review (1h–1d)

> Start here if you opened this page ninety minutes before your CS Executive paper. The two question banks examiners mine every attempt are the **national income conversion chain** and the **RBI tool kit**.

Economics, at the CS Executive level, is the study of how a society allocates scarce resources among competing wants. That single sentence carries the whole chapter — scarcity forces choice, choice creates **opportunity cost**, and opportunity cost is what every cost curve, every tax decision, and every fiscal-policy debate is really about.

| Must-know quantity | Formula | SI unit / type |
|---|---|---|
| Price Elasticity of Demand | $E_d = \dfrac{\%\Delta Q}{\%\Delta P}$ | Dimensionless |
| Keynesian Multiplier | $k = \dfrac{1}{1-MPC} = \dfrac{1}{MPS}$ | Pure ratio |
| Money Multiplier | $\dfrac{1}{CRR}$ | Pure ratio |
| GDP at Market Price | $C + I + G + (X - M)$ | ₹ crore |

The chain the examiner loves — NNP at FC = GDP at MP − Depreciation + NFIA — must be written from memory. Going from Gross to Net means subtracting depreciation; going from Market Price to Factor Cost means subtracting Net Indirect Taxes.

> 💡 **High-Yield Memory Hook:** **"Gross Net, Market Factor" — GNMF.** Going Gross → Net strips **Depreciation**. Going Market Price → Factor Cost strips **Net Indirect Taxes**. The two strips are independent; do them in either order and you reach the same NNP at FC.

### 🟡 Standard — Regular Study (2d–2mo)

> The full mechanism behind the Lite headlines, with one resolved exam problem so you can see how the chain is tested.

#### Three Central Problems and the Production Possibility Curve

Every economy, regardless of ideology, answers three questions: what to produce, how to produce, for whom to produce. The **Production Possibility Curve (PPC)** is the geometric picture of those choices — every point on the curve is efficient, every point inside is wasteful, every point outside is unattainable today. The slope of the PPC at any point is the **Marginal Rate of Transformation (MRT)**, which is the opportunity cost of one good in units of the other.

#### Demand, Supply and Elasticity — What Slips in the Exam Hall

The Law of Demand says price and quantity demanded move in opposite directions, ceteris paribus. A **shift** of the demand curve happens when a non-price variable (income, tastes, price of related goods) changes; a **movement along** the curve is the response to the good's own price. Elasticity measures that response as a ratio of percentages, so it carries no unit.

#### Comparison Matrix — Concepts Students Regularly Swap

| Confused pair | Correct distinction |
|---|---|
| GDP at MP vs GDP at FC | Subtract Net Indirect Taxes (NIT) to convert MP → FC |
| Gross vs Net | Subtract Depreciation / Consumption of Fixed Capital |
| Fiscal vs Monetary Policy | Government spending & taxation vs RBI's repo rate, CRR, SLR, OMO |
| CRR vs SLR | CRR = cash with RBI (currently 4% per RBI master circular); SLR = gold + govt securities kept with the bank itself (currently 18%) |
| Giffen vs Veblen good | Giffen = inferior good, negative income effect dominates; Veblen = luxury, prestige drives demand up with price |
| Current vs Capital Account | Current = visible + invisible trade, remittances; Capital = FDI, FPI, external commercial borrowings |

#### National Income — The Identity Chain

- **GDP at MP** = $C + I + G + (X - M)$ — expenditure method.
- **NDP at MP** = GDP at MP − Depreciation.
- **NNP at MP** = NDP at MP + NFIA (Net Factor Income from Abroad).
- **NNP at FC** (this is **National Income**) = NNP at MP − NIT.

NFIA = Income earned by residents abroad − Income earned by foreigners domestically. Sign convention: positive NFIA means residents earned more abroad than foreigners earned locally.

#### Monetary Tools of the RBI — What the Examiner Quotes

Repo Rate is the rate at which RBI lends short-term funds to commercial banks against government securities. Reverse Repo Rate is what RBI pays banks for parking surplus funds with it. CRR is the slice of total deposits banks must hold as cash with RBI; SLR is the slice held as gold + approved securities with themselves. Open Market Operations (OMO) are RBI's outright purchase or sale of government securities to inject or absorb liquidity.

#### Worked Problem — National Income Conversion

A hypothetical economy reports the following data for a year, all in ₹ crore:

- Private final consumption expenditure (C) = 5,000
- Gross domestic capital formation (I) = 2,000
- Government final consumption expenditure (G) = 1,500
- Net exports (X − M) = −500
- Depreciation = 700
- Net Indirect Taxes (NIT) = 600
- Net Factor Income from Abroad (NFIA) = +400

#### Find: NNP at Factor Cost (National Income).

Step 1 — GDP at MP using the expenditure method:
$C + I + G + (X - M) = 5000 + 2000 + 1500 + (-500) = 8000$ ₹ crore.

Step 2 — Strip Depreciation to go Gross → Net:
NDP at MP = $8000 - 700 = 7300$ ₹ crore.

Step 3 — Add NFIA to convert from Domestic to National:
NNP at MP = $7300 + 400 = 7700$ ₹ crore.

Step 4 — Strip NIT to convert from MP to FC:
NNP at FC = $7700 - 600 = 7100$ ₹ crore.

So National Income = ₹ 7,100 crore.

> ⚠️ **Examiner Trap:** Roughly one in three scripts forgets to add NFIA when computing NNP, or adds it at the wrong stage (before subtracting depreciation). NFIA must be added **after** depreciation, not before, because the economy is already moving from Gross to Net.

> 💡 **High-Yield Revision Hook:** The order is fixed — **Gross→Net** first (subtract Depreciation), then **Domestic→National** (add NFIA), then **Market Price→Factor Cost** (subtract NIT). Any other order still lands on the correct answer mathematically, but examiners expect the GNMF sequence and grade against it.

### 🔴 Extended — Deep Study (3mo+)

> Where the chapter meets the rest of Paper 3, and the traps only toppers spot.

#### The MPC + MPS = 1 Invariant and the Multiplier

By definition, every additional rupee of disposable income is either consumed or saved. So **MPC + MPS = 1** exactly, always. If a question gives MPC = 0.75 and MPS = 0.30, one of the numbers is misprinted — the multiplier then cannot be computed as $1/(1-MPC)$ because the premise is broken. The Keynesian multiplier $k = 1/MPS$ therefore lives in the range $1 < k < \infty$ for $0 < MPS < 1$.

#### Fisher's Quantity Theory and its Hidden Variable

$MV = PT$ looks harmless, but the **V (velocity of circulation)** is not a number — it is the inverse of the Cambridge cash-balance approach's $k$ (the fraction of income held as money). So $V = 1/k$, and writing the equation as $M = kPT$ makes the identity with the Cambridge school's view of money demand visible. For exam answers, write both forms and note that $M$ in Fisher's version includes both cash and credit money; the extended Fisher equation $P = \dfrac{MV + M'V'}{T}$ adds credit money $M'$ with its own velocity $V'$.

#### Inflation Taxonomy — Speed Bands

| Category | Annual rate band | Real-world anchor |
|---|---|---|
| Creeping | Up to ~3% | Most central-bank inflation targets |
| Walking | 3–7% | Early-stage overheating |
| Running | 7–10% | Policy alarm zone |
| Hyperinflation | Above ~50%, often 4-digit | Historical episodes: Weimar Germany, Zimbabwe 2008 |

Demand-pull inflation traces to too much money chasing too few goods (AD shifts right). Cost-push inflation traces to supply-side shocks — oil price spikes, wage spirals, rupee depreciation feeding import costs.

#### Balance of Payments — The Two Accounts and Why They "Balance"

The BoP is a double-entry statement, so the sum of all entries is zero by construction. The **Current Account** records visible trade (goods), invisible trade (services), income and current transfers. The **Capital Account** records capital transfers and the acquisition/disposal of non-produced, non-financial assets. The **Financial Account** (often merged with Capital in CS Executive treatments) records FDI, portfolio investment, external commercial borrowings and reserve changes. Autonomous transactions need not sum to zero; accommodating transactions (RBI reserve movements being the canonical example) are the plug that closes the books.

#### Connection Points in the Wider CS Executive Syllabus

- **Company Law / Accounts**: Depreciation concept recurs in Schedule II of the Companies Act and in the wear-and-tear allowances of the Income-tax Act.
- **Securities Laws**: SEBI's role mirrors RBI's regulatory role; the SEBI Act 1992 and the RBI Act 1934 are the twin anchors.
- **Tax Laws**: Fiscal-policy transmission (tax rate → AD → output) is the same channel that Direct Tax and GST syllabi use to discuss buoyancy.

#### Advanced Practice Prompts

1. A closed economy has MPC = 0.8. Government raises autonomous expenditure by ₹ 500 crore. Compute the change in equilibrium national income and show why the multiplier cannot exceed $1/MPS$ when MPS is bounded.
2. Suppose RBI hikes the Repo Rate by 25 basis points while simultaneously reducing the SLR by 1 percentage point. Predict the directional effect on bank lending rates, deposit rates, and bond yields. Which instrument dominates in the short run?

## Continue your study

- **[View this topic in your CS Executive roadmap](/roadmap/?exam=cs-exec&duration=1mo)** — see where "Introduction to Economics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cs-exec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CS Executive exam overview](/exams/cs-exec/)** — pattern, eligibility, and syllabus
- **[All Economics notes](/notes/cs-exec/economics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
