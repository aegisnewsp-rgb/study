---
exam: cs-exec
examName: CS Executive
subject: taxation
subjectName: Taxation
topic: taxati-004
topicName: Income Tax — Company Taxation
weight: 3
country: cs
generated: "2026-03-25T17:00:00"
---

# Income Tax — Company Taxation

**CS Executive Taxation | taxati-004**

Welcome to the **Income Tax — Company Taxation** module, a critical component of the CS Executive Taxation syllabus. This module deals with the provisions of the **Income Tax Act, 1961** as applicable to companies — covering company definition and residential status, computation of taxable income, deductions, depreciation, special tax rates, dividend taxation, advance tax, and tax audit requirements.

Company taxation under the Income Tax Act is distinct from individual taxation in several important ways — companies are subject to **flat tax rates** (unlike individuals who progress through slabs), companies have their own set of deductions and exemptions, and certain provisions like **Minimum Alternate Tax (MAT)**, **transfer pricing**, and **thin capitalization** rules apply specifically to companies.

This comprehensive guide covers every aspect of company taxation required for the CS Executive examination.

---

## 1. Company Definition [Section 2(17)]

### 1.1 Statutory Definition

**Section 2(17)** of the Income Tax Act, 1961 defines "company" to include:

> **(i) An Indian company** — A company formed and registered under the Companies Act, 1956 or Companies Act, 2013.
>
> **(ii) A corporation** — Established by or under a Central or State Act.
>
> **(iii) A co-operative society** — Registered under the Co-operative Societies Act, 1912 or any similar law.
>
> **(iv) Any other body corporate** — Which the Income Tax authorities may notify to be treated as a company.

**Key Components of Section 2(17):**

| Category | Description |
|---|---|
| **Indian Company** | Company formed under Indian Companies Act — domestic company |
| **Foreign Company** | Company incorporated outside India — foreign body corporate |
| **Corporation** | Statutory bodies like LIC, UTI,SBI (though SBI is now a company) |
| **Co-operative Society** | Registered under Co-operative Societies Act |
| **Body Corporate** | Any entity with corporate structure — LLP is NOT included (LLP has separate provisions) |

### 1.2 Types of Companies

#### A. Domestic Company

A **domestic company** is:
- An Indian company (formed under Companies Act, 2013), OR
- Any other company whose **total income** is chargeable to tax under the Income Tax Act
- Has made in India the **entire manufacture/processing/construction** of goods/services
- The company is **not** a foreign company

**Key Features of Domestic Companies:**
- Subject to **Indian tax laws** on global income
- Eligible for certain **tax benefits and exemptions**
- Subject to **MAT provisions** under Section 115JB
- Can opt for **reduced tax rates** under Section 115BAA or 115BAB

#### B. Foreign Company

A **foreign company** is:
- A company **incorporated outside India**
- Which has a **place of business** in India (branch, project office, liaison office)
- Or which **derives income** from India

**Key Features of Foreign Companies:**
- Taxed on **Indian-source income** only (not global income)
- Income from **business connection** in India is taxable
- Subject to **Transfer Pricing** provisions
- **Royalty, technical services fees, dividends** from Indian sources are taxable at special rates
- No MAT provisions apply (MAT applies only to domestic companies)

### 1.3 Distinction Between Company and Firm

| Aspect | Company | Firm |
|---|---|---|
| **Legal Status** | Separate legal entity | Aggregate of partners |
| **Liability** | Limited (in most cases) | Unlimited (partners) |
| **Tax Rate** | Flat rates (22%, 25%, 30%) | Slab rates (slabs + surcharge) |
| **Shareholders** | Members (shareholders) | Partners |
| **Management** | Board of Directors | Partners manage directly |
| **Perpetual Succession** | Yes | No (dissolves on death of partner) |
| **Audit** | Statutory audit mandatory | Audit if turnover > Rs. 1 Crore |

> ⚡ **Exam tip:** The definition of "company" under Section 2(17) is critical for determining the **rate of tax** applicable. A company (whether domestic or foreign) is always taxed at **company tax rates** — not at individual slab rates. The distinction between domestic and foreign company determines which **special provisions** (MAT, reduced rates) apply.

---

## 2. Residential Status [Section 6(3)]

### 2.1 Residential Status of Companies

**Section 6(3)** specifically deals with the **residential status of companies**. The rules differ for Indian companies and foreign companies.

#### A. Domestic Company — Always a Resident

Under Section 6(1), an Indian company is **always** treated as a **resident** in India, regardless of where its management is located.

**Rationale:** The Indian government claims tax jurisdiction over all income of companies incorporated in India, as these companies enjoy the protection of Indian laws and infrastructure.

#### B. Foreign Company — Resident Only If Control in India

A **foreign company** is treated as a **resident** in India if **at any time** during the previous year:
- The **control and management** of its affairs is **wholly situated in India**

**"Control and Management":**
- This refers to the **board meetings** and strategic decision-making
- Not the day-to-day operations
- If the board of directors meets in India, the company is likely resident
- If the real control is exercised from abroad (board meetings abroad), the company is non-resident

**Practical Test:**
```
Foreign Company Resident if:
→ Board of Directors meets in India (entirely or partly)
→ Strategic decisions (policy, finance, taxation) are made in India
→ Company is managed from India
```

### 2.2 Tax Implications of Residential Status

