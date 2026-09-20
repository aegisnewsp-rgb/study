---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
lastUpdated: "2026-09-20"
topic: accoun-002
topicName: Accounting Equations
weight: 3
country: india
generated: "2026-03-25T17:00:00"
diagramPrompt: "Clean educational diagram showing the Accounting Equation Assets = Liabilities + Equity with visual breakdown of components, debit/credit rules, and transaction analysis — white background, exam-style illustration"

---

# Accounting Equations

### 🟢 Lite — Quick Review (1h–1d)
> Three minutes on the dual-aspect identity is enough to clear most 2-mark items in CS Executive Accounting.

**Assets always equal Liabilities plus Capital.** That is the entire foundation of double-entry bookkeeping. Every journal entry, ledger posting, and balance sheet in CS Executive Accounting eventually reduces to this identity, expressed in monetary units (₹).

- **A = L + C**, where A = total assets in ₹, L = total outside liabilities in ₹, C = owner's equity in ₹.
- Expanded form: **A = L + C + (Revenue − Expenses) − Drawings** (all values in ₹).
- Capital can be solved as **C = A − L**, which is how missing-figure questions are answered.
- Revenue ↑ Capital; Expenses ↓ Capital; Drawings ↓ Capital.

> 💡 **High-Yield Memory Hook:** "**A L C**" — read it aloud as **A = L + C** (Assets on the left, Liabilities + Capital on the right). For the expanded form, remember **RED** — **R**evenue **e**xpands capital, **D**rawings drain it. Pair it with "Every entry has **TWO** sides" so you never forget the dual-aspect rule.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Core Identity and Its Variants

The accounting equation is the algebraic statement of the **dual-aspect concept**: every transaction has two equal and opposite effects, so what the business *owns* must equal what it *owes* plus what its owners have *invested plus retained*.

| Form | Formula | Variable Definitions (SI: ₹) |
|---|---|---|
| Basic | A = L + C | A = Assets; L = Liabilities; C = Capital |
| Expanded | A = L + C + (R − E) − D | R = Revenue; E = Expenses; D = Drawings |
| Capital solved | C = A − L | Used when A and L are given |
| Closing Capital | C₂ = C₁ + NP − D + X | C₁ = Opening Capital; NP = Net Profit (R − E); D = Drawings; X = Additional Capital introduced |
| Net Profit | NP = R − E | Total revenue minus total expenses for the period |

#### Effect Rules on the Equation

- **Asset increase** → debit the asset; balance is maintained by either another asset decreasing, a liability increasing, or capital increasing.
- **Liability or Capital increase** → credit the liability/capital account.
- **Revenue** is an inflow that increases capital; **expenses** consume capital; **drawings** are owner withdrawals that reduce capital (not an expense).

#### Classification of Items

Transactions fall into four buckets that decide which side of the equation moves:

1. **Capital items** — long-term benefit, hit the balance sheet (e.g., machinery purchase).
2. **Revenue items** — matched to the current period, hit the income statement (e.g., sales, salaries).
3. **Deferred revenue** — received now, earned later → current liability until earned.
4. **Deferred expense** — paid now, consumed later → current asset until consumed.

#### 🎯 Exam-Level Worked Problem

A sole trader reports the following on 31 March:

- Cash in hand ₹ 40,000; Stock of goods ₹ 1,20,000; Debtors ₹ 80,000; Furniture ₹ 60,000.
- Creditors ₹ 70,000; Bank loan (short-term) ₹ 50,000; Outstanding salary ₹ 10,000.

Compute closing capital, then verify using the basic equation.

#### Step-by-step working:

1. Total Assets A = 40,000 + 1,20,000 + 80,000 + 60,000 = **₹ 3,00,000**.
2. Total Liabilities L = Creditors 70,000 + Bank loan 50,000 + Outstanding salary 10,000 = **₹ 1,30,000**.
3. Capital C = A − L = 3,00,000 − 1,30,000 = **₹ 1,70,000**.
4. Verification: A = L + C → 3,00,000 = 1,30,000 + 1,70,000. ✓
5. Convert to expanded form: A = L + C + (R − E) − D. With no revenue, expense, or drawings data, (R − E) − D = 0, so the equation still balances.

> ⚠️ **Examiner Trap:** Many candidates add **outstanding salary** to capital as an "income" item, or treat it as a separate asset. Outstanding salary is a **liability** until paid — including it on the wrong side changes capital by ₹ 10,000 and costs the full mark.

#### Common Pitfalls in CS Executive Papers

- Recording **drawings** on the assets side instead of deducting from capital.
- Crediting capital when goods are sold for cash (it should be revenue, not capital infusion).
- Forgetting that every transaction alters **at least two** accounts — the equation must always balance.

---

### 🔴 Extended — Deep Study (3mo+)

#### Edge Cases and Boundary Conditions

The equation behaves predictably for going-concern businesses, but three boundary cases deserve attention in CS Executive numerical sets:

- **Solvency check:** If A > L, capital is positive (solvent). If L > A, the business has negative equity — technically insolvent under the Companies Act, 2013 trigger for CIN strike-off.
- **Non-monetary contributions:** When capital is introduced in kind (e.g., machinery worth ₹ 5,00,000), the asset side rises by the fair value and capital rises by the same amount. Use **fair market value**, not the seller's claimed value, when computing C.
- **Hire-purchase and installment purchases:** The asset is recorded at the **cash price** (not the total installments). The difference is *interest suspense*, later split between the bank/HP creditor account and an interest expense. Including the full installment value inflates both A and L equally but distorts future depreciation.

#### Common Examiner-Style Traps

| Trap | Why It Fools Students | Correct Treatment |
|---|---|---|
| Goods taken for personal use (₹ 20,000) | Recorded as drawings only | Debit Drawings ₹ 20,000; Credit Purchases/Stock ₹ 20,000 |
| Depreciation ₹ 15,000 on furniture | Treated as cash outflow | Debit Depreciation Expense ₹ 15,000; Credit Furniture ₹ 15,000 — no cash movement |
| Prepaid insurance ₹ 5,000 at year-end | Shown as expense only | Reduce expense by 5,000 and show the prepaid portion as a current asset |
| Bad debts recovered ₹ 8,000 (written off last year) | Credited to debtor directly | Credit **Bad Debts Recovered** (income), debit Cash/Bank |

#### Connections to Adjacent Topics

- **Trial Balance** is the listing of all ledger balances; the equation guarantees that total debits equal total credits.
- **Balance Sheet** is the financial-statement snapshot of the equation at a reporting date.
- **Cash Flow Statement** starts with net profit (derived from revenue − expenses) and adjusts for non-cash items and working-capital changes — every line reconciles back to the equation.

#### Advanced Practice Prompts

1. A partnership firm has total assets of ₹ 12,00,000 and total external liabilities of ₹ 7,50,000. Partner A's capital is ₹ 2,00,000 and the remaining capital belongs to Partner B in the ratio 3:2. Compute B's capital and state how the equation is preserved if B withdraws ₹ 50,000 in cash for personal use.
2. During the year, the firm earned revenue ₹ 9,00,000, incurred expenses ₹ 6,50,000, and the owner introduced additional capital of ₹ 1,00,000. Opening capital was ₹ 3,00,000 with no drawings. Compute closing capital using the expanded equation and reconcile with the basic identity.

---

## Continue your study

- **[View this topic in your CS Executive roadmap](/roadmap/?exam=cs-exec&duration=1mo)** — see where "Accounting Equations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cs-exec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CS Executive exam overview](/exams/cs-exec/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/cs-exec/accounting/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
