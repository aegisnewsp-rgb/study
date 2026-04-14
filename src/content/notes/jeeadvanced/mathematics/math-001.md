---
exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-001
topicName: Sets Relations
weight: 4
country: india
generated: "2026-03-24T08:32:07.933593"
diagramPrompt: "Mathematical diagram showing Sets Relations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Sets Relations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **set** is a well-defined collection of distinct objects. We write $A = \{2, 3, 5, 7\}$. The number of elements in $A$ is $n(A) = 4$.

**Subset:** $A \subseteq B$ means every element of $A$ is also in $B$. **Proper subset:** $A \subset B$ means $A \subseteq B$ but $A \neq B$. The empty set $\emptyset$ is a subset of every set. The **universal set** $U$ contains all objects under consideration. The **power set** of $A$, denoted $P(A)$, is the set of all subsets of $A$. If $n(A) = 3$, then $n(P(A)) = 2^3 = 8$.

**Venn diagram operations:**
- Union: $A \cup B$ (shaded area including both circles)
- Intersection: $A \cap B$ (overlap of both circles)
- Difference: $A - B$ or $A \setminus B$ (in $A$ but not in $B$)
- Complement: $A' = U \setminus A$ (everything outside $A$)

**De Morgan's Laws:**
$$(A \cup B)' = A' \cap B'$$
$$(A \cap B)' = A' \cup B'$$

**Number of elements:**
$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(C \cap A) + n(A \cap B \cap C)$$

**Relations:** A relation $R$ from set $A$ to set $B$ is a subset of $A \times B$. For $R \subseteq A \times A$:
- **Domain:** $\{a \in A : (a, b) \in R \text{ for some } b\}$
- **Range:** $\{b : (a, b) \in R \text{ for some } a\}$

Relation types on $A \times A$: reflexive ($aRa$ for all $a$), symmetric (if $aRb$ then $bRa$), transitive (if $aRb$ and $bRc$ then $aRc$). An **equivalence relation** is all three combined. An **equivalence class** of $a$ is $[a] = \{x \in A : xRa\}$.

**Functions:** A function $f: A \to B$ assigns exactly one element of $B$ to each element of $A$.
- **One-one (injective):** $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$
- **Onto (surjective):** for every $b \in B$, there exists $a \in A$ with $f(a) = b$
- **Bijective:** both one-one and onto (implies invertible)

**Composition:** $(f \circ g)(x) = f(g(x))$. In general $f \circ g \neq g \circ f$.

**Binary operation:** $* : A \times A \to A$. Commutative if $a * b = b * a$. Associative if $(a * b) * c = a * (b * c)$. Identity $e$ satisfies $a * e = e * a = a$. Inverse $a^{-1}$ satisfies $a * a^{-1} = a^{-1} * a = e$.

**Inverse function:** If $f$ is bijective, $f^{-1}: B \to A$ satisfies $f^{-1}(f(x)) = x$ and $f(f^{-1}(y)) = y$.

⚡ **Exam tip:** For JEE Advanced, master the inclusion-exclusion principle ($n(A \cup B)$ formula) and equivalence relation proofs — they frequently combine set theory with relations.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and solid problem-solving ability.

**Set Theory Deep Dive**

A **Cartesian product** $A \times B = \{(a, b) : a \in A, b \in B\}$. If $n(A) = p$ and $n(B) = q$, then $n(A \times B) = pq$.

**Venn Diagrams and Regions:** For two sets $A$ and $B$ in universal set $U$, the four regions are:
- Region I: $A \cap B$
- Region II: $A \cap B'$
- Region III: $A' \cap B$
- Region IV: $A' \cap B'$

The region representing $A' \cap B'$ is the complement of $(A \cup B)$.

**De Morgan's Laws Proof:** To prove $(A \cup B)' = A' \cap B'$:
- Let $x \in (A \cup B)'$. Then $x \notin A \cup B$, so $x \notin A$ and $x \notin B$. Thus $x \in A'$ and $x \in B'$, giving $x \in A' \cap B'$.
- Conversely, if $x \in A' \cap B'$, then $x \notin A$ and $x \notin B$, so $x \notin A \cup B$, hence $x \in (A \cup B)'$.

**Inclusion-Exclusion Principle:**

For two sets:
$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

For three sets:
$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(C \cap A) + n(A \cap B \cap C)$$

**JEE Example:** In a class of 60 students, 35 like mathematics, 40 like physics, and 10 like neither. If 5 like both subjects, how many like only mathematics?

Solution: $n(M) = 35$, $n(P) = 40$, $n(M \cap P) = 5$, $n(\text{neither}) = 10$, so $n(M \cup P) = 50$.
$$n(M \cup P) = n(M) + n(P) - n(M \cap P) \Rightarrow 50 = 35 + 40 - 5 \checkmark$$
$n(M \text{ only}) = n(M) - n(M \cap P) = 35 - 5 = 30$.

