---
exam: du-adm
examName: "DU Unit B Admission (Science)"
subject: physics
subjectName: "Physics"
topic: physic-003
topicName: "Newtonian Mechanics"
weight: 5
country: bangladesh
generated: "2026-09-25T11:25:00"
lastUpdated: "2026-09-25"
---

# Newtonian Mechanics — DU Unit B Admission (Science)

Newtonian Mechanics is the single highest-weight unit on the DU Unit B Physics paper and the one where careless sign and friction mistakes cost the most marks. The examiner pulls from NCTB HSC Physics 1st Paper Chapters 3–6: Newton's three laws, friction on horizontal and inclined surfaces, the work–energy theorem, conservation of linear momentum (including 1D and 2D collisions), and rigid-body rotation (torque, angular momentum, moment of inertia). Three MCQ patterns show up year after year — (1) a block on a rough incline where you have to find the coefficient of friction or the angle of repose from a given condition, (2) a two-body collision problem testing whether kinetic energy is conserved (elastic vs inelastic), and (3) a uniform disc or sphere where you apply $I = \frac{1}{2}MR^2$ or $I = \frac{2}{5}MR^2$ to relate torque and angular acceleration. Master this topic and roughly a fifth of the Physics paper is recoverable; skip it and you cannot compensate anywhere else.

> Verify the live syllabus, paper pattern, and any in-year changes on https://du.ac.bd/ before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)

**Newton's three laws (memorise the equations, not just the words).**

1. **First law (inertia).** A body remains at rest or in uniform motion unless a net external force acts on it. Mathematically $\sum \vec{F} = 0 \Rightarrow \vec{v} = \text{const}$.
2. **Second law.** $\vec{F} = m\vec{a}$ — force is the rate of change of momentum, $\vec{F} = d\vec{p}/dt$. Units: N = kg·m/s².
3. **Third law.** For every action there is an equal and opposite reaction. Forces always come in pairs on **different** bodies; they never cancel on the same body.

**Friction.** Two regimes:
- **Static friction** $f_s \leq \mu_s N$ adjusts to prevent motion. The maximum is $f_{s,\max} = \mu_s N$.
- **Kinetic friction** $f_k = \mu_k N$, always opposing relative motion, with $\mu_k < \mu_s$ usually.

The **angle of repose** $\theta_r$ on an incline satisfies $\tan\theta_r = \mu_s$ — useful because you can read $\mu_s$ straight off a diagram.

**Work, kinetic energy, power.**
- $W = \vec{F}\cdot\vec{s} = Fs\cos\theta$.
- $KE = \tfrac{1}{2}mv^2$.
- **Work–energy theorem:** $W_{\text{net}} = \Delta KE$.
- Power $P = \vec{F}\cdot\vec{v}$ (instantaneous); $P_{\text{avg}} = W/t$. Units: W = J/s.

**Momentum and collisions.**
- $\vec{p} = m\vec{v}$, units kg·m/s.
- **Impulse** $\vec{J} = \vec{F}\Delta t = \Delta\vec{p}$.
- In an isolated system $\sum \vec{p}$ is conserved.
- **Elastic collision:** both $\vec{p}$ and $KE$ conserved. For a 1D head-on collision with a stationary target of mass $M$ hit by a mass $m$:
  $$v_1' = \frac{m-M}{m+M}v_1, \qquad v_2' = \frac{2m}{m+M}v_1.$$
  Special case $m=M$: the moving body stops, the target moves off with the original velocity.
- **Inelastic collision:** only $\vec{p}$ conserved. **Perfectly inelastic** means the bodies stick: $v_f = \frac{m_1 v_1 + m_2 v_2}{m_1+m_2}$.

**Circular motion.**
- Centripetal acceleration $a_c = v^2/r = \omega^2 r$.
- Centripetal force $F_c = mv^2/r$ — always toward the centre. If you feel pushed *outward*, that is the **pseudo force** in a rotating frame; the real force is inward.
- Banking angle (no friction): $\tan\theta = v^2/(rg)$.

**Rotation of a rigid body.**
- Torque $\vec{\tau} = \vec{r}\times\vec{F}$, magnitude $\tau = rF\sin\theta$. Units: N·m.
- Angular momentum $L = I\omega$.
- Newton's second law for rotation: $\tau = I\alpha$.
- Moments of inertia you must know:
  - Ring about central axis: $I = MR^2$.
  - Disc about central axis: $I = \tfrac{1}{2}MR^2$.
  - Solid sphere: $I = \tfrac{2}{5}MR^2$.
  - Hollow sphere: $I = \tfrac{2}{3}MR^2$.
  - Thin rod about centre: $I = \tfrac{1}{12}ML^2$; about end: $I = \tfrac{1}{3}ML^2$.
