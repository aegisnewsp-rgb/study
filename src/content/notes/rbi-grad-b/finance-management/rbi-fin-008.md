---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-008
topicName: "Communication & Control"
tier: unified
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Complex multi-layered architecture diagram: Foundation shows RBI's PCA trigger thresholds with specific numbers. Above that, a three-tier control pyramid: Operational Controls (bottom, largest), Management Controls (middle), Strategic Controls (top). Side panels show Balanced Scorecard perspectives with Indian bank-specific KPIs. Bottom section shows audit types: Concurrent Audit (real-time), Internal Audit (periodic), Statutory Audit (annual), with their scope and timing differences."
country: india
generated: 2026-05-26
lastUpdated: "2026-09-21"
---

# Communication & Control

### 🟢 Lite — Quick Review (1h–1d)

> Scan this tier in under three minutes — it carries everything the other tiers unpack.

**Communication** is a two-way process where a sender encodes a message, transmits it through a channel, and the receiver decodes it before sending **feedback**; **noise** distorts the message at every step (Shannon-Weaver, 1949). **Control** is the management function that sets standards, measures performance, compares, and corrects — split into **feedforward** (before), **concurrent** (during), and **feedback** (after). For RBI Grade B Phase-II Paper-II, expect roughly 1 question carrying ~3% weight, usually a 5-mark short note or a 50-word conceptual item.

| Function | Core Idea | Standard Device |
|---|---|---|
| Communicate | Sender → Message → Channel → Receiver → Feedback | Berlo's SMCR, 7Cs |
| Control | Standards → Measure → Compare → Correct | Budgetary + Standard Costing |
| Coordinate | Flow direction (up/down/lateral/diagonal) | Grapevine, MBWA |

> 💡 **High-Yield Memory Hook (Memory Hook):** "**S-E-M-C-D-R-F-N**" — Sender, Encoding, Message, Channel, Decoding, Receiver, Feedback, Noise. Walk this loop on the answer sheet and you will not skip a stage.

Three quick recall points:
- **7Cs** = Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.
- **Responsibility Centres** ladder: Cost → Revenue → Profit → Investment.
- **PERT** uses three time estimates; **CPM** uses one.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Pin this on your wall — the items below reappear in almost every descriptive question.

#### The Communication Process and Models

Berlo's **SMCR Model** (1960) places the Source, Message, Channel and Receiver on parallel axes of *skills, attitudes, knowledge, social system and culture*; effectiveness rises only when these attributes align across both ends. Shannon-Weaver is the engineering parent model that introduced **Noise** as a parallel distorting layer — useful when a question asks which model first accounted for transmission distortion. Schramm added the feedback loop, converting a one-way broadcast into a circular act.

#### Communication Channels and Flows

| Flow | Direction | Typical Content |
|---|---|---|
| Downward | Superior → Subordinate | Orders, policies, instructions |
| Upward | Subordinate → Superior | Reports, grievances, suggestions |
| Lateral / Horizontal | Same level | Inter-departmental coordination |
| Diagonal | Crosses hierarchy and department | Project teams, task forces |
| Grapevine | Informal, undirected | Rumours, social bonding |

The **grapevine** travels in four patterns — single-strand, gossip, cluster, probability wheel — and is *informal*, not automatically harmful. **MBWA (Management By Walking Around)** is a concurrent, informal channel that doubles as a feedforward listening device.

#### Barriers and the 7Cs

**Semantic** barriers (jargon, ambiguous words), **physical** (distance, machine noise), **psychological** (perception, stereotyping, the **glass ceiling**), **cultural** (ethnocentricity) and **mechanical** (channel breakdown) each break a different link in the loop. The **7Cs** are the corrective checklist — for an MCQ, remember the odd one out: drop *Courteous* and the option becomes wrong.

#### The Controlling Function

