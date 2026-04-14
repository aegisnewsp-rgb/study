---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-11
topicName: "Trigonometry: Sine and Cosine Rules"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.622485"
diagramPrompt: "Mathematical diagram showing Trigonometry: Sine and Cosine Rules concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Trigonometry: Sine and Cosine Rules

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Trigonometry** deals with the relationships between angles and sides of triangles. The **Sine Rule** and **Cosine Rule** are used to solve triangles that are not right-angled.

**Basic Trigonometric Ratios (Right-Angled Triangles):**

For angle $\theta$:
$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$$
$$\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$$
$$\tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

**The Sine Rule:**
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Used when we know:
- Two angles and one side (AAS or ASA)
- Two sides and an angle opposite one of them (SSA)

**The Cosine Rule:**
$$a^2 = b^2 + c^2 - 2bc\cos A$$
$$b^2 = a^2 + c^2 - 2ac\cos B$$
$$c^2 = a^2 + b^2 - 2ab\cos C$$

Used when we know:
- Two sides and the included angle (SAS)
- All three sides (SSS)

⚡ **WAEC Tip:** Use the Sine Rule when the known side is opposite a known angle. Use the Cosine Rule when you have SAS or SSS. For right-angled triangles, use SOH-CAH-TOA.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Solving Triangles:**

*Problem 1 (Sine Rule)*: In triangle ABC, A = 40°, B = 65°, and side a = 8 cm. Find side b.

$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\frac{8}{\sin 40°} = \frac{b}{\sin 65°}$$
$$b = \frac{8 \times \sin 65°}{\sin 40°} = \frac{8 \times 0.9063}{0.6428} = \frac{7.2504}{0.6428} \approx 11.28 \text{ cm}$$

*Problem 2 (Sine Rule — Ambiguous Case)*: In triangle ABC, A = 30°, a = 5 cm, and b = 8 cm. Find angle B.

$$\frac{\sin B}{b} = \frac{\sin A}{a}$$
$$\sin B = \frac{8 \times \sin 30°}{5} = \frac{8 \times 0.5}{5} = \frac{4}{5} = 0.8$$
$$\sin B = 0.8 \Rightarrow B = 53.13° \text{ or } B = 180° - 53.13° = 126.87°$$

Both are valid if $A + B < 180°$:
- If B = 53.13°: A + B = 83.13° < 180° ✓
- If B = 126.87°: A + B = 156.87° < 180° ✓

**This is the "ambiguous case" — two possible triangles!**

*Problem 3 (Cosine Rule)*: In triangle ABC, a = 7 cm, b = 5 cm, c = 6 cm. Find angle A.

$$a^2 = b^2 + c^2 - 2bc\cos A$$
$$49 = 25 + 36 - 2(5)(6)\cos A$$
$$49 = 61 - 60\cos A$$
$$60\cos A = 61 - 49 = 12$$
$$\cos A = \frac{12}{60} = 0.2$$
$$A = \cos^{-1}(0.2) \approx 78.46°$$

*Problem 4 (Cosine Rule — Find third side)*: In triangle ABC, A = 55°, b = 10 cm, c = 8 cm. Find a.

$$a^2 = b^2 + c^2 - 2bc\cos A$$
$$a^2 = 100 + 64 - 2(10)(8)\cos 55°$$
$$a^2 = 164 - 160 \times 0.5736$$
$$a^2 = 164 - 91.78 = 72.22$$
$$a = \sqrt{72.22} \approx 8.50 \text{ cm}$$

**Area of a Triangle:**
$$A = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B$$

*Problem*: Find the area of triangle ABC with sides a = 12 cm, b = 9 cm, and included angle C = 40°.

$$A = \frac{1}{2}(12)(9)\sin 40° = 54 \times 0.6428 \approx 34.71 \text{ cm}^2$$

⚡ **Common Student Mistakes:** Using the wrong rule for the given information. Forgetting which side is opposite which angle in the Sine Rule. In the ambiguous case, only giving one answer. For Cosine Rule, using $a^2 = b^2 + c^2 + 2bc\cos A$ (the sign is ALWAYS negative).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

** bearings and Navigation:**

**Bearings** are angles measured clockwise from North:

*Problem*: Town A is 200 km from town B on a bearing of 060°. Town C is 150 km from town B on a bearing of 150°. Find the distance and bearing of A from C.

**Draw diagram:**
- From B, A is at 060°
- From B, C is at 150°
- Angle ABC = 150° - 60° = 90°

Using Cosine Rule from A to C:
$$AC^2 = AB^2 + BC^2 - 2(AB)(BC)\cos(\angle ABC)$$
$$AC^2 = 200^2 + 150^2 - 2(200)(150)\cos 90°$$
$$AC^2 = 40000 + 22500 - 0 = 62500$$
$$AC = 250 \text{ km}$$

