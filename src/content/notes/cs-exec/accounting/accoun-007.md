---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-007
topicName: Company Accounts
weight: 3
country: india
generated: "2026-03-25T17:00:00"
diagramPrompt: "Clean educational diagram showing share capital structure, types of shares (equity and preference), share issue entries flow, and forfeiture/reissue process — white background, exam-style illustration"

---

# Company Accounts

Company Accounts is a foundational topic in CS Executive Accounting that deals with the accounting procedures specific to companies — particularly the issue of shares and debentures, their redemption, and the preparation of company financial statements as per Schedule III of the Companies Act, 2013. Unlike sole proprietorship and partnership accounts, company accounts involve a more structured legal framework, distinct types of capital, and specific provisions under the Companies Act that govern how capital is raised, maintained, and presented in financial statements.

For the CS Executive examination, Company Accounts is one of the most crucial topics, frequently tested both as theory and practical questions. The key areas include the issue of shares (at par, premium, and discount), forfeiture and reissue of shares, issue and redemption of debentures, and preparation of company balance sheets. A strong command of the journal entries, ledger accounts, and financial statement formats is essential for scoring well.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Types of Share Capital:**

| Type | Features | Dividend |
|---|---|---|
| Equity Shares | Residual claimants, voting rights, variable dividend | Whatever remains after preference |
| Preference Shares | Fixed dividend, priority over equity in liquidation | Fixed % (cumulative or non-cumulative) |

**Share Issue — Journal Entries:**

| Transaction | Journal Entry |
|---|---|
| Application money received | Bank A/c Dr. 10 per share; To Share Application A/c |
| Allotment made | Share Application A/c Dr.; To Share Capital A/c |
| Allotment money due | Share Allotment A/c Dr.; To Share Capital A/c |
| Calls made | Share Call A/c Dr.; To Share Capital A/c |
| Calls received | Bank A/c Dr.; To Share Call A/c |
| Share Premium received | Bank A/c Dr.; To Securities Premium A/c |
| Share issued at discount | Bank A/c Dr.; Discount on Issue of Shares A/c Dr.; To Share Capital A/c |

**Calls in Arrears and Calls in Advance:**

| Situation | Entry |
|---|---|
| Call money not received (calls in arrears) | No entry at time of making call. When received: Bank A/c Dr.; To Share Call A/c |
| Calls in advance (received before due date) | Bank A/c Dr.; To Calls in Advance A/c (shown as a separate liability, NOT part of Share Capital until due) |

**Forfeiture of Shares (for non-payment of call money):**

```
Share Call A/c (Final Call)       Dr.  [amount due on call]
   To Share Forfeiture A/c                    [amount — capital]
   To Shares in Arrears A/c                   [amount — called but not paid]
(Being shares forfeited for non-payment of call money)
```

**Reissue of Forfeited Shares:**

```
Bank A/c              Dr.  [reissue price × no. of shares]
Share Forfeiture A/c  Dr.  [discount on reissue = forfeited price – reissue price]
   To Share Capital A/c                      [called up capital per share]
(Being forfeited shares reissued)
```

**Capital Reserve (from forfeiture):**
```
Share Forfeiture A/c     Dr.  [profit on reissue]
   To Capital Reserve A/c               [amount transferred]
(Being profit on reissue of forfeited shares transferred to Capital Reserve)
```

> **⚡ Exam Tip:** In forfeiture entries, the Share Capital account is credited with the **called-up capital per share**, NOT the issue price. The Called-Up Capital = Issue Price × Shares Allotted. If a share of ₹10 was issued at ₹10 (called up in two calls of ₹5 each) and forfeited after the first call was received, the credit to Share Capital A/c is only for the called-up portion.

> **⚡ Exam Tip:** When reissuing forfeited shares at a discount, the Discount on Reissue is debited to the Share Forfeiture A/c (NOT to Profit and Loss A/c). The Share Forfeiture A/c has a credit balance representing profit from forfeited shares — it absorbs the discount.

> **Must Remember:** Securities Premium A/c is shown under "Reserves and Surplus" in the Balance Sheet (on the liabilities side). It is a capital reserve and cannot be used for dividend distribution.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

#### 1. Types of Share Capital

**Authorised / Registered Capital:**
The maximum amount of capital that a company is authorised to raise as per its Memorandum of Association. This is the ceiling figure stated in the company's constitutional documents.

