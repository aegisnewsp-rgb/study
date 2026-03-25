---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-002
topicName: "Simplification & BODMAS — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "A complex nested bracket expression broken down into a tree diagram, each branch showing which operation is solved at each step"
country: India
generated: ai-v1
---



## Simplification & BODMAS — Deep Dive

### Full Concept

**Nested Brackets — The Inside-Out Method**

When expressions have brackets inside brackets inside brackets, the temptation is to rush. Don't. The rule is brutally simple: **solve the innermost bracket first**. If you have an expression like 2 × { [ (3 + 4)² − 5 ] + 6 }, your step-by-step is:

1. Innermost: (3 + 4) = 7
2. Apply the square: 7² = 49
3. Subtract 5: 49 − 5 = 44
4. Add 6: 44 + 6 = 50
5. Multiply by 2: 2 × 50 = 100

Each step reduces the complexity by one layer. If you try to do multiple steps at once, you'll make mistakes on tricky negatives.

**Square Roots in Simplification**

Square roots have a special property under multiplication and division:
- √(a × b) = √a × √b — this only works cleanly when a and b are non-negative
- √a ÷ √b = √(a ÷ b) — same condition

When you see √ in an expression, treat it like an Order (O in BODMAS) — it sits at the same priority as exponents. Simplify any square root of a perfect square immediately: √144 = 12, √49 = 7. For non-perfect squares, you can sometimes factor them: √50 = √(25 × 2) = 5√2.

**How Calculators Evaluate Expressions**

Your scientific calculator uses BODMAS exactly. Type 2 + 3 × 4 into a basic calculator and you might get 20 (left-to-right: (2+3)×4 = 20). Type it into a scientific calculator and you get 14 (2 + (3×4) = 14). The CUET exam is always the scientific calculator model — BODMAS, not left-to-right.

**The Vinculum — The Hidden Fourth Bracket**

A vinculum is a bar over digits (like the line in a fraction, or the bar over a repeating decimal). In BODMAS, anything under a vinculum is treated like a bracket. For example, in 5 − 3̅4̅5̅, the 345 is treated as a single negative number: 5 − (−345) = 350. This shows up in fraction notation and recurring decimal problems.

**Distributive Law — The Shortcut That Saves Time**

a × (b + c) = a×b + a×c — this lets you bypass brackets entirely. Instead of computing (100 + 37) × 8 by first finding 137 × 8 = 1096, you can do 100×8 + 37×8 = 800 + 296 = 1096. When numbers are close to round values, distribute first. This is also the logic behind the a² − b² = (a+b)(a−b) and (a+b)² expansions.

**Common Pitfalls with Signs**

The trickiest part of BODMAS for most students is managing negative signs through brackets:
- −(−4) = +4 (double negative flips positive)
- 5 − (−4) = 5 + 4 = 9
- −3 × (−4) = +12 (negative × negative = positive)
- −3 × 4 = −12

When a minus sign sits directly before a bracket, it flips every sign inside. So −(2x − 3y + 4z) = −2x + 3y − 4z. This trips up even strong students under time pressure.

### Multiple Approaches

**Evaluating 144 ÷ 3 × 4:**
- *Standard:* Left to right: 144 ÷ 3 = 48, then 48 × 4 = 192
- *Shortcut:* Multiply denominators first: 144 × 4 ÷ 3 = 576 ÷ 3 = 192 (same result, fewer steps)

**Evaluating 999 × 7 + 999 × 3:**
- *Standard:* 999 × 7 = 6993, 999 × 3 = 2997, sum = 9990
- *Shortcut:* 999 × (7+3) = 999 × 10 = 9990 — distributive law

### CUET-Level Problems

**Q1:** Simplify: 18 − [24 ÷ {5 − (3 − 2)}]
Working: Inner brackets: (3 − 2) = 1. Then {5 − 1} = 4. Then [24 ÷ 4] = 6. Then 18 − 6 = 12.
Answer: **12**

**Q2:** Find the value of 5 × { [ (2³ + 3²) ÷ 7 ] − √16 }
Working: Orders: 2³ = 8, 3² = 9, so (8 + 9) = 17. 17 ÷ 7 = not clean — let's keep it as fraction first. √16 = 4. So inside: (17 ÷ 7) − 4 = (17/7) − (28/7) = (17−28)/7 = −11/7. Then 5 × (−11/7) = −55/7 = **−7.86** (or −55/7 as fraction).
Answer: **−55/7**

### Tricky Cases
- **Zero in the denominator** — expression becomes undefined (e.g., 8 ÷ 0 is NOT infinity, it's undefined). Watch for bracket results that equal zero.
- **Long expressions with all operations**: Always write each step down. Attempting to do BODMAS mentally is the #1 cause of errors.
- **Decimal division before integer multiplication**: 2.5 × 4 ÷ 0.5 — handle decimals carefully, work left to right.
- **Negative numbers raised to powers**: (−3)² = 9 but −3² = −9. The brackets matter enormously.
