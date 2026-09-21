---



exam: jamb
examName: JAMB UTME
subject: physics
subjectName: Physics
topic: phy-2
topicName: Motion in Two Dimensions
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.707493"
lastUpdated: "2026-09-21"
diagramPrompt: "Clean educational diagram showing Motion in Two Dimensions with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Motion in Two Dimensions

### 🟢 Lite — Quick Review (1h–1d)
> The single hardest idea in 2-D motion: horizontal and vertical motions are independent, so you solve them separately and rejoin by vector addition.

A projectile is a particle thrown into the air and then allowed to move freely under gravity. Its motion is the superposition of a constant horizontal velocity and a uniformly accelerated vertical fall.

| Quantity | Formula | Variables (SI units) |
|---|---|---|
| Range (level ground) | R = u² sin 2θ / g | u in m·s⁻¹, θ in degrees, g ≈ 9.8 m·s⁻² |
| Maximum height | H = u² sin² θ / (2g) | same symbols |
| Time of flight | T = 2u sin θ / g | same symbols |
| Centripetal acceleration | a_c = v² / r = ω² r | v in m·s⁻¹, r in m, ω in rad·s⁻¹ |

> 💡 **Memory Hook — "H = Half, D = Double, T = Twin":**
> Height uses sin², Range uses sin 2θ, and Time of flight is **2u sin θ / g** — both Range and Time share a single sine factor. So **sin² θ for H, sin θ for T, sin 2θ for R**.

Two launch angles that add to 90° give the **same range** but **different heights and flight times**; range peaks at θ = 45° only when launch and landing heights match. In a circle, speed stays constant but direction changes, producing centripetal acceleration pointing inward toward the centre.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Most JAMB questions in this area test whether you split a 2-D vector problem into its x and y components before solving.

#### Core Mechanism: The Independence of Motions

When a particle leaves a launcher, it has an initial velocity **u** at an angle **θ** above the horizontal. Decompose it: u_x = u cos θ (constant, horizontal, zero acceleration ignoring drag) and u_y = u sin θ (vertical, decelerated by gravity g). The two components evolve on separate clocks and are reassembled only when displacements, velocities or trajectories are needed.

#### Kinematics in 2-D — The Working Toolkit

From the component split, three standard formulas fall out for level-ground projection:

- Vertical: v_y = u sin θ − gt, y = u sin θ · t − ½ g t²
- Horizontal: x = u cos θ · t
- Eliminating t gives the parabolic trajectory: y = x tan θ − g x² / (2 u² cos² θ)

#### Uniform Circular Motion

A particle sweeping a circle of radius r at linear speed v has angular speed ω = v / r. Even though |v| is unchanged, the velocity **vector** rotates, so an inward acceleration a_c = v² / r = ω² r acts on the particle. The tangential component of acceleration is zero at constant speed; the whole acceleration is radial.

#### 🎯 Worked Exam Problem

A ball is kicked from level ground at 14 m·s⁻¹ at 30° above the horizontal. Find the range, maximum height, and time of flight. (Take g = 9.8 m·s⁻¹.)

**Resolving:** u = 14, θ = 30°, so u cos 30° = 14 × 0.866 = 12.12 m·s⁻¹ and u sin 30° = 14 × 0.5 = 7.0 m·s⁻¹.

**Range:** R = u² sin 2θ / g = (14)² × sin 60° / 9.8 = 196 × 0.866 / 9.8 = **17.32 m**.

**Maximum height:** H = u² sin² θ / (2g) = 196 × 0.25 / (2 × 9.8) = 49 / 19.6 = **2.5 m**.

**Time of flight:** T = 2u sin θ / g = (2 × 7.0) / 9.8 = **1.43 s**.

> ⚠️ **Examiner Trap:** Students often quote θ = 30° in **radians** (≈ 0.5236 rad) and feed it into R = u² sin 2θ / g. JAMB trigonometric tables assume **degrees**, so always convert before evaluating sin 2θ.

#### Concept Comparison Matrix

| Concept | What it acts on | Direction | When it is zero |
|---|---|---|---|
| Centripetal acceleration | Circular motion | Toward the centre | Never (it is the radial component a_c) |
| Tangential acceleration | Curved or circular motion | Along the velocity vector | When speed is constant on the circle |
| Horizontal projectile acceleration | Projectile (ignoring drag) | Horizontal | Always zero on level ground |

---

### 🔴 Extended — Deep Study (3mo+)

#### Relative Velocity in 2-D

The velocity of A **relative to** B is computed by subtracting vectors: **V_AB = V_A − V_B**. In river-crossing and wind-blown-plane problems, the trick is to pick the inertial frame that makes one of the vectors zero, then resolve along and across that motion.

For example, a swimmer whose speed in still water is v_s heading at right angles to a river of width d with downstream current v_r lands at a downstream displacement d v_r / v_s after swimming time t = d / v_s.

#### Edge Cases and Limits

- **Asymmetric launch/landing.** When launch height H₁ and landing height H₂ differ, substitute y = H₂ − H₁ into the trajectory equation and solve the quadratic for the impact x.
- **Complementary angles.** θ and 90° − θ give the same R on level ground, but H at θ exceeds H at 90° − θ, and the higher-angle shot spends longer in the air.
- **g changing height.** Above ≈ 30 km the g ≈ 9.8 assumption breaks; the ISS uses orbital mechanics, not projectile kinematics.
- **Speed ≠ velocity.** In circular motion, speed is constant but velocity changes direction every instant, which is what produces centripetal acceleration even when no tangential force acts.

#### Common Mistakes

1. Writing v at the apex of a trajectory as zero. Only the **vertical component** vanishes; the horizontal u cos θ persists.
2. Plugging θ = 45° as the "general" max-range rule without checking equal launch and landing heights.
3. Adding velocities when the question asks for V_AB: use V_A − V_B, paying attention to sign of components.
4. Confusing angular speed ω (rad·s⁻¹) with frequency f (Hz); they differ by a factor of 2π.
5. Treating the centripetal force as an extra force; it is the **net** inward force provided by tension, gravity, friction, or whatever supplies the inward pull.

#### Two Advanced Practice Prompts

1. A cannon on a cliff 20 m high fires a shell at 40 m·s⁻¹ at 37° above the horizontal toward a target at the cliff base. Using the trajectory equation, derive the horizontal distance to the impact point.
2. An aeroplane flies due north at 200 m·s⁻¹ through a 50 m·s⁻¹ wind blowing from the east. Compute both the ground velocity vector and the heading the pilot must hold to track a true north course.

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Motion in Two Dimensions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/jamb/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