**Issued Capital:**
The part of authorised capital that is actually offered to the public for subscription.

**Called-Up Capital:**
The part of issued capital that has been called up (demanded for payment) by the company. If shares of ₹10 each are issued and only ₹7.50 per share is called up (₹2 on application, ₹3 on allotment, ₹2.50 on first call), then Called-Up Capital = ₹7.50 per share.

**Paid-Up Capital:**
The amount actually received on called-up shares. If on the above ₹7.50 called up, only ₹6.50 per share was received (₹1 in arrears), then Paid-Up Capital = ₹6.50 per share.

**Reserve Capital:**
Part of uncalled capital that can only be called up in the event of winding up. It is a capital reserve and cannot be used for dividend distribution.

#### 2. Issue of Shares at Par

When shares are issued at par, the issue price equals the face/nominal value of the shares. For example, a share with nominal value of ₹10 issued at ₹10 is an issue at par.

**Journal Entries (Issue at Par):**

*When shares are issued at ₹10 each (₹2 on application, ₹3 on allotment, ₹5 on final call):*

**On Application (when money is received):**
```
Bank A/c              Dr.  2,00,000   (20,000 shares × ₹10)
   To Share Application A/c            2,00,000
```

**On Allotment (transfer from application):**
```
Share Application A/c Dr.  2,00,000
   To Share Capital A/c               2,00,000
```

**On Allotment Due (when allotment money is demanded):**
```
Share Allotment A/c   Dr.  3,00,000   (20,000 × ₹15)
   To Share Capital A/c                3,00,000
```

**On Allotment Received:**
```
Bank A/c              Dr.  3,00,000
   To Share Allotment A/c              3,00,000
```

**On Final Call Due:**
```
Share Final Call A/c  Dr.  5,00,000   (20,000 × ₹25)
   To Share Capital A/c                5,00,000
```

**On Final Call Received:**
```
Bank A/c              Dr.  5,00,000
   To Share Final Call A/c            5,00,000
```

> **Key Point:** The Share Capital A/c is credited at the face/nominal value of ₹10 per share (₹2 + ₹3 + ₹5 called up). The excess ₹5 per share received on application and ₹5 received on allotment are capital — they are not revenue.

#### 3. Issue of Shares at Premium

When shares are issued at a price **above** the nominal value, the excess is the **Securities Premium**. For example, a share with nominal value of ₹10 issued at ₹25 carries a premium of ₹15 per share.

**Legal Provision:** Under Section 52 of the Companies Act, 2013, securities premium can be used for:
1. Issuing fully paid bonus shares to shareholders
2. Writing off preliminary expenses
3. Writing off commission or discount on issue of securities
4. Providing for premium on redemption of debentures

**Journal Entries (Issue at Premium):**

*When shares of ₹10 each are issued at ₹25 (₹5 on application, ₹10 on allotment including premium, ₹10 on final call including premium):*

**On Application:**
```
Bank A/c              Dr.  1,00,000   (20,000 shares × ₹5)
   To Share Application A/c           1,00,000
```

**On Allotment:**
```
Share Application A/c Dr.  1,00,000
Share Allotment A/c   Dr.  2,00,000   (₹10 per share = ₹10 × 20,000)
   To Share Capital A/c              1,00,000   (₹5 per share called up as capital)
   To Securities Premium A/c        2,00,000   (₹15 per share premium)
```

**On Final Call:**
```
Share Final Call A/c Dr.  2,00,000   (₹10 per share = ₹5 capital + ₹5 premium)
   To Share Capital A/c               1,00,000
   To Securities Premium A/c           1,00,000
```

> **⚡ Exam Tip:** The Securities Premium A/c is credited at the time of allotment (for the premium component). It appears as "Securities Premium" under "Reserves and Surplus" in the Balance Sheet. It cannot be distributed as dividend — it is a capital reserve.

#### 4. Issue of Shares at Discount

When shares are issued at a price **below** the nominal value, the difference is the **Discount on Issue of Shares**. Under the Companies Act, 2013, a company can issue shares at a discount **only** if:
1. The issue is authorised by a special resolution
2. The shares are of a class already issued
3. The discount is not more than 10% of the nominal value (or as prescribed)
4. The issue is sanctioned by the National Company Law Tribunal (NCLT) — though provisions have changed post-CL
5. At least one year has elapsed from the date the company was entitled to commence business

**Journal Entries (Issue at Discount):**

