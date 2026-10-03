---
exam: acsee
examName: "ACSEE (Tanzania)"
subject: physics
subjectName: "Physics"
topic: physic-001
topicName: "Mechanics"
weight: 5
country: tanzania
generated: "2026-09-25T12:15:00"
lastUpdated: "2026-09-25"
---
# Mechanics — ACSEE (Tanzania)

Mechanics is the largest single block on the ACSEE Physics syllabus. In the NECTA 131/1 paper it accounts for roughly one quarter of the marks, and the related items from the Questions/structured parts of 131/2 also draw on the same mechanics core. The exam tests the kinematics and dynamics toolkit you built at O-Form plus the harder applications: projectiles launched from a height, energy methods on inclined planes, momentum in two dimensions, and simple rotational motion. The assumptions are idealised (negligible air resistance, inextensible strings, point masses) unless the question says otherwise, and units must be SI throughout.

> Verify the live syllabus, examination format, and any in-year changes on https://necta.go.tz before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)
> Survive the first paper with the toolkit you already half-remember.

**Distance vs displacement (vector check):**
- Displacement $s$ is shortest path from start to end (vector, m).
- Distance is the actual path length (scalar, m).
- Speed = distance/time; velocity = displacement/time.

**SUVAT equations (constant acceleration, straight line):**
- $v = u + at$
- $s = ut + \tfrac{1}{2}at^2$
- $v^2 = u^2 + 2as$
- $s = \tfrac{1}{2}(u+v)t$

Use these only when acceleration is constant; otherwise go back to $a = dv/dt$.

**Newton's three laws in exam-tough form:**
1. Body continues at constant velocity unless acted on by a net force.
2. $\mathbf{F}_{net} = m\mathbf{a}$ (vector form; draw a free-body diagram first).
3. Action equals reaction; pairs act on different bodies.

**Work, energy, power:**
- $W = Fs\cos\theta$
- $KE = \tfrac{1}{2}mv^2$; $PE = mgh$ near Earth's surface.
- $P = Fv = W/t$ (W, not the same $W$ as work — pick the symbol the question uses).

**Momentum:**
- $\mathbf{p} = m\mathbf{v}$ (vector).
- Impulse $\mathbf{J} = \mathbf{F}\Delta t = \Delta\mathbf{p}$.
- For 1-D elastic collisions of equal masses, velocities exchange.

⚡ **Exam tip:** Always write units in the answer. A correct number with no unit loses a follow-on mark.

---

### 🟡 Standard — Exam Prep (3d-3w)
> Build the muscle memory to clear the bulk of NECTA 131/1 without panic.

**Projectile motion in two parts.** Split the motion into independent horizontal and vertical components.

- Horizontal: $a_x = 0$, so $x = u\cos\theta \cdot t$ and $v_x = u\cos\theta$.
- Vertical: $a_y = -g$, so $v_y = u\sin\theta - gt$ and $y = u\sin\theta \cdot t - \tfrac{1}{2}gt^2$.
- Time to max height: $t_h = u\sin\theta/g$.
- Total time of flight from ground: $T = 2u\sin\theta/g$.
- Range on level ground: $R = u^2 \sin 2\theta / g$.
- Maximum height: $H = u^2\sin^2\theta / (2g)$.

For launches from a cliff of height $h$, do not use $T = 2u\sin\theta/g$. Solve $0 = u\sin\theta\cdot t - \tfrac{1}{2}gt^2 + h$ for $t>0$.

**Worked example 1 — projectile from a cliff.** A stone leaves a cliff 20 m above sea level at 15 m/s at 30° above horizontal. Find the time to hit the water and the horizontal distance.
- $u_x = 15\cos30° = 12.99$ m/s, $u_y = 15\sin30° = 7.5$ m/s.
- $-20 = 7.5t - \tfrac{1}{2}(9.8)t^2 \Rightarrow 4.9t^2 - 7.5t - 20 = 0$.
- $t = (7.5 + \sqrt{56.25 + 392})/9.8 = (7.5 + 21.17)/9.8 = 2.93$ s.
- $x = 12.99 \times 2.93 \approx 38.1$ m.

**Inclined plane mechanics.** Draw the free-body diagram with axes parallel and perpendicular to the slope. Resolve weight $mg$ into $mg\sin\theta$ down the plane and $mg\cos\theta$ into the slope. Friction force $f = \mu N = \mu mg\cos\theta$, opposing motion.