- **Parallel-axis theorem:** $I = I_{\text{cm}} + Md^2$.
- **Perpendicular-axis theorem** (planar lamina only): $I_z = I_x + I_y$.

**Quick self-check before the exam.**

- Can you draw a free-body diagram for a block on a $30°$ incline with $\mu_s = 0.4$ and decide whether it slides?
- Can you write the post-collision velocities for a 1D elastic collision in terms of the masses?
- Can you compute $I$ for a disc-sphere-rod-rod-about-end without looking them up?
- Can you explain why a helicopter needs a tail rotor in one sentence?

### 🟡 Standard — Exam Prep (3d-3w)

#### Free-body diagrams and Newton's second law in 2D

Every Newtonian mechanics problem reduces to drawing the free-body diagram (FBD), resolving each force into components along two perpendicular axes, and writing $\sum F_x = m a_x$ and $\sum F_y = m a_y$. The DU paper tests this every year. A typical setup: a 5 kg block on a horizontal surface with a 20 N horizontal pull and $\mu_k = 0.3$. FBD forces: weight $mg = 49$ N down, normal $N = mg$ up (since no vertical acceleration), applied force 20 N right, kinetic friction $f_k = \mu_k N = 0.3 \times 49 = 14.7$ N left. Net horizontal force $20 - 14.7 = 5.3$ N, so $a = 5.3/5 = 1.06$ m/s². If the question asks for the coefficient instead, work backwards from $a = 0$.

The trap in these problems is the normal force. If a second force has a vertical component (e.g., a pull at angle $\theta$ above horizontal), the normal is no longer $mg$. With $F$ at angle $\theta$ above horizontal: $N = mg - F\sin\theta$ and the horizontal component is $F\cos\theta - \mu_k N$. Get the normal wrong and the friction is wrong and the answer is wrong.

#### Inclined planes

For a block of mass $m$ on an incline of angle $\theta$ with coefficient of friction $\mu$:
- Component of weight down the slope: $mg\sin\theta$.
- Component of weight into the slope: $mg\cos\theta$, so $N = mg\cos\theta$.
- Block slides if $\tan\theta > \mu$; block stays put if $\tan\theta \le \mu$.

This is why the angle of repose equals $\arctan\mu_s$ — at that exact angle the static friction is at its limit and any tiny increase makes the block slide. DU questions sometimes invert this: give you $\theta_r = 30°$ and ask for $\mu_s$, which is just $\tan 30° \approx 0.577$.

If the block is being **pushed up** the incline by a horizontal force $F$: resolve $F$ into $F\cos\theta$ along the slope (up) and $F\sin\theta$ into the slope. The new normal becomes $N = mg\cos\theta + F\sin\theta$, friction is $\mu N$ down the slope, weight component is $mg\sin\theta$ down the slope. The equation of motion up the slope is $F\cos\theta - mg\sin\theta - \mu N = ma$.

#### Work–energy theorem on rough surfaces

The work–energy theorem is often faster than $\vec{F}=m\vec{a}$ when speed at one position is given and speed at another is asked. On a rough horizontal surface with friction force $f_k$:
$$W_{\text{net}} = \tfrac{1}{2}mv_f^2 - \tfrac{1}{2}mv_i^2.$$
With friction only: $-f_k \cdot d = \Delta KE$, so $v_f^2 = v_i^2 - 2\mu_k g d$. The stopping distance is $d = v_i^2/(2\mu_k g)$. Plug in numbers: a car at 20 m/s on a road with $\mu_k = 0.5$ stops in $400/(2 \times 0.5 \times 9.8) \approx 40.8$ m.

If the surface is inclined, replace $f_k d$ with $f_k \cdot d$ where $f_k = \mu_k mg\cos\theta$ and the gravitational work is $-mg d\sin\theta$. Watch signs — gravity does positive work when the block descends.

#### Conservation of momentum in 1D and 2D

Momentum is a vector; in 2D collisions you conserve $p_x$ and $p_y$ separately. Example: a 2 kg ball moving at 3 m/s east hits a 4 kg ball moving at 1 m/s north. After a perfectly inelastic collision the combined mass (6 kg) moves with velocity components:
$$v_x = \frac{2 \times 3}{6} = 1 \text{ m/s east}, \qquad v_y = \frac{4 \times 1}{6} = 0.667 \text{ m/s north}.$$
Speed $v = \sqrt{1^2 + 0.667^2} = 1.20$ m/s; direction $\theta = \arctan(0.667/1) = 33.7°$ north of east.

For an **elastic collision** in 2D, the angle between the post-collision velocities is 90° if one body is initially at rest and the masses are equal — this is a classic "Newton's cradle" result and a common DU sub-question.