*When shares of ₹10 each are issued at ₹8 (discount of ₹2 per share):*

```
Bank A/c                       Dr.  8,00,000   (20,000 × ₹40)
Discount on Issue of Shares A/c Dr.  40,000   (20,000 × ₹2)
   To Share Capital A/c                    10,00,000  (20,000 × ₹50 called up)
```

**Writing Off Discount:**
The discount is written off over a period — it is usually charged to the Securities Premium A/c first (if available), or to the Profit and Loss A/c over a number of years.

```
Securities Premium A/c (or P&L A/c)   Dr.  10,000  (or amount decided)
   To Discount on Issue of Shares A/c             10,000
```

> **⚡ Exam Tip:** In company accounts, the Discount on Issue of Shares is NOT written off in the year of issue in the same way as in partnership. It must be systematically written off over a period. However, in simple CS Executive questions, it may be written off immediately or shown separately.

#### 5. Calls in Arrears

When a shareholder fails to pay the amount due on a call, the amount unpaid is called **Calls in Arrears**. The company has a lien on the shares of such shareholders and can forfeit them if calls remain unpaid.

**Disclosure in Balance Sheet:**
```
Note: Calls in Arrears is shown as a deduction from Share Capital:
Share Capital (Called-Up)                ₹X
Less: Calls in Arrears                  (₹X)
Paid-Up Capital                          ₹X
```

Alternatively, calls in arrears can be shown as a separate asset under "Other Current Assets" or as a deduction from Share Capital. The Companies Act requires it to be shown as a deduction from called-up share capital.

#### 6. Calls in Advance

When a shareholder pays the call money **before** it is formally called up by the company, the amount received is called **Calls in Advance**. It is a liability until the call is actually made.

**Journal Entry:**
```
Bank A/c              Dr.  [amount received in advance]
   To Calls in Advance A/c              [amount]
```

**When the call is formally made later:**
```
Calls in Advance A/c  Dr.  [amount]
   To Share Call A/c                  [amount]
```

**In Balance Sheet:**
Calls in Advance appears under "Other Current Liabilities" or as a separate liability item — it is NOT part of Share Capital until the call is due.

> **Must Remember:** Interest on Calls in Advance is payable by the company at a rate prescribed under Table F of the Companies Act — typically 12% p.a. or the rate specified in the Articles of Association.

#### 7. Forfeiture of Shares

When a shareholder fails to pay the amount due on a call, the company may **forfeit** the shares after giving due notice. Forfeiture is the cancellation of the shares owned by the defaulting shareholder, and the amount already paid by such shareholder is forfeited.

**Grounds for Forfeiture:**
- Non-payment of call money after notice served by the company
- As per the Articles of Association (which govern the forfeiture clause)

**Journal Entry on Forfeiture:**

*Example: Share of ₹10 each, ₹3 on application, ₹4 on allotment, ₹3 on final call. Forfeited after final call due but not paid.*

*Step 1: Forfeit the shares — cancel the share capital:*
```
Share Capital A/c              Dr.  10,00,000  (1,00,000 shares × ₹10 called up)
   To Share Forfeiture A/c                   3,00,000  (amount already received: 3+4 = ₹7 per share)
   To Calls in Arrears A/c                  7,00,000  (final call ₹3 unpaid per share)
(Being shares forfeited for non-payment of final call)
```

*Key Point: The Share Capital A/c is debited for the full called-up capital per share (₹10). The Share Forfeiture A/c is credited for the amount already received (₹3 application + ₹4 allotment = ₹7 per share). The Calls in Arrears A/c is credited for the amount not received (₹3 final call).*

**Reissue of Forfeited Shares:**

*Example: Reissue of the above forfeited shares at ₹8 per share (discount of ₹2 from nominal value ₹10):*

```
Bank A/c              Dr.  8,00,000   (1,00,000 × ₹8)
Share Forfeiture A/c  Dr.  2,00,000   (₹10 – ₹8 = ₹2 per share discount)
   To Share Capital A/c               10,00,000
(Being forfeited shares reissued at discount of ₹2 per share)
```

*After the reissue, the Share Forfeiture A/c will have a credit balance:*
- Original credit on forfeiture: ₹7,00,000
- Debit on reissue (discount absorbed): ₹2,00,000
- Balance in Share Forfeiture A/c: ₹5,00,000 (profit on forfeiture)