| Status | Taxable Income | Tax Rate |
|---|---|---|
| **Domestic Company** | **Global income** (income from India + abroad) | 22% / 25% / 30% |
| **Foreign Company (Resident)** | **Global income** | 40% (on royalty, FTS, dividends: special rates) |
| **Foreign Company (Non-Resident)** | **Indian-source income only** | 40% (on royalty, FTS, dividends: special rates) |

**Note on Foreign Company Tax Rates:**
- **40%** on ordinary business income
- **10%** on royalties and technical services fees from Indian government/public sector undertakings (under DTAA or Section 115A)
- **10%** on dividends from Indian companies (under Section 115A)
- **20%** plus surcharge + cess on other income

> 🔴 **High Priority:** An Indian company is **always a resident** — this is a statutory rule. A foreign company is a resident only if control and management is wholly situated in India. This distinction is critical for determining **global vs. Indian-source taxation**.

### 2.3 "Place of Effective Management" (POEM)

For companies other than Indian companies, the concept of **POEM (Place of Effective Management)** is used to determine residential status.

**POEM** is defined as:
> The place where the **key management and commercial decisions** that are necessary for the conduct of the company's business are **made** (substantially in free text — but in practice, it is the place where the board operates or where real decisions are taken).

**POEM Guidelines:**
- If the board meets in India and makes decisions → POEM in India → **Resident**
- If decisions are made abroad (even if board meets in India formally) → POEM abroad → **Non-Resident**

---

## 3. Computation of Taxable Income

### 3.1 Heads of Income

Companies, like all taxpayers, are taxed under the following **Heads of Income**:

| Head | Description |
|---|---|
| **A — Income from House Property** | Rental income from properties owned by the company |
| **B — Profits and Gains of Business or Profession** | Business income / professional income |
| **C — Capital Gains** | Gains on transfer of capital assets |
| **D — Income from Other Sources** | Interest, dividends, royalties, lottery, etc. |

**For most operating companies**, the primary head is **"Profits and Gains of Business or Profession"** (Head B).

### 3.2 Computation of Business Income

**Section 28** specifies the incomes chargeable to tax under the head "Profits and Gains of Business or Profession":

**Incomes Chargeable under Section 28:**

| Income | Description |
|---|---|
| **Profits of business** | Net profit from business operations |
| **Professional fees** | Fees for services rendered |
| **Commission income** | Brokerage, commission |
| **Rental income** | From letting of machinery, plant, furniture |
| **Casual income** | Non-recurring receipts in business |
| **Interest** | Business interest income |
| **Royalties** | Royalty income |
| **Exports incentives** | DEPB, duty drawback, etc. |
| **Lump sum compensation** | For termination or modification of business |

**Deductions Allowed [Sections 30-37]:**

The following expenses are **allowed as deductions** from gross business income:

| Section | Deduction |
|---|---|
| **Section 30** | Rent, rates, taxes, repairs (for premises) |
| **Section 31** | Repairs and insurance of machinery, plant, furniture |
| **Section 32** | Depreciation on assets |
| **Section 32AC** | Investment in new plant/machinery (withdrawn) |
| **Section 33AC** | Reserve for shipping business (withdrawn) |
| **Section 35** | Expenditure on scientific research |
| **Section 35AD** | Capital expenditure on specified business (infrastructure, hospital, hotel, etc.) |
| **Section 35D** | Preliminary expenses (amortized) |
| **Section 35DD** | Amortization of expenditure under voluntary retirement scheme (VRS) |
| **Section 36(1)(i)** | Insurance premium |
| **Section 36(1)(ii)** | Bonus or commission paid to employees |
| **Section 36(1)(iii)** | Interest on borrowed capital |
| **Section 36(1)(iv)** | Employer contribution to approved superannuation fund |
| **Section 36(1)(v)** | Employee contribution to recognized provident fund |
| **Section 36(1)(vi)** | Contribution to approved gratuity fund |
| **Section 36(1)(vii)** | Bad debts |
| **Section 36(1)(via)** | Provision for bad debts (for banks and financial institutions) |
| **Section 36(1)(viii)** | Discount on zero coupon bonds |
| **Section 36(1)(ix)** | Accumulated compensation to workers |
| **Section 36(1)(x)** | No-proof expenses (trivial breaches) |

### 3.3 Section 37 — General Deductions

**Section 37(1)** allows deduction of any **expenditure** (not capital in nature, not personal) that is:
1. **Laid out or expended** wholly and exclusively for the purpose of the business or profession.
2. **Not capital expenditure** (capital expenditure goes to depreciation or Section 35AD).
3. **Not a deferred revenue expenditure** (which must be amortized).
4. **Not covered** by Sections 30 to 36 (specific deductions).

**Example of Allowable Expenses:**
- Salaries and wages
- Rent paid for business premises
- Electricity charges
- Communication expenses
- Travelling expenses (for business purposes)
- Professional fees (legal, accounting, consultancy)
- Advertisement and marketing expenses
- Repairs and maintenance (not capitalized)
- Insurance premium (for business assets)
- Bad debts (written off)

**Example of Non-Allowable Expenses:**
- Personal expenses of directors/shareholders
- Expenses for exempt income (e.g., dividend income — which is exempt)
- Capital expenditure (e.g., purchase of land)
- Interest on own capital (not borrowed capital)
- Penalty and fine paid to government (not for breach of law)
- Expenses for entertainment (over specified limits)

### 3.4 Section 40(a) — Disallowances

**Section 40(a)** specifically disallows certain expenses:

