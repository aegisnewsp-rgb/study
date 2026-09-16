---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: finance
subjectName: "Finance"
topic: financ-010
topicName: Working Capital (WC)
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Working Capital (WC)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Working Capital** is the capital a firm needs to fund day-to-day operations, measured as Current Assets minus Current Liabilities. For RBI Grade B, distinguish **Gross WC** (total current assets) from **Net WC** (CA − CL), and remember the **Cash Conversion Cycle (CCC)** drives the actual cash tied up.

| Term | Definition | Key Formula |
|---|---|---|
| Gross Working Capital | Total investment in current assets | Σ(Cash + Receivables + Inventory + Marketable Securities) |
| Net Working Capital (NWC) | Excess of current assets over current liabilities | NWC = Current Assets − Current Liabilities |
| Cash Conversion Cycle | Time cash is locked in operations | CCC = Inventory Period + Receivables Period − Payables Period |
| Operating Cycle | Days from raw material purchase to cash realisation | OC = R + W + D − C |
| Current Ratio | Short-term solvency measure | Current Assets ÷ Current Liabilities |

> 💡 **High-Yield Memory Hook:** "**I-PRAP**" — **I**nventory Period + **R**eceivables Period − Payables **A**ge = **P**ure cash gap. The shorter your CCC, the leaner your working capital.

Three financing strategies: **Matching** (align maturity of finance with asset life), **Conservative** (long-term funds for permanent + temporary WC — low risk, low return), **Aggressive** (short-term funds even for permanent WC — high risk, high return).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Concept: Permanent vs Temporary WC
**Permanent (Fixed) WC** is the minimum current asset level a firm must hold even during slack seasons; it should ideally be financed by **long-term sources** because it is illiquid. **Temporary (Variable) WC** swells during peak demand (festive seasons, harvest cycles) and should be met with **short-term, self-liquidating borrowings** like bank credit, commercial paper, or factoring.

#### Concept Comparison Matrix: Three Approaches

| Feature | Matching (Hedging) | Conservative | Aggressive |
|---|---|---|---|
| Permanent WC funded by | Long-term | Long-term | Short-term |
| Temporary WC funded by | Short-term | Long-term + Short-term | Short-term |
| Risk level | Moderate | Low | High |
| Return level | Moderate | Low | High |
| Liquidity buffer | Adequate | High | Low |
| Typical user | Manufacturing firms with stable cycles | Public utilities, large banks | High-growth firms chasing leverage |

#### Formula Reference Table

| Formula | Variables (SI Units) | Dimension |
|---|---|---|
| NWC = CA − CL | CA, CL in ₹ | [M] |
| OC = R + W + D − C | Each period in days | [T] |
| CCC = (Avg Inv / COGS)×365 + (Avg AR / Credit Sales)×365 − (Avg AP / COGS)×365 | Days | [T] |
| EOQ = √(2AO / C) | A = annual demand (units), O = order cost (₹/order), C = carrying cost (₹/unit/yr) | dimensionless |
| Cost of Trade Credit = (d / (100 − d)) × (365 / (CP − DP)) × 100 | d = discount %, CP = credit period, DP = discount period (days) | dimensionless |
| WC Leverage = Contribution / NWC | ₹ / ₹ | dimensionless |

#### Key Principles of WC Optimisation
1. Synchronise cash inflows with outflows to narrow the CCC.
2. Negotiate longer payable periods from suppliers without losing discounts.
3. Use **EOQ** to minimise total inventory cost (ordering + carrying).
4. Maintain **safety stock** only at the buffer level (Max usage × Max lead time − Average usage × Average lead time).
5. Substitute trade credit (spontaneous) before negotiating bank borrowings.

#### Determinants of WC Requirement
- **Nature and size** of business (manufacturing needs more than services).
- **Length of production cycle** (longer cycle = higher WC lock-up).
- **Sales growth rate** (fast-growing firms need more WC).
- **Credit policy** (liberal credit → higher receivables).
- **Seasonality** (festive, agricultural, weather-driven demand swings).
- **Price-level changes** (inflation expands WC needs in nominal terms).
- **Operating efficiency** (lean firms recycle cash faster).

#### Sources of Working Capital
- **Spontaneous sources** — Trade credit, accrued wages, outstanding expenses (free, automatic).
- **Negotiated sources** — Bank overdraft, cash credit, bill discounting, commercial paper, factoring, public deposits, inter-corporate loans, retained surpluses, advance payments from customers.

