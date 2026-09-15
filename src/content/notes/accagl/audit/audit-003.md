---
exam: accagl
examName: ACCA/CA Pakistan
subject: audit
subjectName: "Auditing"
topic: audit-003
topicName: "Risk Assessment & Audit Evidence"
weight: 3
country: pakistan
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
---

# Risk Assessment & Audit Evidence

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Risk assessment** is the process of identifying and evaluating the **risks of material misstatement (RMM)** in the financial statements, while **audit evidence** is the information the auditor uses to support the audit opinion under ISA 500. Together they form the backbone of every risk-based audit performed under International Standards on Auditing (ISAs).

- **Audit Risk Model:** AR = IR × CR × DR (all components dimensionless, 0–1). Detection risk is derived as DR = AAR ÷ (IR × CR).
- **Materiality ladder:** Overall Materiality (OM) → Performance Materiality (PM = OM × 50%–75%) → Clearly Trivial Threshold (CTT = OM × 3%–5%).
- **Reliability hierarchy:** external > internal evidence; original documents > photocopies; documentary > oral evidence.
- **Mandatory rebuttal:** revenue recognition is presumed a fraud risk under ISA 240 unless the auditor rebuts the presumption.

> 💡 **High-Yield Memory Hook:** **"I Can't Detect"** — **I**nherent risk × **C**ontrol risk = **Detect**ion risk target. Higher IR/CR pushes DR down, forcing more evidence.

| Term | Meaning | When assessed |
|---|---|---|
| Inherent risk (IR) | Susceptibility to misstatement before controls | Before testing controls |
| Control risk (CR) | Risk controls will not prevent/detect misstatement | After understanding controls |
| Detection risk (DR) | Risk auditor's procedures miss a misstatement | Set by auditor, drives procedures |
| RMM | Combined IR × CR at assertion level | Drives ISA 330 responses |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Risk Assessment Under ISA 315 (Revised)
ISA 315 (Revised) requires the auditor to obtain an understanding of the entity, its environment, the applicable financial reporting framework, and the entity's internal control — including its IT environment. Risks are identified and assessed at two levels: the **financial-statement level** (risks that affect the statements broadly, e.g., going concern) and the **assertion level** (existence, completeness, accuracy, valuation, cut-off, classification, presentation). Where the auditor determines a risk is a **significant risk**, ISA 315 requires specific procedures outside the normal cycle testing, such as testing controls that address the risk directly.

#### Responding Under ISA 330
ISA 330 links assessed RMM to the nature, timing, and extent of further audit procedures. Responses include **tests of controls** when the auditor expects them to operate effectively, and **substantive procedures** (analytical procedures + test of details) for all material classes of transactions and balances. Significant risks generally require procedures that are **not solely analytical** and that are performed closer to year-end.

#### Audit Evidence Under ISA 500
ISA 500 requires evidence to be **sufficient** (quantity) and **appropriate** (quality). Appropriateness breaks down into **relevance** (ties to the assertion) and **reliability** (source and nature of the evidence). Reliability is highest for evidence obtained directly by the auditor from external sources, in documentary form, and in original paper or electronic format.

#### Concept Comparison Matrix

| Concept | Sufficiency | Appropriateness (Relevance) | Appropriateness (Reliability) |
|---|---|---|---|
| Definition | Measure of quantity of evidence | Logical connection to assertion tested | Trustworthiness of the source/nature |
| Affected by | RMM level (higher RMM = more) | Audit objective | Source (external > internal), form (documentary > oral), original vs copy |
| Exam trap | Confusing with reliability | Treating relevance as a quality factor of the source | Treating reliability as a relevance factor |
| Example | Larger sample for higher IR | Stock count proves existence, not valuation | Bank confirmation > management representation |

#### Key Steps in Designing Further Procedures
1. Determine the assessed RMM at the assertion level.
2. Select the assertion(s) most likely to be misstated.
3. Choose the type of evidence — external confirmation, inspection, recomputation, observation, inquiry, or analytical procedure.
4. Decide between test of controls and substantive approach (or combined).
5. Apply materiality and sampling (ISA 530) to set sample size and selection method.

#### 🎯 Exam-Level Worked Problem
**Question:** An entity has a profit before tax of PKR 500 million. The auditor sets overall materiality at 1.5% of PBT, performance materiality at 65% of overall materiality, and a clearly trivial threshold at 4% of overall materiality. Compute (a) overall materiality, (b) performance materiality, and (c) the clearly trivial threshold. The auditor identifies a control environment weakness in revenue authorisation and assesses IR = 0.8 and CR = 0.7 at acceptable audit risk AAR = 0.05. Compute (d) detection risk. Explain (e) one ISA-mandated rebuttal consideration relating to the revenue fraud risk.

