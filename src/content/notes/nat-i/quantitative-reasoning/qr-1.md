---



exam: nat-i
examName: NAT-I (NTS)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-1
topicName: Number System and Properties
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.133538"
lastUpdated: "2026-06-20"
diagramPrompt: "Educational diagram illustrating Number System and Properties with clear labels, white background, exam-style illustration"




---

# Number System and Properties

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **Number System** classifies values used in quantitative reasoning into nested sets: **Natural numbers N = {1, 2, 3, ...}**, **Whole numbers W = {0, 1, 2, ...}**, **Integers Z = {..., -2, -1, 0, 1, 2, ...}**, **Rationals Q = p/q** (q ≠ 0, terminating or recurring decimals), and **Irrationals** (non-terminating, non-repeating decimals like √2 and π). Together, Q ∪ Irrationals = **Real numbers R**.

Must-know formulas:

- **a × b = HCF(a, b) × LCM(a, b)**
- **Sum of first n naturals** = n(n+1)/2
- **Sum of squares** = n(n+1)(2n+1)/6
- **Sum of cubes** = [n(n+1)/2]²

NAT-I pointers: 0 is **not** a Natural number on NTS papers; HCF solves "largest equal groups" and LCM solves "next meeting point" questions; and **BODMAS** is enforced strictly in arithmetic simplification items.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Classification of Numbers
Every NAT-I Quantitative Reasoning paper assumes the chain **N ⊂ W ⊂ Z ⊂ Q ⊂ R**, with **Irrationals** as a separate branch inside R. A **rational** number written in lowest terms p/q has a decimal that either terminates (e.g., 3/8 = 0.375) or recurs (e.g., 1/3 = 0.333...). An **irrational** number — √2, √3, π, e — never terminates and never forms a repeating block. Real numbers include both; complex numbers lie outside R and rarely appear at NTS level.

#### Primes, Composites and Divisibility
A **prime** has exactly two distinct positive divisors (1 and itself); 2 is the only even prime. A **composite** has more than two. Prime factorisation splits any integer n into **n = p₁^e₁ · p₂^e₂ · ... · pₖ^eₖ**. The number of divisors is then **(e₁+1)(e₂+1)...(eₖ+1)**, and the sum of divisors is **σ(n) = Π (pᵢ^(eᵢ+1) − 1)/(pᵢ − 1)**. These formulas recur in NAT-I divisor-counting items.

Quick divisibility rules to memorise:

| Divisor | Test |
|---|---|
| 2 | Last digit even |
| 3 | Sum of digits divisible by 3 |
| 4 | Last two digits divisible by 4 |
| 5 | Last digit 0 or 5 |
| 8 | Last three digits divisible by 8 |
| 9 | Sum of digits divisible by 9 |
| 11 | Difference of (sum of digits in odd places) and (sum in even places) is 0 or a multiple of 11 |

#### HCF and LCM
From the prime factorisation, **HCF** uses each common prime at its **lowest** exponent, and **LCM** uses each at its **highest**. The identity **a × b = HCF × LCM** holds for any two positive integers, and is the fastest way to find one when the other is given. Word-problem cue: "arranging into the largest equal groups with nothing left over" → HCF; "the bell rings together again" or "smallest number exactly divisible by each" → LCM.

#### Order of Operations — BODMAS
**B**rackets → **O**f → **D**ivision / **M**ultiplication (left to right) → **A**ddition / **S**ubtraction (left to right). A frequent NAT-I trap places a × and a + adjacent, testing whether the candidate obeys the M before A rule.

#### Properties of Operations
Closure, **commutativity** (a+b = b+a; a·b = b·a), **associativity** ((a+b)+c = a+(b+c)), **distributivity** (a(b+c) = ab+ac), **identity** elements (0 for +, 1 for ×) and **inverses** (−a for +, 1/a for ×) apply across integers and rationals. Subtraction and division are neither commutative nor associative — a favourite NTS distractor.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Number-Theoretic Subtleties
**0 is not a Natural number** on NTS, but is a Whole number, an Integer, and a rational 0/1. 1 is neither prime nor composite. The sum-of-divisors function σ(n) equals 2n precisely for **perfect numbers** (6, 28, 496...). Two integers are **coprime** when HCF = 1; note that coprime does **not** mean both are prime — e.g., 8 and 9 are coprime but neither is prime.

#### Unit-Digit Cyclicity
Only the unit digit matters when finding the last digit of a^b. Digits 0, 1, 5, 6 have a cycle length of 1; 4 and 9 cycle every 2; 2, 3, 7, 8 cycle every 4. Reduce the exponent **modulo the cycle length** to land on the right remainder. NAT-I features this in "find the last digit of 7^103"-style items.

#### Modular Arithmetic
Define a ≡ b (mod n) when n divides (a − b). Working **mod n** lets you split large powers: (a·b) mod n = ((a mod n)·(b mod n)) mod n. Euler's theorem adds that a^φ(n) ≡ 1 (mod n) when gcd(a, n) = 1, useful for finding remainders of astronomical powers. A simple worked example: the last digit of 7^103 equals the last digit of 7^(103 mod 4) = 7^3 = **343**, so the answer is **3**.

#### Common Mistakes
- Treating √2 + √3 as rational; the sum of two irrationals is **not** automatically irrational.
- Forgetting that a × b = HCF × LCM only when both are positive integers; it fails for more than two numbers.
- Solving "largest square tile that fills a rectangle" with LCM instead of HCF (you need the side that exactly tiles both, i.e., the HCF of the sides).
- Reading BODMAS as a strict pyramid rather than left-to-right within each tier, leading to 8 − 4 + 2 = 2 instead of 6.
- Marking −a as the multiplicative inverse; the additive inverse of a is −a, while the multiplicative inverse is **1/a** (a ≠ 0).

#### Practice Prompts
1. If HCF(72, x) = 6 and LCM(72, x) = 504, find x. *Hint: use a × b = HCF × LCM.*
2. Find the largest 4-digit number divisible by 7, 11, and 13. *Hint: the LCM governs the divisor, then pick 9999 minus the smallest offset to that LCM.*

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
