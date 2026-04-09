---
exam: accagl
examName: ACCA/CA Pakistan
subject: accounting
subjectName: Financial Accounting
topic: financ-006
topicName: "Revenue Recognition & Contracts with Customers"
weight: 3
country: accagl
generated: "2026-03-25T17:00:00"
---

# Topic 6: Revenue Recognition & Contracts with Customers

### 🟢 Lite — Quick Review (1h–1d)

**IFRS 15 — Revenue from Contracts with Customers**

The 5-Step Revenue Recognition Model:

1. **Identify the contract** with customer (commercial substance, collectability probable, rights and payment terms identified)
2. **Identify performance obligations** (distinct goods/services — each promise to transfer is separate)
3. **Determine the transaction price** (amount expected to receive, variable consideration if applicable)
4. **Allocate the transaction price** to performance obligations (standalone selling prices)
5. **Recognise revenue** when (or as) each performance obligation is satisfied (point in time vs over time)

**Key Terms:**
- **Contract Asset** = Entity has performed but not yet billed (not unconditional right to consideration)
- **Contract liability** = Customer paid in advance, entity owes delivery of goods/services
- **Trade receivable** = Unconditional right to consideration (billed or unbilled)

⚡ **Exam tip:** If entity has a RIGHT to consideration only upon satisfying another performance obligation, it's a CONTRACT ASSET, not receivable. Once billed, it becomes a trade receivable.

---

### 🟡 Standard — Regular Study (2d–2mo)

**IFRS 15 — Revenue from Contracts with Customers**

**Step 1 — Identify the Contract:**

A contract exists when ALL of the following are met (IFRS 15.9):
- Parties have approved the contract
- Performance obligations are identifiable
- Payment terms are identifiable
- Contract has commercial substance
- Collection of consideration is probable

**Contract Modifications (IFRS 15.18-21):**

When contracts are modified:
- *New distinct goods/services at standalone selling price:* Add new OB at its SSP, treat as separate contract
- *Modification NOT at standalone selling price:* Treat as termination + new contract (cumulative catch-up)
- *Modification of price only:* Revise variable consideration

**Step 2 — Identify Performance Obligations:**

A good/service is DISTINCT when:
1. Customer can benefit from it on its own or with other resources
2. Entity's promise to transfer is separately identifiable from other promises

*Examples:*
- Software licence + updates → NOT distinct (highly interdependent)
- Software + implementation services → may be distinct if implementation doesn't significantly modify software
- Goods with significant customisation → NOT distinct

**Step 3 — Determine Transaction Price:**

Transaction price = amount expected to receive (excluding amounts collected on behalf of third parties).

**Variable Consideration (IFRS 15.50-58):**
- Includes: discounts, rebates, refunds, credits, penalties, incentives, performance bonuses, royalties
- *Probability method:* Include in TP if probable that significant revenue reversal won't occur when uncertainty resolves
- *Expected value method:* Sum of probability-weighted amounts (appropriate for large number of outcomes)
- *Most likely amount method:* Single most likely outcome (appropriate for binary outcomes)
- Constraint: Highly variable amounts excluded unless carnival estimate is appropriate

**Significant Financing Component (IFRS 15.60-65):**

If contract has significant financing element, transaction price is adjusted for time value of money. The difference between cash price and financed price is interest revenue/expense over period.

*Practical expedient:* No adjustment if payment is due within 12 months of goods/services transferred.

**Step 5 — Recognition Over Time vs Point in Time:**

*Over Time — if ANY of:*
- Customer simultaneously receives/consumes benefits as entity performs
- Entity's performance creates/enhances asset customer controls
- Asset has no alternative use AND entity has enforceable right to payment for performance to date

*Point in Time — otherwise:*
- Indicators of transfer: entity has present right to payment, asset has been accepted, customer has legal title, risk and rewards transferred

⚡ **Exam tip:** The "no alternative use" test is common in exam questions — if entity can redirect the asset to another customer, it does NOT qualify for over-time recognition.

---

### 🔴 Extended — Deep Study (3mo+)

**Comprehensive IFRS 15 Analysis**

**Contract Costs — IFRS 15.91-128:**

