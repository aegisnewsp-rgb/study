---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-003
topicName: Journal Entries & Ledgers
weight: 3
country: cs
generated: "2026-03-25T17:00:00"
diagramPrompt: Clean educational diagram showing the accounting cycle from Journal to Ledger to Trial Balance, with debit/credit posting flow, format of a ledger account — white background, exam-style illustration
---

# Journal Entries & Ledgers

The **Journal** and the **Ledger** are the twin pillars of the entire double-entry bookkeeping system. Together, they form the mechanical backbone of accounting — the process by which raw financial transactions are systematically converted into organised, classified financial information suitable for preparing trial balances and financial statements.

The **Journal** is the book of original entry — every transaction is first recorded here in chronological order with a brief narrative explanation (called the "narration") before it is posted to any other book. The journal entry captures the dual aspect of each transaction by recording which accounts are debited and which are credited, and by how much. The **Ledger** is the book of second entry — it contains the classified record of all transactions, organised by account. Each account in the ledger accumulates all debits and credits affecting it from all journal entries, ultimately providing the balance (debit or credit) that appears in the Trial Balance.

For the CS Executive examination, the ability to correctly journalise transactions and post them to ledgers is not just an academic skill — it is a practical competency that underpins every question on financial accounting. A significant portion of the exam's numerical section tests your journal entry and ledger posting skills, including special journals, contra entries, and the preparation of a trial balance from ledger balances. Getting this right is foundational to scoring marks in every accounting topic that follows.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**The Journal Entry Format (Golden Rules):**

Every journal entry follows this structure:

```
Date     Particulars                         L.F.    Dr. (₹)    Cr. (₹)
--------------------------------------------------------------------
         Account Name (Debited)               xxx     x,xxx
             To Account Name (Credited)               x,xxx
        (Narration — explain the transaction)
```

**Three Golden Rules of Debit and Credit:**

| Account Type | Debit | Credit |
|---|---|---|
| **Real Account** (Assets, Cash, Goods) | What comes IN | What goes OUT |
| **Personal Account** (Persons, Companies) | The Receiver | The Giver |
| **Nominal Account** (Revenues, Expenses, Gains) | All Expenses & Losses | All Incomes & Gains |

**Quick Journal Entry Patterns (Memorise These):**

| Transaction | Debit | Credit |
|---|---|---|
| Capital introduced | Cash/Bank A/c | Capital A/c |
| Purchase goods (cash) | Purchases A/c | Cash/Bank A/c |
| Purchase goods (credit) | Purchases A/c | Creditors A/c |
| Sale of goods (cash) | Cash/Bank A/c | Sales A/c |
| Sale of goods (credit) | Debtors A/c | Sales A/c |
| Return of goods by customer | Sales Returns A/c | Debtors A/c |
| Return of goods to supplier | Creditors A/c | Purchases Returns A/c |
| Payment of salary | Salary A/c | Cash/Bank A/c |
| Depreciation charged | Depreciation A/c | Accumulated Depreciation A/c |
| Goods withdrawn by owner | Drawings A/c | Purchases/Stock A/c |
| Bad debts written off | Bad Debts A/c | Debtors A/c |

**Ledger Posting Rules:**

After journalising, each entry is "posted" to the ledger by:
1. Finding the relevant account in the ledger
2. Entering the date, journal page reference (J.F.), and amount on the **debit side** (for a Dr. entry) or **credit side** (for a Cr. entry)
3. Writing the other account's name in the particulars column
4. At the end of the period, totaling both sides and finding the **balance** (difference)

**Debit Balance vs. Credit Balance:**
- **Debit Balance:** Assets, Expenses, Drawings (Normal Dr. balances)
- **Credit Balance:** Liabilities, Capital, Revenue (Normal Cr. balances)
- If Debit side > Credit side → **Debit Balance**
- If Credit side > Debit side → **Credit Balance**

> **⚡ Exam Tip:** In journalising, the **total debits must ALWAYS equal total credits** in every entry. If they don't, the entry is wrong. This is the quickest check for any numerical error in journal entry questions.

