---
exam: accagl
examName: ACCA/CA Pakistan
subject: financial-report
subjectName: "Financial Reporting"
topic: financ-003
topicName: "Statement of Financial Position (Balance Sheet)"
weight: 3
country: pakistan
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Statement of Financial Position (Balance Sheet)

### 🟢 Lite — Quick Review (1h–1d)
> The SOFP is a snapshot, not a film — point-in-time figures only, never "for the period."

The **Statement of Financial Position** reports what an entity *owns, owes, and has invested* at a single reporting date. It obeys the accounting equation, classifies items into current and non-current categories, and is governed by IAS 1 (with IFRS 18 taking over from 1 January 2027).

| Formula | Meaning | Unit / Dimension |
|---|---|---|
| A = L + E | Total assets equal liabilities plus equity | PKR / Rs. [Currency] |
| Working capital | Current Assets − Current Liabilities | PKR / Rs. [Currency] |
| Current ratio | Current Assets ÷ Current Liabilities | Ratio [dimensionless] |
| Quick ratio | (Current Assets − Inventory) ÷ Current Liabilities | Ratio [dimensionless] |
| Gearing | Total Liabilities ÷ Equity × 100% | Percentage [dimensionless] |

> 💡 **High-Yield Memory Hook:** "**A**ssets **L**ess **E**quity equals Liabilities" — write it as **A − E = L**. When trial balance totals look off, this is the first reconciliation to run.

- **Snapshot rule:** all SOFP balances are as at the last day of the reporting period; movement belongs in the statement of profit or loss or OCI.
- **IAS 1 §60:** entities may present in current/non-current order or in liquidity order; pick one and apply consistently.
- **No offsetting** unless a standard explicitly permits it (e.g. IAS 32 for financial instruments).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Classification errors lose more marks than arithmetic mistakes — examiners prey on weak current/non-current judgements.

#### Core structure and the accounting equation

Every line on the SOFP must reconcile to **A = L + E**. Total assets always equals the sum of total liabilities and total equity, even after consolidation adjustments for goodwill, non-controlling interest (NCI), and intra-group balances. Equity itself disaggregates into share capital, share premium, retained earnings, revaluation reserve (OCI), and other reserves specified by IAS 1.

#### Classification matrix — current vs non-current

| Item | Current | Non-current | Conditional / Edge |
|---|---|---|---|
| Trade receivables | Due ≤ 12 months | Due > 12 months | Long-term instalments split on a discounted basis |
| Inventory | Held for resale in normal operating cycle | — | Spare parts often classed as PPE, not inventory (IAS 16) |
| Bank overdraft | Repayable on demand | — | Net against cash only when a right of set-off exists (IAS 32) |
| Borrowings | Due within 12 months | Due after 12 months | Breaches of long-term covenants → reclassify as current (IAS 1 §74) |
| Deferred tax | Reverses within 12 months | Reverses after 12 months | Offset current deferred tax against current tax balance (IAS 1 §54) |
| Provisions | Expected outflow ≤ 12 months | Expected outflow > 12 months | Discount to present value if material (IAS 37) |
| Contingent liabilities | Do **not** recognise | Do **not** recognise | Disclose only unless probable + estimable (IAS 37) |

#### Preparation mechanics from a trial balance

1. List every ledger balance at the reporting date.
2. Apply adjustments: depreciation, accruals, prepayments, closing inventory, irrecoverable receivables.
3. Reclassify items into the IAS 1 layout — non-current first, then current within both asset and liability sides.
4. Compute retained earnings: opening RE + profit for the year − dividends declared ± prior-period adjustments.
5. Cross-check **Total Assets = Total Liabilities + Total Equity**; any imbalance signals a missing adjustment.

#### Group SOFP additions under IFRS 10

- **Goodwill** = consideration transferred + NCI at acquisition + fair value of previous interest − net identifiable assets acquired. Goodwill is an intangible asset, tested annually for impairment under IAS 36, never amortised.
- **NCI** sits inside equity, not as a liability, measured either at fair value or at the NCI's proportionate share of net assets.
- **Intra-group balances** (receivables vs payables, loans, unrealised profit on inventory) eliminate on consolidation.

#### Worked example — preparing a SOFP fragment

A trial balance at 31 December 2025 shows:

| Account | Rs. |
|---|---|
| Issued share capital (1,000,000 ordinary shares of Rs. 10) | 10,000,000 |
| Retained earnings (1 Jan 2025) | 4,500,000 |
| 10% loan note (redeemable 2029) | 6,000,000 |
| Trade payables | 2,800,000 |
| Bank overdraft | 750,000 |
| Inventory | 1,900,000 |
| Trade receivables | 3,100,000 |
| PPE (carrying amount) | 16,250,000 |

