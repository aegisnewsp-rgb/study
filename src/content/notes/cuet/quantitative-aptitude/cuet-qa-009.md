---
exam: cuet
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-009
topicName: "Algebra"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing a parabola with its axis of symmetry, vertex, and x-intercepts labeled. Include annotations for discriminant D > 0, D = 0, and D < 0 cases. Also show an AP as an arithmetic spiral of dots and a GP as an exponential growth curve."
country: india
generated: 2026-03-25
lastUpdated: 2026-09-15
---

# Algebra

Algebra is the part of quantitative aptitude where the numbers stop being visible. A quadratic question may never mention a quantity you can picture — it asks about *roots*, about *the difference between roots*, about an expression in two unknowns you are not supposed to solve for. The tools are few: the quadratic formula, the discriminant, Vieta's relations, and the two progression formulas. The skill is recognising which tool a question is pointing at before you start computing.

### 🟢 Lite — Quick Review (1h–1d)

**The formulas, all of them**

| Tool | Formula |
| --- | --- |
| Linear | ax + b = 0 → x = −b/a |
| Quadratic roots | x = (−b ± √(b² − 4ac)) / 2a |
| Discriminant | D = b² − 4ac |
| Sum of roots | α + β = −b/a |
| Product of roots | αβ = c/a |
| AP nth term | aₙ = a + (n − 1)d |
| AP sum | Sₙ = n/2 [2a + (n − 1)d] = n(a + l)/2 |
| GP nth term | aₙ = ar^(n−1) |
| GP sum | Sₙ = a(rⁿ − 1)/(r − 1), for r ≠ 1 |

**The discriminant, in three words:** D > 0 two distinct real roots · D = 0 two equal real roots · D < 0 no real roots.

**Translation drills for linear equations** (do these until they are automatic):

- "a number plus 5 is 12" → x + 5 = 12
- "three times a number is 21" → 3x = 21
- "a number divided by 4 is 9" → x/4 = 9
- "the difference between a number and 7 is 3" → x − 7 = 3

**The factorisation trick.** For x² + px + q = 0, find two numbers that **multiply to q and add to p**. Then (x + first)(x + second) = 0. For x² + 5x + 6 the numbers are 2 and 3. For x² − 5x + 6 they are −2 and −3, and (x − 2)(x − 3) = 0 gives x = 2 or 3.

**Progression conditions.** AP = constant *difference*. GP = constant *ratio*. The middle term of three AP terms is the mean of the outer two; in a three-term GP the middle term squared equals the product of the outer two.

**Memory trick.** The quadratic formula reads: "stand on −b, spread to ±, square the b and take away 4ac, then split across 2a." Written out, x = (−b ± √(b² − 4ac))/2a. The one thing people forget is the **2a**, not 2, in the denominator.

### 🟡 Standard — Regular Study (2d–2mo)

#### Linear equations, and the three possible outcomes

ax + b = 0 always has exactly one solution, x = −b/a, and its graph is a straight line crossing the x-axis there. With two equations in two unknowns, the picture decides everything: **one solution** if the lines cross, **no solution** if they are parallel with different intercepts, and **infinite solutions** if the two equations are the same line in disguise.

The algebraic test for the last two: for ax + by = c and dx + ey = f, no solution arises when a₁/a₂ = b₁/b₂ but c₁/c₂ differs, and infinite solutions when all three ratios are equal. This is worth knowing because "no solution" and "infinitely many" are both legitimate multiple-choice answers that students never expect.

**Elimination in practice.** Given 2x + 3y = 8 and x − 2y = −3: double the second to get 2x − 4y = −6, subtract it from the first, and 7y = 14 so y = 2; substituting back, x = 1. Check both: 2(1) + 3(2) = 8 ✓ and 1 − 2(2) = −3 ✓. When elimination needs awkward multipliers, substitution is quicker; Cramer's rule, x = (ce − bd)/(ae − bd) and y = (af − cd)/(ae − bd), is worth memorising only for the neat cases.

#### Quadratics: check the discriminant first

