---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-5
topicName: "Trigonometry: Solutions of Triangles"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.066163"
diagramPrompt: "Mathematical diagram showing Trigonometry: Solutions of Triangles concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# "Trigonometry: Solutions of Triangles"

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

Solving a triangle means finding all unknown sides and angles when some of them are given. The three primary tools are the **sine rule**, the **cosine rule**, and the **area formula**. The choice depends on what data is given.

**The Sine Rule:**
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$
where $R$ is the circumradius. Use this when you know:
- Two angles and one side (AAS or ASA)
- Two sides and an angle opposite one of them (SSA — the ambiguous case)

**The Cosine Rule:**
$$a^2 = b^2 + c^2 - 2bc \cos A$$
$$b^2 = a^2 + c^2 - 2ac \cos B$$
$$c^2 = a^2 + b^2 - 2ab \cos C$$

Use this when you know:
- Two sides and the included angle (SAS)
- All three sides (SSS) — to find an angle

**Area of a Triangle:**
$$\Delta = \frac{1}{2}ab \sin C = \frac{1}{2}bc \sin A = \frac{1}{2}ca \sin B$$
Also: $\Delta = \sqrt{s(s-a)(s-b)(s-c)}$ (Heron's formula) where $s = \frac{a+b+c}{2}$ (semi-perimeter)

**⚡ ECAT exam tips:**
- The SSA case (two sides and a non-included angle) can have 0, 1, or 2 solutions — this is the "ambiguous case." If $b \sin A < a < b$: two possible triangles. If $a = b \sin A$: one right triangle. If $a < b \sin A$: no triangle.
- Always check that the sum of angles is $180°$ — it's a useful consistency check
- When using the sine rule for an angle, use the inverse sine carefully — $\sin \theta = \sin(180° - \theta)$. Both could be valid.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding of triangle solutions.

**Case 1 — AAS/ASA (Two Angles + One Side):**

Given $A = 50°$, $B = 60°$, $a = 10$.

Step 1: Find $C = 180° - 50° - 60° = 70°$.
Step 2: Use sine rule: $b/\sin 60° = 10/\sin 50°$, so $b = 10 \sin 60° / \sin 50° ≈ 10 \times 0.866 / 0.766 = 11.31$.
Step 3: $c/\sin 70° = 10/\sin 50°$, so $c = 10 \sin 70° / \sin 50° ≈ 10 \times 0.940 / 0.766 = 12.27$.

**Case 2 — SAS (Two Sides + Included Angle):**

Given $b = 7$, $c = 5$, $A = 40°$. Find $a$, $B$, $C$.

Step 1: Cosine rule: $a^2 = 7^2 + 5^2 - 2(7)(5)\cos 40° = 49 + 25 - 70 \times 0.766 = 74 - 53.62 = 20.38$. So $a = 4.52$.

Step 2: Cosine rule for angle B: $\cos B = (a^2 + c^2 - b^2)/(2ac) = (20.38 + 25 - 49)/(2 \times 4.52 \times 5) = (-3.62)/(45.2) = -0.0801$. So $B ≈ 94.59°$.

Step 3: $C = 180° - 40° - 94.59° = 45.41°$.

**Case 3 — SSS (All Three Sides):**

Given $a = 8$, $b = 6$, $c = 5$. Find all angles.

Step 1: $s = (8+6+5)/2 = 9.5$.
Step 2: Use Heron's formula: $\Delta = \sqrt{9.5 \times 1.5 \times 3.5 \times 4.5} = \sqrt{224.44} = 14.98$.
Step 3: $\sin A = 2\Delta/(bc) = 29.96/30 = 0.9987$. $A = 87.1°$.
Step 4: $\cos A = (b^2 + c^2 - a^2)/(2bc) = (36 + 25 - 64)/(60) = -3/60 = -0.05$. Wait — negative cos? That suggests obtuse angle. Let's use $\cos B$: $(a^2 + c^2 - b^2)/(2ac) = (64 + 25 - 36)/(80) = 53/80 = 0.6625$. $B = 48.4°$. $C = 180 - 87.1 - 48.4 = 44.5°$. Actually $\cos A = (36+25-64)/(60) = -3/60 = -0.05$. So $A = 92.9°$.

**The Ambiguous Case (SSA) — Detailed:**

Given $a = 8$, $b = 10$, $A = 30°$.

Step 1: Find $h = b \sin A = 10 \times \sin 30° = 10 \times 0.5 = 5$.

Case (i): If $a < h$: no triangle — the side $a$ is too short to reach the base.
Case (ii): If $a = h$: exactly one right triangle.
Case (iii): If $h < a < b$: two triangles possible — the apex can be placed on either side of the altitude.
Case (iv): If $a \geq b$: one triangle.

For $a = 8, b = 10, h = 5$: $5 < 8 < 10$ → two solutions.

$\sin B = b \sin A / a = 10 \times 0.5 / 8 = 0.625$. So $B_1 = 38.68°$ or $B_2 = 180° - 38.68° = 141.32°$.

If $B_2 = 141.32°$, then $C = 180° - 30° - 141.32° = 8.68°$ (very small).
If $B_1 = 38.68°$, then $C = 180° - 30° - 38.68° = 111.32°$.

Both give valid triangles.

**⚡ Common student mistakes:**
1. Not checking the ambiguous case when given SSA — missing the second triangle
2. Using sine rule to find an acute angle when the obtuse angle is also possible
3. Forgetting to use the correct units — angles in degrees throughout
4. Rounding too early in multi-step calculations — keep full precision until the final answer

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of triangle solution methods.

**Derivation of Sine Rule:**

In any triangle $ABC$ with circumradius $R$:
Area $\Delta = \frac{1}{2}bc \sin A = \frac{1}{2}ca \sin B = \frac{1}{2}ab \sin C$.
Also $\Delta = \frac{abc}{4R}$ (a well-known formula — can be derived by noting $\sin A = a/(2R)$ from the circumcircle).
Equating: $\frac{1}{2}bc \sin A = \frac{abc}{4R}$, so $\sin A / a = 1/(2R)$.
Similarly for $\sin B$ and $\sin C$. Hence $a/\sin A = b/\sin B = c/\sin C = 2R$.

**Derivation of Cosine Rule:**

Place triangle with side $a$ along the x-axis from $(0,0)$ to $(a,0)$. Place vertex $C$ at coordinates $(b \cos A, b \sin A)$ where side $b = AC$ and $c = BC$. Then $c^2 = (b \cos A - a)^2 + (b \sin A)^2 = b^2 \cos^2 A - 2ab \cos A + a^2 + b^2 \sin^2 A = a^2 + b^2 - 2ab \cos A$. $\blacksquare$

**Napier's Analogies:**

For any triangle:
$$\frac{\sin A - \sin B}{\sin A + \sin B} = \frac{\tan\left(\frac{A-B}{2}\right)}{\cot\left(\frac{C}{2}\right)}$$

These are used in advanced surveying and navigation problems. ECAT rarely tests Napier's analogies directly.

**Area from Two Sides and Included Angle:**

As noted: $\Delta = \frac{1}{2}bc \sin A$. This can be extended: $\Delta = \frac{1}{2}ab \sin C = \frac{1}{2}ca \sin B$.

From $\Delta = \frac{abc}{4R}$ and $\Delta = rs$ (where $r$ = inradius, $s$ = semiperimeter), we get: $r = \frac{4R \sin(A/2) \sin(B/2) \sin(C/2)}{1}$ — an important relationship between circumradius and inradius.

**The $m-n$ Theorem (useful for some ECAT problems):**

For any triangle, if a point on side $BC$ divides it into segments $m$ and $n$ from $B$ and $C$ respectively:
$$AB^2 \cdot n + AC^2 \cdot m = (AN^2 + BN \cdot NC)(m+n)$$
where $AN$ is the cevian to point $N$ on $BC$. This is less commonly tested.

**Complete Solution Strategy:**
1. Draw the triangle and label all given quantities
2. Identify the case: AAS/ASA, SAS, SSS, or SSA
3. For AAS/ASA: find the third angle, then use sine rule
4. For SAS: find the third side by cosine rule, then find the smaller of the remaining angles by cosine rule (more precise than sine rule, which is ambiguous)
5. For SSS: find the largest angle first (it's opposite the longest side — and if $\cos A < 0$, the angle is obtuse), then use sine rule for remaining angles
6. For SSA: calculate $h = b \sin A$, compare with $a$, determine number of solutions

**Special Triangle Relationships:**
- Equilateral triangle: all sides equal, all angles = 60°. Area = $\frac{\sqrt{3}}{4}a^2$. Inradius = $a/(2\sqrt{3})$, circumradius = $a/\sqrt{3}$.
- Right triangle: if $A = 90°$, then $a^2 = b^2 + c^2$ (Pythagoras), $R = a/2$.

**ECAT Previous Year Patterns:**
- Sine rule and cosine rule applications: very common
- Area calculations (Heron's formula): very common
- Ambiguous case: frequently tested
- Mixed problems: given some angles and some sides

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
