---
exam: lsat
examName: LSAT India
subject: analytical-reasoning
subjectName: "Analytical-Reasoning"
topic: analyt-009
topicName: "Linear Ordering Games"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-06"
---

# Linear Ordering Games

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A Linear Ordering Game (line game) asks you to arrange **5–7 entities** into a single one-dimensional sequence using conditional and absolute placement rules. The raw search space is **n!** (e.g., 6 entities → 720 sequences) before any rule is applied.

- **Fixed position**: entity locked to slot *k* (e.g., D in 3rd).
- **Comparative position**: "somewhere before" or "immediately before" another entity.
- **Conditional rule**: "If X then Y" — only fires when the antecedent is placed.
- **Transitive chain**: A before B, B before C ⇒ A before C.

| Term | Meaning |
| --- | --- |
| Master diagram | Single sketch holding every unfixed slot + locked placements |
| Scenario split | Separate diagrams only when a conditional has two non-mergeable branches |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Anatomy of a Linear Game

Each game opens with an entity roster of usually 5–7 people, objects, or variables that must sit in a line with two distinct endpoints. Every rule falls into one of four families: **absolute** (X is in position *k*), **comparative** (X is somewhere/immediately before Y), **conditional** (if X is placed then Y follows), or **block/group** (X and Y must be adjacent). Sketch a master diagram immediately, reserving one cell per entity, and pencil in every locked placement before testing any answer.

#### Rule Translation Table

| Rule phrasing in stimulus | Diagram mark | Logic |
| --- | --- | --- |
| "D is third" | `D` locked in cell 3 | Absolute |
| "A is immediately before B" | `A → B` with no gap | Comparative-adjacent |
| "A is somewhere before B" | `A … B` (gap allowed) | Comparative-nonadjacent |
| "If M is in slot 2, N is in slot 5" | Conditional arrow `M₂ ⇒ N₅` | Conditional |
| "F and G are not adjacent" | ≥1 entity must separate them | Negative |

#### Question Stems and Strategy

- **Must Be True**: try to violate the choice against every rule; if any rule still holds, the choice is not forced.
- **Cannot Be True**: locate the single rule that forbids the choice.
- **Could Be True**: attempt to construct a valid diagram containing the choice.
- **Counting**: compute (n−k)! after fixing k placements, or split into scenarios and sum.

Chain transitively before answering — A→B plus B→C collapses to A→C and may force a slot without further work.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Traps

The most expensive errors come from operators that look alike. "Immediately before" forbids any entity between the pair; "somewhere before" only forbids the reverse. "Between" requires entities on **both** flanks — A between B and C means B…A…C **and** C…A…B both remain valid unless directionality is specified. "Not adjacent" permits a gap of one or more, distinct from "not immediately before," which only blocks the directly-prior slot. Mixing these inflates or deflates arrangement counts by a factor of 2–6.

#### Scenario-Splitting Discipline

Split a master diagram only when a conditional has two branches that **cannot coexist** under the rules. If one branch merely contains the other, keep a single diagram and annotate the contained case. Premature splitting doubles your work and lets a candidate placement slip between the cracks.

1. Identify the conditional whose antecedent can be true or false.
2. Test whether both placements coexist — if yes, do not split.
3. If no, draw two master diagrams and re-apply each rule to both.

#### Worked Mini-Example

Six runners R, S, T, U, V, W. Rules: (1) R is 2nd; (2) S is immediately before T; (3) U is somewhere after W; (4) if V is 1st, W is 6th. Lock R₂. Place the S→T block in cells {1,2}, {3,4}, {4,5}, or {5,6} — four positions. Under rule (4), V₁ forces W₆, leaving T at 5, S at 4, R at 2, and U in {3}. One valid arrangement. Without V₁, U and W can swap, yielding two more arrangements. Total = 1 + 2 = 3 valid worlds.

#### Common Mistakes

- Treating "somewhere before" as adjacent — over-constrains.
- Forgetting that a conditional does **not** trigger when its antecedent is absent.
- Drawing a circle for a linear game; line games have two open endpoints.

#### Practice Prompts

1. Given the rules above, **must** W be 6th? Justify using a counter-example.
2. If rule (2) becomes "S is somewhere before T," recompute the total valid arrangements.

## Continue your study

- **[View this topic in your LSAT India roadmap](/roadmap/?exam=lsat&duration=1mo)** — see where "Linear Ordering Games" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lsat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LSAT India exam overview](/exams/lsat/)** — pattern, eligibility, and syllabus
- **[All Analytical-Reasoning notes](/notes/lsat/analytical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
