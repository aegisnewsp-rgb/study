---
exam: nabteb
examName: NABTEB
subject: physics
subjectName: Physics
topic: phy-2
topicName: Kinematics and Graphical Analysis
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.556003"
diagramPrompt: "Clean educational diagram showing Kinematics and Graphical Analysis with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"

---

# Kinematics and Graphical Analysis

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary of kinematics and graphical analysis for NABTEB physics.

**Kinematics** is the study of motion without considering the forces that cause it. This topic covers motion in a straight line.

**Key Quantities:**

| Quantity | Symbol | Unit | Type |
|----------|--------|------|------|
| Distance | $s$ | metre (m) | Scalar |
| Displacement | $s$ | metre (m) | Vector |
| Speed | $v$ | m/s | Scalar |
| Velocity | $v$ | m/s | Vector |
| Acceleration | $a$ | m/s² | Vector |
| Time | $t$ | second (s) | Scalar |

**Equations of Motion (for uniform acceleration):**
1. $v = u + at$
2. $s = ut + \frac{1}{2}at^2$
3. $v^2 = u^2 + 2as$
4. $s = \frac{(u + v)}{2}t$

Where: $u$ = initial velocity, $v$ = final velocity, $a$ = acceleration, $s$ = displacement, $t$ = time.

**Key Concepts:**
- **Uniform velocity:** Equal displacements in equal time intervals
- **Uniform acceleration:** Equal changes in velocity in equal time intervals
- **Free fall:** Motion under gravity alone; $a = g = 9.8 \, \text{m/s}^2$ (downward)
- **Projectile motion:** Motion under gravity with initial horizontal velocity

**Graphs of Motion:**

**Displacement-Time Graph:**
- Gradient = velocity
- Straight line = uniform velocity
- Curved line = changing velocity

**Velocity-Time Graph:**
- Gradient = acceleration
- Area under graph = displacement
- Horizontal line = uniform velocity

**Acceleration-Time Graph:**
- Area under graph = change in velocity

⚡ **NABTEB Exam Tip:** In velocity-time graph questions, ALWAYS find displacement by calculating the AREA under the graph — even for curved graphs. Break the area into triangles and rectangles for easier calculation.

---

### 🟡 Standard — Regular Study (2d–2mo)

> For NABTEB students who want thorough understanding of kinematics and graphical analysis.

**Understanding the Equations of Motion:**

**Derivation of $v = u + at$:**
By definition of uniform acceleration:
$$a = \frac{v - u}{t}$$
Rearranging: $v = u + at$

**Derivation of $s = ut + \frac{1}{2}at^2$:**
Average velocity $= \frac{u + v}{2}$ (for uniform acceleration)
Displacement $s = \text{average velocity} \times \text{time} = \frac{u + v}{2}t$
Substituting $v = u + at$:
$$s = \frac{u + (u + at)}{2}t = \frac{2u + at}{2}t = ut + \frac{1}{2}at^2$$

**Derivation of $v^2 = u^2 + 2as$:**
From $s = \frac{(u + v)}{2}t$ and $t = \frac{v - u}{a}$:
$$s = \frac{(u + v)}{2} \times \frac{(v - u)}{a} = \frac{v^2 - u^2}{2a}$$
Rearranging: $v^2 = u^2 + 2as$

**Sign Convention:**
- Take the direction of motion as positive
- If acceleration is in the same direction as velocity, $a$ is positive
- If acceleration opposes motion (deceleration), $a$ is negative

**Free Fall:**
When an object is dropped: $u = 0$, $a = +g = 9.8 \, \text{m/s}^2$ (downward)
When an object is thrown upward: $u$ is positive (upward), $a = -g = -9.8 \, \text{m/s}^2$ (downward)

Time to maximum height (for object thrown upward with velocity $u$):
$$t = \frac{u}{g}$$

Maximum height:
$$h = \frac{u^2}{2g}$$

**Projectile Motion:**

An object thrown horizontally from height $h$ with speed $u$:
- Horizontal motion: constant velocity $u_x = u$ (no acceleration in horizontal direction)
- Vertical motion: starts at $u_y = 0$, accelerates at $g = 9.8 \, \text{m/s}^2$ downward

**Time of flight** (for horizontal projectile from height $h$):
$$t = \sqrt{\frac{2h}{g}}$$

**Range** (horizontal distance):
$$R = u \times t = u\sqrt{\frac{2h}{g}}$$

**Graphical Analysis — Detailed:**

**Displacement-Time Graph:**
- Slope at any point = instantaneous velocity
- Positive slope = moving in positive direction
- Negative slope = moving in negative direction
- Zero slope = at rest
- Curving upward = accelerating
- Curving downward = decelerating

