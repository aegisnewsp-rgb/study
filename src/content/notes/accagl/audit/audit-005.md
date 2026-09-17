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
> Rapid summary for last-minute revision before your exam.

**Internal control** is the system of policies, procedures, and organisational structures designed and implemented by **management** to provide **reasonable assurance** about achieving objectives in operations, financial reporting, and compliance. The auditor's job is to **evaluate**, not design, that system.

| Term | Meaning | Exam hook |
|---|---|---|
| Control environment | Tone at the top; ethics, governance | COSO component 1 |
| Risk assessment | Identification and analysis of risks | COSO component 2 |
| Control activities | Authorisation, reconciliations, segregation | COSO component 3 |
| Information & communication | Capture and share relevant data | COSO component 4 |
| Monitoring activities | Ongoing and separate evaluations | COSO component 5 |

Audit Risk model: **AR = IR × CR × DR**, where IR = inherent risk, CR = control risk, DR = detection risk (all probabilities, dimensionless, 0 to 1).

> 💡 **High-Yield Memory Hook:** **C-R-C-I-M** — "**C**ontrol environment, **R**isk assessment, **C**ontrol activities, **I**nformation & communication, **M**onitoring." Missing the **M** is the #1 reason ICAP/ACCA scripts lose a mark on COSO component identification.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Components of the COSO Framework

The COSO Internal Control – Integrated Framework defines five **interrelated** components. The Board and management set the **control environment**, which underpins **risk assessment** of objectives across operations, reporting, and compliance. Management then designs and executes **control activities** — authorisation, reconciliations, physical safeguards, segregation of duties — supported by **information & communication** channels that flow up, down, and across the entity. **Monitoring activities** (ongoing supervision, internal audit, management review) assess whether the other four components continue to operate effectively.

#### The Audit Risk Equation

When planning an audit, the auditor links entity-level risks to the level of substantive evidence needed:

> **AR = IR × CR × DR**

Variables: AR = audit risk (acceptable level of issuing an incorrect audit opinion), IR = inherent risk (susceptibility of an assertion to material misstatement **before** any controls operate), CR = control risk (risk that controls fail to prevent or detect misstatement), DR = detection risk (risk that the auditor's procedures miss a misstatement that has escaped the entity's controls). Stronger internal controls **lower CR**, which in turn lets the auditor accept a **higher DR** and reduce substantive testing.

#### Classification of Control Activities

Control activities are classified by **timing**, not by importance. Preventive controls stop errors before they occur (e.g., purchase order approval, segregation of custody from recording). Detective controls identify errors after they have occurred (e.g., bank reconciliations, exception reports). Corrective controls remedy detected problems (e.g., posting a reconciliation adjustment, retraining staff).

| Type | When it acts | Payroll example | Trade-off |
|---|---|---|---|
| Preventive | Before the event | Supervisor approval of overtime | Slows processing |
| Detective | After the event | Variance analysis of payroll cost | Only finds errors that occurred |
| Corrective | After detection | Recompute and reissue payslip | Requires follow-up discipline |

#### ISA 315 vs ISA 330 — Auditor's Duties

**ISA 315 (Revised)** requires the auditor to **obtain an understanding** of the entity's internal control relevant to the audit, including the IT environment, through procedures such as inquiry, observation, inspection, and **walk-through tests**. **ISA 330** then governs the auditor's response: the auditor may perform **tests of controls (compliance testing)** to confirm operating effectiveness *before* relying on those controls to reduce substantive procedures. Where controls are weak or untested, the auditor must rely wholly on substantive procedures.

#### 🎯 Exam-Level Worked Problem

**Question:** Sterling Trading Ltd processes customer orders via an integrated ERP system. The credit controller manually enters orders received by email into the ERP; no pre-numbered acknowledgement is sent; monthly statements are mailed only when requested by the customer. The auditor is assessing control risk over **revenue completeness**.

Classify three controls above as **preventive, detective, or corrective**, and state whether the auditor can place **low control risk** under ISA 330. Justify using one component each from COSO.

#### Solution:

