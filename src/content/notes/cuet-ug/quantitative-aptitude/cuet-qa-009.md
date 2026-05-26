---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-009
topicName: "Algebra"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing a parabola with its axis of symmetry, vertex, and x-intercepts labeled. Include annotations for discriminant D > 0, D = 0, and D < 0 cases. Also show an AP as an arithmetic spiral of dots and a GP as an exponential growth curve."
country: India
generated: ai-v1
---

# Algebra

### 🟢 Lite

### Key Formula/Rule
**Linear:** ax + b = 0 → x = –b/a
**Quadratic:** ax² + bx + c = 0 → x = [–b ± √(b²–4ac)] / 2a

### Memory Trick
**"Quadratic Formula Dance"** 💃 — Stand on –b, spread your arms to ±, square the building (b²), subtract 4ac, then split (divide by 2a)! Left arm = +, Right arm = –.

### 1-Sentence Summary
Algebra finds unknowns — one variable at a time in linear equations, two solutions at once in quadratics, and patterns that grow (or shrink) steadily in progressions.

### Linear Equations (ax + b = 0)

**Simple form:** ax + b = 0 → x = –b/a

**Word to equation translation:**
- "A number plus 5 equals 12" → x + 5 = 12 → x = 7
- "3 times a number is 21" → 3x = 21 → x = 7
- "A number divided by 4 is 9" → x/4 = 9 → x = 36
- "The difference between a number and 7 is 3" → x − 7 = 3 → x = 10

**Simultaneous linear equations (2 variables):**
Method 1 — Substitution: Express x or y from one equation, substitute in the other
Method 2 — Elimination: Multiply equations so one variable has same coefficient, then subtract/add
Method 3 — Cross-multiplication (for ax + by = c, dx + ey = f):

```
x/(bf−ce) = y/(cd−af) = 1/(ae−bd)
```

### Quadratic Equations (ax² + bx + c = 0)

**Discriminant:** D = b² − 4ac
- **D > 0:** Two distinct real roots
- **D = 0:** Two equal real roots (repeated)
- **D < 0:** No real roots (complex/imaginary)

**Roots:** x = (–b ± √D) / 2a

**Quick factorisation trick:**
Look for two numbers that multiply to (a×c) and add to b.
For x² + 5x + 6 = 0 → find numbers that multiply to 6 and add to 5 → 2 and 3
→ (x + 2)(x + 3) = 0 → x = –2 or x = –3

**Sum and product of roots (without finding them):**
- Sum = –b/a
- Product = c/a

⚡ **CUET Tip:** If you can't factor a quadratic quickly, use the formula — it's always reliable. The discriminant shortcut tells you how many real roots exist without fully solving.

### Arithmetic Progressions (AP)

**General term:** aₙ = a + (n–1)d
- a = first term, d = common difference

**Sum of n terms:** Sₙ = n/2 × [2a + (n–1)d] = n(a + aₙ)/2

**Quick check:** Difference between consecutive terms must be constant (d).

### Geometric Progressions (GP)

**General term:** aₙ = ar⁽ⁿ⁻¹⁾
- a = first term, r = common ratio

**Sum of n terms:** Sₙ = a(rⁿ − 1)/(r − 1) for r ≠ 1

**GP condition:** Ratio between consecutive terms is constant.

⚡ **CUET Exam Tip:** CUET algebra questions focus on linear equations, quadratic factorisation, and AP/Gp identification. Time yourself on solving speed — target 45 seconds per linear equation and 90 seconds per quadratic. If factorisation takes more than 30 seconds, switch to the quadratic formula.

### 🟡 Standard

### Concept

**Linear Equations — One Solution, Always**

A linear equation in one variable (ax + b = 0) always has exactly one solution: x = –b/a. The graph is a straight line crossing the x-axis at that point.

With TWO linear equations in two variables, you have three possibilities:
- **One solution** — lines intersect at one point
- **No solution** — lines are parallel (same slope, different intercept)
- **Infinite solutions** — lines are actually the same line

