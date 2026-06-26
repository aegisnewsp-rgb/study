---



exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-18
topicName: Sequence and Series (AP and GP)
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.626486"
lastUpdated: "2026-06-26"
diagramPrompt: "Mathematical diagram showing Sequence and Series (AP and GP) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Sequence and Series (AP and GP)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

An **Arithmetic Progression (AP)** has a constant **common difference (d)** between successive terms; its nth term is **T_n = a + (n−1)d**, and the sum of n terms is **S_n = n/2 [2a + (n−1)d]** or equivalently **n/2 (a + l)** where l is the last term. A **Geometric Progression (GP)** has a constant **common ratio (r)**; its nth term is **T_n = ar^(n−1)** and sum is **S_n = a(1 − r^n)/(1 − r)** when r ≠ 1. If **|r| < 1**, the series converges and **S_∞ = a/(1 − r)**. WAEC tests these formulas directly in Paper 2 — memorise them with variables defined, and remember the (n−1) exponent on GP nth term.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Recognising AP vs GP
Test consecutive differences for AP: if **T₂ − T₁ = T₃ − T₂ = … = d**, the sequence is arithmetic. For GP, test consecutive ratios: if **T₂/T₁ = T₃/T₂ = … = r**, the sequence is geometric. A single failed test rules out the classification — never assume based on two terms alone.

#### AP Formulas and Their Logic
Given first term **a** and common difference **d**, the nth term follows a linear pattern because each step adds d once. So T₁ = a, T₂ = a + d, T₃ = a + 2d, …, giving **T_n = a + (n−1)d**. The sum S_n = a + (a+d) + (a+2d) + … pairs the first and last terms: **S_n = n/2 (a + l)** where l = a + (n−1)d. Substitute l to get the more general form **S_n = n/2 [2a + (n−1)d]**.

#### GP Formulas and Convergence
Each GP term is the previous multiplied by r, so T_n = a · r^(n−1). The sum formula **S_n = a(1 − r^n)/(1 − r)** is derived by multiplying S_n by r and subtracting, eliminating most terms. When **|r| < 1**, r^n → 0 as n → ∞, so the infinite sum converges to **S_∞ = a/(1 − r)**. If **|r| ≥ 1**, terms do not shrink and S_∞ does not exist.

#### Insertion of Means
The **arithmetic mean** of two numbers p and q is (p+q)/2; to insert n arithmetic means between them, set **d = (q − p)/(n+1)**. For **geometric means**, the ratio is **r = (q/p)^(1/(n+1))**, with each mean = previous × r.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Numeric Example
A man saves ₦500 in year 1, ₦700 in year 2, ₦900 in year 3 … (AP with a = 500, d = 200). His total savings after 10 years: **S₁₀ = 10/2 [2(500) + 9(200)] = 5 × 2800 = ₦14,000**. Now suppose a population of 2000 grows at 5% annually (GP, a = 2000, r = 1.05). After 10 years: **T₁₀ = 2000 × 1.05⁹ ≈ 2000 × 1.5513 ≈ 3103**. Total over 10 years uses S_n, not T_n — a common confusion.

#### Common WAEC Traps
1. **Wrong exponent**: writing T_n = ar^n instead of ar^(n−1) shifts every term by one position. Always test with n = 1: result must equal a.
2. **S_∞ misuse**: applying S_∞ = a/(1 − r) when r = 1 gives division by zero; when r = −1 the series oscillates and does not converge.
3. **Sign errors with negative r**: terms alternate in sign; S_n formula still works but bracket expansion of (1 − r^n) must respect the sign.
4. **Word-problem misreading**: "first term a" is sometimes the starting balance, sometimes the initial payment — translate the problem into a and r before plugging in.

#### Connection to Other Topics
AP underpins linear sequences in coordinate geometry (slope = d). GP connects to compound interest (r = 1 + i), exponential decay (radioactive decay, r < 1), and population modelling — expect WAEC to frame GP as a real-world scenario rather than a raw list.

#### Practice Prompts
1. The 5th term of an AP is 23 and the 12th term is 51. Find the sum of the first 20 terms.
2. The sum of the first three terms of a GP is 26 and the common ratio is 3. Find the first term and S_∞ if it exists.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
