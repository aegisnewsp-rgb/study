---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-005
topicName: Bank Reconciliation Statement
weight: 3
country: india
generated: "2026-03-25T17:00:00"
diagramPrompt: "Clean educational diagram showing the relationship between Cash Book balance and Pass Book (Bank Statement) balance, with arrows indicating items that cause differences — unpresented cheques, uncredited deposits, bank charges, direct debits, interest credited — white background, exam-style illustration"

lastUpdated: "2026-05-26"
---

# Bank Reconciliation Statement

### 🟢 Lite — Quick Review (1h–1d)

**Bank Reconciliation Statement (BRS)** is a statement reconciling the Cash Book (bank column) balance with the Pass Book/Bank Statement balance on a specific date. Disagreements arise solely from **timing differences** — the company records transactions immediately in the Cash Book, while the bank records them upon processing. A BRS identifies these unadjusted items and errors without altering any book.

**Two key balances to identify first:** A debit (favourable) balance in the Cash Book means the bank owes the company money. A credit balance or overdraft means the company owes the bank — treat overdraft opposite to a debit balance in reconciliation logic.

**Core Formula (favourable balance to reach Pass Book balance):**
> Balance as per Pass Book = Cash Book balance − Unpresented cheques + Uncredited cheques − Bank charges − Standing instructions/Direct payments − Interest charged by bank − Wrong debits by bank − Dishonoured cheques + Interest allowed by bank + Wrong credits by bank + Direct collections by bank

**High-yield CS Executive pointers:**
- Unpresented (outstanding) cheques reduce the Pass Book balance — deduct from Cash Book.
- Uncredited (in-transit) deposits increase the Pass Book balance — add to Cash Book.
- For overdraft: reverse debit/credit treatment throughout.
- In MCQs, always identify favourable balance vs. unfavourable balance before applying items.
- Errors in Cash Book and Pass Book are treated as specific debit/credit adjustments, not timing items.

---

### 🟡 Standard — Regular Study (2d–2mo)

## What Triggers a Disagreement?

The Cash Book and Pass Book should theoretically match, but they don't because:

1. **Timing gaps** — Company records immediately; bank acts later.
2. **Bank-initiated transactions** — Bank levies charges, makes standing payments, or credits collections without informing the firm promptly.
3. **Errors** — Mistakes in either book.

## Step-by-Step Process

**Step 1:** Ascertain the balance in both books. Ascertain whether it is a debit (favourable) or credit (overdraft) balance.

**Step 2:** Post the closing/correcting entries in the Cash Book itself (preferred accounting treatment) to arrive at the **Adjusted Cash Book Balance**. This method eliminates book errors before reconciliation.

**Adjusted Cash Book Formula:**
> Adjusted Cash Book = Balance as per Cash Book + Credit entries in Pass Book not in Cash Book − Debit entries in Pass Book not in Cash Book

**Step 3:** Compare the adjusted figures. The remaining differences should be timing items only.

## Timing Difference Items

