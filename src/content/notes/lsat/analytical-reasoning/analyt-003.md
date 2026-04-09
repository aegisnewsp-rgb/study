---
exam: lsat
examName: LSAT India
subject: logical-reasoning
subjectName: Analytical Reasoning
topic: analyt-003
topicName: Grouping Games
weight: 3
country: lsat
generated: "2026-03-25T17:00:00"
---

# Grouping Games

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Grouping games (also called classification or selection games) require you to divide a set of items into groups or categories based on a set of rules. Unlike sequencing games where the key relationship is before/after, in grouping games the key relationship is together/apart or in/out. The central question is which items belong together and which items cannot be together.

There are two main subtypes of grouping games: **fixed-group** games (where the number of groups is specified and items are assigned to groups) and **selection** games (where you select a subset of items that satisfy certain conditions). The critical skill is creating a clear diagram showing group membership and using conditional rules to determine what must or could be true.

**Key Facts:**
- Grouping games require dividing items into categories based on rules
- Two subtypes: fixed-group (groups have fixed sizes) and selection (select from a pool)
- Key relationships: together, apart, in, out
- Conditional rules are common: "If A is in Group 1, then B is in Group 1" or "If A is selected, then B cannot be selected"
- A block diagram showing which items must be together is often essential
- Negative rules (cannot be together, must be apart) are often the most powerful

⚡ **Exam tip:** In grouping games, always identify the group sizes first. If the groups have fixed sizes, this immediately tells you how many items are in each group. Also look for rules that create "blocks" — items that must be together function as a single unit for placement purposes.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**The Two Types of Grouping Games**

*Fixed-Group Games:*
The groups have pre-determined sizes. Your task is to determine which items go in which group.

Example: "Exactly seven students are assigned to two discussion sections. Section 1 has exactly three students, and Section 2 has exactly four students."

With 7 students and group sizes of 3 and 4, once you know who's in one group, you know who's in the other.

*Selection Games:*
You must select a subset of items that satisfy certain conditions.

Example: "From the seven candidates — F, G, H, J, K, L, and M — exactly four will be selected for the committee, which must include at least two seniors."

The question is who among the seven is in the selected four.

**Diagram for Grouping Games**

For fixed-group games, create a two-column chart:

| Group 1 (3 people) | Group 2 (4 people) |
|--------------------|--------------------|
| ? ? ?              | ? ? ? ?            |

Use plus/minus notation for each item:
- F+: F is in Group 1
- F-: F is not in Group 1 (is in Group 2)

For selection games, use binary notation:
- Items in the selection: ✓
- Items not in the selection: ✗
- Undetermined: ?

**Standard Rules in Grouping Games**

*Together Rules:*
- "A and B are in the same group" means A and B are together (either both in Group 1 or both in Group 2)
- "A and B are always together" creates a block: AB as a unit

*Apart Rules:*
- "A and B are in different groups" means A and B are not together (if one is in Group 1, the other is in Group 2)
- "A and B cannot be together" means A and B must be in different groups

*Conditional Group Rules:*
- "If A is in Group 1, then B is in Group 1" (A → B)
  - Contrapositive: If B is not in Group 1, then A is not in Group 1 (not B → not A)
- "If A is selected, then B is also selected" (A → B)
- "If A is selected, then B is not selected" (A → not B)

**Block Construction**

When items must be together, treat them as a block:
- If A and B must be together, and group sizes are 3 and 4, and we know C is in Group 1, the AB block plus C fills Group 1
- If the AB block is in Group 1, and C is also in Group 1, Group 1 = {A, B, C}

When items must be apart, note the mutual exclusion:
- If A and B must be in different groups, then wherever A goes, B does not go

**The "Either/Or" Rule**

Some rules state alternatives: "Either A is in Group 1 or B is in Group 1 (or both)."

This is equivalent to: If A is not in Group 1, then B is in Group 1 (and vice versa for the contrapositive).

Note: "or both" means both can be in Group 1 — it is not an exclusive or.

**Solving "Must Be Together" Questions**

For a question asking which items must be together:

1. Identify all "together" rules
2. Build blocks from those rules
3. Determine which blocks must stay together under all valid assignments

Example:
Rules:
- A and B are in the same group
- B and C are in the same group
- Therefore: A, B, and C must all be in the same group (ABC block)

**Comparison Table: Grouping vs. Sequencing**

| Feature | Grouping Games | Sequencing Games |
|---------|---------------|-----------------|
| Key relationship | Together/apart, in/out | Before/after |
| Diagram | Two-column chart | Linear order |
| Primary question | Which items are together? | What is the order? |
| Transitivity | A with B, B with C → A with C | A before B, B before C → A before C |
| Block type | Items that must be together | Items in a specific order |

