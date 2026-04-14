---
exam: waec
examName: WAEC WASSCE
subject: physics
subjectName: Physics
topic: phy-2
topicName: "Kinematics: Motion in a Straight Line"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.628192"
diagramPrompt: "Clean educational diagram showing Kinematics: Motion in a Straight Line with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"

---

# "Kinematics: Motion in a Straight Line"

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your WAEC exam.

**Key Definitions:**
- **Distance**: Total path length travelled (scalar, always positive)
- **Displacement**: Change in position (vector, can be positive or negative)
- **Speed**: Distance/time (scalar)
- **Velocity**: Displacement/time (vector)
- **Acceleration**: Change in velocity/time (vector)

**Units:**
- Distance/displacement: metre (m)
- Speed/velocity: metre per second (m/s)
- Acceleration: metre per second squared (m/s²)

**Core Equations (Constant Acceleration):**

$$v = u + at$$

$$s = ut + \frac{1}{2}at^2$$

$$v^2 = u^2 + 2as$$

$$s = \frac{(u+v)}{2}t$$

Where:
- $u$ = initial velocity
- $v$ = final velocity
- $s$ = displacement
- $a$ = acceleration
- $t$ = time

⚡ **WAEC Tip**: Choose your equation based on what's given and what's asked. If you have $u, v, a$ but not $t$, use $v^2 = u^2 + 2as$. If you have $u, a, t$ but not $v$, use $s = ut + \frac{1}{2}at^2$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Motion Under Gravity:**
- $g = 9.8\,\text{m/s}^2$ (or $10\,\text{m/s}^2$ for approximations)
- Objects fall with constant acceleration $g$ (ignoring air resistance)
- Upward motion: acceleration = $-g$ (velocity decreases)
- Downward motion: acceleration = $+g$ (velocity increases)

**Upward Projection:**
- At maximum height: $v = 0$
- Time to reach height $h$: $t = \frac{v - u}{-g}$; solve $h = ut - \frac{1}{2}gt^2$

**Free Fall:**
- If dropped: $u = 0$, so $v = gt$, $s = \frac{1}{2}gt^2$
- Time to fall height $h$: $t = \sqrt{\frac{2h}{g}}$

**Worked Example 1:**
A car accelerates from rest at $2\,\text{m/s}^2$ for $5\,\text{s}$, then continues at constant velocity for $10\,\text{s}$. Find total distance covered.

Solution:
- Phase 1: $u = 0$, $a = 2$, $t = 5$
  - $s_1 = 0 + \frac{1}{2}(2)(25) = 25\,\text{m}$
  - $v = 0 + 2(5) = 10\,\text{m/s}$
- Phase 2: $u = 10$, $a = 0$, $t = 10$
  - $s_2 = 10 \times 10 = 100\,\text{m}$
- Total: $s = 25 + 100 = 125\,\text{m}$

**Worked Example 2:**
A ball is thrown vertically upward with velocity $30\,\text{m/s}$. Find:
1. Maximum height reached
2. Time to return to starting point

Solution:
1. At max height, $v = 0$: $0 = 900 - 2(10)h \Rightarrow h = 45\,\text{m}$
2. Time up = $v = u - gt$: $0 = 30 - 10t \Rightarrow t = 3\,\text{s}$
   Total time = $3 + 3 = 6\,\text{s}$

**Relative Velocity:**
If two objects move in the same direction with velocities $v_1$ and $v_2$, relative velocity of 1 with respect to 2 = $v_1 - v_2$.

If moving in opposite directions, relative velocity = $v_1 + v_2$.

⚡ **Common Mistake**: Students confuse distance with displacement. Distance is always positive; displacement can be negative. Average speed = total distance/total time, but average velocity = total displacement/total time.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious exam preparation.

**Graphical Analysis of Motion:**

**Displacement-Time Graph:**
- Gradient = velocity
- Horizontal line = zero velocity
- Curved line = changing velocity (acceleration)
- Velocity = $\frac{\Delta s}{\Delta t}$ (slope of tangent)

**Velocity-Time Graph:**
- Gradient = acceleration
- Area under graph = displacement
- Horizontal line at zero = constant velocity
- Area below time axis = negative displacement

**Acceleration-Time Graph:**
- Area under graph = change in velocity
- For constant acceleration, this is a horizontal line

**Graphical Worked Example:**
A car starts from rest, accelerates at $4\,\text{m/s}^2$ for $3\,\text{s}$, then travels at constant speed for $4\,\text{s}$, then decelerates at $2\,\text{m/s}^2$ until stopping.

1. Max velocity = $0 + 4(3) = 12\,\text{m/s}$
2. Distance in acceleration phase = $\frac{1}{2}(12)(3) = 18\,\text{m}$
3. Distance in constant phase = $12 \times 4 = 48\,\text{m}$
4. Deceleration time: $0 = 12 - 2t \Rightarrow t = 6\,\text{s}$
5. Distance in deceleration = $\frac{1}{2}(12)(6) = 36\,\text{m}$
6. Total distance = $18 + 48 + 36 = 102\,\text{m}$

**Non-Uniform Acceleration:**

For uniformly varying acceleration:
$$s = ut + \frac{1}{2}at^2 \text{ (same as constant acceleration)}$$

For non-uniform, calculus is needed:
$$v = \frac{ds}{dt}, \quad a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

**Velocity from Acceleration Graph:**
$$v_f = v_i + \int_{0}^{t} a(t)\,dt$$

**Simple Harmonic Motion (One-Dimensional):**

For motion where $a = -\omega^2 x$:
- $x = A\sin(\omega t)$ or $x = A\cos(\omega t)$
- $v = A\omega\cos(\omega t)$
- Maximum velocity = $A\omega$
- Maximum acceleration = $A\omega^2$

⚡ **WAEC Previous Year Questions:**

| Year | Question Type | Concept Tested |
|------|--------------|----------------|
| 2023 | Numerical | SUVAT equations, free fall |
| 2022 | Graphical | Velocity-time graph interpretation |
| 2021 | Numerical | Relative velocity |
| 2020 | Numerical | Projectile motion |

**Motion with Air Resistance:**

For an object falling with air resistance proportional to velocity:
- Terminal velocity reached when $mg = kv$
- $v = v_t(1 - e^{-kt/m})$
- For small objects, air resistance is often ignored in WAEC problems

**Vectors in One Dimension:**

- Positive direction chosen as +x
- Velocity in opposite direction = negative
- Adding vectors: $v_{\text{net}} = v_1 + v_2 + ...$
- Resultant velocity is sum accounting for direction

⚡ **Exam Strategy**: Always define your positive direction. Write down all given quantities with their units. Check that your answer has correct units. For "find the distance" questions, ensure you calculate total path length, not net displacement.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
