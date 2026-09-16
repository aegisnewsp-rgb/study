---
exam: cma
examName: CMA Foundation
subject: accounting
subjectName: "Accounting"
topic: accoun-005
topicName: Depreciation
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Depreciation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Depreciation allocates the **depreciable amount** of a tangible fixed asset over its **useful life** as a non-cash charge to the Profit and Loss Account. The depreciable amount equals **Original Cost minus Residual Value**, spread per AS 10 (Property, Plant and Equipment) at the CMA Foundation level.

| Term | Meaning |
|---|---|
| Original Cost | Purchase price − trade discount + freight inward + installation + trial run |
| Residual Value | Estimated scrap at the end of useful life (₹) |
| Useful Life | Period over which the asset is expected to be used (years) |
| WDV / NBV | Original Cost − Accumulated Depreciation to date |
| SLM | Equal annual charge over useful life |
| WDV Method | Reducing-balance charge, higher in early years |

> 💡 **High-Yield Memory Hook:** **"OC − RV ÷ Life = SLM"** (straight-line, equal bites) and **"Rate = 1 − ⁿ√(RV/OC)"** for the WDV conversion. Remember: **Land is NOT depreciated** — only buildings on it are.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Concept
Depreciation is **cost allocation, not valuation**. Each year, a portion of the asset's cost is matched against the revenue it helps generate, following the matching concept. The book value at any date is purely an accounting figure and bears no direct relation to market value.

#### Formulae with SI / Monetary Units

| Formula | Variables | Unit |
|---|---|---|
| SLM Annual Depreciation = (Original Cost − Residual Value) ÷ Useful Life | OC, RV in ₹; Life in years | ₹ per year |
| WDV Rate (%) = [1 − ⁿ√(RV/OC)] × 100 | RV, OC in ₹; n in years | % per year |
| Annual Depreciation (WDV) = Opening WDV × Rate | WDV in ₹; Rate in % | ₹ per year |
| Pro-rata Charge = Annual Depreciation × (Months used ÷ 12) | Months as integer count | ₹ |
| Asset Cost = Purchase Price − Trade Discount + Import Duty + Freight Inward + Installation + Trial Run | each component in ₹ | ₹ |

#### Method Comparison Matrix

| Parameter | Straight Line Method | Written Down Value Method |
|---|---|---|
| Annual charge | Equal each year | Higher initially, falls later |
| Total depreciation over life | OC − RV | OC − RV (same total, never reaches zero book value if RV > 0) |
| Book value at year-end | Reduces by a constant amount | Reduces by a reducing amount |
| Suitable for | Buildings, leaseholds, furniture | Plant, machinery, vehicles, IT hardware |
| Treatment of residual value | Explicitly deducted | Embedded in the rate formula |

> 📌 **Formula Check:** A 20% WDV rate is **NOT** the same as a 20% SLM rate. The equivalent SLM rate for 20% WDV on a 5-year life, zero residual asset is 1 − (1 − 0.20)⁵ ≈ 0.672, i.e., ~33.6% of original cost per year.

#### 🎯 Exam-Level Worked Problem
**Question:** On 1 April 2023, a machine was purchased for ₹2,00,000. Freight and installation added ₹20,000. Estimated residual value is ₹20,000 and useful life is 4 years. The firm follows the Straight Line Method, with books closing on 31 March each year. Compute depreciation for each of the four years and the WDV on 31 March 2027.

#### Solution:
1. Asset Cost = ₹2,00,000 + ₹20,000 = ₹2,20,000.
2. Depreciable Amount = OC − RV = ₹2,20,000 − ₹20,000 = ₹2,00,000.
3. Annual Depreciation = ₹2,00,000 ÷ 4 = ₹50,000 per year.
4. Years 1–4 depreciation: ₹50,000 each.
5. Accumulated Depreciation on 31 March 2027 = ₹2,00,000.
6. WDV on 31 March 2027 = ₹2,20,000 − ₹2,00,000 = ₹20,000 (equal to residual value).

> ⚠️ **Examiner Trap:** Students often ignore freight and installation while computing cost, leading to a ₹20,000 understatement of depreciation over four years. Capitalise **all** costs needed to bring the asset to working condition — but **exclude** trade discount (deduct it first) and ordinary repairs (expense to P&L).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

1. **Pro-rata in the year of purchase and sale.** If the above machine had been bought on 1 September 2023, the first-year depreciation would be ₹50,000 × 7/12 = ₹29,167, and a similar adjustment applies in the year of disposal up to the date of sale.
2. **Fully depreciated asset still in use.** The asset remains in the books at residual value with no further charge. Disclose in notes; do not silently write it off.
3. **Change of method (SLM ↔ WDV).** Treated as a change in accounting policy. The WDV on the date of change becomes the new "OC" for SLM and is depreciated over the remaining useful life, with disclosure in the financial statements.
4. **Component depreciation.** Significant parts of an asset with different useful lives (e.g., aircraft hull vs engine) are depreciated separately under AS 10.
5. **Sale of asset.** Profit or loss = Sale proceeds − WDV on date of sale. Use WDV, **never original cost**.

#### Comparison with Adjacent Topics

| Item | Depreciation | Amortisation | Impairment |
|---|---|---|---|
| Applies to | Tangible fixed assets | Intangible assets (patents, goodwill, trademarks) | All assets when carrying amount > recoverable amount |
| Standard | AS 10 | AS 26 | AS 28 |
| Method | SLM / WDV / Units-of-production | Usually SLM over useful life | Recoverable amount test |
| Trigger | Passage of time / use | Passage of time / legal right | Indicator of decline in value |

#### Advanced Practice Prompts
1. A vehicle bought on 1 October 2023 for ₹6,00,000 (residual value ₹1,00,000, life 5 years, SLM) is sold on 1 July 2026 for ₹3,50,000. Compute depreciation for each financial year and the gain or loss on sale.
2. Under the WDV method at 20% p.a., a machine with original cost ₹5,00,000 and residual value ₹48,000 is being depreciated. Determine the equivalent WDV rate to the nearest 0.01% that depreciates the asset to its residual value over 5 years.

> ⚠️ **Examiner Trap:** For prompt 2, the textbook shortcut "use 20% given in the question" is wrong — you must compute the rate that actually drives the book value down to ₹48,000 in year 5. Plugging 20% yields a year-5 WDV of ₹5,00,000 × 0.8⁵ ≈ ₹1,63,840, far above the residual value.

#### Exam Strategy for CMA Foundation
Depreciation questions on Paper 2 usually carry 5–8 marks under the Fundamentals of Financial & Cost Accounting paper. Always show the asset cost build-up, state the method, compute pro-rata months explicitly, and prepare the Asset Account and Provision for Depreciation Account in proper ledger format to score full marks.

---

## Continue your study

- **[View this topic in your CMA Foundation roadmap](/roadmap/?exam=cma&duration=1mo)** — see where "Depreciation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cma&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CMA Foundation exam overview](/exams/cma/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/cma/accounting/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