> **⚡ Exam Tip:** For ledger, remember: **"Debit the receiver, credit the giver; Debit all expenses and losses, credit all incomes and gains."** This is the short form of the nominal account rule and covers 90% of entries you'll encounter.

> **Common Mistake:** Students often forget the ** narration** in journal entries. While the narration doesn't carry marks by itself, a missing narration can cause the examiner to think you don't understand what you're recording. Always write a clear, concise narration after each entry — e.g., "(Being goods purchased on credit from M/s Sharma & Co.)"

> **Common Mistake:** When goods are withdrawn by the owner for personal use, the entry is **Drawings A/c Dr. To Purchases/Stock A/c** — NOT a revenue transaction (Sales) and NOT an expense. Drawings reduce the owner's equity.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

#### 1. Journal — Book of Original Entry

**What is Journalising?**

Journalising is the process of recording transactions in the journal in a systematic manner. Each journal entry consists of:

1. **Date column:** The date of the transaction (day, month, year)
2. **Particulars column:** The names of the accounts debited and credited, with the word "To" before every account that is credited
3. **Ledger Folio (L.F.):** The page number of the ledger where the account appears — filled in after posting
4. **Debit Amount:** Amount debited to the relevant account
5. **Credit Amount:** Amount credited to the relevant account

**Why is the Journal Called the "Book of Original Entry"?**

Because it is the FIRST book in which every transaction is recorded before it goes anywhere else. All subsequent books (ledger, cash book, etc.) are derived from the journal. No entry is made directly in the ledger without first being journalised (with minor exceptions like petty cash payments, which are directly entered in the cash book as a book of prime entry — but even these are eventually journalised).

**Types of Journal Entries:**

**A. Simple Entry:** One debit and one credit
```
Cash A/c           Dr.  50,000
   To Capital A/c                 50,000
(Being capital introduced in cash)
```

**B. Compound Entry:** One debit and multiple credits, OR multiple debits and one credit

*Example of Compound Entry (multiple credits):*
```
Sales A/c         Dr.  1,00,000
   To Cash A/c                    70,000
   To Debtors A/c                 30,000
(Being goods sold partly for cash and partly on credit)
```

*Example of Compound Entry (multiple debits):*
```
Cash A/c        Dr.  20,000
Furniture A/c   Dr.  10,000
   To Capital A/c                           30,000
(Being business started with cash and furniture)
```

**C. Opening Entry:**

When a new accounting period begins and there are opening balances (carried forward from the previous period), an opening entry is passed to bring those balances into the new books:

```
Sundry Debtors A/c      Dr.  (opening balance)
Stock A/c                Dr.  (opening balance)
Furniture A/c            Dr.  (opening balance)
Machinery A/c            Dr.  (opening balance)
   To Sundry Creditors A/c
   To Capital A/c
   To Opening Stock Reserve (if any)
(Being opening balances brought into the new books)
```

**D. Closing Entry:**

At the end of the accounting period, all revenue and expense accounts are transferred to the Trading and Profit & Loss Account through closing entries:

```
Trading A/c          Dr.
   To Purchases A/c
   To Wages A/c
   To carriage inward A/c
   To closing stock A/c
(Being direct expenses transferred to Trading A/c)
```

```
Sales A/c         Dr.
   To Trading A/c
(Being sales transferred to Trading A/c)
```

```
Profit & Loss A/c     Dr.
   To Salaries A/c
   To Rent A/c
   To Insurance A/c
   To Depreciation A/c
   To Bad Debts A/c
   To Interest A/c
(Being all indirect expenses transferred to P&L A/c)
```

**E. Adjustment Entries:**

These are passed at the end of the period to ensure accrual basis of accounting — revenue and expenses are matched to the period they relate to:

