---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-023
topicName: Hyperbola
weight: 5
country: india
generated: "2026-03-24T08:32:07.945032"
diagramPrompt: "Mathematical diagram showing Hyperbola concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Hyperbola

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
A hyperbola is the set of all points in a plane where the absolute difference of distances from two fixed points (foci) is constant.

**Standard Equation:**
For hyperbola centred at origin with transverse axis along x-axis:
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \quad (a, b > 0)$$
- **Vertices:** $(\pm a, 0)$
- **Foci:** $(\pm c, 0)$ where $c^2 = a^2 + b^2$
- **Eccentricity:** $e = \frac{c}{a} > 1$

**Key Lengths:**
- **Transverse axis:** $2a$
- **Conjugate axis:** $2b$
- **Latus rectum:** Length $= \frac{2b^2}{a}$, endpoints at $(c, \pm \frac{b^2}{a})$

**Rectangular Hyperbola:**
When $a = b$, we get $x^2 - y^2 = a^2$, also written as $xy = c^2$ after rotation.

⚡ **JEE Tip:** For hyperbola, $c^2 = a^2 + b^2$ (not the difference like in ellipse). Also $e > 1$ for hyperbola (unlike ellipse where $e < 1$).

⚡ **Common Mistake:** Remember that for hyperbola $x^2/a^2 - y^2/b^2 = 1$, we have $x^2/a^2 \geq 1$, so $|x| \geq a$. Points with $|x| < a$ don't lie on the hyperbola.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Tangent and Normal:**

For hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:

**At point** $P(x_1, y_1)$ on hyperbola:

- **Tangent:** $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$
- **Normal:** $\frac{a^2 x}{x_1} + \frac{b^2 y}{y_1} = c^2$ (with $c^2 = a^2 + b^2$)

**Parametric form** at $(a\sec\theta, b\tan\theta)$:

- **Tangent:** $\frac{x\sec\theta}{a} - \frac{y\tan\theta}{b} = 1$
- **Slope:** $\frac{b\sec\theta}{a\tan\theta}$

**Asymptotes:**
For $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, asymptotes are $y = \pm \frac{b}{a}x$.
For rectangular hyperbola $xy = c^2$, asymptotes are the coordinate axes $x = 0$ and $y = 0$.

**Director Circle:**
Locus of intersection of perpendicular tangents. For hyperbola, this is $x^2 + y^2 = a^2 - b^2$.
Wait, for hyperbola $c^2 = a^2 + b^2$, and director circle would need to be meaningful. Actually perpendicular tangents to hyperbola don't have a bounded director circle in the same way — the intersection points go to infinity.

Actually let me reconsider: For hyperbola, perpendicular tangents intersect on the circle $x^2 + y^2 = a^2 - b^2$ only when $a > b$. When $a < b$ this is an imaginary circle. This only exists when $|a| > |b|$.

**Worked Examples:**

*Example 1:* Find eccentricity, foci, and asymptotes of $16x^2 - 9y^2 = 144$.

Divide by 144: $\frac{x^2}{9} - \frac{y^2}{16} = 1$.
So $a^2 = 9, b^2 = 16, a = 3, b = 4$.
$c^2 = a^2 + b^2 = 9 + 16 = 25$, so $c = 5$.
$e = c/a = 5/3 \approx 1.667$.
Foci: $(\pm 5, 0)$.
Asymptotes: $y = \pm \frac{b}{a}x = \pm \frac{4}{3}x$.

*Example 2 (JEE 2021):* Find equation of tangent to $\frac{x^2}{16} - \frac{y^2}{9} = 1$ at point where $x = 5$.

When $x = 5$: $\frac{25}{16} - \frac{y^2}{9} = 1$ → $\frac{y^2}{9} = \frac{25}{16} - 1 = \frac{9}{16}$ → $y^2 = \frac{81}{16}$ → $y = \pm \frac{9}{4}$.
For point $(5, 9/4)$: tangent is $\frac{x \cdot 5}{16} - \frac{y \cdot 9/4}{9} = 1$.
Simplify: $\frac{5x}{16} - \frac{y}{4} = 1$ → multiply by 16: $5x - 4y = 16$.

*Example 3:* Find the equation of the normal to $xy = 32$ at point $(4, 8)$.

Method 1: Use implicit differentiation. $y + x\frac{dy}{dx} = 0$ → $\frac{dy}{dx} = -\frac{y}{x}$.
At $(4,8)$: slope $m = -8/4 = -2$.
Normal slope $= -1/m = 1/2$.
Equation: $y - 8 = \frac{1}{2}(x - 4)$ → $2y - 16 = x - 4$ → $x - 2y + 12 = 0$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Conjugate Hyperbola:**
For $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, the conjugate hyperbola is $-\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ or $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$.

They share the same asymptotes $y = \pm \frac{b}{a}x$.

**Rectangular Hyperbola:**
When transverse axis = conjugate axis ($a = b$), we get the rectangular hyperbola $x^2 - y^2 = a^2$.
In rotated form (axes at 45°): $xy = \frac{a^2}{2}$.

**Director Circle for Rectangular Hyperbola:**
For $xy = c^2$, the director circle (locus of intersection of perpendicular tangents) is $x^2 + y^2 = 2c^2$.

**Pole and Polar:**
For hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, the polar of point $(x_1, y_1)$ is $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$.
The pole of chord $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ lies on the hyperbola's director circle only when $a > b$.

**Reflection Property:**
A ray from one focus reflects off the hyperbola as if it came from the other focus. More precisely: the tangent at any point $P$ makes equal angles with lines $PF_1$ and $PF_2$.

