---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Trigonometry
weight: 5
country: india
generated: "2026-03-24T08:32:07.806733"
diagramPrompt: Mathematical diagram showing Trigonometry concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Trigonometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Six Trigonometric Ratios:**
In right triangle with angle $\theta$:
- $\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$
- $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$
- $\tan\theta = \frac{\sin\theta}{\cos\theta}$

Reciprocals:
- $\csc\theta = 1/\sin\theta$
- $\sec\theta = 1/\cos\theta$
- $\cot\theta = 1/\tan\theta = \cos\theta/\sin\theta$

**Fundamental Identities:**
- $\sin^2\theta + \cos^2\theta = 1$
- $1 + \tan^2\theta = \sec^2\theta$
- $1 + \cot^2\theta = \csc^2\theta$

**Key Values:**
| Angle | $\sin$ | $\cos$ | $\tan$ |
|-------|--------|--------|--------|
| $0°$ | 0 | 1 | 0 |
| $30°$ | $1/2$ | $\sqrt{3}/2$ | $1/\sqrt{3}$ |
| $45°$ | $\sqrt{2}/2$ | $\sqrt{2}/2$ | 1 |
| $60°$ | $\sqrt{3}/2$ | $1/2$ | $\sqrt{3}$ |
| $90°$ | 1 | 0 | $\infty$ |

⚡ **NDA Tip:** Know these values cold. The trigonometry section tests quick recall of exact values. Also remember $\sin 30° = 1/2$, not $1/3$.

⚡ **Common Mistake:** In right triangle context, the "opposite" and "adjacent" are relative to the specific angle $\theta$. Always identify which angle you're working with.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Compound Angle Formulas:**
- $\sin(A+B) = \sin A \cos B + \cos A \sin B$
- $\sin(A-B) = \sin A \cos B - \cos A \sin B$
- $\cos(A+B) = \cos A \cos B - \sin A \sin B$
- $\cos(A-B) = \cos A \cos B + \sin A \sin B$
- $\tan(A+B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}$
- $\tan(A-B) = \frac{\tan A - \tan B}{1 + \tan A \tan B}$

**Double Angle:**
- $\sin 2A = 2 \sin A \cos A$
- $\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$
- $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$

**Radians vs Degrees:**
$180° = \pi$ radians. To convert: multiply degrees by $\pi/180$ to get radians.

**Height and Distance:**
For angle of elevation $\theta$ from horizontal:
- Height = distance $\times \tan\theta$ (if angle measured from point at same level)
- More generally, use right triangle trigonometry

**Worked Examples:**

*Example 1:* Simplify $\frac{\sin(A+B) - \sin(A-B)}{\cos(A+B) + \cos(A-B)}$.

Using formulas:
Numerator: $\sin A \cos B + \cos A \sin B - (\sin A \cos B - \cos A \sin B) = 2\cos A \sin B$.
Denominator: $\cos A \cos B - \sin A \sin B + \cos A \cos B + \sin A \sin B = 2\cos A \cos B$.
So ratio $= \frac{2\cos A \sin B}{2\cos A \cos B} = \frac{\sin B}{\cos B} = \tan B$.

*Example 2:* If $\sin\theta = 3/5$, find $\cos\theta$ and $\tan\theta$.

Since $\sin^2\theta + \cos^2\theta = 1$:
$\cos^2\theta = 1 - \sin^2\theta = 1 - 9/25 = 16/25$.
$\cos\theta = \pm 4/5$.
Assuming $\theta$ in first quadrant (common for right triangle problems): $\cos\theta = 4/5$.
$\tan\theta = \sin\theta/\cos\theta = (3/5)/(4/5) = 3/4$.

*Example 3 (NDA Pattern):* From a point on ground 50m from base of a tower, the angle of elevation is $30°$. Find height of tower.

Let height $h$.
$\tan 30° = h/50$.
$1/\sqrt{3} = h/50$ → $h = 50/\sqrt{3} = \frac{50\sqrt{3}}{3} \approx 28.87$ m.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Multiple Angle Formulas:**
- $\sin 3A = 3\sin A - 4\sin^3 A$
- $\cos 3A = 4\cos^3 A - 3\cos A$
- $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$

**Transformation Formulas:**
- $\sin A + \sin B = 2\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$
- $\sin A - \sin B = 2\cos\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)$
- $\cos A + \cos B = 2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$
- $\cos A - \cos B = -2\sin\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)$

**Inverse Trigonometric Functions:**

- $\sin(\sin^{-1} x) = x$ for $x \in [-1,1]$
- $\sin^{-1}(\sin x) = x$ only for $x \in [-\pi/2, \pi/2]$
- Domain and range matters:
  - $\sin^{-1}: [-1,1] \to [-\pi/2, \pi/2]$
  - $\cos^{-1}: [-1,1] \to [0, \pi]$
  - $\tan^{-1}: \mathbb{R} \to (-\pi/2, \pi/2)$

**Principal Values:**
- $\sin^{-1} x \in [-\pi/2, \pi/2]$
- $\cos^{-1} x \in [0, \pi]$
- $\tan^{-1} x \in (-\pi/2, \pi/2)$

**Trigonometric Equations:**

General solutions:
- $\sin\theta = \sin\alpha$ → $\theta = n\pi + (-1)^n \alpha$
- $\cos\theta = \cos\alpha$ → $\theta = 2n\pi \pm \alpha$
- $\tan\theta = \tan\alpha$ → $\theta = n\pi + \alpha$

**Advanced Problems:**

*Problem:* Solve $\sin 3x = \cos 2x$.

$\sin 3x = \cos 2x = \sin(\pi/2 - 2x)$.
So $3x = n\pi + (-1)^n (\pi/2 - 2x)$.
This gives two cases based on $n$ even or odd.

For $n = 2m$ (even): $3x = 2m\pi + (\pi/2 - 2x)$ → $5x = 2m\pi + \pi/2$ → $x = \frac{2m\pi}{5} + \frac{\pi}{10}$.

For $n = 2m+1$ (odd): $3x = (2m+1)\pi - (\pi/2 - 2x) = (2m+1)\pi - \pi/2 + 2x$ → $x = (2m+1)\pi - \pi/2 = (2m+1)\pi/2 - \pi/2 = m\pi$.

So solutions: $x = m\pi$ or $x = \frac{2m\pi}{5} + \frac{\pi}{10}$.

*Problem:* Show that $\tan(\pi/3) + \tan(\pi/12) = \tan(\pi/4)$? No.

Actually $\pi/3 + \pi/12 = 5\pi/12$, not $\pi/4$.
The identity $\tan A + \tan B + \tan C = \tan A \tan B \tan C$ holds when $A+B+C = \pi$.

**NDA Exam Pattern:**
- NDA Mathematics: 120 questions, 300 marks
- Trigonometry: 10-15 questions
- Focus on solving triangles, heights and distances
- Inverse trig functions appear less frequently
- Compound angle formulas are commonly applied
- Know exact values for standard angles $0°, 30°, 45°, 60°, 90°$

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
