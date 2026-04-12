---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-5
topicName: Circular Motion
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.082283"
diagramPrompt: "Clean educational diagram showing Circular Motion with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Circular Motion

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Circular Motion** — Key Facts

Circular motion occurs when a particle moves along a circular path. The motion can be **uniform** (constant speed) or **non-uniform** (variable speed). In uniform circular motion, the speed remains constant but the direction of velocity continuously changes — this means there is always an acceleration directed towards the centre, called **centripetal acceleration**.

**Key Formulas:**

- Centripetal force: $F_c = \frac{mv^2}{r} = mr\omega^2$
- Centripetal acceleration: $a_c = \frac{v^2}{r} = r\omega^2$
- Angular velocity: $\omega = \frac{2\pi}{T} = 2\pi f$
- Time period: $T = \frac{2\pi r}{v}$
- Frequency: $f = \frac{1}{T}$

Where $m$ = mass, $v$ = linear speed, $r$ = radius, $\omega$ = angular velocity, $T$ = period, $f$ = frequency.

**Key facts:**
- Centripetal force is NOT a new type of force — it can be tension, friction, gravitational force, or normal reaction acting towards the centre
- The centrifugal force ($mv^2/r$) is a fictitious or pseudo force that appears in a rotating (non-inertial) frame of reference
- For a body moving in a vertical circle (e.g., a roller coaster): minimum speed at the top of the circle to complete the loop: $v_{min} = \sqrt{gr}$

⚡ **Exam tip:** MDCAT 2023 had a question on banking of roads — the banking angle $\tan\theta = \frac{v^2}{rg}$ is a high-yield formula. Students frequently confuse centripetal with centrifugal force; remember centripetal is real (towards centre), centrifugal is pseudo (appears only in rotating frames). In pulley problems, tension provides the centripetal force.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Circular Motion** — Complete Study Guide

**Angular Displacement and Velocity:**
Angular displacement $\theta$ is measured in radians. $\theta = \frac{s}{r}$ where $s$ is arc length. For one complete revolution: $\theta = 2\pi$ rad, $s = 2\pi r$.

**Relation between Linear and Angular Quantities:**
- $v = r\omega$
- $a_t = r\alpha$ (tangential acceleration)
- $a_c = r\omega^2$

**Types of Circular Motion:**

| Type | Speed | Acceleration |
|------|-------|--------------|
| Uniform circular motion | Constant | $a = v^2/r$ towards centre |
| Non-uniform circular motion | Variable | $a_{total} = \sqrt{a_c^2 + a_t^2}$ |

**Conical Pendulum:**
A bob moving in a horizontal circle at the end of a string that makes a constant angle $\theta$ with the vertical. Tension $T = \frac{mg}{\cos\theta}$ and horizontal component provides centripetal force: $T\sin\theta = \frac{mv^2}{r}$. Since $r = l\sin\theta$, we get $v = \sqrt{gl\tan\theta}$.

**Banking of Roads:**
Roads are banked to provide the necessary centripetal force without relying on friction alone. The banking angle is given by:
$$\tan\theta = \frac{v^2}{rg}$$

Where $v$ is the design speed, $r$ is the radius of curvature.

**Vertical Circular Motion:**
For a body of mass $m$ at the end of a string moving in a vertical circle:
- At the top: minimum tension $T_{min} = 0$ when $v_{top} = \sqrt{gr}$; $T_{top} = \frac{mv^2}{r} - mg$
- At the bottom: $T_{bottom} = \frac{mv^202}{r} + mg$ (maximum tension)
- Minimum speed at the lowest point to complete the circle: $v_{min} = \sqrt{5gr}$

⚡ **Common student mistakes:** Confusing centripetal with centrifugal force. Using the wrong radius in $v = r\omega$. Forgetting that non-uniform circular motion has both centripetal AND tangential acceleration. In banking questions, students often use the coefficient of friction formula instead of the banking formula.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Circular Motion** — Advanced Analysis

**Derivation of Centripetal Acceleration:**
Consider a particle moving in a circle of radius $r$ with constant speed $v$. In a small time interval $\Delta t$, the particle moves from point P to Q. The velocity vectors $\vec{v_1}$ and $\vec{v_2}$ have the same magnitude $v$ but different directions. The change in velocity $\Delta\vec{v} = \vec{v_2} - \vec{v_1}$ is directed towards the centre of the circle.

Using the geometry of the triangle formed by the velocity vectors:
$$\frac{|\Delta\vec{v}|}{v} = \frac{\Delta l}{r}$$
$$\Rightarrow |\Delta\vec{v}| = \frac{v\Delta l}{r}$$

Dividing by $\Delta t$ and taking limit $\Delta t \to 0$:
$$a_c = \lim_{\Delta t \to 0} \frac{|\Delta\vec{v}|}{\Delta t} = \frac{v}{r} \lim_{\Delta t \to 0} \frac{\Delta l}{\Delta t} = \frac{v^2}{r}$$

**Centrifugal Force (Pseudo Force):**
In a frame rotating with angular velocity $\omega$, a mass $m$ appears to experience an outward force $F_{cf} = m\omega^2 r = mv^2/r$. This is NOT a real force — it has no physical origin. It only appears because we are analysing from a non-inertial (accelerating) reference frame. Useful for understanding why passengers feel pushed outward in a turning vehicle.

**Applications of Circular Motion:**
1. **Road banking:** Reduces dependence on friction for providing centripetal force. National Highway equations use $\theta$ typically between 5°–15°.
2. **Rounding a flat curve:** Friction provides centripetal force: $f_s = \mu_s mg = mv^2/r \Rightarrow v_{max} = \sqrt{\mu_s rg}$
3. **Conical pendulum:** Used in road design and as a simple model for electron orbital angular momentum in some quantum pictures.
4. **Loop-the-loop:** Roller coasters, aircraft loops — minimum speed at top $v = \sqrt{rg}$ ensures the normal reaction doesn't become zero before completing the loop.
5. **Satellite motion (approximately circular):** $F_c = G\frac{Mm}{r^2} = m\frac{v^2}{r} \Rightarrow v = \sqrt{\frac{GM}{r}}$

**MDCAT Question Trends:**
Questions from circular motion commonly ask: (1) finding banking angle, (2) maximum speed for safe turn on flat road, (3) tension at different positions in vertical circular motion, (4) distinguishing centripetal vs centrifugal. PMDC/MDCAT papers from 2019–2024 show an average of 2–3 questions per paper on circular motion topics.

**Key Points to Remember:**
- $a_c$ always points towards the centre of the circular path
- Neither $a$ nor $v$ is zero in uniform circular motion — only $a_t = 0$
- The centripetal force can be any real force; it is not a new fundamental interaction
- In vertical motion, energy conservation supplements the force equations

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