| Adjustment | Entry |
|---|---|
| Outstanding expenses (salary due but not paid) | Salary A/c Dr. To Salary Outstanding A/c |
| Prepaid expenses (paid in advance) | Prepaid Expense A/c Dr. To Expense A/c |
| Accrued income (income earned but not received) | Accrued Income A/c Dr. To Income A/c |
| Income received in advance | Income A/c Dr. To Income Received in Advance A/c |
| Depreciation | Depreciation A/c Dr. To Asset A/c (or Accumulated Depreciation) |
| Provision for doubtful debts | Bad Debts A/c (or P&L) Dr. To Provision for Doubtful Debts A/c |
| Closing stock | Closing Stock A/c Dr. To Trading A/c |

#### 2. The Ledger — Book of Second Entry

**What is Ledger Posting?**

Ledger posting is the process of transferring the debits and credits from the journal to their respective accounts in the ledger. Each account in the ledger becomes a separate page (or "T-shape" in a simple system) showing all transactions affecting that account.

**Format of a Ledger Account:**

```
Dr.                        [Account Name]                         Cr.
----------- ---------- -----------   ----------- ---------- -----------
Date     Particulars   J.F.   Amount    Date    Particulars   J.F.  Amount
          (Folio)              (₹)              (Folio)          (₹)
```

**Steps in Posting from Journal to Ledger:**

1. For every journal entry debited, find the corresponding account in the ledger and enter the date, the name of the other account (in particulars), journal folio (J.F. = page number of journal), and amount on the **debit side**
2. For every journal entry credited, find the corresponding account in the ledger and enter on the **credit side**
3. After all entries are posted, total both sides using "By Sundries" or individual posting method
4. Calculate the balance (difference between two sides)
5. Write the balance c/d (carried down) on the heavier side and bring it down b/d (brought down) as the opening balance of the next period

**Posting Methods:**

**Method 1: Individual Posting (Most Common in Exams)**
Every debit entry in the journal is posted individually to the debit side of the relevant ledger account; every credit entry to the credit side.

**Method 2: Compound Posting**
Multiple transactions between the same two accounts may be accumulated and posted as a compound entry periodically.

**Balancing an Account:**

1. **Total both sides** of the account
2. **Find the difference** — if Debit side > Credit side = **Debit Balance**; if Credit side > Debit side = **Credit Balance**
3. Write "By Balance c/d" (for Debit balance) or "To Balance c/d" (for Credit balance) on the lighter side
4. Draw a single line below both sides (showing totals)
5. Write the totals (which will now be equal) on both sides
6. Write "To Balance b/d" (Debit side) or "By Balance b/d" (Credit side) on the heavier side as the opening balance of the next period

#### 3. Contra Entries

A **Contra Entry** is a journal entry that involves both a **debit and a credit within the same class of accounts** — specifically, it typically involves the **Cash account and the Bank account**. When cash is deposited into the bank or withdrawn from the bank, both accounts involved are asset accounts, and the entry acts as a contra (cross-reference) between them.

**The Three Standard Contra Entries:**

**A. Cash deposited into Bank:**
```
Bank A/c          Dr.  (amount)
   To Cash A/c                  (amount)
(Being cash deposited into bank)
```
Note: Cash decreases (Cr.), Bank increases (Dr.) — both are asset accounts

**B. Cash withdrawn from Bank:**
```
Cash A/c          Dr.  (amount)
   To Bank A/c                  (amount)
(Being cash withdrawn from bank)
```
Note: Cash increases (Dr.), Bank decreases (Cr.) — both are asset accounts

**C. Bank charges debited directly by bank:**
```
Bank Charges A/c     Dr.  (amount)
   To Bank A/c                    (amount)
(Being bank charges debited by bank)
```
> **Important:** A contra entry is NOT just a cash/bank transaction. Any transaction where BOTH accounts are of the SAME nature (both debits or both credits to asset accounts) requires careful handling. However, "contra" technically refers to the practice of recording entries affecting the Cash Book directly in the ledger — but in CS Executive context, "contra entry" most commonly refers to the cash-book transfers.

#### 4. Subdivisions of Journal — Special Journals

