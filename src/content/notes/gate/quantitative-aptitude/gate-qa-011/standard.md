---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-011
topicName: "Progressions (AP & GP)"
tier: standard
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A labeled diagram showing the structure of AP and GP with first term 'a', common difference 'd' for AP, common ratio 'r' for GP, and position 'n"
country: India
generated: ai-v1
---



## Progressions (AP & GP)

### Concept Explanation

A sequence is just a list of numbers that follow some rule. The two most important types you'll encounter are **Arithmetic Progressions (AP)** and **Geometric Progressions (GP)**. They show up everywhere — from calculating loan repayments to modeling population growth — which is why they're exam favorites.

An **Arithmetic Progression** is a sequence where you add the same number every time to get the next term. That constant number is called the "common difference" (denoted d). So if you start at 5 and add 3 each time, you get 5, 8, 11, 14, 17... The beauty of AP is that any term can be found instantly if you know the first term (a), the step size (d), and which term you want (n). You just plug into: Tₙ = a + (n–1)d.

A **Geometric Progression** works differently. Instead of adding, you multiply by the same factor every time. That factor is the "common ratio" (denoted r). So if you start at 3 and multiply by 2 each time, you get 3, 6, 12, 24, 48... The ratio between consecutive terms never changes — that's the defining property. GP gets interesting because the numbers grow (or shrink) much faster than AP. A GP with r > 1 grows exponentially, while one with 0 < r < 1 shrinks toward zero.

### Key Formulas

| Symbol | Meaning |
|--------|---------|
| a | First term of the sequence |
| d | Common difference (AP) |
| r | Common ratio (GP) |
| n | Number of terms |
| l | Last term |
| Sₙ | Sum of first n terms |

### Step-by-Step Example

**Q:** The 3rd term of an AP is 16 and the 10th term is 58. Find the sum of the first 20 terms.

**Step 1:** Express terms in terms of a and d.
T₃ = a + 2d = 16
T₁₀ = a + 9d = 58

**Step 2:** Subtract to find d.
(a + 9d) – (a + 2d) = 58 – 16
7d = 42 → d = 6

**Step 3:** Find a.
a + 2(6) = 16 → a = 4

**Step 4:** Find sum of first 20 terms.
S₂₀ = n/2 × [2a + (n–1)d] = 20/2 × [2(4) + 19(6)]
= 10 × [8 + 114] = 10 × 122 = **1220**

**Answer:** 1220

### Common Mistakes

- Confusing the (n–1) multiplier → In Tₙ = a + (n–1)d, when n = 1, the term is just a (makes sense). If you accidentally use n instead of (n–1), you'd get a + d as the first term — wrong.
- Forgetting the GP sum formula changes when r < 1 → When r < 1, the formula a(r^n – 1)/(r – 1) still works if you flip the sign correctly. Write it as a(1 – r^n)/(1 – r) for r < 1 to avoid sign confusion.
- Mixing up AP and GP formulas → AP involves addition, GP involves multiplication. Check which one you're solving.

### Quick Test (2 Qs)

1. Q: The 2nd term of a GP is 12 and the 5th term is 96. Find the common ratio. Options: A) 2 B) 3 C) 4 D) 8. Ans: **A** (Reason: T₂ = ar = 12, T₅ = ar⁴ = 96. Divide: ar⁴/ar = r³ = 96/12 = 8 → r = 2)

2. Q: Three numbers are in AP with sum 21 and product 280. Find them. Options: A) 7, 8, 9 B) 5, 7, 9 C) 4, 7, 10 D) 6, 7, 8. Ans: **B** (Reason: Let numbers be (a–d), a, (a+d). Sum = 3a = 21 → a = 7. Product = (7–d)(7)(7+d) = 280 → 49 – d² = 40 → d² = 9 → d = 3. Numbers: 4, 7, 9)
