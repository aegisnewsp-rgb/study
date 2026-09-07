---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-007
topicName: "Direction Sense"
tier: unified
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Complex path diagram showing multiple turns, intermediate points, and final displacement vector with distance calculation."
country: india
generated: 2026-05-26
lastUpdated: "2026-09-07"
---

# Direction Sense

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your GATE GA paper.

Direction Sense asks you to track a person's **position** and **facing** step by step using cardinal (N, S, E, W) and intercardinal (NE, SE, SW, NW) directions. Each **left turn** rotates facing 90° anticlockwise; each **right turn** rotates 90° clockwise; a **turn-around** reverses facing by 180°.

The two most-tested computations are final **distance** (sum of straight segments along the path) and final **bearing** (clockwise angle from North, 0°–360°). Bearing maps cleanly: N = 0°, E = 90°, S = 180°, W = 270°, with the four diagonals at the 45° midpoints.

- Facing ≠ movement: a turn updates facing only; walking updates position only.
- Always re-evaluate orientation at the END of the journey, not after the last turn.
- For GATE GA, expect 1 question (~2% weight), in most keys a single MCQ or NAT worth 1 or 2 marks.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Conventions

A direction problem is solved on a **fixed Earth-frame grid** (North = +y, East = +x). The walker has two independent attributes: a **position** (x, y) and a **facing** (heading). Walking changes position in the direction faced; turning changes only the heading.

#### Standard Step-Solving Method

1. Mark the start point and write the initial facing (in many papers East in GATE defaults).
2. For each statement, apply movement or turn in order.
3. After every step, update both (x, y) and facing.
4. At the end, compute displacement and bearing from start.

#### Direction-to-Angle Map

| Direction | Bearing (° clockwise from N) | Vector (Δx, Δy) |
| --- | --- | --- |
| North | 0° | (0, +1) |
| East | 90° | (+1, 0) |
| South | 180° | (0, −1) |
| West | 270° | (−1, 0) |
| NE | 45° | (+1, +1) |
| SW | 225° | (−1, −1) |

#### Turn Effects on Facing

- Turn **right** from N → E; from E → S; from S → W; from W → N (adds 90° mod 360°).
- Turn **left** from N → W; from W → S; from S → E; from E → N (subtracts 90° mod 360°).
- A "turn around" or "face back" instruction flips facing by 180°.

#### Two Recurring Traps

- Walking distance ≠ straight-line displacement. A square 4 km loop returns the walker to the start (0 km displacement) but covers 16 km of travel.
- "Turns left **while moving**" in most keys means walk first, then turn. "Turns left and walks" means turn first, then walk. Read carefully.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Micro-Example

Ravi starts at point A facing **North**, walks 4 km, turns right and walks 3 km, turns left and walks 2 km, turns around and walks 5 km. Where is he relative to A?

Tracking each step with (x, y) and bearing:

- Start: (0, 0), facing N (0°).
- Walk 4 km N → (0, 4), facing N.
- Turn right → facing E (90°); walk 3 km → (3, 4).
- Turn left → facing N (0°); walk 2 km → (3, 6).
- Turn around → facing S (180°); walk 5 km → (3, 1).

Net displacement: Δx = 3, Δy = 1. Distance R = √(3² + 1²) = √10 ≈ 3.16 km. Final bearing = arctan(3/1) measured east of North ≈ 71.6°, so Ravi is roughly **East–North-East (ENE)** of A, closer to E than NE.

#### Edge Cases and Adjacent Topics

- **Shadow problems:** a morning shadow points West, a noon shadow points North, an evening shadow points East — opposite the sun's azimuth. These invert the usual direction logic.
- **Clock–sun analogy:** the hour hand direction mimics the sun's azimuth; use this to decode shadow orientation without explicit time.
- **Linkage to Coding-Decoding and Series:** the same left/right flipping rules appear in mirror-image and water-image questions.

#### Common Mistakes

| Mistake | Correction |
| --- | --- |
| Treating "left" as absolute West | Left is relative to current facing |
| Summing magnitudes without direction | Use signed Δx, Δy on a grid |
| Reading final direction after the last turn only | Re-evaluate facing at the end of the path |
| Confusing displacement with total distance | R is the straight-line result; sum of segments is path length |

#### Practice Prompts

1. Priya starts facing South, walks 6 km, turns left, walks 4 km, turns right, walks 3 km. Find her distance and bearing from start.
2. At 9 a.m. a pole's shadow points exactly West–South-West. Which way is the sun, and what time bracket does this match (assume Northern Hemisphere, standard time)?

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Direction Sense" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Logical Reasoning notes](/notes/gate/logical-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
