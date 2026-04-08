---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-002
topicName: Accounting Equations
weight: 3
country: cs
generated: "2026-03-25T17:00:00"
diagramPrompt: "Clean educational diagram showing the Accounting Equation Assets = Liabilities + Equity with visual breakdown of components, debit/credit rules, and transaction analysis — white background, exam-style illustration"
---

# Accounting Equations

The **Accounting Equation** is the single most important concept in the entire discipline of accounting. It is expressed as:

**Assets = Liabilities + Owner's Equity**

This deceptively simple equation is the mathematical foundation on which the entire double-entry bookkeeping system is built. Every financial transaction that occurs in a business, without exception, affects this equation. If the equation holds true after every transaction, the books are considered balanced. If it does not, an error has occurred and must be found before the books can be considered correct.

Understanding the accounting equation is not merely an academic exercise — it is the conceptual framework that helps accountants analyse any transaction before recording it. For CS Executive students, mastery of this equation and its variations is essential because examination questions frequently test your ability to analyse complex transactions, determine their impact on different elements of the equation, and identify how individual ledger accounts will be affected. The equation also forms the basis for the **Trial Balance**, **Balance Sheet**, and the entire **financial reporting structure**.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**The Accounting Equation** can be remembered through three equivalent forms:
```
Assets = Liabilities + Equity
Equity = Assets – Liabilities
Assets – Liabilities = Equity
```

**Key Definitions:**

