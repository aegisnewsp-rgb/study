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
lastUpdated: "2026-09-16"
diagramPrompt: "Clean educational diagram showing share capital structure, types of shares (equity and preference), share issue entries flow, and forfeiture/reissue process — white background, exam-style illustration"

---

# Company Accounts

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Company Accounts** is the specialised branch of financial accounting that governs how joint-stock companies prepare, present and disclose their financial statements under the Companies Act, 2013, Schedule III, and Accounting Standards issued by ICAI (AS) / Ind AS. The CS Executive paper tests this area through numerical problems on share capital, forfeiture, debenture redemption, goodwill valuation and amalgamation, plus theory on holding-company consolidation.

| Key Term | Core Idea (with units) |
|---|---|
| **Equity Share Capital** | Voting shares, dividend paid from profits, repaid last on winding-up (Section 43) |
| **Preference Share Capital** | Priority over equity for dividend and capital; cumulative/participating variants (Section 43) |
| **Forfeiture** | Amount received (incl. premium if any) transferred to *Share Forfeiture A/c*; discount on reissue is debited there (Section 53) |
| **DRR** | Debenture Redemption Reserve = **15 %** of nominal value of outstanding debentures (NBFCs); credited out of profits |
| **Goodwill (Super Profit)** | (Average Profit − Normal Profit) × Years' Purchase; Normal Profit = Capital Employed × Normal Rate / 100 (INR) |
| **Amalgamation (AS-14)** | *Pooling of Interests* merges reserves; *Purchase Method* treats acquisition as a purchase and computes goodwill/capital reserve |

- **Issue price of share** = Face Value (INR) + Premium (INR/share); discount on issue is prohibited except sweat equity.
- **Calls in Arrears** = Σ (Shares in arrears × Unpaid amount), INR; interest @ rate × time/12 is debited to the allottee.
- **Sinking Fund instalment** = Redemption Value ÷ Annuity factor at rate *i* for *n* years (INR).

> 💡 **High-Yield Memory Hook:** **"FPC-DG-GAS"** — Forfeiture → Premium-stays-in-Capital (Forfeited A/c); DRR = 15 %; Goodwill uses Average + Super + Capitalisation; Amalgamation → Same balance sheet (Pooling) or New (Purchase); Share capital priority: **P**reference → **E**quity.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Share Capital, Forfeiture and Reissue
Under **Sections 43-47** of the Companies Act, 2013, a company can issue equity and preference shares at par, at premium, or (only as sweat equity under Section 54) at discount. When a shareholder fails to pay calls, the company may **forfeit** the shares; the amount already received — including any securities premium paid at the time of application or allotment — must be **credited to the *Share Forfeiture Account*** and cannot be treated as capital profit available for dividend (this is the most-tested ICAI concept).

On **reissue**, any discount allowed is debited to the *Share Forfeiture Account* itself. The balance remaining after discount represents the company's gain; it can later be transferred to **Capital Reserve** only at the year-end and **only to the extent of discount actually allowed** on reissue.

| Item | Forfeiture Entry | Reissue Entry |
|---|---|---|
| Called-up capital (per share) | Dr. Share Capital A/c | — |
| Premium received | Dr. Securities Premium A/c | — |
| Calls in Arrears | — | Dr. Bank A/c |
| Discount on reissue | — | Dr. Share Forfeiture A/c |
| Bank (amount received) | Cr. Calls in Arrears / Bank | Cr. Share Capital (face) |

#### Debenture Redemption and Sinking Fund
Section 71 read with **Rule 18(1) of the Companies (Share Capital and Debentures) Rules, 2014** requires every company (other than NBFCs, where the threshold is 15 %) to create a **DRR of 25 % of the nominal value of outstanding debentures**, before redemption out of profits. The **Sinking Fund Method** transfers a fixed annual instalment — calculated via the annuity formula — to a *Debenture Redemption Fund Account*, which is invested outside the business in trustee securities; the interest earned accretes the fund.

$S = \dfrac{R}{i} \Big[ 1 - (1+i)^{-n} \Big] \quad \Rightarrow \quad R = \dfrac{S \cdot i}{1 - (1+i)^{-n}}$

where **S** = redemption value (INR), **R** = annual instalment (INR), **i** = rate of interest (decimal), **n** = years to redemption.

#### Concept Comparison Matrix
The following pairs are routinely confused in MCQs:

| Concept | Applies To | Calculation Base | Result Treatment |
|---|---|---|---|
| Goodwill – Super Profit Method | New acquisition | Average Profit − Normal Profit | Multiplied by Years' Purchase |
| Goodwill – Capitalisation of Average Profit | Going concern valuation | Average Profit × (100 / Normal Rate) − Capital Employed | Single number |
| Goodwill – Capitalisation of Super Profit | Going concern valuation | Super Profit × (100 / Normal Rate) | Single number |
| Net Asset Method | Share valuation | Assets − Outside Liabilities | Intrinsic value per share |
| Yield Method | Preference shares / constant-dividend equity | (Expected return / Yield %) | Capitalised value |
| AS-14 Pooling of Interests | Amalgamation | Book values merged | Reserves continue at carrying amount |
| AS-14 Purchase Method | Amalgamation | Fair values + Purchase Consideration | Goodwill/Capital Reserve arises |

#### 🎯 Exam-Level Worked Problem
**Question:** A company issued 10,000 equity shares of ₹ 100 each at a premium of ₹ 20 per share, payable as: Application ₹ 40 (incl. ₹ 10 premium), Allotment ₹ 50 (incl. ₹ 10 premium), First & Final Call ₹ 30. All sums were received except on 500 shares (applicant failed to pay allotment and call). These shares were forfeited immediately after allotment and later reissued at ₹ 80 per share as fully paid. Pass journal entries and compute the amount transferred to Capital Reserve.

