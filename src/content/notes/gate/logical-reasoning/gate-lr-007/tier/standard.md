---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-007
topicName: Direction Sense
tier: standard
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Step-by-step direction diagram showing initial direction, each turn, and final direction with arrows."
country: India
generated: ai-v1
---


## Direction Sense

### Concept
Direction Sense problems ask you to track someone moving through a path of cardinal directions and turns. The skill seems simple — how hard can it be to follow "walk north, turn right, walk east"? — but the complexity comes from chaining multiple turns, tracking relative positions after complex paths, and applying the Pythagorean theorem when someone ends up diagonal from where they started.

The key insight is that every move can be broken into two components: direction (which way you're facing) and displacement (how far you travel in that direction). You track these separately, updating your facing direction with each turn and your position with each move.

Always start by drawing an 8-direction compass (N, NE, E, SE, S, SW, W, NW). Mark your initial direction clearly. Then process each instruction one at a time, updating your direction arrow and marking your position after each move. A ruler-straight line sketch with labeled points is worth a thousand words of mental calculation.

### Types & Approach

**Type 1: Final Direction Questions**
Simply track which way you're facing after all turns. Common pattern: "starts facing X, turns Y degrees/step directions, which way is she facing now?"

**Type 2: Final Position Questions**
Track x-y displacement. Pick a coordinate system (usually North = positive y, East = positive x). Add up all north-south moves for net y-displacement, all east-west for net x-displacement. Then calculate straight-line distance from origin if needed.

**Type 3: Distance and Direction Questions**
Find both how far and in which direction (e.g., "5 km Southeast"). Calculate net x and y displacements, then state direction using arctangent (or just identify quadrant and state direction).

**Turning Conventions:**
- Right turn from North → East
- Right turn from East → South
- Right turn from South → West
- Right turn from West → North
- Left turns are the opposite sequence
- 180° turns (about-face) = reverse direction
- 45° turns in problems with NE/NW/etc = half-turn

### Step-by-Step Example
**Q:** Ram starts walking East. After 5m, he turns left and walks 10m. Then he turns right and walks 5m. Finally, he turns 180° and walks 15m. How far is he from his starting point and in which direction?

**Approach:**
Step 1 → Start at origin facing East. Mark point P1 at (5, 0).
Step 2 → Turn left from East = North. Walk 10m to P2 at (5, 10).
Step 3 → Turn right from North = East. Walk 5m to P3 at (10, 10).
Step 4 → Turn 180° from East = West. Walk 15m to P4 at (-5, 10).

**Answer:** Distance = √((-5)² + (10)²) = √125 ≈ 11.2m. Direction: Northwest (x negative, y positive). So ~11.2m Northwest of start.

### Common Mistakes
- Confusing right/left turn directions → Always double-check: right turn rotates clockwise. Mentally trace a clock hand to verify.
- Mixing up which axis is which in coordinates → North = up (+y), East = right (+x). Draw a small compass on your paper.
- Forgetting that diagonal directions (NE, NW, etc.) are valid intermediate states → Some problems specifically navigate to these, not just the four cardinals.
- Not converting turns to direction changes immediately → "Turn right" doesn't tell you where you'll be until you know which way you're currently facing.
