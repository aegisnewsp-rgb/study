---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-010
topicName: Binomial Theorem
weight: 3
country: india
generated: "2026-03-29T05:05:11"
lastUpdated: "2026-06-19"
---

# Binomial Theorem

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **Binomial Theorem** expands $(a+b)^n$ for any non-negative integer $n$ into $n+1$ terms using **binomial coefficients** $\binom{n}{r}$:

$$(a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^{r}$$

The **general term** $T_{r+1} = \binom{n}{r} a^{n-r} b^{r}$ lets you isolate any single term. Three CUET quick-wins: (1) coefficients are symmetric — $\binom{n}{r} = \binom{n}{n-r}$; (2) sum of all coefficients $\sum \binom{n}{r} = 2^n$ (put $a=b=1$); (3) the **middle term** is $T_{n/2+1}$ when $n$ is even, and $T_{(n+1)/2}$ together with $T_{(n+3)/2}$ when $n$ is odd. For $(a-b)^n$, signs alternate, starting positive.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Formula and the General Term

For a non-negative integer $n$,

$$(a+b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n}b^n$$

where $\binom{n}{r} = \dfrac{n!}{r!\,(n-r)!}$. The general term written as $T_{r+1}$ (so $r$ starts at $0$) is

$$T_{r+1} = \binom{n}{r} a^{n-r} b^{r}.$$

To extract a coefficient, say of $b^k$, set $r=k$ and read $\binom{n}{k}$ off directly.

#### Pascal's Triangle and Pascal's Rule

Coefficients row by row follow Pascal's rule:

$$\binom{n}{r} + \binom{n}{r+1} = \binom{n+1}{r+1}.$$

CUET often disguises this as a numerical addition of two $\binom{n}{r}$ values — the trap is forgetting to write the result as $\binom{n+1}{r+1}$, not $2\binom{n}{r}$.

#### Sign Pattern for $(a-b)^n$

Replace $b$ by $-b$: every term with an odd $r$ gets a minus sign. The first term ($r=0$) is always positive, the last term ($r=n$) is positive if $n$ is even and negative if $n$ is odd.

#### Middle Term(s)

| $n$ | Middle term(s) | Formula |
|-----|----------------|---------|
| Even | One middle term | $T_{n/2+1} = \binom{n}{n/2} a^{n/2} b^{n/2}$ |
| Odd | Two middle terms | $T_{(n+1)/2}$ and $T_{(n+3)/2}$ |

#### Useful Coefficient Sums

- $\displaystyle\sum_{r=0}^{n} \binom{n}{r} = 2^n$ — set $a=b=1$.
- $\displaystyle\sum_{r=0}^{n} (-1)^r \binom{n}{r} = 0$ — set $a=1, b=-1$.

#### CUET Question Patterns

Expect 1–2 MCQs worth 3% weightage, usually: find the coefficient of a specified term, identify the middle term, evaluate a numerical sum of $\binom{n}{r}$ values, or apply Pascal's rule. Budget 60 seconds per MCQ.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Derivation Sketch (Counting Argument)

$(a+b)^n = (a+b)(a+b)\cdots(a+b)$ ($n$ factors). Every term in the product picks either $a$ or $b$ from each of the $n$ brackets. Choosing $b$ from exactly $r$ brackets contributes $a^{n-r}b^r$. The number of ways to pick those $r$ brackets is $\binom{n}{r}$, giving the full expansion.

#### General Term Indexing — a Frequent Trap

$T_{r+1}$ uses $r$, **not** $T_r$. If a problem asks for the 6th term, you want $T_6$, so $r+1=6 \Rightarrow r=5$, then plug $r=5$ into the formula. Mixing up $T_r$ and $T_{r+1}$ flips exponents and shifts coefficients — a classic one-mark loss.

#### Coefficient of a Specific Power

To find the coefficient of $x^k$ in $(1+x)^n$ directly: it is $\binom{n}{k}$. For $(2+3x)^n$, write it as $2^n(1+\tfrac{3x}{2})^n$; the coefficient of $x^k$ becomes $\binom{n}{k} 2^{n-k} 3^k$. Keeping the bracket in the form $(1+u)^n$ before expanding prevents sign and exponent mistakes.

#### Divisibility and Remainder Problems

To find the remainder of a large power mod a small integer, write the base using the binomial expansion. Example: the remainder of $7^{103}$ when divided by 25. Note $7^2 = 49 = 50-1 = 2(25)-1$, so $7^2 \equiv -1 \pmod{25}$, hence $7^{102} \equiv 1 \pmod{25}$ and $7^{103}\equiv 7 \pmod{25}$. This uses the alternating-sign structure of $(-1+b)^n$.

#### Connections to Adjacent Topics

- **Permutations and Combinations:** $\binom{n}{r}$ originates here; CUET frequently cross-tests.
- **Probability:** binomial distribution uses the same expansion.
- **Sequence and Series:** sum $\sum \binom{n}{r}$ reappears when summing special series.

#### Common Mistakes

1. Treating $n$ as a real number — the theorem requires non-negative integer $n$.
2. Forgetting $\binom{n}{r}=\binom{n}{n-r}$ symmetry and computing $n!/(r!(n-r)!)$ unnecessarily.
3. Sign slip in $(a-b)^n$ expansions for middle or end terms.
4. Misreading "middle term" when $n$ is odd — there are **two** of them.

#### Practice Prompts

1. Find the coefficient of $x^4$ in the expansion of $(3x^2 - \tfrac{2}{x})^{10}$.
2. If $\sum_{r=0}^{5} \binom{5}{r} = 32$, verify and use it to find $\sum_{r=0}^{5} r\binom{5}{r}$.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