Using Sine Rule for angle at B in triangle ABC:
$$\frac{\sin(\angle ACB)}{AB} = \frac{\sin(\angle ABC)}{AC}$$
$$\frac{\sin(\angle ACB)}{200} = \frac{\sin 90°}{250}$$
$$\sin(\angle ACB) = \frac{200 \times 1}{250} = 0.8$$
$$\angle ACB = \sin^{-1}(0.8) \approx 53.13°$$

Bearing from C to A = 150° + 53.13° + 180° = 383.13° = 023.13° (since bearings are typically written 000° to 360°)

Actually, need to be more careful. From C, A is in the opposite direction. Let me redo:

From C, direction to B is 330° (150° + 180° = 330°).
Angle from C to A relative to B = 53.13° (as calculated above).
So bearing from C to A = 330° - 53.13° = 276.87° (going the shorter way around).

Wait, we need the bearing of A FROM C. This means we start at C, face North, and rotate clockwise to face A.

Actually let's use: bearing of C from A was 150°. So bearing of A from C is 150° + 180° = 330° ± angle ACB.
Since C is at bearing 150° from A, and AC = 250, AB = 200, BC = 150, angle at A from C direction is given by:
Using triangle: angle CAB = 180° - 53.13° = 126.87°
Bearing of C from A = 150°
So bearing of A from C = 150° + 180° - angle at C = 330° - 53.13° = 276.87° or 330° + 53.13° = 383.13° (same as 023.13°)

The shorter angle is 276.87°, so bearing ≈ 277°.

**3D Trigonometry:**

*Problem*: A vertical pole is held by three wires from the top to points on the ground forming an equilateral triangle of side 10 m. Each wire makes an angle of 60° with the ground. Find the height of the pole.

In 3D, the distance from the centre of the triangle to each anchor point is the same. For an equilateral triangle, the distance from centroid to vertex is:
$$d = \frac{\sqrt{3}}{3} \times \text{side} = \frac{\sqrt{3}}{3} \times 10 = \frac{10\sqrt{3}}{3} \approx 5.77 \text{ m}$$

In right triangle (pole height, wire, ground distance):
$$\sin 60° = \frac{\text{height}}{\text{wire length}}$$
Actually, we need the wire length first. We know ground projection is 5.77 m.
$$h = \text{wire length} \times \sin 60° = \text{wire length} \times \frac{\sqrt{3}}{2}$$

But we also know the wire makes 60° with ground:
$$\tan 60° = \frac{h}{5.77}$$
$$h = 5.77 \times \sqrt{3} = 5.77 \times 1.732 = 10 \text{ m}$$

So the pole is 10 m tall.

**Half-Angle Formulas:**

$$\sin\left(\frac{A}{2}\right) = \sqrt{\frac{(s-b)(s-c)}{bc}}$$
$$\cos\left(\frac{A}{2}\right) = \sqrt{\frac{s(s-a)}{bc}}$$

Where $s = \frac{a+b+c}{2}$ (semi-perimeter)

**Example** using half-angle formulas to find angles when all sides are known:
For triangle with a = 7, b = 5, c = 6:
$$s = \frac{7+5+6}{2} = 9$$
$$\cos\left(\frac{A}{2}\right) = \sqrt{\frac{9 \times (9-7)}{5 \times 6}} = \sqrt{\frac{18}{30}} = \sqrt{0.6} = 0.7746$$
$$\frac{A}{2} = \cos^{-1}(0.7746) = 39.23°$$
$$A = 78.46°$$

**Projection Formulas:**

$$a = b\cos C + c\cos B$$
This is useful when we know angles and want to find components.

**Problem involving angles of elevation/depression:**

*Problem*: From a point on level ground, the angle of elevation to the top of a tower is 30°. After walking 50 m towards the tower, the angle becomes 60°. Find the height of the tower.

Let height = h, initial distance = d
$$\tan 30° = \frac{h}{d} \Rightarrow d = \frac{h}{\tan 30°} = h\sqrt{3}$$

After walking 50 m towards:
$$\tan 60° = \frac{h}{d-50} \Rightarrow d - 50 = \frac{h}{\tan 60°} = \frac{h}{\sqrt{3}}$$

Substituting $d = h\sqrt{3}$:
$$h\sqrt{3} - 50 = \frac{h}{\sqrt{3}}$$
$$h\sqrt{3} - \frac{h}{\sqrt{3}} = 50$$
$$h\left(\sqrt{3} - \frac{1}{\sqrt{3}}\right) = 50$$
$$h\left(\frac{3-1}{\sqrt{3}}\right) = 50$$
$$h \times \frac{2}{\sqrt{3}} = 50$$
$$h = \frac{50\sqrt{3}}{2} = 25\sqrt{3} \approx 43.3 \text{ m}$$

⚡ **WAEC Examination Patterns:** Apply sine rule and cosine rule to find unknown sides and angles. Solve problems involving the ambiguous case (SSA). Calculate areas of triangles using $\frac{1}{2}ab\sin C$. Solve bearing and navigation problems. Solve problems involving angles of elevation and depression. Work with 3D trigonometry problems.
