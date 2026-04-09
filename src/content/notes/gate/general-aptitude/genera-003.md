---
exam: gate
examName: "GATE"
subject: quant
subjectName: "General Aptitude"
topic: genera-003
topicName: "Topic 3"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Ratio, Proportion and Mixtures

Ratios and proportions appear in GATE's General Aptitude as standalone questions or as embedded concepts within data interpretation and quantitative comparison problems. The alligation method for mixtures is a high-yield technique that solves problems in seconds.

---

### 🟢 Lite — Quick Review (1h–1d)

> **Core formulas:**
> - **Ratio a:b** means a/b. To compare ratios, cross-multiply: a/b vs c/d → compare a×d vs b×c.
> - **Direct proportion:** As A increases, B increases (a/b = c/d).
> - **Inverse proportion:** As A increases, B decreases (a × b = constant).
> - **Alligation (mixture):** Mean price = (Cₐ × Qₐ + C_b × Q_b) / (Qₐ + Q_b)
> - **Alligation shortcut:** Ratio of quantities = |D − M| : |M − C| where D = dearer price, C = cheaper price, M = mean price.

**⚡ GATE exam tip:** When two solutions of concentrations c₁% and c₂% are mixed, the concentration of the mixture always lies BETWEEN c₁ and c₂. Use this to eliminate impossible answer choices in multiple choice questions.

**⚡ Quick trick:** If A:B = 2:3 and B:C = 4:5, then A:B:C = 8:12:15 (make B equal: LCM of 3 and 4 = 12).

**⚡ Common trap:** In ratio problems, make sure you're comparing the SAME thing. "The ratio of boys to girls is 3:2" and "the ratio of students to teachers is 10:1" involve different units — don't combine them naively.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Ratio and Proportion Basics

**Ratio a:b** represents the relationship where a = k×a' and b = k×b' for some constant k.

**Key properties:**
- a:b = na:nb (multiply both terms by same non-zero number)
- a:b = a/n : b/n (divide both terms by same non-zero number)
- a:b :: c:d means a/b = c/d (proportion)

**Compound ratio (a:b) × (c:d) = (a×c) : (b×d)**

**Continued proportion:** a, b, c are in continued proportion if a/b = b/c → b² = ac. Then a:b = b:c.

#### Direct and Inverse Proportion

**Direct:** x ∝ y → x/y = k (constant). If x₁/y₁ = x₂/y₂.

**Inverse:** x ∝ 1/y → xy = k (constant). If x₁y₁ = x₂y₂.

**GATE Example:** If 12 workers can complete a job in 18 days, how many days will 6 workers take?
> This is inverse proportion (more workers = fewer days). 12 × 18 = 6 × x → x = **36 days**.

#### Alligation Method (Mixture Rule)

When mixing two ingredients at different prices:

**Alligation formula:**
```
Cheaper price (C) -------- Mean price (M) -------- Dearer price (D)
Ratio of quantities = (D − M) : (M − C)
```

**Important:** This formula only works when mixing exactly TWO components.

**GATE Example (2020, 1 mark):** In what ratio must a shopkeeper mix rice costing ₹30/kg with rice costing ₹45/kg to get a mixture costing ₹36/kg?
> Solution: C = 30, D = 45, M = 36.
> Ratio = (45 − 36) : (36 − 30) = 9 : 6 = **3 : 2**.

#### Mixture Problems with Replacement

When a container has an initial quantity Q of liquid. If you remove x liters and add x liters of water (replacing the removed liquid), after n such operations:

**Remaining liquid** = Q × (1 − x/Q)^n

**GATE Example:** A container has 60 liters of milk. 10 liters are removed and replaced by water. This is done 3 times. How much milk remains?
> Solution: After 1st: 60 × (50/60) = 50L. After 2nd: 50 × (50/60) = 41.67L. After 3rd: 41.67 × (50/60) = **34.72L** (approx).

#### Proportional Division

If a quantity needs to be divided in ratio a:b:c:
- First part = Total × a/(a+b+c)
- Second part = Total × b/(a+b+c)
- Third part = Total × c/(a+b+c)

#### Age Ratio Problems

Age ratio problems are popular in GATE. Key: **difference of ages remains constant**.

If ages are in ratio a:b now, and after T years the ratio becomes c:d:
- Let current ages be ax and bx
- (ax + T)/(bx + T) = c/d → solve for x

**GATE Example:** The ratio of ages of A and B is 3:5. After 8 years, it becomes 5:7. Find their current ages.
> Solution: (3x+8)/(5x+8) = 5/7 → 7(3x+8) = 5(5x+8) → 21x+56 = 25x+40 → 4x = 16 → x = 4. Ages: **12 and 20**.

---

### 🔴 Extended — Deep Study (3mo+)

#### Weighted Average (More Than Two Groups)

When mixing more than two groups:
**Mean = (Σ wᵢ × xᵢ) / Σ wᵢ**

Where wᵢ = weight/quantity of group i, xᵢ = value/concentration of group i.

**GATE Advanced Example:** Three qualities of wheat costing ₹20, ₹28, and ₹35 per kg are mixed in the ratio 2:3:5. Find the price of the mixture per kg.
> Solution: (2×20 + 3×28 + 5×35) / (2+3+5) = (40 + 84 + 175) / 10 = 299/10 = **₹29.90/kg**.

#### Alligation with Three or More Components

For three components, pair up strategically or use weighted average directly:
1. Find the overall mean
2. Check if it lies between the extreme values
3. For three concentrations c₁, c₂, c₃ and quantities q₁, q₂, q₃, the overall concentration = weighted average

#### Equation of Proportion

If a/b = c/d = e/f = k, then:
- a + c + e = k(b + d + f)
- (a − c)/(b − d) = k (provided denominators non-zero)

This is useful in GATE problems involving proportional division with unknowns.

#### Work and Time via Proportion

If A can do a work in x days, and B can do it in y days, working together they complete 1/x + 1/y of work per day → time = xy/(x+y) days.

This is mathematically equivalent to parallel resistance in circuits — an interesting cross-subject connection for GATE.

#### Compound Proportions

If A:B = p:q and B:C = r:s, then A:C = (p×r) : (q×s). But **for combining ratios, you need B to be the same first**.

**GATE Example:** If P:Q = 2:3, Q:R = 4:5, and R:S = 6:7, find P:S.
> P:Q = 2:3 = 8:12 (to make Q=12); Q:R = 4:5 = 12:15 (to make Q=12); R:S = 6:7 = 15:17.5 (wait, need R same): R=15 from Q:R and R=15 from R:S → R=15, S=17.5.
> Actually: P:Q = 2:3 = 8:12; Q:R = 4:5 = 12:15; R:S = 6:7 = 15:17.5 = 30:35. So P:Q:R:S = 8:12:15:35. **P:S = 8:35**.

#### Percentage from Ratio

Converting ratio to percentage: a:b means a/(a+b) × 100% and b/(a+b) × 100%.

**GATE Example:** In a class, the ratio of boys to girls is 7:5. What percentage of the class are girls?
> Total parts = 12. Girls = 5/12 × 100 = **41.67%**.

#### Pipes and Cisterns (Rate-based Proportion)

This topic bridges ratios and time-work:
- Pipe A fills in x hours → rate = 1/x per hour
- Pipe B fills in y hours → rate = 1/y per hour
- Together: 1/x + 1/y per hour → time = xy/(x+y)

If a leak exists (emptying at z hours): net rate = 1/x + 1/y − 1/z.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