#### 🎯 Exam-Level Worked Problem
**Question:** A firm has annual credit sales of ₹540 crore, average accounts receivable of ₹90 crore, cost of goods sold of ₹360 crore, average inventory of ₹60 crore, and average accounts payable of ₹45 crore. Assuming 360 days in a year, calculate the **Cash Conversion Cycle** and comment on whether the firm should liberalise its credit policy.

#### Solution:
- **Inventory Period** = (Avg Inventory / COGS) × 360 = (60 / 360) × 360 = **60 days**
- **Receivables Period** = (Avg AR / Credit Sales) × 360 = (90 / 540) × 360 = **60 days**
- **Payables Period** = (Avg AP / COGS) × 360 = (45 / 360) × 360 = **45 days**
- **CCC** = 60 + 60 − 45 = **75 days**

The firm holds cash for 75 days. Liberalising credit would **lengthen** the receivables period and raise CCC; the firm should instead tighten credit terms or accelerate collections.

> ⚠️ **Examiner Trap:** Using **total sales** instead of **credit sales** in the receivables period formula gives 60 days instead of 60 only if cash sales are zero — here they exist implicitly. Always check whether the denominator is "credit sales" or "total sales." Also, never subtract the **payable period** from the **operating cycle** definition itself; CCC and OC are distinct — CCC excludes non-cash items like accrued expenses.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Exceptions

| Trap | Why It Misleads | Correct Approach |
|---|---|---|
| Treating accrued expenses as negotiated financing | They look like liabilities but grow automatically with operations | Classify them as **spontaneous** sources of WC |
| Using EOQ with unit price × carrying rate | Carrying cost is per unit per year, not just the variable component | C should be full variable carrying cost (storage + insurance + opportunity) |
| Equating Cash Credit (CC) with Overdraft | Both are short-term bank limits but differ in security and pricing | CC is **stock-based** (against inventory/receivables); OD is **general-purpose** and usually costlier |
| Adding supplier credit to operating cycle | OC is acquisition to realisation; supplier credit shortens cash lock-up | Add payable period only when computing **CCC**, not OC |
| Ignoring profit and depreciation in WC projection | WC projection is cash-based, not accrual-based | WC need = (COGS/360) × OC − profit add-back − non-cash depreciation |
| Confusing Tandon Committee norms | Tandon recommended a 1.33:1 current ratio, not 2:1 | Tandon prescribed minimum 1.33:1; Chore suggested 1.50:1; remember the chronology |
| Assuming Conservative strategy means no short-term debt | Conservative firms still use short-term for the *seasonal* spike | Long-term funds cover permanent WC + a buffer; only the peak is short-term |

#### Mathematical Limits and Edge Cases
- **Zero payable period** (cash-only suppliers) → CCC equals the operating cycle; the firm is fully exposed.
- **Payables period > Inventory + Receivables** → CCC becomes **negative**, meaning suppliers finance operations entirely (common in large retailers: Walmart, Reliance Retail).
- **Lead time = 0** (instant delivery, e.g., digital goods) → Safety stock formula reduces to Max usage × 0 = 0; reorder level collapses to current usage.
- **Carrying cost = 0** (perishables sold same day) → EOQ tends to infinity; order once, sell fast.
- **Working Capital Leverage** approaches infinity as NWC approaches zero; finance managers watch this ratio to avoid insolvency at the margin.

#### Adjacent Topics for Cross-Linking
- **Tandon, Chore, Kannan, Marathe Committees** — RBI-appointed working groups shaping WC assessment norms since 1975.
- **Factoring vs Forfaiting** — Factoring is domestic, short-term, with recourse; forfaiting is export, long-term, without recourse.
- **Miller-Orr and Baumol models** — cash management extensions applied to the WC cash balance.
- **Just-in-Time (JIT) inventory** — Japanese-origin technique that compresses inventory period toward zero.

#### Practice Question 1 (Numerical)
A retailer orders at EOQ of 800 units. Annual demand is 64,000 units and carrying cost is ₹20/unit/year. If ordering cost drops by 25% (delivery consolidation), what is the new EOQ? (Hint: recalculate using EOQ = √(2AO/C) and verify total cost reduction.)

#### Practice Question 2 (Conceptual)
Discuss how the **Kannan Committee (2017)** recommendations on MSME receivables financing align with the **Tandon Committee's** original principle of avoiding financing of non-operating current assets. Cite one operational change RBI has mandated since 2021.

---

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "Working Capital (WC)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Finance notes](/notes/rbi-grad-b/finance/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
