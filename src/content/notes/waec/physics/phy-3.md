---

exam: waec
examName: WAEC WASSCE
subject: physics
subjectName: Physics
topic: phy-3
topicName: "Kinematics: Projectiles"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.629012"
diagramPrompt: "Clean educational diagram showing Kinematics: Projectiles with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"

---

# Kinematics: Projectiles

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your WAEC exam.

**Projectile Motion** — Key Facts

A projectile is any object launched into the air that is acted upon only by gravity (and air resistance, which we neglect at WAEC level). The path traced is called the **trajectory**, and it is always parabolic.

**Essential Formulas**

- **Horizontal velocity:** remains constant — $u_x = u \cos \theta$
- **Vertical velocity:** changes due to gravity — $u_y = u \sin \theta$
- **Time of flight:** $T = \dfrac{2u \sin \theta}{g}$
- **Maximum height:** $H = \dfrac{u^2 \sin^2 \theta}{2g}$
- **Horizontal range:** $R = \dfrac{u^2 \sin 2\theta}{g}$

**Key Facts to Memorise**

- At maximum height, vertical velocity = 0
- Time to reach max height = $\dfrac{u \sin \theta}{g}$ (half of total flight time)
- For $\theta = 45°$, range $R$ is maximum: $R_{\max} = \dfrac{u^2}{g}$
- The horizontal and vertical motions are **independent** — resolve everything at the start
- Acceleration due to gravity, $g = 9.8 \, \text{m s}^{-2}$ (use $10 \, \text{m s}^{-2}$ in exams for simplicity)

⚡ **WAEC Exam Tip:** The most common mistake is mixing up horizontal and vertical components. Always resolve the initial velocity $u$ at the start. If a question gives speed and angle, find $u_x$ and $u_y$ first before doing anything else. WAEC often asks: "Find the time of flight" or "Find the range" — these formulas are directly examinable.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for building a solid understanding of projectile motion.

**Understanding Projectile Motion**

Projectile motion is a cornerstone of WAEC Physics. It combines two straight-line motions — horizontal (constant velocity) and vertical (uniform acceleration) — into one elegant framework. The object moves freely through the air after being projected, with only gravitational force acting upon it.

**The Two-Component Approach**

Consider an object projected with initial speed $u$ at an angle $\theta$ to the horizontal:

| Component | Velocity | Acceleration | Displacement |
|-----------|----------|-------------|--------------|
| Horizontal | $u_x = u \cos \theta$ (constant) | $a_x = 0$ | $x = u \cos \theta \cdot t$ |
| Vertical | $u_y = u \sin \theta$ | $a_y = -g$ | $y = u \sin \theta \cdot t - \frac{1}{2}gt^2$ |

The **parabolic trajectory** arises because horizontal displacement grows linearly with time while vertical displacement follows a quadratic relationship.

**Deriving the Key Quantities**

*Time of Flight:* The projectile returns to the ground when $y = 0$. Using $y = u \sin \theta \cdot t - \frac{1}{2}gt^2$ and setting $y = 0$:

$$t(u \sin \theta - \frac{1}{2}gt) = 0 \implies t = 0 \quad \text{or} \quad t = \frac{2u \sin \theta}{g}$$

The non-zero solution gives the total time of flight: $T = \frac{2u \sin \theta}{g}$.

*Maximum Height:* At the peak, vertical velocity becomes zero: $v_y = u \sin \theta - gt = 0$, giving $t_{\text{peak}} = \frac{u \sin \theta}{g}$. Substituting into the displacement equation:

$$H = (u \sin \theta)\left(\frac{u \sin \theta}{g}\right) - \frac{1}{2}g\left(\frac{u \sin \theta}{g}\right)^2 = \frac{u^2 \sin^2 \theta}{2g}$$

*Horizontal Range:* $R = u_x \times T = (u \cos \theta) \times \left(\frac{2u \sin \theta}{g}\right) = \frac{u^2 \sin 2\theta}{g}$.

**Worked Example (WAEC Style)**

A ball is kicked with a velocity of $40 \, \text{m s}^{-1}$ at $30°$ to the horizontal. Calculate:
(a) the time of flight
(b) the maximum height reached
(c) the horizontal range

*Solution:*
Given: $u = 40 \, \text{m s}^{-1}$, $\theta = 30°$, $g = 10 \, \text{m s}^{-2}$

(a) Time of flight: $T = \frac{2u \sin \theta}{g} = \frac{2 \times 40 \times \sin 30°}{10} = \frac{80 \times 0.5}{10} = 4.0 \, \text{s}$