#### Solution:
1. **On forfeiture** (500 shares; called-up ₹ 90 each, premium received ₹ 5,000):
   - Share Capital A/c Dr. ₹ 45,000 (500 × 90)
   - To Calls in Arrears A/c ₹ 45,000
   - *(Note: Securities Premium received ₹ 5,000 had already been credited to SPR on receipt, so it is **not** routed through forfeiture entry — only called-up capital is cancelled.)*

2. **Bank receipt on forfeiture**: ₹ 35,000 (500 × ₹ 70 = application ₹ 30 + allotment ₹ 40) already received. ₹ 45,000 calls in arrears are cancelled against called-up capital. **Net gain per share forfeited = ₹ 70** = ₹ 35,000 standing to the credit of *Share Forfeiture A/c*.

3. **On reissue of 500 shares at ₹ 80 as fully paid (face ₹ 100)**:
   - Bank A/c Dr. ₹ 40,000 (500 × 80)
   - Share Forfeiture A/c Dr. ₹ 10,000 (500 × 20 discount)
   - To Share Capital A/c ₹ 50,000 (500 × 100)

4. **Capital Reserve** = Forfeited amount − Discount on reissue = 35,000 − 10,000 = **₹ 25,000**.

> ⚠️ **Examiner Trap:** Students often debit Securities Premium ₹ 5,000 in the forfeiture entry — this is wrong because premium was **already credited to SPR at receipt**; cancelling only the called-up capital keeps SPR intact and undistributable. Another common slip: transferring the *full* ₹ 35,000 to Capital Reserve without netting off the ₹ 10,000 discount used.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Holding Company Accounts and Consolidation
When a company acquires more than 50 % of another company's voting power, **AS-21 / Ind AS 110** mandates preparation of a **Consolidated Balance Sheet** and Consolidated Statement of Profit and Loss. The parent's share of the subsidiary's net assets on the **date of acquisition** is compared with the **Cost of Investment**; the difference is either **Capital Reserve** (cost < share) or **Goodwill** (cost > share). **Minority Interest** equals the minority shareholders' proportion of the subsidiary's net assets on the acquisition date only — post-acquisition profits attributable to minority are debited to minority interest and credited to P&L (profit share) or reserves (loss share).

#### Amalgamation Mechanics Under AS-14
Under **Pooling of Interests**, the resultant company's share capital equals the total share capital of the transferor companies (plus any fresh issue), reserves are simply aggregated at carrying amounts, and no goodwill arises. Under **Purchase Method**, all assets and liabilities are restated at fair values, Purchase Consideration is allocated, and the balancing figure is Goodwill (DR) or Capital Reserve (CR). A frequent error: students book **dividend paid by the transferor pre-amalgamation** as a charge to P&L of the combined entity — it must be adjusted through reserves because the post-acquisition P&L of the transferor is *not* brought in.

#### Edge Cases and Advanced Traps

1. **Premium on redemption of debentures** — debited to P&L over the debentures' life (AS-16 read with Section 71); writing it off from Securities Premium is **not** permitted.
2. **Profit prior to incorporation** — apportioned strictly on a **time basis** (months of pre-incorporation trading ÷ total months), not on the basis of revenue earned.
3. **Calls in advance** — interest credited to a separate liability (*Calls in Advance Interest A/c*), never to P&L, because it is a return of capital, not revenue.
4. **Cumulative preference dividend in arrears** — disclosed as a contingent liability in the **Notes to Accounts**; not provided for in books until declared.
5. **Bonus issue** — permissible out of Securities Premium Reserve, General Reserve and Capital Reserve only; **Capital Redemption Reserve** may also be utilised (Section 68).
6. **Liquidator's Final Statement of Account** — preferential payments follow Schedule III of the Insolvency and Bankruptcy Code, 2016: secured creditors (to the extent of security), workmen's dues (24 months), employee wages, taxes, then unsecured creditors; equity contributories come last.
7. **Valuation of goodwill when capital employed fluctuates** — use **Weighted Average Profit** with corresponding weights to dampen the effect of abnormal years.

#### Adjacent Topics Worth Linking
- **Internal Reconstruction vs. External Reconstruction** — capital reduction under Section 66; distinguish from amalgamation.
- **Financial Statements Preparation** — Schedule III format; mandatory disclosure of shareholding pattern, contingent liabilities and related-party transactions.
- **Mergers & Acquisitions (Ind AS 103)** — only companies not yet on Ind AS continue to follow AS-14.

#### Advanced Practice Prompts
1. **Q:** A company issues 20,000 12 % debentures of ₹ 100 each at 5 % discount, redeemable at 10 % premium after 5 years. Calculate the annual Sinking Fund instalment assuming 9 % reinvestment rate. Comment on the DRR requirement.
2. **Q:** Holding Co. acquires 80 % of Subsidiary Co. for ₹ 1,60,000 when Subsidiary's net assets are ₹ 1,50,000. Compute Goodwill/Capital Reserve and the Minority Interest appearing in the Consolidated Balance Sheet. Show the adjustment journal entry in the Consolidated P&L for post-acquisition minority profit of ₹ 12,000.

---

## Continue your study

- **[View this topic in your CS Executive roadmap](/roadmap/?exam=cs-exec&duration=1mo)** — see where "Company Accounts" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cs-exec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CS Executive exam overview](/exams/cs-exec/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/cs-exec/accounting/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