Control mirrors communication in shape: standards act as the encoded message, performance data as feedback, and variance analysis as the corrective channel. The three timing classes are **feedforward** (e.g., recruitment standards set before hiring), **concurrent** (real-time monitoring, MBWA, budgetary control during the period), and **feedback** (variance analysis after period-end).

#### Responsibility Accounting

| Centre | Manager Controls | Performance Metric |
|---|---|---|
| Cost Centre | Costs only | Budget vs actual cost variance |
| Revenue Centre | Sales only | Sales variance SV = (BS−AS) × BP |
| Profit Centre | Costs + Revenue | Controllable profit |
| Investment Centre | Costs + Revenue + Investment | ROI, Residual Income |

ROI = Controllable Profit ÷ Controllable Investment (×100 for %). Residual Income = Controllable Profit − (Controllable Investment × Required Rate of Return). RI overcomes ROI's *dysfunctional behaviour*: a manager whose division already earns 30% will reject a 20% project under ROI but accept it under RI because RI rewards any return above the hurdle.

#### Project Control — PERT vs CPM

PERT (1958, US Navy) is **probabilistic**: TE = (O + 4M + P) / 6 days, variance σ² = ((P − O)/6)² days², suited to R&D where durations are uncertain. CPM is **deterministic**, single-time estimate, built for construction. Both yield a critical path; the difference tested in exams is the *estimate style*, not the diagram.

#### Worked Problem — Standard Costing Variance

A unit's **standard cost** is SC = SQ × SP, where SQ = Standard Quantity (units) and SP = Standard Price (₹/unit). Suppose a product has SQ = 10 kg, SP = ₹20/kg, so SC = ₹200. Actual results: AQ = 11 kg, AP = ₹21/kg, so AC = ₹231.

| Variance | Formula | Value |
|---|---|---|
| Material Price | (SP − AP) × AQ = (20 − 21) × 11 | **−₹11** Unfavourable |
| Material Usage | (SQ − AQ) × SP = (10 − 11) × 20 | **−₹20** Unfavourable |
| Total Material Variance | SC − AC = 200 − 231 | **−₹31** Unfavourable |

> ⚠️ **Examiner Trap (Examiner Trap):** Students often multiply (AP − SP) × AQ and lose the sign. Price variance is **favourable when SP > AP**, *not* when AP > SP. Always plug into (Standard − Actual); the algebraic sign tells you the direction.

#### Worked Problem — PERT Critical Path

A four-activity network has optimistic, most likely and pessimistic times (in days): A(2, 4, 6), B(3, 5, 13), C(1, 3, 5), D(4, 6, 8). Compute TE for each:

- A: (2 + 16 + 6)/6 = 4.00 days, σ² = (4/6)² ≈ 0.44
- B: (3 + 20 + 13)/6 = 6.00 days, σ² = (10/6)² ≈ 2.78
- C: (1 + 12 + 5)/6 = 3.00 days, σ² = (4/6)² ≈ 0.44
- D: (4 + 24 + 8)/6 = 6.00 days, σ² = (4/6)² ≈ 0.44

Critical path is the longest TE sequence (A → B = 10 days, A → D = 10 days, both tie); variance on the path is the sum of component variances (e.g., A+B = 3.22 days²). Compare this with a CPM scenario: if you were told each activity takes a *single* time, you would skip the (O+4M+P)/6 step entirely — that switch from probabilistic to deterministic is the PERT/CPM discriminator in MCQs.

> ⚠️ **Examiner Trap (Examiner Trap):** Do not average optimistic and pessimistic, do not compute σ as (P−O); the formula is ((P−O)/6)², in days², and the divisor 6 is fixed.

---

### 🔴 Extended — Deep Study (3mo+)

> Push past recall — these are the items that distinguish a 60% answer from an 80% one.

#### COSO and the Modern Control Stack

COSO 2013 defines internal control through **three objectives** (operations, reporting, compliance) and **five components** (Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring Activities). Notice that *Information & Communication* is itself a COSO component — so a failure in communication is, by definition, a control weakness.

