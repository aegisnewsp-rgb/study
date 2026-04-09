---
exam: lsat
examName: LSAT India
subject: logical-reasoning
subjectName: Analytical Reasoning
topic: analyt-010
topicName: Topic 10
weight: 3
country: lsat
generated: "2026-03-25T17:00:00"
---

# Grouping Games & Classification

### 🟢 Lite — Quick Review (1h–1d)

**Grouping Games** ask you to sort items into categories or groups based on a set of rules. Unlike linear ordering (where items occupy distinct positions in a sequence), grouping games divide items into bins — some groups may have sizes, some may be empty, some may be fixed, some flexible.

Two main types:
- **Binary grouping:** Items go into exactly two groups (e.g., selected/not selected, indoor/outdoor)
- **Multi-group classification:** Items go into three or more groups (e.g., Team A, Team B, Team C)

⚡ **Exam tip:** In grouping games, always first determine the SIZE OF EACH GROUP — this constrains every other deduction.

---

### 🟡 Standard — Regular Study (2d–2mo)

## The Two Types of Grouping Games

### Binary Grouping (Two Groups)

Items are classified into exactly two categories:

> "Each of the seven candidates — J, K, L, M, N, O, P — will be assigned to either the morning shift or the evening shift."

Groups: **Morning** | **Evening**  
Each item belongs to exactly one group.

### Multi-Group Classification (Three or More Groups)

Items are sorted across multiple categories:

> "Each of the five trainees — R, S, T, U, V — will be assigned to exactly one of three teams: Team 1, Team 2, or Team 3."

Groups: **Team 1** | **Team 2** | **Team 3**

## Standard Notation

For binary grouping, use a two-column table:

```
Morning:  _ _ _ _ _
Evening:  _ _ _
```

For multi-group, draw multiple columns:

```
Team 1:  _ _
Team 2:  _ _ _
Team 3:  _ _
```

## Group Size — Your First Deduction

Before anything else, determine the size of each group:

> "Exactly four of the seven candidates work the morning shift."

This fixes: Morning has 4, Evening has 3. This is a critical constraint — use it immediately to eliminate impossible configurations.

## The Five Core Grouping Rule Types

### Type 1: Direct Classification
*"K is assigned to Team 1."*  
Fixes K to Team 1. Fill it in.

### Type 2: Conditional Classification
*"If L is in Team 1, then M is in Team 2."*  
Translation: L in T1 → M in T2  
Contrapositive: M not in T2 → L not in T1

### Type 3: Mutual Inclusion ("Both")
*"Both P and Q are in the morning shift."*  
Translation: P is in Morning AND Q is in Morning

### Type 4: Mutual Exclusion ("Cannot both")
*"P and Q cannot both be in the morning shift."*  
Translation: Not (P in Morning AND Q in Morning)  
Equivalently: P in Morning → Q in Evening OR Q in Morning → P in Evening  
This means at most one of them can be in Morning. At least one must be in Evening.

### Type 5: Either-Or Constraints
*"Exactly three of {J, K, L, M} are in the morning shift."*  
This is a counting constraint on a subset — one of J, K, L, M must be in Evening.

## Working a Grouping Game — Example

### Example Game

> Five students — A, B, C, D, E — are each assigned to one of two dormitories: North or South.
> 
> Rules:  
> 1. Exactly three students are assigned to North.  
> 2. A is assigned to North.  
> 3. If B is assigned to North, then C is assigned to South.  
> 4. D and E cannot both be assigned to South.

### Step 1: Fix the Group Sizes

North: 3 students  
South: 2 students

### Step 2: Fill What You Know

A is in North. So North currently has 1 of 3 slots filled.

### Step 3: Process Conditional Rule 3

Rule 3: B in North → C in South  
Contrapositive: C not in South → B not in North (i.e., C in North → B in South)

### Step 4: Process Rule 4

D and E cannot both be in South.  
This means: at most one of D, E is in South.  
Equivalently: at least one of D, E is in North.

### Step 5: Combine and Deduce

Since at least one of D, E is in North, and A is in North, we have at least 2 in North.

North needs exactly 3 students. So one more slot in North remains.

We also know: if B is in North → C is in South. This triggers a North-slot for B, pushing C to South.

Working through possibilities:
- If B is in North → C is in South. North now has {A, B, plus one of {D,E}} = 3. South has {C, plus the other of {D,E}} = 2. Works.
- If B is in South → C could be in North (contrapositive of rule 3). Then D or E fills the third North slot (one of D/E must be in North per rule 4). Also works.

Multiple valid configurations exist — this is typical of grouping games.

## The In-Compatible Pair Test

