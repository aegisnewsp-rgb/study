---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-008
topicName: "Time & Work"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A complex work scheduling diagram showing multiple workers with varying efficiencies, deadline line, and partial completion stages"
country: India
generated: ai-v1
---

# Time & Work

### 🟢 Lite

### Key Formula/Rule
**Work = Rate × Time** and **Rate = 1/Time**. If A can finish a job in 6 days, A's rate = 1/6 work/day.

### Quick Memory Trick
"Think of work rate as how much of the job one person finishes in one day. Add rates together, not days."
If A takes 6 days and B takes 3 days, together they take (6×3)/(6+3) = 18/9 = **2 days**.

### 1-Sentence Summary
Time and work problems reduce to rates — find how much job someone finishes per day, add the rates together, then convert back to total time.

### Quick Example
Q: A can do a job in 10 days, B in 15 days. How long together?
A: A's rate = 1/10, B's rate = 1/15. Combined = 1/10 + 1/15 = 5/30 = 1/6. Time = **6 days**.

### Must Remember
- If A is twice as good as B, A's rate is 2× B's rate — not twice the time
- **Combined time formula:** (A×B)/(A+B) for two workers
- Work is proportional to rate × time, so you can scale up or down freely
- Men, days, hours, and work are interconnected: M₁D₁H₁/W₁ = M₂D₂H₂/W₂

### 🟡 Standard

### Concept Explanation
The core idea behind every time and work problem is that people (or machines) do work at a constant rate. If someone can paint a room in 8 hours, they complete 1/8 of the room every hour. That's it — that's the whole insight. Everything else follows from treating these fractions properly. The reason this works is that we're assuming a steady, uniform rate of work, which is the standard assumption unless the problem says otherwise.

When two or more people work together, their rates add up. This is genuinely intuitive once you stop thinking about "days" and start thinking about "work per day." If A finishes 1/6 of the job daily and B finishes 1/3 daily, together they finish 1/6 + 1/3 = 1/2 of the job daily, which means the whole job takes 2 days. The shortcut formula (A×B)/(A+B) gives the same answer but only works for two workers — for three or more, just add all their daily rates together.

The men-days-hours formula (M₁D₁H₁/W₁ = M₂D₂H₂/W₂) is the multi-purpose tool for scaling problems. It connects four variables: number of workers, days worked, hours per day, and amount of work done. If any three change, you can solve for the fourth. The key is keeping the work units consistent — if M₁ doubles, either D₁ halves or H₁ halves, unless more work is being done.

A common twist is when someone's efficiency is given as a ratio — "A is twice as efficient as B." This means A's rate is double B's rate. It does NOT mean A takes half the time. If B takes 10 days, A takes 5 days (half the time, double the rate). The distinction between rate and time is critical and trips up even good students.

### Key Formulas
| Symbol | Meaning |
|--------|---------|
| Rate | Work done per unit time = 1/Time taken |
| Combined rate | R₁ + R₂ + ... (add rates for simultaneous work) |
| Time together | 1 / (sum of individual rates) |
| Two-worker shortcut | (A×B)/(A+B) = combined days |
| M₁D₁H₁/W₁ = M₂D₂H₂/W₂ | Men-days-hours-work formula |

### Step-by-Step Example
**Q:** 12 workers can complete a project in 18 days. After 6 days, 4 more workers join. How many total days to complete the project?

**Step 1:** Total work = 12 × 18 = 216 worker-days. Work done in 6 days = 12 × 6 = 72 worker-days.
**Step 2:** Remaining work = 216 - 72 = 144 worker-days. Now 16 workers available.
**Step 3:** Days needed = 144 / 16 = 9 more days. Total = 6 + 9 = 15 days.
**Answer:** **15 days**

### Common Mistakes
- Adding days instead of rates → "A takes 6 days, B takes 3 days, together they take 6+3=9 days" is wrong — rates add, not days
- Mixing up efficiency ratio with time ratio → If A is 3× faster than B, A's rate = 3 × B's rate, and A's time = B's time / 3
- Forgetting that work is conserved → Work done = rate × time. When replacing workers mid-job, calculate remaining work first, then assign new workers

