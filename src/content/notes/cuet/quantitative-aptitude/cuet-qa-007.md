---
exam: cuet
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-007
topicName: "Time & Work, Pipes & Cisterns"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing a worker's productivity curve over time, demonstrating the inverse relationship between number of workers and days to complete. Show how 4 men working 6 hours a day can complete the same work as 3 men working 8 hours a day, using the man-hours concept."
country: india
generated: 2026-03-25
lastUpdated: 2026-03-25
---

# Time & Work, Pipes & Cisterns

### 🟢 Lite

### Key Formula/Rule
**Work = Rate × Time.** If A finishes a job in x days, A's 1-day work = 1/x of the job.

### Memory Trick
**"1 day, 1 share"** — Think of work like a pizza. If someone eats the whole pizza in 5 days, they eat 1/5 of the pizza each day. Simple, right? 🍕

### 1-Sentence Summary
This topic tests your ability to figure out how long jobs take when workers (or pipes) team up or work against each other.

### 30-Second Example
Q: A can paint a room in 6 days, B can do it in 3 days. How many days together?
A: **2 days** — A's rate = 1/6, B's rate = 1/3. Combined = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 per day. So 2 days total.

### 🟡 Standard

### Concept
Work problems are really just about **rates**. Think of it like this: if you can clean your room in 2 hours, your cleaning rate is 1 room per 2 hours, or ½ room per hour. That's all "1-day work" means — how much of the job gets done in a single day.

When two workers team up, you simply **add their rates**. If A does 1/6 of the work per day and B does 1/3 per day, together they do 1/6 + 1/3 = 1/2 per day — meaning they finish in 2 days. Easy!

Pipes and cisterns work the same way, but here's the twist: filling pipes are **positive** (+), and draining pipes are **negative** (–). If a pipe would fill a tank in 4 hours but another drains it in 6 hours, you add +1/4 and –1/6 to get a net rate of 1/12 per hour. The tank fills in 12 hours.

When workers leave before a job is done, or when pipes open/close at different times, you handle it in **stages** — calculate how much work is done in each stage, subtract from 1, then solve for what's left.

### Key Formulas
| Formula | Use |
|---------|-----|
| Work = Rate × Time | Core relationship |
| A's 1-day work = 1/x | If A finishes in x days |
| Combined rate = sum of individual rates | When workers/pipes work together |
| Total Work = 1 (whole job) | Always set the full job = 1 |
| Net rate = filling rate – draining rate | Pipes and cisterns |

### Worked Example
**Q:** Pipe A fills a tank in 10 hours. Pipe B fills it in 15 hours. Pipe C empties it in 20 hours. All pipes open together. How long to fill the tank?

**Step 1:** Write each rate:
- A = +1/10 per hour
- B = +1/15 per hour
- C = –1/20 per hour

**Step 2:** Add them: 1/10 + 1/15 – 1/20
Find common denominator (60): 6/60 + 4/60 – 3/60 = 7/60 per hour

**Step 3:** Time = 1 ÷ (7/60) = 60/7 = 8⅘ hours = **8 hours 34 minutes**

**Answer:** **8 hours 34 minutes (approximately)**

### Common Errors
- **Adding rates that work opposite directions** → Always subtract draining/emptying pipes: filling (+), emptying (–)
- **Forgetting the whole job = 1** → Your equation must equal 1, not the number of days
- **Mixing up "3 days" with "3 times as fast"** → If someone is 3× faster, their rate is 3 times bigger, not their time

### 🔴 Extended

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

*Content adapted based on your selected roadmap duration.*
