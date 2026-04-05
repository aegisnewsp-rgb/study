---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: quant
subjectName: Wassce Subjects
topic: wassce-009
topicName: Topic 9
weight: 3
country: legon
generated: "2026-03-25T17:00:00"
---

# Topic 9: Quadratic Equations

### 🟢 Lite — Quick Review (1h–1d)

A quadratic equation is an equation of the form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0. The highest power of the variable—the degree—is 2, making these equations fundamentally different from linear equations. A quadratic equation can have at most two solutions, known as roots. The discriminant, b² - 4ac, determines the nature of these roots: if b² - 4ac > 0, there are two distinct real roots; if b² - 4ac = 0, there is one repeated real root; if b² - 4ac < 0, the roots are complex conjugates and no real solutions exist.

The quadratic formula, x = (-b ± √(b² - 4ac)) / 2a, provides a universal method for solving any quadratic equation. This formula is derived from completing the square on the general form ax² + bx + c = 0, and it works for all values of a, b, and c provided a ≠ 0. Factoring—expressing the quadratic as a product of two linear factors—offers a faster alternative when the factors are integers or simple fractions, but the quadratic formula never fails.

**Key Facts:**
- Standard form: ax² + bx + c = 0, where a ≠ 0
- Discriminant: Δ = b² - 4ac
- Δ > 0: two distinct real roots; Δ = 0: one repeated root; Δ < 0: no real roots
- Quadratic formula: x = (-b ± √Δ) / 2a
- Sum of roots = -b/a (from Vieta's formulas)
- Product of roots = c/a (from Vieta's formulas)
- If one root is r, the other is c/r (since product = c/a)

⚡ **Exam Tip:** Before attempting to factor a quadratic, calculate the discriminant. If it is not a perfect square, the quadratic cannot be factored over the integers—in such cases, use the quadratic formula directly.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Solving by Factorisation**

Solve: x² - 5x + 6 = 0

Step 1 — Find two numbers multiplying to +6 and adding to -5: -2 and -3
Step 2 — Write: (x - 2)(x - 3) = 0
Step 3 — Apply zero-product property: x - 2 = 0 or x - 3 = 0
Step 4 — **x = 2 or x = 3**

**Solving by the Quadratic Formula**

Solve: 2x² + 5x - 3 = 0

Identifying: a = 2, b = 5, c = -3

Δ = b² - 4ac = 25 - 4(2)(-3) = 25 + 24 = **49**

x = (-5 ± √49) / (2 × 2) = (-5 ± 7) / 4

x = (-5 + 7)/4 = 2/4 = **1/2** or x = (-5 - 7)/4 = -12/4 = **-3**

**Solving by Completing the Square**

Solve: x² + 6x + 5 = 0

Step 1 — Move constant: x² + 6x = -5
Step 2 — Add (b/2)² to both sides: (6/2)² = 9
x² + 6x + 9 = -5 + 9
(x + 3)² = 4

Step 3 — Take square root: x + 3 = ±2
Step 4 — Solve: x = -3 + 2 = **-1** or x = -3 - 2 = **-5**

**Comparison Table: Solution Methods**

| Method | Best Used When | Limitation |
|--------|---------------|------------|
| Factorisation | a = 1, b and c are integers with small factors | Cannot use when discriminant is not a perfect square or factors are not integers |
| Quadratic formula | Always works | Requires careful arithmetic |
| Completing the square | When deriving vertex form or when coefficients are fractions | More steps, more opportunities for error |

**Nature of Roots Using Discriminant**

For equation 4x² - 12x + 9 = 0:
Δ = (-12)² - 4(4)(9) = 144 - 144 = **0**

Since Δ = 0, the equation has one repeated (double) root:
x = -(-12)/(2×4) = 12/8 = **3/2**

This means (x - 3/2)² = 0, and the graph touches the x-axis at one point.

**Forming Equations from Given Roots**

If the roots are 3 and -2, form the quadratic equation:

Using sum and product:
Sum of roots = 3 + (-2) = 1 = -b/a → b = -1
Product of roots = 3 × (-2) = -6 = c/a → c = -6

Since a = 1: x² - (sum)x + product = 0
**x² - x - 6 = 0**

**Common Mistakes to Avoid:**
1. Forgetting to set the equation equal to zero before factorising
2. Incorrectly calculating the discriminant (sign errors)
3. Forgetting the ± when applying the quadratic formula
4. Simplifying incorrectly (e.g., √49 = ±7, not just 7)
5. Losing the negative sign on b in the formula x = (-b ± √Δ)/2a

**Problem-Solving Strategy:**
1. Write the equation in standard form ax² + bx + c = 0
2. Calculate the discriminant to determine solution method
3. If Δ is a perfect square and factors are simple, factorise
4. Otherwise, use the quadratic formula
5. Verify solutions by substitution
6. For word problems, define the variable clearly and form the equation before solving

---

### 🔴 Extended — Deep Study (3mo+)

**Derivation of the Quadratic Formula**

Starting from ax² + bx + c = 0:

1. Divide by a (assuming a ≠ 0): x² + (b/a)x + c/a = 0
2. Move constant term: x² + (b/a)x = -c/a
3. Complete the square: add [(b/a)/2]² = (b/2a)² to both sides
   x² + (b/a)x + (b/2a)² = -c/a + (b/2a)²
4. Left side is now a perfect square:
   (x + b/2a)² = (b² - 4ac) / 4a²
5. Take square root: x + b/2a = ±√(b² - 4ac) / 2a
6. Solve for x: **x = (-b ± √(b² - 4ac)) / 2a**

**Vieta's Formulas and Symmetric Functions**

For quadratic ax² + bx + c = 0 with roots α and β:
- Sum of roots: α + β = -b/a
- Product of roots: αβ = c/a

These relationships allow rapid calculation without finding individual roots:
If roots are 4 and 1/2, the equation is:
x² - (4 + 0.5)x + (4 × 0.5) = 0 → **x² - 4.5x + 2 = 0**
(Or multiply by 2 to avoid fractions: 2x² - 9x + 4 = 0)

**Condition for Real Roots**

For real roots, we require Δ ≥ 0:
- Two distinct real roots: Δ > 0
- One repeated real root: Δ = 0
- No real roots: Δ < 0

This has practical applications:
Find k such that x² + kx + 4 = 0 has real roots.
Δ = k² - 16 ≥ 0
k² ≥ 16
|k| ≥ 4
**k ≤ -4 or k ≥ 4**

**Maximum and Minimum Values**

The vertex of y = ax² + bx + c occurs at x = -b/2a.
- If a > 0, this is a minimum point (parabola opens upward)
- If a < 0, this is a maximum point (parabola opens downward)

For y = -3x² + 12x - 5:
x-coordinate of vertex: -12/(2 × -3) = -12/-6 = 2
Maximum value: y = -3(4) + 12(2) - 5 = -12 + 24 - 5 = **7**

**Word Problems Leading to Quadratic Equations**

"The product of two consecutive integers is 272. Find the integers."

Let integers be n and n + 1:
n(n + 1) = 272
n² + n - 272 = 0
(n + 17)(n - 16) = 0
n = 16 or n = -17

Solutions: (16, 17) or (-17, -16)

**Simultaneous Equations Involving Quadratics**

Solve: x + y = 5 ... (1)
xy = 6 ... (2)

From (1): y = 5 - x
Substitute into (2): x(5 - x) = 6
5x - x² = 6
x² - 5x + 6 = 0
(x - 2)(x - 3) = 0
x = 2 or x = 3

Corresponding y values: y = 3 or y = 2
Solutions: **(2, 3) and (3, 2)**

**WASSCE Examination Patterns:**

WASSCE quadratic equation questions commonly include:
1. Solving by factorisation (Objective)
2. Solving using the quadratic formula (Objective and Theory)
3. Finding the discriminant and determining nature of roots (Objective)
4. Forming equations from given roots (Theory)
5. Word problems leading to quadratic equations (Theory)

⚡ **Pro Exam Tip:** In the WASSCE, when using the quadratic formula, always simplify √(b² - 4ac) completely before proceeding. If the discriminant is a perfect square, the equation factorises neatly. For "show that" questions, express your answer in terms of the given coefficients rather than calculating numerical values.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
