---
exam: waec
examName: WAEC WASSCE
subject: physics
subjectName: Physics
topic: phy-2
topicName: "Kinematics: Motion in a Straight Line"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.628192"
lastUpdated: "2026-09-22"
diagramPrompt: "Clean educational diagram showing Kinematics: Motion in a Straight Line with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"

---

# Kinematics: Motion in a Straight Line

### 🟢 Lite — Quick Review (1h–1d)

> Treat the four symbols **u, v, a, s, t** as the only variables WAEC will ever hand you in a 1-D motion problem.

For WAEC WASSCE Physics, this topic covers bodies moving along a single straight track (or falling vertically) at either **constant velocity** or **uniformly accelerated motion**. Everything reduces to four equations and a sign convention. Take the direction of motion as positive; gravity, when acting against motion, is negative.

| Symbol | Meaning | SI unit | Dimension |
|---|---|---|---|
| u | initial velocity | m s⁻¹ | LT⁻¹ |
| v | final velocity | m s⁻¹ | LT⁻¹ |
| a | acceleration | m s⁻² | LT⁻² |
| s | displacement | m | L |
| t | time | s | T |

The four workhorse equations (valid only when a is constant):

- v = u + at
- s = ut + ½at²
- v² = u² + 2as
- s = ½(u + v)t

For free fall under WAEC's convention, g = 10 m s⁻².

> 💡 **High-Yield Memory Hook — "VUSA, SUVAT, VUSS":** the four equations in the order V = U + A·t, S = U·t + ½A·t², V² = U² + 2A·S, S = ½(U+V)·t. Most candidates forget the constant-acceleration requirement and lose marks. Memorise the rule: **a must be constant, otherwise SUVAT is dead.**

Two graph shortcuts save time on Paper 2:

- Gradient of a velocity–time graph = acceleration.
- Area under a velocity–time graph = displacement.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Use the SUVAT block above only after you have checked that acceleration is constant; if a varies, the equations do not apply.

#### Defining the five kinematic quantities

**Displacement (s)** is the directed distance from start to finish — a vector in metres. **Distance** is the total path length — a scalar. A body that walks 5 m east then 3 m west has displacement 2 m east but distance 8 m. WAEC questions often swap these two words deliberately.

**Velocity (v)** is rate of change of displacement, vector, m s⁻¹. **Speed** is rate of change of distance, scalar. **Acceleration (a)** is rate of change of velocity, vector, m s⁻². When v is constant, a = 0 and the body covers equal displacements in equal intervals.

#### Concept Comparison Matrix — distance vs displacement, speed vs velocity

| Quantity | Type | Symbol | SI unit | Graphical clue |
|---|---|---|---|---|
| Distance | scalar | d | m | area under speed–time graph |
| Displacement | vector | s | m | area under velocity–time graph (signed) |
| Speed | scalar | — | m s⁻¹ | gradient of distance–time graph |
| Velocity | vector | v | m s⁻¹ | gradient of displacement–time graph |
| Acceleration | vector | a | m s⁻² | gradient of velocity–time graph |

#### Uniform velocity versus uniformly accelerated motion

A body under uniform velocity traces a straight d–t line through the origin; the slope equals v. A uniformly accelerated body traces a parabola on the d–t graph, and a straight inclined line on the v–t graph whose slope equals a and whose area under it equals s. WAEC's most common Paper 2 question asks candidates to extract u, a, and s directly from a sketched v–t graph — read the intercept, read the slope, then take the area.

#### Vertical motion under gravity

Take upward as positive. Then a = −g = −10 m s⁻². A stone thrown up with u = 30 m s⁻¹ climbs until v = 0, then falls back. Maximum height comes from v² = u² + 2as with v = 0, giving H = u²/(2g) = 30²/20 = 45 m. Time to top: t = u/g = 3 s. Total time of flight = 2u/g = 6 s. The motion is symmetric: the body returns to launch height with speed 30 m s⁻¹ downward.

#### Worked exam-style problem — stone dropped from a 45 m cliff

