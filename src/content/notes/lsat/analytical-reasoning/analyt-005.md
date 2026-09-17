---
exam: lsat
examName: LSAT India
subject: analytical-reasoning
subjectName: "Analytical-Reasoning"
topic: analyt-005
topicName: Advanced Deduction Techniques and LSAT Strategy
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# Advanced Deduction Techniques and LSAT Strategy

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Advanced deduction techniques are the inference tools you apply after sketching a Logic Games diagram, when no single rule directly answers the question. They extend the four canonical game types (linear ordering, grouping, hybrid, pure sequencing) by combining rules, exploiting limited slots, and recognizing conditional chains. On LSAT India, Analytical Reasoning contributes roughly 3% of the composite and shows up as one scored section of about 22–24 games questions. Mastery is the difference between solving the first two easy questions in a game and cracking the harder third, fourth, and fifth.

- **Conditional Chain**: chain two or more "If A → B" rules to infer A → C across multiple steps.
- **Contrapositive**: from "If A then B", derive the valid reverse "If not-B then not-A".
- **Block**: two entities always together or always apart, treated as a single unit.
- **Master List**: every must-be-true and cannot-be-true inference you can derive before reading choices.
- **Double-Branch**: a rule that splits the game into two parallel worlds you must track separately.
- **Numerical Distribution**: count limited slots (e.g., 4-of-7 selection) to force slot assignments.

> 💡 **High-Yield Memory Hook:** **"C-B-D-M-N"** — **C**hain, **B**lock, **D**ouble-branch, **M**aster list, **N**umerical count. Run this checklist on every Logic Game before touching answer choices.

| Term | One-line meaning |
|---|---|
| Must Be True | holds in every valid arrangement |
| Cannot Be True | impossible in any valid arrangement |
| Can Be True (EXCEPT) | the wrong choice is the one that is impossible |
| Local vs Global | local = one branch only; global = all branches |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Inference Mechanisms

Five mechanisms drive nearly every advanced deduction on LSAT India games. **Rule combination** links two conditionals so "If A → B" and "If B → C" yield "If A → C". **Contrapositive conversion** turns "If A then B" into "If not-B then not-A", letting you eliminate options that violate the reverse direction. **Block identification** recognizes when two entities must occupy adjacent slots, swap together, or always appear apart, letting you collapse them into one super-entity and shrink the diagram.

**Numerical distribution** counts limited slots. In a "select 4 of 7" game, three entities are out, so you can test which slots are forced. **Double-branch deduction** appears when one rule creates two parallel scenarios (e.g., "A is selected unless B is selected"), and a valid inference must survive both branches.

#### Local vs Global Inference

A **local inference** holds only inside one branch or under one partial arrangement — it answers "what must be true here?" A **global inference** holds across every valid arrangement of the game and is required for Must Be True and Cannot Be True questions. Confusing the two is the single most common reason students pick a tempting wrong answer.

#### Concept Comparison Matrix

| Technique | When to apply | Risk if misapplied |
|---|---|---|
| Conditional Chain | Two or more "If…then" rules share a middle term | Chain a rule that only runs one direction |
| Contrapositive | Conditional rule with a negation on one side | Treat contrapositive as a biconditional |
| Block | Two entities locked together or locked apart | Miss non-consecutive blocks (e.g., separated by exactly one slot) |
| Double-Branch | Rule creates two parallel worlds | Pick an answer true in one branch but false in the other |
| Numerical Count | Limited selection or fixed slot count | Over-count slots and assume a forced placement |

#### Standard Problem Types

- **Inference (Must Be True / Must Be False)**: pick the statement forced by the master list.
- **Can Be True (EXCEPT)**: four choices are possible; one is impossible — find the impossible one.
- **Sequencing completion**: supply the entity that fits the only remaining slot pattern.
- **Conditional question**: a new "If…" stem triggers a sub-game; update the master list first.

#### 🎯 Exam-Level Worked Problem

**Question:** A committee of exactly four members is selected from seven volunteers: F, G, H, J, K, L, M. The selection rules are:

1. If F is selected, G is also selected.
2. If G is selected, H is not selected.
3. J is selected unless K is selected.
4. L and M cannot both be selected.

