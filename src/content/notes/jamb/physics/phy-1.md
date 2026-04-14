---



exam: jamb
examName: JAMB UTME
subject: physics
subjectName: Physics
topic: phy-1
topicName: Motion in One Dimension
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.706683"
diagramPrompt: "Clean educational diagram showing Motion in One Dimension with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---
# Motion in One Dimension

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Motion in One Dimension** — Key Facts

**Kinematics Quantities:**
- Displacement ($s$): Change in position (vector, m)
- Velocity ($v$): Rate of change of displacement (m/s)
- Acceleration ($a$): Rate of change of velocity (m/s²)
- Average velocity: $v_{avg} = (u + v)/2$ (for constant acceleration)
- Instantaneous velocity: $v = ds/dt$, $a = dv/dt$

**Equations of Motion (constant acceleration):**
1. $v = u + at$
2. $s = ut + \frac{1}{2}at^2$
3. $v^2 = u^2 + 2as$
4. $s = \frac{(u+v)}{2}t$ (average velocity × time)

Where $u$ = initial velocity, $v$ = final velocity, $a$ = acceleration, $s$ = displacement, $t$ = time.

**Freely Falling Body:**
For objects dropped near Earth's surface (ignoring air resistance): $a = g = 9.8$ m/s² downward. For upward throw, $a = -g$. Velocity at maximum height = 0.

⚡ **Exam tip:** Sign convention matters! If upward is positive, then $g = -9.8$ m/s². Many JAMB errors come from inconsistent sign conventions.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Motion in One Dimension** — JAMB UTME Study Guide

**Graphical Analysis:**
- **Position-time graph:** Slope = velocity. If slope is positive, object moving in positive direction. Horizontal line (slope = 0) means at rest. Curved line means changing velocity (acceleration).
- **Velocity-time graph:** Slope = acceleration. Area under the graph = displacement. If graph is above the time axis, displacement is positive.
- **Acceleration-time graph:** Area under graph = change in velocity.

Example: An object moving with $u = 10$ m/s, $a = -2$ m/s². After 8 s: $v = 10 + (-2)(8) = -6$ m/s. It has reversed direction. $s = (10)(-6)/2 + \frac{1}{2}(-2)(8)^2 = 20 - 64 = -44$ m (in negative direction).

**Relative Velocity:**
If two objects A and B move along the same line with velocities $v_A$ and $v_B$, the velocity of A relative to B is $v_{AB} = v_A - v_B$. If both move in the same direction, $v_{AB}$ is the difference. If opposite directions, $v_{AB} = v_A + v_B$.

**Projectile Motion (vertical component):**
- Time of flight: $T = 2u\sin\theta/g$
- Maximum height: $H = u^2\sin^2\theta/(2g)$
- Range: $R = u^2\sin 2\theta/g$
- For a body thrown upward from height $h$ with speed $u$: $t_{total} = (u/g) + \sqrt{(2h/g) + (u^2/g^2)}$

**Terminal Velocity:**
When a falling object reaches constant velocity (drag force = weight): $mg = \rho_{fluid} C_D A v_t^2/2$. For a sphere: $v_t = \sqrt{2mg/(\rho C_D A)}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Motion in One Dimension** — Comprehensive Physics Notes

**Kinematics — Full Derivation:**

From the definition of acceleration: $a = \frac{dv}{dt}$. Separating variables: $dv = a \cdot dt$. Integrating from $t = 0$ to $t = t$: $\int_u^v dv = a\int_0^t dt$ gives $v - u = at$. So $v = u + at$. ✓

Displacement: $v = \frac{ds}{dt}$, so $ds = v \cdot dt = (u + at)dt$. Integrating: $s = ut + \frac{1}{2}at^2$. ✓

Eliminating $t$: From $v = u + at$, $t = (v - u)/a$. Substituting: $s = u(v-u)/a + \frac{1}{2}a(v-u)^2/a^2 = (uv - u^2)/a + (v^2 - 2uv + u^2)/(2a) = (2uv - 2u^2 + v^2 - 2uv + u^2)/(2a) = (v^2 - u^2)/(2a)$. Hence $v^2 = u^2 + 2as$. ✓

