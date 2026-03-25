---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-008
topicName: "Time & Work"
tier: standard
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A work distribution diagram showing two workers A and B filling a tank, with rate arrows and time labels"
country: India
generated: ai-v1
---



## Time & Work

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