**Transfer to Capital Reserve:**
```
Share Forfeiture A/c     Dr.  5,00,000
   To Capital Reserve A/c                5,00,000
(Being profit on forfeiture transferred to Capital Reserve)
```

> **⚡ Exam Tip:** The Capital Reserve is created from the profit embedded in the Share Forfeiture A/c after reissue. If shares are forfeited and NOT reissued, the Share Forfeiture A/c balance remains as a capital reserve and can be transferred to Capital Reserve A/c.

#### 8. Issue of Debentures

Debentures are debt instruments issued by a company to raise long-term borrowed capital. They carry a fixed rate of interest (coupon rate) and are repayable at a future date.

**Types of Debentures:**
- **Redeemable:** Repaid after a fixed period or by draw of lots
- **Non-Redeemable:** Repaid only in the event of winding up (rare)
- **Convertible:** Can be converted into equity shares after a specified period
- **Non-Convertible:** Cannot be converted into equity shares

**Issue at Par:**
```
Bank A/c                    Dr.  [amount received]
   To Debentures A/c                      [nominal value]
(Being debentures issued at par)
```

**Issue at Premium:**
```
Bank A/c                    Dr.  [amount received]
   To Debentures A/c                      [nominal value]
   To Debenture Premium A/c                [premium amount]
```

**Issue at Discount:**
```
Bank A/c                    Dr.  [amount received]
Discount on Issue of Debentures A/c Dr.  [discount amount]
   To Debentures A/c                      [nominal value]
```

**Redemption of Debentures:**

*Methods:*
1. **In Lump Sum:** Entire amount repaid at maturity
2. **By Draw of Lots:** Selected debentures redeemed each year
3. **From Sinking Fund:** A fund created annually to accumulate for redemption

**Sinking Fund Method (Redemption at Par):**
```
Every year:
Sinking Fund Investment A/c   Dr.  [amount]
   To Sinking Fund A/c                      [amount]

On redemption:
Debentures A/c                Dr.  [amount]
   To Bank A/c                               [amount]

Sinking Fund A/c              Dr.  [amount]
   To Sinking Fund Investment A/c            [amount]
```

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

#### 1. Comprehensive Treatment of Share Capital Structure

**Understanding the Share Capital Hierarchy:**

1. **Nominal / Face Value:** The base value stated on the share certificate (e.g., ₹10 per share). This is the value used to calculate called-up capital.

2. **Called-Up Capital:** The amount per share that the company has demanded from shareholders. If a ₹10 share has ₹7.50 called up, the company can only demand ₹7.50 per share.

3. **Paid-Up Capital:** The amount actually received on called-up shares. Paid-Up = Called-Up – Calls in Arrears.

4. **Reserve Capital:** Uncalled capital that cannot be called except for winding up. This is different from "Reserves and Surplus."

**Types of Preference Shares:**

| Type | Feature |
|---|---|
| Cumulative Preference Shares | Arrears of dividend accumulate if not paid; must be paid in full before equity gets any dividend |
| Non-Cumulative Preference Shares | Dividend does not accumulate; if not paid in one year, it lapses |
| Participating Preference Shares | Entitled to participate in surplus profits beyond fixed dividend (rare) |
| Non-Participating Preference Shares | Only fixed dividend; no further participation |
| Redeemable Preference Shares | Must be redeemed after a fixed period |
| Irredeemable Preference Shares | Only redeemed on winding up |

#### 2. Over-Subscription and Pro-Rata Allotment

When applications are received for more shares than are offered, the issue is said to be **over-subscribed**. The company may:
1. Accept excess applications and issue additional shares pro-rata
2. Refund excess application money

**Pro-Rata Allotment:**
If 1,00,000 shares are offered but applications received for 2,00,000 shares, and the company allots 50,000 shares, then each applicant gets shares in the ratio of shares applied to shares allotted (2:1). An applicant who applied for 200 shares gets 100 shares.

**Accounting for Excess Application Money:**
If excess application money is to be adjusted against allotment:
```
Share Application A/c    Dr.  [excess amount]
   To Share Allotment A/c                [adjusted amount]
   To Bank A/c                           [refund amount]
```

#### 3. Comprehensive Practice Problem — Share Forfeiture and Reissue

**Problem:**

Alpha Ltd. invited applications for 50,000 equity shares of ₹10 each, payable as:
- ₹2 on application
- ₹3 on allotment (including premium of ₹1)
- ₹5 on first and final call

