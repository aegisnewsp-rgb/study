---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-004
topicName: Trial Balance
weight: 3
country: cs
generated: "2026-03-25T17:00:00"
diagramPrompt: "Clean educational diagram showing the Trial Balance format with debit and credit columns, listing types of accounts (assets, liabilities, capital, revenues, expenses) and arrows indicating which side each account type appears on — white background, exam-style illustration, clear formatting"

---

# Trial Balance

The **Trial Balance** is a fundamental accounting statement prepared at the end of an accounting period (month, quarter, or year) that lists all the balances of every ledger account — both debit and credit — in a single statement. Its primary purpose is to verify the **arithmetic accuracy** of the double-entry bookkeeping system by checking whether the total of all debit balances equals the total of all credit balances. If the Trial Balance tallies (total debits = total credits), it provides reasonable assurance that the ledger postings are arithmetically correct — though it does not guarantee the absence of errors, as several types of errors can exist without affecting the equality of debits and credits.

The Trial Balance serves as the **bridge** between the ledger accounts and the final financial statements (Trading Account, Profit & Loss Account, and Balance Sheet). All accounts listed in the Trial Balance are used to prepare these statements. For the CS Executive examination, the Trial Balance is frequently tested — either as a direct question to prepare it from given ledger balances, or as a preliminary step in a larger final accounts question. A thorough understanding of what it captures — and crucially, what it misses — is essential for scoring well.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Purpose of Trial Balance:**
- Verifies arithmetical accuracy of double-entry system
- Acts as a summary of all ledger balances before financial statements
- Identifies whether total debits = total credits

**Normal Balances of Accounts (Memorise):**

| Account Type | Normal Balance | Examples |
|---|---|---|
| Assets | Debit | Cash, Bank, Debtors, Stock, Machinery, Furniture |
| Liabilities | Credit | Creditors, Bills Payable, Loans, Bank Overdraft |
| Capital | Credit | Capital A/c |
| Drawings | Debit | Drawings A/c |
| Revenue / Income | Credit | Sales, Commission Received, Rent Received, Interest Received |
| Purchases Returns | Credit | Returns Inward is debit, Returns Outward is credit |
| Sales Returns | Debit | Returns Inward A/c |
| Expenses | Debit | Rent, Salary, Wages, Carriage, Insurance, Discount Allowed |
| Purchases | Debit | Purchases A/c |

**Trial Balance Format:**
```
Trial Balance as at 31st March 2025

Particulars                    L.F.    Dr. (₹)    Cr. (₹)
-----------------------------------------------------------
Cash                           xxx     x,xxx
Bank                                    x,xxx
Sundry Debtors                              x,xxx
Stock (Opening)                             x,xxx
Machinery                                   x,xxx
Furniture                                   x,xxx
Sundry Creditors                                      x,xxx
Bills Payable                                        x,xxx
Capital                                              x,xxx
Drawings                           xxx
Purchases                                       x,xxx
Sales                                    x,xxx
Purchases Returns                               x,xxx
Sales Returns                                     x,xxx
Wages                                            x,xxx
Rent                                              x,xxx
Salaries                                          x,xxx
                                                  ------    ------
                                                  x,xxx    x,xxx
```

**Errors NOT Disclosed by Trial Balance (Memorise for Exam):**

| Error Type | Example |
|---|---|
| Errors of Omission | Sale of ₹5,000 to Ram completely omitted |
| Errors of Commission | Posted to wrong person's account (wrong debtor) |
| Errors of Principle | Revenue expenditure debited to Asset A/c |
| Compensating Errors | Sales undercast by ₹1,000 AND Purchases undercast by ₹1,000 |
| Complete Reversal | Dr. Sales A/c, Cr. Cash A/c for a cash sale |
| Errors of Original Entry | Both sides correct but wrong amount |

**Only Errors that Make Trial Balance NOT Tally:**
1. Posting to the wrong side of an account
2. Omitting to post one side of a journal entry
3. Wrong amount posted on one side only
4. Posting to a wrong account where that account has a different balance on each side