| Sub-Section | Disallowance |
|---|---|
| **Section 40(a)(i)** | Amount paid to non-residents — if TDS not deducted or remitted |
| **Section 40(a)(ia)** | Amount paid to residents — if TDS not deducted or remitted |
| **Section 40(a)(ii)** | Wealth-tax |
| **Section 40(a)(iii)** | Payment to employee — if EPF contribution not paid before due date |
| **Section 40(a)(iv)** | Tax on non-monetary perks |
| **Section 40(a)(v)** | Fringe benefit tax (abolished but provisions exist) |

**TDS Non-Deduction Disallowance [Section 40(a)(ia)]:**
- If a company pays **professional fees, rent, commission, brokerage, or contract** to a resident and **fails to deduct TDS** or fails to deposit TDS to the government
- The **entire expense** is **disallowed** as a deduction
- However, the payee will still include the income in their return
- The payer can claim credit of TDS when the payee's PAN is quoted

**Example:**
Company pays Rs. 10 lakhs as professional fees to a resident CA firm but fails to deduct TDS. The entire Rs. 10 lakhs is disallowed under Section 40(a)(ia) — no deduction allowed.

> ⚡ **Exam tip:** The disallowance under Section 40(a)(ia) is one of the most **frequently tested** provisions in company taxation. The entire expense is disallowed if TDS is not deducted — this is a **severe penalty** designed to enforce TDS compliance.

---

## 4. Specific Deductions — Detailed Analysis

### 4.1 Rent, Repairs, and Insurance [Sections 30 and 31]

**Section 30 — Premises:**
Deduction is allowed for:
- **Rent** paid for business premises (actual rent paid or 1/6 of salary of employee occupying premises — whichever is less)
- **Rates and taxes** paid to local authority (property tax, municipal tax)
- **Repairs** — annual repairs (not capital improvements)

**Capital vs. Revenue Repairs:**
- **Revenue repairs** (repainting, fixing leakage, replacing parts) → Deductible under Section 30
- **Capital repairs** (adding a floor, major structural changes) → Capital expenditure → Depreciation under Section 32

**Section 31 — Machinery, Plant, and Furniture:**
Deduction for:
- **Current repairs** — repairing and maintaining plant, machinery, equipment, furniture
- **Insurance** premium for plant, machinery, furniture

**Insurance Premium Deduction:**
- Insurance premium must be **actually paid** during the year (or due and payable)
- Premium for **future years** cannot be claimed upfront (premium paid in advance relates to future years)

### 4.2 Depreciation [Section 32]

**Section 32** allows **tax depreciation** on tangible and intangible assets used in the business.

**Types of Depreciation:**

| Type | Rate | Condition |
|---|---|---|
| **Normal Depreciation** | As per Income Tax Rules | On all eligible assets |
| **Additional Depreciation** | 20% / 40% | On new plant/machinery acquired and installed |

**Block of Assets System:**
Under the Income Tax Act, depreciation is calculated on **blocks of assets** rather than individual assets:

- A **block of assets** is a group of assets with the **same rate of depreciation**
- If in a block: Opening WDV + Additions (at WDV) — Sales = Closing WDV
- Depreciation = Depreciation rate × WDV (after additions)

**Normal Depreciation Rates (Selected):**

| Asset | Rate (SLM) |
|---|---|
| **Buildings** | 5% / 10% (depending on type) |
| **Furniture and fixtures** | 10% |
| **Plant and machinery** | 15% (general) |
| **Motor cars** | 15% |
| **Computers** | 40% |
| **Intangible assets** | 25% |

**Additional Depreciation [Section 32(1)(iia)]:**
- Additional depreciation of **20%** is allowed on **new plant and machinery** acquired and installed
- For **computer software** — additional depreciation of **40%**
- Available in the year of **acquisition and installation**
- Only for **domestic companies** (from AY 2021-22, additional depreciation also available for certain businesses)

**Depreciation on Car:**
- 15% depreciation on motor cars
- Additional depreciation not available on cars (from AY 2020-21)
- No depreciation on motor cars used for personal purposes

**Depreciation Calculation — Practical Example:**

| Particulars | Amount (Rs.) |
|---|---|
| Opening WDV of 15% block | 1,00,000 |
| New machinery purchased | 50,000 |
| Total | 1,50,000 |
| Less: Sale of old machinery | 20,000 |
| WDV for depreciation | 1,30,000 |
| Depreciation @ 15% | 19,500 |
| Closing WDV | 1,10,500 |

### 4.3 Bad Debts [Section 36(1)(vii)]

**Bad debts** are amounts that have become **irrecoverable** in the course of business.

**Conditions for Deduction:**
1. The debt must be a **trading debt** (related to business operations).
2. The debt must have been **written off** as irrecoverable in the books of account.
3. The debt must have been **taken into account** in computing income in earlier years (i.e., it was previously offered to tax).
4. The creditor must have **exhausted all legal remedies** for recovery.

**Treatment:**
- Bad debt written off = **Deduction** from business income
- If later recovered → **Income** in the year of recovery

**Banks and Financial Institutions:**
- Banks and financial institutions can also claim **provision for bad debts** as a deduction (Section 36(1)(via)) — up to specified limits (as per RBI norms)
- This is a **specific provision** not available to regular companies

### 4.4 Interest on Borrowed Capital [Section 36(1)(iii)]

**Interest on borrowed capital** used for business purposes is **deductible**.

