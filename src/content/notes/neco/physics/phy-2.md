---



exam: neco
examName: NECO SSCE
subject: physics
subjectName: Physics
topic: phy-2
topicName: "Kinematics: Displacement, Velocity and Acceleration"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.674379"
diagramPrompt: "Clean educational diagram showing Kinematics: Displacement, Velocity and Acceleration with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"



---
# Kinematics: Displacement, Velocity and Acceleration

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NECO exam.

**Displacement ($s$)** is the change in position of an object — a vector quantity measured in **metres (m)**. It is different from distance; displacement can be negative, while distance always positive.

**Velocity ($v$)** is the rate of change of displacement: $v = \dfrac{ds}{dt}$. Average velocity $= \dfrac{\text{total displacement}}{\text{total time}}$. Instantaneous velocity is the derivative of displacement with respect to time. Unit: **m/s**.

**Acceleration ($a$)** is the rate of change of velocity: $a = \dfrac{dv}{dt} = \dfrac{d^2s}{dt^2}$. Unit: **m/s²**.

**The Five SUVAT Equations** (for constant acceleration):

| Equation | Uses |
|---|---|
| $v = u + at$ | Find final velocity |
| $s = ut + \frac{1}{2}at^2$ | Find displacement |
| $v^2 = u^2 + 2as$ | Find $v$ without $t$ |
| $s = \frac{(u+v)}{2}t$ | Find displacement |
| $s = vt - \frac{1}{2}at^2$ | Alternate form |

Where: $u$ = initial velocity, $v$ = final velocity, $a$ = acceleration, $s$ = displacement, $t$ = time.

⚡ **NECO Tip:** In free-fall problems, $a = g = 9.8 \text{ m/s}^2$ downward. If an object is dropped, $u = 0$. On NECO papers, they often accept $g = 10 \text{ m/s}^2$ for simpler calculations. Always draw a diagram and identify which SUVAT variables you know and don't know.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for NECO Physics students with a few days to months.

**Understanding the SUVAT Equations**

The five equations apply only when acceleration is constant. Before using any equation, confirm the acceleration is uniform.

*Example:* A car accelerates from rest at $2 \text{ m/s}^2$ for $10$ seconds. How far does it travel?
- $u = 0$, $a = 2$, $t = 10$
- $s = ut + \frac{1}{2}at^2 = 0 + \frac{1}{2}(2)(10^2) = 100 \text{ m}$

*Example:* A ball is thrown upward at $15 \text{ m/s}$. Find the maximum height (take $g = 10 \text{ m/s}^2$).
- At max height, $v = 0$, $u = 15$, $a = -10$
- $v^2 = u^2 + 2as \Rightarrow 0 = 225 + 2(-10)s \Rightarrow s = \dfrac{225}{20} = 11.25 \text{ m}$

**Velocity–Time Graphs**

- The **gradient** of a $v$–$t$ graph = acceleration
- The **area under** a $v$–$t$ graph = displacement
- A straight line sloping upward = constant positive acceleration
- A horizontal line = constant velocity (zero acceleration)
- A curve = changing acceleration

*Example:* A car accelerates from $0$ to $20 \text{ m/s}$ in $4 \text{ s}$, travels at constant speed for $6 \text{ s}$, then decelerates to $0$ in $5 \text{ s}$. Total displacement = area under graph = $\frac{1}{2}(4)(20) + (6)(20) + \frac{1}{2}(5)(20) = 40 + 120 + 50 = 210 \text{ m}$.

**Relative Velocity**

If two objects move in the same direction: $v_{\text{rel}} = v_A - v_B$.
If they move in opposite directions: $v_{\text{rel}} = v_A + v_B$.

**Projectile Motion**

Horizontal and vertical motions are independent. Horizontally: constant velocity. Vertically: accelerated motion with $a = -g$.

For a projectile launched at angle $\theta$ with speed $u$:
- Time of flight: $T = \dfrac{2u\sin\theta}{g}$
- Range: $R = \dfrac{u^2\sin 2\theta}{g}$
- Maximum height: $H = \dfrac{u^2\sin^2\theta}{2g}$

⚡ **NECO Common Mistakes:**
- Confusing distance with displacement (displacement is vector, distance is scalar)
- Using $s = \frac{1}{2}at^2$ when there's an initial velocity — don't forget the $ut$ term
- Taking $g$ as positive when the object is moving upward (it's negative — direction matters)
- Mixing up the signs in $v^2 = u^2 + 2as$ when deceleration is involved

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for NECO and JAMB preparation.

**Derivation of SUVAT Equations**

Starting from the definition $a = \dfrac{dv}{dt}$ with constant $a$:
$$a = \frac{dv}{dt} \Rightarrow dv = a\, dt$$
Integrating from $t=0$ to $t=t$: $v - u = at \Rightarrow v = u + at$ ✓

From $v = \dfrac{ds}{dt}$ and $v = u + at$:
$$\frac{ds}{dt} = u + at \Rightarrow s = \int (u + at)\, dt = ut + \frac{1}{2}at^2 + C$$
At $t=0$, $s=0$ (taking origin at start point), so $C=0$. Thus: $s = ut + \frac{1}{2}at^2$ ✓

**Calculus-Based Kinematics**

For non-constant acceleration, differentiate or integrate:

- $a = \dfrac{dv}{dt}$, $v = \dfrac{ds}{dt}$
- $a = v\dfrac{dv}{ds}$ (useful when $t$ is not involved)

*Example:* If $a = 3t^2 - 1$ and at $t=0$, $v=2$ and $s=0$:
$$v = \int (3t^2 - 1)\, dt = t^3 - t + 2$$
$$s = \int (t^3 - t + 2)\, dt = \frac{t^4}{4} - \frac{t^2}{2} + 2t$$

**Motion with Variable Acceleration**

For simple harmonic motion: $a = -\omega^2 x$. This gives:
$$v = \omega\sqrt{A^2 - x^2}$$
where $A$ is amplitude and $\omega$ is angular frequency.

**Terminal Velocity**

When an object falls through a fluid (e.g., sky-diver or raindrop), drag force increases with speed. At terminal velocity, drag = weight, so net force = 0 and acceleration = 0. For a sphere falling through a viscous fluid: $v_t = \dfrac{2r^2(\rho - \sigma)g}{9\eta}$.

**Graphical Analysis Deep Dive**

For a displacement–time graph:
- Gradient = velocity
- Curved line = changing velocity
- Steeper curve = higher speed

For an acceleration–time graph:
- Area under the curve = change in velocity

**NECO/JAMB Question Patterns:**
- NECO typically asks: find acceleration given initial/final velocity and time; find stopping distance for a braking car; projectile range/time-of-flight calculations
- Watch for multi-stage problems where you must find intermediate variables first
- Unit consistency is critical — convert km/h to m/s by dividing by 3.6

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
