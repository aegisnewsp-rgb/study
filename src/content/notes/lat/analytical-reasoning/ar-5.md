---



exam: lat
examName: LAT (Law Admission Test)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-5
topicName: Direction Sense
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.022426"
lastUpdated: "2026-07-25"
diagramPrompt: "Educational diagram illustrating Direction Sense with clear labels, white background, exam-style illustration"




---

# Direction Sense

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Direction Sense** in LAT Analytical Reasoning tests whether you can track a walker's final position and facing after a chain of movements (turns + distances) starting from an origin. The compass model uses four cardinal points (N, S, E, W) plus four intercardinal points (NE, NW, SE, SW). Turns are always measured from the current facing, never from the original heading.

- **Right turn = +90° clockwise**, **Left turn = −90° anticlockwise**, **U-turn = 180°**. A left turn while facing South points East, not West — direction of turn is body-relative.
- **Shadow rule**: a shadow always falls opposite to the sun. Morning sun in the east → shadow points West; noon sun in the south (Northern Hemisphere) → shadow points North; evening sun in the west → shadow points East.
- **Clock mapping**: 12 = N, 3 = E, 6 = S, 9 = W; each hour-marker = 30° on the clock-face.

| Movement | Resulting facing | Net N/S | Net E/W |
| --- | --- | --- | --- |
| Walk 5 km N | N | +5 | 0 |
| Right turn + walk 3 km | E | +5 | +3 |
| Left turn + walk 4 km | N | +9 | +3 |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Coordinate Model for Movement

Every Direction Sense problem reduces to a 2D grid. Assign **North = +y**, **South = −y**, **East = +x**, **West = −x**. A walker's position after each step updates as `(x, y)`, independent of the direction they happen to be facing. Facing matters only for interpreting the *next* turn command.

Final direction from origin is found with `tan θ = |Net E–W| / |Net N–S|`, then resolve θ to the nearest cardinal or intercardinal bearing (45°, 90°, 135°, etc.). Straight-line distance back to origin uses the Pythagorean theorem: `d = √(Net N–S² + Net E–W²)`.

#### Turn Mechanics

A turn rotates the body about its own axis; it does not change position. The next "walk" command is interpreted in the *new* facing. The most-tested trap is the **facing-flip**: after a 180° U-turn, both movement and facing invert, so a subsequent "walk 6 km" reverses the previous leg.

#### Standard LAT Question Types

- Multi-step sequence: "A walks 4 km North, turns right, walks 3 km, turns left, walks 2 km. How far is he from start?"
- Final-direction question: "In which direction is A from the starting point?"
- Shadow variant: "At 9 AM, A's shadow points West. In which direction is he facing?"
- Clock variant: "If the hour hand points to 4 on a clock face, the direction is?"

| Question type | Skill tested | Common trap |
| --- | --- | --- |
| Distance from start | Pythagoras | Forgetting to take net, not total, components |
| Final direction | Bearing resolution | Reading NE as N-E mixture instead of 45° |
| Shadow at time T | Sun-shadow opposition | Assuming fixed morning shadow |
| Clock-to-direction | 30° per hour mapping | Confusing 2 o'clock (NE-ish) with 4 o'clock (SE) |

- Net displacement is computed **perpendicular pair-wise** (N vs S, E vs W), never by summing all legs.
- Final direction is *always* given relative to the origin, not relative to the last facing.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Micro-Example

Pooja starts at origin O, **facing North**. She walks 8 km North → reaches (0, 8). Turns **right** (now facing East), walks 6 km → (6, 8). Turns **left** (now facing North), walks 4 km → (6, 12). Turns **right** (now facing East), walks 6 km → (12, 12).

Net N–S = +12, Net E–W = +12 → final bearing = arctan(12/12) = 45°, placing her **NE of O**. Straight-line distance = √(144 + 144) ≈ **16.97 km**. Facing at the end is **East**.

#### Edge Cases and Adjacent Links

**Minimum-turn puzzles**: when the question asks "minimum number of turns to reach point B from point A facing direction D", the walker can be assumed to reorient at each leg; the constraint is the *final* facing, not intermediate ones. This connects to **Coding–Decoding of routes** (a sibling LAT topic) where the same sequence is encoded into symbols.

**Clock-direction nuance**: directions are often quoted by hour-hand position. 2 o'clock = NNE region (≈60° clockwise from N), 4 o'clock = SE region (≈120°), 10 o'clock = WNW (≈300°). LAT usually accepts cardinal/intercardinal answers, not sub-30° bearings.

#### Common Examiner Traps

1. **Body-relative turn confusion**: left turn from South = East (rotate body 90° anticlockwise while facing South). Draw a small compass at each step.
2. **Shadow-time shortcut**: remember the sun rises in the East, so morning shadow = West; midday sun in the Southern Hemisphere inverts this, but LAT assumes Northern Hemisphere geography for Pakistan-centred candidates.
3. **"Turns and walks" combined phrasing**: treat as two separate commands, not one diagonal movement.

#### Practice Prompts

1. Karim faces North, walks 10 km, turns left, walks 6 km, turns right, walks 5 km. Find his distance and direction from start.
2. At 4 PM, Aisha's shadow falls to her right while she walks. Which cardinal direction is she facing?

| Quick formula | Expression |
| --- | --- |
| Net N–S | Σ(North) − Σ(South) |
| Net E–W | Σ(East) − Σ(West) |
| Final bearing | arctan(|E–W net| / |N–S net|) |
| Straight-line distance | √(Net N–S² + Net E–W²) |
| Clock-to-degrees | hour × 30°, clockwise from North |

---

## Continue your study

- **[View this topic in your LAT (Law Admission Test) roadmap](/roadmap/?exam=lat&duration=1mo)** — see where "Direction Sense" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LAT (Law Admission Test) exam overview](/exams/lat/)** — pattern, eligibility, and syllabus
- **[All Analytical Reasoning notes](/notes/lat/analytical-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
