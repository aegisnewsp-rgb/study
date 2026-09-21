---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-004
topicName: "Use critical path analysis in solving problems (91576)"
weight: 2
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Use critical path analysis in solving problems (91576) — NCEA Level 3 Calculus Notes

Achievement Standard 91576 carries 2 credits and tests project scheduling using activity networks. It covers earliest and latest start/finish times, float, critical path identification, and resource considerations. Critical path analysis is widely used in project management, construction, software development, and event planning.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **2 credits**, internally assessed by the school, NZQA moderated.
- Topics: activity networks (nodes = events, edges = activities); earliest start (ES), earliest finish (EF), latest start (LS), latest finish (LF); total float; critical path identification.
- **Merit** requires relational thinking — interpreting float in context, identifying the critical path correctly.
- **Excellence** requires extended abstract thinking — applying critical path analysis to a project plan, accounting for resource constraints.

#### Examiner traps

- Forgetting to specify the units (the project is usually measured in days, weeks or hours).
- Confusing earliest start (when an activity can begin at the earliest) with latest start (when it must begin to avoid delaying the project).
- Calculating float incorrectly (LF − EF, or LS − ES — both give the same total float).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Activity networks

An activity network (also called an activity-on-edge network) represents a project as a set of events (nodes) connected by activities (edges). Each activity has a duration. Predecessor activities must be completed before a successor activity can begin.

#### Forward pass: earliest times

Working from the start of the project:

- **Earliest Start (ES)** of an activity = maximum EF of all its predecessors (or 0 for the first activity).
- **Earliest Finish (EF)** of an activity = ES + duration.

The earliest finish of the final activity is the minimum possible project duration.

#### Backward pass: latest times

Working from the end of the project:

- **Latest Finish (LF)** of an activity = minimum LS of all its successors (or the project duration for the final activity).
- **Latest Start (LS)** of an activity = LF − duration.

#### Float

**Total float** of an activity = LF − EF = LS − ES.

This is the amount of time the activity can be delayed without delaying the project.

**Free float** of an activity = minimum ES of successors − EF.

This is the amount of time the activity can be delayed without delaying any successor.

#### Critical path

The critical path is the longest path through the network, composed of activities with zero total float. These activities must be completed on schedule to avoid delaying the project.

#### Worked example

A project has activities A (3 days), B (4 days), C (2 days), D (5 days), E (6 days). A is first; B follows A; C follows A; D follows B and C; E follows D.

- ES(A) = 0, EF(A) = 3.
- ES(B) = 3, EF(B) = 7. ES(C) = 3, EF(C) = 5.
- ES(D) = max(7, 5) = 7, EF(D) = 12.
- ES(E) = 12, EF(E) = 18.

Minimum project duration = 18 days.

Backward pass:

- LF(E) = 18, LS(E) = 12.
- LF(D) = 12, LS(D) = 7.
- LF(C) = 7, LS(C) = 5. (C is a predecessor of D; LF(C) = LS(D) = 7.)
- LF(B) = 7, LS(B) = 3. (B is a predecessor of D; LF(B) = LS(D) = 7.)

Float:

- A: total float = LF(A) − EF(A). LF(A) = min(LS(B), LS(C)) = min(3, 5) = 3. So total float = 3 − 3 = 0. A is critical.
- B: total float = 7 − 7 = 0. B is critical.
- C: total float = 7 − 5 = 2. C has 2 days float.
- D: total float = 12 − 12 = 0. D is critical.
- E: total float = 18 − 18 = 0. E is critical.

Critical path: A → B → D → E. Duration 18 days.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Resource considerations

Critical path analysis assumes unlimited resources (any activity can be done as soon as its predecessors are complete, regardless of who is doing it). In practice, resources (people, machines, money) are limited. Resource-constrained scheduling adds the constraint that no resource is over-allocated.

For Excellence, the standard expects students to discuss resource considerations briefly (e.g., "if the same person does activities B and C, the project takes longer because B and C cannot overlap").

#### Gantt charts

A Gantt chart visualises the project schedule as horizontal bars on a timeline. Each activity has a bar showing its start, duration, and end. Critical path activities are often shown in a different colour.

Gantt charts are widely used in project management software (Microsoft Project, Asana, Trello, etc.).

#### Crash analysis

Crash analysis asks: what is the cheapest way to reduce the project duration by 1 day? The answer: shorten the cheapest critical path activity. If the cost is too high, consider crashing multiple activities in parallel.

For Excellence, this kind of analysis appears in project management courses and is the basis of the trade-off between time and cost.

#### Common misconceptions (and the correction)

- "Latest start is always equal to earliest start." No — earliest start assumes the activity starts ASAP; latest start is the latest it can start without delaying the project. Their difference is the float.
- "Critical path is the shortest path." No — it is the longest path.
- "Zero float means the activity is unimportant." No — zero float means it is critical; delaying it delays the project.
- "Float can be negative." It can if the project schedule is infeasible (i.e., the target end date is earlier than the critical path allows).

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91576 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics. Awarding body: NZQA.*