Applications were received for 70,000 shares. The company allotted 50,000 shares pro-rata to all applicants. Excess application money was adjusted against allotment. B, who was allotted 500 shares, failed to pay the allotment money. His shares were forfeited after the call was made. Of the forfeited shares, 300 shares were reissued at ₹8 per share.

**Required:** Give journal entries in the books of Alpha Ltd.

**Solution:**

*Step 1: On Receipt of Application Money (70,000 × ₹2 = ₹1,40,000)*
```
Bank A/c              Dr.  1,40,000
   To Share Application A/c            1,40,000
```

*Step 2: On Allotment (transfer Application money)*
Total allotment money due = 50,000 × ₹3 = ₹1,50,000
Excess application money adjusted = (70,000 – 50,000) × ₹2 = ₹40,000
Amount adjusted against allotment = ₹40,000
Balance refunded = Nil (entire excess was applied)
Actually payable on allotment = ₹1,50,000 – ₹40,000 = ₹1,10,000 (but B didn't pay his share)

*For the company:*
```
Share Application A/c Dr.  1,40,000
   To Share Capital A/c              1,00,000   (₹2 per share × 50,000)
   To Securities Premium A/c          50,000   (₹1 per share × 50,000)
   To Share Allotment A/c              10,000  (excess of 20,000 shares × ₹0.50... wait)

Actually, the standard approach:
- Application money received: 70,000 × ₹2 = ₹1,40,000
- Shares allotted: 50,000
- Pro-rata ratio: 70,000/50,000 = 1.4:1
- Each applicant who applied for 1.4 shares gets 1 share
- Excess per share: Application ₹2 – Allotment money payable... 

Let me reconsider:
Application money: 70,000 × ₹2 = ₹1,40,000
Allotment money due: 50,000 × ₹3 = ₹1,50,000
Excess application money: ₹1,40,000 – (50,000 × ₹2 applied portion) = ₹1,40,000 – ₹1,00,000 = ₹40,000
This ₹40,000 excess is adjusted against allotment.

So, amount payable on allotment after adjusting excess: ₹1,50,000 – ₹40,000 = ₹1,10,000

Journal on allotment:
```
Share Application A/c Dr.  1,40,000
   To Share Capital A/c              1,00,000
   To Securities Premium A/c           50,000
   To Share Allotment A/c              10,000
(Being application money transferred)
```

Now B's case:
B applied for: 500 × (70,000/50,000) = 700 shares (pro-rata)
B paid on application: 700 × ₹2 = ₹1,400
Allotment money for B's 500 shares: 500 × ₹3 = ₹1,500
Excess adjusted for B: 200 × ₹2 = ₹400
Amount B should pay on allotment: ₹1,500 – ₹400 = ₹1,100
But B failed to pay allotment → ₹1,100 is in arrears

*Step 3: When Allotment was Due and Received (from all except B):*
```
Share Allotment A/c   Dr.  1,50,000
   To Share Capital A/c               1,50,000  (₹3 per share)
   To Securities Premium A/c            —
```

*But B didn't pay:*
```
Bank A/c              Dr.  1,08,900  (₹1,10,000 – ₹1,100 from B)
Share Allotment A/c   Dr.  1,100
   To Share Allotment A/c              1,10,000
```

*Step 4: On First and Final Call Made:*
Total call money due: 50,000 × ₹5 = ₹2,50,000
B's call: 500 × ₹5 = ₹2,500
```
Share First & Final Call A/c  Dr.  2,50,000
   To Share Capital A/c                   2,50,000
```

*Step 5: On Call Received (from all except B):*
B's shares already forfeited — no entry for his call money.
```
Bank A/c              Dr.  2,47,500   (₹2,50,000 – ₹2,500)
   To Share First & Final Call A/c       2,47,500
```

*Step 6: Forfeiture of B's 500 Shares:*
B's shares forfeited for non-payment of allotment (₹1,100) and call (₹2,500).
Called up per share: ₹2 + ₹3 + ₹5 = ₹10
Received per share: ₹2 (application) + ₹0 (allotment not paid) = ₹2 per share
```
Share Capital A/c              Dr.  5,000   (500 × ₹10)
   To Share Forfeiture A/c                  1,000   (500 × ₹2 received)
   To Calls in Arrears A/c                  4,000   (500 × ₹8 unpaid: ₹3 allmt + ₹5 call)
(Being 500 shares forfeited for non-payment of allotment and call)
```

*Step 7: Reissue of 300 Forfeited Shares at ₹8 per share:*
```
Bank A/c              Dr.  2,400   (300 × ₹8)
Share Forfeiture A/c  Dr.    600   (₹10 – ₹8 = ₹2 per share × 300)
   To Share Capital A/c               3,000   (300 × ₹10)
(Being 300 forfeited shares reissued at ₹8 per share)
```

*Step 8: Transfer of Balance in Share Forfeiture A/c to Capital Reserve:*
Share Forfeiture A/c Balance:
- On forfeiture (500 shares × ₹2 received): ₹1,000 credit
- On reissue (300 shares × ₹2 discount): ₹600 debit
- Balance left (for 200 unissued shares): ₹400
```
Share Forfeiture A/c     Dr.  400
   To Capital Reserve A/c              400
(Being balance in forfeiture account transferred to capital reserve)
```

#### 3. Schedule III Company Balance Sheet Format

**Horizontal Format (as per Schedule III):**

```
Balance Sheet as on 31st March 2025

Particulars        Note No.   Amount (₹)    Amount (₹)
------------------------------------------------------
EQUITY AND LIABILITIES
1. Shareholders' Funds
   a) Share Capital                         X
   b) Reserves and Surplus      (if any)    X