**Common Mistakes to Avoid:**
1. Confusing "A and B are in the same group" with "A and B are both selected"
2. Forgetting the contrapositive of conditional grouping rules
3. Not checking whether an item must be in a specific group when group sizes are fixed
4. Overlooking "if and only if" rules (biconditionals) — they create two-way conditionals
5. Failing to account for the fact that in fixed-group games, knowing who is in one group tells you who is in the other

**Problem-Solving Strategy:**
1. Identify whether this is a fixed-group or selection game
2. Note the group sizes or selection number
3. Identify all "together" rules and build blocks
4. Identify all "apart" rules
5. Identify all conditional rules and their contrapositives
6. Apply rules to determine group membership
7. Test answer choices

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Conditional Rules and Their Contrapositives**

In grouping games, conditional rules are extremely common. The contrapositive is always valid and often the key to solving the game.

*If P then Q (P → Q):* If P is in Group 1, then Q is in Group 1.
Contrapositive: If Q is NOT in Group 1, then P is NOT in Group 1.

*If P then NOT Q (P → ~Q):* If P is in Group 1, then Q is NOT in Group 1.
Contrapositive: If Q IS in Group 1, then P is NOT in Group 1.

*If P then Q, and Q then P (P ↔ Q):* A biconditional means P and Q are always in the same group (both in Group 1 or both not).

**Fixed-Group Size Deductions**

When group sizes are fixed, the complement principle is powerful:

If Group 1 has exactly 3 members and there are 7 total items:
- Any 3 items NOT in Group 1 must be in Group 2
- If you know that A, B, C, and D are all in Group 1, then Group 2 = the remaining 3 items

This creates forced assignments:
- If A and B must be in Group 1, and you know C is also in Group 1, then Group 1 = {A, B, C} (complete)
- The remaining 4 items automatically go to Group 2

**Selection Games: The "At Least" and "At Most" Rules**

Selection games often include conditions like:
- "At least two of F, G, H must be selected"
- "At most one of J, K, L can be selected"
- "Exactly three of the seven candidates will be selected"

These rules constrain the selection:

"At least two of F, G, H selected" means you cannot select 0 or 1 from {F, G, H}. You must select 2 or 3.

"At most one of J, K, L selected" means you can select 0 or 1 from {J, K, L}, but not 2 or 3.

**The Combined Block and Selection Game**

Many LSAT games combine grouping with sequencing or selection with grouping:

Example: "Exactly seven employees are assigned to two projects. Project 1 has exactly four employees, and Project 2 has exactly three employees. Within Project 1, the employees are assigned to offices numbered 1 through 4."

This is a hybrid:
- First, assign employees to projects (a grouping with fixed sizes)
- Then, order the employees in Project 1 by office number (a sequencing within a group)

**The "Could Be True" Test for Selection Games**

For "could be true" questions in selection games:

1. Check whether the answer choice violates any rule
2. Check whether it satisfies all mandatory conditions (at least X, etc.)
3. Check whether the selection count is correct
4. If all checks pass, the answer could be true

For "must be true" questions:
- An item is in every valid selection if it must be included to satisfy the rules
- This often happens when rules require certain combinations that force specific items to be selected

**The Minimally Satisfying Selection**

When a question asks for the minimum or maximum number of items from a category:

Example: "If at least two seniors must be selected, and exactly four people are selected from the seven candidates, what is the maximum number of juniors that could be selected?"

- Minimum 2 seniors → maximum 2 juniors (4 - 2 = 2)
- The maximum is determined by the minimum requirements of other categories

**In/Out Grouping with Multiple Categories**

Some grouping games involve three or more categories:

Example: Items are classified by both type (A, B, C) and size (large, medium, small). This creates a 3×3 grid:
- Large A items, Medium A items, Small A items
- Large B items, Medium B items, Small B items
- etc.

Rules then constrain entries in the grid:
- "No large items can be in category A"
- "All B items must be medium or large"

**WASSCE Examination Patterns:**

LSAT Analytical Reasoning questions for grouping games typically include:
1. Which of the following pairs must be in the same group?
2. Which of the following cannot be in Group 1 together?
3. If A is selected, which of the following must also be selected?
4. What is the maximum number of X that could be in Group 1?
5. If exactly three of the five conditions are satisfied, which condition must be satisfied?

⚡ **Pro Exam Tip:** On LSAT Grouping Games, the "not allowed to be together" rules are often the most powerful because they create mutual exclusions. When you see "X cannot be with Y," remember that wherever X goes, Y does not go, and wherever Y goes, X does not go. In fixed-group games, if you have a block of items larger than the available space in a group, you immediately know that block cannot go in that group.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
