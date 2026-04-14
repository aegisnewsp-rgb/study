---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-006
topicName: Seating Arrangement
tier: standard
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Diagram showing both linear row arrangement (left to right) and circular arrangement with facing center concept."
country: India
generated: ai-v1
---


## Seating Arrangement

### Concept
Seating Arrangement is about reconstructing positions from clues. The key insight is that this isn't about probability or guessing — there's always a unique solution if you methodically apply constraints. The challenge is avoiding information overload when you have 6-8 people and 10+ conditions.

Seating problems come in three main flavors: **linear (row)**, **circular**, and **rectangular**. Each has its own conventions. Linear arrangements are simplest — left-right is straightforward. Circular arrangements introduce the "facing center" vs "facing outward" complication, which reverses how left-right works. Rectangular is circular with a twist: you have corners that behave differently than sides.

The approach is always the same: find what you know **for certain**, not what seems likely. A statement like "A sits at the left end" gives you absolute positional information. A statement like "A sits to the left of B" only gives relative information — you can't place either until you have more context.

### Types & Approach

**Linear Arrangement**
- Left/Right positions are absolute (not relative to observer)
- "A is third from the left" — definite position
- "A is to the left of B" — A can be anywhere left of B, many possibilities
- Work from definite positions outward

**Circular Arrangement (Facing Center)**
- Everyone faces the center — so left-hand neighbor is actually to your right visually
- "A's left neighbor" = person immediately clockwise from A
- Clockwise direction = left; counterclockwise = right
- "A is between B and C" means B and C are A's neighbors

**Circular Arrangement (Facing Outward)**
- Left neighbor is counterclockwise
- Right neighbor is clockwise
- Flip the clockwise direction compared to facing center

**Rectangular Arrangement**
- Four corners (VIP positions) and four sides
- "Corner" people have only 2 neighbors; "side" people have 3
- Corners get special treatment in conditions

### Step-by-Step Example
**Q:** Six people (P, Q, R, S, T, U) around a circular table facing center.
1. P is between U and S.
2. Q is immediately right of T.
3. R is not next to Q.

**Approach:** 
Step 1 → Place P with U and S. P between them means U-P-S in clockwise or S-P-U clockwise order.
Step 2 → Q is immediately right of T. Since they face center, right = counterclockwise. So T-...-Q in counterclockwise direction.
Step 3 → R is not next to Q — this eliminates adjacent slots.

**Answer:** Draw it out — U, P, S occupy three consecutive seats. T and Q occupy adjacent seats. Since U, P, S form a block and T, Q form a block, they must be separated. R fills the gap between blocks. Final arrangement clockwise: T → Q → U → P → S → R (or its rotation/reflection). R is between S and T.

### Common Mistakes
- Confusing "A's left" with "A is on the left side" → In circular facing center, A's left neighbor is clockwise, not visual left.
- Forgetting that circular arrangements have rotational symmetry → If no "reference point" is given, the answer might have multiple valid rotations; check if the question accounts for this.
- Trying to use all information simultaneously → Place definite items first, then fill in the gaps. Don't force fits.