**Average Velocity Derivation:**
For constant acceleration, $v_{avg} = \frac{s}{t} = \frac{ut + \frac{1}{2}at^2}{t} = u + \frac{1}{2}at = \frac{u + (u+at)}{2} = \frac{u+v}{2}$. This only equals $(u+v)/2$ for constant acceleration.

**Free Fall Equations:**
A body dropped from rest ($u = 0$): $s = \frac{1}{2}gt^2$, $v = gt$, $v^2 = 2gs$. A body thrown upward from ground: $v^2 = u^2 - 2gs$ (note the minus sign because $g$ acts downward).

**Numericals — JAMB Style:**

Q1: A ball is thrown vertically upward with 20 m/s. How high does it go?
$v^2 = u^2 - 2gh$; at max height $v = 0$. So $0 = 400 - 2(10)h$. $h = 400/20 = 20$ m.

Q2: A car accelerates from 10 m/s to 30 m/s in 8 s. Distance covered?
$a = (30-10)/8 = 2.5$ m/s². $s = ut + \frac{1}{2}at^2 = 10(8) + \frac{1}{2}(2.5)(64) = 80 + 80 = 160$ m.

Q3: A body dropped from a tower falls 45 m in the last 2 s. Find height of tower.
Let total time = $t$. Distance in time $t$: $s_1 = \frac{1}{2}gt^2$. Distance in time $(t-2)$: $s_2 = \frac{1}{2}g(t-2)^2$. Last 2 s distance: $s_1 - s_2 = 45$. $\frac{1}{2}(10)[t^2 - (t-2)^2] = 45$. $5[4t - 4] = 45$. $20t - 20 = 45$. $t = 3.25$ s. Height $s_1 = \frac{1}{2}(10)(3.25)^2 = 52.8$ m.

**Frame of Reference:**
Motion is always relative to an observer. If you're on a train moving at 20 m/s and throw a ball forward at 10 m/s relative to the train, the ball's velocity relative to the ground is 30 m/s (if same direction) or 10 m/s (if opposite).

**JAMB Common Mistakes:**
1. Confusing distance with displacement (scalar vs vector)
2. Using $v = u + at$ when acceleration is not constant
3. Wrong sign for $g$ in upward motion
4. Confusing time of flight with time to maximum height (time to max = half of total time of flight for symmetric launch)
5. Using range formula $R = u^2\sin 2\theta/g$ for horizontal projection only

**Dimensional Analysis:**
$[v] = LT^{-1}$, $[a] = LT^{-2}$, $[s] = L$. The equation $v^2 = u^2 + 2as$ is dimensionally correct. $s = ut + \frac{1}{2}at^2$ is dimensionally correct because $ut$ has dimensions $L$ and $at^2$ also has dimensions $LT^{-2} \cdot T^2 = L$.

---


---
## 📊 JAMB Exam Essentials

| Detail | Value |
|---|---|
| Questions | 180 MCQs (UTME) |
| Subjects | 4 subjects (language + 3 for course) |
| Time | 2 hours |
| Marking | +1 per correct answer |
| Score | 400 max (used for university admission) |
| Registration | January – February each year |

### 🎯 High-Yield Topics for JAMB
- Use of English (Grammar + Comprehension) — 60 marks
- Biology for Science students — 40 marks
- Chemistry (Organic + Physical) — 40 marks
- Physics (Mechanics + Optics) — 35 marks
- Mathematics (Algebra + Geometry) — 40 marks

### 📝 Previous Year Question Patterns
- Q: "The process of photosynthesis requires..." [2024 Biology]
- Q: "The electronic configuration of Fe is..." [2024 Chemistry]
- Q: "Find the value of x if 2x + 5 = 15..." [2024 Mathematics]

### 💡 Pro Tips
- Use of English carries the most weight — master grammar rules and comprehension strategies
- JAMB syllabus is your Bible — questions come directly from it. Download and use it.
- Past questions are highly predictive — repeat patterns appear every year
- For Science students, Biology and Chemistry are high-scoring if you study NCERT-level content

### 🔗 Official Resources
- [JAMB Official](https://www.jamb.gov.ng/)
- [JAMB Syllabus](https://www.jamb.gov.ng/syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
