---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-012
topicName: Ages — Deep Dive
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A detailed age flow diagram showing how multiple family members' ages relate over time, with past-present-future timelines, age gaps marked as constants, and ratios shown as variables that change"
country: India
generated: ai-v1
---



## Ages — Deep Dive

### Concept Deep Dive

Age problems are deceptively simple — the math is basic algebra, but the wording and structure can make them surprisingly tricky. Let's build a robust framework for tackling any age problem, including the ones with multiple people, multiple time shifts, and "never will be" conditions.

**The Invariance Principle:**

The most powerful concept in age problems is **invariance under time**. The things that never change as time passes:
- Age difference between any two people (always constant)
- Age gap = (age₁ – age₂) at any point = (present₁ – present₂)

The things that DO change:
- Individual ages (always increase)
- Age ratios (always approach 1:1 over infinite time)
- Sum of all ages

Understanding what's invariant versus what changes is your first step in setting up any age problem correctly.

**Multi-Person Problems:**

When you have three or more people, the equations get more interesting. You might get three equations from three people, or you might have one equation plus two relationships (like "A is twice B" and "B is 3 years younger than C"). The strategy is the same: assign variables to as many unknowns as needed, write down every relationship as an equation, and solve.

A useful pattern: when you see "sum of ages now" and a relationship like "A : B : C = p : q : r", you can set A = pk, B = qk, C = rk for some common factor k, then use the sum to find k.

**Past vs. Future Asymmetry:**

There's a subtle asymmetry in how past and future conditions behave. "n years ago" means you subtract n from everyone, including the people whose ages you're trying to find. "After n years" means you add n to everyone. But here's the kicker: if the problem says "5 years ago, the father was 4 times the son's age," you write it as:
- (Father's present age – 5) = 4 × (Son's present age – 5)

The subtraction applies to BOTH ages in the same equation. This is obvious when stated this way, but students often write the son's age as just "x" without the "–5" and then wonder why their answer doesn't match.

**"Will be" and "Never be" Problems:**

These are the hardest age problems. "X will be twice as old as Y in 10 years" is a standard forward condition. But "X will never be exactly twice Y's age" requires understanding when the ratio will approach but never reach 2 — typically when the age gap is nonzero and one person is already past the ratio point.

The trick with "never be" problems: set up the equation anyway and show that it has no valid (positive, realistic) solution.

### Advanced Formula Derivation

**General age relationship for two people:**

Let P and Q be present ages (P > Q), with gap G = P – Q.

After n years: (P + n) = k(Q + n) → P + n = kQ + kn → P – kQ = n(k – 1)

If you know k and n, you can solve. If you don't have enough equations, the problem is underdetermined.

The important insight: when k = 1 (ages equal), this implies P = Q, which contradicts the assumption that P > Q. So equal age means the two people are twins — a specific, rare case.

### GATE-Level Numerical Problems

**Q1 (GATE 2020 — style):**
The present ages of a father and his son are in the ratio 5:3. After 10 years, the ratio becomes 3:2. Find their present ages.

- Working: Let father's age = 5x, son's age = 3x. After 10 years: (5x + 10)/(3x + 10) = 3/2. Cross-multiply: 2(5x + 10) = 3(3x + 10) → 10x + 20 = 9x + 30 → x = 10.
- Answer: Father = **50 years**, Son = **30 years**
- Common error: Forgetting that both ages increase when adding years. Always add the years to BOTH numerator and denominator.

**Q2 (GATE 2019 — style):**
The sum of the ages of 4 children born at intervals of 3 years each is 68 years. Find the age of the youngest child.

- Working: Let youngest = y. Ages are: y, y+3, y+6, y+9. Sum = 4y + 18 = 68 → 4y = 50 → y = 12.5 years.
- Answer: **12.5 years**
- Common error: Assuming ages are whole numbers. They don't have to be — work with whatever the math gives you.

**Q3:**
A is twice as old as B was 5 years ago. B is 3 years younger than C. The sum of their present ages is 72. Find B's age.

- Working: Let C = c, B = c – 3. A = 2[(c – 3) – 5] = 2(c – 8) = 2c – 16. Sum: (2c – 16) + (c – 3) + c = 72 → 4c – 19 = 72 → 4c = 91 → c = 22.75. B = 22.75 – 3 = **19.75 years**.
- Answer: **19.75 years**
- Common error: Misreading "B was 5 years ago" as "B will be 5 years from now." The word "was" is always in the past.

### Multiple Approaches

**Method A (Variable setup):** Assign x to the youngest or simplest person. Build all other ages from that. Works well for problems with sums and ratios.

**Method B (Ratio method):** When given a ratio like "5:3", express ages as 5x and 3x directly. This avoids introducing extra variables and is faster when there's a clear ratio.

**Method C (Gap method):** When given only a past or future ratio, use the constant gap. If the ratio changes from 5:3 (gap = 2x) to 3:2 (gap = ?), remember the gap in years = years × (denominator of past ratio – denominator of future ratio) × something. More algebraically: (5x + n)/(3x + n) = 3/2 with gap = 2x = constant.

**When to use:** Method A for sum problems. Method B for clear ratio problems. Method C when you need to verify your setup is correct.

### Tricky Cases

- **"Never be" conditions:** Set up the equality as usual. If solving gives you a negative year count or an impossible age (like 200 years from now), the condition is indeed "never" — but you still need to show the math proves it.
- **Fractional ages:** Ages can be fractional (12.5 years is valid). Don't round unless the problem context demands it.
- **Past condition with "before" wording:** "A was half as old as B was when A was born" is a triple-time condition — solve by setting A's age at birth = 0 and working forward.
