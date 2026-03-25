---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-011
topicName: "Progressions (AP & GP) — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A graph plotting AP terms linearly (straight line) and GP terms exponentially (curved line), both starting from the same first term, to show the contrast between linear and exponential growth"
country: India
generated: ai-v1
---



## Progressions (AP & GP) — Deep Dive

### Concept Deep Dive

Let's dig into *why* these formulas exist and what they really tell us about the sequences they describe.

**The Nature of AP:**

An arithmetic progression is fundamentally a **linear model**. Each step adds the same amount, so the terms grow (or shrink) at a constant rate. Graphically, if you plot AP terms against their position numbers, you get a straight line. The slope of that line is exactly the common difference d.

The sum formula for AP, Sₙ = n/2 × [2a + (n–1)d], has a beautiful intuitive proof: write the sum forward and backward, then pair terms. The nth term plus the 1st term always equals (a + l), where l is the last term. There are n such pairs, so Sₙ = n(a + l)/2 = n/2 × [2a + (n–1)d]. This pairing trick works because of the symmetry built into every AP.

A practical analogy: think of AP like walking up a staircase with equal steps. The "height" after n steps is your nth term. The total vertical distance climbed after n steps is your sum. And yes, the staircase metaphor even works for negative steps (walking down) or fractional steps.

**The Nature of GP:**

A geometric progression is an **exponential model**. Each step multiplies by the same factor, so the terms grow (or shrink) at a rate proportional to their current value. Plot this on a graph and you get a curve that bends upward (for r > 1) or gradually descends toward zero (for 0 < r < 1). No straight line can capture this — that's what makes GP fundamentally different from AP.

The GP sum formula, Sₙ = a(r^n – 1)/(r – 1), comes from a clever trick: multiply the sum by r, then subtract the original sum. Nearly everything cancels out, leaving a simple expression. Try it yourself with a 3-term GP and you'll see exactly why it works.

The most important thing to understand about GP is the ratio r. When r > 1, numbers explode toward infinity (think compound interest, population growth, viral spread). When r = 1, the GP is constant — every term equals a. When 0 < r < 1, numbers shrink toward zero asymptotically (think radioactive decay, drug absorption). When r < 0, you get alternating signs — the terms flip between positive and negative.

### Advanced Formula Derivation

**Infinite GP Sum:**

When |r| < 1 and n → ∞, the term r^n becomes vanishingly small. So S∞ = a/(1 – r). This formula describes anything that decays toward a limit — the total distance a bouncing ball travels as it gradually stops, or the total time a leaking bucket takes to empty.

**Example:** 1, 1/2, 1/4, 1/8, ... Here a = 1, r = 1/2. S∞ = 1/(1 – 1/2) = 2. No matter how many terms you add, you'll never exceed 2.

### GATE-Level Numerical Problems

**Q1 (GATE 2020 — style):**
The sum of three numbers in GP is 26 and their product is 216. Find the numbers.

- Working: Let numbers be a/r, a, ar. Product = (a/r) × a × ar = a³ = 216 → a = 6. Sum = 6/r + 6 + 6r = 26 → 6/r + 6r = 20 → Multiply by r: 6 + 6r² = 20r → 6r² – 20r + 6 = 0 → Divide by 2: 3r² – 10r + 3 = 0 → (3r – 1)(r – 3) = 0 → r = 3 or r = 1/3.
- Answer: If r = 3: numbers are 2, 6, 18. If r = 1/3: numbers are 18, 6, 2. So the set is **{2, 6, 18}**.
- Common error: Forgetting the symmetric case — if a/r, a, ar works, then the reciprocals also work.

**Q2 (GATE 2019 — style):**
The 12th term of an AP is 8 more than the 6th term. If the 4th term is 14, find the first term and common difference.

- Working: T₁₂ = a + 11d, T₆ = a + 5d. Given T₁₂ – T₆ = 8 → (a + 11d) – (a + 5d) = 8 → 6d = 8 → d = 4/3. T₄ = a + 3d = 14 → a + 3(4/3) = 14 → a + 4 = 14 → a = 10.
- Answer: a = 10, d = 4/3
- Common error: Trying to find the actual terms when only the difference was asked. Here, the question only needed a and d.

**Q3:**
A person saves ₹1000 in the first month, ₹1200 in the second month, ₹1400 in the third month, and so on (increasing by ₹200 each month). How much will they save in 24 months total?

- Working: This is an AP with a = 1000, d = 200, n = 24. S₂₄ = 24/2 × [2(1000) + 23(200)] = 12 × [2000 + 4600] = 12 × 6600 = **₹79,200**.
- Answer: **₹79,200**

### Multiple Approaches

**Method A (Standard formula):** Use Sₙ = n/2 × [2a + (n–1)d] directly. Safe, reliable, always works.

**Method B (Average × count):** The average of the first and last term = (a + l)/2. Multiply by n gives the same answer. Useful when you know the last term but not d explicitly.

**When to use:** Method A when you have a and d. Method B when you can quickly find the last term (l = a + (n-1)d) and want a faster calculation.

### Tricky Cases

- **AP of consecutive integers:** Numbers like 5, 6, 7, 8 are an AP with a = 5, d = 1. Their sum is n(a + l)/2 — same formula but simpler because d = 1.
- **GP with negative ratio:** If r = –2, terms alternate signs: a, –2a, 4a, –8a... The absolute values grow, but the sign keeps flipping. Sum formula still works.
- **Harmonic Progression (HP):** When the reciprocals of terms form an AP. No special "HP formulas" needed — just convert to AP by taking reciprocals, solve, then convert back.