#### Solution:
(a) OM = 500m × 1.5% = **PKR 7.5 million**.
(b) PM = 7.5m × 65% = **PKR 4.875 million**.
(c) CTT = 7.5m × 4% = **PKR 300,000**.
(d) DR = AAR ÷ (IR × CR) = 0.05 ÷ (0.8 × 0.7) = 0.05 ÷ 0.56 = **0.0893** (≈ 8.93%).
(e) Under ISA 240, revenue recognition is presumed to be a fraud risk; the auditor must either perform procedures as if it is a significant risk or document the rationale and supporting evidence used to rebut the presumption (e.g., simple revenue model, no incentive for management to misstate, strong controls over revenue completeness).

> ⚠️ **Examiner Trap:** Candidates often compute DR as IR × CR, forgetting that AAR is the **target** audit risk the auditor accepts (commonly 0.05 for listed entities and 0.01 for very low-risk scenarios). Detection risk is set **backwards** from AAR — it is the only component the auditor fully controls.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Going Concern (ISA 570 Revised) and Its Interaction
ISA 570 (Revised) requires the auditor to evaluate management's assessment of the entity's ability to continue as a going concern for a period of **at least 12 months from the date of the financial statements**, not 12 months from the audit report date. Events include negative trends (operating cash outflows, default on loans), indicators of financial difficulty (non-compliance with capital requirements), and other mitigating factors. Where material uncertainty exists, the auditor considers whether the financial statements adequately disclose the uncertainty under ISA 701.

#### Sampling Edge Cases (ISA 530)
- **Statistical vs non-statistical:** both are acceptable, but statistical sampling allows the auditor to measure sampling risk quantitatively.
- **Monetary unit sampling (MUS):** efficient for overstatements; the reliability factor (3.00 at 90%, 4.61 at 95% confidence) drives sample size when expected misstatements are zero.
- **Attribute sampling:** used for tests of controls; sample size n = ln(1 − Confidence) ÷ ln(1 − Expected Deviation Rate).
- **Projection of misstatements:** identified misstatements are projected to the population and added to the cumulative misstatement file, compared against PM and OM.

#### Advanced Traps and Exceptions

1. **Rebuttable presumption of revenue fraud risk (ISA 240)** — rebuttal requires documented rationale, not silence. ICAP examiners frequently award 2–3 marks here.
2. **Performance materiality allocation** — for large populations, the auditor may allocate PM to specific account balances using qualitative judgement, not a uniform percentage.
3. **External confirmations (ISA 505)** — non-replies do not, by themselves, constitute sufficient appropriate evidence; alternative procedures are required.
4. **Service organisations (ISA 402)** — when the entity uses a third-party processor, a Type II report is preferred over Type I for evidence of operating effectiveness.
5. **Going-concern period misalignment** — students frequently cite 12 months from the audit report; ISA 570 anchors it to the date of the financial statements.
6. **Group audits (ISA 600)** — component materiality is set lower than group materiality, but the work performed on components must address group-level significant risks.
7. **Small entity considerations** — ICAP/ACCA syllabi accept that some ISAs are not proportionate; auditors still apply ISA 315 concepts using a "less complex entity" framework.

#### Worked Micro-Example (Sampling)
A population of 5,000 sales invoices totalling PKR 250 million is to be tested using MUS at 95% confidence with expected zero misstatement. The reliability factor at 95% is 4.61, and tolerable misstatement is set at PM = PKR 4.875 million.
Sample size n ≈ 4.61 × 250m ÷ 4.875m ≈ **236 items**. If one misstatement of PKR 250,000 is found, the projected misstatement using MUS ratio = 250,000 × (250m ÷ sum of selected book values) is added to the cumulative misstatement file and compared to PM.

> 💡 **High-Yield Revision Hook:** **"315 identifies, 330 responds, 500 evidences, 570 continues, 530 samples."** Map every exam scenario clause to the ISA — markers reward ISA-specific references, not generic "the auditor should perform further procedures" lines.

#### Common Documentation Failures (ISA 230)
Working papers must evidence (i) the assessed RMM and rationale, (ii) the linkage between procedures performed and the assessed risks, (iii) the conclusions reached, and (iv) the source and nature of evidence obtained. Circular drafting — restating the procedure as the conclusion without supporting evidence — earns zero marks.

#### Exam Strategy (3% Direct Weight, Foundational Indirectly)
This topic contributes roughly 3%–5% directly across ACCA AA, ICAP CAF-5 / CFAP Auditing, ICAEW AA, and CA Intermediate/Final papers, but its concepts underpin nearly every later substantive-testing, completion, and reporting question. Marks typically fall as: ISA 315 process (2–3), audit risk model (3–5), sufficiency vs appropriateness (4–6), fraud risk scenario (5–8), materiality calculations (3–5). Target 6–8 minutes per scenario part, and always close with an ISA reference.

---

## Continue your study

- **[View this topic in your ACCA/CA Pakistan roadmap](/roadmap/?exam=accagl&duration=1mo)** — see where "Risk Assessment & Audit Evidence" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=accagl&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ACCA/CA Pakistan exam overview](/exams/accagl/)** — pattern, eligibility, and syllabus
- **[All Auditing notes](/notes/accagl/audit/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