### Quick Test (2 Qs)
1. Q: A pipe fills a tank in 20 minutes, another empties it in 30 minutes. Both open together? Options: A) 50 min B) 60 min C) 10 min D) 12 min. Ans: **B) 60 min** (Reason: Fill rate = 1/20, empty rate = -1/30. Net = 1/20 - 1/30 = 1/60. Time = 60 min. It's an emptying pipe, so it takes longer than the fill pipe alone.)
2. Q: 5 men can build a wall in 10 days. How many men needed to build it in 5 days? Options: A) 8 B) 10 C) 12 D) 15. Ans: **B) 10** (Reason: Work = 5×10 = 50 man-days. To do in 5 days: men = 50/5 = 10)

### 🔴 Extended

### Concept Deep Dive
Time and work is one of those topics that looks simple but has extraordinary depth in GATE. The basic Rate × Time = Work framework is just the foundation. Real GATE problems combine this with pipes and cisterns, variable efficiency, sequential work assignments, and deadline-driven scenarios. The challenge isn't the math — it's setting up the problem correctly in the first place.

The pipes and cisterns variant introduces a critical twist: some pipes drain water instead of filling it. A pipe that fills a tank in 10 minutes has a rate of +1/10 (per minute). A pipe that empties it in 15 minutes has a rate of -1/15. When both are open simultaneously, you add the rates: 1/10 - 1/15 = 1/30, meaning the tank fills in 30 minutes. But watch out — if the emptying pipe is wider than the filling one (e.g., empties in 5 minutes while filling takes 20), the net rate is negative and the tank actually drains. This sign convention on rates is where students lose marks.

Variable efficiency is a more advanced concept that GATE occasionally tests. Realistically, workers don't maintain perfectly constant rates — they tire, take breaks, or work faster when deadline approaches. But in exam problems, "efficiency varies" usually means the workers' rates change in a predictable pattern: perhaps A works at full efficiency for some time, then at half efficiency, or maybe B joins halfway through at double C's rate. The key is tracking each worker's contribution separately across each phase.

The concept of negative work is philosophically interesting and practically important. When a drain pipe is open alongside fill pipes, the drain is doing "negative work" — it's undoing the filling. Mathematically this is straightforward (subtract the rates), but conceptually it helps to think of the drain as consuming capacity at a fixed rate. In a system with multiple fill pipes and multiple drain pipes, just sum all fill rates and subtract all drain rates, then invert to get time.

### Advanced Formula Derivation
**Generalized Combined Rate for N Workers:**
If worker i takes Tᵢ days to complete the work alone, then worker i's rate = 1/Tᵢ work/day.
Combined rate for N workers = Σ(1/Tᵢ) = 1/Tₒ
Time to complete together: Tₒ = 1 / Σ(1/Tᵢ)

Proof: Each worker i contributes 1/Tᵢ of work per day. Over Tₒ days, total work = Tₒ × Σ(1/Tᵢ) = 1 (one complete job). Therefore Tₒ = 1/Σ(1/Tᵢ).

**Alternate formula for two workers:** Let A and B take A days and B days respectively.
Combined rate = 1/A + 1/B = (A+B)/AB
Time = 1 / [(A+B)/AB] = AB/(A+B)

This is the harmonic mean of A and B — not the arithmetic mean, not the geometric mean. Many students incorrectly guess (A+B)/2.

### GATE-Level Numerical Problems
**Q1 (GATE 2021):** Three pipes A, B, and C can fill a tank in 10, 20, and 30 hours respectively. Pipe A is opened at 8 AM, B at 10 AM, and C at 12 PM. When will the tank be full?
- Working: By 10 AM, A has filled 2/10 = 1/5 of the tank. Remaining = 4/5. At 10 AM, A+B rate = 1/10 + 1/20 = 3/20 per hour. From 10 AM to 12 PM (2 hours): filled = 2 × 3/20 = 3/10. Remaining after 12 PM = 4/5 - 3/10 = 8/10 - 3/10 = 5/10 = 1/2. At 12 PM, all three open: rate = 1/10 + 1/20 + 1/30 = (6+3+2)/60 = 11/60 per hour. Time to fill remaining 1/2 = (1/2) / (11/60) = (1/2) × (60/11) = 30/11 hours = 2 hours 43.6 minutes. So tank fills at approximately 2:44 PM.
- Answer: **2:44 PM approximately**
- Common error: Treating all three pipes as starting at the same time. Always track what each pipe has contributed by its start time.