**Worked example 2 — block on an incline.** A 4 kg block sits on a 25° slope. The coefficient of static friction is 0.35 and kinetic friction is 0.25. Does the block slide if released? If yes, what is its acceleration?
- $mg\sin\theta = 4 \times 9.8 \times \sin25° = 16.57$ N.
- Max static friction = $\mu_s mg\cos\theta = 0.35 \times 4 \times 9.8 \times \cos25° = 12.43$ N.
- Driving force (16.57 N) > max static friction (12.43 N) → block slides.
- $a = g(\sin\theta - \mu_k\cos\theta) = 9.8(\sin25° - 0.25\cos25°) = 9.8(0.4226 - 0.2266) = 1.92$ m/s² down the slope.

**Work–energy theorem.** $W_{net} = \Delta KE$. For an object sliding down the incline above without friction, speed at the bottom of a 5 m slope: $v = \sqrt{2gh_{eff}} = \sqrt{2gL\sin\theta}$ where $L$ is slope length. With friction, $W_{net} = mgh - fL = \Delta KE$.

**Conservation of momentum in 2-D.** Decompose into x and y. After a collision, total $\mathbf{p}_x$ and $\mathbf{p}_y$ are unchanged (if no external impulse). Use:
- $m_1 u_1 \cos\alpha_1 + m_2 u_2 \cos\alpha_2 = m_1 v_1 \cos\beta_1 + m_2 v_2 \cos\beta_2$
- $m_1 u_1 \sin\alpha_1 + m_2 u_2 \sin\alpha_2 = m_1 v_1 \sin\beta_1 + m_2 v_2 \sin\beta_2$

**Uniform circular motion.** For a particle of mass $m$ moving at constant speed $v$ around a circle of radius $r$:
- Period $T = 2\pi r / v$.
- Frequency $f = 1/T$.
- Centripetal acceleration $a_c = v^2/r = \omega^2 r$ towards the centre.
- Centripetal force $F_c = mv^2/r$.

In a vertical circle (e.g. a ball whirled on a string), tension varies; at the top $T + mg = mv^2/r$, at the bottom $T - mg = mv^2/r$. At the minimum speed the string goes slack at the top: $T = 0$ gives $v_{min,top} = \sqrt{gr}$.

**Practice set:**
1. A car brakes from 20 m/s to rest in 4 s. Find (a) deceleration, (b) distance covered.
2. A ball is dropped from a 45 m building. With what speed does it hit the ground?
3. A 0.2 kg ball moving at 6 m/s east hits a stationary 0.3 kg ball and they stick together. What is their common velocity?
4. A 1.5 kg mass on a smooth horizontal table is attached to a string over a pulley to a 1 kg hanging mass. Find the acceleration.

Answers (use to check, not to copy): (1) $a = -5$ m/s², $s = 40$ m. (2) $v = \sqrt{2 \times 9.8 \times 45} \approx 29.7$ m/s. (3) $v = 0.2 \times 6 / 0.5 = 2.4$ m/s east. (4) System: $a = (m_2 g)/(m_1+m_2) = 1 \times 9.8 / 2.5 = 3.92$ m/s².

---

### 🔴 Deep — Mastery (1mo+)
> Aim for the 80%+ band on NECTA 131/1 by going deeper than the syllabus lists.

**Why $v = u + at$ requires constant $a$.** Integration from $a = dv/dt$: $dv = a\,dt$, integrate from $0$ to $t$ and from $u$ to $v$. If $a(t)$ is not constant, write $v(t) = u + \int_0^t a(\tau)d\tau$. The constant-acceleration SUVAT equations are a special case; they fail in problems with quadratic drag.

**Momentum as a vector and impulse–momentum theorem.** $\mathbf{J} = \int_{t_1}^{t_2} \mathbf{F}\,dt = \Delta \mathbf{p}$. For variable force (a bat hitting a ball), the impulse is the area under the $F$–$t$ graph. Average force: $\bar{F} = J/\Delta t$.

**Rotational dynamics for rigid bodies.** Moment of inertia $I = \sum m_i r_i^2$ (or $I = \int r^2 dm$ for continuous bodies). Standard results: solid disc $I = \tfrac{1}{2}MR^2$ about its central axis; solid sphere $I = \tfrac{2}{5}MR^2$; thin rod about centre $I = \tfrac{1}{12}ML^2$. Torque $\tau = I\alpha$ (analogous to $F = ma$). Angular momentum $L = I\omega$; $\tau = dL/dt$.

