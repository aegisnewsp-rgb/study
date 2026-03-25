---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-006
topicName: Seating Arrangement — Deep Dive
tier: deep
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Advanced diagram showing linear, circular facing center, circular facing outward, and rectangular seating with labeled positions."
country: India
generated: ai-v1
---


## Seating Arrangement — Deep Dive

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
