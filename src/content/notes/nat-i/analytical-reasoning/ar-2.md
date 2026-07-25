---



exam: nat-i
examName: NAT-I (NTS)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-2
topicName: Direction Sense
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.128418"
lastUpdated: "2026-07-25"
diagramPrompt: "Educational diagram illustrating Direction Sense with clear labels, white background, exam-style illustration"




---

# Direction Sense

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Direction Sense questions ask where a person ends up after a chain of *turns* and *walks*. The starting facing is usually North, and each "turn right" rotates facing by +90° clockwise; "turn left" by −90°.

- **Net rotation (clockwise)** = (Σ right turns) − (Σ left turns), each in 90° units.
- **Final position** comes from summing east steps minus west steps (Δx) and north steps minus south steps (Δy) independently.
- **Shadow rule**: at noon, the sun is due South, so a person's shadow always points 180° opposite to their facing direction.

| Instruction | Effect on facing | Effect on position |
| --- | --- | --- |
| Walk N km | No change | Δy +N |
| Turn right | +90° clockwise | No change |
| Turn left | −90° clockwise | No change |

NAT-I tip: draw a tiny N-S-E-W grid after every step — most wrong answers come from executing a turn after the walk that follows it.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### How turns and walks interact

A movement statement has two parts: a *turn* that re-orients the facing axis, and a *walk* that displaces the person along the new axis. Many errors happen when students apply the walk using the *old* facing direction. The safe habit is to rotate first, then advance.

#### Working with the 2D plane

Treat East as +x and North as +y. After each instruction, update the current facing angle (measured clockwise from North) and the coordinates (x, y). The net displacement is the final coordinate minus the starting point.

#### Final bearing and shadow

The bearing from start to end is `θ = atan2(Δx, Δy)` in degrees, clockwise from North. The shadow of a person at noon points exactly opposite to their current facing, i.e. shadow angle = facing − 180° (mod 360°).

| Concept | Key point |
| --- | --- |
| Right turn | +90° clockwise rotation of facing axis |
| Left turn | −90° clockwise rotation of facing axis |
| Half turn / U-turn | +180° (facing flips to opposite cardinal) |
| Net rotation | Σ(right) − Σ(left), in 90° multiples |

- Always redraw the facing arrow before reading the next "walk X m" clause.
- Convert km, m, and "units" to one common unit before summing.
- For distance questions, use `d = √(Δx² + Δy²)`, not the path length.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and tricky wording

Statements like "facing North, turn to your right and walk 5 m, then turn left" require care: after the first turn you are facing East, and the next "left" turns you to North again. Watch for **clockwise/anticlockwise** wording used instead of right/left — a 90° clockwise turn from North lands you facing East, identical to "turn right" only if you started North.

#### Adjacent topics and crossover

Direction Sense pairs with **Blood Relations** (e.g. "A, facing South, is to the left of B") and with **Coding–Decoding** of compass-based letter shifts. The shadow concept recurs in **clock-angle** problems where the hour hand acts like a sun-shadow indicator.

#### Worked micro-example

Start at origin (0,0), facing North. Walk 6 m N → (0,6). Turn right → facing East. Walk 8 m → (8,6). Turn left → facing North. Walk 4 m → (8,10). Net Δx = 8 m E, Δy = 10 m N. Distance = √(64 + 100) = √164 ≈ 12.81 m. Bearing = atan2(8, 10) ≈ 38.66° East of North. Shadow angle = 0° − 180° = 180° (pointing South).

| Step | Facing after | Position after |
| --- | --- | --- |
| Start | North | (0, 0) |
| Walk 6 N | North | (0, 6) |
| Turn right | East | (0, 6) |
| Walk 8 E | East | (8, 6) |
| Turn left | North | (8, 6) |
| Walk 4 N | North | (8, 10) |

#### Exam strategy for NAT-I

With ~4% weight, expect 2–4 MCQs, usually embedded inside a 5-question Analytical Reasoning set. Allocate ≤90 seconds per item. Eliminate impossible bearings first, then compute. Practice 10 shadow-angle questions — examiners reuse the noon-sun trick.

1. Sketch a 4×4 grid; mark North up, East right.
2. Update facing *before* executing each "walk" clause.
3. Convert all distances to metres before summing Δx and Δy.
4. For bearing choices, compute atan2(Δx, Δy) and match the nearest option.
5. In shadow MCQs, add or subtract 180° from facing, never 90°.

---

## Continue your study

- **[View this topic in your NAT-I (NTS) roadmap](/roadmap/?exam=nat-i&duration=1mo)** — see where "Direction Sense" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nat-i&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NAT-I (NTS) exam overview](/exams/nat-i/)** — pattern, eligibility, and syllabus
- **[All Analytical Reasoning notes](/notes/nat-i/analytical-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
