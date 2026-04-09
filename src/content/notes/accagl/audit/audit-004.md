---
exam: accagl
examName: ACCA/CA Pakistan
subject: accounting
subjectName: Financial Accounting
topic: audit-004
topicName: Topic 4
weight: 3
country: accagl
generated: "2026-03-25T17:00:00"
---

# Audit Sampling & Testing

### 🟢 Lite — Quick Review (1h–1d)

**Audit Sampling & Testing — Key Facts**

- **ISA 530** — Audit sampling and related considerations
- **Audit Sampling:** Selecting less than 100% of items for examination to draw conclusions about the whole population
- **Statistical Sampling:** Random selection with probability theory applied; allows quantification of sampling risk
- **Non-Statistical Sampling:** Judgment-based selection; does not quantify sampling risk
- **Sampling Risk:** Risk auditor reaches wrong conclusion due to sample not being representative
- **Non-Sampling Risk:** Human error (wrong procedure, misinterpretation)
- **Two approaches:** Tests of Controls (efficiency) vs Substantive Procedures (direct testing)

**⚡ Exam Tip:** The key distinction — **statistical** = random + quantifiable sampling risk; **non-statistical** = judgmental + non-quantifiable risk. Both can produce equally valid conclusions.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Audit Sampling & Testing — Detailed Content**

**ISA 530 — Audit Sampling:**

**Definition:** Audit sampling means applying audit procedures to less than 100% of items within a population to form a conclusion about that population.

**Why Sample?**
- Impractical to test 100% of transactions (time/cost)
- 100% testing may still miss patterns
- Risk-based approach focuses effort on higher-risk areas

**Sampling Risk:**
The risk that the auditor's conclusion based on sample differs from the conclusion if the entire population were examined.

Two types:
- **Risk of incorrect acceptance (RIA):** Concluding item is not materially misstated when it actually is
- **Risk of incorrect rejection (RIR):** Concluding item IS materially misstated when it actually is not

**Non-Sampling Risk:**
- Applying wrong procedure
- Misinterpreting results
- Failure to recognize fraud indicators
- Human error in execution

**Methods of Sample Selection:**

| Method | Description | Use When |
|---|---|---|
| **Random Selection** | Every item has equal chance of selection | General testing |
| **Systematic Selection** | Select every nth item | Large populations |
| **Haphazard Selection** | Judgment-based, no pattern | Convenience sampling |
| **Stratified Selection** | Divide into subgroups, sample each | Heterogeneous populations |
| **Monetary Unit Sampling (MUS)** | Each monetary unit is a sampling unit | Testing overstatements |

**Statistical vs Non-Statistical:**

| Feature | Statistical | Non-Statistical |
|---|---|---|
| Random selection | Yes (required) | No (judgment) |
| Quantifies sampling risk | Yes | No |
| More efficient | Can be | Depends |
| Documentation burden | Higher | Lower |
| Suitable for tests of controls | Yes | Yes |

**Sample Size Determination:**

Factors affecting sample size:
- **Higher inherent/control risk** → Larger sample
- **Higher desired assurance** → Larger sample
- **More expected errors** → Larger sample
- **Smaller population** → May need larger proportion tested
- **Stratification** → Can reduce sample size while maintaining effectiveness

**⚡ Exam Tip:** Sample size is NOT just about number of items — it must be representative of the population. A sample of 100 from 10,000 transactions may be adequate; a sample of 100 from 200 may be insufficient.

---

### 🔴 Extended — Deep Study (3mo+)

**Comprehensive Audit Sampling & Testing Notes**

**Designing the Sample (ISA 530 steps):**

```
Step 1: Define the objective of the audit procedure
Step 2: Define the population (what are we sampling from?)
Step 3: Define the sampling unit (transaction? document? monetary unit?)
Step 4: Choose selection method (random, systematic, stratified, MUS)
Step 5: Determine sample size (risk + expected deviation rate)
Step 6: Select and examine sample
Step 7: Evaluate results and project to population
Step 8: Document conclusion
```

**Monetary Unit Sampling (MUS) — Worked Example:**

MUS treats each rupee/dollar as a separate sampling unit. Larger balances have higher chance of selection.

**Example:**
Population: Accounts Receivable = Rs. 10,000,000
Sample size: 50 items
Sampling interval: Rs. 10,000,000 / 50 = Rs. 200,000

Select every Rs. 200,000th rupee. This naturally selects larger balances more frequently.

**Advantage:** Efficient for detecting overstatements (focuses on larger amounts)
**Limitation:** Cannot easily test for understatements below the sampling interval

**Tests of Controls — Zero Errors Expected:**

When testing controls, the auditor expects ZERO deviations (control failures). Any deviation means the control is NOT operating as designed.

**Example:** Testing authorization controls — if 1 out of 50 invoices lacks approval, the auditor cannot rely on this control and must perform more substantive procedures.

**Tolerable Deviation Rate (TDR):**
The maximum rate of deviation from a prescribed control that the auditor is willing to accept without modifying planned reliance. Generally set at 3-7% depending on control reliance strategy.

**Substantive Procedures — Some Errors Expected:**

In substantive testing, some errors are expected (e.g., rounding errors, pricing mistakes). The auditor must evaluate whether detected errors are:
1. **Material** individually?
2. **Material** in aggregate?
3. **Systematic** (indicating a control failure)?

**Projecting Errors to Population:**

When sample contains errors, auditor must consider whether to:
- Accept sample results (error is clearly immaterial)
- Expand testing
- Request client adjustment
- Qualify audit opinion

**Common Exam Mistakes:**

| Mistake | Correction |
|---|---|
| "Larger sample = more reliable" | True but not always practical. Quality of selection matters more |
| "Statistical sampling eliminates risk" | Only quantifies sampling risk; doesn't eliminate it |
| "Ignoring stratification" | Heterogeneous populations must be stratified for valid results |
| "Confusing TDR with materiality" | TDR is about control reliability; materiality is about financial statement impact |

**Sampling in Practice — Formula Reference:**

```
Sample Size (Attribute Sampling) = 
    Reliability Factor / Tolerable Deviation Rate

Where reliability factor comes from statistical tables based on 
desired confidence level (typically 95% → factor = 3.0)
```

**Audit of Revenue Cycle — Typical Sampling Application:**

- Select sales invoices and: trace to dispatch notes, verify pricing, check authorization, confirm cut-off
- Select receivable confirmations and: verify existence, review subsequent cash receipts
- Select cash receipts and: verify banking, check posting to correct customer account

**⚡ High-Yield Summary:**

| Situation | Preferred Method |
|---|---|
| Testing controls | Attribute sampling (low expected error rate) |
| Testing for overstatement | Monetary unit sampling |
| Testing for understatement | Variable sampling |
| Large homogeneous population | Systematic selection |
| Diverse population | Stratified sampling |

**⚡ Exam Answer Framework:**

1. Identify the objective (test of control or substantive?)
2. Define population and sampling unit
3. Select appropriate method
4. Determine sample size (consider risk factors)
5. Evaluate results and project to population
6. Conclude and document

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
