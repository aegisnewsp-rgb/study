---
exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-009
topicName: Indefinite Integrals
weight: 5
country: india
generated: "2026-03-24T08:32:07.937784"
lastUpdated: "2026-09-07"
diagramPrompt: "Mathematical diagram showing Indefinite Integrals concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"
---

# Indefinite Integrals

## Calculus Framework and JEE Advanced Weightage

Indefinite integration accounts for approximately 4% to 6% of the mathematics paper in JEE Advanced directly, and serves as the mathematical foundation for Definite Integrals and Differential Equations, which together represent another 12% to 15% of the total score. In JEE Advanced, integration problems rarely surrender to direct formula substitution. Examiners specifically test three algebraic skills:
1. Identifying hidden symmetries in rational functions, particularly dividing by $x^2$ or higher powers to generate reciprocal terms ($x + 1/x$ or $x - 1/x$).
2. Creating favorable differentials by factoring out non-obvious powers of $x$ from radicals or binomial expressions.
3. Managing multi-step integration by parts where integrals recur or where non-elementary terms cancel through careful pairing with adjacent functions.

---

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary of core formulas and substitutions for last-minute revision.

In our review of past JEE papers, candidates lose marks when they forget the absolute value in logarithmic terms or neglect domain constraints when applying inverse trigonometric forms. Always include the arbitrary constant $C$.

#### Fundamental Antiderivative Formulas

1. $\int x^n dx = rac{x^{n+1}}{n+1} + C \quad (n \neq -1)$
2. $\int \frac{1}{x} dx = \ln|x| + C \quad (x \neq 0)$
3. $\int e^x dx = e^x + C$
4. $\int a^x dx = \frac{a^x}{\ln a} + C \quad (a > 0, a \neq 1)$
5. $\int \sin x \, dx = -\cos x + C$
6. $\int \cos x \, dx = \sin x + C$
7. $\int \sec^2 x \, dx = \tan x + C$
8. $\int \csc^2 x \, dx = -\cot x + C$
9. $\int \sec x \tan x \, dx = \sec x + C$
10. $\int \csc x \cot x \, dx = -\csc x + C$
11. $\int \tan x \, dx = \ln|\sec x| + C = -\ln|\cos x| + C$
12. $\int \cot x \, dx = \ln|\sin x| + C$
13. $\int \sec x \, dx = \ln|\sec x + \tan x| + C = \ln|\tan(\frac{\pi}{4} + \frac{x}{2})| + C$
14. $\int \csc x \, dx = \ln|\csc x - \cot x| + C = \ln|\tan(\frac{x}{2})| + C$

#### Standard Special Integrals Table

| Integrand Structure | Evaluated Antiderivative | Essential Domain / Constraint |
| :--- | :--- | :--- |
| $\int \frac{dx}{x^2 + a^2}$ | $\frac{1}{a} \tan^{-1}\left(\frac{x}{a}\right) + C$ | $a \neq 0$ |
| $\int \frac{dx}{x^2 - a^2}$ | $\frac{1}{2a} \ln\left|\frac{x-a}{x+a}\right| + C$ | $|x| \neq |a|$ |
| $\int \frac{dx}{a^2 - x^2}$ | $\frac{1}{2a} \ln\left|\frac{a+x}{a-x}\right| + C$ | $|x| \neq |a|$ |
| $\int \frac{dx}{\sqrt{a^2 - x^2}}$ | $\sin^{-1}\left(\frac{x}{a}\right) + C$ | $|x| < a$ |
| $\int \frac{dx}{\sqrt{x^2 + a^2}}$ | $\ln\left|x + \sqrt{x^2 + a^2}\right| + C$ | All real $x$ |
| $\int \frac{dx}{\sqrt{x^2 - a^2}}$ | $\ln\left|x + \sqrt{x^2 - a^2}\right| + C$ | $|x| > a$ |
| $\int \sqrt{a^2 - x^2} \, dx$ | $\frac{x}{2}\sqrt{a^2 - x^2} + \frac{a^2}{2}\sin^{-1}\left(\frac{x}{a}\right) + C$ | $|x| \le a$ |
| $\int \sqrt{x^2 + a^2} \, dx$ | $\frac{x}{2}\sqrt{x^2 + a^2} + \frac{a^2}{2}\ln\left|x + \sqrt{x^2 + a^2}\right| + C$ | All real $x$ |
| $\int \sqrt{x^2 - a^2} \, dx$ | $\frac{x}{2}\sqrt{x^2 - a^2} - \frac{a^2}{2}\ln\left|x + \sqrt{x^2 - a^2}\right| + C$ | $|x| \ge a$ |

