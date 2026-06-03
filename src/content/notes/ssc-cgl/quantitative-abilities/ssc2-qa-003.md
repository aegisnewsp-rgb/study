---
exam: ssc-cgl-tier2
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-003
topicName: "Percentage & Simple/Compound Interest"
tier: unified
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A compound interest growth curve (exponential curve) overlaid with a simple interest straight line from the same starting point, showing the widening gap between years 1 through 5."
country: India
generated: ai-v1
---

# Percentage & Simple/Compound Interest

### 🟢 Lite

### Key Rule / Formula
**SI = (P × R × T) ÷ 100.** **CI = P(1 + R/100)^T − P.** **Percentage change = ((New − Old) ÷ Old) × 100.** For fractional years, convert time to years (e.g., 9 months = 9/12 = 3/4 year).

### Memory Trick
**SI = straight line growth** — same interest each year, always on original principal. **CI = exponential growth** — interest is charged on the accumulated balance, so it grows faster over time. At R% per year for T years, CI always > SI when T > 1 and R > 0.

### 1-Sentence Summary
SSC uses percentage as a multiplier in comparison and ratio problems, and SI/CI as pure formula-recall word problems — identify P, R, and T first, then plug into the right formula.

### Quick Example
**Q:** What is 25% of 480 plus 20% of 350?
A: 25% of 480 = 120. 20% of 350 = 70. Sum = **190**

**Q:** SI on ₹5,000 at 6% per annum for 3 years?
A: SI = (5000 × 6 × 3) ÷ 100 = **₹900**

**Q:** CI on ₹5,000 at 10% per annum for 2 years?
A: Year 1: 500. Balance = 5500. Year 2: 550. Total CI = **₹1,050**
Or formula: A = 5000 × (1.10)² = 5000 × 1.21 = ₹6,050 → CI = 6050 − 5000 = **₹1,050**

### Must Remember
- **SI and CI for 2 years at the same rate:** CI − SI = P × (R/100)² (this is the "compound interest effect" for 2 years)
- **Rate conversion:** for half-yearly compounding, rate per period = R/2, periods = 2T
- **Net percentage change with successive % changes:** multiply (1 ± r₁/100) × (1 ± r₂/100) − 1 × 100
- **Percentage always requires a base:** "25% increase on ₹80" → ₹80 × 1.25 = ₹100. The base is always the original value.

### Exam Tips for SSC CGL Tier 2
- When SI and CI are asked together, calculate SI first to have a reference point.
- For **population growth/depreciation**, treat it like CI: Final = Initial × (1 ± r/100)^n.
- **A trick for CI vs SI comparisons:** When the rate equals the number of years, CI = SI + SI × (R/100)^(T−1) × something — but just use the formula.
- Watch for questions where a price increases by X% then decreases by Y% — use the multiplier method.

### Common Pitfalls
- **Using T directly for half-yearly compounding:** 2 years half-yearly = 4 periods at (R/2)% each.
- **Confusing rate and time units:** If rate is per annum but time is in months, convert: 18 months = 1.5 years.
- **Forgetting to subtract principal** from the CI amount to get the interest component.
- **Adding percentage changes directly:** A 10% increase then 5% decrease = ×1.10 × 0.95 = ×1.045 = 4.5% net increase, NOT 5%.

### 🟡 Standard

### Concept
Percentage is a ratio expressed as a fraction of 100 — the most practical concept in SSC Quant because it's used everywhere (profit, discount, data interpretation, statistics). The key skill is converting between fractions and percentages: 1/3 = 33.33%, 1/7 ≈ 14.28%, 1/8 = 12.5%, 1/11 ≈ 9.09%, 1/13 ≈ 7.69%. Knowing these common conversions saves time.

