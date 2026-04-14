---
exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sk-1
topicName: "Physics: Mechanics"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.010908"
diagramPrompt: "Educational diagram illustrating Physics: Mechanics with clear labels, white background, exam-style illustration"

---

# Physics: Mechanics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Mechanics is the branch of physics concerned with the motion of objects and the forces that cause or change that motion. It forms roughly 30–35% of the HAT-UG Physics syllabus. The core topics are **Kinematics** (describing motion) and **Dynamics** (explaining what causes motion).

**Essential Definitions:**

- **Displacement ($s$):** Change in position. A vector quantity (direction matters). Unit: metre (m)
- **Velocity ($v$):** Rate of change of displacement. $v = \frac{\Delta s}{\Delta t}$. Unit: m/s
- **Acceleration ($a$):** Rate of change of velocity. $a = \frac{\Delta v}{\Delta t}$. Unit: m/s²
- **Speed:** Magnitude of velocity (scalar — no direction). Always positive.

**The Five SUVAT Equations** (for constant acceleration):
$$v = u + at$$
$$s = ut + \frac{1}{2}at^2$$
$$v^2 = u^2 + 2as$$
$$s = \frac{(u+v)}{2}t$$
$$s = vt - \frac{1}{2}at^2$$

Where: $u$ = initial velocity, $v$ = final velocity, $a$ = acceleration, $s$ = displacement, $t$ = time.

** Newton's Three Laws of Motion:**
1. **First Law (Inertia):** An object remains at rest or in uniform motion unless acted upon by an external force.
2. **Second Law:** $F = ma$ — Force equals mass times acceleration. 1 Newton = 1 kg·m/s².
3. **Third Law:** For every action, there is an equal and opposite reaction.

**Weight and Mass:**
- Mass ($m$): Intrinsic property of matter. Measured in kg. Scalar.
- Weight ($W$): Force due to gravity. $W = mg$. On Earth, $g = 9.8$ m/s² (often approximated as 10 m/s² in problems).

**⚡ HAT-UG Exam Tip:** In free-fall problems, a dropped object has $u = 0$. An object thrown upward has $a = -g$ (negative because it acts downward while the initial motion is upward). Always draw a quick diagram before writing equations.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and consistent scores.

**Kinematics — Worked Examples:**

**Example 1:** A car accelerates from rest at 2 m/s² for 5 seconds. Find the distance covered.
- $u = 0$, $a = 2$ m/s², $t = 5$ s, $s = ?$
- Using $s = ut + \frac{1}{2}at^2 = 0 + \frac{1}{2}(2)(5)^2 = \frac{1}{2}(2)(25) = 25$ m

**Example 2:** A ball is thrown vertically upward with velocity 20 m/s. Find the maximum height reached. ($g = 10$ m/s²)
- At maximum height, $v = 0$.
- Using $v^2 = u^2 + 2as$: $0 = (20)^2 + 2(-10)s$
- $0 = 400 - 20s$ → $s = 20$ m

**Friction — The Drag Force Opposing Motion:**
$$F_f = \mu R$$
where $\mu$ is the coefficient of friction and $R$ is the normal reaction force.

- **Static friction ($\mu_s$):** Prevents motion from starting. $F_f \leq \mu_s R$ (adjusts to match applied force up to a maximum)
- **Kinetic friction ($\mu_k$):** Opposes motion already in progress. Always less than static friction for the same surfaces.

**Momentum — A Key Conservation Law:**
$$p = mv$$
Momentum is a vector quantity. The principle of conservation of linear momentum states that in a closed system with no external forces, total momentum is constant.

**Impulse:** $J = F \Delta t = \Delta p$ (change in momentum). This is why airbags and crumple zones work — they increase the time of impact, reducing the average force on passengers.

