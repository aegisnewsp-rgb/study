---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-002
topicName: Time Value of Money
tier: standard
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Draw a two-panel diagram: (left) Future Value timeline showing PV₹100 growing at 10% compound over 3 years to ₹133.10, with each year's compounding step labelled; (right) Present Value timeline showing ₹133.10 discounted back at 10% over 3 years to PV₹100, with each year's discounting step labelled."
country: India
generated: ai-v1
---



## Time Value of Money

### Concept Explanation

Let me explain this with a real example. If someone offered you ₹1,00,000 today or the same amount one year from now, which would you take? Obviously today — because you could put it in a Fixed Deposit at 7% and have ₹1,07,000 a year from now. This simple idea — that money available now is more valuable than the same amount in the future — is the foundation of all finance. We call this the **Time Value of Money (TVM)**.

Why does this happen? Three reasons: **Opportunity Cost** (you could invest today's money), **Inflation** (₹100 buys less goods tomorrow than today in most economies), and **Uncertainty/Risk** (future money might never arrive — a borrower could default). Together, these create the concept of a "required rate of return" that any investment must beat to be worth pursuing.

**Compounding** is when you earn returns on your returns. If you invest ₹1,00,000 at 10% per year: after year 1 you have ₹1,10,000; after year 2 you earn 10% on ₹1,10,000 = ₹1,21,000; after year 3 = ₹1,33,100. Notice how the amount grows not by ₹10,000 each year but by an increasing amount — that's the magic of compounding working for you. **Discounting** is the reverse — it asks "what is ₹1,33,100 receivable 3 years from now worth in today's rupees?" The formula is simply PV = FV / (1+r)ⁿ, which gives you ₹1,00,000 at a 10% discount rate. Discounting is how we compare projects or investments with different time horizons.

Now let's talk about **Net Present Value (NPV)** — the most important capital budgeting tool. NPV brings everything back to today. You take all future cash inflows of a project, discount them back to today using your required rate of return, subtract the initial investment, and get the net benefit in today's rupees. The rule is dead simple: **accept if NPV ≥ 0, reject if NPV < 0**. A positive NPV means the project creates value — it generates returns above and beyond what you'd require for waiting and taking risk.

**IRR (Internal Rate of Return)** answers a different question: "At what discount rate would this project break even?" It's the rate where NPV equals zero. You compare IRR to your required rate of return — if IRR > required return, accept the project. For simple projects with only an initial outflow followed by inflows, NPV and IRR almost always agree. But for complex projects with non-conventional cash flows (outflows interspersed with inflows), they can disagree — and NPV is theoretically superior because it assumes reinvestment at the required rate (not at IRR which can be unrealistically high).

### Key Terms & Definitions

| Term | Definition |
|------|------------|
| Present Value (PV) | The current worth of a future sum, calculated by discounting at a specified rate |
| Future Value (FV) | The value of a current sum after earning interest over a specified period |
| Compounding | Calculating FV by applying the rate repeatedly — earning interest on interest |
| Discounting | Calculating PV by reversing compounding — dividing by (1+r)ⁿ |
| NPV (Net Present Value) | PV of all cash inflows minus PV of all outflows; accept if ≥ 0 |
| IRR (Internal Rate of Return) | Discount rate where NPV = 0; accept if IRR > required return |
| Annuity | A series of equal cash flows at regular intervals (e.g., ₹10,000 every year for 5 years) |
| Perpetuity | An infinite series of equal cash flows that never ends (PV = P/r) |
| Required Rate of Return | Minimum return an investment must generate to be worthwhile, reflecting opportunity cost and risk |

### Real-World Example (RBI Context)

Think about how State Bank of India (SBI) decides whether to approve a ₹500 crore corporate loan for a steel plant expansion. The bank's treasury team projects:
- Project cost: ₹500 crore (outflow today)
- Annual cash flows: ₹80 crore per year for 10 years
- SBI's required rate: 9% (based on cost of funds + spread)

The NPV calculation: PV of ₹80 crore annuity at 9% for 10 years = ₹80 × 6.418 = ₹513.5 crore. NPV = ₹513.5 - ₹500 = ₹13.5 crore. Positive NPV — the project creates ₹13.5 crore of value above the required return, so SBI approves the loan. If NPV had been negative, SBI would have rejected it regardless of how good the business plan looked, because the returns don't compensate for the capital's true cost.

### Exam Pattern / How It Appears

- **Numerical problems**: Calculate PV or FV of a single sum; calculate PV or FV of an annuity; compute NPV of a project with given cash flows
- **Conceptual questions**: "Why is NPV preferred over IRR for mutually exclusive projects?" or "What is the difference between an annuity and a perpetuity?"
- **Application questions**: You're given cash flows and a discount rate and asked to compute both NPV and IRR and make an accept/reject decision

### Step-by-Step Example

**Q:** An investment costs ₹50,000 today and generates cash inflows of ₹15,000 at the end of Year 1, ₹20,000 at the end of Year 2, and ₹25,000 at the end of Year 3. If the required rate of return is 10%, should you accept the project? Calculate NPV.

**Answer:**

**Step 1:** Write down the NPV formula

$$\text{NPV} = \sum_{t=1}^{n} \frac{\text{CF}_t}{(1+r)^t} - \text{Initial Investment}$$

**Step 2:** Calculate PV of each cash inflow

| Year | Cash Flow | Discount Factor (1.10)^t | PV of Cash Flow |
|------|-----------|--------------------------|-----------------|
| 1 | ₹15,000 | 1.1000 | ₹13,636.36 |
| 2 | ₹20,000 | 1.2100 | ₹16,528.93 |
| 3 | ₹25,000 | 1.3310 | ₹18,783.63 |

**Step 3:** Sum PVs and subtract initial investment

$$\text{Total PV of Inflows} = ₹13{,}636.36 + ₹16{,}528.93 + ₹18{,}783.63 = ₹48{,}948.92$$

$$\text{NPV} = ₹48{,}948.92 - ₹50{,}000 = -₹1{,}051.08$$

**Answer: NPV is approximately -₹1,051.08 (negative), so you should REJECT the project.** Even though it returns ₹60,000 against a ₹50,000 investment, the timing of those returns doesn't compensate adequately for the 10% required return. The ₹15,000 in Year 1 is worth only ₹13,636 in today's money, and the ₹25,000 in Year 3 is worth only ₹18,784 in today's money.