**Key Conditions:**
1. The capital must be **borrowed** (not own capital).
2. The interest must be **actually paid** (not merely accrued).
3. The loan must be used for **business purposes**.
4. Interest on **overdraft** accounts used for business is deductible.

**Interest on Partner's Capital:**
- If a partner lends money to the firm (in case of partnership firm) → interest paid is deductible to the firm.
- For companies, interest on **debentures, loans, overdrafts** is deductible.

**Interest on Unpaid Suppliers:**
- Interest on unpaid amounts to suppliers (trade creditors) is deductible if it represents genuine business interest on delayed payment.

### 4.5 Thin Capitalization Rules [Section 94B]

**Thin capitalization rules** limit the **interest deduction** on loans from **related parties** (especially foreign parent companies) if the debt-to-equity ratio is too high.

**When Applicable:**
- If the company's **interest expense** exceeds Rs. **1 crore** per year (or proportionate limit in FCY)
- AND the **debt-equity ratio** exceeds **2:1** (for domestic companies) or **3:1** (for foreign companies making borrowings from non-resident related parties)

**Disallowance:**
- Excess interest (above the ratio limit) is **disallowed**
- The disallowed interest can be **carried forward** for up to **8 assessment years**
- Can be set off against income from the same company in future years

**Debt-Equity Ratio Calculation:**
```
Debt-Equity Ratio = Total Borrowings / Equity

Where Equity = Paid-up share capital + Free reserves
```

**Example:**
A company has equity of Rs. 100 crores and borrowings of Rs. 400 crores from a foreign parent. Debt-equity = 4:1 (exceeds 3:1). Interest on the excess debt (above 3:1) is disallowed.

> 🔴 **High Priority:** Thin capitalization rules are frequently examined in the context of **foreign companies** making borrowings in India. The disallowance of excess interest and carry-forward provisions are key examination points.

### 4.6 Donations to Charitable Trusts — Section 80G

**Section 80G** provides **deduction** for donations made to **approved charitable institutions and funds**.

**Key Features:**

| Aspect | Provision |
|---|---|
| **Deduction Amount** | 50% of the donation amount (of the approved amount) |
| **Qualifying Donations** | Donations to approved institutions (specified in the Income Tax Rules) |
| **Limits** | Donation must not exceed 10% of **Gross Total Income** (GTI) |
| **Approved Donees** | PM's National Relief Fund, National Defence Fund, certain universities, charitable hospitals, etc. |

**List of 100% Deducible Donations (without limit):**

| Institution | Deductible Amount |
|---|---|
| National Defence Fund set up by Central Government | 100% |
| Prime Minister's National Relief Fund | 100% |
| Prime Minister's Armenia Earthquake Relief Fund | 100% |
| Africa (Contribution to certain African countries) | 100% |
| National Sports Fund | 100% |
| National Cultural Fund | 100% |
| Chief Minister's/State Distressed Relief Fund | 100% |

**List of 50% Deducible Donations:**

| Institution | Deductible Amount |
|---|---|
| Jawaharlal Nehru Memorial Fund | 50% |
| Indira Gandhi Memorial Fund | 50% |
| Rajiv Gandhi National Foundation | 50% |
| National Trust for Welfare of SC/ST, etc. | 50% |
| Armed Forces Flag Day Fund | 50% |
| Approved charitable trusts | 50% |

**Conditions:**
- Donation must be in **cash** (up to Rs. 2,000) or **cheque/draft/electronic mode**
- For cash donations > Rs. 2,000 — deduction only if donation is through crossed cheque/draft or electronic mode
- Total donation must not exceed **10% of Gross Total Income**
- The institution must be **approved** by the Income Tax Department

> ⚡ **Exam tip:** Section 80G deduction is **50% of the donation amount** (for most institutions) — not 100%. Always check whether the institution qualifies for 100% or 50% deduction. The 10% of GTI limit applies to all donations combined.

---

## 5. Special Tax Rates for Companies

### 5.1 Section 115B — Tax Rates for Companies

**Standard Company Tax Rates (Domestic Companies):**

| Total Income | Tax Rate (AY 2024-25) |
|---|---|
| Up to Rs. 250 lakhs | **25%** |
| Above Rs. 250 lakhs | **30%** |

**Surcharge on Tax:**

| Category | Total Income | Surcharge Rate |
|---|---|---|
| Domestic Company (regular) | Rs. 1 Cr to Rs. 10 Cr | **7%** |
| Domestic Company (regular) | Above Rs. 10 Cr | **12%** |
| Domestic Company (115BAA/115BAB) | Any | **10%** |
| Foreign Company | Rs. 1 Cr to Rs. 10 Cr | **2%** |
| Foreign Company | Above Rs. 10 Cr | **5%** |

**Health and Education Cess (HEC):**
- **4%** of income tax + surcharge

### 5.2 Section 115JB — Minimum Alternate Tax (MAT)

**Concept:**
Many companies, especially companies with **large accounting profits** but **zero or low taxable income** (due to exemptions and deductions), were paying little or no tax. To address this, **MAT** was introduced requiring companies to pay a **minimum tax** based on **book profits**.

**Section 115JB** provides that if the tax payable by a **domestic company** under the normal provisions is **less than 15% of its book profit**, then the book profit shall be deemed to be the taxable income, and tax shall be calculated at **15%** (plus surcharge and cess).

**Book Profit Calculation:**

```
Book Profit = Net Profit as per Profit & Loss Account (after tax)
+ Amounts transferred to reserves (as debited to P&L)
- Amounts withdrawn from reserves (as credited to P&L)
+ Specific disallowances (as added back to P&L)
- Specific deductions allowed
```