In large organisations, the journal is subdivided to提高 efficiency:

- **Cash Journal / Cash Book:** Records all cash and bank transactions
- **Sales Journal:** Records all credit sales
- **Purchases Journal:** Records all credit purchases
- **Returns Journal:** Records all returns (sales returns + purchases returns)
- **Journal Proper:** Records all transactions that don't fit into special journals (bad debts, depreciation, opening entries, closing entries, etc.)

**Cash Book — The Most Important Subsidiary Book:**

The Cash Book simultaneously serves as a journal and a ledger for cash and bank transactions. It has the following types:

1. **Simple Cash Book:** Single column — records only cash transactions
2. **Double Column Cash Book:** Two columns — Cash + Bank (or Cash + Discount)
3. **Triple Column Cash Book:** Three columns — Cash + Bank + Discount

**Contra Entry in Cash Book:**
When cash is deposited into the bank, it appears on the **debit side** of the Bank column and on the **credit side** of the Cash column. A "C" (for Contra) is marked in both L.F. columns, and no posting to the ledger is done for these entries — hence the term "contra."

**Petty Cash Book:**
Used for recording small, routine cash payments (postage, stationery, carriage, etc.). Maintained by a petty cashier. The **Imprest System** is commonly used: the petty cashier is given a fixed amount (e.g., ₹5,000) at the beginning of the period. As payments are made, receipts are collected. At the end of the period, the petty cashier renders an account and is reimbursed exactly the amount spent, restoring the imprest to its original amount.

Format of Petty Cash Book (Analytical System):
| Date | Particulars | V.No. | Postage | Stationery | Carriage | Repairs | Misc. | Total |
|---|---|---|---|---|---|---|---|---|

#### 5. Trial Balance

The **Trial Balance** is a statement that lists all the **ledger accounts** (both debit and credit balances) at the end of an accounting period. Its purpose is to verify that **total debits = total credits** — which is the fundamental requirement of the double-entry system.

**Preparation of Trial Balance:**

All accounts with **Debit balances** are placed on the Debit side of the Trial Balance.
All accounts with **Credit balances** are placed on the Credit side.

**Normal Balances of Accounts:**

| Account | Normal Balance |
|---|---|
| Assets (Cash, Bank, Debtors, Stock, Machinery) | Debit |
| Liabilities (Creditors, Loans, Bank Overdraft) | Credit |
| Capital | Credit |
| Drawings | Debit (contra to capital) |
| Revenue (Sales, Commission Received, Interest Received) | Credit |
| Expenses (Rent, Salary, Wages, Carriage, Discount) | Debit |
| Purchases Returns | Credit |
| Sales Returns | Debit |
| Provision for Doubtful Debts | Credit |
| Accumulated Depreciation | Credit |
| Provision for Discount on Debtors | Credit |

**Trial Balance Format:**

```
Trial Balance as at 31st March 2025

Particulars            L.F.    Dr. (₹)    Cr. (₹)
-------------------------------------------------
Cash                       12,500
Bank                     45,000
Sundry Debtors           80,000
Stock (Opening)           25,000
Machinery              2,00,000
Furniture                30,000
Sundry Creditors                          55,000
Bills Payable                              20,000
Capital (Opening)                       2,50,000
Drawings               15,000
Purchases             1,80,000
Sales                                   3,20,000
Purchases Returns                        12,000
Sales Returns             8,000
Wages                   22,000
Rent                     8,000
Salaries                18,000
Carriage Inward          5,500
Carriage Outward         3,200
Discount Allowed         2,800
Discount Received                          4,000
Commission Received                         6,000
Bank Charges             1,000
                         -----    --------
                         6,57,000  6,57,000
```

**Features of a Trial Balance:**
- If it **tallies** (total debits = total credits), it indicates the books are **arithmetically accurate** — but it does NOT guarantee there are no errors (see below)
- A **non-tallied** Trial Balance indicates posting errors, omission of accounts, or wrong balancing
- Even a tallied Trial Balance can have errors of commission, compensation errors, and complete omission of an account

