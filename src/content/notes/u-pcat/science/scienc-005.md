---
exam: u-pcat
examName: UPCAT (Philippines)
subject: science
subjectName: Science
topic: scienc-005
topicName: Work-Energy Theorem
weight: 5
country: philippines
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Work-Energy Theorem

### 🟢 Lite — Quick Review (1h–1d)
> The single relation UPCAT sets and tests: net work equals change in kinetic energy. Memorise this line first, then the two formulas that flank it.

The **work-energy theorem** reduces a motion problem to a single scalar equation. Drop the vector diagram and count energy instead.

- **Net work = change in kinetic energy**: $W_{net} = \Delta K = K_f - K_i = \tfrac{1}{2}mv_f^2 - \tfrac{1}{2}mv_i^2$, where $m$ is mass in kg and $v$ is speed in m·s⁻¹. Result is in joules (J, M L² T⁻²).
- **Work by a constant force**: $W = F \cdot d \cdot \cos\theta$, where $F$ is force in N, $d$ is displacement in m, and $\theta$ is the angle between them (dimensionless). Also in joules.
- **Perpendicular or zero displacement ⇒ zero work.** Normal force on flat ground does nothing; only forces with a component along the motion transfer energy.

> 💡 **High-Yield Memory Hook (Memory Hook — "Net W → ΔK"):** Say aloud: "Whatever the net *work*, that is the *change in kinetic* energy." Two equal signs, one arrow: $W_{net} = K_f - K_i$. If you forget the sign, remember gravity: lift up → $W_g$ negative → KE drops if $W_{net}$ is dominated by it.

### 🟡 Standard — Regular Study (2d–2mo)
> Bridges Newton's second law (vector) and energy (scalar) without computing acceleration. This is the cleanest shortcut in one-dimensional motion problems.

#### Why the theorem holds

Start from $\sum \vec{F} = m\vec{a}$ along a straight line. Multiply both sides by displacement $d$:

$$F_{net} \cdot d = m \cdot a \cdot d = m \cdot \tfrac{1}{2}(v_f^2 - v_i^2)$$

using $v_f^2 - v_i^2 = 2ad$. The left side is the net work; the right side is the change in $\tfrac{1}{2}mv^2$. The derivation shows the theorem is just Newton's law rewritten in scalar form, which is why it bypasses acceleration entirely.

#### Concept comparison matrix

| Quantity | Formula | SI unit | Type | Sign behaviour |
|---|---|---|---|---|
| Work $W$ | $F \cdot d \cdot \cos\theta$ | J (M L² T⁻²) | Scalar | Positive when force aids motion, negative when it opposes |
| Kinetic energy $K$ | $\tfrac{1}{2}mv^2$ | J (M L² T⁻²) | Scalar | Always $\geq 0$; never negative regardless of direction |
| Momentum $p$ | $mv$ | kg·m·s⁻¹ (M L T⁻¹) | Vector | Carries sign of velocity; not energy |
| Power $P_{avg}$ | $W/t$ | W (M L² T⁻³) | Scalar | Time rate of doing work |

#### Which forces actually do work?

On level ground, **normal force** and **weight** are perpendicular to displacement → both contribute zero work. Only **applied force** and **friction** transfer energy along the line of motion. On an incline at angle $\alpha$, weight contributes $-mg d \sin\alpha$ (negative going up, positive coming down); normal still does zero.

#### Sample item with full resolution

A 2.0 kg cart starts at 3.0 m·s⁻¹ and reaches 5.0 m·s⁻¹ after a constant horizontal push of 6.0 N over 4.0 m. What is the net work done on the cart?

- **Step 1 — Compute $\Delta K$.** $K_f - K_i = \tfrac{1}{2}(2.0)(5.0)^2 - \tfrac{1}{2}(2.0)(3.0)^2 = 25 - 9 = 16$ J.
- **Step 2 — Verify with $W = Fd\cos\theta$.** Push is along motion, so $W_{push} = (6.0)(4.0)(1) = 24$ J. Friction, the only other horizontal force, must then supply $-8$ J so that $W_{net} = 16$ J.
- **Step 3 — Check units.** $F \cdot d$ gives N·m = J, matching $\Delta K$.

> ⚠️ **Examiner Trap:** A common distractor offers "$K_f - K_i = \tfrac{1}{2}m(v_f - v_i)$". That subtracts speeds, not squared speeds. Squaring loses the sign of velocity, which is exactly why $K \geq 0$ — and why $\Delta K$ must be computed from $v^2$.

### 🔴 Extended — Deep Study (3mo+)
> Edge behaviour, conservative vs non-conservative forces, and the limits where the theorem still applies even when acceleration is not constant.

#### When the simple form breaks

The expression $W_{net} = \Delta K$ holds whenever the force–displacement product integrates to a finite number. Two limits deserve attention.

1. **Variable force.** If $F$ changes along the path, replace $F \cdot d$ with $\int F(x)\,dx$. For a spring, $\int -kx\,dx = -\tfrac{1}{2}k(x_f^2 - x_i^2)$. The kinetic-energy side is unchanged because the derivation used only the work–energy identity, not the constancy of $F$.
2. **Non-conservative forces present.** Friction and air drag dissipate mechanical energy. The theorem still gives $W_{net} = \Delta K$, but $\Delta K$ is smaller than the work stored in any conservative field. Equivalently, $\Delta K + \Delta U_{spring} + \Delta U_{gravity} = W_{nc}$ where $W_{nc} < 0$ for friction.

#### Path dependence

- Gravity: $W_g = -mg \Delta h$. A 1 kg mass lifted 2 m vertically needs 19.6 J whether you go straight up or via a zigzag ramp; only vertical rise counts.
- Friction: $W_f = -\mu_k N \cdot d_{path}$. Path length matters; doubling the path doubles the energy lost.

#### Common mistakes table

| Mistake | Why it loses marks | Correct move |
|---|---|---|
| Treating $K$ as a vector | $K$ is scalar; subtracting velocities | Square each speed first |
| Ignoring sign of $W_g$ | Forgetting rise vs fall | Use $\Delta h$ with explicit sign |
| Using $F \cdot d$ on inclines | Forgetting $\cos\theta$ | Project force onto displacement |
| Assuming KE conserved in collisions | Inelastic collisions dissipate energy | Apply $W_{net} = \Delta K$ with $W_{net} < 0$ |

#### Connection to adjacent UPCAT Science topics

The same scalar framework underpins **conservation of mechanical energy** (Physics) and **electric potential energy** (charge in a field). UPCAT occasionally asks which quantity is conserved in a given scenario — the answer is **total mechanical energy only when no non-conservative forces act**, otherwise it is the **work-energy balance** that holds.

#### Advanced practice prompts

1. A 0.50 kg ball is thrown straight up at 12 m·s⁻¹. Using only the work-energy theorem (no kinematics formulas), find the maximum height. Hint: at the peak, $K_f = 0$ and $W_{net} = -mg\Delta h$.
2. A 1.2 kg block compresses a spring ($k = 200$ N·m⁻¹) by 0.10 m and is released from rest. What speed does it leave the spring? Hint: $W_{spring} = \tfrac{1}{2}kx^2$ converts fully to $\tfrac{1}{2}mv^2$ on a frictionless surface.

## Continue your study

- **[View this topic in your UPCAT (Philippines) roadmap](/roadmap/?exam=u-pcat&duration=1mo)** — see where "Work-Energy Theorem" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=u-pcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UPCAT (Philippines) exam overview](/exams/u-pcat/)** — pattern, eligibility, and syllabus
- **[All Science notes](/notes/u-pcat/science/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
