---
exam: cs-exec
examName: CS Executive
subject: accounting
subjectName: Accounting
topic: accoun-005
topicName: Bank Reconciliation Statement
weight: 3
country: india
generated: "2026-03-25T17:00:00"
diagramPrompt: "Clean educational diagram showing the relationship between Cash Book balance and Pass Book (Bank Statement) balance, with arrows indicating items that cause differences — unpresented cheques, uncredited deposits, bank charges, direct debits, interest credited — white background, exam-style illustration"

lastUpdated: "2026-09-16"
---

# Bank Reconciliation Statement

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **Bank Reconciliation Statement (BRS)** reconciles the bank balance shown in the **Cash Book (CB)** with the balance shown in the **Pass Book (PB)** on a given date, so the true bank position can be identified. Differences arise from timing, omissions, errors, or transactions recorded by only one party.

| Term | Meaning | Adjustment Rule (start from Cash Book side) |
|---|---|---|
| Cheques issued but not presented | Sent to supplier, not yet encashed | **Add** to CB balance |
| Cheques deposited but not cleared | Sent to bank, not yet credited | **Less** from CB balance |
| Interest/Dividend credited by bank | PB only | **Add** to CB balance |
| Bank charges / Debit interest | PB only | **Less** from CB balance |
| Direct deposit by customer | PB only | **Add** to CB balance |
| Direct payment by bank (EMI, insurance) | PB only | **Less** from CB balance |
| Dishonoured cheque (deposited) | Reversal needed in CB | **Less** from CB balance |

> 💡 **High-Yield Memory Hook:** **"ADD LESS — nature decides"** — From Cash Book side, **add** items that increase Pass Book balance (cheques issued not presented, interest credited, direct receipts); **less** items that decrease it (cheques deposited not cleared, bank charges, direct payments). For overdraft starting balance, every Add/Less reverses sign.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Purpose and Scope
BRS detects **timing differences, errors, omissions, and possible fraud** between two parallel records of the same bank account. The Cash Book is maintained by the business, while the Pass Book is maintained by the bank. The ICSI prescribes the **adjusted Cash Book method** as the preferred approach: first rectify one-sided errors in the Cash Book, then prepare BRS to reconcile the corrected CB balance with PB balance.

#### Starting Point and Direction Rule
Choose the starting book that **minimises adjustments**. If the Cash Book shows a favourable (credit) balance, start from CB. If it shows an overdraft (debit) balance, start from PB. Direction rule: *the item is added when it brings the starting balance closer to the target balance.*

#### Concept Comparison Matrix

| Aspect | Cash Book (CB) | Pass Book (PB) |
|---|---|---|
| Maintained by | Business / Accountant | Bank |
| Effect of deposit | Debit (Dr.) increases balance | Credit (Cr.) increases balance |
| Effect of withdrawal | Credit (Cr.) decreases balance | Debit (Dr.) decreases balance |
| Cheque issued by business | Recorded immediately | Recorded only on presentation |
| Bank charges, interest | Not visible till PB received | Reflected at once |
| Balance nature | Favourable = Cr.; Overdraft = Dr. | Favourable = Cr.; Overdraft = Dr. |

| Item | Appears in CB? | Appears in PB? | BRS Adjustment Needed? |
|---|---|---|---|
| Contra entry (cash deposited directly into bank) | Yes | Yes | No |
| One-sided error in CB | Yes (wrong) | No (correct) | Yes — rectify CB first |
| One-sided error in PB | No | Yes (wrong) | Yes — adjust in BRS |
| Two-sided equal error | Yes (wrong) | Yes (same error) | No — cancels out |
| Dishonoured cheque (deposited by firm) | Yes (originally) | Yes (reversed) | Adjust only if not yet rectified in CB |

#### Steps to Prepare BRS (Adjusted Cash Book Method)
1. Rectify all one-sided errors in the Cash Book by passing journal entries.
2. Balance the corrected Cash Book to obtain the **adjusted CB balance**.
3. List items appearing only in Pass Book (bank charges, interest, direct deposits, direct payments).
4. Apply Add/Less logic from CB side using the formula:
   *Adjusted CB balance + items increasing PB − items decreasing PB = Balance as per PB*
5. Match with PB balance; difference should be zero. Any residual mismatch indicates a missed item.

#### 🎯 Exam-Level Worked Problem
**Question:** As on 31st March 2025, the Cash Book of M/s R.K. & Co. showed a favourable balance of ₹2,40,000. On scrutiny: (i) Cheques issued but not presented totalling ₹75,000; (ii) Cheques deposited but not yet cleared ₹1,10,000; (iii) Bank charges debited by bank ₹1,500; (iv) Interest on deposit credited by bank ₹6,200; (v) A customer directly deposited ₹25,000 into the firm's bank account; (vi) Insurance premium paid by bank on behalf of firm ₹8,400. Prepare the BRS and find the balance as per Pass Book.