Simple Interest (SI) is calculated only on the original principal. Compound Interest (CI) is calculated on the accumulated amount each period. For the same principal, rate, and time: CI > SI (except in Year 1 where they're equal). The difference between CI and SI compounds grows exponentially with time.

In Tier 2, expect questions where percentage is used to find original price after discount, population growth/depreciation, or comparing two quantities.

### Key Points
- To increase a value by x%: multiply by (100+x)/100. To decrease: multiply by (100−x)/100.
- Two successive percentage changes (x% then y%): Net change = x + y + xy/100 (add if both increases, use sign for decreases).
- CI formula for half-yearly compounding: rate halved, time doubled. For quarterly: rate/4, time × 4.
- SI and CI are equal in year 1. After that, CI grows faster at positive rates.
- Population problems: if rate is r% per year, population after n years = P × (1 + r/100)^n.

### Worked Example
**Q:** A shopkeeper offers two successive discounts of 20% and 10% on an article priced at ₹2,500. Find the selling price.
**Approach:** After 20% discount: 2500 × 0.80 = 2000. After 10% discount: 2000 × 0.90 = 1800.
**Answer:** ₹1,800

### SSC Pattern / Tips
- Successive discounts are multiplicative — never add them directly. A 20% + 10% discount is NOT a 30% discount.
- For CI with different compounding periods, adjust both rate and time proportionally.
- Percentage questions often require finding the base — if A is x% more than B, then B = A / (1 + x/100).
- Learn the fraction-to-percentage table for common fractions — this is a major speed booster.

### 🔴 Extended

### Full Concept
**Percentage Deep Dive:** The most powerful percentage concept for Tier 2 is the **base identification trick**. Many questions give a percentage of a percentage, and students mistakenly add them. Example: "The population increased by 20% in the first year and 30% in the second year" — net increase is NOT 50%, it is: 1.2 × 1.3 = 1.56 → 56% increase. The cross-term (20 × 30 / 100 = 6%) is the critical component students miss.

**Reverse Percentage** is a Tier 2 staple: if the price after a 20% discount is ₹800, what was the original price? Answer: 800 / 0.80 = ₹1,000. The mistake most make is taking 20% of 800 and adding it back (which gives 960, wrong).

**Compound Interest Deep Dive:** CI is calculated on the amount, not the principal, after each period. For annual compounding: Amount = P(1 + R/100)^T. The difference between CI and SI for T years is P[(1+R/100)^T − 1 − T×R/100].

**Half-yearly and Quarterly Compounding:** When rate is R% per annum compounded half-yearly, effective rate per half-year = R/2%, number of periods = 2T. For quarterly: R/4%, periods = 4T. Always convert rate AND time together — never one without the other.

**Depreciation:** Population decrease or machine value depreciation follows the same CI formula with a negative rate. If value depreciates at 10% per year, after 3 years value = P × (0.9)^3.

**Ninth trick for SI:** On a sum at simple interest, if the interest rate per annum equals the number of years, the interest equals the principal. This means SI = P when R = T.

### SSC CGL Deep Analysis
- **Frequency:** 2–3 questions per paper. Percentage appears in nearly every DI question too. CI/SI standalone questions appear 1–2 times.
- **Difficulty:** Easy to medium. Percentage word problems with "more/less than" phrasing trip many students.
- **Recent trend:** CI/SI combined with populations, depreciation, or investment comparison. Also, percentage change in area/volume (20% increase in side → 72.8% increase in area — 1.2² = 1.44, so 44% increase).
- **Newer patterns:** Questions asking "at what rate will SI equal CI at the end of 2 years?" — setting SI = P×R×2/100 and CI = P[(1+R/100)²−1] and solving.
- **Total weight in Tier 2:** Roughly 3–4% of the quant paper.

### High-Scoring Strategy
1. Memorise the net percentage change formula for successive changes — x + y + xy/100.
2. For CI/SI comparisons over multiple years, use the formula CI − SI = P(R/100)² for 2 years, P(R/100)²(3+R/100) for 3 years.
3. Convert compound rate to simple rate equivalent: if rate is R% compounded half-yearly for T years, effective annual rate = (1 + R/200)^2 − 1 × 100.
4. For depreciation, remember: value after n years = P(1 − r/100)^n.
5. Always identify the base (original) quantity before applying percentage changes.

### SSC-Level Practice
**Q1:** The population of a town is 20,000. It increases at 10% per annum. In how many years will it become 29,282?
Answer: 4 years — Working: 20000 × (1.1)^n = 29282. (1.1)^n = 29282/20000 = 1.4641. (1.1)^4 = 1.4641. So n = 4 years.

**Q2:** A sum of money becomes 5 times itself in 10 years at SI. Find the rate of interest per annum.
Answer: 40% — Working: SI = P×R×T/100 = P×R×10/100 = P×R/10. Since amount = 5P, SI = 4P. So P×R/10 = 4P → R = 40%.

### Common Traps
- **Trap 1:** Mixing up "x% more than" and "x% of." If A is 25% more than B, then A = 1.25B, not A = B + 0.25. Students often use the wrong base.
- **Trap 2:** Compounding period mismatch — using annual rate with half-yearly periods, or vice versa. Rate and time must both be in the same compounding unit.
- **Trap 3:** Forgetting that CI includes principal in the amount — SI and CI both earn interest on principal in year 1, so SI = CI in year 1 only.

*Content adapted based on your selected roadmap duration.*