**Errors NOT disclosed by a Trial Balance:**

| Error Type | Description | Example |
|---|---|---|
| **Errors of Omission** | Transaction completely omitted from books | Sale to Ram ₹5,000 not recorded anywhere |
| **Errors of Commission** | Posted to wrong account but correct side | Creditor's name misspelled; or posted to wrong person's account |
| **Errors of Principle** | Posted to wrong type of account | Revenue expenditure debited to Asset A/c (instead of Expense) |
| **Compensating Errors** | One error cancels another | Sales undercast by ₹1,000 AND Purchases undercast by ₹1,000 — trial balance tallies but books wrong |
| **Complete Reversal** | Debit and credit entries are reversed | Cash sale ₹1,000 recorded as Dr. Sales A/c, Cr. Cash A/c — trial balance tallies |
| **Errors of Original Entry** | Both sides recorded correctly but at wrong amount | Purchase of ₹5,000 recorded as ₹500 — both sides are equal, trial balance tallies |

> **Only these errors make Trial Balance NOT tally:**
> 1. **Posting to the wrong side** of an account (e.g., crediting instead of debiting)
> 2. **Omitting to post** one side of a journal entry
> 3. **Wrong amount** in one account (posting wrong amount on one side only)
> 4. **Posting to a wrong account** where that account has a balance (affects both sides differently)

#### 6. PYQ Patterns

1. **Journalise the following transactions** — 8–10 transactions, 8–10 marks. Common transactions: capital introduced, purchase/sale (cash and credit), return inwards/outwards, depreciation, drawings, salary paid, rent paid, commission received
2. **Post to ledger and prepare trial balance** — A comprehensive question of 12–15 marks
3. **Rectify the following errors** in the books — 8–10 marks, identifying errors of omission, commission, principle, and rectifying entries
4. **Cash book with bank column** — 8 marks, including contra entries, dishonour of cheques, bank charges
5. **Prepare the Trial Balance** from given ledger balances — 4–6 marks

> **Question from Dec 2022 CS Executive:** *"Pass journal entries for the following transactions: (a) Started business with ₹5,00,000 cash and ₹2,00,000 worth of furniture, (b) Purchased goods from Raghav ₹40,000 at 10% trade discount, (c) Sold goods to Neeraj for ₹35,000 at 5% cash discount, (d) Withdrew goods worth ₹3,000 for personal use, (e) Paid rent by cheque ₹8,000, (f) Received commission ₹2,000, (g) Goods destroyed by fire ₹5,000 (not insured)"* [10 marks]

**Approach:** Before journalising, check for trade discounts — they reduce the invoice price and are NOT recorded in the books. Cash discounts are recorded (received or allowed).

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study study timeline.

#### 1. Depreciation — Comprehensive Journal Entry Treatment

**Journal Entries for Depreciation:**

**Method A — Provision for Depreciation Account (Indirect Method):**
```
Depreciation A/c           Dr.  (amount)
   To Provision for Depreciation A/c         (amount)
(Being depreciation charged on machinery @ 15% p.a.)
```

At the time of sale/discard of an asset:
```
Provision for Depreciation A/c    Dr.  (accumulated dep.)
Asset A/c                         Dr.  (book value)
   To Asset A/c (original cost)              (original cost)
   To P&L A/c (profit on sale) OR
   To P&L A/c (loss on sale)   (balancing figure)
```
**Method B — Fixed Asset Account (Direct Method):**
Each year, the asset account itself is reduced directly:
```
Depreciation A/c           Dr.  (amount)
   To Asset A/c                         (amount)
```
Under Ind AS 16, the Cost Model (Method A) or Revaluation Model is used. The Provision for Depreciation Accumulated method is the standard approach.

**Depreciation Calculation (Working Examples):**

*Straight Line Method:*
Cost of machine: ₹1,00,000; Residual value: ₹10,000; Useful life: 5 years
Annual Depreciation = (1,00,000 – 10,000) / 5 = **₹18,000 per year**