> **⚡ Exam Tip:** If the Trial Balance doesn't agree, first check for: (1) one-sided postings, (2) balancing errors, (3) wrong casting of any account, (4) accounts omitted entirely. The difference is often a simple transposition (e.g., ₹270 written as ₹720).

> **⚡ Exam Tip:** In exam questions, before preparing the Trial Balance, list all accounts with their balances and classify them correctly — assets/debit expenses on the debit side, liabilities/credit revenues/capital on the credit side. Common mistakes include putting Purchases Returns on the debit side or Sales Returns on the credit side — they are opposite of their parent accounts.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

#### 1. Meaning and Purpose of Trial Balance

A Trial Balance is a statement prepared with the help of ledger balances (or as a summary extracted directly from the books of accounts) to verify that the total of debit balances equals the total of credit balances. It is prepared in columnar form with debits in one column and credits in another, typically as at the last day of the accounting year.

**Objectives of Preparing a Trial Balance:**

1. **Arithmetic Verification:** To check whether the total of all debits equals the total of all credits, which is the fundamental requirement of double-entry bookkeeping.

2. **Summary of Ledger:** It provides a compact summary of all ledger accounts at one place, making it easy to review the state of the books before preparing financial statements.

3. **Error Detection:** While it detects some types of errors (one-sided postings, casting mistakes), it does not detect all errors — a tallied Trial Balance is a necessary but not sufficient condition for correct books.

4. **Base for Financial Statements:** The balances in the Trial Balance are directly used to prepare the Trading Account, Profit & Loss Account, and Balance Sheet.

5. **Quick Reference:** Management and auditors can quickly review the financial position from the Trial Balance without going through every ledger page.

**Preparation Methods:**

There are two methods of preparing a Trial Balance:

**Method 1: Total Method**
Both debit totals AND credit totals of each account are shown in the Trial Balance. Under this method, each account in the ledger is looked at and the total of its debit side and total of its credit side are entered in separate columns. This method is less commonly used in practice.

**Method 2: Balance Method (Most Common in Exams)**
Only the **balance** (debit or credit) of each account is shown in the Trial Balance. This is the standard method used in CS Executive exams and in practice.

| Account Type | What Appears in Trial Balance |
|---|---|
| Asset accounts with Debit balance | Shown on Debit side |
| Liability/Capital/Revenue with Credit balance | Shown on Credit side |
| Expense accounts with Debit balance | Shown on Debit side |
| Accounts with zero balance | Not shown |

#### 2. Format of Trial Balance

The standard format follows this structure:

```
Trial Balance as at 31st March 2025

Particulars           L.F.    Dr. (₹)    Cr. (₹)
--------------------------------------------------
Cash                           12,500
Bank                           45,000
Sundry Debtors                 80,000
Closing Stock                  25,000
Machinery                     200,000
Furniture                      30,000
Sundry Creditors                              55,000
Bills Payable                                  20,000
Capital                                    2,50,000
Drawings                    15,000
Purchases                 1,80,000
Sales                                       3,20,000
Purchases Returns                            12,000
Sales Returns                8,000
Wages                      22,000
Rent                        8,000
Salaries                   18,000
Carriage Inward             5,500
Carriage Outward            3,200
Discount Allowed             2,800
Discount Received                              4,000
Commission Received                             6,000
Bank Charges                1,000
                         ───────    ───────
                         6,57,000   6,57,000
```

#### 3. Classification of Errors

Understanding which errors affect the Trial Balance and which do not is critical for the CS Executive exam. Questions on error identification and rectification are frequently asked.

**Classification of Errors:**

**Category A: Errors that DO Make the Trial Balance NOT Tally**

These are errors where only ONE side of a transaction is affected, or where the effect on debit and credit sides is unequal:

1. **Posting to Wrong Side:** Debit entry credited instead of debited, or vice versa — the difference becomes 2× the amount
2. **Omission of One Side:** Entire credit (or debit) side of a transaction not posted — difference equals the full amount
3. **Wrong Amount on One Side Only:** Correct amount debited but wrong amount credited — difference equals the error amount
4. **Posting to Wrong Account (where accounts have different balances):** Affects two accounts differently, making totals unequal
5. **Incorrect Balancing:** An account incorrectly balanced — the balancing figure is wrong

