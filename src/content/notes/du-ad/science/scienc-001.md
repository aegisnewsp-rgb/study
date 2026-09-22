---
exam: du-ad
examName: DU Admission (Bangladesh)
subject: science
subjectName: Science
topic: scienc-001
topicName: Objects on Horizontal Surfaces
weight: 3
country: bangladesh
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-22"
---

# Objects on Horizontal Surfaces

### 🟢 Lite — Quick Review (1h–1d)
> Scan this first if your DU Admission Science paper is tomorrow.

**Friction** opposes motion. On a flat surface, the normal reaction N equals the weight mg, so the maximum horizontal push before sliding is μₛN. Below that, friction is **self-adjusting** — it matches the applied force, never the formula.

| Symbol | Meaning | SI Unit |
|---|---|---|
| μₛ, μₖ | Coefficients of static / kinetic friction | dimensionless |
| N | Normal reaction (= mg on a level surface) | newton (N) |
| Fₛ ≤ μₛN | Limiting static friction inequality | newton (N) |
| Fₖ = μₖN | Kinetic friction once sliding starts | newton (N) |
| tan θᵣ = μₛ | Angle of repose relation | dimensionless |

> 💡 **High-Yield Memory Hook — "Friction is a Camel, Not a Horse":** A camel (static friction) refuses to move until pushed past its limit; a horse (kinetic friction) keeps pulling back at a steady rate once walking starts. Both oppose you, but only one adjusts itself.

- μₛ **>** μₖ always — the camel is harder to start than to keep sliding.
- N = mg only when the surface is **truly** horizontal and no vertical pull/push exists.
- Direction of friction = opposite of motion or opposite of the **tendency** of motion.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Work through this tier if you have between two days and two months before the test.

#### Force Setup on a Level Plane

Place a block of mass m on a flat table. Gravity pulls it down with weight mg; the surface pushes straight up with normal reaction N. With nothing pushing vertically, **N = mg**. Any horizontal push P is met by friction f along the surface.

The defining behaviour: friction is **self-adjusting up to a ceiling**. While the block sits still, f equals P exactly — Newton’s first law demands it. Increase P until it reaches μₛN. Push any harder and the block breaks free.

#### The Three Friction Regimes

| Regime | When it applies | Magnitude | Direction |
|---|---|---|---|
| Static (at rest, P < μₛN) | Block not moving, push below limit | f = P (matches applied force) | Opposes the **tendency** to slide |
| Limiting (at rest, P = μₛN) | Block on the verge of slipping | f_max = μₛN | Opposes the applied push |
| Kinetic (sliding) | Block already moving | f = μₖN (steady) | Opposes velocity vector |

#### Comparison Matrix: Confusable Pairs

| Concept A | Concept B | Key Distinction |
|---|---|---|
| μₛ | μₖ | μₛ is used before motion starts; μₖ applies once the block slides. μₖ < μₛ. |
| Friction | Applied force | Applied force is what you supply; friction is the surface’s response. They are equal only in the static regime. |
| Normal reaction N | Weight mg | N = mg only on a horizontal surface with no vertical applied force. On an incline, N = mg cosθ. |
| Angle of repose | Angle of sliding | Repose is the angle where sliding **just begins** (μₛ); the sliding angle during motion is governed by μₖ. |
| Limiting friction | Maximum friction | Same thing — f_max = μₛN is the upper bound of static friction. |

#### Applying Newton’s Second Law Along the Surface

Once P exceeds μₛN, the block accelerates horizontally. The horizontal equation of motion is:

> F_net = P − μₖN = ma, where m is mass in kg, a is acceleration in m s⁻², and the entire left side is in newtons.

Because N = mg on a level surface, this simplifies to **P − μₖmg = ma**. Watch for problems where the push is at an angle — that splits into components and changes N, which then changes friction. That is the favourite DU trick.

#### Worked Problem: Will the Block Slide?

A 5 kg wooden block rests on a horizontal floor. The coefficient of static friction is 0.45 and kinetic friction is 0.35. A horizontal force of 18 N is applied. Take g = 9.8 m s⁻².

Step 1 — Normal reaction. No vertical push, so N = mg = 5 × 9.8 = **49 N**.

Step 2 — Maximum static friction. f_max = μₛN = 0.45 × 49 = **22.05 N**.

Step 3 — Compare. Applied force P = 18 N. Since 18 < 22.05, the block does **not** move.

Step 4 — Actual friction. Because the block stays at rest, friction adjusts to match the push: f = **18 N**, not μₛN. This is the most common DU trap — students write 22.05 N and lose the mark.

Step 5 — If P had been 25 N instead, the block would slide. Acceleration would be (25 − 0.35 × 49) / 5 = (25 − 17.15) / 5 = **1.57 m s⁻²**.

> ⚠️ **Examiner Trap:** "Compute the friction force" when P < μₛN is a favourite. The correct answer is f = P, not μₛN. Many candidates write μₛN automatically and pick up zero.

---

### 🔴 Extended — Deep Study (3mo+)
> For students who want to handle every edge case the DU paper can throw.

#### Edge Cases Worth Memorising

1. **Push at an angle θ below horizontal.** Vertical component adds to N, so N = mg + P sinθ. Friction becomes μ(mg + P sinθ). Acceleration needs the horizontal component only: a = [P cosθ − μ(mg + P sinθ)] / m.
2. **Pull at an angle θ above horizontal.** Vertical component **lifts** the block, so N = mg − P sinθ. Friction drops. There is a critical angle above which N goes negative and the block leaves the floor — that is a DU numerical favourite.
3. **Stacked blocks.** Lower block’s friction with the floor uses the total stacked weight. Friction between blocks only matters when the upper block is pushed or the lower one is yanked.
4. **Two opposing horizontal forces.** The net applied force decides whether static friction balances the difference or whether the block accelerates.

#### Boundary Behaviour

At the angle of repose, the block on an incline is on the verge of sliding. The relation tan θᵣ = μₛ is independent of mass — that is why a small coin and a heavy brick on the same slope begin to slide at the same tilt. Note this depends on **static** μ; the kinetic coefficient gives the constant slide angle once moving.

#### Two Advanced Prompts

1. A 4 kg block is pulled by a 30 N force acting 20° above the horizontal. μₛ = 0.4, μₖ = 0.3. Does it slide? If yes, find the acceleration. (Hint: compute N = mg − P sinθ first.)
2. A block of mass 2 kg rests on a horizontal belt moving at constant velocity 2 m s⁻¹. μₖ = 0.2, μₛ = 0.3. What horizontal force must be applied to the block so that it moves at 3 m s⁻¹ relative to the ground? (Hint: belt friction depends on relative motion.)

#### Connections to Other Syllabus Items

- Links directly to **Newton’s laws of motion** — friction problems are second-law exercises in disguise.
- Feeds into **work, energy and power** — friction dissipates energy as heat, equal to μₖN × distance slid.
- Underpins **circular motion on horizontal turntables** — centripetal force supplied by static friction at μₛmg = mv²/r.
- Bridges to **inclined planes and wedges** — the horizontal case is the θ = 0 limit of a general slope problem.

---

## Continue your study

- **[View this topic in your DU Admission (Bangladesh) roadmap](/roadmap/?exam=du-ad&duration=1mo)** — see where "Objects on Horizontal Surfaces" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=du-ad&duration=1d)** — 1-day sprint covering highest-weight topics
- **[DU Admission (Bangladesh) exam overview](/exams/du-ad/)** — pattern, eligibility, and syllabus
- **[All Science notes](/notes/du-ad/science/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