2. Share Application Money Pending Allotment  X
3. Non-Current Liabilities
   Long-term Borrowings                      X
4. Current Liabilities
   a) Short-term Borrowings                 X
   b) Trade Payables                        X
   c) Other Current Liabilities             X
   d) Short-term Provisions                X
                                                  -----
Total Equity and Liabilities                   X

ASSETS
1. Non-Current Assets
   a) Fixed Assets                           X
   b) Non-current Investments                X
   c) Long-term Loans and Advances           X
2. Current Assets
   a) Current Investments                   X
   b) Inventories                            X
   c) Trade Receivables                     X
   d) Cash and Cash Equivalents              X
   e) Short-term Loans and Advances          X
   f) Other Current Assets                  X
                                                  -----
Total Assets                                   X
                                                  =====
```

**Key Notes on Company Balance Sheet:**
- **Share Capital:** Shown after deducting Calls in Arrears
- **Reserves and Surplus:** Includes Securities Premium, Capital Reserve, General Reserve, Surplus in P&L
- **Fixed Assets:** Shown at Cost minus Accumulated Depreciation (Net Book Value)
- **Current Assets:** Inventories, Debtors, Cash at Bank, Cash in Hand
- **Debentures:** Appear under Non-Current Liabilities if long-term, or Current Liabilities if repayable within 12 months

#### 4. Profit Prior to Incorporation

When a company is incorporated during an accounting period, it is necessary to calculate **Profits Prior to Incorporation** — the profit earned by the business before the company came into existence. This is a capital profit and is transferred to the **Capital Reserve** (not available for dividend).

**Purpose:** To distinguish between:
1. Pre-incorporation profits (capital profits — go to Capital Reserve)
2. Post-incorporation profits (revenue profits — can be used for dividend)

**Calculation:**

*Method: Time Ratio and Sales Ratio (whichever is more appropriate)*

**Time Ratio Method:**
If the company operated as a firm/trading concern before incorporation, profits are apportioned based on the time period before and after incorporation.

*Example:* Accounting year ended 31st March 2025. Company incorporated on 1st January 2025. Total profit = ₹1,20,000.
- Period before incorporation: 1st April 2024 to 31st December 2024 = 9 months
- Period after incorporation: 1st January 2025 to 31st March 2025 = 3 months
- Total period = 12 months

Profit prior to incorporation = ₹1,20,000 × 9/12 = ₹90,000
Profit after incorporation = ₹1,20,000 × 3/12 = ₹30,000

**Sales Ratio Method (more accurate when sales vary significantly):**
If the sales pattern is more representative of profit-earning activity than time.

*Example:* Sales from April to December = ₹4,50,000; Sales from January to March = ₹1,50,000
Total sales = ₹6,00,000

Profit prior to incorporation = ₹1,20,000 × 4,50,000/6,00,000 = ₹90,000
Profit after incorporation = ₹1,20,000 × 1,50,000/6,00,000 = ₹30,000

> **⚡ Exam Tip:** In the exam, if both time ratio and sales ratio are asked to be applied, first apply one method and then the other — the question will specify which one to use or will ask for both. When asked to calculate "Profits Prior to Incorporation" as a general concept, the time ratio is more commonly used in simple problems.

> **Must Remember:** Profit prior to incorporation is a **capital profit** and must be transferred to the **Capital Reserve** — it cannot be used for issuing bonus shares or for dividend distribution. Post-incorporation profit is a revenue profit and is available for dividend.

#### 5. Comprehensive Practice — Company Final Accounts

**Problem:**

Bharat Ltd. was incorporated on 1st July 2024. The following is the Trial Balance as on 31st March 2025:

| Particulars | Amount (₹) |
|---|---|
| Share Capital (Authorised: 20,000 shares of ₹10 each) | |
| Purchases | 4,80,000 |
| Sales | 6,80,000 |
| Opening Stock (1st April 2024) | 60,000 |
| Salaries | 42,000 |
| Rent | 18,000 |
| Printing & Stationery | 6,000 |
| Directors' Fees | 12,000 |
| Audit Fees | 8,000 |
| Bank Charges | 2,000 |
| Sundry Debtors | 65,000 |
| Sundry Creditors | 48,000 |
| Cash at Bank | 88,000 |
| Cash in Hand | 5,000 |
| Machinery | 2,00,000 |
| Furniture | 40,000 |
| Bills Receivable | 15,000 |
| Bills Payable | 20,000 |
| Reserve Fund | 30,000 |
| Calls in Advance | 5,000 |
| **Total** | **8,45,000** |

**Additional Information:**
1. Closing Stock: ₹75,000
2. Depreciate Machinery @ 10% p.a. and Furniture @ 15% p.a.
3. Unexpired Rent: ₹3,000
4. Outstanding Salaries: ₹4,000
5. Share Capital: 15,000 shares of ₹10 each, ₹8 called up and paid (all shares fully subscribed and allotted)

**Solution:**

*Step 1: Calculate Profit before Tax*
```
Gross Profit = Sales – (Opening Stock + Purchases – Closing Stock)
             = 6,80,000 – (60,000 + 4,80,000 – 75,000)
             = 6,80,000 – 4,65,000
             = ₹2,15,000