Before you do any algebra with D = b² − 4ac, you learn three things at once. If D < 0 there are no real roots and you can stop. If D is a perfect square, the roots are rational and factorisation will work. If it is not, the roots are irrational and the formula is the sensible route. Computing D costs four operations and routinely saves a page of working.

#### Worked Example — an expression in the roots

**Q.** If α and β are the roots of x² − 7x + 10 = 0, find α³ + β³.

Never find the roots. Vieta gives α + β = 7 and αβ = 10 immediately. The identity α³ + β³ = (α + β)³ − 3αβ(α + β) then gives 7³ − 3(10)(7) = 343 − 210 = **133**.

This is the standard move in "expression in roots" questions: rewrite the target in terms of α + β and αβ, then substitute. The identity set worth having is α² + β² = (α + β)² − 2αβ, α³ + β³ = (α + β)³ − 3αβ(α + β), and α/β + β/α = (α + β)²/(αβ) − 2.

#### Progressions

An **arithmetic progression** adds a constant d each term. Its n-th term is a + (n − 1)d and its sum is n/2[2a + (n − 1)d], or more usefully n(a + l)/2 when you know the first and last terms. The special case worth memorising separately is the sum of the first n natural numbers, a = 1 and d = 1, giving n(n + 1)/2. Writing any three consecutive AP terms as a − d, a, a + d saves a variable in word problems.

A **geometric progression** multiplies by a constant r each term: aₙ = ar^(n−1), with sum a(rⁿ − 1)/(r − 1) for r ≠ 1. Note the behaviour of the terms themselves: r > 1 grows, 0 < r < 1 decays towards zero, and r < 0 alternates in sign. A negative ratio is a real possibility and produces alternating answers, not an error.

### 🔴 Extended — Deep Study (3mo+)

#### Why Vieta's relations hold

The two roots come from the quadratic formula as α = (−b + √D)/2a and β = (−b − √D)/2a. Adding them cancels the √D entirely, leaving −2b/2a = **−b/a**. Multiplying gives (b² − D)/4a², and since D = b² − 4ac, this becomes (b² − b² + 4ac)/4a² = **c/a**.

The point of the derivation is not the algebra — it is that sum and product are *computable without the roots*, so a question asking for an expression in the roots is never asking you to solve the quadratic.

#### The difference and the ratio of the roots

Two further identities follow from the same source and cover most of what is asked about roots:

- |α − β| = √[(α + β)² − 4αβ] = √(b² − 4ac)/|a| = √D / |a|
- α/β + β/α = [(α + β)² − 2αβ]/αβ

The first is the tool for "the difference between the roots is 4" questions. Take x² − 2kx + k² + k − 5 = 0 with a difference of 4: then α + β = 2k and αβ = k² + k − 5, so |α − β| = √[(2k)² − 4(k² + k − 5)] = √(20 − 4k) = 4, giving 20 − 4k = 16 and **k = 1**. Verify: k = 1 makes the equation x² − 2x − 3 = 0 with roots 3 and −1, and |3 − (−1)| = 4 ✓.

#### Progression word problems

**Inserting terms.** To insert 3 numbers between 3 and 48 so the result is a GP, you have a 5-term progression with a = 3 and a₅ = 48, so ar⁴ = 48 gives r⁴ = 16 and r = 2 (or r = −2 for the alternating solution). The sequence is 3, 6, 12, 24, 48, or 3, −6, 12, −24, 48 if the negative ratio is allowed. Always check whether the question permits a negative ratio before discarding the second answer.

**Missing-term questions.** Three consecutive AP terms with the middle one missing are a − d, a + d about a known mean; for a GP, if the ends are p and q then the middle is √(pq). Both shortcuts exist to save you a variable.

**Sum to infinity.** When |r| < 1, rⁿ → 0 and the sum of n terms approaches a/(1 − r). It only exists for |r| < 1; at r = 1 the terms never decay and at |r| > 1 they grow, so there is no finite sum. That condition is the whole content of such a question.

#### The harmonic progression, briefly

The reciprocals of an AP form a harmonic progression. Convert to AP by taking reciprocals, solve the AP problem, then convert back — every HP question is an AP question in disguise, and students who try to handle HP directly always take longer.