**Category B: Errors that Do NOT Make the Trial Balance Tally**

These errors affect both debit and credit sides equally, so the Trial Balance still agrees even though books are incorrect:

**1. Errors of Omission (Complete):**
A transaction is entirely omitted from the books — neither debit nor credit is posted. The Trial Balance tallies because nothing was recorded at all.

*Example:* A credit sale to Arun for ₹15,000 is completely omitted — no entry made anywhere.

*Rectification:* Pass the omitted entry:
```
Arun A/c              Dr.  15,000
   To Sales A/c                     15,000
(Being credit sale to Arun omitted previously, now rectified)
```

**2. Errors of Commission:**
An entry is posted to the correct side but in the wrong person's account (wrong debtor/creditor).

*Example:* Sales of ₹8,000 to Vikram posted to the account of Deepak instead.

*Rectification:*
```
Vikram A/c           Dr.  8,000
   To Deepak A/c                     8,000
(Being error of commission rectified — amount posted to wrong person)
```

**3. Errors of Principle:**
An entry is posted to the correct side but to the wrong type of account (e.g., revenue item posted to an asset account instead of an expense account).

*Example:* Repairs to machinery ₹5,000 debited to Machinery A/c instead of Repairs A/c.

*Rectification:*
```
Repairs A/c          Dr.  5,000
   To Machinery A/c                     5,000
(Being repairs debited to wrong account — error of principle rectified)
```

**4. Compensating Errors:**
Two errors exist in opposite directions that cancel each other out.

*Example:* Sales undercast by ₹2,000 AND Purchases also undercast by ₹2,000 — Trial Balance tallies but both are wrong.

*Rectification:* Pass entries to correct both:
```
Suspense A/c / Sales A/c (as needed)        Dr./Cr.
   To/P from Suspense A/c                               (amount)
```

**5. Complete Reversal of Entries:**
Both debit and credit entries are posted on the wrong sides — i.e., what should have been debited is credited and vice versa.

*Example:* Cash received from Debtor ₹4,000 posted as: Dr. Cash A/c ₹4,000, Cr. Sales A/c ₹4,000 (instead of Dr. Cash, Cr. Debtor).

*Rectification:*
```
Debtor A/c           Dr.  8,000  (or net effect after reviewing)
   To Cash A/c                       4,000
   To Sales A/c                      4,000
(Being complete reversal of entries rectified)
```

**6. Errors of Original Entry:**
The correct amounts are recorded in the journal but at the wrong figure — both debit and credit are for the same wrong amount.

*Example:* Invoice for ₹7,000 recorded as ₹700 in the books (both sides equal but wrong).

*Rectification:*
```
Suspense A/c           Dr.  6,300
   To Sales A/c                       6,300
(Being wrong amount (₹700 instead of ₹7,000) corrected — difference = ₹6,300)
```

#### 4. Suspense Account — The Temporary Fix

When the Trial Balance doesn't agree, the **difference** is placed in a **Suspense Account**. The Suspense Account is a temporary account created to make the Trial Balance agree while errors are located and rectified.

**Creating the Suspense Account:**
- If Debit side < Credit side → Suspense Account has a **Credit Balance** (Short by Credit)
- If Debit side > Credit side → Suspense Account has a **Debit Balance** (Short by Debit)

**Example:**
Trial Balance doesn't agree — Debit side is ₹2,000 short:
```
Suspense A/c         Dr.  2,000
   (Difference placed here to make Trial Balance agree)
```

**Rectification through Suspense Account:**
Once an error is located, the Suspense Account is used to correct it. Eventually, when all errors are found, the Suspense Account becomes zero.

*Example:* A credit sale to Meera ₹6,000 was omitted — rectifying through Suspense:
```
Meera A/c            Dr.  6,000
   To Suspense A/c                     6,000
(Being omitted credit sale to Meera now rectified)
```

**Key Point:** When the Suspense Account has a credit balance (difference put on credit side), the rectification entry will debit Suspense A/c. When Suspense has a debit balance, the rectification entry will credit Suspense A/c.

#### 5. Golden Rules Application in Trial Balance Preparation