A stone is released from rest at the top of a 45 m cliff. Using g = 10 m s⁻², find (i) the time taken to reach the ground and (ii) the speed on impact.

Take downward as positive. Initial velocity u = 0, a = g = 10 m s⁻², s = 45 m.

- (i) From s = ut + ½at²: 45 = 0 + ½(10)t², so t² = 9, giving **t = 3 s**.
- (ii) From v² = u² + 2as: v² = 0 + 2(10)(45) = 900, so **v = 30 m s⁻¹** downward.

Cross-check with v = u + at: v = 0 + (10)(3) = 30 m s⁻¹. Consistent.

> ⚠️ **Examiner Trap:** candidates who take *upward* as positive and still write a = +10 m s⁻² get a physically impossible "height gained" of 45 m, because they have applied gravity in the wrong direction. The sign of a must follow the sign convention you chose at the start of the question.

---

### 🔴 Extended — Deep Study (3mo+)

> The deepest WAEC trap is not the algebra — it is using SUVAT on motion whose acceleration is not constant.

#### Where SUVAT silently fails

SUVAT assumes **a = constant** in both magnitude and direction. It breaks down the instant a depends on velocity, position, or time. A falling body ignoring air resistance is fine; a parachute jump, a charged particle in a non-uniform field, or a spring-compressed mass is not. In WASSCE structured questions, the phrase "uniform acceleration" is the cue to use SUVAT; "constant force but increasing mass" is the cue not to.

#### Relative motion in one dimension

When two bodies A and B move along the same line, the velocity of A relative to B is v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>, with sign retained. This is why two cars approaching each other at 20 m s⁻¹ and 15 m s⁻¹ close at 35 m s⁻¹, not 5 m s⁻¹. WAEC sets this up rarely in Paper 1 and reliably in Paper 2.

#### Mathematical limit — instantaneous velocity

Instantaneous velocity is the limit of average velocity as Δt → 0: v = ds/dt. Average velocity over an interval, when a is constant, equals (u + v)/2 = s/t. These two statements give the same numerical answer only because a is constant; in general, average velocity is the integral of v dt divided by the interval, not (u + v)/2.

#### Two advanced practice prompts

1. A ball is thrown vertically upward from a 20 m platform with u = 15 m s⁻¹. Using g = 10 m s⁻², calculate the maximum height above the ground and the total time before it hits the ground. Answer key: H above platform = u²/(2g) = 11.25 m, so maximum height above ground = 31.25 m; time up = 1.5 s; time down from 31.25 m: t = √(2 × 31.25/10) = 2.5 s; total flight = 4 s.
2. A v–t graph shows a straight line from (0 s, 0 m s⁻¹) to (4 s, 20 m s⁻¹) and then a horizontal line at 20 m s⁻¹ from t = 4 s to t = 10 s. Find total displacement and average speed. Answer key: area of triangle = ½(4)(20) = 40 m; area of rectangle = 6 × 20 = 120 m; total s = 160 m; average speed = 160/10 = 16 m s⁻¹.

| Advanced trap | Why it bites | Fix |
|---|---|---|
| Applying SUVAT when a varies | Algebra looks fine but the physics is wrong | Re-read for the words "uniform" or "constant" |
| Mixing g = 9.8 with g = 10 | WAEC answers use 10 unless told otherwise | Use 10 m s⁻² as default |
| Reading v–t graph area as velocity | Confuses slope with area | Slope = a, area = s |
| Ignoring direction in relative motion | Loses sign on v<sub>AB</sub> | Keep vectors algebraic, not numeric |
| Stopping at v = 0 for vertical throw | Leaves H and total time unfound | Use v² = u² + 2as with v = 0 |

---

## Continue your study

- **[View this topic in your WAEC WASSCE roadmap](/roadmap/?exam=waec&duration=1mo)** — see where "Kinematics: Motion in a Straight Line" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=waec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[WAEC WASSCE exam overview](/exams/waec/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/waec/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