*Written Down Value Method:*
Rate = 40% (computers)
Year 1: ₹1,00,000 × 40% = ₹40,000 depreciation; Book value = ₹60,000
Year 2: ₹60,000 × 40% = ₹24,000 depreciation; Book value = ₹36,000
Year 3: ₹36,000 × 40% = ₹14,400 depreciation; Book value = ₹21,600

#### 2. Bad Debts, Provision for Doubtful Debts, and Provision for Discount

**Bad Debts:**
Bad debts are amounts owed by debtors that are **irrecoverable**. They are written off as an expense.

*Journal Entry:*
```
Bad Debts A/c         Dr.  (amount)
   To Sundry Debtors A/c               (amount)
(Being bad debts written off)
```

**Provision for Doubtful Debts (PDD):**

Under the prudence principle, we anticipate possible losses even before they are confirmed. A provision is created @ a certain percentage on the closing balance of debtors.

*Creation of PDD:*
```
Bad Debts / P&L A/c         Dr.  (provision amount)
   To Provision for Doubtful Debts A/c         (amount)
(Being provision for doubtful debts created @ X% on debtors)
```

*Writing off a bad debt when PDD exists:*
```
Provision for Doubtful Debts A/c    Dr.
   To Debtors A/c                           (amount)
(Being specific bad debt written off against PDD)
```

**Provision for Discount on Debtors:**

A provision is created at a certain rate on the NET DEBTORS (after deducting PDD) to account for likely cash discounts that debtors might take.

*Creation:*
```
Discount Allowed / P&L A/c    Dr.
   To Provision for Discount on Debtors A/c
(Being provision for discount on debtors created @ X% on net debtors)
```

**Change in Provision for Doubtful Debts:**

If existing PDD is insufficient (new provision > old provision): Charge the difference to P&L.
If PDD is excess (new provision < old provision): Credit the excess to P&L.

*Working:* 
Opening Debtors = ₹80,000; Opening PDD = ₹3,000; Bad debts written off = ₹2,000; Closing Debtors = ₹70,000; New provision required @ 5% on ₹70,000 = ₹3,500

*Journal:*
```
P&L / Bad Debts A/c     Dr.  2,500
   To Provision for Doubtful Debts A/c        2,500
(Being additional provision created: 3,500 – 1,000 = 2,500)
```
*(Note: The opening PDD of ₹3,000 was partially used when ₹2,000 was written off: remaining PDD = ₹1,000)*

#### 3. Rectification of Errors

Errors can be **rectified** through journal entries. There are two systems:
1. **Suspense Account System:** When trial balance doesn't tally, the difference is put into a Suspense Account. Errors are then traced and rectified using the Suspense Account. Once all errors are found, the Suspense Account becomes zero.
2. **Direct Rectification:** Errors are directly corrected in the affected accounts.

**Types of Rectification Entries:**

**A. Errors of Omission:**
Transaction completely omitted — rectify by passing the complete entry

**B. Errors of Commission:**
Wrong account used but correct side — rectify by transferring to correct account:
```
Wrong Account (given)        Dr.
   To Correct Account                    (amount)
(Being error of commission rectified)
```

**C. Errors of Principle:**
Revenue expenditure treated as capital or vice versa:
```
Capital/Capital Revenue A/c (the correct one)     Dr.
   To Revenue/Capital A/c (the incorrect one)             (amount)
(Being error of principle rectified)
```

**D. Compensating Errors:**
Rectify by passing an entry that compensates:
```
Accounts Payable A/c (understated)        Dr.
   To Accounts Receivable A/c (overstated)          (amount)
(Being compensating error rectified)
```

**E. Errors of Original Entry:**
Both sides equal but wrong amount — correct the amount:
```
Suspense A/c (balancing)                  Dr./Cr.
   To Relevant Account                               (amount)
(Being wrong amount corrected)
```