**Velocity-Time Graph:**
- Slope at any point = instantaneous acceleration
- Area above time axis = positive displacement
- Area below time axis = negative displacement
- Zero slope = zero acceleration (constant velocity)

**Acceleration-Time Graph:**
- Zero everywhere = constant velocity
- Positive value = increasing velocity in positive direction
- Negative value = decreasing velocity (or increasing in negative direction)

**Motion in a Circle:**

For an object moving in a circle with constant speed:
- Velocity constantly changes direction (so it IS accelerating)
- Centripetal acceleration: $a_c = \frac{v^2}{r} = \omega^2 r$
- Centripetal force: $F_c = \frac{mv^2}{r} = m\omega^2 r$

**⚡ NABTEB Exam Tip:** When solving projectile motion problems, always treat horizontal and vertical components separately. Horizontal motion has constant velocity; vertical motion has constant acceleration $g = 9.8 \, \text{m/s}^2$.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage of kinematics for NABTEB students preparing for exams.

**Derivation Using Calculus:**

With calculus, kinematics becomes more elegant:

Velocity is the rate of change of displacement:
$$v = \frac{ds}{dt}$$

Acceleration is the rate of change of velocity:
$$a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

From these definitions, we can derive all equations:

Starting with $a = \frac{dv}{dt}$:
$$dv = a \, dt$$
Integrating: $\int_{u}^{v} dv = a \int_{0}^{t} dt$
$\Rightarrow v - u = at$
$\Rightarrow v = u + at$

Starting with $v = \frac{ds}{dt}$:
$$ds = v \, dt = (u + at) \, dt$$
Integrating: $\int_{0}^{s} ds = \int_{0}^{t} (u + at) \, dt$
$\Rightarrow s = ut + \frac{1}{2}at^2$

**Relative Motion:**

If two objects A and B move with velocities $v_A$ and $v_B$ (in the same direction):
- Relative velocity of A with respect to B: $v_{AB} = v_A - v_B$
- Relative velocity of B with respect to A: $v_{BA} = v_B - v_A$

**Non-Horizontal Projectile Motion:**

For a projectile launched at angle $\theta$ to the horizontal with speed $u$:
- Horizontal component: $u_x = u \cos\theta$
- Vertical component: $u_y = u \sin\theta$

**Time of flight:**
$$T = \frac{2u \sin\theta}{g}$$

**Maximum height:**
$$H = \frac{u^2 \sin^2\theta}{2g}$$

**Range (horizontal distance):**
$$R = \frac{u^2 \sin 2\theta}{g}$$

**Key Observations:**
- Range is maximum when $\theta = 45°$ (since $\sin 2\theta = 1$ at $2\theta = 90°$)
- Complementary angles give the same range (e.g., $30°$ and $60°$)
- Time of flight depends only on vertical component and $g$
- Maximum height depends only on vertical component and $g$

**Condition for Circular Motion:**

An object moving in a circle of radius $r$ with speed $v$ requires a centripetal force:
$$F_c = \frac{mv^2}{r}$$

If this force is removed, the object flies off tangentially (tangent to the circle at the point of release) — Newton's First Law.

**Vertical Circular Motion:**

For an object in vertical circular motion (like a roller coaster):
- At the bottom: $T - mg = \frac{mv^2}{r}$ (tension must exceed weight)
- At the top: $T + mg = \frac{mv^2}{r}$ (tension adds to weight)
- Minimum speed at top to complete circle: $v_{\min} = \sqrt{gr}$
- Minimum speed at bottom to complete loop: $v_{\min} = \sqrt{5gr}$

**Graphical Analysis — Non-Uniform Motion:**

For curved displacement-time graphs:
- The slope at any point gives instantaneous velocity
- To find acceleration, plot the velocity-time graph from the slope of the s-t graph

For curved velocity-time graphs:
- Plot acceleration against time by finding the slope of the v-t graph
- Area under a-t graph gives change in velocity (not displacement)

**Average Velocity vs Average Speed:**

- Average velocity = total displacement ÷ total time (vector)
- Average speed = total distance ÷ total time (scalar)

For a journey with multiple segments:
$$\bar{v} = \frac{s_1 + s_2 + s_3}{t_1 + t_2 + t_3}$$

**⚡ NABTEB Quick Reference:**
- $v = u + at$
- $s = ut + \frac{1}{2}at^2$
- $v^2 = u^2 + 2as$
- $s = \frac{(u+v)}{2}t$
- Free fall: $u = 0$, $a = g = 9.8 \, \text{m/s}^2$
- Projectile (horizontal): $t = \sqrt{\frac{2h}{g}}$, $R = u\sqrt{\frac{2h}{g}}$
- Projectile (angle $\theta$): $T = \frac{2u\sin\theta}{g}$, $R = \frac{u^2\sin 2\theta}{g}$
- Circular: $a_c = \frac{v^2}{r} = \omega^2 r$