#### Circular motion: banked curves, conical pendulum, vertical loops

The banked-curve formula assumes no friction:
$$\tan\theta = \frac{v^2}{rg}.$$
With friction, the safe speed range widens. The maximum speed (block tends to slide up) uses friction down the slope; minimum speed (tends to slide down) uses friction up the slope.

A **conical pendulum** is a bob on a string tracing a horizontal circle of radius $r$ with string angle $\theta$ from vertical. Vertical equilibrium: $T\cos\theta = mg$. Horizontal: $T\sin\theta = mv^2/r$. Divide: $\tan\theta = v^2/(rg)$, and the period is $T = 2\pi\sqrt{(L\cos\theta)/g}$.

In a **vertical loop** (e.g., a ball on a string, or a car at the top of a circular track), the minimum speed at the top for the ball to maintain contact is when gravity alone supplies the centripetal force: $mg = mv^2/r \Rightarrow v_{\min} = \sqrt{gr}$. For a car on a banked track, the corresponding condition is $v^2 \ge rg\cos\theta$ at the top.

#### Rotational dynamics: torque, angular momentum, rolling

The rotational form of Newton's second law is $\tau_{\text{net}} = I\alpha$. For a solid cylinder of mass $M$ and radius $R$ on which a string is wound and pulled with tension $T$: $TR = I\alpha = \tfrac{1}{2}MR^2 \cdot \alpha$, and the linear acceleration of the string is $a = R\alpha = 2T/M$.

For a body **rolling without slipping** down an incline, both translation and rotation matter. The acceleration is $a = \frac{g\sin\theta}{1 + I/(MR^2)}$. For a solid cylinder $I = \tfrac{1}{2}MR^2$, so $a = \tfrac{2}{3}g\sin\theta$. For a hollow sphere $a = \tfrac{5}{7}g\sin\theta$. A solid sphere beats both, which is why a billiard ball curves past a hoop.

**Angular momentum conservation.** If $\tau_{\text{net,ext}} = 0$, $L = I\omega$ is conserved. Classic case: a spinning skater pulls in their arms, $I$ decreases, $\omega$ increases. Another: a satellite in an elliptical orbit has higher speed at perigee (small $r$, small $I_{\text{orbit}} = mr^2$) than at apogee.

#### Worked example

**Problem.** A 4 kg block slides down a rough incline of angle $30°$ from a height of 5 m. The coefficient of kinetic friction is 0.2. Find (a) the work done by friction, (b) the kinetic energy at the bottom, (c) the speed at the bottom.

**Solution.** Take $g = 9.8$ m/s². Length of incline $L = h/\sin 30° = 5/0.5 = 10$ m.

**(a)** Normal force $N = mg\cos 30° = 4 \times 9.8 \times 0.866 = 33.95$ N. Friction $f_k = \mu_k N = 0.2 \times 33.95 = 6.79$ N. Work by friction $W_f = -f_k L = -6.79 \times 10 = -67.9$ J.

**(b)** Gravitational work $W_g = mgh = 4 \times 9.8 \times 5 = 196$ J. Net work $W_{\text{net}} = 196 - 67.9 = 128.1$ J = $\Delta KE$. Initial $KE = 0$, so final $KE = 128.1$ J.

**(c)** $\tfrac{1}{2}mv_f^2 = 128.1 \Rightarrow v_f^2 = 64.05 \Rightarrow v_f = 8.00$ m/s.

Sanity check: without friction, $v_f = \sqrt{2gh} = \sqrt{98} \approx 9.9$ m/s. With 0.2 friction we should be a bit slower, and 8.0 m/s fits.

### 🔴 Deep — Mastery (1mo+)

#### Variable mass systems: rockets and rain

Newton's second law in the form $\vec{F} = d\vec{p}/dt$ works for systems whose mass changes. For a rocket ejecting fuel at speed $v_e$ relative to the rocket, with mass changing at rate $\dot{m} = -dm/dt$:
$$M\frac{dv}{dt} = \vec{F}_{\text{ext}} + v_e \dot{m}.$$
The $v_e \dot{m}$ term is the thrust. In vacuum (no external force), Tsiolkovsky's rocket equation gives $\Delta v = v_e \ln(M_i/M_f)$. This is why staged rockets are essential — a single stage cannot reach orbit because the logarithmic dependence on mass ratio caps out.

A **raindrop falling through mist** collects mass at rate proportional to its cross-section: $dm/dt = kAv$ where $A$ is cross-section and $v$ is speed. The equation of motion becomes $m\,dv/dt = mg - kv^2$ in steady state, where terminal velocity satisfies $v_t^2 = mg/(kA)$.

#### Non-inertial frames and fictitious forces

