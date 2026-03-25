---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-007
topicName: "Time & Work, Pipes & Cisterns — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing a worker's productivity curve over time, demonstrating the inverse relationship between number of workers and days to complete. Show how 4 men working 6 hours a day can complete the same work as 3 men working 8 hours a day, using the man-hours concept."
country: India
generated: ai-v1
---



## Time & Work, Pipes & Cisterns — Deep Dive

### Full Concept

**Why is Work Inversely Proportional to Time?**

Here's something beautiful about work problems: **Work = Rate × Time** is always true. If you double the rate, you halve the time — that's the inverse relationship at the heart of these problems.

Think of it this way: A takes 6 days to paint a house. His rate is 1/6 job/day. If B works twice as fast (rate = 2/6 = 1/3 job/day), B finishes in 3 days. See? Same amount of work, but because the rate doubled, the time halved. The product (rate × time) stays constant — it always equals 1 whole job.

**The Man-Days Concept (M × D = Constant Work)**

If M men can do a job in D days, the total work = M × D man-days. This is **directly proportional** when efficiency is equal. So:
- If 4 men take 6 days, total work = 24 man-days
- If we want to finish in 4 days instead → 24 man-days ÷ 4 days = **6 men needed**

But here's the trap: this **only works** when all men work equally efficiently. In CUET problems, if they say "efficiency remains the same," you can use this directly. If efficiency changes (or they don't mention it), assume equal efficiency.

**Chain Rule for Work**

When multiple workers work sequentially on DIFFERENT parts of a job, the chain rule applies differently. But when they ALL work on the SAME job simultaneously, just add their rates. Don't overthink it!

**Pipes in Series vs Parallel**

Pipes filling a tank are like resistors in circuits:
- **Series (one after another):** The slowest pipe dominates. Two pipes filling in series: time = (1/R₁ + 1/R₂)⁻¹. It's like two people sharing one ladder — you don't climb faster.
- **Parallel (all filling together):** Rates add directly — each pipe contributes its full rate.

**The Leaking Tank Problem**

A tank being filled while leaking is the classic "net rate" problem. The leak works like a draining pipe — it's always working at a constant rate, reducing the filling rate. If a tap fills in 4 hours but the leak empties it in 6 hours, the net is +1/4 – 1/6 = 1/12 per hour. Fill time = 12 hours.

The tricky case: if the leak can drain FASTER than the tap fills, the tank will NEVER fill. Always check: is filling rate > draining rate?

### Multiple Approaches

**Standard Method:**
1. Convert each worker/pipe to a rate (1/time)
2. Add/subtract rates based on direction
3. Set total = 1 (whole work)
4. Solve for time

**Shortcut — Combined Time Formula:**
For two workers A and B with times t₁ and t₂:
$$T_{combined} = \frac{t_1 \times t_2}{t_1 + t_2}$$

This works beautifully when only two workers are involved. For 3 or more, stick to rate addition.

**Shortcut — When workers leave mid-job:**
Work done = Rate × Time for each phase. Subtract from 1, then solve for the remaining time with remaining workers.

### CUET-Level Problems

**Q1:** A contractor deploys 20 men to build a road in 30 days. After 10 days, 5 men leave. How many extra days are needed?

**Working:**
- Work done in 10 days = 20 × 10 = 200 man-days
- Total work = 20 × 30 = 600 man-days
- Remaining work = 600 – 200 = 400 man-days
- Remaining men = 15
- Days needed = 400 ÷ 15 = 26⅔ days

**Answer:** **26⅔ more days (36⅔ days total)**

**Q2:** A pipe can fill a tank in 20 minutes. Another pipe fills it in 30 minutes. A leak empties it in 40 minutes. The tank is empty initially, all pipes and leak are open simultaneously. How long to fill?

**Working:**
- Fill rate of Pipe 1: 1/20 per min
- Fill rate of Pipe 2: 1/30 per min
- Leak rate: –1/40 per min
- Net rate: 1/20 + 1/30 – 1/40 = (6 + 4 – 3)/120 = 7/120 per min
- Time = 1 ÷ (7/120) = 120/7 = 17⅐ minutes

**Answer:** **17⅐ minutes (~17 minutes 9 seconds)**

### Tricky Cases
- **"Efficiency increases by 20%"** → New rate = old rate × 1.2, NOT time ÷ 1.2
- **Tank already partially full** → Set remaining work = (1 – already filled fraction), not 1
- **Worker works part of a day** → Convert hours to fraction of a day (6 hours = ¼ day at normal rate)
- **Multiple leaks** → Add all leak rates together before subtracting from filling rate
- **If filling rate ≤ leak rate** → Answer: "Never fills" — always check this!
