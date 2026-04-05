---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-2
topicName: Kinematics
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.079991"
diagramPrompt: Clean educational diagram showing Kinematics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Kinematics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT exam.

**Key Definitions:**
- **Distance**: Total path length travelled (scalar, ≥ 0)
- **Displacement**: Change in position (vector, can be negative/positive)
- **Speed**: Distance/time (scalar)
- **Velocity**: Displacement/time (vector)
- **Acceleration**: Rate of change of velocity

**Equations of Motion (Constant Acceleration):**

$$v = u + at$$

$$s = ut + \frac{1}{2}at^2$$

$$v^2 = u^2 + 2as$$

$$s = \frac{u+v}{2}t$$

Where:
- $u$ = initial velocity (m/s)
- $v$ = final velocity (m/s)
- $s$ = displacement (m)
- $a$ = acceleration (m/s²)
- $t$ = time (s)

⚡ **MDCAT Tip**: Choose the right equation based on what's given. If no time is given, use $v^2 = u^2 + 2as$. If acceleration is zero, $v = u$ and $s = ut$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Motion Under Gravity:**

For objects in free fall (ignoring air resistance):
- $g = 9.8\,\text{m/s}^2$ downward (≈ $10\,\text{m/s}^2$ for approximations)
- Upward motion: $a = -g$
- Downward motion: $a = +g$

**For upward projection:**
- At maximum height: $v = 0$
- $v = u - gt = 0$ at max height
- Time to maximum height $t = u/g$

**For freely falling body (dropped from rest, $u = 0$):**
- $v = gt$
- $s = \frac{1}{2}gt^2$
- $t = \sqrt{\frac{2s}{g}}$

**Worked Example:**
A ball is thrown vertically upward with $30\,\text{m/s}$. Find:
1. Maximum height
2. Time to return to starting point

Solution:
1. Using $v^2 = u^2 - 2gh$ (upward, so $a = -g$):
   $0 = 900 - 2(10)h$
   $h = 45\,\text{m}$

2. Time up = $u/g = 30/10 = 3\,\text{s}$
   Time down = same as time up = $3\,\text{s}$ (in vacuum)
   Total = $6\,\text{s}$

**Graphical Analysis:**

**Displacement-Time Graph:**
- Gradient = velocity
- Curved line → changing velocity
- Steeper slope → higher velocity

**Velocity-Time Graph:**
- Gradient = acceleration
- Area under graph = displacement
- Negative area (below time axis) = negative displacement

**Acceleration-Time Graph:**
- Area = change in velocity

⚡ **Common Mistake**: Confusing distance with displacement. Distance is the total path length and always positive. Displacement is the shortest path between start and end points and can be negative.

**Relative Velocity:**

If two objects move in the same direction with velocities $v_A$ and $v_B$:
$$v_{A/B} = v_A - v_B$$ (velocity of A relative to B)

If in opposite directions:
$$v_{A/B} = v_A + v_B$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious exam preparation.

**Projectile Motion:**

For motion in a plane with constant $g$:

**Horizontal component:** $a_x = 0$, so $v_x = u\cos\theta$ (constant)
$$x = (u\cos\theta)t$$

**Vertical component:** $a_y = -g$, so $v_y = u\sin\theta - gt$
$$y = (u\sin\theta)t - \frac{1}{2}gt^2$$

**At maximum height:** $v_y = 0$

**Time of flight:** $T = \frac{2u\sin\theta}{g}$

**Maximum height:** $H = \frac{u^2\sin^2\theta}{2g}$

**Range:** $R = \frac{u^2\sin 2\theta}{g}$

**Key Result:** For fixed launch speed $u$, maximum range occurs at $\theta = 45°$:
$$R_{\max} = \frac{u^2}{g}$$

**Worked Example:**
A projectile is fired at $100\,\text{m/s}$ at $30°$ to the horizontal. Find:
1. Time of flight
2. Maximum height
3. Range

Solution:
1. $T = \frac{2(100)\sin 30°}{10} = \frac{200(0.5)}{10} = 10\,\text{s}$
2. $H = \frac{100^2 \times (0.5)^2}{20} = \frac{10000 \times 0.25}{20} = 125\,\text{m}$
3. $R = \frac{100^2 \times \sin 60°}{10} = \frac{10000 \times 0.866}{10} = 866\,\text{m}$

**Uniform Circular Motion:**

For an object moving in a circle of radius $r$ with constant speed $v$:
- Angular velocity: $\omega = \frac{v}{r} = \frac{2\pi}{T}$
- Period: $T = \frac{2\pi r}{v}$
- Frequency: $f = \frac{1}{T}$

**Centripetal Acceleration:** $a_c = \frac{v^2}{r} = \omega^2 r$

**Centripetal Force:** $F_c = \frac{mv^2}{r} = m\omega^2 r$

⚡ **MDCAT Pattern:**

| Year | Question | Concept |
|------|----------|---------|
| 2023 | Projectile motion | Range/height calculation |
| 2022 | Velocity-time graph | Area = displacement |
| 2021 | Relative velocity | Moving observer |

**Non-Uniform Circular Motion:**

When speed is changing:
- Tangential acceleration: $a_t = \frac{dv}{dt}$
- Total acceleration: $a = \sqrt{a_c^2 + a_t^2}$
- Direction of $a$ is NOT toward centre

**Simple Harmonic Motion (SHM):**

For motion where $a = -\omega^2 x$:
- $x = A\cos(\omega t + \phi)$
- $v = -A\omega\sin(\omega t + \phi)$
- $a = -A\omega^2\cos(\omega t + \phi)$
- Period: $T = \frac{2\pi}{\omega}$ (independent of amplitude!)

**SHM and Circular Motion:**
SHM is the projection of uniform circular motion onto one axis.

**Velocity in SHM:**
$$v = \omega\sqrt{A^2 - x^2}$$

Maximum velocity at $x = 0$: $v_{\max} = \omega A$

**Acceleration in SHM:**
$$a = -\omega^2 x$$

Maximum acceleration at $x = ±A$: $a_{\max} = \omega^2 A$

⚡ **Exam Strategy**: Always start by defining your positive direction. Draw diagrams for projectile problems, showing initial velocity components. For circular motion, remember centripetal force is directed toward the centre — there's no outward force (centrifugal is a "pseudo-force" in rotating frames).

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
