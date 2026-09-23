---
exam: accagl
examName: ACCA/CA Pakistan
subject: accounting
subjectName: "Accounting"
topic: accoun-008
topicName: Issue of Shares
weight: 3
country: pakistan
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Issue of Shares

### 🟢 Lite — Quick Review (1h–1d)
> One-pass revision covering the three things ACCA/CA Pakistan markers actually score: the formula, the stages, and where the money sits.

Issue of shares converts a company's authorised capital ceiling into actual cash or capitalised assets. The mechanic is straightforward: subscribers pay the **issue price** per share, the company banks the cash, and the **nominal value** portion becomes share capital while any excess sits in a separate reserve.

- **Issue price** = Nominal (par) value + Premium, both in PKR per share, total in PKR/share.
- **Cash received** = Number of shares issued × Issue price per share, in PKR.
- **Share premium** = Number of shares × Premium per share, in PKR — locked in a capital reserve.

Money arrives in three labelled stages — **application**, **allotment**, **call(s)** — each with its own journal block. Application money is non-refundable except in defined rejection cases; allotment triggers the reclassification from cash received in advance to share capital; calls demand the unpaid balance on dates fixed by directors.

> 💡 **High-Yield Memory Hook — "AAC" the Three Stages:** **A**pplication first, **A**llotment second, **C**alls last. Three journal entries per share issue, in that fixed order.

The premium is sacred: it is *not* profit, never credited to retained earnings, and is non-distributable except for writing off preliminary expenses, issuing bonus shares, or providing premium on redemption of redeemable preference shares.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Working knowledge of journals, reserve treatment, and adjustment entries that the 3–5 mark question always demands.

#### Capital Stack: Authorised to Paid-Up

Every share journey passes through four nested categories, and examiners love testing whether you know which figure lands on the balance sheet.

| Category | Definition | Balance sheet treatment |
|---|---|---|
| Authorised capital | Maximum a company *may* issue, fixed by Memorandum of Association | Note disclosure only — never an asset or liability |
| Issued capital | Shares actually offered to subscribers | Part of equity |
| Called-up capital | Portion of nominal value the company has demanded | Part of equity |
| Paid-up capital | Called-up amount actually received in cash | Part of equity |

A company authorised for 10 million PKR may issue only 6 million, call up 4 million, and have 3.8 million actually paid — all four figures exist simultaneously, only the last three appear as liabilities/equity.

#### The Three-Stage Journal Pattern

For an issue at par, each stage follows a fixed double-entry rhythm:

1. **Application** — Dr Bank, Cr Share Application (or directly to Share Capital + Premium).
2. **Allotment** — Dr Share Allotment, Cr Share Capital + Cr Share Premium.
3. **Calls** — Dr Bank, Cr Calls-in-Arrears adjustment, Cr Share Capital.

When shares are issued at a premium, the premium crystallises at the **allotment** stage, not at application. Application money is treated as a deposit until shares are allotted.

#### Concept Comparison Matrix

| Concept | Capital or Revenue? | Where credited/charged | Distributable? |
|---|---|---|---|
| Share premium | Capital reserve | Cr Share Premium Account | No — Section 42 |
| Underwriting commission | Revenue expenditure | Dr P&L | n/a (expense) |
| Brokerage on issue | Revenue expenditure | Dr P&L | n/a (expense) |
| Calls-in-arrears | Current asset | Dr Calls-in-Arrears A/c | n/a (receivable) |
| Calls-in-advance | Current liability (with interest) | Cr Calls-in-Advance A/c | Repayable on demand |
| Forfeited shares (reissue) | Capital — Share Forfeiture A/c | Cr Share Forfeiture | Transfer to Share Capital on reissue |

The capital-versus-revenue boundary is the single most exploited trap. Underwriting commission and brokerage are *not* deducted from share capital or share premium; they hit the profit and loss account because they reward services, not capital formation.

#### Worked Scenario — Premium Issue with Arrears

