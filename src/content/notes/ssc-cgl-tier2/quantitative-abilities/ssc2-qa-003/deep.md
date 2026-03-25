---
exam: ssc-cgl-tier2
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-003
topicName: "Percentage & Simple/Compound Interest — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A compound interest growth curve (exponential curve) overlaid with a simple interest straight line from the same starting point, showing the widening gap between years 1 through 5."
country: India
generated: ai-v1
---



## Percentage & Simple/Compound Interest — Deep Dive

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