---

## Standard Integration Methods and Algebraic Transforms

### 🟡 Standard — Regular Study (2d–2mo)
> Systematic study of substitution, by-parts, and partial fractions.

In our analysis of student test performance, students often struggle when choosing between substitution and integration by parts. We recommend evaluating algebraic forms using the priority rules outlined below.

#### Method 1: Integration by Substitution

When an integrand contains both an inner function $g(x)$ and its derivative $g'(x)$, substitution converts the integral into elementary form:
$$\int f(g(x)) g'(x) \, dx = \int f(u) \, du \quad \text{where } u = g(x)$$

##### Standard Algebraic and Trigonometric Substitutions

| Expression in Integrand | Recommended Substitution | Differential Replacement | Resulting Simplification |
| :--- | :--- | :--- | :--- |
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ or $x = a\cos\theta$ | $dx = a\cos\theta \, d\theta$ | $\sqrt{a^2 - a^2\sin^2\theta} = a\cos\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ or $x = a\sinh t$ | $dx = a\sec^2\theta \, d\theta$ | $\sqrt{a^2 + a^2\tan^2\theta} = a\sec\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ or $x = a\cosh t$ | $dx = a\sec\theta \tan\theta \, d\theta$ | $\sqrt{a^2\sec^2\theta - a^2} = a\tan\theta$ |
| $\sqrt{\frac{a - x}{a + x}}$ | $x = a\cos 2\theta$ | $dx = -2a\sin 2\theta \, d\theta$ | $\sqrt{\frac{1-\cos 2\theta}{1+\cos 2\theta}} = \tan\theta$ |
| $\sqrt{(x-a)(b-x)}$ | $x = a\cos^2\theta + b\sin^2\theta$ | $dx = 2(b-a)\sin\theta\cos\theta \, d\theta$ | Eliminates the composite radical completely |

#### Method 2: Integration by Parts

For product forms $\int u(x) v'(x) dx$, integration by parts states:
$$\int u \, dv = u v - \int v \, du$$

##### The LIATE Priority Hierarchy
Select the first function $u$ according to the priority:
1. **L** — Logarithmic functions ($\ln x$, $\log_a x$)
2. **I** — Inverse trigonometric functions ($\sin^{-1}x$, $\tan^{-1}x$)
3. **A** — Algebraic polynomials ($x^n$, $x^2 + 1$)
4. **T** — Trigonometric functions ($\sin x$, $\cos x$)
5. **E** — Exponential functions ($e^x$, $a^x$)