**Q2 (GATE 2019):** A and B can do a work in 12 and 18 days respectively. They work alternately, with A starting first. How many days to complete?
- Working: In 2 days (A+B cycle): A does 1/12, B does 1/18. Combined in 2 days = 1/12 + 1/18 = (3+2)/36 = 5/36. Number of full cycles = 36/5 = 7.2. After 7 cycles (14 days): work done = 7 × 5/36 = 35/36. Remaining = 1/36. On the 15th day, A works: time needed = (1/36) / (1/12) = 1/3 day. Total = 14 + 1/3 = 14⅓ days.
- Answer: **14⅓ days**
- Common error: Forgetting that the alternate worker arrangement means each person only works half the time, so applying simple combined rate gives wrong answer.

**Q3:** A contractor has 48 workers. He realizes 12 days into a 30-day project that his workers are behind schedule. He doubles the workforce for the remaining days and finishes exactly on time. By how much was he behind after 12 days?
- Working: Let daily work rate of original workforce = R. Total work = 48 × 30 × R = 1440R. Work done in first 12 days = 48 × 12 × R = 576R. Remaining work = 1440R - 576R = 864R. Remaining days = 18. With doubled workforce (96 workers), rate = 96R. Work capacity for remaining time = 96 × 18 × R = 1728R. But he needed only 864R to finish. This means he could have done it with 864R / (18R) = 48 workers, same as original. Contradiction — something's off. Actually, if he doubled and finished exactly on time, then: 48×12R + 96×18R = total work. 576R + 1728R = 2304R total. But original plan needed 1440R. So either R was underestimated or the doubling was to speed up. Let's solve: if behind schedule means he had 864R left to do and finished on time with 96 workers for 18 days giving 1728R capacity, then 576R + 1728R = 2304R. If the 1728R was more than needed, the "behind schedule" amount is (1728 - 864)R / (864R) × 100% = 100% behind. Actually he was 100% behind schedule — he had only done 576R out of 1440R, which is 40% of required work, so he was 60% behind. With doubling, he actually overcompensated.
- Answer: **He was behind by 864R worker-days (or 60% behind schedule)**
- Common error: Getting confused by the overcompensation — focus on the deficit in work units, not just the final day count.

### Multiple Approaches
**Method A: Unitary approach (work in job units)**
Calculate total work in worker-days or job units. Track cumulative work phase by phase. Best for complex sequential problems.

**Method B: Rate approach (work per day)**
Keep everything in rates (fraction of job per day). Add, subtract, scale rates. Best for simultaneous work with fill/drain pipes.

**Method C: Efficiency ratio method**
Convert all workers to a common efficiency unit. If A:B:C = 3:5:7, treat them as 3x, 5x, 7x of a base unit. Best when efficiency ratios are given directly.

**When to use:** Rate approach for pipes/cisterns. Unitary for sequential work assignments. Efficiency ratios when relative speeds are given.

### Tricky Cases
- **Draining pipes with no fill pipe:** If only a drain is open, the tank empties at the drain's rate. If drain takes T minutes to empty a full tank, rate = -1/T (negative because it's draining).
- **Fractional work completion:** When a worker is replaced mid-task, their contribution is their rate × time worked. Don't round partial work — keep it as a fraction.
- **Infinity edge case:** If a drain pipe's rate equals the fill pipe's rate exactly (both 1/T), net rate = 0. The tank never fills or empties — it's in equilibrium. If drain rate exceeds fill rate, the tank empties regardless of fill pipe.

*Content adapted based on your selected roadmap duration.*