**F. Complete Reversal:**
Debit and credit are completely reversed — rectify by passing the correct entry:
```
Correct Accounts          Dr./Cr.
   To Incorrect Accounts (which has wrong balance)            (amount)
```

#### 4. Comprehensive Practice Problems

**Problem 1: Journal Entries for a Full Set of Transactions**

*Transactions of M/s Sharma Traders for April 2024:*

1. 1st April: Commenced business with cash ₹3,00,000 and machinery ₹1,00,000
2. 3rd April: Opened a current account with bank ₹1,00,000
3. 5th April: Purchased goods from Arun & Co. ₹60,000 at 10% trade discount
4. 8th April: Sold goods to Bhanu Traders ₹80,000 at 5% trade discount
5. 10th April: Purchased furniture ₹20,000 by cheque
6. 12th April: Returned goods to Arun & Co. ₹5,000 (before payment)
7. 15th April: Bhanu Traders returned goods ₹8,000
8. 18th April: Paid Arun & Co. by cheque after deducting 2% cash discount
9. 20th April: withdrew cash for personal use ₹5,000
10. 22nd April: Sold goods to Deepak ₹40,000
11. 25th April: Received cheque from Bhanu Traders ₹68,000 (₹2,000 discount allowed)
12. 28th April: Paid rent ₹6,000 and salary ₹12,000 in cash
13. 30th April: Charged depreciation on machinery @ 10% p.a.

*Solutions:*

```
1. Cash A/c                    Dr.  3,00,000
   Machinery A/c               Dr.  1,00,000
      To Capital A/c                           4,00,000
   (Being business started with cash and machinery)

2. Bank A/c                    Dr.  1,00,000
      To Cash A/c                              1,00,000
   (Being cash deposited into bank — contra entry)

3. Purchases A/c               Dr.  54,000
      To Arun & Co. A/c                        54,000
   (Being goods purchased at 60,000 – 10% trade discount)

4. Bhanu Traders A/c           Dr.  76,000
      To Sales A/c                              76,000
   (Being goods sold at 80,000 – 5% trade discount)

5. Furniture A/c               Dr.  20,000
      To Bank A/c                               20,000
   (Being furniture purchased by cheque)

6. Arun & Co. A/c              Dr.  5,000
      To Purchases Returns A/c                   5,000
   (Being goods returned to Arun & Co.)

7. Sales Returns A/c           Dr.  8,000
      To Bhanu Traders A/c                      8,000
   (Being goods returned by Bhanu Traders)

8. Arun & Co. A/c              Dr.  54,000
      To Bank A/c                               52,920
      To Discount Received A/c                     1,080
   (Being payment made after 2% cash discount on ₹54,000)

9. Drawings A/c                Dr.  5,000
      To Cash A/c                               5,000
   (Being cash withdrawn for personal use)

10. Deepak A/c                 Dr.  40,000
      To Sales A/c                              40,000
   (Being goods sold to Deepak)

11. Bank A/c                    Dr.  68,000
    Discount Allowed A/c       Dr.  2,000
      To Bhanu Traders A/c                        70,000
   (Being cheque received from Bhanu after discount)

12. Rent A/c                    Dr.  6,000
    Salary A/c                  Dr.  12,000
      To Cash A/c                               18,000
   (Being rent and salary paid in cash)

13. Depreciation A/c            Dr.  10,000
      To Machinery A/c                            10,000
   (Being depreciation charged @ 10% on 1,00,000)
```

**Problem 2: Three-Column Cash Book with Contra**

*Record the following in a Three-Column Cash Book and balance it:*
- 2024 April 1: Cash in hand ₹12,000; Cash at bank ₹45,000
- April 3: Received from Rahul ₹8,000 (discount allowed ₹200)
- April 5: Paid to Suresh ₹15,000 by cheque
- April 7: Deposited cash into bank ₹5,000
- April 10: Withdrew cash from bank ₹3,000
- April 12: Paid rent by cheque ₹2,000
- April 15: Received commission ₹1,500 in cash
- April 20: Suresh's cheque returned dishonoured ₹500
- April 25: Bank charges debited ₹100

