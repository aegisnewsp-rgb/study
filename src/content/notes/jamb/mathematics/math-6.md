---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-6
topicName: "Trigonometry: Solutions of Triangles"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.733877"
diagramPrompt: "Mathematical diagram showing Trigonometry: Solutions of Triangles concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"



---
# "Trigonometry: Solutions of Triangles"

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Trigonometry: Solutions of Triangles** — Quick Facts

**Sine Rule (Law of Sines):**
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$

Where $R$ is the circumradius. Use when you know: 2 angles + 1 side, or 2 sides + 1 opposite angle.

**Cosine Rule (Law of Cosines):**
$$a^2 = b^2 + c^2 - 2bc\cos A$$
$$b^2 = a^2 + c^2 - 2ac\cos B$$
$$c^2 = a^2 + b^2 - 2ab\cos C$$

Use when you know: 2 sides + included angle, or all three sides.

**Area of Triangle:**
$$K = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B$$

**Heron's Formula:**
$$K = \sqrt{s(s-a)(s-b)(s-c)}$$

where $s = \frac{a+b+c}{2}$ (semi-perimeter)

**Sine Rule Ambiguous Case (SSA):**
When given $a$, $b$, and angle $A$:
- If $a < b\sin A$: no solution
- If $a = b\sin A$: one solution (right triangle)
- If $b < a < b\sin A$: two solutions (ambiguous case)
- If $a \geq b$: one solution

⚡ **JAMB Exam Tip:** Use Sine Rule when the question gives two angles. Use Cosine Rule when the question gives two sides and the included angle.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Trigonometry: Solutions of Triangles** — Study Guide

**Sine Rule Worked Example:**

In triangle ABC, $A = 30°$, $B = 45°$, and $a = 10$ cm. Find $b$.

$\frac{a}{\sin A} = \frac{b}{\sin B}$
$\frac{10}{\sin 30°} = \frac{b}{\sin 45°}$
$\frac{10}{0.5} = \frac{b}{0.7071}$
$20 = \frac{b}{0.7071}$
$b = 14.14$ cm

**Cosine Rule Worked Example:**

In triangle ABC, $a = 8$ cm, $b = 5$ cm, and $C = 60°$. Find $c$.

$c^2 = a^2 + b^2 - 2ab\cos C$
$c^2 = 8^2 + 5^2 - 2(8)(5)\cos 60°$
$c^2 = 64 + 25 - 80(0.5)$
$c^2 = 89 - 40 = 49$
$c = 7$ cm

**Ambiguous Case (SSA) Worked Example:**

Given $A = 30°$, $a = 5$ cm, $b = 8$ cm.

$b\sin A = 8 \times 0.5 = 4$ cm

Since $a = 5 > b\sin A = 4$, and $a < b = 8$, there are two possible triangles.

$h = b\sin A = 4$ cm
First solution: $\sin B = \frac{5\sin 30°}{8} = 0.3125$, $B_1 = 18.2°$
Second solution: $B_2 = 180° - 18.2° = 161.8°$

⚡ **Common Student Mistake:** In the ambiguous case, students forget the second possible angle. Always check if $\sin B < 1$ and if $A + B < 180°$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Trigonometry: Solutions of Triangles** — Comprehensive Notes

**Derivation: Sine Rule**

Consider triangle ABC with area $K$.

$K = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B = \frac{1}{2}ab\sin C$

Dividing by $\frac{1}{2}abc$:
$$\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$$

**Derivation: Cosine Rule**

Place triangle ABC with side $a$ along the x-axis.

Using coordinates: $A = (0, 0)$, $B = (c, 0)$, $C = (b\cos A, b\sin A)$

$a^2 = (b\cos A - c)^2 + (b\sin A)^2$
$a^2 = b^2\cos^2 A - 2bc\cos A + c^2 + b^2\sin^2 A$
$a^2 = b^2(\cos^2 A + \sin^2 A) + c^2 - 2bc\cos A$
$a^2 = b^2 + c^2 - 2bc\cos A$

**Circumradius Derivation:**

From the Sine Rule $\frac{a}{\sin A} = 2R$:

Place triangle in a circle of radius $R$.
Chord $a = 2R\sin A$, so $R = \frac{a}{2\sin A}$.

**Half-Angle Formulas (for solving triangles):**

$$\sin\frac{A}{2} = \sqrt{\frac{(s-b)(s-c)}{bc}}$$
$$\cos\frac{A}{2} = \sqrt{\frac{s(s-a)}{bc}}$$

These are useful when finding angles from given sides.

**Napier's Analogies (for solving triangles):**
$$\frac{\sin\frac{A-B}{2}}{\sin\frac{A+B}{2}} = \frac{a-b}{a+b}$$

**Practical Applications:**

**Surveying Problem:** From point P, the angle of elevation to the top of a tower is $30°$. Walking 50 m towards the tower, the angle becomes $45°$. Find the height.

Solution: Let height = $h$.
At first position: $\tan 30° = h/x$, so $x = h/\tan 30° = h\sqrt{3}$
At second position: $\tan 45° = h/(x - 50)$, so $x - 50 = h$
Substituting: $h\sqrt{3} - 50 = h$
$h(\sqrt{3} - 1) = 50$
$h = 50/(\sqrt{3} - 1) = 68.3$ m

**Navigation Problem:** Ship A sails 20 km on a bearing of $030°$, then Ship B sails 15 km on a bearing of $120°$. Find distance between ships.

Resolve into components:
Ship A: East = $20\cos 30° = 17.32$ km North = $20\sin 30° = 10$ km
Ship B: North component = $15\sin 60° = 12.99$ km East component = $15\cos 60° = 7.5$ km

**JAMB Pattern Analysis (2016-2024):**
- 2016: Sine rule with two angles given
- 2018: Cosine rule with two sides and included angle
- 2020: SSA ambiguous case (two solutions)
- 2022: Area calculation using $\frac{1}{2}ab\sin C$
- 2024: Heron's formula for area

**Trigonometric Identities Useful in Triangle Problems:**
- $\sin(A+B) = \sin A\cos B + \cos A\sin B$
- $\cos(A+B) = \cos A\cos B - \sin A\sin B$
- $A + B + C = 180°$ (angles in a triangle)

⚡ **Exam Strategy:** Draw the triangle and label known values. Circle the known information and box what you need. Choose Sine Rule (SSB) or Cosine Rule (SAS or SSS). Check for ambiguous case when using SSA.