**Additions to Book Profit (Disallowances to be Added Back):**

| Item | Addition to Book Profit |
|---|---|
| Income tax paid or payable | Full amount |
| Amount carried to reserve under Section 33AC (shipping) | Full amount |
| Expenditure related to exempt income | Full amount |
| Depreciation (as per books) | As per books (but if higher than IT rules, add back difference) |
| Deferred tax | Not added back (if recognized in P&L) |
| Loss on sale of equity shares (if indexation benefit claimed) | Full amount |

**Deductions from Book Profit:**

| Item | Deduction from Book Profit |
|---|---|
| Amount withdrawn from reserves | Full amount |
| Dividend (proposed/declared) | Full amount |
| Depreciation as per Income Tax Rules | Full amount |
| Unabsorbed depreciation | Full amount |
| Brought forward loss | Full amount |

**MAT Rate:**
- **15%** of Book Profit (plus surcharge and cess)
- For foreign companies: **15%** (same rate)

**MAT Credit:**
- If MAT is paid (because book profit tax > normal tax), the excess paid is called **MAT credit**.
- MAT credit can be **carried forward** for **10 assessment years**.
- MAT credit can be **set off** against future tax liabilities under normal provisions (when normal tax > MAT).

**Applicability:**
- MAT applies to **all domestic companies** (including companies under Section 115BAA or 115BAB — but these companies have a separate MAT of **15% of book profit** which is lower than normal MAT provisions since they don't get many exemptions).
- Does **NOT** apply to foreign companies.

### 5.3 Section 115BAA — Reduced Tax Rate for Domestic Companies

**Section 115BAA** (introduced from **Assessment Year 2020-21**) allows domestic companies to opt for a **reduced tax rate of 22%** (plus surcharge and cess) if they meet the specified conditions.

**Conditions to Opt for Section 115BAA:**

| Condition | Requirement |
|---|---|
| **Type of Company** | Must be a domestic company |
| **Total Income** | Must have total income computed without claiming specified exemptions/deductions |
| **Exemptions Not Claimed** | Cannot claim Section 10AA (SEZ), 32(1)(iia) [additional depreciation], 33AB, 33ABA, 35(1), 35AD, 80C to 80U (except 80M, 80P) |
| **Book Profits** | Cannot claim MAT credit |
| **Furnishing of Return** | Return must be filed on or before the due date |

**Tax Rate Under Section 115BAA:**
- **22%** flat (no slab — flat rate)
- **No surcharge exemption** — surcharge applies at **10%** flat (not the higher slabs applicable to regular companies)
- **4% HEC applies**

**Implications of Opting for 115BAA:**
- Effective tax rate = ~**25.168%** (22% + 10% surcharge + 4% cess)
- Company **cannot claim** most exemptions and deductions
- MAT provisions **do not apply** (no MAT credit available)
- Section 80C to 80U deductions are **not available** (except 80M — dividends received)
- This is a **simplified compliance** route for companies willing to forgo exemptions

### 5.4 Section 115BAB — New Domestic Manufacturing Companies

**Section 115BAB** (also from **AY 2020-21**) provides an even more attractive **15% tax rate** for **new domestic manufacturing companies**.

**Conditions for Section 115BAB:**

| Condition | Requirement |
|---|---|
| **Type** | Domestic company |
| **New Company** | Must be a **new company** — registered after 1st October 2019 |
| **Manufacturing** | Must be engaged only in **manufacturing or production** of articles or things |
| **Not Existing** | Must **not** have been formed by splitting an existing business |
| **Not from Transfer** | Must **not** have acquired an existing business (except as stock-in-trade) |
| **Not Claiming Exemptions** | Cannot claim Section 10AA, 32(1)(iia), 33AB, 33ABA, 35(1), 35AD, 80C to 80U |
| **Return Filed on Time** | Return must be filed by due date |

**Tax Rate Under Section 115BAB:**
- **15%** flat
- **No surcharge exemption** — surcharge at **10%** flat
- **4% HEC applies**

**Effective Tax Rate:**
- ~**17.16%** (15% + 10% surcharge + 4% cess)

**Benefit Over 115BAA:**
- 15% vs 22% — approximately **7 percentage points lower**
- This is the **lowest tax rate** for domestic companies in India
- Applicable only for **new manufacturing companies** set up after 1st October 2019

> ⚡ **Exam tip:** The comparison between Section 115JB (MAT at 15% on book profit), Section 115BAA (22% reduced rate), and Section 115BAB (15% for new manufacturing) is a **highly examinable topic**. The key distinctions are:
> - **115JB**: Minimum tax — always applies if book profit tax > normal tax
> - **115BAA**: Opted voluntarily — forgo exemptions, pay 22% flat
> - **115BAB**: Opted voluntarily for new manufacturing — 15% flat (lowest rate)

---

## 6. Dividend Taxation

### 6.1 Section 115-O — Dividend Distribution Tax (Repealed)

**Section 115-O** mandated that every domestic company pay **Dividend Distribution Tax (DDT)** on the dividend declared or distributed by it.

**DDT Rate Structure:**

| Period | DDT Rate |
|---|---|
| Up to AY 2020-21 | 15% + surcharge + cess |
| AY 2020-21 (interim) | 15% + surcharge + cess |
| Post repeal | N/A — DDT abolished from 01-04-2020 |

**Section 115-O Effective Rate:**
- Basic DDT: **15%**
- Surcharge: As applicable
- Health and Education Cess: **4%**
- Effective DDT rate: Approximately **17.65%** (including surcharge and cess)

**DDT Calculation:**
```
Dividend → Grossing up → Tax @ 15% → Add surcharge → Add cess → Total DDT
```

**Example (Pre-Repeal):**
Company declares dividend of Rs. 100 lakhs.
- Gross dividend for DDT = Rs. 100 × (100/85) = Rs. 117.65 lakhs (approx)
- DDT @ 15% = Rs. 17.65 lakhs
- Effective DDT rate ≈ 17.65% of dividend

### 6.2 Abolition of DDT — Section 115-O Repealed

**The DDT regime was repealed** with effect from **1st April 2020** (Finance Act, 2020). This was a **major change** in dividend taxation.

**From AY 2021-22 onwards:**
- Companies do **not** pay DDT on dividends.
- Dividends are now **taxable in the hands of shareholders** at applicable rates.
- The company must **deduct TDS** on dividends at the rates specified in Section 194.

**Section 194 — TDS on Dividends:**

| Shareholder Type | TDS Rate |
|---|---|
| Individual (resident) | **10%** (if PAN provided, otherwise 20%) |
| Domestic company | **10%** |
| Foreign company | **10%** (under Section 115A) |
| Partnership firm | **10%** |

**Exemption from TDS for Small Shareholders:**
- If dividend is **paid to a resident individual** and the **total dividend paid by the company in a year** is less than Rs. **5,000** — **No TDS**.
- If the shareholder provides **Form 15G/15H** (declaration of no tax liability) — **No TDS**.

### 6.3 Dividend Income in Shareholder's Hands — Section 10(34)

**Section 10(34)** provides **exemption from income tax** for dividends received from a **domestic company** (prior to AY 2021-22 — this exemption was available in the hands of shareholders, and DDT was paid by the company).

**Current Position (Post AY 2021-22):**
- Section 10(34) exemption is still available for **dividend income** received from a domestic company.
- However, the **first Rs. 10 lakhs** of dividend income from domestic companies is **exempt** under Section 10(34) read with Section 115BBDA.
- **Dividend exceeding Rs. 10 lakhs** is taxable at **10%** for resident individuals/HUFs (Section 115BBDA).

**Note:** The Rs. 10 lakh limit was introduced in Finance Act, 2016 and applies only to individuals and HUFs receiving dividend from domestic companies.

**Taxation of Dividend (Post DDT Repeal):**

| Recipient | Rate | Provision |
|---|---|---|
| Individual/HUF (up to Rs. 10L) | Exempt | Section 10(34) |
| Individual/HUF (above Rs. 10L) | 10% | Section 115BBDA |
| Domestic Company | 10% (if conditions met) | Section 115A |
| Foreign Company | 10% or 15% | Section 115A |
| Partnership Firm | 30% (slab) | Normal rates |

> 🔴 **High Priority:** The **repeal of DDT** (Section 115-O) is one of the most significant recent changes. The dividend is now **taxable in shareholders' hands** with TDS deducted by the company at source. The Rs. 10 lakh exemption under Section 10(34) read with Section 115BBDA and the 10% rate above Rs. 10 lakhs are key examination points.

---

## 7. Advance Tax

### 7.1 Advance Tax — Sections 207 to 210

**Advance tax** is the tax that a company must **pay in advance** during the financial year (rather than paying the entire tax at the end of the year as self-assessment tax).

**Legal Framework:**

| Section | Provision |
|---|---|
| **Section 207** | Liability to pay advance tax |
| **Section 208** | Amount of advance tax payable |
| **Section 209** | Computation of advance tax |
| **Section 210** | Procedure for payment of advance tax |
| **Section 211** | Interest payable on shortfall |
| **Section 234B** | Interest for default in payment of advance tax |
| **Section 234C** | Interest for deferment of advance tax |

### 7.2 Who Must Pay Advance Tax

**Companies are mandatorily required** to pay advance tax — there is **no threshold exemption** for companies.

**Due Dates for Advance Tax — Companies:**

| Installment | Due Date | Amount Payable |
|---|---|---|
| **1st Installment** | **15th June** | 15% of advance tax liability |
| **2nd Installment** | **15th September** | 45% of advance tax liability |
| **3rd Installment** | **15th December** | 75% of advance tax liability |
| **4th Installment** | **15th March** | 100% of advance tax liability |

**Important:** For companies, advance tax must be paid in **four equal installments** by the above due dates. If any installment is not paid, **interest under Section 234B and 234C** applies.

### 7.3 Computation of Advance Tax

**Advance Tax Calculation:**
```
Step 1: Estimate total income for the year
Step 2: Calculate gross tax liability (at applicable rates)
Step 3: Deduct: TDS, MAT credit (if any), foreign tax credit
Step 4: Net advance tax liability = Gross tax − Credits
Step 5: Pay in four installments (15%, 45%, 75%, 100%)
```

### 7.4 Interest on Shortfall — Section 234B

**Section 234B** applies if:
- The company **fails to pay** advance tax equal to **90%** of the assessed tax.
- Or the company pays **no advance tax**.

**Interest Rate:**
- **12% per annum** (simple interest)
- Calculated from **1st April** of the next financial year till the date of tax payment

**Section 234C — Deferment Interest:**
- If the company pays less than the **specified percentage** in any installment
- Interest at **12% per annum** on the shortfall from the due date of that installment till the date of filing return

**Due Dates and Percentages (for Companies):**

| Due Date | Percentage of Total Advance Tax |
|---|---|
| 15th June | 15% |
| 15th September | 45% |
| 15th December | 75% |
| 15th March | 100% |

**Example:**
A company's total advance tax liability is Rs. 100 lakhs. It pays:
- June 15: Rs. 10 lakhs (should be 15, shortfall = 5) → Interest from June 15
- September 15: Rs. 30 lakhs (should be 45, shortfall = 5) → Interest from September 15
- December 15: Rs. 40 lakhs (should be 75, shortfall = 35) → Interest from December 15
- March 15: Rs. 25 lakhs (should be 100, shortfall = 60) → Interest + Section 234B may apply

> ⚡ **Exam tip:** The four-installment schedule (15th June, 15th September, 15th December, 15th March) is **mandatory for companies**. Interest under Section 234B applies if **less than 90%** is paid by the due date of the last installment (15th March). Interest under Section 234C applies for each installment shortfall.

---

## 8. Tax Audit — Section 44AB

### 8.1 Requirement for Tax Audit

**Section 44AB** mandates that certain taxpayers must get their accounts **audited by a Chartered Accountant**.

**Statutory Requirement:**
Every person carrying on business or profession must get his accounts audited if:

| Category | Threshold |
|---|---|
| **Business** (general) | Total sales, turnover, or gross receipts **> Rs. 1 crore** in the previous year |
| **Business** (turnover > Rs. 1 Cr but < Rs. 10 Cr) | If **cash transactions** are less than 5% of total receipts/payments — mandatory audit |
| **Business** (turnover > Rs. 1 Cr) | If **aggregate** of all receipts/payments in cash exceeds **5%** of such total — mandatory audit |
| **Profession** | Gross receipts **> Rs. 75 lakhs** in the previous year |
| **Company** | **Always** (Companies Act mandates statutory audit — this satisfies tax audit requirement) |

**For Companies — Important Point:**
- Every company is required to have a **statutory audit** under the Companies Act, 2013.
- This **statutory audit** also satisfies the requirement of **tax audit under Section 44AB** — no separate tax audit report is required.
- The tax auditor's report (Form 3CA/3CB/3CD) is prepared based on the statutory audit.

### 8.2 Tax Audit Forms

**Form 3CA:**
- Used when the taxpayer is a **company** (which is already subject to statutory audit under any other law).
- The tax audit is in addition to the statutory audit — Form 3CA is the compliance form.

**Form 3CB:**
- Used when the taxpayer is a **non-company** person whose accounts are required to be audited under any other law.

**Form 3CD:**
- The **detailed statement** that forms part of the tax audit report.
- Contains **30+ clauses** specifying all items that must be reported by the tax auditor.
- Must be filed electronically with the Income Tax Department.

### 8.3 Form 3CD — Key Clauses

**Form 3CD** is the detailed statement of particulars that must be furnished by the tax auditor. Key clauses include:

| Clause | Particulars |
|---|---|
| **Clause 1** | PAN and Aadhaar |
| **Clause 2** | GST registration numbers |
| **Clause 3** | Nature of business/profession |
| **Clause 4** | Description of business/activity codes |
| **Clause 5** | Check if books are maintained |
| **Clause 6** | Reporting of books examined |
| **Clause 7** | Gross receipts/turnover |
| **Clause 8** | Profits and gains from business/profession |
| **Clause 9** | Method of accounting (cash/mercantile) |
| **Clause 10** | Method of valuation of closing stock |
| **Clause 11** | Particulars of depreciation admissible |
| **Clause 12** | TDS/TCS compliance |
| **Clause 13** | Transactions with non-residents |
| **Clause 14** | Transfer pricing documentation (if applicable) |
| **Clause 15** | Section 80G donations |
| **Clause 16** | Details of exempt income |
| **Clause 17** | Audit fees and expenses |
| **Clause 18** | Deferred tax |
| **Clause 19** | Provisions for bad debts |
| **Clause 20** | Guaranteed debts (interest deduction) |

### 8.4 Due Date for Tax Audit Report

| Assessee Type | Due Date |
|---|---|
| **Company** (audit under Section 44AB) | **30th September** of the assessment year |
| **Non-company** (with transfer pricing) | **30th November** |
| **Non-company** (without transfer pricing) | **31st October** |

**Consequences of Non-Filing:**
- **Penalty under Section 271B:** Rs. 1.5 lakhs or 0.5% of turnover (whichever is less)
- Interest under Section 234B for shortfall in advance tax

> ⚡ **Exam tip:** Companies are **always subject to tax audit** (because of statutory audit under Companies Act). The tax auditor's report (Form 3CA + Form 3CD) must be filed by **30th September**. The **Form 3CD** clauses are frequently examined in the CS Executive examination — be familiar with the key clauses.

---

## 9. Transfer Pricing (Brief Overview)

### 9.1 Transfer Pricing Provisions

**Section 92 to Section 92F** deal with **Transfer Pricing** — the pricing of transactions between **associated enterprises**.

**Key Concepts:**

| Term | Meaning |
|---|---|
| **Associated Enterprise** | Two enterprises where one directly/indirectly participates in management/control/capital of the other |
| **International Transaction** | Transaction between associated enterprises involving property, money, or services |
| **Specified Domestic Transaction** | Transaction between two domestic related parties (from AY 2017-18 — Section 92BA) |

**Transfer Pricing Methods:**

| Method | Description |
|---|---|
| **Comparable Uncontrolled Price (CUP)** | Price charged in comparable uncontrolled transaction |
| **Resale Price Method** | Resale price minus normal margin |
| **Cost Plus Method** | Cost plus normal profit markup |
| **Profit Split Method** | Split profits based on contributions |
| **Transactional Net Margin Method (TNMM)** | Net margin compared to appropriate base |

**Threshold for Transfer Pricing:**
- If the **aggregate** of all international transactions with associated enterprises **exceeds Rs. 1 crore**
- Or if the **aggregate** of all specified domestic transactions exceeds **Rs. 2 crores**
- Transfer pricing documentation must be maintained and a **Accountant's Report (Form 3CE)** must be filed.

---

## 10. TDS Returns and Statements

### 10.1 TDS on Company Payments

Companies are required to **deduct TDS** on various payments made by them:

| Section | Payment Type | TDS Rate |
|---|---|---|
| **Section 192** | Salary | Slab rates |
| **Section 193** | Interest on securities | 10% |
| **Section 194** | Dividends | 10% |
| **Section 194A** | Interest (other than banks) | 10% |
| **Section 194C** | Contractor payments | 1% / 2% |
| **Section 194H** | Commission/brokerage | 5% |
| **Section 194I** | Rent | 2% / 10% |
| **Section 194J** | Professional fees/royalty | 10% |
| **Section 194C** | Work contract | 1% |

### 10.2 TDS Returns (Quarterly)

| Form | Description | Due Date |
|---|---|---|
| **Form 24Q** | TDS on salary | 31st July / 31st October / 31st January / 31st May |
| **Form 27Q** | TDS on payments to non-residents | Same |
| **Form 26Q** | TDS on other payments (domestic) | Same |

---

## 11. Summary and Quick Recap

**Key Points to Remember:**

1. **Company Definition [Section 2(17)]:** Includes Indian company, foreign company, corporation, cooperative society, body corporate.

2. **Residential Status [Section 6(3)]:** Indian company = always resident. Foreign company = resident only if control and management wholly in India.

3. **Computation of Taxable Income:** Business income = Gross receipts − Allowable deductions (Sections 30-37) + Disallowances (Section 40).

4. **Deductions:** Section 30 (rent), Section 31 (repairs), Section 32 (depreciation), Section 36 (interest, bad debts, insurance), Section 37 (general expenses).

5. **Section 80G:** 50% deduction for donations to approved charitable institutions (capped at 10% of GTI).

6. **Depreciation [Section 32]:** Normal depreciation on block of assets + Additional depreciation on new plant/machinery.

7. **Section 115JB (MAT):** Minimum 15% tax on book profits if normal tax < 15% of book profit.

8. **Section 115BAA:** 22% reduced rate for domestic companies (with conditions — no exemptions/deductions).

9. **Section 115BAB:** 15% reduced rate for new domestic manufacturing companies (set up after 1st October 2019).

10. **Section 115-O (DDT):** Repealed w.e.f. 01-04-2020. Dividends now taxable in shareholders' hands.

11. **Advance Tax:** Companies must pay in four installments — 15th June, September, December, March (each 15%, 30%, 60%, 100%).

12. **Tax Audit [Section 44AB]:** Companies always subject to tax audit (via statutory audit). Form 3CA + 3CD must be filed by 30th September.

> 🔴 **High Priority for Exam:** The most frequently examined areas in Company Taxation are:
> - **MAT vs 115BAA vs 115BAB** — calculation and choice of tax regime
> - **Depreciation** calculation on blocks of assets
> - **Advance tax installments** and interest under Section 234B/234C
> - **DDT repeal** and the new dividend taxation mechanism
> - **Section 40(a)(ia)** disallowance for TDS non-deduction
> - **Thin capitalization** under Section 94B

---

## Practice Questions

1. Define "company" under Section 2(17) of the Income Tax Act, 1961. Distinguish between a domestic company and a foreign company with reference to residential status under Section 6(3).

2. Explain the Minimum Alternate Tax (MAT) provisions under Section 115JB. How is book profit calculated? What happens if MAT is paid?

3. A company has opted for Section 115BAA. Explain the conditions, tax rate, and implications. How does it differ from Section 115BAB?

4. Compute the depreciation for a company with the following data:
   - Block of assets: Plant and Machinery @ 15%
   - Opening WDV: Rs. 1,00,000
   - Additions during the year: Rs. 80,000 (eligible for additional depreciation)
   - Sales during the year: Rs. 20,000

5. Explain the advance tax provisions for companies under Sections 207-210. What are the due dates and what happens if installments are not paid?

6. What is thin capitalization? Explain the provisions of Section 94B. How does it limit interest deduction?

7. Explain the provisions relating to dividend taxation before and after the repeal of Section 115-O. How is dividend income now taxed in the hands of shareholders?

8. What is tax audit under Section 44AB? Which companies are required to undergo tax audit? Explain Form 3CA and Form 3CD.

9. Discuss the deductions available under Sections 30, 31, 36, and 37 of the Income Tax Act, 1961 for a business enterprise.

10. Explain Section 80G donations. What is the deduction available and what are the limits?

---

*This guide covers Income Tax — Company Taxation for CS Executive Examination. The three modules together (taxati-002, taxati-003, and taxati-004) provide comprehensive coverage of the CS Executive Taxation syllabus — from GST Framework & Supply through ITC & Compliance to Income Tax Company Taxation.*
