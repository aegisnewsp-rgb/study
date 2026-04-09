---
exam: lsat
examName: LSAT India
subject: logical-reasoning
subjectName: Analytical Reasoning
topic: analyt-002
topicName: Sequencing Games
weight: 3
country: lsat
generated: "2026-03-25T17:00:00"
---

# Sequencing Games

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Sequencing games are the most common type of Logic Game on the LSAT, appearing in approximately 40-50% of Analytical Reasoning sections. In a sequencing game, you must order a set of items (people, objects, events) along a line, in time, or in a ranking. The key relationship is "before/after" or "greater than/less than" — your job is to determine the relative positions of all items based on the given rules.

The simplest sequencing games have all items in a fixed order (like positions 1-7), while more complex versions involve ordering within groups or partial ordering where some positions are unspecified. The critical skill is translating verbal rules into diagrammatic notation and making deductions by chaining rules together.

**Key Facts:**
- Sequencing games involve ordering items before/after or greater/less than
- Create a linear diagram with positions 1 through n
- Chain conditionals: if A > B and B > C, then A > C
- Always note which positions are fixed and which are open
- Multiple valid orderings may exist — questions ask what must be true in ALL valid orderings
- "Before" and "after" are transitive relationships

⚡ **Exam tip:** In sequencing games, always identify the most constrained positions first. Items with the most "before" constraints go to the left; items with the most "after" constraints go to the right. Look for chains of relationships that connect multiple items.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**The Basic Sequencing Diagram**

For a game involving seven items ordered from left to right (or top to bottom, 1st through 7th):

Draw seven slots: _ _ _ _ _ _ _

Place items with fixed positions first:
- If G is third: _ _ G _ _ _ _
- If T is last: _ _ G _ _ _ T

Then apply ordering rules:
- "R is before S" means R appears somewhere to the left of S
- "W is immediately before V" means W is directly left of V: _ _ W V _ _ _

**Standard Rules in Sequencing Games**

*Direct Ordering Rules:*
- "A is before B" (A < B): A must appear somewhere to the left of B
- "A is immediately before B" (A < B directly): A is directly left of B, with nothing between them
- "A is somewhere before B" (A < B): A is somewhere to the left, not necessarily adjacent
- "A and B are consecutive" (A < B and no one between them): A and B are adjacent

*Conditional Ordering Rules:*
- "If A is before B, then C is before D": This does not tell you the absolute position of any item — only the conditional relationship
- "If A is first, then B is last": B can only be last IF A is first; if A is not first, B can be anywhere

*Negative Ordering Rules:*
- "A is not first" means A cannot occupy the first position
- "A is not immediately before B" means A and B are not adjacent with A on the left
- "A is not together with B" means A and B cannot be adjacent

**Building Chains**

When you have multiple transitive rules, chain them:

Rule 1: F > G (F is after G)
Rule 2: G > H (G is after H)
Chain: F > G > H

This means F is after H, F is after G, and G is after H.

Example:
Rule 1: M is before N
Rule 2: N is before P
Rule 3: P is before R
Chained: M > N > P > R

This means M, N, P, and R must appear in that relative order.

**Partially Ordered Sets**

Many sequencing games do not fully determine the order. You may have multiple valid scenarios:

Example:
Seven students: F, G, H, J, K, L, M
Rules:
- M is somewhere before L
- G is somewhere before H
- J is after K

You cannot determine the complete order, but you know:
- M < L (M before L)
- G < H (G before H)
- K < J (K before J)

Combined: M < L and G < H and K < J — three separate chains

**Fixed Position Clues**

Some items have specific positions:
- "S is in the third position"
- "Exactly three people are before T"
- "P is immediately after Q"
- "Two people sit between R and S"

When you have a fixed position and an ordering rule, you can often determine more:
- If S is third and T is somewhere before S, T can only be 1 or 2
- If R is immediately before S and S is in position 4, R must be in position 3

**Comparison Table: Ordering Relationships**

| Rule Language | Meaning | Diagram Symbol |
|---------------|---------|----------------|
| A is before B | A is somewhere left of B | A ... B |
| A is immediately before B | A is directly left of B | A B |
| A and B are consecutive | A and B are adjacent, either order | A B or B A |
| Exactly n between A and B | A and B have exactly n items between them | A _ _ B (if n=2) |
| A is not first | A cannot be in position 1 | A ≠ 1 |
| A is not before B | A is to the right of B or at the same position (not possible in sequencing, so A is after B) | B < A |

**Common Mistakes to Avoid:**
1. Treating "A is before B" as "A is immediately before B"
2. Forgetting that conditionals create only relative, not absolute, positions
3. Not chaining transitive rules when possible
4. Confusing "A is not before B" with "A is before B"
5. Trying to find a single valid order when multiple orders are possible