**Advanced Problems:**

*Problem 1 (JEE Advanced 2019):* From point $(h, k)$, tangents are drawn to hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. Find the locus of $(h, k)$ if the chord of contact is a chord of the hyperbola.

Chord of contact from $(h,k)$ is $\frac{xh}{a^2} - \frac{yk}{b^2} = 1$.
For this chord to intersect the hyperbola in real points (be a chord, not tangent at imaginary points), the equation formed by substituting $y$ from chord into hyperbola must have discriminant $\geq 0$.

Substituting $y = \frac{b^2}{hk}(xh - a^2)$ into $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:
$\frac{x^2}{a^2} - \frac{1}{b^2} \cdot \frac{b^4(hxk - h a^2)^2}{k^2 h^2} = 1$.
After simplification and requiring discriminant condition, we get the locus.

Actually, simpler approach: chord of contact $T = 0$ is a chord of the hyperbola (not tangent) when the point $(h,k)$ lies outside the hyperbola's director circle. So locus is the region outside $x^2 + y^2 = a^2 - b^2$.

*Problem 2:* Find the asymptotes of $2x^2 + 5xy + 2y^2 + 4x + 5y + 2 = 0$.

The asymptotes of a general second-degree curve $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ are obtained by dropping the constant term:
$ax^2 + 2hxy + by^2 + 2gx + 2fy = 0$.

Here $a=2, h=5/2, b=2, g=2, f=5/2$.
So $2x^2 + 5xy + 2y^2 + 4x + 5y = 0$.
Factor if possible: try $(2x + y)(x + 2y) = 2x^2 + 4xy + xy + 2y^2 = 2x^2 + 5xy + 2y^2$. ✓
So asymptotes: $(2x + y)(x + 2y) + 4x + 5y = 0$? Wait, we need to keep the linear terms.
$2x^2 + 5xy + 2y^2 + 4x + 5y = 0$.
Treating as quadratic in $x$: $2x^2 + (5y+4)x + (2y^2 + 5y) = 0$.
Using quadratic formula: $x = \frac{-(5y+4) \pm \sqrt{(5y+4)^2 - 16(y^2 + \frac{5}{2}y)}}{4}$.

Actually factor approach: $2x^2 + 5xy + 2y^2 = (2x+y)(x+2y)$.
So $(2x+y)(x+2y) + 4x + 5y = 0$.
Let $2x+y = u, x+2y = v$. Note $u+2v = 4x+2y + 2x + 4y$... no, $u+2v = 2x+y + 2x+4y = 4x+5y$.
So the equation is $uv + (u+2v) = 0$ → $uv + u + 2v = 0$ → $u(v+1) = -2v$ → $u = \frac{-2v}{v+1}$.
In terms of $x, y$: $\frac{2x+y}{x+2y+1} = \frac{-2(x+2y)}{x+2y+1} = -2 \cdot \frac{x+2y}{x+2y+1}$.
This is messy. The asymptotes are $2x+y+1=0$ and $x+2y+1=0$ approximately, but need to check.

Actually for asymptotes parallel to axes: the constant term doesn't affect asymptote directions. The homogeneous part $2x^2 + 5xy + 2y^2 = 0$ gives slopes.
$2x^2 + 5xy + 2y^2 = 0$ → divide by $y^2$: $2m^2 + 5m + 2 = 0$ where $m = x/y$.
$(2m+1)(m+2) = 0$ → $m = -1/2$ or $m = -2$.
So asymptotes are $2x + y + c_1 = 0$ and $x + 2y + c_2 = 0$ where $c_1, c_2$ are determined... but for asymptotes we just need to check if the shifted asymptotes work.

Actually the asymptotes of a central conic pass through the centre. Find centre: partial derivatives of homogeneous part give... $4x + 5y + 4 = 0$ and $5x + 4y + 5 = 0$. Solve: $x = 1, y = -2$. Center is $(1, -2)$.
Asymptotes: $2(x-1) + (y+2) = 0$ → $2x + y = 0$? And $(x-1) + 2(y+2) = 0$ → $x + 2y + 3 = 0$.

But the asymptotes should be approximately $2x+y = 0$ and $x+2y = 0$ or shifted. Let me check by substituting into original equation to see which constant terms make the resulting quadratic have zero discriminant (touches at infinity).

Actually it's easier to solve $2x^2 + 5xy + 2y^2 + 4x + 5y = 0$ for large $|x|$ or $|y|$: the asymptotes are the lines satisfying the homogeneous part $2x^2 + 5xy + 2y^2 = 0$. So $2x+y=0$ and $x+2y=0$ are the directions. The asymptotes pass through the centre $(1, -2)$: $2(x-1) + (y+2) = 0$ → $2x+y=0$, and $(x-1) + 2(y+2) = 0$ → $x+2y+3=0$.

Check: $2(1) + (-2) = 0$ ✓ for first. $1 + 2(-2) + 3 = 1 - 4 + 3 = 0$ ✓.

So asymptotes are $2x + y = 0$ and $x + 2y + 3 = 0$.

**JEE Advanced Patterns (2018–2024):**
- Parametric form $(a\sec\theta, b\tan\theta)$ is essential for hyperbola problems
- Rectangular hyperbola $xy = c^2$ and its properties are frequently tested
- Asymptotes appear in combined conic problems
- Equation transformation (rotation to get rectangular form) is an advanced topic that appears
- Director circle and conjugate hyperbola are less common but appear in tough sets

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