The trial balance preparation is essentially an application of the three golden rules of debit and credit:

| Account Type | Golden Rule | Debit/Credit | Normal Balance |
|---|---|---|---|
| Real — Assets | Debit what comes in, Credit what goes out | More = Debit | Debit |
| Personal — Person receiving | Debit the Receiver | More = Debit | Debit |
| Personal — Person giving | Credit the Giver | More = Credit | Credit |
| Nominal — Expenses/Losses | Debit all Expenses and Losses | More = Debit | Debit |
| Nominal — Revenues/Gains | Credit all Incomes and Gains | More = Credit | Credit |

**Steps to Prepare Trial Balance:**

1. Balance each ledger account (calculate Debit total and Credit total, find the difference)
2. List all accounts that have a **Debit balance** on the Debit side of Trial Balance
3. List all accounts that have a **Credit balance** on the Credit side of Trial Balance
4. Add both columns — they must be equal
5. If not equal, create a Suspense Account for the difference

#### 6. PYQ Patterns

1. **Prepare Trial Balance from given ledger balances** — Direct 8–10 marks question, usually 15–20 accounts given. Key: correctly classify each account and put them on the right side.
2. **Identify errors that make Trial Balance not tally vs. errors that don't** — 4–6 marks conceptual question. Be precise with examples.
3. **Rectification entries with Suspense Account** — 8–10 marks. Pass journal entries to rectify various errors and show how Suspense Account is closed.
4. **Trial Balance followed by Final Accounts** — A combined 15–20 marks question where Trial Balance is prepared first, then Trading/P&L/Balance Sheet is prepared from it.

> **Question from June 2023 CS Executive:** *"From the following balances, prepare the Trial Balance as on 31st March 2023: Capital ₹2,00,000; Machinery ₹1,50,000; Opening Stock ₹40,000; Purchases ₹3,20,000; Sales ₹4,50,000; Wages ₹20,000; Salaries ₹15,000; Rent ₹8,000; Debtors ₹60,000; Creditors ₹45,000; Cash at Bank ₹42,000; Cash in Hand ₹5,000; Drawings ₹10,000; Return Inwards ₹12,000; Return Outwards ₹7,000; Carriage Inward ₹4,000; Carriage Outward ₹2,500; Bad Debts ₹1,500; Provision for Doubtful Debts ₹3,000; Commission Received ₹5,000."* [10 marks]

**Approach:** Start by listing all accounts in two groups — Debit balances (Assets + Expenses + Returns Inwards + Drawings) and Credit balances (Liabilities + Capital + Revenues + Returns Outwards + Provisions). Then prepare the format. Commission Received and Provision for Doubtful Debts go on the Credit side.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

#### 1. Comprehensive Study of Errors and Their Rectification

**Understanding the Nature of Errors:**

All accounting errors fall into two broad categories based on their effect on the Trial Balance:

**Trial Balance-Tallying Errors (Both sides equally affected):**
These errors, by definition, affect both debit and credit sides equally — either because both sides are recorded correctly at the wrong amount, or because both sides are recorded to wrong accounts in a way that the net effect cancels out.

**Trial Balance-Not-Tallying Errors (One side only affected):**
These are one-sided errors — where the debit or credit side of an entry is incorrectly recorded, omitted, or posted to the wrong account in a way that changes the equality of the Trial Balance.

**Detailed Rectification Framework:**

**Step 1: Identify the Type of Error**

| Scenario | Error Type | Rectification Direction |
|---|---|---|
| Transaction completely omitted | Error of Omission | Pass full entry |
| Posted to correct side but wrong person | Error of Commission | Transfer from wrong to correct |
| Posted to correct side but wrong type of account | Error of Principle | Transfer from wrong type to correct type |
| Both sides posted correctly but at wrong amount | Error of Original Entry | Correct the amount via Suspense |
| Debit and credit completely reversed | Complete Reversal | Two entries needed to correct |
| Two independent errors cancel each other | Compensating Error | Rectify each individually |
| One side posted, other side omitted | One-sided Error | Use Suspense to make TB agree |

**Step 2: Decide Whether to Use Suspense Account**

