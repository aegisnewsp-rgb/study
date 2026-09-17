---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-008
topicName: Issue of Shares
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
diagramPrompt: "Clean educational diagram showing the process of share issue from company incorporation to share allotment, including application money, allotment money, and calls — white background, exam-style illustration"

---

# Issue of Shares

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your CS Executive Accounting paper.

Issue of Shares is the mechanism by which a company raises equity or preference capital by offering shares under the **Companies Act, 2013** (Sec. 23–54) and, for public issues, the **SEBI (ICDR) Regulations, 2018**. Every accounting question on this topic reduces to five building blocks: issue at par/premium, calls in arrears, calls in advance, forfeiture–reissue, and underwriting.

| Term | What it means on the Balance Sheet |
|---|---|
| Authorised Capital | Maximum face value a company can issue (per MoA) |
| Issued Capital | Face value of shares actually offered to the public/existing holders |
| Subscribed Capital | Face value of shares applied for by investors |
| Called-up Capital | Portion of face value the company has demanded |
| Paid-up Capital | Portion of called-up money actually received |

> 💡 **High-Yield Memory Hook:** **A-I-S-C-P** = "**A**ll **I**ssued **S**hares **C**arry **P**aid-up Value" — read top to bottom of Schedule III; the same face value flows through Authorised → Issued → Subscribed → Called → Paid-up.

- **Securities Premium** (Sec. 52) = Issue Price − Face Value. Credited to Securities Premium Account; **cannot** be used for dividend or writing off commission.
- **Calls in Arrears** are a **debit** (asset); **Calls in Advance** are a **credit** (liability), never income.
- **Issue at discount is void** under Sec. 53 — only sweat equity under Sec. 54 is exempt.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with weeks to months before the exam.

#### Classification of Share Capital

Under Sec. 43 of the Companies Act 2013, the share capital of a public company consists of **equity share capital** (with voting rights and dividend after preference) and **preference share capital** (carrying a preferential right to dividend and capital repayment). Cumulative redeemable preference shares are the most common; irredeemable cumulative preference shares trigger an Ind AS liability-vs-equity classification test.

#### Accounting Entries — Issue at Par and Premium

On application, the company debits **Bank A/c** and credits **Share Application A/c**. On allotment, the excess application money is first adjusted toward allotment and any balance toward calls; only the residue is refunded. Premium received at any stage must be transferred to **Securities Premium A/c** at allotment, not on receipt.

> 📌 **Formula Check:** Securities Premium per share = (Issue Price − Face Value) in ₹; dimension M¹L⁰T⁰. Posted at allotment, not at application.

#### Calls in Arrears vs Calls in Advance

| Feature | Calls in Arrears | Calls in Advance |
|---|---|---|
| Nature | Asset (debit balance) | Liability (credit balance) |
| When it arises | Money due but not received | Money received before it is due |
| Balance Sheet | Schedule III, equity side, as a deduction | Separate liability head "Interest-free deposit / Calls in Advance" |
| Interest | Charged at the rate in Table F (or Articles) if Articles so provide; credited to P&L — not capitalised | No interest unless Articles permit |
| On forfeiture | Adjusted against Calls-in-Arrears A/c | Adjusted against the call when it falls due |

> 💡 **High-Yield Memory Hook:** **Arrears = A**sset (debtor of the company); **Advance = L**iability (creditor). Mnemonic: "**A**rrears is what they **o**we you; **A**dvance is what you **o**we them."

#### Forfeiture and Reissue (Sec. 53)

A company may forfeit shares when a shareholder fails to pay any **call** or any instalment on a public issue. The journal entry is:

> Share Capital A/c Dr. (called-up amount)
> Securities Premium A/c Dr. (premium not received — only if premium was already due and not received)
> To Calls in Arrears A/c
> To Share Forfeiture A/c (amount actually received, **excluding premium**)
> To Bank A/c (if any premium portion was received)

On **reissue**, any discount allowed is debited; the net gain is transferred to **Capital Reserve**. The capital reserve is capped so that the company does not suffer a net loss on the forfeiture–reissue cycle.

> 📌 **Formula Check:** Capital Reserve transfer = (Forfeited amount per share × Shares forfeited) − (Discount per share × Shares reissued). Dimension: ₹ (M¹L⁰T⁰).

#### Underwriting — Pro-rata Allotment

Underwriters guarantee subscription. Three categories:

| Type | Liability |
|---|---|
| **Marked** applications | Treated as having come from that specific underwriter |
| **Unmarked** applications | Distributed among underwriters in proportion to gross liability |
| **Firm** underwriting | Underwriter subscribes a fixed number regardless of public response |