Net Profit before P&L adjustments:
Net Profit = Gross Profit – Expenses
Expenses: Salaries (42,000+4,000) + Rent (18,000-3,000) + Printing + Directors' Fees + Audit Fees + Bank Charges + Depreciation
= 46,000 + 15,000 + 6,000 + 12,000 + 8,000 + 2,000 + (20,000 + 6,000)
= 1,15,000

Net Profit = 2,15,000 – 1,15,000 = ₹1,00,000
```

*Step 2: Apportion Profit Prior to Incorporation*
Company incorporated on 1st July 2024 — that means the business was operated by the promoters before incorporation.

Period from 1st April 2024 to 30th June 2024 = 3 months (pre-incorporation)
Period from 1st July 2024 to 31st March 2025 = 9 months (post-incorporation)

Using Time Ratio (3:9 = 1:3):
Total Profit = ₹1,00,000
Pre-incorporation profit = ₹1,00,000 × 3/12 = ₹25,000 (Capital Profit → Capital Reserve)
Post-incorporation profit = ₹1,00,000 × 9/12 = ₹75,000 (Revenue Profit → P&L Surplus)

*Step 3: Prepare P&L Account Appropriation:*
```
Profit & Loss Account

Gross Profit b/d                      2,15,000
Less: Expenses (as above)            1,15,000
                                        ------
Net Profit before Tax                  1,00,000
                                        ======

Transfer to Capital Reserve             25,000   (pre-incorporation profits)
Balance carried to Balance Sheet       75,000   (post-incorporation profits)
                                        ======
```

*Step 4: Balance Sheet Extract:*
```
LIABILITIES
Share Capital (15,000 × ₹8 paid)            1,20,000
Reserve Fund                                        30,000
Capital Reserve (pre-incorporation profit)    25,000
P&L Surplus (post-incorporation profit)       75,000
Sundry Creditors                                 48,000
Bills Payable                                   20,000
Calls in Advance (separate liability)           5,000
Outstanding Salaries                             4,000

ASSETS
Machinery (2,00,000 – 20,000 dep.)           1,80,000
Furniture (40,000 – 6,000 dep.)               34,000
Closing Stock                                  75,000
Sundry Debtors                                 65,000
Bills Receivable                               15,000
Cash at Bank                                   88,000
Cash in Hand                                    5,000
Prepaid Rent                                    3,000
```

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
