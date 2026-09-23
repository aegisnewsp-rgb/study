---
exam: ca-found
examName: CA Foundation
subject: accounting
subjectName: "Accounting"
topic: accoun-002
topicName: Journal Entries
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Journal Entries

### 🟢 Lite — Quick Review (1h–1d)
> The dual debit-credit recording sits at the start of every CA Foundation accounting problem; skipping it derails the Trial Balance.

A **Journal Entry** is the chronological, dual-aspect record of one business transaction in the primary book of original entry, before it travels to the Ledger. Every entry needs five mandatory parts: date, two account names (one Debited, one Credited), the rupee amount, and a one-line **Narration** explaining the transaction. The underlying **Source Document** (invoice, receipt, debit/credit note) is the ICAI-mandated evidence under ASBE.

The whole topic rests on three classification rules:

| Account Type | Debit | Credit |
|---|---|---|
| Real (Assets, Cash, Stock, Building) | What comes in | What goes out |
| Personal (Persons, Firms, Companies, Capital) | The receiver | The giver |
| Nominal (Expenses, Losses, Incomes, Gains) | Expenses & losses | Incomes & gains |

> 💡 **High-Yield Memory Hook — "RIN": Real-Rule → "What comes in goes out"; Personal-Rule → "Receiver goes in the debit, Giver goes out in the credit"; Nominal-Rule → "Expenses/ Losses Debit, Incomes/ Gains Credit."** Memorise the first letters **DCR-E-LDC-I-GC** for the debit-credit polarity you write against each account class.

**Simple Entry** = one debit, one credit. **Compound Entry** = multiple debits or credits in one transaction, but Total Debits must equal Total Credits. **Opening**, **Closing**, **Adjusting**, **Rectification**, and **Contra** entries are the five special variants ICAI tests.

---

### 🟡 Standard — Regular Study (2d–2mo)
> A wrong debit-credit polarity at the journal stage cascades into a wrong Trial Balance, wrong P&L, and wrong Balance Sheet — fix it here, not at the audit.

#### The Recording Pipeline Under ASBE

Every transaction moves through a fixed six-step chain:

1. **Source Document** — invoice, receipt, voucher, debit note, credit note.
2. **Voucher preparation** — the document is converted into an accounting voucher with a serial number.
3. **Journal / Subsidiary Book** — entry recorded using the Golden Rules.
4. **Ledger Posting** — each account is updated separately from the journal.
5. **Trial Balance** — debits and credits totalled; mismatch implies a journal error.
6. **Financial Statements** — Trading, P&L, Balance Sheet.

#### Concept Comparison Matrix

| Concept | What it actually is | Recorded in books? | Common Confusion |
|---|---|---|---|
| Trade Discount | Reduction from list price at the time of quotation | No — net price only is recorded | Mistakenly debited/credited; inflates both Purchases and Sales |
| Cash Discount | Reduction allowed for prompt payment | Yes — recorded as Discount Allowed (Dr) or Discount Received (Cr) | Bookkeepers sometimes net it against the party |
| Credit Note | Issued when goods are returned by customer | Yes — reduces Sales; GST reversed | Confused with Debit Note direction |
| Debit Note | Issued when goods are returned to supplier | Yes — reduces Purchases; GST reversed | Sometimes routed to the wrong party |
| Capital Expenditure | Benefit > 1 accounting year, adds to asset | Yes — capitalised | Repairs wrongly booked as asset |
| Revenue Expenditure | Benefit ≤ 1 year, matched to current income | Yes — expensed in P&L | Asset purchase wrongly expensed |

#### GST Split — A Mandatory Disclosures Under ASBE 2025

A purchase of goods worth ₹10,000 + 18% IGST from a supplier is **not** written as one line. ICAI requires the GST component to be shown distinctly. The journal looks like:

| Account | Debit (₹) | Credit (₹) |
|---|---|---|
| Purchases A/c | 10,000 | |
| Input IGST A/c | 1,800 | |
| To Supplier A/c | | 11,800 |

For intra-state: split IGST into **CGST 9% + SGST 9%** and use **Input CGST / Input SGST**. Merging GST with Purchases or Sales is a recurring examiner penalty.

