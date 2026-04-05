---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: quant
subjectName: Wassce Subjects
topic: wassce-001
topicName: Topic 1
weight: 3
country: legon
generated: "2026-03-25T17:00:00"
---

# Topic 1: Number Theory and Basic Arithmetic

### 🟢 Lite — Quick Review (1h–1d)

Number theory forms the bedrock of all quantitative reasoning in the WASSCE examination. At its core, this topic examines the properties and relationships of integers—the whole numbers we use daily without second thought. The key concepts you must master include divisibility rules, prime numbers, factors and multiples, greatest common divisors (GCD), and lowest common multiples (LCM). Understanding these fundamentals is essential because they appear consistently in both the Objective and Theory papers of the Legon Admissions quantitative reasoning section.

The divisibility rules enable rapid determination of whether one integer divides another without leaving a remainder. An integer is divisible by 2 if its last digit is even (0, 2, 4, 6, or 8); by 3 if the sum of its digits is divisible by 3; by 5 if it ends in 0 or 5; and by 10 if it ends in 0. These shortcuts save precious examination time. Prime numbers—those greater than 1 with exactly two distinct positive divisors (1 and themselves)—include 2, 3, 5, 7, 11, 13, 17, and 19. Note that 2 is the only even prime number, a fact frequently tested. The Fundamental Theorem of Arithmetic states that every composite number can be expressed uniquely as a product of prime numbers raised to various powers, a concept essential for finding GCD and LCM.

**Key Facts:**
- Divisibility by 2: last digit even; by 3: digit sum divisible by 3; by 5: ends in 0 or 5; by 9: digit sum divisible by 9; by 10: ends in 0
- Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 (first 10)
- GCD × LCM = product of two numbers (for any two positive integers a and b)
- 1 is neither prime nor composite
- Even + even = even; odd + odd = even; odd + even = odd

⚡ **Exam Tip:** In the WASSCE Objective paper, questions on divisibility often appear as "Which of the following is divisible by...?" Answer by applying the rules directly rather than performing long division.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Prime Factorisation and Applications**

The process of expressing a composite number as a product of prime factors is called prime factorisation. This technique is invaluable for solving complex problems efficiently. For instance, to find the GCD and LCM of 48 and 180:

First, express each number in prime factor form:
- 48 = 2⁴ × 3¹
- 180 = 2² × 3² × 5¹

The GCD is found by taking the lowest power of each common prime: 2² × 3¹ = 4 × 3 = **12**

The LCM is found by taking the highest power of each prime present: 2⁴ × 3² × 5¹ = 16 × 9 × 5 = **720**

This method is far superior to the listing method and eliminates errors arising from missed multiples.

**Divisibility Rules — Extended Set**

Beyond the basic rules, you should know divisibility by:
- 4: last two digits divisible by 4 (e.g., 124 → 24 ÷ 4 = 6, so 124 is divisible)
- 6: divisible by both 2 and 3
- 8: last three digits divisible by 8
- 12: divisible by both 3 and 4
- 25: last two digits end in 00, 25, 50, or 75

**Comparison Table: GCD vs LCM**

| Property | GCD | LCM |
|----------|-----|-----|
| Definition | Largest number dividing both | Smallest number divisible by both |
| Always ≥ | Each number individually | Each number individually |
| Formula | a × b = GCD(a,b) × LCM(a,b) | Same formula applies |
| Calculation method | Take minimum powers of common primes | Take maximum powers of all primes |

**Common Mistakes to Avoid:**
1. Forgetting that 1 is neither prime nor composite
2. Confusing GCD with LCM in word problems
3. Applying the wrong divisibility rule (e.g., thinking 127 is divisible by 3 because 1+2+7=10, but 10 is not divisible by 3)
4. Forgetting to include all prime factors when finding LCM

**Problem-Solving Strategy:**

When faced with a number theory problem, follow this sequence:
1. Identify whether you're finding GCD, LCM, or testing divisibility
2. For GCD/LCM: perform prime factorisation systematically
3. Check your answer by verifying: GCD × LCM = original product
4. In word problems, translate "greatest common measure" to GCD and "least common multiple" to LCM

---

### 🔴 Extended — Deep Study (3mo+)

**Historical Context: Euclid's Algorithm**

The Euclidean algorithm, devised by the ancient Greek mathematician Euclid around 300 BCE, remains one of the most efficient methods for finding GCDs. For two numbers a and b (where a > b), the algorithm states: GCD(a,b) = GCD(b, a mod b). This process repeats until b = 0, at which point a is the GCD.

**Example using Euclidean Algorithm: Find GCD(168, 64)**

Step 1: 168 ÷ 64 = 2 remainder **40** → GCD(168, 64) = GCD(64, 40)
Step 2: 64 ÷ 40 = 1 remainder **24** → GCD(64, 40) = GCD(40, 24)
Step 3: 40 ÷ 24 = 1 remainder **16** → GCD(40, 24) = GCD(24, 16)
Step 4: 24 ÷ 16 = 1 remainder **8** → GCD(24, 16) = GCD(16, 8)
Step 5: 16 ÷ 8 = 2 remainder **0** → GCD = **8**

This method is computationally efficient and frequently tested in its own right.

**The Sieve of Eratosthenes**

To find all primes up to n, Eratosthenes' ancient algorithm remains useful:
1. List all numbers from 2 to n
2. Starting with 2, mark (or eliminate) all multiples of 2
3. Move to the next unmarked number (3) and eliminate its multiples
4. Continue until you've processed numbers up to √n
5. All unmarked numbers are prime

**Advanced Problem Types**

*Problem Type 1: Simultaneous GCD and LCM*
If GCD(a,b) = 6 and LCM(a,b) = 84, and a = 12, find b.
Using a × b = GCD × LCM: 12 × b = 6 × 84 → b = (6 × 84) ÷ 12 = **42**

*Problem Type 2: Tank/Reservoir Problems*
"Two bells ring at intervals of 12 seconds and 18 seconds respectively. If they ring together at 9:00 AM, when will they next ring together?"
Find LCM(12, 18):
- 12 = 2² × 3
- 18 = 2 × 3²
- LCM = 2² × 3² = 4 × 9 = **36 seconds**
Answer: 9:00:36 AM

*Problem Type 3: Remainder Problems*
"When a number is divided by 6, the remainder is 4. When divided by 8, the remainder is 5. Find the smallest such number."
This requires finding the smallest n such that:
n ≡ 4 (mod 6) and n ≡ 5 (mod 8)
Systematic checking yields: n = **20**

**WASSCE Examination Patterns**

The WASSCE typically allocates 2-3 questions from this topic in the Objective paper. The Theory paper often includes one question combining number theory with algebra or requiring the application of GCD/LCM in practical contexts. Common question formats include:
- "Express [number] as a product of prime factors"
- "Find the GCD/LCM of [numbers]"
- Word problems involving simultaneous ringing, travelling, or pipeline lengths

**Additional Essential Formulas:**
- Product of first n natural numbers: n! (n factorial)
- Sum of first n natural numbers: n(n+1)/2
- Number of factors of n = (a+1)(b+1)(c+1)... where n = p₁ᵃ × p₂ᵇ × p₃ᶜ ...

⚡ **Pro Exam Tip:** In the WASSCE, always express your final answer in its simplest form. For prime factorisation, write powers in ascending order. When solving simultaneous congruences, verify your answer satisfies BOTH conditions before moving on.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