Additional information: profit for the year Rs. 1,200,000; dividend declared Rs. 400,000.

**Step 1 — Closing retained earnings:** 4,500,000 + 1,200,000 − 400,000 = **Rs. 5,300,000**.

**Step 2 — Equity total:** 10,000,000 + 5,300,000 = **Rs. 15,300,000**.

**Step 3 — Non-current liabilities:** loan note redeemable 2029 → **Rs. 6,000,000**.

**Step 4 — Current liabilities:** trade payables 2,800,000 + bank overdraft 750,000 = **Rs. 3,550,000**.

**Step 5 — Total liabilities + equity:** 15,300,000 + 6,000,000 + 3,550,000 = **Rs. 24,850,000**.

**Step 6 — Total assets must equal Rs. 24,850,000**, so non-current assets = 24,850,000 − 1,900,000 − 3,100,000 − 750,000 (cash) − 2,800,000 (already netted into trade payables, not assets) = **Rs. 16,250,000 PPE**, which ties to the trial balance. ✓

> ⚠️ **Examiner Trap:** Candidates routinely add the bank overdraft to cash when computing net cash. The overdraft is a **current liability** unless an IAS 32 right of set-off exists; netting it against a positive cash balance hides the working-capital position.

---

### 🔴 Extended — Deep Study (3mo+)
> IFRS 18 reshapes the SOFP surface from 2027 onwards, but the underlying equation is unchanged — drill the principles, not the headings.

#### Edge cases that surface in Part II / SBR

- **Revaluation of PPE under IAS 16:** the revaluation surplus goes to OCI and accumulates in a revaluation reserve within equity. It is not profit and is not distributable until realised through use or disposal.
- **Puttable instruments** (e.g. open-ended mutual funds) classified as equity under IAS 32 — present as a separate line, not as a liability.
- **Defined benefit pension schemes:** the net defined benefit liability (asset) is a non-current line; current service cost and interest go to profit or loss, while actuarial gains/losses go to OCI.
- **Investment property** at fair value under IAS 40: gains/losses hit profit or loss; under the cost model, depreciation applies as for PPE.
- **Lease liabilities** under IFRS 16 split into current and non-current portions, mirroring the rental payment schedule.

#### Advanced traps and exceptions

1. **Covenant breach reclassification:** if a long-term loan is breached at the reporting date and the lender can demand immediate repayment, the entire balance reclassifies as current, even if refinancing is completed after year-end (IAS 1 §74).
2. **NCI measured at fair value at acquisition** includes the NCI's share of goodwill, inflating goodwill on consolidation — many students forget this uplift.
3. **Deferred tax on revalued PPE** (IAS 12): recognise the liability on the temporary difference between carrying amount and tax base; the movement in OCI offsets the revaluation surplus in equity.
4. **Capitalisation of borrowing costs** (IAS 23) inflates non-current assets and reduces finance expense in profit or loss — easy to miss the SOFP knock-on.
5. **Provisions vs contingent liabilities:** probable + estimable → provision on the face; possible only or unable to estimate → disclose only. Treating a contingent as a provision overstates liabilities and understates equity.
6. **Functional vs presentation currency:** translation differences on a foreign subsidiary go to OCI as a translation reserve, never to profit or loss.

#### Two advanced practice prompts

- **Prompt A:** A group acquires 80% of a subsidiary for Rs. 25m. Net identifiable assets at acquisition are Rs. 22m (fair value). The NCI is measured at fair value. Calculate goodwill and the NCI line, then prepare the equity section showing both.
- **Prompt B:** An entity breaches a loan covenant on 28 December 2025; refinancing is agreed on 15 January 2026. Show the loan on the 31 December 2025 SOFP and justify the classification. Reference IAS 1 §74.

#### Exam strategy

ACCA FR tests the SOFP mainly through 10–15 mark preparation questions combined with ratio analysis; CA Pakistan CAF-5 emphasises single-entity layouts with deferred tax and revaluation adjustments. In both, classification decisions carry disproportionately high marks relative to arithmetic. Allocate roughly 60% of question time to reading the scenario for time-bounded items (≤ 12 months, operating cycle, demand-repayable) before touching a calculator.

---

## Continue your study

- **[View this topic in your ACCA/CA Pakistan roadmap](/roadmap/?exam=accagl&duration=1mo)** — see where "Statement of Financial Position (Balance Sheet)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=accagl&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ACCA/CA Pakistan exam overview](/exams/accagl/)** — pattern, eligibility, and syllabus
- **[All Financial Reporting notes](/notes/accagl/financial-report/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