In an accelerating reference frame, an observer sees a pseudo force $-m\vec{a}_{\text{frame}}$ on every body. In a rotating frame, the fictitious forces are:
- **Centrifugal** — outward, magnitude $m\omega^2 r$.
- **Coriolis** — $-2m\vec{\omega}\times\vec{v}'$, where $\vec{v}'$ is the velocity in the rotating frame.

The Coriolis force explains why trade winds in the Northern Hemisphere blow from the northeast and Southern Hemisphere from the southeast (the Ferrel cell). It also rotates the plane of a Foucault pendulum. DU questions on this are uncommon but appear in viva for Engineering and Technology applicants.

#### Angular impulse and rotational collisions

When a force is applied off-centre to a rotating body for time $\Delta t$, the angular impulse $\tau \Delta t = \Delta L$ governs the change in angular momentum. A cue ball striking a stationary billiard ball slightly off-centre transfers both linear momentum (it slows, possibly reverses) and angular momentum (the target spins).

For a **uniform disc** of mass $M$ and radius $R$ dropped onto a rotating turntable, angular momentum conservation (no external torque about the axis) gives the common final angular velocity: $\omega_f = (I_1\omega_1 + I_2\omega_2)/(I_1+I_2)$. Mechanical energy is lost to friction at the contact.

#### Stability and precession

A spinning top precesses because the gravitational torque about the pivot point continually changes the direction of angular momentum. The precession angular velocity is $\Omega = Mgr/(L)$ where $L$ is the spin angular momentum. A bicycle wheel held by one end of its axle and given a spin does not fall — it precesses around the axle. DU questions occasionally ask about the qualitative behaviour; rarely the formula.

#### Practice prompts

1. A 2 kg block is pulled up a $20°$ incline by a 30 N force parallel to the incline. Coefficient of kinetic friction is 0.25. Find the acceleration.
2. Two carts, 3 kg at 4 m/s east and 2 kg at 2 m/s west, collide and stick. Find the final velocity and the kinetic energy lost.
3. A solid sphere and a hollow sphere of equal mass and radius roll down a $30°$ incline from rest. Which reaches the bottom first and by what factor?
4. A 0.5 kg ball on a 1.2 m string is whirled in a vertical circle. What is the minimum speed at the top for the string to remain taut?
5. A neutron star of mass $1.4 \times 10^{30}$ kg and radius 10 km rotates at 1 kHz. Find its angular momentum (assume uniform sphere).

#### Connections to adjacent topics

Newtonian Mechanics feeds into **Gravitation** (orbital mechanics is centripetal force with $g = GM/r^2$), **Periodic Motion** (the simple pendulum is a direct consequence of small-angle SHM under gravity), **Current Electricity** (drift velocity uses momentum-relaxation arguments), and **Modern Physics** (de Broglie wavelength is momentum divided by Planck's constant). A student who solves one problem per sub-topic in this chapter removes the bulk of the Physics uncertainty on the DU Unit B paper.

### Common traps

- **Sign of friction on inclines.** Friction always opposes *the direction of motion* (kinetic) or *the tendency of motion* (static). On a block pushed up an incline, friction acts down the slope, not up. Students who put friction up because "the block is going up" lose the mark.
- **Forgetting to recompute the normal force on inclines.** When a horizontal force pushes a block up a slope, the normal becomes $N = mg\cos\theta + F\sin\theta$, not $mg\cos\theta$. The normal force on an incline is not $mg$ except when no other vertical forces act.
- **Conflating conservation of momentum with conservation of kinetic energy.** Momentum is always conserved in any collision in an isolated system; kinetic energy is conserved *only* in elastic collisions. The DU paper sets up collisions where you must identify which type. A 2 kg ball at 5 m/s hitting a stationary 3 kg ball, sticking: $v_f = 10/5 = 2$ m/s; $KE_f = 10$ J, $KE_i = 25$ J — 15 J lost.
- **Mixing up moment of inertia formulas.** Disc vs solid sphere vs hollow sphere is the single most-mixed-up table. Memorise the four main shapes (ring, disc, solid sphere, hollow sphere) and the parallel-axis theorem.
- **Treating centripetal force as a separate force.** Centripetal force is not on the free-body diagram; it is the *net* inward force. The forces on the diagram (gravity, normal, tension, friction) must add up to $mv^2/r$ inward. If you draw a "centripetal force" arrow, you are double-counting.
- **Angular momentum in the wrong units.** $L = I\omega$ uses rad/s, not rev/s. Multiply by $2\pi$ to convert.

---

*Verify all numerical claims against the official DU Unit B notice at https://du.ac.bd/ and the NCTB HSC Physics 1st Paper syllabus before planning your revision timetable around them.*
