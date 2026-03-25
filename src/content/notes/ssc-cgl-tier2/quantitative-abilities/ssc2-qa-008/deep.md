---
exam: ssc-cgl-tier2
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-008
topicName: "Algebra (Identities, Linear/Quadratic Equations) — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A complex algebraic manipulation diagram showing a nested expression being simplified step by step, with each algebraic identity (a+b)², a²-b², and a³+b³ applied at different steps."
country: India
generated: ai-v1
---



## Algebra (Identities, Linear/Quadratic Equations) — Deep Dive

### Full Concept
**Advanced Identities:** Beyond basic identities, Tier 2 tests: a³+b³+c³−3abc = (a+b+c)(a²+b²+c²−ab−bc−ca). When a+b+c = 0, this simplifies to a³+b³+c³ = 3abc — this special case is frequently tested. Another important one: (x−a)(x−b)(x−c)... expansion gives symmetric sums of roots — this is connected to Vieta's formulas for higher degree polynomials.

**Cubic Equations:** If α, β, γ are roots of ax³ + bx² + cx + d = 0, then: α+β+γ = −b/a, αβ+βγ+γα = c/a, αβγ = −d/a. For equations that factor into (x−a)(x−b)(x−c) = 0, the roots are simply a, b, c.

**Quadratic in Quadratic:** Some questions give expressions like x⁴ + 1/x⁴ and ask to find x⁴ + 1/x⁴ given x + 1/x. The chain: x + 1/x → square → x² + 1/x² → square → x⁴ + 1/x⁴. Each step adds 2. So from x + 1/x = n: x² + 1/x² = n² − 2; x⁴ + 1/x⁴ = (n² − 2)² − 2.

**Linear Equations with Three Variables:** These are solved using substitution or elimination. The condition for consistency (solution exists) for a₁x + b₁y + c₁z = d₁ and similar pairs: the ratios a₁/a₂ = b₁/b₂ = c₁/c₂ must hold for infinite solutions, or two equations must be consistent with the third.

**Maximum/Minimum of Quadratic:** For ax²+bx+c, vertex is at x = −b/(2a). Maximum value if a < 0, minimum if a > 0. This is useful for word problems about area or cost optimisation.

**Condition for Common Roots:** If two quadratics share a root, subtract one from the other to eliminate x² term, then solve for x. If they have both roots common, the coefficients are proportional.

### SSC CGL Deep Analysis
- **Frequency:** 1–2 questions per paper. Quadratic equations with Vieta's formulas appear almost every year. Algebraic identities are embedded in other topics.
- **Difficulty:** Medium. The conceptually challenging parts are cubic equations with three unknowns and common root conditions.
- **Recent trend:** Questions combining algebra with geometry (e.g., find the roots of a quadratic representing sides of a triangle satisfying a condition).
- **Newer patterns:** Problems where the quadratic equation is hidden inside a word problem — "a number exceeds its square root by..." leading to x = √x + something.
- **Total weight in Tier 2:** Roughly 3–4% of the quant paper.

### High-Scoring Strategy
1. For any expression with x + 1/x, square once to get x² + 1/x², square again for x⁴ + 1/x⁴.
2. For cubic roots with a+b+c = 0: a³+b³+c³ = 3abc — use this when a+b+c is given as zero.
3. When two quadratics share a root: If ax²+bx+c = 0 and dx²+ex+f = 0 share root r, then ar²+br+c = 0 and dr²+er+f = 0. Eliminate r² to find r, then find other roots.
4. For maximum/minimum, use −b/(2a) for the vertex x-value, then substitute to find extreme value.
5. In linear three-variable systems, use elimination: eliminate same variable from two pairs, solve resulting two equations.

### SSC-Level Practice
**Q1:** If x² + 1/x² = 14, find x + 1/x (x > 0).
Answer: 4 — Working: (x + 1/x)² = x² + 2 + 1/x² = 14 + 2 = 16. So x + 1/x = √16 = 4 (positive since x > 0).

**Q2:** Find the condition that one root of ax²+bx+c = 0 is double the other.
Answer: 2b² = 9ac — Working: Let roots be α, 2α. Sum = 3α = −b/a → α = −b/(3a). Product = 2α² = c/a → 2(b²/9a²) = c/a → 2b²/9a² = c/a → 2b² = 9ac.

### Common Traps
- **Trap 1:** Not rearranging the quadratic to standard form ax²+bx+c = 0 before identifying a, b, c. Using wrong coefficients gives wrong roots.
- **Trap 2:** Forgetting the sign in Vieta: sum of roots = −b/a (negative!), not b/a. Product = c/a (positive if c and a have same sign).
- **Trap 3:** Assuming x + 1/x = n always gives x = n/2 ± √(n²−4)/2. This is correct, but only valid when n² ≥ 4 (real x exists). If n² < 4, x is complex.