**Worked example 3 — sphere rolling down a slope.** A solid sphere of mass $m$ and radius $R$ rolls without slipping down a slope of height $h$. Find the speed at the bottom.
- Energy split: $mgh = \tfrac{1}{2}mv^2 + \tfrac{1}{2}I\omega^2$.
- No slip: $v = R\omega$, so $\omega = v/R$.
- $\tfrac{1}{2}I\omega^2 = \tfrac{1}{2} \cdot \tfrac{2}{5}mR^2 \cdot (v/R)^2 = \tfrac{1}{5}mv^2$.
- $mgh = \tfrac{1}{2}mv^2 + \tfrac{1}{5}mv^2 = \tfrac{7}{10}mv^2 \Rightarrow v = \sqrt{10gh/7}$.

Compare to a frictionless sliding block where $v = \sqrt{2gh}$. The sphere is slower because some energy goes into rotation.

**Worked example 4 — perfectly inelastic 2-D collision.** Ball A (2 kg, velocity 4 m/s north) hits ball B (1 kg, velocity 3 m/s east) and they stick. Find the final velocity.
- $\mathbf{p}_x = 1 \times 3 = 3$ kg·m/s; $\mathbf{p}_y = 2 \times 4 = 8$ kg·m/s.
- $|\mathbf{p}| = \sqrt{9 + 64} = \sqrt{73} \approx 8.54$ kg·m/s.
- Total mass 3 kg, so $v = 8.54/3 = 2.85$ m/s.
- Direction: $\theta = \tan^{-1}(8/3) \approx 69.4°$ north of east.
- KE lost = initial KE − final KE = $\tfrac{1}{2}(2)(16) + \tfrac{1}{2}(1)(9) - \tfrac{1}{2}(3)(2.85^2) = 16 + 4.5 - 12.18 = 8.32$ J. (Energy is not conserved in inelastic collisions; momentum is.)

**Variable-mass systems.** For a rocket losing mass at rate $\dot{m}$ with exhaust speed $v_e$ relative to the rocket: $m\,dv/dt = -v_e\,(-\dot{m}) - mg$ (thrust equation, also called Tsiolkovsky-related). For an hour-long revision, at least know the conservation-of-momentum framing: total momentum of (rocket + ejected gas) is constant if no external force.

**Power and energy in 2-D motion.** Instantaneous power delivered by a force is $P = \mathbf{F} \cdot \mathbf{v}$. A car turning at constant speed on a flat road still needs power because $\mathbf{F}_{net} \perp \mathbf{v}$ (so no work), but the engine must overcome rolling resistance; the centripetal component of friction does no work.

**Dimensional analysis as a sanity check.** $[v] = LT^{-1}$, $[a] = LT^{-2}$, $[F] = MLT^{-2}$. If your equation for range gives $M^{1/2}$ on the right but range is a length, the equation is wrong.

**Experimental mechanics — timing in the school lab.** The dominant error in pendulum-timing experiments is reaction time (~0.2 s). Standard mitigation: time $n \approx 20$ oscillations and divide. Error per period becomes $\sim 0.2/20 = 0.01$ s, an order of magnitude better. NECTA practicals expect this kind of treatment of experimental error.

### Common traps
1. **Sign error on $g$ in vertical motion.** If you take up as positive, $a = -9.8$ m/s², not $+9.8$. Wrong sign flips "time to max height" into "time to land" and you lose every subsequent step.
2. **Using SUVAT when acceleration is not constant.** Drag problems, oscillating systems, or any motion with explicit time-varying force are not SUVAT problems. Go back to $F = ma$ or to energy.
3. **Confusing mass and weight.** $W = mg$ is a force (Newtons). Mass is kg. ACSEE sometimes mixes them in word problems; check units.
4. **Adding velocities instead of subtracting.** "Velocity of A relative to B" is $v_A - v_B$, not $v_A + v_B$, when both move in the same direction. The + comes only when they move toward each other.
5. **Treating $W = Fs\cos\theta$ as scalar-of-scalars.** $W$ is signed: positive when force and displacement form an acute angle (force adds energy), negative when obtuse (force removes energy). A friction force always does negative work; a driving force does positive work.

## Continue your study

- **[View this topic in your ACSEE (Tanzania) roadmap](/roadmap/?exam=acsee&duration=1mo)** — see where "Mechanics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=acsee&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ACSEE (Tanzania) exam overview](/exams/acsee/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/acsee/physics/)** — browse sibling topics in this subject

