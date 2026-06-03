---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-006
topicName: "Seating Arrangement"
tier: unified
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Advanced diagram showing linear, circular facing center, circular facing outward, and rectangular seating with labeled positions."
country: india
generated: 2026-05-26
lastUpdated: 2026-05-26
---

# Seating Arrangement

### 🟢 Lite

### Key Pattern/Rule
Start with **definite positions** first, then place relative conditions. Always draw a rough sketch — your brain processes spatial info faster than abstract logic.

### Memory Trick
"ABSOLUTE then RELATIVE" — fix what you know absolutely before trying to chain "A is left of B" statements.

### 1-Sentence Summary
Tests your ability to arrange people in linear or circular configurations based on conditions about who sits where relative to whom.

### Quick Example
Q: Five people (A-E) in a row. A is at one end. B is to the right of A. C is between B and D. Where is E?
A: Multiple valid arrangements exist — more info needed to fix E's position uniquely.

### Quick Example 2
Q: Six people around a circular table, facing center. P is between Q and R. S is to the left of T. Who is opposite P?
A: Cannot determine — facing center circular seating requires direction information (clockwise order) to fix opposites.

### 🟡 Standard

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

### 🔴 Extended

### Full Concept Explanation
Seating Arrangement is fundamentally a constraint satisfaction problem. You have a set of variables (the people) and a set of constraints (the conditions), and you need to find the single valid assignment. The difficulty comes not from any single condition being complex, but from the interactions between conditions creating a web of dependencies that can overwhelm working memory if not managed systematically.

The core principle is **progressive constraint application**. You never try to solve the whole puzzle at once. Instead, you identify the most restrictive condition — the one that eliminates the most possibilities — and start there. Usually this is an absolute position ("A is third from the left") or a tight grouping ("A is immediately between B and C").

The "facing" convention is where most students trip up. When people face the center of a circle, their left-hand side corresponds to their clockwise side. Why? Imagine sitting at a table facing the center. Your left hand points clockwise around the table. This means:
- "A is to the left of B" (from A's perspective) means A is clockwise from B
- "A's immediate right neighbor" is counterclockwise from A

When people face outward, the opposite applies. Your left hand points counterclockwise when facing away from center. Always verify the facing direction before solving.

Grouping conditions create "blocks" that act like single entities until they're separated. "A is between B and C" creates a three-person block that can face left or right (two orientations). "A is immediately next to B" creates a two-person block with two orientations. When you have multiple blocks, you determine their relative positions first, then resolve orientations within blocks.

### GATE-Level Practice

**Q1:** Eight people (A-H) sitting in a row. A is left of B. E and F are neighbors. C is somewhere left of D. G is at one end. H is between A and F. E is not next to C. Who is at the other end?

Answer: G is at one end (given). Since H is between A and F, A-H-F in that order (or F-H-A). E and F are neighbors. This constrains F to be near E. With E not next to C, and C left of D, we need to fit all pieces. The key insight: since G is at one end and no one is specified for the other end, that position must be fillable uniquely by deduction. Working through constraints, if A-H-F-E are consecutive (with E-F neighbors, H between A and F), and G is at left end, then D is at right end.

**Q2:** Six around a circular table facing center. P and Q are opposite each other. R is to the left of S. T is between P and Q. Where is U relative to S?

Answer: In facing-center circular arrangement, opposite means 3 positions away clockwise. If P and Q are opposite, the seats are: P, -, Q, -, P (rotational). T is between P and Q, so T is one of the seats between them. With 6 seats, P and Q split the circle into two arcs of 3 seats each (including endpoints). T on the arc between them. R is to the left of S (clockwise from R to S). With P, Q, T fixed relative to each other, and R-S relationship, we can determine U's position through elimination.

### Multiple Approaches
**Sketch Method**: Draw the seats as circles. Fill in definite positions first. Mark "slots" between known positions. Place relative conditions by seeing which slots fit. This is the fastest for most problems.

**Block Method**: Identify blocks (consecutive groups) and treat each block as a single unit initially. Arrange blocks, then resolve internal order. Best when you have multiple "immediately adjacent" conditions.

**Elimination Table**: Create a grid of Person vs Position. Mark X for impossible, ✓ for possible. When a row or column has only one ✓, fix that position. Continue propagating constraints. Useful for complex problems with many negative constraints ("A is not next to B").

### Tricky Cases / Edge Cases
- **Rotational symmetry without reference**: In circular problems with no fixed point (like "A is at the north position"), two mirror-image arrangements are considered the same. Questions may ask "how many ways" — account for this division by 2.
- **"Between" ambiguity**: In linear arrangements, "A is between B and C" means B-A-C OR C-A-B (A is somewhere between them, not necessarily equidistant). In circular, it typically means B and C are A's immediate neighbors.
- **Facing mixed directions**: Some problems have some people facing center, others facing outward. In these hybrid problems, left-right relationships become inconsistent — solve each group separately where possible.
- **Self-contradicting conditions**: If you reach a point where no valid arrangement exists, you've made an error — go back and check your interpretation of earlier conditions.

*Content adapted based on your selected roadmap duration.*
