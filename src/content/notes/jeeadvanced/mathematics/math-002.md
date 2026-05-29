---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-002
topicName: Trigonometry
weight: 5
country: india
generated: "2026-03-24T08:32:07.934146"
diagramPrompt: "Mathematical diagram showing Trigonometry concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Trigonometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Six Trigonometric Ratios:**
For angle $\theta$ in right triangle: $\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$, $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$, $\tan\theta = \frac{\sin\theta}{\cos\theta}$.
Reciprocals: $\csc\theta = \frac{1}{\sin\theta}$, $\sec\theta = \frac{1}{\cos\theta}$, $\cot\theta = \frac{1}{\tan\theta} = \frac{\cos\theta}{\sin\theta}$.

**Fundamental Identities:**
- $\sin^2\theta + \cos^2\theta = 1$
- $1 + \tan^2\theta = \sec^2\theta$
- $1 + \cot^2\theta = \csc^2\theta$

**Signs in Quadrants:**
| Quadrant | sin | cos | tan |
|----------|------|------|------|
| I | + | + | + |
| II | + | - | - |
| III | - | - | + |
| IV | - | + | - |

**Key Values to Memorise:**
| Angle | sin | cos | tan |
|-------|------|------|------|
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | $\sqrt{3}/2$ | $1/\sqrt{3}$ |
| 45° | $\sqrt{2}/2$ | $\sqrt{2}/2$ | 1 |
| 60° | $\sqrt{3}/2$ | 1/2 | $\sqrt{3}$ |
| 90° | 1 | 0 | $\infty$ |

⚡ **JEE Tip:** For JEE, the identity $\tan\theta = \frac{\sin\theta}{\cos\theta}$ and knowing exact values is crucial. Also remember $\sin(2\theta) = 2\sin\theta\cos\theta$.

⚡ **Common Mistake:** $\sin(30°) = 1/2$, NOT $1/3$. $\cos(60°) = 1/2$, NOT $1/3$. Always double-check angle conventions (degrees vs radians).

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Compound Angle Formulas:**

- $\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$
- $\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B$
- $\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}$

**Double Angle:**
- $\sin 2A = 2\sin A \cos A = \frac{2\tan A}{1+\tan^2 A}$
- $\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A = \frac{1-\tan^2 A}{1+\tan^2 A}$
- $\tan 2A = \frac{2\tan A}{1-\tan^2 A}$

**Multiple Angle Formulas:**
- $\sin 3A = 3\sin A - 4\sin^3 A$
- $\cos 3A = 4\cos^3 A - 3\cos A$
- $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$

**Transformation Formulas:**
- $\sin A + \sin B = 2\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$
- $\sin A - \sin B = 2\cos\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)$
- $\cos A + \cos B = 2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$
- $\cos A - \cos B = -2\sin\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)$

**Worked Examples:**

*Example 1 (JEE 2022):* If $\sin A + \sin B = 1$ and $\cos A + \cos B = \sqrt{2}$, find $\cos(A-B)$.

Square and add:
$(\sin A + \sin B)^2 + (\cos A + \cos B)^2 = 1^2 + (\sqrt{2})^2 = 1 + 2 = 3$.
Left side: $\sin^2 A + \sin^2 B + 2\sin A \sin B + \cos^2 A + \cos^2 B + 2\cos A \cos B = (\sin^2 A + \cos^2 A) + (\sin^2 B + \cos^2 B) + 2(\sin A \sin B + \cos A \cos B) = 1 + 1 + 2\cos(A-B) = 2 + 2\cos(A-B)$.
So $2 + 2\cos(A-B) = 3$ → $2\cos(A-B) = 1$ → $\cos(A-B) = 1/2$.

*Example 2:* Prove that if $A + B + C = \pi$, then $\tan A + \tan B + \tan C = \tan A \tan B \tan C$. (This is the standard "angles of a triangle" identity that JEE problems rely on.)

Since $A + B + C = \pi$, we have $A + B = \pi - C$. Taking the tangent of both sides and using $\tan(\pi - C) = -\tan C$:
$$\tan(A + B) = -\tan C.$$
Expand the left side with the compound-angle formula:
$$\frac{\tan A + \tan B}{1 - \tan A \tan B} = -\tan C.$$
Cross-multiplying,
$$\tan A + \tan B = -\tan C\,(1 - \tan A \tan B) = -\tan C + \tan A \tan B \tan C.$$
Adding $\tan C$ to both sides gives the result:
$$\tan A + \tan B + \tan C = \tan A \tan B \tan C. \quad \blacksquare$$