Which one of the following **CANNOT be true**?

(A) F is selected.
(B) G is selected.
(C) K is selected.
(D) L is selected.
(E) J is not selected.

#### Solution:

- **Step 1 — Chain the conditionals.** From rule 1 (F → G) and rule 2 (G → not-H), chain to infer F → not-H. So selecting F forces G and excludes H.
- **Step 2 — Convert contrapositive.** From rule 3 "J is selected unless K is selected" rewrite as K → J. Contrapositive: not-J → not-K.
- **Step 3 — Count slots.** Four of seven are picked; three are out. Test each choice against a valid four-person set.
 - (A) F selected: pick {F, G, J, L} — satisfies all rules. **Possible.**
 - (B) G selected: pick {G, K, L, M}? No — L and M conflict. Pick {G, K, J, L} — valid. **Possible.**
 - (C) K selected: rule 3 forces J; pick {K, J, F, L} — valid. **Possible.**
 - (D) L selected: pick {L, F, G, J} — valid. **Possible.**
 - (E) J not selected: by contrapositive of rule 3, not-J forces not-K. So K is out, J is out, and we need four from {F, G, H, L, M}. Try {F, G, L, M}: rule 4 forbids L+M together. Try {F, G, H, L}: rule 2 forbids G+H together. Try {F, G, H, M}: again G+H forbidden. Try {F, H, L, M}: L+M forbidden. The only remaining candidates excluding G and K leave at most three compatible members. **Impossible.**

#### Answer: (E) J is not selected.

> ⚠️ **Examiner Trap:** Students in many papers pick (B) because they forget that G and H conflict, but G can pair with K, J, and L instead of H. Always exhaust the slot budget before declaring a choice impossible — partial elimination is not proof.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

Advanced deductions break down in three predictable ways. **First**, conditional chains only run in the direction the rules allow — "If A → B" cannot be flipped to "If B → A" unless the source rule is biconditional. **Second**, double-branch games hide inferences that are true in branch 1 but false in branch 2; these are local, never global. **Third**, numerical distribution inferences require you to confirm a forced slot, not merely suggest one — the moment a branch permits an alternative, the "must" collapses to "can".

#### Adjacent Topics

These techniques overlap with **Linear Ordering and Sequencing Games** (block placement, floater slots), **Grouping Games** (split-game distributions), and **Pattern Games** (the "unless" and "only if" conditionals that drive double-branch work). Conditional chaining also resurfaces in Logical Reasoning conditional arguments, so the contrapositive habit transfers.

#### Advanced Traps and Exceptions

1. **Unless / Only if reversal**: "P is selected unless Q is selected" means Q → P, not P → Q.
2. **Non-consecutive blocks**: a block can be separated by a fixed number of slots; mark the gap explicitly.
3. **Floater / wildcard entities**: one entity is unconstrained and acts as a free variable in every branch.
4. **Hybrid game leakage**: a numerical rule in a sequencing game can force a position even when no chain exists.
5. **EXCEPT key wording**: in "can be true EXCEPT", four answers are possible — the right answer is the **impossible** one.
6. **Stale master list**: after a new conditional stem, rebuild the must-be-true list before scanning choices.

#### Exam Specifics

On LSAT India, Analytical Reasoning is one of four scored sections alongside Logical Reasoning, Reading Comprehension, and Quantitative Reasoning. Games cluster into four-question sets, and the harder inference questions sit at positions three, four, and five. Budget about 8–9 minutes per game; spend the first 90 seconds building the master list so the harder questions fall quickly.

#### Practice Prompts

1. In a six-slot linear game with rule "A is immediately before B" and rule "B is not in slot 4", derive every forced slot and test whether A must occupy slot 3.
2. Build a double-branch diagram for "R is chosen unless S is chosen, and if S is chosen then T is chosen", then identify one global inference and one local inference.

---

## Continue your study

- **[View this topic in your LSAT India roadmap](/roadmap/?exam=lsat&duration=1mo)** — see where "Advanced Deduction Techniques and LSAT Strategy" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lsat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LSAT India exam overview](/exams/lsat/)** — pattern, eligibility, and syllabus
- **[All Analytical-Reasoning notes](/notes/lsat/analytical-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