#### Solution:
Start from Cash Book (favourable balance). Apply rules:

| Item | Treatment | Amount (₹) |
|---|---|---|
| Balance as per Cash Book (favourable) | Start | +2,40,000 |
| Cheques issued but not presented | Add | +75,000 |
| Cheques deposited but not cleared | Less | −1,10,000 |
| Bank charges | Less | −1,500 |
| Interest on deposit credited | Add | +6,200 |
| Direct deposit by customer | Add | +25,000 |
| Insurance paid by bank (direct payment) | Less | −8,400 |
| **Balance as per Pass Book (favourable)** | Result | **₹2,26,300** |

> ⚠️ **Examiner Trap:** Students frequently interchange items (i) and (ii) — *cheques issued but not presented* must be **added** (Pass Book is still lower), while *cheques deposited but not cleared* must be **deducted** (Pass Book will later rise when cleared). Getting this swap costs full marks.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

| Situation | Treatment |
|---|---|
| CB shows overdraft, PB shows favourable | Start from PB side; every Add/Less direction reverses |
| Post-dated cheque issued | No BRS entry till date arrives and cheque is presented |
| Stale cheque (>3 months old) | Reverse from CB if originally recorded; cheque becomes void |
| Stop-payment by drawer | Bank will not honour; reverse the original PB-side entry via BRS |
| NSF (Not Sufficient Funds) cheque deposited | Reverse in CB: debit the party, credit Bank |
| Interest on loan debited by bank | Less from CB balance (overdraft) |
| Dividend/interest collected by bank | Add to CB balance |
| Bank errors (e.g., wrong debit) | Less if starting from PB; Add if starting from CB |
| Credit card commission / GST on bank charges | Treated as part of bank charges (Less) |
| Electronic clearing (ECS/NEFT) direct credit | Add to CB |

#### Mathematical Limit — Algebraic Verification
Using the universal formula: **Balance as per CB + Σ adjustments = Balance as per PB**, where favourable = (+ve) and overdraft = (−ve). Plug in: (+2,40,000) + (+75,000) + (−1,10,000) + (−1,500) + (+6,200) + (+25,000) + (−8,400) = **+₹2,26,300**. The result is positive, confirming a favourable Pass Book balance — consistent with starting from a favourable CB.

#### Connection to Adjacent Topics
BRS links directly to **Rectification of One-Sided Errors** (CS Executive Accounting Module 2) and **Bank Audit** queries under Schedule III of the Companies Act, 2013. It also feeds into the **Cash Flow Statement** reconciliation of cash and cash equivalents (AS-3 / Ind AS-7). Understanding BRS makes subsequent topics on consignment accounts, partnership dissolution, and company accounts easier because all rely on the same Add/Less logic for reconciling independent records.

#### Common Mistakes in Exam Papers
1. **Starting-point selection error** when CB has overdraft — leads to mass sign reversal mistakes.
2. **Treating dishonoured cheques as fresh entries** — must reverse the original deposit.
3. **Ignoring bank-only transactions** (charges, ECS credits, direct debits for SIPs/EMIs).
4. **Adjusting contra entries** — both books already match; no BRS item.
5. **Forgetting stale or post-dated cheques** — they are contingent, not yet real entries.
6. **Mixing up "interest on overdraft" with "interest on deposit"** — opposite directions.

#### Advanced Practice Prompts
1. A firm's Cash Book shows an **overdraft of ₹1,80,000**. Cheques issued but not presented: ₹65,000. Cheques deposited but not cleared: ₹42,000. Bank charged ₹2,500 as commission and credited ₹3,800 as interest on a fixed deposit held with the same bank. What is the balance as per Pass Book?
2. Pass Book shows a favourable balance of ₹5,12,000. A cheque of ₹50,000 deposited was dishonoured; bank charged ₹500 return memo fee. Cheques issued but not presented totalled ₹1,25,000. Prepare BRS starting from Pass Book to find Cash Book balance.

> 📌 **Formula Check:** All adjustments are in **₹ (INR)** and follow the principle *Add when target-side balance increases, Less when it decreases.* For overdraft, both the starting balance and every adjustment flip sign relative to the favourable case.

---

## Continue your study

- **[View this topic in your CS Executive roadmap](/roadmap/?exam=cs-exec&duration=1mo)** — see where "Bank Reconciliation Statement" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cs-exec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CS Executive exam overview](/exams/cs-exec/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/cs-exec/accounting/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