⚡ **Caution:** this identity requires $A + B + C = \pi$. It does **not** hold for arbitrary angles — for example $20°, 40°, 60°$ sum to $120°$ (not $180°$), and there the sum $\approx 2.94$ while the product $\approx 0.53$, so they are not equal.

**Useful conditional identity:** When $A + B + C = \pi$,
$$\tan A + \tan B + \tan C = \tan A \tan B \tan C.$$
This follows from $A + B = \pi - C$, so $\tan(A+B) = -\tan C$, giving $\tan A + \tan B = \tan C(\tan A \tan B - 1)$ and therefore the stated product relation.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Euler's Formula:**
$e^{i\theta} = \cos\theta + i\sin\theta$.
From this: $\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}$, $\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$.

**De Moivre's Theorem:**
$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$.

**Summation of Trigonometric Series:**
Series such as $\sum \cos(k\theta)$ and $\sum \sin(k\theta)$ are evaluated by treating them as the real and imaginary parts of a geometric series in $e^{i\theta}$, or equivalently by telescoping with product-to-sum transformation formulas.

**Inverse Trigonometric Functions:**

- $\sin(\arcsin x) = x$, $\arcsin(\sin x) = x$ (principal value)
- Domain and range: $\arcsin: [-1,1] \to [-\pi/2, \pi/2]$
- $\arctan: \mathbb{R} \to (-\pi/2, \pi/2)$

**Principal Values:**
- $\arcsin x \in [-\pi/2, \pi/2]$
- $\arccos x \in [0, \pi]$
- $\arctan x \in (-\pi/2, \pi/2)$

**Advanced Problems:**

*Problem (JEE Advanced 2020):* Solve $\sin^{-1} x + \sin^{-1} 2x = \pi/3$.

First fix the domain. Both $\sin^{-1} x$ and $\sin^{-1} 2x$ require $|x| \le 1$ and $|2x| \le 1$, so the feasible set is $|x| \le 1/2$.

Apply the addition formula for inverse sine. When the sum lies in $[-\pi/2, \pi/2]$,
$$\sin^{-1} x + \sin^{-1} 2x = \sin^{-1}\!\big(x\sqrt{1-4x^2} + 2x\sqrt{1-x^2}\big).$$
Setting this equal to $\pi/3$ and taking the sine of both sides gives
$$x\sqrt{1-4x^2} + 2x\sqrt{1-x^2} = \sin(\pi/3) = \frac{\sqrt{3}}{2}.$$
Factor out $x$:
$$x\big[\sqrt{1-4x^2} + 2\sqrt{1-x^2}\big] = \frac{\sqrt{3}}{2}.$$
Since the bracket is positive on the domain, $x > 0$. Square both sides:
$$x^2\big[\,1-4x^2 + 4(1-x^2) + 4\sqrt{(1-4x^2)(1-x^2)}\,\big] = \frac{3}{4}.$$
Simplify the bracket to $5 - 8x^2 + 4\sqrt{1 - 5x^2 + 4x^4}$. Substituting $u = x^2$ with $u \in [0, 1/4]$:
$$5u - 8u^2 + 4u\sqrt{1 - 5u + 4u^2} = \frac{3}{4}.$$
Isolate the radical:
$$4u\sqrt{1 - 5u + 4u^2} = 8u^2 - 5u + \frac{3}{4}.$$
Squaring once more,
$$16u^2(1 - 5u + 4u^2) = \Big(8u^2 - 5u + \tfrac{3}{4}\Big)^2,$$
which reduces to a polynomial equation in $u$. Solving it and discarding roots that violate $u \in [0, 1/4]$ (and that fail to keep the original inverse-sine sum within its principal range) yields the admissible value of $x$ in the interval $0 < x \le 1/2$. Always back-substitute the candidate root into the original equation, since squaring can introduce extraneous solutions.

**JEE Advanced Patterns (2018–2024):**
- Inverse trigonometric equations and identities are very common
- Sum-to-product and product-to-sum transformations are frequent
- Trigonometric equations with multiple angles tested in 2021, 2023
- Maximum/minimum of trigonometric expressions using AM-GM or Cauchy
- Conditional trigonometric identities (like the $A+B+C=\pi$ type) are common

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