#### Three-step method for any quadratic word problem

1. **Translate.** Decide exactly what x represents and write the relationship in words before writing symbols. Most wrong answers in this topic are translation errors, not arithmetic errors.
2. **Form and solve.** Factor if the numbers are friendly, otherwise use the formula — but compute D first, because it may tell you there is no real answer.
3. **Sanity-check the context.** A count of people cannot be negative or fractional, and a length cannot exceed the total it is part of. Discard any root that violates the situation, even if the algebra produced it.

### 🧠 Memory Anchors

```mermaid
flowchart TD
    A[Algebra question] --> B{How many unknowns and what power?}
    B -->|one unknown, first power| C[Linear: x equals minus b over a]
    B -->|one unknown, second power| D[Compute D equals b squared minus 4ac]
    D --> E{D negative, zero or positive?}
    E -->|negative| F[No real roots]
    E -->|zero| G[One repeated real root]
    E -->|positive| H[Friendly numbers?]
    H -->|yes| I[Factor and set each bracket to zero]
    H -->|no| J[Use the quadratic formula]
    B -->|question about roots| K[Use Vieta: sum equals minus b over a, product equals c over a]
    K --> L[Rewrite the target using sum and product]
    B -->|sequence question| M{Constant difference or constant ratio?}
    M -->|difference| N[AP: a plus n minus 1 d, sum n over 2 of a plus l]
    M -->|ratio| O[GP: a r to the n minus 1, sum a of r to the n minus 1 over r minus 1]
```

- **"Minus b, plus or minus, square b, take away 4ac, split over 2a."** The 2a is the part everyone drops.
- **"D decides before you start."** Negative, zero, positive — and a perfect square D means factorising will work.
- **"Vieta instead of solving."** Sum = −b/a, product = c/a, and the target rewritten in those two.
- **"Multiplying to q, adding to p."** The factorisation trick for x² + px + q = 0.
- **"AP adds, GP multiplies."** Constant difference versus constant ratio — check the signs as you go.
- **"The middle term of a GP squares to the product of the ends."** a, b, c in GP means b² = ac, exactly as in continued proportion.
- **"Sum to infinity needs |r| below 1."** Otherwise the series diverges and there is no answer.
- **Flashcard Q&A:**
  - *x² + 5x + 6 = 0?* → (x + 2)(x + 3), roots −2 and −3.
  - *D of x² − 4x + 5?* → −4, no real roots.
  - *Roots of x² − 7x + 10?* → sum 7, product 10; α³ + β³ = 133.
  - *11th term of 3, 7, 11, …?* → 3 + 10×4 = 43.
  - *Sum of first 20 natural numbers?* → 20 × 21/2 = 210.
  - *Insert 3 terms in a GP between 3 and 48?* → 6, 12, 24 (r = 2).

### 🎯 Exam Traps & Error Log

1. **Dividing by 2 instead of 2a** in the quadratic formula. The denominator is 2a, and it is the single most common slip in the chapter.
2. **Dropping the minus sign in Vieta.** α + β = −b/a, and the sign is part of the formula, not a detail.
3. **Adding the roots instead of multiplying** to find the product, or applying −b/a where c/a is needed.
4. **Forgetting that a quadratic can have no real roots** and forcing an answer out of D < 0.
5. **Refusing a negative root of a negative-ratio GP** and missing the alternating solution in insertion problems.
6. **Using the GP sum formula at r = 1,** where it divides by zero; the sum is simply na.
7. **Claiming a sum to infinity exists at r ≥ 1.** It does not.
8. **Solving the quadratic when Vieta would do,** which is slower and invites arithmetic error.
9. **Accepting a root that makes no sense in context** — a negative count, or a length longer than the whole.
10. **Confusing aₙ = a + (n−1)d with a + nd,** which shifts the whole sequence by one term.

### 🧪 Self-Test — 8 Questions with Worked Answers

Attempt all eight before reading the solutions, and write down the tool you intend to use before you start computing.

