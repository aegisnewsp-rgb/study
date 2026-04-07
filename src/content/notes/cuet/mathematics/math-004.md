---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Circles
weight: 3
country: india
generated: "2026-03-29T05:04:46"
---

# Circles

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision.

**Circles** — Key Facts for CUET
• **Standard form**: (x − h)² + (y − k)² = r² — centre (h, k), radius r; always verify r > 0 before answering.
• **Most tested CUET concept**: Finding whether a given line is a tangent, secant, or external to a circle by comparing the perpendicular distance from the centre to the line (d) with the radius r: d > r → external; d = r → tangent; d < r → secant.
• **Common mistake**: Incorrectly applying the square root when finding radius from general form x² + y² + 2gx + 2fy + c = 0 — r = √(g² + f² − c) requires g² + f² > c, not forgetting the sign of c.
• **Key technique**: For any tangent to the circle x² + y² = r² at point (x₁, y₁) on it, use the **T = 0 shortcut**: xx₁ + yy₁ = r². This avoids deriving the slope-intercept form.
• **Important exception**: When a problem states a point lies ON the circle, the length of tangent formula gives zero — confirming degenerate tangent case; do not treat this as "no tangent exists."
• **Most frequent question type**: Given the centre and radius, write the equation; or given three non-collinear points, find the circle's equation using the determinant method.
⚡ Exam tip: In coordinate geometry MCQs with a line and a circle, always check whether the point of intersection is real before applying any tangent formula — a quick discriminant check (b² − 4ac) on the substitution will instantly tell you how many intersection points exist.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Circles** — CUET Study Guide

A **circle** is the set of all points in a plane at a fixed distance (radius r) from a fixed point (centre). The **standard equation** with centre (h, k) and radius r is **(x − h)² + (y − k)² = r²**. Expanding gives the **general form**: x² + y² + 2gx + 2fy + c = 0, where the centre is (−g, −f) and the radius is **r = √(g² + f² − c)**, valid only when g² + f² > c. If g² + f² = c, the radius is zero (a point circle); if g² + f² < c, the equation represents no real locus.

For the circle with **endpoints of a diameter** at A(x₁, y₁) and B(x₂, y₂), the equation is **(x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0**. This form directly encodes the right-angle property: every angle inscribed in a semicircle is 90°.

The **tangent** to circle x² + y² = r² at a point P(x₁, y₁) on the circle is given by **xx₁ + yy₁ = r²** (the T = 0 form). For the general circle x² + y² + 2gx + 2fy + c = 0, the tangent at (x₁, y₁) on it is: **xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0**. Alternatively, use the **slope form**: a tangent of slope m to circle x² + y² = r² is y = mx ± r√(1 + m²).

The **length of tangent** from an external point P(x₁, y₁) to the circle is **√(x₁² + y₁² + 2gx₁ + 2fy₁ + c)**. This is derived from the power of a point theorem: PT² = PO² − r².

**Director circle** of ellipse (x²/a²) + (y²/b²) = 1 is x² + y² = a² + b² — the locus of points from which perpendicular tangents can be drawn to the ellipse.

**Solved Example 1**: Find the tangent to x² + y² = 25 at the point (3, 4).
- Using T = 0: xx₁ + yy₁ = 25 → 3x + 4y = 25 ✓
- Check: (3, 4) satisfies 3² + 4² = 9 + 16 = 25 ✓

**Solved Example 2**: A point (6, 8) is 10 units from the origin. Is it outside, on, or inside the circle x² + y² = 36?
- d² = 6² + 8² = 36 + 64 = 100 > 36 → **outside** the circle of radius 6.
- Length of tangent from this point to the smaller circle = √(100 − 36) = √64 = **8**.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer timeline.

**Circles** — Comprehensive CUET Notes

**Family of circles**: Two basic families are important: (1) Circles with fixed centre and variable radius (concentric family): (x − h)² + (y − k)² = λ². (2) Circles passing through a fixed point and satisfying additional conditions produce linear combinations of the two circles S ≡ x² + y² + 2gx + 2fy + c = 0 and S₁ ≡ x² + y² + 2g₁x + 2f₁y + c₁ = 0: the family **S + λS₁ = 0** passes through the intersection points of S and S₁.

**Radical axis and radical centre**: For two circles S = 0 and S' = 0, the **radical axis** is S − S' = 0, a straight line perpendicular to the line joining the two centres. For three circles, the point of intersection of their three pairwise radical axes is the **radical centre** — the unique point having equal power with respect to all three circles.

**Common tangent to two circles**: For circles with centres C₁, C₂ and radii r₁, r₂ (r₁ ≠ r₂), the number of common tangents is:
- |r₁ − r₂| < d < r₁ + r₂ → 2 direct common tangents and 2 transverse (cross) tangents.
- d = r₁ + r₂ → 2 direct tangents (transverse coincide)
- d = |r₁ − r₂| → 2 transverse tangents (direct coincide, external tangents become internal)
- d > r₁ + r₂ → 4 tangents
- d < |r₁ − r₂| → 0 real tangents (one circle lies inside the other)

**Advanced solved example**: Find the equation of the circle passing through the intersection points of x² + y² = 25 and x² + y² − 4x − 2y + 4 = 0, and also through (3, 2).
- S₁: x² + y² − 25 = 0; S₂: x² + y² − 4x − 2y + 4 = 0
- Family: S₁ + λS₂ = 0 → (1+λ)(x² + y²) − 4λx − 2λy + (4λ − 25) = 0
- Since (3, 2) lies on the required circle: (1+λ)(9+4) − 12λ − 4λ + (4λ − 25) = 0 → 13(1+λ) − 16λ + 4λ − 25 = 0 → 13 + 13λ − 12λ − 25 = 0 → λ + (−12) = 0 → λ = 12
- Substituting λ = 12: 13(x² + y²) − 48x − 24y + (48 − 25) = 0 → 13x² + 13y² − 48x − 24y + 23 = 0
- This is the required circle equation.

**Parametric representation**: A circle (x − h)² + (y − k)² = r² can be parametrized as x = h + r cosθ, y = k + r sinθ. This is especially useful for problems involving chords or tangents expressed in terms of a parameter θ.

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
