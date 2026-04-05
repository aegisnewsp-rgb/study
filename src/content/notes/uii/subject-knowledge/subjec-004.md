---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Subject Knowledge
topic: subjec-004
topicName: Quadratic Equations & Inequalities
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
diagramPrompt: Parabola graph showing y = x² - 5x + 6 with x-axis intercepts at x = 2 and x = 3, vertex at (2.5, -0.25), shaded region showing where y > 0
---

# Quadratic Equations & Inequalities

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A quadratic equation has the standard form ax² + bx + c = 0, where a ≠ 0. The quadratic formula gives solutions:

x = (−b ± √(b² − 4ac)) / 2a

The discriminant D = b² − 4ac determines the nature of roots:
- D > 0: two distinct real roots
- D = 0: one repeated real root
- D < 0: two complex conjugate roots (no real solutions)

For factorisation: find two numbers that multiply to give ac and add to give b. Then split the middle term and factor by grouping.

⚡ **Exam tip:** Before using the quadratic formula, check if the expression factorises easily. For x² − 7x + 12 = 0, the numbers 3 and 4 multiply to 12 and add to 7. So (x − 3)(x − 4) = 0, giving x = 3 or x = 4. Much faster than the formula.

⚡ **Exam tip:** For inequality questions, always draw the parabola or number line diagram. Remember that when dividing by a negative number (to solve inequalities with the variable), the inequality sign reverses.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Solving Quadratic Equations**

Three methods exist: factorisation, completing the square, and the quadratic formula. Factorisation works when roots are rational numbers. The quadratic formula always works.

Example via factorisation: 2x² + 5x − 3 = 0
- Find two numbers: product = 2 × (−3) = −6, sum = 5
- Numbers: 6 and −1
- Rewrite: 2x² + 6x − x − 3 = 0
- Group: 2x(x + 3) − 1(x + 3) = 0
- Factorise: (2x − 1)(x + 3) = 0
- Solutions: x = 1/2 or x = −3

Example via completing the square: x² + 6x + 2 = 0
- x² + 6x = −2
- Add (6/2)² = 9 to both sides: x² + 6x + 9 = 7
- (x + 3)² = 7
- x + 3 = ±√7
- x = −3 ± √7

**Quadratic Inequalities**

For x² − 5x + 6 < 0, first find roots: (x − 2)(x − 3) = 0, so x = 2 and x = 3. The parabola opens upward (a = 1 > 0), so it's negative between the roots. Solution: 2 < x < 3.

For 2x² + x − 6 ≥ 0: factorise (2x − 3)(x + 2) ≥ 0. Roots: x = 3/2 and x = −2. Since the parabola opens upward, the solution is x ≤ −2 or x ≥ 3/2.

**Sum and Product of Roots**

For ax² + bx + c = 0 with roots α and β:
- Sum of roots: α + β = −b/a
- Product of roots: αβ = c/a

If roots are 5 and −3, the equation is x² − (5 + (−3))x + (5 × −3) = x² − 2x − 15 = 0.

**Common Mistakes to Avoid:**

| Mistake | Correct approach |
|---------|-----------------|
| Forgetting to check the sign of "a" when determining which regions satisfy the inequality | Parabola opens upward → negative between roots; opens downward → negative outside roots |
| Dropping the ± when taking square roots | √9 = ±3, so x² = 9 gives x = 3 or x = −3 |
| Incorrectly calculating the discriminant | D = b² − 4ac, where a and c come from ax² + bx + c = 0 |
| Forgetting that the coefficient of x² matters in Vieta's formulas | α + β = −b/a (not −b), αβ = c/a (not c) when a ≠ 1 |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**The Discriminant — More Than Just Counting Roots**

The discriminant b² − 4ac encodes rich information about the quadratic. Its value tells us not just the number of real roots, but also their relationship to each other and to the coefficients.

If D is a perfect square, the roots are rational and the equation factorises over the integers. If D > 0 but not a perfect square, the roots are real and irrational but conjugates. If D < 0, the complex roots are a ± bi where a = −b/2a and b = √(4ac − b²)/2a.

**Maximum and Minimum Values**

The vertex of y = ax² + bx + c occurs at x = −b/(2a). If a > 0, this is the minimum value; if a < 0, it's the maximum. For y = −3x² + 12x − 5, the vertex is at x = −12/(2 × −3) = 2. The maximum value is y = −3(4) + 24 − 5 = 7.

This is invaluable for optimisation word problems: "A rectangle has perimeter 40 cm. Find maximum area." Let length = x, width = 20 − x. Area = x(20 − x) = 20x − x². Maximum at x = 20/2 = 10 cm, giving area = 100 cm².

**Quadratic Equations with Parameters**

When a parameter appears (like k in x² − kx + k + 1 = 0), the condition for equal roots is D = 0: (−k)² − 4(1)(k + 1) = 0 → k² − 4k − 4 = 0. Solve: k = (4 ± √(16 + 16))/2 = (4 ± √32)/2 = 2 ± 2√2.

For the equation to have roots of opposite sign, we need product < 0, so c/a < 0. In x² + (m − 2)x + 3m + 1 = 0, we need 3m + 1 < 0, so m < −1/3.

**Historical Context**

The quadratic formula was known to Babylonian mathematicians (c. 400 BCE) who completed the square geometrically. Euclid (c. 300 BCE) gave geometric solutions in his Data. The Indian mathematician Sridhara (c. 850 CE) is credited with the formula equivalent to x = (√(ac + b²/4) − b/2)/a for ax² + bx + c = 0. The symbolic quadratic formula with the radical notation emerged in the 16th century with the development of algebra symbol systems.

**Exam Pattern Analysis**

Quadratic questions on the UI exam typically test:
1. Finding roots given coefficients (or vice versa)
2. Conditions for roots to be real, equal, or rational
3. Nature of roots without solving (using discriminant)
4. Forming equations from given roots
5. Quadratic inequalities on number lines
6. Word problems leading to quadratic equations (area, consecutive integers, projectile motion)

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
