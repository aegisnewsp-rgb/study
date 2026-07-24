---



exam: nat-i
examName: NAT-I (NTS)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-4
topicName: Profit and Loss
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.134611"
lastUpdated: "2026-07-24"
diagramPrompt: "Educational diagram illustrating Profit and Loss with clear labels, white background, exam-style illustration"




---

# Profit and Loss

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Profit and Loss measures the gain or loss when selling price (SP) differs from cost price (CP). **Profit = SP − CP**, **Loss = CP − SP**, and every percentage is computed on CP, never on SP. The two most frequent NAT-I traps are (1) using SP as the base for percentage and (2) assuming two items sold at the same price — one at x% profit and one at x% loss — break even. They actually yield a guaranteed loss of **x²/10 %**.

- **Profit %** = (Profit / CP) × 100
- **Loss %** = (Loss / CP) × 100
- **SP** = CP × (1 + Profit%/100); **CP** = SP × 100 / (100 + Profit%)
- **Discount** sits on Marked Price, profit/loss sits on CP — different bases.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core definitions and the CP-as-base rule

The four commercial-mathematics price labels are **CP** (what the seller pays), **MP** (the list/tag price), **SP** (what the buyer finally pays), and **Discount** (MP − SP). Profit and loss percentages are *always* measured against CP, while discount is always measured against MP. Conflating these two bases is the single most common source of wrong answers in NAT-I.

#### The standard percentage conversions

The two formula pairs you must convert without hesitation:

| Want | Given | Formula |
| --- | --- | --- |
| SP | CP, Profit% | CP × (100 + g%) / 100 |
| CP | SP, Profit% | SP × 100 / (100 + g%) |
| SP | CP, Loss% | CP × (100 − L%) / 100 |
| CP | SP, Loss% | SP × 100 / (100 − L%) |

#### The "two items at same SP" identity

When the same SP is charged for two articles with equal CP — one at x% profit, the other at x% loss — total CP = 2·CP_each, total SP = 2·SP_each, and the net loss simplifies to **x²/10 %** of CP. So 20% + 20% gives a 4% loss, not zero. This identity is tested at least once every NAT-I cycle.

#### Successive discounts

Two successive discounts of D₁% and D₂% on the same MP give an effective single discount of **D₁ + D₂ − (D₁ × D₂)/100**. So 20% followed by 30% is 44%, not 50%.

- Apply 20% to MP, then 30% to the *reduced* price — never add them straight.
- For three discounts, fold two at a time: combine D₁ & D₂ first, then with D₃.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and overhead costs

Real NAT-I items sometimes embed **transport, repair, or commission** into the cost side. The true CP becomes *purchase CP + overhead* before any profit/loss arithmetic. A trader who buys a fan for Rs. 8,000, spends Rs. 1,000 on repair, then sells for Rs. 10,000 makes Rs. 1,000 profit (12.5%), not 25% — many students skip the overhead and double the real percentage.

#### The "a vs b articles" relationship

When the cost price of *a* articles equals the selling price of *b* articles, the resulting profit or loss % is computed as:

| Direction | Result |
| --- | --- |
| a > b (fewer articles sold per rupee) | Profit % = ((a − b) / b) × 100 |
| a < b (more articles sold per rupee) | Loss % = ((b − a) / b) × 100 |

For example, if CP of 12 pens equals SP of 15 pens, then loss % = (15 − 12)/15 × 100 = 20%.

#### Worked micro-example

A shopkeeper marks a shirt at Rs. 2,000 and offers successive discounts of 10% and 5%, then sells it.
Effective discount = 10 + 5 − (10×5)/100 = 14.5%, so SP = 2,000 × (1 − 0.145) = Rs. 1,710.
If the shirt's CP was Rs. 1,500, profit = 1,710 − 1,500 = Rs. 210, and profit % = 210/1,500 × 100 = **14%**.

#### Common NAT-I traps

- Mixing MP-based discount % with CP-based profit % in the same line.
- Forgetting to convert percentage to a decimal in successive discount chains.
- Treating "no profit no loss" as the default for matching x% profit and x% loss pairs.

#### Practice prompts

1. An article is sold at Rs. 1,200 with a 20% profit. Find CP and the new SP if profit is reduced to 10%.
2. CP of 9 toys equals SP of 11 toys. Compute the gain or loss percentage and verify with the x²/10 identity on equivalent rates.

## Continue your study

- **[View this topic in your NAT-I (NTS) roadmap](/roadmap/?exam=nat-i&duration=1mo)** — see where "Profit and Loss" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nat-i&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NAT-I (NTS) exam overview](/exams/nat-i/)** — pattern, eligibility, and syllabus
- **[All Quantitative Reasoning notes](/notes/nat-i/quantitative-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