*Three-Column Cash Book Solution:*

```
Dr.              Triple Column Cash Book               Cr.
─────────────────────────────────────────────────────────────
             Discount   Cash    Bank        │          Discount  Cash    Bank
Date    Particulars   (₹)     (₹)     (₹)  │ Date   Particulars  (₹)      (₹)     (₹)
────────────────────────────────────────────┼────────────────────────────────────────────
1-Apr   To Balance b/d  —    12,000  45,000│ 5-Apr  By Suresh A/c   —       —    15,000
3-Apr   To Rahul A/c   200   8,000      —  │ 7-Apr  By Bank A/c    —    5,000     —
10-Apr  To Bank A/c    —    3,000       —  │ 10-Apr By Cash A/c     —    3,000     —
15-Apr  To Commission  —    1,500      —  │ 12-Apr By Rent A/c     —       —     2,000
        A/c                           │ 20-Apr By Suresh A/c    —       —       500
                              │ 25-Apr By Bank Charges —       —       100
                              │ 30-Apr By Balance c/d  200  18,500  27,400
────────────── ─────── ───── ────────┼─────────────── ───── ────── ─────
         200  24,500  45,000 │              200  24,500  45,000
                              │ 1-May  To Balance b/d  —   18,500  27,400
─────────────────────────────────────────────────────────────
C = Contra entry
```

**Problem 3: Bank Reconciliation Statement**

Often, the Cash Book balance doesn't match the Pass Book (Bank Statement) balance. A Bank Reconciliation Statement (BRS) reconciles the two.

*Given:*
- Cash Book (Bank column) shows debit balance: ₹18,500
- Pass Book shows credit balance: ₹20,000
- Cheques deposited but not yet credited by bank: ₹3,000
- Cheques issued but not yet presented for payment: ₹1,200
- Bank charges not recorded in Cash Book: ₹100
- Direct payment by bank (EMI, insurance) not in Cash Book: ₹2,500
- Interest credited by bank not recorded in Cash Book: ₹800

*Solution:*

```
Bank Reconciliation Statement as on 31st March

                                    Add          Less
Cash Book Balance (Dr.)           ₹18,500
+ Cheques deposited but not
  credited by bank                            3,000
+ Bank charges not in Cash Book              100
+ Direct payment not in Cash Book            2,500
– Interest credited by bank                              800
– Cheques issued but not
  presented for payment                                  1,200
                                   ────────    ────────
Adjusted Balance                  ₹24,100    ₹2,000
                                   ────────    ────────
= Pass Book Balance               ₹22,100
Balance as per Pass Book (Cr.)    ₹20,000
+ Unpresented cheques                          1,200
– Uncredited cheques                           3,000
– Bank charges                                   100
– Direct payments                               2,500
+ Interest credited                                800
                                   ────────
= Balance as per Cash Book        ₹18,500
```

#### 5. Suspense Account and Its Role in Rectification

When the Trial Balance doesn't agree, the difference is placed in a **Suspense Account**. Once all errors are located and rectified, the Suspense Account is closed.

**When Suspense Account has a Debit Balance:**
The Trial Balance short by credit — the Suspense Account temporarily holds this amount on the credit side (so Trial Balance tallies). When an error is found, Suspense Account is used to rectify.

**When Suspense Account has a Credit Balance:**
The Trial Balance short by debit — Suspense Account holds this on the debit side.

**Rectification through Suspense Account:**

*Example:* A sale of ₹5,000 to Mohan was completely omitted from the books. Rectification:
```
Mohan A/c              Dr.  5,000
   To Suspense A/c                     5,000
(Being sales to Mohan omitted, now rectified through Suspense)
```

*Example:* Sales Returns Book was overcast by ₹1,000. Rectification:
```
Suspense A/c           Dr.  1,000
   To Sales Returns A/c                1,000
(Being overcasting of Sales Returns rectified)
```

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