1. **Manual order entry by credit controller** → only a **detective** control at best (manual review can spot mistakes after keying); there is **no preventive segregation** between order acceptance and order recording — a fraud risk.
2. **No pre-numbered customer acknowledgement** → control activity is **missing**, so completeness assertions cannot be evidenced at the source.
3. **Statements only on request** → a weak **detective** activity; customers cannot independently confirm items they never receive in the normal course.

Therefore, control risk for revenue completeness **cannot be set low**. Under ISA 315 the auditor identifies COSO **Control Activities** (component 3) as deficient, and under ISA 330 must **not rely on automated application controls** without testing supporting general IT controls first. The auditor expands substantive procedures on revenue — cut-off, confirmations, and analytical procedures at the period-end.

> ⚠️ **Examiner Trap:** Students often write "the auditor should increase substantive testing because controls are weak" — but the correct phrasing is the auditor "**does not rely on controls** and **performs further substantive procedures**." "Increasing" testing implies some controls were originally relied upon; the auditor here never relied on any.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### IT Controls — General vs Application

Reliable application controls are meaningless without sound **General IT Controls (GITCs)**. GITCs cover (i) **change management** — authorisation and testing of program changes; (ii) **access security** — user IDs, password standards, restricted access to programs and data files; (iii) **IT operations** — job scheduling, backup, and disaster recovery; and (iv) **system acquisition, development and maintenance**.

| Layer | Scope | Failure mode |
|---|---|---|
| General IT Controls (GITCs) | Whole IT environment | All application controls weakened |
| Application controls | Input, processing, output | Single transaction cycle |

#### Limitations of Internal Control

Internal control provides **reasonable, not absolute**, assurance because of inherent limitations — human judgement can be faulty, controls can be circumvented by **collusion** between two or more people, **management override** of controls (especially at smaller entities where one person dominates), the **cost-benefit** trade-off, and the possibility that controls designed for a prior period become obsolete. Under ISA 315 the auditor must specifically evaluate the risk of **management override of controls** as a presumed risk in every audit.

#### Internal Audit vs External Audit

Internal audit is a **monitoring component** under COSO — it appraises activities and recommends improvements — whereas the external auditor issues an **independent opinion** on financial statements. Under **ISA 610 (Revised)**, the external auditor may use the work of internal audit only after assessing internal audit's **organisational status, objectivity, competence, and systematic approach**, and must apply additional procedures to that work.

#### Common Pitfalls and Edge Cases

1. **Casting internal audit = internal control** — internal audit is **one** monitoring activity inside the broader framework, not the framework itself.
2. **Treating detective controls as more reliable than preventive** — reliability depends on operating effectiveness, not classification. A well-designed, automated preventive control is usually stronger than a manual detective one.
3. **Forgetting segregation in small entities** — where staffing prevents full separation, **management supervision** and **compensating controls** (e.g., detailed review of all journal entries by the owner) substitute, but never fully remove the risk.
4. **Assuming an effective control environment lowers all components equally** — the environment *sets the tone* but does not by itself prevent or detect misstatement; component-level **control activities** still operate.
5. **Mistaking walk-throughs for tests of controls** — a walk-through confirms the auditor's **understanding** of a process (ISA 315); tests of controls confirm **operating effectiveness** (ISA 330).

#### Advanced Practice Prompts

1. *Nayaab Textiles* — cashier records receipts, posts the cash book, prepares the bank reconciliation, and authorises credit notes. Using ISA 315 and ISA 330, identify the **segregation** failure and recommend a redesign that preserves controls over cash completeness.
2. *BrightTeq Solutions* — the auditor notes that the IT manager approves, develops, and migrates all ERP changes, and that programmers log in using a shared generic account. Evaluate the **ITGC** deficiencies, the impact on **application control reliability**, and the implication for the audit risk model AR = IR × CR × DR.

---

## Continue your study

- **[View this topic in your ACCA/CA Pakistan roadmap](/roadmap/?exam=accagl&duration=1mo)** — see where "Internal Controls Systems" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=accagl&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ACCA/CA Pakistan exam overview](/exams/accagl/)** — pattern, eligibility, and syllabus
- **[All Auditing notes](/notes/accagl/audit/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