**Problem-Solving Strategy:**
1. Identify all fixed positions first
2. Note all direct ordering rules (before/after relationships)
3. Look for chains of transitive relationships
4. Identify items with the most constraints (most likely to be at the ends)
5. Test answer choices against your diagram and rules

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Advanced Conditional Sequencing Rules**

*Unless and Only If:*
- "A, unless B" means "If not B, then A" (equivalent to B or A; not B → A)
- "A only if B" means "If A, then B" (A → B)

For example: "R is first, unless S is first" means:
- If S is not first, then R is first
- If S is first, then R is not necessarily first
- The rule only constrains R's position when S is not first

*If and Only If (Biconditionals):*
- "A is before B if and only if C is before D" means:
  - If A is before B, then C is before D
  - AND If C is before D, then A is before B
- Both directions must hold

*Unless in Negative Contexts:*
- "A is not selected unless B is selected" means "If A is selected, then B is selected" (A → B)
- This is equivalent to: B or not A

**Numbering Positions**

When positions are numbered (1st, 2nd, 3rd), use numerical notation:
- "T is in position 4" means T = 4
- "Exactly two people are before R" means R = 3
- "U is somewhere before V" means U < V

The combination of fixed positions and ordering rules allows precise deductions:
- If W is in position 1, and W is before X, then X ≠ 1
- If exactly three people are before Y and Y is before Z, then Z cannot be in positions 1, 2, 3, or 4 (Y is 4, Z > 4, so Z can only be 5, 6, or 7)

**The Minimum/Maximum Deduction Technique**

When you cannot determine the complete order, you can often determine minimum or maximum positions:

For an item with multiple "before" constraints, its minimum position is determined by the number of items that must be before it.

For an item with multiple "after" constraints, its maximum position is determined by the number of items that must be after it.

Example: Seven items F, G, H, J, K, L, M
Rules:
- G is before H
- G is before J
- L is after J
- L is after K

G must be before both H and J — so G can be at minimum position 1
L must be after both J and K — so L can be at maximum position 7
You can often determine which items are at the ends (most constrained)

**The "Could Be True" vs. "Must Be True" in Sequencing**

When a question asks what could be true, you must determine whether there exists at least one valid ordering consistent with:
- All given rules
- The specific condition in the answer choice

When a question asks what must be true, you must determine whether the statement is true in every valid ordering consistent with the rules.

The test for "could be true":
1. Assume the answer choice is true
2. Check whether it violates any rule
3. If no violation, the answer could be true

The test for "cannot be true":
1. Assume the answer choice is true
2. Try to construct a valid ordering
3. If you cannot, the answer cannot be true

**Circular Sequencing**

Some sequencing games involve circular arrangements (e.g., people around a round table). Key principles:
- There is no "first" or "last" position in a circle
- "Before" and "after" are replaced by "to the left/right" or "clockwise/counterclockwise"
- Use a reference point and determine relative positions
- If A is immediately clockwise from B, and B is clockwise from C, then A is clockwise from C

**Example Game Walkthrough**

Seven runners — F, G, H, J, K, L, and M — finish a race in positions 1 through 7.
Rules:
1. G finishes before H and before J
2. J finishes before K
3. K finishes before M
4. F finishes before L

Step 1: Chain rules 2 and 3: J > K > M
Step 2: With rule 1, we know G > H and G > J
Since J > K > M, and G > J, we have G > J > K > M
Step 3: We still have F > L and H's relationship to G (H < G)
Step 4: Determine positions: G, J, K, M form a chain: G > J > K > M (4 items)
F and L form a pair: F > L (2 items)
H must be before G (1 item)
Total: 4 + 2 + 1 = 7 items ✓
Step 5: Positions are: H < G < J < K < M (fixed relative order) and F < L (can be inserted)
Step 6: The combined chain H < G < J < K < M leaves 5 positions filled with these 5 items. F and L must be placed within or around this chain. Since F < L, the possibilities are limited.

**WASSCE Examination Patterns:**

LSAT Analytical Reasoning questions typically include:
1. What must be true about the position of X?
2. If G finishes in position 4, which of the following must be true?
3. Which of the following could be the order from first to last?
4. What is the maximum number of people that could be before K?
5. If H is immediately before J, which of the following cannot be true?

⚡ **Pro Exam Tip:** On LSAT Sequencing Games, always look for the longest chain of transitive relationships first. The longest chain tells you the minimum number of items that must appear in a specific relative order, which constrains where everything else can go. Also note: on LSAT, the answer choices for "which ordering could be true" questions are often wrong in subtle ways—always verify each rule is satisfied.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
