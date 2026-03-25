---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-007
topicName: Direction Sense — Deep Dive
tier: deep
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Complex path diagram showing multiple turns, intermediate points, and final displacement vector with distance calculation."
country: India
generated: ai-v1
---


## Direction Sense — Deep Dive

### Full Concept Explanation
Direction Sense at its core is applied geometry — you're working with vectors in two dimensions, tracking both magnitude and direction. Each move is a vector, and the final position is the vector sum of all individual moves. The difficulty for students isn't the math (which is simple addition and Pythagorean theorem) but maintaining accuracy through a potentially long sequence of updates.

The systematic approach is crucial because even one error early in a multi-step problem makes the final answer wrong. Develop a consistent notation: write down each step as "Step N: Direction → Position (x, y)." This creates a verifiable paper trail. If you make a mistake, you can check each step individually rather than re-solving the whole problem.

Understanding reference frames matters. When you "turn right," your direction changes relative to where you're currently facing — not relative to the room, not relative to north. The first time you turn, you're updating your facing direction. Every subsequent turn updates from the new facing direction. This "local" reference frame trips up students who try to track everything globally.

Right turns and left turns follow predictable patterns. If you know your current direction and apply a right turn, you move 90° clockwise on the compass. The sequence cycles: N → E → S → W → N for right turns, and N → W → S → E → N for left turns. For 45° problems involving NE, SE, SW, NW, right turns still mean 90° clockwise but may result in a different 45° direction or flip between cardinal and intercardinal directions.

Shadow or "one behind" problems add another layer. Instead of one person moving, two people start at different points and move. The question asks how far apart they are after both move, or whether they meet. These require calculating both final positions independently, then finding the distance between them.

### GATE-Level Practice

**Q1:** A person starts at point P, walks 12m East to Q, then turns 135° right and walks to point R. If R is 5m from P, how far did he walk from Q to R?

Answer: 135° right turn from East = South + 45° = Southeast (or S 45° E). Let's use components: Walking from Q to R in SE direction. Distance PR = 5m. The path from P to Q is purely East (12m). For R to be 5m from P, we have a triangle with PQ = 12 (East), QR = unknown (at SE angle = 135° from East = 180-135 = 45° South of East), and PR = 5. Using law of cosines: QR² = PQ² + PR² - 2(PQ)(PR)cos(angle P). The angle at P between East direction and PR is unknown. Alternatively, draw coordinates: P(0,0), Q(12,0). R is at distance 5 from P. QR is at 135° right from East = SE direction, which is 45° below East axis. So R = Q + d*(cos(-45°), sin(-45°)) = Q + d*(√2/2, -√2/2). Distance PR = 5 = √((12 + d*√2/2)² + (0 - d*√2/2)²). Solving gives d = 13m approximately. Wait, let me redo: QR at 135° right from East means from East (0°), turning right 135° gives 135° from North = Southeast direction. Actually: East is 0°, right turn 135° = 135° clockwise = South of East by 45° = Southeast. Vector = d*(cos45, -sin45) = d*(0.707, -0.707). So R = (12 + 0.707d, -0.707d). PR = 5 = √((12+0.707d)² + (0.707d)²). 25 = 144 + 17.0d + 0.5d² + 0.5d² = 144 + 17d + d². d² + 17d + 119 = 0. (d+7)(d+10) = 0. d = 7m (positive). Answer: 7m.

**Q2:** A man walks 10m North, 20m Southeast, 10m West. His friend starts at same point, walks 20m South, 10m East, then stops. How far apart are they?

Answer: Man: Start (0,0). North to (0,10). Southeast 20m = (20*cos(-45°), 20*sin(-45°)) = (14.14, -14.14) → (14.14, -4.14). West 10m → (4.14, -4.14). Friend: South 20m → (0,-20). East 10m → (10,-20). Distance: √((4.14-10)² + (-4.14+20)²) = √((-5.86)² + (15.86)²) = √(34.3 + 251.6) = √285.9 ≈ 16.9m.

### Multiple Approaches
**Coordinate Method**: Assign coordinates to each position. North = +y, East = +x. After each move, update (x,y). Final displacement = √(x² + y²). Most reliable for complex paths.

**Direction-Tracking Table**: Make a table with columns: Step, Initial Direction, Turn, Final Direction, Distance, Net x Change, Net y Change. Sum columns at end. Catches errors in turn logic.

**Relative Position Vector Addition**: Each move is a vector. Add them component-wise: (Δx₁+Δx₂+...) , (Δy₁+Δy₂+...). Useful when multiple people move — find relative displacement vector.

### Tricky Cases / Edge Cases
- **Turn-by-45° problems**: When turns are 45° instead of 90°, you enter intercardinal directions (NE, SE, SW, NW). Track the exact angle from North (0° or 360°), East (90°), etc. A right turn of 45° from North gives Northeast (45°).
- **Turn-back problems**: Someone walking North, then South, then North again may end up further North than after just one North move if the South move was shorter. Don't assume forward and back cancel.
- **Non-coplanar paths**: GATE problems stick to flat 2D. If a problem mentions going up/down stairs or different heights, it's either a trick (project to 2D) or beyond scope.
- **"Facing" vs "Looking at"**: If a person is "facing North" but "looking at" someone to their East, turns from "facing" direction apply to their body direction, not their eyes. Usually facing direction governs movement direction.