(b) Max height: $H = \frac{u^2 \sin^2 \theta}{2g} = \frac{40^2 \times (0.5)^2}{2 \times 10} = \frac{1600 \times 0.25}{20} = 20 \, \text{m}$

(c) Range: $R = \frac{u^2 \sin 2\theta}{g} = \frac{40^2 \times \sin 60°}{10} = \frac{1600 \times 0.866}{10} = 138.6 \, \text{m}$ (or $138.6 \, \text{m}$)

⚡ **WAEC Exam Tip:** Always state the formula before substituting numbers. Examiners award marks for correct formula application even if arithmetic is slightly off. Also note: if the question says "neglect air resistance," use the standard equations as above. If it gives you a launch speed of $v$ with no angle, you cannot solve for range or time unless an angle is given or implied.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage including derivations and WAEC past question patterns.

**Full Derivation: Equation of the Trajectory**

Eliminating time $t$ from the two displacement equations gives the Cartesian equation of the trajectory. From horizontal displacement: $t = \frac{x}{u \cos \theta}$. Substituting into vertical displacement:

$$y = x \tan \theta - \frac{gx^2}{2u^2 \cos^2 \theta}$$

Since $\frac{1}{\cos^2 \theta} = \sec^2 \theta = 1 + \tan^2 \theta$, this can be rewritten as a parabola in standard form, confirming that **all projectile trajectories under uniform gravity are parabolic**.

**The Independence Principle**

Galileo first established that horizontal and vertical motions are independent. This means:
- A ball dropped from height $h$ and another fired horizontally from the same height will hit the ground at the same time
- The horizontal throw has no effect on vertical fall time

This principle simplifies problem-solving significantly — solve each direction separately, linked only by the common variable **time**.

**Projection from a Height (NOT level ground)**

If a projectile is launched from a height $h$ above the ground (rather than from ground level), the equation $y = u \sin \theta \cdot t - \frac{1}{2}gt^2 + h$ applies. The time to reach the ground is longer than for a level-ground projection at the same speed and angle.

For this case, set $y = 0$ and solve the quadratic: $-\frac{1}{2}gt^2 + u \sin \theta \cdot t + h = 0$, giving:

$$t = \frac{u \sin \theta + \sqrt{u^2 \sin^2 \theta + 2gh}}{g}$$

**WAEC Past Question Patterns**

From WAEC Physics papers (2020–2024), projectile questions typically:

1. Give initial speed $u$ and angle $\theta$ — ask for $T$, $H$, or $R$ (direct formula substitution)
2. Ask which quantity remains constant (horizontal velocity) — multiple choice
3. Describe a footballer or cricketer — apply range/time formulas to a sporting context
4. Ask about the velocity at the maximum height (only horizontal component remains, so $v = u \cos \theta$)

**⚡ Common Pitfalls to Avoid**

- Using $g = 9.8$ when the question expects $g = 10$ — check the paper's convention
- Forgetting that $\sin 2\theta = 2\sin\theta\cos\theta$ and using wrong double-angle values
- Mixing up "time to peak" with "time of flight" — peak is always half of total flight for level ground
- Writing units incorrectly — speeds need $\text{m s}^{-1}$, ranges need metres

**Key Derivations to Revise**

1. $T = \frac{2u \sin \theta}{g}$ from $y = u \sin \theta \cdot t - \frac{1}{2}gt^2 = 0$
2. $H = \frac{u^2 \sin^2 \theta}{2g}$ by substituting $t_{\text{peak}} = \frac{u \sin \theta}{g}$ into vertical displacement
3. $R = \frac{u^2 \sin 2\theta}{g}$ by combining $T$ with horizontal displacement
4. Trajectory equation $y = x \tan \theta - \frac{gx^2}{2u^2 \cos^2 \theta}$

**Quick Reference Table**

| Quantity | Formula |
|----------|---------|
| Horizontal velocity | $u_x = u \cos \theta$ |
| Vertical velocity | $u_y = u \sin \theta$ |
| Time of flight | $T = \frac{2u \sin \theta}{g}$ |
| Maximum height | $H = \frac{u^2 \sin^2 \theta}{2g}$ |
| Horizontal range | $R = \frac{u^2 \sin 2\theta}{g}$ |
| Max range angle | $\theta = 45°$ |
| Velocity at max height | $v = u \cos \theta$ (horizontal only) |

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