1. **Solve 3(x − 2) + 4 = 19.**
   Expand the bracket: 3x − 6 + 4 = 19, so 3x − 2 = 19 and 3x = 21, giving **x = 7**. Check: 3(7 − 2) + 4 = 15 + 4 = 19 ✓. Expanding before solving is the step that keeps the signs clean.
2. **Solve the simultaneous equations 2x + 3y = 8 and x − 2y = −3.**
   Double the second: 2x − 4y = −6. Subtract from the first: 7y = 14, so y = 2. Then x − 4 = −3, so **x = 1** and **y = 2**. Check: 2(1) + 3(2) = 8 ✓ and 1 − 4 = −3 ✓.
3. **Solve x² + 5x + 6 = 0 by factorisation.**
   Find two numbers multiplying to 6 and adding to 5: 2 and 3. So (x + 2)(x + 3) = 0, and each factor gives a root: **x = −2 or x = −3**. Check with Vieta: the sum −2 + (−3) = −5 = −b/a ✓ and the product 6 = c/a ✓.
4. **Find the discriminant of x² − 4x + 5 = 0 and say how many real roots it has.**
   D = b² − 4ac = 16 − 20 = **−4**. Since D < 0, the equation has **no real roots**. Checking via the formula confirms it: x = (4 ± √−4)/2 is not real. The trap is trying to reach a numerical root anyway.
5. **If α and β are the roots of x² − 7x + 10 = 0, find α + β, αβ and α³ + β³.**
   Vieta: α + β = −(−7)/1 = **7** and αβ = 10/1 = **10**. Then α³ + β³ = (α + β)³ − 3αβ(α + β) = 343 − 3(10)(7) = 343 − 210 = **133**. You never need the individual roots (which happen to be 5 and 2).
6. **Find the 11th term of the AP 3, 7, 11, 15, …**
   a = 3 and d = 4, so a₁₁ = a + (n − 1)d = 3 + 10 × 4 = **43**. The trap is 3 + 11 × 4 = 47, which is the 12th term; the bracket n − 1 exists because the first term has n = 1.
7. **Find the sum of the first 20 natural numbers.**
   This is an AP with a = 1 and d = 1, so S₂₀ = n/2[2a + (n − 1)d] = 20/2[2 + 19] = 10 × 21 = **210**. The memorised form n(n + 1)/2 gives 20 × 21/2 = 210 in one line, and it is worth keeping as a separate formula because it is asked so often.
8. **Insert 3 numbers between 3 and 48 so that the five numbers form a GP.**
   It is a 5-term GP with a = 3 and a₅ = 48, so a₅ = ar⁴ gives 48 = 3r⁴, r⁴ = 16 and r = 2 (the negative root r = −2 is also possible). The terms are 3, **6, 12, 24**, 48. With r = −2 the sequence is 3, −6, 12, −24, 48, which also satisfies a₅ = 3 × 16 = 48; whether it is allowed depends on whether the question permits a negative ratio.

### 💡 Pro Tips

1. **Compute the discriminant before touching the quadratic.** Four operations can tell you the answer does not exist, or that factoring will be quick.
2. **Try factorising for ten seconds, then switch.** Look for numbers multiplying to c and adding to b; if nothing appears, use the formula without further deliberation.
3. **For "expression in the roots" questions, go straight to Vieta** and rewrite the target in α + β and αβ. Solving the quadratic is wasted effort.
4. **Write AP terms as a − d, a, a + d** in word problems; it removes a variable and reduces the chance of a sign slip.
5. **Check both ratio signs in a GP insertion problem.** A negative common ratio is legitimate and is often the intended second answer.
6. **Memorise the sum of natural numbers as a separate formula** so you never re-derive n(n+1)/2 under time pressure.
7. **Verify a quadratic answer against Vieta** — the sum of your two roots should be −b/a. It takes three seconds and catches a wrong quadratic formula immediately.
8. **Sanity-check the context before recording the answer.** Negative quantities of people, and lengths greater than their total, are the two most common impossibilities.

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Algebra" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Quantitative Aptitude notes](/notes/cuet/quantitative-aptitude/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
