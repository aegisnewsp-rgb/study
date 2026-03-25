---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-007
topicName: "Ratio & Proportion — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A detailed diagram showing the cross-multiplication process in a proportion with visual arrows, plus a mixture composition bar for word problems"
country: India
generated: ai-v1
---



## Ratio & Proportion — Deep Dive

### Concept Deep Dive
Most students brush past ratio and proportion thinking it's just simple fractions, but this topic is deceptively powerful. Every time you compare quantities — speeds, prices, concentrations, shares, wages — you're working with ratios. GATE loves embedding ratio concepts inside larger problems where you're not even told "this is a ratio question." Spotting ratios hiding inside word problems is half the battle.

The cross-multiplication rule (ad = bc) isn't just a mechanical trick — it's algebraic truth. When you have a/b = c/d, you're saying two fractions are equal. Multiply both sides by bd and you get ad = bc. That's it. The reason this works every time is because you're applying the same operation to both sides of an equation. Once you internalize this, you'll never forget which terms to multiply.

The mean proportional is a concept that sneaks into GATE regularly. If a and b are in continued proportion, then a:b = b:c, which means b is the mean proportional between a and c. That gives us b² = ac. This shows up in geometry (similar triangles) and in work problems where rates form continued proportions. The third proportional follows the same logic: a:b = b:c, then c is the third proportional to a and b.

In mixture and alligation problems, ratio and proportion become the workhorse. When you mix two ingredients at different prices, the ratio of quantities is inversely proportional to the difference between each price and the mean price. This is the alligation rule: (Cheaper quantity)/(Dearer quantity) = (Mean price - Dearer price)/(Mean price - Cheaper quantity). It looks intimidating but it's just a proportion dressed up in words.

### Advanced Formula Derivation
**Duplicate Ratio Derivation:**
If the ratio a:b is duplicated, we get a²:b².
Proof: Duplicate ratio means the ratio of squares of the original terms. For a:b, duplicate = a²:b².
This is useful when comparing areas or volumes where the ratio scales by a power factor.

**Alligation Rule Derivation:**
When mixing two ingredients priced at p₁ and p₂ (p₁ < p₂) to get a mean price m:
Let quantities be q₁ and q₂.
Total cost = p₁q₁ + p₂q₂ = m(q₁ + q₂)
p₁q₁ + p₂q₂ = mq₁ + mq₂
p₂q₂ - mq₂ = mq₁ - p₁q₁
q₂(p₂ - m) = q₁(m - p₁)
q₁/q₂ = (p₂ - m)/(m - p₁)
This is the alligation formula — the ratio of quantities is inversely related to their distance from the mean price.

### GATE-Level Numerical Problems
**Q1 (GATE 2020):** A sum of ₹3,600 is to be divided among three persons A, B, and C in the ratio 2:3:5. B's share is increased by 10% and C's share is decreased by 10%. What is B's new share?
- Working: Original shares — A = 2x, B = 3x, C = 5x where 10x = 3600, so x = 360. B's original = 1080. New B = 1080 × 1.10 = 1188.
- Answer: **₹1,188**
- Common error: Applying the percentage change to A or C instead of B, or forgetting that increasing one share requires decreasing another proportionally.

**Q2 (GATE 2018):** Two alloys A and B contain copper and zinc in the ratios 3:4 and 5:6 respectively. If 14 kg of alloy A is mixed with 22 kg of alloy B, what is the ratio of copper to zinc in the resulting mixture?
- Working: Alloy A: Cu = 14 × 3/7 = 6 kg, Zn = 14 × 4/7 = 8 kg. Alloy B: Cu = 22 × 5/11 = 10 kg, Zn = 22 × 6/11 = 12 kg. Total Cu = 16 kg, Total Zn = 20 kg. Ratio Cu:Zn = 16:20 = 4:5.
- Answer: **4:5**
- Common error: Adding the ratios directly (3:4 + 5:6 ≠ 8:10) instead of computing actual quantities.

**Q3:** A container has wine and water in the ratio 7:5. If 12 liters of the mixture are drawn off and replaced by 12 liters of water, the ratio becomes 7:9. Find the total volume of the container.
- Working: Let total = V liters. Wine initially = 7V/12, Water = 5V/12. When 12L drawn: Wine removed = 12 × 7/12 = 7L. Remaining wine = 7V/12 - 7. Remaining water = 5V/12 - 5 + 12 (added water). New ratio = (7V/12 - 7) / (5V/12 + 7) = 7/9. Cross-multiply: 9(7V/12 - 7) = 7(5V/12 + 7). Simplify: (63V/12 - 63) = (35V/12 + 49). 63V/12 - 35V/12 = 49 + 63 = 112. 28V/12 = 112, V = 48.
- Answer: **48 liters**

### Multiple Approaches
**Method A: Algebraic substitution**
Let the total be T. Set up wine = 7T/12, water = 5T/12. Draw off 12L and replace. Use the mixture removal formula (amount removed = fraction × total drawn). Solve the resulting equation.

**Method B: Fractional approach**
Work entirely in fractions. The fraction of wine after replacement = (original wine fraction) × (fraction remaining after removal). This avoids setting up total T explicitly.

**When to use:** Method A is safer for complex problems with multiple replacements. Method B is faster for single-step replacements where total isn't needed.

### Tricky Cases
- **Continued proportion traps:** When asked for "mean proportional between a and b," remember it's √(ab), not (a+b)/2. Many students confuse arithmetic mean with geometric mean in proportion context.
- **Inverse ratio confusion:** If A:B = 3:4, then B:A (inverse ratio) = 4:3. Always flip when asked for the reverse comparison.
- **Percentage change in ratio:** When a ratio's terms change by percentages, you cannot simply add/subtract percentages. A 20% increase in a and 20% decrease in b changes the ratio from a:b to 1.2a:0.8b = 3a:2b of original — the ratio doesn't just shift by 40%.
