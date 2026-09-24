---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-015
topicName: Forces, Newton's Laws and Moments
weight: 3
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Forces, Newton's Laws and Moments — A-Level Mathematics (AQA 7357) Notes

Forces, Newton's Laws and Moments is sections R and S of the AQA 7357 specification. The section covers Newton's laws of motion, resolving forces, equilibrium, connected particles and pulleys, friction, and moments about a point including non-uniform rods. These sections sit on Paper 2 alongside vectors and kinematics, and together they form the mechanics content. The two habits that pay off most are: resolve forces into perpendicular components before applying Newton's second law, and write a free-body diagram for every problem — most mechanics errors are missing forces on the diagram, not arithmetic mistakes.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Newton's three laws

- **First law (inertia)**: an object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted on by an unbalanced external force.
- **Second law**: F = ma. The net force on an object equals its mass times its acceleration.
- **Third law**: for every action, there is an equal and opposite reaction. Forces between two objects come in equal-and-opposite pairs.

#### Resolving forces

A force F at angle θ to the horizontal has components:

- Horizontal: F cos θ.
- Vertical: F sin θ.

Always resolve into perpendicular directions (typically horizontal and vertical, or parallel and perpendicular to an inclined plane).

#### Equilibrium

An object is in equilibrium if the net force is zero AND the net moment is zero. So:

- Sum of forces in each direction = 0.
- Sum of moments about any point = 0.

#### Moments

Moment of a force about a point = force × perpendicular distance from the point to the line of action of the force.

For a non-uniform rod, the weight acts at the centre of mass (not the geometric centre). AQA questions on moments frequently test this distinction.

#### Friction

Friction force ≤ μR, where μ is the coefficient of friction and R is the normal reaction. The friction force opposes the relative motion or the tendency for motion.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Free-body diagrams

A free-body diagram shows an object with all the forces acting on it, as vectors drawn from a common point. The diagram makes it obvious which forces are unbalanced.

For a block on a horizontal surface:

- Weight W = mg downwards.
- Normal reaction R upwards.
- Applied force F at some angle.
- Friction f opposing motion (or the tendency).

**Worked example.** A 5 kg block on a horizontal surface has a horizontal force of 30 N applied. The coefficient of friction is 0.4. Find the acceleration.

Weight = 5 · 9.8 = 49 N. Normal reaction R = 49 N (no vertical acceleration).

Friction f = μR = 0.4 · 49 = 19.6 N.

Net horizontal force = 30 − 19.6 = 10.4 N.

Acceleration a = F/m = 10.4 / 5 = 2.08 m/s².

#### Newton's second law in detail

F = ma is the cornerstone. In vector form, F = ma where each component is resolved independently:

- Fx = m · ax.
- Fy = m · ay.
- Fz = m · az.

**Worked example.** A 10 kg object has a force F = (30, 40) N applied. Find the acceleration.

m = 10 kg. a = F/m = (3, 4) m/s². Magnitude of acceleration: √(9 + 16) = 5 m/s². Direction: arctan(4/3) ≈ 53.13° from horizontal.

#### Resolving forces on an inclined plane

On a slope at angle α, weight (mg) has components:

- Parallel to slope (down): mg sin α.
- Perpendicular to slope (into slope): mg cos α.

The normal reaction balances the perpendicular component: R = mg cos α.

**Worked example.** A 5 kg block on a 30° slope. The coefficient of friction is 0.3. The block is at rest. Find the minimum force to start it moving up the slope.

Weight component down slope: 5 · 9.8 · sin 30° = 5 · 9.8 · 0.5 = 24.5 N.
Normal reaction: R = 5 · 9.8 · cos 30° = 5 · 9.8 · 0.866 ≈ 42.43 N.
Maximum static friction (down slope, opposing motion): f = μR = 0.3 · 42.43 ≈ 12.73 N.

Net force down slope (without applied force): 24.5 N. Net friction available: 12.73 N. So the block will start moving under its own weight (24.5 > 12.73).

For the block to be on the verge of moving up: applied force P = 24.5 + 12.73 = 37.23 N.

#### Equilibrium of a particle

A particle is in equilibrium if the net force is zero. Solve by resolving forces into components and setting each sum to zero.

**Worked example.** A 10 kg particle is suspended by two strings. One is at 30° from vertical, the other at 60° from vertical. Find the tensions.

The particle is in equilibrium. The forces on it: weight 98 N down, T₁ along string 1 (30° from vertical), T₂ along string 2 (60° from vertical).

Resolve vertically: T₁ cos 30° + T₂ cos 60° = 98.
Resolve horizontally: T₁ sin 30° = T₂ sin 60°.

From horizontal: T₁ = T₂ · sin 60° / sin 30° = T₂ · (√3/2) / (1/2) = T₂√3.

Substitute: T₂√3 · cos 30° + T₂ cos 60° = 98 → T₂√3 · (√3/2) + T₂ · (1/2) = 98 → T₂ · (3/2) + T₂ · (1/2) = 98 → 2 T₂ = 98 → T₂ = 49 N. T₁ = 49√3 ≈ 84.87 N.

#### Connected particles and pulleys