Entities recognise incremental costs of obtaining a contract (e.g., sales commissions) as an asset if expected to be recovered. These are amortised consistently with the transfer of goods/services. Costs to fulfill a contract are capitalised if:
- Directly related to a contract
- Generate/enhance resources that will satisfy future OBs
- Expected to be recovered

**Specific Industry Applications:**

*Construction Contracts — Percentage of Completion (IFRS 15.B15-B19):*

When progress can be measured reliably:
- Input method: Costs incurred ÷ Total expected costs
- Output method: Surveys of work performed, milestones, units delivered

*Multiple Element Arrangements:*

Allocate transaction price to multiple OBs based on standalone selling prices (SSP). Methods for determining SSP:
- Adjusted market assessment approach
- Expected cost plus margin approach
- Residual approach (only if one OB has highly variable SSP)

*Warranties (IFRS 15.B28-B30):*

- Assurance-type warranty (assurance product works as agreed) → accounted for under IAS 37
- Service-type warranty (covers additional service beyond basic assurance) → separate OB, revenue deferred

**Contract Balances — Detailed Treatment:**

| Item | Definition | Accounting |
|---|---|---|
| **Contract Asset** | Conditional right to consideration for performance completed | Recognised when performance completed; reclassified to receivable when right becomes unconditional |
| **Contract liability** | Obligation to transfer goods/services | Recognised when consideration received; reclassified to revenue when performance obligation satisfied |
| **Trade receivable** | Unconditional right to consideration | Recognised when right becomes unconditional (billed or not) |

**Practical Application — Software Industry:**

*Software + Maintenance/Updates:*
- Licence is distinct if not highly interdependent with updates
- Licence revenue recognised at point in time when transferred (when delivered)
- Maintenance/updates revenue recognised over time (over contract period)

*Right of Return (IFRS 15.B20-B21):*
- Variable consideration — expected value method
- Refund liability = expected returns × selling price
- Right of return asset = cost of inventory expected to be returned (not full selling price)

**Loss-Making Contracts — IFRS 15.49:**

If fulfilment costs exceed economic benefits expected, recognise provision for onerous contract immediately (IAS 37).

**Key Judgments Under IFRS 15:**

1. **Identifying contracts** — when is it probable that entity will collect?
2. **Identifying OBs** — is the good/service distinct?
3. **Variable consideration** — which method (probability vs most likely amount)?
4. **Existence of significant financing component**
5. **Over-time vs point-in-time recognition**

**Worked Example — Contract Asset vs Receivable:**

*Advantech Ltd signs a 3-year software contract with customer on 1 Jan 20X3. Customer pays Rs.100,000 annually in advance. Advantech delivers software on 1 Feb 20X3 (licence key).*

```
Year 1:
  Cash received (advance)           100,000
  Contract liability at Year 1 end    100,000 (unearned revenue)

Year 2 (no new contract):
  Cash received (advance)            100,000
  Revenue recognised (over time?)     33,333 (1/3 of Year 1+2 services)
  Contract liability at Year 2 end    66,667
```

Now consider: If Advantech delivers customisation over 12 months and bills Rs.500,000, with Rs.400,000 received to date, but right to final Rs.100,000 only after UAT sign-off:

```
Contract asset (unbilled)            100,000
Trade receivable (billed)           400,000
Revenue recognised                   500,000
```

**Common Exam Mistakes:**

- Treating all warranties as separate OBs (assurance-type are NOT separate OBs)
- Misidentifying contract assets as receivables — the conditionality distinction is crucial
- Forgetting to constrain variable consideration — including highly uncertain amounts inflates revenue
- Not applying the cumulative catch-up for contract modifications (retrospective treatment)
- Confusing incremental costs of obtaining a contract with general selling costs
- Overlooking the significant financing component when long payment terms exist

**Practice Tips:**
- In exam, always ask: "What has the entity promised? When is it delivered? Is the right unconditional?"
- For construction contracts, master the input method (costs ÷ total costs) and understand why output method is harder to apply
- Practice identifying distinct performance obligations — this is the most frequently tested area in IFRS 15 questions

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
