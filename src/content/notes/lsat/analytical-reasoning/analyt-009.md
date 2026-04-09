---
exam: lsat
examName: LSAT India
subject: logical-reasoning
subjectName: Analytical Reasoning
topic: analyt-009
topicName: Topic 9
weight: 3
country: lsat
generated: "2026-03-25T17:00:00"
---

# Linear Ordering Games

### 🟢 Lite — Quick Review (1h–1d)

**Linear Ordering Games** are the most common type of LSAT Analytical Reasoning game. You're given a set of items (people, objects, tasks) and must arrange them in a sequence — either in a single line, or along a scale (first-to-last, best-to-worst, etc.).

The key skills:
- Establish known positions for some items
- Use conditional rules to fix or eliminate positions
- Identify chains of ordering conditions
- Manage multiple entities (7–8 items) without getting lost

⚡ **Exam tip:** On linear ordering games, always draw the slots first and fill what you know. Never start reasoning about positions you don't yet know.

---

### 🟡 Standard — Regular Study (2d–2mo)

## What Is a Linear Ordering Game?

In a linear ordering game, you arrange a set of N items into N sequential positions. The positions have a clear spatial or temporal ordering — left to right, first to last, top to bottom.

**Typical game set-up:**
> "Seven delegates — F, G, H, J, K, L, and M — must be seated in a row of seven chairs."

Positions: 1 · 2 · 3 · 4 · 5 · 6 · 7

Your job: determine the valid orderings based on the rules.

## Standard Notation for Linear Games

Write the positions as slots:
```
[ _ ] [ _ ] [ _ ] [ _ ] [ _ ] [ _ ] [ _ ]
  1     2     3     4     5     6     7
```

As you deduce information, fill in the slots or mark what cannot go where.

## The Five Core Rule Types

### Type 1: Direct Ordering
*"K is seated third."*  
Fixes K to position 3. Draw this immediately.

### Type 2: Relative Ordering
*"F is seated to the left of G."*  
Translation: F's position < G's position.  
Does NOT specify which positions — just the relationship.

### Type 3: Conditional Ordering
*"If H is in position 4, then J is in position 6."*  
Translation: H=4 → J=6  
And contrapositive: J≠6 → H≠4

### Type 4: Between / Not Between
*"M is seated between K and J."*  
Translation: Either K — M — J or J — M — K (M is strictly in the middle of the two)

*"M is not seated between K and J."*  
Translation: M is NOT between them — K and J are on the same side of M.

### Type 5: Exactly-One / At-Most Constraints
*"Exactly three of the five students sit in the first four positions."*  
Translation: Of {A,B,C,D,E}, exactly 3 are in positions {1,2,3,4}. This constrains the composition of early and late positions.

## Working a Linear Ordering Game — Step by Step

### Example Game

> Seven students — A, B, C, D, E, F, G — will be seated in a row of seven chairs.
> 
> Rules:  
> 1. A sits to the left of B. (A < B)  
> 2. C sits in position 3. (C = 3)  
> 3. If D sits in the first four positions, then E sits in the last three. (D≤4 → E≥5)  
> 4. F and G cannot be adjacent. (~F-G adj, ~G-F adj)

### Step 1: Fix What You Know

```
[ _ ] [ _ ] [ C ] [ _ ] [ _ ] [ _ ] [ _ ]
  1     2     3     4     5     6     7
```

C is in position 3. Mark this.

### Step 2: Process All Rules

- Rule 1: A is left of B (A < B)
- Rule 3 contrapositive: E ≤ 4 → D ≥ 5 (If E is NOT in last three, D must be in last three)

### Step 3: Identify What You Can Deduce

Since C = 3, positions 1, 2 and 4, 5, 6, 7 remain open.

A < B is an unbounded relative constraint — without more info, A could be 1, 2, 4, or 5, etc.

Rule 3 conditional: If D≤4, then E≥5. This doesn't fix anything yet — but it's a conditional to keep in mind when testing answer choices.

Rule 4: F and G cannot be adjacent — meaning: they must have at least one person between them.

## Chains in Linear Ordering

When multiple relative ordering rules share terms, they create chains:

> Rule 1: A < B  
> Rule 2: B < C  
> Rule 3: C < D  

**Chain:** A < B < C < D

This fixes the relative order of four items. Combined with any absolute position (e.g., D = 7), you can deduce all positions: A=4, B=5, C=6, D=7 if D=7 and positions 1-3 are filled by the remaining three items.

## Handling "Between" Rules