Net Liability = Gross Liability − (Firm shares × Issue Price) − (Unmarked benefit credited). Most CS Executive numericals test a 3-step table: (1) gross liability, (2) unmarked benefit, (3) net liability.

#### Concept Comparison Matrix — Confusing Pairs

| Easily confused | Correct treatment |
|---|---|
| Securities Premium vs Profit & Loss A/c | Securities Premium is a **capital receipt**; P&L A/c is for revenue profits. Premium cannot fund dividend or commission write-off. |
| Forfeited Amount vs Discount on Reissue | Forfeited Amount = money actually received (excl. premium); Discount = loss on reissue. Capital Reserve = the difference, capped. |
| Calls in Arrears vs Calls in Advance | Arrears = debit; Advance = credit. Often swapped in MCQs. |
| Rights Issue (Sec. 62(1)) vs Bonus Issue (Sec. 63) | Rights = fresh issue at a price (cash inflow); Bonus = capitalisation of reserves/securities premium (no cash inflow). |
| Sweat Equity (Sec. 54) vs ESOP (Sec. 62(1)(b)) | Sweat = to directors/employees for non-cash consideration; ESOP = option to subscribe at a future price. |
| Preferential Allotment vs Private Placement | Preferential = to identified persons (Sec. 62(1)(c)); Private Placement = up to 200 persons in a financial year (Sec. 42). |

#### 🎯 Exam-Level Worked Problem

**Question:** X Ltd. issued 50,000 equity shares of ₹10 each at a premium of ₹2 per share, payable as: Application ₹4 (incl. ₹1 premium), Allotment ₹5 (incl. ₹1 premium), First & Final Call ₹3. Applications were received for 45,000 shares and all were allotted. A shareholder holding 1,000 shares failed to pay the call money; these shares were forfeited. 600 of these were reissued at ₹8 per share (₹2 discount). Pass journal entries and compute the amount transferable to Capital Reserve.

#### Solution:

*Step 1 — Application (45,000 × ₹4 = ₹1,80,000):*
Bank A/c Dr. 1,80,000
To Share Application A/c 1,80,000

*Step 2 — Allotment (50,000 × ₹5 = ₹2,50,000):*
Share Allotment A/c Dr. 2,50,000
To Share Capital A/c 2,00,000
To Securities Premium A/c 50,000

*Step 3 — Call (50,000 × ₹3 = ₹1,50,000):*
Shares First Call A/c Dr. 1,50,000
To Share Capital A/c 1,50,000

*Step 4 — Bank receipt on call:* Bank received on 49,000 shares = ₹1,47,000; Arrears = ₹3,000.

*Step 5 — Forfeiture of 1,000 shares (called-up ₹9, premium ₹1 unpaid → premium due was ₹1,000; forfeited amount excl. premium = ₹8 × 1,000 = ₹8,000, premium already received = ₹1,000 stays with company):*
Share Capital A/c Dr. 9,000
To Calls in Arrears A/c 3,000
To Share Forfeiture A/c 6,000 *(i.e., ₹4 + ₹5 − ₹1 premium returned to capital reserve pool — see note)*

*Step 6 — Reissue of 600 shares at ₹8 (₹2 discount):*
Bank A/c Dr. 4,800
Share Forfeiture A/c Dr. 1,200
To Share Capital A/c 6,000

*Step 7 — Transfer to Capital Reserve:*
Forfeited amount on 600 reissued shares = ₹6 × 600 = ₹3,600; less discount ₹1,200 = **₹2,400** transferable.

> ⚠️ **Examiner Trap:** The premium component already received is **not** part of "forfeited amount" because it lawfully belongs to the company and remains in Securities Premium. Forgetting this inflates Capital Reserve by ₹1,000 and misclassifies a capital receipt as forfeited gain.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

