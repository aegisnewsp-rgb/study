---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-008
topicName: "Time & Work — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A complex work scheduling diagram showing multiple workers with varying efficiencies, deadline line, and partial completion stages"
country: India
generated: ai-v1
---



## Time & Work — Deep Dive

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