A typical AQA setup: two particles connected by a string over a pulley. The string tension is the same throughout (massless, frictionless pulley).

**Worked example.** A 3 kg particle and a 5 kg particle are connected by a string over a pulley. Find the acceleration.

Net driving force = (5 − 3) · 9.8 = 19.6 N. Total mass = 8 kg. Acceleration a = 19.6 / 8 = 2.45 m/s².

Tension T: for the 3 kg particle, T − 3 · 9.8 = 3 · 2.45 → T = 29.4 + 7.35 = 36.75 N.

#### Moments and equilibrium of a rigid body

For a rigid body in equilibrium, the sum of moments about any point is zero.

**Worked example.** A uniform rod of mass 2 kg and length 4 m is pivoted at one end. A 5 kg mass is hung at the other end. Find the force needed at the midpoint to keep the rod horizontal.

Weight of rod = 2 · 9.8 = 19.6 N, acting at the centre (2 m from pivot). Moment about pivot: 19.6 · 2 = 39.2 N m (clockwise).

Weight of mass = 5 · 9.8 = 49 N at 4 m. Moment: 49 · 4 = 196 N m (clockwise).

Total clockwise moment = 39.2 + 196 = 235.2 N m.

Let F be the upward force at the midpoint (2 m from pivot). Counter-clockwise moment: F · 2.

Equilibrium: F · 2 = 235.2 → F = 117.6 N.

#### Moments with non-uniform rods

For a non-uniform rod, the weight acts at the centre of mass, not the geometric centre. The centre of mass is found by:

x_cm = (Σ mᵢ xᵢ) / (Σ mᵢ)

where xᵢ is the position of each mass element mᵢ.

**Worked example.** A rod of length 6 m has mass 2 kg concentrated at x = 0 and mass 4 kg at x = 6 m. Find the centre of mass.

x_cm = (2 · 0 + 4 · 6) / (2 + 4) = 24 / 6 = 4 m.

So the centre of mass is 4 m from the left end. The moment about the left end is (2 · 0 + 4 · 6) · g = 24g N m (using the masses times positions), but for force purposes the weight 6g acts at x = 4 m.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why every mechanics question starts with a diagram

A common reason students lose marks is that they try to solve the problem from the text without drawing the diagram. The diagram shows:

- Every force acting on each object.
- The direction of each force.
- The pivot points for moments.

Once the diagram is drawn correctly, the equations follow almost mechanically: F = ma in each direction, and sum of moments = 0.

A useful discipline: for every mechanics question, draw the diagram before writing any equation. The diagram is part of the solution; the equation is the natural extension.

#### Worked pattern — connected particles with friction

Two particles of mass m₁ = 4 kg and m₂ = 6 kg are connected by a string over a pulley. The 4 kg particle is on a horizontal surface with coefficient of friction 0.3, and the 6 kg particle hangs vertically. Find the acceleration.

Forces on m₂: weight 6 · 9.8 = 58.8 N down, tension T up. m₂g − T = m₂ a → 58.8 − T = 6a.

Forces on m₁: tension T right, friction f = μ m₁ g = 0.3 · 4 · 9.8 = 11.76 N left (opposing motion to the right). T − f = m₁ a → T − 11.76 = 4a.

Add the equations: 58.8 − 11.76 = 10a → 47.04 = 10a → a = 4.704 m/s².

T = 4 · 4.704 + 11.76 = 18.816 + 11.76 = 30.58 N.

#### Worked pattern — ladder against a wall

A uniform ladder of mass m and length L rests against a smooth vertical wall, with its base on a rough horizontal surface (coefficient of friction μ). Find the angle θ below which the ladder slips.

Forces: weight mg down at the centre of the ladder. Normal reaction R₁ from the wall (horizontal, pushing away from the wall). Normal reaction R₂ from the ground (vertical, up). Friction f at the base (horizontal, towards the wall).

Resolve: R₂ = mg (vertical equilibrium). R₁ = f (horizontal equilibrium).

Moments about the base of the ladder: R₁ · L sin θ = mg · (L/2) cos θ → R₁ = (mg/2) cot θ.

So f = (mg/2) cot θ. For the ladder not to slip: f ≤ μR₂ = μ mg → (mg/2) cot θ ≤ μ mg → cot θ ≤ 2μ → tan θ ≥ 1/(2μ).

If μ = 0.3, the ladder slips when tan θ < 1/0.6 ≈ 1.67, i.e. θ < 59°.

#### Common misconceptions (and the correction)

- "Weight and mass are the same." Mass is in kg; weight is a force in newtons. Weight = mg.
- "Friction always opposes motion." Friction opposes relative motion or the tendency for motion. A static object on a slope with no applied force has friction opposing the tendency to slide down.
- "The reaction force is always vertical." The reaction force is perpendicular to the surface. On an inclined plane, the reaction is perpendicular to the slope, not vertical.
- "Newton's third law is just momentum conservation." It is a separate statement about force pairs. Two interacting objects exert equal and opposite forces on each other; this is independent of the conservation of momentum.

#### Specification reference

Sections R and S of the AQA A-level Mathematics 7357 specification appear on Paper 2 alongside vectors (section J) and kinematics (sections P and Q). Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*