- If Trial Balance is already prepared and tallied: Rectify directly without Suspense
- If Trial Balance was not tallied and Suspense Account exists: Use Suspense Account to rectify

**Step 3: Pass the Rectification Journal Entry**

Every rectification entry must:
1. Explain clearly what error is being rectified
2. Identify the wrong account (debit or credit)
3. Identify the correct account
4. Use Suspense if Trial Balance was not tallied

**Comprehensive Examples:**

*Example 1: Error of Commission*
Sales of ₹12,000 to Rakesh was posted to the account of Rajesh.

```
Rakesh A/c           Dr.  12,000
   To Rajesh A/c                     12,000
(Being sales of ₹12,000 posted to wrong person — error of commission rectified)
```

*Example 2: Error of Principle*
Amount spent on repair of building ₹8,000 was debited to Building A/c (Capital expenditure instead of Revenue).

```
Building Repairs A/c     Dr.  8,000
   To Building A/c                       8,000
(Being repairs to building wrongly debited to asset — error of principle rectified)
```

*Example 3: Error of Original Entry*
Goods sold to Ashok for ₹6,000 was recorded as ₹600 in the books (both debit and credit sides wrong by the same amount).

```
Ashok A/c           Dr.  5,400
   To Sales A/c                       5,400
(Being undercasting of sales by ₹5,400 (6,000 – 600) rectified)
```

*Example 4: Complete Reversal*
Cash received from debtor Rahul ₹9,000 was incorrectly recorded as: Dr. Creditors A/c ₹9,000 and Cr. Cash A/c ₹9,000 (completely reversed).

```
Cash A/c            Dr.  18,000
Rahul A/c           Dr.  9,000
   To Creditors A/c                   27,000
(Being complete reversal of entries corrected — cash received from Rahul was wrongly debited to Creditors)
```

*Example 5: Compensating Error*
Wages account was undercast by ₹3,000 AND Commission Received was also undercast by ₹3,000 — Trial Balance tallies but both accounts are wrong.

```
Wages A/c          Dr.  3,000
   To Commission Received A/c          3,000
(Being compensating error of undercasting rectified)
```

*Example 6: One-Sided Error (Posting Omitted)*
A credit purchase of goods from Vikas ₹25,000 was not posted to the ledger at all.

```
Purchases A/c      Dr.  25,000
   To Vikas A/c                       25,000
(Being credit purchase from Vikas not posted, now rectified through Suspense A/c)
```

#### 2. Advanced Trial Balance Preparation

**When Some Accounts Have No Balance:**
Some accounts may have equal debits and credits (they balance to zero) — these are NOT shown in the Trial Balance. Only accounts with a net debit or credit balance appear.

**Contra Entries in Trial Balance:**
Some accounts like "Bank" and "Cash" are sometimes called "Contra Accounts" when they appear on both sides of the Trial Balance in different capacities (e.g., Bank overdraft on the credit side and Cash on the debit side). However, the term "contra" in Trial Balance context is less significant — what matters is the nature of the balance.

**Trial Balance vs. Balance Sheet:**
- Trial Balance is an **internal document** — not a financial statement
- Balance Sheet is an **external financial statement** — presented to stakeholders
- Both list assets (debit) and liabilities + capital (credit), but the Balance Sheet includes adjustments (closing stock, provisions, prepaid/accrued items) that may not appear in the Trial Balance

**Adjusted Trial Balance:**
When a Trial Balance is prepared after considering all adjustments (depreciation, provisions, prepaid expenses, outstanding expenses, closing stock), it is called an **Adjusted Trial Balance**. This is the basis for preparing the final financial statements.

#### 3. Comprehensive Practice Problem

**Problem: Prepare the Trial Balance from the following ledger balances of M/s Karan Traders as on 31st March 2025:**