**Work, Energy, and Power:**
- Work done: $W = Fs \cos\theta$ (where $\theta$ is angle between force and displacement). Unit: Joule (J)
- Kinetic Energy: $KE = \frac{1}{2}mv^2$
- Potential Energy (gravitational): $PE = mgh$
- **Conservation of Mechanical Energy:** In the absence of non-conservative forces, $KE_i + PE_i = KE_f + PE_f$
- Power: $P = \frac{W}{t} = Fv$ (rate of doing work). Unit: Watt (W)

**⚡ Standard Study Tip:** Draw a free-body diagram for every dynamics problem. Label all forces: weight ($mg$ downward), normal reaction ($R$ upward/perpendicular to surface), applied force, friction. Then apply Newton's second law ($F_{net} = ma$) in the relevant direction. This systematic approach prevents missed forces.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory with derivations, historical context, and exam patterns.

**Derivation of SUVAT Equations:**

The SUVAT equations follow directly from the definitions of velocity and acceleration.

From $a = \frac{\Delta v}{\Delta t} = \frac{v-u}{t}$ (for constant $a$), we get:
$$v = u + at \quad \text{...(1)}$$

Average velocity $\bar{v} = \frac{u+v}{2}$. Since $s = \bar{v} \cdot t$:
$$s = \frac{u+v}{2} \cdot t \quad \text{...(2)}$$

Substituting equation (1) into (2) to eliminate $v$:
$$s = \frac{u + (u+at)}{2} \cdot t = \frac{2u + at}{2} \cdot t = ut + \frac{1}{2}at^2 \quad \text{...(3)}$$

Substituting $v = u + at$ into $v^2 = u^2 + 2a(ut + \frac{1}{2}at^2) - at \cdot u$ gives the algebraic derivation of $v^2 = u^2 + 2as$ (the fourth equation).

**Projectile Motion — A Two-Dimensional Application:**

A projectile launched at angle $\theta$ to the horizontal with speed $u$ has:
- Horizontal component: $u_x = u \cos\theta$
- Vertical component: $u_y = u \sin\theta$

**Key results:**
- Time of flight: $T = \frac{2u \sin\theta}{g}$
- Maximum height: $H = \frac{u^2 \sin^2\theta}{2g}$
- Range: $R = \frac{u^2 \sin 2\theta}{g}$

**Derivation of maximum range:**
Range $R = u \cos\theta \cdot T = u \cos\theta \cdot \frac{2u\sin\theta}{g} = \frac{u^2 \sin 2\theta}{g}$
Maximum $\sin 2\theta = 1$ when $2\theta = 90° \Rightarrow \theta = 45°$.
Maximum range on level ground = $\frac{u^2}{g}$ at $\theta = 45°$.

**Circular Motion — Angular Quantities:**
- Angular displacement: $\theta$ (radians)
- Angular velocity: $\omega = \frac{\Delta\theta}{\Delta t}$ (rad/s)
- Linear velocity: $v = \omega r$
- Centripetal acceleration: $a_c = \frac{v^2}{r} = \omega^2 r$
- Centripetal force: $F_c = \frac{mv^2}{r} = m\omega^2 r$

**Newton's Law of Gravitation:**
$$F = \frac{Gm_1 m_2}{r^2}$$
where $G = 6.674 \times 10^{-11}$ N m²/kg².

**HAT-UG Mechanics — Past Year Patterns (2019–2024):**
- SUVAT equations: 2–3 questions per paper, usually as word problems
- Projectile motion: 1 question, often about maximum height or range
- Newton's laws and friction: 1–2 questions
- Work-energy theorem: 1 question
- Momentum conservation: 1 question (often collision-based)
- Circular motion: 1 question (rare, usually for high-scorers)

**⚡ HAT-UG Advanced Strategy:** Memorise the four most important derived equations: $s = ut + \frac{1}{2}at^2$, $v = u + at$, $v^2 = u^2 + 2as$, and $F = ma$. These cover 80% of mechanics questions. For projectile problems, always split into horizontal and vertical components — never try to solve 2D projectile motion as a scalar problem.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
