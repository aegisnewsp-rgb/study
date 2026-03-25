---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-004
topicName: "Percentage & Profit-Loss — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "A multi-stage flow diagram showing successive percentage changes — input value → ×1.15 (15% increase) → ×0.90 (10% decrease) → output value, with intermediate and final percentages labeled"
country: India
generated: ai-v1
---



## Percentage & Profit-Loss — Deep Dive

### Full Concept

#### Why Multiplying Factors Works
Here's the "aha!" moment most textbooks skip. When you say "increase by 20%", you're really saying "the new value is 100% + 20% = 120% of the original." As a multiplier, that's 1.20 (or 120 ÷ 100). When you decrease by 10%, you're keeping 90%, so the multiplier is 0.90.

So if something goes up 20% then down 10%, the net multiplier is 1.20 × 0.90 = 1.08 — an **8% net increase**, not 10%. This is the most common mistake in CUET: students subtract the percentages (20% − 10% = 10%) and get it wrong every time. You can only add or subtract percentage changes directly when they're on the **same base**. When the base keeps changing (as it does with successive changes), you must multiply the multipliers.

#### Percentage Change When Base Changes
This is subtle but important. If X increases by 25%, it becomes 1.25X. If you then decrease that result by 25%, you get 1.25X × 0.75 = 0.9375X. That's a **net decrease of 6.25%**, not zero! The 25% decrease was applied to the new, larger base (1.25X), so it took away more than the original 25% increase gave.

This is why the phrase "increased by x%, then decreased by x%" does NOT cancel out. The decrease is always on the larger number.

#### Population Growth and Depreciation
These are just percentage applications in disguise. Population grows at, say, 10% per year — that means each year the population is multiplied by 1.10. Depreciation works the same way but in reverse: a machine worth ₹1,00,000 depreciating at 20% per year is worth 1,00,000 × 0.80 = ₹80,000 after one year. After two years: 80,000 × 0.80 = ₹64,000. You can chain these just like successive percentage changes.

#### Price Halving and Doubling
If a price first increases by 25% and then decreases by 20%, what's the net change? 
Multiplier = 1.25 × 0.80 = 1.00. **Net change = 0%** — the price returns to its original value. 
If it increased 100% (doubled), you need a 50% decrease to get back to original (1.00 ÷ 2.00 = 0.50). Notice it's **not** 100% decrease — that would make it zero! These "undo" problems are common in CUET.

### Multiple Approaches

**Standard Method:**
Successive increase of r₁% then r₂%: Final = Original × (1 + r₁/100) × (1 + r₂/100)

**Shortcut — Net Change Formula:**
For two successive changes: Net% ≈ r₁ + r₂ + (r₁ × r₂)/100
- Positive for both: add the cross term (+)
- Negative for both: add the cross term (+)
- One positive, one negative: subtract the cross term (−)
Example: +20%, −10% → Net ≈ 20 − 10 + (20 × −10)/100 = 10 − 2 = 8% increase ✓

### CUET-Level Problems

**Q1:** The population of a town is 2,00,000. It increases at 5% per annum. What will it be after 3 years?
**Working:** 
Year 1: 2,00,000 × 1.05 = 2,10,000
Year 2: 2,10,000 × 1.05 = 2,20,500
Year 3: 2,20,500 × 1.05 = 2,31,525
**Answer:** 2,31,525

**Q2:** A trader mixes two qualities of rice costing ₹40/kg and ₹60/kg in the ratio 3:2. He sells the mixture at ₹55/kg. Find his gain%.
**Working:** 
Cost of 5 kg mixture = (3×40) + (2×60) = 120 + 120 = ₹240
Cost per kg = 240 ÷ 5 = ₹48
Selling price per kg = ₹55
Gain% = ((55 − 48) ÷ 48) × 100 = (7 ÷ 48) × 100 ≈ **14.58%**
**Answer:** 14.58%

### Tricky Cases
- **"x% of y equals y% of x"** — These are always equal! Because x% of y = (x/100)×y and y% of x = (y/100)×x, both equal xy/100. Don't be fooled by answer choices that make one seem bigger.
- **Percentage vs Percentage Point:** If something goes from 20% to 25%, that's a 5 percentage point increase, but a (5/20)×100 = 25% increase in percentage terms. CUET often tests the difference.
- **100% increase = 2× original, not 1× original.** A 100% increase means you add another whole copy, so 100 + 100 = 200% of the original.