| Account | Balance (₹) | Nature |
|---|---|---|
| Capital | 3,00,000 | Credit |
| Land & Building | 1,50,000 | Debit |
| Plant & Machinery | 2,00,000 | Debit |
| Furniture | 40,000 | Debit |
| Opening Stock | 50,000 | Debit |
| Purchases | 4,50,000 | Debit |
| Sales | 6,20,000 | Credit |
| Purchases Returns | 15,000 | Credit |
| Sales Returns | 18,000 | Debit |
| Wages | 30,000 | Debit |
| Salaries | 45,000 | Debit |
| Rent | 12,000 | Debit |
| Insurance | 5,000 | Debit |
| Sundry Debtors | 75,000 | Debit |
| Sundry Creditors | 48,000 | Credit |
| Bills Receivable | 20,000 | Debit |
| Bills Payable | 15,000 | Credit |
| Cash at Bank | 55,000 | Debit |
| Cash in Hand | 8,000 | Debit |
| Drawings | 20,000 | Debit |
| Bank Charges | 1,500 | Debit |
| Discount Allowed | 4,000 | Debit |
| Discount Received | 3,500 | Credit |
| Commission Received | 7,000 | Credit |

**Solution:**
```
Trial Balance of M/s Karan Traders as on 31st March 2025

Particulars                    L.F.    Dr. (₹)    Cr. (₹)
----------------------------------------------------------
Land & Building                        1,50,000
Plant & Machinery                      2,00,000
Furniture                                40,000
Opening Stock                            50,000
Purchases                              4,50,000
Sales Returns                            18,000
Wages                                    30,000
Salaries                                45,000
Rent                                     12,000
Insurance                                5,000
Sundry Debtors                          75,000
Bills Receivable                        20,000
Cash at Bank                             55,000
Cash in Hand                              8,000
Drawings                                 20,000
Bank Charges                              1,500
Discount Allowed                          4,000
Sundry Creditors                                    48,000
Bills Payable                                      15,000
Capital                                         3,00,000
Sales                                           6,20,000
Purchases Returns                                 15,000
Discount Received                                  3,500
Commission Received                                7,000
                                  ───────    ───────
                                  11,33,500  11,33,500
```

#### 4. Error Detection Sequence for Non-Tallying Trial Balance

When a Trial Balance doesn't agree, follow this systematic sequence:

**Step 1: Re-check the Totals**
- Verify addition of both columns
- Check for copying errors from ledger to Trial Balance
- Check for amounts written in wrong columns (debit amount in credit column, etc.)

**Step 2: Check the Difference**
- Halve the difference — if it becomes zero, a figure may have been posted to the wrong side
- Check if the difference is divisible by 9 — if yes, it could be a transposition error (e.g., 108 written as 801, difference = 693, 693/9 = 77)
- Check if the difference is divisible by 2 — if yes, it could be posting to the wrong side of an account

**Step 3: Locate the Error**
- Check each account balance against its ledger page
- Verify all opening balances are brought forward correctly
- Check for accounts with only one entry (debit or credit posted but not the other)

**Step 4: Create Suspense Account and Rectify**
- Place the difference in Suspense Account (on the lighter side)
- Systematically locate and rectify errors
- Each rectification will reduce the Suspense Account balance
- When all errors are found, Suspense Account becomes zero

#### 5. Special Considerations in Trial Balance

**Accounts with Both Debit and Credit Balances:**
Some accounts (like bank overdraft) are technically liabilities and show a credit balance, not a debit balance — even though the bank account is involved. In a properly maintained cash book, "Bank" always shows a debit balance (positive bank balance), while "Bank Overdraft" or "Loan (Bank)" shows a credit balance.

**Petty Cash Book and Trial Balance:**
The Imprest amount of petty cash (e.g., ₹5,000) appears as cash in hand in the Trial Balance. The analysis columns in the Petty Cash Book are for internal analysis only and do not affect the Trial Balance directly.

**Closing Stock and Trial Balance:**
Closing Stock appears on the **Credit side** of the Trial Balance because it is a reduction of Purchases (it is not a liability, but its inclusion as closing inventory reduces the expense of closing stock). However, in the final accounts, Closing Stock appears as an asset on the Balance Sheet and as a credit in the Trading Account.

**Depreciation and Trial Balance:**
Accumulated Depreciation appears on the **Credit side** of the Trial Balance because it is a contra-asset account (it reduces the book value of the asset). The depreciation expense for the year appears on the Debit side.

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*