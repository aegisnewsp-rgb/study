---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-009
topicName: Debentures
weight: 3
country: cs
generated: "2026-03-25T17:00:00"
---

# Debentures

**Debentures** are one of the most important topics in the CS Executive accounting syllabus — not only because they carry significant weightage (typically 8–12 marks in the exam), but because they introduce you to the fundamental accounting distinction between equity capital and debt capital. Where equity shareholders are owners who bear the risk of the business, debenture holders are creditors who lend money to the company at a fixed rate of interest, regardless of whether the company makes a profit or a loss. This distinction — between fixed-charge debt instruments and residual-claim equity — is the conceptual backbone of corporate capital structure, and the CS Executive examiner tests it thoroughly.

In the context of the Companies Act, 2013, debentures are governed by Sections 71–74 and the relevant Rules. A debenture is defined as a document (either a certificate or a acknowledgment of debt) that creates or acknowledges a debt. Debentures may be issued at par (at face value), at a discount, or at a premium, and may be redeemable (due for repayment on a fixed date) or irredeemable (perpetual). The key accounting challenge for the CS Executive student is mastering the journal entries at each stage — issue, interest calculation, and redemption — and understanding how the Companies Act restricts the raising of debentures as loan capital.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Key Points on Debentures:**

- Debenture = loan certificate — the holder is a creditor, not an owner
- Debenture interest is a business expense (tax-deductible under Section 36(1)(iii) of the Income Tax Act, 1961)
- Debentures are usually issued with a fixed redemption date
- Interest is calculated on the nominal/face value of the debenture, not the issue price

**Issue Price Journal Entries:**

| Scenario | Journal Entry |
|---|---|
| Issue at Par | Debenture A/c Dr. (face value) → To Debentureholders A/c |
| Issue at Discount | Debenture A/c Dr. (face value) / Discount on Issue Dr. → To Debentureholders A/c |
| Issue at Premium | Debenture A/c Dr. (face value) → To Securities Premium A/c |

**Redemption Journal Entry (at maturity):**
```
Debentureholders A/c    Dr.    [Face value]
   To Bank A/c                     [Amount paid]
```

**High-Yield Point:** Interest on debentures is calculated at a percentage of the nominal value — e.g., 12% p.a. on ₹100 face value = ₹12 per year per debenture. Most CS Executive questions have you calculate interest for a fraction of the year (e.g., "from 1st April to 30th September" = 6/12 of the year).

**⚡ Exam Tip:** Debentures often appear in combined questions with company final accounts. In the Balance Sheet, debentures appear as a liability under "Secured Loans" or "Long-term Borrowings." The discount on issue is written off over the life of the debentures as a financial expense. For redemption out of profits, the entry is: `Profits Available for Dividend A/c Dr. → To Debenture Redemption Reserve A/c` — note that DRR is a capital reserve and cannot be used for dividends.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**Types of Debentures:**

| Type | Feature |
|---|---|
| **Redeemable** | Repaid on a fixed/pre-determined date |
| **Irredeemable (Perpetual)** | Never repaid during the company's lifetime |
| **Convertible** | Optionally or mandatorily convertible into equity shares |
| **Non-Convertible** | Pure debt — cannot be converted to equity |
| **Secured** | Backed by a charge on company assets (fixed/floating) |
| **Unsecured** | No charge on assets — backed only by company's creditworthiness |

**Legal Provisions — Companies Act, 2013:**

- **Section 71(1):** A company may issue debentures with or without security
- **Section 71(2):** Debentures cannot be issued at a discount (unless they are convertible debentures reissued within one year of acquisition)
- **Section 71(3):** No debenture can be issued unless the company hasArticles of Association that authorise it
- **Section 73:** Companies cannot issue debentures to more than 49 persons (for public companies) — this is a restriction on the number of debentureholders to prevent mobilisation of deposits

**Issue of Debentures — Accounting Treatment:**

*1. Issue at Par (Face Value):*
```
Debenture A/c          Dr.    [Nominal value]
   To Debentureholders A/c           [Issue price received]
```
*On receipt of money:* Bank A/c Dr. → To Debenture A/c

*2. Issue at Discount:*
```
Debenture A/c          Dr.    [Nominal value]
   To Discount on Issue of Debentures A/c    [Discount amount]
   To Debentureholders A/c                  [Amount received]
```
The Discount on Issue is a capital loss — it must be written off over the life of the debentures. Annual write-off = Total Discount ÷ Life of Debentures.

*3. Issue at Premium:*
```
Debenture A/c          Dr.    [Nominal value]
   To Securities Premium A/c     [Premium amount]
   To Debentureholders A/c       [Amount received]
```

**Interest on Debentures:**

Debenture interest is always calculated on the face/nominal value. The entry:
```
Debenture Interest A/c    Dr.    [Interest amount]
   To Debentureholders A/c          [Amount due]
   To TDS Payable A/c               [TDS deducted @ 10% if interest exceeds ₹5,000 per annum per holder]
```
*On payment:* Debentureholders A/c Dr. → To Bank A/c