The **Balanced Scorecard** (Kaplan & Norton, 1992) translates vision into four perspectives: **Financial, Customer, Internal Business Process, Learning & Growth**. *Lag indicators* (ROCE, customer satisfaction) measure outcomes; *lead indicators* (training hours, defect rates) drive them. In RBI descriptive answers, name the four perspectives in order and pair each with one lead and one lag indicator.

#### Span, Layers and the Glass Ceiling

Graicunas' direct relationships formula for *n* subordinates is n(2ⁿ/2 + n − 1) — for n = 5 this is 100 relationships, for n = 8 it is 1,080, which is why spans widen only with training, standardised procedures and stable environments. A narrow span builds a **tall** organisation (many layers, slow upward communication); a wide span builds a **flat** organisation (faster lateral, weaker upward). The **glass ceiling** operates as a *psychological* barrier — perception and stereotyping — rather than an explicit rule, which is why exam answers should classify it under psychological, not organisational, barriers.

#### Decision Trees and Expected Value

EV = Σ (Pi × Vi), where Pi is dimensionless (0 ≤ P ≤ 1) and Vi is in ₹. Suppose RBI is choosing between in-house audit (probability 0.7 of catching a ₹10 lakh fraud, 0.3 of missing it; cost ₹1 lakh) and outsourcing (probability 0.9 of catching it, cost ₹3 lakh):

- In-house EV = 0.7 × 10 + 0.3 × 0 − 1 = **₹6 lakh**
- Outsource EV = 0.9 × 10 + 0.1 × 0 − 3 = **₹6 lakh**

EV ties, so the decision pivots on non-quantitative factors — a classic exam pivot.

#### Edge-Case Traps (advanced)

1. **Feedforward vs Feedback** — feedforward is *preventive* and pre-activity (e.g., pre-employment tests); feedback is *corrective* and post-activity (e.g., variance analysis). Options that swap the timing labels are traps.
2. **ROI vs RI** — RI promotes **goal congruence**; ROI encourages **dysfunctional behaviour** when a manager rejects a project whose return exceeds the company's hurdle but is below the division's current ROI.
3. **Grapevine** — the *single correct* statement is that it is informal and *can be either* beneficial or harmful; never pick an option calling it "always harmful" or "always false".
4. **Critical path variance** — take the variance of the *critical path only*, not of every activity; path variance is the sum of activity variances along that path.
5. **Berlo vs Shannon-Weaver** — Berlo added the *skills–attitudes–knowledge–culture–social system* lens; the *Noise* element belongs to Shannon-Weaver.
6. **Communication loop completeness** — a 5-mark question on "explain the process of communication" deducts marks for omitting feedback or noise; enumerate all eight elements of S-E-M-C-D-R-F-N.
7. **Crisis communication** — must be *fast, accurate, consistent*; the ethical violation is silence or concealment, which can escalate legal exposure under RBI's disclosure norms.

#### Advanced Practice Prompts

1. A division earns a controllable profit of ₹240 crore on controllable investment of ₹1,200 crore. The required rate of return is 18%. A new project requires ₹200 crore additional investment and yields ₹44 crore controllable profit. Will the manager accept under ROI? Under RI? Show both. *(Expected: current ROI 20%, project ROI 22% — accepted under both; but at current ROI 25% and project ROI 22%, accepted under RI only — the dysfunction appears.)*
2. Three estimates for a research activity are 6, 9, 18 days. Compute TE and σ. If the project has three such activities on its critical path with σ² values of 1.78, 2.00 and 2.78, find the standard deviation of the path and the probability of finishing within 30 days. *(Expected: TE = 10, σ = 2; path σ = √6.56 ≈ 2.56; Z = (30 − 30)/2.56 = 0, P ≈ 50%.)*

---

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "Communication & Control" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Finance & Management notes](/notes/rbi-grad-b/finance-management/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
