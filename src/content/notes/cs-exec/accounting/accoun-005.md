---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-005
topicName: Bank Reconciliation Statement
weight: 3
country: cs
generated: "2026-03-25T17:00:00"
diagramPrompt: "Clean educational diagram showing the relationship between Cash Book balance and Pass Book (Bank Statement) balance, with arrows indicating items that cause differences — unpresented cheques, uncredited deposits, bank charges, direct debits, interest credited — white background, exam-style illustration"
---

# Bank Reconciliation Statement

The **Bank Reconciliation Statement (BRS)** is a statement prepared to explain and reconcile the difference between the balance shown in the **Cash Book** (the business's own record of bank transactions) and the balance shown in the **Pass Book** or **Bank Statement** (the bank's record of the customer's account). In an ideal world where no timing differences existed, these two balances would always match — but in practice, dozens of transactions cause temporary differences between the two books, and the Bank Reconciliation Statement is the tool that systematically explains these differences and verifies that both records are correct when properly adjusted.

The term "Pass Book" is used interchangeably with "Bank Statement" — it is the statement issued by the bank periodically (usually monthly) showing all transactions in the customer's bank account. The Cash Book, on the other hand, is the business's own record maintained by the bookkeeper. Discrepancies arise because some transactions are recorded by one party but not the other at the same time — this creates timing differences that need to be reconciled.

For the CS Executive examination, Bank Reconciliation is a regular feature in the accounting paper. It tests your understanding of cash book mechanics, your ability to identify timing differences, and your skill in applying the correct treatment for each type of discrepancy. Questions typically ask you to prepare the Bank Reconciliation Statement starting from either the Cash Book balance or the Pass Book balance and arriving at the other balance after accounting for all timing differences.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Why Do Two Balances Differ? (Reasons for Difference):**

| Reason | Cash Book Effect | Pass Book Effect |
|---|---|---|
| Cheques issued but not yet presented (Unpresented Cheques) | Already recorded → Cr. Bank | Not yet recorded → Lower balance |
| Cheques deposited but not yet credited (Uncredited Cheques / Uncollected Cheques) | Already recorded → Dr. Bank | Not yet recorded → Lower balance |
| Bank charges debited by bank | Not recorded → Higher balance | Already recorded → Lower balance |
| Interest credited by bank | Not recorded → Lower balance | Already recorded → Higher balance |
| Direct payments by bank (EMI, insurance, SIP) | Not recorded → Higher balance | Already recorded → Lower balance |
| Dishonour of cheque deposited | Not yet recorded → Higher balance | Already recorded → Lower balance |
| Errors in Cash Book (wrong amount, wrong side) | Wrong balance | Correct balance |
| Errors in Pass Book (bank's mistake) | Correct balance | Wrong balance |

**Key Formula for BRS:**

```
Balance as per Cash Book
+ Items to be Added (credits in Pass Book not in Cash Book)
– Items to be Deducted (debits in Pass Book not in Cash Book)
= Balance as per Pass Book

OR (starting from Pass Book):

Balance as per Pass Book
+ Unpresented cheques
– Uncredited cheques
+ Errors in Cash Book (if any)
– Errors in Pass Book (if any)
= Balance as per Cash Book
```

**Quick Decision Rule:**

| Transaction | Cash Book has not recorded it | Pass Book has not recorded it |
|---|---|---|
| Cheque issued but not presented | Cash Book already shows lower balance → ADD to Cash Book | Pass Book shows it → Subtract from Pass Book |
| Cheque deposited but not credited | Cash Book already shows higher balance → Subtract from Cash Book | Pass Book doesn't show it → Add to Pass Book |
| Bank charges/debit | Cash Book higher → Subtract | Pass Book already lower → Add |
| Interest credited | Cash Book lower → Add | Pass Book already higher → Subtract |

> **⚡ Exam Tip:** The most common approach in CS Executive questions is to start from the Cash Book balance and adjust for items that explain the difference with the Pass Book. Work systematically: check which records the transaction and then apply the rule.

> **⚡ Exam Tip:** Always check whether the Cash Book balance is a **Debit balance (Dr.)** or a **Credit balance (Cr./Overdraft)**. The treatment of some items (especially bank charges and interest) depends on the direction of the balance. If it's an overdraft, reverse the logic.

> **Common Mistake:** Students often forget that when a cheque is issued, the Cash Book is ALREADY credited (bank balance reduced). When it is subsequently presented to the bank, the Pass Book records it — but the Cash Book doesn't change again. So the difference is that the Cash Book is LOWER by the amount of unpresented cheques — and to reach the Pass Book balance (which is even lower), we need to subtract unpresented cheques from the Cash Book balance? Wait — let's think again carefully.

> **Correct Logic:** Cash Book shows Dr. balance of ₹10,000. Cheque issued for ₹2,000 but not presented — the business has already reduced its Cash Book to ₹10,000 (including the credit for the cheque). But the bank hasn't processed it yet, so Pass Book shows the balance before this reduction. So Pass Book shows ₹12,000 (higher). To reconcile: Add unpresented cheques to Cash Book balance (or subtract from Pass Book balance).

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

#### 1. Meaning and Need for Bank Reconciliation Statement

**Definition:**
A Bank Reconciliation Statement is a statement prepared by a business to reconcile (explain) the difference between the bank balance shown in its Cash Book and the bank balance shown in the Pass Book (Bank Statement) as on a specific date.

**Why is Bank Reconciliation Needed?**

1. **Verification of Accuracy:** It helps verify that the bank's records and the business's records are both accurate, each in their own context.

2. **Detection of Errors:** It helps identify errors in either the Cash Book or the Pass Book — whether made by the business or by the bank.

3. **Detection of Fraud:** Regular reconciliation helps identify unauthorised transactions, fraudulent withdrawals, or cheque frauds that may have gone unnoticed.

4. **Updated Financial Information:** It ensures that the business's record of its bank balance is current and reliable for financial reporting.

5. **Compliance:** Schedules to company financial statements require confirmed bank balances — a reconciled bank balance provides that confirmation.

6. **Internal Control:** Regular reconciliation is a key internal control procedure that prevents errors from accumulating undetected.

**Why Do Differences Occur?**

Differences arise due to **time gaps** between when a transaction is recorded in the Cash Book and when it appears in the Pass Book. Since the business and the bank maintain independent records, the timing of recording can differ significantly.

The main categories of timing differences are:

**Category 1: Transactions recorded in Cash Book but not yet in Pass Book**
- Cheques issued by the business but not yet presented for payment (unpresented cheques / outstanding cheques)
- Cheques deposited into the bank but not yet collected / credited (uncredited cheques / deposits in transit)
- Direct debits initiated by the business (e.g., standing instructions to pay rent, insurance premiums) that have been entered in Cash Book but bank hasn't processed yet

**Category 2: Transactions recorded in Pass Book but not yet in Cash Book**
- Bank charges debited directly by the bank
- Interest credited by the bank (on current account deposits)
- Direct credits received from customers directly into the bank account
- Dividends, refunds, or receipts directly credited by third parties
- Bank errors (e.g., bank debits wrong customer's account)

**Category 3: Errors in either book**
- Errors in the Cash Book (amount recorded wrongly or recorded on wrong side)
- Errors in the Pass Book (bank's clerical errors)

#### 2. Specimen Format of Bank Reconciliation Statement

**Format 1: Starting from Cash Book Balance (Dr.)**

```
Bank Reconciliation Statement as on 31st March 2025

                                                        Add (₹)      Less (₹)
Balance as per Cash Book (Debit)                      18,500
Add: Cheques deposited but not yet credited
    by bank (uncredited cheques)                       3,000
Add: Bank charges not recorded in Cash Book             100
Add: Direct payments by bank (insurance, EMI)          2,500
Add: Cheque deposited dishonoured                        —
                                                    ───────    ────────
                                                    24,100       —
Less: Cheques issued but not yet presented
    for payment (unpresented cheques)                              1,200
Less: Interest credited by bank not in Cash Book                   800
Less: Direct credits by customers not in Cash Book                  —
                                                    ───────    ────────
                                                    24,100     2,000
Balance as per Pass Book (Credit Balance)            22,100
                                                    ======     =====
```

**Format 2: Starting from Pass Book Balance (Cr.)**

```
Bank Reconciliation Statement as on 31st March 2025

                                                        Add (₹)      Less (₹)
Balance as per Pass Book (Credit Balance)             22,100
Add: Unpresented cheques                               1,200
Add: Direct credits by customers not in Cash Book        —
                                                    ───────
                                                    23,300
Less: Uncredited cheques                              3,000
Less: Bank charges                                      100
Less: Direct payments by bank                         2,500
Less: Interest credited                                  800
                                                    ───────    ───────
Balance as per Cash Book (Debit Balance)             17,700     6,400
                                                    ======     =====
```

**Format 3: Adjusted Cash Book Method**

First adjust the Cash Book for items that should be recorded (bank charges, interest, direct debits not entered), then compare the adjusted balance with the Pass Book. This is the more professional method used in practice.

#### 3. Procedure for Preparing Bank Reconciliation Statement

**Step 1: Obtain Both Balances**
- Get the balance as per Cash Book (from the Bank column of the Cash Book — can be Debit or Credit)
- Get the balance as per Pass Book (from the Bank Statement)
- Note down both balances and their nature (Debit/Overdraft)

**Step 2: Identify All Items Causing Difference**
Go through each item in the Cash Book and Pass Book and identify discrepancies:

| Item | Recorded in Cash Book? | Recorded in Pass Book? | Action |
|---|---|---|---|
| Cheques issued but not presented | Yes (Cr. bank) | No | Less from Cash Book (if starting from CB) |
| Cheques deposited not credited | Yes (Dr. bank) | No | Less from Cash Book (if starting from CB) |
| Bank charges | No | Yes | Less from Cash Book (if starting from CB) |
| Interest credited | No | Yes | Add to Cash Book (if starting from CB) |
| Direct payment by bank | No | Yes | Less from Cash Book (if starting from CB) |
| Error in Cash Book | Wrong | Correct | Correct the Cash Book |

**Step 3: Use the Correct Formula**

Starting from Cash Book Debit Balance:
```
Balance as per Cash Book (Dr.)
+ Items that increase Pass Book balance (unpresented cheques, etc.)
- Items that decrease Pass Book balance (uncredited cheques, bank charges, etc.)
= Balance as per Pass Book
```

Starting from Cash Book Credit (Overdraft):
```
Balance as per Cash Book (Cr./Overdraft)
+ Items that increase Pass Book balance (uncredited cheques, bank charges, etc.)
- Items that decrease Pass Book balance (unpresented cheques, interest, etc.)
= Balance as per Pass Book
```

> **Important:** When Cash Book has an overdraft (Credit balance), the treatment is REVERSED for some items because the bank considers an overdraft as a liability.

**Step 4: Present the Statement**
Present the BRS in proper format with two columns — "Add" and "Less" — and show the final balance. Make sure both totals are equal.

#### 4. Adjustments to Cash Book vs. Bank Reconciliation

A critical distinction that CS Executive students must understand:

**Items to be Adjusted in Cash Book (First) vs. Items to be Shown in BRS (Later):**

| Situation | Treatment |
|---|---|
| Bank charges appearing in Pass Book but not in Cash Book | First: Make entry in Cash Book → Dr. Bank Charges A/c, Cr. Bank A/c. Then BRS will agree without this item appearing separately. |
| Interest credited by bank appearing in Pass Book but not in Cash Book | First: Make entry in Cash Book → Dr. Bank A/c, Cr. Interest Received A/c. Then BRS will agree. |
| Direct payments by bank not in Cash Book | First: Make entry in Cash Book. Then BRS will agree. |
| Cheques issued but not presented | Do NOT adjust Cash Book — they are correctly recorded. Show in BRS as "Less from Cash Book balance" (unpresented cheques reduce the Pass Book balance compared to Cash Book). |
| Cheques deposited but not credited | Do NOT adjust Cash Book — they are correctly recorded. Show in BRS as "Add to Cash Book balance" (uncredited cheques make Cash Book balance higher than Pass Book). |

**Approach in Exam Questions:**
- If asked specifically to "prepare the Bank Reconciliation Statement without adjusting the Cash Book" — treat all differences in BRS
- If asked to "adjust the Cash Book and then prepare BRS" — first pass adjusting entries, then prepare BRS
- In most CS Executive questions, the Cash Book is NOT adjusted and all items appear in the BRS

#### 5. Common Errors and How to Handle Them

**Dishonour of Cheque Deposited:**
When a cheque deposited into the bank is dishonoured (bounced), the Cash Book has already been debited (bank increased). But if the bank informs after the period, the Cash Book needs to be credited to reverse the entry.

*Treatment in BRS:*
- Cash Book shows higher balance (increased for the cheque)
- Pass Book never credited (or was credited and then reversed)
- Show as: Less from Cash Book balance (deduct uncredited cheques if not yet credited)

**Cheque Returned (Bounced) After Being Credited in Pass Book:**
If a cheque deposited was initially credited by the bank and then returned unpaid, the bank will debit the account. Cash Book may not have this recorded yet.

*Treatment:*
- Cash Book balance is higher (it was debited for the deposit)
- Pass Book balance is lower (bank reversed the credit)
- Show as: Less from Cash Book balance (or adjust the Cash Book entry)

**Rectification Entries Before BRS:**
Sometimes, the question requires first correcting Cash Book errors, then preparing BRS. In such cases:
- Bank charges missed → Dr. Bank Charges, Cr. Bank
- Interest missed → Dr. Bank, Cr. Interest Received
- Wrong posting in Cash Book → correct it
- Then prepare BRS with the corrected Cash Book balance

#### 6. PYQ Patterns

1. **Simple BRS from Cash Book balance** — Given Cash Book balance and list of items causing difference, prepare BRS to arrive at Pass Book balance — 6–8 marks. Most common pattern.
2. **BRS starting from Pass Book balance** — Reverse approach, arrive at Cash Book balance — 6–8 marks.
3. **Cash Book with bank column and then BRS** — Record transactions in a three-column cash book first (including dishonour of cheques, bank charges, etc.), then prepare BRS — 10–12 marks.
4. **Adjust Cash Book first, then BRS** — First make adjusting entries in Cash Book for bank charges/interest, then reconcile — 8–10 marks.
5. **Identify errors and prepare BRS** — Find errors in Cash Book or Pass Book and show their impact — 6–8 marks.

> **Question from Dec 2022 CS Executive:** *"From the following particulars of M/s Omega Traders, prepare a Bank Reconciliation Statement as on 31st March 2022: (a) Balance as per Cash Book ₹45,000 (Debit), (b) Cheques issued but not presented for payment ₹8,500, (c) Cheques deposited with bank but not yet credited ₹12,000, (d) Bank charges not recorded in Cash Book ₹500, (e) A customer's cheque of ₹6,000 deposited but returned dishonoured — not recorded in Cash Book, (f) Interest credited by bank ₹800 (not recorded in Cash Book), (g) Insurance premium paid by bank ₹3,200 (not in Cash Book)."* [8 marks]

**Approach:**
- Start: Cash Book Dr. balance ₹45,000
- Add: Unpresented cheques ₹8,500 (Pass Book is higher by this — business has recorded payment, bank hasn't)
- Add: Bank charges ₹500 (Cash Book higher — hasn't recorded the charge)
- Add: Dishonoured cheque ₹6,000 (Cash Book debited it but bank reversed it)
- Add: Insurance premium ₹3,200 (Cash Book higher — bank paid it)
- Less: Uncredited cheques ₹12,000 (Cash Book shows higher — bank hasn't received it yet)
- Less: Interest credited ₹800 (Cash Book lower — bank added it)
- Result = Balance as per Pass Book

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

#### 1. Comprehensive Study of All Causes of Difference

**Understanding the Double-Entry Aspect of the Cash Book's Bank Column:**

The Bank column of the Cash Book follows the same double-entry rules as any other account:
- When we receive a cheque from a debtor, we Debit Bank A/c (bank balance increases)
- When we issue a cheque to a creditor, we Credit Bank A/c (bank balance decreases)

However, there is a timing gap between when the business makes an entry and when the bank processes the transaction. The BRS bridges this gap.

**Detailed Classification of Differences:**

**Type 1: Cheques Issued but Not Yet Presented (Unpresented Cheques)**
When a business issues a cheque to a creditor, it credits the Bank column immediately. However, the creditor may not present the cheque to the bank immediately, or the bank may not process it on the same day.

*Example:* Business issues cheque for ₹10,000 on 28th March. Cash Book is credited on 28th March. But the cheque is presented to the bank on 2nd April.

- Cash Book on 31st March: Bank balance is ₹10,000 lower
- Pass Book on 31st March: Shows the balance before the cheque was presented (higher by ₹10,000)

*Effect:* Cash Book balance is LOWER than Pass Book balance by ₹10,000.
*Reconciliation:* Add unpresented cheques to Cash Book balance.

**Type 2: Cheques Deposited but Not Yet Credited (Uncredited Cheques / Deposit in Transit)**
When a business receives a cheque from a debtor and deposits it into the bank, it debits the Bank column immediately. However, the bank takes time to process the deposit (especially if it's from another bank or a different city — clearing takes time).

*Example:* Business receives a cheque from a customer for ₹15,000 on 29th March. Debits Bank column on 29th March. Bank credits the account on 1st April after clearing.

- Cash Book on 31st March: Shows balance ₹15,000 higher
- Pass Book on 31st March: Does not show the credit yet (lower by ₹15,000)

*Effect:* Cash Book balance is HIGHER than Pass Book balance by ₹15,000.
*Reconciliation:* Less uncredited cheques from Cash Book balance.

**Type 3: Bank Charges**
The bank debits the account directly for various charges — maintenance fees, transaction fees, etc. The business may not record these until it receives the bank statement.

*Example:* Bank debits ₹200 as charges on 30th March.

- Cash Book: Has NOT recorded this — balance is ₹200 higher than actual
- Pass Book: Shows the debit — balance is ₹200 lower

*Effect:* Cash Book balance is HIGHER than Pass Book by ₹200.
*Reconciliation:* Less bank charges from Cash Book balance.
*Alternative:* First, pass entry: Dr. Bank Charges A/c, Cr. Bank A/c (then Cash Book adjusted and BRS would agree).

**Type 4: Interest Credited by Bank**
Banks credit interest on positive balances (current account interest). This appears directly in the Pass Book, but the Cash Book may not record it until the statement is received.

*Example:* Bank credits ₹500 interest on 31st March.

- Cash Book: Has NOT recorded this — balance is ₹500 lower than actual
- Pass Book: Shows the credit — balance is ₹500 higher

*Effect:* Cash Book balance is LOWER than Pass Book by ₹500.
*Reconciliation:* Add interest credited to Cash Book balance.
*Alternative:* First, pass entry: Dr. Bank A/c, Cr. Interest Received A/c.

**Type 5: Direct Payments by Bank**
The bank may make payments directly on standing instructions — insurance premiums, SIPs, loan EMIs, rent, etc. These are authorised by the business but executed by the bank without the business making a separate entry each time.

*Example:* Bank pays insurance premium of ₹5,000 on 25th March (standing instruction).

- Cash Book: Has NOT recorded this yet (business didn't credit Bank) — balance is ₹5,000 higher
- Pass Book: Shows the debit — balance is ₹5,000 lower

*Effect:* Cash Book balance is HIGHER than Pass Book by ₹5,000.
*Reconciliation:* Less direct payments from Cash Book balance.

**Type 6: Direct Credits by Customers**
Customers may pay directly into the bank account (via NEFT, RTGS, transfer), which the bank credits immediately. The business may not know about it until receiving the statement.

*Example:* A debtor pays ₹20,000 directly into the business's bank account on 27th March.

- Cash Book: Has NOT recorded this — balance is ₹20,000 lower
- Pass Book: Shows the credit — balance is ₹20,000 higher

*Effect:* Cash Book balance is LOWER than Pass Book by ₹20,000.
*Reconciliation:* Add direct credits to Cash Book balance.

**Type 7: Dishonour of Cheques**
When a deposited cheque is dishonoured (bounced), the bank debits the account (reverses the credit). The Cash Book had already been debited when the cheque was deposited — now it needs to be credited.

*Example:* Cheque of ₹8,000 received from a debtor and deposited. Later dishonoured.

- Cash Book: Showed debit of ₹8,000 when deposited (balance is higher by ₹8,000)
- Pass Book: Debited ₹8,000 when dishonoured (balance is lower)

*Effect:* Cash Book balance is HIGHER by ₹8,000.
*Reconciliation:* Less dishonoured cheques from Cash Book balance.
*Alternative:* First, pass entry: Dr. Debtor A/c, Cr. Bank A/c to record the reversal.

**Type 8: Errors in Cash Book**
Errors like transposition (₹1,230 written as ₹1,320), recording on wrong side (credit written as debit), or wrong amount will cause a difference.

*Example:* Bank payment of ₹3,000 recorded as ₹300 in Cash Book.

- Cash Book: Shows ₹2,700 more than it should
- Pass Book: Correct
- Difference = ₹2,700

*Reconciliation:* Correct the Cash Book or show the error in BRS as an addition/deduction.

**Type 9: Errors in Pass Book (Bank Errors)**
If the bank makes an error (debits wrong account, credits wrong amount), the business should bring it to the bank's notice and request a correction. In the BRS, if the error is in the Pass Book, we adjust the Pass Book balance.

*Example:* Bank debits ₹1,000 wrongly to the business's account.

- Cash Book: Correct balance (bank's error doesn't affect Cash Book if entry not made)
- Pass Book: Shows ₹1,000 less than it should (since the debit shouldn't be there)

*Reconciliation:* Add this ₹1,000 to the Pass Book balance to arrive at Cash Book balance.

#### 2. Adjusted Cash Book Method (Practical Approach)

In practice, accountants first adjust the Cash Book for all items that should be recorded (bank charges, interest, direct debits, etc.) and then compare the adjusted Cash Book balance with the Pass Book. Any remaining difference is then explained by timing items (unpresented and uncredited cheques).

**Step 1: Start with Cash Book Balance**
Take the balance as per Cash Book.

**Step 2: Pass Adjustment Entries for Items Not Recorded in Cash Book:**

| Item | Entry |
|---|---|
| Bank charges | Dr. Bank Charges A/c, Cr. Bank A/c |
| Interest credited | Dr. Bank A/c, Cr. Interest Received A/c |
| Direct payment by bank | Dr. Relevant Expense A/c, Cr. Bank A/c |
| Direct credit by customer | Dr. Bank A/c, Cr. Debtors A/c |
| Dishonoured cheque | Dr. Debtor A/c, Cr. Bank A/c |
| Wrong amount recorded in CB | Rectify the entry |

**Step 3: Calculate Adjusted Cash Book Balance**
After all adjustments, the Cash Book balance becomes the "Adjusted Cash Book Balance."

**Step 4: Compare with Pass Book**
The adjusted Cash Book balance should now be closer to (or equal to) the Pass Book balance. Any remaining difference is explained by unpresented cheques (if any are still outstanding) or uncredited cheques.

**Example:**

*Given:*
- Cash Book balance (Bank column) = ₹25,000 (Debit)
- Bank charges in Pass Book not in Cash Book = ₹300
- Interest credited in Pass Book not in Cash Book = ₹200
- Cheques issued but not presented = ₹5,000
- Cheques deposited but not credited = ₹3,000

*Step 1: Adjust Cash Book*
- Bank charges not recorded: Pass entry → Dr. Bank Charges 300, Cr. Bank 300 → Adjusted Cash Book = 25,000 – 300 = 24,700
- Interest credited not recorded: Pass entry → Dr. Bank 200, Cr. Interest Received 200 → Adjusted Cash Book = 24,700 + 200 = 24,900

*Step 2: Prepare BRS from Adjusted Cash Book:*
- Adjusted Cash Book = ₹24,900
- Add: Unpresented cheques (Pass Book will be higher by 5,000) = 5,000
- Less: Uncredited cheques (Pass Book will be lower by 3,000) = 3,000
- Balance as per Pass Book = 24,900 + 5,000 – 3,000 = **₹26,900**

#### 3. Three-Column Cash Book with BRS Integration

In advanced questions, the Cash Book is prepared first (with discount, cash, and bank columns), then the bank column is reconciled.

**Practice Problem:**

*From the following, write up the Three-Column Cash Book and prepare Bank Reconciliation Statement:*

- 2024 April 1: Cash in hand ₹10,000; Bank overdraft ₹5,000
- April 3: Received from Arun ₹9,500 (discount allowed ₹500)
- April 5: Paid to Bharat by cheque ₹8,000 (discount received ₹200)
- April 8: Deposited into bank ₹6,000 (contra entry)
- April 10: Withdrew from bank ₹2,000 (contra entry)
- April 12: Paid rent by cheque ₹1,200
- April 15: Received commission ₹800 in cash
- April 18: Bharat's cheque (sent on 5th) returned dishonoured — no entry passed
- April 20: Bank charges debited by bank ₹150
- April 25: Interest credited by bank ₹300
- April 28: Paid salaries ₹4,000 by cheque

**Three-Column Cash Book (Solution):**

```
Dr.                        Triple Column Cash Book                      Cr.
              Discount   Cash     Bank           │          Discount   Cash    Bank
Date     Particulars   (₹)       (₹)      (₹)  │ Date   Particulars   (₹)       (₹)      (₹)
────────────────────────────────────────────────┼────────────────────────────────────────────────
1-Apr    To Balance b/d   —    10,000        —  │ 5-Apr  By Bharat A/c  200       —    8,000
3-Apr    To Arun A/c    500   9,500         —  │ 8-Apr  By Bank A/c     —     6,000      —
18-Apr   To Bharat A/c   —      —         8,000│10-Apr  By Cash A/c     —     2,000      —
25-Apr   To Interest      —      —           300│12-Apr  By Rent A/c     —       —     1,200
          Received A/c                      │20-Apr  By Bank           —      150      —
                                            │        Charges A/c
                                            │25-Apr  By Drawings A/c   —     800      —
                                            │28-Apr  By Salaries A/c   —       —     4,000
                                            │30-Apr  By Balance c/d    300   8,650   5,850
───────────────  ─────  ─────  ─────  ───── │          ─────  ─────  ─────  ─────
               500  19,500  8,300  8,300  │          500  19,500  8,300  8,300
                                         │ 1-May  To Balance b/d   —      —   5,850 (Cr.)
─────────────────────────────────────────────────
Note: Bank charges on 20-Apr not recorded in cash book
Note: Bharat's cheque dishonoured on 18-Apr — not recorded
```

*For the dishonoured cheque, pass:*
```
Bharat A/c        Dr.  8,000
   To Bank A/c                      8,000
(Being Bharat's cheque dishonoured)
```

*Now Bank Reconciliation Statement as at 30th April:*

```
Balance as per Cash Book (Bank column) — Debit                5,850
Add: Cheques issued but not presented (nil)                      —
Add: Dishonoured cheque not recorded in Cash Book               8,000
Add: Bank charges not in Cash Book                               150
Less: Uncredited cheques (nil)                                    —
Less: Interest credited by bank not in Cash Book                 300
                                                    ───────    ───────
Balance as per Pass Book                         13,700      300
                                                    ======    =====
```

(Alternatively, adjust for dishonoured cheque and bank charges first in Cash Book, then reconcile)

#### 4. Understanding Bank Overdraft in BRS

When the Cash Book shows a **Credit balance (Overdraft)**, the treatment of items reverses because an overdraft means the business owes the bank — the bank considers it a liability.

**Starting from Overdraft (Cash Book Credit Balance):**

| Item | Effect on Overdraft | BRS Treatment |
|---|---|---|
| Unpresented cheques | Overdraft increases (cheque issued but not reducing bank's records) | ADD to Overdraft |
| Uncredited cheques | Overdraft decreases (cheque deposited but not yet added) | LESS from Overdraft |
| Bank charges | Overdraft increases (directly debited by bank) | ADD to Overdraft |
| Interest credited | Overdraft decreases (bank adds interest to account) | LESS from Overdraft |
| Direct payments | Overdraft increases | ADD to Overdraft |

**Key Rule for Overdraft:**
When Cash Book shows an overdraft — think in terms of "what makes the overdraft larger or smaller." Unpresented cheques make overdraft larger (bank hasn't processed your payment yet), so add them. Uncredited cheques make overdraft smaller (bank hasn't processed your deposit yet), so subtract.

#### 5. Comprehensive Practice Problem

**Problem:**

From the following information, prepare a Bank Reconciliation Statement as on 31st May 2024:

1. Balance as per Cash Book (Debit): ₹62,500
2. Cheques issued in May but presented in June: ₹14,200
3. Cheques deposited in May but credited in June: ₹18,500
4. Bank debited bank charges on 30th May: ₹350
5. A customer directly deposited ₹7,000 into the bank (not recorded in Cash Book)
6. Insurance premium of ₹4,000 paid by bank under standing instruction (not in Cash Book)
7. Interest of ₹1,200 credited by bank on 31st May (not in Cash Book)
8. A cheque for ₹3,500 returned dishonoured — already recorded in Cash Book on 28th May
9. A wrong entry: payment to supplier ₹5,000 entered in Cash Book as ₹500 (error)

**Solution:**

*Step 1: Note the Cash Book balance — ₹62,500 (Debit)*
*Step 2: Identify items and their effect*

| Item | Cash Book Effect | Pass Book Effect | Treatment |
|---|---|---|---|
| Unpresented cheques | Already Cr. (lower) | Not Cr. yet (higher) | Add to Cash Book |
| Uncredited cheques | Already Dr. (higher) | Not Dr. yet (lower) | Less from Cash Book |
| Bank charges | Not recorded (higher) | Debited (lower) | Less from Cash Book |
| Direct deposit by customer | Not recorded (lower) | Credited (higher) | Add to Cash Book |
| Insurance premium | Not recorded (higher) | Debited (lower) | Less from Cash Book |
| Interest credited | Not recorded (lower) | Credited (higher) | Add to Cash Book |
| Dishonoured cheque | Already recorded | Bank reversed it | Already in Cash Book — need to verify |
| Cash Book error | Understated by ₹4,500 | Correct | Add ₹4,500 (or show separately) |

**Bank Reconciliation Statement as on 31st May 2024:**

```
                                                        Add (₹)      Less (₹)
Balance as per Cash Book (Debit)                      62,500
Add: Unpresented cheques                               14,200
Add: Direct deposit by customer (not in Cash Book)     7,000
Add: Interest credited by bank (not in Cash Book)       1,200
Add: Cash Book error — underrecording (₹5,000 as ₹500)  4,500
                                                    ───────    ───────
                                                    89,400        —
Less: Uncredited cheques (deposited but not credited)               18,500
Less: Bank charges (not in Cash Book)                               350
Less: Insurance premium paid by bank (not in Cash Book)           4,000
                                                    ───────    ───────
                                                    89,400     22,850
Balance as per Pass Book                             66,550
                                                    ======     =====
```

**Verification:** 89,400 – 22,850 = ₹66,550 ✓

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*