*Important:* TDS is deducted at 10% under Section 193 of the Income Tax Act if the debenture holder is an individual/Hindu Undivided Family, and at 20% for other category holders. If pan is not furnished, TDS is deducted at the rate of 20% plus surcharge.

**Redemption of Debentures:**

Companies typically redeem debentures by: (a) issuing new debentures (refinancing), (b) creating a sinking fund and investing in outside securities, (c) open market purchase, or (d) conversion into equity. The most common CS Executive scenario is redemption out of profits (sinking fund method):

*Redemption out of profits (when not specifically provided in Articles):*
```
Profits & Gains Appropriation A/c    Dr.    [Amount set aside]
   To Debenture Redemption Reserve A/c        [Amount set aside]
```
*Annual investment in Sinking Fund Investment:* Bank A/c Dr. → To Bank (separate) A/c, then Sinking Fund Investment A/c Dr. → To Bank A/c

*On redemption:* Debentureholders A/c Dr. → To Bank A/c

**⚡ Study Strategy:** The most common CS Executive numerical problem structure: (a) Issue debentures at par/discount/premium → (b) Calculate and record interest (half-yearly, with TDS) → (c) Provide for redemption reserve (out of profits) → (d) Record redemption. Practise this full cycle at least 5 times.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Section 71 — Deep Dive:**

Section 71 of the Companies Act, 2013, is the primary provision governing debenture issuance. The section provides:
- A company may issue debentures with or without creating a charge on the assets
- An issuedebenture does not require a private placement offer document for public companies — however, if the debentures are issued to more than 49 persons, the company must comply with the deposit-taking provisions (which are now largely prohibited for public companies)
- Debentures must be issued within 12 months of the date of the prospectus or offer document

**Creating a Charge — Fixed vs. Floating:**

A debenture with a fixed charge (or specific charge) is secured against a specific asset — e.g., a factory building or plant and machinery. If the company defaults, the debenture holder can repossess that specific asset. A floating charge covers all the company's current assets — inventory, receivables, cash — and "crystallises" (becomes fixed) on the occurrence of a default event or winding up.

*Why this matters for CS Executive:* In a winding up, fixed charge holders are paid before floating charge holders. This is a common question in the winding-up section of the syllabus. Also note that creating a charge requires filing Form CHG-7 (for registration of charges) with the Registrar of Companies within 30 days of creation — failure to register renders the charge void against the company's liquidator and other creditors.

**Discount on Issue of Debentures — Detailed Write-Off:**

When debentures are issued at a discount, the discount is a capital loss and is not a revenue expense. It must be written off over the life of the debentures (or earlier if the articles or the terms of issue permit).

*Example:* 1,000 debentures of ₹100 each issued at 10% discount, repayable at par after 5 years:
- Total discount = 1,000 × ₹10 = ₹10,000
- Annual write-off = ₹10,000 ÷ 5 = ₹2,000 per year
- Journal entry for write-off: `Discount on Issue of Debentures A/c Dr. 2,000 → To Profit & Loss A/c 2,000` (or appropriate P&L appropriation account)

**Sinking Fund Method — Step by Step:**

This is the most common redemption method tested in CS Executive:

1. At the end of Year 1, transfer to DRR: `Profit & Loss A/c Dr. → To Debenture Redemption Reserve A/c` (an amount such that the fund grows to the redemption amount in the life of the debentures)
2. Invest the DRR amount in outside securities: `Sinking Fund Investment A/c Dr. → To Bank A/c`
3. Receive interest on investments: `Bank A/c Dr. → To Sinking Fund Investment A/c` (this is added to the investment so the fund grows)
4. Repeat until redemption year
5. On redemption: Sell investments, receive bank, pay debenture holders, transfer DRR to General Reserve

**Capital Reserve vs. Revenue Reserve:**
The Debenture Redemption Reserve (DRR) is a capital reserve — it cannot be used for dividend distribution. Under the Companies (Share Capital and Debenture) Rules, 2014, every company that issues debentures must create a DRR of at least 50% of the debenture value before redemption (for redemption out of profits). This is a regulatory requirement to protect debenture holders.

**Conversion of Debentures:**

Optionally convertible debentures (OCDs) and mandatorily convertible debentures (MCDs) are equity-linked debt instruments. When converted, the journal entry:
```
Debenture A/c                  Dr.    [Nominal value]
   To Equity Share Capital A/c          [Face value of shares issued]
   To Securities Premium A/c            [Premium, if any]
```
For compulsorily convertible debentures, the entire debt is converted to equity — no gain or loss arises.

**Common CS Executive Examiner Traps:**
1. Calculating interest on issue price instead of face value
2. Forgetting TDS deduction on debenture interest when interest exceeds ₹5,000 per holder per annum
3. Treating Discount on Issue as a revenue expense (it is a capital loss)
4. Confusing DRR creation with the transfer to General Reserve on redemption — DRR is created before redemption, General Reserve is used after
5. Missing the requirement to register charges with the Registrar of Companies