| Item | Effect on Pass Book (vs Cash Book) |
|------|-------------------------------------|
| Unpresented cheques | Deduct (bank hasn't paid yet) |
| Uncredited cheques | Add (bank hasn't credited yet) |
| Bank charges | Deduct (bank debited, firm not recorded) |
| Standing instructions | Deduct (bank paid, firm not recorded) |
| Interest allowed by bank | Add (bank credited, firm not recorded) |
| Interest charged by bank | Deduct (bank debited, firm not recorded) |
| Wrong debit by bank | Deduct (bank error — wrongly reduced your account) |
| Wrong credit by bank | Add (bank error — wrongly increased your account) |
| Direct collections by bank | Add (bank credited for you, firm unaware) |
| Dishonoured cheques | Deduct (previously credited, now reversed) |

## CS Executive Exam Patterns

- **3-marks questions** frequently ask to prepare a BRS given Cash Book and Pass Book balances with 4–6 adjustment items.
- **Format matters:** Show a proper statement with "Balance as per Cash Book" or "Balance as per Pass Book" as the starting line, then items with proper signs (+/−), and a concluding balance.
- Assertion-reason questions test whether candidates confuse unpresented cheques with uncredited cheques — the directional treatment is diametrically opposite.
- For overdraft (credit balance): many candidates lose marks by applying favourable-balance logic. Watch the sign conventions.

## Common Trap

When a cheque is issued, Cash Book is reduced immediately. The Payee withdraws from bank at a later date. That delay means the **Pass Book lags Cash Book** for outstanding cheques — you must subtract them from Cash Book to reconcile to Pass Book. This is the most frequently reversed concept in exam answers.

---

### 🔴 Extended — Deep Study (3mo+)

## Adjusted vs. Unadjusted Method

There are two universally acceptable approaches:

**Method A — Adjusted Cash Book first (ICAIs preferred in CS syllabus):**
- First correct all Cash Book errors and record outstanding items in the Cash Book itself.
- This produces the **Adjusted Cash Book Balance** — the true book balance.
- Then reconcile this adjusted balance with the Pass Book. Only timing items remain.
- This method is superior in double-entry bookkeeping because the Cash Book is a part of double-entry system and should reflect all transactions.

**Method B — Direct Reconciliation (traditional):**
- Directly add/subtract items to one side without correcting the Cash Book.
- Start from either balance and arrive at the other.

CS Executive examiner preference: **Method A (Adjusted Cash Book).** When asked to "prepare a Bank Reconciliation Statement," candidates frequently make the error of starting from an unadjusted Cash Book and incorrectly treating book errors as timing items.

## Overdraft Reconcilliation Specifics

When Cash Book shows an overdraft (credit balance), the entire directional logic inverts:

| Item | Favourable Balance (Debit) | Overdraft (Credit) |
|------|---------------------------|-------------------|
| Unpresented cheques | Deduct from Cash Book | Add to Cash Book |
| Uncredited cheques | Add to Cash Book | Deduct from Cash Book |
| Bank charges | Deduct from Cash Book | Add to Cash Book |
| Interest allowed by bank | Add to Cash Book | Deduct from Cash Book |

The conceptual reason: an overdraft means the bank is the creditor. An item that reduces the overdraft (like bank charges) actually increases the company's liability — from Cash Book perspective it is added back to reach the Pass Book balance.

## Wrong Entries Treatment in Depth

| Error Type | Treatment | Reasoning |
|------------|-----------|-----------|
| Wrong debit by bank | Deduct | Bank wrongly reduced your balance |
| Wrong credit by bank | Add | Bank wrongly inflated your balance |
| Error in Cash Book — omitted entry | Add/Correct in Adjusted Cash Book | Not a timing difference |
| Error in Cash Book — wrong amount | Correct in Adjusted Cash Book | Rectification entry required |

## Link to Adjacent Topics

BRS directly connects to **Trial Balance** (ensuring bank column agrees), **Subsequent Events** (transactions after balance sheet date), and **Disclosure in Financial Statements** (bank balance in balance sheet uses the reconciled amount, not raw Cash Book amount). Understanding BRS also clarifies why **Bank Column of Cash Book ≠ Pass Book** at any point except after full reconciliation.

## Worked Micro-Example

*Cash Book shows debit balance ₹45,000. Pass Book shows ₹38,200. Unpresented cheques ₹8,000. Uncredited deposits ₹5,000. Bank charges not recorded in Cash Book ₹400.*

**Balance as per Pass Book:** ₹45,000 − ₹8,000 + ₹5,000 − ₹400 = **₹41,600** ← still doesn't match. Check for additional items — perhaps standing instruction of ₹3,400. Then: ₹41,600 − ₹3,400 = **₹38,200** ✓ matches Pass Book.

Notice that multiple items cascade — always list every item, no matter how small, to avoid final mismatches.

## Practice Prompts

1. Cash Book shows overdraft ₹12,500. Pass Book shows favourable balance ₹8,000. Prepare reconciliation showing all eight timing items (unpresented, uncredited, bank charges, standing instruction, interest allowed, interest charged, direct collection, dishonoured cheque) with correct signs.
2. Company recorded a cheque of ₹5,000 received from debtor in Cash Book but it was dishonoured by bank. Bank statement never credited this amount. Starting from adjusted Cash Book, explain with a BRS why no reconciliation item exists here but a rectification entry is needed in the books.

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
