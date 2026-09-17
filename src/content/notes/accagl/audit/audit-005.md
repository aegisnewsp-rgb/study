---
exam: accagl
examName: ACCA/CA Pakistan
subject: audit
subjectName: "Auditing"
topic: audit-005
topicName: "Internal Controls Systems"
weight: 3
country: pakistan
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# Internal Controls Systems

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ACCA AB or ICAP CAF-08 paper.

Internal control is what management builds to give **reasonable assurance** about operations, financial reporting, and compliance. The auditor's job is not to build it, but to **evaluate and test** it.

| Concept | One-line answer |
|---|---|
| **Reasonable assurance** | Controls reduce, never eliminate, risk of misstatement |
| **COSO framework** | Five components: Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring |
| **Audit Risk model** | AR = IR × CR × DR |
| **ISA 315 vs ISA 330** | 315 = understand controls; 330 = test them when relying on them |

Three control flavours to keep separate:

- **Preventive** — stops errors before they happen (authorisation, segregation of duties).
- **Detective** — spots errors after the event (bank reconciliation, variance analysis).
- **Corrective** — fixes what detective controls find (journal adjustments, policy updates).

> 💡 **High-Yield Memory Hook — "PRE-DEC-COR" + "CERIM":** The three control types run in time order **PRE → DE → COR** (prevent, detect, correct). The five COSO components are **C**ontrol environment, **E**valuation of risks, **R**elated activities, **I**nformation & comms, **M**onitoring — **CERIM**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Working understanding of how the auditor uses internal control evidence to plan and perform the audit.

#### The COSO cube, in plain language

The COSO framework treats internal control as a **system of five interlocking components**, sitting on top of three objectives (operations, reporting, compliance) and sliced across four entity levels (entity, division, operating unit, function). For ACCA AB and ICAP CAF-08, the five components are tested by name far more often than the cube geometry.

| Component | What it actually looks like in a client | What can go wrong |
|---|---|---|
| **Control environment** | Tone at the top, code of conduct, HR policies | Dominant owner, weak ethics |
| **Risk assessment** | Annual risk register, fraud risk review | Stale register, no change triggers |
| **Control activities** | Authorisation matrix, reconciliations, IT controls | Manual overrides, undocumented approvals |
| **Information & communication** | Monthly accounts, internal memos, whistleblower line | Hoarded data, no upward channel |
| **Monitoring activities** | Internal audit, management review, self-assessment | Reports no one reads |

#### Control types and the time axis

The **preventive / detective / corrective** split is a question about *when* the control acts. Bank reconciliation is detective because the cash has already moved; segregation of duties is preventive because no one person can both initiate and record a transaction.