#### Worked Numeric for Practice

A trader purchased goods for ₹50,000 list price, took 10% trade discount, then a 2% cash discount on prompt payment via bank. The journal is:

| Account | Debit (₹) | Credit (₹) |
|---|---|---|
| Purchases A/c | 45,000 | |
| To Bank A/c | | 44,100 |
| To Discount Received A/c | | 900 |

Trade discount reduces the purchase value itself (₹50,000 × 90% = ₹45,000). Cash discount of ₹45,000 × 2% = ₹900 is recorded as Discount Received. Goods are assumed for illustration; GST treatment would add Input GST on the ₹45,000 base.

> ⚠️ **Examiner Trap:** Candidates routinely record trade discount in the journal (₹5,000 Dr Discount Allowed, ₹45,000 Cr Supplier) — this inflates the Purchases side and inflates a fictitious "discount income." Trade discount never enters the books; only the net price does.

---

### 🔴 Extended — Deep Study (3mo+)
> Most marks lost here are not on the easy entry — they are on adjusting entries, rectification mechanics, and the GST split direction.

#### Edge-Case Inventory for the Final Pass

| Trap | What Goes Wrong | Correct Treatment |
|---|---|---|
| Opening Entry at new financial year | Trial Balance balances carried forward as one combined entry, not individual postings | Debit all assets & expenses, Credit all liabilities, income & capital; difference is adjusted to Capital A/c |
| Adjusting Entry date confusion | Accrued interest as on 31-03 booked on 01-04 of next year | Adjusting entry belongs in the **current year's** books to match revenues/expenses to the period |
| Rectification before vs after trial balance | Wrong account debited and supplier credited differently | Before TB: rectification entry by reversing; After TB: use Suspense A/c and rectify in next period |
| Contra Entry misclassification | Cash deposited into bank recorded through Purchases | Contra entries affect only Cash & Bank; route through Cash Book, not the Journal |
| Capital vs Revenue in repairs | Major overhaul of machinery debited to Repairs | If benefit extends beyond one year, capitalise; else expense |
| GST on advance payment | Tax paid on advance before supply | Record under Input GST (CGST/SGST/IGST) at advance stage, adjust on invoice |

#### Adjacent Topic Bridges

- **Ledger Posting** — every debit/credit in the journal becomes two ledger postings (one per affected account). A wrong ledger side undoes a correct journal.
- **Trial Balance** — mechanical mismatch = the journal entry is asymmetric; the first place to look.
- **Depreciation** — adjusting entry type; debits the asset account or accumulated depreciation, credits Depreciation A/c, then closes to P&L.
- **Bank Reconciliation** — contra entries between Cash and Bank columns are the foundation; unreconciled entries surface as Suspense items.
- **Rectification of Errors** — uses a special sub-class of journal entries that involve Suspense A/c once the trial balance has been tallied.

#### Two Advanced Prompts to Practise Tonight

1. **Compound Entry with GST + Return:** A business in Maharashtra purchases goods worth ₹2,00,000 list, 10% trade discount, 18% CGST + 18% SGST (intrastate), returns 20% of net goods two days later, and pays the balance by cheque within the cash-discount window of 1%. Pass the complete journal sequence — purchase, return, payment — and reconcile that no trade discount appears in any ledger.
2. **Adjusting + Rectification Combo:** Rent of ₹6,000 was paid on 01-10-2024 and wrongly debited to the Rent Received A/c. On 31-03-2025, the rent pertains to the period 01-04-2025 to 30-09-2025. Record the rectification with the year-end adjustment and confirm the pre-paid portion appears as an asset.

> ⚠️ **Senior Trap:** ICAI examiners in the November 2024 RTP inserted a Suspense A/c in the adjusted trial balance, expecting students to first identify the rectification entry, then re-post the adjusting portion. Candidates who wrote a single combined entry lost half the marks. Always split rectification and adjustment into two separate journals.

## Continue your study

- **[View this topic in your CA Foundation roadmap](/roadmap/?exam=ca-found&duration=1mo)** — see where "Journal Entries" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ca-found&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CA Foundation exam overview](/exams/ca-found/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/ca-found/accounting/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