To solve, use either **substitution** (solve one for a variable, plug into the other) or **elimination** (multiply equations so one variable cancels when added).

**Quadratic Equations — The Discriminant is Your Friend**

The discriminant D = b² – 4ac tells you everything about the roots before you find them:
- **D > 0:** Two distinct real roots
- **D = 0:** Two equal real roots (repeated root)
- **D < 0:** No real roots (complex roots exist, but not in CUET scope)

The quadratic formula gives you the roots directly. But many CUET questions let you **factor** the quadratic instead — much faster when it works! If x² – 5x + 6 = 0, think: "what two numbers multiply to +6 and add to –5?" → –2 and –3. So (x–2)(x–3) = 0, giving x = 2 or 3.

**Vieta's Formulas — Sum and Product of Roots**

For ax² + bx + c = 0 with roots α and β:
- α + β = –b/a (sum of roots)
- αβ = c/a (product of roots)

This is HUGE for problems that ask for expressions involving roots without finding the roots themselves.

**Progressions — Patterns That Behave Predictably**

An **Arithmetic Progression (AP)** has a constant difference d between consecutive terms:
- aₙ = a + (n–1)d
- Sum of n terms: Sₙ = n/2[2a + (n–1)d] = n(a + l)/2 where l is the last term

A **Geometric Progression (GP)** has a constant ratio r:
- aₙ = ar^(n–1)
- Sum of n terms: Sₙ = a(r^n – 1)/(r – 1) when r ≠ 1

### Key Formulas
| Formula | Use |
|---------|-----|
| x = –b/a | Solving linear equation ax + b = 0 |
| x = [–b ± √(b²–4ac)]/2a | Quadratic formula |
| D = b² – 4ac | Discriminant |
| α + β = –b/a | Sum of quadratic roots |
| αβ = c/a | Product of quadratic roots |
| aₙ = a + (n–1)d | nth term of AP |
| Sₙ = n/2[2a + (n–1)d] | Sum of n terms of AP |
| aₙ = ar^(n–1) | nth term of GP |
| Sₙ = a(r^n – 1)/(r – 1) | Sum of n terms of GP (r ≠ 1) |

### Worked Example
**Q:** If α and β are roots of x² – 7x + 10 = 0, find α³ + β³.

**Step 1:** From Vieta: α + β = 7, αβ = 10
**Step 2:** Use identity: α³ + β³ = (α + β)³ – 3αβ(α + β)
**Step 3:** = 7³ – 3(10)(7) = 343 – 210 = 133

**Answer:** **133**

### Common Errors
- **Forgetting to divide by a in quadratic formula** → It's 2a in the denominator, not just 2!
- **Sign errors in Vieta's formulas** → α + β = –b/a, αβ = c/a — watch the negative sign for sum
- **Using wrong GP sum formula for r < 1** → For r < 1, Sₙ = a(1 – r^n)/(1 – r) is equivalent — same thing
- **Confusing AP and GP** → AP: add d each time; GP: multiply by r each time

### 🔴 Extended

### Full Concept

**Linear Equations — Elimination vs Substitution**

For two equations in two variables:
- **Elimination** works best when coefficients match or can be made to match easily
- **Substitution** works best when one equation gives a variable easily (e.g., y = something in x)

Example:
2x + 3y = 8
x – 2y = –3

**Elimination approach:** Multiply second equation by 2: 2x – 4y = –6. Subtract from first: (2x+3y) – (2x–4y) = 8–(–6) → 7y = 14 → y = 2. Then x = –3 + 2(2) = 1.

**The Discriminant — Your Pre-Flight Check**

Before solving a quadratic with the formula, always check D:
- D < 0? → No real roots. Save yourself the algebra!
- D is a perfect square? → Roots are rational → factoring will work
- D is not a perfect square? → Roots are irrational → use the formula

**Why Vieta's Formulas Work**

For ax² + bx + c = 0 with roots α and β:

From the quadratic formula:
α = [–b + √D]/2a, β = [–b – √D]/2a