Hussain Ltd issues 100,000 ordinary shares of PKR 10 each at a PKR 4 premium, payable as PKR 4 on application, PKR 6 (including premium) on allotment, and PKR 4 on call. A shareholder holding 1,000 shares fails to pay the call.

- Application money: 100,000 × PKR 4 = **PKR 400,000** received.
- Allotment money due: 100,000 × PKR 6 = PKR 600,000; balance after application = 100,000 × PKR 2 = **PKR 200,000** (plus PKR 4 premium crystallised = PKR 400,000 to Share Premium).
- Call money due: 100,000 × PKR 4 = PKR 400,000; received = 99,000 × 4 = PKR 396,000.
- **Calls-in-arrears**: 1,000 × PKR 4 = **PKR 4,000** as a debit balance.

Share Capital credited = 100,000 × PKR 10 = **PKR 1,000,000**. Share Premium credited = 100,000 × PKR 4 = **PKR 400,000**.

> ⚠️ **Examiner Trap:** Candidates often debit Calls-in-Arrears against Share Capital in the balance sheet, reducing stated equity. The correct treatment is a separate current-asset receivable — Share Capital remains at the full called-up amount until the share is formally forfeited.

---

### 🔴 Extended — Deep Study (3mo+)
> Boundary cases, inter-company adjustments, and the consolidation hooks that mark the difference between a pass and a distinction.

#### Edge Cases That Change the Journal

- **Issue to vendors (Section 88, Companies Act 2017):** shares can be issued at a discount only when allotted as full or part consideration for a business acquired. The discount is debited to Goodwill, not to a separate Discount-on-Issue account, because the Act treats this as an exception carved out for takeovers.
- **Forfeiture then reissue at a loss:** the Share Forfeiture A/c absorbs the previously paid amount; on reissue at a discount, the loss transfers to Share Capital, never to P&L. Reissuing forfeited shares at a premium routes the new premium to Share Premium, but the forfeited amount only re-enters Share Capital to the extent of any discount given.
- **Pro-rata allotment:** when applications exceed shares available, excess application money must be refunded *or* transferred to allotment with the applicant's consent. Silent retention is a Companies Act irregularity.

#### Consolidation and EPS Knock-On Effects

Issue of shares to a parent by its subsidiary creates an inter-company holding that consolidation must eliminate. Two complications surface in exam questions:

1. **Pre-acquisition vs post-acquisition profit split:** the subsidiary's reserves at the acquisition date must be separated; share consideration paid above nominal value sits in Goodwill on consolidation, not in the subsidiary's Share Premium.
2. **EPS denominator change:** a fresh share issue mid-year requires weighted-average shares for the EPS denominator. Bonus shares are treated as if issued at the start of the earliest period reported; rights issues use a time-weighted adjustment factor.

#### Advanced Practice Prompts

1. ABC Ltd issued 50,000 shares of PKR 10 each at PKR 12, payable PKR 5 application, PKR 4 (including PKR 2 premium) allotment, PKR 3 first call. A shareholder with 2,000 shares defaulted on the call and 1,500 shares were subsequently forfeited and reissued at PKR 8 as fully paid. Prepare journal entries for forfeiture and reissue, and compute the final Share Capital and Share Premium balances.
2. XYZ Group acquires 80% of Hussain Ltd by issuing 200,000 of its own PKR 10 shares at market price PKR 18. The investment appears as PKR 3.6 million in XYZ's books with a corresponding Share Premium of PKR 1.6 million. Show the consolidation adjustment eliminating this inter-company holding and compute goodwill, explaining why the parent's share premium is not the consolidated share premium.

---

## Continue your study

- **[View this topic in your ACCA/CA Pakistan roadmap](/roadmap/?exam=accagl&duration=1mo)** — see where "Issue of Shares" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=accagl&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ACCA/CA Pakistan exam overview](/exams/accagl/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/accagl/accounting/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