**Relations**

A relation on $A$ is any subset of $A \times A$. The **identity relation** $I = \{(a, a) : a \in A\}$. The **universal relation** $U = A \times A$.

**Equivalence Relation:** Partition of $A$ into disjoint equivalence classes. Example: On $\mathbb{Z}$, define $aRb$ iff $a - b$ is divisible by 3. This is reflexive ($a - a = 0$ divisible by 3), symmetric (if $a - b = 3k$, then $b - a = -3k$), and transitive (if $a - b = 3k$ and $b - c = 3m$, then $a - c = 3(k+m)$). The equivalence classes are $\{..., -3, 0, 3, 6, ...\}, \{..., -2, 1, 4, ...\}, \{..., -1, 2, 5, ...\}$.

**Partial order:** reflexive, antisymmetric ($aRb$ and $bRa \Rightarrow a = b$), transitive. Example: $\subseteq$ on power sets.

**Functions**

Let $f: A \to B$ where $A = \{1, 2, 3\}$ and $B = \{a, b, c, d\}$.

- $f = \{(1,a), (2,b), (3,c)\}$: one-one but not onto (d has no preimage).
- $f = \{(1,a), (2,a), (3,b)\}$: onto but not one-one (a has two preimages).
- $f = \{(1,a), (2,b), (3,c)\}$ with $A$ and $B$ of same size: bijective.

**Composition of Functions:** If $f: A \to B$ and $g: B \to C$, then $g \circ f: A \to C$ is defined by $(g \circ f)(x) = g(f(x))$.

**Inverse Functions:** $f^{-1}$ exists iff $f$ is bijective. If $f(x) = 2x + 3$, then $f^{-1}(y) = \frac{y - 3}{2}$.

**Binary Operations**

Consider $* : \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$ defined by $a * b = a + b - 1$.

- **Commutative:** $a * b = a + b - 1 = b * a$. ✓
- **Associative:** $(a * b) * c = (a + b - 1) + c - 1 = a + b + c - 2$. $a * (b * c) = a + (b + c - 1) - 1 = a + b + c - 2$. ✓
- **Identity:** $a * e = a + e - 1 = a \Rightarrow e = 1$.
- **Inverse:** $a * a^{-1} = 1 \Rightarrow a + a^{-1} - 1 = 1 \Rightarrow a^{-1} = 2 - a$.

**JEE Advanced Worked Example (2019 pattern):** If $f: \mathbb{R} \to \mathbb{R}$ is defined by $f(x) = \frac{x}{1 + |x|}$. Determine whether $f$ is injective or surjective.

Solution: For injectivity: if $f(x_1) = f(x_2)$, then $\frac{x_1}{1+|x_1|} = \frac{x_2}{1+|x_2|}$. For $x_1, x_2 \geq 0$: $\frac{x_1}{1+x_1} = \frac{x_2}{1+x_2} \Rightarrow x_1(1+x_2) = x_2(1+x_1) \Rightarrow x_1 + x_1x_2 = x_2 + x_1x_2 \Rightarrow x_1 = x_2$. For $x_1, x_2 < 0$: similar. For $x_1 \geq 0, x_2 < 0$: $f(x_1) \geq 0$, $f(x_2) < 0$, so equality forces $f(x_1) = f(x_2) = 0$ which requires $x_1 = 0 = x_2$. Hence $f$ is injective. For surjectivity: range of $f$ is $(-1, 1)$, so not surjective onto $\mathbb{R}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory, derivations, and advanced problem types for total mastery.

**Advanced Set Theory**

**Cantor's Theorem:** If $A$ is a set and $P(A)$ its power set, then there is no surjective function $f: A \to P(A)$. Proof: Consider $S = \{x \in A : x \notin f(x)\}$. If $S = f(a)$ for some $a$, then $a \in S \Leftrightarrow a \notin f(a) = S$, a contradiction.

**Schröder–Bernstein Theorem:** If $|A| \leq |B|$ and $|B| \leq |A|$, then $|A| = |B|$. That is, if there exist injective functions $f: A \to B$ and $g: B \to A$, then there exists a bijective $h: A \to B$.

**Inclusion-Exclusion General Formula:** For $n$ sets:
$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum_{i} |A_i| - \sum_{i<j} |A_i \cap A_j| + \sum_{i<j<k} |A_i \cap A_j \cap A_k| - \cdots + (-1)^{n-1} |A_1 \cap \cdots \cap A_n|$$

**JEE Example (deriving the three-set formula):** In a hostel, 60% students read English newspapers, 50% read Hindi newspapers, and 30% read both. What percentage reads at least one?