When a rule says "X and Y cannot both be in Group G":

- Treat them as a **mutual exclusion pair**
- At most one of them can occupy slots in Group G
- The other (or others) must go to the complementary group(s)

In binary grouping, this is a powerful deduction accelerator.

## Distribution vs. Selection

LSAT grouping games sometimes blur the line between grouping and selection:

> "The committee must include exactly two of the four candidates {P, Q, R, S}."

This is equivalent to a binary grouping: two in (selected), two out (not selected). The same principles apply.

---

### 🔴 Extended — Deep Study (3mo+)

## Sufficient Groups — Triggering Conditional Assignments

Consider a rule like:

> "If any two of {A, B, C} are assigned to North, then D must also be assigned to North."

This is a **sufficient set** rule. Any two of the triple triggers D → North.

To test this rule, check every pair: {A,B}, {A,C}, {B,C}. If any two are in North, D must be in North. If D is NOT in North, then at most one of {A,B,C} can be in North.

**Deduction:** If D is in South, then no pair from {A,B,C} can form. So at most one of {A,B,C} is in North. This is a very tight constraint.

## Partial Group Membership

Some rules specify that an item belongs to a group, AND specifies other items that must or must not also be in that group:

> "T is in Group 1. At most two of {U, V, W} are in Group 1."

This gives you: T is in, and up to two more from {U, V, W} can join. If the group has capacity, this constrains the maximum.

## The Counterexample Method for Grouping Games

For must-be-true and could-be-true questions, the counterexample method is essential:

**To disprove "could be true":** Show that every possible arrangement consistent with the rules violates the answer choice. If all arrangements fail, the answer is NOT possible.

**To prove "could be true":** Find one arrangement that satisfies all rules and the answer choice. If you find one valid arrangement, the answer COULD be true.

## Common Grouping Game Templates

### Template 1: Team Assignment (3+ Groups)
Each item assigned to one of 3 or more teams. Rules govern cross-team relationships.

### Template 2: Binary Selection (Selected/Rejected)
Items either selected or not selected. Often tied to capacity constraints.

### Template 3: Location-Based Grouping
Items assigned to locations (cities, buildings, rooms). Location capacities may be fixed or variable.

### Template 4: Property-Based Classification
Items share properties (e.g., all items with property X go to Group A). Conditional rules govern property-based membership.

## Handling Conditional Rules with OR

Some rules combine grouping and disjunction:

> "If X is in Group 1, then Y is in Group 2 or Z is in Group 3."

This is: X in G1 → (Y in G2 ∨ Z in G3)

Contrapositive: ~(Y in G2 ∨ Z in G3) → ~X in G1  
Which equals: (Y not in G2 AND Z not in G3) → X not in G1  
So: if NEITHER Y is in G2 NOR Z is in G3, then X cannot be in G1.

## Deductive Chains in Grouping Games

Grouping rules can chain just like ordering rules:

> Rule 1: A in Group X → B in Group X  
> Rule 2: B in Group X → C in Group Y

Chain: A in X → B in X → C in Y

This means: if A is in X, then C must be in Y.

Contrapositive: C not in Y → B not in X → A not in X  
So: if C is not in Y, then neither B nor A can be in X.

## Mixed Linear + Grouping Games

The LSAT sometimes combines both:

> "Six interns — F, G, H, I, J, K — are each assigned to one of two teams, Red or Blue. Within each team, the interns are ranked first through third."

This combines:
1. Binary grouping (each intern → Red or Blue)
2. Linear ordering (within each team, three interns are ranked 1-3)

For mixed games, handle each dimension separately first, then combine deductions.

## Exam Strategy for Grouping Games

1. **Fix group sizes first** — always determine the capacity/size of each group before testing answer choices
2. **Write every rule in logical notation** — translate "both," "only if," "unless," "cannot both"
3. **Derive all contrapositives** immediately
4. **Identify sufficient sets** — these trigger mandatory assignments
5. **Identify necessary constraints** — these act as gates (if the necessary condition fails, the consequent fails)
6. **For could/cannot be true questions:** systematically test the answer choice against all valid configurations
7. **Mark incompatible pairs** clearly — they eliminate options quickly

## Most Common Grouping Game Mistakes

- Forgetting group size constraints (putting too many or too few items in a group)
- Confusing "both in" with "at least one in" (mutual inclusion vs. inclusive OR)
- Treating "cannot both be in" as "neither can be in" (they CAN be distributed, just not together)
- Missing contrapositive deductions that would narrow group membership
- Forgetting that some groups can be empty unless rules specify otherwise (unless stated, empty groups are valid)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
