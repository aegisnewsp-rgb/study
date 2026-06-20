---



exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-2
topicName: Direction Sense
weight: 4
country: pakistan
generated: "2026-03-24T08:32:07.999682"
lastUpdated: "2026-06-20"
diagramPrompt: "Educational diagram illustrating Direction Sense with clear labels, white background, exam-style illustration"




---

# Direction Sense

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Direction Sense** problems in HAT-UG Analytical Reasoning ask for the final position or facing direction of a person after a chain of movements (turn + walk) described from a starting reference. The four **cardinal directions** are North, South, East, West; the four **inter-cardinal** are NE, NW, SE, SW. Track two things independently: the **facing direction** (changes with every turn) and the **walking direction** (which equals the current facing when movement begins). A **right turn** rotates facing 90° clockwise, a **left turn** 90° anti-clockwise, a **U-turn** 180°. Shadow of a vertical object always points **opposite** to the Sun: at 9 AM → West, 12 PM → North, 3 PM → East, 6 PM → South (Northern Hemisphere). Net rotation is computed modulo 360°, and final displacement uses vector addition with √(a²+b²) for diagonal segments.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Concepts and Definitions

A Direction Sense item gives a sequence of statements such as *"A walks 6 km North, turns right, walks 4 km, turns left, walks 5 km"* and asks either the final position relative to start or the final facing. Two variables must be tracked simultaneously: **facing** (N/S/E/W or NE/NW/SE/SW) and **position coordinates** (x, y on a 2D grid where East = +x, North = +y). Facing changes only on turn commands; position changes only on walk commands, always along the current facing axis.

#### Turn Mechanics

| Command | Facing Change | Angular Rotation |
|---|---|---|
| Turn right | N→E, E→S, S→W, W→N | +90° (clockwise) |
| Turn left | N→W, W→S, S→E, E→N | −90° (anti-clockwise) |
| Turn about / U-turn | any → opposite | 180° |
| Turn to right (no walk) | facing update only | +90° |

Net rotation = (90° × right turns) − (90° × left turns) + (180° × U-turns), then reduce mod 360° to get final facing. Example: starting facing North, 3 right turns + 2 left turns ⇒ 270° − 180° = 90° clockwise ⇒ final facing East.

#### Worked Mini-Example

Priya starts at origin facing **North**. She walks 5 km, turns right, walks 3 km, turns left, walks 4 km. Movement 1: y += 5 → (0, 5), facing N. After right turn → facing E. Movement 2: x += 3 → (3, 5), facing E. After left turn → facing N. Movement 3: y += 4 → (3, 9). Final position: **(3, 9)**, final facing: **North**.

#### HAT-UG Question Patterns

Expect 3–4 items (≈4% weight) in MCQ format with four options for final position worded as *"X is in which direction of the starting point?"* Answers use the eight-compass vocabulary (NE, NNW, SSE, etc.). Numerical-distance variants ask how far apart start and end are — use Pythagoras when both x and y have non-zero displacements.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Traps

**Facing vs walking confusion.** The single highest-error trap: a left turn does **not** mean walking left; it rotates the body 90° anti-clockwise and the *next* walk happens in that new facing. Always restate facing before interpreting the next walk command.

**"Towards/away from" phrasing.** When a statement reads *"walks towards North"*, first confirm the current facing, then translate the move along that axis. If facing is South and the command says *"moves towards North"*, the person must turn 180° first (or the statement is contradictory — flag it).

**Shadow problems.** Shadow length and direction depend on Sun azimuth. In the Northern Hemisphere the Sun is in the southern sky, so midday shadows point **North**, not South. A common distractor flips this — memorize the rule "shadow opposite to Sun" and apply it directly.

**Mod 360° rotation overflow.** Six consecutive right turns = 540° = 180° net; many students stop at 540° and lose the U-turn equivalent. Always reduce.

#### Connection to Adjacent Topics

Direction Sense shares mechanics with **Coding-Decoding** (sequential transformation rules) and **Blood Relations** (relative-position chain). Vector summation here is the same algebra used in **Syllogism**-style position diagrams and in physics **displacement** questions. Mastery of the eight-point compass and 22.5° half-compass divisions transfers directly to clock-angle problems.

#### Practice Prompts

1. Reema starts at (0, 0) facing North. Walks 8 km, turns right, walks 6 km, turns right, walks 8 km. State her final position and the direction of start from her endpoint.
2. At 4:30 PM in summer in Islamabad, in which direction does the shadow of a vertical pole point? State the Sun's azimuth direction and apply the opposite rule.

#### Common Mistakes

- Adding right and left turn counts arithmetically instead of taking the signed difference.
- Forgetting to flip facing on U-turns, treating them like ordinary right turns.
- Computing diagonal walks as straight-line distance when the question asks for path length (sum, not √(a²+b²)).
- Conflating *final facing* with *direction from start to end*.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