> 📌 **Formula Check — Audit Risk:** AR = IR × CR × DR, where IR is inherent risk (susceptibility before any controls), CR is control risk (risk controls fail to prevent/detect a misstatement), DR is detection risk (risk the auditor's own procedures miss it). All three are probabilities between 0 and 1. Lower CR through effective controls lets the auditor accept higher DR, which cuts substantive testing.

#### Comparison matrix: tests of controls vs substantive procedures

| Feature | Tests of controls (compliance) | Substantive procedures |
|---|---|---|
| **Audit objective** | Check a control **operated** effectively | Check a balance or transaction is **not misstated** |
| **Driving standard** | ISA 330 | ISA 500, ISA 520, ISA 530 |
| **Evidence type** | Reperformance, observation, inspection of approval | Analytical procedures, detailed sample testing |
| **Extent link** | Depends on planned reliance on the control | Depends on assessed AR after control testing |
| **Common trap** | One walkthrough ≠ year-round effectiveness | Lower detection risk ≠ zero detection risk |

#### A 10-mark scenario, walked through

A cash-intensive retailer claims strong controls over till takings. Cashiers count floats at shift start; supervisors reconcile till rolls to cash banked daily; the CFO signs the bank lodgement slip; the cashier's counterfoil is filed; IT runs a daily exception report for voids over PKR 5,000.

Walk the auditor through:

1. **Identify the cycles** — cash receipts cycle; banking cycle. Two cycles overlap; treat them as one revenue-to-bank path.
2. **Map controls to COSO** — supervisor reconciliation is a detective control activity; CFO sign-off is a preventive authorisation; exception report is an IT application control feeding monitoring activities.
3. **Run a walkthrough** — trace one day's takings from till to bank lodgement, asking "who could override this?" A dominant CFO who both signs and reconciles breaks segregation.
4. **Spot the segregation failure** — supervisors reconcile but also bank the cash in person. Authorisation, custody, recording, and reconciliation are still spread, but **custody and recording share an actor** if the supervisor also posts the journal.
5. **Decide on reliance** — control risk cannot be assessed as low. The auditor therefore lowers detection risk by performing **year-end bank confirmation**, **counting cash on a surprise basis**, and **checking the full void log**, not a sample.
6. **Document** — the ICQ entry for "cash custody" is marked "deficiency noted", with the planned extended substantive response recorded under ISA 330.

> ⚠️ **Examiner Trap — "strong controls, less testing":** students read one or two good controls and write that the auditor can therefore reduce substantive procedures. ISA 330 requires evidence the control **operated consistently throughout the period**, not just on a sample date. A walkthrough is evidence of design and implementation only — operating effectiveness needs further testing before reliance is justified.

#### Auditor vs management responsibility

Management designs and implements the system; the auditor obtains an understanding of it (ISA 315) and tests it only when intending to rely on it (ISA 330). Confusing these two responsibilities is a recurring loss of marks on both ACCA AB and ICAP papers.

> ⚠️ **Examiner Trap — "absolute assurance":** if the question asks about the *limitations* of internal control, the answer must name collusion, management override, cost–benefit trade-offs, and human error. Writing "internal control prevents fraud" is technically wrong and scores zero.

---

### 🔴 Extended — Deep Study (3mo+)
> Edge cases, IT layering, internal-audit reliance, and two advanced prompts.

#### IT controls: the dependency most students miss

Application controls (input validation, edit checks, automated postings) sit on top of **General IT Controls (GITCs)** — change management over programmes, logical access security, IT operations, and backup recovery. If GITCs fail, application controls fail silently regardless of how elegant the screen design looks. ACCA and ICAP scenarios frequently bury a missing change-management approval deep in the narrative; the candidate who flags it usually picks up the full two marks for that sub-question.

| Layer | What it does | Failure mode |
|---|---|---|
| **GITC — change management** | Authorises and tests programme changes before go-live | Unauthorised code edits in production |
| **GITC — access security** | Restricts who can read, change, or post transactions | Privileged users posting fictitious journals |
| **GITC — IT operations** | Job scheduling, batch monitoring, incident handling | Jobs run twice or not at all |
| **Application controls** | Field validation, matching, automatic calculations | Accepts invalid customer IDs without flagging |

#### Relying on internal audit — ISA 610

External auditors may use internal audit work, but only after evaluating three attributes:

1. **Objectivity** — organisational status, reporting line, freedom from operational responsibility.
2. **Competence** — qualifications, experience, training.
3. **Systematic approach** — planning, supervision, documentation, evidence retention.

Even when all three are positive, the external auditor still performs some procedures directly. Sole reliance is not permitted; the external auditor must take responsibility for the audit opinion in full.

> 📌 **Formula Check — Reasonable assurance boundary:** *absolute* assurance is unattainable because (a) judgement is involved in every estimate, (b) collusion defeats segregation, (c) management can override controls, and (d) the cost of perfect control exceeds the benefit. The framework therefore aims at *reasonable*, not absolute, confidence.

#### Advanced traps and exceptions

1. **Right tone, wrong practice.** A polished code of conduct in control-environment evidence often masks real override behaviour at the CFO level — environment questions need behavioural evidence (whistleblower reports actually investigated), not policy documents alone.
2. **Four-component answers.** Listing COSO as four components is so common that ACCA markers publish it as a "favourite pitfall"; the missing component is almost always **Monitoring Activities**.
3. **Control risk ≠ detection risk.** Control risk sits at the entity level and is reduced by management; detection risk sits at the auditor level and is set by the auditor. Mixing them collapses the AR model.
4. **Authorisation ≠ segregation.** A manager authorising every transaction is a *single* control; segregation requires authorisation, custody, recording, and reconciliation to be split across at least two people.
5. **Walkthrough ≠ operating effectiveness.** ISA 315 walkthroughs establish design and implementation; ISA 330 testing establishes operating effectiveness. Reliance requires the second step.

#### Two advanced practice prompts

1. **Scenario — payroll ghost employees.** The client runs a fully automated payroll system with strong input and processing controls, but change requests to the payroll master file are approved by the HR director alone and not logged. Walk through the GITC and application-control layers, identify the segregation gap, and propose the auditor's response under ISA 330.
2. **Scenario — internal audit heavy reliance.** The client's internal audit team tested revenue controls year-round and produced a clean report. The external auditor wants to use 40% of this work to reduce substantive testing. Apply the ISA 610 framework, decide which attributes need documentary support, and outline the additional direct procedures required.

---

## Continue your study

- **[View this topic in your ACCA/CA Pakistan roadmap](/roadmap/?exam=accagl&duration=1mo)** — see where "Internal Controls Systems" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=accagl&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ACCA/CA Pakistan exam overview](/exams/accagl/)** — pattern, eligibility, and syllabus
- **[All Auditing notes](/notes/accagl/audit/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