The "between" rule is one of the trickiest patterns:

*"P is between Q and R"* means Q — P — R or R — P — Q.

Draw it mentally:

```
[ Q ] [ P ] [ R ]     or     [ R ] [ P ] [ Q ]
  left   middle   right        left   middle   right
```

This means:
- P CANNOT be at position 1 or position N (not an endpoint)
- Q and R must be on opposite sides of P
- Q and R cannot be adjacent to each other (P sits between them)

## Partial Ordering and Sub-Chains

Often a game won't give you a complete chain — just overlapping sub-chains:

> A < B  
> B < C  
> C > D  

From these you know: A < B < C and C > D  
But you don't yet know where D fits relative to A, B, or C — only that D < C.

You can partially order: A < B < C and D < C.  
D's relationship to A and B is undetermined until more info arrives.

---

### 🔴 Extended — Deep Study (3mo+)

## Multiple Spanning Chains

In complex games, you may have two or three separate chains that together cover all entities:

```
Chain 1: A < B < C
Chain 2: D < E
Chain 3: F < G
```

These three chains together order all seven entities, but the chains don't connect to each other. Without cross-chain rules, the relative order between chains is undetermined.

Cross-chain rules create connections:
> "A is to the left of F" connects Chain 1 to Chain 3.

Now the full ordering is more constrained. A < B < C and F < G, and A < F.  
This narrows the possibilities significantly.

## Conditional Ordering Chains — Advanced

Consider:
> "If P is in an odd-numbered position, then Q is in a position immediately to its right."  
> "Q is in position 4."

From the second rule: Q = 4.

Q is even-numbered. The first rule triggers only if P is odd. Since Q = 4 (even), P is NOT odd-triggering this rule. But the rule doesn't say Q = 4 prevents P from being in an odd position — P could still be odd, but if so, the conditional would require Q immediately to P's right (which would mean P = 3, Q = 4). Since Q = 4, P = 3 is consistent — and the rule is satisfied because P=3 is odd and Q=4 is immediately to its right.

**Deduction:** P could be in position 3. And if P=3, the rule is satisfied. So P=3 is a valid possibility.

## Handling "At Most" and "At Least" in Linear Games

*"At most three of {P, Q, R, S} are in the first five positions."*

This means at least one of P, Q, R, S must be in positions 6 or 7.

It's a necessary condition of exclusion — a tool for eliminating answer choices that put all four in positions 1-5.

*"At least two of {X, Y, Z} are in the last four positions."*

This means: among X, Y, Z, a minimum of 2 must occupy positions 4, 5, 6, or 7.

## Maximum Flexibility Principle

When setting up a linear game, aim for the arrangement that keeps the most options open. This is called **maximizing flexibility**:

1. Fill absolute positions first (they're fixed)
2. Don't commit to relative positions until forced
3. Use "or" conditionals to keep both branches viable
4. Mark prohibited positions as you deduce them

## Common LSAT Linear Game Templates

### Template 1: Single Line, Standard Seating
7 items, 7 positions, all relative and conditional rules apply.

### Template 2: Two-Part Ordering
Items split into two groups (e.g., "first four" and "last three"), with rules governing which items can go in which half.

### Template 3: Tiered Ranking (Partial Order)
Items arranged across tiers (Tier 1 better than Tier 2 better than Tier 3), with multiple items in each tier. Ordering within tiers may be undetermined.

### Template 4: Numbered Scale
Items placed on a scale (e.g., "rated 1 through 7, with no ties"). This is essentially the same as a line — but numbers explicitly define positions.

## Question Type Strategies

### Must Be True Questions
Test every deduction from the rules. If an answer choice is not forced by the rules, it's not the answer. Use contrapositive to expand what you know must be true.

### Could Be True Questions
Find the arrangement that satisfies all rules AND the conditions of the answer choice. If you can construct one valid arrangement, the answer is possible. If you can prove a contradiction, the answer is impossible.

### Could NOT Be True Questions
Prove impossibility — show that any arrangement satisfying the rules AND the answer choice leads to a contradiction.

### Minimum/Maximum Questions
"How many of the ____ can be in position ___?"  
Count all arrangements that satisfy the rules, then identify the extremes.

## Most Common Linear Game Mistakes

- Confusing "to the left of" with "immediately to the left of"
- Forgetting the contrapositive of conditional rules
- Assuming symmetry when none exists (A left of B ≠ B left of A)
- Over-committing to a specific position before all rules are processed
- Neglecting to draw slots — working everything in your head with 7+ entities

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