**Bonus through Securities Premium.** The Companies (Amendment) Act, 2017 clarified that capitalisation of **Securities Premium** for bonus issue is now permitted under Rule 14 of the Companies (Share Capital and Debentures) Rules, 2014 — but only if the Articles authorise it. Pre-amendment jurisprudence had struck this down (the Supreme Court's view in the earlier regime), so students often misquote. Today, bonus may be issued out of: (a) free reserves, (b) securities premium account, and (c) capital redemption reserve.

**Forfeiture when premium is unpaid but partly called.** Sec. 53 mandates that any premium **due but unpaid** cannot be forfeited — the company must recover it as a debt. The forfeiture entry must therefore debit Securities Premium only for the premium portion that was actually due at the time of forfeiture. If the allotment premium of ₹1 was due and unpaid, ₹1,000 is debited to Securities Premium A/c alongside Share Capital.

**Pro-rata with over-subscription.** When applications exceed shares offered, the excess application money is first applied to **additional shares** if so elected by the applicant; otherwise it is refunded. Many exam scenarios combine this with under-subscription in another share class, requiring an inter-class adjustment that students regularly miss.

**Sweat Equity (Sec. 54).** Issue at a discount to directors/employees for non-cash consideration or for providing know-how. Discount is allowed up to the lower of (a) the discount permitted by rules, or (b) the value of consideration. Conditions: Central Government approval, within authorised capital, and disclosure in the Board's Report.

**ESOP — Ind AS 102 angle.** Under Ind AS 102, ESOPs are measured at **fair value of the option** on grant date using a pricing model (Black-Scholes or binomial). The fair value is amortised over the vesting period as employee compensation expense with a credit to Share-Based Payment Reserve; the corresponding debit goes to P&L. CS Executive does not numerically test Black-Scholes but frequently asks the **journal pattern** at grant, vesting and exercise.

#### Schedule III (Division I) Disclosure Pattern

Under Schedule III, Share Capital is shown as the first item on the Equity & Liabilities side with sub-classification into Authorised, Issued, Subscribed and Paid-up. A reconciliation table is mandatory: **Shares outstanding at the beginning + issued during the year − forfeited/redeemed = Shares outstanding at the end**. Forfeited shares are reported as a deduction only when reissue is pending; once reissued, they merge into paid-up capital.

#### Common Mistakes and How to Avoid Them

| Trap | Why students fall for it | Fix |
|---|---|---|
| Crediting Calls in Advance to Income | Looks like "extra money received" | Always treat as a **liability** until the share is allotted or transferred |
| Forfeiting the premium portion | Premium received is "in the bank" | Only **forfeited amount** (excluding premium) goes to Share Forfeiture A/c |
| Using "shares forfeited" instead of "shares reissued" in Capital Reserve formula | Mechanically reuses the bigger number | Discount is applied only on **reissued** shares |
| Treating Securities Premium as distributable | It is "profit" in common parlance | Capital receipt; restricted use under Sec. 52 |
| Ignoring unmarked benefit in underwriting | "Unmarked" sounds like "no liability" | Distribute in proportion to gross liability; reduce each underwriter's net liability |

#### Connections to Adjacent Topics

- **Issue of Debentures** (Module companion) — shares are equity instruments, debentures are debt; the loss on issue of debentures is written off against Securities Premium over the term, a use not allowed for share capital losses.
- **Forfeiture of Shares vs Surrender of Shares** — surrender is permitted only if the Articles expressly provide for it (and only to the extent shares are forfeited); it is otherwise illegal.
- **Buy-back of Shares (Sec. 68–70)** — only free reserves + securities premium + fresh issue proceeds may be used, with the **Capital Redemption Reserve** route replacing the face value of shares bought back.
- **Accounting Standards** — Ind AS 32 classifies financial instruments; Ind AS 109 applies if any receivable component is financial in nature (rare for pure share capital).

#### Advanced Practice Prompts

1. **Pro-rata with underwriting twist:** A Ltd. issued 1,00,000 shares; applications received for 90,000. Underwriters A, B and C agreed to underwrite 40,000, 35,000 and 25,000 shares respectively, with firm underwriting of 5,000, 3,000 and 2,000. Compute each underwriter's net liability, assuming marked applications are 30,000 (A), 25,000 (B), 20,000 (C).
2. **Forfeiture-reissue with premium reconstruction:** B Ltd. forfeited 2,000 shares (₹10 called up, ₹5 premium unpaid, ₹7 per share received) and reissued 1,500 at ₹8 per share as fully paid. Show the Capital Reserve transferred and the entries in the Books of B Ltd.

> 💡 **High-Yield Revision Hook:** Before writing any journal, ask four questions — (1) At par or premium? (2) Any arrears/advance? (3) Is forfeiture involved? (4) Schedule III disclosure needed? This four-step filter prevents 80% of entry-related mistakes in the exam hall.

---

## Continue your study

- **[View this topic in your CS Executive roadmap](/roadmap/?exam=cs-exec&duration=1mo)** — see where "Issue of Shares" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cs-exec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CS Executive exam overview](/exams/cs-exec/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/cs-exec/accounting/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