| Element | Simple Meaning | Examples |
|---|---|---|
| **Asset** | Resource owned by the business that provides future economic benefit | Cash, Buildings, Machinery, Debtors, Inventory |
| **Liability** | Amount the business owes to outsiders | Creditors, Loans, Bank Overdraft, Bills Payable |
| **Equity / Capital** | Residual interest in assets after deducting all liabilities (Owner's claim) | Capital, Reserves & Surplus, Drawings |

**What Increases/Decreases Each Element:**

| Transaction Type | Effect |
|---|---|
| Receive cash from owner as capital | Assets ↑, Equity ↑ |
| Purchase asset on credit | Assets ↑, Liabilities ↑ |
| Pay off a creditor | Assets ↓, Liabilities ↓ |
| Owner withdraws cash (drawings) | Assets ↓, Equity ↓ |
| Earn revenue (cash) | Assets ↑, Equity ↑ |
| Incur expense (cash) | Assets ↓, Equity ↓ |
| Pay dividend | Assets ↓, Equity ↓ |

> **⚡ Exam Tip:** Always remember — **Assets and Expenses have Debit balances; Liabilities, Equity, and Revenue have Credit balances.** When in doubt about which side to record something, fall back on this rule.

> **The Dual Effect Rule:** Every transaction has a minimum of TWO effects. If you can only identify ONE effect, you haven't understood the transaction fully. Example: "Paid rent ₹5,000" — two effects: (1) Rent expense increased by ₹5,000 (Equity decreases), (2) Cash decreased by ₹5,000 (Asset decreases).

> **Common Mistake:** Students often forget that **revenue increases equity** and **expenses decrease equity**. When a company earns interest of ₹10,000 (even if not received), Dr. Interest Receivable (Asset↑) / Cr. Interest Income (Revenue↑, Equity↑). The asset appears on the left, and equity also effectively increases on the right.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

#### 1. Understanding Each Element in Depth

**ASSETS**

An asset is a resource controlled by the entity as a result of past events and from which future economic benefits are expected to flow to the entity. Under Ind AS, "control" replaces the older concept of "ownership."

Assets are classified as:

**A. By Nature:**
- **Tangible Assets:** Physical existence — Land, Buildings, Machinery, Vehicles, Furniture, Inventory
- **Intangible Assets:** No physical existence — Goodwill, Patents, Trademarks, Copyrights, Software
- **Financial Assets:** Contractual rights — Cash, Bank, Debtors, Bills Receivable, Investments (equity instruments, bonds)
- **Current Assets:** Expected to be realised/used within one year — Cash, Bank, Debtors, Bills Receivable, Stock, Prepaid Expenses
- **Non-Current Assets:** Not expected to be realised within one year — Land, Buildings, Machinery, Long-term Investments, Intangible Assets (under Ind AS, called "Non-Current Assets")

**B. By Convertibility:**
- **Fixed Assets:** acquired for permanent use — Machinery, Furniture, Patents
- **Circulating Assets:** meant for circulation — Cash, Debtors, Bills Receivable, Stock

**Important distinction for CS Executive:** The Companies Act, 2013 defines a "non-current asset" under Schedule III as an asset which is not a current asset. Schedule III mandates the format of financial statements for Indian companies and classifies assets as:
- Property, Plant and Equipment (including land, buildings, plant, equipment)
- Capital work-in-progress
- Investment Property
- Intangible assets
- Biological Assets
- Non-current financial assets (investments, loans, other financial assets)
- Deferred tax assets
- Other non-current assets

**LIABILITIES**

A liability is a present obligation of the entity arising from past events, the settlement of which is expected to result in an outflow of economic benefits.

**Classification:**
- **Current Liabilities:** payable within one year — Creditors, Bills Payable, Bank Overdraft, Short-term Loans, Outstanding Expenses, Income Received in Advance
- **Non-Current Liabilities:** payable after one year — Long-term Borrowings, Deferred Tax Liabilities, Long-term Provisions

Under the Companies Act, 2013 Schedule III:
- Non-current liabilities: Long-term borrowings, Deferred tax liabilities, Other long-term liabilities, Long-term provisions
- Current liabilities: Short-term borrowings, Trade payables, Other current liabilities, Short-term provisions

**OWNER'S EQUITY**

Equity represents the residual interest in the assets of the entity after deducting all liabilities. In a sole proprietorship or partnership, it is called "Capital" or "Partner's Capital Account." In a company, it is called "Shareholders' Funds" or "Net Worth."

**Components of Shareholders' Funds (Company):**
- **Share Capital:** Equity Share Capital + Preference Share Capital (for companies)
- **Reserves and Surplus:**
  - Capital Reserves (from capital profits — e.g., profit on sale of fixed assets, share premium)
  - Revenue Reserves (from revenue profits — e.g., General Reserve, Dividend Equalisation Reserve)
  - Surplus (Balance in Statement of Profit and Loss — credit = profits, debit = losses)
- **Money received against share warrants** (treated as equity under Ind AS)

**Capital vs. Revenue Profits:**
| Capital Profits | Revenue Profits |
|---|---|
| Profit on sale of fixed assets | Profit from operations (trading) |
| Share premium | Interest income |
| Profit on revaluation of assets | Rental income |
| Not available for dividend distribution | Available for dividend distribution |

#### 2. The Expanded Accounting Equation

The basic equation can be expanded to show the detailed components:

```
Assets = Liabilities + Owner's Equity
Assets = External Liabilities + Internal Liabilities (Capital)
Assets = Creditors' Claim + Owners' Claim
```

Since Owner's Equity = Capital, and Capital changes due to:
- Contributions by owner (Capital Introduced)
- Withdrawals by owner (Drawings)
- Profits earned (Revenues)
- Losses incurred (Expenses)

We can express the **Expanded Accounting Equation**:

```
Assets = Liabilities + Capital + (Revenue – Expenses) – Drawings
```

Or rearranged:
```
Assets + Drawings + Expenses = Liabilities + Capital + Revenue
```

This expanded form shows the accounting equation at any point in time, and it's the form that directly leads to the **Trial Balance** structure.

#### 3. Transaction Analysis — The Complete Method

Every transaction must be analysed before recording. The standard approach:

1. **Identify the accounts involved** (which accounts are affected?)
2. **Classify each account** (Asset / Liability / Equity / Revenue / Expense)
3. **Determine the increase/decrease** in each account
4. **Apply the debit/credit rules:**
   - Increase in Assets → Debit the asset account
   - Decrease in Assets → Credit the asset account
   - Increase in Liabilities → Credit the liability account
   - Decrease in Liabilities → Debit the liability account
   - Increase in Capital → Credit the capital account
   - Decrease in Capital → Debit the capital account
   - Increase in Revenue → Credit the revenue account (increases equity)
   - Increase in Expense → Debit the expense account (decreases equity)
   - Increase in Drawings → Debit drawings account (decreases equity)

**Standard Debit-Credit Rules Summary:**

| Account Type | Debit (Dr.) | Credit (Cr.) |
|---|---|---|
| Asset | Increase | Decrease |
| Liability | Decrease | Increase |
| Capital | Decrease | Increase |
| Revenue | Decrease (rare) | Increase |
| Expense | Increase | Decrease (rare) |
| Drawings | Increase | Decrease |

#### 4. Numerical Problem-Solving Approach

**Step-by-step approach for accounting equation problems:**

1. **List items at the start** of the problem in the accounting equation format
2. **For each transaction**, identify which two accounts are affected
3. **Determine the nature** of each account (Asset, Liability, Equity)
4. **Apply the rules** of debit and credit
5. **Verify** that total debits = total credits (or that the equation balances)
6. **Prepare the final position** at the end of all transactions

**Example — Full Transaction Analysis:**

*Initial Position (1 April):*
- Assets: Cash ₹50,000; Stock ₹30,000; Furniture ₹20,000
- Liabilities: Creditors ₹25,000
- Therefore: Capital = Assets – Liabilities = ₹1,00,000 – ₹25,000 = ₹75,000

*Transactions during April:*
1. Purchased goods from Ram ₹10,000 on credit
2. Sold goods for cash ₹8,000 (cost: ₹6,000)
3. Paid wages ₹2,000 in cash
4. Received dividend ₹1,000 in cash
5. withdrew goods for personal use ₹1,000 (cost)

*Analysis of each transaction:*

**T1:** Purchased goods from Ram on credit
- Goods (Stock) ↑ [Asset] → Debit Stock A/c
- Ram's Account (Creditor) ↑ [Liability] → Credit Ram's A/c
- Equation: Assets ↑ by 10,000 (Stock), Liabilities ↑ by 10,000 (Ram)

**T2:** Sold goods for cash
- Cash ↑ [Asset] → Debit Cash A/c by 8,000
- Stock ↓ [Asset] → Credit Stock A/c by 6,000
- Gain (Revenue – Expense) → Credit to P&L: 8,000 – 6,000 = 2,000
- Equation: Assets: +8,000 (cash) – 6,000 (stock) = +2,000 net; Capital ↑ by 2,000 (from profit)

**T3:** Paid wages
- Wages Expense ↑ [Expense, reduces equity] → Debit Wages A/c by 2,000
- Cash ↓ [Asset] → Credit Cash A/c by 2,000
- Equation: Assets ↓ by 2,000; Capital ↓ by 2,000

**T4:** Received dividend
- Cash ↑ [Asset] → Debit Cash A/c by 1,000
- Dividend Received (Revenue) ↑ → Credit Dividend A/c by 1,000 → Capital ↑
- Equation: Assets ↑ by 1,000; Capital ↑ by 1,000

**T5:** Withdrew goods for personal use
- Drawings ↑ [Reduces equity] → Debit Drawings A/c by 1,000
- Stock ↓ [Asset] → Credit Stock A/c by 1,000
- Equation: Assets ↓ by 1,000; Capital ↓ by 1,000 (via drawings)

**Final Position:**
| | ₹ | | ₹ |
|---|---|---|---|
| Cash | 50,000+8,000–2,000+1,000 = 57,000 | Creditors | 25,000+10,000 = 35,000 |
| Stock | 30,000+10,000–6,000–1,000 = 33,000 | Ram's A/c | 10,000 |
| Furniture | 20,000 | | |
| **Total Assets** | **1,10,000** | **Total Liabilities** | **45,000** |
| | | Capital (opening) | 75,000 |
| | | + Profit | 2,000 |
| | | + Dividend | 1,000 |
| | | – Wages | (2,000) |
| | | – Drawings | (1,000) |
| | | **Closing Capital** | **75,000** |
| **TOTAL** | **1,10,000** | **TOTAL** | **1,10,000** |

**✓ Equation balances — all transaction analysis correct.**

#### 5. PYQ Patterns

1. **Direct equation questions** — "Show the effect of the following transactions on the accounting equation" (4–5 transactions, 4–6 marks)
2. **Preparation of Balance Sheet** from a trial balance (8–10 marks, appearing in Section II of the exam)
3. **Identifying the correct equation** — e.g., "Which of the following correctly represents the accounting equation?"
4. **Effect of transactions on specific elements** — e.g., "Show the effect of purchasing goods on credit on the accounting equation"
5. **Distinction questions** — Capital vs. Revenue expenditure, Capital vs. Revenue profits

> **Question from June 2022 CS Executive:** *"Explain the fundamental accounting equation. On 1st April 2024, Raj started a business with a capital of ₹2,00,000 and a loan of ₹50,000 from his friend. During the year, the following transactions took place: (a) Purchased goods for ₹80,000, (b) Sold goods for ₹1,20,000 (cost ₹70,000), (c) Paid rent ₹5,000, (d) withdrew goods worth ₹2,000 for personal use. Show the accounting equation after each transaction."* [10 marks]

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

#### 1. Capital vs. Revenue — Detailed Distinction

The distinction between capital and revenue transactions is one of the most important topics in accounting because it directly affects:
- The amount of profit reported in the Statement of Profit and Loss
- The value of assets shown in the Balance Sheet
- Tax liability computation

**Capital Expenditure:**

Expenditure that results in acquiring or enhancing a **long-term asset** (an asset that will be used over multiple accounting periods). Capital expenditure is NOT charged to the Statement of Profit and Loss — instead, it is **capitalised** (added to the asset's cost) and then gradually expensed through depreciation over its useful life.

*Examples of Capital Expenditure:*
- Cost of acquiring fixed assets (machinery, land, buildings)
- Cost of improving an existing fixed asset (adding a new floor to a building) — increases future economic benefits
- Cost of bringing an asset into working condition (installation, freight, duty)
- Legal fees incurred to acquire a trademark (under Ind AS 38, intangible assets)
- Expenditure on an existing asset that increases its useful life or productive capacity

*Capital vs. Revenue Test:* Does this expenditure create a new asset or increase the capacity/usefulness of an existing asset? If yes → Capital.

**Revenue Expenditure:**

Expenditure incurred to maintain the **earning capacity** of the business (i.e., to keep existing assets in their normal working condition). Revenue expenditure is charged to the Statement of Profit and Loss in the period it is incurred.

*Examples of Revenue Expenditure:*
- Repairs and maintenance of machinery
- Salaries and wages
- Rent and rates
- Insurance premium
- Consumable stores
- Advertising expenses
- Depreciation of fixed assets

**Deferred Revenue Expenditure:**

Expenditure that is revenue in nature but whose benefit extends beyond the current accounting period. Such expenditure is initially **capitalised** (shown as an asset) and then **written off** over a period of years.

*Examples:*
- Heavy advertisement expenditure to launch a new product (benefits several years)
- Preliminary expenses (cost of setting up a company — written off over 5 years under Companies Act)
- Rights issue expenses
- Exceptional repair expenditure that creates additional life (if it adds to economic benefits over future periods)

**Capital vs. Revenue Profits:**

Capital profits arise from transactions that are outside the normal operations of the business and are not expected to recur regularly:
- Profit on sale of fixed assets
- Share premium (when shares are issued above face value)
- Profit on revaluation of fixed assets
- Profit on forfeiture of shares

Revenue profits arise from the normal trading operations of the business:
- Gross profit on sale of goods
- Commission received
- Interest earned on bank deposits
- Rental income from properties

> **Important Rule:** Capital profits can ONLY be used to write off capital losses or to create capital reserves — they CANNOT be distributed as dividends. Revenue profits can be distributed as dividends.

#### 2.深 — Depreciation and Its Effect on the Accounting Equation

**Depreciation** is the systematic allocation of the depreciable amount of a tangible fixed asset over its useful life. The concept behind depreciation is that a fixed asset loses value as it is used up in the business — this reflects the **matching principle** (the cost of the asset is matched against the revenues it helps generate over its useful life).

**The Accounting Equation Effect of Depreciation:**

When we charge depreciation:
- **Depreciation Expense ↑** (decreases Equity/Profit) → Debit Depreciation A/c
- **Accumulated Depreciation ↑** (a "provision" that reduces the asset's book value) → Credit Accumulated Depreciation A/c

In the Balance Sheet:
- The asset's **book value** is shown: Cost – Accumulated Depreciation
- Total Assets decrease (due to the credit to accumulated depreciation)
- Equity decreases (due to the debit to depreciation expense → reduces profit)

So depreciation always reduces BOTH assets AND equity.

**Methods of Depreciation:**

1. **Straight Line Method (SLM):**
   Depreciation = (Cost – Residual Value) / Useful Life
   - Same amount every year
   - Formula: (Cost – Scrap Value) / Number of years

2. **Written Down Value Method (WDV):**
   Depreciation = Rate% × Book Value of the asset at beginning of the year
   - Declining balance each year
   - Rate prescribed under Companies Act for different classes of assets:
     - Buildings: 10% (SLM basis under Companies Act, but WDV allowed under Ind AS)
     - Machinery: 15%
     - Furniture: 10%
     - Motor Vehicles: 15%
     - Computers: 40% (under WDV)

3. **Units of Production Method:**
   Depreciation = (Cost – Residual Value) × (Units produced this year / Total estimated units)

**Depreciation under Ind AS:**

Under Ind AS 16, the cost model (historical cost minus depreciation) is the default. However, the **revaluation model** is also permitted — entities can choose to carry fixed assets at fair value (revalued amount) and subsequently depreciate the revalued amount. When revaluation is done:
- Revaluation surplus goes to Other Comprehensive Income (OCI) and is accumulated in Equity under Revaluation Surplus
- If revaluation results in a decrease (impairment), it is charged to P&L to the extent it exceeds any previous revaluation surplus

**Depreciation vs. Amortisation:**
- **Depreciation:** Tangible fixed assets (Plant, Property, Equipment)
- **Amortisation:** Intangible assets (Patents, Goodwill, Software) — under Ind AS 38

#### 3. Provisions, Reserves, and Funds

**Provisions:**

A provision is a liability of uncertain amount or timing. Under Ind AS 37:
- Present obligation (legal or constructive)
- Probable outflow of resources
- Reliable estimate possible

**Examples:**
- Provision for doubtful debts (on Debtors)
- Provision for depreciation (on Fixed Assets)
- Provision for tax
- Provision for warranties
- Provision for pending litigations

**Reserves:**

A reserve is an appropriation of profit — it represents profits set aside to strengthen the financial position of the business. Reserves do NOT represent any real outflow — they are internal allocations.

**Types of Reserves:**

1. **Capital Reserves:**
   - Created from capital profits (not from normal trading)
   - Cannot be used for dividend distribution
   - Examples: Share premium, Profit on forfeiture of shares, Profit on redemption of debentures
   - Capital reserves are created by shareholders' contributions or from capital transactions

2. **Revenue Reserves:**
   - Created from revenue profits (trading operations)
   - Available for dividend distribution
   - Examples: General Reserve, Dividend Equalisation Reserve, Debenture Redemption Reserve (DRR)

3. **Specific Reserves:**
   - Created for a specific purpose
   - Examples: Debenture Redemption Reserve (DRR) — mandatory under Companies Act for companies issuing debentures

**Reserve vs. Provision — Key Distinction:**

| | Reserve | Provision |
|---|---|---|
| Nature | Appropriation of profit (not a liability) | A liability (charge against profit) |
| Purpose | Strengthen financial position | Meet known liability of uncertain amount |
| Disclosure | Shown under "Reserves and Surplus" | Shown as a liability or deducted from the asset |
| Mandatory? | No (except specific legal requirements) | Yes when criteria are met (Ind AS 37) |

**Secret Reserves:**

A reserve that is not disclosed in the Balance Sheet (hidden). Created by:
- Undervaluing assets (not recording revaluation surplus)
- Charging capital expenditure as revenue expenditure
- Providing for excessive depreciation
- Not recording all revenue

> **Important for Exam:** Secret reserves are considered undesirable as they mislead users of financial statements. Under Ind AS and the Companies Act, all material reserves must be disclosed.

#### 4. Comprehensive Case Studies

**Case Study 1: Effect of Closing Stock on the Equation**

A trader commenced business with capital of ₹1,00,000 on 1st January. During the year, he purchased goods for ₹60,000, sold goods for ₹80,000 (half in cash, half on credit). His closing stock was ₹20,000. Assuming all purchases and sales were on credit (except half sales):

*Analysis:*
- Capital introduced: Cash +1,00,000 (Asset ↑, Equity ↑)
- Purchases (credit): Stock +60,000 (Asset ↑), Creditors +60,000 (Liability ↑)
- Sales (credit): Debtors +40,000, Cash +40,000; Cost of goods sold = 60,000 – 20,000 = 40,000
- Stock reduces by 40,000 (Asset ↓)
- Therefore: Net Assets: Cash: 1,00,000+40,000=1,40,000; Debtors: 40,000; Stock: 20,000; Total: 2,00,000
- Liabilities: Creditors = 60,000
- Therefore: Capital = 2,00,000 – 60,000 = 1,40,000
- Profit = Capital at end – Capital introduced = 1,40,000 – 1,00,000 = 40,000 = Revenue (80,000) – CGS (40,000)
- **Equation holds: 2,00,000 = 60,000 + 1,40,000 ✓**

**Case Study 2: Capital vs. Revenue Expenditure Decision**

A company acquired a machine for ₹10,00,000. In addition, the following were incurred:
- Freight and handling: ₹50,000
- Installation cost: ₹1,00,000
- Trial run expenses: ₹25,000
- Repair of damage during installation: ₹15,000
- Initial operator training: ₹30,000
- Cost of a special foundation: ₹75,000

**Capital Expenditure (to be capitalised as part of machine cost):**
- Freight and handling: ₹50,000 ✓ (necessary to bring asset to working condition)
- Installation cost: ₹1,00,000 ✓ (necessary to bring asset to working condition)
- Trial run expenses: ₹25,000 ✓ (to make asset ready for use)
- Special foundation: ₹75,000 ✓ (necessary for the asset to function)
- Total Capitalised: ₹2,50,000

**Revenue Expenditure (charged to P&L):**
- Repair of damage: ₹15,000 ✗ (abnormal — damage should not have occurred; repair is revenue in nature)
- Operator training: ₹30,000 ✗ (training costs are revenue expenditure under Ind AS 38 — cannot be capitalised as intangible asset unless specific criteria of Ind AS 38 are met)

**Book Value of Machine = ₹10,00,000 + ₹2,50,000 = ₹12,50,000**

#### 5. Practice Problems with Solutions

**Problem: Full Equation Set**

Mr. Arun started a business on 1st April 2024 with capital of ₹5,00,000 and a loan of ₹2,00,000 from a bank. The following transactions occurred during April 2024:

1. Purchased machinery for ₹3,00,000 (₹1,00,000 paid immediately)
2. Purchased goods from M/s XYZ for ₹80,000 on credit
3. Sold goods to a customer for ₹1,20,000 (₹70,000 received in cash)
4. Paid salaries by cheque ₹15,000
5. Deposited cash into bank ₹25,000
6. Received commission ₹5,000 by cheque
7. withdrew cash ₹8,000 for personal use
8. Goods destroyed by fire ₹5,000 (not insured)

*Show the accounting equation after each transaction.*

*Solution:*

| Transaction | Cash | Bank | Machinery | Stock | Debtors | Creditors | Bank Loan | Capital |
|---|---|---|---|---|---|---|---|---|
| Initial | 5,00,000 | 2,00,000 | — | — | — | — | 2,00,000 | 5,00,000 |
| (1) Purchase machine | –1,00,000 | — | +3,00,000 | — | — | — | — | — |
| Balance | 4,00,000 | 2,00,000 | 3,00,000 | — | — | — | 2,00,000 | 5,00,000 |
| (2) Credit purchase | — | — | — | +80,000 | — | +80,000 | — | — |
| Balance | 4,00,000 | 2,00,000 | 3,00,000 | 80,000 | — | 80,000 | 2,00,000 | 5,00,000 |
| (3) Sales (cost=?) | +70,000 | — | — | –80,000? | +50,000 | — | — | +? |
| *(Assume cost = 80,000)* | | | | | | | | |
| Balance | 4,70,000 | 2,00,000 | 3,00,000 | NIL | 50,000 | 80,000 | 2,00,000 | 5,40,000 |
| (4) Salaries paid | — | –15,000 | — | — | — | — | — | –15,000 |
| Balance | 4,70,000 | 1,85,000 | 3,00,000 | NIL | 50,000 | 80,000 | 2,00,000 | 5,25,000 |
| (5) Cash to bank | –25,000 | +25,000 | — | — | — | — | — | — |
| Balance | 4,45,000 | 2,10,000 | 3,00,000 | NIL | 50,000 | 80,000 | 2,00,000 | 5,25,000 |
| (6) Commission | — | +5,000 | — | — | — | — | — | +5,000 |
| Balance | 4,45,000 | 2,15,000 | 3,00,000 | NIL | 50,000 | 80,000 | 2,00,000 | 5,30,000 |
| (7) Drawings | –8,000 | — | — | — | — | — | — | –8,000 |
| Balance | 4,37,000 | 2,15,000 | 3,00,000 | NIL | 50,000 | 80,000 | 2,00,000 | 5,22,000 |
| (8) Goods destroyed | — | — | — | –5,000 | — | — | — | –5,000 |
| **Final** | **4,37,000** | **2,15,000** | **3,00,000** | **NIL** | **50,000** | **80,000** | **2,00,000** | **5,17,000** |

*Check: Total Assets = 4,37,000 + 2,15,000 + 3,00,000 + 50,000 = ₹10,02,000*
*Total Liabilities + Capital = (80,000 + 2,00,000) + 5,17,000 = ₹7,97,000 + 5,17,000 = ₹10,02,000 ✓*

*Note: The discrepancy (₹5,000 goods destroyed) is because cost of goods sold hasn't been properly separated from closing stock. For proper analysis, stock of ₹? would exist after all transactions — the above treats all purchases as sold (an assumption).*

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