$n(E) = 60$, $n(H) = 50$, $n(E \cap H) = 30$. Using $n(E \cup H) = n(E) + n(H) - n(E \cap H) = 60 + 50 - 30 = 80$. So 80% read at least one newspaper, and 20% read none.

**Equivalence Relations and Partitions**

An equivalence relation $R$ on $A$ partitions $A$ into disjoint equivalence classes. Conversely, any partition defines an equivalence relation. The **quotient set** $A/R = \{[a] : a \in A\}$.

**Example:** On $\mathbb{Z} \times \mathbb{Z}^+$ (ordered pairs), define $(a,b) R (c,d)$ iff $ad = bc$. This is an equivalence relation. Its equivalence classes correspond to rational numbers $\frac{a}{b}$. This construction builds $\mathbb{Q}$ from $\mathbb{Z}$.

**Functions — Deeper Properties**

**Composition is associative:** $f \circ (g \circ h) = (f \circ g) \circ h$ whenever the compositions are defined.

**Inverse composition:** $(f \circ g)^{-1} = g^{-1} \circ f^{-1}$ (when $f$ and $g$ are bijective).

**Even and odd functions:** $f(-x) = f(x)$ (even), $f(-x) = -f(x)$ (odd). Every function can be written as sum of even and odd parts: $f_e(x) = \frac{f(x) + f(-x)}{2}$, $f_o(x) = \frac{f(x) - f(-x)}{2}$.

**Periodic functions:** $f(x+T) = f(x)$ for all $x$. The fundamental period is the smallest positive $T$. Example: $\sin x$ has period $2\pi$, $\tan x$ has period $\pi$.

**Binary Operations — Advanced**

**Cayley Table:** For a finite set with a binary operation, the Cayley table reveals properties at a glance. If the table is symmetric about the main diagonal, the operation is commutative.

**Identity uniqueness:** If an identity element exists, it is unique. Proof: if $e$ and $e'$ are both identities, then $e = e * e' = e'$.

**Inverse uniqueness:** For a given element $a$, if an inverse exists, it is unique. Proof: if $b$ and $c$ are inverses of $a$, then $b = b * e = b * (a * c) = (b * a) * c = e * c = c$.

**Laws of a Groupoid with Identity:** The identity $e$ satisfies $e * a = a * e = a$. For each $a$, the inverse $a^{-1}$ satisfies $a * a^{-1} = a^{-1} * a = e$.

**Ring:** A set with two binary operations $(+, \cdot)$ where $(R, +)$ is an abelian group, multiplication is associative, and multiplication distributes over addition.

**JEE Advanced Previous Year Patterns:**

| Topic | Frequency (2015–2024) |
|---|---|
| De Morgan's laws + Venn diagrams | 2–3 questions per paper |
| Equivalence relation proof | 1 question every 2 years |
| Function injectivity/surjectivity | 1–2 questions per paper |
| Binary operations on finite sets | 1 question per 2–3 years |
| Composition of functions | 1 question per paper |

**Advanced Worked Example:** Let $f: \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = x^3 + 1$. Find $f^{-1}$ and verify.

Solution: $y = x^3 + 1 \Rightarrow x^3 = y - 1 \Rightarrow x = (y - 1)^{1/3}$. So $f^{-1}(y) = \sqrt[3]{y - 1}$. Check: $f^{-1}(f(x)) = \sqrt[3]{(x^3 + 1) - 1} = \sqrt[3]{x^3} = x$. $f(f^{-1}(y)) = (\sqrt[3]{y - 1})^3 + 1 = y - 1 + 1 = y$.

**Advanced Problem:** Let $f: A \to B$ and $g: B \to C$ be functions. Prove that if $g \circ f$ is injective, then $f$ is injective (but $g$ need not be).

Proof: Suppose $(g \circ f)(x_1) = (g \circ f)(x_2)$. Then $g(f(x_1)) = g(f(x_2))$. Since $g$ may not be injective, we cannot conclude $f(x_1) = f(x_2)$ directly. Wait — we need to prove $f$ is injective. Suppose $f(x_1) = f(x_2)$. Then $g(f(x_1)) = g(f(x_2))$, so $(g \circ f)(x_1) = (g \circ f)(x_2)$. Since $g \circ f$ is injective, $x_1 = x_2$. Thus $f$ is injective. ✓ (Note: $g$ need not be injective; consider $f: \{1\} \to \{2,3\}$ with $f(1) = 2$, and $g: \{2,3\} \to \{4\}$ with $g(2) = g(3) = 4$. Then $g \circ f$ is injective but $g$ is not.)

**Lattice Concepts:** A lattice is a partially ordered set where any two elements have a unique greatest lower bound (meet) and least upper bound (join). Example: $(\mathbb{N}, |)$ where $a | b$ means $a$ divides $b$, with $\gcd(a,b)$ as meet and $\operatorname{lcm}(a,b)$ as join.

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
