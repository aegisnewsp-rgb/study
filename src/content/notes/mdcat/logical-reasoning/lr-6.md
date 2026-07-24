---



exam: mdcat
examName: MDCAT
subject: logical-reasoning
subjectName: Logical Reasoning
topic: lr-6
topicName: Direction Sense
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.120843"
lastUpdated: "2026-07-24"
diagramPrompt: "Educational diagram illustrating Direction Sense with clear labels, white background, exam-style illustration"




---

# Direction Sense

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Direction Sense questions ask you to track a person's **facing direction** and **final position** after a string of moves (walks + turns). Cardinal directions are **N, S, E, W**; intercardinal are **NE, NW, SE, SW**. Each turn is a fixed angle: left = −90°, right = +90°, U-turn = 180° (cumulative facing angle mod 360°). Distance walked is a vector on a 2D grid where East = +x and North = +y.

- **Vector rule:** sum east components and north components separately, then apply Pythagoras only for the shortest straight-line **displacement**.
- **Shadow rule:** at sunrise → shadow points West; at noon → shadow points South (Northern Hemisphere); at sunset → shadow points East.
- **Clock rule:** minute hand at 12 = North; each 15-minute step = 90°.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Facing vs. Movement

A turn changes the **facing direction** but does not move the person. Only a "walk" statement adds distance. Solve by maintaining a *cumulative facing angle* modulo 360°, then converting back to the 8-point compass rose (every 45°).

#### Tracking procedure

For each step: (1) read the instruction, (2) update facing using the turn conversion table, (3) decompose the walk into **East (+x)** and **North (+y)** components using the new facing, (4) add to running totals.

#### Worked example

A person starts facing North, walks 5 km, turns right, walks 3 km, turns left, walks 4 km. Facing sequence: N → E → N. East total = 3 km; North total = 5 + 4 = 9 km. Displacement magnitude = √(3² + 9²) = √90 ≈ 9.49 km.

#### Shadow and clock analogies

Shadow problems use the sun's azimuth to infer direction. Clock problems re-label 12 as N and use minute-hand positions (3 = E, 6 = S, 9 = W) — each minute = 6°.

| Turn type | Angle change | Effect on facing (if N) |
| --- | --- | --- |
| Right | +90° | N → E |
| Left | −90° | N → W |
| U-turn | 180° | N → S |
| 4 rights | 360° | N → N (net) |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases that trip candidates

A 360° rotation (four consecutive right turns, or two U-turns) leaves facing unchanged but may inflate the apparent move count. Always **reset facing before applying the next turn**, especially after a long walk that has rotated the person's local "left/right." Shadow questions across hemispheres invert the noon rule: in the Southern Hemisphere, noon shadows point North.

#### Common mistakes

- Confusing left vs. right after the person has rotated (e.g., facing East, "his left" is North, not West).
- Summing total walked distance instead of computing net displacement — examiners love asking for the *shortest* distance from start to end.
- Treating a "turn back" statement as a 180° turn instead of reversing the previous step's vector (they cancel, net zero).

#### Practice prompts

1. Starting facing South, walk 4 km, turn right (now facing W), walk 3 km, turn left (now facing S), walk 5 km, then turn right twice. Find final facing and displacement.
2. At 9:00 a.m. the sun is East and your shadow points West; you turn so the shadow is now on your right. Which direction are you facing?

#### Exam strategy

MDCAT places 1–2 Direction Sense MCQs inside the ~3% Logical Reasoning block. Budget 60–90 seconds each: sketch a compass, label each turn, and track facing in degrees — never guess left/right in your head.

---

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Direction Sense" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Logical Reasoning notes](/notes/mdcat/logical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