Adding: α + β = [–b + √D – b – √D]/2a = –2b/2a = –b/a ✓
Multiplying: αβ = [(–b)² – (√D)²]/(2a)² = [b² – D]/4a²

But D = b² – 4ac, so αβ = [b² – (b² – 4ac)]/4a² = 4ac/4a² = c/a ✓

**Arithmetic Progression — Beyond the Basics**

The sum formula Sₙ = n/2[2a + (n–1)d] can also be written as n(a + l)/2 where l is the last term. This second form is often easier when you know the first and last terms.

If you need the **sum of first n natural numbers**: that's AP with a=1, d=1 → S = n(n+1)/2.

**Three consecutive terms in AP:** If a–d, a, a+d are three consecutive terms (they center around a with common difference d). This form is super useful for word problems!

**Geometric Progression — Growth and Decay**

GP is where things get interesting:
- **r > 1:** Terms grow exponentially (population growth, compound interest)
- **0 < r < 1:** Terms shrink toward zero (radioactive decay, depreciation)
- **r < 0:** Terms alternate sign (oscillating sequences)

The GP sum formula Sₙ = a(r^n – 1)/(r – 1) works for r ≠ 1. When r > 1, this is fine. When 0 < r < 1, r^n becomes very small, so Sₙ ≈ a/(1 – r) as n → ∞ — this is the **sum to infinity**.

When r < 0, the alternating sign causes oscillation — there's no sum to infinity unless |r| < 1, in which case S∞ = a/(1 – r) still holds.

**Harmonic Progression — The Neglected Sibling**

HP is defined as the reciprocals of an AP. So 1/a, 1/(a+d), 1/(a+2d), ... form an HP.

To solve HP problems: convert to AP by taking reciprocals, solve the AP problem, then convert back.

### Multiple Approaches

**For Quadratic Word Problems:**
1. **Translate to equation** — identify what x represents
2. **Set up quadratic** — form the equation
3. **Solve** — factor or use formula
4. **Check** — does the answer make sense in context?

**For "find sum of roots expressions":**
1. Try to express the desired quantity in terms of α + β and αβ
2. Use Vieta's formulas directly
3. Avoid finding individual roots unless absolutely necessary

### CUET-Level Problems

**Q1:** The difference between roots of x² – 2kx + k² + k – 5 = 0 is 4. Find k.

**Working:**
- Let roots be α and β: α + β = 2k, αβ = k² + k – 5
- Difference: |α – β| = √[(α+β)² – 4αβ] = √[4k² – 4(k² + k – 5)] = √[4k² – 4k² – 4k + 20] = √(20 – 4k)
- Given: √(20 – 4k) = 4 → 20 – 4k = 16 → 4k = 4 → k = 1

**Answer:** **k = 1**

**Q2:** Insert 3 numbers between 3 and 48 so that the sequence becomes a GP.

**Working:**
- Let the GP be: 3, G₁, G₂, G₃, 48
- This is a 5-term GP with a = 3, a₅ = 48, n = 5
- a₅ = ar⁴ → 48 = 3 × r⁴ → r⁴ = 16 → r = 2 (or r = –2)
- For r = 2: terms are 3, 6, 12, 24, 48
- For r = –2: terms are 3, –6, 12, –24, 48

**Answer:** **(3, 6, 12, 24, 48) or (3, –6, 12, –24, 48)**

### Tricky Cases
- **Two linear equations with no solution** → Coefficients are proportional but constants aren't: a₁/a₂ = b₁/b₂ ≠ c₁/c₂
- **Two linear equations with infinite solutions** → All coefficients proportional: a₁/a₂ = b₁/b₂ = c₁/c₂
- **Using GP sum to infinity when r ≥ 1** → Infinity sum ONLY exists when |r| < 1
- **HP problems** → Always convert to AP first, solve, then convert back
- **Roots not real in quadratic** → If D < 0 and question asks for real roots → answer is "no real roots"

*Content adapted based on your selected roadmap duration.*