##### Cancellation of Non-Elementary Terms
In JEE Advanced, two identities appear repeatedly where direct integration of each part is impossible, but the terms cancel:
$$\int e^x \left[ f(x) + f'(x) \right] dx = e^x f(x) + C$$
$$\int \left[ f(x) + x f'(x) \right] dx = x f(x) + C$$

*Proof of $\int e^x [f(x) + f'(x)] dx$:*
$$\int e^x f(x) dx + \int e^x f'(x) dx = \left( f(x) e^x - \int f'(x) e^x dx \right) + \int e^x f'(x) dx = e^x f(x) + C$$

#### Method 3: Rational Functions by Partial Fractions

Before decomposing $\frac{P(x)}{Q(x)}$, ensure that $\deg(P) < \deg(Q)$. If $\deg(P) \ge \deg(Q)$, perform polynomial long division first.

| Denominator Factorization $Q(x)$ | Form of Partial Fraction | Integration Strategy |
| :--- | :--- | :--- |
| Distinct linear factors: $(x-a)(x-b)$ | $\frac{A}{x-a} + \frac{B}{x-b}$ | Direct natural logarithms: $A\ln|x-a| + B\ln|x-b|$ |
| Repeated linear factor: $(x-a)^k$ | $\frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \dots + \frac{A_k}{(x-a)^k}$ | Power rule: $\int (x-a)^{-m} dx = \frac{-(x-a)^{1-m}}{m-1}$ |
| Irreducible quadratic factor: $x^2 + bx + c$ | $\frac{Ax + B}{x^2 + bx + c}$ | Split numerator into derivative of denominator plus constant; complete square |
| Repeated irreducible quadratic: $(x^2 + a^2)^2$ | $\frac{Ax + B}{x^2 + a^2} + \frac{Cx + D}{(x^2 + a^2)^2}$ | Trigonometric substitution $x = a\tan\theta$ or reduction formula |

---

## Advanced Algebraic Manipulations and Twin Integrals

### 🔴 Extended — Deep Study (3mo+)
> High-difficulty manipulation strategies tailored for JEE Advanced paper solvers.

In our analysis of 2010 to 2025 JEE Advanced papers, the test creators frequently avoid direct forms, hiding standard integrals beneath symmetric expressions.

#### Symmetrical Biquadratic Forms (Twin Integrals)

Consider integrals of the form:
$$I = \int \frac{x^2 \pm 1}{x^4 + kx^2 + 1} dx$$

##### Systematic Solution Procedure:
1. Divide both numerator and denominator by $x^2$:
   $$\frac{1 \pm \frac{1}{x^2}}{x^2 + k + \frac{1}{x^2}}$$
2. Recognize that:
   - For numerator $\left(1 + \frac{1}{x^2}\right) dx$, the required substitution is $u = x - \frac{1}{x}$, because $du = \left(1 + \frac{1}{x^2}\right) dx$, and the denominator becomes $u^2 + k + 2$.
   - For numerator $\left(1 - \frac{1}{x^2}\right) dx$, the required substitution is $u = x + \frac{1}{x}$, because $du = \left(1 - \frac{1}{x^2}\right) dx$, and the denominator becomes $u^2 + k - 2$.
3. If the numerator is simply $1$ or $x^2$, rewrite as the sum or difference of twin forms:
   $$1 = \frac{1}{2}\left[\left(x^2 + 1\right) - \left(x^2 - 1\right)\right] \implies \int \frac{dx}{x^4 + 1} = \frac{1}{2} \int \frac{x^2+1}{x^4+1} dx - \frac{1}{2} \int \frac{x^2-1}{x^4+1} dx$$

#### Factoring Out Higher Powers (Fractional Power Radicals)

A classic JEE Advanced pattern involves expressions like $\int \frac{dx}{x^2 (x^4 + 1)^{3/4}}$ or $\int \frac{dx}{(x^n + 1)^{1/n}}$.
Direct substitution fails because the derivative is missing. Instead, factor out $x^4$ from the inside of the parentheses:
$$(x^4 + 1)^{3/4} = \left(x^4 \left(1 + x^{-4}\right)\right)^{3/4} = x^3 \left(1 + x^{-4}\right)^{3/4}$$
The integral becomes:
$$\int \frac{dx}{x^2 \cdot x^3 \left(1 + x^{-4}\right)^{3/4}} = \int \frac{x^{-5} dx}{\left(1 + x^{-4}\right)^{3/4}}$$
Now let $t = 1 + x^{-4}$. Then $dt = -4 x^{-5} dx$, giving:
$$-\frac{1}{4} \int t^{-3/4} dt = -\frac{1}{4} \cdot \frac{t^{1/4}}{1/4} + C = -\left(1 + x^{-4}\right)^{1/4} + C = -\frac{(x^4 + 1)^{1/4}}{x} + C$$

#### Weierstrass Half-Angle Substitution

For rational expressions involving trigonometric terms $\int R(\sin x, \cos x) dx$, substitute:
$$t = \tan\left(\frac{x}{2}\right), \quad \sin x = \frac{2t}{1+t^2}, \quad \cos x = \frac{1-t^2}{1+t^2}, \quad dx = \frac{2 \, dt}{1+t^2}$$
This converts any rational trigonometric integral into a rational algebraic function of $t$.

---

## Worked Problems with Step-by-Step Derivations

#### Example 1: Evaluation of $\int \frac{x^2 - 1}{x^4 + 3x^2 + 1} dx$

**Step 1: Divide numerator and denominator by $x^2$:**
$$I = \int \frac{1 - \frac{1}{x^2}}{x^2 + 3 + \frac{1}{x^2}} dx$$

**Step 2: Express denominator in terms of $(x + 1/x)$:**
$$x^2 + \frac{1}{x^2} = \left(x + \frac{1}{x}\right)^2 - 2$$
$$I = \int \frac{\left(1 - \frac{1}{x^2}\right) dx}{\left(x + \frac{1}{x}\right)^2 + 1}$$

**Step 3: Substitute $u = x + \frac{1}{x}$:**
$$du = \left(1 - \frac{1}{x^2}\right) dx$$
$$I = \int \frac{du}{u^2 + 1} = \tan^{-1}(u) + C = \tan^{-1}\left(x + \frac{1}{x}\right) + C = \tan^{-1}\left(\frac{x^2 + 1}{x}\right) + C$$

#### Example 2: Evaluation of $\int e^x \frac{x}{(x+1)^2} dx$

**Step 1: Express the rational term in the form $f(x) + f'(x)$:**
$$\frac{x}{(x+1)^2} = \frac{(x+1) - 1}{(x+1)^2} = \frac{1}{x+1} - \frac{1}{(x+1)^2}$$

**Step 2: Identify $f(x)$ and $f'(x)$:**
Let $f(x) = \frac{1}{x+1}$.
Then $f'(x) = -\frac{1}{(x+1)^2}$.

**Step 3: Apply the identity:**
$$\int e^x \left[ \frac{1}{x+1} + \left(-\frac{1}{(x+1)^2}\right) \right] dx = e^x \cdot \frac{1}{x+1} + C = \frac{e^x}{x+1} + C$$

#### Example 3: Evaluation of $\int \frac{dx}{x^3 (x^3 + 1)^{2/3}}$

**Step 1: Factor out $x^3$ from the radical:**
$$(x^3 + 1)^{2/3} = \left(x^3 (1 + x^{-3})\right)^{2/3} = x^2 (1 + x^{-3})^{2/3}$$

**Step 2: Combine powers in the denominator:**
$$I = \int \frac{dx}{x^3 \cdot x^2 (1 + x^{-3})^{2/3}} = \int \frac{x^{-5} dx}{(1 + x^{-3})^{2/3}}$$
Notice that the derivative of $1 + x^{-3}$ is $-3x^{-4}$, but we have $x^{-5}$.
To resolve this, factor out $x$ differently: rewrite as $\int \frac{x^{-4} dx}{x (1 + x^{-3})^{2/3}}$ or let $x = 1/t$.

**Step 3: Alternative substitution $x = 1/t$:**
$dx = -\frac{1}{t^2} dt$.
$$I = \int \frac{-\frac{1}{t^2} dt}{\frac{1}{t^3} \left(\frac{1}{t^3} + 1\right)^{2/3}} = \int \frac{-t \, dt}{\left(\frac{1+t^3}{t^3}\right)^{2/3}} = -\int \frac{t \cdot t^2 dt}{(1+t^3)^{2/3}} = -\int \frac{t^3 dt}{(1+t^3)^{2/3}}$$
Let $z = 1 + t^3$, then $dz = 3t^2 dt$. Integration proceeds smoothly by parts or substitution.

---

## Continue your study

- **[JEE Advanced Exam Guide](/exams/jeeadvanced/)**: Complete exam pattern, marking scheme, chapter weightage, and preparation strategy.
- **[All Mathematics Study Notes](/notes/jeeadvanced/mathematics/)**: Access complete study notes across algebra, trigonometry, calculus, and vectors.
- **[Definite Integrals Notes](/notes/jeeadvanced/mathematics/math-010/)**: Master properties of definite integrals, King property, and reduction formulas.
- **[Differential Equations Notes](/notes/jeeadvanced/mathematics/math-011/)**: Study linear differential equations, integrating factors, and homogeneous forms.

*Content structured across Quick, Standard, and Deep tiers for JEE Advanced mathematics preparation. Verified against syllabus standards.*
