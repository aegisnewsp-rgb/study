---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-012
topicName: "Ages"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A detailed age flow diagram showing how multiple family members' ages relate over time, with past-present-future timelines, age gaps marked as constants, and ratios shown as variables that change"
country: India
generated: ai-v1
---

# Ages

### 🟢 Lite

### Key Formula/Rule
If a person's age is multiplied by (or divided by) a factor after a certain period, account for the same passage of time on all people involved. Ages = Present ages, x = years added/subtracted.

### Quick Memory Trick
**"Everyone ages together"** — when time passes, EVERYONE gets older by the same number of years. The age gap between two people never changes.

### 1-Sentence Summary
Age problems are just algebra in disguise: translate the words into equations, and remember that age differences stay constant while age ratios change over time.

### Quick Example
Q: A father is 4 times his son's age. After 20 years, he will be twice as old. Find their present ages.
A: Son = x, Father = 4x. After 20 years: 4x + 20 = 2(x + 20) → 4x + 20 = 2x + 40 → 2x = 20 → x = 10. Son = **10 years**, Father = **40 years**.

### Must Remember
- Age gap is CONSTANT — never changes
- Age ratio CHANGES — dilutes over time as both grow
- "n years ago" means subtract from present age, and from ALL present ages
- "After n years" means add to present age, and to ALL present ages
- Sum of ages at any point = present sum ± n × (number of people) depending on whether we're adding or subtracting years

### 🟡 Standard

### Concept Explanation

Age problems are a staple of quantitative aptitude because they test your ability to translate real situations into mathematical equations. The good news: the underlying math is straightforward algebra. The tricky part is reading the wording carefully, because these problems love to play with time — "5 years ago," "after 10 years," "twice as old as," and so on.

The single most important principle in age problems is that **everyone ages at the same rate**. Time passes for everyone equally. This means if you're solving a problem involving two or more people, the number of years you add or subtract applies to ALL of them. A common mistake is to apply the time shift to only one person, which breaks the relationship.

Another key concept: **age difference never changes**. If Rina is 3 years older than Sameer today, she will be 3 years older than Sameer in 10 years, and she was 3 years older than Sameer 20 years ago. The gap is constant because both people get older by the same amount each year. This principle is incredibly useful — if you ever know the age gap and one person's current age, you immediately know the other's current age too.

**Age ratios** work differently. If a mother is 40 and her daughter is 10, the ratio is 4:1. After 20 years, they'll be 60 and 30 — the ratio is now 2:1. The ratio shrinks over time because both numbers are growing, but the gap (30 years) stays fixed. This is why problems that give you future or past ratios usually involve more algebra — you have to solve for the present ages first.

### Key Formulas

| Symbol | Meaning |
|--------|---------|
| P | Present age of person 1 |
| Q | Present age of person 2 |
| x | Years in the future (positive) or past (negative) |
| G | Constant age gap between two people |

### Step-by-Step Example

**Q:** The sum of the ages of a father and his son is 60 years. Five years ago, the father's age was four times the son's age. Find their present ages.

**Step 1:** Define variables.
Let son's present age = S, father's present age = F.
Given: F + S = 60

**Step 2:** Translate "5 years ago" condition.
Five years ago: father's age = F – 5, son's age = S – 5.
Given: F – 5 = 4(S – 5)

**Step 3:** Solve the system of equations.
From equation 1: F = 60 – S
Substitute: (60 – S) – 5 = 4(S – 5)
55 – S = 4S – 20
55 + 20 = 4S + S
75 = 5S → S = 15

**Step 4:** Find father's age.
F = 60 – 15 = 45

**Answer:** Son is 15 years old, father is 45 years old.

### Common Mistakes

- Applying time change to only one person → Always apply "n years ago" or "after n years" to EVERY person's present age in the equation.
- Forgetting that ages must be positive → If you get a negative age, something went wrong with the time direction (likely the "n years ago" subtraction was applied wrong).
- Confusing average age with individual ages → "Sum of ages" problems require knowing how many people are involved.

### Quick Test (2 Qs)

1. Q: A mother is 3 times as old as her son. After 12 years, she will be twice as old. Find the son's present age. Options: A) 6 B) 10 C) 12 D) 15. Ans: **C** (Reason: Let son's age = x, mother's = 3x. After 12 years: 3x + 12 = 2(x + 12) → 3x + 12 = 2x + 24 → x = 12)

2. Q: The age difference between two brothers is 8 years. Five years ago, the elder brother's age was three times the younger's. Find the elder brother's age. Options: A) 15 B) 17 C) 20 D) 22. Ans: **B** (Reason: Let younger = y, elder = y + 8. Five years ago: y + 8 – 5 = 3(y – 5) → y + 3 = 3y – 15 → 18 = 2y → y = 9, elder = 17)

### 🔴 Extended

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

*Content adapted based on your selected roadmap duration.*
