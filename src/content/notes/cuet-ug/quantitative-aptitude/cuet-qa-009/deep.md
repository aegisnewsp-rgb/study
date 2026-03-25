---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-009
topicName: Algebra — Deep Dive
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing a parabola with its axis of symmetry, vertex, and x-intercepts labeled. Include annotations for discriminant D > 0, D = 0, and D < 0 cases. Also show an AP as an arithmetic spiral of dots and a GP as an exponential growth curve."
country: India
generated: ai-v1
---



## Algebra — Deep Dive

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
